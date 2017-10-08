/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fiber", [], factory);
	else if(typeof exports === 'object')
		exports["fiber"] = factory();
	else
		root["fiber"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventPool = exports.EventPool = function () {
    function EventPool() {
        _classCallCheck(this, EventPool);
    }

    _createClass(EventPool, [{
        key: 'trigger',
        value: function trigger(fiberEvent) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    return resolve(_this.triggerSync(fiberEvent));
                }, 0);
            });
        }
    }, {
        key: 'triggerSync',
        value: function triggerSync(fiberEvent) {
            return this.element.dispatchEvent(fiberEvent.event());
        }
    }, {
        key: 'listen',
        value: function listen() {
            for (var i = 0; i < arguments.length; i += 2) {
                this.addEventListener(arguments.length <= i ? undefined : arguments[i], arguments.length <= i + 1 ? undefined : arguments[i + 1]);
            }
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(fiberEvent, eventHandler) {
            var _this2 = this;

            var realHandler = void 0;
            var events = [];
            if (typeof fiberEvent == 'string') {
                realHandler = eventHandler;
                fiberEvent.trim().split(/\s/).forEach(function (strEvent) {
                    events.push(strEvent);
                    _this2.element.addEventListener(strEvent, realHandler);
                });
            } else if (!(fiberEvent instanceof Event) && fiberEvent.namespace instanceof EventPool) {
                realHandler = function realHandler(event) {
                    return eventHandler(event.detail);
                };
                fiberEvent.namespace.element.addEventListener(fiberEvent.event.EventName, realHandler);
                events.push(fiberEvent.EventName);
            } else {
                realHandler = function realHandler(event) {
                    return eventHandler(event.detail);
                };
                this.element.addEventListener(fiberEvent.EventName, realHandler);
                events.push(fiberEvent.EventName);
            }
            return {
                callback: realHandler,
                events: events
            };
        }
    }], [{
        key: 'forElement',
        value: function forElement(element, component) {
            var instance = new this();

            instance.name = component && component.constructor.name;
            instance.element = element;

            return instance;
        }
    }, {
        key: 'forComponent',
        value: function forComponent(component) {
            var instance = new this();

            instance.name = component.constructor.name;
            instance.element = component.view;

            return instance;
        }
    }]);

    return EventPool;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NameSpace = exports.DefinedEvent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getNameSpaceByPath = getNameSpaceByPath;
exports.detachEventPool = detachEventPool;

var _event = __webpack_require__(3);

var _eventPool = __webpack_require__(0);

var _readOnly = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefinedEvent = exports.DefinedEvent = (0, _event.basicEvent)('Fiber:NameSpace:Defined');

var NameSpace = exports.NameSpace = function (_EventPool) {
    _inherits(NameSpace, _EventPool);

    function NameSpace(name, path) {
        _classCallCheck(this, NameSpace);

        var _this = _possibleConstructorReturn(this, (NameSpace.__proto__ || Object.getPrototypeOf(NameSpace)).call(this));

        _this.name = name;
        _this.path = path;
        _this.element = _this.createElement(name);
        _this.children = {};
        return _this;
    }

    _createClass(NameSpace, [{
        key: 'detach',
        value: function detach() {
            delete this.element;
            detachEventPool(this.path);
        }
    }, {
        key: 'createElement',
        value: function createElement(name) {
            var idFromName = function idFromName(name) {
                return name.replace(/[^A-Za-z0-9/]/g, '').replace(/[/]/g, '-');
            };
            var elementFromName = function elementFromName(name) {
                return name[0] == '#' ? 'item' : name.toLowerCase().replace(/[^a-z0-9]/g, '');
            };

            var element = document.createElement(elementFromName(name));
            element.id = idFromName(name);

            return element;
        }
    }, {
        key: 'defineState',
        value: function defineState(stateDefinition) {
            var _this2 = this;

            this.__state || (this.__state = {});
            this.state = (0, _readOnly.readOnly)(this.__state);
            Object.getOwnPropertyNames(stateDefinition).forEach(function (property) {
                var setters = stateDefinition[property](_this2.__state);
                for (var i = 0; i < setters.length; i += 2) {
                    _this2.addEventListener(setters[i], setters[i + 1]);
                }
            });

            this.trigger(new DefinedEvent());
        }
    }]);

    return NameSpace;
}(_eventPool.EventPool);

var NameSpaceRoot = new NameSpace('data');

function getNameSpaceByPath(path) {
    var poolPath = path.split('/').slice(1);
    var currentPath = 'data';
    var eventPool = NameSpaceRoot;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = poolPath[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var poolName = _step.value;

            currentPath += '/' + poolName;
            if (!eventPool.children[poolName]) {
                var newPool = new NameSpace(poolName, currentPath);
                eventPool.children[poolName] = newPool;
                eventPool.element.appendChild(newPool.element);
            }
            eventPool = eventPool.children[poolName];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return eventPool;
};

function detachEventPool(path) {
    var poolPath = path.split('/').slice(1);
    var eventPool = NameSpaceRoot;
    var poolToDelete = poolPath.pop();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = poolPath[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var poolName = _step2.value;

            if (!eventPool.children[poolName]) {
                return false;
            }
            eventPool = eventPool.children[poolName];
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    if (eventPool.children[poolToDelete]) {
        delete eventPool.children[poolToDelete];
    }

    return true;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var GC = {
    components: new Map(),
    listeners: new Map(),
    observers: new Map(),
    elementAttribute: 'fiber-component-id'
};

GC.init = function () {
    this.observe(document.body);
    this.init = false;
};

GC.observe = function (element) {
    var _this = this;

    var observerId = (this.observers.size + 1).toString();

    if (element._GC_observerId) {
        return;
    }

    element._GC_observerId = observerId;

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.removedNodes) {
                mutation.removedNodes.forEach(function (node) {
                    _this.removeNode(node);
                });
            }
        });
    });

    observer.observe(element, { childList: true, subtree: true });

    this.observers.set(observerId, {
        element: element,
        observer: observer
    });
};

