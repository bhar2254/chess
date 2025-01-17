function __cf_cjs(esm) {
  const cjs = 'default' in esm ? esm.default : {};
	for (const [k, v] of Object.entries(esm)) {
		if (k !== 'default') {
			Object.defineProperty(cjs, k, {
				enumerable: true,
				value: v,
			});
		}
	}
	return cjs;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
var init_virtual_unenv_global_polyfill_clear_immediate = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js"() {
    init_cloudflare();
    globalThis.clearImmediate = clearImmediateFallback;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
var init_utils = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/mock/noop.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/immediate.mjs
var Immediate;
var init_immediate = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/immediate.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    Immediate = class {
      _onImmediate;
      _timeout;
      constructor(callback, args) {
        this._onImmediate = callback;
        if ("setTimeout" in globalThis) {
          this._timeout = setTimeout(callback, 0, ...args);
        } else {
          callback(...args);
        }
      }
      ref() {
        this._timeout?.ref();
        return this;
      }
      unref() {
        this._timeout?.unref();
        return this;
      }
      hasRef() {
        return this._timeout?.hasRef() ?? false;
      }
      [Symbol.dispose]() {
        if ("clearTimeout" in globalThis) {
          clearTimeout(this._timeout);
        }
      }
    };
    __name(Immediate, "Immediate");
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
  return new Promise((res) => {
    res(value);
  });
}
function setImmediateFallback(callback, ...args) {
  return new Immediate(callback, args);
}
function clearImmediateFallback(immediate) {
  immediate?.[Symbol.dispose]();
}
var init_set_immediate = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_immediate();
    __name(setImmediateFallbackPromises, "setImmediateFallbackPromises");
    __name(setImmediateFallback, "setImmediateFallback");
    setImmediateFallback.__promisify__ = setImmediateFallbackPromises;
    __name(clearImmediateFallback, "clearImmediateFallback");
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/timers/$cloudflare.mjs
var init_cloudflare = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/timers/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_set_immediate();
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
var init_virtual_unenv_global_polyfill_set_immediate = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js"() {
    init_cloudflare();
    globalThis.setImmediate = setImmediateFallback;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/mock/proxy.mjs
function createMock(name, overrides = {}) {
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop === "__unenv__") {
        return true;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return [];
    }
  });
}
var fn, proxy_default;
var init_proxy = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/mock/proxy.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    fn = /* @__PURE__ */ __name(function() {
    }, "fn");
    __name(createMock, "createMock");
    proxy_default = createMock("mock");
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/console/index.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, assert, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console;
var init_console = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/console/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_noop();
    init_utils();
    init_proxy();
    init_noop();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? notImplemented("console.createTask");
    assert = notImplemented("console.assert");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? proxy_default.__createMock__("console.Console");
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/console/$cloudflare.mjs
var workerdConsole, assert2, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, cloudflare_default;
var init_cloudflare2 = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/console/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert: assert2,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler: noop_default,
      _stdout,
      _stdoutErrorHandler: noop_default,
      _times: proxy_default
    });
    cloudflare_default = workerdConsole;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
var init_virtual_unenv_global_polyfill_console = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-console.js"() {
    init_cloudflare2();
    globalThis.console = cloudflare_default;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_entry.mjs
