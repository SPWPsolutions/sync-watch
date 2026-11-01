/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/Teleparty/Enums/PlaybackState.ts
var PlaybackState;
(function (PlaybackState) {
    PlaybackState["LOADING"] = "loading";
    PlaybackState["PLAYING"] = "playing";
    PlaybackState["IDLE"] = "idle";
    PlaybackState["AD_PLAYING"] = "ad_playing";
    PlaybackState["PAUSED"] = "paused";
    PlaybackState["NOT_READY"] = "not_ready";
})(PlaybackState || (PlaybackState = {}));

;// ./src/Teleparty/ContentScripts/Crunchyroll/crunchyroll_injected.js

const BOTTOM_CONTROLS = '[data-testid="bottom-controls-autohide"]';
const CURRENT_MEDIA_INFO = ".erc-current-media-info";
/** New in-page player only (no Vilos iframe). */
if (window === top && document.querySelector(BOTTOM_CONTROLS)) {
    const isTreatmentPlayer = () => { var _a; return ((_a = window.teleparty) === null || _a === void 0 ? void 0 : _a.crunchyrollPlayerVariant) !== "control"; };
    const getDomNodeReactFiberKey = (el) => {
        if (!el)
            return null;
        const keys = Object.keys(el);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith("__reactFiber$")) {
                return keys[i];
            }
        }
        return null;
    };
    const parseEpisodeNumber = (mediaTitle) => {
        if (!mediaTitle || typeof mediaTitle !== "string") {
            return 0;
        }
        const m = mediaTitle.match(/^E(\d+)\s*-/i);
        return m ? parseInt(m[1], 10) : 0;
    };
    const getVideoInformationFromCurrentMedia = (duration) => {
        var _a, _b;
        const mediaEl = document.querySelector(CURRENT_MEDIA_INFO);
        const fiberKey = getDomNodeReactFiberKey(mediaEl);
        if (!mediaEl || !fiberKey || !mediaEl[fiberKey]) {
            return null;
        }
        const p = (_a = mediaEl[fiberKey].return) === null || _a === void 0 ? void 0 : _a.memoizedProps;
        if (!p || p.id == null) {
            return null;
        }
        return {
            episodeNumber: parseEpisodeNumber(p.mediaTitle),
            videoTitle: (_b = p.mediaTitle) !== null && _b !== void 0 ? _b : "",
            videoType: "",
            videoId: String(p.id),
            seriesId: p.parentId != null ? String(p.parentId) : "",
            duration: duration !== null && duration !== void 0 ? duration : 0,
        };
    };
    const getSeekTo = () => {
        var _a, _b, _c, _d, _f;
        const el = document.querySelector(BOTTOM_CONTROLS);
        const key = getDomNodeReactFiberKey(el);
        if (!key || !(el === null || el === void 0 ? void 0 : el[key])) {
            return null;
        }
        const seekTo = (_f = (_d = (_c = (_b = (_a = el[key].child) === null || _a === void 0 ? void 0 : _a.child) === null || _b === void 0 ? void 0 : _b.child) === null || _c === void 0 ? void 0 : _c.child) === null || _d === void 0 ? void 0 : _d.memoizedProps) === null || _f === void 0 ? void 0 : _f.seekTo;
        return typeof seekTo === "function" ? seekTo : null;
    };
    const getPlayerVideoElement = () => {
        const withSrc = document.querySelector("video[src]");
        if (withSrc) {
            return withSrc;
        }
        return document.querySelector("video");
    };
    const _relayMessage = (messageObj) => {
        window.postMessage(messageObj, "*");
    };
    let _lastKnownBuffering = false;
    const _isBuffering = () => _lastKnownBuffering;
    const emitBufferingChange = (buffering) => {
        if (_lastKnownBuffering === buffering) {
            return;
        }
        _lastKnownBuffering = buffering;
        _relayMessage({ type: "onBufferingChange", buffering });
    };
    const _getPlaybackState = () => {
        const video = getPlayerVideoElement();
        if (video == undefined) {
            return PlaybackState.NOT_READY;
        }
        else if (video.paused) {
            return PlaybackState.PAUSED;
        }
        else if (_isBuffering()) {
            return PlaybackState.LOADING;
        }
        else {
            return PlaybackState.PLAYING;
        }
    };
    const getCurrentVideoInformation = () => {
        var _a;
        try {
            const elementRoot = getPlayerVideoElement();
            if (elementRoot == null) {
                return null;
            }
            const duration = (_a = elementRoot.duration) !== null && _a !== void 0 ? _a : 0;
            const fromCurrentMedia = getVideoInformationFromCurrentMedia(duration);
            if (fromCurrentMedia) {
                return fromCurrentMedia;
            }
            return {
                episodeNumber: 0,
                videoTitle: "",
                videoType: "",
                videoId: "",
                seriesId: "",
                duration,
            };
        }
        catch (_err) {
            return undefined;
        }
    };
    if (!window.crunchyrollInjectedMessageListenerBound) {
        window.crunchyrollInjectedMessageListenerBound = true;
        window.addEventListener("message", (evt) => {
            var _a, _b, _c;
            const eventExists = evt.data.infoSending;
            if (!eventExists) {
                return;
            }
            const type = eventExists.type;
            if (type === "getVideoData") {
                const videoInfo = getCurrentVideoInformation();
                if (videoInfo) {
                    _relayMessage({ type: "VideoData", videoData: videoInfo });
                }
            }
            else if (type === "updateState") {
                const playerVideo = getPlayerVideoElement();
                _relayMessage({
                    type: "updatedState",
                    playerState: {
                        time: ((_a = playerVideo === null || playerVideo === void 0 ? void 0 : playerVideo.currentTime) !== null && _a !== void 0 ? _a : 0) * 1000,
                        playbackState: _getPlaybackState(),
                        loading: _isBuffering() && !(playerVideo === null || playerVideo === void 0 ? void 0 : playerVideo.paused),
                    },
                });
            }
            else if (type === "seekTo") {
                const timeMs = evt.data.infoSending.eventData.time;
                // Player-control path is preferred when patched; this is the DOM/React fallback.
                if (!window.__tpCrunchyrollHasPlayerControls) {
                    (_b = getSeekTo()) === null || _b === void 0 ? void 0 : _b(timeMs / 1000);
                }
            }
            else if (type === "continueParty") {
                (_c = document.querySelector('[data-test-state="stopped"]')) === null || _c === void 0 ? void 0 : _c.click();
            }
        });
    }
    const startListening = () => {
        if (window.crunchyrollInjectedIsListening) {
            return;
        }
        window.crunchyrollInjectedIsListening = true;
        const video = getPlayerVideoElement();
        if (video) {
            video.addEventListener("loadstart", () => {
                _relayMessage({ type: "videoLoadStart" });
            });
        }
        document.addEventListener("fullscreenchange", () => {
            _relayMessage({ type: "onFullscreen" });
        });
        window.addEventListener("keyup", (event) => {
            if (event.key === "Escape") {
                _relayMessage({ type: "exitFullscreen" });
            }
        });
        window.videoIdScriptLoaded = true;
    };
    const waitForVideoAndStartListening = () => {
        var _a;
        if (window.crunchyrollInjectedIsListening) {
            return;
        }
        const maxWaitForVideoMs = 60000;
        let intervalId = null;
        let timeoutId = null;
        let observer = null;
        const cleanup = () => {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            if (observer) {
                observer.disconnect();
                observer = null;
            }
        };
        const tryStartListening = () => {
            if (!getPlayerVideoElement()) {
                return false;
            }
            startListening();
            cleanup();
            return true;
        };
        if (tryStartListening()) {
            return;
        }
        intervalId = setInterval(() => {
            if (tryStartListening()) {
                cleanup();
            }
        }, 250);
        observer = new MutationObserver(() => {
            if (tryStartListening()) {
                cleanup();
            }
        });
        const observerTarget = (_a = document.documentElement) !== null && _a !== void 0 ? _a : document.body;
        if (observerTarget) {
            observer.observe(observerTarget, { childList: true, subtree: true });
        }
        timeoutId = setTimeout(() => {
            cleanup();
        }, maxWaitForVideoMs);
    };
    waitForVideoAndStartListening();
    (function () {
        if (window.tpCrunchyrollNextEpisodeBridgeLoaded) {
            return;
        }
        window.tpCrunchyrollNextEpisodeBridgeLoaded = true;
        const NEXT_EPISODE_PATCHED_FLAG = "__tpRequestAssetQueueUpdatePatched";
        const CONTROL_PATCHED_FLAG = "__tpCrunchyrollControlPatched";
        const EVENT_BUS_HOOKS = ["bufferStart$", "playerStateChangedEvent$"];
        const patchedEventBusHooks = new WeakMap();
        let suppressPlayerEvent = false;
        let patchedControlsPlayer = null;
        const getPlayerFromContainer = () => {
            var _a, _b, _c, _d;
            const el = document.querySelector("#player-container");
            const fiberKey = getDomNodeReactFiberKey(el);
            if (!el || !fiberKey) {
                return null;
            }
            return (_d = (_c = (_b = (_a = el[fiberKey]) === null || _a === void 0 ? void 0 : _a.return) === null || _b === void 0 ? void 0 : _b.stateNode) === null || _c === void 0 ? void 0 : _c.player) !== null && _d !== void 0 ? _d : null;
        };
        const getNextEpisodeVmPlayer = () => {
            var _a, _b, _c, _d;
            const player = (_d = (_c = (_b = (_a = getPlayerFromContainer()) === null || _a === void 0 ? void 0 : _a._viewModels) === null || _b === void 0 ? void 0 : _b.nextEpisodeVM) === null || _c === void 0 ? void 0 : _c._player) !== null && _d !== void 0 ? _d : null;
            window.__tpPlayer = player;
            return player;
        };
        const hasPlayerControls = (vmp) => !!vmp &&
            typeof vmp.play === "function" &&
            typeof vmp.pause === "function" &&
            typeof vmp.seek === "function";
        const emitPlayerEvent = (action, extra) => {
            if (!isTreatmentPlayer()) {
                return;
            }
            _relayMessage(Object.assign({ type: "TP_CRUNCHYROLL_PLAYER_EVENT", action }, (extra || {})));
        };
        const patchControlMethod = (player, name) => {
            if (!player || typeof player[name] !== "function" || player[name][CONTROL_PATCHED_FLAG]) {
                return false;
            }
            const original = player[name];
            const wrapped = function (...args) {
                const fromTeleparty = suppressPlayerEvent;
                // Only skip broadcasting Teleparty-driven applies (echo). Local UI calls always emit.
                if (!fromTeleparty) {
                    if (name === "seek") {
                        const raw = Number(args[0]);
                        // Player seek takes seconds (same as React seekTo).
                        const seekTargetMs = Number.isFinite(raw) ? raw * 1000 : null;
                        emitPlayerEvent("seek", { seekTargetMs });
                    }
                    else {
                        emitPlayerEvent(name);
                    }
                }
                return original.apply(this, args);
            };
            wrapped[CONTROL_PATCHED_FLAG] = true;
            try {
                Object.defineProperty(player, name, {
                    configurable: true,
                    writable: true,
                    value: wrapped,
                });
            }
            catch (_e) {
                player[name] = wrapped;
            }
            return true;
        };
        const tryPatchEventBusHooks = () => {
            var _a;
            const eventBus = (_a = getNextEpisodeVmPlayer()) === null || _a === void 0 ? void 0 : _a.eventBus;
            if (!eventBus) {
                return false;
            }
            let byName = patchedEventBusHooks.get(eventBus);
            if (!byName) {
                byName = new Set();
                patchedEventBusHooks.set(eventBus, byName);
            }
            let patchedAll = true;
            for (let i = 0; i < EVENT_BUS_HOOKS.length; i++) {
                const name = EVENT_BUS_HOOKS[i];
                if (byName.has(name)) {
                    continue;
                }
                const value = eventBus[name];
                if (!value || typeof value.subscribe !== "function") {
                    patchedAll = false;
                    continue;
                }
                value.subscribe((payload) => {
                    if (!isTreatmentPlayer()) {
                        return;
                    }
                    if (name === "bufferStart$") {
                        emitBufferingChange(true);
                        return;
                    }
                    if (name === "playerStateChangedEvent$") {
                        const eventName = payload && payload.event;
                        if (eventName === "paused" || eventName === "playing") {
                            emitBufferingChange(false);
                        }
                    }
                });
                byName.add(name);
            }
            return patchedAll;
        };
        const tryPatchRequestAssetQueueUpdate = () => {
            const vmp = getNextEpisodeVmPlayer();
            if (!vmp || typeof vmp.requestAssetQueueUpdate !== "function") {
                return false;
            }
            if (vmp[NEXT_EPISODE_PATCHED_FLAG]) {
                return true;
            }
            const original = vmp.requestAssetQueueUpdate.bind(vmp);
            vmp.requestAssetQueueUpdate = function (...args) {
                var _a, _b, _c;
                const message = args[0];
                const suppress = !!window.__tpCrunchyrollSuppressNextEpisodeBroadcast;
                if (!suppress && isTreatmentPlayer() && message && message.jump === 1) {
                    const nextEpisodeGuid = (_c = (_b = (_a = getPlayerFromContainer()) === null || _a === void 0 ? void 0 : _a._viewModels) === null || _b === void 0 ? void 0 : _b.nextEpisodeVM) === null || _c === void 0 ? void 0 : _c._nextEpisodeGuid;
                    if (typeof nextEpisodeGuid === "string" && nextEpisodeGuid.length > 0) {
                        window.postMessage({
                            type: "TP_CRUNCHYROLL_PLAY_NEXT",
                            nextContentId: nextEpisodeGuid,
                            extraInfo: { isNextEpisode: true },
                        }, "*");
                    }
                }
                return original(...args);
            };
            vmp[NEXT_EPISODE_PATCHED_FLAG] = true;
            return true;
        };
        const tryPatchPlayerControls = () => {
            var _a, _b, _c;
            const vmp = getNextEpisodeVmPlayer();
            if (!hasPlayerControls(vmp)) {
                if (patchedControlsPlayer) {
                    patchedControlsPlayer = null;
                    window.__tpCrunchyrollHasPlayerControls = false;
                    _relayMessage({ type: "TP_CRUNCHYROLL_PLAYER_CONTROLS_LOST" });
                }
                return false;
            }
            tryPatchRequestAssetQueueUpdate();
            if (vmp === patchedControlsPlayer &&
                ((_a = vmp.play) === null || _a === void 0 ? void 0 : _a[CONTROL_PATCHED_FLAG]) &&
                ((_b = vmp.pause) === null || _b === void 0 ? void 0 : _b[CONTROL_PATCHED_FLAG]) &&
                ((_c = vmp.seek) === null || _c === void 0 ? void 0 : _c[CONTROL_PATCHED_FLAG])) {
                return true;
            }
            patchControlMethod(vmp, "play");
            patchControlMethod(vmp, "pause");
            patchControlMethod(vmp, "seek");
            patchedControlsPlayer = vmp;
            if (!isTreatmentPlayer()) {
                window.__tpCrunchyrollHasPlayerControls = false;
                return true;
            }
            window.__tpCrunchyrollHasPlayerControls = true;
            _relayMessage({ type: "TP_CRUNCHYROLL_PLAYER_CONTROLS_READY" });
            return true;
        };
        const runPlayerControl = (action, timeMs) => {
            const vmp = getNextEpisodeVmPlayer();
            if (!hasPlayerControls(vmp)) {
                return { ok: false, error: "player controls unavailable" };
            }
            suppressPlayerEvent = true;
            try {
                if (action === "play") {
                    vmp.play();
                }
                else if (action === "pause") {
                    vmp.pause();
                }
                else if (action === "seek") {
                    vmp.seek(Number(timeMs) / 1000);
                }
                else {
                    return { ok: false, error: `unknown action: ${action}` };
                }
                return { ok: true };
            }
            catch (error) {
                return { ok: false, error: String(error) };
            }
            finally {
                suppressPlayerEvent = false;
            }
        };
        window.addEventListener("message", (event) => {
            var _a, _b, _c;
            if (event.source !== window || !event.data || typeof event.data.type !== "string") {
                return;
            }
            const { type, requestId } = event.data;
            if (type === "TP_CRUNCHYROLL_SET_PLAYER_VARIANT") {
                if (event.data.variant === "control") {
                    window.__tpCrunchyrollHasPlayerControls = false;
                    _relayMessage({ type: "TP_CRUNCHYROLL_PLAYER_CONTROLS_LOST" });
                }
                else {
                    tryPatchPlayerControls();
                    tryPatchEventBusHooks();
                }
                return;
            }
            if (type === "TP_CRUNCHYROLL_HAS_PLAYER_CONTROLS") {
                const ready = isTreatmentPlayer() && tryPatchPlayerControls();
                window.postMessage({
                    type: "TP_CRUNCHYROLL_HAS_PLAYER_CONTROLS_RESULT",
                    requestId,
                    ok: ready,
                }, "*");
                return;
            }
            if (type === "TP_CRUNCHYROLL_PLAYER_CONTROL") {
                const result = isTreatmentPlayer()
                    ? runPlayerControl(event.data.action, event.data.timeMs)
                    : { ok: false, error: "control variant" };
                window.postMessage(Object.assign({ type: "TP_CRUNCHYROLL_PLAYER_CONTROL_RESULT", requestId }, result), "*");
                return;
            }
            if (type === "TP_CRUNCHYROLL_GET_NEXT_EPISODE_GUID") {
                const nextEpisodeGuid = (_c = (_b = (_a = getPlayerFromContainer()) === null || _a === void 0 ? void 0 : _a._viewModels) === null || _b === void 0 ? void 0 : _b.nextEpisodeVM) === null || _c === void 0 ? void 0 : _c._nextEpisodeGuid;
                window.postMessage({
                    type: "TP_CRUNCHYROLL_GET_NEXT_EPISODE_GUID_RESULT",
                    requestId,
                    ok: typeof nextEpisodeGuid === "string" && nextEpisodeGuid.length > 0,
                    nextContentId: typeof nextEpisodeGuid === "string" ? nextEpisodeGuid : undefined,
                }, "*");
                return;
            }
            if (type !== "TP_CRUNCHYROLL_DISPATCH_NEXT_EPISODE") {
                return;
            }
            if (!isTreatmentPlayer()) {
                window.postMessage({
                    type: "TP_CRUNCHYROLL_DISPATCH_NEXT_EPISODE_RESULT",
                    requestId,
                    ok: false,
                    error: "control variant",
                }, "*");
                return;
            }
            const vmp = getNextEpisodeVmPlayer();
            if (!vmp || typeof vmp.requestAssetQueueUpdate !== "function") {
                window.postMessage({
                    type: "TP_CRUNCHYROLL_DISPATCH_NEXT_EPISODE_RESULT",
                    requestId,
                    ok: false,
                    error: "requestAssetQueueUpdate unavailable",
                }, "*");
                return;
            }
            try {
                window.__tpCrunchyrollSuppressNextEpisodeBroadcast = true;
                vmp.requestAssetQueueUpdate({ jump: 1 });
                window.postMessage({
                    type: "TP_CRUNCHYROLL_DISPATCH_NEXT_EPISODE_RESULT",
                    requestId,
                    ok: true,
                }, "*");
            }
            catch (error) {
                window.postMessage({
                    type: "TP_CRUNCHYROLL_DISPATCH_NEXT_EPISODE_RESULT",
                    requestId,
                    ok: false,
                    error: String(error),
                }, "*");
            }
            finally {
                window.__tpCrunchyrollSuppressNextEpisodeBroadcast = false;
            }
        });
        tryPatchPlayerControls();
        tryPatchEventBusHooks();
        setInterval(() => {
            tryPatchPlayerControls();
            tryPatchEventBusHooks();
        }, 500);
    })();
}

/******/ })()
;