GC.removeNode = function (element) {
    var _this2 = this;

    if (!element.querySelectorAll) return;

    if (element._GC_observerId) {
        return;
    }

    var processNode = function processNode(view) {
        var componentId = view.attributes[_this2.elementAttribute].value;
        var component = _this2.components.get(componentId);

        component && _this2.destroy(component);
    };

    element.querySelectorAll('[' + this.elementAttribute + ']').forEach(processNode);
    if (element.attributes[this.elementAttribute]) {
        processNode(element);
    }
};

GC.registerComponent = function (component) {
    component.componentId = generateComponentId();
    this.components.set(component.componentId, component);
    this.listeners.set(component.componentId, []);

    component.view.setAttribute(this.elementAttribute, component.componentId);
    GC.init && GC.init();
};

GC.registerListener = function (component, element, event, callback) {
    if (!this.listeners.has(component.componentId)) return;

    this.listeners.get(component.componentId).push({
        element: element,
        eventName: extractEventName(event),
        callback: callback
    });
};

GC.destroy = function (component) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = this.listeners.get(component.componentId)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;

            listener.element.removeEventListener(listener.eventName, listener.callback);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    component.view = null;
    this.components.delete(component.componentId);
    this.listeners.delete(component.componentId);
};

exports.default = GC;


function extractEventName(event) {
    return typeof event == 'string' ? event : event.EventName;
}

var __id = 0;
// let __fullId = '';
function generateComponentId() {
    return (++__id).toString();
    // if(__id > 122) {
    //     __fullId = incrementStr(__fullId);
    //     __id = 97;
    // }
    // return __fullId + String.fromCharCode(__id);
}

function incrementStr(str) {
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] != 'z') {
            return str.substr(0, i) + String.fromCharCode(str.charCodeAt(i) + 1) + 'a'.repeat(str.length - i - 1);
        }
    }
    return 'a'.repeat(str.length + 1);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.defineEventType = defineEventType;
exports.eventOfType = eventOfType;
exports.basicEvent = basicEvent;
exports.defineEvent = defineEvent;

var _readOnly = __webpack_require__(6);

var _readOnly2 = _interopRequireDefault(_readOnly);

var _domain = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventId = 0;

var Event = function () {
    function Event() {
        _classCallCheck(this, Event);

        this.name = this.constructor.EventName;
    }

    _createClass(Event, [{
        key: 'event',
        value: function event() {
            if (!this.originalEvent) {
                this.originalEvent = new CustomEvent(this.name, {
                    detail: this,
                    bubbles: !this.constructor._cancelBubble,
                    cancelable: true
                });
            }
            return this.originalEvent;
        }
    }, {
        key: 'stopPropagation',
        value: function stopPropagation() {
            this.originalEvent && this.originalEvent.stopPropagation();
        }
    }, {
        key: 'preventDefault',
        value: function preventDefault() {
            this.originalEvent && this.originalEvent.preventDefault();
        }
    }], [{
        key: 'bubbles',
        value: function bubbles(_bubbles) {
            this._cancelBubble = !_bubbles;
            return this;
        }
    }, {
        key: 'alias',
        value: function alias(name) {
            this.EventName = name;
            return this;
        }
    }, {
        key: 'on',
        value: function on(namespace) {
            return {
                namespace: namespace,
                event: this
            };
        }
    }]);

    return Event;
}();

exports.Event = Event;

var EventAttributeError = function (_Error) {
    _inherits(EventAttributeError, _Error);

    function EventAttributeError(event, name, value, ParamType) {
        _classCallCheck(this, EventAttributeError);

        if (ParamType) {
            var _this = _possibleConstructorReturn(this, (EventAttributeError.__proto__ || Object.getPrototypeOf(EventAttributeError)).call(this, 'Type mismatch for Event \'' + event.name + '\' for attribute \'' + name + '\''));
        } else {
            var _this = _possibleConstructorReturn(this, (EventAttributeError.__proto__ || Object.getPrototypeOf(EventAttributeError)).call(this, 'Unexpected parameter for Event \'' + event.name + '\''));
        }
        _this.event = event;
        _this.name = name;
        _this.value = value;
        _this.type = ParamType;
        return _possibleConstructorReturn(_this);
    }

    return EventAttributeError;
}(Error);

function defineEventType(descriptor) {
    var propNames = Object.getOwnPropertyNames(descriptor);
    var DefinedEventClass = function (_Event) {
        _inherits(DefinedEventClass, _Event);

        function DefinedEventClass() {
            _classCallCheck(this, DefinedEventClass);

            var _this2 = _possibleConstructorReturn(this, (DefinedEventClass.__proto__ || Object.getPrototypeOf(DefinedEventClass)).call(this));

            var readonly = new _readOnly2.default(_this2);

            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
            }

            for (var i = 0; i < params.length; i++) {
                var paramName = propNames[i];
                if (paramName === undefined || descriptor[paramName] === undefined) {
                    throw new EventAttributeError(_this2, paramName, params[i]);
                }

                var _Optional$from = _domain.Optional.from(descriptor[paramName]),
                    _Optional$from2 = _slicedToArray(_Optional$from, 2),
                    optional = _Optional$from2[0],
                    ParamType = _Optional$from2[1];

                readonly.addProperty(paramName);

                if (optional && (params[i] === undefined || params[i] === null)) {
                    readonly.modifier[paramName] = params[i];
                } else if (ParamType.name === 'Mixed') {
                    readonly.modifier[paramName] = params[i];
                } else if (ParamType == Number || ParamType == String || ParamType == Boolean) {
                    readonly.modifier[paramName] = new ParamType(params[i]).valueOf();
                } else if (ParamType instanceof Object && !(params[i] instanceof ParamType)) {
                    throw new EventAttributeError(_this2, paramName, params[i], ParamType);
                } else {
                    readonly.modifier[paramName] = params[i];
                }
            }
            return _this2;
        }

        return DefinedEventClass;
    }(Event);
    return DefinedEventClass;
};