var _supportedEntryTypes, _PerformanceEntry, PerformanceEntry, _PerformanceMark, PerformanceMark, _PerformanceMeasure, PerformanceMeasure, _PerformanceResourceTiming, PerformanceResourceTiming;
var init_entry = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_entry.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _supportedEntryTypes = [
      "event",
      // PerformanceEntry
      "mark",
      // PerformanceMark
      "measure",
      // PerformanceMeasure
      "resource"
      // PerformanceResourceTiming
    ];
    _PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || performance.now();
        this.detail = options?.detail;
      }
      get duration() {
        return performance.now() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(_PerformanceEntry, "_PerformanceEntry");
    PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
    _PerformanceMark = class extends _PerformanceEntry {
      entryType = "mark";
    };
    __name(_PerformanceMark, "_PerformanceMark");
    PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
    _PerformanceMeasure = class extends _PerformanceEntry {
      entryType = "measure";
    };
    __name(_PerformanceMeasure, "_PerformanceMeasure");
    PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
    _PerformanceResourceTiming = class extends _PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    __name(_PerformanceResourceTiming, "_PerformanceResourceTiming");
    PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_performance.mjs
var _timeOrigin, _Performance, Performance, performance2;
var init_performance = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_performance.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_proxy();
    init_entry();
    _timeOrigin = Date.now();
    _Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = proxy_default.__createMock__("PerformanceNavigation");
      timing = proxy_default.__createMock__("PerformanceTiming");
      onresourcetimingbufferfull = null;
      now() {
        if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin) {
          return globalThis.performance.now();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter(
          (e) => e.entryType !== "resource" || e.entryType !== "navigation"
        );
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter(
          (e) => e.name === name && (!type || e.entryType === type)
        );
      }
      getEntriesByType(type) {
        return this._entries.filter(
          (e) => e.entryType === type
        );
      }
      mark(name, options) {
        const entry = new _PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || performance2.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || performance2.now();
        }
        const entry = new _PerformanceMeasure(measureName, {
          startTime: start,
          detail: { start, end }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      toJSON() {
        return this;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
    };
    __name(_Performance, "_Performance");
    Performance = globalThis.Performance || _Performance;
    performance2 = globalThis.performance || new Performance();
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_observer.mjs
var _PerformanceObserver, PerformanceObserver, _PerformanceObserverEntryList, PerformanceObserverEntryList;
var init_observer = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_observer.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_entry();
    _PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
    };
    __name(_PerformanceObserver, "_PerformanceObserver");
    __publicField(_PerformanceObserver, "supportedEntryTypes", _supportedEntryTypes);
    PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
    _PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    __name(_PerformanceObserverEntryList, "_PerformanceObserverEntryList");
    PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/web/performance/index.mjs
var init_performance2 = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/web/performance/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance();
    init_observer();
    init_entry();
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/polyfill/global-this.mjs
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return {};
}
var global_this_default;
var init_global_this = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/polyfill/global-this.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name(getGlobal, "getGlobal");
    global_this_default = getGlobal();
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/polyfill/performance.mjs
var performance_default;
var init_performance3 = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/polyfill/performance.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance2();
    init_global_this();
    global_this_default.performance = global_this_default.performance || performance2;
    global_this_default.Performance = global_this_default.Performance || Performance;
    global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry;
    global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark;
    global_this_default.PerformanceMeasure = global_this_default.PerformanceMeasure || PerformanceMeasure;
    global_this_default.PerformanceObserver = global_this_default.PerformanceObserver || PerformanceObserver;
    global_this_default.PerformanceObserverEntryList = global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList;
    global_this_default.PerformanceResourceTiming = global_this_default.PerformanceResourceTiming || PerformanceResourceTiming;
    performance_default = global_this_default.performance;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
var init_virtual_unenv_global_polyfill_performance = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js"() {
    init_performance3();
    globalThis.performance = performance_default;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/mock/empty.mjs
var empty_default;
var init_empty = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/mock/empty.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    empty_default = Object.freeze(
      Object.create(null, {
        __unenv__: { get: () => true }
      })
    );
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/env.mjs
var _envShim, _processEnv, _getEnv, env;
var init_env = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/env.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _envShim = /* @__PURE__ */ Object.create(null);
    _processEnv = globalThis.process?.env;
    _getEnv = /* @__PURE__ */ __name((useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis), "_getEnv");
    env = new Proxy(_envShim, {
      get(_, prop) {
        const env22 = _getEnv();
        return env22[prop] ?? _envShim[prop];
      },
      has(_, prop) {
        const env22 = _getEnv();
        return prop in env22 || prop in _envShim;
      },
      set(_, prop, value) {
        const env22 = _getEnv(true);
        env22[prop] = value;
        return true;
      },
      deleteProperty(_, prop) {
        const env22 = _getEnv(true);
        delete env22[prop];
        return true;
      },
      ownKeys() {
        const env22 = _getEnv();
        return Object.keys(env22);
      }
    });
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/time.mjs
function _createNextTickWithTimeout() {
  let queue = [];
  let draining = false;
  let currentQueue;
  let queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length > 0) {
      queue = [...currentQueue, ...queue];
    } else {
      queueIndex = -1;
    }
    if (queue.length > 0) {
      drainQueue();
    }
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (draining) {
      return;
    }
    const timeout = setTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex]();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = void 0;
    draining = false;
    clearTimeout(timeout);
  }
  __name(drainQueue, "drainQueue");
  const nextTick22 = /* @__PURE__ */ __name((cb, ...args) => {
    queue.push(cb.bind(void 0, ...args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue);
    }
  }, "nextTick2");
  return nextTick22;
}
var hrtime, nextTick;
var init_time = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/time.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    hrtime = Object.assign(
      /* @__PURE__ */ __name(function hrtime2(startTime) {
        const now = Date.now();
        const seconds = Math.trunc(now / 1e3);
        const nanos = now % 1e3 * 1e6;
        if (startTime) {
          let diffSeconds = seconds - startTime[0];
          let diffNanos = nanos - startTime[0];
          if (diffNanos < 0) {
            diffSeconds = diffSeconds - 1;
            diffNanos = 1e9 + diffNanos;
          }
          return [diffSeconds, diffNanos];
        }
        return [seconds, nanos];
      }, "hrtime2"),
      {
        bigint: /* @__PURE__ */ __name(function bigint() {
          return BigInt(Date.now() * 1e6);
        }, "bigint")
      }
    );
    nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
      globalThis.queueMicrotask(cb.bind(void 0, ...args));
    } : _createNextTickWithTimeout();
    __name(_createNextTickWithTimeout, "_createNextTickWithTimeout");
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/process.mjs
function noop() {
  return process;
}
var title, argv, version, versions, on, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, listeners, listenerCount, binding, _cwd, cwd, chdir, umask, getegid, geteuid, getgid, getuid, getgroups, getBuiltinModule, abort, allowedNodeEnvironmentFlags, arch, argv0, config, connected, constrainedMemory, availableMemory, cpuUsage, debugPort, dlopen, disconnect, emitWarning, eventNames, execArgv, execPath, exit, features, getActiveResourcesInfo, getMaxListeners, kill, memoryUsage, pid, platform, ppid, rawListeners, release, report, resourceUsage, setegid, seteuid, setgid, setgroups, setuid, setMaxListeners, setSourceMapsEnabled, stdout, stderr, stdin, traceDeprecation, uptime, exitCode, setUncaughtExceptionCaptureCallback, hasUncaughtExceptionCaptureCallback, sourceMapsEnabled, loadEnvFile, mainModule, permission, channel, throwDeprecation, finalization, assert3, openStdin, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _linkedBinding, domain, initgroups, moduleLoadList, reallyExit, _exiting, _events, _eventsCount, _maxListeners, process;
var init_process = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/process.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_empty();
    init_utils();
    init_env();
    init_time();
    init_time();
    title = "unenv";
    argv = [];
    version = "";
    versions = {
      ares: "",
      http_parser: "",
      icu: "",
      modules: "",
      node: "",
      openssl: "",
      uv: "",
      v8: "",
      zlib: ""
    };
    __name(noop, "noop");
    on = noop;
    addListener = noop;
    once = noop;
    off = noop;
    removeListener = noop;
    removeAllListeners = noop;
    emit = /* @__PURE__ */ __name(function emit2(event) {
      if (event === "message" || event === "multipleResolves") {
        return process;
      }
      return false;
    }, "emit2");
    prependListener = noop;
    prependOnceListener = noop;
    listeners = /* @__PURE__ */ __name(function(name) {
      return [];
    }, "listeners");
    listenerCount = /* @__PURE__ */ __name(() => 0, "listenerCount");
    binding = /* @__PURE__ */ __name(function(name) {
      throw new Error("[unenv] process.binding is not supported");
    }, "binding");
    _cwd = "/";
    cwd = /* @__PURE__ */ __name(function cwd2() {
      return _cwd;
    }, "cwd2");
    chdir = /* @__PURE__ */ __name(function chdir2(dir3) {
      _cwd = dir3;
    }, "chdir2");
    umask = /* @__PURE__ */ __name(function umask2() {
      return 0;
    }, "umask2");
    getegid = /* @__PURE__ */ __name(function getegid2() {
      return 1e3;
    }, "getegid2");
    geteuid = /* @__PURE__ */ __name(function geteuid2() {
      return 1e3;
    }, "geteuid2");
    getgid = /* @__PURE__ */ __name(function getgid2() {
      return 1e3;
    }, "getgid2");
    getuid = /* @__PURE__ */ __name(function getuid2() {
      return 1e3;
    }, "getuid2");
    getgroups = /* @__PURE__ */ __name(function getgroups2() {
      return [];
    }, "getgroups2");
    getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, "getBuiltinModule");
    abort = notImplemented("process.abort");
    allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set();
    arch = "";
    argv0 = "";
    config = empty_default;
    connected = false;
    constrainedMemory = /* @__PURE__ */ __name(() => 0, "constrainedMemory");
    availableMemory = /* @__PURE__ */ __name(() => 0, "availableMemory");
    cpuUsage = notImplemented("process.cpuUsage");
    debugPort = 0;
    dlopen = notImplemented("process.dlopen");
    disconnect = noop;
    emitWarning = noop;
    eventNames = notImplemented("process.eventNames");
    execArgv = [];
    execPath = "";
    exit = notImplemented("process.exit");
    features = /* @__PURE__ */ Object.create({
      inspector: void 0,
      debug: void 0,
      uv: void 0,
      ipv6: void 0,
      tls_alpn: void 0,
      tls_sni: void 0,
      tls_ocsp: void 0,
      tls: void 0,
      cached_builtins: void 0
    });
    getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], "getActiveResourcesInfo");
    getMaxListeners = notImplemented(
      "process.getMaxListeners"
    );
    kill = notImplemented("process.kill");
    memoryUsage = Object.assign(
      () => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }),
      { rss: () => 0 }
    );
    pid = 1e3;
    platform = "";
    ppid = 1e3;
    rawListeners = notImplemented(
      "process.rawListeners"
    );
    release = /* @__PURE__ */ Object.create({
      name: "",
      lts: "",
      sourceUrl: void 0,
      headersUrl: void 0
    });
    report = /* @__PURE__ */ Object.create({
      compact: void 0,
      directory: void 0,
      filename: void 0,
      getReport: notImplemented("process.report.getReport"),
      reportOnFatalError: void 0,
      reportOnSignal: void 0,
      reportOnUncaughtException: void 0,
      signal: void 0,
      writeReport: notImplemented("process.report.writeReport")
    });
    resourceUsage = notImplemented(
      "process.resourceUsage"
    );
    setegid = notImplemented("process.setegid");
    seteuid = notImplemented("process.seteuid");
    setgid = notImplemented("process.setgid");
    setgroups = notImplemented("process.setgroups");
    setuid = notImplemented("process.setuid");
    setMaxListeners = notImplemented(
      "process.setMaxListeners"
    );
    setSourceMapsEnabled = notImplemented("process.setSourceMapsEnabled");
    stdout = proxy_default.__createMock__("process.stdout");
    stderr = proxy_default.__createMock__("process.stderr");
    stdin = proxy_default.__createMock__("process.stdin");
    traceDeprecation = false;
    uptime = /* @__PURE__ */ __name(() => 0, "uptime");
    exitCode = 0;
    setUncaughtExceptionCaptureCallback = notImplemented("process.setUncaughtExceptionCaptureCallback");
    hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(() => false, "hasUncaughtExceptionCaptureCallback");
    sourceMapsEnabled = false;
    loadEnvFile = notImplemented(
      "process.loadEnvFile"
    );
    mainModule = void 0;
    permission = {
      has: () => false
    };
    channel = {
      ref() {
      },
      unref() {
      }
    };
    throwDeprecation = false;
    finalization = {
      register() {
      },
      unregister() {
      },
      registerBeforeExit() {
      }
    };
    assert3 = notImplemented("process.assert");
    openStdin = notImplemented("process.openStdin");
    _debugEnd = notImplemented("process._debugEnd");
    _debugProcess = notImplemented("process._debugProcess");
    _fatalException = notImplemented("process._fatalException");
    _getActiveHandles = notImplemented("process._getActiveHandles");
    _getActiveRequests = notImplemented("process._getActiveRequests");
    _kill = notImplemented("process._kill");
    _preload_modules = [];
    _rawDebug = notImplemented("process._rawDebug");
    _startProfilerIdleNotifier = notImplemented(
      "process._startProfilerIdleNotifier"
    );
    _stopProfilerIdleNotifier = notImplemented(
      "process.__stopProfilerIdleNotifier"
    );
    _tickCallback = notImplemented("process._tickCallback");
    _linkedBinding = notImplemented("process._linkedBinding");
    domain = void 0;
    initgroups = notImplemented("process.initgroups");
    moduleLoadList = [];
    reallyExit = noop;
    _exiting = false;
    _events = [];
    _eventsCount = 0;
    _maxListeners = 0;
    process = {
      // @ts-expect-error
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      exitCode,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      throwDeprecation,
      mainModule,
      permission,
      channel,
      arch,
      argv,
      argv0,
      assert: assert3,
      binding,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      openStdin,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions
    };
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess, getBuiltinModule2, workerdProcess, env2, exit2, nextTick2, platform2, _process, cloudflare_default2;
var init_cloudflare3 = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/node_modules/unenv/runtime/node/process/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_process();
    unpatchedGlobalThisProcess = globalThis["process"];
    getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule2("node:process");
    ({ env: env2, exit: exit2, nextTick: nextTick2, platform: platform2 } = workerdProcess);
    _process = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      // @ts-expect-error (not typed)
      _debugEnd,
      _debugProcess,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _linkedBinding,
      _maxListeners,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert3,
      availableMemory,
      binding,
      chdir,
      config,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain,
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exit: exit2,
      exitCode,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList,
      off,
      on,
      once,
      openStdin,
      pid,
      platform: platform2,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      setUncaughtExceptionCaptureCallback,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      umask,
      uptime,
      version,
      versions,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      env: env2,
      getBuiltinModule: getBuiltinModule2,
      nextTick: nextTick2
    };
    cloudflare_default2 = _process;
  }
});

// ../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
var init_virtual_unenv_global_polyfill_process = __esm({
  "../../../AppData/Roaming/nvm/v22.6.0/node_modules/wrangler/_virtual_unenv_global_polyfill-process.js"() {
    init_cloudflare3();
    globalThis.process = cloudflare_default2;
  }
});

