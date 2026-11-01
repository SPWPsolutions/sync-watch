/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;
(function () {
    const isLivePlayback = () => window.location.pathname.includes("/watch/playback/live/");
    const getReactKey = (el) => {
        if (!el)
            return null;
        return Object.keys(el).find((k) => k.startsWith("__reactInternalInstance") || k.startsWith("__reactFiber"));
    };
    /** React 18 puts the root on `__reactContainer$`. Fibers live on `__reactFiber$`. */
    const fiberFromElement = (el) => {
        var _a;
        if (!el) {
            return null;
        }
        const keys = Object.keys(el);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (key.startsWith("__reactFiber") || key.startsWith("__reactInternalInstance")) {
                return el[key];
            }
            if (key.startsWith("__reactContainer") && ((_a = el[key]) === null || _a === void 0 ? void 0 : _a.current)) {
                return el[key].current;
            }
        }
        return null;
    };
    /** history@5 / React Router: push, replace, listen, and location.pathname. */
    const isRouterHistory = (obj) => {
        var _a;
        if (!obj || typeof obj !== "object") {
            return false;
        }
        try {
            return (typeof obj.push === "function" &&
                typeof obj.replace === "function" &&
                typeof obj.listen === "function" &&
                typeof ((_a = obj.location) === null || _a === void 0 ? void 0 : _a.pathname) === "string");
        }
        catch (e) {
            return false;
        }
    };
    const historyFromValue = (value) => {
        if (isRouterHistory(value)) {
            return value;
        }
        if (value && typeof value === "object" && isRouterHistory(value.history)) {
            return value.history;
        }
        return undefined;
    };
    const historyFromFiber = (fiber) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!fiber) {
            return undefined;
        }
        const candidates = [
            (_a = fiber.memoizedProps) === null || _a === void 0 ? void 0 : _a.history,
            (_b = fiber.memoizedProps) === null || _b === void 0 ? void 0 : _b.value,
            (_d = (_c = fiber.stateNode) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.history,
            (_e = fiber.stateNode) === null || _e === void 0 ? void 0 : _e.history,
        ];
        for (let i = 0; i < candidates.length; i++) {
            const history = historyFromValue(candidates[i]);
            if (history) {
                return history;
            }
        }
        let hook = fiber.memoizedState;
        for (let i = 0; hook && i < 40; i++) {
            const state = hook.memoizedState;
            const history = historyFromValue(state) || historyFromValue(state === null || state === void 0 ? void 0 : state.current);
            if (history) {
                return history;
            }
            hook = hook.next;
        }
        let context = ((_f = fiber.dependencies) === null || _f === void 0 ? void 0 : _f.firstContext) || ((_g = fiber.contextDependencies) === null || _g === void 0 ? void 0 : _g.firstContext);
        for (let i = 0; context && i < 20; i++) {
            const history = historyFromValue(context.memoizedValue);
            if (history) {
                return history;
            }
            context = context.next;
        }
        return undefined;
    };
    let _routerHistory = null;
    /** Peacock's e$.Nc — SPA history.replace, not window.location.replace. */
    const getRouterHistory = () => {
        if (_routerHistory && isRouterHistory(_routerHistory)) {
            return _routerHistory;
        }
        _routerHistory = null;
        const seeds = [
            document.getElementById("root"),
            document.getElementById("app"),
            document.querySelector("[data-reactroot]"),
            document.querySelector("#core-video-tape"),
            document.querySelector("#core-video-shaka"),
            document.querySelector("[data-testid='video-component']"),
            document.body,
        ];
        let rootFiber = null;
        for (let i = 0; i < seeds.length; i++) {
            const fiber = fiberFromElement(seeds[i]);
            if (fiber) {
                rootFiber = fiber;
                break;
            }
        }
        if (!rootFiber) {
            const nodes = document.querySelectorAll("div");
            for (let i = 0; i < nodes.length && i < 400; i++) {
                const fiber = fiberFromElement(nodes[i]);
                if (fiber) {
                    rootFiber = fiber;
                    break;
                }
            }
        }
        if (!rootFiber) {
            return null;
        }
        while (rootFiber.return) {
            rootFiber = rootFiber.return;
        }
        const seen = new Set();
        const queue = [rootFiber];
        let visited = 0;
        while (queue.length && visited < 20000) {
            const fiber = queue.shift();
            if (!fiber || seen.has(fiber)) {
                continue;
            }
            seen.add(fiber);
            visited++;
            const history = historyFromFiber(fiber);
            if (history) {
                _routerHistory = history;
                return history;
            }
            if (fiber.child) {
                queue.push(fiber.child);
            }
            if (fiber.sibling) {
                queue.push(fiber.sibling);
            }
        }
        return null;
    };
    const findAllAdBreakDataInObject = (obj, seen, depth) => {
        if (obj == null || typeof obj !== "object" || depth > 50) {
            return undefined;
        }
        if (seen.has(obj)) {
            return undefined;
        }
        seen.add(obj);
        try {
            if (Object.prototype.hasOwnProperty.call(obj, "allAdBreakData") && Array.isArray(obj.allAdBreakData)) {
                return obj.allAdBreakData;
            }
        }
        catch (e) {
            return undefined;
        }
        let keys;
        try {
            keys = Object.keys(obj);
        }
        catch (e) {
            return undefined;
        }
        for (let i = 0; i < keys.length; i++) {
            try {
                const found = findAllAdBreakDataInObject(obj[keys[i]], seen, depth + 1);
                if (found) {
                    return found;
                }
            }
            catch (e) {
                // ignore
            }
        }
        return undefined;
    };
    const findAllAdBreakData = () => {
        var _a, _b;
        if (isLivePlayback()) {
            return [];
        }
        const allElements = document.querySelectorAll("*");
        for (let i = 0; i < allElements.length; i++) {
            const el = allElements[i];
            const key = getReactKey(el);
            if (!key) {
                continue;
            }
            const fiber = el[key];
            const roots = [(_a = fiber === null || fiber === void 0 ? void 0 : fiber.return) === null || _a === void 0 ? void 0 : _a.stateNode, (_b = fiber === null || fiber === void 0 ? void 0 : fiber.return) === null || _b === void 0 ? void 0 : _b.memoizedProps, fiber === null || fiber === void 0 ? void 0 : fiber.memoizedProps];
            for (let r = 0; r < roots.length; r++) {
                const rootObj = roots[r];
                if (!rootObj || typeof rootObj !== "object") {
                    continue;
                }
                const found = findAllAdBreakDataInObject(rootObj, new WeakSet(), 0);
                if (found) {
                    return found;
                }
            }
        }
        return [];
    };
    const mapAdBreaksToStreamOffsets = (allAdBreakData) => {
        if (!Array.isArray(allAdBreakData)) {
            return [];
        }
        const sorted = allAdBreakData
            .slice()
            .filter((ad) => ad && Number.isFinite(ad.position) && Number.isFinite(ad.expectedDuration))
            .sort((a, b) => a.position - b.position);
        let cumulativeAdMs = 0;
        return sorted.map((ad) => {
            const contentPosMs = ad.position * 1000;
            const durationMs = ad.expectedDuration * 1000;
            const startingOffset = contentPosMs + cumulativeAdMs;
            cumulativeAdMs += durationMs;
            return {
                startingOffset,
                duration: durationMs,
                type: ad.type,
                id: ad.id,
            };
        });
    };
    const getMappedAdBreaks = () => {
        if (isLivePlayback()) {
            return [];
        }
        return mapAdBreaksToStreamOffsets(findAllAdBreakData());
    };
    const getVideo = () => document.querySelector("#core-video-shaka") ||
        document.querySelector("[data-gsp-video-component] video") ||
        document.querySelector("video");
    const assetToEpisodeId = (asset) => {
        if (!asset || typeof asset !== "object") {
            return undefined;
        }
        const contentId = asset.contentId || asset.content_id || asset.key;
        const providerVariantId = asset.providerVariantId || asset.provider_variant_id || asset.pvid;
        if (!contentId || !providerVariantId) {
            return undefined;
        }
        return `${contentId}/${providerVariantId}`;
    };
    const findBingeAssetInObject = (obj, seen, depth) => {
        if (obj == null || typeof obj !== "object" || depth > 40) {
            return undefined;
        }
        if (seen.has(obj)) {
            return undefined;
        }
        seen.add(obj);
        try {
            if (obj.bingePopUpAsset) {
                const id = assetToEpisodeId(obj.bingePopUpAsset);
                if (id) {
                    return obj.bingePopUpAsset;
                }
            }
            if (obj.upNextAsset) {
                const id = assetToEpisodeId(obj.upNextAsset);
                if (id) {
                    return obj.upNextAsset;
                }
            }
            // Direct asset shape
            const direct = assetToEpisodeId(obj);
            if (direct && (obj.type === "binge" || obj.binge || obj.upNext || obj.isBinge)) {
                return obj;
            }
        }
        catch (e) {
            return undefined;
        }
        let keys;
        try {
            keys = Object.keys(obj);
        }
        catch (e) {
            return undefined;
        }
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            // Only descend into binge/up-next-ish keys to keep this scan cheap
            if (!/binge|upnext|up_next|next.?episode|pop.?up|asset|rail/i.test(key)) {
                continue;
            }
            try {
                const found = findBingeAssetInObject(obj[key], seen, depth + 1);
                if (found) {
                    return found;
                }
            }
            catch (e) {
                // ignore
            }
        }
        return undefined;
    };
    /** Scan React fibers for binge / up-next asset (UI classnames change; props stay). */
    const findBingeAsset = () => {
        var _a, _b, _c, _d;
        // Legacy container still works when present
        try {
            const legacy = document.querySelector(".playback-binge__container");
            const legacyKey = getReactKey(legacy);
            if (legacyKey) {
                const props = (_b = (_a = legacy[legacyKey]) === null || _a === void 0 ? void 0 : _a.return) === null || _b === void 0 ? void 0 : _b.memoizedProps;
                const asset = (props === null || props === void 0 ? void 0 : props.bingePopUpAsset) || findBingeAssetInObject(props, new WeakSet(), 0);
                if (assetToEpisodeId(asset)) {
                    return asset;
                }
            }
        }
        catch (e) {
            /* ignore */
        }
        const allElements = document.querySelectorAll("*");
        for (let i = 0; i < allElements.length; i++) {
            const el = allElements[i];
            const key = getReactKey(el);
            if (!key)
                continue;
            const fiber = el[key];
            const roots = [(_c = fiber === null || fiber === void 0 ? void 0 : fiber.return) === null || _c === void 0 ? void 0 : _c.stateNode, (_d = fiber === null || fiber === void 0 ? void 0 : fiber.return) === null || _d === void 0 ? void 0 : _d.memoizedProps, fiber === null || fiber === void 0 ? void 0 : fiber.memoizedProps];
            for (let r = 0; r < roots.length; r++) {
                const rootObj = roots[r];
                if (!rootObj || typeof rootObj !== "object")
                    continue;
                const found = findBingeAssetInObject(rootObj, new WeakSet(), 0);
                if (found) {
                    return found;
                }
            }
        }
        return undefined;
    };
    /** Current episode tile in the More Episodes rail (has a `selected-*` class). */
    const getNextMoreEpisodesTile = () => {
        const tiles = Array.from(document.querySelectorAll('[data-testid="more-episodes-tile"]'));
        const selectedIdx = tiles.findIndex((tile) => typeof tile.className === "string" && /\bselected-/.test(tile.className));
        if (selectedIdx >= 0 && selectedIdx < tiles.length - 1) {
            return tiles[selectedIdx + 1];
        }
        return undefined;
    };
    const ensureMoreEpisodesOpen = () => {
        if (document.querySelector('[data-testid="more-episodes-list"]')) {
            return;
        }
        const toggle = document.querySelector('[data-testid="more-episodes-toggle-mobile"]') ||
            document.querySelector('[data-testid="more-episodes-toggle"]');
        if (toggle && typeof toggle.click === "function") {
            toggle.click();
        }
    };
    /** Read contentId/providerVariantId from React props on a more-episodes tile. */
    const getEpisodeIdFromTile = (tile) => {
        var _a, _b, _c, _d, _e;
        if (!tile) {
            return undefined;
        }
        try {
            const key = getReactKey(tile);
            if (!key) {
                return undefined;
            }
            const fiber = tile[key];
            const roots = [fiber === null || fiber === void 0 ? void 0 : fiber.memoizedProps, (_a = fiber === null || fiber === void 0 ? void 0 : fiber.return) === null || _a === void 0 ? void 0 : _a.memoizedProps, (_b = fiber === null || fiber === void 0 ? void 0 : fiber.return) === null || _b === void 0 ? void 0 : _b.stateNode];
            for (let r = 0; r < roots.length; r++) {
                const found = findBingeAssetInObject(roots[r], new WeakSet(), 0);
                const id = assetToEpisodeId(found);
                if (id) {
                    return id;
                }
                // Common tile prop shapes
                const direct = assetToEpisodeId(((_c = roots[r]) === null || _c === void 0 ? void 0 : _c.item) || ((_d = roots[r]) === null || _d === void 0 ? void 0 : _d.asset) || ((_e = roots[r]) === null || _e === void 0 ? void 0 : _e.data));
                if (direct) {
                    return direct;
                }
            }
        }
        catch (e) {
            /* ignore */
        }
        return undefined;
    };
    var messageHandler = function (e) {
        try {
            if (e.source != window) {
                return;
            }
            const messageType = e.data.type;
            if (messageType === "GetAdBreaks") {
                window.dispatchEvent(new CustomEvent("FromNode", {
                    detail: {
                        type: "AdBreaks",
                        adBreaks: getMappedAdBreaks(),
                        updatedAt: Date.now(),
                    },
                }));
            }
            else if (messageType === "Seek") {
                // Local/stream time in ms (already converted from global by VideoApi)
                const video = getVideo();
                const timeInSeconds = e.data.time / 1000;
                if (video) {
                    video.currentTime = timeInSeconds;
                }
                window.dispatchEvent(new CustomEvent("FromNode", {
                    detail: {
                        type: "Seek",
                        isPaused: video === null || video === void 0 ? void 0 : video.paused,
                        updatedAt: Date.now(),
                    },
                }));
            }
            else if (messageType === "ReplaceLocation") {
                let found = false;
                let ok = false;
                try {
                    const history = getRouterHistory();
                    const pathname = new URL(e.data.url, window.location.origin).pathname;
                    found = !!history;
                    if (history && pathname) {
                        history.replace(pathname);
                        ok = window.location.pathname === pathname;
                    }
                }
                catch (error) {
                    _routerHistory = null;
                    found = false;
                    console.error("Peacock history.replace failed", error);
                }
                window.dispatchEvent(new CustomEvent("FromNode", {
                    detail: {
                        type: "ReplaceLocation",
                        found,
                        ok,
                        updatedAt: Date.now(),
                    },
                }));
            }
            else if (messageType === "RecaptureSession") {
                recaptureSession("content-script");
            }
            else if (messageType === "NextEpisode") {
                if (isLivePlayback()) {
                    window.dispatchEvent(new CustomEvent("FromNode", {
                        detail: {
                            type: "NextEpisode",
                            nextEpisodeId: undefined,
                            updatedAt: Date.now(),
                        },
                    }));
                    return;
                }
                ensureMoreEpisodesOpen();
                // Prefer the tile after the selected More Episodes item (true up-next)
                const nextTile = getNextMoreEpisodesTile();
                let nextEpisodeId = getEpisodeIdFromTile(nextTile);
                if (!nextEpisodeId) {
                    const asset = findBingeAsset();
                    nextEpisodeId = assetToEpisodeId(asset);
                }
                window.dispatchEvent(new CustomEvent("FromNode", {
                    detail: {
                        type: "NextEpisode",
                        nextEpisodeId,
                        updatedAt: Date.now(),
                    },
                }));
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    const playbackPath = () => {
        const match = window.location.pathname.match(/\/watch\/playback\/(?:vod|event|preview|clip|live)\/[^/]+\/[^/]+/);
        return match ? match[0] : "";
    };
    let _lastNotifiedHref = window.location.href;
    let _lastRecapturePath = playbackPath();
    const notifyUrlChange = () => {
        const href = window.location.href;
        if (href === _lastNotifiedHref) {
            return;
        }
        _lastNotifiedHref = href;
        window.postMessage({ type: "FROM_PAGE_URL", href }, "*");
        const path = playbackPath();
        if (path && path !== _lastRecapturePath) {
            _lastRecapturePath = path;
            recaptureSession("episode-url");
        }
    };
    const patchHistoryMethod = (name) => {
        const original = window.history[name];
        if (typeof original !== "function" || original.__tpPatched) {
            return;
        }
        const wrapped = function () {
            const result = original.apply(this, arguments);
            notifyUrlChange();
            return result;
        };
        wrapped.__tpPatched = true;
        window.history[name] = wrapped;
    };
    const isPlayerController = (obj) => {
        if (!obj || typeof obj !== "object" || obj.nodeType) {
            return false;
        }
        try {
            if (typeof obj.createSessionAsync !== "function") {
                return false;
            }
            const name = obj.constructor && obj.constructor.name;
            return name === "PlayerController" || "currentPrecursor" in obj;
        }
        catch (e) {
            return false;
        }
    };
    const playerFromValue = (value, seen, depth) => {
        if (!value || typeof value !== "object" || depth > 4 || seen.has(value) || value.nodeType) {
            return null;
        }
        seen.add(value);
        if (isPlayerController(value)) {
            return value;
        }
        let keys;
        try {
            keys = Object.keys(value);
        }
        catch (e) {
            return null;
        }
        for (let i = 0; i < keys.length; i++) {
            if (!/player|session|controller|precursor|cvsdk|current|props|state|value|ref/i.test(keys[i])) {
                continue;
            }
            try {
                const found = playerFromValue(value[keys[i]], seen, depth + 1);
                if (found) {
                    return found;
                }
            }
            catch (e) {
                // ignore revoked accessors
            }
        }
        return null;
    };
    /** queryObjects() is DevTools-only. Find the live PlayerController from React instead. */
    const findPlayerController = (force) => {
        if (!force && isPlayerController(window.__pc)) {
            return window.__pc;
        }
        const seeds = [
            document.querySelector("#core-video-tape"),
            document.querySelector("#core-video-shaka"),
            document.querySelector("[data-testid='video-component']"),
            document.getElementById("root"),
            document.getElementById("app"),
            document.body,
        ];
        let fiber = null;
        for (let i = 0; i < seeds.length; i++) {
            fiber = fiberFromElement(seeds[i]);
            if (fiber) {
                break;
            }
        }
        if (!fiber) {
            return null;
        }
        while (fiber.return) {
            fiber = fiber.return;
        }
        const seenFibers = new Set();
        const seenValues = new Set();
        const queue = [fiber];
        let visited = 0;
        while (queue.length && visited < 4000) {
            const current = queue.shift();
            if (!current || seenFibers.has(current)) {
                continue;
            }
            seenFibers.add(current);
            visited++;
            const found = playerFromValue(current.stateNode, seenValues, 0) ||
                playerFromValue(current.memoizedProps, seenValues, 0) ||
                playerFromValue(current.memoizedState, seenValues, 0);
            if (found) {
                return found;
            }
            if (current.child) {
                queue.push(current.child);
            }
            if (current.sibling) {
                queue.push(current.sibling);
            }
        }
        if (isPlayerController(window.__pc)) {
            return window.__pc;
        }
        return null;
    };
    const emitSessionEvent = (action, extra) => {
        window.dispatchEvent(new CustomEvent("FromNode", {
            detail: Object.assign({
                type: "PlayerEvent",
                action: action,
                updatedAt: Date.now(),
            }, extra || {}),
        }));
    };
    const readSeekMs = (arg) => {
        const asMs = (value) => {
            if (typeof value !== "number" || !Number.isFinite(value)) {
                return null;
            }
            const duration = document.querySelector("video") && document.querySelector("video").duration;
            if (Number.isFinite(duration) && duration > 1 && value <= duration + 2) {
                return Math.round(value * 1000);
            }
            return Math.round(value);
        };
        if (typeof arg === "number") {
            return asMs(arg);
        }
        if (arg && typeof arg === "object") {
            if (Number.isFinite(arg.positionMs)) {
                return Math.round(arg.positionMs);
            }
            if (Number.isFinite(arg.positionSeconds)) {
                return Math.round(arg.positionSeconds * 1000);
            }
            if (arg.position != null) {
                return asMs(Number(arg.position));
            }
        }
        return null;
    };
    let suppressSessionEvent = false;
    const readAdDurationMs = (arg) => {
        if (typeof arg === "number" && Number.isFinite(arg)) {
            return arg > 1000 ? Math.round(arg) : Math.round(arg * 1000);
        }
        if (arg && typeof arg === "object") {
            if (Number.isFinite(arg.expectedDuration)) {
                return Math.round(arg.expectedDuration * 1000);
            }
            if (Number.isFinite(arg.durationMs)) {
                return Math.round(arg.durationMs);
            }
            if (Number.isFinite(arg.duration)) {
                return arg.duration > 1000 ? Math.round(arg.duration) : Math.round(arg.duration * 1000);
            }
        }
        return undefined;
    };
    const patchSessionMethod = (session, name) => {
        if (!session || typeof session[name] !== "function" || session[name].__tpPatched) {
            return;
        }
        const original = session[name];
        const wrapped = function () {
            const args = Array.prototype.slice.call(arguments);
            if (!suppressSessionEvent) {
                if (name === "seek") {
                    emitSessionEvent("seek", { seekTargetMs: readSeekMs(args[0]) });
                }
                else if (name === "seekToLiveEdge") {
                    emitSessionEvent("seek", { seekTargetMs: 100000000000000000 });
                }
                else if (name === "play" || name === "pause") {
                    emitSessionEvent(name);
                }
                else if (name === "notifyAdStarted") {
                    const adDurationMs = readAdDurationMs(args[0]);
                    console.log("[TpDebug] Peacock inject ad event: started", { adDurationMs });
                    emitSessionEvent("notifyAdStarted", { adDurationMs });
                }
                else if (name === "notifyAdPositionChanged") {
                    const adDurationMs = readAdDurationMs(args[0]);
                    console.log("[TpDebug] Peacock inject ad event: position changed", { adDurationMs });
                    emitSessionEvent("notifyAdPositionChanged", { adDurationMs });
                }
                else if (name === "notifyAdFinished") {
                    console.log("[TpDebug] Peacock inject ad event: finished");
                    emitSessionEvent("notifyAdFinished");
                }
            }
            return original.apply(this, arguments);
        };
        wrapped.__tpPatched = true;
        try {
            Object.defineProperty(session, name, { configurable: true, writable: true, value: wrapped });
        }
        catch (e) {
            session[name] = wrapped;
        }
    };
    const isSessionPatched = (session) => {
        return !!(session && session.play && session.play.__tpPatched);
    };
    const patchSessionControls = (session) => {
        if (!session) {
            return false;
        }
        const already = isSessionPatched(session);
        patchSessionMethod(session, "play");
        patchSessionMethod(session, "pause");
        patchSessionMethod(session, "seek");
        patchSessionMethod(session, "seekToLiveEdge");
        patchSessionMethod(session, "notifyAdStarted");
        patchSessionMethod(session, "notifyAdPositionChanged");
        patchSessionMethod(session, "notifyAdFinished");
        document.documentElement.setAttribute("data-tp-session", "1");
        if (!already) {
            window.dispatchEvent(new CustomEvent("FromNode", {
                detail: { type: "SessionCapture", hasSession: true, updatedAt: Date.now() },
            }));
        }
        return !already;
    };
    const installSessionCapture = (pc) => {
        window.__pc = pc;
        const install = () => {
            const proxy = pc.currentPrecursor && pc.currentPrecursor.sessionProxy;
            if (!proxy || typeof proxy.attachSession !== "function") {
                return false;
            }
            window.__sessionProxy = proxy;
            if (proxy.sessionControllerInternal) {
                window.__session = proxy.sessionControllerInternal;
                patchSessionControls(window.__session);
            }
            if (proxy.__capturePatched) {
                return true;
            }
            const original = proxy.attachSession;
            proxy.attachSession = function (session) {
                window.__sessionProxy = this;
                window.__session = session;
                patchSessionControls(session);
                return original.apply(this, arguments);
            };
            proxy.__capturePatched = true;
            return true;
        };
        if (!install() && !pc.__createSessionPatched && typeof pc.createSessionAsync === "function") {
            const original = pc.createSessionAsync;
            pc.createSessionAsync = function () {
                return Promise.resolve(original.apply(this, arguments)).then((result) => {
                    install();
                    return result;
                });
            };
            pc.__createSessionPatched = true;
        }
    };
    const captureCvsdkSession = () => {
        const pc = findPlayerController(false);
        if (!pc) {
            return false;
        }
        installSessionCapture(pc);
        return !!window.__session;
    };
    let _recaptureTimer = null;
    const recaptureSession = (reason) => {
        if (_recaptureTimer) {
            return;
        }
        const previous = window.__session;
        const pc = findPlayerController(true);
        if (pc) {
            installSessionCapture(pc);
        }
        if (window.__session && window.__session !== previous) {
            return;
        }
        if (isSessionPatched(previous) && reason !== "episode-url" && reason !== "content-script") {
            return;
        }
        let attempts = 0;
        _recaptureTimer = setInterval(() => {
            attempts++;
            const nextPc = findPlayerController(true);
            if (nextPc) {
                installSessionCapture(nextPc);
            }
            const gotNew = !!(window.__session && window.__session !== previous);
            if (gotNew || attempts >= 15) {
                clearInterval(_recaptureTimer);
                _recaptureTimer = null;
            }
        }, 400);
    };
    if (!window.injectScriptLoaded) {
        window.injectScriptLoaded = true;
        if (!captureCvsdkSession()) {
            let attempts = 0;
            const timer = setInterval(() => {
                attempts++;
                if (captureCvsdkSession() || attempts >= 20) {
                    clearInterval(timer);
                }
            }, 1000);
        }
        patchHistoryMethod("pushState");
        patchHistoryMethod("replaceState");
        if (window.navigation && typeof window.navigation.addEventListener === "function") {
            window.navigation.addEventListener("currententrychange", () => {
                notifyUrlChange();
            });
        }
        window.addEventListener("message", messageHandler, !1);
        window.addEventListener("PeacockSessionControl", (event) => {
            const detail = event.detail || {};
            if (detail.action === "recapture") {
                recaptureSession("content-script");
                return;
            }
            const session = window.__session;
            if (!session) {
                return;
            }
            if (detail.action === "seek") {
                suppressSessionEvent = true;
                try {
                    if (Number(detail.positionMs) >= 100000000000000000 &&
                        typeof session.seekToLiveEdge === "function") {
                        session.seekToLiveEdge();
                    }
                    else if (typeof session.seek === "function") {
                        session.seek(Number(detail.positionMs) / 1000);
                    }
                }
                finally {
                    suppressSessionEvent = false;
                }
            }
        });
    }
})();

/******/ })()
;