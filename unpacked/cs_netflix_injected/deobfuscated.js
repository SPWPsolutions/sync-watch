/******/(() => {
  // webpackBootstrap
  /******/
  "use strict";

  ; // ./src/Teleparty/ContentScripts/VideoApi/GlobalVideoType.ts
  var GlobalVideoType;
  (function (GlobalVideoType) {
    GlobalVideoType.EPISODE = "episode";
    GlobalVideoType.FEATURE = "feature";
    GlobalVideoType.LIVE = "live";
    GlobalVideoType.EXTRA = "extra";
    GlobalVideoType.EVENT = "event";
    GlobalVideoType.OTHER = "other";
    GlobalVideoType.SHORTS = "shorts";
    GlobalVideoType.NONE = "none";
    GlobalVideoType.MUSIC = "music";
  })(GlobalVideoType ||= {});
  ; // ./src/Teleparty/ContentScripts/Netflix/netflix_injected.js
  var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      if (value instanceof P) {
        return value;
      } else {
        return new P(function (resolve) {
          resolve(value);
        });
      }
    }
    return new (P ||= Promise)(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        if (result.done) {
          resolve(result.value);
        } else {
          adopt(result.value).then(fulfilled, rejected);
        }
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  (function () {
    const getReactInternals = root => {
      if (root == null) {
        return null;
      }
      var keys = Object.keys(root);
      var key = null;
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].startsWith("__reactInternalInstance")) {
          key = keys[i];
          break;
        }
      }
      if (key) {
        return root[key];
      } else {
        return null;
      }
    };
    const getReactFiber = root => {
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
      if (key) {
        return root[key];
      } else {
        return null;
      }
    };
    const getWrapperStateNode = () => {
      const watchVideoWrapper = document.querySelector(".watch-video");
      if (watchVideoWrapper) {
        const internals = getReactFiber(watchVideoWrapper);
        if (internals) {
          return internals.return.return.return.return.stateNode;
        }
      }
      return null;
    };
    const getCurrentMetaData = () => {
      try {
        return getWrapperStateNode().state.activeVideoMetadata._metadata._metadataObject.video;
      } catch (error) {
        return undefined;
      }
    };
    const getReleaseYear = () => {
      try {
        const currentMetaData = getCurrentMetaData();
        return currentMetaData.year ?? currentMetaData.seasons[0].year;
      } catch (error) {
        return undefined;
      }
    };
    const isMovie = () => {
      try {
        const wrapperStateNode = getWrapperStateNode();
        if (wrapperStateNode) {
          return wrapperStateNode.state.playableData.summary.type === "movie";
        } else {
          return false;
        }
      } catch (error) {
        // Default assume it's an episode?
        return false;
      }
    };
    const getVideoLookupData = () => {
      return {
        title: getCurrentMetaData()?.title,
        year: getReleaseYear(),
        type: isMovie() ? "MOVIE" : "TV"
      };
    };
    const getVideoPlayer = () => {
      var e = window.netflix.appContext.state.playerApp.getAPI().videoPlayer;
      var playerSessionIds = e.getAllPlayerSessionIds();
      var t = playerSessionIds.find(val => {
        return val.includes("watch");
      });
      return e.getVideoPlayerBySessionId(t);
    };
    const getAdState = () => {
      try {
        const currentAdBreak = getPlayerApi().state.playbackState.currentAdBreak;
        if (currentAdBreak != null) {
          const adDurationLeft = currentAdBreak.progress.adBreakOffset.ms;
          const watchingAds = true;
          return {
            watchingAds,
            adDurationLeft,
            nextAdBreak: getNextAdBreak()
          };
        } else {
          return {
            watchingAds: false,
            adDurationLeft: 0,
            nextAdBreak: getNextAdBreak()
          };
        }
      } catch (error) {
        return {
          watchingAds: false,
          adDurationLeft: 0,
          nextAdBreak: getNextAdBreak()
        };
      }
    };
    const getNextAdBreak = () => {
      try {
        const adBreaks = getPlayerApi().getAdBreaks();
        const currentTime = getVideoPlayer().getCurrentTime();
        if (!adBreaks || adBreaks.length == 0) {
          return undefined;
        } else {
          let currentClosest = 0;
          let currentDiff = Infinity;
          adBreaks.forEach(adBreak => {
            if (adBreak.locationMs) {
              const dif = adBreak.locationMs - currentTime;
              if (dif > 0 && dif < currentDiff) {
                currentDiff = dif;
                currentClosest = adBreak.locationMs;
              }
            }
          });
          if (currentClosest != 0) {
            return currentClosest;
          } else {
            return undefined;
          }
        }
      } catch (error) {
        return undefined;
      }
    };
    const getPlayerApi = () => {
      try {
        const reactFiber = getReactFiber(document.querySelector(".watch-video"));
        return reactFiber.return.return.return.return.return.stateNode || reactFiber.return.return.return.return.stateNode;
      } catch (error) {
        return undefined;
      }
    };
    const getVideoTitle = function () {
      return __awaiter(this, undefined, undefined, function* () {
        yield showControlsAsync();
        return;
      });
    };
    function findPlayElement() {
      var controlsRoot = document.querySelector(".PlayerControlsNeo__button-control-row");
      if (controlsRoot == null) {
        return null;
      }
      var keys = Object.keys(controlsRoot);
      var key = null;
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].startsWith("__reactInternalInstance")) {
          key = keys[i];
          break;
        }
      }
      var node = controlsRoot[key].child;
      while (node.sibling) {
        if (node.key == "play") {
          return node;
        }
        node = node.sibling;
      }
      return null;
    }
    const delay = milliseconds => __awaiter(this, undefined, undefined, function* () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, milliseconds);
      });
    });
    // returns an action which waits until the condition thunk returns true,
    // rejecting if maxDelay time is exceeded
    var delayUntil = (condition, maxDelay, delayStep = 250) => {
      return function () {
        const startTime = new Date().getTime();
        const checkForCondition = function () {
          if (condition()) {
            return Promise.resolve();
          }
          if (maxDelay !== null && new Date().getTime() - startTime > maxDelay) {
            return Promise.reject(new Error("delayUntil timed out" + condition));
          }
          return delay(delayStep).then(checkForCondition);
        };
        return checkForCondition();
      };
    };
    const checkSkipSupplemental = () => __awaiter(this, undefined, undefined, function* () {
      try {
        yield delayUntil(() => {
          try {
            return getWrapperStateNode().state.activeVideoMetadata._video != undefined;
          } catch (e) {
            return false;
          }
        }, 2500)();
        if (getWrapperStateNode().state.activeVideoMetadata._video.type == "supplemental") {
          console.log("SKIPPING SUPPLEMENTAL");
          getWrapperStateNode().handleFinishPrePlay();
          yield delayUntil(() => {
            try {
              return getWrapperStateNode().state.activeVideoMetadata._video.type != "supplemental";
            } catch (e) {
              return false;
            }
          }, Infinity)();
          console.log("DOne Skip");
        }
      } catch (e) {
        return false;
        // console.log(e);
      }
    });
    const getEpisodeInformation = () => {
      const title = getWrapperStateNode().state.activeVideoMetadata._video.title;
      const episodeNum = getWrapperStateNode().state.activeVideoMetadata._video.seq;
      const seasonNum = getWrapperStateNode().state.activeVideoMetadata._season._season.seq;
      const episodeData = {
        title: title,
        seasonNum: seasonNum,
        episodeNum: episodeNum
      };
      return episodeData;
    };
    const tryDisablePostPlay = () => {
      if (isMovie()) {
        const wrapperStateNode = getWrapperStateNode();
        if (wrapperStateNode) {
          window.oldHasPostPlay = wrapperStateNode.hasPostPlay;
          wrapperStateNode.hasPostPlay = () => {
            return false;
          };
          console.log("DISABLED POST PLAY FOR MOVIE");
        }
      }
    };
    const teardownFixPostPlay = () => {
      const wrapperStateNode = getWrapperStateNode();
      if (wrapperStateNode) {
        if (window.oldHasPostPlay) {
          wrapperStateNode.hasPostPlay = window.oldHasPostPlay;
        }
      }
    };
    const getPlayerWrapper = () => {
      try {
        const selectorList = [document.querySelector("div[data-uia=\"player\"]"), document.querySelector("div[data-videoid]"), document.querySelector("div .ltr-fntwn3"), document.querySelector(".active"), document.querySelector(".inactive"), document.querySelector(".passive"), document.querySelector(".watch-video--player-view").children[0]];
        for (var i = 0; i < selectorList.length; i++) {
          try {
            if (selectorList[i]) {
              return selectorList[i];
            }
          } catch (error) {
            // no-op
          }
        }
        return null;
      } catch (error) {
        return null;
      }
    };
    const getActionsState = () => {
      // Check if the video is in credits
      //next-episode-seamless-button
      const nextEpisodeButton = document.querySelector("[data-uia='next-episode-seamless-button']");
      return {
        nextEpisodeReady: !!nextEpisodeButton
      };
    };
    const showControlsAsync = () => __awaiter(this, undefined, undefined, function* () {
      const wrapper = getPlayerWrapper();
      if (wrapper) {
        const reactInstance = getReactInternals(wrapper);
        if (reactInstance) {
          reactInstance.memoizedProps.onPointerMoveCapture({
            stopPropagation: () => {
              /* no op*/
            },
            preventDefault: () => {
              /* no op*/
            }
          });
          yield delay(2);
        }
      }
    });
    const changeEpisodeFallback = id => __awaiter(this, undefined, undefined, function* () {
      try {
        var fakeEvent = {
          stopPropagation: () => {
            /* no op*/
          }
        };
        const api = getPlayerApi();
        api.handleSelectorEpisodePlay(fakeEvent, id);
      } catch (error) {
        console.log(error);
      }
    });
    const findProp = (e, prop) => {
      console.log(e);
      if (e == undefined) {
        return undefined;
      }
      const keys = Object.getOwnPropertyNames(e);
      let nest = [];
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (key === prop) {
          return e;
        } else if (typeof e[key] === "object") {
          nest.push(e[key]);
        }
      }
      for (let i = 0; i < nest.length; i++) {
        let currentObj = nest[i];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const res = findProp(currentObj, prop);
        if (res !== undefined) {
          return res;
        }
      }
      return undefined;
    };
    function seekInteraction(e) {
      var _a;
      var _c;
      try {
        if (e.source == window) {
          if (e.data.type && e.data.type === "SEEK") {
            if (e.data.time >= getVideoPlayer().duration) {
              getVideoPlayer().pause();
              getVideoPlayer().seek(getVideoPlayer().duration - 100);
            } else {
              getVideoPlayer().seek(e.data.time - 100);
            }
          } else if (e.data.type && e.data.type === "PAUSE") {
            getVideoPlayer().pause();
          } else if (e.data.type && e.data.type === "FIX_POST_PLAY") {
            tryDisablePostPlay();
          } else if (e.data.type && e.data.type === "PLAY") {
            if (isMovie() && "chrome" === "edge" && 0)
              // removed by dead control flow
              {}
            getVideoPlayer().play();
          } else if (e.data.type && e.data.type === "IsPaused") {
            const paused = getVideoPlayer().isPaused();
            let evt = new CustomEvent("FromNode", {
              detail: {
                type: "IsPaused",
                paused: paused,
                updatedAt: Date.now()
              }
            });
            window.dispatchEvent(evt);
          } else if (e.data.type && e.data.type === "GetCurrentTime") {
            const time = getVideoPlayer().getSegmentTime() ?? getVideoPlayer().getCurrentTime();
            let evt = new CustomEvent("FromNode", {
              detail: {
                type: "CurrentTime",
                time,
                updatedAt: Date.now()
              }
            });
            window.dispatchEvent(evt);
          } else if (e.data.type && e.data.type == "teardown") {
            teardownFixPostPlay();
            window.removeEventListener("message", seekInteraction, false);
            window.injectScriptLoaded = false;
          } else if (e.data.type && e.data.type == "NEXT_EPISODE") {
            try {
              changeEpisodeFallback(e.data.videoId);
            } catch (error) {
              console.log("Caught Error in React Next Episode " + error);
            }
          } else if (e.data.type && e.data.type == "GetState") {
            const player = getVideoPlayer();
            if (isMovie() && "chrome" === "edge" && 0)
              // removed by dead control flow
              {}
            if (player) {
              const paused = player.isPaused();
              const time = player.getSegmentTime() ?? player.getCurrentTime();
              const loading = player.getBusy() !== null;
              const adState = getAdState();
              const actionsState = getActionsState();
              let evt = new CustomEvent("FromNode", {
                detail: {
                  type: "UpdateState",
                  time,
                  paused,
                  adState,
                  loading,
                  actionsState,
                  updatedAt: Date.now()
                }
              });
              window.dispatchEvent(evt);
            }
          } else if (e.data.type && e.data.type === "ShowControls") {
            showControlsAsync();
          } else if (e.data.type && e.data.type === "CheckSkipSupplemental") {
            checkSkipSupplemental().then(() => {
              var evt = new CustomEvent("FromNode", {
                detail: {
                  type: "CheckSkipSupplemental",
                  updatedAt: Date.now()
                }
              });
              window.dispatchEvent(evt);
            });
          } else if (e.data.type && e.data.type === "GetPageTitle") {
            try {
              const pageTitle = getCurrentMetaData().title;
              let evt = new CustomEvent("FromNode", {
                detail: {
                  type: "GetTitle",
                  pageTitle,
                  updatedAt: Date.now()
                }
              });
              window.dispatchEvent(evt);
            } catch (e) {
              //
            }
          } else if (e.data.type && e.data.type === "GetVideoType") {
            let VideoType = GlobalVideoType.EPISODE;
            if (isMovie()) {
              VideoType = GlobalVideoType.FEATURE;
            }
            let evt = new CustomEvent("FromNode", {
              detail: {
                type: "GetType",
                VideoType,
                updatedAt: Date.now()
              }
            });
            window.dispatchEvent(evt);
          } else if (e.data.type && e.data.type === "GetEpisodeData") {
            let episodeData = undefined;
            try {
              episodeData = getEpisodeInformation();
              let evt = new CustomEvent("FromNode", {
                detail: {
                  type: "GetEpData",
                  episodeData,
                  updatedAt: Date.now()
                }
              });
              window.dispatchEvent(evt);
            } catch (error) {
              //
            }
          } else if (e.data.type && e.data.type === "GetVideoLookupData") {
            let videoLookupData = undefined;
            try {
              videoLookupData = getVideoLookupData();
              let evt = new CustomEvent("FromNode", {
                detail: {
                  type: "GetVideoData",
                  videoLookupData,
                  updatedAt: Date.now()
                }
              });
              window.dispatchEvent(evt);
            } catch (error) {
              //
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (!window.injectScriptLoaded) {
      window.injectScriptLoaded = true;
      console.log("Loaded TP Netflix Injected");
      checkSkipSupplemental();
      window.addEventListener("message", seekInteraction, false);
    }
  })();

  /******/
})();