// node_modules/chessboardjs/www/js/chessboard.js
var require_chessboard = __commonJS({
  "node_modules/chessboardjs/www/js/chessboard.js"(exports, module) {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    var COLUMNS = "abcdefgh".split("");
    function validMove(move) {
      if (typeof move !== "string")
        return false;
      var tmp = move.split("-");
      if (tmp.length !== 2)
        return false;
      return validSquare(tmp[0]) === true && validSquare(tmp[1]) === true;
    }
    __name(validMove, "validMove");
    function validSquare(square) {
      if (typeof square !== "string")
        return false;
      return square.search(/^[a-h][1-8]$/) !== -1;
    }
    __name(validSquare, "validSquare");
    function validPieceCode(code) {
      if (typeof code !== "string")
        return false;
      return code.search(/^[bw][KQRNBP]$/) !== -1;
    }
    __name(validPieceCode, "validPieceCode");
    function validFen(fen) {
      if (typeof fen !== "string")
        return false;
      fen = fen.replace(/ .+$/, "");
      var chunks = fen.split("/");
      if (chunks.length !== 8)
        return false;
      for (var i = 0; i < 8; i++) {
        if (chunks[i] === "" || chunks[i].length > 8 || chunks[i].search(/[^kqrbnpKQRNBP1-8]/) !== -1) {
          return false;
        }
      }
      return true;
    }
    __name(validFen, "validFen");
    function validPositionObject(pos) {
      if (typeof pos !== "object")
        return false;
      for (var i in pos) {
        if (pos.hasOwnProperty(i) !== true)
          continue;
        if (validSquare(i) !== true || validPieceCode(pos[i]) !== true) {
          return false;
        }
      }
      return true;
    }
    __name(validPositionObject, "validPositionObject");
    function fenToPieceCode(piece) {
      if (piece.toLowerCase() === piece) {
        return "b" + piece.toUpperCase();
      }
      return "w" + piece.toUpperCase();
    }
    __name(fenToPieceCode, "fenToPieceCode");
    function pieceCodeToFen(piece) {
      var tmp = piece.split("");
      if (tmp[0] === "w") {
        return tmp[1].toUpperCase();
      }
      return tmp[1].toLowerCase();
    }
    __name(pieceCodeToFen, "pieceCodeToFen");
    function fenToObj(fen) {
      if (validFen(fen) !== true) {
        return false;
      }
      fen = fen.replace(/ .+$/, "");
      var rows = fen.split("/");
      var position = {};
      var currentRow = 8;
      for (var i = 0; i < 8; i++) {
        var row = rows[i].split("");
        var colIndex = 0;
        for (var j = 0; j < row.length; j++) {
          if (row[j].search(/[1-8]/) !== -1) {
            var emptySquares = parseInt(row[j], 10);
            colIndex += emptySquares;
          } else {
            var square = COLUMNS[colIndex] + currentRow;
            position[square] = fenToPieceCode(row[j]);
            colIndex++;
          }
        }
        currentRow--;
      }
      return position;
    }
    __name(fenToObj, "fenToObj");
    function objToFen(obj) {
      if (validPositionObject(obj) !== true) {
        return false;
      }
      var fen = "";
      var currentRow = 8;
      for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
          var square = COLUMNS[j] + currentRow;
          if (obj.hasOwnProperty(square) === true) {
            fen += pieceCodeToFen(obj[square]);
          } else {
            fen += "1";
          }
        }
        if (i !== 7) {
          fen += "/";
        }
        currentRow--;
      }
      fen = fen.replace(/11111111/g, "8");
      fen = fen.replace(/1111111/g, "7");
      fen = fen.replace(/111111/g, "6");
      fen = fen.replace(/11111/g, "5");
      fen = fen.replace(/1111/g, "4");
      fen = fen.replace(/111/g, "3");
      fen = fen.replace(/11/g, "2");
      return fen;
    }
    __name(objToFen, "objToFen");
    var ChessBoard = /* @__PURE__ */ __name(function(containerElOrId, cfg) {
      cfg = cfg || {};
      var MINIMUM_JQUERY_VERSION = "1.7.0", START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", START_POSITION = fenToObj(START_FEN);
      var CSS = {
        alpha: "alpha-d2270",
        black: "black-3c85d",
        board: "board-b72b1",
        chessboard: "chessboard-63f37",
        clearfix: "clearfix-7da63",
        highlight1: "highlight1-32417",
        highlight2: "highlight2-9c5d2",
        notation: "notation-322f9",
        numeric: "numeric-fc462",
        piece: "piece-417db",
        row: "row-5277c",
        sparePieces: "spare-pieces-7492f",
        sparePiecesBottom: "spare-pieces-bottom-ae20f",
        sparePiecesTop: "spare-pieces-top-4028b",
        square: "square-55d63",
        white: "white-1e1d7"
      };
      var containerEl, boardEl, draggedPieceEl, sparePiecesTopEl, sparePiecesBottomEl;
      var widget = {};
      var ANIMATION_HAPPENING = false, BOARD_BORDER_SIZE = 2, CURRENT_ORIENTATION = "white", CURRENT_POSITION = {}, SQUARE_SIZE, DRAGGED_PIECE, DRAGGED_PIECE_LOCATION, DRAGGED_PIECE_SOURCE, DRAGGING_A_PIECE = false, SPARE_PIECE_ELS_IDS = {}, SQUARE_ELS_IDS = {}, SQUARE_ELS_OFFSETS;
      function uuid() {
        return "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g, function(c) {
          var r = Math.random() * 16 | 0;
          return r.toString(16);
        });
      }
      __name(uuid, "uuid");
      function deepCopy(thing) {
        return JSON.parse(JSON.stringify(thing));
      }
      __name(deepCopy, "deepCopy");
      function parseSemVer(version3) {
        var tmp = version3.split(".");
        return {
          major: parseInt(tmp[0], 10),
          minor: parseInt(tmp[1], 10),
          patch: parseInt(tmp[2], 10)
        };
      }
      __name(parseSemVer, "parseSemVer");
      function compareSemVer(version3, minimum) {
        version3 = parseSemVer(version3);
        minimum = parseSemVer(minimum);
        var versionNum = version3.major * 1e4 * 1e4 + version3.minor * 1e4 + version3.patch;
        var minimumNum = minimum.major * 1e4 * 1e4 + minimum.minor * 1e4 + minimum.patch;
        return versionNum >= minimumNum;
      }
      __name(compareSemVer, "compareSemVer");
      function error3(code, msg, obj) {
        if (cfg.hasOwnProperty("showErrors") !== true || cfg.showErrors === false) {
          return;
        }
        var errorText = "ChessBoard Error " + code + ": " + msg;
        if (cfg.showErrors === "console" && typeof console === "object" && typeof console.log === "function") {
          console.log(errorText);
          if (arguments.length >= 2) {
            console.log(obj);
          }
          return;
        }
        if (cfg.showErrors === "alert") {
          if (obj) {
            errorText += "\n\n" + JSON.stringify(obj);
          }
          window.alert(errorText);
          return;
        }
        if (typeof cfg.showErrors === "function") {
          cfg.showErrors(code, msg, obj);
        }
      }
      __name(error3, "error");
      function checkDeps() {
        if (typeof containerElOrId === "string") {
          if (containerElOrId === "") {
            window.alert("ChessBoard Error 1001: The first argument to ChessBoard() cannot be an empty string.\n\nExiting...");
            return false;
          }
          var el = document.getElementById(containerElOrId);
          if (!el) {
            window.alert('ChessBoard Error 1002: Element with id "' + containerElOrId + '" does not exist in the DOM.\n\nExiting...');
            return false;
          }
          containerEl = $(el);
        } else {
          containerEl = $(containerElOrId);
          if (containerEl.length !== 1) {
            window.alert("ChessBoard Error 1003: The first argument to ChessBoard() must be an ID or a single DOM node.\n\nExiting...");
            return false;
          }
        }
        if (!window.JSON || typeof JSON.stringify !== "function" || typeof JSON.parse !== "function") {
          window.alert("ChessBoard Error 1004: JSON does not exist. Please include a JSON polyfill.\n\nExiting...");
          return false;
        }
        if (!(typeof window.$ && $.fn && $.fn.jquery && compareSemVer($.fn.jquery, MINIMUM_JQUERY_VERSION) === true)) {
          window.alert("ChessBoard Error 1005: Unable to find a valid version of jQuery. Please include jQuery " + MINIMUM_JQUERY_VERSION + " or higher on the page.\n\nExiting...");
          return false;
        }
        return true;
      }
      __name(checkDeps, "checkDeps");
      function validAnimationSpeed(speed) {
        if (speed === "fast" || speed === "slow") {
          return true;
        }
        if (parseInt(speed, 10) + "" !== speed + "") {
          return false;
        }
        return speed >= 0;
      }
      __name(validAnimationSpeed, "validAnimationSpeed");
      function expandConfig() {
        if (typeof cfg === "string" || validPositionObject(cfg) === true) {
          cfg = {
            position: cfg
          };
        }
        if (cfg.orientation !== "black") {
          cfg.orientation = "white";
        }
        CURRENT_ORIENTATION = cfg.orientation;
        if (cfg.showNotation !== false) {
          cfg.showNotation = true;
        }
        if (cfg.draggable !== true) {
          cfg.draggable = false;
        }
        if (cfg.dropOffBoard !== "trash") {
          cfg.dropOffBoard = "snapback";
        }
        if (cfg.sparePieces !== true) {
          cfg.sparePieces = false;
        }
        if (cfg.sparePieces === true) {
          cfg.draggable = true;
        }
        if (cfg.hasOwnProperty("pieceTheme") !== true || typeof cfg.pieceTheme !== "string" && typeof cfg.pieceTheme !== "function") {
          cfg.pieceTheme = "img/chesspieces/wikipedia/{piece}.png";
        }
        if (cfg.hasOwnProperty("appearSpeed") !== true || validAnimationSpeed(cfg.appearSpeed) !== true) {
          cfg.appearSpeed = 200;
        }
        if (cfg.hasOwnProperty("moveSpeed") !== true || validAnimationSpeed(cfg.moveSpeed) !== true) {
          cfg.moveSpeed = 200;
        }
        if (cfg.hasOwnProperty("snapbackSpeed") !== true || validAnimationSpeed(cfg.snapbackSpeed) !== true) {
          cfg.snapbackSpeed = 50;
        }
        if (cfg.hasOwnProperty("snapSpeed") !== true || validAnimationSpeed(cfg.snapSpeed) !== true) {
          cfg.snapSpeed = 25;
        }
        if (cfg.hasOwnProperty("trashSpeed") !== true || validAnimationSpeed(cfg.trashSpeed) !== true) {
          cfg.trashSpeed = 100;
        }
        if (cfg.hasOwnProperty("position") === true) {
          if (cfg.position === "start") {
            CURRENT_POSITION = deepCopy(START_POSITION);
          } else if (validFen(cfg.position) === true) {
            CURRENT_POSITION = fenToObj(cfg.position);
          } else if (validPositionObject(cfg.position) === true) {
            CURRENT_POSITION = deepCopy(cfg.position);
          } else {
            error3(7263, "Invalid value passed to config.position.", cfg.position);
          }
        }
        return true;
      }
      __name(expandConfig, "expandConfig");
      function calculateSquareSize() {
        var containerWidth = parseInt(containerEl.width(), 10);
        if (!containerWidth || containerWidth <= 0) {
          return 0;
        }
        var boardWidth = containerWidth - 1;
        while (boardWidth % 8 !== 0 && boardWidth > 0) {
          boardWidth--;
        }
        return boardWidth / 8;
      }
      __name(calculateSquareSize, "calculateSquareSize");
      function createElIds() {
        for (var i = 0; i < COLUMNS.length; i++) {
          for (var j = 1; j <= 8; j++) {
            var square = COLUMNS[i] + j;
            SQUARE_ELS_IDS[square] = square + "-" + uuid();
          }
        }
        var pieces = "KQRBNP".split("");
        for (var i = 0; i < pieces.length; i++) {
          var whitePiece = "w" + pieces[i];
          var blackPiece = "b" + pieces[i];
          SPARE_PIECE_ELS_IDS[whitePiece] = whitePiece + "-" + uuid();
          SPARE_PIECE_ELS_IDS[blackPiece] = blackPiece + "-" + uuid();
        }
      }
      __name(createElIds, "createElIds");
      function buildBoardContainer() {
        var html = '<div class="' + CSS.chessboard + '">';
        if (cfg.sparePieces === true) {
          html += '<div class="' + CSS.sparePieces + " " + CSS.sparePiecesTop + '"></div>';
        }
        html += '<div class="' + CSS.board + '"></div>';
        if (cfg.sparePieces === true) {
          html += '<div class="' + CSS.sparePieces + " " + CSS.sparePiecesBottom + '"></div>';
        }
        html += "</div>";
        return html;
      }
      __name(buildBoardContainer, "buildBoardContainer");
      function buildBoard(orientation) {
        if (orientation !== "black") {
          orientation = "white";
        }
        var html = "";
        var alpha = deepCopy(COLUMNS);
        var row = 8;
        if (orientation === "black") {
          alpha.reverse();
          row = 1;
        }
        var squareColor = "white";
        for (var i = 0; i < 8; i++) {
          html += '<div class="' + CSS.row + '">';
          for (var j = 0; j < 8; j++) {
            var square = alpha[j] + row;
            html += '<div class="' + CSS.square + " " + CSS[squareColor] + " square-" + square + '" style="width: ' + SQUARE_SIZE + "px; height: " + SQUARE_SIZE + 'px" id="' + SQUARE_ELS_IDS[square] + '" data-square="' + square + '">';
            if (cfg.showNotation === true) {
              if (orientation === "white" && row === 1 || orientation === "black" && row === 8) {
                html += '<div class="' + CSS.notation + " " + CSS.alpha + '">' + alpha[j] + "</div>";
              }
              if (j === 0) {
                html += '<div class="' + CSS.notation + " " + CSS.numeric + '">' + row + "</div>";
              }
            }
            html += "</div>";
            squareColor = squareColor === "white" ? "black" : "white";
          }
          html += '<div class="' + CSS.clearfix + '"></div></div>';
          squareColor = squareColor === "white" ? "black" : "white";
          if (orientation === "white") {
            row--;
          } else {
            row++;
          }
        }
        return html;
      }
      __name(buildBoard, "buildBoard");
      function buildPieceImgSrc(piece) {
        if (typeof cfg.pieceTheme === "function") {
          return cfg.pieceTheme(piece);
        }
        if (typeof cfg.pieceTheme === "string") {
          return cfg.pieceTheme.replace(/{piece}/g, piece);
        }
        error3(8272, "Unable to build image source for cfg.pieceTheme.");
        return "";
      }
      __name(buildPieceImgSrc, "buildPieceImgSrc");
      function buildPiece(piece, hidden, id) {
        var html = '<img src="' + buildPieceImgSrc(piece) + '" ';
        if (id && typeof id === "string") {
          html += 'id="' + id + '" ';
        }
        html += 'alt="" class="' + CSS.piece + '" data-piece="' + piece + '" style="width: ' + SQUARE_SIZE + "px;height: " + SQUARE_SIZE + "px;";
        if (hidden === true) {
          html += "display:none;";
        }
        html += '" />';
        return html;
      }
      __name(buildPiece, "buildPiece");
      function buildSparePieces(color) {
        var pieces = ["wK", "wQ", "wR", "wB", "wN", "wP"];
        if (color === "black") {
          pieces = ["bK", "bQ", "bR", "bB", "bN", "bP"];
        }
        var html = "";
        for (var i = 0; i < pieces.length; i++) {
          html += buildPiece(pieces[i], false, SPARE_PIECE_ELS_IDS[pieces[i]]);
        }
        return html;
      }
      __name(buildSparePieces, "buildSparePieces");
      function animateSquareToSquare(src, dest, piece, completeFn) {
        var srcSquareEl = $("#" + SQUARE_ELS_IDS[src]);
        var srcSquarePosition = srcSquareEl.offset();
        var destSquareEl = $("#" + SQUARE_ELS_IDS[dest]);
        var destSquarePosition = destSquareEl.offset();
        var animatedPieceId = uuid();
        $("body").append(buildPiece(piece, true, animatedPieceId));
        var animatedPieceEl = $("#" + animatedPieceId);
        animatedPieceEl.css({
          display: "",
          position: "absolute",
          top: srcSquarePosition.top,
          left: srcSquarePosition.left
        });
        srcSquareEl.find("." + CSS.piece).remove();
        var complete = /* @__PURE__ */ __name(function() {
          destSquareEl.append(buildPiece(piece));
          animatedPieceEl.remove();
          if (typeof completeFn === "function") {
            completeFn();
          }
        }, "complete");
        var opts = {
          duration: cfg.moveSpeed,
          complete
        };
        animatedPieceEl.animate(destSquarePosition, opts);
      }
      __name(animateSquareToSquare, "animateSquareToSquare");
      function animateSparePieceToSquare(piece, dest, completeFn) {
        var srcOffset = $("#" + SPARE_PIECE_ELS_IDS[piece]).offset();
        var destSquareEl = $("#" + SQUARE_ELS_IDS[dest]);
        var destOffset = destSquareEl.offset();
        var pieceId = uuid();
        $("body").append(buildPiece(piece, true, pieceId));
        var animatedPieceEl = $("#" + pieceId);
        animatedPieceEl.css({
          display: "",
          position: "absolute",
          left: srcOffset.left,
          top: srcOffset.top
        });
        var complete = /* @__PURE__ */ __name(function() {
          destSquareEl.find("." + CSS.piece).remove();
          destSquareEl.append(buildPiece(piece));
          animatedPieceEl.remove();
          if (typeof completeFn === "function") {
            completeFn();
          }
        }, "complete");
        var opts = {
          duration: cfg.moveSpeed,
          complete
        };
        animatedPieceEl.animate(destOffset, opts);
      }
      __name(animateSparePieceToSquare, "animateSparePieceToSquare");
      function doAnimations(a, oldPos, newPos) {
        if (a.length === 0) {
          return;
        }
        ANIMATION_HAPPENING = true;
        var numFinished = 0;
        function onFinish() {
          numFinished++;
          if (numFinished !== a.length)
            return;
          drawPositionInstant();
          ANIMATION_HAPPENING = false;
          if (cfg.hasOwnProperty("onMoveEnd") === true && typeof cfg.onMoveEnd === "function") {
            cfg.onMoveEnd(deepCopy(oldPos), deepCopy(newPos));
          }
        }
        __name(onFinish, "onFinish");
        for (var i = 0; i < a.length; i++) {
          if (a[i].type === "clear") {
            $("#" + SQUARE_ELS_IDS[a[i].square] + " ." + CSS.piece).fadeOut(cfg.trashSpeed, onFinish);
          }
          if (a[i].type === "add" && cfg.sparePieces !== true) {
            $("#" + SQUARE_ELS_IDS[a[i].square]).append(buildPiece(a[i].piece, true)).find("." + CSS.piece).fadeIn(cfg.appearSpeed, onFinish);
          }
          if (a[i].type === "add" && cfg.sparePieces === true) {
            animateSparePieceToSquare(a[i].piece, a[i].square, onFinish);
          }
          if (a[i].type === "move") {
            animateSquareToSquare(
              a[i].source,
              a[i].destination,
              a[i].piece,
              onFinish
            );
          }
        }
      }
      __name(doAnimations, "doAnimations");
      function squareDistance(s1, s2) {
        s1 = s1.split("");
        var s1x = COLUMNS.indexOf(s1[0]) + 1;
        var s1y = parseInt(s1[1], 10);
        s2 = s2.split("");
        var s2x = COLUMNS.indexOf(s2[0]) + 1;
        var s2y = parseInt(s2[1], 10);
        var xDelta = Math.abs(s1x - s2x);
        var yDelta = Math.abs(s1y - s2y);
        if (xDelta >= yDelta)
          return xDelta;
        return yDelta;
      }
      __name(squareDistance, "squareDistance");
      function createRadius(square) {
        var squares = [];
        for (var i = 0; i < 8; i++) {
          for (var j = 0; j < 8; j++) {
            var s = COLUMNS[i] + (j + 1);
            if (square === s)
              continue;
            squares.push({
              square: s,
              distance: squareDistance(square, s)
            });
          }
        }
        squares.sort(function(a, b) {
          return a.distance - b.distance;
        });
        var squares2 = [];
        for (var i = 0; i < squares.length; i++) {
          squares2.push(squares[i].square);
        }
        return squares2;
      }
      __name(createRadius, "createRadius");
      function findClosestPiece(position, piece, square) {
        var closestSquares = createRadius(square);
        for (var i = 0; i < closestSquares.length; i++) {
          var s = closestSquares[i];
          if (position.hasOwnProperty(s) === true && position[s] === piece) {
            return s;
          }
        }
        return false;
      }
      __name(findClosestPiece, "findClosestPiece");
      function calculateAnimations(pos1, pos2) {
        pos1 = deepCopy(pos1);
        pos2 = deepCopy(pos2);
        var animations = [];
        var squaresMovedTo = {};
        for (var i in pos2) {
          if (pos2.hasOwnProperty(i) !== true)
            continue;
          if (pos1.hasOwnProperty(i) === true && pos1[i] === pos2[i]) {
            delete pos1[i];
            delete pos2[i];
          }
        }
        for (var i in pos2) {
          if (pos2.hasOwnProperty(i) !== true)
            continue;
          var closestPiece = findClosestPiece(pos1, pos2[i], i);
          if (closestPiece !== false) {
            animations.push({
              type: "move",
              source: closestPiece,
              destination: i,
              piece: pos2[i]
            });
            delete pos1[closestPiece];
            delete pos2[i];
            squaresMovedTo[i] = true;
          }
        }
        for (var i in pos2) {
          if (pos2.hasOwnProperty(i) !== true)
            continue;
          animations.push({
            type: "add",
            square: i,
            piece: pos2[i]
          });
          delete pos2[i];
        }
        for (var i in pos1) {
          if (pos1.hasOwnProperty(i) !== true)
            continue;
          if (squaresMovedTo.hasOwnProperty(i) === true)
            continue;
          animations.push({
            type: "clear",
            square: i,
            piece: pos1[i]
          });
          delete pos1[i];
        }
        return animations;
      }
      __name(calculateAnimations, "calculateAnimations");
      function drawPositionInstant() {
        boardEl.find("." + CSS.piece).remove();
        for (var i in CURRENT_POSITION) {
          if (CURRENT_POSITION.hasOwnProperty(i) !== true)
            continue;
          $("#" + SQUARE_ELS_IDS[i]).append(buildPiece(CURRENT_POSITION[i]));
        }
      }
      __name(drawPositionInstant, "drawPositionInstant");
      function drawBoard() {
        boardEl.html(buildBoard(CURRENT_ORIENTATION));
        drawPositionInstant();
        if (cfg.sparePieces === true) {
          if (CURRENT_ORIENTATION === "white") {
            sparePiecesTopEl.html(buildSparePieces("black"));
            sparePiecesBottomEl.html(buildSparePieces("white"));
          } else {
            sparePiecesTopEl.html(buildSparePieces("white"));
            sparePiecesBottomEl.html(buildSparePieces("black"));
          }
        }
      }
      __name(drawBoard, "drawBoard");
      function calculatePositionFromMoves(position, moves) {
        position = deepCopy(position);
        for (var i in moves) {
          if (moves.hasOwnProperty(i) !== true)
            continue;
          if (position.hasOwnProperty(i) !== true)
            continue;
          var piece = position[i];
          delete position[i];
          position[moves[i]] = piece;
        }
        return position;
      }
      __name(calculatePositionFromMoves, "calculatePositionFromMoves");
      function setCurrentPosition(position) {
        var oldPos = deepCopy(CURRENT_POSITION);
        var newPos = deepCopy(position);
        var oldFen = objToFen(oldPos);
        var newFen = objToFen(newPos);
        if (oldFen === newFen)
          return;
        if (cfg.hasOwnProperty("onChange") === true && typeof cfg.onChange === "function") {
          cfg.onChange(oldPos, newPos);
        }
        CURRENT_POSITION = position;
      }
      __name(setCurrentPosition, "setCurrentPosition");
      function isXYOnSquare(x, y) {
        for (var i in SQUARE_ELS_OFFSETS) {
          if (SQUARE_ELS_OFFSETS.hasOwnProperty(i) !== true)
            continue;
          var s = SQUARE_ELS_OFFSETS[i];
          if (x >= s.left && x < s.left + SQUARE_SIZE && y >= s.top && y < s.top + SQUARE_SIZE) {
            return i;
          }
        }
        return "offboard";
      }
      __name(isXYOnSquare, "isXYOnSquare");
      function captureSquareOffsets() {
        SQUARE_ELS_OFFSETS = {};
        for (var i in SQUARE_ELS_IDS) {
          if (SQUARE_ELS_IDS.hasOwnProperty(i) !== true)
            continue;
          SQUARE_ELS_OFFSETS[i] = $("#" + SQUARE_ELS_IDS[i]).offset();
        }
      }
      __name(captureSquareOffsets, "captureSquareOffsets");
      function removeSquareHighlights() {
        boardEl.find("." + CSS.square).removeClass(CSS.highlight1 + " " + CSS.highlight2);
      }
      __name(removeSquareHighlights, "removeSquareHighlights");
      function snapbackDraggedPiece() {
        if (DRAGGED_PIECE_SOURCE === "spare") {
          trashDraggedPiece();
          return;
        }
        removeSquareHighlights();
        function complete() {
          drawPositionInstant();
          draggedPieceEl.css("display", "none");
          if (cfg.hasOwnProperty("onSnapbackEnd") === true && typeof cfg.onSnapbackEnd === "function") {
            cfg.onSnapbackEnd(
              DRAGGED_PIECE,
              DRAGGED_PIECE_SOURCE,
              deepCopy(CURRENT_POSITION),
              CURRENT_ORIENTATION
            );
          }
        }
        __name(complete, "complete");
        var sourceSquarePosition = $("#" + SQUARE_ELS_IDS[DRAGGED_PIECE_SOURCE]).offset();
        var opts = {
          duration: cfg.snapbackSpeed,
          complete
        };
        draggedPieceEl.animate(sourceSquarePosition, opts);
        DRAGGING_A_PIECE = false;
      }
      __name(snapbackDraggedPiece, "snapbackDraggedPiece");
      function trashDraggedPiece() {
        removeSquareHighlights();
        var newPosition = deepCopy(CURRENT_POSITION);
        delete newPosition[DRAGGED_PIECE_SOURCE];
        setCurrentPosition(newPosition);
        drawPositionInstant();
        draggedPieceEl.fadeOut(cfg.trashSpeed);
        DRAGGING_A_PIECE = false;
      }
      __name(trashDraggedPiece, "trashDraggedPiece");
      function dropDraggedPieceOnSquare(square) {
        removeSquareHighlights();
        var newPosition = deepCopy(CURRENT_POSITION);
        delete newPosition[DRAGGED_PIECE_SOURCE];
        newPosition[square] = DRAGGED_PIECE;
        setCurrentPosition(newPosition);
        var targetSquarePosition = $("#" + SQUARE_ELS_IDS[square]).offset();
        var complete = /* @__PURE__ */ __name(function() {
          drawPositionInstant();
          draggedPieceEl.css("display", "none");
          if (cfg.hasOwnProperty("onSnapEnd") === true && typeof cfg.onSnapEnd === "function") {
            cfg.onSnapEnd(DRAGGED_PIECE_SOURCE, square, DRAGGED_PIECE);
          }
        }, "complete");
        var opts = {
          duration: cfg.snapSpeed,
          complete
        };
        draggedPieceEl.animate(targetSquarePosition, opts);
        DRAGGING_A_PIECE = false;
      }
      __name(dropDraggedPieceOnSquare, "dropDraggedPieceOnSquare");
      function beginDraggingPiece(source, piece, x, y) {
        if (typeof cfg.onDragStart === "function" && cfg.onDragStart(
          source,
          piece,
          deepCopy(CURRENT_POSITION),
          CURRENT_ORIENTATION
        ) === false) {
          return;
        }
        DRAGGING_A_PIECE = true;
        DRAGGED_PIECE = piece;
        DRAGGED_PIECE_SOURCE = source;
        if (source === "spare") {
          DRAGGED_PIECE_LOCATION = "offboard";
        } else {
          DRAGGED_PIECE_LOCATION = source;
        }
        captureSquareOffsets();
        draggedPieceEl.attr("src", buildPieceImgSrc(piece)).css({
          display: "",
          position: "absolute",
          left: x - SQUARE_SIZE / 2,
          top: y - SQUARE_SIZE / 2
        });
        if (source !== "spare") {
          $("#" + SQUARE_ELS_IDS[source]).addClass(CSS.highlight1).find("." + CSS.piece).css("display", "none");
        }
      }
      __name(beginDraggingPiece, "beginDraggingPiece");
      function updateDraggedPiece(x, y) {
        draggedPieceEl.css({
          left: x - SQUARE_SIZE / 2,
          top: y - SQUARE_SIZE / 2
        });
        var location = isXYOnSquare(x, y);
        if (location === DRAGGED_PIECE_LOCATION)
          return;
        if (validSquare(DRAGGED_PIECE_LOCATION) === true) {
          $("#" + SQUARE_ELS_IDS[DRAGGED_PIECE_LOCATION]).removeClass(CSS.highlight2);
        }
        if (validSquare(location) === true) {
          $("#" + SQUARE_ELS_IDS[location]).addClass(CSS.highlight2);
        }
        if (typeof cfg.onDragMove === "function") {
          cfg.onDragMove(
            location,
            DRAGGED_PIECE_LOCATION,
            DRAGGED_PIECE_SOURCE,
            DRAGGED_PIECE,
            deepCopy(CURRENT_POSITION),
            CURRENT_ORIENTATION
          );
        }
        DRAGGED_PIECE_LOCATION = location;
      }
      __name(updateDraggedPiece, "updateDraggedPiece");
      function stopDraggedPiece(location) {
        var action = "drop";
        if (location === "offboard" && cfg.dropOffBoard === "snapback") {
          action = "snapback";
        }
        if (location === "offboard" && cfg.dropOffBoard === "trash") {
          action = "trash";
        }
        if (cfg.hasOwnProperty("onDrop") === true && typeof cfg.onDrop === "function") {
          var newPosition = deepCopy(CURRENT_POSITION);
          if (DRAGGED_PIECE_SOURCE === "spare" && validSquare(location) === true) {
            newPosition[location] = DRAGGED_PIECE;
          }
          if (validSquare(DRAGGED_PIECE_SOURCE) === true && location === "offboard") {
            delete newPosition[DRAGGED_PIECE_SOURCE];
          }
          if (validSquare(DRAGGED_PIECE_SOURCE) === true && validSquare(location) === true) {
            delete newPosition[DRAGGED_PIECE_SOURCE];
            newPosition[location] = DRAGGED_PIECE;
          }
          var oldPosition = deepCopy(CURRENT_POSITION);
          var result = cfg.onDrop(
            DRAGGED_PIECE_SOURCE,
            location,
            DRAGGED_PIECE,
            newPosition,
            oldPosition,
            CURRENT_ORIENTATION
          );
          if (result === "snapback" || result === "trash") {
            action = result;
          }
        }
        if (action === "snapback") {
          snapbackDraggedPiece();
        } else if (action === "trash") {
          trashDraggedPiece();
        } else if (action === "drop") {
          dropDraggedPieceOnSquare(location);
        }
      }
      __name(stopDraggedPiece, "stopDraggedPiece");
      widget.clear = function(useAnimation) {
        widget.position({}, useAnimation);
      };
      widget.destroy = function() {
        containerEl.html("");
        draggedPieceEl.remove();
        containerEl.unbind();
      };
      widget.fen = function() {
        return widget.position("fen");
      };
      widget.flip = function() {
        return widget.orientation("flip");
      };
      widget.move = function() {
        if (arguments.length === 0)
          return;
        var useAnimation = true;
        var moves = {};
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] === false) {
            useAnimation = false;
            continue;
          }
          if (validMove(arguments[i]) !== true) {
            error3(2826, "Invalid move passed to the move method.", arguments[i]);
            continue;
          }
          var tmp = arguments[i].split("-");
          moves[tmp[0]] = tmp[1];
        }
        var newPos = calculatePositionFromMoves(CURRENT_POSITION, moves);
        widget.position(newPos, useAnimation);
        return newPos;
      };
      widget.orientation = function(arg) {
        if (arguments.length === 0) {
          return CURRENT_ORIENTATION;
        }
        if (arg === "white" || arg === "black") {
          CURRENT_ORIENTATION = arg;
          drawBoard();
          return CURRENT_ORIENTATION;
        }
        if (arg === "flip") {
          CURRENT_ORIENTATION = CURRENT_ORIENTATION === "white" ? "black" : "white";
          drawBoard();
          return CURRENT_ORIENTATION;
        }
        error3(5482, "Invalid value passed to the orientation method.", arg);
      };
      widget.position = function(position, useAnimation) {
        if (arguments.length === 0) {
          return deepCopy(CURRENT_POSITION);
        }
        if (typeof position === "string" && position.toLowerCase() === "fen") {
          return objToFen(CURRENT_POSITION);
        }
        if (useAnimation !== false) {
          useAnimation = true;
        }
        if (typeof position === "string" && position.toLowerCase() === "start") {
          position = deepCopy(START_POSITION);
        }
        if (validFen(position) === true) {
          position = fenToObj(position);
        }
        if (validPositionObject(position) !== true) {
          error3(6482, "Invalid value passed to the position method.", position);
          return;
        }
        if (useAnimation === true) {
          doAnimations(
            calculateAnimations(CURRENT_POSITION, position),
            CURRENT_POSITION,
            position
          );
          setCurrentPosition(position);
        } else {
          setCurrentPosition(position);
          drawPositionInstant();
        }
      };
      widget.resize = function() {
        SQUARE_SIZE = calculateSquareSize();
        boardEl.css("width", SQUARE_SIZE * 8 + "px");
        draggedPieceEl.css({
          height: SQUARE_SIZE,
          width: SQUARE_SIZE
        });
        if (cfg.sparePieces === true) {
          containerEl.find("." + CSS.sparePieces).css("paddingLeft", SQUARE_SIZE + BOARD_BORDER_SIZE + "px");
        }
        drawBoard();
      };
      widget.start = function(useAnimation) {
        widget.position("start", useAnimation);
      };
      function isTouchDevice() {
        return "ontouchstart" in document.documentElement;
      }
      __name(isTouchDevice, "isTouchDevice");
      function isMSIE() {
        return navigator && "Cloudflare-Workers" && "Cloudflare-Workers".search(/MSIE/) !== -1;
      }
      __name(isMSIE, "isMSIE");
      function stopDefault(e) {
        e.preventDefault();
      }
      __name(stopDefault, "stopDefault");
      function mousedownSquare(e) {
        if (cfg.draggable !== true)
          return;
        var square = $(this).attr("data-square");
        if (validSquare(square) !== true || CURRENT_POSITION.hasOwnProperty(square) !== true) {
          return;
        }
        beginDraggingPiece(square, CURRENT_POSITION[square], e.pageX, e.pageY);
      }
      __name(mousedownSquare, "mousedownSquare");
      function touchstartSquare(e) {
        if (cfg.draggable !== true)
          return;
        var square = $(this).attr("data-square");
        if (validSquare(square) !== true || CURRENT_POSITION.hasOwnProperty(square) !== true) {
          return;
        }
        e = e.originalEvent;
        beginDraggingPiece(
          square,
          CURRENT_POSITION[square],
          e.changedTouches[0].pageX,
          e.changedTouches[0].pageY
        );
      }
      __name(touchstartSquare, "touchstartSquare");
      function mousedownSparePiece(e) {
        if (cfg.sparePieces !== true)
          return;
        var piece = $(this).attr("data-piece");
        beginDraggingPiece("spare", piece, e.pageX, e.pageY);
      }
      __name(mousedownSparePiece, "mousedownSparePiece");
      function touchstartSparePiece(e) {
        if (cfg.sparePieces !== true)
          return;
        var piece = $(this).attr("data-piece");
        e = e.originalEvent;
        beginDraggingPiece(
          "spare",
          piece,
          e.changedTouches[0].pageX,
          e.changedTouches[0].pageY
        );
      }
      __name(touchstartSparePiece, "touchstartSparePiece");
      function mousemoveWindow(e) {
        if (DRAGGING_A_PIECE !== true)
          return;
        updateDraggedPiece(e.pageX, e.pageY);
      }
      __name(mousemoveWindow, "mousemoveWindow");
      function touchmoveWindow(e) {
        if (DRAGGING_A_PIECE !== true)
          return;
        e.preventDefault();
        updateDraggedPiece(
          e.originalEvent.changedTouches[0].pageX,
          e.originalEvent.changedTouches[0].pageY
        );
      }
      __name(touchmoveWindow, "touchmoveWindow");
      function mouseupWindow(e) {
        if (DRAGGING_A_PIECE !== true)
          return;
        var location = isXYOnSquare(e.pageX, e.pageY);
        stopDraggedPiece(location);
      }
      __name(mouseupWindow, "mouseupWindow");
      function touchendWindow(e) {
        if (DRAGGING_A_PIECE !== true)
          return;
        var location = isXYOnSquare(
          e.originalEvent.changedTouches[0].pageX,
          e.originalEvent.changedTouches[0].pageY
        );
        stopDraggedPiece(location);
      }
      __name(touchendWindow, "touchendWindow");
      function mouseenterSquare(e) {
        if (DRAGGING_A_PIECE !== false)
          return;
        if (cfg.hasOwnProperty("onMouseoverSquare") !== true || typeof cfg.onMouseoverSquare !== "function")
          return;
        var square = $(e.currentTarget).attr("data-square");
        if (validSquare(square) !== true)
          return;
        var piece = false;
        if (CURRENT_POSITION.hasOwnProperty(square) === true) {
          piece = CURRENT_POSITION[square];
        }
        cfg.onMouseoverSquare(
          square,
          piece,
          deepCopy(CURRENT_POSITION),
          CURRENT_ORIENTATION
        );
      }
      __name(mouseenterSquare, "mouseenterSquare");
      function mouseleaveSquare(e) {
        if (DRAGGING_A_PIECE !== false)
          return;
        if (cfg.hasOwnProperty("onMouseoutSquare") !== true || typeof cfg.onMouseoutSquare !== "function")
          return;
        var square = $(e.currentTarget).attr("data-square");
        if (validSquare(square) !== true)
          return;
        var piece = false;
        if (CURRENT_POSITION.hasOwnProperty(square) === true) {
          piece = CURRENT_POSITION[square];
        }
        cfg.onMouseoutSquare(
          square,
          piece,
          deepCopy(CURRENT_POSITION),
          CURRENT_ORIENTATION
        );
      }
      __name(mouseleaveSquare, "mouseleaveSquare");
      function addEvents() {
        $("body").on("mousedown mousemove", "." + CSS.piece, stopDefault);
        boardEl.on("mousedown", "." + CSS.square, mousedownSquare);
        containerEl.on(
          "mousedown",
          "." + CSS.sparePieces + " ." + CSS.piece,
          mousedownSparePiece
        );
        boardEl.on("mouseenter", "." + CSS.square, mouseenterSquare).on("mouseleave", "." + CSS.square, mouseleaveSquare);
        if (isMSIE() === true) {
          document.ondragstart = function() {
            return false;
          };
          $("body").on("mousemove", mousemoveWindow).on("mouseup", mouseupWindow);
        } else {
          $(window).on("mousemove", mousemoveWindow).on("mouseup", mouseupWindow);
        }
        if (isTouchDevice() === true) {
          boardEl.on("touchstart", "." + CSS.square, touchstartSquare);
          containerEl.on(
            "touchstart",
            "." + CSS.sparePieces + " ." + CSS.piece,
            touchstartSparePiece
          );
          $(window).on("touchmove", touchmoveWindow).on("touchend", touchendWindow);
        }
      }
      __name(addEvents, "addEvents");
      function initDom() {
        createElIds();
        containerEl.html(buildBoardContainer());
        boardEl = containerEl.find("." + CSS.board);
        if (cfg.sparePieces === true) {
          sparePiecesTopEl = containerEl.find("." + CSS.sparePiecesTop);
          sparePiecesBottomEl = containerEl.find("." + CSS.sparePiecesBottom);
        }
        var draggedPieceId = uuid();
        $("body").append(buildPiece("wP", true, draggedPieceId));
        draggedPieceEl = $("#" + draggedPieceId);
        BOARD_BORDER_SIZE = parseInt(boardEl.css("borderLeftWidth"), 10);
        widget.resize();
      }
      __name(initDom, "initDom");
      function init() {
        if (checkDeps() !== true || expandConfig() !== true)
          return;
        initDom();
        addEvents();
      }
      __name(init, "init");
      init();
      return widget;
    }, "ChessBoard");
    ChessBoard.fenToObj = fenToObj;
    ChessBoard.objToFen = objToFen;
    module.exports = ChessBoard;
  }
});

