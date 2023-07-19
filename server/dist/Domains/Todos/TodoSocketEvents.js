'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  }, _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = _default;
var _uuid = require('uuid');
var _util = require('../../util');

function _regeneratorRuntime() {
  'use strict'; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    }, $Symbol = 'function' == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || '@@iterator',
    asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
    toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];
  }

  try {
    define({}, '');
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
    return defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) }), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return { type: 'normal', arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: 'throw', arg: err };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {
  }

  function GeneratorFunction() {
  }

  function GeneratorFunctionPrototype() {
  }

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ['next', 'throw', 'return'].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ('throw' !== record.type) {
        var result = record.arg, value = result.value;
        return value && 'object' == _typeof(value) && hasOwn.call(value, '__await') ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke('next', value, resolve, reject);
        }, function (err) {
          invoke('throw', err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke('throw', error, resolve, reject);
        });
      }
      reject(record.arg);
    }

    var previousPromise;
    defineProperty(this, '_invoke', {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }

  function makeInvokeMethod(innerFn, self, context) {
    var state = 'suspendedStart';
    return function (method, arg) {
      if ('executing' === state) throw new Error('Generator is already running');
      if ('completed' === state) {
        if ('throw' === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ('next' === context.method) context.sent = context._sent = context.arg; else if ('throw' === context.method) {
          if ('suspendedStart' === state) throw state = 'completed', context.arg;
          context.dispatchException(context.arg);
        } else 'return' === context.method && context.abrupt('return', context.arg);
        state = 'executing';
        var record = tryCatch(innerFn, self, context);
        if ('normal' === record.type) {
          if (state = context.done ? 'completed' : 'suspendedYield', record.arg === ContinueSentinel) continue;
          return { value: record.arg, done: context.done };
        }
        'throw' === record.type && (state = 'completed', context.method = 'throw', context.arg = record.arg);
      }
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method, method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, 'throw' === methodName && delegate.iterator['return'] && (context.method = 'return', context.arg = undefined, maybeInvokeDelegate(delegate, context), 'throw' === context.method) || 'return' !== methodName && (context.method = 'throw', context.arg = new TypeError('The iterator does not provide a \'' + methodName + '\' method')), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ('throw' === record.type) return context.method = 'throw', context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, 'return' !== context.method && (context.method = 'next', context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = 'throw', context.arg = new TypeError('iterator result is not an object'), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = 'normal', delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: 'root' }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ('function' == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          return next.value = undefined, next.done = !0, next;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }

  function doneResult() {
    return { value: undefined, done: !0 };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, 'constructor', {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, 'constructor', {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, 'GeneratorFunction'), exports.isGeneratorFunction = function (genFun) {
    var ctor = 'function' == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, 'GeneratorFunction')), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return { __await: arg };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, 'Generator'), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, 'toString', function () {
    return '[object Generator]';
  }), exports.keys = function (val) {
    var object = Object(val), keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context, reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = 'next', this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) 't' === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    }, stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ('throw' === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    }, dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = 'throw', record.arg = exception, context.next = loc, caught && (context.method = 'next', context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i], record = entry.completion;
        if ('root' === entry.tryLoc) return handle('end');
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, 'catchLoc'), hasFinally = hasOwn.call(entry, 'finallyLoc');
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error('try statement without catch or finally');
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    }, abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ('break' === type || 'continue' === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = 'next', this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    }, complete: function complete(record, afterLoc) {
      if ('throw' === record.type) throw record.arg;
      return 'break' === record.type || 'continue' === record.type ? this.next = record.arg : 'return' === record.type ? (this.rval = this.arg = record.arg, this.method = 'return', this.next = 'end') : 'normal' === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    }, finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    }, 'catch': function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ('throw' === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error('illegal catch attempt');
    }, delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, 'next' === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
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
    var self = this, args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }

      _next(undefined);
    });
  };
}

