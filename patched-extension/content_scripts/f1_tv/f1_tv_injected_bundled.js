/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;
(() => {
    if (window.__f1TvPlayerBridgeInstalled)
        return;
    window.__f1TvPlayerBridgeInstalled = true;
    window.injectScriptLoaded = true;
    if (window.teleparty) {
        window.teleparty.injectScriptLoaded = true;
    }
    const TP_PATCHED = "__tpF1TvPatched";
    const PLAYER_CONTAINER_SELECTOR = "div.player-container.main.shown, div.player-container.slave.shown, div.player-container.main, div.player-container.slave, .player-container.main, .player-container.slave";
    const VIDEO_SELECTOR = "#bitmovinplayer-video-main-embeddedPlayer, #bitmovinplayer-video-slave-embeddedPlayer, #main-embeddedPlayer video, #slave-embeddedPlayer video, .bitmovinplayer-container video, #video-grid-root video, video";
    /** @type {"tiledmedia" | "bitmovin" | "react" | "none"} */
    let playerBackend = "none";
    let activePlayer = null;
    let suppressPauseEvent = false;
    let suppressPlayEvent = false;
    // Hold the seek target until getCurrentTime catches up (same idea as Amazon).
    let seekSettleTargetMs = null;
    let seekSettling = false;
    let seekSettleSafetyUntil = 0;
    const SEEK_SETTLE_SAFETY_MS = 10000;
    let playerState = {
        playbackState: "paused",
        currentTime: 0,
        duration: 0,
        updatedAt: Date.now(),
        source: "none",
    };
    function beginSeekSettle(targetMs) {
        if (!Number.isFinite(targetMs))
            return;
        seekSettleTargetMs = Math.floor(targetMs);
        seekSettling = true;
        seekSettleSafetyUntil = Date.now() + SEEK_SETTLE_SAFETY_MS;
    }
    function endSeekSettle() {
        seekSettling = false;
        seekSettleTargetMs = null;
        seekSettleSafetyUntil = 0;
    }
    function resolveSeekPosition(positionMs) {
        if (!seekSettling || seekSettleTargetMs == null) {
            return Number.isFinite(positionMs) ? positionMs : playerState.currentTime;
        }
        const closeEnough = Number.isFinite(positionMs) && Math.abs(positionMs - seekSettleTargetMs) < 1500;
        if (closeEnough || Date.now() >= seekSettleSafetyUntil) {
            endSeekSettle();
            return Number.isFinite(positionMs) ? positionMs : seekSettleTargetMs;
        }
        return seekSettleTargetMs;
    }
    function getTiledmediaPlayer() {
        var _a, _b, _c, _d, _e;
        try {
            return (_e = (_d = (_c = (_b = (_a = window.Tiledmedia) === null || _a === void 0 ? void 0 : _a.mainPostDispatcher) === null || _b === void 0 ? void 0 : _b.registeredPlayers) === null || _c === void 0 ? void 0 : _c.get) === null || _d === void 0 ? void 0 : _d.call(_c, 0)) !== null && _e !== void 0 ? _e : null;
        }
        catch (_error) {
            return null;
        }
    }
    /** Latest tracked Bitmovin MediaPlayer instance from the webpack hook. */
    function getBitmovinPlayer() {
        try {
            const players = window.__tpF1MediaPlayers;
            if (!Array.isArray(players) || players.length === 0)
                return null;
            for (let i = players.length - 1; i >= 0; i--) {
                const player = players[i];
                if (player &&
                    typeof player.play === "function" &&
                    typeof player.pause === "function" &&
                    typeof player.seek === "function" &&
                    typeof player.getCurrentTime === "function") {
                    return player;
                }
            }
        }
        catch (_error) {
            // ignore
        }
        return null;
    }
    function getReactFiber(element) {
        if (!element)
            return null;
        const fiberKey = Object.keys(element).find((key) => key.startsWith("__reactFiber") || key.startsWith("__reactInternalInstance"));
        return fiberKey ? element[fiberKey] : null;
    }
    function getReactPlayer() {
        const containers = document.querySelectorAll(PLAYER_CONTAINER_SELECTOR);
        for (let i = 0; i < containers.length; i++) {
            let fiber = getReactFiber(containers[i]);
            while (fiber) {
                const stateNode = fiber.stateNode;
                if (stateNode &&
                    typeof stateNode.play === "function" &&
                    typeof stateNode.getCurrentTime === "function") {
                    return stateNode;
                }
                fiber = fiber.return;
            }
        }
        return null;
    }
    function getVideoElement() {
        if (activePlayer && playerBackend === "react" && typeof activePlayer.getVideoContainer === "function") {
            try {
                const container = activePlayer.getVideoContainer();
                const video = container && container.querySelector ? container.querySelector("video") : null;
                if (video)
                    return video;
            }
            catch (_error) {
                // Fall through to selector lookup.
            }
        }
        return document.querySelector(VIDEO_SELECTOR);
    }
    function getTiledmediaPositionMs(player) {
        var _a, _b, _c;
        try {
            const position = (_c = (_b = (_a = player === null || player === void 0 ? void 0 : player._associatedViews) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.currentContentTime) === null || _c === void 0 ? void 0 : _c.currentPosition;
            if (Number.isFinite(position)) {
                return Math.floor(position);
            }
        }
        catch (_error) {
            // ignore
        }
        return null;
    }
    function getCurrentTimePositionMs(player) {
        try {
            if (player && typeof player.getCurrentTime === "function") {
                const seconds = player.getCurrentTime();
                if (Number.isFinite(seconds)) {
                    return Math.floor(seconds * 1000);
                }
            }
        }
        catch (_error) {
            // ignore
        }
        return null;
    }
    function getReactDurationMs(player) {
        try {
            if (player && typeof player.getDuration === "function") {
                const seconds = player.getDuration();
                if (Number.isFinite(seconds) && seconds > 0) {
                    return Math.floor(seconds * 1000);
                }
            }
        }
        catch (_error) {
            // ignore
        }
        return null;
    }
    function getReactPlaybackState(player) {
        try {
            if (player && typeof player.isPaused === "function") {
                return player.isPaused() ? "paused" : "playing";
            }
            if (player && typeof player.isPlaying === "function") {
                return player.isPlaying() ? "playing" : "paused";
            }
        }
        catch (_error) {
            // ignore
        }
        return null;
    }
    /** Tiledmedia exposes play/pause on `player.playerState` (e.g. "playing" / "paused"). */
    function getTiledmediaPlaybackState(player) {
        try {
            const raw = player === null || player === void 0 ? void 0 : player.playerState;
            if (typeof raw === "string") {
                const normalized = raw.toLowerCase();
                if (normalized === "playing" || normalized === "play")
                    return "playing";
                if (normalized === "paused" || normalized === "pause")
                    return "paused";
            }
        }
        catch (_error) {
            // ignore
        }
        return null;
    }
    function refreshContentTime() {
        refreshActivePlayer();
        let position = null;
        let duration = playerState.duration;
        let source = playerBackend;
        let playbackState = playerState.playbackState;
        const video = getVideoElement();
        if (playerBackend === "tiledmedia") {
            position = getTiledmediaPositionMs(activePlayer);
            const tiledPlayback = getTiledmediaPlaybackState(activePlayer);
            if (tiledPlayback) {
                playbackState = tiledPlayback;
            }
        }
        else if (playerBackend === "bitmovin") {
            position = getCurrentTimePositionMs(activePlayer);
            const bitmovinDuration = getReactDurationMs(activePlayer);
            if (Number.isFinite(bitmovinDuration)) {
                duration = bitmovinDuration;
            }
            const bitmovinPlayback = getReactPlaybackState(activePlayer);
            if (bitmovinPlayback) {
                playbackState = bitmovinPlayback;
            }
        }
        else if (playerBackend === "react") {
            position = getCurrentTimePositionMs(activePlayer);
            const reactDuration = getReactDurationMs(activePlayer);
            if (Number.isFinite(reactDuration)) {
                duration = reactDuration;
            }
            const reactPlayback = getReactPlaybackState(activePlayer);
            if (reactPlayback) {
                playbackState = reactPlayback;
            }
            else if (video) {
                playbackState = video.paused ? "paused" : "playing";
            }
        }
        else if (video) {
            playbackState = video.paused ? "paused" : "playing";
        }
        if (!Number.isFinite(position) && video) {
            if (Number.isFinite(video.currentTime)) {
                position = Math.floor(video.currentTime * 1000);
                if (playerBackend !== "tiledmedia" && playerBackend !== "bitmovin") {
                    source = "video";
                }
            }
        }
        if (video && Number.isFinite(video.duration) && video.duration > 0) {
            duration = Math.floor(video.duration * 1000);
        }
        // Video play/pause only when no patched player backend owns sync.
        if (playerBackend !== "tiledmedia" && playerBackend !== "bitmovin" && video) {
            playbackState = video.paused ? "paused" : "playing";
        }
        const resolvedPosition = resolveSeekPosition(position);
        playerState = Object.assign(Object.assign(Object.assign(Object.assign({}, playerState), { playbackState }), (Number.isFinite(resolvedPosition) ? { currentTime: resolvedPosition } : {})), { duration, updatedAt: Date.now(), source: source === "none" ? playerState.source : source });
        return playerState;
    }
    function buildSeekConfig(targetMs) {
        var _a;
        const TimingConfig = (_a = window.Tiledmedia) === null || _a === void 0 ? void 0 : _a.TimingConfig;
        if (typeof TimingConfig !== "function") {
            return null;
        }
        // Tiledmedia's TimingConfig ignores constructor options — assign after new.
        const config = new TimingConfig();
        config.target = Math.max(0, Math.floor(Number(targetMs) || 0));
        config.timingType = 1; // CONTENT_TIME
        config.targetPositionStrategy = 1;
        return config;
    }
    function parseSeekTargetMs(arg) {
        if (arg == null)
            return null;
        if (typeof arg === "number" && Number.isFinite(arg)) {
            return Math.floor(arg);
        }
        if (typeof arg === "object" && Number.isFinite(Number(arg.target))) {
            return Number(arg.target);
        }
        return null;
    }
    function emitPlayerEvent(action, extra) {
        window.dispatchEvent(new CustomEvent("FromNode", {
            detail: Object.assign({ type: "PlayerEvent", action, playbackState: playerState.playbackState, currentTime: playerState.currentTime, duration: playerState.duration, updatedAt: playerState.updatedAt, source: playerState.source }, (extra || {})),
        }));
    }
    function emitUpdateState() {
        refreshContentTime();
        window.dispatchEvent(new CustomEvent("FromNode", {
            detail: {
                type: "UpdateState",
                playbackState: playerState.playbackState,
                currentTime: playerState.currentTime,
                duration: playerState.duration,
                updatedAt: playerState.updatedAt,
                source: playerState.source,
                playerBackend,
            },
        }));
    }
    function patchControlMethod(obj, name, backend) {
        if (!obj || typeof obj[name] !== "function" || obj[name][TP_PATCHED]) {
            return false;
        }
        const original = obj[name];
        const wrapped = function (...args) {
            if (backend === "bitmovin") {
                console.log("[TP F1TV] bitmovin", name, {
                    args,
                    arg0: args[0],
                    this: this,
                    stack: new Error().stack,
                });
                // Bitmovin scrubber pauses/plays around seek with issuer "ui-seek" — not real play/pause.
                if ((name === "pause" || name === "play") && args[0] === "ui-seek") {
                    return original.apply(this, args);
                }
            }
            else {
                console.log("[TP F1TV]", backend, name, args[0], args);
            }
            if (name === "unpause" || name === "play") {
                playerState = Object.assign(Object.assign({}, playerState), { playbackState: "playing", updatedAt: Date.now(), source: backend });
                // Don't refreshContentTime here — getCurrentTime lags after seek.
                if (!suppressPlayEvent) {
                    emitPlayerEvent("play");
                }
            }
            else if (name === "pause") {
                playerState = Object.assign(Object.assign({}, playerState), { playbackState: "paused", updatedAt: Date.now(), source: backend });
                if (!suppressPauseEvent) {
                    emitPlayerEvent("pause");
                }
            }
            else if (name === "seek") {
                let seekMs = null;
                if (backend === "tiledmedia") {
                    seekMs = parseSeekTargetMs(args[0]);
                }
                else if (typeof args[0] === "number" && Number.isFinite(args[0])) {
                    // Bitmovin / React seek is in seconds.
                    seekMs = Math.floor(args[0] * 1000);
                }
                if (Number.isFinite(seekMs)) {
                    beginSeekSettle(seekMs);
                    playerState = Object.assign(Object.assign({}, playerState), { currentTime: seekMs, updatedAt: Date.now(), source: backend });
                }
                else {
                    playerState = Object.assign(Object.assign({}, playerState), { updatedAt: Date.now(), source: backend });
                }
                emitPlayerEvent("seek", { seekTargetMs: Number.isFinite(seekMs) ? seekMs : null });
            }
            return original.apply(this, args);
        };
        wrapped[TP_PATCHED] = true;
        try {
            Object.defineProperty(obj, name, {
                configurable: true,
                writable: true,
                value: wrapped,
            });
        }
        catch (_a) {
            obj[name] = wrapped;
        }
        return true;
    }
    /**
     * Player buffering via `_playerListenerCache.lastStateChangedEvent.state`:
     * - "seeking" / "loading" while buffering
     * - "playing" / "paused" when not buffering
     * Tiledmedia: primary buffering signal. Bitmovin: backup (HTML5 video events are primary).
     * Play/pause/seek broadcasts still come from method patches.
     */
    let lastPlayerListenerState = null;
    let playerListenerBuffering = false;
    function onPlayerListenerState(state, backend) {
        if (typeof state !== "string" || state === lastPlayerListenerState)
            return;
        const prev = lastPlayerListenerState;
        lastPlayerListenerState = state;
        console.log("[TP F1TV] lastStateChangedEvent.state", { backend, prev, state });
        if (state === "seeking" || state === "loading") {
            if (!playerListenerBuffering) {
                playerListenerBuffering = true;
                emitPlayerEvent("bufferingStart");
            }
            return;
        }
        if ((state === "playing" || state === "paused") && playerListenerBuffering) {
            playerListenerBuffering = false;
            emitPlayerEvent("bufferingEnd");
        }
    }
    function watchStateOnEventObject(eventObj, backend) {
        if (!eventObj || typeof eventObj !== "object")
            return;
        if (eventObj.__tpF1StateWatched) {
            onPlayerListenerState(eventObj.state, backend);
            return;
        }
        let stateValue = eventObj.state;
        try {
            Object.defineProperty(eventObj, "state", {
                configurable: true,
                enumerable: true,
                get() {
                    return stateValue;
                },
                set(next) {
                    stateValue = next;
                    onPlayerListenerState(next, backend);
                },
            });
            eventObj.__tpF1StateWatched = true;
        }
        catch (_error) {
            // Fall back to reading whatever was assigned.
        }
        onPlayerListenerState(stateValue, backend);
    }
    function hookPlayerListenerCache(player, backend) {
        if (!player || player.__tpF1ListenerCacheHooked)
            return false;
        const installOnCache = (cache) => {
            if (!cache || typeof cache !== "object" || cache.__tpF1LastStateHooked)
                return;
            let currentEvent = cache.lastStateChangedEvent;
            try {
                Object.defineProperty(cache, "lastStateChangedEvent", {
                    configurable: true,
                    enumerable: true,
                    get() {
                        return currentEvent;
                    },
                    set(next) {
                        currentEvent = next;
                        watchStateOnEventObject(next, backend);
                    },
                });
                cache.__tpF1LastStateHooked = true;
                console.log("[TP F1TV] Hooked _playerListenerCache.lastStateChangedEvent", backend);
            }
            catch (_error) {
                // ignore
            }
            if (currentEvent) {
                watchStateOnEventObject(currentEvent, backend);
            }
        };
        // Cache may already exist, or be assigned later.
        let cache = player._playerListenerCache;
        if (cache) {
            installOnCache(cache);
        }
        try {
            Object.defineProperty(player, "_playerListenerCache", {
                configurable: true,
                enumerable: true,
                get() {
                    return cache;
                },
                set(next) {
                    cache = next;
                    installOnCache(next);
                },
            });
            player.__tpF1ListenerCacheHooked = true;
        }
        catch (_error) {
            if (cache) {
                player.__tpF1ListenerCacheHooked = true;
            }
        }
        return !!player.__tpF1ListenerCacheHooked;
    }
    function setActivePlayer(player, backend) {
        activePlayer = player;
        playerBackend = backend;
        window.__tpF1TvActivePlayer = player;
        window.__tpF1TvPlayerBackend = backend;
        // Debug: current Bitmovin / Tiledmedia (or React) player instance
        window.__tpPlayer = player;
        if (!player)
            return false;
        hookPlayerListenerCache(player, backend);
        if (backend === "tiledmedia") {
            const patched = [];
            for (const name of ["pause", "unpause", "seek"]) {
                if (patchControlMethod(player, name, backend))
                    patched.push(name);
            }
            if (patched.length > 0) {
                console.log("[TP F1TV] Patched tiledmedia methods", patched);
            }
        }
        else if (backend === "bitmovin") {
            const patched = [];
            for (const name of ["play", "pause", "seek"]) {
                if (patchControlMethod(player, name, backend))
                    patched.push(name);
            }
            // Also patch any other tracked instances so multi-player UI stays wired.
            const players = window.__tpF1MediaPlayers;
            if (Array.isArray(players)) {
                for (const p of players) {
                    if (!p || p === player)
                        continue;
                    for (const name of ["play", "pause", "seek"]) {
                        patchControlMethod(p, name, backend);
                    }
                    hookPlayerListenerCache(p, backend);
                }
            }
            if (patched.length > 0) {
                console.log("[TP F1TV] Patched bitmovin methods", patched, player);
            }
        }
        else if (backend === "react") {
            console.log("[TP F1TV] Using React player (video events for detection)");
        }
        return true;
    }
    function refreshActivePlayer() {
        const tiled = getTiledmediaPlayer();
        if (tiled) {
            return setActivePlayer(tiled, "tiledmedia");
        }
        const bitmovin = getBitmovinPlayer();
        if (bitmovin) {
            return setActivePlayer(bitmovin, "bitmovin");
        }
        const react = getReactPlayer();
        if (react) {
            if (react !== activePlayer || playerBackend !== "react") {
                return setActivePlayer(react, "react");
            }
            activePlayer = react;
            playerBackend = "react";
            window.__tpF1TvActivePlayer = react;
            window.__tpF1TvPlayerBackend = "react";
            window.__tpPlayer = react;
            return true;
        }
        activePlayer = null;
        playerBackend = "none";
        window.__tpF1TvActivePlayer = null;
        window.__tpF1TvPlayerBackend = "none";
        window.__tpPlayer = null;
        return false;
    }
    function doUnpause() {
        refreshActivePlayer();
        if (playerBackend === "tiledmedia" && typeof (activePlayer === null || activePlayer === void 0 ? void 0 : activePlayer.unpause) === "function") {
            activePlayer.unpause();
            return true;
        }
        if ((playerBackend === "bitmovin" || playerBackend === "react") &&
            typeof (activePlayer === null || activePlayer === void 0 ? void 0 : activePlayer.play) === "function") {
            void activePlayer.play();
            if (playerBackend === "react") {
                playerState = Object.assign(Object.assign({}, playerState), { playbackState: "playing", updatedAt: Date.now(), source: "react" });
            }
            return true;
        }
        const video = getVideoElement();
        if (video) {
            void video.play();
            playerState = Object.assign(Object.assign({}, playerState), { playbackState: "playing", updatedAt: Date.now(), source: "video" });
            return true;
        }
        return false;
    }
    function doPause() {
        refreshActivePlayer();
        if (activePlayer && typeof activePlayer.pause === "function") {
            activePlayer.pause();
            if (playerBackend === "react") {
                playerState = Object.assign(Object.assign({}, playerState), { playbackState: "paused", updatedAt: Date.now(), source: "react" });
            }
            return true;
        }
        const video = getVideoElement();
        if (video) {
            video.pause();
            playerState = Object.assign(Object.assign({}, playerState), { playbackState: "paused", updatedAt: Date.now(), source: "video" });
            return true;
        }
        return false;
    }
    function doSeek(positionMs) {
        const ms = Number(positionMs);
        if (!Number.isFinite(ms) || ms < 0) {
            return false;
        }
        refreshActivePlayer();
        // Prefer live Tiledmedia playerState so keepPaused/keepPlaying aren't stuck on the default.
        if (playerBackend === "tiledmedia") {
            const tiledPlayback = getTiledmediaPlaybackState(activePlayer);
            if (tiledPlayback) {
                playerState = Object.assign(Object.assign({}, playerState), { playbackState: tiledPlayback, updatedAt: Date.now(), source: "tiledmedia" });
            }
        }
        const keepPaused = playerState.playbackState === "paused";
        const keepPlaying = playerState.playbackState === "playing";
        beginSeekSettle(ms);
        playerState = Object.assign(Object.assign({}, playerState), { currentTime: ms, updatedAt: Date.now(), source: playerBackend === "none" ? playerState.source : playerBackend });
        let ok = false;
        if (playerBackend === "tiledmedia" && typeof (activePlayer === null || activePlayer === void 0 ? void 0 : activePlayer.seek) === "function") {
            const seekConfig = buildSeekConfig(ms);
            console.log("[TP F1TV] doSeek tiledmedia", seekConfig);
            if (seekConfig) {
                activePlayer.seek(seekConfig);
                ok = true;
            }
        }
        else if (playerBackend === "bitmovin" || playerBackend === "react") {
            const timeSeconds = ms / 1000;
            console.log("[TP F1TV] doSeek", playerBackend, timeSeconds, "targetMs", ms);
            if (typeof (activePlayer === null || activePlayer === void 0 ? void 0 : activePlayer.seek) === "function") {
                // Pass the seek target explicitly — never derive from getCurrentTime.
                void activePlayer.seek(timeSeconds);
                ok = true;
            }
            else if (typeof (activePlayer === null || activePlayer === void 0 ? void 0 : activePlayer.setCurrentTime) === "function") {
                activePlayer.setCurrentTime(timeSeconds);
                ok = true;
            }
        }
        if (!ok) {
            const video = getVideoElement();
            if (video) {
                video.currentTime = ms / 1000;
                ok = true;
            }
        }
        if (ok && keepPaused) {
            suppressPauseEvent = true;
            try {
                doPause();
            }
            finally {
                suppressPauseEvent = false;
            }
        }
        else if (ok && keepPlaying) {
            suppressPlayEvent = true;
            try {
                doUnpause();
            }
            finally {
                suppressPlayEvent = false;
            }
        }
        return ok;
    }
    // Keep trying until a player mounts (and re-patch if the instance/backend changes).
    refreshActivePlayer();
    setInterval(() => {
        refreshActivePlayer();
    }, 500);
    window.addEventListener("F1TVVideoMessage", function (evt) {
        var _a;
        const type = (_a = evt.detail) === null || _a === void 0 ? void 0 : _a.type;
        if (type === "play") {
            const ok = doUnpause();
            window.dispatchEvent(new CustomEvent("FromNode", {
                detail: { type: "ActionResult", action: "play", ok, updatedAt: Date.now() },
            }));
        }
        else if (type === "pause") {
            const ok = doPause();
            window.dispatchEvent(new CustomEvent("FromNode", {
                detail: { type: "ActionResult", action: "pause", ok, updatedAt: Date.now() },
            }));
        }
        else if (type === "seek") {
            const ok = doSeek(evt.detail.positionMs);
            window.dispatchEvent(new CustomEvent("FromNode", {
                detail: {
                    type: "ActionResult",
                    action: "seek",
                    ok,
                    positionMs: Number(evt.detail.positionMs),
                    updatedAt: Date.now(),
                },
            }));
        }
        else if (type === "getState") {
            emitUpdateState();
        }
        else if (type === "refreshPlayer") {
            refreshActivePlayer();
            emitUpdateState();
        }
    });
    // --- Fullscreen interception (block Bitmovin FS while chat open; we drive real FS) ---
    const FULLSCREEN_REQUEST_TYPE = "F1_TV_FULLSCREEN_REQUEST";
    const ENTER_FULLSCREEN_TYPE = "F1_TV_ENTER_FULLSCREEN";
    const EXIT_FULLSCREEN_TYPE = "F1_TV_EXIT_FULLSCREEN";
    const PLAYER_FS_ROOT_SELECTOR = "#video-grid-root, .video-grid, .embedded-player-container, .bitmovinplayer-container, #main-embeddedPlayer, #slave-embeddedPlayer";
    function isPlayerFullscreenTarget(el) {
        if (!el || typeof el.closest !== "function")
            return false;
        return !!el.closest(PLAYER_FS_ROOT_SELECTOR);
    }
    function isTelepartyChatOpen() {
        return !!document.querySelector("#tp-layout-wrapper.tp-f1-chat-open");
    }
    function isOurVideoGridFullscreen() {
        const fs = document.fullscreenElement || document.webkitFullscreenElement || null;
        const grid = document.querySelector(".video-grid");
        return !!(fs && grid && (fs === grid || grid.contains(fs)));
    }
    function relayFullscreenRequest() {
        window.postMessage({ type: FULLSCREEN_REQUEST_TYPE, source: "f1_tv_injected" }, "*");
    }
    const originalRequestFullscreen = Element.prototype.requestFullscreen;
    const originalWebkitRequestFullscreen = Element.prototype.webkitRequestFullscreen;
    const originalWebkitRequestFullScreen = Element.prototype.webkitRequestFullScreen;
    const originalMozRequestFullScreen = Element.prototype.mozRequestFullScreen;
    const originalMsRequestFullscreen = Element.prototype.msRequestFullscreen;
    const originalExitFullscreen = Document.prototype.exitFullscreen;
    const originalWebkitExitFullscreen = Document.prototype.webkitExitFullscreen;
    function callOriginalRequestFullscreen(el) {
        const req = originalRequestFullscreen ||
            originalWebkitRequestFullscreen ||
            originalWebkitRequestFullScreen ||
            originalMozRequestFullScreen ||
            originalMsRequestFullscreen;
        if (typeof req === "function") {
            return req.call(el);
        }
        return Promise.resolve();
    }
    function callOriginalExitFullscreen() {
        const exit = originalExitFullscreen || originalWebkitExitFullscreen;
        if (typeof exit === "function") {
            return exit.call(document);
        }
        return Promise.resolve();
    }
    function wrapFullscreenMethod(proto, methodName, original) {
        if (typeof original !== "function")
            return;
        proto[methodName] = function (...args) {
            if (isPlayerFullscreenTarget(this) && (isTelepartyChatOpen() || isOurVideoGridFullscreen())) {
                relayFullscreenRequest();
                return Promise.resolve();
            }
            return original.apply(this, args);
        };
    }
    wrapFullscreenMethod(Element.prototype, "requestFullscreen", originalRequestFullscreen);
    wrapFullscreenMethod(Element.prototype, "webkitRequestFullscreen", originalWebkitRequestFullscreen);
    wrapFullscreenMethod(Element.prototype, "webkitRequestFullScreen", originalWebkitRequestFullScreen);
    wrapFullscreenMethod(Element.prototype, "mozRequestFullScreen", originalMozRequestFullScreen);
    wrapFullscreenMethod(Element.prototype, "msRequestFullscreen", originalMsRequestFullscreen);
    window.addEventListener("message", (event) => {
        if (event.source !== window)
            return;
        const data = event.data;
        if (!data)
            return;
        if (data.type === ENTER_FULLSCREEN_TYPE) {
            const grid = document.querySelector(".video-grid");
            if (grid) {
                void callOriginalRequestFullscreen(grid);
            }
            return;
        }
        if (data.type === EXIT_FULLSCREEN_TYPE) {
            void callOriginalExitFullscreen();
        }
    });
    document.addEventListener("click", (event) => {
        if (!isTelepartyChatOpen() && !isOurVideoGridFullscreen())
            return;
        const target = event.target;
        if (!target || typeof target.closest !== "function")
            return;
        const fsButton = target.closest(".bmpui-ui-fullscreentogglebutton, button[class*='fullscreen'], [class*='fullscreentoggle']");
        if (!fsButton || !isPlayerFullscreenTarget(fsButton))
            return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        relayFullscreenRequest();
    }, true);
})();

/******/ })()
;