// src/worker.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/index.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/hono.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/hono-base.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/compose.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/context.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/request.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/utils/body.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p.at(-1) === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = /* @__PURE__ */ __name(class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, "HonoRequest");

// node_modules/hono/dist/utils/html.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context2, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context: context2 }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context2, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
}, "setHeaders");
var Context = /* @__PURE__ */ __name(class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    if (typeof arg === "number") {
      return this.#newResponse(text, arg, headers);
    }
    return this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
}, "Context");

// node_modules/hono/dist/compose.js
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    const isContext = context2 instanceof Context;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (isContext) {
          context2.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (isContext && context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      } else {
        try {
          res = await handler(context2, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && isContext && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/router.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(class extends Error {
}, "UnsupportedPathError");

// node_modules/hono/dist/utils/constants.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = /* @__PURE__ */ __name(class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env3, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env3, "GET")))();
    }
    const path = this.getPath(request, { env: env3 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env3,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context2 = await composed(c);
        if (!context2.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context2.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
}, "Hono");

// node_modules/hono/dist/router/reg-exp-router/index.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(class {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context2, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context2.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context2, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, "Node");

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var Trie = /* @__PURE__ */ __name(class {
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, "Trie");

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
}, "RegExpRouter");

// node_modules/hono/dist/router/smart-router/index.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/smart-router/router.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var SmartRouter = /* @__PURE__ */ __name(class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router2 = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router2.add(...routes[i2]);
        }
        res = router2.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router2.match.bind(router2);
      this.#routers = [router2];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
}, "SmartRouter");

