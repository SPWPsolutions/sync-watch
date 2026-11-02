#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# monitor.sh — production health probe for the Party Sync watch-party server.
#
# Checks, in order:
#   1. HTTP /health endpoint       -> expects {"ok":true,...}
#   2. WebSocket connectivity      -> expects the server's {type:"userId"} frame
#   3. TLS certificate expiry      -> warns when < WARN_DAYS remain
#
# Exit code 0 = all green. Non-zero = at least one check failed (usable from
# cron, a uptime pinger, or `gcloud monitoring` uptime-check fallback).
#
# Usage:
#   ./monitor.sh                       # uses defaults below
#   BASE_URL=https://pwlive.fyi ./monitor.sh
#   BASE_URL=https://watch-party-xxxx-uc.a.run.app ./monitor.sh
#   WARN_DAYS=14 ./monitor.sh
#
# Env:
#   BASE_URL   Base https:// URL of the deployment. Default: https://pwlive.fyi
#   WS_URL     Override WebSocket URL. Default: BASE_URL with https->wss.
#   WARN_DAYS  Days-before-expiry that trips the SSL warning. Default: 21.
#   TIMEOUT    Per-check timeout in seconds. Default: 10.
# ---------------------------------------------------------------------------
set -u

BASE_URL="${BASE_URL:-https://pwlive.fyi}"
BASE_URL="${BASE_URL%/}"
WS_URL="${WS_URL:-$(printf '%s' "$BASE_URL" | sed 's#^https://#wss://#; s#^http://#ws://#')}"
WARN_DAYS="${WARN_DAYS:-21}"
TIMEOUT="${TIMEOUT:-10}"

HOSTPORT="${BASE_URL#https://}"; HOSTPORT="${HOSTPORT#http://}"
HOST="${HOSTPORT%%/*}"
PORT="${HOST##*:}"; [ "$PORT" = "$HOST" ] && PORT=443
HOST="${HOST%%:*}"

fail=0
green() { printf '  \033[32mOK\033[0m   %s\n' "$1"; }
warn()  { printf '  \033[33mWARN\033[0m %s\n' "$1"; }
red()   { printf '  \033[31mFAIL\033[0m %s\n' "$1"; fail=1; }

echo "Party Sync monitor — $(date -u '+%Y-%m-%dT%H:%M:%SZ')"
echo "Target: $BASE_URL  (ws: $WS_URL)"
echo

# --- 1. HTTP /health --------------------------------------------------------
echo "[1/3] HTTP /health"
body="$(curl -fsS --max-time "$TIMEOUT" "$BASE_URL/health" 2>/dev/null)"
if [ $? -ne 0 ] || [ -z "$body" ]; then
  red "/health unreachable or empty"
elif printf '%s' "$body" | grep -q '"ok"[[:space:]]*:[[:space:]]*true'; then
  green "/health -> $body"
else
  red "/health returned unexpected body: $body"
fi
echo

# --- 2. WebSocket connectivity ---------------------------------------------
# Uses the `ws` module already vendored under server/node_modules. Opens a
# socket, waits for the server's initial {type:"userId"} frame, then closes.
echo "[2/3] WebSocket"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if command -v node >/dev/null 2>&1; then
  ws_out="$(WS_URL="$WS_URL" TIMEOUT="$TIMEOUT" node -e '
    const path = require("path");
    let WebSocket;
    try { WebSocket = require(path.join(process.cwd(), "node_modules", "ws")); }
    catch { try { WebSocket = require("ws"); } catch { console.log("NO_WS_MODULE"); process.exit(3); } }
    const ws = new WebSocket(process.env.WS_URL);
    const t = setTimeout(() => { console.log("TIMEOUT"); process.exit(2); }, (+process.env.TIMEOUT||10)*1000);
    ws.on("message", (raw) => {
      try { const m = JSON.parse(raw); if (m.type === "userId") { console.log("USERID " + (m.data?.userId||"")); clearTimeout(t); ws.close(); process.exit(0); } } catch {}
    });
    ws.on("error", (e) => { console.log("ERR " + e.message); clearTimeout(t); process.exit(1); });
  ' 2>&1)"
  case "$ws_out" in
    USERID\ *) green "handshake + userId frame: ${ws_out#USERID }" ;;
    NO_WS_MODULE) warn "ws module not found (run from server/ or 'npm i'); WebSocket check skipped" ;;
    TIMEOUT) red "no userId frame within ${TIMEOUT}s" ;;
    *) red "WebSocket check failed: $ws_out" ;;
  esac
else
  warn "node not installed; WebSocket check skipped"
fi
echo

# --- 3. TLS certificate expiry ---------------------------------------------
echo "[3/3] TLS certificate"
if [ "${BASE_URL#https://}" = "$BASE_URL" ]; then
  warn "target is not https://; skipping certificate check"
elif command -v openssl >/dev/null 2>&1; then
  enddate="$(echo | openssl s_client -servername "$HOST" -connect "$HOST:$PORT" 2>/dev/null \
            | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)"
  if [ -z "$enddate" ]; then
    red "could not read certificate from $HOST:$PORT"
  else
    exp_epoch="$(date -j -f '%b %e %T %Y %Z' "$enddate" +%s 2>/dev/null || date -d "$enddate" +%s 2>/dev/null)"
    now_epoch="$(date +%s)"
    if [ -z "$exp_epoch" ]; then
      warn "cert expires $enddate (could not compute days remaining)"
    else
      days=$(( (exp_epoch - now_epoch) / 86400 ))
      if [ "$days" -lt 0 ]; then red "certificate EXPIRED ($enddate)"
      elif [ "$days" -lt "$WARN_DAYS" ]; then warn "certificate expires in ${days}d ($enddate)"
      else green "certificate valid for ${days}d ($enddate)"
      fi
    fi
  fi
else
  warn "openssl not installed; certificate check skipped"
fi

echo
if [ "$fail" -eq 0 ]; then echo "RESULT: all checks passed"; else echo "RESULT: one or more checks FAILED"; fi
exit "$fail"
