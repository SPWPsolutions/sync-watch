/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1694
() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
if (!window.videoIdScriptLoaded) {
    console.log("videoID Script Loaded");
    window.videoIdScriptLoaded = true;
    window.addEventListener("MaxVideoMessage", function (event) {
        if (event.detail) {
            var type = event.detail.type;
            if (type === "getAdList") {
                let adList = getAllAdsAlt();
                if (adList.length === 0) {
                    const tmpAdList = document
                        .querySelector('[data-testid="player-ux-scrubber-track"]')
                        .getAttribute("data-ad-slots");
                    if (tmpAdList) {
                        adList = JSON.parse(tmpAdList);
                    }
                }
                const titleEvent = new CustomEvent("FromNode", { detail: { type: "getAd", adList } });
                window.dispatchEvent(titleEvent);
            }
            else if (type === "getVideoLookupData") {
                const data = getVideoLookupData();
                const videoDataEvent = new CustomEvent("FromNode", { detail: { type: "getData", data } });
                window.dispatchEvent(videoDataEvent);
            }
        }
    });
    const _intercept = () => {
        const pruneJson = (jsonText) => {
            try {
                const json = JSON.parse(jsonText);
                if (typeof json !== "object" || json === null)
                    return jsonText;
                // Remove `ssaiInfo` if present
                if ("ssaiInfo" in json) {
                    delete json.ssaiInfo;
                }
                // Remove `fallback.ssaiInfo` if present
                if ("fallback" in json && typeof json.fallback === "object") {
                    delete json.fallback.ssaiInfo;
                }
                // Remove `manifest.url` if present
                if ("manifest" in json && typeof json.manifest === "object") {
                    delete json.manifest.url;
                }
                return JSON.stringify(json);
            }
            catch (e) {
                console.error("JSON Prune Error:", e);
                return jsonText; // Return original JSON in case of errors
            }
        };
        // Intercept fetch API
        const originalFetch = window.fetch;
        window.fetch = (...args) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const response = yield originalFetch(...args);
            if (response.ok &&
                ((_a = response.headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.includes("application/json")) &&
                response.url.includes("api.hbomax.com")) {
                const modifiedJson = pruneJson(yield response.clone().text());
                return new Response(modifiedJson, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                });
            }
            return response;
        });
        // Intercept XMLHttpRequest
        const originalXHROpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (...args) {
            originalXHROpen.apply(this, args);
            const url = args[1]; // The second argument is the request URL
            if (url.includes("api.hbomax.com")) {
                this.addEventListener("readystatechange", function () {
                    var _a;
                    if (this.readyState === 4 && ((_a = this.getResponseHeader("content-type")) === null || _a === void 0 ? void 0 : _a.includes("application/json"))) {
                        try {
                            const modifiedResponse = pruneJson(this.responseText);
                            // Define the modified response in a safe way
                            Object.defineProperty(this, "_responseText", {
                                value: modifiedResponse,
                                configurable: true,
                            });
                            Object.defineProperty(this, "responseText", {
                                get: function () {
                                    return this._responseText;
                                },
                                configurable: true,
                            });
                            Object.defineProperty(this, "response", {
                                get: function () {
                                    return this._responseText;
                                },
                                configurable: true,
                            });
                        }
                        catch (e) {
                            console.error("JSON Prune Error:", e);
                        }
                    }
                });
            }
        };
    };
    _intercept();
}
const getAllAdsAlt = () => {
    const element = document.querySelector('[data-testid="player-ux-scrubber-track"]');
    if (!element) {
        return [];
    }
    const props = findReactPropsObject(element);
    if (!props) {
        return [];
    }
    const adData = JSON.parse(props["data-ad-slots"] || "[]");
    return adData;
};
const findReactPropsObject = function (elementRoot) {
    if (elementRoot == null) {
        return null;
    }
    const keys = Object.keys(elementRoot);
    let key = null;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].startsWith("__reactProps")) {
            key = keys[i];
            break;
        }
    }
    if (key == null) {
        return null;
    }
    if (typeof elementRoot[key] === "undefined") {
        return null;
    }
    return elementRoot[key];
};
const findReactProps = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const elementRoot = document.querySelector("#overlay-root");
    if (elementRoot == null) {
        return null;
    }
    const keys = Object.keys(elementRoot);
    let key = null;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].startsWith("__reactFiber")) {
            key = keys[i];
            break;
        }
    }
    if (key == null) {
        return null;
    }
    if (typeof elementRoot[key] === "undefined") {
        return null;
    }
    return (_m = (_l = (_k = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = elementRoot[key].return.pendingProps) === null || _a === void 0 ? void 0 : _a.playerCallbacks) === null || _b === void 0 ? void 0 : _b.mediator) === null || _c === void 0 ? void 0 : _c._playerControls) === null || _d === void 0 ? void 0 : _d._playbackEngineAdapter) === null || _e === void 0 ? void 0 : _e._playbackEngine) === null || _f === void 0 ? void 0 : _f._player) === null || _g === void 0 ? void 0 : _g._playerStateTracker) === null || _h === void 0 ? void 0 : _h._playerState) === null || _j === void 0 ? void 0 : _j.variant) === null || _k === void 0 ? void 0 : _k.video) === null || _l === void 0 ? void 0 : _l._periodMap) === null || _m === void 0 ? void 0 : _m._storage;
};
const getAllAds = () => {
    try {
        let adElem = findReactProps();
        let positions = [];
        if (!adElem) {
            return [];
        }
        adElem === null || adElem === void 0 ? void 0 : adElem.forEach((a, key) => {
            positions.push([a.start * 1000, a.end * 1000]);
            // a.video.forEach((b) => {
            //   let segm = b.getCachedDetails()?.segments;
            //   if (segm) {
            //     positions.push([segm[0].start * 1000, segm[segm.length - 1].end * 1000]);
            //   }
            // });
        });
        // Remove duplicates
        let uniquePositions = Array.from(new Set(positions.map(JSON.stringify)), JSON.parse);
        // Convert to an array of objects with startTime and duration properties
        let finalPositions = uniquePositions.map((position) => ({
            adStartTime: position[0],
            adDuration: position[1] - position[0],
        }));
        let filteredPositions = finalPositions.filter((position) => position.adDuration <= 61000);
        return filteredPositions;
    }
    catch (err) {
        console.error("Error is", err);
        return [];
    }
};
const getReactFiber = (root) => {
    if (root == null) {
        return null;
    }
    var keys = Object.keys(root);
    var key = null;
    for (var i = 0; i < keys.length; i++) {
        if (keys[i].startsWith("__reactFiber")) {
            key = keys[i];
            break;
        }
    }
    return key ? root[key] : null;
};
const getMetadata = () => {
    var _a;
    return (_a = getReactFiber(document.querySelector("[data-testid='content-metadata']"))) === null || _a === void 0 ? void 0 : _a.return.return.memoizedProps.contentMetadata;
};
const getVideoLookupData = () => {
    var _a, _b, _c, _d, _e;
    return ({
        title: (_a = getMetadata()) === null || _a === void 0 ? void 0 : _a.title,
        type: ((_b = getMetadata()) === null || _b === void 0 ? void 0 : _b.videoType) === "EPISODE" ? "TV" : "MOVIE",
        year: ((_c = getMetadata()) === null || _c === void 0 ? void 0 : _c.videoType) !== "EPISODE" && ((_d = getMetadata()) === null || _d === void 0 ? void 0 : _d.extras.AIR_DATE.split("-")[0]),
        episodeLookup: ((_e = getMetadata()) === null || _e === void 0 ? void 0 : _e.videoType) === "EPISODE"
            ? {
                number: getMetadata().episodeNumber,
                season: getMetadata().seasonNumber,
                airDate: getMetadata().extras.AIR_DATE,
            }
            : undefined,
    });
};
(function () {
    if (window.__tpHboInternals) {
        return;
    }
    var TP_EVENT = "FromNode";
    function findPlayerCallbacks() {
        try {
            var root = document.querySelector("#overlay-root");
            if (!root) {
                return null;
            }
            var fiberKey = null;
            var keys = Object.keys(root);
            for (var i = 0; i < keys.length; i++) {
                if (keys[i].indexOf("__reactFiber") === 0) {
                    fiberKey = keys[i];
                    break;
                }
            }
            if (!fiberKey || !root[fiberKey]) {
                return null;
            }
            var top = root[fiberKey];
            for (var c = 0; c < 60 && top.return; c++) {
                top = top.return;
            }
            var seen = new Set();
            var queue = [top];
            var guard = 0;
            while (queue.length && guard++ < 5000) {
                var node = queue.shift();
                if (!node || seen.has(node)) {
                    continue;
                }
                seen.add(node);
                var props = node.memoizedProps || node.pendingProps;
                if (props && typeof props === "object" && props.playerCallbacks) {
                    return props.playerCallbacks;
                }
                if (node.child) {
                    queue.push(node.child);
                }
                if (node.sibling) {
                    queue.push(node.sibling);
                }
            }
        }
        catch (e) {
            /* ignore */
        }
        return null;
    }
    function getPlayerControls() {
        var cb = findPlayerCallbacks();
        return (cb && cb.mediator && cb.mediator._playerControls) || null;
    }
    var COMMAND_MARK = "__tpHboCommandPatched";
    function patchMediatorCommands(mediator) {
        if (!mediator) {
            return 0;
        }
        var patched = 0;
        var names = [];
        try {
            var obj = mediator;
            var depth = 0;
            while (obj && obj !== Object.prototype && depth < 5) {
                var own = Object.getOwnPropertyNames(obj);
                for (var n = 0; n < own.length; n++) {
                    if (names.indexOf(own[n]) === -1) {
                        names.push(own[n]);
                    }
                }
                obj = Object.getPrototypeOf(obj);
                depth++;
            }
        }
        catch (e) {
            return 0;
        }
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            if (name.indexOf("request") !== 0) {
                continue;
            }
            if (name === "requestLoad") {
                continue;
            }
            var original;
            try {
                original = mediator[name];
            }
            catch (e) {
                continue;
            }
            if (typeof original !== "function" || original[COMMAND_MARK]) {
                continue;
            }
            ;
            (function (methodName, fn) {
                var wrapped = function () {
                    var result = fn.apply(this, arguments);
                    try {
                        emit({ type: "tpHboCommand", command: methodName, at: Date.now() });
                    }
                    catch (e) {
                        /* ignore */
                    }
                    return result;
                };
                wrapped[COMMAND_MARK] = true;
                try {
                    mediator[methodName] = wrapped;
                    patched++;
                }
                catch (e) {
                    /* ignore */
                }
            })(name, original);
        }
        return patched;
    }
    function playerScopeId(controls) {
        try {
            return (controls && controls.playerId && controls.playerId.playerGlobalScopeId) || null;
        }
        catch (e) {
            return null;
        }
    }
    function emit(detail) {
        try {
            window.dispatchEvent(new CustomEvent(TP_EVENT, { detail: detail }));
        }
        catch (e) {
            /* ignore */
        }
    }
    var state = {
        scopeId: null,
        subs: [],
        inAd: false,
    };
    function teardownSubs() {
        for (var i = 0; i < state.subs.length; i++) {
            try {
                if (state.subs[i] && typeof state.subs[i].unsubscribe === "function") {
                    state.subs[i].unsubscribe();
                }
            }
            catch (e) {
                /* ignore */
            }
        }
        state.subs = [];
    }
    function subscribe(bus, name, onNext) {
        try {
            var stream = bus && bus[name];
            if (stream && typeof stream.subscribe === "function") {
                state.subs.push(stream.subscribe({
                    next: onNext,
                    error: function () {
                        /* a stream error must not break the subscription */
                    },
                }));
                return true;
            }
        }
        catch (e) {
            /* ignore */
        }
        return false;
    }
    function reportAd(active) {
        if (state.inAd === active) {
            return;
        }
        state.inAd = active;
        emit({ type: "tpHboAdState", inAd: active });
    }
    function ensureAttached() {
        var controls = getPlayerControls();
        if (!controls) {
            return false;
        }
        var scope = playerScopeId(controls);
        if (scope && scope === state.scopeId && state.subs.length) {
            return true;
        }
        teardownSubs();
        state.scopeId = scope;
        state.inAd = false;
        var bus = controls._eventBus;
        if (!bus) {
            return false;
        }
        var attached = 0;
        try {
            var cbForCommands = findPlayerCallbacks();
            patchMediatorCommands(cbForCommands && cbForCommands.mediator);
        }
        catch (e) {
            /* ignore */
        }
        attached += subscribe(bus, "_adRollEvent$", function () {
            reportAd(true);
        })
            ? 1
            : 0;
        attached += subscribe(bus, "_adEvent$", function () {
            reportAd(true);
        })
            ? 1
            : 0;
        attached += subscribe(bus, "_playbackStateEvent$", function (value) {
            emit({ type: "tpHboPlaybackState", value: safe(value) });
        })
            ? 1
            : 0;
        emit({ type: "tpHboAttached", attached: attached, scopeId: scope });
        return attached > 0;
    }
    function safe(value) {
        try {
            return JSON.parse(JSON.stringify(value));
        }
        catch (e) {
            return null;
        }
    }
    window.addEventListener("MaxVideoMessage", function (event) {
        var detail = event && event.detail;
        if (!detail) {
            return;
        }
    });
    ensureAttached();
    setInterval(ensureAttached, 5000);
    window.__tpHboInternals = true;
})();


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[1694].call(__webpack_exports__);
/******/ 	
/******/ })()
;