// node_modules/hono/dist/router/trie-router/index.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/trie-router/router.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/trie-router/node.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = /* @__PURE__ */ __name(class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.#children).includes(p)) {
        curNode = curNode.#children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[p];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
            continue;
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
}, "Node");

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
}, "TrieRouter");

// node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
}, "Hono");

// src/@bhar2254/bs-dom.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
String.prototype.capitalizeFirstChar = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
var Defaults = class {
};
__name(Defaults, "Defaults");
__publicField(Defaults, "defaults", {});
__publicField(Defaults, "setup", (setup) => {
  if (setup.defaults) {
    setDefts(setup.defaults);
  }
});
__publicField(Defaults, "setDefs", (setDefaults) => {
  for (const [key, value] of Object.entries(setDefaults)) {
    HtmlElement.defaults[key] = value;
  }
});
var HtmlElement = class extends Defaults {
  constructor(args) {
    super(args);
    this.tag = args.tag || "";
    this.attributes = args.attributes || {};
    this.classes = args.classes || [];
    this.content = args.content || "";
    this.parent = args.parent || {};
    this.children = args.children || [];
  }
  set attributes(attr) {
    this._attributes = attr;
  }
  get attributes() {
    let output = "";
    for (const [key, value] of Object.entries(this._attributes))
      output = ` ${key}='${value}'`;
    return output;
  }
  set children(children) {
    this._children = children;
  }
  get children() {
    return this._children;
  }
  set classes(classes) {
    this._classes = Array.isArray(classes) ? classes : [classes];
  }
  get classes() {
    return Array.isArray(this._classes) ? this._classes : [this._classes || ""];
  }
  set content(content) {
    this._content = content;
  }
  get content() {
    return this._content;
  }
  set parent(parent) {
    this._parent = parent;
  }
  get parent() {
    return this._parent;
  }
  set tag(tag) {
    const htmlTags = ["!--...--", "!DOCTYPE", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "search", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"];
    this._tag = htmlTags.includes(tag) ? tag : "div";
  }
  get tag() {
    return this._tag;
  }
  addChild(child) {
    if (!this._children.includes(child))
      this._children.push(child);
  }
  addClass(classString) {
    this._classes.push(classString);
    return this.classes;
  }
  renderChildren() {
    let output = "";
    for (const each of this.children)
      output += ` ${each.render()} `;
    return output;
  }
  render() {
    return `<${this.tag}${this.attributes} class='${this.classes.join(" ")}'>${this.content}</${this.tag}>`;
  }
};
__name(HtmlElement, "HtmlElement");
var Page = class extends Defaults {
  constructor(args) {
    super(args);
    this.siteTitle = args.siteTitle ? args.siteTitle.capitalizeFirstChar() : Page.defaults.siteTitle || "Default";
    this.pageTitle = args.pageTitle ? args.pageTitle.capitalizeFirstChar() : Page.defaults.pageTitle || "Page";
    this.style = args.style || "";
    this.header = { headerTitle: `${this.siteTitle} | ${this.pageTitle}`, headerOverwrite: args.headerOverwrite || null };
    this.brand = args.brand || Page.defaults.brand || args.siteTitle;
    this.navbar = args.navbar || Page.defaults.navbar || [{}];
    this.body = args.body || Page.defaults.body || "Bootstrap 5 Starter";
    this.footer = args.footer || Page.defaults.footer || "";
    this.tag = "html";
    this._bs_theme = args.theme || Page.defaults.theme || "light";
  }
  set body(content) {
    const body = `
    <body>
        <iframe name="hiddenFrame" style="display:none;" class="hide"></iframe>
        <div class='main'>
            <div class='mx-auto my-5 bg-glass-dark bg-glass-dark-5 shadow-lg bh-left-bar-secondary col-lg-9 col-md-12 col-sm-12'>
                ${content}
            </div>
        </div>`;
    this.content = body;
  }
  get body() {
    return this.content;
  }
  set footer(content) {
    this._footer = content;
  }
  get footer() {
    return `${this._footer}
    </body>
</html>`;
  }
  set header(args) {
    this._headerTitle = args.headerTitle;
    if (args.headerOverwrite)
      this._headerOverwrite = args.headerOverwrite;
  }
  get header() {
    return `
        <!DOCTYPE html>
        <html data-bs-theme="${this._bs_theme}">
            <head>
                <meta charset='utf8' />
                <title>${this._headerTitle}</title>
                <style>${this.style}</style>
                ${this._headerOverwrite || Page.defaults.header}
            </head>`;
  }
  set navbar(navbar) {
    this._navbar = navbar;
  }
  get navbar() {
    const generateDropdown = /* @__PURE__ */ __name((args) => {
      const _args = { ...args };
      const text = _args.text || "";
      const links = _args.links || [];
      let responseHtml = `
                <li class='nav-item dropdown'>
                    <a id='navbar_dropdown_item' class='nav-link' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>${text}</a>
                        <ul class='dropdown-menu table-responsive border shadow-lg'>`;
      for (const each of links)
        if (each.text == "hr")
          responseHtml += `<hr style='color:#533; margin:0; padding:0;'>`;
        else
          responseHtml += `<li><a class='dropdown-item' target='${each.target || "_self"}' href='${each.link || "#"}'>${each.text || ""}</a></li>`;
      return responseHtml + `</ul>
        </li>`;
    }, "generateDropdown");
    const dropdowns = this._navbar || [{}];
    let dropDownHtml = "";
    for (const each of dropdowns) {
      const link = each.link || false;
      dropDownHtml += link ? `<li class='nav-item'>
                    <a id='navbar_item' class='nav-link' href='${link}' role='button'>${each.text}</a>` : generateDropdown(each);
    }
    return `
            <nav class='navbar navbar-expand-lg text-end bg-glass-dark bg-glass-dark-5 sticky-top shadow-lg'>
                <div class='col-10 container-fluid'>
                <button class='ms-auto bg-glass my-1 navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'><i class='fa-solid fa-bars'></i></button>
                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <a id='navbar_banner_button' class='fs-5 navbar-brand hide-on-shrink' href='/'>${this.brand}</a>
                    <ul class='navbar-nav ms-auto'>
                        ${dropDownHtml}
                    </ul>
                </div>
                </div>
            </nav>`;
  }
  set style(style) {
    this._style = style;
  }
  get style() {
    return this._style;
  }
  render() {
    return this.header + this.navbar + this.body + this.footer;
  }
};
__name(Page, "Page");

// src/routes/index.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// src/@bhar2254/std.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function rawHtmlResponse(html) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8"
    }
  });
}
__name(rawHtmlResponse, "rawHtmlResponse");

