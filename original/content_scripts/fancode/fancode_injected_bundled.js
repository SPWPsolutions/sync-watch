/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

/**
 * FanCode page-world bridge around FanCode's own player object (the `player` prop passed to the
 * video controls — a Shaka-based wrapper exposing play / pause / seekTo / currentTime / ...).
 *
 * - Finds the player through React fiber props (progress bar, or walking up from the <video>).
 * - Monkey-patches play / pause / seekTo on the instance so user actions from FanCode's own UI are
 *   reported immediately as "PlayerEvent"s. Calls issued by Teleparty are not reported.
 * - Answers "poll" requests with the player's playback state / position ("UpdateState").
 */
;
(function initializeTelepartyFancode() {
    if (window.__tpFancodeInjectLoaded) {
        return;
    }
    window.__tpFancodeInjectLoaded = true;
    window.teleparty = window.teleparty || {};
    window.teleparty.injectScriptLoaded = true;
    const TP_PATCHED = "__tpFancodePatched";
    const PLAYER_REFRESH_MS = 500;
    const FIBER_WALK_DEPTH = 40;
    const PLAYER_ANCHOR_SELECTORS = [
        '[data-testid="video-player-progress-bar"]',
        "video#fc-video-player",
        "video.vjs-tech",
        'video[class*="StyledVideo"]',
        '[data-vjs-player="true"]',
    ];
    /** @type {any} */
    let player = null;
    /** > 0 while Teleparty itself is driving the player, so patched methods don't report it as a user action. */
    let tpCallDepth = 0;
    /** Milliseconds per player time unit — detected from player.currentTime() vs the <video>. */
    let msPerPlayerUnit = 1000;
    let playerState = {
        playbackState: "paused",
        currentTime: null,
        duration: 0,
        adPlaying: false,
        isLive: false,
        hasPlayer: false,
        updatedAt: 0,
    };
    function safeCall(fn, fallback) {
        try {
            return fn();
        }
        catch (_a) {
            return fallback;
        }
    }
    // --- Player discovery ---
    function getReactFiber(el) {
        if (!el)
            return null;
        const key = Object.keys(el).find((k) => k.startsWith("__reactFiber") || k.startsWith("__reactInternalInstance"));
        return key ? el[key] : null;
    }
    function isFancodePlayer(candidate) {
        return (!!candidate &&
            typeof candidate.play === "function" &&
            typeof candidate.pause === "function" &&
            typeof candidate.seekTo === "function" &&
            typeof candidate.currentTime === "function");
    }
    function isUsablePlayer(candidate) {
        if (!isFancodePlayer(candidate))
            return false;
        if (safeCall(() => { var _a; return (_a = candidate.isDisposed) === null || _a === void 0 ? void 0 : _a.call(candidate); }, false) === true)
            return false;
        const node = candidate.videoNode;
        return !node || node.isConnected;
    }
    function playerFromFiber(fiber) {
        var _a, _b, _c;
        let node = fiber;
        for (let depth = 0; node && depth < FIBER_WALK_DEPTH; depth++) {
            const own = (_a = node.memoizedProps) === null || _a === void 0 ? void 0 : _a.player;
            if (isUsablePlayer(own))
                return own;
            const child = (_c = (_b = node.child) === null || _b === void 0 ? void 0 : _b.memoizedProps) === null || _c === void 0 ? void 0 : _c.player;
            if (isUsablePlayer(child))
                return child;
            node = node.return;
        }
        return null;
    }
    function findPlayer() {
        if (isUsablePlayer(player)) {
            return player;
        }
        for (const selector of PLAYER_ANCHOR_SELECTORS) {
            for (const el of document.querySelectorAll(selector)) {
                const found = playerFromFiber(getReactFiber(el));
                if (found)
                    return found;
            }
        }
        return null;
    }
    function getVideoElement() {
        return ((player === null || player === void 0 ? void 0 : player.videoNode) ||
            document.querySelector("video.vjs-tech") ||
            document.querySelector('video[class*="StyledVideo"]') ||
            null);
    }
    // --- State ---
    function detectTimeUnits(p, video) {
        const playerTime = safeCall(() => p.currentTime(), NaN);
        const videoTime = video === null || video === void 0 ? void 0 : video.currentTime;
        if (!Number.isFinite(playerTime) || !Number.isFinite(videoTime) || videoTime < 1) {
            return;
        }
        if (Math.abs(playerTime - videoTime) < 2) {
            msPerPlayerUnit = 1000;
        }
        else if (Math.abs(playerTime / 1000 - videoTime) < 2) {
            msPerPlayerUnit = 1;
        }
    }
    function readPlaybackState(p, video) {
        const paused = p ? safeCall(() => p.paused(), video === null || video === void 0 ? void 0 : video.paused) : video === null || video === void 0 ? void 0 : video.paused;
        if (paused !== false) {
            return "paused";
        }
        const seeking = p ? safeCall(() => p.seeking(), video === null || video === void 0 ? void 0 : video.seeking) : video === null || video === void 0 ? void 0 : video.seeking;
        if (seeking || (p === null || p === void 0 ? void 0 : p.isSourceLoading) || (video && video.readyState < video.HAVE_FUTURE_DATA)) {
            return "loading";
        }
        return "playing";
    }
    function poll() {
        var _a;
        const p = player;
        const video = getVideoElement();
        if (p) {
            detectTimeUnits(p, video);
        }
        let currentTime = null;
        const rawTime = p ? safeCall(() => p.currentTime(), NaN) : NaN;
        if (Number.isFinite(rawTime)) {
            currentTime = Math.round(rawTime * msPerPlayerUnit);
        }
        else if (video && Number.isFinite(video.currentTime)) {
            currentTime = Math.round(video.currentTime * 1000);
        }
        let duration = playerState.duration;
        const rawDuration = p ? safeCall(() => p.duration(), NaN) * msPerPlayerUnit : ((_a = video === null || video === void 0 ? void 0 : video.duration) !== null && _a !== void 0 ? _a : NaN) * 1000;
        if (Number.isFinite(rawDuration) && rawDuration > 0) {
            duration = Math.round(rawDuration);
        }
        playerState = {
            playbackState: readPlaybackState(p, video),
            currentTime,
            duration,
            adPlaying: !!(p === null || p === void 0 ? void 0 : p.isAdPlaying),
            isLive: p ? safeCall(() => p.isLive(), false) === true : false,
            hasPlayer: !!p,
            updatedAt: Date.now(),
        };
        return playerState;
    }
    function emitFromNode(detail) {
        window.dispatchEvent(new CustomEvent("FromNode", { detail }));
    }
    function emitUpdateState(requestId) {
        emitFromNode(Object.assign(Object.assign({ type: "UpdateState" }, playerState), { requestId }));
    }
    function emitPlayerEvent(action, extra) {
        emitFromNode(Object.assign({ type: "PlayerEvent", action, playbackState: playerState.playbackState, currentTime: playerState.currentTime, adPlaying: playerState.adPlaying }, (extra || {})));
    }
    // --- Monkey patch play / pause / seekTo ---
    function onUserPlay() {
        playerState = Object.assign(Object.assign({}, playerState), { playbackState: "playing" });
        emitPlayerEvent("play");
    }
    function onUserPause() {
        playerState = Object.assign(Object.assign({}, playerState), { playbackState: "paused" });
        emitPlayerEvent("pause");
    }
    function onUserSeek(time) {
        const ms = Math.round(Number(time) * msPerPlayerUnit);
        if (!Number.isFinite(ms) || ms < 0) {
            return;
        }
        playerState = Object.assign(Object.assign({}, playerState), { currentTime: ms });
        emitPlayerEvent("seek", { seekTargetMs: ms });
    }
    function patchControlMethod(p, name, onUserCall) {
        if (typeof p[name] !== "function" || p[name][TP_PATCHED]) {
            return;
        }
        const original = p[name];
        const wrapped = function (...args) {
            // FanCode's app also calls play()/pause() itself (autoplay, ad transitions). Only calls made
            // while the page has transient user activation are user actions.
            // Feature-detected: browsers without the User Activation API treat every call as a user action.
            // eslint-disable-next-line compat/compat
            const userInitiated = navigator.userActivation ? navigator.userActivation.isActive : true;
            if (tpCallDepth === 0 && userInitiated) {
                try {
                    onUserCall(...args);
                }
                catch (_a) {
                    // never break the player because of our hook
                }
            }
            return original.apply(this, args);
        };
        wrapped[TP_PATCHED] = true;
        try {
            Object.defineProperty(p, name, { configurable: true, writable: true, value: wrapped });
        }
        catch (_a) {
            p[name] = wrapped;
        }
    }
    function attachPlayer(p) {
        if (p === player) {
            return;
        }
        player = p;
        if (!p) {
            return;
        }
        patchControlMethod(p, "play", onUserPlay);
        patchControlMethod(p, "pause", onUserPause);
        patchControlMethod(p, "seekTo", onUserSeek);
        poll();
    }
    function refreshPlayer() {
        attachPlayer(findPlayer());
    }
    // --- Commands from the content script ---
    function runAsTeleparty(fn) {
        tpCallDepth += 1;
        try {
            return fn();
        }
        finally {
            tpCallDepth -= 1;
        }
    }
    function doPlay() {
        refreshPlayer();
        return runAsTeleparty(() => {
            if (player) {
                const result = player.play();
                if (result && typeof result.catch === "function") {
                    result.catch(() => undefined);
                }
                return true;
            }
            const video = getVideoElement();
            if (video) {
                video.play().catch(() => undefined);
                return true;
            }
            return false;
        });
    }
    function doPause() {
        refreshPlayer();
        return runAsTeleparty(() => {
            if (player) {
                player.pause();
                return true;
            }
            const video = getVideoElement();
            if (video) {
                video.pause();
                return true;
            }
            return false;
        });
    }
    function doSeek(positionMs) {
        const ms = Number(positionMs);
        if (!Number.isFinite(ms) || ms < 0) {
            return { ok: false, reason: "invalid_position" };
        }
        refreshPlayer();
        poll();
        return runAsTeleparty(() => {
            if (player) {
                player.seekTo(ms / msPerPlayerUnit);
                return { ok: true, reason: null };
            }
            const video = getVideoElement();
            if (video) {
                video.currentTime = ms / 1000;
                return { ok: true, reason: null };
            }
            return { ok: false, reason: "no_player" };
        });
    }
    window.addEventListener("FancodeVideoMessage", function (evt) {
        const detail = evt.detail || {};
        switch (detail.type) {
            case "poll": {
                refreshPlayer();
                poll();
                emitUpdateState(detail.requestId);
                break;
            }
            case "play": {
                const ok = doPlay();
                emitFromNode({ type: "ActionResult", action: "play", ok, requestId: detail.requestId });
                break;
            }
            case "pause": {
                const ok = doPause();
                emitFromNode({ type: "ActionResult", action: "pause", ok, requestId: detail.requestId });
                break;
            }
            case "seek": {
                const result = doSeek(detail.positionMs);
                emitFromNode({
                    type: "ActionResult",
                    action: "seek",
                    ok: result.ok,
                    reason: result.reason,
                    requestId: detail.requestId,
                });
                break;
            }
        }
    });
    refreshPlayer();
    setInterval(refreshPlayer, PLAYER_REFRESH_MS);
})();

/******/ })()
;