function _default(components) {
  var todoRepository = components.todoRepository;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  var socket = this;
  return {
    createTodo: function () {
      var _createTodo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref, callback) {
        var title, _ref$content, content, authorId, _ref$updatedAt, updatedAt, _ref$updatedBy, updatedBy,
          _ref$completed, completed, id, todo;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              title = _ref.title, _ref$content = _ref.content, content = _ref$content === void 0 ? null : _ref$content, authorId = _ref.authorId, _ref$updatedAt = _ref.updatedAt, updatedAt = _ref$updatedAt === void 0 ? null : _ref$updatedAt, _ref$updatedBy = _ref.updatedBy, updatedBy = _ref$updatedBy === void 0 ? null : _ref$updatedBy, _ref$completed = _ref.completed, completed = _ref$completed === void 0 ? false : _ref$completed;
              id = (0, _uuid.v4)();
              _context.prev = 2;
              _context.next = 5;
              return todoRepository.save({
                id: id,
                title: title,
                content: content,
                authorId: authorId,
                updatedAt: updatedAt,
                updatedBy: updatedBy,
                completed: completed
              });
            case 5:
              todo = _context.sent;
              callback({
                data: todo.id
              });
              socket.broadcast.emit('todo:created', todo);
              _context.next = 17;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](2);
              if (!(0, _util.isError)(_context.t0)) {
                _context.next = 16;
                break;
              }
              callback({
                error: _context.t0
              });
              _context.next = 17;
              break;
            case 16:
              throw new Error('an unknown error occurred ' + _context.t0);
            case 17:
            case 'end':
              return _context.stop();
          }
        }, _callee, null, [[2, 10]]);
      }));

      function createTodo(_x, _x2) {
        return _createTodo.apply(this, arguments);
      }

      return createTodo;
    }(),
    readTodo: function readTodo() {
    },
    updateTodo: function updateTodo() {
    },
    delTodo: function delTodo() {
    },
    listTodo: function () {
      var _listTodo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(payload, callback) {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (!payload.withAuthor) {
                _context2.next = 7;
                break;
              }
              _context2.next = 4;
              return todoRepository.findAllWithAuthor();
            case 4:
              _context2.t0 = _context2.sent;
              _context2.next = 10;
              break;
            case 7:
              _context2.next = 9;
              return todoRepository.findAll();
            case 9:
              _context2.t0 = _context2.sent;
            case 10:
              data = _context2.t0;
              callback({
                // give them back to the single requester
                data: data
              });
              _context2.next = 21;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t1 = _context2['catch'](0);
              if (!(0, _util.isError)(_context2.t1)) {
                _context2.next = 20;
                break;
              }
              callback({
                error: _context2.t1
              });
              _context2.next = 21;
              break;
            case 20:
              throw new Error('an unknown error occurred' + _context2.t1);
            case 21:
            case 'end':
              return _context2.stop();
          }
        }, _callee2, null, [[0, 14]]);
      }));

      function listTodo(_x3, _x4) {
        return _listTodo.apply(this, arguments);
      }

      return listTodo;
    }()
  };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXVpZCIsInJlcXVpcmUiLCJfdXRpbCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9kZWZhdWx0IiwiY29tcG9uZW50cyIsInRvZG9SZXBvc2l0b3J5Iiwic29ja2V0IiwiY3JlYXRlVG9kbyIsIl9jcmVhdGVUb2RvIiwiX2NhbGxlZSIsIl9yZWYiLCJjYWxsYmFjayIsInRpdGxlIiwiX3JlZiRjb250ZW50IiwiY29udGVudCIsImF1dGhvcklkIiwiX3JlZiR1cGRhdGVkQXQiLCJ1cGRhdGVkQXQiLCJfcmVmJHVwZGF0ZWRCeSIsInVwZGF0ZWRCeSIsIl9yZWYkY29tcGxldGVkIiwiY29tcGxldGVkIiwiaWQiLCJ0b2RvIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInV1aWQiLCJzYXZlIiwiZGF0YSIsImJyb2FkY2FzdCIsImVtaXQiLCJ0MCIsImlzRXJyb3IiLCJfeCIsIl94MiIsInJlYWRUb2RvIiwidXBkYXRlVG9kbyIsImRlbFRvZG8iLCJsaXN0VG9kbyIsIl9saXN0VG9kbyIsIl9jYWxsZWUyIiwicGF5bG9hZCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIndpdGhBdXRob3IiLCJmaW5kQWxsV2l0aEF1dGhvciIsImZpbmRBbGwiLCJ0MSIsIl94MyIsIl94NCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Eb21haW5zL1RvZG9zL1RvZG9Tb2NrZXRFdmVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uLy4uL2FwcCc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgVG9kb0lkIH0gZnJvbSAnLi9Ub2RvUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDbGllbnRFdmVudHMsIFJlc3BvbnNlLCBTZXJ2ZXJFdmVudHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9FdmVudHMnO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSAnc29ja2V0LmlvJztcbmltcG9ydCB7IGlzRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudHM6IENvbXBvbmVudHMpIHtcbiAgY29uc3QgeyB0b2RvUmVwb3NpdG9yeSB9ID0gY29tcG9uZW50cztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICBjb25zdCBzb2NrZXQ6IFNvY2tldDxDbGllbnRFdmVudHMsIFNlcnZlckV2ZW50cz4gPSB0aGlzO1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVG9kbzogYXN5bmMgZnVuY3Rpb24gKFxuICAgICAge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29udGVudCA9IG51bGwsXG4gICAgICAgIGF1dGhvcklkLFxuICAgICAgICB1cGRhdGVkQXQgPSBudWxsLFxuICAgICAgICB1cGRhdGVkQnkgPSBudWxsLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgIH06IE9taXQ8VG9kbywgJ2NyZWF0ZWRBdCcgfCAnaWQnPixcbiAgICAgIGNhbGxiYWNrOiAocmVzOiBSZXNwb25zZTxUb2RvSWQ+KSA9PiB2b2lkXG4gICAgKSB7XG4gICAgICBjb25zdCBpZDogVG9kb0lkID0gdXVpZCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9kbyA9IGF3YWl0IHRvZG9SZXBvc2l0b3J5LnNhdmUoe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgYXV0aG9ySWQsXG4gICAgICAgICAgdXBkYXRlZEF0LFxuICAgICAgICAgIHVwZGF0ZWRCeSxcbiAgICAgICAgICBjb21wbGV0ZWQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICBkYXRhOiB0b2RvLmlkLFxuICAgICAgICB9KTtcblxuICAgICAgICBzb2NrZXQuYnJvYWRjYXN0LmVtaXQoJ3RvZG86Y3JlYXRlZCcsIHRvZG8pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaXNFcnJvcihlKSkge1xuICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgIGVycm9yOiBlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCAnICsgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVhZFRvZG8oKSB7fSxcbiAgICB1cGRhdGVUb2RvKCkge30sXG4gICAgZGVsVG9kbygpIHt9LFxuICAgIGxpc3RUb2RvOiBhc3luYyBmdW5jdGlvbiAoXG4gICAgICBwYXlsb2FkOiB7IHdpdGhBdXRob3I/OiBib29sZWFuIH0sXG4gICAgICBjYWxsYmFjazogKHJlczogUmVzcG9uc2U8VG9kb1tdPikgPT4gdm9pZFxuICAgICkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZ2V0IHRvZG9zIGZyb20gZGJcbiAgICAgICAgY29uc3QgZGF0YSA9IHBheWxvYWQud2l0aEF1dGhvclxuICAgICAgICAgID8gYXdhaXQgdG9kb1JlcG9zaXRvcnkuZmluZEFsbFdpdGhBdXRob3IoKVxuICAgICAgICAgIDogYXdhaXQgdG9kb1JlcG9zaXRvcnkuZmluZEFsbCgpO1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgLy8gZ2l2ZSB0aGVtIGJhY2sgdG8gdGhlIHNpbmdsZSByZXF1ZXN0ZXJcbiAgICAgICAgICBkYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGlzRXJyb3IoZSkpIHtcbiAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICBlcnJvcjogZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnICsgZSk7XG4g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
//# sourceMappingURL=TodoSocketEvents.js.map