var blDeserializer = (() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    CursorDrawerComponent: () => CursorDrawerComponent,
    DomJsonMerger: () => DomJsonMerger,
    LazyImagesRefresherApi: () => LazyImagesRefresherApi,
    NodeDeserializer: () => NodeDeserializer,
    PlayerComponent: () => PlayerComponent,
    ToggleIframeAnimationsApi: () => ToggleIframeAnimationsApi
  });

  // ../frontend-shared/dist/index.esm.js
  var __defProp2 = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var InjectorService = class {
    id = Math.random();
    registry = new WeakMap();
    register(c, instance) {
      this.registry.set(c, instance);
      return instance;
    }
    get(c) {
      if (!this.registry.get(c))
        throw new Error("Instance of " + c.name + " never added to registry");
      return this.registry.get(c);
    }
  };
  var u8 = Uint8Array;
  var u16 = Uint16Array;
  var u32 = Uint32Array;
  var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
      b[i] = start += 1 << eb[i - 1];
    }
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r[j] = j - b[i] << 5 | i;
      }
    }
    return [b, r];
  };
  var _a = freb(fleb, 2);
  var fl = _a[0];
  var revfl = _a[1];
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0);
  var fd = _b[0];
  var revfd = _b[1];
  var rev = new u16(32768);
  for (var i = 0; i < 32768; ++i) {
    x = (i & 43690) >>> 1 | (i & 21845) << 1;
    x = (x & 52428) >>> 2 | (x & 13107) << 2;
    x = (x & 61680) >>> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
  }
  var x;
  var flt = new u8(288);
  for (var i = 0; i < 144; ++i)
    flt[i] = 8;
  for (var i = 144; i < 256; ++i)
    flt[i] = 9;
  for (var i = 256; i < 280; ++i)
    flt[i] = 7;
  for (var i = 280; i < 288; ++i)
    flt[i] = 8;
  var fdt = new u8(32);
  for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
  var et = /* @__PURE__ */ new u8(0);
  var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e) {
  }
  var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
    fn();
  };
  function cloneJson(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  var eventTypes = {};
  var dispatcher = (eventType, eventName) => {
    const fullEventName = `buglink.${eventType}.${eventName}`;
    eventTypes[eventType] = eventTypes[eventType] || [];
    eventTypes[eventType].push(eventName);
    let dispatcherFunction = (event) => {
      let e = event ? { ...event } : {};
      e.name = eventName;
      e.type = eventType;
      if (!e.timestamp)
        e.timestamp = new Date().getTime();
      document.dispatchEvent(new CustomEvent(fullEventName, { detail: e }));
      return e;
    };
    dispatcherFunction.eventName = eventName;
    dispatcherFunction.eventType = eventType;
    dispatcherFunction.on = (h) => {
      document.addEventListener(fullEventName, (c) => {
        h(c.detail);
      });
    };
    return dispatcherFunction;
  };
  var d = dispatcher;
  var events = {
    user: {
      note: d("user", "note"),
      report: d("user", "report")
    },
    device: {
      information: d("device", "device-information")
    },
    cookie: {
      data: d("cookie", "cookie-data")
    },
    http: {
      abort: d("http", "request-abort"),
      error: d("http", "request-error"),
      before_request: d("http", "before-request"),
      before_response: d("http", "before-response"),
      after_response: d("http", "after-response")
    },
    tab: {
      data: d("tab", "tab-data"),
      opened: d("tab", "tab-opened"),
      closed: d("tab", "tab-closed")
    },
    dom: {
      change: d("dom", "dom-change"),
      full: d("dom", "dom-full"),
      css_add: d("dom", "css-add"),
      css_remove: d("dom", "css-remove"),
      map_created: d("dom", "map-created")
    },
    console: {
      assert: d("console", "console-assert"),
      clear: d("console", "console-clear"),
      count: d("console", "console-count"),
      countReset: d("console", "console-countReset"),
      debug: d("console", "console-debug"),
      dir: d("console", "console-dir"),
      dirxml: d("console", "console-dirxml"),
      error: d("console", "console-error"),
      group: d("console", "console-group"),
      groupCollapsed: d("console", "console-groupCollapsed"),
      groupEnd: d("console", "console-groupEnd"),
      info: d("console", "console-info"),
      log: d("console", "console-log"),
      table: d("console", "console-table"),
      time: d("console", "console-time"),
      timeEnd: d("console", "console-timeEnd"),
      timeLog: d("console", "console-timeLog"),
      trace: d("console", "console-trace"),
      warn: d("console", "console-warn")
    },
    performance: {
      cpu: d("performance", "cpu"),
      memory: d("performance", "memory"),
      timing: d("performance", "timing")
    },
    devtools: {
      open: d("devtools", "devtools-open")
    },
    error: {
      global: d("error", "global-error"),
      promise: d("error", "global-promise")
    },
    keyboard: {
      up: d("keyboard", "keyup"),
      down: d("keyboard", "keydown"),
      input: d("keyboard", "input"),
      value: d("keyboard", "value"),
      checked: d("keyboard", "checked")
    },
    storage: {
      session_update: d("storage", "session-update"),
      local_update: d("storage", "local-update"),
      session_full: d("storage", "session-full"),
      local_full: d("storage", "local-full")
    },
    media: {
      play: d("media", "play"),
      pause: d("media", "pause")
    },
    page: {
      visibility: d("page", "visibility"),
      referrer: d("page", "referrer"),
      network: d("page", "network"),
      address: d("page", "address"),
      hash: d("page", "hash")
    },
    window: {
      resize: d("window", "resize")
    },
    mouse: {
      touchmove: d("mouse", "touchmove"),
      mousemove: d("mouse", "mousemove"),
      mouseup: d("mouse", "mouseup"),
      mousedown: d("mouse", "mousedown"),
      click: d("mouse", "click"),
      contextmenu: d("mouse", "contextmenu"),
      dblclick: d("mouse", "dblclick"),
      touchstart: d("mouse", "touchstart"),
      touchend: d("mouse", "touchend"),
      scroll: d("mouse", "scroll"),
      elementscroll: d("mouse", "elementscroll")
    },
    session: {
      start: d("session", "session-start"),
      useremail: d("session", "user-email"),
      userstart: d("session", "user-start"),
      userstop: d("session", "user-stop")
    },
    list: (...names) => {
      return names;
    },
    name: (name) => {
      return name;
    },
    type: (...type) => {
      let ns = [];
      for (let t of type)
        ns.push(...eventTypes[t]);
      return ns;
    },
    types: (...types) => {
      return types;
    }
  };
  var blevent = events;
  var activityRelatedEventNames = ["dom-full", ...blevent.type("mouse"), "keydown", "keyup", "note"];
  function debounce(func, waitFor) {
    const debounced = (delay, fn) => {
      let timerId;
      return (...args) => {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
          fn(...args);
          timerId = null;
        }, delay);
      };
    };
    return debounced(waitFor, func);
  }
  var CssAbsoluteUrlTransformer = class {
    URL_IN_CSS_REF = /url\((?:'([^']*)'|"([^"]*)"|([^)]*))\)/gm;
    RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/;
    DATA_URI = /^(data:)([\w\/\+\-]+);(charset=[\w-]+|base64).*,(.*)/i;
    transform(cssText, href) {
      return (cssText || "").replace(this.URL_IN_CSS_REF, (origin, path1, path2, path3) => {
        const filePath = path1 || path2 || path3;
        if (!filePath) {
          return origin;
        } else if (!this.RELATIVE_PATH.test(filePath)) {
          return `url('${filePath}')`;
        } else if (this.DATA_URI.test(filePath)) {
          let u = `url(${filePath})`;
          if (filePath.indexOf('\\"') >= 0)
            u = `url('${filePath}')`;
          else if (filePath.indexOf("\\'") >= 0)
            u = `url("${filePath}")`;
          else if (filePath.indexOf("'") >= 0)
            u = `url("${filePath}")`;
          else if (filePath.indexOf('"') >= 0)
            u = `url('${filePath}')`;
          return u;
        } else if (filePath[0] === "/") {
          return `url('${this.extractOrigin(href) + filePath}')`;
        }
        const stack = href.split("/");
        const parts = filePath.split("/");
        stack.pop();
        for (const part of parts) {
          if (part === ".") {
            continue;
          } else if (part === "..") {
            stack.pop();
          } else {
            stack.push(part);
          }
        }
        return `url('${stack.join("/")}')`;
      });
    }
    proxyUrls(cssText, proxyBasePath) {
      return (cssText || "").replace(this.URL_IN_CSS_REF, (_, path1, path2, path3) => {
        const filePath = path1 || path2 || path3;
        if (!this.RELATIVE_PATH.test(filePath)) {
          return `url('${proxyBasePath + filePath}')`;
        } else
          return `url('${filePath}')`;
      });
    }
    extractOrigin(url) {
      let origin;
      if (url.indexOf("//") > -1) {
        origin = url.split("/").slice(0, 3).join("/");
      } else {
        origin = url.split("/")[0];
      }
      origin = origin.split("?")[0];
      return origin;
    }
  };
  function urlToDomain(url) {
    try {
      let u = new URL(url);
      const d2 = u.hostname + (u.port && u.port != "80" ? ":" + u.port : "");
      return d2;
    } catch {
      return url;
    }
  }
  var SessionId = class {
    start = new Date("2020-07-02T00:11:00Z").getTime();
    parse(raw) {
      let tokens = raw.split(".");
      let tab = +tokens[0] + this.start;
      let timestamp = tab + +tokens[1];
      let domain = decodeURIComponent(tokens.slice(2).join("."));
      return { timestamp, tab, domain };
    }
    generate(data) {
      let tab = +data.tab - this.start;
      let timestamp = +data.timestamp - +data.tab;
      let domain = data.domain || data.url || "";
      if (domain.startsWith("http"))
        domain = urlToDomain(domain);
      return `${tab}.${timestamp}.${encodeURIComponent(domain)}`;
    }
  };
  var ConfigurationKey = class {
  };
  __publicField(ConfigurationKey, "domains", "buglink.configuration.domains");
  __publicField(ConfigurationKey, "gotStarted", "buglink.configuration.got-started");
  var logi = console.log.bind(console, "%c%s", `color: ${"#284271"}; background: ${"#a8e9ff"}; font-size: 10px; border-radius: 2px; font-weight: bold; padding: 2px`);
  var loge = console.log.bind(console, "%c%s", `color: ${"#be0000"}; background: ${"#ffcaca"}; font-size: 10px; border-radius: 2px; font-weight: bold; padding: 2px`);
  var logw = console.log.bind(console, "%c%s", `color: ${"#7c4400"}; background: ${"#ffd06f"}; font-size: 10px; border-radius: 2px; font-weight: bold; padding: 2px`);
  var ConsoleProvider = class {
    error(...data) {
      loge("ERROR", ...data);
      this.printStack();
    }
    log(...data) {
      logi("INFO", ...data);
      this.printStack();
    }
    trace(...data) {
      logi("TRACE", ...data);
      this.printStack();
    }
    debug(...data) {
      logw("DEBUG", ...data);
      this.printStack();
    }
    printStack() {
      console.groupCollapsed("STACK");
      console.trace();
      console.groupEnd();
    }
  };
  var BLLogger = class {
    constructor(level = "info", location = "", provider = new ConsoleProvider()) {
      this.level = level;
      this.location = location;
      this.provider = provider;
      const checkLogLevel = () => {
        const bl_log = window.bl_log;
        if (bl_log) {
          this.level = bl_log.level || "info";
          this.location = bl_log.location ?? "";
        }
      };
      checkLogLevel();
      setInterval(checkLogLevel, 1e3);
    }
    log(location, ...message) {
      if (this.locationEnabled(location))
        this.provider.log(location, ...message);
    }
    tracex(location, x2) {
      if (this.level == "trace") {
        if (this.locationEnabled(location)) {
          const log3 = this.provider.trace;
          try {
            x2(log3);
          } catch {
          }
        }
      }
    }
    trace(location, ...message) {
      if (this.level == "trace" && this.locationEnabled(location))
        this.provider.trace(location, ...message);
    }
    debug(location, ...message) {
      if (["trace", "debug"].indexOf(this.level) && this.locationEnabled(location))
        this.provider.debug(location, ...message);
    }
    error(location, ...message) {
      if (this.locationEnabled(location))
        this.provider.error(location, ...message);
    }
    locationEnabled(location) {
      return this.location == "" || location.indexOf(this.location) == 0;
    }
  };
  var RequestAnimationFrameTimer = class {
    reqAniFrameId;
    baseRafTime;
    end = false;
    constructor() {
      this.resetTimer();
    }
    stop() {
      this.end = true;
    }
    start(callback) {
      this.end = false;
      let lastTime = 0;
      let internalCallback = (t) => {
        const timeFromBase = t - this.baseRafTime;
        callback(t - lastTime, timeFromBase);
        lastTime = t;
        cancelAnimationFrame(this.reqAniFrameId);
        if (!this.end)
          this.reqAniFrameId = requestAnimationFrame(internalCallback);
      };
      this.reqAniFrameId = requestAnimationFrame(internalCallback);
    }
    resetTimer() {
      const x2 = requestAnimationFrame((t) => {
        this.baseRafTime = t;
        cancelAnimationFrame(x2);
      });
    }
  };
  function observeMethod(target, method, newMethod) {
    const original = target[method];
    const wrapper = function(...args) {
      let options = {
        skipThrow: false,
        override: null,
        onError: (error) => {
        },
        beforeReturn: (result) => {
          return result;
        },
        executeOriginal: () => {
          return original.apply(this, args);
        }
      };
      newMethod.apply(this, [...args, options]);
      if (options.override) {
        return options.override(args);
      } else {
        try {
          let rv = options.executeOriginal();
          return options.beforeReturn(rv);
        } catch (e) {
          options.onError(e);
          if (!options.skipThrow)
            throw e;
        }
      }
    };
    target[method] = wrapper;
    return function() {
      target[method] = original;
    };
  }

  // src/dom.json-merger.ts
  var DomJsonMerger = class {
    debugging = false;
    merge(domJson, mutations) {
      let json = cloneJson(domJson);
      let nodes = new Map();
      this.updateNodes(json, nodes);
      for (let m of mutations)
        this.applyMutation(cloneJson(m), nodes);
      return json;
    }
    updateNodes(json, nodes) {
      exploreWithoutModifying(json, (j) => {
        if (j.id && nodes.has(j.id))
          this.error(`Json with id ${j.id} already present`);
        if (j.id) {
          nodes.set(j.id, j);
        }
        return j;
      });
    }
    applyMutation(e, nodes) {
      const findElement = (id) => {
        let el = nodes.get(id);
        return el;
      };
      if (e.name == "mutation-add") {
        let parent = findElement(e.parent);
        if (parent == void 0) {
          this.error("Trying to add a node to a non existent parent. ID: " + e.parent);
        } else {
          try {
            let indexWhereToInsert = -1;
            let forComparison = 0;
            if (parent.children && e.before && parent.children.findIndex((c) => c.id == e.before) >= 0) {
              indexWhereToInsert = parent.children.findIndex((c) => c.id == e.before) + 1;
            } else if (e.after && parent.children && parent.children.findIndex((c) => c.id == e.after) >= 0) {
              indexWhereToInsert = parent.children.findIndex((c) => c.id == e.after);
              forComparison = 1;
            }
            let cIndex = parent.children?.findIndex((c) => c.id == e.id);
            if (cIndex && cIndex < 0 || indexWhereToInsert >= 0 && cIndex != indexWhereToInsert - forComparison) {
              if (indexWhereToInsert >= 0 && parent.children)
                parent.children.splice(indexWhereToInsert, 0, e);
              else
                parent.children?.push(e);
              this.updateNodes(e, nodes);
            } else {
              if (this.debugging)
                console.log("Child already added", e);
            }
          } catch (err) {
            if (this.debugging)
              this.error(JSON.stringify(err), e);
          }
        }
      } else if (e.name == "mutation-remove") {
        try {
          let parent = findElement(e.parent);
          if (parent) {
            let tr = findElement(e.id);
            if (!tr) {
              this.error("Trying to remove element not in nodes (and json)");
            }
            let index = parent.children?.findIndex((c) => c.id == e.id) ?? -1;
            if (index < 0)
              this.error("Trying to remove element not in children of parent");
            else {
              parent.children?.splice(index, 1);
              nodes.delete(e.id);
              if (this.debugging)
                console.log(`Deleting ${e.id}`);
            }
          }
        } catch (e2) {
          if (this.debugging)
            this.error("Could not remove element: ", e2);
        }
      } else if (e.name == "mutation-attribute") {
        let element = findElement(e.id);
        if (element && e.attributes) {
          element.attributes = element.attributes ?? {};
          for (let a in e.attributes) {
            element.attributes[a] = e.attributes[a];
          }
        } else if (this.debugging) {
          this.error("Could not find element to apply attribute", e);
        }
      } else if (e.name == "mutation-style") {
        let element = findElement(e.id);
        if (element && e.styles) {
          element.styles = element.styles ?? {};
          for (let a in e.styles) {
            element.styles[a] = e.styles[a];
          }
        } else if (this.debugging) {
          this.error("Could not find element to apply attribute", e);
        }
      } else if (e.name == "mutation-text") {
        let element = findElement(e.id);
        if (element) {
          element.text = e.text;
        } else if (this.debugging)
          this.error("Could not find text element", e);
      }
    }
    error(message, e) {
      if (this.debugging) {
        console.warn(message, e);
      }
    }
  };
  function exploreWithoutModifying(j, action) {
    const exploreChildren = (children) => {
      if (children)
        children.forEach((c, i) => {
          exploreWithoutModifying(c, action);
        });
    };
    exploreChildren(j.children);
    if (j.shadow)
      exploreChildren(j.shadow.children);
    return action(j);
  }

  // src/player/toggle-iframe-animations.api.ts
  var ToggleIframeAnimationsApi = class {
    toogleAnimations(iframe) {
      const doc = iframe.contentDocument;
      this.checkPauseStylesAlreadyInjected(doc);
      doc.body?.classList.toggle("pause-animations");
    }
    pauseAnimations(iframe) {
      const doc = iframe.contentDocument;
      this.checkPauseStylesAlreadyInjected(doc);
      doc.body?.classList.add("pause-animations");
    }
    playAnimations(iframe) {
      const doc = iframe.contentDocument;
      this.checkPauseStylesAlreadyInjected(doc);
      doc.body?.classList.remove("pause-animations");
    }
    checkPauseStylesAlreadyInjected(doc) {
      let injectedStyle = doc.querySelector("#bl-injected-style");
      if (!injectedStyle) {
        let injectedStyle2 = doc.createElement("style");
        injectedStyle2.id = "bl-injected-style";
        injectedStyle2.innerHTML = `
.pause-animations * {
  -webkit-animation-play-state: paused !important;
  -moz-animation-play-state: paused !important;
  -ms-animation-play-state: paused !important;
  -o-animation-play-state: paused !important;
  animation-play-state: paused !important;
}
        `;
        doc.head?.appendChild(injectedStyle2);
      }
    }
  };

  // src/deserializer/lazy-images-refresher.api.ts
  var LazyImagesRefresherApi = class {
    refreshLazyImages(iframe, options = { skipVisibleAreaCheck: false }) {
      let images = iframe.contentDocument.body.querySelectorAll("img[data-blsrc]");
      images.forEach((img) => {
        const ibox = img.getBoundingClientRect();
        let srcIsStillTheLazyState = (img.getAttribute("src")?.indexOf("blsrc-lazy") ?? -1) >= 0;
        let imageInVisibleArea = ibox.top < iframe.contentWindow.innerHeight;
        if (img.hasAttribute("data-blsrc") && (imageInVisibleArea || options.skipVisibleAreaCheck)) {
          if (srcIsStillTheLazyState)
            img.setAttribute("src", img.getAttribute("data-blsrc"));
          img.removeAttribute("data-blsrc");
        }
      });
    }
    manageLazyImage(node, json) {
      if (json.width && json.height) {
        node.setAttribute("data-blsrc", json.attributes?.src ?? "");
        node.setAttribute("src", this.imageBase64(json));
      }
    }
    imageBase64(json) {
      return `data:image/svg+xml,<svg class='blsrc-lazy' xmlns='http://www.w3.org/2000/svg' width='${json.width ?? 1}' height='${json.height ?? 1}'></svg>`;
    }
  };

  // src/player/cursor-drawer.component.ts
  function blIcon(path) {
    return ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="sc-bl-icon">
              <path class="sc-bl-icon" d="${path}" />
            </svg>`;
  }
  function svg(content) {
    return ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="sc-bl-icon">
              ${content}
            </svg>`;
  }
  var CursorDrawerComponent = class {
    cursor;
    cursorClick;
    root;
    lastMouseMoveTarget = { id: 0, width: 0, height: 0 };
    constructor() {
    }
    static createCursor() {
      const c = new CursorDrawerComponent();
      let root = c.initCursor();
      root.drawCursor = (iframe, events2, deserialized) => {
        c.drawCursor.bind(c)(iframe, events2, deserialized);
      };
      return root;
    }
    initCursor() {
      let root = document.createElement("div");
      root.style.position = "absolute";
      root.style.top = "0";
      root.style.left = "0";
      root.style.pointerEvents = "none";
      let cursorSvg = document.createElement("div");
      cursorSvg.innerHTML = svg(`<circle cx="12" cy="12" r="10" style="fill: #56cdffad;"></circle>`);
      this.cursorClick = cursorSvg.querySelector("svg");
      this.cursorClick.classList.add("icon-cursor-click");
      root.appendChild(this.cursorClick);
      cursorSvg.innerHTML = blIcon("M 0.82757583,0.12812015 16.478887,14.182722 9.4260635,14.487949 13.012006,21.907785 9.2929925,23.876393 5.9902923,16.113527 0.32773333,22.042425 Z");
      this.cursor = cursorSvg.querySelector("svg");
      this.cursor.classList.add("icon-cursor");
      root.appendChild(this.cursor);
      let cursorStyle = document.createElement("style");
      let cursorRules = `fill: black; stroke: white;stroke-width: 1px;`;
      if (navigator.platform.toLowerCase().indexOf("win") >= 0)
        cursorRules = `fill: white; stroke: black;stroke-width: 1px;`;
      cursorStyle.innerHTML = `
            .icon-cursor {
                position: absolute;
            }
            .icon-cursor-click {
                position: absolute;
                display: none;
            }
            .icon-cursor path {${cursorRules}}
        `;
      root.appendChild(cursorStyle);
      this.root = root;
      return root;
    }
    drawCursor(iframe, events2, deserialized) {
      if (!this.root) {
        this.root = this.initCursor();
      }
      this.root.style.width = iframe.width;
      this.root.style.height = iframe.height;
      const target = (e) => deserialized.get(e.target);
      let lastMouseMove;
      let lastClickEvent;
      let lastInput;
      for (let be of events2) {
        if (be.name == "input" || be.name == "value") {
          lastInput = be;
        } else {
          let e = be;
          if (e.name == "mousedown") {
            this.cursorClick.style.top = e.y - 10 + "px";
            this.cursorClick.style.left = e.x - 10 + "px";
            this.cursorClick.style.display = "block";
          } else if (e.name == "mouseup") {
            this.cursorClick.style.display = "none";
          } else if (e.name == "mousemove") {
            lastMouseMove = e;
            this.cursor.style.top = e.y + "px";
            this.cursor.style.left = e.x + "px";
            if (this.cursorClick.style.display == "block") {
              this.cursorClick.style.top = e.y - 10 + "px";
              this.cursorClick.style.left = e.x - 10 + "px";
            }
          } else if (e.name == "click") {
            lastClickEvent = e;
          }
        }
      }
      this.applyFakeClassesIfLastEventTargetChanged(lastInput, lastClickEvent, lastMouseMove, iframe, target);
      return this.root;
    }
    applyFakeClassesIfLastEventTargetChanged(lastInput, lastClickEvent, lastMouseMove, iframe, target) {
      if (lastInput || lastClickEvent || lastMouseMove) {
        if (lastInput || lastClickEvent) {
          this.cleanClasses(iframe, "focus-fake-class");
          if (lastInput)
            this.applyClass(target(lastInput), "focus-fake-class");
          if (lastClickEvent)
            this.applyClass(target(lastClickEvent), "focus-fake-class");
        }
        if (lastMouseMove) {
          let t = target(lastMouseMove);
          if (t && t.getBoundingClientRect) {
            let box = t.getBoundingClientRect();
            let { width, height } = box;
            if (this.lastMouseMoveTarget.id != lastMouseMove.target || this.lastMouseMoveTarget.width != width || this.lastMouseMoveTarget.height != height) {
              this.cleanClasses(iframe, "hover-fake-class");
              this.applyClass(t, "hover-fake-class");
              this.lastMouseMoveTarget = { id: lastMouseMove.target, width, height };
            }
          }
        }
      }
    }
    applyClass(target, className, options = { parentWidthTolerance: 50 }) {
      if (target && target.classList) {
        target.classList.add(className);
        let tr = target.getBoundingClientRect();
        let w = tr.width;
        let h = tr.height;
        let checkParent = true;
        let parent = target.parentElement;
        const applyClassToParent = () => {
          while (checkParent) {
            if (parent) {
              let pr = parent.getBoundingClientRect();
              if (pr.width <= w + options.parentWidthTolerance && pr.height <= h + options.parentWidthTolerance) {
                parent.classList.add(className);
                parent = parent.parentElement;
              } else {
                checkParent = false;
              }
            } else
              checkParent = false;
          }
        };
        applyClassToParent();
        if (target.assignedSlot) {
          checkParent = true;
          parent = target.assignedSlot;
          applyClassToParent();
        }
      }
    }
    cleanClasses(iframe, ...classes) {
      for (let c of classes)
        iframe.contentDocument?.querySelectorAll("." + c).forEach((el) => {
          el.classList.remove(c);
        });
      let webComponents = [...iframe.contentDocument?.querySelectorAll("*")].filter((x2) => x2.tagName.indexOf("-") >= 0);
      const pageHasWebComponents = webComponents.length > 0;
      if (pageHasWebComponents) {
        for (let w of webComponents) {
          let sr = w.shadowRoot || w._closed_mode_shadowRoot;
          if (sr) {
            for (let c of classes)
              sr.querySelectorAll("." + c).forEach((el) => {
                el.classList.remove(c);
              });
          }
        }
      }
    }
  };

  // src/player/focus-hover-fake-class-adder.api.ts
  var FocusHoverFakeClassAdderApi = class {
    HOVER_SELECTOR = /([^\\]):hover/g;
    FOCUS_SELECTOR = /([^\\]):focus/g;
    async addHoverRules(iframeDocument, hoverClass = "-fake-class") {
      await this.waitForAllStylesheet(iframeDocument);
      this.createFakeStyleSheet(iframeDocument, iframeDocument);
    }
    createFakeCssRule(selectorText, cssText, hoverClass = "-fake-class") {
      if (this.HOVER_SELECTOR.test(selectorText)) {
        const newSelector = selectorText.replace(this.HOVER_SELECTOR, "$1.hover" + hoverClass);
        let css = cssText;
        return { selector: newSelector, css };
      } else if (this.FOCUS_SELECTOR.test(selectorText)) {
        const newSelector = selectorText.replace(this.FOCUS_SELECTOR, "$1.focus" + hoverClass);
        let css = cssText;
        return { selector: newSelector, css };
      } else
        return { selector: "", css: cssText };
    }
    createFakeStyleSheet(target, doc = document, hoverClass = "-fake-class") {
      if (target.styleSheets) {
        let styles = [];
        for (let i = 0; i < target.styleSheets.length; i++) {
          styles.push(target.styleSheets.item(i));
        }
        for (let s of styles) {
          let className = s.ownerNode?.className ?? "";
          if (className.indexOf && className.indexOf("bl_focus_hover_fake_style") < 0)
            this.createFakeStyleElement(s, doc);
        }
      }
      let newDoc = doc.implementation.createHTMLDocument();
      target.querySelectorAll("style:not(.bl_focus_hover_fake_style)").forEach((style) => {
        if (style.sheet) {
          this.createFakeStyleElement(style.sheet, doc);
        } else {
          let newStyle = style.cloneNode(true);
          newDoc.head.appendChild(newStyle);
          let s = newDoc.querySelector("style");
          if (s?.sheet)
            this.createFakeStyleElement(s.sheet, doc);
          if (s)
            newDoc.head.removeChild(s);
        }
      });
    }
    createFakeStyleElement(s, doc) {
      let css = [];
      try {
        let rules = s.rules || s.cssRules;
        for (let r in rules) {
          let rule = rules[r];
          let cssMediaRule = rule;
          if (cssMediaRule.media) {
            let mediaRule = [];
            for (let m = 0; m < cssMediaRule.media.length; m++) {
              let media = (cssMediaRule.media.item ? cssMediaRule.media.item(m) : cssMediaRule.media[m]) ?? "";
              mediaRule.push(media);
            }
            const mediaRules = [];
            let mRules = cssMediaRule.cssRules || [];
            for (let c = 0; c < mRules.length; c++) {
              let r2 = this.cssRuleText(mRules[c]);
              if (r2)
                mediaRules.push(r2);
            }
            if (mediaRules.length > 0)
              css.push(`@media ${mediaRule.join(",")} {
                            ${mediaRules.join("\n")}
                        }`);
          } else {
            let r2 = this.cssRuleText(rule);
            if (r2)
              css.push(r2);
          }
        }
      } catch (e) {
        console.warn(e);
      }
      let style = doc.createElement("style");
      style.className = "bl_focus_hover_fake_style";
      style.appendChild(document.createTextNode(css.join("\n")));
      let ownerNode = s.ownerNode;
      if (ownerNode)
        ownerNode.parentNode?.insertBefore(style, ownerNode);
    }
    cssRuleText(rule) {
      const cssRule = this.createFakeCssRule(rule.selectorText, rule.cssText);
      if (cssRule.selector) {
        const cssRuleText = `${cssRule.selector}, ${cssRule.css}`;
        return cssRuleText;
      }
      return "";
    }
    async waitForAllStylesheet(iframeDocument) {
      let unloaded = this.unloadedStylesheet(iframeDocument);
      let unloadPromises = unloaded.map((l) => new Promise((r) => l.onload = r));
      await Promise.all(unloadPromises);
    }
    unloadedStylesheet(iframeDocument) {
      let unloaded = [];
      let links = iframeDocument.head.querySelectorAll('link[rel="stylesheet"]');
      links.forEach((css) => {
        if (!css.sheet) {
          unloaded.push(css);
        }
      });
      return unloaded;
    }
  };

  // src/deserializer/deserializer.utils.ts
  var DOMDeserializerHelper = class {
    applyAttributes(node, json) {
      if (json.attributes) {
        for (const name in json.attributes) {
          if (!json.attributes.hasOwnProperty(name)) {
            continue;
          }
          if (node.tagName == "LINK" && name == "href")
            continue;
          let value = json.attributes[name];
          value = typeof value === "boolean" ? "" : value;
          try {
            if (value !== null) {
              if (name === "xlink:href") {
                node.setAttributeNS("http://www.w3.org/1999/xlink", name, value);
              } else if (name == "onload" || name == "onclick" || name.substring(0, 7) == "onmouse") {
                node.setAttribute("_" + name, value);
              } else if (name == "rel") {
                if (value == "preload" && json.attributes["as"] == "style")
                  node.setAttribute("rel", "stylesheet");
                else
                  node.setAttribute("rel", value);
              } else if (name == "as") {
                if (value != "style")
                  node.setAttribute("as", value);
              } else {
                node.setAttribute(name, value);
              }
            } else if (value === null) {
              if (name === "xlink:href")
                node.removeAttributeNS("http://www.w3.org/1999/xlink", name);
              else
                node.removeAttribute(name);
            }
          } catch (error) {
          }
          if (node.tagName == "IMG" && name == "src") {
            new LazyImagesRefresherApi().manageLazyImage(node, json);
          }
        }
      }
      if (json.styles) {
        for (let a in json.styles) {
          if (json.styles[a] === null) {
            node.style.removeProperty(a);
          } else {
            let value = json.styles[a];
            let s = json.styles[a];
            let i = "";
            if (value.indexOf("!important") >= 0) {
              s = value.replace(" !important", "").replace("!important", "");
              i = "important";
            }
            node.style.setProperty(a, s, i);
          }
        }
      }
    }
  };

  // src/deserializer/canvas.deserializer.ts
  var CanvasDomDeserializer = class {
    deserialize(json, doc) {
      let node = doc.createElement("canvas");
      const image = document.createElement("img");
      image.src = json.dataUrl ?? "";
      image.onload = () => {
        try {
          const ctx = node.getContext("2d");
          if (ctx) {
            ctx.drawImage(image, 0, 0, image.width, image.height);
          }
        } catch (e) {
          console.log("Could not deserialize canvas URL", e);
        }
      };
      let dsh = new DOMDeserializerHelper();
      dsh.applyAttributes(node, json);
      return node;
    }
  };

  // src/deserializer/form.deserializer.ts
  var FormDomDeserializer = class {
    deserialize(json, document2) {
      let node = document2.createElement(json.tag);
      if (json.tag == "textarea") {
        const child = document2.createTextNode(json.attributes ? json.attributes.value ?? "" : "");
        node.appendChild(child);
      }
      new DOMDeserializerHelper().applyAttributes(node, json);
      return node;
    }
  };

  // src/deserializer/svg.deserializer.ts
  var svgCaseSensitiveTags = {
    altglyph: "altGlyph",
    altglyphdef: "altGlyphDef",
    altglyphitem: "altGlyphItem",
    animatecolor: "animateColor",
    animatemotion: "animateMotion",
    animatetransform: "animateTransform",
    clippath: "clipPath",
    feblend: "feBlend",
    fecolormatrix: "feColorMatrix",
    fecomponenttransfer: "feComponentTransfer",
    fecomposite: "feComposite",
    feconvolvematrix: "feConvolveMatrix",
    fediffuselighting: "feDiffuseLighting",
    fedisplacementmap: "feDisplacementMap",
    fedistantlight: "feDistantLight",
    fedropshadow: "feDropShadow",
    feflood: "feFlood",
    fefunca: "feFuncA",
    fefuncb: "feFuncB",
    fefuncg: "feFuncG",
    fefuncr: "feFuncR",
    fegaussianblur: "feGaussianBlur",
    feimage: "feImage",
    femerge: "feMerge",
    femergenode: "feMergeNode",
    femorphology: "feMorphology",
    feoffset: "feOffset",
    fepointlight: "fePointLight",
    fespecularlighting: "feSpecularLighting",
    fespotlight: "feSpotLight",
    fetile: "feTile",
    feturbulence: "feTurbulence",
    foreignobject: "foreignObject",
    glyphref: "glyphRef",
    lineargradient: "linearGradient",
    radialgradient: "radialGradient",
    solidcolor: "solidColor",
    textarea: "textArea",
    textpath: "textPath"
  };
  var SvgDomDeserializer = class {
    constructor(elementDomSerializer) {
      this.elementDomSerializer = elementDomSerializer;
    }
    deserialize(json, doc) {
      let dsh = new DOMDeserializerHelper();
      const explore = (j) => {
        if (j.type == "text" && !j.tag) {
          return doc.createTextNode(j.text);
        } else {
          let tag = svgCaseSensitiveTags[(j.tag ?? "").toLowerCase()] ?? j.tag;
          let n = doc.createElementNS("http://www.w3.org/2000/svg", tag);
          if (j.children) {
            for (let c of j.children) {
              let child = explore(c);
              n.appendChild(child);
            }
          }
          dsh.applyAttributes(n, j);
          if (this.elementDomSerializer.onNodeDeserialized)
            this.elementDomSerializer.onNodeDeserialized(n, j);
          return n;
        }
      };
      return explore(json);
    }
  };

  // src/deserializer/text.deserializer.ts
  var TextDomDeserializer = class {
    deserialize(json, document2) {
      let node = document2.createTextNode(json.text || json.css || json.script || "");
      return node;
    }
  };

  // src/deserializer/web-component.deserializer.ts
  var WebComponentDomDeserializer = class {
    constructor(elementDomSerializer) {
      this.elementDomSerializer = elementDomSerializer;
    }
    deserialize(json, doc) {
      let deserialize = (c) => this.elementDomSerializer.deserialize(c, doc);
      let w = doc.createElement(json.tag);
      let shadow = json.shadow;
      let documentFragment = new DocumentFragmentSupporter(deserialize);
      let isDocumentFragment = documentFragment.isDocumentFragment(json);
      if (shadow) {
        if (!w.shadowRoot) {
          if (isDocumentFragment) {
            documentFragment.linkTo(w, json);
          } else
            w.attachShadow({ mode: shadow.mode });
        }
        if (shadow.style && w.shadowRoot) {
          let style = doc.createElement("style");
          style.innerHTML = shadow.style;
          w.shadowRoot.appendChild(style);
        }
        if (!isDocumentFragment && shadow.children && w.shadowRoot)
          for (let c of shadow.children) {
            w.shadowRoot.appendChild(deserialize(c));
          }
        if (w.shadowRoot) {
          new FocusHoverFakeClassAdderApi().createFakeStyleSheet(w.shadowRoot, doc);
        }
      }
      new DOMDeserializerHelper().applyAttributes(w, json);
      return w;
    }
  };
  var DocumentFragmentSupporter = class {
    constructor(deserialize) {
      this.deserialize = deserialize;
    }
    isDocumentFragment(json) {
      return json.shadow?.shadowType == "document-fragment";
    }
    linkTo(w, json) {
      let fragment = this.deserialize(json.shadow.documentFragment);
      w.appendChild(fragment);
      observeMethod(fragment, "appendChild", (...args) => {
        let options = args[args.length - 1];
        options.override = () => {
          w.appendChild(args[0]);
        };
      });
      observeMethod(fragment, "insertBefore", (...args) => {
        let options = args[args.length - 1];
        options.override = () => {
          w.insertBefore(args[0], args[1]);
        };
      });
      observeMethod(fragment, "removeChild", (...args) => {
        let options = args[args.length - 1];
        options.override = () => {
          w.removeChild(args[0]);
        };
      });
      Object.defineProperty(w, "shadowRoot", { value: fragment });
    }
  };

  // src/deserializer/element.deserializer.ts
  var ElementDeserializer = class {
    constructor(onNodeDeserialized, options = { proxyBasePath: "" }) {
      this.onNodeDeserialized = onNodeDeserialized;
      this.options = options;
    }
    deserialize(json, doc) {
      const explore = (j) => {
        let n = this.deserializeSingle(j, doc);
        if (j.children && j.tag != "svg") {
          for (let c of j.children) {
            let child = explore(c);
            n.appendChild(child);
          }
        }
        if (this.onNodeDeserialized)
          this.onNodeDeserialized(n, j);
        return n;
      };
      return explore(json);
    }
    deserializeSingle(json, doc) {
      let node;
      switch (json.type) {
        case "#document-fragment":
          node = new DocumentFragment();
          break;
        case "web-component":
          node = new WebComponentDomDeserializer(this).deserialize(json, doc);
          break;
        case "svg":
          node = new SvgDomDeserializer(this).deserialize(json, doc);
          break;
        case "document":
          doc.close();
          doc.open();
          node = doc;
          break;
        case "doc-type":
          node = doc.implementation.createDocumentType(json.name, json.publicId, json.systemId);
          break;
        case "style":
          {
            node = this.deserializeElement(json, doc);
            if (json.css && json.css?.length > 0) {
              let cssNode = document.createTextNode(json.css || "");
              node.appendChild(cssNode);
            }
          }
          break;
        case "css-text":
        case "script-text":
          node = new TextDomDeserializer().deserialize(json, doc);
          break;
        case "cdata":
          node = doc.createCDATASection(json.text);
          break;
        case "comment":
          node = doc.createComment(json.text);
          break;
        default: {
          if (json.type == "text" && json.tag != "text")
            node = new TextDomDeserializer().deserialize(json, doc);
          else
            node = this.deserializeElement(json, doc);
        }
      }
      return node;
    }
    deserializeElement(json, doc) {
      let node;
      let tag = json.tag;
      switch (tag) {
        case "iframe":
          node = document.createElement("iframe");
          break;
        case "canvas":
          node = new CanvasDomDeserializer().deserialize(json, doc);
          break;
        case "input":
        case "textarea":
        case "select":
        case "option":
          node = new FormDomDeserializer().deserialize(json, doc);
          break;
        case "audio":
        case "video":
          node = document.createElement(tag);
          break;
        case "link":
          if (json.type == "link-stylesheet" && json.css) {
            node = document.createElement("style");
            node.setAttribute("link-href", json.attributes && json.attributes["href"]);
            node.innerHTML = new CssAbsoluteUrlTransformer().proxyUrls(json.css, this.options.proxyBasePath + "/proxy/?url=");
          } else {
            node = document.createElement("link");
            node.setAttribute("crossorigin", "");
            if (json.attributes && json.attributes["href"])
              node.setAttribute("href", this.options.proxyBasePath + `/proxy/?url=${json.attributes["href"]}`);
          }
          break;
        case "script":
          node = document.createElement("noscript");
          break;
        default: {
          let svgTag = this.isSvgTag(json.tag);
          if (svgTag)
            node = document.createElementNS("http://www.w3.org/2000/svg", json.tag);
          else
            node = document.createElement(json.tag);
        }
      }
      new DOMDeserializerHelper().applyAttributes(node, json);
      return node;
    }
    isSvgTag(tag) {
      return [
        "path",
        "animate",
        "animateMotion",
        "animateTransform",
        "circle",
        "clipPath",
        "color-profile",
        "defs",
        "desc",
        "discard",
        "ellipse",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "filter",
        "foreignObject",
        "g",
        "hatch",
        "hatchpath",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "metadata",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "script",
        "set",
        "solidcolor",
        "stop",
        "style",
        "svg",
        "_switch",
        "symbol",
        "text",
        "textPath",
        "title",
        "tspan",
        "unknown",
        "use",
        "view"
      ].indexOf(tag) >= 0;
    }
  };

  // src/mutation.renderer.ts
  var log = new BLLogger();
  var MutationRenderer = class {
    render(e, deserialized, deserializer, doc, options = { debugging: false }) {
      log.trace(`MutationRenderer.render`, e);
      try {
        const findElement = (id, event) => {
          let el = deserialized.get(id);
          if (!el && event)
            el = deserializer.deserialize(event, doc);
          return el;
        };
        if (e.name == "mutation-add") {
          let parent = findElement(e.parent);
          if (parent == void 0) {
            if (options.debugging) {
              console.warn("Trying to add a node to a non existent parent", e);
            }
          } else {
            let c = findElement(e.id, e);
            let willAddIntoSamePosition = false;
            try {
              let alreadyAddedToParent = c.parentElement == parent;
              if (alreadyAddedToParent) {
                let prevSiblingIsSame = !deserialized.get(e.before) || deserialized.get(e.before) && c.previousSibling && deserialized.get(e.before) == c.previousSibling;
                let nextSiblingIsSame = !deserialized.get(e.after) || deserialized.get(e.after) && c.nextSibling && deserialized.get(e.after) == c.nextSibling;
                willAddIntoSamePosition = !!(prevSiblingIsSame && nextSiblingIsSame);
              }
              if (!willAddIntoSamePosition) {
                if (e.before && deserialized.get(e.before)?.parentNode)
                  parent.insertBefore(c, deserialized.get(e.before).nextSibling);
                else if (e.after && deserialized.get(e.after)?.parentNode)
                  parent.insertBefore(c, deserialized.get(e.after));
                else
                  parent.appendChild(c);
              }
            } catch (err) {
              if (options.debugging)
                console.warn(e, err);
            }
          }
        } else if (e.name == "mutation-remove") {
          try {
            let tr = findElement(e.id, e);
            const checkParentInMapRemoval = () => {
              if (e.parent) {
                let parent = deserialized.get(e.parent);
                if (parent) {
                  if (parent.contains(tr))
                    parent.removeChild(tr);
                }
              }
            };
            if (tr.parentNode) {
              tr.parentNode.removeChild(tr);
              checkParentInMapRemoval();
            } else {
              checkParentInMapRemoval();
            }
          } catch (e2) {
            if (options.debugging)
              console.warn("Could not remove element: ", e2);
          }
        } else if (e.name == "mutation-attribute") {
          let element = findElement(e.id, e);
          if (element) {
            for (let a in e.attributes) {
              if (e.attributes[a] === null) {
                if (element.removeAttribute)
                  element.removeAttribute(a);
              } else {
                if (element.setAttribute)
                  element.setAttribute(a, e.attributes[a]);
              }
            }
          } else if (options.debugging) {
            console.warn("Could not find element to apply attribute", e);
          }
        } else if (e.name == "mutation-style") {
          let element = findElement(e.id, e);
          if (element) {
            for (let a in e.styles) {
              if (e.styles[a] === null) {
                element.style.removeProperty(a);
              } else {
                let value = e.styles[a];
                let s = e.styles[a];
                let i = "";
                if (value.indexOf("!important") >= 0) {
                  s = value.replace(" !important", "").replace("!important", "");
                  i = "important";
                }
                element.style.setProperty(a, s, i);
              }
            }
          } else if (options.debugging) {
            console.warn("Could not find element to apply attribute", e);
          }
        } else if (e.name == "mutation-text") {
          let element = findElement(e.id, e);
          if (element)
            element.textContent = e.text ?? "";
          else if (options.debugging)
            console.warn("Could not find text element", e);
        }
      } catch (err) {
        console.error(err);
        console.log(e, deserialized);
      }
    }
  };

  // src/deserializer/css.deserializer.ts
  var CssDeserializer = class {
    mappedIndexes = new Map();
    deserialize(e, s) {
      if ("rule" in e) {
        let ce = e;
        let newIndex = s.sheet?.insertRule(ce.rule);
        if (!this.mappedIndexes.get(s))
          this.mappedIndexes.set(s, []);
        this.mappedIndexes.get(s).push({ prevIndex: ce.index, newIndex });
      } else {
        let ce = e;
        if (this.mappedIndexes.get(s)) {
          let indexes = this.mappedIndexes.get(s);
          let indexToRemove = indexes.find((i) => i.prevIndex == ce.index);
          if (indexToRemove && indexToRemove.newIndex >= 0)
            s.sheet?.removeRule(indexToRemove.newIndex);
        }
      }
    }
  };

  // src/player/player.component.ts
  var dom = { full: blevent.dom.full.eventName, change: blevent.dom.change.eventName };
  var log2 = new BLLogger();
  var PlayerComponent = class {
    constructor(container, options = {
      deserializerProxyBasePath: "",
      onTimestampChange: (timestamp, last) => {
      },
      onIframeClick: () => {
      },
      onResize: (scale) => {
      }
    }) {
      this.options = options;
      log2.trace(`PlayerComponent: initialized`);
      this.root = container;
      this.container = document.createElement("div");
      this.container.style.transformOrigin = "top left";
      this.root.appendChild(this.container);
      this.container.style.position = "relative";
      window.addEventListener("resize", () => {
        this.updatePlayerZoom();
      });
      this.cursor = CursorDrawerComponent.createCursor();
      this.timer = new RequestAnimationFrameTimer();
      this.timer.start((msFromLast) => {
        if (this.playing == true) {
          this.playFrameEvents(this.speed * msFromLast);
          const lastTs = this.events[this.events.length - 1].timestamp;
          const last = Math.abs(this.currentTimestamp - lastTs) < 100;
          options.onTimestampChange(this.currentTimestamp, last);
        }
      });
    }
    cursor;
    iframe;
    deserializedMap;
    deserializer;
    target;
    events;
    container;
    playing = false;
    currentTimestamp;
    timer;
    lastIndex = 0;
    root;
    cssDeserializer = new CssDeserializer();
    speed = 1;
    setSpeed(speed) {
      this.speed = speed;
    }
    applyForward = debounce(() => {
      this.pause();
      this.moveTo(this.currentTimestamp);
    }, 300);
    applyFrameEvents(events2) {
      let lastChecked = events2.slice().reverse().find((e) => e.name == "checked" || e.name == "input");
      let lastInput = events2.slice().reverse().find((e) => e.name == "value" || e.name == "input");
      if (lastInput) {
        let el = this.deserializedMap.get(lastInput.target);
        if (el && el.getAttribute) {
          if (el.getAttribute("type") == "radio") {
            if (el.getAttribute("value") == lastInput.value) {
              let name = el.getAttribute("name");
              document.querySelectorAll(`input[type='radio'][name='${name}']`).forEach((r) => r.checked = false);
              el.checked = true;
            }
          } else
            el.value = lastInput.value.toString();
        }
      }
      if (lastChecked) {
        let el = this.deserializedMap.get(lastChecked.target);
        if (el) {
          el.checked = !!lastChecked.checked;
        }
      }
      let scrolls = {};
      events2.filter((e) => e.name == "scroll" || e.name == "elementscroll").map((e) => e).forEach((e) => scrolls[e.target] = e);
      const updateScrolling = () => {
        let scrolled = false;
        const scrollWindow = (e) => {
          scrolled = true;
          this.target.win.scrollTo(e.x, e.y);
          new LazyImagesRefresherApi().refreshLazyImages(this.target.iframe);
        };
        for (let ek in scrolls) {
          let e = scrolls[ek];
          if (e.name == "scroll") {
            scrollWindow(e);
          } else if (e.name == "elementscroll") {
            let element = this.deserializedMap.get(e.target);
            if (element == this.target.doc)
              scrollWindow(e);
            else if (element) {
              element.scrollTo(e.x, e.y);
              scrolled = true;
            }
          }
        }
        return scrolled;
      };
      this.cursor.drawCursor(this.iframe, events2, this.deserializedMap);
      if (!updateScrolling())
        new LazyImagesRefresherApi().refreshLazyImages(this.target.iframe);
    }
    applyMutations(events2) {
      let mutations = [];
      for (let e of events2)
        if (e.mutations)
          mutations.push(...e.mutations);
      for (let m of mutations)
        new MutationRenderer().render(m, this.deserializedMap, this.deserializer, this.target.doc);
    }
    get start() {
      return this.events.find((s) => s.name == dom.full).timestamp;
    }
    moveTo(timestamp) {
      let fullDom = this.events.find((s) => s.name == dom.full);
      if (!fullDom)
        throw new Error("Full DOM event not found. Did you set the session events? (.setEvents)");
      let events2 = this.events.filter((e) => e.timestamp <= timestamp);
      let mutationEvents = events2.filter((s) => s.name == dom.change);
      let mutations = [];
      for (let me of mutationEvents)
        mutations.push(...me.mutations ?? []);
      let frame = new DomJsonMerger().merge(fullDom.full, mutations);
      this.deserializedMap.clear();
      this.deserializer.deserialize(frame, this.target.doc);
      this.pause();
      let otherEvents = events2.filter((s) => s.name != dom.change && s.name != dom.full);
      this.currentTimestamp = timestamp;
      this.lastIndex = events2.length - 1;
      new FocusHoverFakeClassAdderApi().addHoverRules(this.target.doc).then(() => {
        this.applyFrameEvents(otherEvents);
        new LazyImagesRefresherApi().refreshLazyImages(this.target.iframe, { skipVisibleAreaCheck: true });
      });
    }
    addEvents(events2) {
      this.events.push(...events2);
    }
    play() {
      new ToggleIframeAnimationsApi().playAnimations(this.target.iframe);
      this.playing = true;
    }
    pause() {
      new ToggleIframeAnimationsApi().pauseAnimations(this.target.iframe);
      this.playing = false;
    }
    forward(ms = 300) {
      let where = this.currentTimestamp + ms - this.start;
      console.log("where: ", where);
      this.currentTimestamp = this.currentTimestamp + ms;
      this.applyForward();
    }
    setEvents(events2) {
      this.lastIndex = 0;
      this.events = events2;
      let fullDom = events2.find((s) => s.name == dom.full);
      if (!fullDom)
        throw new Error("Full DOM event not found");
      if (fullDom) {
        this.reset(fullDom.full?.width, fullDom.full?.height);
      }
      this.moveTo(fullDom.timestamp);
    }
    playFrameEvents(msFromLast) {
      const from = this.currentTimestamp;
      const to = this.currentTimestamp + msFromLast;
      if (this.lastIndex < this.events.length - 1) {
        let events2 = this.events.filter((e, i) => {
          let consider = e.timestamp > from && e.timestamp <= to;
          if (consider)
            this.lastIndex = i;
          return consider;
        });
        log2.trace(`PlayerComponent.playFrameEvents`, `${events2.length} events`, this.events, from, to);
        if (events2.length > 0) {
          this.applyMutations(events2);
          this.applyFrameEvents(events2);
          this.applyCssEvents(events2);
          this.preventLinks();
        }
        if (events2.length > 0)
          this.currentTimestamp = events2[events2.length - 1].timestamp;
        else if (this.lastIndex < this.events.length - 1)
          this.currentTimestamp += msFromLast;
        else
          this.currentTimestamp = this.events[this.events.length - 1].timestamp;
      }
    }
    reset(width, height) {
      if (this.iframe?.parentNode) {
        this.iframe.parentNode.removeChild(this.iframe);
      }
      if (this.cursor?.parentNode) {
        this.cursor.parentNode.removeChild(this.cursor);
      }
      this.iframe = document.createElement("iframe");
      this.iframe.style.border = `1px solid #d9d9d9`;
      this.container.appendChild(this.iframe);
      this.container.appendChild(this.cursor);
      this.manageIframeClick(this.iframe);
      let target = this.initIframe(this.iframe, width, height);
      this.target = target;
      let deserializedMap = new Map();
      let eds = new ElementDeserializer((n, j) => {
        if (!deserializedMap.has(j.id)) {
          deserializedMap.set(j.id, n);
        }
      }, { proxyBasePath: this.options.deserializerProxyBasePath });
      this.deserializedMap = deserializedMap;
      this.deserializer = eds;
    }
    initIframe(iframe, width, height) {
      let doc = iframe.contentDocument;
      if (!iframe.getAttribute("data-bl-inited")) {
        iframe.width = width + "px";
        iframe.height = height + "px";
        if (doc?.head) {
          doc.head.innerHTML = "";
          doc.body.innerHTML = "";
        }
        iframe.classList.add("bl-iframe");
        iframe.setAttribute("sandbox", "allow-same-origin");
        iframe.setAttribute("data-bl-inited", "done");
      }
      this.updatePlayerZoom();
      return {
        iframe,
        get doc() {
          return iframe.contentDocument;
        },
        get win() {
          return iframe.contentWindow;
        }
      };
    }
    updatePlayerZoom() {
      this.container.style.width = "auto";
      this.container.style.height = "auto";
      let box = this.root.getBoundingClientRect();
      let w = box.width + 16;
      let h = Math.min(box.height, window.innerHeight);
      let iw = parseInt(this.iframe.width);
      let ih = parseInt(this.iframe.height);
      let scaleW = w / iw;
      console.log("scaleW: ", scaleW);
      let scaleH = h / ih;
      console.log("scaleH: ", scaleH);
      let scale = Math.min(scaleW, scaleH);
      this.container.style.transform = `scale(${scale})`;
      let cbox = this.container.getBoundingClientRect();
      console.log("cbox: ", cbox);
      this.container.style.width = cbox.width + "px";
      this.container.style.height = cbox.height + "px";
      this.options.onResize(scale);
    }
    applyCssEvents(events2) {
      let cssEvents = events2.filter((e) => e.name == "css-add" || e.name == "css-remove");
      cssEvents.sort((c1, c2) => c1.index - c2.index);
      for (let e of cssEvents) {
        let style = this.target.doc.querySelector("#bl_style_" + e.target);
        if (!style) {
          let s = this.target.doc.createElement("style");
          s.id = "#bl_style_" + e.target;
          this.target.doc.head.appendChild(s);
          style = s;
        }
        this.cssDeserializer.deserialize(e, style);
      }
    }
    manageIframeClick(iframe) {
      window.addEventListener("blur", () => {
        window.setTimeout(() => {
          if (document.activeElement == iframe) {
            window.focus();
            this.options.onIframeClick();
          }
        }, 1);
      });
    }
    preventLinks() {
      this.target.doc.body.querySelectorAll("a:not(.bl_link_prevented)").forEach((a) => {
        a.classList.add("bl_link_prevented");
        a.addEventListener("click", (e) => e.preventDefault());
      });
    }
  };

  // src/deserializer/node.deserializer.ts
  var NodeDeserializer = class {
    constructor(win = window, deserializer) {
      this.win = win;
      this.deserializer = deserializer;
    }
    deserializedMap;
    lastId = 0;
    deserialize(json, doc) {
      let d2 = doc ?? document;
      if (!this.deserializer) {
        this.deserializedMap = new Map();
        this.deserializer = new ElementDeserializer((n, j) => {
          if (!this.deserializedMap.has(j.id)) {
            this.deserializedMap.set(j.id, n);
          }
          if (j.id)
            this.lastId = Math.max(this.lastId, j.id);
        });
      }
      let node = this.deserializer.deserialize(json, d2);
      return node;
    }
  };
  return src_exports;
})();
//# sourceMappingURL=index.js.map