// node_modules/chess.js/dist/esm/chess.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var QUEEN = "q";
var KING = "k";
var BITS = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64
};
var Ox88 = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
};
var SIDES = {
  [KING]: BITS.KSIDE_CASTLE,
  [QUEEN]: BITS.QSIDE_CASTLE
};
var ROOKS = {
  w: [
    { square: Ox88.a1, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h1, flag: BITS.KSIDE_CASTLE }
  ],
  b: [
    { square: Ox88.a8, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h8, flag: BITS.KSIDE_CASTLE }
  ]
};

// src/routes/index.js
var import_chessboardjs = __toESM(require_chessboard());
var router = new Hono2();
router.get("/", (c) => {
  const body = `<script type="module">
                import { Chess } from 'chess.js'
            <\/script>
            <script type="module">
                import { Chessboard } from 'chessboardjs'
            <\/script>
            <div id="myBoard" style="width: 400px"></div>
        <script>
            // NOTE: this example uses the chess.js library:
            // https://github.com/jhlywa/chess.js

            var board = null
            var game = new Chess()

            function onDragStart (source, piece, position, orientation) {
            // do not pick up pieces if the game is over
            if (game.game_over()) return false

            // only pick up pieces for White
            if (piece.search(/^b/) !== -1) return false
            }

            function makeRandomMove () {
            var possibleMoves = game.moves()

            // game over
            if (possibleMoves.length === 0) return

            var randomIdx = Math.floor(Math.random() * possibleMoves.length)
            game.move(possibleMoves[randomIdx])
            board.position(game.fen())
            }

            function onDrop (source, target) {
            // see if the move is legal
            var move = game.move({
                from: source,
                to: target,
                promotion: 'q' // NOTE: always promote to a queen for example simplicity
            })

            // illegal move
            if (move === null) return 'snapback'

            // make random legal move for black
            window.setTimeout(makeRandomMove, 250)
            }

            // update the board position after the piece snap
            // for castling, en passant, pawn promotion
            function onSnapEnd () {
            board.position(game.fen())
            }

            var config = {
            draggable: true,
            position: 'start',
            onDragStart: onDragStart,
            onDrop: onDrop,
            onSnapEnd: onSnapEnd
            }
            board = Chessboard('myBoard', config)
        <\/script>`;
  const page = new Page({
    page_title: "Home",
    body: body || `<div class='p-3 text-center'><h2>Hello World!</h2<</div><br>
				<img class='p-3 mx-auto d-block rounded' src='https://blaineharper.com/assets/favicon.ico' style='max-width:100%; max-height: 25rem'>`
  });
  return rawHtmlResponse(page.render());
});
router.get("/developer", async (c) => {
  const page = new Page({
    pageTitle: "Developer",
    body: `
        <div class="py-3 mx-auto col-md-10 col-sm-12">
            Hi! My name's Blaine. I make websites and other JavaScript applications. If you're interested in creating your own JavaScript projects like this one, check out my <a href='https://github.com/bhar2254'>GitHub</a> or check out my site <a href='https://blaineharper.com'>BlaineHarper.com</a> for (possibly?) up to date details.
        </div>`
  });
  return rawHtmlResponse(page.render());
});
router.get("/projects", async (c) => {
  const page = new Page({
    pageTitle: "Projects",
    body: `
        <div class="py-3 mx-auto col-md-10 col-sm-12">
            If you'd like to view my other projects, check out my <a href='https://github.com/bhar2254'>GitHub</a>!
        </div>`
  });
  return rawHtmlResponse(page.render());
});
var routes_default = router;