function eventOfType(EventType) {
    return function (_EventType) {
        _inherits(_class, _EventType);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        return _class;
    }(EventType).alias('Event' + ++eventId);
};

function basicEvent(name) {
    return function (_Event2) {
        _inherits(_class2, _Event2);

        function _class2() {
            _classCallCheck(this, _class2);

            return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
        }

        return _class2;
    }(Event).alias(name || 'Event' + ++eventId);
};

function defineEvent(EventType, alias) {
    return eventOfType(EventType).alias(alias);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentInterface = __webpack_require__(5);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _eventPool = __webpack_require__(0);

var _namespace = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataComponent = function (_ComponentInterface) {
    _inherits(DataComponent, _ComponentInterface);

    function DataComponent() {
        _classCallCheck(this, DataComponent);

        return _possibleConstructorReturn(this, (DataComponent.__proto__ || Object.getPrototypeOf(DataComponent)).apply(this, arguments));
    }

    _createClass(DataComponent, [{
        key: 'namespace',
        get: function get() {
            return this.eventPool;
        }
    }], [{
        key: 'attachTo',
        value: function attachTo(eventPool) {
            var instance = new this();

            instance.eventPool = eventPool instanceof _eventPool.EventPool ? eventPool : (0, _namespace.getNameSpaceByPath)(eventPool);

            instance.listen();

            return instance;
        }
    }]);

    return DataComponent;
}(_componentInterface2.default);

exports.default = DataComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventPool = __webpack_require__(0);

var _namespace = __webpack_require__(1);

var _eventFlow = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentInterface = function () {
    function ComponentInterface() {
        _classCallCheck(this, ComponentInterface);

        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
        }

        this.init.apply(this, params);
    }

    /**
    * called from component's constructor to initialize component instance
    * parameters are passed from the contrusctor or from the attachTo call
    -- keeping it for now but so far it seems unecessary --
    */


    _createClass(ComponentInterface, [{
        key: 'init',
        value: function init() {}

        /**
        * called after NameSpace/DOM is attached to the component to set up
        * its listeners
        * never gets any parameters
        */

    }, {
        key: 'listen',
        value: function listen() {}

        /**
        * access namespaces/flows from the component
        */

    }, {
        key: 'on',
        value: function on(target) {
            if (target instanceof _eventFlow.EventFlowType) {
                return this.flow(target);
            }

            return target instanceof _eventPool.EventPool || target instanceof _eventFlow.EventFlow ? target : (0, _namespace.getNameSpaceByPath)(target);
        }

        /**
        * starts a new flow of the given FlowType
        */

    }, {
        key: 'flow',
        value: function flow(flowType) {
            return new _eventFlow.EventFlow(flowType);
        }
    }]);

    return ComponentInterface;
}();

exports.default = ComponentInterface;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.readOnly = readOnly;

var _clone = __webpack_require__(7);

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function readOnly(original) {
    return original instanceof Object ? new Proxy(original, {
        get: function get(target, property) {
            return readOnly(target[property]);
        },
        set: function set() {
            return true;
        }
    }) : original;
}

var ReadOnly = function () {
    function ReadOnly(reader) {
        _classCallCheck(this, ReadOnly);

        this.reader = reader || {};
        this.modifier = {};
    }

    _createClass(ReadOnly, [{
        key: 'addProperty',
        value: function addProperty(name) {
            var _this = this;

            this.modifier[name] = null;
            Object.defineProperty(this.reader, name, {
                get: function get() {
                    return (0, _clone2.default)(_this.modifier[name]);
                },
                // get: () => readOnly(this.modifier[name]),
                enumerable: true
            });
        }
    }]);

    return ReadOnly;
}();

/*
    Interesting learning is in Chrome, Proxies are super fast so using them
    instead of cloning boosts the performance.
    However in Safari and Firefox Proxies seem to be lagging behind and make
    the app slower...

    For now I'm going to stick to the cloning implementation until this changes.
*/

