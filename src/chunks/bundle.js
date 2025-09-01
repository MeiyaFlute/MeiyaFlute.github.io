System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/cjs-loader.mjs", [], function (exports) {
  return {
    execute: function () {
      var CjsLoader = /*#__PURE__*/function () {
        function CjsLoader() {
          this._registry = {};
          this._moduleCache = {};
        }

        /**
         * Defines a CommonJS module.
         * @param id Module ID.
         * @param factory The factory.
         * @param resolveMap An object or a function returning object which records the module specifier resolve result.
         * The later is called as "deferred resolve map" and would be invocated right before CommonJS code execution.
         */
        var _proto = CjsLoader.prototype;
        _proto.define = function define(id, factory, resolveMap) {
          this._registry[id] = {
            factory: factory,
            resolveMap: resolveMap
          };
        }

        /**
         * Requires a CommonJS module.
         * @param id Module ID.
         * @returns The module's `module.exports`.
         */;
        _proto.require = function require(id) {
          return this._require(id);
        };
        _proto.throwInvalidWrapper = function throwInvalidWrapper(requestTarget, from) {
          throw new Error("Module '" + requestTarget + "' imported from '" + from + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _proto._require = function _require(id, parent) {
          var cachedModule = this._moduleCache[id];
          if (cachedModule) {
            return cachedModule.exports;
          }
          var module = {
            id: id,
            exports: {}
          };
          this._moduleCache[id] = module;
          this._tryModuleLoad(module, id);
          return module.exports;
        };
        _proto._resolve = function _resolve(specifier, parent) {
          return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
        };
        _proto._resolveFromInfos = function _resolveFromInfos(specifier, parent) {
          var _cjsInfos$parent$reso, _cjsInfos$parent;
          if (specifier in cjsInfos) {
            return specifier;
          }
          if (!parent) {
            return;
          }
          return (_cjsInfos$parent$reso = (_cjsInfos$parent = cjsInfos[parent]) == null ? void 0 : _cjsInfos$parent.resolveCache[specifier]) != null ? _cjsInfos$parent$reso : undefined;
        };
        _proto._tryModuleLoad = function _tryModuleLoad(module, id) {
          var threw = true;
          try {
            this._load(module, id);
            threw = false;
          } finally {
            if (threw) {
              delete this._moduleCache[id];
            }
          }
        };
        _proto._load = function _load(module, id) {
          var _this$_loadWrapper = this._loadWrapper(id),
            factory = _this$_loadWrapper.factory,
            resolveMap = _this$_loadWrapper.resolveMap;
          var vendorRequire = this._createRequire(module);
          var require = resolveMap ? this._createRequireWithResolveMap(typeof resolveMap === 'function' ? resolveMap() : resolveMap, vendorRequire) : vendorRequire;
          factory(module.exports, require, module);
        };
        _proto._loadWrapper = function _loadWrapper(id) {
          if (id in this._registry) {
            return this._registry[id];
          } else {
            return this._loadHostProvidedModules(id);
          }
        };
        _proto._loadHostProvidedModules = function _loadHostProvidedModules(id) {
          return {
            factory: function factory(_exports, _require, module) {
              if (typeof require === 'undefined') {
                throw new Error("Current environment does not provide a require() for requiring '" + id + "'.");
              }
              try {
                module.exports = require(id);
              } catch (err) {
                throw new Error("Exception thrown when calling host defined require('" + id + "').", {
                  cause: err
                });
              }
            }
          };
        };
        _proto._createRequire = function _createRequire(module) {
          var _this = this;
          return function (specifier) {
            return _this._require(specifier, module);
          };
        };
        _proto._createRequireWithResolveMap = function _createRequireWithResolveMap(requireMap, originalRequire) {
          return function (specifier) {
            var resolved = requireMap[specifier];
            if (resolved) {
              return originalRequire(resolved);
            } else {
              throw new Error('Unresolved specifier ' + specifier);
            }
          };
        };
        _proto._throwUnresolved = function _throwUnresolved(specifier, parentUrl) {
          throw new Error("Unable to resolve " + specifier + " from " + parent + ".");
        };
        return CjsLoader;
      }();
      var loader = exports('default', new CjsLoader());
    }
  };
});

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        arrayLikeToArray: _arrayLikeToArray,
        assertThisInitialized: _assertThisInitialized,
        asyncToGenerator: _asyncToGenerator,
        createClass: _createClass,
        createForOfIteratorHelperLoose: _createForOfIteratorHelperLoose,
        inheritsLoose: _inheritsLoose,
        initializerDefineProperty: _initializerDefineProperty,
        regeneratorRuntime: _regeneratorRuntime,
        setPrototypeOf: _setPrototypeOf,
        toPrimitive: _toPrimitive,
        toPropertyKey: _toPropertyKey,
        unsupportedIterableToArray: _unsupportedIterableToArray
      });
      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = exports('regeneratorRuntime', function () {
          return e;
        });
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = Object.defineProperty || function (t, e, r) {
            t[e] = r.value;
          },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e];
        }
        try {
          define({}, "");
        } catch (t) {
          define = function (t, e, r) {
            return t[e] = r;
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
          }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart",
          l = "suspendedYield",
          f = "executing",
          s = "completed",
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                invoke("next", t, i, a);
              }, function (t) {
                invoke("throw", t, i, a);
              }) : e.resolve(h).then(function (t) {
                u.value = t, i(u);
              }, function (t) {
                return invoke("throw", t, i, a);
              });
            }
            a(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function (t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
              if ("throw" === i) throw a;
              return {
                value: t,
                done: !0
              };
            }
            for (n.method = i, n.arg = a;;) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === h) throw o = s, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ("normal" === p.type) {
                if (o = n.done ? s : l, p.arg === y) continue;
                return {
                  value: p.arg,
                  done: n.done
                };
              }
              "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
          var i = tryCatch(o, e.iterator, r.arg);
          if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
          var a = i.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
        }
        function pushTryEntry(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }
        function Context(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                  return next.value = t, next.done = !0, next;
                };
              return i.next = i;
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, e.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
        }, e.awrap = function (t) {
          return {
            __await: t
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new AsyncIterator(wrap(t, r, n, o), i);
          return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
          return this;
        }), define(g, "toString", function () {
          return "[object Generator]";
        }), e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return r.reverse(), function next() {
            for (; r.length;) {
              var t = r.pop();
              if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
              return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return handle("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  resetTryEntry(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return this.delegate = {
              iterator: values(e),
              resultName: r,
              nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

System.register("chunks:///_virtual/signalr.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = Object.defineProperty || function (t, e, r) {
            t[e] = r.value;
          },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e];
        }
        try {
          define({}, "");
        } catch (t) {
          define = function define(t, e, r) {
            return t[e] = r;
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
          }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart",
          l = "suspendedYield",
          f = "executing",
          s = "completed",
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                invoke("next", t, i, a);
              }, function (t) {
                invoke("throw", t, i, a);
              }) : e.resolve(h).then(function (t) {
                u.value = t, i(u);
              }, function (t) {
                return invoke("throw", t, i, a);
              });
            }
            a(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function value(t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
              if ("throw" === i) throw a;
              return {
                value: t,
                done: !0
              };
            }
            for (n.method = i, n.arg = a;;) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === h) throw o = s, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ("normal" === p.type) {
                if (o = n.done ? s : l, p.arg === y) continue;
                return {
                  value: p.arg,
                  done: n.done
                };
              }
              "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
          var i = tryCatch(o, e.iterator, r.arg);
          if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
          var a = i.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
        }
        function pushTryEntry(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }
        function Context(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                  return next.value = t, next.done = !0, next;
                };
              return i.next = i;
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, e.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
        }, e.awrap = function (t) {
          return {
            __await: t
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new AsyncIterator(wrap(t, r, n, o), i);
          return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
          return this;
        }), define(g, "toString", function () {
          return "[object Generator]";
        }), e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return r.reverse(), function next() {
            for (; r.length;) {
              var t = r.pop();
              if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
          },
          stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
              return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return handle("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
          },
          complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
          },
          finish: function finish(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
          },
          "catch": function _catch(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  resetTryEntry(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
              iterator: values(e),
              resultName: r,
              nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;
        _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (Class === null || !_isNativeFunction(Class)) return Class;
          if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
          }
          function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class);
        };
        return _wrapNativeSuper(Class);
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct.bind();
        } else {
          _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }
      var _cjsExports;
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        (function webpackUniversalModuleDefinition(root, factory) {
          if (typeof exports$1 === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports$1 === 'object') exports$1["signalR"] = factory();else root["signalR"] = factory();
        })(self, function () {
          return (/******/function () {
              /******/ // The require scope
              /******/
              var __webpack_require__ = {};
              /******/
              /************************************************************************/
              /******/ /* webpack/runtime/define property getters */
              /******/
              (function () {
                /******/ // define getter functions for harmony exports
                /******/__webpack_require__.d = function (exports, definition) {
                  /******/for (var key in definition) {
                    /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                      /******/Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                      });
                      /******/
                    }
                    /******/
                  }
                  /******/
                };
                /******/
              })();
              /******/
              /******/ /* webpack/runtime/global */
              /******/
              (function () {
                /******/__webpack_require__.g = function () {
                  /******/if (typeof globalThis === 'object') return globalThis;
                  /******/
                  try {
                    /******/return this || new Function('return this')();
                    /******/
                  } catch (e) {
                    /******/if (typeof window === 'object') return window;
                    /******/
                  }
                  /******/
                }();
                /******/
              })();
              /******/
              /******/ /* webpack/runtime/hasOwnProperty shorthand */
              /******/
              (function () {
                /******/__webpack_require__.o = function (obj, prop) {
                  return Object.prototype.hasOwnProperty.call(obj, prop);
                };
                /******/
              })();
              /******/
              /******/ /* webpack/runtime/make namespace object */
              /******/
              (function () {
                /******/ // define __esModule on exports
                /******/__webpack_require__.r = function (exports) {
                  /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/Object.defineProperty(exports, Symbol.toStringTag, {
                      value: 'Module'
                    });
                    /******/
                  }
                  /******/
                  Object.defineProperty(exports, '__esModule', {
                    value: true
                  });
                  /******/
                };
                /******/
              })();
              /******/
              /************************************************************************/
              var __webpack_exports__ = {};
              // ESM COMPAT FLAG
              __webpack_require__.r(__webpack_exports__);

              // EXPORTS
              __webpack_require__.d(__webpack_exports__, {
                "AbortError": function AbortError() {
                  return (/* reexport */_AbortError
                  );
                },
                "DefaultHttpClient": function DefaultHttpClient() {
                  return (/* reexport */_DefaultHttpClient
                  );
                },
                "HttpClient": function HttpClient() {
                  return (/* reexport */_HttpClient
                  );
                },
                "HttpError": function HttpError() {
                  return (/* reexport */_HttpError
                  );
                },
                "HttpResponse": function HttpResponse() {
                  return (/* reexport */_HttpResponse
                  );
                },
                "HttpTransportType": function HttpTransportType() {
                  return (/* reexport */_HttpTransportType
                  );
                },
                "HubConnection": function HubConnection() {
                  return (/* reexport */_HubConnection
                  );
                },
                "HubConnectionBuilder": function HubConnectionBuilder() {
                  return (/* reexport */_HubConnectionBuilder
                  );
                },
                "HubConnectionState": function HubConnectionState() {
                  return (/* reexport */_HubConnectionState
                  );
                },
                "JsonHubProtocol": function JsonHubProtocol() {
                  return (/* reexport */_JsonHubProtocol
                  );
                },
                "LogLevel": function LogLevel() {
                  return (/* reexport */_LogLevel
                  );
                },
                "MessageType": function MessageType() {
                  return (/* reexport */_MessageType
                  );
                },
                "NullLogger": function NullLogger() {
                  return (/* reexport */_NullLogger
                  );
                },
                "Subject": function Subject() {
                  return (/* reexport */_Subject
                  );
                },
                "TimeoutError": function TimeoutError() {
                  return (/* reexport */_TimeoutError
                  );
                },
                "TransferFormat": function TransferFormat() {
                  return (/* reexport */_TransferFormat
                  );
                },
                "VERSION": function VERSION() {
                  return (/* reexport */_VERSION
                  );
                }
              });
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              /** Error thrown when an HTTP request fails. */
              var _HttpError = /*#__PURE__*/function (_Error) {
                _inheritsLoose(_HttpError, _Error);
                /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
                 *
                 * @param {string} errorMessage A descriptive error message.
                 * @param {number} statusCode The HTTP status code represented by this error.
                 */
                function _HttpError(errorMessage, statusCode) {
                  var _this;
                  var trueProto = (this instanceof _HttpError ? this.constructor : void 0).prototype;
                  _this = _Error.call(this, errorMessage + ": Status code '" + statusCode + "'") || this;
                  _this.statusCode = statusCode;
                  // Workaround issue in Typescript compiler
                  // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                  _this.__proto__ = trueProto;
                  return _this;
                }
                return _HttpError;
              }( /*#__PURE__*/_wrapNativeSuper(Error));
              /** Error thrown when a timeout elapses. */
              var _TimeoutError = /*#__PURE__*/function (_Error2) {
                _inheritsLoose(_TimeoutError, _Error2);
                /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
                 *
                 * @param {string} errorMessage A descriptive error message.
                 */
                function _TimeoutError(errorMessage) {
                  var _this2;
                  if (errorMessage === void 0) {
                    errorMessage = "A timeout occurred.";
                  }
                  var trueProto = (this instanceof _TimeoutError ? this.constructor : void 0).prototype;
                  _this2 = _Error2.call(this, errorMessage) || this;
                  // Workaround issue in Typescript compiler
                  // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                  _this2.__proto__ = trueProto;
                  return _this2;
                }
                return _TimeoutError;
              }( /*#__PURE__*/_wrapNativeSuper(Error));
              /** Error thrown when an action is aborted. */
              var _AbortError = /*#__PURE__*/function (_Error3) {
                _inheritsLoose(_AbortError, _Error3);
                /** Constructs a new instance of {@link AbortError}.
                 *
                 * @param {string} errorMessage A descriptive error message.
                 */
                function _AbortError(errorMessage) {
                  var _this3;
                  if (errorMessage === void 0) {
                    errorMessage = "An abort occurred.";
                  }
                  var trueProto = (this instanceof _AbortError ? this.constructor : void 0).prototype;
                  _this3 = _Error3.call(this, errorMessage) || this;
                  // Workaround issue in Typescript compiler
                  // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                  _this3.__proto__ = trueProto;
                  return _this3;
                }
                return _AbortError;
              }( /*#__PURE__*/_wrapNativeSuper(Error));
              /** Error thrown when the selected transport is unsupported by the browser. */
              /** @private */
              var UnsupportedTransportError = /*#__PURE__*/function (_Error4) {
                _inheritsLoose(UnsupportedTransportError, _Error4);
                /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
                 *
                 * @param {string} message A descriptive error message.
                 * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
                 */
                function UnsupportedTransportError(message, transport) {
                  var _this4;
                  var trueProto = (this instanceof UnsupportedTransportError ? this.constructor : void 0).prototype;
                  _this4 = _Error4.call(this, message) || this;
                  _this4.transport = transport;
                  _this4.errorType = 'UnsupportedTransportError';
                  // Workaround issue in Typescript compiler
                  // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                  _this4.__proto__ = trueProto;
                  return _this4;
                }
                return UnsupportedTransportError;
              }( /*#__PURE__*/_wrapNativeSuper(Error));
              /** Error thrown when the selected transport is disabled by the browser. */
              /** @private */
              var DisabledTransportError = /*#__PURE__*/function (_Error5) {
                _inheritsLoose(DisabledTransportError, _Error5);
                /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
                 *
                 * @param {string} message A descriptive error message.
                 * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
                 */
                function DisabledTransportError(message, transport) {
                  var _this5;
                  var trueProto = (this instanceof DisabledTransportError ? this.constructor : void 0).prototype;
                  _this5 = _Error5.call(this, message) || this;
                  _this5.transport = transport;
                  _this5.errorType = 'DisabledTransportError';
                  // Workaround issue in Typescript compiler
                  // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                  _this5.__proto__ = trueProto;
                  return _this5;
                }
                return DisabledTransportError;
              }( /*#__PURE__*/_wrapNativeSuper(Error));
              /** Error thrown when the selected transport cannot be started. */
              /** @private */
              var FailedToStartTransportError = /*#__PURE__*/function (_Error6) {
                _inheritsLoose(FailedToStartTransportError, _Error6);
                /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
                 *
                 * @param {string} message A descriptive error message.
                 * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
                 */
                function FailedToStartTransportError(message, transport) {
                  var _this6;
                  var trueProto = (this instanceof FailedToStartTransportError ? this.constructor : void 0).prototype;
                  _this6 = _Error6.call(this, message) || this;
                  _this6.transport = transport;
                  _this6.errorType = 'FailedToStartTransportError';
                  // Workaround issue in Typescript compiler
                  // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                  _this6.__proto__ = trueProto;
                  return _this6;
                }
                return FailedToStartTransportError;
              }( /*#__PURE__*/_wrapNativeSuper(Error));
              /** Error thrown when the negotiation with the server failed to complete. */
              /** @private */
              var FailedToNegotiateWithServerError = /*#__PURE__*/function (_Error7) {
                _inheritsLoose(FailedToNegotiateWithServerError, _Error7);
                /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
                 *
                 * @param {string} message A descriptive error message.
                 */
                function FailedToNegotiateWithServerError(message) {
                  var _this7;
                  var trueProto = (this instanceof FailedToNegotiateWithServerError ? this.constructor : void 0).prototype;
                  _this7 = _Error7.call(this, message) || this;
                  _this7.errorType = 'FailedToNegotiateWithServerError';
                  // Workaround issue in Typescript compiler
                  // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                  _this7.__proto__ = trueProto;
                  return _this7;
                }
                return FailedToNegotiateWithServerError;
              }( /*#__PURE__*/_wrapNativeSuper(Error));
              /** Error thrown when multiple errors have occurred. */
              /** @private */
              var AggregateErrors = /*#__PURE__*/function (_Error8) {
                _inheritsLoose(AggregateErrors, _Error8);
                /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
                 *
                 * @param {string} message A descriptive error message.
                 * @param {Error[]} innerErrors The collection of errors this error is aggregating.
                 */
                function AggregateErrors(message, innerErrors) {
                  var _this8;
                  var trueProto = (this instanceof AggregateErrors ? this.constructor : void 0).prototype;
                  _this8 = _Error8.call(this, message) || this;
                  _this8.innerErrors = innerErrors;
                  // Workaround issue in Typescript compiler
                  // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                  _this8.__proto__ = trueProto;
                  return _this8;
                }
                return AggregateErrors;
              }( /*#__PURE__*/_wrapNativeSuper(Error));
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              /** Represents an HTTP response. */
              var _HttpResponse = function _HttpResponse(statusCode, statusText, content) {
                this.statusCode = statusCode;
                this.statusText = statusText;
                this.content = content;
              };
              /** Abstraction over an HTTP client.
               *
               * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
               */
              var _HttpClient = /*#__PURE__*/function () {
                function _HttpClient() {}
                var _proto = _HttpClient.prototype;
                _proto.get = function get(url, options) {
                  return this.send(_extends({}, options, {
                    method: "GET",
                    url: url
                  }));
                };
                _proto.post = function post(url, options) {
                  return this.send(_extends({}, options, {
                    method: "POST",
                    url: url
                  }));
                };
                _proto["delete"] = function _delete(url, options) {
                  return this.send(_extends({}, options, {
                    method: "DELETE",
                    url: url
                  }));
                }
                /** Gets all cookies that apply to the specified URL.
                 *
                 * @param url The URL that the cookies are valid for.
                 * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
                 */
                // @ts-ignore
                ;

                _proto.getCookieString = function getCookieString(url) {
                  return "";
                };
                return _HttpClient;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              // These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
              /** Indicates the severity of a log message.
               *
               * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
               */
              var _LogLevel;
              (function (LogLevel) {
                /** Log level for very low severity diagnostic messages. */
                LogLevel[LogLevel["Trace"] = 0] = "Trace";
                /** Log level for low severity diagnostic messages. */
                LogLevel[LogLevel["Debug"] = 1] = "Debug";
                /** Log level for informational diagnostic messages. */
                LogLevel[LogLevel["Information"] = 2] = "Information";
                /** Log level for diagnostic messages that indicate a non-fatal problem. */
                LogLevel[LogLevel["Warning"] = 3] = "Warning";
                /** Log level for diagnostic messages that indicate a failure in the current operation. */
                LogLevel[LogLevel["Error"] = 4] = "Error";
                /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
                LogLevel[LogLevel["Critical"] = 5] = "Critical";
                /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
                LogLevel[LogLevel["None"] = 6] = "None";
              })(_LogLevel || (_LogLevel = {}));
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              /** A logger that does nothing when log messages are sent to it. */
              var _NullLogger = /*#__PURE__*/function () {
                function _NullLogger() {}
                /** @inheritDoc */
                // eslint-disable-next-line
                var _proto2 = _NullLogger.prototype;
                _proto2.log = function log(_logLevel, _message) {};
                return _NullLogger;
              }();
              /** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
              _NullLogger.instance = new _NullLogger();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              // Version token that will be replaced by the prepack command
              /** The version of the SignalR client. */
              var _VERSION = "7.0.5";
              /** @private */
              var Arg = /*#__PURE__*/function () {
                function Arg() {}
                Arg.isRequired = function isRequired(val, name) {
                  if (val === null || val === undefined) {
                    throw new Error("The '" + name + "' argument is required.");
                  }
                };
                Arg.isNotEmpty = function isNotEmpty(val, name) {
                  if (!val || val.match(/^\s*$/)) {
                    throw new Error("The '" + name + "' argument should not be empty.");
                  }
                };
                Arg.isIn = function isIn(val, values, name) {
                  // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
                  if (!(val in values)) {
                    throw new Error("Unknown " + name + " value: " + val + ".");
                  }
                };
                return Arg;
              }();
              /** @private */
              var Platform = /*#__PURE__*/function () {
                function Platform() {}
                _createClass(Platform, null, [{
                  key: "isBrowser",
                  get:
                  // react-native has a window but no document so we should check both
                  function get() {
                    return typeof window === "object" && typeof window.document === "object";
                  }
                  // WebWorkers don't have a window object so the isBrowser check would fail
                }, {
                  key: "isWebWorker",
                  get: function get() {
                    return typeof self === "object" && "importScripts" in self;
                  }
                  // react-native has a window but no document
                }, {
                  key: "isReactNative",
                  get: function get() {
                    return typeof window === "object" && typeof window.document === "undefined";
                  }
                  // Node apps shouldn't have a window object, but WebWorkers don't either
                  // so we need to check for both WebWorker and window
                }, {
                  key: "isNode",
                  get: function get() {
                    return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
                  }
                }]);
                return Platform;
              }();
              /** @private */
              function getDataDetail(data, includeContent) {
                var detail = "";
                if (isArrayBuffer(data)) {
                  detail = "Binary data of length " + data.byteLength;
                  if (includeContent) {
                    detail += ". Content: '" + formatArrayBuffer(data) + "'";
                  }
                } else if (typeof data === "string") {
                  detail = "String data of length " + data.length;
                  if (includeContent) {
                    detail += ". Content: '" + data + "'";
                  }
                }
                return detail;
              }
              /** @private */
              function formatArrayBuffer(data) {
                var view = new Uint8Array(data);
                // Uint8Array.map only supports returning another Uint8Array?
                var str = "";
                view.forEach(function (num) {
                  var pad = num < 16 ? "0" : "";
                  str += "0x" + pad + num.toString(16) + " ";
                });
                // Trim of trailing space.
                return str.substr(0, str.length - 1);
              }
              // Also in signalr-protocol-msgpack/Utils.ts
              /** @private */
              function isArrayBuffer(val) {
                return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer ||
                // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
                val.constructor && val.constructor.name === "ArrayBuffer");
              }
              /** @private */
              function sendMessage(_x, _x2, _x3, _x4, _x5, _x6) {
                return _sendMessage.apply(this, arguments);
              }
              /** @private */
              function _sendMessage() {
                _sendMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(logger, transportName, httpClient, url, content, options) {
                  var headers, _getUserAgentHeader6, name, value, responseType, response;
                  return _regeneratorRuntime().wrap(function _callee23$(_context24) {
                    while (1) switch (_context24.prev = _context24.next) {
                      case 0:
                        headers = {};
                        _getUserAgentHeader6 = getUserAgentHeader(), name = _getUserAgentHeader6[0], value = _getUserAgentHeader6[1];
                        headers[name] = value;
                        logger.log(_LogLevel.Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, options.logMessageContent) + ".");
                        responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                        _context24.next = 7;
                        return httpClient.post(url, {
                          content: content,
                          headers: _extends({}, headers, options.headers),
                          responseType: responseType,
                          timeout: options.timeout,
                          withCredentials: options.withCredentials
                        });
                      case 7:
                        response = _context24.sent;
                        logger.log(_LogLevel.Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                      case 9:
                      case "end":
                        return _context24.stop();
                    }
                  }, _callee23);
                }));
                return _sendMessage.apply(this, arguments);
              }
              function createLogger(logger) {
                if (logger === undefined) {
                  return new ConsoleLogger(_LogLevel.Information);
                }
                if (logger === null) {
                  return _NullLogger.instance;
                }
                if (logger.log !== undefined) {
                  return logger;
                }
                return new ConsoleLogger(logger);
              }
              /** @private */
              var SubjectSubscription = /*#__PURE__*/function () {
                function SubjectSubscription(subject, observer) {
                  this._subject = subject;
                  this._observer = observer;
                }
                var _proto3 = SubjectSubscription.prototype;
                _proto3.dispose = function dispose() {
                  var index = this._subject.observers.indexOf(this._observer);
                  if (index > -1) {
                    this._subject.observers.splice(index, 1);
                  }
                  if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
                    this._subject.cancelCallback()["catch"](function (_) {});
                  }
                };
                return SubjectSubscription;
              }();
              /** @private */
              var ConsoleLogger = /*#__PURE__*/function () {
                function ConsoleLogger(minimumLogLevel) {
                  this._minLevel = minimumLogLevel;
                  this.out = console;
                }
                var _proto4 = ConsoleLogger.prototype;
                _proto4.log = function log(logLevel, message) {
                  if (logLevel >= this._minLevel) {
                    var msg = "[" + new Date().toISOString() + "] " + _LogLevel[logLevel] + ": " + message;
                    switch (logLevel) {
                      case _LogLevel.Critical:
                      case _LogLevel.Error:
                        this.out.error(msg);
                        break;
                      case _LogLevel.Warning:
                        this.out.warn(msg);
                        break;
                      case _LogLevel.Information:
                        this.out.info(msg);
                        break;
                      default:
                        // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                        this.out.log(msg);
                        break;
                    }
                  }
                };
                return ConsoleLogger;
              }();
              /** @private */
              function getUserAgentHeader() {
                var userAgentHeaderName = "X-SignalR-User-Agent";
                if (Platform.isNode) {
                  userAgentHeaderName = "User-Agent";
                }
                return [userAgentHeaderName, constructUserAgent(_VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
              }
              /** @private */
              function constructUserAgent(version, os, runtime, runtimeVersion) {
                // Microsoft SignalR/[Version] ([Detailed Version]; [Operating System]; [Runtime]; [Runtime Version])
                var userAgent = "Microsoft SignalR/";
                var majorAndMinor = version.split(".");
                userAgent += majorAndMinor[0] + "." + majorAndMinor[1];
                userAgent += " (" + version + "; ";
                if (os && os !== "") {
                  userAgent += os + "; ";
                } else {
                  userAgent += "Unknown OS; ";
                }
                userAgent += "" + runtime;
                if (runtimeVersion) {
                  userAgent += "; " + runtimeVersion;
                } else {
                  userAgent += "; Unknown Runtime Version";
                }
                userAgent += ")";
                return userAgent;
              }
              // eslint-disable-next-line spaced-comment
              /*#__PURE__*/
              function getOsName() {
                if (Platform.isNode) {
                  switch (process.platform) {
                    case "win32":
                      return "Windows NT";
                    case "darwin":
                      return "macOS";
                    case "linux":
                      return "Linux";
                    default:
                      return process.platform;
                  }
                } else {
                  return "";
                }
              }
              // eslint-disable-next-line spaced-comment
              /*#__PURE__*/
              function getRuntimeVersion() {
                if (Platform.isNode) {
                  return process.versions.node;
                }
                return undefined;
              }
              function getRuntime() {
                if (Platform.isNode) {
                  return "NodeJS";
                } else {
                  return "Browser";
                }
              }
              /** @private */
              function getErrorString(e) {
                if (e.stack) {
                  return e.stack;
                } else if (e.message) {
                  return e.message;
                }
                return "" + e;
              }
              /** @private */
              function getGlobalThis() {
                // globalThis is semi-new and not available in Node until v12
                if (typeof globalThis !== "undefined") {
                  return globalThis;
                }
                if (typeof self !== "undefined") {
                  return self;
                }
                if (typeof window !== "undefined") {
                  return window;
                }
                if (typeof __webpack_require__.g !== "undefined") {
                  return __webpack_require__.g;
                }
                throw new Error("could not find global");
              }
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              var FetchHttpClient = /*#__PURE__*/function (_HttpClient2) {
                _inheritsLoose(FetchHttpClient, _HttpClient2);
                function FetchHttpClient(logger) {
                  var _this9;
                  _this9 = _HttpClient2.call(this) || this;
                  _this9._logger = logger;
                  if (typeof fetch === "undefined") {
                    // In order to ignore the dynamic require in webpack builds we need to do this magic
                    // @ts-ignore: TS doesn't know about these names
                    var requireFunc = require;
                    // Cookies aren't automatically handled in Node so we need to add a CookieJar to preserve cookies across requests
                    _this9._jar = new (requireFunc("tough-cookie").CookieJar)();
                    _this9._fetchType = requireFunc("node-fetch");
                    // node-fetch doesn't have a nice API for getting and setting cookies
                    // fetch-cookie will wrap a fetch implementation with a default CookieJar or a provided one
                    _this9._fetchType = requireFunc("fetch-cookie")(_this9._fetchType, _this9._jar);
                  } else {
                    _this9._fetchType = fetch.bind(getGlobalThis());
                  }
                  if (typeof AbortController === "undefined") {
                    // In order to ignore the dynamic require in webpack builds we need to do this magic
                    // @ts-ignore: TS doesn't know about these names
                    var _requireFunc = require;
                    // Node needs EventListener methods on AbortController which our custom polyfill doesn't provide
                    _this9._abortControllerType = _requireFunc("abort-controller");
                  } else {
                    _this9._abortControllerType = AbortController;
                  }
                  return _this9;
                }
                /** @inheritDoc */
                var _proto5 = FetchHttpClient.prototype;
                _proto5.send = /*#__PURE__*/
                function () {
                  var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
                    var _this10 = this;
                    var abortController, error, timeoutId, msTimeout, response, errorMessage, content, payload;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (!(request.abortSignal && request.abortSignal.aborted)) {
                            _context.next = 2;
                            break;
                          }
                          throw new _AbortError();
                        case 2:
                          if (request.method) {
                            _context.next = 4;
                            break;
                          }
                          throw new Error("No method defined.");
                        case 4:
                          if (request.url) {
                            _context.next = 6;
                            break;
                          }
                          throw new Error("No url defined.");
                        case 6:
                          abortController = new this._abortControllerType();
                          // Hook our abortSignal into the abort controller
                          if (request.abortSignal) {
                            request.abortSignal.onabort = function () {
                              abortController.abort();
                              error = new _AbortError();
                            };
                          }
                          // If a timeout has been passed in, setup a timeout to call abort
                          // Type needs to be any to fit window.setTimeout and NodeJS.setTimeout
                          timeoutId = null;
                          if (request.timeout) {
                            msTimeout = request.timeout;
                            timeoutId = setTimeout(function () {
                              abortController.abort();
                              _this10._logger.log(_LogLevel.Warning, "Timeout from HTTP request.");
                              error = new _TimeoutError();
                            }, msTimeout);
                          }
                          if (request.content === "") {
                            request.content = undefined;
                          }
                          if (request.content) {
                            // Explicitly setting the Content-Type header for React Native on Android platform.
                            request.headers = request.headers || {};
                            if (isArrayBuffer(request.content)) {
                              request.headers["Content-Type"] = "application/octet-stream";
                            } else {
                              request.headers["Content-Type"] = "text/plain;charset=UTF-8";
                            }
                          }
                          _context.prev = 12;
                          _context.next = 15;
                          return this._fetchType(request.url, {
                            body: request.content,
                            cache: "no-cache",
                            credentials: request.withCredentials === true ? "include" : "same-origin",
                            headers: _extends({
                              "X-Requested-With": "XMLHttpRequest"
                            }, request.headers),
                            method: request.method,
                            mode: "cors",
                            redirect: "follow",
                            signal: abortController.signal
                          });
                        case 15:
                          response = _context.sent;
                          _context.next = 24;
                          break;
                        case 18:
                          _context.prev = 18;
                          _context.t0 = _context["catch"](12);
                          if (!error) {
                            _context.next = 22;
                            break;
                          }
                          throw error;
                        case 22:
                          this._logger.log(_LogLevel.Warning, "Error from HTTP request. " + _context.t0 + ".");
                          throw _context.t0;
                        case 24:
                          _context.prev = 24;
                          if (timeoutId) {
                            clearTimeout(timeoutId);
                          }
                          if (request.abortSignal) {
                            request.abortSignal.onabort = null;
                          }
                          return _context.finish(24);
                        case 28:
                          if (response.ok) {
                            _context.next = 33;
                            break;
                          }
                          _context.next = 31;
                          return deserializeContent(response, "text");
                        case 31:
                          errorMessage = _context.sent;
                          throw new _HttpError(errorMessage || response.statusText, response.status);
                        case 33:
                          content = deserializeContent(response, request.responseType);
                          _context.next = 36;
                          return content;
                        case 36:
                          payload = _context.sent;
                          return _context.abrupt("return", new _HttpResponse(response.status, response.statusText, payload));
                        case 38:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee, this, [[12, 18, 24, 28]]);
                  }));
                  function send(_x7) {
                    return _send.apply(this, arguments);
                  }
                  return send;
                }();
                _proto5.getCookieString = function getCookieString(url) {
                  var cookies = "";
                  if (Platform.isNode && this._jar) {
                    // @ts-ignore: unused variable
                    this._jar.getCookies(url, function (e, c) {
                      return cookies = c.join("; ");
                    });
                  }
                  return cookies;
                };
                return FetchHttpClient;
              }(_HttpClient);
              function deserializeContent(response, responseType) {
                var content;
                switch (responseType) {
                  case "arraybuffer":
                    content = response.arrayBuffer();
                    break;
                  case "text":
                    content = response.text();
                    break;
                  case "blob":
                  case "document":
                  case "json":
                    throw new Error(responseType + " is not supported.");
                  default:
                    content = response.text();
                    break;
                }
                return content;
              }
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              var XhrHttpClient = /*#__PURE__*/function (_HttpClient3) {
                _inheritsLoose(XhrHttpClient, _HttpClient3);
                function XhrHttpClient(logger) {
                  var _this11;
                  _this11 = _HttpClient3.call(this) || this;
                  _this11._logger = logger;
                  return _this11;
                }
                /** @inheritDoc */
                var _proto6 = XhrHttpClient.prototype;
                _proto6.send = function send(request) {
                  var _this12 = this;
                  // Check that abort was not signaled before calling send
                  if (request.abortSignal && request.abortSignal.aborted) {
                    return Promise.reject(new _AbortError());
                  }
                  if (!request.method) {
                    return Promise.reject(new Error("No method defined."));
                  }
                  if (!request.url) {
                    return Promise.reject(new Error("No url defined."));
                  }
                  return new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.open(request.method, request.url, true);
                    xhr.withCredentials = request.withCredentials === undefined ? true : request.withCredentials;
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    if (request.content === "") {
                      request.content = undefined;
                    }
                    if (request.content) {
                      // Explicitly setting the Content-Type header for React Native on Android platform.
                      if (isArrayBuffer(request.content)) {
                        xhr.setRequestHeader("Content-Type", "application/octet-stream");
                      } else {
                        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                      }
                    }
                    var headers = request.headers;
                    if (headers) {
                      Object.keys(headers).forEach(function (header) {
                        xhr.setRequestHeader(header, headers[header]);
                      });
                    }
                    if (request.responseType) {
                      xhr.responseType = request.responseType;
                    }
                    if (request.abortSignal) {
                      request.abortSignal.onabort = function () {
                        xhr.abort();
                        reject(new _AbortError());
                      };
                    }
                    if (request.timeout) {
                      xhr.timeout = request.timeout;
                    }
                    xhr.onload = function () {
                      if (request.abortSignal) {
                        request.abortSignal.onabort = null;
                      }
                      if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(new _HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                      } else {
                        reject(new _HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
                      }
                    };
                    xhr.onerror = function () {
                      _this12._logger.log(_LogLevel.Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
                      reject(new _HttpError(xhr.statusText, xhr.status));
                    };
                    xhr.ontimeout = function () {
                      _this12._logger.log(_LogLevel.Warning, "Timeout from HTTP request.");
                      reject(new _TimeoutError());
                    };
                    xhr.send(request.content);
                  });
                };
                return XhrHttpClient;
              }(_HttpClient);
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              /** Default implementation of {@link @microsoft/signalr.HttpClient}. */
              var _DefaultHttpClient = /*#__PURE__*/function (_HttpClient4) {
                _inheritsLoose(_DefaultHttpClient, _HttpClient4);
                /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
                function _DefaultHttpClient(logger) {
                  var _this13;
                  _this13 = _HttpClient4.call(this) || this;
                  if (typeof fetch !== "undefined" || Platform.isNode) {
                    _this13._httpClient = new FetchHttpClient(logger);
                  } else if (typeof XMLHttpRequest !== "undefined") {
                    _this13._httpClient = new XhrHttpClient(logger);
                  } else {
                    throw new Error("No usable HttpClient found.");
                  }
                  return _this13;
                }
                /** @inheritDoc */
                var _proto7 = _DefaultHttpClient.prototype;
                _proto7.send = function send(request) {
                  // Check that abort was not signaled before calling send
                  if (request.abortSignal && request.abortSignal.aborted) {
                    return Promise.reject(new _AbortError());
                  }
                  if (!request.method) {
                    return Promise.reject(new Error("No method defined."));
                  }
                  if (!request.url) {
                    return Promise.reject(new Error("No url defined."));
                  }
                  return this._httpClient.send(request);
                };
                _proto7.getCookieString = function getCookieString(url) {
                  return this._httpClient.getCookieString(url);
                };
                return _DefaultHttpClient;
              }(_HttpClient);
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              // Not exported from index
              /** @private */
              var TextMessageFormat = /*#__PURE__*/function () {
                function TextMessageFormat() {}
                TextMessageFormat.write = function write(output) {
                  return "" + output + TextMessageFormat.RecordSeparator;
                };
                TextMessageFormat.parse = function parse(input) {
                  if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
                    throw new Error("Message is incomplete.");
                  }
                  var messages = input.split(TextMessageFormat.RecordSeparator);
                  messages.pop();
                  return messages;
                };
                return TextMessageFormat;
              }();
              TextMessageFormat.RecordSeparatorCode = 0x1e;
              TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              /** @private */
              var HandshakeProtocol = /*#__PURE__*/function () {
                function HandshakeProtocol() {}
                var _proto8 = HandshakeProtocol.prototype;
                // Handshake request is always JSON
                _proto8.writeHandshakeRequest = function writeHandshakeRequest(handshakeRequest) {
                  return TextMessageFormat.write(JSON.stringify(handshakeRequest));
                };
                _proto8.parseHandshakeResponse = function parseHandshakeResponse(data) {
                  var messageData;
                  var remainingData;
                  if (isArrayBuffer(data)) {
                    // Format is binary but still need to read JSON text from handshake response
                    var binaryData = new Uint8Array(data);
                    var separatorIndex = binaryData.indexOf(TextMessageFormat.RecordSeparatorCode);
                    if (separatorIndex === -1) {
                      throw new Error("Message is incomplete.");
                    }
                    // content before separator is handshake response
                    // optional content after is additional messages
                    var responseLength = separatorIndex + 1;
                    messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
                    remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
                  } else {
                    var textData = data;
                    var _separatorIndex = textData.indexOf(TextMessageFormat.RecordSeparator);
                    if (_separatorIndex === -1) {
                      throw new Error("Message is incomplete.");
                    }
                    // content before separator is handshake response
                    // optional content after is additional messages
                    var _responseLength = _separatorIndex + 1;
                    messageData = textData.substring(0, _responseLength);
                    remainingData = textData.length > _responseLength ? textData.substring(_responseLength) : null;
                  }
                  // At this point we should have just the single handshake message
                  var messages = TextMessageFormat.parse(messageData);
                  var response = JSON.parse(messages[0]);
                  if (response.type) {
                    throw new Error("Expected a handshake response from the server.");
                  }
                  var responseMessage = response;
                  // multiple messages could have arrived with handshake
                  // return additional data to be parsed as usual, or null if all parsed
                  return [remainingData, responseMessage];
                };
                return HandshakeProtocol;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              /** Defines the type of a Hub Message. */
              var _MessageType;
              (function (MessageType) {
                /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
                MessageType[MessageType["Invocation"] = 1] = "Invocation";
                /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
                MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
                /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
                MessageType[MessageType["Completion"] = 3] = "Completion";
                /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
                MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
                /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
                MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
                /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
                MessageType[MessageType["Ping"] = 6] = "Ping";
                /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
                MessageType[MessageType["Close"] = 7] = "Close";
              })(_MessageType || (_MessageType = {}));
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              /** Stream implementation to stream items to the server. */
              var _Subject = /*#__PURE__*/function () {
                function _Subject() {
                  this.observers = [];
                }
                var _proto9 = _Subject.prototype;
                _proto9.next = function next(item) {
                  for (var _iterator = _createForOfIteratorHelperLoose(this.observers), _step; !(_step = _iterator()).done;) {
                    var observer = _step.value;
                    observer.next(item);
                  }
                };
                _proto9.error = function error(err) {
                  for (var _iterator2 = _createForOfIteratorHelperLoose(this.observers), _step2; !(_step2 = _iterator2()).done;) {
                    var observer = _step2.value;
                    if (observer.error) {
                      observer.error(err);
                    }
                  }
                };
                _proto9.complete = function complete() {
                  for (var _iterator3 = _createForOfIteratorHelperLoose(this.observers), _step3; !(_step3 = _iterator3()).done;) {
                    var observer = _step3.value;
                    if (observer.complete) {
                      observer.complete();
                    }
                  }
                };
                _proto9.subscribe = function subscribe(observer) {
                  this.observers.push(observer);
                  return new SubjectSubscription(this, observer);
                };
                return _Subject;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
              var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
              /** Describes the current state of the {@link HubConnection} to the server. */
              var _HubConnectionState;
              (function (HubConnectionState) {
                /** The hub connection is disconnected. */
                HubConnectionState["Disconnected"] = "Disconnected";
                /** The hub connection is connecting. */
                HubConnectionState["Connecting"] = "Connecting";
                /** The hub connection is connected. */
                HubConnectionState["Connected"] = "Connected";
                /** The hub connection is disconnecting. */
                HubConnectionState["Disconnecting"] = "Disconnecting";
                /** The hub connection is reconnecting. */
                HubConnectionState["Reconnecting"] = "Reconnecting";
              })(_HubConnectionState || (_HubConnectionState = {}));
              /** Represents a connection to a SignalR Hub. */
              var _HubConnection = /*#__PURE__*/function () {
                function _HubConnection(connection, logger, protocol, reconnectPolicy) {
                  var _this14 = this;
                  this._nextKeepAlive = 0;
                  this._freezeEventListener = function () {
                    _this14._logger.log(_LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
                  };
                  Arg.isRequired(connection, "connection");
                  Arg.isRequired(logger, "logger");
                  Arg.isRequired(protocol, "protocol");
                  this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
                  this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
                  this._logger = logger;
                  this._protocol = protocol;
                  this.connection = connection;
                  this._reconnectPolicy = reconnectPolicy;
                  this._handshakeProtocol = new HandshakeProtocol();
                  this.connection.onreceive = function (data) {
                    return _this14._processIncomingData(data);
                  };
                  this.connection.onclose = function (error) {
                    return _this14._connectionClosed(error);
                  };
                  this._callbacks = {};
                  this._methods = {};
                  this._closedCallbacks = [];
                  this._reconnectingCallbacks = [];
                  this._reconnectedCallbacks = [];
                  this._invocationId = 0;
                  this._receivedHandshakeResponse = false;
                  this._connectionState = _HubConnectionState.Disconnected;
                  this._connectionStarted = false;
                  this._cachedPingMessage = this._protocol.writeMessage({
                    type: _MessageType.Ping
                  });
                }
                /** @internal */
                // Using a public static factory method means we can have a private constructor and an _internal_
                // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
                // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
                // public parameter-less constructor.
                _HubConnection.create = function create(connection, logger, protocol, reconnectPolicy) {
                  return new _HubConnection(connection, logger, protocol, reconnectPolicy);
                }
                /** Indicates the state of the {@link HubConnection} to the server. */;
                var _proto10 = _HubConnection.prototype;
                /** Starts the connection.
                 *
                 * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
                 */
                _proto10.start = function start() {
                  this._startPromise = this._startWithStateTransitions();
                  return this._startPromise;
                };
                _proto10._startWithStateTransitions = /*#__PURE__*/function () {
                  var _startWithStateTransitions2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(this._connectionState !== _HubConnectionState.Disconnected)) {
                            _context2.next = 2;
                            break;
                          }
                          return _context2.abrupt("return", Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state.")));
                        case 2:
                          this._connectionState = _HubConnectionState.Connecting;
                          this._logger.log(_LogLevel.Debug, "Starting HubConnection.");
                          _context2.prev = 4;
                          _context2.next = 7;
                          return this._startInternal();
                        case 7:
                          if (Platform.isBrowser) {
                            // Log when the browser freezes the tab so users know why their connection unexpectedly stopped working
                            window.document.addEventListener("freeze", this._freezeEventListener);
                          }
                          this._connectionState = _HubConnectionState.Connected;
                          this._connectionStarted = true;
                          this._logger.log(_LogLevel.Debug, "HubConnection connected successfully.");
                          _context2.next = 18;
                          break;
                        case 13:
                          _context2.prev = 13;
                          _context2.t0 = _context2["catch"](4);
                          this._connectionState = _HubConnectionState.Disconnected;
                          this._logger.log(_LogLevel.Debug, "HubConnection failed to start successfully because of error '" + _context2.t0 + "'.");
                          return _context2.abrupt("return", Promise.reject(_context2.t0));
                        case 18:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2, this, [[4, 13]]);
                  }));
                  function _startWithStateTransitions() {
                    return _startWithStateTransitions2.apply(this, arguments);
                  }
                  return _startWithStateTransitions;
                }();
                _proto10._startInternal = /*#__PURE__*/function () {
                  var _startInternal2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                    var _this15 = this;
                    var handshakePromise, handshakeRequest;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          this._stopDuringStartError = undefined;
                          this._receivedHandshakeResponse = false;
                          // Set up the promise before any connection is (re)started otherwise it could race with received messages
                          handshakePromise = new Promise(function (resolve, reject) {
                            _this15._handshakeResolver = resolve;
                            _this15._handshakeRejecter = reject;
                          });
                          _context3.next = 5;
                          return this.connection.start(this._protocol.transferFormat);
                        case 5:
                          _context3.prev = 5;
                          handshakeRequest = {
                            protocol: this._protocol.name,
                            version: this._protocol.version
                          };
                          this._logger.log(_LogLevel.Debug, "Sending handshake request.");
                          _context3.next = 10;
                          return this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
                        case 10:
                          this._logger.log(_LogLevel.Information, "Using HubProtocol '" + this._protocol.name + "'.");
                          // defensively cleanup timeout in case we receive a message from the server before we finish start
                          this._cleanupTimeout();
                          this._resetTimeoutPeriod();
                          this._resetKeepAliveInterval();
                          _context3.next = 16;
                          return handshakePromise;
                        case 16:
                          if (!this._stopDuringStartError) {
                            _context3.next = 18;
                            break;
                          }
                          throw this._stopDuringStartError;
                        case 18:
                          if (this.connection.features.inherentKeepAlive) {
                            _context3.next = 21;
                            break;
                          }
                          _context3.next = 21;
                          return this._sendMessage(this._cachedPingMessage);
                        case 21:
                          _context3.next = 31;
                          break;
                        case 23:
                          _context3.prev = 23;
                          _context3.t0 = _context3["catch"](5);
                          this._logger.log(_LogLevel.Debug, "Hub handshake failed with error '" + _context3.t0 + "' during start(). Stopping HubConnection.");
                          this._cleanupTimeout();
                          this._cleanupPingTimer();
                          // HttpConnection.stop() should not complete until after the onclose callback is invoked.
                          // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
                          _context3.next = 30;
                          return this.connection.stop(_context3.t0);
                        case 30:
                          throw _context3.t0;
                        case 31:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3, this, [[5, 23]]);
                  }));
                  function _startInternal() {
                    return _startInternal2.apply(this, arguments);
                  }
                  return _startInternal;
                }()
                /** Stops the connection.
                 *
                 * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
                 */;

                _proto10.stop = /*#__PURE__*/
                function () {
                  var _stop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                    var startPromise;
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          // Capture the start promise before the connection might be restarted in an onclose callback.
                          startPromise = this._startPromise;
                          this._stopPromise = this._stopInternal();
                          _context4.next = 4;
                          return this._stopPromise;
                        case 4:
                          _context4.prev = 4;
                          _context4.next = 7;
                          return startPromise;
                        case 7:
                          _context4.next = 11;
                          break;
                        case 9:
                          _context4.prev = 9;
                          _context4.t0 = _context4["catch"](4);
                        case 11:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee4, this, [[4, 9]]);
                  }));
                  function stop() {
                    return _stop.apply(this, arguments);
                  }
                  return stop;
                }();
                _proto10._stopInternal = function _stopInternal(error) {
                  if (this._connectionState === _HubConnectionState.Disconnected) {
                    this._logger.log(_LogLevel.Debug, "Call to HubConnection.stop(" + error + ") ignored because it is already in the disconnected state.");
                    return Promise.resolve();
                  }
                  if (this._connectionState === _HubConnectionState.Disconnecting) {
                    this._logger.log(_LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                    return this._stopPromise;
                  }
                  this._connectionState = _HubConnectionState.Disconnecting;
                  this._logger.log(_LogLevel.Debug, "Stopping HubConnection.");
                  if (this._reconnectDelayHandle) {
                    // We're in a reconnect delay which means the underlying connection is currently already stopped.
                    // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
                    // fire the onclose callbacks.
                    this._logger.log(_LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
                    clearTimeout(this._reconnectDelayHandle);
                    this._reconnectDelayHandle = undefined;
                    this._completeClose();
                    return Promise.resolve();
                  }
                  this._cleanupTimeout();
                  this._cleanupPingTimer();
                  this._stopDuringStartError = error || new _AbortError("The connection was stopped before the hub handshake could complete.");
                  // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
                  // or the onclose callback is invoked. The onclose callback will transition the HubConnection
                  // to the disconnected state if need be before HttpConnection.stop() completes.
                  return this.connection.stop(error);
                }
                /** Invokes a streaming hub method on the server using the specified name and arguments.
                 *
                 * @typeparam T The type of the items returned by the server.
                 * @param {string} methodName The name of the server method to invoke.
                 * @param {any[]} args The arguments used to invoke the server method.
                 * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
                 */;
                _proto10.stream = function stream(methodName) {
                  var _this16 = this;
                  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                  }
                  var _this$_replaceStreami = this._replaceStreamingParams(args),
                    streams = _this$_replaceStreami[0],
                    streamIds = _this$_replaceStreami[1];
                  var invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
                  // eslint-disable-next-line prefer-const
                  var promiseQueue;
                  var subject = new _Subject();
                  subject.cancelCallback = function () {
                    var cancelInvocation = _this16._createCancelInvocation(invocationDescriptor.invocationId);
                    delete _this16._callbacks[invocationDescriptor.invocationId];
                    return promiseQueue.then(function () {
                      return _this16._sendWithProtocol(cancelInvocation);
                    });
                  };
                  this._callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                    if (error) {
                      subject.error(error);
                      return;
                    } else if (invocationEvent) {
                      // invocationEvent will not be null when an error is not passed to the callback
                      if (invocationEvent.type === _MessageType.Completion) {
                        if (invocationEvent.error) {
                          subject.error(new Error(invocationEvent.error));
                        } else {
                          subject.complete();
                        }
                      } else {
                        subject.next(invocationEvent.item);
                      }
                    }
                  };
                  promiseQueue = this._sendWithProtocol(invocationDescriptor)["catch"](function (e) {
                    subject.error(e);
                    delete _this16._callbacks[invocationDescriptor.invocationId];
                  });
                  this._launchStreams(streams, promiseQueue);
                  return subject;
                };
                _proto10._sendMessage = function _sendMessage(message) {
                  this._resetKeepAliveInterval();
                  return this.connection.send(message);
                }
                /**
                 * Sends a js object to the server.
                 * @param message The js object to serialize and send.
                 */;
                _proto10._sendWithProtocol = function _sendWithProtocol(message) {
                  return this._sendMessage(this._protocol.writeMessage(message));
                }
                /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
                 *
                 * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
                 * be processing the invocation.
                 *
                 * @param {string} methodName The name of the server method to invoke.
                 * @param {any[]} args The arguments used to invoke the server method.
                 * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
                 */;
                _proto10.send = function send(methodName) {
                  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = arguments[_key2];
                  }
                  var _this$_replaceStreami2 = this._replaceStreamingParams(args),
                    streams = _this$_replaceStreami2[0],
                    streamIds = _this$_replaceStreami2[1];
                  var sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
                  this._launchStreams(streams, sendPromise);
                  return sendPromise;
                }
                /** Invokes a hub method on the server using the specified name and arguments.
                 *
                 * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
                 * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
                 * resolving the Promise.
                 *
                 * @typeparam T The expected return type.
                 * @param {string} methodName The name of the server method to invoke.
                 * @param {any[]} args The arguments used to invoke the server method.
                 * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
                 */;
                _proto10.invoke = function invoke(methodName) {
                  var _this17 = this;
                  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                    args[_key3 - 1] = arguments[_key3];
                  }
                  var _this$_replaceStreami3 = this._replaceStreamingParams(args),
                    streams = _this$_replaceStreami3[0],
                    streamIds = _this$_replaceStreami3[1];
                  var invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
                  var p = new Promise(function (resolve, reject) {
                    // invocationId will always have a value for a non-blocking invocation
                    _this17._callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                      if (error) {
                        reject(error);
                        return;
                      } else if (invocationEvent) {
                        // invocationEvent will not be null when an error is not passed to the callback
                        if (invocationEvent.type === _MessageType.Completion) {
                          if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                          } else {
                            resolve(invocationEvent.result);
                          }
                        } else {
                          reject(new Error("Unexpected message type: " + invocationEvent.type));
                        }
                      }
                    };
                    var promiseQueue = _this17._sendWithProtocol(invocationDescriptor)["catch"](function (e) {
                      reject(e);
                      // invocationId will always have a value for a non-blocking invocation
                      delete _this17._callbacks[invocationDescriptor.invocationId];
                    });
                    _this17._launchStreams(streams, promiseQueue);
                  });
                  return p;
                };
                _proto10.on = function on(methodName, newMethod) {
                  if (!methodName || !newMethod) {
                    return;
                  }
                  methodName = methodName.toLowerCase();
                  if (!this._methods[methodName]) {
                    this._methods[methodName] = [];
                  }
                  // Preventing adding the same handler multiple times.
                  if (this._methods[methodName].indexOf(newMethod) !== -1) {
                    return;
                  }
                  this._methods[methodName].push(newMethod);
                };
                _proto10.off = function off(methodName, method) {
                  if (!methodName) {
                    return;
                  }
                  methodName = methodName.toLowerCase();
                  var handlers = this._methods[methodName];
                  if (!handlers) {
                    return;
                  }
                  if (method) {
                    var removeIdx = handlers.indexOf(method);
                    if (removeIdx !== -1) {
                      handlers.splice(removeIdx, 1);
                      if (handlers.length === 0) {
                        delete this._methods[methodName];
                      }
                    }
                  } else {
                    delete this._methods[methodName];
                  }
                }
                /** Registers a handler that will be invoked when the connection is closed.
                 *
                 * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
                 */;
                _proto10.onclose = function onclose(callback) {
                  if (callback) {
                    this._closedCallbacks.push(callback);
                  }
                }
                /** Registers a handler that will be invoked when the connection starts reconnecting.
                 *
                 * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
                 */;
                _proto10.onreconnecting = function onreconnecting(callback) {
                  if (callback) {
                    this._reconnectingCallbacks.push(callback);
                  }
                }
                /** Registers a handler that will be invoked when the connection successfully reconnects.
                 *
                 * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
                 */;
                _proto10.onreconnected = function onreconnected(callback) {
                  if (callback) {
                    this._reconnectedCallbacks.push(callback);
                  }
                };
                _proto10._processIncomingData = function _processIncomingData(data) {
                  this._cleanupTimeout();
                  if (!this._receivedHandshakeResponse) {
                    data = this._processHandshakeResponse(data);
                    this._receivedHandshakeResponse = true;
                  }
                  // Data may have all been read when processing handshake response
                  if (data) {
                    // Parse the messages
                    var messages = this._protocol.parseMessages(data, this._logger);
                    for (var _iterator4 = _createForOfIteratorHelperLoose(messages), _step4; !(_step4 = _iterator4()).done;) {
                      var message = _step4.value;
                      switch (message.type) {
                        case _MessageType.Invocation:
                          // eslint-disable-next-line @typescript-eslint/no-floating-promises
                          this._invokeClientMethod(message);
                          break;
                        case _MessageType.StreamItem:
                        case _MessageType.Completion:
                          {
                            var callback = this._callbacks[message.invocationId];
                            if (callback) {
                              if (message.type === _MessageType.Completion) {
                                delete this._callbacks[message.invocationId];
                              }
                              try {
                                callback(message);
                              } catch (e) {
                                this._logger.log(_LogLevel.Error, "Stream callback threw error: " + getErrorString(e));
                              }
                            }
                            break;
                          }
                        case _MessageType.Ping:
                          // Don't care about pings
                          break;
                        case _MessageType.Close:
                          {
                            this._logger.log(_LogLevel.Information, "Close message received from server.");
                            var error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;
                            if (message.allowReconnect === true) {
                              // It feels wrong not to await connection.stop() here, but processIncomingData is called as part of an onreceive callback which is not async,
                              // this is already the behavior for serverTimeout(), and HttpConnection.Stop() should catch and log all possible exceptions.
                              // eslint-disable-next-line @typescript-eslint/no-floating-promises
                              this.connection.stop(error);
                            } else {
                              // We cannot await stopInternal() here, but subsequent calls to stop() will await this if stopInternal() is still ongoing.
                              this._stopPromise = this._stopInternal(error);
                            }
                            break;
                          }
                        default:
                          this._logger.log(_LogLevel.Warning, "Invalid message type: " + message.type + ".");
                          break;
                      }
                    }
                  }
                  this._resetTimeoutPeriod();
                };
                _proto10._processHandshakeResponse = function _processHandshakeResponse(data) {
                  var responseMessage;
                  var remainingData;
                  try {
                    var _this$_handshakeProto = this._handshakeProtocol.parseHandshakeResponse(data);
                    remainingData = _this$_handshakeProto[0];
                    responseMessage = _this$_handshakeProto[1];
                  } catch (e) {
                    var message = "Error parsing handshake response: " + e;
                    this._logger.log(_LogLevel.Error, message);
                    var error = new Error(message);
                    this._handshakeRejecter(error);
                    throw error;
                  }
                  if (responseMessage.error) {
                    var _message2 = "Server returned handshake error: " + responseMessage.error;
                    this._logger.log(_LogLevel.Error, _message2);
                    var _error = new Error(_message2);
                    this._handshakeRejecter(_error);
                    throw _error;
                  } else {
                    this._logger.log(_LogLevel.Debug, "Server handshake complete.");
                  }
                  this._handshakeResolver();
                  return remainingData;
                };
                _proto10._resetKeepAliveInterval = function _resetKeepAliveInterval() {
                  if (this.connection.features.inherentKeepAlive) {
                    return;
                  }
                  // Set the time we want the next keep alive to be sent
                  // Timer will be setup on next message receive
                  this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds;
                  this._cleanupPingTimer();
                };
                _proto10._resetTimeoutPeriod = function _resetTimeoutPeriod() {
                  var _this18 = this;
                  if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
                    // Set the timeout timer
                    this._timeoutHandle = setTimeout(function () {
                      return _this18.serverTimeout();
                    }, this.serverTimeoutInMilliseconds);
                    // Set keepAlive timer if there isn't one
                    if (this._pingServerHandle === undefined) {
                      var nextPing = this._nextKeepAlive - new Date().getTime();
                      if (nextPing < 0) {
                        nextPing = 0;
                      }
                      // The timer needs to be set from a networking callback to avoid Chrome timer throttling from causing timers to run once a minute
                      this._pingServerHandle = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                          while (1) switch (_context5.prev = _context5.next) {
                            case 0:
                              if (!(_this18._connectionState === _HubConnectionState.Connected)) {
                                _context5.next = 9;
                                break;
                              }
                              _context5.prev = 1;
                              _context5.next = 4;
                              return _this18._sendMessage(_this18._cachedPingMessage);
                            case 4:
                              _context5.next = 9;
                              break;
                            case 6:
                              _context5.prev = 6;
                              _context5.t0 = _context5["catch"](1);
                              // We don't care about the error. It should be seen elsewhere in the client.
                              // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
                              _this18._cleanupPingTimer();
                            case 9:
                            case "end":
                              return _context5.stop();
                          }
                        }, _callee5, null, [[1, 6]]);
                      })), nextPing);
                    }
                  }
                }
                // eslint-disable-next-line @typescript-eslint/naming-convention
                ;

                _proto10.serverTimeout = function serverTimeout() {
                  // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
                  // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
                };
                _proto10._invokeClientMethod = /*#__PURE__*/function () {
                  var _invokeClientMethod2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(invocationMessage) {
                    var methodName, methods, methodsCopy, expectsResponse, res, exception, completionMessage, _iterator5, _step5, m, prevRes;
                    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                        case 0:
                          methodName = invocationMessage.target.toLowerCase();
                          methods = this._methods[methodName];
                          if (methods) {
                            _context6.next = 9;
                            break;
                          }
                          this._logger.log(_LogLevel.Warning, "No client method with the name '" + methodName + "' found.");
                          // No handlers provided by client but the server is expecting a response still, so we send an error
                          if (!invocationMessage.invocationId) {
                            _context6.next = 8;
                            break;
                          }
                          this._logger.log(_LogLevel.Warning, "No result given for '" + methodName + "' method and invocation ID '" + invocationMessage.invocationId + "'.");
                          _context6.next = 8;
                          return this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
                        case 8:
                          return _context6.abrupt("return");
                        case 9:
                          // Avoid issues with handlers removing themselves thus modifying the list while iterating through it
                          methodsCopy = methods.slice(); // Server expects a response
                          expectsResponse = invocationMessage.invocationId ? true : false; // We preserve the last result or exception but still call all handlers
                          _iterator5 = _createForOfIteratorHelperLoose(methodsCopy);
                        case 12:
                          if ((_step5 = _iterator5()).done) {
                            _context6.next = 29;
                            break;
                          }
                          m = _step5.value;
                          _context6.prev = 14;
                          prevRes = res;
                          _context6.next = 18;
                          return m.apply(this, invocationMessage.arguments);
                        case 18:
                          res = _context6.sent;
                          if (expectsResponse && res && prevRes) {
                            this._logger.log(_LogLevel.Error, "Multiple results provided for '" + methodName + "'. Sending error to server.");
                            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client provided multiple results.", null);
                          }
                          // Ignore exception if we got a result after, the exception will be logged
                          exception = undefined;
                          _context6.next = 27;
                          break;
                        case 23:
                          _context6.prev = 23;
                          _context6.t0 = _context6["catch"](14);
                          exception = _context6.t0;
                          this._logger.log(_LogLevel.Error, "A callback for the method '" + methodName + "' threw error '" + _context6.t0 + "'.");
                        case 27:
                          _context6.next = 12;
                          break;
                        case 29:
                          if (!completionMessage) {
                            _context6.next = 34;
                            break;
                          }
                          _context6.next = 32;
                          return this._sendWithProtocol(completionMessage);
                        case 32:
                          _context6.next = 41;
                          break;
                        case 34:
                          if (!expectsResponse) {
                            _context6.next = 40;
                            break;
                          }
                          // If there is an exception that means either no result was given or a handler after a result threw
                          if (exception) {
                            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "" + exception, null);
                          } else if (res !== undefined) {
                            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res);
                          } else {
                            this._logger.log(_LogLevel.Warning, "No result given for '" + methodName + "' method and invocation ID '" + invocationMessage.invocationId + "'.");
                            // Client didn't provide a result or throw from a handler, server expects a response so we send an error
                            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
                          }
                          _context6.next = 38;
                          return this._sendWithProtocol(completionMessage);
                        case 38:
                          _context6.next = 41;
                          break;
                        case 40:
                          if (res) {
                            this._logger.log(_LogLevel.Error, "Result given for '" + methodName + "' method but server is not expecting a result.");
                          }
                        case 41:
                        case "end":
                          return _context6.stop();
                      }
                    }, _callee6, this, [[14, 23]]);
                  }));
                  function _invokeClientMethod(_x8) {
                    return _invokeClientMethod2.apply(this, arguments);
                  }
                  return _invokeClientMethod;
                }();
                _proto10._connectionClosed = function _connectionClosed(error) {
                  this._logger.log(_LogLevel.Debug, "HubConnection.connectionClosed(" + error + ") called while in state " + this._connectionState + ".");
                  // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.
                  this._stopDuringStartError = this._stopDuringStartError || error || new _AbortError("The underlying connection was closed before the hub handshake could complete.");
                  // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
                  // If it has already completed, this should just noop.
                  if (this._handshakeResolver) {
                    this._handshakeResolver();
                  }
                  this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
                  this._cleanupTimeout();
                  this._cleanupPingTimer();
                  if (this._connectionState === _HubConnectionState.Disconnecting) {
                    this._completeClose(error);
                  } else if (this._connectionState === _HubConnectionState.Connected && this._reconnectPolicy) {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    this._reconnect(error);
                  } else if (this._connectionState === _HubConnectionState.Connected) {
                    this._completeClose(error);
                  }
                  // If none of the above if conditions were true were called the HubConnection must be in either:
                  // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
                  // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
                  //    and potentially continue the reconnect() loop.
                  // 3. The Disconnected state in which case we're already done.
                };

                _proto10._completeClose = function _completeClose(error) {
                  var _this19 = this;
                  if (this._connectionStarted) {
                    this._connectionState = _HubConnectionState.Disconnected;
                    this._connectionStarted = false;
                    if (Platform.isBrowser) {
                      window.document.removeEventListener("freeze", this._freezeEventListener);
                    }
                    try {
                      this._closedCallbacks.forEach(function (c) {
                        return c.apply(_this19, [error]);
                      });
                    } catch (e) {
                      this._logger.log(_LogLevel.Error, "An onclose callback called with error '" + error + "' threw error '" + e + "'.");
                    }
                  }
                };
                _proto10._reconnect = /*#__PURE__*/function () {
                  var _reconnect2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(error) {
                    var _this20 = this;
                    var reconnectStartTime, previousReconnectAttempts, retryError, nextRetryDelay;
                    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                        case 0:
                          reconnectStartTime = Date.now();
                          previousReconnectAttempts = 0;
                          retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
                          nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
                          if (!(nextRetryDelay === null)) {
                            _context7.next = 8;
                            break;
                          }
                          this._logger.log(_LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
                          this._completeClose(error);
                          return _context7.abrupt("return");
                        case 8:
                          this._connectionState = _HubConnectionState.Reconnecting;
                          if (error) {
                            this._logger.log(_LogLevel.Information, "Connection reconnecting because of error '" + error + "'.");
                          } else {
                            this._logger.log(_LogLevel.Information, "Connection reconnecting.");
                          }
                          if (!(this._reconnectingCallbacks.length !== 0)) {
                            _context7.next = 15;
                            break;
                          }
                          try {
                            this._reconnectingCallbacks.forEach(function (c) {
                              return c.apply(_this20, [error]);
                            });
                          } catch (e) {
                            this._logger.log(_LogLevel.Error, "An onreconnecting callback called with error '" + error + "' threw error '" + e + "'.");
                          }
                          // Exit early if an onreconnecting callback called connection.stop().
                          if (!(this._connectionState !== _HubConnectionState.Reconnecting)) {
                            _context7.next = 15;
                            break;
                          }
                          this._logger.log(_LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                          return _context7.abrupt("return");
                        case 15:
                          if (!(nextRetryDelay !== null)) {
                            _context7.next = 43;
                            break;
                          }
                          this._logger.log(_LogLevel.Information, "Reconnect attempt number " + previousReconnectAttempts + " will start in " + nextRetryDelay + " ms.");
                          _context7.next = 19;
                          return new Promise(function (resolve) {
                            _this20._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
                          });
                        case 19:
                          this._reconnectDelayHandle = undefined;
                          if (!(this._connectionState !== _HubConnectionState.Reconnecting)) {
                            _context7.next = 23;
                            break;
                          }
                          this._logger.log(_LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                          return _context7.abrupt("return");
                        case 23:
                          _context7.prev = 23;
                          _context7.next = 26;
                          return this._startInternal();
                        case 26:
                          this._connectionState = _HubConnectionState.Connected;
                          this._logger.log(_LogLevel.Information, "HubConnection reconnected successfully.");
                          if (this._reconnectedCallbacks.length !== 0) {
                            try {
                              this._reconnectedCallbacks.forEach(function (c) {
                                return c.apply(_this20, [_this20.connection.connectionId]);
                              });
                            } catch (e) {
                              this._logger.log(_LogLevel.Error, "An onreconnected callback called with connectionId '" + this.connection.connectionId + "; threw error '" + e + "'.");
                            }
                          }
                          return _context7.abrupt("return");
                        case 32:
                          _context7.prev = 32;
                          _context7.t0 = _context7["catch"](23);
                          this._logger.log(_LogLevel.Information, "Reconnect attempt failed because of error '" + _context7.t0 + "'.");
                          if (!(this._connectionState !== _HubConnectionState.Reconnecting)) {
                            _context7.next = 39;
                            break;
                          }
                          this._logger.log(_LogLevel.Debug, "Connection moved to the '" + this._connectionState + "' from the reconnecting state during reconnect attempt. Done reconnecting.");
                          // The TypeScript compiler thinks that connectionState must be Connected here. The TypeScript compiler is wrong.
                          if (this._connectionState === _HubConnectionState.Disconnecting) {
                            this._completeClose();
                          }
                          return _context7.abrupt("return");
                        case 39:
                          retryError = _context7.t0 instanceof Error ? _context7.t0 : new Error(_context7.t0.toString());
                          nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
                        case 41:
                          _context7.next = 15;
                          break;
                        case 43:
                          this._logger.log(_LogLevel.Information, "Reconnect retries have been exhausted after " + (Date.now() - reconnectStartTime) + " ms and " + previousReconnectAttempts + " failed attempts. Connection disconnecting.");
                          this._completeClose();
                        case 45:
                        case "end":
                          return _context7.stop();
                      }
                    }, _callee7, this, [[23, 32]]);
                  }));
                  function _reconnect(_x9) {
                    return _reconnect2.apply(this, arguments);
                  }
                  return _reconnect;
                }();
                _proto10._getNextRetryDelay = function _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
                  try {
                    return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                      elapsedMilliseconds: elapsedMilliseconds,
                      previousRetryCount: previousRetryCount,
                      retryReason: retryReason
                    });
                  } catch (e) {
                    this._logger.log(_LogLevel.Error, "IRetryPolicy.nextRetryDelayInMilliseconds(" + previousRetryCount + ", " + elapsedMilliseconds + ") threw error '" + e + "'.");
                    return null;
                  }
                };
                _proto10._cancelCallbacksWithError = function _cancelCallbacksWithError(error) {
                  var _this21 = this;
                  var callbacks = this._callbacks;
                  this._callbacks = {};
                  Object.keys(callbacks).forEach(function (key) {
                    var callback = callbacks[key];
                    try {
                      callback(null, error);
                    } catch (e) {
                      _this21._logger.log(_LogLevel.Error, "Stream 'error' callback called with '" + error + "' threw error: " + getErrorString(e));
                    }
                  });
                };
                _proto10._cleanupPingTimer = function _cleanupPingTimer() {
                  if (this._pingServerHandle) {
                    clearTimeout(this._pingServerHandle);
                    this._pingServerHandle = undefined;
                  }
                };
                _proto10._cleanupTimeout = function _cleanupTimeout() {
                  if (this._timeoutHandle) {
                    clearTimeout(this._timeoutHandle);
                  }
                };
                _proto10._createInvocation = function _createInvocation(methodName, args, nonblocking, streamIds) {
                  if (nonblocking) {
                    if (streamIds.length !== 0) {
                      return {
                        arguments: args,
                        streamIds: streamIds,
                        target: methodName,
                        type: _MessageType.Invocation
                      };
                    } else {
                      return {
                        arguments: args,
                        target: methodName,
                        type: _MessageType.Invocation
                      };
                    }
                  } else {
                    var invocationId = this._invocationId;
                    this._invocationId++;
                    if (streamIds.length !== 0) {
                      return {
                        arguments: args,
                        invocationId: invocationId.toString(),
                        streamIds: streamIds,
                        target: methodName,
                        type: _MessageType.Invocation
                      };
                    } else {
                      return {
                        arguments: args,
                        invocationId: invocationId.toString(),
                        target: methodName,
                        type: _MessageType.Invocation
                      };
                    }
                  }
                };
                _proto10._launchStreams = function _launchStreams(streams, promiseQueue) {
                  var _this22 = this;
                  if (streams.length === 0) {
                    return;
                  }
                  // Synchronize stream data so they arrive in-order on the server
                  if (!promiseQueue) {
                    promiseQueue = Promise.resolve();
                  }
                  // We want to iterate over the keys, since the keys are the stream ids
                  // eslint-disable-next-line guard-for-in
                  var _loop = function _loop(streamId) {
                    streams[streamId].subscribe({
                      complete: function complete() {
                        promiseQueue = promiseQueue.then(function () {
                          return _this22._sendWithProtocol(_this22._createCompletionMessage(streamId));
                        });
                      },
                      error: function error(err) {
                        var message;
                        if (err instanceof Error) {
                          message = err.message;
                        } else if (err && err.toString) {
                          message = err.toString();
                        } else {
                          message = "Unknown error";
                        }
                        promiseQueue = promiseQueue.then(function () {
                          return _this22._sendWithProtocol(_this22._createCompletionMessage(streamId, message));
                        });
                      },
                      next: function next(item) {
                        promiseQueue = promiseQueue.then(function () {
                          return _this22._sendWithProtocol(_this22._createStreamItemMessage(streamId, item));
                        });
                      }
                    });
                  };
                  for (var streamId in streams) {
                    _loop(streamId);
                  }
                };
                _proto10._replaceStreamingParams = function _replaceStreamingParams(args) {
                  var streams = [];
                  var streamIds = [];
                  for (var i = 0; i < args.length; i++) {
                    var argument = args[i];
                    if (this._isObservable(argument)) {
                      var streamId = this._invocationId;
                      this._invocationId++;
                      // Store the stream for later use
                      streams[streamId] = argument;
                      streamIds.push(streamId.toString());
                      // remove stream from args
                      args.splice(i, 1);
                    }
                  }
                  return [streams, streamIds];
                };
                _proto10._isObservable = function _isObservable(arg) {
                  // This allows other stream implementations to just work (like rxjs)
                  return arg && arg.subscribe && typeof arg.subscribe === "function";
                };
                _proto10._createStreamInvocation = function _createStreamInvocation(methodName, args, streamIds) {
                  var invocationId = this._invocationId;
                  this._invocationId++;
                  if (streamIds.length !== 0) {
                    return {
                      arguments: args,
                      invocationId: invocationId.toString(),
                      streamIds: streamIds,
                      target: methodName,
                      type: _MessageType.StreamInvocation
                    };
                  } else {
                    return {
                      arguments: args,
                      invocationId: invocationId.toString(),
                      target: methodName,
                      type: _MessageType.StreamInvocation
                    };
                  }
                };
                _proto10._createCancelInvocation = function _createCancelInvocation(id) {
                  return {
                    invocationId: id,
                    type: _MessageType.CancelInvocation
                  };
                };
                _proto10._createStreamItemMessage = function _createStreamItemMessage(id, item) {
                  return {
                    invocationId: id,
                    item: item,
                    type: _MessageType.StreamItem
                  };
                };
                _proto10._createCompletionMessage = function _createCompletionMessage(id, error, result) {
                  if (error) {
                    return {
                      error: error,
                      invocationId: id,
                      type: _MessageType.Completion
                    };
                  }
                  return {
                    invocationId: id,
                    result: result,
                    type: _MessageType.Completion
                  };
                };
                _createClass(_HubConnection, [{
                  key: "state",
                  get: function get() {
                    return this._connectionState;
                  }
                  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
                   *  in the disconnected state or if the negotiation step was skipped.
                   */
                }, {
                  key: "connectionId",
                  get: function get() {
                    return this.connection ? this.connection.connectionId || null : null;
                  }
                  /** Indicates the url of the {@link HubConnection} to the server. */
                }, {
                  key: "baseUrl",
                  get: function get() {
                    return this.connection.baseUrl || "";
                  }
                  /**
                   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
                   * Reconnecting states.
                   * @param {string} url The url to connect to.
                   */,
                  set: function set(url) {
                    if (this._connectionState !== _HubConnectionState.Disconnected && this._connectionState !== _HubConnectionState.Reconnecting) {
                      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
                    }
                    if (!url) {
                      throw new Error("The HubConnection url must be a valid url.");
                    }
                    this.connection.baseUrl = url;
                  }
                }]);
                return _HubConnection;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              // 0, 2, 10, 30 second delays before reconnect attempts.
              var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
              /** @private */
              var DefaultReconnectPolicy = /*#__PURE__*/function () {
                function DefaultReconnectPolicy(retryDelays) {
                  this._retryDelays = retryDelays !== undefined ? [].concat(retryDelays, [null]) : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
                }
                var _proto11 = DefaultReconnectPolicy.prototype;
                _proto11.nextRetryDelayInMilliseconds = function nextRetryDelayInMilliseconds(retryContext) {
                  return this._retryDelays[retryContext.previousRetryCount];
                };
                return DefaultReconnectPolicy;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              var HeaderNames = function HeaderNames() {};
              HeaderNames.Authorization = "Authorization";
              HeaderNames.Cookie = "Cookie";
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              /** @private */
              var AccessTokenHttpClient = /*#__PURE__*/function (_HttpClient5) {
                _inheritsLoose(AccessTokenHttpClient, _HttpClient5);
                function AccessTokenHttpClient(innerClient, accessTokenFactory) {
                  var _this23;
                  _this23 = _HttpClient5.call(this) || this;
                  _this23._innerClient = innerClient;
                  _this23._accessTokenFactory = accessTokenFactory;
                  return _this23;
                }
                var _proto12 = AccessTokenHttpClient.prototype;
                _proto12.send = /*#__PURE__*/function () {
                  var _send2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(request) {
                    var allowRetry, response;
                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                      while (1) switch (_context8.prev = _context8.next) {
                        case 0:
                          allowRetry = true;
                          if (!(this._accessTokenFactory && (!this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0))) {
                            _context8.next = 6;
                            break;
                          }
                          // don't retry if the request is a negotiate or if we just got a potentially new token from the access token factory
                          allowRetry = false;
                          _context8.next = 5;
                          return this._accessTokenFactory();
                        case 5:
                          this._accessToken = _context8.sent;
                        case 6:
                          this._setAuthorizationHeader(request);
                          _context8.next = 9;
                          return this._innerClient.send(request);
                        case 9:
                          response = _context8.sent;
                          if (!(allowRetry && response.statusCode === 401 && this._accessTokenFactory)) {
                            _context8.next = 18;
                            break;
                          }
                          _context8.next = 13;
                          return this._accessTokenFactory();
                        case 13:
                          this._accessToken = _context8.sent;
                          this._setAuthorizationHeader(request);
                          _context8.next = 17;
                          return this._innerClient.send(request);
                        case 17:
                          return _context8.abrupt("return", _context8.sent);
                        case 18:
                          return _context8.abrupt("return", response);
                        case 19:
                        case "end":
                          return _context8.stop();
                      }
                    }, _callee8, this);
                  }));
                  function send(_x10) {
                    return _send2.apply(this, arguments);
                  }
                  return send;
                }();
                _proto12._setAuthorizationHeader = function _setAuthorizationHeader(request) {
                  if (!request.headers) {
                    request.headers = {};
                  }
                  if (this._accessToken) {
                    request.headers[HeaderNames.Authorization] = "Bearer " + this._accessToken;
                  }
                  // don't remove the header if there isn't an access token factory, the user manually added the header in this case
                  else if (this._accessTokenFactory) {
                    if (request.headers[HeaderNames.Authorization]) {
                      delete request.headers[HeaderNames.Authorization];
                    }
                  }
                };
                _proto12.getCookieString = function getCookieString(url) {
                  return this._innerClient.getCookieString(url);
                };
                return AccessTokenHttpClient;
              }(_HttpClient);
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              // This will be treated as a bit flag in the future, so we keep it using power-of-two values.
              /** Specifies a specific HTTP transport type. */
              var _HttpTransportType;
              (function (HttpTransportType) {
                /** Specifies no transport preference. */
                HttpTransportType[HttpTransportType["None"] = 0] = "None";
                /** Specifies the WebSockets transport. */
                HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
                /** Specifies the Server-Sent Events transport. */
                HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
                /** Specifies the Long Polling transport. */
                HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
              })(_HttpTransportType || (_HttpTransportType = {}));
              /** Specifies the transfer format for a connection. */
              var _TransferFormat;
              (function (TransferFormat) {
                /** Specifies that only text data will be transmitted over the connection. */
                TransferFormat[TransferFormat["Text"] = 1] = "Text";
                /** Specifies that binary data will be transmitted over the connection. */
                TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
              })(_TransferFormat || (_TransferFormat = {}));
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              // Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
              // We don't actually ever use the API being polyfilled, we always use the polyfill because
              // it's a very new API right now.
              // Not exported from index.
              /** @private */
              var AbortController_AbortController = /*#__PURE__*/function () {
                function AbortController_AbortController() {
                  this._isAborted = false;
                  this.onabort = null;
                }
                var _proto13 = AbortController_AbortController.prototype;
                _proto13.abort = function abort() {
                  if (!this._isAborted) {
                    this._isAborted = true;
                    if (this.onabort) {
                      this.onabort();
                    }
                  }
                };
                _createClass(AbortController_AbortController, [{
                  key: "signal",
                  get: function get() {
                    return this;
                  }
                }, {
                  key: "aborted",
                  get: function get() {
                    return this._isAborted;
                  }
                }]);
                return AbortController_AbortController;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              // Not exported from 'index', this type is internal.
              /** @private */
              var LongPollingTransport = /*#__PURE__*/function () {
                function LongPollingTransport(httpClient, logger, options) {
                  this._httpClient = httpClient;
                  this._logger = logger;
                  this._pollAbort = new AbortController_AbortController();
                  this._options = options;
                  this._running = false;
                  this.onreceive = null;
                  this.onclose = null;
                }
                // This is an internal type, not exported from 'index' so this is really just internal.
                var _proto14 = LongPollingTransport.prototype;
                _proto14.connect = /*#__PURE__*/function () {
                  var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(url, transferFormat) {
                    var _extends2;
                    var _getUserAgentHeader, name, value, headers, pollOptions, pollUrl, response;
                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                        case 0:
                          Arg.isRequired(url, "url");
                          Arg.isRequired(transferFormat, "transferFormat");
                          Arg.isIn(transferFormat, _TransferFormat, "transferFormat");
                          this._url = url;
                          this._logger.log(_LogLevel.Trace, "(LongPolling transport) Connecting.");
                          // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
                          if (!(transferFormat === _TransferFormat.Binary && typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                            _context9.next = 7;
                            break;
                          }
                          throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        case 7:
                          _getUserAgentHeader = getUserAgentHeader(), name = _getUserAgentHeader[0], value = _getUserAgentHeader[1];
                          headers = _extends((_extends2 = {}, _extends2[name] = value, _extends2), this._options.headers);
                          pollOptions = {
                            abortSignal: this._pollAbort.signal,
                            headers: headers,
                            timeout: 100000,
                            withCredentials: this._options.withCredentials
                          };
                          if (transferFormat === _TransferFormat.Binary) {
                            pollOptions.responseType = "arraybuffer";
                          }
                          // Make initial long polling request
                          // Server uses first long polling request to finish initializing connection and it returns without data
                          pollUrl = url + "&_=" + Date.now();
                          this._logger.log(_LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                          _context9.next = 15;
                          return this._httpClient.get(pollUrl, pollOptions);
                        case 15:
                          response = _context9.sent;
                          if (response.statusCode !== 200) {
                            this._logger.log(_LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Mark running as false so that the poll immediately ends and runs the close logic
                            this._closeError = new _HttpError(response.statusText || "", response.statusCode);
                            this._running = false;
                          } else {
                            this._running = true;
                          }
                          this._receiving = this._poll(this._url, pollOptions);
                        case 18:
                        case "end":
                          return _context9.stop();
                      }
                    }, _callee9, this);
                  }));
                  function connect(_x11, _x12) {
                    return _connect.apply(this, arguments);
                  }
                  return connect;
                }();
                _proto14._poll = /*#__PURE__*/function () {
                  var _poll2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(url, pollOptions) {
                    var pollUrl, response;
                    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                      while (1) switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.prev = 0;
                        case 1:
                          if (!this._running) {
                            _context10.next = 16;
                            break;
                          }
                          _context10.prev = 2;
                          pollUrl = url + "&_=" + Date.now();
                          this._logger.log(_LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                          _context10.next = 7;
                          return this._httpClient.get(pollUrl, pollOptions);
                        case 7:
                          response = _context10.sent;
                          if (response.statusCode === 204) {
                            this._logger.log(_LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                            this._running = false;
                          } else if (response.statusCode !== 200) {
                            this._logger.log(_LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Unexpected status code
                            this._closeError = new _HttpError(response.statusText || "", response.statusCode);
                            this._running = false;
                          } else {
                            // Process the response
                            if (response.content) {
                              this._logger.log(_LogLevel.Trace, "(LongPolling transport) data received. " + getDataDetail(response.content, this._options.logMessageContent) + ".");
                              if (this.onreceive) {
                                this.onreceive(response.content);
                              }
                            } else {
                              // This is another way timeout manifest.
                              this._logger.log(_LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                          }
                          _context10.next = 14;
                          break;
                        case 11:
                          _context10.prev = 11;
                          _context10.t0 = _context10["catch"](2);
                          if (!this._running) {
                            // Log but disregard errors that occur after stopping
                            this._logger.log(_LogLevel.Trace, "(LongPolling transport) Poll errored after shutdown: " + _context10.t0.message);
                          } else {
                            if (_context10.t0 instanceof _TimeoutError) {
                              // Ignore timeouts and reissue the poll.
                              this._logger.log(_LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            } else {
                              // Close the connection with the error as the result.
                              this._closeError = _context10.t0;
                              this._running = false;
                            }
                          }
                        case 14:
                          _context10.next = 1;
                          break;
                        case 16:
                          _context10.prev = 16;
                          this._logger.log(_LogLevel.Trace, "(LongPolling transport) Polling complete.");
                          // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
                          // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
                          if (!this.pollAborted) {
                            this._raiseOnClose();
                          }
                          return _context10.finish(16);
                        case 20:
                        case "end":
                          return _context10.stop();
                      }
                    }, _callee10, this, [[0,, 16, 20], [2, 11]]);
                  }));
                  function _poll(_x13, _x14) {
                    return _poll2.apply(this, arguments);
                  }
                  return _poll;
                }();
                _proto14.send = /*#__PURE__*/function () {
                  var _send3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(data) {
                    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                      while (1) switch (_context11.prev = _context11.next) {
                        case 0:
                          if (this._running) {
                            _context11.next = 2;
                            break;
                          }
                          return _context11.abrupt("return", Promise.reject(new Error("Cannot send until the transport is connected")));
                        case 2:
                          return _context11.abrupt("return", sendMessage(this._logger, "LongPolling", this._httpClient, this._url, data, this._options));
                        case 3:
                        case "end":
                          return _context11.stop();
                      }
                    }, _callee11, this);
                  }));
                  function send(_x15) {
                    return _send3.apply(this, arguments);
                  }
                  return send;
                }();
                _proto14.stop = /*#__PURE__*/function () {
                  var _stop2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                    var headers, _getUserAgentHeader2, name, value, deleteOptions;
                    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                      while (1) switch (_context12.prev = _context12.next) {
                        case 0:
                          this._logger.log(_LogLevel.Trace, "(LongPolling transport) Stopping polling.");
                          // Tell receiving loop to stop, abort any current request, and then wait for it to finish
                          this._running = false;
                          this._pollAbort.abort();
                          _context12.prev = 3;
                          _context12.next = 6;
                          return this._receiving;
                        case 6:
                          // Send DELETE to clean up long polling on the server
                          this._logger.log(_LogLevel.Trace, "(LongPolling transport) sending DELETE request to " + this._url + ".");
                          headers = {};
                          _getUserAgentHeader2 = getUserAgentHeader(), name = _getUserAgentHeader2[0], value = _getUserAgentHeader2[1];
                          headers[name] = value;
                          deleteOptions = {
                            headers: _extends({}, headers, this._options.headers),
                            timeout: this._options.timeout,
                            withCredentials: this._options.withCredentials
                          };
                          _context12.next = 13;
                          return this._httpClient["delete"](this._url, deleteOptions);
                        case 13:
                          this._logger.log(_LogLevel.Trace, "(LongPolling transport) DELETE request sent.");
                        case 14:
                          _context12.prev = 14;
                          this._logger.log(_LogLevel.Trace, "(LongPolling transport) Stop finished.");
                          // Raise close event here instead of in polling
                          // It needs to happen after the DELETE request is sent
                          this._raiseOnClose();
                          return _context12.finish(14);
                        case 18:
                        case "end":
                          return _context12.stop();
                      }
                    }, _callee12, this, [[3,, 14, 18]]);
                  }));
                  function stop() {
                    return _stop2.apply(this, arguments);
                  }
                  return stop;
                }();
                _proto14._raiseOnClose = function _raiseOnClose() {
                  if (this.onclose) {
                    var logMessage = "(LongPolling transport) Firing onclose event.";
                    if (this._closeError) {
                      logMessage += " Error: " + this._closeError;
                    }
                    this._logger.log(_LogLevel.Trace, logMessage);
                    this.onclose(this._closeError);
                  }
                };
                _createClass(LongPollingTransport, [{
                  key: "pollAborted",
                  get: function get() {
                    return this._pollAbort.aborted;
                  }
                }]);
                return LongPollingTransport;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              /** @private */
              var ServerSentEventsTransport = /*#__PURE__*/function () {
                function ServerSentEventsTransport(httpClient, accessToken, logger, options) {
                  this._httpClient = httpClient;
                  this._accessToken = accessToken;
                  this._logger = logger;
                  this._options = options;
                  this.onreceive = null;
                  this.onclose = null;
                }
                var _proto15 = ServerSentEventsTransport.prototype;
                _proto15.connect = /*#__PURE__*/function () {
                  var _connect2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(url, transferFormat) {
                    var _this24 = this;
                    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                      while (1) switch (_context13.prev = _context13.next) {
                        case 0:
                          Arg.isRequired(url, "url");
                          Arg.isRequired(transferFormat, "transferFormat");
                          Arg.isIn(transferFormat, _TransferFormat, "transferFormat");
                          this._logger.log(_LogLevel.Trace, "(SSE transport) Connecting.");
                          // set url before accessTokenFactory because this._url is only for send and we set the auth header instead of the query string for send
                          this._url = url;
                          if (this._accessToken) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(this._accessToken));
                          }
                          return _context13.abrupt("return", new Promise(function (resolve, reject) {
                            var opened = false;
                            if (transferFormat !== _TransferFormat.Text) {
                              reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                              return;
                            }
                            var eventSource;
                            if (Platform.isBrowser || Platform.isWebWorker) {
                              eventSource = new _this24._options.EventSource(url, {
                                withCredentials: _this24._options.withCredentials
                              });
                            } else {
                              // Non-browser passes cookies via the dictionary
                              var cookies = _this24._httpClient.getCookieString(url);
                              var headers = {};
                              headers.Cookie = cookies;
                              var _getUserAgentHeader3 = getUserAgentHeader(),
                                name = _getUserAgentHeader3[0],
                                value = _getUserAgentHeader3[1];
                              headers[name] = value;
                              eventSource = new _this24._options.EventSource(url, {
                                withCredentials: _this24._options.withCredentials,
                                headers: _extends({}, headers, _this24._options.headers)
                              });
                            }
                            try {
                              eventSource.onmessage = function (e) {
                                if (_this24.onreceive) {
                                  try {
                                    _this24._logger.log(_LogLevel.Trace, "(SSE transport) data received. " + getDataDetail(e.data, _this24._options.logMessageContent) + ".");
                                    _this24.onreceive(e.data);
                                  } catch (error) {
                                    _this24._close(error);
                                    return;
                                  }
                                }
                              };
                              // @ts-ignore: not using event on purpose
                              eventSource.onerror = function (e) {
                                // EventSource doesn't give any useful information about server side closes.
                                if (opened) {
                                  _this24._close();
                                } else {
                                  reject(new Error("EventSource failed to connect. The connection could not be found on the server," + " either the connection ID is not present on the server, or a proxy is refusing/buffering the connection." + " If you have multiple servers check that sticky sessions are enabled."));
                                }
                              };
                              eventSource.onopen = function () {
                                _this24._logger.log(_LogLevel.Information, "SSE connected to " + _this24._url);
                                _this24._eventSource = eventSource;
                                opened = true;
                                resolve();
                              };
                            } catch (e) {
                              reject(e);
                              return;
                            }
                          }));
                        case 7:
                        case "end":
                          return _context13.stop();
                      }
                    }, _callee13, this);
                  }));
                  function connect(_x16, _x17) {
                    return _connect2.apply(this, arguments);
                  }
                  return connect;
                }();
                _proto15.send = /*#__PURE__*/function () {
                  var _send4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(data) {
                    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
                        case 0:
                          if (this._eventSource) {
                            _context14.next = 2;
                            break;
                          }
                          return _context14.abrupt("return", Promise.reject(new Error("Cannot send until the transport is connected")));
                        case 2:
                          return _context14.abrupt("return", sendMessage(this._logger, "SSE", this._httpClient, this._url, data, this._options));
                        case 3:
                        case "end":
                          return _context14.stop();
                      }
                    }, _callee14, this);
                  }));
                  function send(_x18) {
                    return _send4.apply(this, arguments);
                  }
                  return send;
                }();
                _proto15.stop = function stop() {
                  this._close();
                  return Promise.resolve();
                };
                _proto15._close = function _close(e) {
                  if (this._eventSource) {
                    this._eventSource.close();
                    this._eventSource = undefined;
                    if (this.onclose) {
                      this.onclose(e);
                    }
                  }
                };
                return ServerSentEventsTransport;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              /** @private */
              var WebSocketTransport = /*#__PURE__*/function () {
                function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
                  this._logger = logger;
                  this._accessTokenFactory = accessTokenFactory;
                  this._logMessageContent = logMessageContent;
                  this._webSocketConstructor = webSocketConstructor;
                  this._httpClient = httpClient;
                  this.onreceive = null;
                  this.onclose = null;
                  this._headers = headers;
                }
                var _proto16 = WebSocketTransport.prototype;
                _proto16.connect = /*#__PURE__*/function () {
                  var _connect3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(url, transferFormat) {
                    var _this25 = this;
                    var token;
                    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                      while (1) switch (_context15.prev = _context15.next) {
                        case 0:
                          Arg.isRequired(url, "url");
                          Arg.isRequired(transferFormat, "transferFormat");
                          Arg.isIn(transferFormat, _TransferFormat, "transferFormat");
                          this._logger.log(_LogLevel.Trace, "(WebSockets transport) Connecting.");
                          if (!this._accessTokenFactory) {
                            _context15.next = 8;
                            break;
                          }
                          _context15.next = 7;
                          return this._accessTokenFactory();
                        case 7:
                          token = _context15.sent;
                        case 8:
                          return _context15.abrupt("return", new Promise(function (resolve, reject) {
                            url = url.replace(/^http/, "ws");
                            var webSocket;
                            var cookies = _this25._httpClient.getCookieString(url);
                            var opened = false;
                            if (Platform.isNode || Platform.isReactNative) {
                              var headers = {};
                              var _getUserAgentHeader4 = getUserAgentHeader(),
                                name = _getUserAgentHeader4[0],
                                value = _getUserAgentHeader4[1];
                              headers[name] = value;
                              if (token) {
                                headers[HeaderNames.Authorization] = "Bearer " + token;
                              }
                              if (cookies) {
                                headers[HeaderNames.Cookie] = cookies;
                              }
                              // Only pass headers when in non-browser environments
                              webSocket = new _this25._webSocketConstructor(url, undefined, {
                                headers: _extends({}, headers, _this25._headers)
                              });
                            } else {
                              if (token) {
                                url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                              }
                            }
                            if (!webSocket) {
                              // Chrome is not happy with passing 'undefined' as protocol
                              webSocket = new _this25._webSocketConstructor(url);
                            }
                            if (transferFormat === _TransferFormat.Binary) {
                              webSocket.binaryType = "arraybuffer";
                            }
                            webSocket.onopen = function (_event) {
                              _this25._logger.log(_LogLevel.Information, "WebSocket connected to " + url + ".");
                              _this25._webSocket = webSocket;
                              opened = true;
                              resolve();
                            };
                            webSocket.onerror = function (event) {
                              var error = null;
                              // ErrorEvent is a browser only type we need to check if the type exists before using it
                              if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                error = event.error;
                              } else {
                                error = "There was an error with the transport";
                              }
                              _this25._logger.log(_LogLevel.Information, "(WebSockets transport) " + error + ".");
                            };
                            webSocket.onmessage = function (message) {
                              _this25._logger.log(_LogLevel.Trace, "(WebSockets transport) data received. " + getDataDetail(message.data, _this25._logMessageContent) + ".");
                              if (_this25.onreceive) {
                                try {
                                  _this25.onreceive(message.data);
                                } catch (error) {
                                  _this25._close(error);
                                  return;
                                }
                              }
                            };
                            webSocket.onclose = function (event) {
                              // Don't call close handler if connection was never established
                              // We'll reject the connect call instead
                              if (opened) {
                                _this25._close(event);
                              } else {
                                var error = null;
                                // ErrorEvent is a browser only type we need to check if the type exists before using it
                                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                  error = event.error;
                                } else {
                                  error = "WebSocket failed to connect. The connection could not be found on the server," + " either the endpoint may not be a SignalR endpoint," + " the connection ID is not present on the server, or there is a proxy blocking WebSockets." + " If you have multiple servers check that sticky sessions are enabled.";
                                }
                                reject(new Error(error));
                              }
                            };
                          }));
                        case 9:
                        case "end":
                          return _context15.stop();
                      }
                    }, _callee15, this);
                  }));
                  function connect(_x19, _x20) {
                    return _connect3.apply(this, arguments);
                  }
                  return connect;
                }();
                _proto16.send = function send(data) {
                  if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
                    this._logger.log(_LogLevel.Trace, "(WebSockets transport) sending data. " + getDataDetail(data, this._logMessageContent) + ".");
                    this._webSocket.send(data);
                    return Promise.resolve();
                  }
                  return Promise.reject("WebSocket is not in the OPEN state");
                };
                _proto16.stop = function stop() {
                  if (this._webSocket) {
                    // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
                    // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
                    this._close(undefined);
                  }
                  return Promise.resolve();
                };
                _proto16._close = function _close(event) {
                  // webSocket will be null if the transport did not start successfully
                  if (this._webSocket) {
                    // Clear websocket handlers because we are considering the socket closed now
                    this._webSocket.onclose = function () {};
                    this._webSocket.onmessage = function () {};
                    this._webSocket.onerror = function () {};
                    this._webSocket.close();
                    this._webSocket = undefined;
                  }
                  this._logger.log(_LogLevel.Trace, "(WebSockets transport) socket closed.");
                  if (this.onclose) {
                    if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1000)) {
                      this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + (event.reason || "no reason given") + ")."));
                    } else if (event instanceof Error) {
                      this.onclose(event);
                    } else {
                      this.onclose();
                    }
                  }
                };
                _proto16._isCloseEvent = function _isCloseEvent(event) {
                  return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
                };
                return WebSocketTransport;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              var MAX_REDIRECTS = 100;
              /** @private */
              var HttpConnection = /*#__PURE__*/function () {
                function HttpConnection(url, options) {
                  if (options === void 0) {
                    options = {};
                  }
                  this._stopPromiseResolver = function () {};
                  this.features = {};
                  this._negotiateVersion = 1;
                  Arg.isRequired(url, "url");
                  this._logger = createLogger(options.logger);
                  this.baseUrl = this._resolveUrl(url);
                  options = options || {};
                  options.logMessageContent = options.logMessageContent === undefined ? false : options.logMessageContent;
                  if (typeof options.withCredentials === "boolean" || options.withCredentials === undefined) {
                    options.withCredentials = options.withCredentials === undefined ? true : options.withCredentials;
                  } else {
                    throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
                  }
                  options.timeout = options.timeout === undefined ? 100 * 1000 : options.timeout;
                  var webSocketModule = null;
                  var eventSourceModule = null;
                  if (Platform.isNode && "function" !== "undefined") {
                    // In order to ignore the dynamic require in webpack builds we need to do this magic
                    // @ts-ignore: TS doesn't know about these names
                    var requireFunc = require;
                    webSocketModule = requireFunc("ws");
                    eventSourceModule = requireFunc("eventsource");
                  }
                  if (!Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
                    options.WebSocket = WebSocket;
                  } else if (Platform.isNode && !options.WebSocket) {
                    if (webSocketModule) {
                      options.WebSocket = webSocketModule;
                    }
                  }
                  if (!Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
                    options.EventSource = EventSource;
                  } else if (Platform.isNode && !options.EventSource) {
                    if (typeof eventSourceModule !== "undefined") {
                      options.EventSource = eventSourceModule;
                    }
                  }
                  this._httpClient = new AccessTokenHttpClient(options.httpClient || new _DefaultHttpClient(this._logger), options.accessTokenFactory);
                  this._connectionState = "Disconnected" /* Disconnected */;
                  this._connectionStarted = false;
                  this._options = options;
                  this.onreceive = null;
                  this.onclose = null;
                }
                var _proto17 = HttpConnection.prototype;
                _proto17.start = /*#__PURE__*/function () {
                  var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(transferFormat) {
                    var message, _message3;
                    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                      while (1) switch (_context16.prev = _context16.next) {
                        case 0:
                          transferFormat = transferFormat || _TransferFormat.Binary;
                          Arg.isIn(transferFormat, _TransferFormat, "transferFormat");
                          this._logger.log(_LogLevel.Debug, "Starting connection with transfer format '" + _TransferFormat[transferFormat] + "'.");
                          if (!(this._connectionState !== "Disconnected" /* Disconnected */)) {
                            _context16.next = 5;
                            break;
                          }
                          return _context16.abrupt("return", Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state.")));
                        case 5:
                          this._connectionState = "Connecting" /* Connecting */;
                          this._startInternalPromise = this._startInternal(transferFormat);
                          _context16.next = 9;
                          return this._startInternalPromise;
                        case 9:
                          if (!(this._connectionState === "Disconnecting" /* Disconnecting */)) {
                            _context16.next = 17;
                            break;
                          }
                          // stop() was called and transitioned the client into the Disconnecting state.
                          message = "Failed to start the HttpConnection before stop() was called.";
                          this._logger.log(_LogLevel.Error, message);
                          // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
                          _context16.next = 14;
                          return this._stopPromise;
                        case 14:
                          return _context16.abrupt("return", Promise.reject(new _AbortError(message)));
                        case 17:
                          if (!(this._connectionState !== "Connected" /* Connected */)) {
                            _context16.next = 21;
                            break;
                          }
                          // stop() was called and transitioned the client into the Disconnecting state.
                          _message3 = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                          this._logger.log(_LogLevel.Error, _message3);
                          return _context16.abrupt("return", Promise.reject(new _AbortError(_message3)));
                        case 21:
                          this._connectionStarted = true;
                        case 22:
                        case "end":
                          return _context16.stop();
                      }
                    }, _callee16, this);
                  }));
                  function start(_x21) {
                    return _start.apply(this, arguments);
                  }
                  return start;
                }();
                _proto17.send = function send(data) {
                  if (this._connectionState !== "Connected" /* Connected */) {
                    return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
                  }
                  if (!this._sendQueue) {
                    this._sendQueue = new TransportSendQueue(this.transport);
                  }
                  // Transport will not be null if state is connected
                  return this._sendQueue.send(data);
                };
                _proto17.stop = /*#__PURE__*/function () {
                  var _stop3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(error) {
                    var _this26 = this;
                    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                      while (1) switch (_context17.prev = _context17.next) {
                        case 0:
                          if (!(this._connectionState === "Disconnected" /* Disconnected */)) {
                            _context17.next = 3;
                            break;
                          }
                          this._logger.log(_LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnected state.");
                          return _context17.abrupt("return", Promise.resolve());
                        case 3:
                          if (!(this._connectionState === "Disconnecting" /* Disconnecting */)) {
                            _context17.next = 6;
                            break;
                          }
                          this._logger.log(_LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                          return _context17.abrupt("return", this._stopPromise);
                        case 6:
                          this._connectionState = "Disconnecting" /* Disconnecting */;
                          this._stopPromise = new Promise(function (resolve) {
                            // Don't complete stop() until stopConnection() completes.
                            _this26._stopPromiseResolver = resolve;
                          });
                          // stopInternal should never throw so just observe it.
                          _context17.next = 10;
                          return this._stopInternal(error);
                        case 10:
                          _context17.next = 12;
                          return this._stopPromise;
                        case 12:
                        case "end":
                          return _context17.stop();
                      }
                    }, _callee17, this);
                  }));
                  function stop(_x22) {
                    return _stop3.apply(this, arguments);
                  }
                  return stop;
                }();
                _proto17._stopInternal = /*#__PURE__*/function () {
                  var _stopInternal2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(error) {
                    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                      while (1) switch (_context18.prev = _context18.next) {
                        case 0:
                          // Set error as soon as possible otherwise there is a race between
                          // the transport closing and providing an error and the error from a close message
                          // We would prefer the close message error.
                          this._stopError = error;
                          _context18.prev = 1;
                          _context18.next = 4;
                          return this._startInternalPromise;
                        case 4:
                          _context18.next = 8;
                          break;
                        case 6:
                          _context18.prev = 6;
                          _context18.t0 = _context18["catch"](1);
                        case 8:
                          if (!this.transport) {
                            _context18.next = 21;
                            break;
                          }
                          _context18.prev = 9;
                          _context18.next = 12;
                          return this.transport.stop();
                        case 12:
                          _context18.next = 18;
                          break;
                        case 14:
                          _context18.prev = 14;
                          _context18.t1 = _context18["catch"](9);
                          this._logger.log(_LogLevel.Error, "HttpConnection.transport.stop() threw error '" + _context18.t1 + "'.");
                          this._stopConnection();
                        case 18:
                          this.transport = undefined;
                          _context18.next = 22;
                          break;
                        case 21:
                          this._logger.log(_LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
                        case 22:
                        case "end":
                          return _context18.stop();
                      }
                    }, _callee18, this, [[1, 6], [9, 14]]);
                  }));
                  function _stopInternal(_x23) {
                    return _stopInternal2.apply(this, arguments);
                  }
                  return _stopInternal;
                }();
                _proto17._startInternal = /*#__PURE__*/function () {
                  var _startInternal3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(transferFormat) {
                    var _this27 = this;
                    var url, negotiateResponse, redirects, _loop2;
                    return _regeneratorRuntime().wrap(function _callee19$(_context20) {
                      while (1) switch (_context20.prev = _context20.next) {
                        case 0:
                          // Store the original base url and the access token factory since they may change
                          // as part of negotiating
                          url = this.baseUrl;
                          this._accessTokenFactory = this._options.accessTokenFactory;
                          this._httpClient._accessTokenFactory = this._accessTokenFactory;
                          _context20.prev = 3;
                          if (!this._options.skipNegotiation) {
                            _context20.next = 14;
                            break;
                          }
                          if (!(this._options.transport === _HttpTransportType.WebSockets)) {
                            _context20.next = 11;
                            break;
                          }
                          // No need to add a connection ID in this case
                          this.transport = this._constructTransport(_HttpTransportType.WebSockets);
                          // We should just call connect directly in this case.
                          // No fallback or negotiate in this case.
                          _context20.next = 9;
                          return this._startTransport(url, transferFormat);
                        case 9:
                          _context20.next = 12;
                          break;
                        case 11:
                          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                        case 12:
                          _context20.next = 23;
                          break;
                        case 14:
                          negotiateResponse = null;
                          redirects = 0;
                          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                            var accessToken;
                            return _regeneratorRuntime().wrap(function _loop2$(_context19) {
                              while (1) switch (_context19.prev = _context19.next) {
                                case 0:
                                  _context19.next = 2;
                                  return _this27._getNegotiationResponse(url);
                                case 2:
                                  negotiateResponse = _context19.sent;
                                  if (!(_this27._connectionState === "Disconnecting" /* Disconnecting */ || _this27._connectionState === "Disconnected" /* Disconnected */)) {
                                    _context19.next = 5;
                                    break;
                                  }
                                  throw new _AbortError("The connection was stopped during negotiation.");
                                case 5:
                                  if (!negotiateResponse.error) {
                                    _context19.next = 7;
                                    break;
                                  }
                                  throw new Error(negotiateResponse.error);
                                case 7:
                                  if (!negotiateResponse.ProtocolVersion) {
                                    _context19.next = 9;
                                    break;
                                  }
                                  throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                case 9:
                                  if (negotiateResponse.url) {
                                    url = negotiateResponse.url;
                                  }
                                  if (negotiateResponse.accessToken) {
                                    // Replace the current access token factory with one that uses
                                    // the returned access token
                                    accessToken = negotiateResponse.accessToken;
                                    _this27._accessTokenFactory = function () {
                                      return accessToken;
                                    };
                                    // set the factory to undefined so the AccessTokenHttpClient won't retry with the same token, since we know it won't change until a connection restart
                                    _this27._httpClient._accessToken = accessToken;
                                    _this27._httpClient._accessTokenFactory = undefined;
                                  }
                                  redirects++;
                                case 12:
                                case "end":
                                  return _context19.stop();
                              }
                            }, _loop2);
                          });
                        case 17:
                          return _context20.delegateYield(_loop2(), "t0", 18);
                        case 18:
                          if (negotiateResponse.url && redirects < MAX_REDIRECTS) {
                            _context20.next = 17;
                            break;
                          }
                        case 19:
                          if (!(redirects === MAX_REDIRECTS && negotiateResponse.url)) {
                            _context20.next = 21;
                            break;
                          }
                          throw new Error("Negotiate redirection limit exceeded.");
                        case 21:
                          _context20.next = 23;
                          return this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
                        case 23:
                          if (this.transport instanceof LongPollingTransport) {
                            this.features.inherentKeepAlive = true;
                          }
                          if (this._connectionState === "Connecting" /* Connecting */) {
                            // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
                            // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
                            this._logger.log(_LogLevel.Debug, "The HttpConnection connected successfully.");
                            this._connectionState = "Connected" /* Connected */;
                          }
                          // stop() is waiting on us via this.startInternalPromise so keep this.transport around so it can clean up.
                          // This is the only case startInternal can exit in neither the connected nor disconnected state because stopConnection()
                          // will transition to the disconnected state. start() will wait for the transition using the stopPromise.
                          _context20.next = 34;
                          break;
                        case 27:
                          _context20.prev = 27;
                          _context20.t1 = _context20["catch"](3);
                          this._logger.log(_LogLevel.Error, "Failed to start the connection: " + _context20.t1);
                          this._connectionState = "Disconnected" /* Disconnected */;
                          this.transport = undefined;
                          // if start fails, any active calls to stop assume that start will complete the stop promise
                          this._stopPromiseResolver();
                          return _context20.abrupt("return", Promise.reject(_context20.t1));
                        case 34:
                        case "end":
                          return _context20.stop();
                      }
                    }, _callee19, this, [[3, 27]]);
                  }));
                  function _startInternal(_x24) {
                    return _startInternal3.apply(this, arguments);
                  }
                  return _startInternal;
                }();
                _proto17._getNegotiationResponse = /*#__PURE__*/function () {
                  var _getNegotiationResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(url) {
                    var headers, _getUserAgentHeader5, name, value, negotiateUrl, response, negotiateResponse, errorMessage;
                    return _regeneratorRuntime().wrap(function _callee20$(_context21) {
                      while (1) switch (_context21.prev = _context21.next) {
                        case 0:
                          headers = {};
                          _getUserAgentHeader5 = getUserAgentHeader(), name = _getUserAgentHeader5[0], value = _getUserAgentHeader5[1];
                          headers[name] = value;
                          negotiateUrl = this._resolveNegotiateUrl(url);
                          this._logger.log(_LogLevel.Debug, "Sending negotiation request: " + negotiateUrl + ".");
                          _context21.prev = 5;
                          _context21.next = 8;
                          return this._httpClient.post(negotiateUrl, {
                            content: "",
                            headers: _extends({}, headers, this._options.headers),
                            timeout: this._options.timeout,
                            withCredentials: this._options.withCredentials
                          });
                        case 8:
                          response = _context21.sent;
                          if (!(response.statusCode !== 200)) {
                            _context21.next = 11;
                            break;
                          }
                          return _context21.abrupt("return", Promise.reject(new Error("Unexpected status code returned from negotiate '" + response.statusCode + "'")));
                        case 11:
                          negotiateResponse = JSON.parse(response.content);
                          if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
                            // Negotiate version 0 doesn't use connectionToken
                            // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
                            negotiateResponse.connectionToken = negotiateResponse.connectionId;
                          }
                          return _context21.abrupt("return", negotiateResponse);
                        case 16:
                          _context21.prev = 16;
                          _context21.t0 = _context21["catch"](5);
                          errorMessage = "Failed to complete negotiation with the server: " + _context21.t0;
                          if (_context21.t0 instanceof _HttpError) {
                            if (_context21.t0.statusCode === 404) {
                              errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
                            }
                          }
                          this._logger.log(_LogLevel.Error, errorMessage);
                          return _context21.abrupt("return", Promise.reject(new FailedToNegotiateWithServerError(errorMessage)));
                        case 22:
                        case "end":
                          return _context21.stop();
                      }
                    }, _callee20, this, [[5, 16]]);
                  }));
                  function _getNegotiationResponse(_x25) {
                    return _getNegotiationResponse2.apply(this, arguments);
                  }
                  return _getNegotiationResponse;
                }();
                _proto17._createConnectUrl = function _createConnectUrl(url, connectionToken) {
                  if (!connectionToken) {
                    return url;
                  }
                  return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionToken);
                };
                _proto17._createTransport = /*#__PURE__*/function () {
                  var _createTransport2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
                    var connectUrl, transportExceptions, transports, negotiate, _iterator6, _step6, endpoint, transportOrError, message;
                    return _regeneratorRuntime().wrap(function _callee21$(_context22) {
                      while (1) switch (_context22.prev = _context22.next) {
                        case 0:
                          connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
                          if (!this._isITransport(requestedTransport)) {
                            _context22.next = 8;
                            break;
                          }
                          this._logger.log(_LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
                          this.transport = requestedTransport;
                          _context22.next = 6;
                          return this._startTransport(connectUrl, requestedTransferFormat);
                        case 6:
                          this.connectionId = negotiateResponse.connectionId;
                          return _context22.abrupt("return");
                        case 8:
                          transportExceptions = [];
                          transports = negotiateResponse.availableTransports || [];
                          negotiate = negotiateResponse;
                          _iterator6 = _createForOfIteratorHelperLoose(transports);
                        case 12:
                          if ((_step6 = _iterator6()).done) {
                            _context22.next = 51;
                            break;
                          }
                          endpoint = _step6.value;
                          transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);
                          if (!(transportOrError instanceof Error)) {
                            _context22.next = 20;
                            break;
                          }
                          // Store the error and continue, we don't want to cause a re-negotiate in these cases
                          transportExceptions.push(endpoint.transport + " failed:");
                          transportExceptions.push(transportOrError);
                          _context22.next = 49;
                          break;
                        case 20:
                          if (!this._isITransport(transportOrError)) {
                            _context22.next = 49;
                            break;
                          }
                          this.transport = transportOrError;
                          if (negotiate) {
                            _context22.next = 33;
                            break;
                          }
                          _context22.prev = 23;
                          _context22.next = 26;
                          return this._getNegotiationResponse(url);
                        case 26:
                          negotiate = _context22.sent;
                          _context22.next = 32;
                          break;
                        case 29:
                          _context22.prev = 29;
                          _context22.t0 = _context22["catch"](23);
                          return _context22.abrupt("return", Promise.reject(_context22.t0));
                        case 32:
                          connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
                        case 33:
                          _context22.prev = 33;
                          _context22.next = 36;
                          return this._startTransport(connectUrl, requestedTransferFormat);
                        case 36:
                          this.connectionId = negotiate.connectionId;
                          return _context22.abrupt("return");
                        case 40:
                          _context22.prev = 40;
                          _context22.t1 = _context22["catch"](33);
                          this._logger.log(_LogLevel.Error, "Failed to start the transport '" + endpoint.transport + "': " + _context22.t1);
                          negotiate = undefined;
                          transportExceptions.push(new FailedToStartTransportError(endpoint.transport + " failed: " + _context22.t1, _HttpTransportType[endpoint.transport]));
                          if (!(this._connectionState !== "Connecting" /* Connecting */)) {
                            _context22.next = 49;
                            break;
                          }
                          message = "Failed to select transport before stop() was called.";
                          this._logger.log(_LogLevel.Debug, message);
                          return _context22.abrupt("return", Promise.reject(new _AbortError(message)));
                        case 49:
                          _context22.next = 12;
                          break;
                        case 51:
                          if (!(transportExceptions.length > 0)) {
                            _context22.next = 53;
                            break;
                          }
                          return _context22.abrupt("return", Promise.reject(new AggregateErrors("Unable to connect to the server with any of the available transports. " + transportExceptions.join(" "), transportExceptions)));
                        case 53:
                          return _context22.abrupt("return", Promise.reject(new Error("None of the transports supported by the client are supported by the server.")));
                        case 54:
                        case "end":
                          return _context22.stop();
                      }
                    }, _callee21, this, [[23, 29], [33, 40]]);
                  }));
                  function _createTransport(_x26, _x27, _x28, _x29) {
                    return _createTransport2.apply(this, arguments);
                  }
                  return _createTransport;
                }();
                _proto17._constructTransport = function _constructTransport(transport) {
                  switch (transport) {
                    case _HttpTransportType.WebSockets:
                      if (!this._options.WebSocket) {
                        throw new Error("'WebSocket' is not supported in your environment.");
                      }
                      return new WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
                    case _HttpTransportType.ServerSentEvents:
                      if (!this._options.EventSource) {
                        throw new Error("'EventSource' is not supported in your environment.");
                      }
                      return new ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
                    case _HttpTransportType.LongPolling:
                      return new LongPollingTransport(this._httpClient, this._logger, this._options);
                    default:
                      throw new Error("Unknown transport: " + transport + ".");
                  }
                };
                _proto17._startTransport = function _startTransport(url, transferFormat) {
                  var _this28 = this;
                  this.transport.onreceive = this.onreceive;
                  this.transport.onclose = function (e) {
                    return _this28._stopConnection(e);
                  };
                  return this.transport.connect(url, transferFormat);
                };
                _proto17._resolveTransportOrError = function _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat) {
                  var transport = _HttpTransportType[endpoint.transport];
                  if (transport === null || transport === undefined) {
                    this._logger.log(_LogLevel.Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
                    return new Error("Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
                  } else {
                    if (transportMatches(requestedTransport, transport)) {
                      var transferFormats = endpoint.transferFormats.map(function (s) {
                        return _TransferFormat[s];
                      });
                      if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                        if (transport === _HttpTransportType.WebSockets && !this._options.WebSocket || transport === _HttpTransportType.ServerSentEvents && !this._options.EventSource) {
                          this._logger.log(_LogLevel.Debug, "Skipping transport '" + _HttpTransportType[transport] + "' because it is not supported in your environment.'");
                          return new UnsupportedTransportError("'" + _HttpTransportType[transport] + "' is not supported in your environment.", transport);
                        } else {
                          this._logger.log(_LogLevel.Debug, "Selecting transport '" + _HttpTransportType[transport] + "'.");
                          try {
                            return this._constructTransport(transport);
                          } catch (ex) {
                            return ex;
                          }
                        }
                      } else {
                        this._logger.log(_LogLevel.Debug, "Skipping transport '" + _HttpTransportType[transport] + "' because it does not support the requested transfer format '" + _TransferFormat[requestedTransferFormat] + "'.");
                        return new Error("'" + _HttpTransportType[transport] + "' does not support " + _TransferFormat[requestedTransferFormat] + ".");
                      }
                    } else {
                      this._logger.log(_LogLevel.Debug, "Skipping transport '" + _HttpTransportType[transport] + "' because it was disabled by the client.");
                      return new DisabledTransportError("'" + _HttpTransportType[transport] + "' is disabled by the client.", transport);
                    }
                  }
                };
                _proto17._isITransport = function _isITransport(transport) {
                  return transport && typeof transport === "object" && "connect" in transport;
                };
                _proto17._stopConnection = function _stopConnection(error) {
                  var _this29 = this;
                  this._logger.log(_LogLevel.Debug, "HttpConnection.stopConnection(" + error + ") called while in state " + this._connectionState + ".");
                  this.transport = undefined;
                  // If we have a stopError, it takes precedence over the error from the transport
                  error = this._stopError || error;
                  this._stopError = undefined;
                  if (this._connectionState === "Disconnected" /* Disconnected */) {
                    this._logger.log(_LogLevel.Debug, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is already in the disconnected state.");
                    return;
                  }
                  if (this._connectionState === "Connecting" /* Connecting */) {
                    this._logger.log(_LogLevel.Warning, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is still in the connecting state.");
                    throw new Error("HttpConnection.stopConnection(" + error + ") was called while the connection is still in the connecting state.");
                  }
                  if (this._connectionState === "Disconnecting" /* Disconnecting */) {
                    // A call to stop() induced this call to stopConnection and needs to be completed.
                    // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
                    this._stopPromiseResolver();
                  }
                  if (error) {
                    this._logger.log(_LogLevel.Error, "Connection disconnected with error '" + error + "'.");
                  } else {
                    this._logger.log(_LogLevel.Information, "Connection disconnected.");
                  }
                  if (this._sendQueue) {
                    this._sendQueue.stop()["catch"](function (e) {
                      _this29._logger.log(_LogLevel.Error, "TransportSendQueue.stop() threw error '" + e + "'.");
                    });
                    this._sendQueue = undefined;
                  }
                  this.connectionId = undefined;
                  this._connectionState = "Disconnected" /* Disconnected */;
                  if (this._connectionStarted) {
                    this._connectionStarted = false;
                    try {
                      if (this.onclose) {
                        this.onclose(error);
                      }
                    } catch (e) {
                      this._logger.log(_LogLevel.Error, "HttpConnection.onclose(" + error + ") threw error '" + e + "'.");
                    }
                  }
                };
                _proto17._resolveUrl = function _resolveUrl(url) {
                  // startsWith is not supported in IE
                  if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
                    return url;
                  }
                  if (!Platform.isBrowser) {
                    throw new Error("Cannot resolve '" + url + "'.");
                  }
                  // Setting the url to the href propery of an anchor tag handles normalization
                  // for us. There are 3 main cases.
                  // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
                  // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
                  // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
                  var aTag = window.document.createElement("a");
                  aTag.href = url;
                  this._logger.log(_LogLevel.Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
                  return aTag.href;
                };
                _proto17._resolveNegotiateUrl = function _resolveNegotiateUrl(url) {
                  var index = url.indexOf("?");
                  var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
                  if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
                    negotiateUrl += "/";
                  }
                  negotiateUrl += "negotiate";
                  negotiateUrl += index === -1 ? "" : url.substring(index);
                  if (negotiateUrl.indexOf("negotiateVersion") === -1) {
                    negotiateUrl += index === -1 ? "?" : "&";
                    negotiateUrl += "negotiateVersion=" + this._negotiateVersion;
                  }
                  return negotiateUrl;
                };
                return HttpConnection;
              }();
              function transportMatches(requestedTransport, actualTransport) {
                return !requestedTransport || (actualTransport & requestedTransport) !== 0;
              }
              /** @private */
              var TransportSendQueue = /*#__PURE__*/function () {
                function TransportSendQueue(_transport) {
                  this._transport = _transport;
                  this._buffer = [];
                  this._executing = true;
                  this._sendBufferedData = new PromiseSource();
                  this._transportResult = new PromiseSource();
                  this._sendLoopPromise = this._sendLoop();
                }
                var _proto18 = TransportSendQueue.prototype;
                _proto18.send = function send(data) {
                  this._bufferData(data);
                  if (!this._transportResult) {
                    this._transportResult = new PromiseSource();
                  }
                  return this._transportResult.promise;
                };
                _proto18.stop = function stop() {
                  this._executing = false;
                  this._sendBufferedData.resolve();
                  return this._sendLoopPromise;
                };
                _proto18._bufferData = function _bufferData(data) {
                  if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
                    throw new Error("Expected data to be of type " + typeof this._buffer + " but was of type " + typeof data);
                  }
                  this._buffer.push(data);
                  this._sendBufferedData.resolve();
                };
                _proto18._sendLoop = /*#__PURE__*/function () {
                  var _sendLoop2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
                    var transportResult, data;
                    return _regeneratorRuntime().wrap(function _callee22$(_context23) {
                      while (1) switch (_context23.prev = _context23.next) {
                        case 0:
                          _context23.next = 3;
                          return this._sendBufferedData.promise;
                        case 3:
                          if (this._executing) {
                            _context23.next = 6;
                            break;
                          }
                          if (this._transportResult) {
                            this._transportResult.reject("Connection stopped.");
                          }
                          return _context23.abrupt("break", 22);
                        case 6:
                          this._sendBufferedData = new PromiseSource();
                          transportResult = this._transportResult;
                          this._transportResult = undefined;
                          data = typeof this._buffer[0] === "string" ? this._buffer.join("") : TransportSendQueue._concatBuffers(this._buffer);
                          this._buffer.length = 0;
                          _context23.prev = 11;
                          _context23.next = 14;
                          return this._transport.send(data);
                        case 14:
                          transportResult.resolve();
                          _context23.next = 20;
                          break;
                        case 17:
                          _context23.prev = 17;
                          _context23.t0 = _context23["catch"](11);
                          transportResult.reject(_context23.t0);
                        case 20:
                          _context23.next = 0;
                          break;
                        case 22:
                        case "end":
                          return _context23.stop();
                      }
                    }, _callee22, this, [[11, 17]]);
                  }));
                  function _sendLoop() {
                    return _sendLoop2.apply(this, arguments);
                  }
                  return _sendLoop;
                }();
                TransportSendQueue._concatBuffers = function _concatBuffers(arrayBuffers) {
                  var totalLength = arrayBuffers.map(function (b) {
                    return b.byteLength;
                  }).reduce(function (a, b) {
                    return a + b;
                  });
                  var result = new Uint8Array(totalLength);
                  var offset = 0;
                  for (var _iterator7 = _createForOfIteratorHelperLoose(arrayBuffers), _step7; !(_step7 = _iterator7()).done;) {
                    var item = _step7.value;
                    result.set(new Uint8Array(item), offset);
                    offset += item.byteLength;
                  }
                  return result.buffer;
                };
                return TransportSendQueue;
              }();
              var PromiseSource = /*#__PURE__*/function () {
                function PromiseSource() {
                  var _this30 = this;
                  this.promise = new Promise(function (resolve, reject) {
                    var _ref2;
                    return _ref2 = [resolve, reject], _this30._resolver = _ref2[0], _this30._rejecter = _ref2[1], _ref2;
                  });
                }
                var _proto19 = PromiseSource.prototype;
                _proto19.resolve = function resolve() {
                  this._resolver();
                };
                _proto19.reject = function reject(reason) {
                  this._rejecter(reason);
                };
                return PromiseSource;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              var JSON_HUB_PROTOCOL_NAME = "json";
              /** Implements the JSON Hub Protocol. */
              var _JsonHubProtocol = /*#__PURE__*/function () {
                function _JsonHubProtocol() {
                  /** @inheritDoc */
                  this.name = JSON_HUB_PROTOCOL_NAME;
                  /** @inheritDoc */
                  this.version = 1;
                  /** @inheritDoc */
                  this.transferFormat = _TransferFormat.Text;
                }
                /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
                 *
                 * @param {string} input A string containing the serialized representation.
                 * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
                 */
                var _proto20 = _JsonHubProtocol.prototype;
                _proto20.parseMessages = function parseMessages(input, logger) {
                  // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
                  if (typeof input !== "string") {
                    throw new Error("Invalid input for JSON hub protocol. Expected a string.");
                  }
                  if (!input) {
                    return [];
                  }
                  if (logger === null) {
                    logger = _NullLogger.instance;
                  }
                  // Parse the messages
                  var messages = TextMessageFormat.parse(input);
                  var hubMessages = [];
                  for (var _iterator8 = _createForOfIteratorHelperLoose(messages), _step8; !(_step8 = _iterator8()).done;) {
                    var message = _step8.value;
                    var parsedMessage = JSON.parse(message);
                    if (typeof parsedMessage.type !== "number") {
                      throw new Error("Invalid payload.");
                    }
                    switch (parsedMessage.type) {
                      case _MessageType.Invocation:
                        this._isInvocationMessage(parsedMessage);
                        break;
                      case _MessageType.StreamItem:
                        this._isStreamItemMessage(parsedMessage);
                        break;
                      case _MessageType.Completion:
                        this._isCompletionMessage(parsedMessage);
                        break;
                      case _MessageType.Ping:
                        // Single value, no need to validate
                        break;
                      case _MessageType.Close:
                        // All optional values, no need to validate
                        break;
                      default:
                        // Future protocol changes can add message types, old clients can ignore them
                        logger.log(_LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                        continue;
                    }
                    hubMessages.push(parsedMessage);
                  }
                  return hubMessages;
                }
                /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
                 *
                 * @param {HubMessage} message The message to write.
                 * @returns {string} A string containing the serialized representation of the message.
                 */;
                _proto20.writeMessage = function writeMessage(message) {
                  return TextMessageFormat.write(JSON.stringify(message));
                };
                _proto20._isInvocationMessage = function _isInvocationMessage(message) {
                  this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
                  if (message.invocationId !== undefined) {
                    this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
                  }
                };
                _proto20._isStreamItemMessage = function _isStreamItemMessage(message) {
                  this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
                  if (message.item === undefined) {
                    throw new Error("Invalid payload for StreamItem message.");
                  }
                };
                _proto20._isCompletionMessage = function _isCompletionMessage(message) {
                  if (message.result && message.error) {
                    throw new Error("Invalid payload for Completion message.");
                  }
                  if (!message.result && message.error) {
                    this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
                  }
                  this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
                };
                _proto20._assertNotEmptyString = function _assertNotEmptyString(value, errorMessage) {
                  if (typeof value !== "string" || value === "") {
                    throw new Error(errorMessage);
                  }
                };
                return _JsonHubProtocol;
              }();
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.

              var LogLevelNameMapping = {
                trace: _LogLevel.Trace,
                debug: _LogLevel.Debug,
                info: _LogLevel.Information,
                information: _LogLevel.Information,
                warn: _LogLevel.Warning,
                warning: _LogLevel.Warning,
                error: _LogLevel.Error,
                critical: _LogLevel.Critical,
                none: _LogLevel.None
              };
              function parseLogLevel(name) {
                // Case-insensitive matching via lower-casing
                // Yes, I know case-folding is a complicated problem in Unicode, but we only support
                // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
                var mapping = LogLevelNameMapping[name.toLowerCase()];
                if (typeof mapping !== "undefined") {
                  return mapping;
                } else {
                  throw new Error("Unknown log level: " + name);
                }
              }
              /** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
              var _HubConnectionBuilder = /*#__PURE__*/function () {
                function _HubConnectionBuilder() {}
                var _proto21 = _HubConnectionBuilder.prototype;
                _proto21.configureLogging = function configureLogging(logging) {
                  Arg.isRequired(logging, "logging");
                  if (isLogger(logging)) {
                    this.logger = logging;
                  } else if (typeof logging === "string") {
                    var logLevel = parseLogLevel(logging);
                    this.logger = new ConsoleLogger(logLevel);
                  } else {
                    this.logger = new ConsoleLogger(logging);
                  }
                  return this;
                };
                _proto21.withUrl = function withUrl(url, transportTypeOrOptions) {
                  Arg.isRequired(url, "url");
                  Arg.isNotEmpty(url, "url");
                  this.url = url;
                  // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
                  // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
                  if (typeof transportTypeOrOptions === "object") {
                    this.httpConnectionOptions = _extends({}, this.httpConnectionOptions, transportTypeOrOptions);
                  } else {
                    this.httpConnectionOptions = _extends({}, this.httpConnectionOptions, {
                      transport: transportTypeOrOptions
                    });
                  }
                  return this;
                }
                /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
                 *
                 * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
                 */;
                _proto21.withHubProtocol = function withHubProtocol(protocol) {
                  Arg.isRequired(protocol, "protocol");
                  this.protocol = protocol;
                  return this;
                };
                _proto21.withAutomaticReconnect = function withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
                  if (this.reconnectPolicy) {
                    throw new Error("A reconnectPolicy has already been set.");
                  }
                  if (!retryDelaysOrReconnectPolicy) {
                    this.reconnectPolicy = new DefaultReconnectPolicy();
                  } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
                    this.reconnectPolicy = new DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
                  } else {
                    this.reconnectPolicy = retryDelaysOrReconnectPolicy;
                  }
                  return this;
                }
                /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
                 *
                 * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
                 */;
                _proto21.build = function build() {
                  // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
                  // provided to configureLogger
                  var httpConnectionOptions = this.httpConnectionOptions || {};
                  // If it's 'null', the user **explicitly** asked for null, don't mess with it.
                  if (httpConnectionOptions.logger === undefined) {
                    // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
                    httpConnectionOptions.logger = this.logger;
                  }
                  // Now create the connection
                  if (!this.url) {
                    throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
                  }
                  var connection = new HttpConnection(this.url, httpConnectionOptions);
                  return _HubConnection.create(connection, this.logger || _NullLogger.instance, this.protocol || new _JsonHubProtocol(), this.reconnectPolicy);
                };
                return _HubConnectionBuilder;
              }();
              function isLogger(logger) {
                return logger.log !== undefined;
              }
              // Licensed to the .NET Foundation under one or more agreements.
              // The .NET Foundation licenses this file to you under the MIT license.
              // This is where we add any polyfills we'll need for the browser. It is the entry module for browser-specific builds.
              // Copy from Array.prototype into Uint8Array to polyfill on IE. It's OK because the implementations of indexOf and slice use properties
              // that exist on Uint8Array with the same name, and JavaScript is magic.
              // We make them 'writable' because the Buffer polyfill messes with it as well.
              if (!Uint8Array.prototype.indexOf) {
                Object.defineProperty(Uint8Array.prototype, "indexOf", {
                  value: Array.prototype.indexOf,
                  writable: true
                });
              }
              if (!Uint8Array.prototype.slice) {
                Object.defineProperty(Uint8Array.prototype, "slice", {
                  // wrap the slice in Uint8Array so it looks like a Uint8Array.slice call
                  // eslint-disable-next-line object-shorthand
                  value: function value(start, end) {
                    return new Uint8Array(Array.prototype.slice.call(this, start, end));
                  },
                  writable: true
                });
              }
              if (!Uint8Array.prototype.forEach) {
                Object.defineProperty(Uint8Array.prototype, "forEach", {
                  value: Array.prototype.forEach,
                  writable: true
                });
              }

              /******/
              return __webpack_exports__;
              /******/
            }()
          );
        });

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
        module.exports.signalR;
        module.exports.__esModule;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/signalr.mjs_cjs=&original=.js", ['./signalr.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './signalr.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./signalr.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

} }; });