// src/worker.js
var version2 = "0.0.0";
var BASE_NAV = [{
  text: "About",
  links: [{
    text: "Developer",
    link: "/developer"
  }, {
    text: "Other Projects",
    link: "/projects"
  }]
}, {
  text: "Intro",
  links: [{
    text: "Terminology",
    link: `/intro`
  }]
}, {
  text: "Openings",
  links: [{
    text: "Queen's Gambit",
    link: `/openings/queens_gambit`
  }]
}];
var ENV = {
  version: version2,
  siteTitle: "Chess | BlaineHarper",
  brand: `Chess.BlaineHarper.com`,
  copyright: "Blaine Harper",
  navbar: BASE_NAV
};
var _headerDef = `
	<meta name='viewport' content='width=device-width,initial-scale=1'/>
	<link rel='icon' type='image/x-icon' href='https://blaineharper.com/assets/favicon.ico'>

	<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/f1/color-square.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/f1/wiki.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/f1/team-color.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/f1/popup.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/bs.add.css'>

	<script src='https://kit.fontawesome.com/5496aaa581.js' crossorigin='anonymous'><\/script>
	
	<style>
		body {
			background-repeat: no-repeat;
			background-attachment: fixed;

			/* Full height */
			height: 100%;

			/* Center and scale the image nicely */
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;

			background-image: url('https://bhar2254.github.io/src/img/f1/backgrounds/lando_norris.jpg');
			font-family: 'Gotham Narrow', sans-serif;
		}
	</style>`;
