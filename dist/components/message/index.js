(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(4);
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class=xcui-message :class=styleClass transition=fade v-show=show> <span class="xcui-message-icon glyphicon" :class=iconClass></span> <p class=xcui-message-desc> {{content}} </p> </div> ';
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-message",
            props: {
                show: {
                    type: Boolean,
                    default: false
                },
                type: {
                    type: String,
                    default: "info"
                },
                content: {
                    type: String,
                    default: ""
                },
                duration: {
                    type: Number,
                    default: 3e3
                }
            },
            computed: {
                styleClass: function styleClass() {
                    return "xcui-message-" + this.type;
                },
                iconClass: function iconClass() {
                    switch (this.type) {
                      case "info":
                        return "glyphicon-info-sign";

                      case "success":
                        return "glyphicon-ok";

                      case "error":
                        return "glyphicon-remove";

                      case "warning":
                        return "glyphicon-warning-sign";

                      default:
                        return "glyphicon-info-sign";
                    }
                }
            },
            data: function data() {
                return {
                    timer: null,
                    closed: false
                };
            },
            methods: {
                clearTimer: function clearTimer() {
                    clearTimeout(this.timer);
                },
                resetTimer: function resetTimer() {
                    var _this = this;
                    if (!this.duration) {
                        this.duration = 3e3;
                    }
                    this.timer = setTimeout(function() {
                        _this.show = false;
                    }, this.duration);
                },
                onShow: function onShow() {
                    this.show = true;
                    this.clearTimer();
                    this.resetTimer();
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
        __webpack_require__(1);
        __vue_script__ = __webpack_require__(3);
        __vue_template__ = __webpack_require__(2);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
        if (__vue_template__) {
            __vue_options__.template = __vue_template__;
        }
        if (!__vue_options__.computed) __vue_options__.computed = {};
        Object.keys(__vue_styles__).forEach(function(key) {
            var module = __vue_styles__[key];
            __vue_options__.computed[key] = function() {
                return module;
            };
        });
    } ]);
});