exports.default = ReadOnly;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clone;
function clone(obj) {
    if (!(obj instanceof Object) || obj instanceof Function) {
        return obj;
    }
    if (obj instanceof Array) {
        return obj.map(function (item) {
            return clone(item);
        });
    }
    if (obj instanceof Number || obj instanceof String || obj instanceof Date || obj instanceof RegExp || obj instanceof Boolean) {
        return new obj.constructor(obj);
    }
    if (obj.clone instanceof Function) {
        return obj.clone();
    }

    var copied = {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.getOwnPropertyNames(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            copied[key] = clone(obj[key]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return copied;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventFlow = exports.EventFlowType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _event = __webpack_require__(3);

var _eventPool = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventFlowType = exports.EventFlowType = function EventFlowType() {
    _classCallCheck(this, EventFlowType);

    for (var _len = arguments.length, steps = Array(_len), _key = 0; _key < _len; _key++) {
        steps[_key] = arguments[_key];
    }

    this.steps = steps;

    steps.forEach(function (step) {
        if (!(step.namespace instanceof _eventPool.EventPool && step.event.EventName)) {
            throw new Error('wrong argument for Flow step!');
        }
    });
};

var EventFlow = exports.EventFlow = function () {
    function EventFlow(flowType) {
        var _this = this;

        _classCallCheck(this, EventFlow);

        this.steps = flowType.steps;
        this.currentEvent = null;
        this.currentNameSpace = null;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }

    _createClass(EventFlow, [{
        key: 'trigger',
        value: function trigger(fiberEvent) {
            var step = this.steps.shift();

            if (!step) {
                this.reject(fiberEvent);
            }
            if (!fiberEvent instanceof step.event) {
                this.reject(fiberEvent);
            }

            this.currentEvent = fiberEvent;
            this.currentNameSpace = step.namespace;

            fiberEvent.flow = this;

            this.currentNameSpace.trigger(fiberEvent);

            if (!this.steps.length) {
                this.resolve(this);
            }

            return this.promise;
        }
    }, {
        key: 'listen',
        value: function listen() {
            throw new Error("You can't set listeners on an EventFlow! (yet?)");
        }
    }]);

    return EventFlow;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _componentInterface = __webpack_require__(5);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _eventPool = __webpack_require__(0);

var _namespace = __webpack_require__(1);

var _DOM = __webpack_require__(10);

var _DOM2 = _interopRequireDefault(_DOM);

var _gc = __webpack_require__(2);

var _gc2 = _interopRequireDefault(_gc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UIComponent = function (_ComponentInterface) {
    _inherits(UIComponent, _ComponentInterface);

    function UIComponent() {
        _classCallCheck(this, UIComponent);

        return _possibleConstructorReturn(this, (UIComponent.__proto__ || Object.getPrototypeOf(UIComponent)).apply(this, arguments));
    }

    _createClass(UIComponent, [{
        key: 'render',
        value: function render() {
            if (this.constructor.template) {
                this.view = _DOM2.default.render(this.constructor.template);
            }

            this.listen();

            return this.view;
        }
    }, {
        key: 'getNameSpaceByPath',
        value: function getNameSpaceByPath() {
            return this.eventPool || (this.eventPool = _eventPool.EventPool.forComponent(this));
        }
    }, {
        key: 'on',
        value: function on(target) {
            target = _get(UIComponent.prototype.__proto__ || Object.getPrototypeOf(UIComponent.prototype), 'on', this).call(this, target);

            return target instanceof _eventPool.EventPool ? new EventPoolAccessor(this, target) : target;
        }
    }, {
        key: 'ui',
        value: function ui(query) {
            var element = _DOM2.default.getElement(query || this.view, this.view);
            return element ? new EventPoolAccessor(this, _eventPool.EventPool.forElement(element, this)) : null;
        }
    }, {
        key: 'view',
        get: function get() {
            return this._view;
        },
        set: function set(element) {
            this._view = element;
            this.getNameSpaceByPath().element = element;
            if (element) {
                _gc2.default.registerComponent(this);
            }
        }
    }, {
        key: 'namespace',
        get: function get() {
            return this.getNameSpaceByPath();
        }
    }], [{
        key: 'elementName',
        value: function elementName() {
            return this.name.replace('Component', '').replace(/[A-Z]/g, '-$&').toLowerCase().substr(1);
        }
    }, {
        key: 'withTemplate',
        value: function withTemplate(template) {
            return function (_ref) {
                _inherits(_class, _ref);

                function _class() {
                    _classCallCheck(this, _class);

                    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
                }

                _createClass(_class, null, [{
                    key: '__setTemplate',
                    value: function __setTemplate(template) {
                        this.template = template;
                        return this;
                    }
                }]);

                return _class;
            }(this).__setTemplate(template);
        }
    }, {
        key: 'attachTo',
        value: function attachTo(element) {
            element = _DOM2.default.getElement(element);

            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var instance = new (Function.prototype.bind.apply(this, [null].concat(params)))();
            instance._attached = true;

            var renderedTemplate = this.template ? _DOM2.default.render(this.template) : null;

            if (!renderedTemplate) {
                instance.view = element;
            } else if (renderedTemplate.tagName == element.tagName) {
                element.replaceWith(renderedTemplate);
                instance.view = renderedTemplate;
            } else {
                instance.view = element;
                instance.view.append(renderedTemplate);
            }
            instance.listen();

            return instance;
        }
    }, {
        key: 'populate',
        value: function populate(parentElement) {
            var _this3 = this;

            if (!parentElement instanceof Element) {
                return false;
            }

            var elements = parentElement.querySelectorAll(this.elementName());
            if (parentElement.tagName.toLowerCase() == this.elementName()) {
                elements = [parentElement];
            }
            elements.forEach(function (element) {
                _this3.attachTo(element);
            });

            return elements;
        }
    }]);

    return UIComponent;
}(_componentInterface2.default);

var EventPoolAccessor = function () {
    function EventPoolAccessor(component, pool) {
        _classCallCheck(this, EventPoolAccessor);

        this.component = component;
        this.eventPool = pool;
    }

    _createClass(EventPoolAccessor, [{
        key: 'listen',
        value: function listen() {
            var _this4 = this,
                _arguments = arguments;

            var _loop = function _loop(i) {
                var listener = _this4.eventPool.addEventListener(_arguments.length <= i ? undefined : _arguments[i], _arguments.length <= i + 1 ? undefined : _arguments[i + 1]);
                listener.events.forEach(function (event) {
                    return _gc2.default.registerListener(_this4.component, _this4.eventPool.element, event, listener.callback);
                });
            };

            for (var i = 0; i < arguments.length; i += 2) {
                _loop(i);
            }
        }
    }, {
        key: 'trigger',
        value: function trigger(event) {
            return this.eventPool.trigger(event);
        }
    }, {
        key: 'triggerSync',
        value: function triggerSync(event) {
            return this.eventPool.triggerSync(event);
        }
    }]);

    return EventPoolAccessor;
}();

exports.default = UIComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gc = __webpack_require__(2);

var _gc2 = _interopRequireDefault(_gc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DOM = {};

DOM.getElement = function (element, root) {
    return typeof element == 'string' ? (root || document).querySelector(element) : element;
};

DOM.render = function (template, wrapper) {
    if (template instanceof Element) {
        return template;
    }
    var parent = document.createElement(wrapper || 'div');
    parent.innerHTML = template;
    if (!wrapper && parent.childElementCount == 1) {
        return parent.firstElementChild;
    }

    return parent;
};

DOM.renderWithComponents = function (template) {
    for (var _len = arguments.length, components = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        components[_key - 1] = arguments[_key];
    }

    template = DOM.render(template);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var component = _step.value;

            component.populate(template);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return template;
};

DOM.detach = function (element) {
    _gc2.default.observe(element);
    element.remove();
};

exports.default = DOM;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gc = __webpack_require__(2);

var _gc2 = _interopRequireDefault(_gc);

var _dataComponent = __webpack_require__(4);

var _dataComponent2 = _interopRequireDefault(_dataComponent);

var _uiComponent = __webpack_require__(9);

var _uiComponent2 = _interopRequireDefault(_uiComponent);

var _namespace = __webpack_require__(1);

var _event = __webpack_require__(3);

var _eventFlow = __webpack_require__(8);

var _clone = __webpack_require__(7);

var _clone2 = _interopRequireDefault(_clone);

var _DOM = __webpack_require__(10);

var _DOM2 = _interopRequireDefault(_DOM);

var _debugger = __webpack_require__(13);

var _debugger2 = _interopRequireDefault(_debugger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fiber = {};

// garbage Collector

Fiber.GC = _gc2.default;

// DataComponent

Fiber.DataComponent = _dataComponent2.default;

// UIComponent

Fiber.UIComponent = _uiComponent2.default;

// eventPool

Fiber.namespace = _namespace.getNameSpaceByPath;
Fiber.NameSpace = {
    create: _namespace.getNameSpaceByPath,
    Defined: _namespace.DefinedEvent
};

// events

Fiber.Event = _event.Event;
Fiber.defineEvent = _event.defineEvent;
Fiber.defineEventType = _event.defineEventType;
Fiber.basicEvent = _event.basicEvent;

// event-flows

Fiber.EventFlow = {
    define: function define() {
        for (var _len = arguments.length, steps = Array(_len), _key = 0; _key < _len; _key++) {
            steps[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(_eventFlow.EventFlowType, [null].concat(steps)))();
    }
};

// clone

Fiber.clone = _clone2.default;

// DOM

Fiber.DOM = _DOM2.default;

// Debugger

Fiber.Debugger = _debugger2.default;

// System events
Fiber.System = (0, _namespace.getNameSpaceByPath)('data/system');
Fiber.System.Ready = (0, _event.basicEvent)('System:Ready');
var System = Fiber.DataComponent.attachTo(Fiber.System);

Fiber.app = function (startupScript) {
    startupScript();
    System.on(Fiber.System).trigger(new Fiber.System.Ready());
};

exports.default = Fiber;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Optional = exports.Optional = function Optional(value) {
  return { $isOptional: true, value: value };
};
Optional.from = function (obj) {
  return obj.$isOptional ? [true, obj.value] : [false, obj];
};

var Mixed = exports.Mixed = function Mixed() {
  _classCallCheck(this, Mixed);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _componentInterface = __webpack_require__(5);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _uiComponent = __webpack_require__(9);

var _uiComponent2 = _interopRequireDefault(_uiComponent);

var _eventPool = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Debugger = {};
var actor = null;

var boldStyle = 'font-weight: bold; color: black;';
var triggeredStyle = 'font-weight: bold; color: navy;';
var eventStyle = 'font-weight: normal; color: red;';
var componentStyle = 'font-weight: bold; color: #2D602D;';
var handlerStyle = 'font-weight: bold; color: #d9534f;';
var normalStyle = 'font-weight: normal;';

Debugger.init = function () {

    // .on(), .ui() and .flow()
    _componentInterface2.default.prototype.$$on = _componentInterface2.default.prototype.on;
    _componentInterface2.default.prototype.on = function (path) {
        actor = this;
        return this.$$on(path);
    };
    _uiComponent2.default.prototype.$$ui = _uiComponent2.default.prototype.ui;
    _uiComponent2.default.prototype.ui = function (path) {
        actor = this;
        return this.$$ui(path);
    };
    _componentInterface2.default.prototype.$$flow = _componentInterface2.default.prototype.flow;
    _componentInterface2.default.prototype.flow = function (eventFlow) {
        actor = this;
        return this.$$flow(eventFlow);
    };

    // EventPool
    _eventPool.EventPool.prototype.$$triggerSync = _eventPool.EventPool.prototype.triggerSync;
    _eventPool.EventPool.prototype.triggerSync = function (fiberEvent) {
        var poolName = this.name && 'data/' + this.name || 'DOM';
        var actorName = actor.constructor.name;
        if (actorName.length == 1) {
            actorName = 'FiberJS';
        }

        console.log(tab() + '%c' + fiberEvent.name + ' %ctriggered on %c' + poolName + '%c by %c' + actorName, triggeredStyle, normalStyle, boldStyle, normalStyle, boldStyle);
        if (Debugger.showEvents) {
            console.log(fiberEvent);
        }
        return this.$$triggerSync(fiberEvent);
    };

    _eventPool.EventPool.prototype.$$addEventListener = _eventPool.EventPool.prototype.addEventListener;
    _eventPool.EventPool.prototype.addEventListener = function (fiberEvent, handler) {
        var nativeEvent = typeof fiberEvent == 'string';
        var eventName = nativeEvent ? fiberEvent : fiberEvent.EventName;
        var boundActor = actor.constructor.name;
        var boundView = actor.view;

        var debugHandler = function debugHandler(event) {
            if (nativeEvent) {
                console.log(tab() + '%c' + eventName.replace(' ', '/') + '%c was triggered on ' + boundActor, triggeredStyle, normalStyle);
            } else {
                boundView && Debugger.showView ? console.log('' + tab() + boundActor + ' listening for %c' + eventName, boundView, eventStyle) : console.log(tab() + '%c' + boundActor + '%c listening for %c' + eventName, componentStyle, normalStyle, eventStyle);
            }
            console.log(tab() + '%c' + handlerToString(handler) + '%c is called by ' + boundActor, handlerStyle, normalStyle);
            return handler(event);
        };
        return this.$$addEventListener(fiberEvent, debugHandler);
    };
};

function handlerToString(handler) {
    if (handler.name) {
        return handler.name;
    }
    try {
        return handler.toString().match(/_this[0-9][.]([^(]*)[(]/).pop();
    } catch (e) {
        return '[inline method]';
    }
}

function tab() {
    return " "; //.repeat(EventPool.depth * 4);
}

exports.default = Debugger;

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NameSpace = {
    System: _fiber2.default.namespace('data/system'),
    Todo: _fiber2.default.namespace('data/todo')
};

exports.default = NameSpace;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _todo = __webpack_require__(6);

var _todo2 = _interopRequireDefault(_todo);

var _todoList = __webpack_require__(7);

var _todoList2 = _interopRequireDefault(_todoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Events = {};

Events.Todo = _todo2.default;
Events.TodoList = _todoList2.default;

exports.default = Events;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function () {
    function Todo(properties) {
        _classCallCheck(this, Todo);

        this.id = properties.id;
        this.title = properties.title;
        this.state = properties.state || Todo.Active;
    }

    _createClass(Todo, [{
        key: 'clone',
        value: function clone() {
            return new Todo(this);
        }
    }, {
        key: 'completed',
        get: function get() {
            return this.state == Todo.Completed;
        }
    }]);

    return Todo;
}();

Todo.Active = 'active';
Todo.Completed = 'completed';

exports.default = Todo;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _todo = __webpack_require__(5);

var _todo2 = _interopRequireDefault(_todo);

var _todoList = __webpack_require__(9);

var _todoList2 = _interopRequireDefault(_todoList);

var _newTodo = __webpack_require__(16);

var _newTodo2 = _interopRequireDefault(_newTodo);

var _todoToolbar = __webpack_require__(17);

var _todoToolbar2 = _interopRequireDefault(_todoToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Debugger
// Fiber.Debugger.showEvents = true;
// Fiber.Debugger.showView = true;
// Fiber.Debugger.init();

_fiber2.default.app(function () {
    // data components
    _todo2.default.attachTo(_namespace2.default.Todo);

    // ui components
    _newTodo2.default.attachTo('#new-todo');
    _todoList2.default.attachTo('#todo-list');
    _todoToolbar2.default.attachTo('#footer');
});

// for debugging
window.Fiber = _fiber2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _todo = __webpack_require__(3);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TODOS_KEY = 'TodoMVC-todos';

var TodoComponent = function (_Fiber$DataComponent) {
    _inherits(TodoComponent, _Fiber$DataComponent);

    function TodoComponent() {
        _classCallCheck(this, TodoComponent);

        return _possibleConstructorReturn(this, (TodoComponent.__proto__ || Object.getPrototypeOf(TodoComponent)).apply(this, arguments));
    }

    _createClass(TodoComponent, [{
        key: 'init',
        value: function init() {
            this.todos = new Map();
            this._id = 0;
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Todo).listen(_events2.default.Todo.Add, function (event) {
                return _this2.add(event.title);
            }, _events2.default.Todo.Update, function (event) {
                return _this2.update(event.todo);
            }, _events2.default.Todo.Remove, function (event) {
                return _this2.remove(event.todo);
            }, _events2.default.TodoList.Request, function (event) {
                return _this2.prepareList(event);
            });
        }
    }, {
        key: 'add',
        value: function add(title) {
            var item = new _todo2.default({
                title: title,
                id: ++this._id
            });

            this.todos.set(item.id, item);

            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.Todo.Added(item));
            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.TodoList.ActiveCount(this.activeCount()));
        }
    }, {
        key: 'update',
        value: function update(todo) {
            var item = new _todo2.default(todo);
            this.todos.set(item.id, item);
            var UpdateEvent = _events2.default.Todo.Updated(item.id);
            this.on(_namespace2.default.Todo).triggerSync(new UpdateEvent(item));
            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.TodoList.ActiveCount(this.activeCount()));
        }
    }, {
        key: 'remove',
        value: function remove(todo) {
            var item = new _todo2.default(todo);
            this.todos.delete(todo.id);
            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.Todo.Removed(item));
            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.TodoList.ActiveCount(this.activeCount()));
        }
    }, {
        key: 'prepareList',
        value: function prepareList(requestEvent) {
            var list = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.todos.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        k = _step$value[0],
                        todo = _step$value[1];

                    if (!requestEvent.state || todo.state == requestEvent.state) {
                        list.push(new _todo2.default(todo));
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.TodoList.Ready(list));
        }
    }, {
        key: 'activeCount',
        value: function activeCount() {
            var activeCount = 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.todos.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        k = _step2$value[0],
                        todo = _step2$value[1];

                    if (todo.state == _todo2.default.Active) {
                        ++activeCount;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return activeCount;
        }
    }]);

    return TodoComponent;
}(_fiber2.default.DataComponent);

exports.default = TodoComponent;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _todo = __webpack_require__(3);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoEvent = _fiber2.default.defineEventType({
    todo: _todo2.default
});

var AddTodo = _fiber2.default.defineEventType({
    title: String
});

var TodoEvents = {};
TodoEvents.Add = _fiber2.default.defineEvent(AddTodo, 'Todo:Add');
TodoEvents.Added = _fiber2.default.defineEvent(TodoEvent, 'Todo:Added');

TodoEvents.Update = _fiber2.default.defineEvent(TodoEvent, 'Todo:Update');
TodoEvents.Updated = function (id) {
    return _fiber2.default.defineEvent(TodoEvent, 'Todo:' + id + ':Updated');
};

TodoEvents.Remove = _fiber2.default.defineEvent(TodoEvent, 'Todo:Remove');
TodoEvents.Removed = _fiber2.default.defineEvent(TodoEvent, 'Todo:Removed');

exports.default = TodoEvents;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _domain = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = _fiber2.default.defineEventType({
    todos: Array
});

var TodoListRequest = _fiber2.default.defineEventType({
    state: (0, _domain.Optional)(String)
});

var ActiveCount = _fiber2.default.defineEventType({
    activeCount: Number
});

TodoList.Filter = _fiber2.default.defineEvent(TodoListRequest, 'TodoList:Filter');
TodoList.Request = _fiber2.default.defineEvent(TodoListRequest, 'TodoList:Request');
TodoList.Ready = _fiber2.default.defineEvent(TodoList, 'TodoList:Ready');
TodoList.ActiveCount = _fiber2.default.defineEvent(ActiveCount, 'TodoList:ActiveCount');

exports.default = TodoList;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fiber", [], factory);
	else if(typeof exports === 'object')
		exports["fiber"] = factory();
	else
		root["fiber"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Optional = exports.Optional = function Optional(value) {
  return { $isOptional: true, value: value };
};
Optional.from = function (obj) {
  return obj.$isOptional ? [true, obj.value] : [false, obj];
};

var Mixed = exports.Mixed = function Mixed() {
  _classCallCheck(this, Mixed);
};

/***/ })
/******/ ]);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _todoItem = __webpack_require__(10);

var _todoItem2 = _interopRequireDefault(_todoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoListComponent = function (_Fiber$UIComponent) {
    _inherits(TodoListComponent, _Fiber$UIComponent);

    function TodoListComponent() {
        _classCallCheck(this, TodoListComponent);

        return _possibleConstructorReturn(this, (TodoListComponent.__proto__ || Object.getPrototypeOf(TodoListComponent)).apply(this, arguments));
    }

    _createClass(TodoListComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Todo).listen(_events2.default.Todo.Added, function (event) {
                return _this2.addTodo(event.todo);
            }, _events2.default.Todo.Removed, function (event) {
                return _this2.removeTodo(event.todo);
            }, _events2.default.TodoList.Ready, function (event) {
                return _this2.showTodoList(event.todos);
            });
        }
    }, {
        key: 'addTodo',
        value: function addTodo(todo) {
            var todoComponent = new _todoItem2.default(todo);
            var newItem = document.createElement('li');
            newItem.id = 'todo-' + todo.id;
            newItem.appendChild(todoComponent.render());
            this.view.appendChild(newItem);
        }
    }, {
        key: 'removeTodo',
        value: function removeTodo(todo) {
            this.view.querySelector('#todo-' + todo.id).remove();
        }
    }, {
        key: 'clearTodos',
        value: function clearTodos() {
            this.view.innerHTML = "";
        }
    }, {
        key: 'showTodoList',
        value: function showTodoList(todos) {
            this.clearTodos();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var todo = _step.value;

                    this.addTodo(todo);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return TodoListComponent;
}(_fiber2.default.UIComponent);

exports.default = TodoListComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _todo = __webpack_require__(3);

var _todo2 = _interopRequireDefault(_todo);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _template = __webpack_require__(11);

var _template2 = _interopRequireDefault(_template);

var _todo3 = __webpack_require__(12);

var _todo4 = _interopRequireDefault(_todo3);

var _PatchIt = __webpack_require__(15);

var _PatchIt2 = _interopRequireDefault(_PatchIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var todoTemplate = _PatchIt2.default.template(_template2.default, _todo4.default);

var ENTER = 13,
    ESCAPE = 27;

var TodoItemComponent = function (_Fiber$UIComponent) {
    _inherits(TodoItemComponent, _Fiber$UIComponent);

    function TodoItemComponent() {
        _classCallCheck(this, TodoItemComponent);

        return _possibleConstructorReturn(this, (TodoItemComponent.__proto__ || Object.getPrototypeOf(TodoItemComponent)).apply(this, arguments));
    }

    _createClass(TodoItemComponent, [{
        key: 'init',
        value: function init(todo) {
            this.todo = todo;
            this.view = todoTemplate.render(this.todo);
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Todo).listen(_events2.default.Todo.Updated(this.todo.id), function (event) {
                return _this2.update(event.todo);
            });
            this.ui('label').listen('dblclick', function (event) {
                return _this2.setEditMode(true);
            });
            this.ui('.edit').listen('keyup', function (event) {
                return _this2.onEditorKeyUp(event);
            }, 'blur', function (event) {
                return _this2.cancelEditor();
            });
            this.ui('.toggle').listen('click', function (event) {
                return _this2.toggleState(event);
            });
            this.ui('.destroy').listen('click', function (event) {
                return _this2.destroy();
            });
        }
    }, {
        key: 'toggleState',
        value: function toggleState(event) {
            this.todo.state = this.view.$.toggle.checked ? _todo2.default.Completed : _todo2.default.Active;

            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.Todo.Update(this.todo));
        }
    }, {
        key: 'setEditMode',
        value: function setEditMode(editing) {
            this.view.className = this.todo.state + ' ' + (editing ? 'editing' : '');
            editing && this.view.$.editor.focus();
        }
    }, {
        key: 'onEditorKeyUp',
        value: function onEditorKeyUp(event) {
            if (event.keyCode == ENTER) {
                this.todo.title = this.view.$.editor.value;
                if (this.view.$.editor.value) {
                    this.on(_namespace2.default.Todo).triggerSync(new _events2.default.Todo.Update(this.todo));
                } else this.destroy();
            } else if (event.keyCode == ESCAPE) {
                this.cancelEditor();
            }
        }
    }, {
        key: 'cancelEditor',
        value: function cancelEditor() {
            this.setEditMode(false);
            this.view.$.editor.value = this.todo.title;
        }
    }, {
        key: 'update',
        value: function update(todo) {
            this.setEditMode(false);
            this.view.apply(todo);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.Todo.Remove(this.todo));
        }
    }]);

    return TodoItemComponent;
}(_fiber2.default.UIComponent);

exports.default = TodoItemComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<todo>\n    <input var=\"toggle\" class=\"toggle\" type=\"checkbox\"/>\n    <label var=\"label\"></label>\n    <button var=\"destroy\" class=\"destroy\"></button>\n    <input var=\"editor\" class=\"edit\" type=\"text\"/>\n</todo>\n";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _marked = __webpack_require__(13);

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoPatch = function todoPatch(view) {
    return {
        title: function title(_title) {
            view.$.label.innerHTML = (0, _marked2.default)(_title).replace(/<p>|<\/p>/g, '');
            view.$.editor.value = _title;
        },
        // title : [ view.$.label, view.$.editor ],
        state: function state(_state, todo) {
            view.className = _state;
            view.$.toggle.checked = todo.completed;
        }
    };
};
exports.default = todoPatch;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities 
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const PatchIt = {};

PatchIt.template = function(html, patch) {
    return new PatchTemplate(html, patch);
};

class PatchTemplate {
    constructor(html, patch) {
        this.html = this.processTemplate(html);
        this.patch = patch;
    }

    render(state) {
        const view = this.html.cloneNode(true);
        PatchIt.assignVariables(view);

        const viewPatch = new ViewPatch(view, this.patch);
        view.apply = (state) => viewPatch.apply(state);

        state && viewPatch.apply(state);
        return view;
    }

    processTemplate(html) {
        return typeof html == 'string'
            ? generateDOM(html)
            : html;
    }
}


class ViewPatch {
    constructor(view, patch) {
        this.view = view;
        this.patch = patch(view);
        this.state = {};

        this.methodify();
    }

    apply(state) {
        let changes = this.process(state);

        for(let key in changes) {
            if(!this.patch[key]) continue;

            let change = changes[key];
            this.patch[key](change, state);
        }
    }

    process(newState) {
        const changes = {};
        const allKeys = new Set();
        Object.getOwnPropertyNames(this.state)
            .concat(Object.getOwnPropertyNames(newState))
            .forEach((key)=>{
                allKeys.add(key);
            });

        for(let key of allKeys) {
            if(this.state[key] != newState[key]) {
                changes[key] = newState[key];
            }
        }
        this.state = clone(newState);
        return changes;
    }

    methodify() {
        for(let key of Object.getOwnPropertyNames(this.patch)) {
            if(this.patch[key] instanceof Array) {
                const elements = this.patch[key];
                this.patch[key] = (value) => {
                    for(let element of elements) {
                        updateElement(element, value);
                    }
                };
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (PatchIt);

function updateElement(element, value) {
    const setProperty = (prop) => {
        return typeof element[prop] == 'undefined'
            ? false
            : (element[prop] = value)
            ;
    };

    setProperty('value') || setProperty('textContent');
}

PatchIt.assignVariables =  parentElement => {
    parentElement.$ || (parentElement.$ = {});
    if(parentElement.attributes['var']) {
        parentElement.$[parentElement.attributes['var'].value] = parentElement;
    }
    parentElement.querySelectorAll('[var]').forEach((element) => {
        parentElement.$[element.attributes['var'].value] = element;
    });

    return parentElement;
};

function generateDOM(html) {
    var parent = document.createElement('div');
    parent.innerHTML = html;

    if(parent.childElementCount == 1) {
        return parent.firstElementChild;
    }

    return parent;
}

function clone(obj) {
    if(obj instanceof Array) return obj.slice();

    const copied = {};

    for(let key of Object.getOwnPropertyNames(obj)) {
        copied[key] = (typeof obj[key] == 'object') ? clone(obj[key]) : obj[key];
    }

    return copied;
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENTER = 13;

var NewTodoComponent = function (_Fiber$UIComponent) {
    _inherits(NewTodoComponent, _Fiber$UIComponent);

    function NewTodoComponent() {
        _classCallCheck(this, NewTodoComponent);

        return _possibleConstructorReturn(this, (NewTodoComponent.__proto__ || Object.getPrototypeOf(NewTodoComponent)).apply(this, arguments));
    }

    _createClass(NewTodoComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.ui(this.view).listen('keypress', function (event) {
                return _this2.onKeyPress(event);
            });
        }
    }, {
        key: 'onKeyPress',
        value: function onKeyPress(event) {
            var code = event.charCode || event.keyCode;
            if (code == ENTER && this.view.value.length) {
                this.on(_namespace2.default.Todo).triggerSync(new _events2.default.Todo.Add(this.view.value));
                this.view.value = "";
            }
        }
    }]);

    return NewTodoComponent;
}(_fiber2.default.UIComponent);

exports.default = NewTodoComponent;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoToolbarComponent = function (_Fiber$UIComponent) {
    _inherits(TodoToolbarComponent, _Fiber$UIComponent);

    function TodoToolbarComponent() {
        _classCallCheck(this, TodoToolbarComponent);

        return _possibleConstructorReturn(this, (TodoToolbarComponent.__proto__ || Object.getPrototypeOf(TodoToolbarComponent)).apply(this, arguments));
    }

    _createClass(TodoToolbarComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Todo).listen(_events2.default.TodoList.ActiveCount, function (event) {
                return _this2.refreshCounter(event.activeCount);
            });
            this.ui('#filters').listen('click', function (event) {
                return _this2.filterClick(event);
            });

            this.counter = this.view.querySelector('#todo-count strong');
        }
    }, {
        key: 'filterClick',
        value: function filterClick(event) {
            event.preventDefault();
            var state = event.target.id.substring(7);
            state == 'all' && (state = null);
            this.on(_namespace2.default.Todo).triggerSync(new _events2.default.TodoList.Request(state));

            this.view.querySelector('.selected').className = '';
            event.target.className = 'selected';
        }
    }, {
        key: 'refreshCounter',
        value: function refreshCounter(activeCount) {
            this.counter.textContent = activeCount;
        }
    }]);

    return TodoToolbarComponent;
}(_fiber2.default.UIComponent);

exports.default = TodoToolbarComponent;

/***/ })
/******/ ]);