var _copyright = `
	<span id = 'footerText'><span id='year'></span> \xA9 <a href="https://blaineharper.com">${ENV.copyright}</a></span>
	<script>document.getElementById('year').innerHTML = new Date().getFullYear()<\/script>`;
var _footerDef = `
	<div class='mx-auto'>
		<div id='footer_motto' class='col-lg-3 col-md-6 col-sm-9 col-xs-11 mx-auto bh-left-bar p-3 shadow-lg bg-glass-dark bg-glass-dark-5 bg-gradient text-center panel rounded-0' style='margin-bottom:7.5rem;'>
			<i>This project was created to showcase the power of Cloudflare Workers for easing workflow and improving speed and reliability. Start your own Cloudflare worker site <a href='https://github.com/bhar2254/Cloudflare-Workers-Starter'>here!</a></i>
		</div>
	</div>
	<button onclick="topFunction()" id="topButton" title="Go to top" style="display:block;">Top</button> 
	<!-- Bootstrap Modal -->
	<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content bg-transparent border-0">
				<img style="min-height:60%;min-width:60%;max-height:60%;max-width:60%" src="" alt="Enlarged Image" class="img-fluid" id="modalImage">
			</div>
		</div>
	</div>


	<footer id='mainFooter' class='mx-auto shadow-lg p-2 text-center bg-glass-dark-5 bg-glass-dark sticky-footer'>
		${_copyright}
	</footer>
	
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"><\/script>

	<script>
		let buttonToTop = document.getElementById("topButton")

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				buttonToTop.style.display = "block";
			} else {
				buttonToTop.style.display = "none";
			}
		}

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
			
		$(document).ready(function() {
			// Event listener for all images with the class 'popup-img'
			$('.popup-img').on('click', function() {
				const imgSrc = $(this).attr('src');  // Get the source of the clicked image
				$('#modalImage').attr('src', imgSrc);  // Set modal image source
				$('#imageModal').modal('show');  // Show the modal
			});
		});
	<\/script>	`;
var app = new Hono2();
app.use(async (c, next) => {
  const navbar = BASE_NAV;
  c.set("env", {
    ...ENV,
    theme: "dark",
    header: _headerDef,
    footer: _footerDef,
    navbar
  });
  Page.setDefs({
    ...ENV,
    theme: "dark",
    header: _headerDef,
    footer: _footerDef,
    navbar
  });
  await next();
});
app.route("/", routes_default);
var worker_default = app;
export {
  worker_default as default
};
/*! Bundled license information:

chessboardjs/www/js/chessboard.js:
  (*!
   * chessboard.js $version$
   *
   * Copyright 2013 Chris Oakman
   * Released under the MIT license
   * https://github.com/oakmac/chessboardjs/blob/master/LICENSE
   *
   * Date: $date$
   *)

chess.js/dist/esm/chess.js:
  (**
   * @license
   * Copyright (c) 2025, Jeff Hlywa (jhlywa@gmail.com)
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   *    this list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the documentation
   *    and/or other materials provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)
*/
//# sourceMappingURL=worker.js.map
