webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */


    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Retrieve the error message for a field.
         *
         * @param {string} field
         */

    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors;
        }

        /**
         * Clear one or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (field) {
                delete this.errors[field];

                return;
            }

            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, _) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Request__ = __webpack_require__(26);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Form = function (_Request) {
    _inherits(Form, _Request);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: "reset",


        /**
         * Reset the form fields.
         */
        value: function reset() {
            for (var field in this.originalData) {
                Vue.set(this, field, this.originalData[field]);
            }

            this.errors.clear();
        }
    }, {
        key: "empty",
        value: function empty() {
            for (var field in this.emptyData) {
                Vue.set(this, field, this.emptyData[field]);
            }

            this.errors.clear();
        }
    }, {
        key: "fill",
        value: function fill(data) {

            this.reset();

            for (var field in this.data()) {
                if (data[field]) {
                    Vue.set(this, field, data[field]);
                }
            }
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: "onSuccess",
        value: function onSuccess(data) {
            if (this.resetData) {
                this.reset();
            }
            this.errors.clear();
        }
    }, {
        key: "diff",
        value: function diff() {
            var _this2 = this;

            return _.reduce(this.data(), function (result, value, key) {
                return _.isEqual(value, _this2.originalData[key]) ? result : result.concat(key);
            }, []);
        }
    }]);

    return Form;
}(__WEBPACK_IMPORTED_MODULE_0__Request__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Form);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(24);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Request = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object, FormData} data
     * @param {boolean} reset
     */
    function Request(data, reset) {
        _classCallCheck(this, Request);

        this.resetData = reset || false;

        if (data && !_.isObject(data)) {
            this["value"] = data;
        } else {
            this.emptyData = data;
            this.originalData = data;
        }

        if (data instanceof FormData) {
            this.formData = data;
        } else {
            for (var field in data) {
                this[field] = data[field];
            }
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
    }

    /**
     * Fetch all relevant data for the form.
     */


    _createClass(Request, [{
        key: "data",
        value: function data() {
            if (this.formData) {
                return this.formData;
            }

            var data = Object.assign({}, this);

            delete data.errors;
            delete data.resetData;
            delete data.emptyData;
            delete data.originalData;

            return data;
        }

        /**
         * Send a GET request to the given URL.
         *
         * @param {string} url
         * @param {string|array} mutations
         * @param {array} config
         */

    }, {
        key: "get",
        value: function get(url, mutations, config) {
            for (var value in config) {
                this[value] = config[value];
            }

            return this.submit("get", this.dataQueryString() ? url + "?" + this.dataQueryString() : url, mutations);
        }

        /**
         * Send a POST request to the given URL.
         *
         * @param {string} url
         * @param {string|array} mutations
         * @param {array} config
         */

    }, {
        key: "post",
        value: function post(url, mutations, config) {
            return this.submit("post", url, mutations, config);
        }

        /**
         * Send a PUT request to the given URL.
         *
         * @param {string} url
         * @param {string|array} mutations
         * @param {array} config
         */

    }, {
        key: "put",
        value: function put(url, mutations, config) {
            return this.submit("put", url, mutations, config);
        }

        /**
         * Send a PATCH request to the given URL.
         *
         * @param {string} url
         * @param {string|array} mutations
         * @param {array} config
         */

    }, {
        key: "patch",
        value: function patch(url, mutations, config) {
            return this.submit("patch", url, mutations, config);
        }

        /**
         * Send a DELETE request to the given URL.
         *
         * @param {string} url
         * @param {string|array} mutations
         * @param {array} config
         */

    }, {
        key: "delete",
        value: function _delete(url, mutations, config) {
            return this.submit("delete", url, mutations, config);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         * @param {string|array} mutations
         * @param {array} config
         */

    }, {
        key: "submit",
        value: function submit(requestType, url, mutations, config) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var data = _this.formData ? _this.formData : _this.data();

                axios[requestType](url, data, config).then(function (response) {

                    window.URL.revokeObjectURL(url);
                    _this.onSuccess(response.data);

                    if (!_this.resetData) {
                        _this.setOriginalData();
                    }

                    if (_.isString(mutations)) {
                        mutations = [mutations];
                    }

                    if (mutations && mutations.length) {
                        _.each(mutations, function (mutation) {
                            app.$store.commit(mutation, {
                                response: response.data,
                                requestData: _this.data()
                            });
                        });
                    }

                    resolve(response.data);
                }).catch(function (error) {
                    if (error.response) {
                        app.handleApiError(error.response);
                        _this.onFail(error.response.data);
                        reject(error.response.data);
                    } else {
                        console.error(error);
                        reject(error.response);
                    }
                });
            });
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: "onSuccess",
        value: function onSuccess(data) {
            this.errors.clear();
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} errors
         */

    }, {
        key: "onFail",
        value: function onFail(errors) {
            this.errors.record(errors);
        }

        /**
         * Sets the current data to the original data
         */

    }, {
        key: "setOriginalData",
        value: function setOriginalData() {
            this.originalData = this.data();
        }

        /**
         * Generates a query string for the data given
         */

    }, {
        key: "dataQueryString",
        value: function dataQueryString() {
            var str = [];
            var data = this.data();
            for (var datum in data) {
                if (data.hasOwnProperty(datum)) {
                    str.push(encodeURIComponent(datum) + "=" + encodeURIComponent(data[datum]));
                }
            }return str.join("&");
        }
    }]);

    return Request;
}();

/* harmony default export */ __webpack_exports__["a"] = (Request);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollToTop; });
var scrollToTop = function scrollToTop(scrollDuration) {
    var scrollCount = 0;
    var oldTimestamp = performance.now();
    var cosParameter = window.scrollY / 2;

    function step(newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) {
            window.scrollTo(0, 0);
        }
        if (window.scrollY === 0) {
            return;
        }

        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
};

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(378),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Blogs/Components/Comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Comment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1937e57f", Component.options)
  } else {
    hotAPI.reload("data-v-1937e57f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(400),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Blogs/Components/CommentForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CommentForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e416ee3a", Component.options)
  } else {
    hotAPI.reload("data-v-e416ee3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_color__);



__webpack_require__(201);
__webpack_require__(204);
__webpack_require__(211);



window.store = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */];

var app = new Vue({
    store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */],
    router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */]
});

window.app = app;

app.$mount('#app');
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 149 */,
/* 150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        logout: function logout() {
            this.$store.dispatch('auth/logout');
        }
    }
});

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['notification'],
    data: function data() {
        return {
            timer: null
        };
    },
    created: function created() {
        var timeout = this.notification.hasOwnProperty('timeout') ? this.notification.timeout : true;
        if (timeout) {
            this.timer = setTimeout(function () {
                this.close(this.notification);
            }.bind(this), this.notification.timeout);
        }
    },

    methods: {
        close: function close(notification) {
            clearTimeout(this.timer);
            this.$store.dispatch('notifications/remove', notification);
        }
    }
});

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification_vue__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Notification_vue__);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Notification: __WEBPACK_IMPORTED_MODULE_0__Notification_vue___default.a
    },
    computed: {
        notifications: function notifications() {
            return this.$store.state.notifications.notifications;
        }
    },
    methods: {
        removeNotification: function removeNotification(notification) {
            this.$store.dispatch('notifications/remove', notification);
        }
    }
});

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['commit', 'refresh', 'pagination'],
    watch: {
        "pagination.per_page": function paginationPer_page(newPerPage, oldPerPage) {
            if (oldPerPage && newPerPage !== oldPerPage) {
                this.goToPage(this.currentPage);
            }
        },
        'refresh': function refresh(value) {
            if (value) {
                var page = this.currentPage > 0 ? this.currentPage : 1;
                this.goToPage(page);
            }
            this.$emit('update.refresh', false);
        }
    },
    methods: {
        goToPage: function goToPage(page) {

            if (page === 1 || page !== 0 && page <= this.lastPage) {

                var paginationUrl = document.createElement('a');
                paginationUrl.href = this.pagination.path;

                var host = paginationUrl.hostname;

                if (window.location.port) {
                    host += ':' + window.location.port;
                }

                var search = paginationUrl.search;

                search = search.replace(/(page=)\d+/, "$1" + page);

                if (search.indexOf('?') === -1) {
                    search += '?page=' + page;
                } else if (search.indexOf('page') === -1) {
                    search += '&page=' + page;
                }

                Vue.request().get(paginationUrl.protocol + '//' + host + paginationUrl.pathname + search, this.commit);
            }
        }
    },
    computed: {
        currentPage: function currentPage() {
            return this.pagination.current_page;
        },
        lastPage: function lastPage() {
            return this.pagination.last_page;
        },

        // This determines how we display the pagination such like 1 ... 6 7 8 ... 29
        centerPartPage: function centerPartPage() {
            if (this.lastPage > 10 && this.currentPage >= 5) {
                if (this.lastPage - this.currentPage > 5) {
                    return this.currentPage === this.lastPage ? [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1] : [this.currentPage - 2, this.currentPage - 1, this.currentPage];
                } else {
                    var r = [];

                    for (var i = this.lastPage - 7; i < this.lastPage; i++) {
                        r.push(i);
                    }
                    return r;
                }
            } else if (this.lastPage > 10) {
                var _r = [];

                for (var _i = 1; _i < 5; _i++) {
                    _r.push(_i);
                }
                return _r;
            } else {
                var _r2 = [];

                for (var _i2 = 1; _i2 < this.lastPage; _i2++) {
                    _r2.push(_i2);
                }
                return _r2;
            }
        },
        lastPartPage: function lastPartPage() {
            if (this.lastPage > 10 && this.lastPage - this.currentPage > 5) {
                return [this.lastPage - 1];
            }
            return [];
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        time: {}
    },
    mounted: function mounted() {
        var _this = this;

        this.setCurrentTime();
        setInterval(function () {
            _this.update();
        }, 60000);
    },
    data: function data() {
        return {
            currentTime: null
        };
    },

    watch: {
        time: function time() {
            this.setCurrentTime();
        }
    },
    methods: {
        update: function update() {
            Vue.set(this.currentTime, this.currentTime.add(-1, 'minute'));
        },
        setCurrentTime: function setCurrentTime() {

            var time = this.time;

            if (!moment.isMoment(time)) {
                time = this.parseDate(time);
            }

            this.currentTime = time;
        }
    },
    computed: {
        text: function text() {
            if (this.currentTime) {
                return this.currentTime.fromNow().replace('ute', '');
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_AdminNavigation_vue__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_AdminNavigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Components_AdminNavigation_vue__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        AdminNavigation: __WEBPACK_IMPORTED_MODULE_0__Components_AdminNavigation_vue___default.a
    }
});

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_, Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: this.createForm({
                name: null,
                draft: null,
                link_name: null,
                tags: [],
                html: null,
                preview_text: null,
                blog_image: null,
                remove_blog_image: null
            }),
            blogImageBase64: null
        };
    },
    created: function created() {
        this.fetchData();
    },

    watch: {
        '$route': 'fetchData',
        'blog': function blog() {
            this.form.fill(this.blog);
            console.info(this.blog.tags);
            this.form.tags = _.map(this.blog.tags, 'id');
        }
    },
    methods: {
        submit: function submit() {

            var formData = new FormData();

            _.each(this.form, function (value, key) {
                if (!_.isNull(value) && typeof value !== 'undefined') {
                    formData.append(key, value);
                }
            });

            if (this.blog) {
                return this.update(formData);
            }
            this.create(formData);
        },
        create: function create(formData) {
            this.$store.dispatch('blogs/store', formData);
        },
        update: function update(formData) {
            this.$store.dispatch('blogs/update', {
                blog: this.blog.id,
                formData: formData
            });
        },
        fetchData: function fetchData() {
            this.$store.dispatch('tags/get');
            var blog = this.$route.params.blog;
            if (blog) {
                this.$store.dispatch('blogs/show', blog);
            }
        },
        resetblogImage: function resetblogImage() {
            Vue.set(this.form, 'blog_image', null);
            Vue.set(this, 'blogImageBase64', null);
            Vue.set(this.form, 'remove_blog_image', true);
        },
        onFileChange: function onFileChange(e) {
            var _this = this;

            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }

            var file = files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
                Vue.set(_this, 'blogImageBase64', e.target.result);
            };

            reader.readAsDataURL(file);

            Vue.set(this.form, 'blog_image', file);
            Vue.set(this.form, 'remove_blog_image', false);
        }
    },
    computed: {
        blog: function blog() {
            return this.$store.state.blogs.blog;
        },
        tags: function tags() {
            return this.$store.state.tags.tags;
        },
        blogConfig: function blogConfig() {
            var config = _.clone(this.froalaConfig);
            config.heightMin = 400;
            return config;
        },
        previewConfig: function previewConfig() {
            var config = _.clone(this.froalaConfig);
            config.heightMin = 200;
            return config;
        },
        blogImage: function blogImage() {
            if (this.blogImageBase64) {
                return this.blogImageBase64;
            }

            if (_.isString(this.form.blog_image)) {
                return this.form.blog_image;
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        this.$store.dispatch('blogs/get');
    },

    methods: {
        deleteBlog: function deleteBlog(blog) {
            this.$store.dispatch('blogs/destroy', blog.id);
        }
    },
    computed: {
        blogs: function blogs() {
            return this.$store.state.blogs.blogs;
        }
    }
});

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, Chart) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Blogs_Components_Comment_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Blogs_Components_Comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Blogs_Components_Comment_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Comment: __WEBPACK_IMPORTED_MODULE_0__Blogs_Components_Comment_vue___default.a
    },
    data: function data() {
        return {
            refresh: false,
            popularData: {}
        };
    },
    created: function created() {
        var _this = this;

        this.createChart();
        this.$store.dispatch('admin_blog_comments/get');
        Vue.request().get('/api/admin/most-visited-pages').then(function (data) {
            _this.popularData = data;
        });
    },

    methods: {
        moderatedComment: function moderatedComment(comment) {
            var _this2 = this;

            this.$store.dispatch('admin_blog_comments/update', {
                comment: comment
            }).then(function () {
                _this2.refreshPagination();
            });
        },
        createChart: function createChart() {
            var _this3 = this;

            Vue.request().get('/api/admin/visitors-and-page-views').then(function (data) {
                new Chart(_this3.$refs.chart.getContext("2d"), {
                    type: 'line',
                    data: {
                        labels: data.labels,
                        datasets: [{
                            label: "Visitors",
                            backgroundColor: "rgba(151,187,205,1)",
                            borderColor: "rgba(151,187,205,1)",
                            data: data.visitors
                        }, {
                            label: "Views",
                            fill: false,
                            borderDash: [5, 5],
                            data: data.views
                        }]
                    },
                    options: {
                        responsive: true,
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        }
                    }
                });
            });
        },
        refreshPagination: function refreshPagination() {
            Vue.set(this, 'refresh', true);
        }
    },
    computed: {
        user: function user() {
            return this.$store.state.auth.authed_user;
        },
        comments: function comments() {
            return this.$store.state.admin_blog_comments.comments;
        },
        commentsPagination: function commentsPagination() {
            return this.$store.state.admin_blog_comments.pagination;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(11)))

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, _) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: this.createForm({
                url: null,
                name: null,
                html: null,
                end_date: null,
                start_date: null,
                timeline_id: null,
                project_image: null,
                remove_project_image: null,
                technologies: []
            }),
            projectImageBase64: null
        };
    },
    created: function created() {
        this.fetchData();
    },

    watch: {
        '$route': 'fetchData',
        'project': function project() {
            this.fill();
        },
        'timelines': function timelines() {
            this.fill();
        }
    },
    methods: {
        fill: function fill() {
            if (this.projectId && this.project) {
                this.form.fill(this.project);
                Vue.set(this.form, 'technologies', _.map(this.project.technologies, 'id'));
            }
        },
        submit: function submit() {

            var formData = new FormData();

            _.each(this.form, function (value, key) {
                if (!_.isNull(value) && typeof value !== 'undefined') {
                    formData.append(key, value);
                }
            });

            if (this.projectId) {
                return this.update(formData);
            }
            this.create(formData);
        },
        create: function create(formData) {
            this.$store.dispatch('projects/store', formData);
        },
        update: function update(formData) {
            this.$store.dispatch('projects/update', {
                formData: formData,
                project: this.project.id
            });
        },
        fetchData: function fetchData() {

            this.form.reset();

            this.$store.dispatch('timelines/get');
            this.$store.dispatch('technologies/get');

            if (this.projectId) {
                this.$store.dispatch('projects/show', this.projectId);
            }
        },
        resetProjectImage: function resetProjectImage() {
            Vue.set(this.form, 'project_image', null);
            Vue.set(this, 'projectImageBase64', null);
            Vue.set(this.form, 'remove_project_image', true);
        },
        onFileChange: function onFileChange(e) {
            var _this = this;

            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }

            var file = files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
                Vue.set(_this, 'projectImageBase64', e.target.result);
            };

            reader.readAsDataURL(file);

            Vue.set(this.form, 'project_image', file);
            Vue.set(this.form, 'remove_project_image', false);
        }
    },
    computed: {
        project: function project() {
            return this.$store.state.projects.project;
        },
        projectId: function projectId() {
            return this.$route.params.project;
        },
        timelines: function timelines() {
            return this.$store.state.timelines.timelines;
        },
        technologies: function technologies() {
            return this.$store.state.technologies.technologies;
        },
        projectImage: function projectImage() {
            if (this.projectImageBase64) {
                return this.projectImageBase64;
            }

            if (_.isString(this.form.project_image)) {
                return this.form.project_image;
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        this.$store.dispatch('projects/get');
    },

    methods: {
        deleteProject: function deleteProject(project) {
            this.$store.dispatch('projects/destroy', project.id);
        }
    },
    computed: {
        projects: function projects() {
            return this.$store.state.projects.projects;
        }
    }
});

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, _) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_color__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        MaterialPicker: __WEBPACK_IMPORTED_MODULE_0_vue_color__["Material"]
    },
    data: function data() {
        return {
            form: this.createForm({
                name: null,
                color: null
            }),
            color: this.getDefaultColors()
        };
    },
    created: function created() {
        this.fetchData();
    },

    watch: {
        '$route': 'fetchData',
        'tag': function tag() {
            if (this.tagId && this.tag) {
                this.form.fill(this.tag);
                Vue.set(this, 'color', this.form.color);
            }
        }
    },
    methods: {
        submit: function submit() {

            Vue.set(this.form, 'color', this.color.hex);

            if (this.tagId) {
                return this.update();
            }
            this.create();
        },
        create: function create() {
            this.$store.dispatch('tags/store', this.form);
        },
        update: function update() {
            this.$store.dispatch('tags/update', _.merge(this.form, { tag: this.tagId }));
        },
        fetchData: function fetchData() {
            if (this.tagId) {
                this.$store.dispatch('tags/show', this.tagId);
            }
        }
    },
    computed: {
        tag: function tag() {
            return this.$store.state.tags.tag;
        },
        tagId: function tagId() {
            return this.$route.params.tag;
        },
        actionStatus: function actionStatus() {
            return this.tagId ? 'Updating' : 'Creating';
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        this.$store.dispatch('tags/get');
    },

    methods: {
        deleteTag: function deleteTag(tag) {
            this.$store.dispatch('tags/destroy', tag.id);
        }
    },
    computed: {
        tags: function tags() {
            return this.$store.state.tags.tags;
        }
    }
});

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, _) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_color__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        MaterialPicker: __WEBPACK_IMPORTED_MODULE_0_vue_color__["Material"]
    },
    data: function data() {
        return {
            form: this.createForm({
                url: null,
                name: null,
                color: null
            }),
            color: this.getDefaultColors()
        };
    },
    created: function created() {
        this.fetchData();
    },

    watch: {
        '$route': 'fetchData',
        'technology': function technology() {
            if (this.technologyId && this.technology) {
                this.form.fill(this.technology);
                Vue.set(this, 'color', this.form.color);
            }
        }
    },
    methods: {
        submit: function submit() {
            if (this.color.hex) {
                Vue.set(this.form, 'color', this.color.hex);
            }

            if (this.technologyId) {
                return this.update();
            }
            this.create();
        },
        create: function create() {
            this.$store.dispatch('technologies/store', this.form);
        },
        update: function update() {
            this.$store.dispatch('technologies/update', _.merge(this.form, { technology: this.technologyId }));
        },
        fetchData: function fetchData() {

            this.form.reset();

            if (this.technologyId) {
                this.$store.dispatch('technologies/show', this.technologyId);
            }
        }
    },
    computed: {
        technology: function technology() {
            return this.$store.state.technologies.technology;
        },
        technologyId: function technologyId() {
            return this.$route.params.technology;
        },
        actionStatus: function actionStatus() {
            return this.technology ? 'Updating' : 'Creating';
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        this.$store.dispatch('technologies/get');
    },

    methods: {
        deleteTechnology: function deleteTechnology(technology) {
            this.$store.dispatch('technologies/destroy', technology.id);
        }
    },
    computed: {
        technologies: function technologies() {
            return this.$store.state.technologies.technologies;
        }
    }
});

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: this.createForm({
                name: null,
                end_date: null,
                start_date: null
            })
        };
    },
    created: function created() {
        this.fetchData();
    },

    watch: {
        '$route': 'fetchData',
        'timeline': function timeline() {
            if (this.timelineId && this.timeline) {
                this.form.fill(this.timeline);
            }
        }
    },
    methods: {
        submit: function submit() {
            if (this.timelineId) {
                return this.update();
            }
            this.create();
        },
        create: function create() {
            this.$store.dispatch('timelines/store', this.form);
        },
        update: function update() {
            this.$store.dispatch('timelines/update', _.merge(this.form, { timeline: this.timelineId }));
        },
        fetchData: function fetchData() {

            this.form.reset();

            if (this.timelineId) {
                this.$store.dispatch('timelines/show', this.timelineId);
            }
        }
    },
    computed: {
        timeline: function timeline() {
            return this.$store.state.timelines.timeline;
        },
        timelineId: function timelineId() {
            return this.$route.params.timeline;
        },
        actionStatus: function actionStatus() {
            return this.timelineId ? 'Updating' : 'Creating';
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        this.$store.dispatch('timelines/get');
    },

    methods: {
        deleteTimeline: function deleteTimeline(timeline) {
            this.$store.dispatch('timelines/destroy', timeline.id);
        }
    },
    computed: {
        timelines: function timelines() {
            return this.$store.state.timelines.timelines;
        }
    }
});

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        this.$store.dispatch('users/get');
    },

    methods: {
        deleteUser: function deleteUser(user) {
            this.$store.dispatch('users/destroy', user.id);
        }
    },
    computed: {
        users: function users() {
            return this.$store.state.users.users;
        },
        usersPagination: function usersPagination() {
            return this.$store.state.users.pagination;
        }
    }
});

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['blog']
});

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommentForm_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommentForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CommentForm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'comment',
    props: ['comment'],
    components: {
        CommentForm: __WEBPACK_IMPORTED_MODULE_0__CommentForm_vue___default.a
    },
    data: function data() {
        return {
            reply: false,
            editing: false,
            form: this.createForm({
                comment: this.comment.comment
            })
        };
    },

    methods: {
        update: function update() {
            var _this = this;

            this.$store.dispatch('blog_comments/update', {
                form: this.form,
                comment: this.comment.id,
                blog: this.comment.blog_id
            }).then(function () {
                _this.editing = false;
                _this.emitUpdated();
            });
        },
        deleteComment: function deleteComment() {
            var _this2 = this;

            this.$store.dispatch('blog_comments/destroy', {
                comment: this.comment.id,
                parent: this.comment.parent_id,
                blog: this.$route.params.blog
            }).then(function () {
                _this2.emitUpdated();
            });
        },
        emitUpdated: function emitUpdated() {
            this.$emit('updated', true);
        }
    },
    computed: {
        user: function user() {
            return this.$store.state.auth.authed_user;
        },
        isOwners: function isOwners() {
            if (this.user && this.user.id === this.comment.user_id) {
                return true;
            }
            return false;
        }
    }
});

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        blog_id: Number,
        placeholder: String,
        parentComment: Object,
        open: {
            default: false
        }
    },
    data: function data() {
        return {
            form: this.createForm({
                comment: null
            })
        };
    },
    mounted: function mounted() {
        if (this.parentComment) {
            this.$refs.comment_input.focus();
        }
    },

    methods: {
        cancel: function cancel() {
            this.$emit('update:open', false);
        },
        postComment: function postComment() {
            var _this = this;

            var form = this.form;

            form.blog = this.blogId;

            if (this.parentComment) {
                form.parent_comment = this.parentComment.id;
            }

            this.$store.dispatch('blog_comments/store', form).then(function () {
                _this.$emit('update:open', false);
                _this.$emit('updated', true);
            }).then(function () {
                _this.form.reset();
            });
        }
    },
    computed: {
        user: function user() {
            return this.$store.state.auth.authed_user;
        },
        blogId: function blogId() {
            if (this.blog_id) {
                return this.blog_id;
            }
            return this.$route.params.blog;
        }
    }
});

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comment_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Comment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CommentForm_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CommentForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CommentForm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Comment: __WEBPACK_IMPORTED_MODULE_0__Comment_vue___default.a,
        CommentForm: __WEBPACK_IMPORTED_MODULE_1__CommentForm_vue___default.a
    },
    props: ['blog'],
    watch: {
        'blog': function blog() {
            this.$store.dispatch('blog_comments/get', this.blog.id);
        }
    },
    computed: {
        user: function user() {
            return this.$store.state.auth.authed_user;
        },
        blogComments: function blogComments() {
            if (this.blog) {
                var comments = this.$store.state.blog_comments.comments[this.blog.id];
                if (comments) {
                    return comments;
                }
            }

            return [];
        }
    }
});

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_BlogCard_vue__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_BlogCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Components_BlogCard_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        BlogCard: __WEBPACK_IMPORTED_MODULE_0__Components_BlogCard_vue___default.a
    },
    data: function data() {
        return {
            form: this.createForm({
                filters: [],
                search: null
            })
        };
    },

    watch: {
        'form': {
            deep: true,
            handler: function handler() {
                this.getBlogs();
            }
        },
        'blogPagination': function blogPagination() {
            this.scrollToTop(200);
        }
    },
    created: function created() {
        this.$store.dispatch('tags/get');
        this.getBlogs();
    },

    methods: {
        getBlogs: function getBlogs() {
            this.$store.dispatch('blogs/get', _.omitBy(this.form.data(), _.isEmpty));
        },
        clearFilters: function clearFilters() {
            this.form.reset();
        }
    },
    computed: {
        tags: function tags() {
            return this.$store.state.tags.tags;
        },
        blogs: function blogs() {
            return this.$store.state.blogs.blogs;
        },
        blogPagination: function blogPagination() {
            return this.$store.state.blogs.pagination;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_CommentsArea_vue__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_CommentsArea_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Components_CommentsArea_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        CommentsArea: __WEBPACK_IMPORTED_MODULE_0__Components_CommentsArea_vue___default.a
    },
    created: function created() {
        var _this = this;

        var blog = this.$route.params.blog;

        Echo.leave('blog.*');

        Echo.channel('blog.' + blog).listen('CommentCreated', function (data) {
            _this.$store.commit('blog_comments/add', {
                response: data.comment
            });
        }).listen('CommentUpdated', function (data) {
            _this.$store.commit('blog_comments/update', {
                response: data.comment
            });
        }).listen('CommentDeleted', function (data) {
            _this.$store.commit('blog_comments/remove', {
                requestData: {
                    comment: data.comment.id,
                    blog: data.comment.blog_id,
                    parent: data.comment.parent_id
                }
            });
        });
        this.$store.dispatch('blogs/show', blog);
    },

    computed: {
        blog: function blog() {
            return this.$store.state.blogs.blog;
        }
    }
});

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, tinycolor, _) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            tree: null,
            circles: [],
            merge_levels: [],
            branches: [],

            merges: {},
            ag_colors: {},
            colors: {},

            default_x: 35,
            default_y: 25,
            default_r: 14,

            big_r: 27,
            vertical_multiplier: 0
        };
    },
    mounted: function mounted() {
        this.tree = Snap('#git_tree');

        // http://paletton.com/#uid=70f0u0ke9vf4TW49xJliLoCnugw
        this.colors['lines'] = {};
        this.colors.lines['0'] = 'rgb(249, 170, 139)';
        this.colors.lines['1'] = 'rgb(249, 202, 139)';
        this.colors.lines['2'] = 'rgb(94, 131, 160)';
        this.colors.lines['3'] = 'rgb(95, 171, 138)';
        this.colors.lines['4'] = 'rgb(196, 114, 81)';
        this.colors.lines['5'] = 'rgb(255, 223, 179)';

        this.draw();

        var curves = this.tree.paper.g(this.tree.paper.selectAll('.curves'));
        var lines = this.tree.paper.g(this.tree.paper.selectAll('.lines'));
        var circles = this.tree.paper.g(this.tree.paper.selectAll('circle'));
        var flip_matrix = new Snap.Matrix().scale(1, -1).translate(0, -$(this.$refs.tree).height());

        curves.transform(flip_matrix);
        lines.transform(flip_matrix);
        circles.transform(flip_matrix);

        this.tree.paper.selectAll('circle').forEach(function (elem) {
            $(elem.node).attr('old_color', $(elem.node).attr('fill'));
            elem.mouseover(function () {
                this.animate({
                    fill: '#FFFFFF',
                    r: big_r,
                    strokeOpacity: 1
                }, 200, mina.easeinout);
            });
            elem.mouseout(function () {
                this.animate({
                    fill: $(this.node).attr('old_color'),
                    r: default_r,
                    strokeOpacity: .3
                }, 200, mina.easeinout);
            });
        });
    },

    methods: {
        draw: function draw() {

            this.getMerges();

            var start_x = void 0;
            var final_x = void 0;

            var start_y = void 0;
            var end_y = void 0;

            // Draw most left line
            var treeHeight = (this.merge_levels.length + 3) * this.default_y;
            this.drawLine(this.default_x, 0, treeHeight, this.colors.lines[0]);

            $(this.$refs.tree).css('height', treeHeight);

            // draw line up till they merge
            $.each(this.branches, function (branch_index, branch) {

                // also lets set the colors
                if (!colors.lines[branch.horizontal_multiplier]) {
                    colors.lines[branch.horizontal_multiplier] = tinycolor.random().toHexString();
                }

                // If its not a timeline shift it outwards by the multiplier
                start_x = default_x + default_x * branch.horizontal_multiplier;

                // If its not based off a timline merge it all the way back in!
                if (!branch.timeline_id || branch.timeline) {
                    final_x = default_x;
                } else {
                    // Since its based off a timeline we need to adjust the final location by the timelines multiplier
                    // The branch can end afterwards of the timeline! so lets make sure of that
                    if (branch.end_date <= timelines[branch.timeline_id].end_date) {
                        final_x = default_x + default_x * timelines[branch.timeline_id].horizontal_multiplier;
                    } else {
                        final_x = default_x;
                    }
                }

                // find out where its vertical multiplier should be
                start_y = default_y + default_y * branch.vertical_multiplier;
                end_y = default_y + default_y * branch.merge;

                // Draw the long line up to the merge point
                drawLine(start_x, start_y, end_y, colors.lines[branch.horizontal_multiplier]);

                // Draw the Branch Curve
                draw_curve(final_x, start_y - default_y, start_x, start_y, colors.lines[branch.horizontal_multiplier]);

                // Draw Merge Curve
                draw_curve(start_x, end_y, final_x, end_y + default_y, colors.lines[branch.horizontal_multiplier]);

                // Draw the Branch Starting Circle
                if (!branch.timeline) {
                    draw_circle(start_x, start_y, get_analogous(colors.lines[branch.horizontal_multiplier]), branch.id);
                }
            });

            this.renderCircles();
        },
        getMerges: function getMerges() {

            console.info('branches are at 0');
            console.warn(this.branches.length);
            //                // Get the proper merge levels
            //                $.each(this.branches, function(branch_index, branch) {
            //
            //                    $.each(this.branches, (lowerBranch) => {
            //
            //                        if(branch.end_date > lowerBranch.start_date) {
            //                            branch.merge = lowerBranch.vertical_multiplier;
            //
            //                            this.merges[branch.name] = branch.merge;
            //                        }
            //                    });
            //
            //                    //console.log(branch.name  + ' merges @ ' + branch.merge);
            //                });
            //
            //                $.each(this.branches, (branch) =>  {
            //                    this.findMergeConflicts(branch);
            //                    this.merge_levels.push(branch.merge);
            //                });
        },
        drawLine: function drawLine(x, start_y, end_y, color) {
            this.tree.path("M" + x + "," + start_y + " L" + x + "," + end_y + "").attr({
                stroke: color,
                strokeWidth: 4,
                class: 'lines'
            });
        },
        findMergeConflicts: function findMergeConflicts() {
            //            console.log('Finding conflicts with ' + branch.name);

            var conflicts = [];

            $.each(branches, function () {
                if (branch.id != this.id && branch.merge == this.merge) {
                    //                    console.log('Conflicts with ' + this.name);
                    conflicts.push(this);
                }
            });

            $.each(conflicts, function () {
                if (branch.id != this.id) {
                    if (branch.end_date > this.end_date) {
                        move_up(branch);
                        branch.merge += 2;
                    } else {
                        move_up(this);
                        this.merge = branch.merge + 2;
                    }
                }
            });
        },
        renderCircles: function renderCircles() {
            var _this = this;

            $.each(this.circles, function (circle) {
                _this.projects.circle(circle.x, circle.y, circle.r).attr({
                    fill: circle.color,
                    stroke: circle.color,
                    strokeOpacity: .3,
                    strokeWidth: 5,
                    'data-project_id': circle.id
                });
            });
        }
    },
    computed: {
        projects: function projects() {
            return this.$store.state.projects.projects;
        },
        timelines: function timelines() {
            var _this2 = this;

            var timelines = {};

            _.each(_.reverse(this.projects), function (project) {

                _this2.branches.push({
                    id: project.id,
                    name: project.timeline.name,
                    horizontal_multiplier: 1,
                    vertical_multiplier: 0,
                    timeline_id: project.timeline.id,
                    timeline: false,
                    start_date: project.start_date,
                    end_date: project.end_date,
                    merge: null
                });

                timelines[project.id] = {
                    id: project.timeline.id,
                    timeline_id: project.timeline.id,
                    name: project.timeline.name,
                    start_date: project.timeline.start_date,
                    end_date: project.timeline.end_date,
                    horizontal_multiplier: 1,
                    vertical_multiplier: 0,
                    timeline: true
                };
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(15), __webpack_require__(4)))

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['project'],
    data: function data() {
        return {
            viewing: false
        };
    },

    methods: {
        goToUrl: function goToUrl(url) {
            window.open(url);
        },
        viewProject: function viewProject() {
            // need to emit others to close
            Vue.set(this, 'viewing', true);
        },
        closeProject: function closeProject() {
            Vue.set(this, 'viewing', false);
        }
    },
    computed: {
        technologies: function technologies() {
            //T TODO - sort by name
            return this.project.technologies;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_GitTree_vue__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_GitTree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Components_GitTree_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_Project_vue__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_Project_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Components_Project_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        GitTree: __WEBPACK_IMPORTED_MODULE_0__Components_GitTree_vue___default.a,
        Project: __WEBPACK_IMPORTED_MODULE_1__Components_Project_vue___default.a
    },
    created: function created() {
        this.$store.dispatch('projects/get');
        this.$store.dispatch('timelines/get');
    },

    computed: {
        projects: function projects() {
            return this.$store.state.projects.projects;
        }
    }
});

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nprogress__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_laravel_echo__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_laravel_echo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_laravel_echo__);
localStorage.FEK = "AODOd2HLEBFZOTGHW==";

window.moment = __webpack_require__(13);
moment.tz.setDefault("UTC");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */



window.axios = __webpack_require__(10);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common["X-CSRF-TOKEN"] = window.Laravel.csrfToken;

axios.interceptors.request.use(function (config) {
    __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.configure({
        easing: 'ease',
        speed: 500,
        showSpinner: false
    });
    __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.start();
    __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.inc(0.3);
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.done();
    return response;
}, function (error) {
    return Promise.reject(error);
});

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */



window.Pusher = __webpack_require__(8);

window.Echo = new __WEBPACK_IMPORTED_MODULE_1_laravel_echo___default.a({
    broadcaster: 'pusher',
    key: window.Laravel.pusherKey
});

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_flatpickr_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_flatpickr_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_flatpickr_component__);

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_flatpickr_component___default.a);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg__);
__webpack_require__(317);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(331);
__webpack_require__(325);
__webpack_require__(328);
__webpack_require__(329);
__webpack_require__(330);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
__webpack_require__(335);
__webpack_require__(319);
__webpack_require__(318);


Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_froala_wysiwyg___default.a);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Vue) {__webpack_require__(203);
__webpack_require__(202);

Vue.component('Footer', __webpack_require__(341));
Vue.component('TimeAgo', __webpack_require__(346));
Vue.component('Navigation', __webpack_require__(342));
Vue.component('Pagination', __webpack_require__(345));
Vue.component('Notifications', __webpack_require__(344));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Vue) {Vue.mixin({
    data: function data() {
        return {
            froalaConfig: {
                heightMin: 745
            }
        };
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Form__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDefaultColors; });


var createForm = function createForm(data, reset) {
    return new __WEBPACK_IMPORTED_MODULE_0__classes_Form__["a" /* default */](data, reset);
};

var getDefaultColors = function getDefaultColors() {
    return {
        hex: '#00000'
    };
};

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permissions__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications__ = __webpack_require__(208);






Vue.mixin({
    methods: {
        parseDate: __WEBPACK_IMPORTED_MODULE_0__time__["a" /* parseDate */],

        createForm: __WEBPACK_IMPORTED_MODULE_3__form__["a" /* createForm */],
        getDefaultColors: __WEBPACK_IMPORTED_MODULE_3__form__["b" /* getDefaultColors */],

        showError: __WEBPACK_IMPORTED_MODULE_4__notifications__["a" /* showError */],
        showSuccess: __WEBPACK_IMPORTED_MODULE_4__notifications__["b" /* showSuccess */],
        handleApiError: __WEBPACK_IMPORTED_MODULE_4__notifications__["c" /* handleApiError */],

        scrollToTop: __WEBPACK_IMPORTED_MODULE_1__window__["a" /* scrollToTop */]
    },

    computed: {
        isAdmin: __WEBPACK_IMPORTED_MODULE_2__permissions__["a" /* isAdmin */],
        isAuthed: __WEBPACK_IMPORTED_MODULE_2__permissions__["b" /* isAuthed */]
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleApiError; });
var showError = function showError(message, title, timeout) {
    if (timeout === undefined) {
        timeout = 3000;
    }

    this.$store.dispatch('notifications/add', {
        title: !_.isEmpty(title) ? title : 'Error',
        text: message,
        class: 'error',
        timeout: timeout
    });
};
var showSuccess = function showSuccess(message, title, timeout) {
    if (timeout === undefined) {
        timeout = 5000;
    }

    this.$store.dispatch('notifications/add', {
        title: !_.isEmpty(title) ? title : 'Success',
        text: message,
        class: 'success',
        timeout: timeout
    });
};

var handleApiError = function handleApiError(response) {
    var message = response;

    if (_.isObject(response)) {
        if (_.isSet(response.errors)) {
            message = response.errors;
        } else if (_.isObject(response.data)) {
            message = "";
            _.each(response.data.errors, function (error) {
                message += error + "<br>";
            });
        } else {
            message = response.data;
        }
    }

    if (_.isString(message)) {
        this.showError(message);
    } else {
        console.warn("UNABLE TO PARSE ERROR");
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isAuthed; });
var isAdmin = function isAdmin() {
    return this.isAuthed && this.isAuthed.role === 'admin';
};

var isAuthed = function isAuthed() {
    return this.$store.state.auth.authed_user;
};

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseDate; });
var parseDate = function parseDate(date, timezone) {
    if (timezone) {
        return moment.tz(date, timezone);
    }
    return moment(date);
};

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(205);
__webpack_require__(207);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Index_vue__);



/* harmony default export */ __webpack_exports__["a"] = ([{
    path: 'blogs',
    component: __WEBPACK_IMPORTED_MODULE_1__Index_vue___default.a,
    name: 'admin-blogs'
}, {
    path: 'blogs/create',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-blogs-create'
}, {
    path: 'blogs/edit/:blog',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-blogs-edit'
}]);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Index_vue__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Index_vue__);


/* harmony default export */ __webpack_exports__["a"] = ([{
    path: 'dashboard',
    component: __WEBPACK_IMPORTED_MODULE_0__Index_vue___default.a,
    name: 'admin-dashboard'
}]);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Index_vue__);



/* harmony default export */ __webpack_exports__["a"] = ([{
    path: 'projects',
    component: __WEBPACK_IMPORTED_MODULE_1__Index_vue___default.a,
    name: 'admin-projects'
}, {
    path: 'projects/create',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-projects-create'
}, {
    path: 'projects/edit/:project',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-projects-edit'
}]);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Index_vue__);



/* harmony default export */ __webpack_exports__["a"] = ([{
    path: 'tags',
    component: __WEBPACK_IMPORTED_MODULE_1__Index_vue___default.a,
    name: 'admin-tags'
}, {
    path: 'tags/create',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-tags-create'
}, {
    path: 'tags/edit',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-tags-edit'
}]);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Index_vue__);



/* harmony default export */ __webpack_exports__["a"] = ([{
    path: 'technologies',
    component: __WEBPACK_IMPORTED_MODULE_1__Index_vue___default.a,
    name: 'admin-technologies'
}, {
    path: 'technologies/create',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-technologies-create'
}, {
    path: 'technologies/edit/:technology',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-technologies-edit'
}]);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Index_vue__);



/* harmony default export */ __webpack_exports__["a"] = ([{
    path: 'timelines',
    component: __WEBPACK_IMPORTED_MODULE_1__Index_vue___default.a,
    name: 'admin-timelines'
}, {
    path: 'timelines/create',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-timelines-create'
}, {
    path: 'timelines/edit/:timeline',
    component: __WEBPACK_IMPORTED_MODULE_0__Form_vue___default.a,
    name: 'admin-timelines-edit'
}]);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Index_vue__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Index_vue__);


/* harmony default export */ __webpack_exports__["a"] = ([{
    path: 'users',
    component: __WEBPACK_IMPORTED_MODULE_0__Index_vue___default.a,
    name: 'admin-users'
}]);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tags_routes__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Blogs_routes__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_routes__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AdminArea_vue__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AdminArea_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__AdminArea_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Projects_routes__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dashboard_routes__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Timelines_routes__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Technologies_routes__ = __webpack_require__(216);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }










/* harmony default export */ __webpack_exports__["a"] = ([{
    path: "/admin",
    component: __WEBPACK_IMPORTED_MODULE_3__AdminArea_vue___default.a,
    children: [].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_0__Tags_routes__["a" /* default */]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_1__Blogs_routes__["a" /* default */]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__Users_routes__["a" /* default */]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_4__Projects_routes__["a" /* default */]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_5__Dashboard_routes__["a" /* default */]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_6__Timelines_routes__["a" /* default */]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_7__Technologies_routes__["a" /* default */])),
    meta: {
        admin: true
    }
}]);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_vue__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__View_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Index_vue__);



/* harmony default export */ __webpack_exports__["a"] = ([{
    path: '/blog',
    component: __WEBPACK_IMPORTED_MODULE_1__Index_vue___default.a,
    name: 'blogs'
}, {
    path: '/blog/:blog',
    component: __WEBPACK_IMPORTED_MODULE_0__View_vue___default.a,
    name: 'blog'
}]);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home_vue__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Home_vue__);


/* harmony default export */ __webpack_exports__["a"] = ([{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__Home_vue___default.a,
    name: 'home'
}]);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home_routes__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Admin_routes__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Blogs_routes__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login_vue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Resume_vue__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Resume_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Resume_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PageNotFound_vue__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PageNotFound_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PageNotFound_vue__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }









var routes = [].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_0__Home_routes__["a" /* default */]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_1__Admin_routes__["a" /* default */]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__Blogs_routes__["a" /* default */]), [{
    path: '/login', component: __WEBPACK_IMPORTED_MODULE_3__Login_vue___default.a, name: 'login', meta: { redirectIfAuthed: true }
}, {
    path: '/resume', component: __WEBPACK_IMPORTED_MODULE_4__Resume_vue___default.a, name: 'resume'
}, {
    path: "*",
    component: __WEBPACK_IMPORTED_MODULE_5__PageNotFound_vue___default.a
}]);

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_routes__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_helpers_window_index__ = __webpack_require__(27);





Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]);

var router = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]({
    mode: 'history',
    routes: __WEBPACK_IMPORTED_MODULE_1__pages_routes__["a" /* default */]
});

router.beforeResolve(function (to, from, next) {

    var authedUser = store.state.auth.authed_user;

    if (to.matched.some(function (match) {
        return match.meta.admin;
    }) && (!authedUser || store.state.auth.authed_user.role !== 'admin')) {
        return next('/login');
    }

    if (to.meta.redirectIfAuthed && authedUser) {
        return next('/');
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mixins_helpers_window_index__["a" /* scrollToTop */])(200);

    next();
});

/* harmony default export */ __webpack_exports__["a"] = (router);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Form__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_Errors__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_Request__ = __webpack_require__(26);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.Form = __WEBPACK_IMPORTED_MODULE_3__classes_Form__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.Errors = __WEBPACK_IMPORTED_MODULE_4__classes_Errors__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.Request = __WEBPACK_IMPORTED_MODULE_5__classes_Request__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.request = function (data) {
    return new __WEBPACK_IMPORTED_MODULE_5__classes_Request__["a" /* default */](data);
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
    modules: __WEBPACK_IMPORTED_MODULE_2__modules__["a" /* default */]
}));

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
var logout = function logout() {
    return Vue.request().post('/logout').then(function () {
        window.location.reload();
    });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mutations__);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 227 */
/***/ (function(module, exports) {



/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    authed_user: Laravel.user
});

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get(_ref, queryString) {
    _objectDestructuringEmpty(_ref);

    return Vue.request(queryString).get('/api/admin/blog-comments', 'admin_blog_comments/setAll');
};

var update = function update(_ref2, data) {
    _objectDestructuringEmpty(_ref2);

    return Vue.request(data.form).patch('/api/admin/blog-comments/' + data.comment);
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(231);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
var setAll = function setAll(state, _ref) {
    var response = _ref.response;

    Vue.set(state, 'pagination', response);
    Vue.set(state, 'comments', response.data);
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    comments: [],
    pagination: null
});

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get(_ref, blog) {
    _objectDestructuringEmpty(_ref);

    return Vue.request().get('/api/blogs/' + blog + '/comments', 'blog_comments/setAll');
};

var store = function store(_ref2, form) {
    _objectDestructuringEmpty(_ref2);

    return Vue.request(form).post('/api/blogs/' + form.blog + '/comments', 'blog_comments/add');
};

var update = function update(_ref3, data) {
    _objectDestructuringEmpty(_ref3);

    return Vue.request(data.form).patch('/api/blogs/' + data.blog + '/comments/' + data.comment, 'blog_comments/update');
};

var destroy = function destroy(_ref4, data) {
    _objectDestructuringEmpty(_ref4);

    return Vue.request(data).delete('/api/blogs/' + data.blog + '/comments/' + data.comment, 'blog_comments/remove');
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(235);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, _) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var setAll = function setAll(state, _ref) {
    var response = _ref.response;

    if (response.length) {
        Vue.set(state.comments, response[0].blog_id, response);
    }
};

var add = function add(state, _ref2) {
    var response = _ref2.response;

    var blog = response.blog_id;

    var comments = state.comments[blog];

    if (response.parent_id) {
        var parentComment = findParentComment(comments, response.parent_id);
        if (parentComment) {
            parentComment.children.push(response);
        }
    } else {
        if (!comments) {
            Vue.set(state.comments, blog, []);
            comments = state.comments[blog] = [];
        }
        comments.push(response);
    }
};

var update = function update(state, _ref3) {
    var response = _ref3.response;

    var comments = state.comments[response.blog_id];

    if (comments) {
        if (response.parent_id) {
            var parentComment = findParentComment(comments, response.parent_id);
            if (parentComment) {
                Vue.set(parentComment.children, _.findKey(parentComment.children, { id: response.id }), response);
            }
        } else {
            Vue.set(comments, _.findKey(comments, { id: response.id }), response);
        }
    }
};

var remove = function remove(state, _ref4) {
    var requestData = _ref4.requestData;

    var comments = state.comments[requestData.blog];
    if (comments) {
        if (requestData.parent) {
            var parentComment = findParentComment(comments, requestData.parent);
            if (parentComment) {
                Vue.set(parentComment, 'children', _.reject(parentComment.children, { id: requestData.comment }));
            }
        } else {
            Vue.set(state.comments, requestData.blog, _.reject(comments, { id: requestData.comment }));
        }
    }
};

function findParentComment(comments, parentId) {
    if (comments) {
        for (var i = 0; i < comments.length; i++) {
            if (comments[i].id === parentId) {
                return comments[i];
            }
            var parentComment = findParentComment(comments[i].children, parentId);
            if (parentComment) {
                return parentComment;
            }
        }
    }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    comments: []
});

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get(_ref, filters) {
    _objectDestructuringEmpty(_ref);

    return Vue.request(filters).get('/api/blogs', 'blogs/setAll');
};

var store = function store(_ref2, form) {
    _objectDestructuringEmpty(_ref2);

    return Vue.request(form).post('/api/blogs', 'blogs/add').then(function () {
        app.showSuccess('You have created a new blog');
        app.$router.push({ name: 'admin-blogs' });
    });
};

var show = function show(_ref3, blog) {
    _objectDestructuringEmpty(_ref3);

    return Vue.request().get('/api/blogs/' + blog, 'blogs/set');
};

var update = function update(_ref4, form) {
    _objectDestructuringEmpty(_ref4);

    return Vue.request(form).post('/api/blogs/' + form.blog, 'blogs/update').then(function () {
        app.showSuccess('You have updated the blog');
        app.$router.push({ name: 'admin-blogs' });
    });
};

var destroy = function destroy(_ref5, blog) {
    _objectDestructuringEmpty(_ref5);

    return Vue.request(blog).delete('/api/blogs/' + blog, 'blogs/remove').then(function () {
        app.showSuccess('You have deleted the blog');
        app.$router.push({ name: 'admin-blogs' });
    });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(239);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_, Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var set = function set(state, _ref) {
    var response = _ref.response;

    state.blog = response;
};

var setAll = function setAll(state, _ref2) {
    var response = _ref2.response;

    state.pagination = response;
    state.blogs = response.data;
};

var add = function add(state, _ref3) {
    var response = _ref3.response;

    state.blogs.push(response);
};

var update = function update(state, _ref4) {
    var response = _ref4.response;

    var key = parseInt(_.findKey(state.blogs, { id: response.id }));
    if (key) {
        Vue.set(state.blogs, key, response);
    }
};

var remove = function remove(state, _ref5) {
    var requestData = _ref5.requestData;

    Vue.set(state, "blogs", _.reject(state.blogs, { id: requestData.value }));
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    blogs: [],
    blog: null,
    pagination: null
});

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tags__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timelines__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__technologies__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blogs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_comments__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blog_admin_comments__ = __webpack_require__(230);












/* harmony default export */ __webpack_exports__["a"] = ({
    auth: __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */],
    tags: __WEBPACK_IMPORTED_MODULE_1__tags__["a" /* default */],
    users: __WEBPACK_IMPORTED_MODULE_2__users__["a" /* default */],
    projects: __WEBPACK_IMPORTED_MODULE_3__projects__["a" /* default */],
    timelines: __WEBPACK_IMPORTED_MODULE_4__timelines__["a" /* default */],
    technologies: __WEBPACK_IMPORTED_MODULE_5__technologies__["a" /* default */],
    notifications: __WEBPACK_IMPORTED_MODULE_6__notifications__["a" /* default */],

    blogs: __WEBPACK_IMPORTED_MODULE_7__blogs__["a" /* default */],
    blog_comments: __WEBPACK_IMPORTED_MODULE_8__blog_comments__["a" /* default */],
    admin_blog_comments: __WEBPACK_IMPORTED_MODULE_9__blog_admin_comments__["a" /* default */]
});

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var add = function add(_ref, notification) {
  var commit = _ref.commit;

  commit("add", notification);
};

var remove = function remove(_ref2, notification) {
  var commit = _ref2.commit;

  commit("remove", notification);
};

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(244);




/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_1__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
  namespaced: true
});

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var add = function add(state, notification) {
  state.notifications.push(notification);
};

var remove = function remove(state, notification) {
  state.notifications = _.without(state.notifications, notification);
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  notifications: []
});

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get() {
    return Vue.request().get('/api/projects', 'projects/setAll');
};

var store = function store(_ref, form) {
    _objectDestructuringEmpty(_ref);

    return Vue.request(form).post('/api/projects', 'projects/add').then(function () {
        app.showSuccess('You have created a new project');
        app.$router.push({ name: 'admin-projects' });
    });
};

var show = function show(_ref2, project) {
    _objectDestructuringEmpty(_ref2);

    return Vue.request().get('/api/projects/' + project, 'projects/set');
};

var update = function update(_ref3, data) {
    _objectDestructuringEmpty(_ref3);

    return Vue.request(data).post('/api/projects/' + data.project, 'projects/update').then(function () {
        app.showSuccess('You have updated the project');
        app.$router.push({ name: 'admin-projects' });
    });
};

var destroy = function destroy(_ref4, project) {
    _objectDestructuringEmpty(_ref4);

    return Vue.request(project).delete('/api/projects/' + project, 'projects/remove').then(function () {
        app.showSuccess('You have deleted the project');
        app.$router.push({ name: 'admin-projects' });
    });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(248);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_, Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var set = function set(state, _ref) {
    var response = _ref.response;

    state.project = response;
};

var setAll = function setAll(state, _ref2) {
    var response = _ref2.response;

    state.projects = response;
};

var add = function add(state, _ref3) {
    var response = _ref3.response;

    state.projects.push(response);
};

var update = function update(state, _ref4) {
    var response = _ref4.response;

    var key = parseInt(_.findKey(state.projects, { id: response.id }));
    if (key) {
        Vue.set(state.projects, key, response);
    }
};

var remove = function remove(state, _ref5) {
    var requestData = _ref5.requestData;

    Vue.set(state, "projects", _.reject(state.projects, { id: requestData.value }));
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    projects: [],
    project: null
});

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get() {
    return Vue.request().get('/api/tags', 'tags/setAll');
};

var store = function store(_ref, form) {
    _objectDestructuringEmpty(_ref);

    return Vue.request(form).post('/api/tags', 'tags/add').then(function () {
        app.showSuccess('You have created a new tag');
        app.$router.push({ name: 'admin-tags' });
    });
};

var show = function show(_ref2, tag) {
    _objectDestructuringEmpty(_ref2);

    return Vue.request().get('/api/tags/' + tag, 'tags/set');
};

var update = function update(_ref3, form) {
    _objectDestructuringEmpty(_ref3);

    return Vue.request(form).put('/api/tags/' + form.tag, 'tags/update').then(function () {
        app.showSuccess('You have updated the tag');
        app.$router.push({ name: 'admin-tags' });
    });
};

var destroy = function destroy(_ref4, tag) {
    _objectDestructuringEmpty(_ref4);

    return Vue.request(tag).delete('/api/tags/' + tag, 'tags/remove').then(function () {
        app.showSuccess('You have deleted the tag');
        app.$router.push({ name: 'admin-tags' });
    });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(252);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_, Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var set = function set(state, _ref) {
    var response = _ref.response;

    state.tag = response;
};

var setAll = function setAll(state, _ref2) {
    var response = _ref2.response;

    state.tags = response;
};

var add = function add(state, _ref3) {
    var response = _ref3.response;

    state.tags.push(response);
};

var update = function update(state, _ref4) {
    var response = _ref4.response;

    var key = parseInt(_.findKey(state.tags, { id: response.id }));
    if (key) {
        Vue.set(state.tags, key, response);
    }
};

var remove = function remove(state, _ref5) {
    var requestData = _ref5.requestData;

    Vue.set(state, "tags", _.reject(state.tags, { id: requestData.value }));
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    tags: [],
    tag: null
});

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get() {
    return Vue.request().get('/api/technologies', 'technologies/setAll');
};

var store = function store(_ref, form) {
    _objectDestructuringEmpty(_ref);

    return Vue.request(form).post('/api/technologies', 'technologies/add').then(function () {
        app.showSuccess('You have created a new technologies');
        app.$router.push({ name: 'admin-technologies' });
    });
};

var show = function show(_ref2, technology) {
    _objectDestructuringEmpty(_ref2);

    return Vue.request().get('/api/technologies/' + technology, 'technologies/set');
};

var update = function update(_ref3, form) {
    _objectDestructuringEmpty(_ref3);

    return Vue.request(form).put('/api/technologies/' + form.technology, 'technologies/update').then(function () {
        app.showSuccess('You have updated the technologies');
        app.$router.push({ name: 'admin-technologies' });
    });
};

var destroy = function destroy(_ref4, technologies) {
    _objectDestructuringEmpty(_ref4);

    return Vue.request(technologies).delete('/api/technologies/' + technologies, 'technologies/remove').then(function () {
        app.showSuccess('You have deleted the technologies');
        app.$router.push({ name: 'admin-technologies' });
    });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(256);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_, Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var set = function set(state, _ref) {
    var response = _ref.response;

    state.technology = response;
};

var setAll = function setAll(state, _ref2) {
    var response = _ref2.response;

    state.technologies = response;
};

var add = function add(state, _ref3) {
    var response = _ref3.response;

    state.technologies.push(response);
};

var update = function update(state, _ref4) {
    var response = _ref4.response;

    var key = parseInt(_.findKey(state.technologies, { id: response.id }));
    if (key) {
        Vue.set(state.technologies, key, response);
    }
};

var remove = function remove(state, _ref5) {
    var requestData = _ref5.requestData;

    Vue.set(state, "technologies", _.reject(state.technologies, { id: requestData.value }));
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    technology: null,
    technologies: []
});

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get() {
    return Vue.request().get('/api/timelines', 'timelines/setAll');
};

var store = function store(_ref, data) {
    _objectDestructuringEmpty(_ref);

    return Vue.request(data).post('/api/timelines', 'timelines/add').then(function () {
        app.showSuccess('You have created a new timeline');
        app.$router.push({ name: 'admin-timelines' });
    });
};

var show = function show(_ref2, timeline) {
    _objectDestructuringEmpty(_ref2);

    return Vue.request().get('/api/timelines/' + timeline, 'timelines/set');
};

var update = function update(_ref3, form) {
    _objectDestructuringEmpty(_ref3);

    return Vue.request(form).put('/api/timelines/' + form.timeline, 'timelines/update').then(function () {
        app.showSuccess('You have updated the timeline');
        app.$router.push({ name: 'admin-timelines' });
    });
};

var destroy = function destroy(_ref4, timeline) {
    _objectDestructuringEmpty(_ref4);

    return Vue.request(timeline).delete('/api/timelines/' + timeline, 'timelines/remove').then(function () {
        app.showSuccess('You have deleted the timeline');
        app.$router.push({ name: 'admin-timelines' });
    });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(260);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_, Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var set = function set(state, _ref) {
    var response = _ref.response;

    state.timeline = response;
};

var setAll = function setAll(state, _ref2) {
    var response = _ref2.response;

    state.timelines = response;
};

var add = function add(state, _ref3) {
    var response = _ref3.response;

    state.timelines.push(response);
};

var update = function update(state, _ref4) {
    var response = _ref4.response;

    var key = parseInt(_.findKey(state.timelines, { id: response.id }));
    if (key) {
        Vue.set(state.timelines, key, response);
    }
};

var remove = function remove(state, _ref5) {
    var requestData = _ref5.requestData;

    Vue.set(state, "timelines", _.reject(state.timelines, { id: requestData.value }));
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    timelines: [],
    timeline: null
});

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get() {
    return Vue.request().get('/api/users', 'users/setAll');
};

var destroy = function destroy(_ref, timeline) {
    _objectDestructuringEmpty(_ref);

    return Vue.request(timeline).delete('/api/users/' + timeline, 'users/remove').then(function () {
        app.showSuccess('You have deleted the user');
    });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(264);




/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__
});

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
var setAll = function setAll(state, _ref) {
    var response = _ref.response;

    state.users = response.data;
    state.pagination = response;
};

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    users: [],
    pagination: {}
});

/***/ }),
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, _) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){var b=function(c,d){this.id=++a.FE.ID,this.opts=a.extend(!0,{},a.extend({},b.DEFAULTS,"object"==typeof d&&d));var e=JSON.stringify(this.opts);a.FE.OPTS_MAPPING[e]=a.FE.OPTS_MAPPING[e]||this.id,this.sid=a.FE.OPTS_MAPPING[e],a.FE.SHARED[this.sid]=a.FE.SHARED[this.sid]||{},this.shared=a.FE.SHARED[this.sid],this.shared.count=(this.shared.count||0)+1,this.$oel=a(c),this.$oel.data("froala.editor",this),this.o_doc=c.ownerDocument,this.o_win="defaultView"in this.o_doc?this.o_doc.defaultView:this.o_doc.parentWindow;var f=a(this.o_win).scrollTop();this.$oel.on("froala.doInit",a.proxy(function(){this.$oel.off("froala.doInit"),this.doc=this.$el.get(0).ownerDocument,this.win="defaultView"in this.doc?this.doc.defaultView:this.doc.parentWindow,this.$doc=a(this.doc),this.$win=a(this.win),this.opts.pluginsEnabled||(this.opts.pluginsEnabled=Object.keys(a.FE.PLUGINS)),this.opts.initOnClick?(this.load(a.FE.MODULES),this.$el.on("touchstart.init",function(){a(this).data("touched",!0)}),this.$el.on("touchmove.init",function(){a(this).removeData("touched")}),this.$el.on("mousedown.init touchend.init dragenter.init focus.init",a.proxy(function(b){if("touchend"==b.type&&!this.$el.data("touched"))return!0;if(1===b.which||!b.which){this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init"),this.load(a.FE.MODULES),this.load(a.FE.PLUGINS);var c=b.originalEvent&&b.originalEvent.originalTarget;c&&"IMG"==c.tagName&&a(c).trigger("mousedown"),void 0===this.ul&&this.destroy(),"touchend"==b.type&&this.image&&b.originalEvent&&b.originalEvent.target&&a(b.originalEvent.target).is("img")&&setTimeout(a.proxy(function(){this.image.edit(a(b.originalEvent.target))},this),100),this.ready=!0,this.events.trigger("initialized")}},this)),this.events.trigger("initializationDelayed")):(this.load(a.FE.MODULES),this.load(a.FE.PLUGINS),a(this.o_win).scrollTop(f),void 0===this.ul&&this.destroy(),this.ready=!0,this.events.trigger("initialized"))},this)),this._init()};b.DEFAULTS={initOnClick:!1,pluginsEnabled:null},b.MODULES={},b.PLUGINS={},b.VERSION="2.6.5",b.INSTANCES=[],b.OPTS_MAPPING={},b.SHARED={},b.ID=0,b.prototype._init=function(){var b=this.$oel.prop("tagName");this.$oel.closest("label").length;var c=a.proxy(function(){"TEXTAREA"!=b&&(this._original_html=this._original_html||this.$oel.html()),this.$box=this.$box||this.$oel,this.opts.fullPage&&(this.opts.iframe=!0),this.opts.iframe?(this.$iframe=a('<iframe src="about:blank" frameBorder="0">'),this.$wp=a("<div></div>"),this.$box.html(this.$wp),this.$wp.append(this.$iframe),this.$iframe.get(0).contentWindow.document.open(),this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"),this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"),this.$iframe.get(0).contentWindow.document.close(),this.$el=this.$iframe.contents().find("body"),this.el=this.$el.get(0),this.$head=this.$iframe.contents().find("head"),this.$html=this.$iframe.contents().find("html"),this.iframe_document=this.$iframe.get(0).contentWindow.document,this.$oel.trigger("froala.doInit")):(this.$el=a("<div></div>"),this.el=this.$el.get(0),this.$wp=a("<div></div>").append(this.$el),this.$box.html(this.$wp),this.$oel.trigger("froala.doInit"))},this),d=a.proxy(function(){this.$box=a("<div>"),this.$oel.before(this.$box).hide(),this._original_html=this.$oel.val(),this.$oel.parents("form").on("submit."+this.id,a.proxy(function(){this.events.trigger("form.submit")},this)),this.$oel.parents("form").on("reset."+this.id,a.proxy(function(){this.events.trigger("form.reset")},this)),c()},this),e=a.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.$el.attr("contenteditable",!0).css("outline","none").css("display","inline-block"),this.opts.multiLine=!1,this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),f=a.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),g=a.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.on("click.popup",function(a){a.preventDefault()}),this.$oel.trigger("froala.doInit")},this);this.opts.editInPopup?g():"TEXTAREA"==b?d():"A"==b?e():"IMG"==b?f():"BUTTON"==b||"INPUT"==b?(this.opts.editInPopup=!0,this.opts.toolbarInline=!1,g()):c()},b.prototype.load=function(b){for(var c in b)if(b.hasOwnProperty(c)){if(this[c])continue;if(a.FE.PLUGINS[c]&&this.opts.pluginsEnabled.indexOf(c)<0)continue;if(this[c]=new b[c](this),this[c]._init&&(this[c]._init(),this.opts.initOnClick&&"core"==c))return!1}},b.prototype.destroy=function(){this.shared.count--,this.events.$off();var b=this.html.get();if(this.events.trigger("destroy",[],!0),this.events.trigger("shared.destroy",void 0,!0),0===this.shared.count){for(var c in this.shared)this.shared.hasOwnProperty(c)&&(this.shared[c],a.FE.SHARED[this.sid][c]=null);a.FE.SHARED[this.sid]={}}this.$oel.parents("form").off("."+this.id),this.$oel.off("click.popup"),this.$oel.removeData("froala.editor"),this.$oel.off("froalaEditor"),this.core.destroy(b),a.FE.INSTANCES.splice(a.FE.INSTANCES.indexOf(this),1)},a.fn.froalaEditor=function(c){for(var d=[],e=0;e<arguments.length;e++)d.push(arguments[e]);if("string"==typeof c){var f=[];return this.each(function(){var b=a(this),e=b.data("froala.editor");if(e){var g,h;if(c.indexOf(".")>0&&e[c.split(".")[0]]?(e[c.split(".")[0]]&&(g=e[c.split(".")[0]]),h=c.split(".")[1]):(g=e,h=c.split(".")[0]),!g[h])return a.error("Method "+c+" does not exist in Froala Editor.");var i=g[h].apply(e,d.slice(1));void 0===i?f.push(this):0===f.length&&f.push(i)}}),1==f.length?f[0]:f}if("object"==typeof c||!c)return this.each(function(){a(this).data("froala.editor")||new b(this,c)})},a.fn.froalaEditor.Constructor=b,a.FroalaEditor=b,a.FE=b,a.FE.XS=0,a.FE.SM=1,a.FE.MD=2,a.FE.LG=3;var c="a-z\\u0080-\\u009f\\u00a1-\\uffff0-9";if(a.FE.LinkRegExCommon="((["+c+"])|(["+c+"](\\.|-|_))){1,}["+c+"]{1,}",a.FE.LinkRegExEnd="((:[0-9]{1,5})|())(((\\/|)[a-z\\u00a1-\\uffff0-9@?!^=%&amp;/~+#-_{}]*)|())",a.FE.LinkRegExTLD="(("+a.FE.LinkRegExCommon+")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))",a.FE.LinkRegExHTTP="((ftp|http|https):\\/\\/(www\\.)?"+a.FE.LinkRegExCommon+")",a.FE.LinkRegExAuth="((ftp|http|https):\\/\\/(www\\.)?[\\u0021-\\uffff]{1,}@"+a.FE.LinkRegExCommon+")",a.FE.LinkRegExWWW="(((ftp|http|https):\\/\\/)?www\\."+a.FE.LinkRegExCommon+"\\.[a-z0-9-]{2,24})",a.FE.LinkRegEx="("+a.FE.LinkRegExTLD+"|"+a.FE.LinkRegExHTTP+"|"+a.FE.LinkRegExAuth+"|"+a.FE.LinkRegExWWW+")"+a.FE.LinkRegExEnd,a.FE.MAIL_REGEX=/.+@.+\..+/i,a.FE.MODULES.helpers=function(b){function c(){var a,b,c=-1;return"Microsoft Internet Explorer"==navigator.appName?(a=navigator.userAgent,b=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"),null!==b.exec(a)&&(c=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(a=navigator.userAgent,b=new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"),null!==b.exec(a)&&(c=parseFloat(RegExp.$1))),c}function d(){var a={},b=c();if(b>0)a.msie=!0;else{var d=navigator.userAgent.toLowerCase(),e=/(edge)[ \/]([\w.]+)/.exec(d)||/(chrome)[ \/]([\w.]+)/.exec(d)||/(webkit)[ \/]([\w.]+)/.exec(d)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||d.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)||[],f={browser:e[1]||"",version:e[2]||"0"};e[1]&&(a[f.browser]=!0),a.chrome?a.webkit=!0:a.webkit&&(a.safari=!0)}return a.msie&&(a.version=b),a}function e(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!h()}function f(){return/(Android)/g.test(navigator.userAgent)&&!h()}function g(){return/(Blackberry)/g.test(navigator.userAgent)}function h(){return/(Windows Phone)/gi.test(navigator.userAgent)}function i(){return f()||e()||g()}function j(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}function k(a){return parseInt(a,10)||0}function l(){var b=a('<div class="fr-visibility-helper"></div>').appendTo("body:first"),c=k(b.css("margin-left"));return b.remove(),c}function m(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch}function n(b){return!!/^(https?:|ftps?:|)\/\//i.test(b)&&(b=String(b).replace(/</g,"%3C").replace(/>/g,"%3E").replace(/"/g,"%22").replace(/ /g,"%20"),new RegExp("^"+a.FE.LinkRegEx+"$","gi").test(b))}function o(a){if(/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(a))return a;if(/^(https?:|ftps?:|)\/\//i.test(a)){if(!n(a)&&!n("http:"+a))return""}else a=encodeURIComponent(a).replace(/%23/g,"#").replace(/%2F/g,"/").replace(/%25/g,"%").replace(/mailto%3A/gi,"mailto:").replace(/file%3A/gi,"file:").replace(/sms%3A/gi,"sms:").replace(/tel%3A/gi,"tel:").replace(/notes%3A/gi,"notes:").replace(/data%3Aimage/gi,"data:image").replace(/blob%3A/gi,"blob:").replace(/webkit-fake-url%3A/gi,"webkit-fake-url:").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&").replace(/&amp;/g,"&").replace(/%2C/g,",").replace(/%3B/g,";").replace(/%2B/g,"+").replace(/%40/g,"@").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%7B/g,"{").replace(/%7D/g,"}");return a}function p(a){return a&&!a.propertyIsEnumerable("length")&&"object"==typeof a&&"number"==typeof a.length}function q(a){function b(a){return("0"+parseInt(a,10).toString(16)).slice(-2)}try{return a&&"transparent"!==a?/^#[0-9A-F]{6}$/i.test(a)?a:(a=a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),("#"+b(a[1])+b(a[2])+b(a[3])).toUpperCase()):""}catch(c){return null}}function r(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,b,c,d){return b+b+c+c+d+d});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?"rgb("+parseInt(c[1],16)+", "+parseInt(c[2],16)+", "+parseInt(c[3],16)+")":""}function s(c){var d=(c.css("text-align")||"").replace(/-(.*)-/g,"");if(["left","right","justify","center"].indexOf(d)<0){if(!y){var e=a('<div dir="'+("rtl"==b.opts.direction?"rtl":"auto")+'" style="text-align: '+b.$el.css("text-align")+'; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>');a("body:first").append(e);var f=e.find("#s1").get(0).getBoundingClientRect().left,g=e.find("#s2").get(0).getBoundingClientRect().left;e.remove(),y=f<g?"left":"right"}d=y}return d}function t(){return null==z&&(z=navigator.platform.toUpperCase().indexOf("MAC")>=0),z}function u(){function a(a,b){var e=a[b];a[b]=function(a){var b,f=!1,g=!1;if(a&&a.match(d)){a=a.replace(d,""),this.parentNode||(c.appendChild(this),g=!0);var h=this.parentNode;return this.id||(this.id="rootedQuerySelector_id_"+(new Date).getTime(),f=!0),b=e.call(h,"#"+this.id+" "+a),f&&(this.id=""),g&&c.removeChild(this),b}return e.call(this,a)}}var c=b.o_doc.createElement("div");try{c.querySelectorAll(":scope *")}catch(e){var d=/^\s*:scope/gi;a(Element.prototype,"querySelector"),a(Element.prototype,"querySelectorAll"),a(HTMLElement.prototype,"querySelector"),a(HTMLElement.prototype,"querySelectorAll")}}function v(){return b.o_win.pageYOffset?b.o_win.pageYOffset:b.o_doc.documentElement&&b.o_doc.documentElement.scrollTop?b.o_doc.documentElement.scrollTop:b.o_doc.body.scrollTop?b.o_doc.body.scrollTop:0}function w(){return b.o_win.pageXOffset?b.o_win.pageXOffset:b.o_doc.documentElement&&b.o_doc.documentElement.scrollLeft?b.o_doc.documentElement.scrollLeft:b.o_doc.body.scrollLeft?b.o_doc.body.scrollLeft:0}function x(){b.browser=d(),u()}var y,z=null;return{_init:x,isIOS:e,isMac:t,isAndroid:f,isBlackberry:g,isWindowsPhone:h,isMobile:i,requestAnimationFrame:j,getPX:k,screenSize:l,isTouch:m,sanitizeURL:o,isArray:p,RGBToHex:q,HEXtoRGB:r,isURL:n,getAlignment:s,scrollTop:v,scrollLeft:w}},a.FE.MODULES.events=function(b){function c(a,b,c){s(a,b,c)}function d(){c(b.$el,"cut copy paste beforepaste",function(a){v(a.type,[a])})}function e(){c(b.$el,"click mouseup mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart",function(a){v(a.type,[a])}),r("mousedown",function(){for(var c=0;c<a.FE.INSTANCES.length;c++)a.FE.INSTANCES[c]!=b&&a.FE.INSTANCES[c].popups&&a.FE.INSTANCES[c].popups.areVisible()&&a.FE.INSTANCES[c].$el.find(".fr-marker").remove()})}function f(){c(b.$el,"keydown keypress keyup input",function(a){v(a.type,[a])})}function g(){c(b.$win,b._mousedown,function(a){v("window.mousedown",[a]),n()}),c(b.$win,b._mouseup,function(a){v("window.mouseup",[a])}),c(b.$win,"cut copy keydown keyup touchmove touchend",function(a){v("window."+a.type,[a])})}function h(){c(b.$doc,"dragend drop",function(a){v("document."+a.type,[a])})}function i(c){if(void 0===c&&(c=!0),!b.$wp)return!1;if(b.helpers.isIOS()&&b.$win.get(0).focus(),!b.core.hasFocus()&&c){var d=b.$win.scrollTop();return b.browser.msie&&b.$box&&b.$box.css("position","fixed"),b.browser.msie&&b.$wp&&b.$wp.css("overflow","visible"),b.$el.focus(),b.browser.msie&&b.$box&&b.$box.css("position",""),b.browser.msie&&b.$wp&&b.$wp.css("overflow","auto"),d!=b.$win.scrollTop()&&b.$win.scrollTop(d),!1}if(!b.core.hasFocus()||b.$el.find(".fr-marker").length>0)return!1;if(b.selection.info(b.el).atStart&&b.selection.isCollapsed()&&null!=b.html.defaultTag()){var e=b.markers.insert();if(e&&!b.node.blockParent(e)){a(e).remove();var f=b.$el.find(b.html.blockTagsQuery()).get(0);f&&(a(f).prepend(a.FE.MARKERS),b.selection.restore())}else e&&a(e).remove()}}function j(){c(b.$el,"focus",function(a){p()&&(i(!1),!1===C&&v(a.type,[a]))}),c(b.$el,"blur",function(a){p()&&!0===C&&(v(a.type,[a]),n())}),r("focus",function(){C=!0}),r("blur",function(){C=!1})}function k(){b.helpers.isMobile()?(b._mousedown="touchstart",b._mouseup="touchend",b._move="touchmove",b._mousemove="touchmove"):(b._mousedown="mousedown",b._mouseup="mouseup",b._move="",b._mousemove="mousemove")}function l(c){var d=a(c.currentTarget);return b.edit.isDisabled()||b.node.hasClass(d.get(0),"fr-disabled")?(c.preventDefault(),!1):"mousedown"===c.type&&1!==c.which||(b.helpers.isMobile()||c.preventDefault(),(b.helpers.isAndroid()||b.helpers.isWindowsPhone())&&0===d.parents(".fr-dropdown-menu").length&&(c.preventDefault(),c.stopPropagation()),d.addClass("fr-selected"),void b.events.trigger("commands.mousedown",[d]))}function m(c,d){var e=a(c.currentTarget);if(b.edit.isDisabled()||b.node.hasClass(e.get(0),"fr-disabled"))return c.preventDefault(),!1;if("mouseup"===c.type&&1!==c.which)return!0;if(!b.node.hasClass(e.get(0),"fr-selected"))return!0;if("touchmove"!=c.type){if(c.stopPropagation(),c.stopImmediatePropagation(),c.preventDefault(),!b.node.hasClass(e.get(0),"fr-selected"))return b.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),!1;if(b.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),e.data("dragging")||e.attr("disabled"))return e.removeData("dragging"),!1;var f=e.data("timeout");f&&(clearTimeout(f),e.removeData("timeout")),d.apply(b,[c])}else e.data("timeout")||e.data("timeout",setTimeout(function(){e.data("dragging",!0)},100))}function n(){A=!0}function o(){A=!1}function p(){return A}function q(a,c,d){s(a,b._mousedown,c,function(a){b.edit.isDisabled()||l(a)},!0),s(a,b._mouseup+" "+b._move,c,function(a){b.edit.isDisabled()||m(a,d)},!0),s(a,"mousedown click mouseup",c,function(a){b.edit.isDisabled()||a.stopPropagation()},!0),r("window.mouseup",function(){b.edit.isDisabled()||(a.find(c).removeClass("fr-selected"),n())})}function r(a,c,d){var e=a.split(" ");if(e.length>1){for(var f=0;f<e.length;f++)r(e[f],c,d);return!0}void 0===d&&(d=!1);var g;g=0!==a.indexOf("shared.")?B[a]=B[a]||[]:b.shared._events[a]=b.shared._events[a]||[],d?g.unshift(c):g.push(c)}function s(a,c,d,e,f){"function"==typeof d&&(f=e,e=d,d=!1);var g=f?b.shared.$_events:D,h=f?b.sid:b.id;d?a.on(c.split(" ").join(".ed"+h+" ")+".ed"+h,d,e):a.on(c.split(" ").join(".ed"+h+" ")+".ed"+h,e),g.push([a,c.split(" ").join(".ed"+h+" ")+".ed"+h])}function t(a){for(var b=0;b<a.length;b++)a[b][0].off(a[b][1])}function u(){t(D),D=[],0===b.shared.count&&(t(b.shared.$_events),b.shared.$_events=[])}function v(c,d,e){if(!b.edit.isDisabled()||e){var f;if(0!==c.indexOf("shared."))f=B[c];else{if(b.shared.count>0)return!1;f=b.shared._events[c]}var g;if(f)for(var h=0;h<f.length;h++)if(!1===(g=f[h].apply(b,d)))return!1;return!1!==(g=b.$oel.triggerHandler("froalaEditor."+c,a.merge([b],d||[])))&&g}}function w(c,d,e){if(!b.edit.isDisabled()||e){var f;if(0!==c.indexOf("shared."))f=B[c];else{if(b.shared.count>0)return!1;f=b.shared._events[c]}var g;if(f)for(var h=0;h<f.length;h++)void 0!==(g=f[h].apply(b,[d]))&&(d=g);return g=b.$oel.triggerHandler("froalaEditor."+c,a.merge([b],[d])),void 0!==g&&(d=g),d}}function x(){for(var a in B)B.hasOwnProperty(a)&&delete B[a]}function y(){for(var a in b.shared._events)b.shared._events.hasOwnProperty(a)&&delete b.shared._events[a]}function z(){b.shared.$_events=b.shared.$_events||[],b.shared._events={},k(),e(),g(),h(),f(),j(),n(),d(),r("destroy",x),r("shared.destroy",y)}var A,B={},C=!1,D=[];return{_init:z,on:r,trigger:v,bindClick:q,disableBlur:o,enableBlur:n,blurActive:p,focus:i,chainTrigger:w,$on:s,$off:u}},a.FE.MODULES.node=function(b){function c(a){return a&&"IFRAME"!=a.tagName?Array.prototype.slice.call(a.childNodes||[]):[]}function d(b){return!!b&&(b.nodeType==Node.ELEMENT_NODE&&a.FE.BLOCK_TAGS.indexOf(b.tagName.toLowerCase())>=0)}function e(a){return!!a&&(a.nodeType==Node.ELEMENT_NODE&&"a"==a.tagName.toLowerCase())}function f(e,f){if(!e)return!0;if(e.querySelector("table"))return!1;var g=c(e);1==g.length&&d(g[0])&&(g=c(g[0]));for(var h=!1,i=0;i<g.length;i++){var j=g[i];if((!f||!b.node.hasClass(j,"fr-marker"))&&(j.nodeType!=Node.TEXT_NODE||0!==j.textContent.length)){if("BR"!=j.tagName&&(j.textContent||"").replace(/\u200B/gi,"").replace(/\n/g,"").length>0)return!1;if(h)return!1;"BR"==j.tagName&&(h=!0)}}return!(e.querySelectorAll(a.FE.VOID_ELEMENTS.join(",")).length-e.querySelectorAll("br").length)&&(!e.querySelector(b.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")&&(!(e.querySelectorAll(a.FE.BLOCK_TAGS.join(",")).length>1)&&!e.querySelector(b.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)")))}function g(a){for(;a&&a.parentNode!==b.el&&(!a.parentNode||!b.node.hasClass(a.parentNode,"fr-inner"));)if(a=a.parentNode,d(a))return a;return null}function h(c,e,f){if(void 0===e&&(e=[]),void 0===f&&(f=!0),e.push(b.el),e.indexOf(c.parentNode)>=0||c.parentNode&&b.node.hasClass(c.parentNode,"fr-inner")||c.parentNode&&a.FE.SIMPLE_ENTER_TAGS.indexOf(c.parentNode.tagName)>=0&&f)return null;for(;e.indexOf(c.parentNode)<0&&c.parentNode&&!b.node.hasClass(c.parentNode,"fr-inner")&&(a.FE.SIMPLE_ENTER_TAGS.indexOf(c.parentNode.tagName)<0||!f)&&(!d(c)||!d(c.parentNode)||!f);)c=c.parentNode;return c}function i(a){var b={},c=a.attributes;if(c)for(var d=0;d<c.length;d++){var e=c[d];b[e.nodeName]=e.value}return b}function j(a){for(var b="",c=i(a),d=Object.keys(c).sort(),e=0;e<d.length;e++){var f=d[e],g=c[f];g.indexOf("'")<0&&g.indexOf('"')>=0?b+=" "+f+"='"+g+"'":g.indexOf('"')>=0&&g.indexOf("'")>=0?(g=g.replace(/"/g,"&quot;"),b+=" "+f+'="'+g+'"'):b+=" "+f+'="'+g+'"'}return b}function k(a){for(var b=a.attributes,c=b.length-1;c>=0;c--){var d=b[c];a.removeAttribute(d.nodeName)}}function l(a){return"<"+a.tagName.toLowerCase()+j(a)+">"}function m(a){return"</"+a.tagName.toLowerCase()+">"}function n(a,c){void 0===c&&(c=!0);for(var d=a.previousSibling;d&&c&&b.node.hasClass(d,"fr-marker");)d=d.previousSibling;return!d||d.nodeType==Node.TEXT_NODE&&""===d.textContent&&n(d)}function o(a,c){void 0===c&&(c=!0);for(var d=a.nextSibling;d&&c&&b.node.hasClass(d,"fr-marker");)d=d.nextSibling;return!d||d.nodeType==Node.TEXT_NODE&&""===d.textContent&&o(d)}function p(b){return b&&b.nodeType==Node.ELEMENT_NODE&&a.FE.VOID_ELEMENTS.indexOf((b.tagName||"").toLowerCase())>=0}function q(a){return!!a&&["UL","OL"].indexOf(a.tagName)>=0}function r(a){return a===b.el}function s(a){return a&&a.nodeType==Node.ELEMENT_NODE&&a.getAttribute("class")&&(a.getAttribute("class")||"").indexOf("fr-deletable")>=0}function t(a){return a===b.doc.activeElement&&(!b.doc.hasFocus||b.doc.hasFocus())&&!!(r(a)||a.type||a.href||~a.tabIndex)}function u(a){return(!a.getAttribute||"false"!=a.getAttribute("contenteditable"))&&["STYLE","SCRIPT"].indexOf(a.tagName)<0}function v(b,c){return b instanceof a&&(b=b.get(0)),b&&b.classList&&b.classList.contains(c)}function w(a){return b.browser.msie?a:{acceptNode:a}}return{isBlock:d,isEmpty:f,blockParent:g,deepestParent:h,rawAttributes:i,attributes:j,clearAttributes:k,openTagString:l,closeTagString:m,isFirstSibling:n,isLastSibling:o,isList:q,isLink:e,isElement:r,contents:c,isVoid:p,hasFocus:t,isEditable:u,isDeletable:s,hasClass:v,filter:w}},a.FE.INVISIBLE_SPACE="&#8203;",a.FE.START_MARKER='<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'+a.FE.INVISIBLE_SPACE+"</span>",a.FE.END_MARKER='<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'+a.FE.INVISIBLE_SPACE+"</span>",a.FE.MARKERS=a.FE.START_MARKER+a.FE.END_MARKER,a.FE.MODULES.markers=function(b){function c(c,d){return a('<span class="fr-marker" data-id="'+d+'" data-type="'+c+'" style="display: '+(b.browser.safari?"none":"inline-block")+'; line-height: 0;">'+a.FE.INVISIBLE_SPACE+"</span>",b.doc)[0]}function d(d,e,f){var g,h,i;try{var j=d.cloneRange();if(j.collapse(e),j.insertNode(c(e,f)),!0===e)for(g=b.$el.find('span.fr-marker[data-type="true"][data-id="'+f+'"]').get(0),i=g.nextSibling;i&&i.nodeType===Node.TEXT_NODE&&0===i.textContent.length;)a(i).remove(),i=g.nextSibling;if(!0===e&&!d.collapsed){for(;!b.node.isElement(g.parentNode)&&!i;)a(g.parentNode).after(g),i=g.nextSibling;if(i&&i.nodeType===Node.ELEMENT_NODE&&b.node.isBlock(i)){h=[i];do{i=h[0],h=b.node.contents(i)}while(h[0]&&b.node.isBlock(h[0]));a(i).prepend(a(g))}}if(!1===e&&!d.collapsed){if(g=b.$el.find('span.fr-marker[data-type="false"][data-id="'+f+'"]').get(0),(i=g.previousSibling)&&i.nodeType===Node.ELEMENT_NODE&&b.node.isBlock(i)){h=[i];do{i=h[h.length-1],h=b.node.contents(i)}while(h[h.length-1]&&b.node.isBlock(h[h.length-1]));a(i).append(a(g))}g.parentNode&&["TD","TH"].indexOf(g.parentNode.tagName)>=0&&g.parentNode.previousSibling&&!g.previousSibling&&a(g.parentNode.previousSibling).append(g)}var k=b.$el.find('span.fr-marker[data-type="'+e+'"][data-id="'+f+'"]').get(0);return k&&(k.style.display="none"),k}catch(l){return null}}function e(){if(!b.$wp)return null;try{var c=b.selection.ranges(0),d=c.commonAncestorContainer;if(d!=b.el&&0===b.$el.find(d).length)return null;var e=c.cloneRange(),f=c.cloneRange();e.collapse(!0);var g=a('<span class="fr-marker" style="display: none; line-height: 0;">'+a.FE.INVISIBLE_SPACE+"</span>",b.doc)[0];if(e.insertNode(g),g=b.$el.find("span.fr-marker").get(0)){for(var h=g.nextSibling;h&&h.nodeType===Node.TEXT_NODE&&0===h.textContent.length;)a(h).remove(),h=b.$el.find("span.fr-marker").get(0).nextSibling;return b.selection.clear(),b.selection.get().addRange(f),g}return null}catch(i){}}function f(){b.selection.isCollapsed()||b.selection.remove();var c=b.$el.find(".fr-marker").get(0);if(null==c&&(c=e()),null==c)return null;var d=b.node.deepestParent(c);if(d||(d=b.node.blockParent(c))&&"LI"!=d.tagName&&(d=null),d)if(b.node.isBlock(d)&&b.node.isEmpty(d))"LI"!=d.tagName||d.parentNode.firstElementChild!=d||b.node.isEmpty(d.parentNode)?a(d).replaceWith('<span class="fr-marker"></span>'):a(d).append('<span class="fr-marker"></span>');else if(b.cursor.isAtStart(c,d))a(d).before('<span class="fr-marker"></span>'),a(c).remove();else if(b.cursor.isAtEnd(c,d))a(d).after('<span class="fr-marker"></span>'),a(c).remove();else{var f=c,g="",h="";do{f=f.parentNode,g+=b.node.closeTagString(f),h=b.node.openTagString(f)+h}while(f!=d);a(c).replaceWith('<span id="fr-break"></span>');var i=b.node.openTagString(d)+a(d).html()+b.node.closeTagString(d);i=i.replace(/<span id="fr-break"><\/span>/g,g+'<span class="fr-marker"></span>'+h),a(d).replaceWith(i)}return b.$el.find(".fr-marker").get(0)}function g(a){var c=a.clientX,d=a.clientY;h();var f,g=null;if(void 0!==b.doc.caretPositionFromPoint?(f=b.doc.caretPositionFromPoint(c,d),g=b.doc.createRange(),g.setStart(f.offsetNode,f.offset),g.setEnd(f.offsetNode,f.offset)):void 0!==b.doc.caretRangeFromPoint&&(f=b.doc.caretRangeFromPoint(c,d),g=b.doc.createRange(),g.setStart(f.startContainer,f.startOffset),g.setEnd(f.startContainer,f.startOffset)),null!==g&&void 0!==b.win.getSelection){var i=b.win.getSelection();i.removeAllRanges(),i.addRange(g)}else if(void 0!==b.doc.body.createTextRange)try{g=b.doc.body.createTextRange(),g.moveToPoint(c,d);var j=g.duplicate();j.moveToPoint(c,d),g.setEndPoint("EndToEnd",j),g.select()}catch(k){return!1}e()}function h(){b.$el.find(".fr-marker").remove()}return{place:d,insert:e,split:f,insertAtPoint:g,remove:h}},a.FE.MODULES.selection=function(b){function c(){var a="";return b.win.getSelection?a=b.win.getSelection():b.doc.getSelection?a=b.doc.getSelection():b.doc.selection&&(a=b.doc.selection.createRange().text),a.toString()}function d(){return b.win.getSelection?b.win.getSelection():b.doc.getSelection?b.doc.getSelection():b.doc.selection.createRange()}function e(a){var c=d(),e=[];if(c&&c.getRangeAt&&c.rangeCount){e=[];for(var f=0;f<c.rangeCount;f++)e.push(c.getRangeAt(f))}else e=b.doc.createRange?[b.doc.createRange()]:[];return void 0!==a?e[a]:e}function f(){var a=d();try{a.removeAllRanges?a.removeAllRanges():a.empty?a.empty():a.clear&&a.clear()}catch(b){}}function g(){var f=d();try{if(f.rangeCount){var g,h=e(0),i=h.startContainer;if(i.nodeType==Node.TEXT_NODE&&h.startOffset==(i.textContent||"").length&&i.nextSibling&&(i=i.nextSibling),i.nodeType==Node.ELEMENT_NODE){var j=!1;if(i.childNodes.length>0&&i.childNodes[h.startOffset]){for(g=i.childNodes[h.startOffset];g&&g.nodeType==Node.TEXT_NODE&&0===g.textContent.length;)g=g.nextSibling;if(g&&g.textContent.replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&(i=g,j=!0),!j&&i.childNodes.length>1&&h.startOffset>0&&i.childNodes[h.startOffset-1]){for(g=i.childNodes[h.startOffset-1];g&&g.nodeType==Node.TEXT_NODE&&0===g.textContent.length;)g=g.nextSibling;g&&g.textContent.replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&(i=g,j=!0)}}else!h.collapsed&&i.nextSibling&&i.nextSibling.nodeType==Node.ELEMENT_NODE&&(g=i.nextSibling)&&g.textContent.replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&(i=g,j=!0);!j&&i.childNodes.length>0&&a(i.childNodes[0]).text().replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&["BR","IMG","HR"].indexOf(i.childNodes[0].tagName)<0&&(i=i.childNodes[0])}for(;i.nodeType!=Node.ELEMENT_NODE&&i.parentNode;)i=i.parentNode;for(var k=i;k&&"HTML"!=k.tagName;){if(k==b.el)return i;k=a(k).parent()[0]}}}catch(l){}return b.el}function h(){var f=d();try{if(f.rangeCount){var g,h=e(0),i=h.endContainer;if(i.nodeType==Node.ELEMENT_NODE){var j=!1;i.childNodes.length>0&&i.childNodes[h.endOffset]&&a(i.childNodes[h.endOffset]).text()===c()?(i=i.childNodes[h.endOffset],j=!0):!h.collapsed&&i.previousSibling&&i.previousSibling.nodeType==Node.ELEMENT_NODE?(g=i.previousSibling)&&g.textContent.replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&(i=g,j=!0):!h.collapsed&&i.childNodes.length>0&&i.childNodes[h.endOffset]&&(g=i.childNodes[h.endOffset].previousSibling,g.nodeType==Node.ELEMENT_NODE&&g&&g.textContent.replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&(i=g,j=!0)),!j&&i.childNodes.length>0&&a(i.childNodes[i.childNodes.length-1]).text()===c()&&["BR","IMG","HR"].indexOf(i.childNodes[i.childNodes.length-1].tagName)<0&&(i=i.childNodes[i.childNodes.length-1])}for(i.nodeType==Node.TEXT_NODE&&0===h.endOffset&&i.previousSibling&&i.previousSibling.nodeType==Node.ELEMENT_NODE&&(i=i.previousSibling);i.nodeType!=Node.ELEMENT_NODE&&i.parentNode;)i=i.parentNode;for(var k=i;k&&"HTML"!=k.tagName;){if(k==b.el)return i;k=a(k).parent()[0]}}}catch(l){}return b.el}function i(a,b){var c=a;return c.nodeType==Node.ELEMENT_NODE&&c.childNodes.length>0&&c.childNodes[b]&&(c=c.childNodes[b]),c.nodeType==Node.TEXT_NODE&&(c=c.parentNode),c}function j(){var c,f=[],g=d();if(u()&&g.rangeCount){var h=e();for(c=0;c<h.length;c++){var j,k=h[c],l=i(k.startContainer,k.startOffset),m=i(k.endContainer,k.endOffset);b.node.isBlock(l)&&f.indexOf(l)<0&&f.push(l),j=b.node.blockParent(l),j&&f.indexOf(j)<0&&f.push(j);for(var n=[],o=l;o!==m&&o!==b.el;)n.indexOf(o)<0&&o.children&&o.children.length?(n.push(o),o=o.children[0]):o.nextSibling?o=o.nextSibling:o.parentNode&&(o=o.parentNode,n.push(o)),b.node.isBlock(o)&&n.indexOf(o)<0&&f.indexOf(o)<0&&(o!==m||k.endOffset>0)&&f.push(o);b.node.isBlock(m)&&f.indexOf(m)<0&&k.endOffset>0&&f.push(m),j=b.node.blockParent(m),j&&f.indexOf(j)<0&&f.push(j)}}for(c=f.length-1;c>0;c--)a(f[c]).find(f).length&&("LI"!=f[c].tagName||f[c].children.length>0&&f.indexOf(f[c].children[0])>=0)&&f.splice(c,1);return f}function k(){if(b.$wp){b.markers.remove();var c,d,f=e(),g=[];for(d=0;d<f.length;d++)if(f[d].startContainer!==b.doc||b.browser.msie){c=f[d];var h=c.collapsed,i=b.markers.place(c,!0,d),j=b.markers.place(c,!1,d);void 0!==i&&i||!h||(a(".fr-marker").remove(),b.selection.setAtEnd(b.el)),b.el.normalize(),b.browser.safari&&!h&&(c=b.doc.createRange(),c.setStartAfter(i),c.setEndBefore(j),g.push(c))}if(b.browser.safari&&g.length)for(b.selection.clear(),d=0;d<g.length;d++)b.selection.get().addRange(g[d])}}function l(){var c,e=b.el.querySelectorAll('.fr-marker[data-type="true"]');if(!b.$wp)return b.markers.remove(),!1;if(0===e.length)return!1;if(b.browser.msie||b.browser.edge)for(c=0;c<e.length;c++)e[c].style.display="inline-block";b.core.hasFocus()||b.browser.msie||b.browser.webkit||b.$el.focus(),f();var g=d();for(c=0;c<e.length;c++){var h=a(e[c]).data("id"),i=e[c],j=b.doc.createRange(),k=b.$el.find('.fr-marker[data-type="false"][data-id="'+h+'"]');(b.browser.msie||b.browser.edge)&&k.css("display","inline-block");var l=null;if(k.length>0){k=k[0];try{for(var n,o=!1,p=i.nextSibling;p&&p.nodeType==Node.TEXT_NODE&&0===p.textContent.length;)n=p,p=p.nextSibling,a(n).remove();for(var q=k.nextSibling;q&&q.nodeType==Node.TEXT_NODE&&0===q.textContent.length;)n=q,q=q.nextSibling,a(n).remove();if(i.nextSibling==k||k.nextSibling==i){for(var r=i.nextSibling==k?i:k,s=r==i?k:i,t=r.previousSibling;t&&t.nodeType==Node.TEXT_NODE&&0===t.length;)n=t,t=t.previousSibling,a(n).remove();if(t&&t.nodeType==Node.TEXT_NODE)for(;t&&t.previousSibling&&t.previousSibling.nodeType==Node.TEXT_NODE;)t.previousSibling.textContent=t.previousSibling.textContent+t.textContent,t=t.previousSibling,a(t.nextSibling).remove();for(var u=s.nextSibling;u&&u.nodeType==Node.TEXT_NODE&&0===u.length;)n=u,u=u.nextSibling,a(n).remove();if(u&&u.nodeType==Node.TEXT_NODE)for(;u&&u.nextSibling&&u.nextSibling.nodeType==Node.TEXT_NODE;)u.nextSibling.textContent=u.textContent+u.nextSibling.textContent,u=u.nextSibling,a(u.previousSibling).remove();if(t&&(b.node.isVoid(t)||b.node.isBlock(t))&&(t=null),u&&(b.node.isVoid(u)||b.node.isBlock(u))&&(u=null),t&&u&&t.nodeType==Node.TEXT_NODE&&u.nodeType==Node.TEXT_NODE){a(i).remove(),a(k).remove();var v=t.textContent.length;t.textContent=t.textContent+u.textContent,a(u).remove(),b.spaces.normalize(t),j.setStart(t,v),j.setEnd(t,v),o=!0}else!t&&u&&u.nodeType==Node.TEXT_NODE?(a(i).remove(),a(k).remove(),b.spaces.normalize(u),l=a(b.doc.createTextNode("\u200b")),a(u).before(l),j.setStart(u,0),j.setEnd(u,0),o=!0):!u&&t&&t.nodeType==Node.TEXT_NODE&&(a(i).remove(),a(k).remove(),b.spaces.normalize(t),l=a(b.doc.createTextNode("\u200b")),a(t).after(l),j.setStart(t,t.textContent.length),j.setEnd(t,t.textContent.length),o=!0)}if(!o){var w,x;(b.browser.chrome||b.browser.edge)&&i.nextSibling==k?(w=m(k,j,!0)||j.setStartAfter(k),x=m(i,j,!1)||j.setEndBefore(i)):(i.previousSibling==k&&(i=k,k=i.nextSibling),
k.nextSibling&&"BR"===k.nextSibling.tagName||!k.nextSibling&&b.node.isBlock(i.previousSibling)||i.previousSibling&&"BR"==i.previousSibling.tagName||(i.style.display="inline",k.style.display="inline",l=a(b.doc.createTextNode("\u200b"))),w=m(i,j,!0)||a(i).before(l)&&j.setStartBefore(i),x=m(k,j,!1)||a(k).after(l)&&j.setEndAfter(k)),"function"==typeof w&&w(),"function"==typeof x&&x()}}catch(y){}}l&&l.remove();try{g.addRange(j)}catch(y){}}b.markers.remove()}function m(c,d,e){var f,g=c.previousSibling,h=c.nextSibling;return g&&h&&g.nodeType==Node.TEXT_NODE&&h.nodeType==Node.TEXT_NODE?(f=g.textContent.length,e?(h.textContent=g.textContent+h.textContent,a(g).remove(),a(c).remove(),b.spaces.normalize(h),function(){d.setStart(h,f)}):(g.textContent=g.textContent+h.textContent,a(h).remove(),a(c).remove(),b.spaces.normalize(g),function(){d.setEnd(g,f)})):g&&!h&&g.nodeType==Node.TEXT_NODE?(f=g.textContent.length,e?(b.spaces.normalize(g),function(){d.setStart(g,f)}):(b.spaces.normalize(g),function(){d.setEnd(g,f)})):!(!h||g||h.nodeType!=Node.TEXT_NODE)&&(e?(b.spaces.normalize(h),function(){d.setStart(h,0)}):(b.spaces.normalize(h),function(){d.setEnd(h,0)}))}function n(){return!0}function o(){for(var a=e(),b=0;b<a.length;b++)if(!a[b].collapsed)return!1;return!0}function p(a){var c,d,e=!1,f=!1;if(b.win.getSelection){var g=b.win.getSelection();g.rangeCount&&(c=g.getRangeAt(0),d=c.cloneRange(),d.selectNodeContents(a),d.setEnd(c.startContainer,c.startOffset),e=""===d.toString(),d.selectNodeContents(a),d.setStart(c.endContainer,c.endOffset),f=""===d.toString())}else b.doc.selection&&"Control"!=b.doc.selection.type&&(c=b.doc.selection.createRange(),d=c.duplicate(),d.moveToElementText(a),d.setEndPoint("EndToStart",c),e=""===d.text,d.moveToElementText(a),d.setEndPoint("StartToEnd",c),f=""===d.text);return{atStart:e,atEnd:f}}function q(){if(o())return!1;b.$el.find("td, th, img, br:not(:last)").prepend('<span class="fr-mk">'+a.FE.INVISIBLE_SPACE+"</span>");var c=!1,d=p(b.el);return d.atStart&&d.atEnd&&(c=!0),b.$el.find(".fr-mk").remove(),c}function r(c,d){void 0===d&&(d=!0);var e=a(c).html();e&&e.replace(/\u200b/g,"").length!=e.length&&a(c).html(e.replace(/\u200b/g,""));for(var f=b.node.contents(c),g=0;g<f.length;g++)f[g].nodeType!=Node.ELEMENT_NODE?a(f[g]).remove():(r(f[g],0===g),0===g&&(d=!1));c.nodeType==Node.TEXT_NODE?a(c).replaceWith('<span data-first="true" data-text="true"></span>'):d&&a(c).attr("data-first",!0)}function s(){return 0===a(this).find("fr-inner").length}function t(c,d){var e=b.node.contents(c.get(0));["TD","TH"].indexOf(c.get(0).tagName)>=0&&1==c.find(".fr-marker").length&&b.node.hasClass(e[0],"fr-marker")&&c.attr("data-del-cell",!0);for(var f=0;f<e.length;f++){var g=e[f];b.node.hasClass(g,"fr-marker")?d=(d+1)%2:d?a(g).find(".fr-marker").length>0?d=t(a(g),d):["TD","TH"].indexOf(g.tagName)<0&&!b.node.hasClass(g,"fr-inner")?!b.opts.keepFormatOnDelete||b.$el.find("[data-first]").length>0?a(g).remove():r(g):b.node.hasClass(g,"fr-inner")?0===a(g).find(".fr-inner").length?a(g).html("<br>"):a(g).find(".fr-inner").filter(s).html("<br>"):(a(g).empty(),a(g).attr("data-del-cell",!0)):a(g).find(".fr-marker").length>0&&(d=t(a(g),d))}return d}function u(){try{if(!b.$wp)return!1;for(var a=e(0),c=a.commonAncestorContainer;c&&!b.node.isElement(c);)c=c.parentNode;return!!b.node.isElement(c)}catch(d){return!1}}function v(){if(o())return!0;var c;k();var d=function(b){for(var c=b.previousSibling;c&&c.nodeType==Node.TEXT_NODE&&0===c.textContent.length;){var d=c;c=c.previousSibling,a(d).remove()}return c},e=function(b){for(var c=b.nextSibling;c&&c.nodeType==Node.TEXT_NODE&&0===c.textContent.length;){var d=c;c=c.nextSibling,a(d).remove()}return c},f=b.$el.find('.fr-marker[data-type="true"]');for(c=0;c<f.length;c++)for(var g=f[c];!d(g)&&!b.node.isBlock(g.parentNode)&&!b.$el.is(g.parentNode);)a(g.parentNode).before(g);var h=b.$el.find('.fr-marker[data-type="false"]');for(c=0;c<h.length;c++){for(var i=h[c];!e(i)&&!b.node.isBlock(i.parentNode)&&!b.$el.is(i.parentNode);)a(i.parentNode).after(i);i.parentNode&&b.node.isBlock(i.parentNode)&&b.node.isEmpty(i.parentNode)&&!b.$el.is(i.parentNode)&&b.opts.keepFormatOnDelete&&a(i.parentNode).after(i)}if(n()){t(b.$el,0);var j=b.$el.find('[data-first="true"]');if(j.length)b.$el.find(".fr-marker").remove(),j.append(a.FE.INVISIBLE_SPACE+a.FE.MARKERS).removeAttr("data-first"),j.attr("data-text")&&j.replaceWith(j.html());else for(b.$el.find("table").filter(function(){return a(this).find("[data-del-cell]").length>0&&a(this).find("[data-del-cell]").length==a(this).find("td, th").length}).remove(),b.$el.find("[data-del-cell]").removeAttr("data-del-cell"),f=b.$el.find('.fr-marker[data-type="true"]'),c=0;c<f.length;c++){var m=f[c],p=m.nextSibling,q=b.$el.find('.fr-marker[data-type="false"][data-id="'+a(m).data("id")+'"]').get(0);if(q){if(m&&(!p||p!=q)){var r=b.node.blockParent(m),s=b.node.blockParent(q),u=!1,v=!1;if(r&&["UL","OL"].indexOf(r.tagName)>=0&&(r=null,u=!0),s&&["UL","OL"].indexOf(s.tagName)>=0&&(s=null,v=!0),a(m).after(q),r!=s)if(null!=r||u)if(null!=s||v||0!==a(r).parentsUntil(b.$el,"table").length)r&&s&&0===a(r).parentsUntil(b.$el,"table").length&&0===a(s).parentsUntil(b.$el,"table").length&&(a(r).append(a(s).html()),a(s).remove());else{for(p=r;!p.nextSibling&&p.parentNode!=b.el;)p=p.parentNode;for(p=p.nextSibling;p&&"BR"!=p.tagName;){var w=p.nextSibling;a(r).append(p),p=w}p&&"BR"==p.tagName&&a(p).remove()}else{var x=b.node.deepestParent(m);x?(a(x).after(a(s).html()),a(s).remove()):0===a(s).parentsUntil(b.$el,"table").length&&(a(m).next().after(a(s).html()),a(s).remove())}}}else q=a(m).clone().attr("data-type",!1),a(m).after(q)}}b.opts.keepFormatOnDelete||b.html.fillEmptyBlocks(),b.html.cleanEmptyTags(!0),b.clean.lists(),b.spaces.normalize();var y=b.$el.find(".fr-marker:last").get(0),z=b.$el.find(".fr-marker:first").get(0);void 0!==y&&void 0!==z&&!y.nextSibling&&z.previousSibling&&"BR"==z.previousSibling.tagName&&b.node.isElement(y.parentNode)&&b.node.isElement(z.parentNode)&&b.$el.append("<br>"),l()}function w(c,d){if(!c||c.getElementsByClassName("fr-marker").length>0)return!1;for(var e=c.firstChild;e&&(b.node.isBlock(e)||d&&!b.node.isVoid(e)&&e.nodeType==Node.ELEMENT_NODE);)c=e,e=e.firstChild;c.innerHTML=a.FE.MARKERS+c.innerHTML}function x(c,d){if(!c||c.getElementsByClassName("fr-marker").length>0)return!1;for(var e=c.lastChild;e&&(b.node.isBlock(e)||d&&!b.node.isVoid(e)&&e.nodeType==Node.ELEMENT_NODE);)c=e,e=e.lastChild;c.innerHTML=c.innerHTML+a.FE.MARKERS}function y(c,d){void 0===d&&(d=!0);for(var e=c.previousSibling;e&&e.nodeType==Node.TEXT_NODE&&0===e.textContent.length;)e=e.previousSibling;return e?(b.node.isBlock(e)?x(e):"BR"==e.tagName?a(e).before(a.FE.MARKERS):a(e).after(a.FE.MARKERS),!0):!!d&&(b.node.isBlock(c)?w(c):a(c).before(a.FE.MARKERS),!0)}function z(c,d){void 0===d&&(d=!0);for(var e=c.nextSibling;e&&e.nodeType==Node.TEXT_NODE&&0===e.textContent.length;)e=e.nextSibling;return e?(b.node.isBlock(e)?w(e):a(e).before(a.FE.MARKERS),!0):!!d&&(b.node.isBlock(c)?x(c):a(c).after(a.FE.MARKERS),!0)}return{text:c,get:d,ranges:e,clear:f,element:g,endElement:h,save:k,restore:l,isCollapsed:o,isFull:q,inEditor:u,remove:v,blocks:j,info:p,setAtEnd:x,setAtStart:w,setBefore:y,setAfter:z,rangeElement:i}},a.extend(a.FE.DEFAULTS,{htmlAllowedTags:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","br","button","canvas","caption","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","queue","rp","rt","ruby","s","samp","script","style","section","select","small","source","span","strike","strong","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video","wbr"],htmlRemoveTags:["script","style"],htmlAllowedAttrs:["accept","accept-charset","accesskey","action","align","allowfullscreen","allowtransparency","alt","async","autocomplete","autofocus","autoplay","autosave","background","bgcolor","border","charset","cellpadding","cellspacing","checked","cite","class","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-.*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","frameborder","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","max","maxlength","media","method","min","mozallowfullscreen","multiple","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","srcset","start","step","summary","spellcheck","style","tabindex","target","title","type","translate","usemap","value","valign","webkitallowfullscreen","width","wrap"],htmlAllowedStyleProps:[".*"],htmlAllowComments:!0,htmlUntouched:!1,fullPage:!1}),a.FE.HTML5Map={B:"STRONG",I:"EM",STRIKE:"S"},a.FE.MODULES.clean=function(b){function c(a){if(a.nodeType==Node.ELEMENT_NODE&&a.getAttribute("class")&&a.getAttribute("class").indexOf("fr-marker")>=0)return!1;var d,e=b.node.contents(a),f=[];for(d=0;d<e.length;d++)e[d].nodeType!=Node.ELEMENT_NODE||b.node.isVoid(e[d])?e[d].nodeType==Node.TEXT_NODE&&(e[d].textContent=e[d].textContent.replace(/\u200b/g,"")):e[d].textContent.replace(/\u200b/g,"").length!=e[d].textContent.length&&c(e[d]);if(a.nodeType==Node.ELEMENT_NODE&&!b.node.isVoid(a)&&(a.normalize(),e=b.node.contents(a),f=a.querySelectorAll(".fr-marker"),e.length-f.length==0)){for(d=0;d<e.length;d++)if((e[d].getAttribute("class")||"").indexOf("fr-marker")<0)return!1;for(d=0;d<f.length;d++)a.parentNode.insertBefore(f[d].cloneNode(!0),a);return a.parentNode.removeChild(a),!1}}function d(a,c){if(a.nodeType==Node.COMMENT_NODE)return"\x3c!--"+a.nodeValue+"--\x3e";if(a.nodeType==Node.TEXT_NODE)return c?a.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):a.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00A0/g,"&nbsp;").replace(/\u0009/g,"");if(a.nodeType!=Node.ELEMENT_NODE)return a.outerHTML;if(a.nodeType==Node.ELEMENT_NODE&&["STYLE","SCRIPT","NOSCRIPT"].indexOf(a.tagName)>=0)return a.outerHTML;if(a.nodeType==Node.ELEMENT_NODE&&"svg"==a.tagName){var e=document.createElement("div"),f=a.cloneNode(!0);return e.appendChild(f),e.innerHTML}if("IFRAME"==a.tagName)return a.outerHTML.replace(/\&lt;/g,"<").replace(/\&gt;/g,">");var g=a.childNodes;if(0===g.length)return a.outerHTML;for(var h="",i=0;i<g.length;i++)"PRE"==a.tagName&&(c=!0),h+=d(g[i],c);return b.node.openTagString(a)+h+b.node.closeTagString(a)}function e(a){return L=[],a=a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,function(a){return L.push(a),"[FROALA.EDITOR.SCRIPT "+(L.length-1)+"]"}),a=a.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi,function(a){return L.push(a),"[FROALA.EDITOR.NOSCRIPT "+(L.length-1)+"]"}),a=a.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,function(a){return L.push(a),"[FROALA.EDITOR.IFRAME "+(L.length-1)+"]"}),a=a.replace(/<img((?:[\w\W]*?)) src="/g,'<img$1 data-fr-src="')}function f(a){return a=a.replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi,function(a,c){return b.opts.htmlRemoveTags.indexOf("script")>=0?"":L[parseInt(c,10)]}),a=a.replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi,function(a,c){return b.opts.htmlRemoveTags.indexOf("noscript")>=0?"":L[parseInt(c,10)].replace(/\&lt;/g,"<").replace(/\&gt;/g,">")}),a=a.replace(/\[FROALA\.EDITOR\.IFRAME ([\d]*)\]/gi,function(a,c){return b.opts.htmlRemoveTags.indexOf("iframe")>=0?"":L[parseInt(c,10)].replace(/\&lt;/g,"<").replace(/\&gt;/g,">")}),a=a.replace(/<img((?:[\w\W]*?)) data-fr-src="/g,'<img$1 src="')}function g(a){var b=a.replace(/;;/gi,";");return b=b.replace(/^;/gi,""),";"!=b.charAt(b.length)&&(b+=";"),b}function h(a){var c;for(c in a)if(a.hasOwnProperty(c)){var d=c.match(J),e=null;"style"==c&&b.opts.htmlAllowedStyleProps.length&&(e=a[c].match(K)),d&&e?a[c]=g(e.join(";")):d&&("style"!=c||e)||delete a[c]}for(var f="",h=Object.keys(a).sort(),i=0;i<h.length;i++)c=h[i],a[c].indexOf('"')<0?f+=" "+c+'="'+a[c]+'"':f+=" "+c+"='"+a[c]+"'";return f}function i(a,c,d){if(b.opts.fullPage){var e=b.html.extractDoctype(d),f=h(b.html.extractNodeAttrs(d,"html"));c=null==c?b.html.extractNode(d,"head")||"<title></title>":c;return e+"<html"+f+"><head"+h(b.html.extractNodeAttrs(d,"head"))+">"+c+"</head><body"+h(b.html.extractNodeAttrs(d,"body"))+">"+a+"</body></html>"}return a}function j(c,e){var f,g=a("<div>"+c+"</div>"),h="";if(g){var i=b.node.contents(g.get(0));for(f=0;f<i.length;f++)e(i[f]);for(i=b.node.contents(g.get(0)),f=0;f<i.length;f++)h+=d(i[f])}return h}function k(a,c,d){a=e(a);var g=a,h=null;return b.opts.fullPage&&(g=b.html.extractNode(a,"body")||(a.indexOf("<body")>=0?"":a),d&&(h=b.html.extractNode(a,"head")||"")),g=j(g,c),h&&(h=j(h,c)),f(i(g,h,a))}function l(a){return a.replace(/\u200b/g,"").length==a.length?a:b.clean.exec(a,c)}function m(){var c=b.el.querySelectorAll(Object.keys(a.FE.HTML5Map).join(","));if(c.length){var d=!1;b.el.querySelector(".fr-marker")||(b.selection.save(),d=!0);for(var e=0;e<c.length;e++)""===b.node.attributes(c[e])&&a(c[e]).replaceWith("<"+a.FE.HTML5Map[c[e].tagName]+">"+c[e].innerHTML+"</"+a.FE.HTML5Map[c[e].tagName]+">");d&&b.selection.restore()}}function n(a){var c=b.doc.createElement("DIV");return c.innerText=a,c.textContent}function o(c){if("SPAN"==c.tagName&&(c.getAttribute("class")||"").indexOf("fr-marker")>=0)return!1;if("PRE"==c.tagName&&q(c),c.nodeType==Node.ELEMENT_NODE&&(c.getAttribute("data-fr-src")&&0!==c.getAttribute("data-fr-src").indexOf("blob:")&&c.setAttribute("data-fr-src",b.helpers.sanitizeURL(n(c.getAttribute("data-fr-src")))),c.getAttribute("href")&&c.setAttribute("href",b.helpers.sanitizeURL(n(c.getAttribute("href")))),c.getAttribute("src")&&c.setAttribute("src",b.helpers.sanitizeURL(n(c.getAttribute("src")))),["TABLE","TBODY","TFOOT","TR"].indexOf(c.tagName)>=0&&(c.innerHTML=c.innerHTML.trim())),!b.opts.pasteAllowLocalImages&&c.nodeType==Node.ELEMENT_NODE&&"IMG"==c.tagName&&c.getAttribute("data-fr-src")&&0===c.getAttribute("data-fr-src").indexOf("file://"))return c.parentNode.removeChild(c),!1;if(c.nodeType==Node.ELEMENT_NODE&&a.FE.HTML5Map[c.tagName]&&""===b.node.attributes(c)){var d=a.FE.HTML5Map[c.tagName],e="<"+d+">"+c.innerHTML+"</"+d+">";c.insertAdjacentHTML("beforebegin",e),c=c.previousSibling,c.parentNode.removeChild(c.nextSibling)}if(b.opts.htmlAllowComments||c.nodeType!=Node.COMMENT_NODE)if(c.tagName&&c.tagName.match(I))c.parentNode.removeChild(c);else if(c.tagName&&!c.tagName.match(H))"svg"===c.tagName?c.parentNode.removeChild(c):b.browser.safari&&"path"==c.tagName&&c.parentNode&&"svg"==c.parentNode.tagName||(c.outerHTML=c.innerHTML);else{var f=c.attributes;if(f)for(var h=f.length-1;h>=0;h--){var i=f[h],j=i.nodeName.match(J),k=null;"style"==i.nodeName&&b.opts.htmlAllowedStyleProps.length&&(k=i.value.match(K)),j&&k?i.value=g(k.join(";")):j&&("style"!=i.nodeName||k)||c.removeAttribute(i.nodeName)}}else 0!==c.data.indexOf("[FROALA.EDITOR")&&c.parentNode.removeChild(c)}function p(a){for(var c=b.node.contents(a),d=0;d<c.length;d++)c[d].nodeType!=Node.TEXT_NODE&&p(c[d]);o(a)}function q(a){var b=a.innerHTML;b.indexOf("\n")>=0&&(a.innerHTML=b.replace(/\n/g,"<br>"))}function r(c,d,e,f){void 0===d&&(d=[]),void 0===e&&(e=[]),void 0===f&&(f=!1),c=c.replace(/<br> */g,"<br>");var g,h=a.merge([],b.opts.htmlAllowedTags);for(g=0;g<d.length;g++)h.indexOf(d[g])>=0&&h.splice(h.indexOf(d[g]),1);var i=a.merge([],b.opts.htmlAllowedAttrs);for(g=0;g<e.length;g++)i.indexOf(e[g])>=0&&i.splice(i.indexOf(e[g]),1);return i.push("data-fr-.*"),i.push("fr-.*"),H=new RegExp("^"+h.join("$|^")+"$","gi"),J=new RegExp("^"+i.join("$|^")+"$","gi"),I=new RegExp("^"+b.opts.htmlRemoveTags.join("$|^")+"$","gi"),K=b.opts.htmlAllowedStyleProps.length?new RegExp("((^|;|\\s)"+b.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)")+":.+?(?=(;)|$))","gi"):null,c=k(c,p,!0)}function s(){for(var c=b.el.querySelectorAll("blockquote + blockquote"),d=0;d<c.length;d++){var e=c[d];b.node.attributes(e)==b.node.attributes(e.previousSibling)&&(a(e).prev().append(a(e).html()),a(e).remove())}}function t(){for(var a=b.el.querySelectorAll("tr"),c=0;c<a.length;c++){for(var d=a[c].children,e=!0,f=0;f<d.length;f++)if("TH"!=d[f].tagName){e=!1;break}if(!1!==e&&0!==d.length){for(var g=a[c];g&&"TABLE"!=g.tagName&&"THEAD"!=g.tagName;)g=g.parentNode;var h=g;"THEAD"!=h.tagName&&(h=b.doc.createElement("THEAD"),g.insertBefore(h,g.firstChild)),h.appendChild(a[c])}}}function u(){var c=b.html.defaultTag();if(c)for(var d=b.el.querySelectorAll("td > "+c+", th > "+c),e=0;e<d.length;e++)""===b.node.attributes(d[e])&&a(d[e]).replaceWith(d[e].innerHTML+"<br>")}function v(){t(),u()}function w(){var a=[],c=function(a){return!b.node.isList(a.parentNode)};do{if(a.length){var d=a[0],e=b.doc.createElement("ul");d.parentNode.insertBefore(e,d);do{var f=d;d=d.nextSibling,e.appendChild(f)}while(d&&"LI"==d.tagName)}a=[];for(var g=b.el.querySelectorAll("li"),h=0;h<g.length;h++)c(g[h])&&a.push(g[h])}while(a.length>0)}function x(){for(var a=b.el.querySelectorAll("ol + ol, ul + ul"),c=0;c<a.length;c++){var d=a[c];if(b.node.isList(d.previousSibling)&&b.node.openTagString(d)==b.node.openTagString(d.previousSibling)){for(var e=b.node.contents(d),f=0;f<e.length;f++)d.previousSibling.appendChild(e[f]);d.parentNode.removeChild(d)}}}function y(){var a,c,d=function(a){a.querySelector("LI")||(c=!0,a.parentNode.removeChild(a))};do{c=!1;var e=b.el.querySelectorAll("li:empty");for(a=0;a<e.length;a++)e[a].parentNode.removeChild(e[a]);var f=b.el.querySelectorAll("ul, ol");for(a=0;a<f.length;a++)d(f[a])}while(!0===c)}function z(){for(var c=b.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul"),d=0;d<c.length;d++){var e=c[d],f=e.previousSibling;f&&("LI"==f.tagName?f.appendChild(e):a(e).wrap("<li></li>"))}}function A(){for(var c=b.el.querySelectorAll("li > ul, li > ol"),d=0;d<c.length;d++){var e=c[d];if(e.nextSibling){var f=e.nextSibling,g=a("<li>");a(e.parentNode).after(g);do{var h=f;f=f.nextSibling,g.append(h)}while(f)}}}function B(){for(var c=b.el.querySelectorAll("li > ul, li > ol"),d=0;d<c.length;d++){var e=c[d];if(b.node.isFirstSibling(e))a(e).before("<br/>");else if(e.previousSibling&&"BR"==e.previousSibling.tagName){for(var f=e.previousSibling.previousSibling;f&&b.node.hasClass(f,"fr-marker");)f=f.previousSibling;f&&"BR"!=f.tagName&&a(e.previousSibling).remove()}}}function C(){for(var c=b.el.querySelectorAll("li:empty"),d=0;d<c.length;d++)a(c[d]).remove()}function D(){for(var c=b.el.querySelectorAll("ul, ol"),d=0;d<c.length;d++)for(var e=b.node.contents(c[d]),f=null,g=e.length-1;g>=0;g--)"LI"!=e[g].tagName?(f||(f=a("<li>"),f.insertBefore(e[g])),f.prepend(e[g])):f=null}function E(){if(b.html.defaultTag())for(var c=b.el.querySelectorAll("li > "+b.html.defaultTag()),d=c.length-1;d>=0;d--){var e=c[d];e.previousSibling&&!b.node.isEmpty(e)&&a("<br>").insertAfter(e.previousSibling),e.outerHTML=e.innerHTML}}function F(){w(),x(),D(),y(),z(),A(),B(),C(),E()}function G(){b.opts.fullPage&&a.merge(b.opts.htmlAllowedTags,["head","title","style","link","base","body","html","meta"])}var H,I,J,K,L=[];return{_init:G,html:r,toHTML5:m,tables:v,lists:F,quotes:s,invisibleSpaces:l,exec:k}},a.FE.MODULES.spaces=function(b){function c(c,d){var e=c.previousSibling,f=c.nextSibling,g=c.textContent,h=c.parentNode;if(!b.html.isPreformatted(h)){d&&(g=g.replace(/[\f\n\r\t\v ]{2,}/g," "),f&&"BR"!==f.tagName&&!b.node.isBlock(f)||!b.node.isBlock(h)&&!b.node.isLink(h)||(g=g.replace(/[\f\n\r\t\v ]{1,}$/g,"")),e&&"BR"!==e.tagName&&!b.node.isBlock(e)||!b.node.isBlock(h)&&!b.node.isLink(h)||(g=g.replace(/^[\f\n\r\t\v ]{1,}/g,""))," "===g&&(e&&e.nodeType!=Node.TEXT_NODE||f&&f.nodeType!=Node.TEXT_NODE)&&(g="")),g=g.replace(new RegExp(a.FE.UNICODE_NBSP,"g")," ");for(var i="",j=0;j<g.length;j++)32!=g.charCodeAt(j)||0!==j&&32!=i.charCodeAt(j-1)?i+=g[j]:i+=a.FE.UNICODE_NBSP;(!f&&b.node.isBlock(c.parentNode)||f&&b.node.isBlock(f)||f&&f.nodeType==Node.ELEMENT_NODE&&b.win.getComputedStyle(f)&&"block"==b.win.getComputedStyle(f).display)&&(i=i.replace(/ $/,a.FE.UNICODE_NBSP)),!e||b.node.isVoid(e)||b.node.isBlock(e)||(i=i.replace(/^\u00A0([^ $])/," $1"),1!==i.length||160!==i.charCodeAt(0)||!f||b.node.isVoid(f)||b.node.isBlock(f)||(i=" ")),i=i.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g,"$1 $2"),c.textContent!=i&&(c.textContent=i)}}function d(a,d){if(void 0!==a&&a||(a=b.el),void 0===d&&(d=!1),!a.getAttribute||"false"!=a.getAttribute("contenteditable"))if(a.nodeType==Node.TEXT_NODE)c(a,d);else if(a.nodeType==Node.ELEMENT_NODE)for(var e=b.doc.createTreeWalker(a,NodeFilter.SHOW_TEXT,b.node.filter(function(a){for(var c=a.parentNode;c&&c!==b.el;){if("STYLE"==c.tagName||"IFRAME"==c.tagName)return!1;if("PRE"===c.tagName)return!1;c=c.parentNode}return null!=a.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g)&&!b.node.hasClass(a.parentNode,"fr-marker")}),!1);e.nextNode();)c(e.currentNode,d)}function e(){for(var a=[],c=b.el.querySelectorAll(".fr-marker"),e=0;e<c.length;e++){var f=null,g=b.node.blockParent(c[e]);f=g||c[e];for(var h=f.nextSibling,i=f.previousSibling;h&&"BR"==h.tagName;)h=h.nextSibling;for(;i&&"BR"==i.tagName;)i=i.previousSibling;f&&a.indexOf(f)<0&&a.push(f),i&&a.indexOf(i)<0&&a.push(i),h&&a.indexOf(h)<0&&a.push(h)}for(var j=0;j<a.length;j++)d(a[j])}return{normalize:d,normalizeAroundCursor:e}},a.FE.UNICODE_NBSP=String.fromCharCode(160),a.FE.VOID_ELEMENTS=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],a.FE.BLOCK_TAGS=["address","article","aside","audio","blockquote","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul","video"],a.extend(a.FE.DEFAULTS,{htmlAllowedEmptyTags:["textarea","a","iframe","object","video","style","script",".fa",".fr-emoticon"],htmlDoNotWrapTags:["script","style"],htmlSimpleAmpersand:!1,htmlIgnoreCSSProperties:[],htmlExecuteScripts:!0}),a.FE.MODULES.html=function(b){function c(){return b.opts.enter==a.FE.ENTER_P?"p":b.opts.enter==a.FE.ENTER_DIV?"div":b.opts.enter==a.FE.ENTER_BR?null:void 0}function d(a,c){return!(!a||a===b.el)&&(c?-1!=["PRE","SCRIPT","STYLE"].indexOf(a.tagName)||d(a.parentNode,c):-1!=["PRE","SCRIPT","STYLE"].indexOf(a.tagName))}function e(c){var d,e=[],f=[];if(c){var h=b.el.querySelectorAll(".fr-marker");for(d=0;d<h.length;d++){var i=b.node.blockParent(h[d])||h[d];if(i){var j=i.nextSibling,k=i.previousSibling;i&&f.indexOf(i)<0&&b.node.isBlock(i)&&f.push(i),k&&b.node.isBlock(k)&&f.indexOf(k)<0&&f.push(k),j&&b.node.isBlock(j)&&f.indexOf(j)<0&&f.push(j)}}}else f=b.el.querySelectorAll(g());var l=g();for(l+=","+a.FE.VOID_ELEMENTS.join(","),l+=","+b.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)",d=f.length-1;d>=0;d--)if(!(f[d].textContent&&f[d].textContent.replace(/\u200B|\n/g,"").length>0||f[d].querySelectorAll(l).length>0)){for(var m=b.node.contents(f[d]),n=!1,o=0;o<m.length;o++)if(m[o].nodeType!=Node.COMMENT_NODE&&m[o].textContent&&m[o].textContent.replace(/\u200B|\n/g,"").length>0){n=!0;break}n||e.push(f[d])}return e}function f(){return a.FE.BLOCK_TAGS.join(":empty, ")+":empty"}function g(){return a.FE.BLOCK_TAGS.join(", ")}function h(c){var d=a.merge([],a.FE.VOID_ELEMENTS);d=a.merge(d,b.opts.htmlAllowedEmptyTags),void 0===c&&(d=a.merge(d,a.FE.BLOCK_TAGS));var e,f;e=b.el.querySelectorAll("*:empty:not("+d.join("):not(")+"):not(.fr-marker)");do{f=!1;for(var g=0;g<e.length;g++)0!==e[g].attributes.length&&void 0===e[g].getAttribute("href")||(e[g].parentNode.removeChild(e[g]),f=!0);e=b.el.querySelectorAll("*:empty:not("+d.join("):not(")+"):not(.fr-marker)")}while(e.length&&f)}function i(a,d){var e=c();if(d&&(e="div"),e){for(var f=b.doc.createDocumentFragment(),g=null,h=!1,i=a.firstChild;i;){var j=i.nextSibling;if(i.nodeType==Node.ELEMENT_NODE&&(b.node.isBlock(i)||b.opts.htmlDoNotWrapTags.indexOf(i.tagName.toLowerCase())>=0&&!b.node.hasClass(i,"fr-marker")))g=null,f.appendChild(i);else if(i.nodeType!=Node.ELEMENT_NODE&&i.nodeType!=Node.TEXT_NODE)g=null,f.appendChild(i);else if("BR"==i.tagName)null==g?(g=b.doc.createElement(e),d&&g.setAttribute("class","fr-temp-div"),g.setAttribute("data-empty",!0),g.appendChild(i),f.appendChild(g)):!1===h&&(g.appendChild(b.doc.createElement("br")),d&&g.setAttribute("class","fr-temp-div"),g.setAttribute("data-empty",!0)),g=null;else{var k=i.textContent;i.nodeType==Node.TEXT_NODE&&0===k.replace(/\n/g,"").replace(/(^ *)|( *$)/g,"").length||(null==g&&(g=b.doc.createElement(e),d&&g.setAttribute("class","fr-temp-div"),f.appendChild(g),h=!1),g.appendChild(i),h||b.node.hasClass(i,"fr-marker")||i.nodeType==Node.TEXT_NODE&&0===k.replace(/ /g,"").length||(h=!0))}i=j}a.innerHTML="",a.appendChild(f)}}function j(a,b){for(var c=0;c<a.length;c++)i(a[c],b)}function k(a,c,d,e){if(!b.$wp)return!1;void 0===a&&(a=!1),void 0===c&&(c=!1),void 0===d&&(d=!1),void 0===e&&(e=!1);var f=b.$wp.scrollTop();i(b.el,a),e&&j(b.el.querySelectorAll(".fr-inner"),a),c&&j(b.el.querySelectorAll("td, th"),a),d&&j(b.el.querySelectorAll("blockquote"),a),f!=b.$wp.scrollTop()&&b.$wp.scrollTop(f)}function l(){b.$el.find("div.fr-temp-div").each(function(){a(this).attr("data-empty")||["LI"].indexOf(this.parentNode.tagName)>=0||b.node.isBlock(this.nextSibling)&&!a(this.nextSibling).hasClass("fr-temp-div")?a(this).replaceWith(a(this).html()):a(this).replaceWith(a(this).html()+"<br>")}),b.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function(){return""===a(this).attr("class")}).removeAttr("class")}function m(c){for(var d=e(c),f=0;f<d.length;f++){var g=d[f];"false"===g.getAttribute("contenteditable")||g.querySelector(b.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||b.node.isVoid(g)||"TABLE"!=g.tagName&&"TBODY"!=g.tagName&&"TR"!=g.tagName&&"UL"!=g.tagName&&"OL"!=g.tagName&&g.appendChild(b.doc.createElement("br"))}if(b.browser.msie&&b.opts.enter==a.FE.ENTER_BR){var h=b.node.contents(b.el);h.length&&h[h.length-1].nodeType==Node.TEXT_NODE&&b.$el.append("<br>")}}function n(){return b.$el.get(0).querySelectorAll(g())}function o(a){if(void 0===a&&(a=b.el),a&&["SCRIPT","STYLE","PRE"].indexOf(a.tagName)>=0)return!1;for(var c=b.doc.createTreeWalker(a,NodeFilter.SHOW_TEXT,b.node.filter(function(a){return null!=a.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g)}),!1);c.nextNode();){var e=c.currentNode;if(!d(e.parentNode,!0)){var f=b.node.isBlock(e.parentNode)||b.node.isElement(e.parentNode),g=e.textContent.replace(/(?!^)( ){2,}(?!$)/g," ").replace(/\n/g," ").replace(/^[ ]{2,}/g," ").replace(/[ ]{2,}$/g," ");if(f){var h=e.previousSibling,i=e.nextSibling;h&&i&&" "==g?g=b.node.isBlock(h)&&b.node.isBlock(i)?"":"\n":(h||(g=g.replace(/^ */,"")),i||(g=g.replace(/ *$/,"")))}e.textContent=g}}}function p(a,b,c){var d=new RegExp(b,"gi"),e=d.exec(a);return e?e[c]:null}function q(a,b){var c=a.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i);return c?b.implementation.createDocumentType(c[1],c[3],c[4]):b.implementation.createDocumentType("html")}function r(a){var b=a.doctype,c="<!DOCTYPE html>";return b&&(c="<!DOCTYPE "+b.name+(b.publicId?' PUBLIC "'+b.publicId+'"':"")+(!b.publicId&&b.systemId?" SYSTEM":"")+(b.systemId?' "'+b.systemId+'"':"")+">"),c}function s(c,d){var e=c.parentNode;if(e&&(b.node.isBlock(e)||b.node.isElement(e))&&["TD","TH"].indexOf(e.tagName)<0){for(var f=c.previousSibling,g=c.nextSibling;f&&f.nodeType==Node.TEXT_NODE&&0===f.textContent.replace(/\n|\r/g,"").length;)f=f.previousSibling;f&&e&&"BR"!=f.tagName&&!b.node.isBlock(f)&&!g&&e.textContent.replace(/\u200B/g,"").length>0&&f.textContent.length>0&&!b.node.hasClass(f,"fr-marker")&&(b.el==e&&!g&&b.opts.enter==a.FE.ENTER_BR&&b.browser.msie||(d&&b.selection.save(),c.parentNode.removeChild(c),d&&b.selection.restore()))}else!e||b.node.isBlock(e)||b.node.isElement(e)||c.previousSibling||c.nextSibling||s(c.parentNode,d)}function t(){var a,c,d=b.selection.element();a=b.node.isBlock(d)?d:b.node.blockParent(d);var e=[];if(a){var f=a.nextSibling,g=a.previousSibling;a&&e.indexOf(a)<0&&e.push(a),g&&b.node.isBlock(g)&&e.indexOf(g)<0&&e.push(g),f&&b.node.isBlock(f)&&e.indexOf(f)<0&&e.push(f)}var h=[];for(c=0;c<e.length;c++)for(var i=e[c].querySelectorAll("br"),j=0;j<i.length;j++)h.indexOf(i[j])<0&&h.push(i[j]);if(d.parentNode==b.el){var k=b.el.children;for(c=0;c<k.length;c++)"BR"==k[c].tagName&&h.indexOf(k[c])<0&&h.push(k[c])}return h}function u(a,c){var d,e=null;if(a)for(e=t(),d=0;d<e.length;d++)s(e[d],c);else for(e=b.el.getElementsByTagName("br"),d=0;d<e.length;d++)s(e[d],c)}function v(){b.opts.htmlUntouched||(h(),k()),o(),b.opts.htmlUntouched||(b.spaces.normalize(null,!0),b.html.fillEmptyBlocks(),b.clean.quotes(),b.clean.lists(),b.clean.tables(),b.clean.toHTML5(),b.html.cleanBRs()),b.selection.restore(),w(),b.placeholder.refresh()}function w(){b.core.isEmpty()&&(null!=c()?b.el.querySelector(g())||b.el.querySelector(b.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)")||(b.core.hasFocus()?(b.$el.html("<"+c()+">"+a.FE.MARKERS+"<br/></"+c()+">"),b.selection.restore()):b.$el.html("<"+c()+"><br/></"+c()+">")):b.el.querySelector("*:not(.fr-marker):not(br)")||(b.core.hasFocus()?(b.$el.html(a.FE.MARKERS+"<br/>"),b.selection.restore()):b.$el.html("<br/>")))}function x(a,b){return p(a,"<"+b+"[^>]*?>([\\w\\W]*)</"+b+">",1)}function y(c,d){var e=a("<div "+(p(c,"<"+d+"([^>]*?)>",1)||"")+">");return b.node.rawAttributes(e.get(0))}function z(a){return p(a,"<!DOCTYPE([^>]*?)>",0)||"<!DOCTYPE html>"}function A(a,c){b.opts.htmlExecuteScripts?a.html(c):a.get(0).innerHTML=c}function B(c){var d=b.clean.html(c||"",[],[],b.opts.fullPage);if(b.opts.fullPage){var e=x(d,"body")||(d.indexOf("<body")>=0?"":d),f=y(d,"body"),g=x(d,"head")||"<title></title>",h=y(d,"head"),i=a("<div>").append(g).contents().each(function(){(this.nodeType==Node.COMMENT_NODE||["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName)>=0)&&this.parentNode.removeChild(this)}).end().html().trim();g=a("<div>").append(g).contents().map(function(){return this.nodeType==Node.COMMENT_NODE?"\x3c!--"+this.nodeValue+"--\x3e":["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName)>=0?this.outerHTML:""}).toArray().join("");var j=z(d),k=y(d,"html");A(b.$el,i+"\n"+e),b.node.clearAttributes(b.el),b.$el.attr(f),b.$el.addClass("fr-view"),b.$el.attr("spellcheck",b.opts.spellcheck),b.$el.attr("dir",b.opts.direction),A(b.$head,g),b.node.clearAttributes(b.$head.get(0)),b.$head.attr(h),b.node.clearAttributes(b.$html.get(0)),b.$html.attr(k),b.iframe_document.doctype.parentNode.replaceChild(q(j,b.iframe_document),b.iframe_document.doctype)}else A(b.$el,d);var l=b.edit.isDisabled();b.edit.on(),b.core.injectStyle(b.opts.iframeStyle),v(),b.opts.useClasses||(b.$el.find("[fr-original-class]").each(function(){this.setAttribute("class",this.getAttribute("fr-original-class")),this.removeAttribute("fr-original-class")}),b.$el.find("[fr-original-style]").each(function(){this.setAttribute("style",this.getAttribute("fr-original-style")),this.removeAttribute("fr-original-style")})),l&&b.edit.off(),b.events.trigger("html.set")}function C(a){
var b=/(#[^\s\+>~\.\[:]+)/g,c=/(\[[^\]]+\])/g,d=/(\.[^\s\+>~\.\[:]+)/g,e=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,f=/(:[\w-]+\([^\)]*\))/gi,g=/(:[^\s\+>~\.\[:]+)/g,h=/([^\s\+>~\.\[:]+)/g;!function(){var b=/:not\(([^\)]*)\)/g;b.test(a)&&(a=a.replace(b,"     $1 "))}();var i=100*(a.match(b)||[]).length+10*(a.match(c)||[]).length+10*(a.match(d)||[]).length+10*(a.match(f)||[]).length+10*(a.match(g)||[]).length+(a.match(e)||[]).length;return a=a.replace(/[\*\s\+>~]/g," "),a=a.replace(/[#\.]/g," "),i+=(a.match(h)||[]).length}function D(a){if(b.events.trigger("html.processGet",[a]),a&&a.getAttribute&&""===a.getAttribute("class")&&a.removeAttribute("class"),a&&a.getAttribute&&""===a.getAttribute("style")&&a.removeAttribute("style"),a&&a.nodeType==Node.ELEMENT_NODE)for(var c=a.querySelectorAll('[class=""],[style=""]'),d=0;d<c.length;d++){var e=c[d];""===e.getAttribute("class")&&e.removeAttribute("class"),""===e.getAttribute("style")&&e.removeAttribute("style")}}function E(a,b){return a[3]-b[3]}function F(a,c){if(!b.$wp)return b.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML;var d="";b.events.trigger("html.beforeGet");var e,f,g=[],h={},i=[];if(!b.opts.useClasses&&!c){var j=new RegExp("^"+b.opts.htmlIgnoreCSSProperties.join("$|^")+"$","gi");for(e=0;e<b.doc.styleSheets.length;e++){var k,l=0;try{k=b.doc.styleSheets[e].cssRules,b.doc.styleSheets[e].ownerNode&&"STYLE"==b.doc.styleSheets[e].ownerNode.nodeType&&(l=1)}catch(y){}if(k)for(var m=0,n=k.length;m<n;m++)if(k[m].selectorText&&k[m].style.cssText.length>0){var o,p=k[m].selectorText.replace(/body |\.fr-view /g,"").replace(/::/g,":");try{o=b.el.querySelectorAll(p)}catch(y){o=[]}for(f=0;f<o.length;f++){!o[f].getAttribute("fr-original-style")&&o[f].getAttribute("style")?(o[f].setAttribute("fr-original-style",o[f].getAttribute("style")),g.push(o[f])):o[f].getAttribute("fr-original-style")||g.push(o[f]),h[o[f]]||(h[o[f]]={});for(var q=1e3*l+C(k[m].selectorText),s=k[m].style.cssText.split(";"),t=0;t<s.length;t++){var u=s[t].trim().split(":")[0];u.match(j)||(h[o[f]][u]||(h[o[f]][u]=0,(o[f].getAttribute("fr-original-style")||"").indexOf(u+":")>=0&&(h[o[f]][u]=1e4)),q>=h[o[f]][u]&&(h[o[f]][u]=q,s[t].trim().length&&i.push([o[f],u.trim(),s[t].trim().split(":")[1].trim(),q])))}}}}for(i.sort(E),e=0;e<i.length;e++){var v=i[e];v[0].style[v[1]]=v[2]}for(e=0;e<g.length;e++)if(g[e].getAttribute("class")&&(g[e].setAttribute("fr-original-class",g[e].getAttribute("class")),g[e].removeAttribute("class")),(g[e].getAttribute("fr-original-style")||"").trim().length>0){var w=g[e].getAttribute("fr-original-style").split(";");for(f=0;f<w.length;f++)w[f].indexOf(":")>0&&(g[e].style[w[f].split(":")[0].trim()]=w[f].split(":")[1].trim())}}if(b.core.isEmpty()?b.opts.fullPage&&(d=r(b.iframe_document),d+="<html"+b.node.attributes(b.$html.get(0))+">"+b.$html.find("head").get(0).outerHTML+"<body></body></html>"):(void 0===a&&(a=!1),b.opts.fullPage?(d=r(b.iframe_document),b.$el.removeClass("fr-view"),d+="<html"+b.node.attributes(b.$html.get(0))+">"+b.$html.html()+"</html>",b.$el.addClass("fr-view")):d=b.$el.html()),!b.opts.useClasses&&!c)for(e=0;e<g.length;e++)g[e].getAttribute("fr-original-class")&&(g[e].setAttribute("class",g[e].getAttribute("fr-original-class")),g[e].removeAttribute("fr-original-class")),g[e].getAttribute("fr-original-style")?(g[e].setAttribute("style",g[e].getAttribute("fr-original-style")),g[e].removeAttribute("fr-original-style")):g[e].removeAttribute("style");b.opts.fullPage&&(d=d.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g,""),d=d.replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g,""),d=d.replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g,""),d=d.replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>"),d=d.replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>"),d=d.replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>"),d=d.replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,'<body$1class="$2$4"$5>$6</body>'),d=d.replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")),b.opts.htmlSimpleAmpersand&&(d=d.replace(/\&amp;/gi,"&")),b.events.trigger("html.afterGet"),a||(d=d.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,"")),d=b.clean.invisibleSpaces(d),d=b.clean.exec(d,D);var x=b.events.chainTrigger("html.get",d);return"string"==typeof x&&(d=x),d=d.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g,function(a){return a.replace(/<br>/g,"\n")})}function G(){var c=function(c,d){for(;d&&(d.nodeType==Node.TEXT_NODE||!b.node.isBlock(d))&&!b.node.isElement(d);)d&&d.nodeType!=Node.TEXT_NODE&&a(c).wrapInner(b.node.openTagString(d)+b.node.closeTagString(d)),d=d.parentNode;d&&c.innerHTML==d.innerHTML&&(c.innerHTML=d.outerHTML)},d=function(){var c,d=null;return b.win.getSelection?(c=b.win.getSelection())&&c.rangeCount&&(d=c.getRangeAt(0).commonAncestorContainer,d.nodeType!=Node.ELEMENT_NODE&&(d=d.parentNode)):(c=b.doc.selection)&&"Control"!=c.type&&(d=c.createRange().parentElement()),null!=d&&(a.inArray(b.el,a(d).parents())>=0||d==b.el)?d:null},e="";if(void 0!==b.win.getSelection){b.browser.mozilla&&(b.selection.save(),b.$el.find('.fr-marker[data-type="false"]').length>1&&(b.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(),b.$el.find('.fr-marker[data-type="false"]:last').attr("data-id","0"),b.$el.find(".fr-marker").not('[data-id="0"]').remove()),b.selection.restore());for(var f=b.selection.ranges(),g=0;g<f.length;g++){var h=document.createElement("div");h.appendChild(f[g].cloneContents());var i=h.children;if(i.length){var j=i[i.length-1];("P"==j.tagName&&b.opts.enter==a.FroalaEditor.ENTER_P||"DIV"==j.tagName&&b.opts.enter==a.FroalaEditor.ENTER_DIV)&&b.node.isEmpty(j)&&h.removeChild(j)}c(h,d()),a(h).find(".fr-element").length>0&&(h=b.el),e+=h.innerHTML}}else void 0!==b.doc.selection&&"Text"==b.doc.selection.type&&(e=b.doc.selection.createRange().htmlText);return e}function H(a){var c=b.doc.createElement("div");return c.innerHTML=a,null!==c.querySelector(g())}function I(a){var c=b.doc.createElement("div");return c.innerHTML=a,b.selection.setAtEnd(c),c.innerHTML}function J(a){return a.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/'/gi,"&#39;")}function K(c,d,e){b.selection.isCollapsed()||b.selection.remove();var f;if(f=d?c:b.clean.html(c),f=f.replace(/\r|\n/g," "),c.indexOf('class="fr-marker"')<0&&(f=I(f)),b.core.isEmpty()&&!b.opts.keepFormatOnDelete&&H(f))b.el.innerHTML=f;else{var g=b.markers.insert();if(g){b.node.isLastSibling(g)&&a(g).parent().hasClass("fr-deletable")&&a(g).insertAfter(a(g).parent());var h=b.node.blockParent(g);if((H(f)||e)&&(b.node.deepestParent(g)||h&&"LI"==h.tagName)){if(!(g=b.markers.split()))return!1;g.outerHTML=f}else g.outerHTML=f}else b.el.innerHTML=b.el.innerHTML+f}v(),b.keys.positionCaret(),b.events.trigger("html.inserted")}function L(c){var d=null;if(void 0===c&&(d=b.selection.element()),b.opts.keepFormatOnDelete)return!1;var e=d?(d.textContent.match(/\u200B/g)||[]).length-d.querySelectorAll(".fr-marker").length:0;if((b.el.textContent.match(/\u200B/g)||[]).length-b.el.querySelectorAll(".fr-marker").length==e)return!1;var f,g;do{g=!1,f=b.el.querySelectorAll("*:not(.fr-marker)");for(var h=0;h<f.length;h++){var i=f[h];if(d!=i){var j=i.textContent;0===i.children.length&&1===j.length&&8203==j.charCodeAt(0)&&"TD"!==i.tagName&&(a(i).remove(),g=!0)}}}while(g)}function M(){if(b.$wp){var a=function(){L(),b.placeholder&&setTimeout(b.placeholder.refresh,0)};b.events.on("mouseup",a),b.events.on("keydown",a),b.events.on("contentChanged",w)}}return{defaultTag:c,isPreformatted:d,emptyBlocks:e,emptyBlockTagsQuery:f,blockTagsQuery:g,fillEmptyBlocks:m,cleanEmptyTags:h,cleanWhiteTags:L,cleanBlankSpaces:o,blocks:n,getDoctype:r,set:B,get:F,getSelected:G,insert:K,wrap:k,unwrap:l,escapeEntities:J,checkIfEmpty:w,extractNode:x,extractNodeAttrs:y,extractDoctype:z,cleanBRs:u,_init:M}},a.extend(a.FE.DEFAULTS,{height:null,heightMax:null,heightMin:null,width:null}),a.FE.MODULES.size=function(a){function b(){c(),a.opts.height&&a.$el.css("minHeight",a.opts.height-a.helpers.getPX(a.$el.css("padding-top"))-a.helpers.getPX(a.$el.css("padding-bottom"))),a.$iframe.height(a.$el.outerHeight(!0))}function c(){a.opts.heightMin?a.$el.css("minHeight",a.opts.heightMin):a.$el.css("minHeight",""),a.opts.heightMax?(a.$wp.css("maxHeight",a.opts.heightMax),a.$wp.css("overflow","auto")):(a.$wp.css("maxHeight",""),a.$wp.css("overflow","")),a.opts.height?(a.$wp.height(a.opts.height),a.$wp.css("overflow","auto"),a.$el.css("minHeight",a.opts.height-a.helpers.getPX(a.$el.css("padding-top"))-a.helpers.getPX(a.$el.css("padding-bottom")))):(a.$wp.css("height",""),a.opts.heightMin||a.$el.css("minHeight",""),a.opts.heightMax||a.$wp.css("overflow","")),a.opts.width&&a.$box.width(a.opts.width)}function d(){if(!a.$wp)return!1;c(),a.$iframe&&(a.events.on("keyup keydown",function(){setTimeout(b,0)},!0),a.events.on("commands.after",b),a.events.on("html.set",b),a.events.on("init",b),a.events.on("initialized",b))}return{_init:d,syncIframe:b,refresh:c}},a.extend(a.FE.DEFAULTS,{language:null}),a.FE.LANGUAGE={},a.FE.MODULES.language=function(b){function c(a){return e&&e.translation[a]?e.translation[a]:a}function d(){a.FE.LANGUAGE&&(e=a.FE.LANGUAGE[b.opts.language]),e&&e.direction&&(b.opts.direction=e.direction)}var e;return{_init:d,translate:c}},a.extend(a.FE.DEFAULTS,{placeholderText:"Type something"}),a.FE.MODULES.placeholder=function(b){function c(){b.$placeholder||g();var c=b.opts.iframe?b.$iframe.prev().outerHeight(!0):b.$el.prev().outerHeight(!0),d=0,e=0,f=0,h=0,i=0,j=0,k=b.node.contents(b.el),l=a(b.selection.element()).css("text-align");if(k.length&&k[0].nodeType==Node.ELEMENT_NODE){var m=a(k[0]);(!b.opts.toolbarInline||b.$el.prev().length>0)&&b.ready&&(d=b.helpers.getPX(m.css("margin-top")),h=b.helpers.getPX(m.css("padding-top")),e=b.helpers.getPX(m.css("margin-left")),f=b.helpers.getPX(m.css("margin-right")),i=b.helpers.getPX(m.css("padding-left")),j=b.helpers.getPX(m.css("padding-right"))),b.$placeholder.css("font-size",m.css("font-size")),b.$placeholder.css("line-height",m.css("line-height"))}else b.$placeholder.css("font-size",b.$el.css("font-size")),b.$placeholder.css("line-height",b.$el.css("line-height"));b.$wp.addClass("show-placeholder"),b.$placeholder.css({marginTop:Math.max(b.helpers.getPX(b.$el.css("margin-top")),d)+c,paddingTop:Math.max(b.helpers.getPX(b.$el.css("padding-top")),h),paddingLeft:Math.max(b.helpers.getPX(b.$el.css("padding-left")),i),marginLeft:Math.max(b.helpers.getPX(b.$el.css("margin-left")),e),paddingRight:Math.max(b.helpers.getPX(b.$el.css("padding-right")),j),marginRight:Math.max(b.helpers.getPX(b.$el.css("margin-right")),f),textAlign:l}).text(b.language.translate(b.opts.placeholderText||b.$oel.attr("placeholder")||"")),b.$placeholder.html(b.$placeholder.text().replace(/\n/g,"<br>"))}function d(){b.$wp.removeClass("show-placeholder")}function e(){return!b.$wp||b.node.hasClass(b.$wp.get(0),"show-placeholder")}function f(){if(!b.$wp)return!1;b.core.isEmpty()?c():d()}function g(){b.$placeholder=a('<span class="fr-placeholder"></span>'),b.$wp.append(b.$placeholder)}function h(){if(!b.$wp)return!1;b.events.on("init input keydown keyup contentChanged initialized",f)}return{_init:h,show:c,hide:d,refresh:f,isVisible:e}},a.FE.MODULES.edit=function(a){function b(){if(a.browser.mozilla)try{a.doc.execCommand("enableObjectResizing",!1,"false"),a.doc.execCommand("enableInlineTableEditing",!1,"false")}catch(b){}if(a.browser.msie)try{a.doc.body.addEventListener("mscontrolselect",function(a){return a.preventDefault(),!1})}catch(b){}}function c(){a.$wp?(a.$el.attr("contenteditable",!0),a.$el.removeClass("fr-disabled").attr("aria-disabled",!1),a.$tb&&a.$tb.removeClass("fr-disabled").attr("aria-disabled",!1),b()):a.$el.is("a")&&a.$el.attr("contenteditable",!0),g=!1}function d(){a.$wp?(a.$el.attr("contenteditable",!1),a.$el.addClass("fr-disabled").attr("aria-disabled",!0),a.$tb&&a.$tb.addClass("fr-disabled").attr("aria-disabled",!0)):a.$el.is("a")&&a.$el.attr("contenteditable",!1),g=!0}function e(){return g}function f(){a.events.on("focus",function(){e()?a.edit.off():a.edit.on()})}var g=!1;return{_init:f,on:c,off:d,disableDesign:b,isDisabled:e}},a.extend(a.FE.DEFAULTS,{editorClass:null,typingTimer:500,iframe:!1,requestWithCORS:!0,requestWithCredentials:!1,requestHeaders:{},useClasses:!0,spellcheck:!0,iframeStyle:'html{margin:0px;height:auto;}body{height:auto;padding:10px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}',iframeStyleFiles:[],direction:"auto",zIndex:1,tabIndex:null,disableRightClick:!1,scrollableContainer:"body",keepFormatOnDelete:!1,theme:null}),a.FE.MODULES.core=function(b){function c(c){if(b.opts.iframe){b.$head.find("style[data-fr-style], link[data-fr-style]").remove(),b.$head.append('<style data-fr-style="true">'+c+"</style>");for(var d=0;d<b.opts.iframeStyleFiles.length;d++){var e=a('<link data-fr-style="true" rel="stylesheet" href="'+b.opts.iframeStyleFiles[d]+'">');e.get(0).addEventListener("load",b.size.syncIframe),b.$head.append(e)}}}function d(){b.opts.iframe||b.$el.addClass("fr-element fr-view")}function e(){if(b.$box.addClass("fr-box"+(b.opts.editorClass?" "+b.opts.editorClass:"")),b.$wp.addClass("fr-wrapper"),d(),b.opts.iframe){b.$iframe.addClass("fr-iframe"),b.$el.addClass("fr-view");for(var a=0;a<b.o_doc.styleSheets.length;a++){var c;try{c=b.o_doc.styleSheets[a].cssRules}catch(g){}if(c)for(var e=0,f=c.length;e<f;e++)!c[e].selectorText||0!==c[e].selectorText.indexOf(".fr-view")&&0!==c[e].selectorText.indexOf(".fr-element")||c[e].style.cssText.length>0&&(0===c[e].selectorText.indexOf(".fr-view")?b.opts.iframeStyle+=c[e].selectorText.replace(/\.fr-view/g,"body")+"{"+c[e].style.cssText+"}":b.opts.iframeStyle+=c[e].selectorText.replace(/\.fr-element/g,"body")+"{"+c[e].style.cssText+"}")}}"auto"!=b.opts.direction&&b.$box.removeClass("fr-ltr fr-rtl").addClass("fr-"+b.opts.direction),b.$el.attr("dir",b.opts.direction),b.$wp.attr("dir",b.opts.direction),b.opts.zIndex>1&&b.$box.css("z-index",b.opts.zIndex),b.opts.theme&&b.$box.addClass(b.opts.theme+"-theme"),b.opts.tabIndex=b.opts.tabIndex||b.$oel.attr("tabIndex"),b.opts.tabIndex&&b.$el.attr("tabIndex",b.opts.tabIndex)}function f(){return b.node.isEmpty(b.el)}function g(){b.drag_support={filereader:"undefined"!=typeof FileReader,formdata:!!b.win.FormData,progress:"upload"in new XMLHttpRequest}}function h(a,c){var d=new XMLHttpRequest;d.open(c,a,!0),b.opts.requestWithCredentials&&(d.withCredentials=!0);for(var e in b.opts.requestHeaders)b.opts.requestHeaders.hasOwnProperty(e)&&d.setRequestHeader(e,b.opts.requestHeaders[e]);return d}function i(a){"TEXTAREA"==b.$oel.get(0).tagName&&b.$oel.val(a),b.$wp&&("TEXTAREA"==b.$oel.get(0).tagName?(b.$el.html(""),b.$wp.html(""),b.$box.replaceWith(b.$oel),b.$oel.show()):(b.$wp.replaceWith(a),b.$el.html(""),b.$box.removeClass("fr-view fr-ltr fr-box "+(b.opts.editorClass||"")),b.opts.theme&&b.$box.addClass(b.opts.theme+"-theme"))),this.$wp=null,this.$el=null,this.el=null,this.$box=null}function j(){return b.browser.mozilla&&b.helpers.isMobile()?b.selection.inEditor():b.node.hasFocus(b.el)||b.$el.find("*:focus").length>0}function k(a){if(!a)return!1;var c=a.data("instance");return!!c&&c.id==b.id}function l(){if(a.FE.INSTANCES.push(b),g(),b.$wp){e(),b.html.set(b._original_html),b.$el.attr("spellcheck",b.opts.spellcheck),b.helpers.isMobile()&&(b.$el.attr("autocomplete",b.opts.spellcheck?"on":"off"),b.$el.attr("autocorrect",b.opts.spellcheck?"on":"off"),b.$el.attr("autocapitalize",b.opts.spellcheck?"on":"off")),b.opts.disableRightClick&&b.events.$on(b.$el,"contextmenu",function(a){if(2==a.button)return!1});try{b.doc.execCommand("styleWithCSS",!1,!1)}catch(c){}}"TEXTAREA"==b.$oel.get(0).tagName&&(b.events.on("contentChanged",function(){b.$oel.val(b.html.get())}),b.events.on("form.submit",function(){b.$oel.val(b.html.get())}),b.events.on("form.reset",function(){b.html.set(b._original_html)}),b.$oel.val(b.html.get())),b.helpers.isIOS()&&b.events.$on(b.$doc,"selectionchange",function(){b.$doc.get(0).hasFocus()||b.$win.get(0).focus()}),b.events.trigger("init")}return{_init:l,destroy:i,isEmpty:f,getXHR:h,injectStyle:c,hasFocus:j,sameInstance:k}},a.FE.MODULES.cursorLists=function(b){function c(a){for(var b=a;"LI"!=b.tagName;)b=b.parentNode;return b}function d(a){for(var c=a;!b.node.isList(c);)c=c.parentNode;return c}function e(e){var f,g=c(e),h=g.nextSibling,i=g.previousSibling,j=b.html.defaultTag();if(b.node.isEmpty(g,!0)&&h){for(var k="",l="",m=e.parentNode;!b.node.isList(m)&&m.parentNode&&"LI"!==m.parentNode.tagName;)k=b.node.openTagString(m)+k,l+=b.node.closeTagString(m),m=m.parentNode;k=b.node.openTagString(m)+k,l+=b.node.closeTagString(m);var n="";for(n=m.parentNode&&"LI"==m.parentNode.tagName?l+"<li>"+a.FE.MARKERS+"<br>"+k:j?l+"<"+j+">"+a.FE.MARKERS+"<br></"+j+">"+k:l+a.FE.MARKERS+"<br>"+k,a(g).html('<span id="fr-break"></span>');["UL","OL"].indexOf(m.tagName)<0||m.parentNode&&"LI"===m.parentNode.tagName;)m=m.parentNode;var o=b.node.openTagString(m)+a(m).html()+b.node.closeTagString(m);o=o.replace(/<span id="fr-break"><\/span>/g,n),a(m).replaceWith(o),b.$el.find("li:empty").remove()}else if(i&&h||!b.node.isEmpty(g,!0)){for(var p="<br>",q=e.parentNode;q&&"LI"!=q.tagName;)p=b.node.openTagString(q)+p+b.node.closeTagString(q),q=q.parentNode;a(g).before("<li>"+p+"</li>"),a(e).remove()}else i?(f=d(g),f.parentNode&&"LI"==f.parentNode.tagName?a(f.parentNode).after("<li>"+a.FE.MARKERS+"<br></li>"):j?a(f).after("<"+j+">"+a.FE.MARKERS+"<br></"+j+">"):a(f).after(a.FE.MARKERS+"<br>"),a(g).remove()):(f=d(g),f.parentNode&&"LI"==f.parentNode.tagName?h?a(f.parentNode).before(b.node.openTagString(g)+a.FE.MARKERS+"<br></li>"):a(f.parentNode).after(b.node.openTagString(g)+a.FE.MARKERS+"<br></li>"):j?a(f).before("<"+j+">"+a.FE.MARKERS+"<br></"+j+">"):a(f).before(a.FE.MARKERS+"<br>"),a(g).remove())}function f(d){for(var e=c(d),f="",g=d,h="",i="";g!=e;){g=g.parentNode;var j="A"==g.tagName&&b.cursor.isAtEnd(d,g)?"fr-to-remove":"";h=b.node.openTagString(a(g).clone().addClass(j).get(0))+h,i=b.node.closeTagString(g)+i}f=i+f+h+a.FE.MARKERS,a(d).replaceWith('<span id="fr-break"></span>');var k=b.node.openTagString(e)+a(e).html()+b.node.closeTagString(e);k=k.replace(/<span id="fr-break"><\/span>/g,f),a(e).replaceWith(k)}function g(d){for(var e=c(d),f=a.FE.MARKERS,g="",h=d,i=!1;h!=e;){h=h.parentNode;var j="A"==h.tagName&&b.cursor.isAtEnd(d,h)?"fr-to-remove":"";i||h==e||b.node.isBlock(h)||(i=!0,g+=a.FE.INVISIBLE_SPACE),g=b.node.openTagString(a(h).clone().addClass(j).get(0))+g,f+=b.node.closeTagString(h)}var k=g+f;a(d).remove(),a(e).after(k)}function h(e){var f=c(e),g=f.previousSibling;if(g){g=a(g).find(b.html.blockTagsQuery()).get(-1)||g,a(e).replaceWith(a.FE.MARKERS);var h=b.node.contents(g);h.length&&"BR"==h[h.length-1].tagName&&a(h[h.length-1]).remove(),a(f).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==f&&a(this).replaceWith(a(this).html()+(b.node.isEmpty(this)?"":"<br>"))});for(var i,j=b.node.contents(f)[0];j&&!b.node.isList(j);)i=j.nextSibling,a(g).append(j),j=i;for(g=f.previousSibling;j;)i=j.nextSibling,a(g).append(j),j=i;a(f).remove()}else{var k=d(f);if(a(e).replaceWith(a.FE.MARKERS),k.parentNode&&"LI"==k.parentNode.tagName){var l=k.previousSibling;b.node.isBlock(l)?(a(f).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==f&&a(this).replaceWith(a(this).html()+(b.node.isEmpty(this)?"":"<br>"))}),a(l).append(a(f).html())):a(k).before(a(f).html())}else{var m=b.html.defaultTag();m&&0===a(f).find(b.html.blockTagsQuery()).length?a(k).before("<"+m+">"+a(f).html()+"</"+m+">"):(a(k).before(a(f).html()),b.html.wrap())}a(f).remove(),0===a(k).find("li").length&&a(k).remove()}}function i(d){var e,f=c(d),g=f.nextSibling;if(g){e=b.node.contents(g),e.length&&"BR"==e[0].tagName&&a(e[0]).remove(),a(g).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==g&&a(this).replaceWith(a(this).html()+(b.node.isEmpty(this)?"":"<br>"))});for(var h,i=d,j=b.node.contents(g)[0];j&&!b.node.isList(j);)h=j.nextSibling,a(i).after(j),i=j,j=h;for(;j;)h=j.nextSibling,a(f).append(j),j=h;a(d).replaceWith(a.FE.MARKERS),a(g).remove()}else{for(var k=f;!k.nextSibling&&k!=b.el;)k=k.parentNode;if(k==b.el)return!1;if(k=k.nextSibling,b.node.isBlock(k))a.FE.NO_DELETE_TAGS.indexOf(k.tagName)<0&&(a(d).replaceWith(a.FE.MARKERS),e=b.node.contents(f),e.length&&"BR"==e[e.length-1].tagName&&a(e[e.length-1]).remove(),a(f).append(a(k).html()),a(k).remove());else for(e=b.node.contents(f),e.length&&"BR"==e[e.length-1].tagName&&a(e[e.length-1]).remove(),a(d).replaceWith(a.FE.MARKERS);k&&!b.node.isBlock(k)&&"BR"!=k.tagName;)a(f).append(a(k)),k=k.nextSibling}}return{_startEnter:e,_middleEnter:f,_endEnter:g,_backspace:h,_del:i}},a.FE.NO_DELETE_TAGS=["TH","TD","TR","TABLE","FORM"],a.FE.SIMPLE_ENTER_TAGS=["TH","TD","LI","DL","DT","FORM"],a.FE.MODULES.cursor=function(b){function c(a){return!!a&&(!!b.node.isBlock(a)||(a.nextSibling&&a.nextSibling.nodeType==Node.TEXT_NODE&&0===a.nextSibling.textContent.replace(/\u200b/g,"").length?c(a.nextSibling):!(a.nextSibling&&(!a.previousSibling||"BR"!=a.nextSibling.tagName||a.nextSibling.nextSibling))&&c(a.parentNode)))}function d(a){return!!a&&(!!b.node.isBlock(a)||(a.previousSibling&&a.previousSibling.nodeType==Node.TEXT_NODE&&0===a.previousSibling.textContent.replace(/\u200b/g,"").length?d(a.previousSibling):!a.previousSibling&&d(a.parentNode)))}function e(a,c){return!!a&&(a!=b.$wp.get(0)&&(a.previousSibling&&a.previousSibling.nodeType==Node.TEXT_NODE&&0===a.previousSibling.textContent.replace(/\u200b/g,"").length?e(a.previousSibling,c):!a.previousSibling&&(a.parentNode==c||e(a.parentNode,c))))}function f(a,c){return!!a&&(a!=b.$wp.get(0)&&(a.nextSibling&&a.nextSibling.nodeType==Node.TEXT_NODE&&0===a.nextSibling.textContent.replace(/\u200b/g,"").length?f(a.nextSibling,c):!(a.nextSibling&&(!a.previousSibling||"BR"!=a.nextSibling.tagName||a.nextSibling.nextSibling))&&(a.parentNode==c||f(a.parentNode,c))))}function g(c){return a(c).parentsUntil(b.$el,"LI").length>0&&0===a(c).parentsUntil("LI","TABLE").length}function h(a,b){var c=new RegExp("(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\u0023-\\u0039]\\ufe0f?\\u20e3|\\u3299|\\u3297|\\u303d|\\u3030|\\u24c2|\\ud83c[\\udd70-\\udd71]|\\ud83c[\\udd7e-\\udd7f]|\\ud83c\\udd8e|\\ud83c[\\udd91-\\udd9a]|\\ud83c[\\udde6-\\uddff]|[\\ud83c[\\ude01-\\ude02]|\\ud83c\\ude1a|\\ud83c\\ude2f|[\\ud83c[\\ude32-\\ude3a]|[\\ud83c[\\ude50-\\ude51]|\\u203c|\\u2049|[\\u25aa-\\u25ab]|\\u25b6|\\u25c0|[\\u25fb-\\u25fe]|\\u00a9|\\u00ae|\\u2122|\\u2139|\\ud83c\\udc04|[\\u2600-\\u26FF]|\\u2b05|\\u2b06|\\u2b07|\\u2b1b|\\u2b1c|\\u2b50|\\u2b55|\\u231a|\\u231b|\\u2328|\\u23cf|[\\u23e9-\\u23f3]|[\\u23f8-\\u23fa]|\\ud83c\\udccf|\\u2934|\\u2935|[\\u2190-\\u21ff])"+(b?"":"$"),"i"),d=a.match(c);return d?d[0].length:1}function i(c){var d=a(c).parentsUntil(b.$el,"BLOCKQUOTE").length>0,e=b.node.deepestParent(c,[],!d);if(e&&"BLOCKQUOTE"==e.tagName){var f=b.node.deepestParent(c,[a(c).parentsUntil(b.$el,"BLOCKQUOTE").get(0)]);f&&f.previousSibling&&(e=f)}if(null!==e){var g,h=e.previousSibling;if(b.node.isBlock(e)&&b.node.isEditable(e)&&h&&a.FE.NO_DELETE_TAGS.indexOf(h.tagName)<0)if(b.node.isDeletable(h))a(h).remove(),a(c).replaceWith(a.FE.MARKERS);else if(b.node.isEditable(h))if(b.node.isBlock(h))if(b.node.isEmpty(h)&&!b.node.isList(h))a(h).remove(),a(c).after(b.opts.keepFormatOnDelete?a.FE.INVISIBLE_SPACE:"");else{if(b.node.isList(h)&&(h=a(h).find("li:last").get(0)),g=b.node.contents(h),g.length&&"BR"==g[g.length-1].tagName&&a(g[g.length-1]).remove(),"BLOCKQUOTE"==h.tagName&&"BLOCKQUOTE"!=e.tagName)for(g=b.node.contents(h);g.length&&b.node.isBlock(g[g.length-1]);)h=g[g.length-1],g=b.node.contents(h);else if("BLOCKQUOTE"!=h.tagName&&"BLOCKQUOTE"==e.tagName)for(g=b.node.contents(e);g.length&&b.node.isBlock(g[0]);)e=g[0],g=b.node.contents(e);b.node.isEmpty(e)?(a(c).remove(),b.selection.setAtEnd(h,b.opts.keepFormatOnDelete)):(a(c).replaceWith(a.FE.MARKERS),a(h).append(e.innerHTML)),a(e).remove()}else a(c).replaceWith(a.FE.MARKERS),"BLOCKQUOTE"==e.tagName&&h.nodeType==Node.ELEMENT_NODE?a(h).remove():(a(h).after(b.node.isEmpty(e)?"":a(e).html()),a(e).remove(),"BR"==h.tagName&&a(h).remove())}}function j(c){for(var d=c;!d.previousSibling;)if(d=d.parentNode,b.node.isElement(d))return!1;d=d.previousSibling;var e;if(!b.node.isBlock(d)&&b.node.isEditable(d)){for(e=b.node.contents(d);d.nodeType!=Node.TEXT_NODE&&!b.node.isDeletable(d)&&e.length&&b.node.isEditable(d);)d=e[e.length-1],e=b.node.contents(d);if(d.nodeType==Node.TEXT_NODE){var f=d.textContent,g=f.length;if(b.opts.tabSpaces&&f.length>=b.opts.tabSpaces){0===f.substr(f.length-b.opts.tabSpaces,f.length-1).replace(/ /g,"").replace(new RegExp(a.FE.UNICODE_NBSP,"g"),"").length&&(g=f.length-b.opts.tabSpaces)}d.textContent=f.substring(0,g-h(f));var i=f.length!=d.textContent.length;0===d.textContent.length?i&&b.opts.keepFormatOnDelete?a(d).after(a.FE.INVISIBLE_SPACE+a.FE.MARKERS):(2!=d.parentNode.childNodes.length||d.parentNode!=c.parentNode)&&1!=d.parentNode.childNodes.length||b.node.isBlock(d.parentNode)||b.node.isElement(d.parentNode)?(a(d).after(a.FE.MARKERS),b.node.isElement(d.parentNode)&&!c.nextSibling&&d.previousSibling&&"BR"==d.previousSibling.tagName&&a(c).after("<br>"),d.parentNode.removeChild(d)):(a(d.parentNode).after(a.FE.MARKERS),a(d.parentNode).remove()):a(d).after(a.FE.MARKERS)}else b.node.isDeletable(d)?(a(d).after(a.FE.MARKERS),a(d).remove()):c.nextSibling&&"BR"==c.nextSibling.tagName&&b.node.isVoid(d)&&"BR"!=d.tagName?(a(c.nextSibling).remove(),a(c).replaceWith(a.FE.MARKERS)):!1!==b.events.trigger("node.remove",[a(d)])&&(a(d).after(a.FE.MARKERS),a(d).remove())}else if(a.FE.NO_DELETE_TAGS.indexOf(d.tagName)<0&&(b.node.isEditable(d)||b.node.isDeletable(d)))if(b.node.isDeletable(d))a(c).replaceWith(a.FE.MARKERS),a(d).remove();else if(b.node.isEmpty(d)&&!b.node.isList(d))a(d).remove(),a(c).replaceWith(a.FE.MARKERS);else{for(b.node.isList(d)&&(d=a(d).find("li:last").get(0)),e=b.node.contents(d),e&&"BR"==e[e.length-1].tagName&&a(e[e.length-1]).remove(),e=b.node.contents(d);e&&b.node.isBlock(e[e.length-1]);)d=e[e.length-1],e=b.node.contents(d);a(d).append(a.FE.MARKERS);for(var j=c;!j.previousSibling;)j=j.parentNode;for(;j&&"BR"!==j.tagName&&!b.node.isBlock(j);){var k=j;j=j.nextSibling,a(d).append(k)}j&&"BR"==j.tagName&&a(j).remove(),a(c).remove()}else c.nextSibling&&"BR"==c.nextSibling.tagName&&a(c.nextSibling).remove()}function k(){var f=!1,k=b.markers.insert();if(!k)return!0;for(var l=k.parentNode;l&&!b.node.isElement(l);){if("false"===l.getAttribute("contenteditable"))return a(k).replaceWith(a.FE.MARKERS),b.selection.restore(),!1;if("true"===l.getAttribute("contenteditable"))break;l=l.parentNode}b.el.normalize();var m=k.previousSibling;if(m){var n=m.textContent;n&&n.length&&8203==n.charCodeAt(n.length-1)&&(1==n.length?a(m).remove():m.textContent=m.textContent.substr(0,n.length-h(n)))}return c(k)?f=j(k):d(k)?g(k)&&e(k,a(k).parents("li:first").get(0))?b.cursorLists._backspace(k):i(k):f=j(k),a(k).remove(),o(),b.html.fillEmptyBlocks(!0),b.opts.htmlUntouched||(b.html.cleanEmptyTags(),b.clean.quotes(),b.clean.lists()),b.spaces.normalizeAroundCursor(),b.selection.restore(),f}function l(c){var d=a(c).parentsUntil(b.$el,"BLOCKQUOTE").length>0,e=b.node.deepestParent(c,[],!d);if(e&&"BLOCKQUOTE"==e.tagName){var f=b.node.deepestParent(c,[a(c).parentsUntil(b.$el,"BLOCKQUOTE").get(0)]);f&&f.nextSibling&&(e=f)}if(null!==e){var g,h=e.nextSibling;if(b.node.isBlock(e)&&(b.node.isEditable(e)||b.node.isDeletable(e))&&h&&a.FE.NO_DELETE_TAGS.indexOf(h.tagName)<0)if(b.node.isDeletable(h))a(h).remove(),a(c).replaceWith(a.FE.MARKERS);else if(b.node.isBlock(h)&&b.node.isEditable(h))if(b.node.isList(h))if(b.node.isEmpty(e,!0))a(e).remove(),a(h).find("li:first").prepend(a.FE.MARKERS);else{var i=a(h).find("li:first");"BLOCKQUOTE"==e.tagName&&(g=b.node.contents(e),g.length&&b.node.isBlock(g[g.length-1])&&(e=g[g.length-1])),0===i.find("ul, ol").length&&(a(c).replaceWith(a.FE.MARKERS),i.find(b.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==i.get(0)&&a(this).replaceWith(a(this).html()+(b.node.isEmpty(this)?"":"<br>"))}),a(e).append(b.node.contents(i.get(0))),i.remove(),0===a(h).find("li").length&&a(h).remove())}else{if(g=b.node.contents(h),g.length&&"BR"==g[0].tagName&&a(g[0]).remove(),"BLOCKQUOTE"!=h.tagName&&"BLOCKQUOTE"==e.tagName)for(g=b.node.contents(e);g.length&&b.node.isBlock(g[g.length-1]);)e=g[g.length-1],g=b.node.contents(e);else if("BLOCKQUOTE"==h.tagName&&"BLOCKQUOTE"!=e.tagName)for(g=b.node.contents(h);g.length&&b.node.isBlock(g[0]);)h=g[0],g=b.node.contents(h);a(c).replaceWith(a.FE.MARKERS),a(e).append(h.innerHTML),a(h).remove()}else{for(a(c).replaceWith(a.FE.MARKERS);h&&"BR"!==h.tagName&&!b.node.isBlock(h)&&b.node.isEditable(h);){var j=h;h=h.nextSibling,a(e).append(j)}h&&"BR"==h.tagName&&b.node.isEditable(h)&&a(h).remove()}}}function m(d){for(var e=d;!e.nextSibling;)if(e=e.parentNode,b.node.isElement(e))return!1;if(e=e.nextSibling,"BR"==e.tagName&&b.node.isEditable(e))if(e.nextSibling){if(b.node.isBlock(e.nextSibling)&&b.node.isEditable(e.nextSibling)){if(!(a.FE.NO_DELETE_TAGS.indexOf(e.nextSibling.tagName)<0))return void a(e).remove();e=e.nextSibling,a(e.previousSibling).remove()}}else if(c(e)){if(g(d))b.cursorLists._del(d);else{var f=b.node.deepestParent(e);f&&((!b.node.isEmpty(b.node.blockParent(e))||(b.node.blockParent(e).nextSibling&&a.FE.NO_DELETE_TAGS.indexOf(b.node.blockParent(e).nextSibling.tagName))<0)&&a(e).remove(),l(d))}return}var i;if(!b.node.isBlock(e)&&b.node.isEditable(e)){for(i=b.node.contents(e);e.nodeType!=Node.TEXT_NODE&&i.length&&!b.node.isDeletable(e)&&b.node.isEditable(e);)e=i[0],i=b.node.contents(e);e.nodeType==Node.TEXT_NODE?(a(e).before(a.FE.MARKERS),e.textContent.length&&(e.textContent=e.textContent.substring(h(e.textContent,!0),e.textContent.length))):b.node.isDeletable(e)?(a(e).before(a.FE.MARKERS),a(e).remove()):!1!==b.events.trigger("node.remove",[a(e)])&&(a(e).before(a.FE.MARKERS),a(e).remove()),a(d).remove()}else if(a.FE.NO_DELETE_TAGS.indexOf(e.tagName)<0&&(b.node.isEditable(e)||b.node.isDeletable(e)))if(b.node.isDeletable(e))a(d).replaceWith(a.FE.MARKERS),a(e).remove();else if(b.node.isList(e))d.previousSibling?(a(e).find("li:first").prepend(d),b.cursorLists._backspace(d)):(a(e).find("li:first").prepend(a.FE.MARKERS),a(d).remove());else if(i=b.node.contents(e),i&&"BR"==i[0].tagName&&a(i[0]).remove(),i&&"BLOCKQUOTE"==e.tagName){var j=i[0];for(a(d).before(a.FE.MARKERS);j&&"BR"!=j.tagName;){var k=j;j=j.nextSibling,a(d).before(k)}j&&"BR"==j.tagName&&a(j).remove()}else a(d).after(a(e).html()).after(a.FE.MARKERS),a(e).remove()}function n(){var e=b.markers.insert();if(!e)return!1;if(b.el.normalize(),c(e))if(g(e))if(0===a(e).parents("li:first").find("ul, ol").length)b.cursorLists._del(e);else{var f=a(e).parents("li:first").find("ul:first, ol:first").find("li:first");f=f.find(b.html.blockTagsQuery()).get(-1)||f,f.prepend(e),b.cursorLists._backspace(e)}else l(e);else m(d(e)?e:e);a(e).remove(),o(),b.html.fillEmptyBlocks(!0),b.opts.htmlUntouched||(b.html.cleanEmptyTags(),b.clean.quotes(),b.clean.lists()),b.spaces.normalizeAroundCursor(),b.selection.restore()}function o(){for(var a=b.el.querySelectorAll("blockquote:empty"),c=0;c<a.length;c++)a[c].parentNode.removeChild(a[c])}function p(){b.$el.find(".fr-to-remove").each(function(){
for(var c=b.node.contents(this),d=0;d<c.length;d++)c[d].nodeType==Node.TEXT_NODE&&(c[d].textContent=c[d].textContent.replace(/\u200B/g,""));a(this).replaceWith(this.innerHTML)})}function q(c,d,e){var g,h=b.node.deepestParent(c,[],!e);if(h&&"BLOCKQUOTE"==h.tagName)return f(c,h)?(g=b.html.defaultTag(),g?a(h).after("<"+g+">"+a.FE.MARKERS+"<br></"+g+">"):a(h).after(a.FE.MARKERS+"<br>"),a(c).remove(),!1):(s(c,d,e),!1);if(null==h)g=b.html.defaultTag(),g&&b.node.isElement(c.parentNode)?a(c).replaceWith("<"+g+">"+a.FE.MARKERS+"<br></"+g+">"):!c.previousSibling||a(c.previousSibling).is("br")||c.nextSibling?a(c).replaceWith("<br>"+a.FE.MARKERS):a(c).replaceWith("<br>"+a.FE.MARKERS+"<br>");else{var i=c,j="";b.node.isBlock(h)&&!d||(j="<br/>");var k="",l="";g=b.html.defaultTag();var m="",n="";g&&b.node.isBlock(h)&&(m="<"+g+">",n="</"+g+">",h.tagName==g.toUpperCase()&&(m=b.node.openTagString(a(h).clone().removeAttr("id").get(0))));do{if(i=i.parentNode,!d||i!=h||d&&!b.node.isBlock(h))if(k+=b.node.closeTagString(i),i==h&&b.node.isBlock(h))l=m+l;else{var o="A"==i.tagName&&f(c,i)?"fr-to-remove":"";l=b.node.openTagString(a(i).clone().addClass(o).get(0))+l}}while(i!=h);j=k+j+l+(c.parentNode==h&&b.node.isBlock(h)?"":a.FE.INVISIBLE_SPACE)+a.FE.MARKERS,b.node.isBlock(h)&&!a(h).find("*:last").is("br")&&a(h).append("<br/>"),a(c).after('<span id="fr-break"></span>'),a(c).remove(),h.nextSibling&&!b.node.isBlock(h.nextSibling)||b.node.isBlock(h)||a(h).after("<br>");var p;p=!d&&b.node.isBlock(h)?b.node.openTagString(h)+a(h).html()+n:b.node.openTagString(h)+a(h).html()+b.node.closeTagString(h),p=p.replace(/<span id="fr-break"><\/span>/g,j),a(h).replaceWith(p)}}function r(c,d,g){var h,i=b.node.deepestParent(c,[],!g);if(i&&"TABLE"==i.tagName)return a(i).find("td:first, th:first").prepend(c),r(c,d,g);if(i&&"BLOCKQUOTE"==i.tagName){if(e(c,i))return h=b.html.defaultTag(),h?a(i).before("<"+h+">"+a.FE.MARKERS+"<br></"+h+">"):a(i).before(a.FE.MARKERS+"<br>"),a(c).remove(),!1;f(c,i)?q(c,d,!0):s(c,d,!0)}if(null==i)h=b.html.defaultTag(),h&&b.node.isElement(c.parentNode)?a(c).replaceWith("<"+h+">"+a.FE.MARKERS+"<br></"+h+">"):a(c).replaceWith("<br>"+a.FE.MARKERS);else{if(b.node.isBlock(i))if(d)a(c).remove(),a(i).prepend("<br>"+a.FE.MARKERS);else{if(b.node.isEmpty(i,!0))return q(c,d,g);a(i).before(b.node.openTagString(a(i).clone().removeAttr("id").get(0))+"<br>"+b.node.closeTagString(i))}else a(i).before("<br>");a(c).remove()}}function s(c,d,g){var h=b.node.deepestParent(c,[],!g);if(null==h)b.html.defaultTag()&&c.parentNode===b.el?a(c).replaceWith("<"+b.html.defaultTag()+">"+a.FE.MARKERS+"<br></"+b.html.defaultTag()+">"):(c.nextSibling&&!b.node.isBlock(c.nextSibling)||a(c).after("<br>"),a(c).replaceWith("<br>"+a.FE.MARKERS));else{var i=c,j="";"PRE"==h.tagName&&(d=!0),b.node.isBlock(h)&&!d||(j="<br>");var k="",l="";do{var m=i;if(i=i.parentNode,"BLOCKQUOTE"==h.tagName&&b.node.isEmpty(m)&&!b.node.hasClass(m,"fr-marker")&&a(m).find(c).length>0&&a(m).after(c),("BLOCKQUOTE"!=h.tagName||!f(c,i)&&!e(c,i))&&(!d||i!=h||d&&!b.node.isBlock(h))){k+=b.node.closeTagString(i);var n="A"==i.tagName&&f(c,i)?"fr-to-remove":"";l=b.node.openTagString(a(i).clone().addClass(n).removeAttr("id").get(0))+l}}while(i!=h);var o=h==c.parentNode&&b.node.isBlock(h)||c.nextSibling;if("BLOCKQUOTE"==h.tagName){c.previousSibling&&b.node.isBlock(c.previousSibling)&&c.nextSibling&&"BR"==c.nextSibling.tagName&&(a(c.nextSibling).after(c),c.nextSibling&&"BR"==c.nextSibling.tagName&&a(c.nextSibling).remove());var p=b.html.defaultTag();j=k+j+(p?"<"+p+">":"")+a.FE.MARKERS+"<br>"+(p?"</"+p+">":"")+l}else j=k+j+l+(o?"":a.FE.INVISIBLE_SPACE)+a.FE.MARKERS;a(c).replaceWith('<span id="fr-break"></span>');var q=b.node.openTagString(h)+a(h).html()+b.node.closeTagString(h);q=q.replace(/<span id="fr-break"><\/span>/g,j),a(h).replaceWith(q)}}function t(e){var f=b.markers.insert();if(!f)return!0;b.el.normalize();var h=!1;a(f).parentsUntil(b.$el,"BLOCKQUOTE").length>0&&(e=!1,h=!0),a(f).parentsUntil(b.$el,"TD, TH").length&&(h=!1),c(f)?!g(f)||e||h?q(f,e,h):b.cursorLists._endEnter(f):d(f)?!g(f)||e||h?r(f,e,h):b.cursorLists._startEnter(f):!g(f)||e||h?s(f,e,h):b.cursorLists._middleEnter(f),p(),b.html.fillEmptyBlocks(!0),b.opts.htmlUntouched||(b.html.cleanEmptyTags(),b.clean.lists()),b.spaces.normalizeAroundCursor(),b.selection.restore()}return{enter:t,backspace:k,del:n,isAtEnd:f,isAtStart:e}},a.FE.ENTER_P=0,a.FE.ENTER_DIV=1,a.FE.ENTER_BR=2,a.FE.KEYCODE={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,FF_SEMICOLON:59,FF_EQUALS:61,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,FF_HYPHEN:173,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,HYPHEN:189,PERIOD:190,SLASH:191,APOSTROPHE:192,TILDE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,IME:229},a.extend(a.FE.DEFAULTS,{enter:a.FE.ENTER_P,multiLine:!0,tabSpaces:0}),a.FE.MODULES.keys=function(b){function c(a){G=null,b.opts.multiLine?b.helpers.isIOS()?G=b.snapshot.get():(a.preventDefault(),a.stopPropagation(),b.selection.isCollapsed()||b.selection.remove(),b.cursor.enter()):(a.preventDefault(),a.stopPropagation())}function d(a){a.preventDefault(),a.stopPropagation(),b.opts.multiLine&&(b.selection.isCollapsed()||b.selection.remove(),b.cursor.enter(!0))}function e(){setTimeout(function(){b.events.disableBlur(),b.events.focus()},0)}function f(a){G=null,b.selection.isCollapsed()?b.helpers.isIOS()?G=b.snapshot.get():(b.cursor.backspace(),a.preventDefault(),a.stopPropagation()):(a.preventDefault(),a.stopPropagation(),b.selection.remove(),b.html.fillEmptyBlocks()),b.placeholder.refresh()}function g(a){a.preventDefault(),a.stopPropagation(),""===b.selection.text()?b.cursor.del():b.selection.remove(),b.placeholder.refresh()}function h(c){var d=b.selection.element();if(!b.helpers.isMobile()&&d&&"A"==d.tagName){c.preventDefault(),c.stopPropagation(),b.selection.isCollapsed()||b.selection.remove();var e=b.markers.insert();if(e){var f=e.previousSibling;!e.nextSibling&&e.parentNode&&"A"==e.parentNode.tagName?(e.parentNode.insertAdjacentHTML("afterend","&nbsp;"+a.FE.MARKERS),e.parentNode.removeChild(e)):(f&&f.nodeType==Node.TEXT_NODE&&1==f.textContent.length&&160==f.textContent.charCodeAt(0)?f.textContent=f.textContent+" ":e.insertAdjacentHTML("beforebegin","&nbsp;"),e.outerHTML=a.FE.MARKERS),b.selection.restore()}}}function i(){if(b.browser.mozilla&&b.selection.isCollapsed()&&!F){var a=b.selection.ranges(0),c=a.startContainer,d=a.startOffset;c&&c.nodeType==Node.TEXT_NODE&&d<=c.textContent.length&&d>0&&32==c.textContent.charCodeAt(d-1)&&(b.selection.save(),b.spaces.normalize(),b.selection.restore())}}function j(){b.selection.isFull()&&setTimeout(function(){var c=b.html.defaultTag();c?b.$el.html("<"+c+">"+a.FE.MARKERS+"<br/></"+c+">"):b.$el.html(a.FE.MARKERS+"<br/>"),b.selection.restore(),b.placeholder.refresh(),b.button.bulkRefresh(),b.undo.saveStep()},0)}function k(a){if(b.opts.tabSpaces>0)if(b.selection.isCollapsed()){b.undo.saveStep(),a.preventDefault(),a.stopPropagation();for(var c="",d=0;d<b.opts.tabSpaces;d++)c+="&nbsp;";b.html.insert(c),b.placeholder.refresh(),b.undo.saveStep()}else a.preventDefault(),a.stopPropagation(),a.shiftKey?b.commands.outdent():b.commands.indent()}function l(){F=!1}function m(){F=!1}function n(){return F}function o(i){b.events.disableBlur();var j=i.which;if(16===j)return!0;if(j===a.FE.KEYCODE.IME)return F=!0,!0;F=!1;var l=v(j)&&!t(i),m=j==a.FE.KEYCODE.BACKSPACE||j==a.FE.KEYCODE.DELETE;if((b.selection.isFull()&&!b.opts.keepFormatOnDelete&&!b.placeholder.isVisible()||m&&b.placeholder.isVisible()&&b.opts.keepFormatOnDelete)&&(l||m)){var n=b.html.defaultTag();if(n?b.$el.html("<"+n+">"+a.FE.MARKERS+"<br/></"+n+">"):b.$el.html(a.FE.MARKERS+"<br/>"),b.selection.restore(),!v(j))return i.preventDefault(),!0}j==a.FE.KEYCODE.ENTER?i.shiftKey?d(i):c(i):j===a.FE.KEYCODE.BACKSPACE&&(i.metaKey||i.ctrlKey)?e():j!=a.FE.KEYCODE.BACKSPACE||t(i)||i.altKey?j!=a.FE.KEYCODE.DELETE||t(i)||i.altKey?j==a.FE.KEYCODE.SPACE?h(i):j==a.FE.KEYCODE.TAB?k(i):t(i)||!v(i.which)||b.selection.isCollapsed()||i.ctrlKey||b.selection.remove():b.placeholder.isVisible()?(i.preventDefault(),i.stopPropagation()):g(i):b.placeholder.isVisible()?(i.preventDefault(),i.stopPropagation()):f(i),b.events.enableBlur()}function p(a){for(var c=b.doc.createTreeWalker(a,NodeFilter.SHOW_TEXT,b.node.filter(function(a){return/\u200B/gi.test(a.textContent)}),!1);c.nextNode();){var d=c.currentNode;d.textContent=d.textContent.replace(/\u200B/gi,"")}}function q(){if(!b.$wp)return!0;var c;b.opts.height||b.opts.heightMax?(c=b.position.getBoundingRect().top,(b.helpers.isIOS()||b.helpers.isAndroid())&&(c-=b.helpers.scrollTop()),b.opts.iframe&&(c+=b.$iframe.offset().top),c>b.$wp.offset().top-b.helpers.scrollTop()+b.$wp.height()-20&&b.$wp.scrollTop(c+b.$wp.scrollTop()-(b.$wp.height()+b.$wp.offset().top)+b.helpers.scrollTop()+20)):(c=b.position.getBoundingRect().top,b.opts.toolbarBottom&&(c+=b.opts.toolbarStickyOffset),(b.helpers.isIOS()||b.helpers.isAndroid())&&(c-=b.helpers.scrollTop()),b.opts.iframe&&(c+=b.$iframe.offset().top,c-=b.helpers.scrollTop()),c+=b.opts.toolbarStickyOffset,c>b.o_win.innerHeight-20&&a(b.o_win).scrollTop(c+b.helpers.scrollTop()-b.o_win.innerHeight+20),c=b.position.getBoundingRect().top,b.opts.toolbarBottom||(c-=b.opts.toolbarStickyOffset),(b.helpers.isIOS()||b.helpers.isAndroid())&&(c-=b.helpers.scrollTop()),b.opts.iframe&&(c+=b.$iframe.offset().top,c-=b.helpers.scrollTop()),c<b.$tb.height()+20&&c>=0&&a(b.o_win).scrollTop(c+b.helpers.scrollTop()-b.$tb.height()-20))}function r(){var c=b.selection.element(),d=b.node.blockParent(c);if(d&&"DIV"==d.tagName&&b.selection.info(d).atStart){var e=b.html.defaultTag();d.previousSibling&&"DIV"!=d.previousSibling.tagName&&e&&"div"!=e&&(b.selection.save(),a(d).replaceWith("<"+e+">"+d.innerHTML+"</"+e+">"),b.selection.restore())}}function s(c){if(b.helpers.isIOS()&&c&&G)if(c.which==a.FE.KEYCODE.ENTER)b.snapshot.restore(G),b.cursor.enter();else if(c.which==a.FE.KEYCODE.BACKSPACE){var d=b.snapshot.get();b.snapshot.restore(G),b.cursor.backspace(),b.el.innerHTML!==d.html&&b.snapshot.restore(d)}if(b.helpers.isAndroid()&&b.browser.mozilla)return!0;if(F)return!1;if(!b.selection.isCollapsed())return!0;if(c&&(c.which===a.FE.KEYCODE.META||c.which==a.FE.KEYCODE.CTRL))return!0;if(c&&u(c.which))return!0;c&&c.which==a.FE.KEYCODE.ENTER&&b.helpers.isIOS()&&r(),c&&(c.which==a.FE.KEYCODE.ENTER||c.which==a.FE.KEYCODE.BACKSPACE||c.which>=37&&c.which<=40&&!b.browser.msie)&&q(),b.html.cleanBRs(!0,!0);var e=function(a){if(!a)return!1;var b=a.innerHTML;return!!((b=b.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,""))&&/\u200B/.test(b)&&b.replace(/\u200B/gi,"").length>0)},f=function(a){var c=/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi;return!b.helpers.isIOS()||0===((a.textContent||"").match(c)||[]).length},g=b.selection.element();e(g)&&!b.node.hasClass(g,"fr-marker")&&"IFRAME"!=g.tagName&&f(g)&&(b.selection.save(),p(g),b.selection.restore())}function t(a){if(-1!=navigator.userAgent.indexOf("Mac OS X")){if(a.metaKey&&!a.altKey)return!0}else if(a.ctrlKey&&!a.altKey)return!0;return!1}function u(b){if(b>=a.FE.KEYCODE.ARROW_LEFT&&b<=a.FE.KEYCODE.ARROW_DOWN)return!0}function v(c){if(c>=a.FE.KEYCODE.ZERO&&c<=a.FE.KEYCODE.NINE)return!0;if(c>=a.FE.KEYCODE.NUM_ZERO&&c<=a.FE.KEYCODE.NUM_MULTIPLY)return!0;if(c>=a.FE.KEYCODE.A&&c<=a.FE.KEYCODE.Z)return!0;if(b.browser.webkit&&0===c)return!0;switch(c){case a.FE.KEYCODE.SPACE:case a.FE.KEYCODE.QUESTION_MARK:case a.FE.KEYCODE.NUM_PLUS:case a.FE.KEYCODE.NUM_MINUS:case a.FE.KEYCODE.NUM_PERIOD:case a.FE.KEYCODE.NUM_DIVISION:case a.FE.KEYCODE.SEMICOLON:case a.FE.KEYCODE.FF_SEMICOLON:case a.FE.KEYCODE.DASH:case a.FE.KEYCODE.EQUALS:case a.FE.KEYCODE.FF_EQUALS:case a.FE.KEYCODE.COMMA:case a.FE.KEYCODE.PERIOD:case a.FE.KEYCODE.SLASH:case a.FE.KEYCODE.APOSTROPHE:case a.FE.KEYCODE.SINGLE_QUOTE:case a.FE.KEYCODE.OPEN_SQUARE_BRACKET:case a.FE.KEYCODE.BACKSLASH:case a.FE.KEYCODE.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}function w(c){var d=c.which;if(t(c)||d>=37&&d<=40||!v(d)&&d!=a.FE.KEYCODE.DELETE&&d!=a.FE.KEYCODE.BACKSPACE&&d!=a.FE.KEYCODE.ENTER&&d!=a.FE.KEYCODE.IME)return!0;D||(E=b.snapshot.get(),b.undo.canDo()||b.undo.saveStep()),clearTimeout(D),D=setTimeout(function(){D=null,b.undo.saveStep()},Math.max(250,b.opts.typingTimer))}function x(a){var c=a.which;if(t(a)||c>=37&&c<=40)return!0;E&&D?(b.undo.saveStep(E),E=null):void 0!==c&&0!==c||E||D||b.undo.saveStep()}function y(){D&&(clearTimeout(D),b.undo.saveStep(),E=null)}function z(b){var c=b.which;return t(b)||c==a.FE.KEYCODE.F5}function A(a){return(!a||"BR"!=a.tagName)&&(0===(a.textContent||"").length&&a.querySelector&&!a.querySelector(":scope > br"))}function B(c){var d=b.el.childNodes,e=b.html.defaultTag();return!(!c.target||c.target===b.el)||(0===d.length||void(b.$el.outerHeight()-c.offsetY<=10?A(d[d.length-1])&&(e?b.$el.append("<"+e+">"+a.FE.MARKERS+"<br></"+e+">"):b.$el.append(a.FE.MARKERS+"<br>"),b.selection.restore(),q()):c.offsetY<=10&&A(d[0])&&(e?b.$el.prepend("<"+e+">"+a.FE.MARKERS+"<br></"+e+">"):b.$el.prepend(a.FE.MARKERS+"<br>"),b.selection.restore(),q())))}function C(){if(b.events.on("keydown",w),b.events.on("input",i),b.events.on("mousedown",m),b.events.on("keyup input",x),b.events.on("keypress",l),b.events.on("keydown",o),b.events.on("keyup",s),b.events.on("html.inserted",s),b.events.on("cut",j),b.events.on("click",B),!b.browser.edge&&b.el.msGetInputContext)try{b.el.msGetInputContext().addEventListener("MSCandidateWindowShow",function(){F=!0}),b.el.msGetInputContext().addEventListener("MSCandidateWindowHide",function(){F=!1,s()})}catch(a){}}var D,E,F=!1,G=null;return{_init:C,ctrlKey:t,isCharacter:v,isArrow:u,forceUndo:y,isIME:n,isBrowserAction:z,positionCaret:q}},a.FE.MODULES.accessibility=function(b){function c(a){if(a&&a.length){a.data("blur-event-set")||a.parents(".fr-popup").length||(b.events.$on(a,"blur",function(){var c=a.parents(".fr-toolbar, .fr-popup").data("instance")||b;c.events.blurActive()&&c.events.trigger("blur"),c.events.enableBlur()},!0),a.data("blur-event-set",!0));(a.parents(".fr-toolbar, .fr-popup").data("instance")||b).events.disableBlur(),a.focus(),b.shared.$f_el=a}}function d(a,b){var d=b?"last":"first",e=a.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible")[d]();if(e.length)return c(e),!0}function e(a){return a.is("input, textarea")&&g(),b.events.disableBlur(),a.focus(),!0}function f(a,c){var d=a.find("input, textarea, button, select").filter(":visible").not(":disabled").filter(c?":last":":first");if(d.length)return e(d);if(b.shared.with_kb){var f=a.find(".fr-active-item:visible:first");if(f.length)return e(f);var g=a.find("[tabIndex]:visible:first");if(g.length)return e(g)}}function g(){0===b.$el.find(".fr-marker").length&&b.core.hasFocus()&&b.selection.save()}function h(a){a.$el.find(".fr-marker").length&&(a.events.disableBlur(),a.selection.restore(),a.events.enableBlur())}function i(a){var c=a.children().not(".fr-buttons");c.data("mouseenter-event-set")||(b.events.$on(c,"mouseenter","[tabIndex]",function(d){var e=a.data("instance")||b;if(!F)return d.stopPropagation(),void d.preventDefault();var f=c.find(":focus:first");f.length&&!f.is("input, button, textarea")&&(e.events.disableBlur(),f.blur(),e.events.disableBlur(),e.events.focus())}),c.data("mouseenter-event-set",!0)),!f(c)&&b.shared.with_kb&&d(a.find(".fr-buttons"))}function j(a){b.core.hasFocus()||(b.events.disableBlur(),b.events.focus()),b.accessibility.saveSelection(),b.events.disableBlur(),b.$el.blur(),b.selection.clear(),b.events.disableBlur(),b.shared.with_kb?a.find(".fr-command[tabIndex], [tabIndex]").first().focus():a.find("[tabIndex]:first").focus()}function k(){var a=b.popups.areVisible();if(a){var c=a.find(".fr-buttons");return c.find("button:focus, .fr-group span:focus").length?!d(a.data("instance").$tb):!d(c)}return!d(b.$tb)}function l(){var a=null;return b.shared.$f_el.is(".fr-dropdown.fr-active")?a=b.shared.$f_el:b.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active")&&(a=b.shared.$f_el.closest(".fr-dropdown-menu").prev()),a}function m(e,g,h){if(b.shared.$f_el){var i=l();i&&(b.button.click(i),b.shared.$f_el=i);var j=e.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible"),k=j.index(b.shared.$f_el);if(0===k&&!h||k==j.length-1&&h){var m;if(g){if(e.parent().is(".fr-popup")){m=!f(e.parent().children().not(".fr-buttons"),!h)}!1===m&&(b.shared.$f_el=null)}g&&!1===m||d(e,!h)}else c(a(j.get(k+(h?1:-1))));return!1}}function n(a,b){return m(a,b,!0)}function o(a,b){return m(a,b)}function p(a){if(b.shared.$f_el){var d;if(b.shared.$f_el.is(".fr-dropdown.fr-active"))return d=a?b.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first():b.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last(),c(d),!1;if(b.shared.$f_el.is("a.fr-command"))return d=a?b.shared.$f_el.closest("li").nextAll(":visible:first").find(".fr-command:not(.fr-disabled)").first():b.shared.$f_el.closest("li").prevAll(":visible:first").find(".fr-command:not(.fr-disabled)").first(),d.length||(d=a?b.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first():b.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()),c(d),!1}}function q(){return b.shared.$f_el&&b.shared.$f_el.is(".fr-dropdown:not(.fr-active)")?s():p(!0)}function r(){return p()}function s(){if(b.shared.$f_el){if(b.shared.$f_el.hasClass("fr-dropdown"))b.button.click(b.shared.$f_el);else if(b.shared.$f_el.is("button.fr-back")){b.opts.toolbarInline&&(b.events.disableBlur(),b.events.focus());var a=b.popups.areVisible(b);a&&(b.shared.with_kb=!1),b.button.click(b.shared.$f_el),z(a)}else{if(b.events.disableBlur(),b.button.click(b.shared.$f_el),b.shared.$f_el.attr("data-popup")){var c=b.popups.areVisible(b);c&&c.data("popup-button",b.shared.$f_el)}else if(b.shared.$f_el.attr("data-modal")){var d=b.modals.areVisible(b);d&&d.data("modal-button",b.shared.$f_el)}b.shared.$f_el=null}return!1}}function t(){b.shared.$f_el&&(b.events.disableBlur(),b.shared.$f_el.blur(),b.shared.$f_el=null),!1!==b.events.trigger("toolbar.focusEditor")&&(b.events.disableBlur(),b.events.focus())}function u(a){if(b.shared.$f_el){var d=l();return d?(b.button.click(d),c(d)):a.parent().find(".fr-back:visible").length?(b.shared.with_kb=!1,b.opts.toolbarInline&&(b.events.disableBlur(),b.events.focus()),b.button.exec(a.parent().find(".fr-back:visible:first")),z(a.parent())):b.shared.$f_el.is("button, .fr-group span")&&(a.parent().is(".fr-popup")?(h(b),b.shared.$f_el=null,!1!==b.events.trigger("toolbar.esc")&&(b.popups.hide(a.parent()),b.opts.toolbarInline&&b.toolbar.showInline(null,!0),z(a.parent()))):t()),!1}}function v(c,d){var e=-1!=navigator.userAgent.indexOf("Mac OS X")?c.metaKey:c.ctrlKey,f=c.which,g=!1;return f!=a.FE.KEYCODE.TAB||e||c.shiftKey||c.altKey?f!=a.FE.KEYCODE.ARROW_RIGHT||e||c.shiftKey||c.altKey?f!=a.FE.KEYCODE.TAB||e||!c.shiftKey||c.altKey?f!=a.FE.KEYCODE.ARROW_LEFT||e||c.shiftKey||c.altKey?f!=a.FE.KEYCODE.ARROW_UP||e||c.shiftKey||c.altKey?f!=a.FE.KEYCODE.ARROW_DOWN||e||c.shiftKey||c.altKey?f!=a.FE.KEYCODE.ENTER||e||c.shiftKey||c.altKey?f!=a.FE.KEYCODE.ESC||e||c.shiftKey||c.altKey?f!=a.FE.KEYCODE.F10||e||c.shiftKey||!c.altKey||(g=k()):g=u(d):g=s():g=q():g=r():g=o(d):g=o(d,!0):g=n(d):g=n(d,!0),b.shared.$f_el||void 0!==g||(g=!0),!g&&b.keys.isBrowserAction(c)&&(g=!0),!!g||(c.preventDefault(),c.stopPropagation(),!1)}function w(c){c&&c.length&&(b.events.$on(c,"keydown",function(d){if(!a(d.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command"))return!0;var e=c.parents(".fr-popup").data("instance")||c.data("instance")||b;b.shared.with_kb=!0;var f=e.accessibility.exec(d,c);return b.shared.with_kb=!1,f},!0),b.events.$on(c,"mouseenter","[tabIndex]",function(d){var e=c.parents(".fr-popup").data("instance")||c.data("instance")||b;if(!F)return d.stopPropagation(),void d.preventDefault();var f=a(d.currentTarget);e.shared.$f_el&&e.shared.$f_el.not(f)&&e.accessibility.focusEditor()},!0))}function x(a){var c=b.popups.get(a),d=y(a);w(c.find(".fr-buttons")),b.events.$on(c,"mouseenter","tabIndex",d._tiMouseenter,!0),b.events.$on(c.children().not(".fr-buttons"),"keydown","[tabIndex]",d._tiKeydown,!0),b.popups.onHide(a,function(){h(c.data("instance")||b)}),b.popups.onShow(a,function(){F=!1,setTimeout(function(){F=!0},0)})}function y(c){var e=b.popups.get(c);return{_tiKeydown:function(g){var i=e.data("instance")||b;if(!1===i.events.trigger("popup.tab",[g]))return!1;var j=g.which,k=e.find(":focus:first");if(a.FE.KEYCODE.TAB==j){g.preventDefault();var l=e.children().not(".fr-buttons"),m=l.find("input, textarea, button, select").filter(":visible").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray(),n=m.indexOf(this)+(g.shiftKey?-1:1);if(0<=n&&n<m.length)return i.events.disableBlur(),a(m[n]).focus(),g.stopPropagation(),!1;var o=e.find(".fr-buttons");if(o.length&&d(o,!!g.shiftKey))return g.stopPropagation(),!1;if(f(l))return g.stopPropagation(),!1}else{if(a.FE.KEYCODE.ENTER!=j)return a.FE.KEYCODE.ESC==j?(g.preventDefault(),g.stopPropagation(),h(i),i.popups.isVisible(c)&&e.find(".fr-back:visible").length?(i.opts.toolbarInline&&(i.events.disableBlur(),i.events.focus()),i.button.exec(e.find(".fr-back:visible:first")),z(e)):i.popups.isVisible(c)&&e.find(".fr-dismiss:visible").length?i.button.exec(e.find(".fr-dismiss:visible:first")):(i.popups.hide(c),i.opts.toolbarInline&&i.toolbar.showInline(null,!0),z(e)),!1):a.FE.KEYCODE.SPACE==j&&(k.is(".fr-submit")||k.is(".fr-dismiss"))?(g.preventDefault(),g.stopPropagation(),i.events.disableBlur(),i.button.exec(k),!0):i.keys.isBrowserAction(g)?void g.stopPropagation():k.is("input[type=text], textarea")?void g.stopPropagation():a.FE.KEYCODE.SPACE==j&&(k.is(".fr-link-attr")||k.is("input[type=file]"))?void g.stopPropagation():(g.stopPropagation(),g.preventDefault(),!1);var p=null;e.find(".fr-submit:visible").length>0?p=e.find(".fr-submit:visible:first"):e.find(".fr-dismiss:visible").length&&(p=e.find(".fr-dismiss:visible:first")),p&&(g.preventDefault(),g.stopPropagation(),i.events.disableBlur(),i.button.exec(p))}},_tiMouseenter:function(){C(e.data("instance")||b)}}}function z(a){var b=a.data("popup-button");b&&setTimeout(function(){c(b),a.data("popup-button",null)},0)}function A(a){var b=a.data("modal-button");b&&setTimeout(function(){c(b),a.data("modal-button",null)},0)}function B(){return null!=b.shared.$f_el}function C(a){var c=b.popups.areVisible(a);c&&c.data("popup-button",null)}function D(c){var d=-1!=navigator.userAgent.indexOf("Mac OS X")?c.metaKey:c.ctrlKey;if(c.which==a.FE.KEYCODE.F10&&!d&&!c.shiftKey&&c.altKey){b.shared.with_kb=!0;var e=b.popups.areVisible(b),g=!1;return e&&(g=f(e.children().not(".fr-buttons"))),g||k(),b.shared.with_kb=!1,c.preventDefault(),c.stopPropagation(),!1}return!0}function E(){b.$wp?b.events.on("keydown",D,!0):b.events.$on(b.$win,"keydown",D,!0),b.events.on("mousedown",function(a){C(b),b.shared.$f_el&&(h(b),a.stopPropagation(),b.events.disableBlur(),b.shared.$f_el=null)},!0),b.events.on("blur",function(){b.shared.$f_el=null,C(b)},!0)}var F=!0;return{_init:E,registerPopup:x,registerToolbar:w,focusToolbarElement:c,focusToolbar:d,focusContent:f,focusPopup:i,focusModal:j,focusEditor:t,focusPopupButton:z,focusModalButton:A,hasFocus:B,exec:v,saveSelection:g,restoreSelection:h}},a.FE.MODULES.format=function(b){function c(a,b){var c="<"+a;for(var d in b)b.hasOwnProperty(d)&&(c+=" "+d+'="'+b[d]+'"');return c+=">"}function d(a){return"</"+a+">"}function e(a,b){var c=a;for(var d in b)b.hasOwnProperty(d)&&(c+="id"==d?"#"+b[d]:"class"==d?"."+b[d]:"["+d+'="'+b[d]+'"]');return c}function f(a,b){return!(!a||a.nodeType!=Node.ELEMENT_NODE)&&(a.matches||a.matchesSelector||a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.oMatchesSelector).call(a,b)}function g(d,e,f){if(d){if(b.node.isBlock(d))return g(d.firstChild,e,f),!1;for(var h=a(c(e,f)).insertBefore(d),i=d;i&&!a(i).is(".fr-marker")&&0===a(i).find(".fr-marker").length&&"UL"!=i.tagName&&"OL"!=i.tagName;){var j=i;i=i.nextSibling,h.append(j)}if(i)(a(i).find(".fr-marker").length||"UL"==i.tagName||"OL"==i.tagName)&&g(i.firstChild,e,f);else{for(var k=h.get(0).parentNode;k&&!k.nextSibling&&!b.node.isElement(k);)k=k.parentNode;if(k){var l=k.nextSibling;l&&(b.node.isBlock(l)?g(l.firstChild,e,f):g(l,e,f))}}h.is(":empty")&&h.remove()}}function h(h,i){var j;if(void 0===i&&(i={}),i.style&&delete i.style,b.selection.isCollapsed()){b.markers.insert();b.$el.find(".fr-marker").replaceWith(c(h,i)+a.FE.INVISIBLE_SPACE+a.FE.MARKERS+d(h)),b.selection.restore()}else{b.selection.save();g(b.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,h,i);var k;do{for(k=b.$el.find(e(h,i)+" > "+e(h,i)),j=0;j<k.length;j++)k[j].outerHTML=k[j].innerHTML}while(k.length);b.el.normalize();var l=b.el.querySelectorAll(".fr-marker");for(j=0;j<l.length;j++){var m=a(l[j]);!0===m.data("type")?f(m.get(0).nextSibling,e(h,i))&&m.next().prepend(m):f(m.get(0).previousSibling,e(h,i))&&m.prev().append(m)}b.selection.restore()}}function i(a,c,d,g){if(!g){var h=!1;if(!0===a.data("type"))for(;b.node.isFirstSibling(a.get(0))&&!a.parent().is(b.$el)&&!a.parent().is("ol")&&!a.parent().is("ul");)a.parent().before(a),h=!0;else if(!1===a.data("type"))for(;b.node.isLastSibling(a.get(0))&&!a.parent().is(b.$el)&&!a.parent().is("ol")&&!a.parent().is("ul");)a.parent().after(a),h=!0;if(h)return!0}if(a.parents(c).length||void 0===c){var i="",j="",k=a.parent();if(k.is(b.$el)||b.node.isBlock(k.get(0)))return!1;for(;!b.node.isBlock(k.parent().get(0))&&(void 0===c||void 0!==c&&!f(k.get(0),e(c,d)));)i+=b.node.closeTagString(k.get(0)),j=b.node.openTagString(k.get(0))+j,k=k.parent();var l=a.get(0).outerHTML;a.replaceWith('<span id="mark"></span>');var m=k.html().replace(/<span id="mark"><\/span>/,i+b.node.closeTagString(k.get(0))+j+l+i+b.node.openTagString(k.get(0))+j);return k.replaceWith(b.node.openTagString(k.get(0))+m+b.node.closeTagString(k.get(0))),!0}return!1}function j(c,d,g,h){for(var i=b.node.contents(c.get(0)),k=0;k<i.length;k++){var l=i[k];if(b.node.hasClass(l,"fr-marker"))d=(d+1)%2;else if(d)if(a(l).find(".fr-marker").length>0)d=j(a(l),d,g,h);else{for(var m=a(l).find(g||"*"),n=m.length-1;n>=0;n--){var o=m[n];b.node.isBlock(o)||b.node.isVoid(o)||void 0!==g&&!f(o,e(g,h))||(o.outerHTML=o.innerHTML)}void 0===g&&l.nodeType==Node.ELEMENT_NODE&&!b.node.isVoid(l)&&!b.node.isBlock(l)||f(l,e(g,h))?a(l).replaceWith(l.innerHTML):void 0===g&&l.nodeType==Node.ELEMENT_NODE&&b.node.isBlock(l)&&b.node.clearAttributes(l)}else a(l).find(".fr-marker").length>0&&(d=j(a(l),d,g,h))}return d}function k(c,d){void 0===d&&(d={}),d.style&&delete d.style;var e=b.selection.isCollapsed();b.selection.save();for(var f=!0;f;){f=!1;for(var g=b.$el.find(".fr-marker"),h=0;h<g.length;h++){var k=a(g[h]),l=null;if(k.attr("data-cloned")||e||(l=k.clone().removeClass("fr-marker").addClass("fr-clone"),!0===k.data("type")?k.attr("data-cloned",!0).after(l):k.attr("data-cloned",!0).before(l)),i(k,c,d,e)){f=!0;break}}}j(b.$el,0,c,d),e||(b.$el.find(".fr-marker").remove(),b.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker")),e&&b.$el.find(".fr-marker").before(a.FE.INVISIBLE_SPACE).after(a.FE.INVISIBLE_SPACE),b.html.cleanEmptyTags(),b.el.normalize(),b.selection.restore()}function l(a,b){q(a,b)?k(a,b):h(a,b)}function m(b,c){var d=a(b);d.css(c,""),""===d.attr("style")&&d.replaceWith(d.html())}function n(b,c){return 0===a(b).attr("style").indexOf(c+":")||a(b).attr("style").indexOf(";"+c+":")>=0||a(b).attr("style").indexOf("; "+c+":")>=0}function o(c,d){var e,f;if(b.selection.isCollapsed()){b.markers.insert(),f=b.$el.find(".fr-marker");var h=f.parent();if(b.node.openTagString(h.get(0))=='<span style="'+c+": "+h.css(c)+';">'){if(b.node.isEmpty(h.get(0)))h.replaceWith('<span style="'+c+": "+d+';">'+a.FE.INVISIBLE_SPACE+a.FE.MARKERS+"</span>");else{var j={};j[c]=d,i(f,"span",j,!0),f=b.$el.find(".fr-marker"),f.replaceWith('<span style="'+c+": "+d+';">'+a.FE.INVISIBLE_SPACE+a.FE.MARKERS+"</span>")}b.html.cleanEmptyTags()}else b.node.isEmpty(h.get(0))&&h.is("span")?(f.replaceWith(a.FE.MARKERS),h.css(c,d)):f.replaceWith('<span style="'+c+": "+d+';">'+a.FE.INVISIBLE_SPACE+a.FE.MARKERS+"</span>");b.selection.restore()}else{if(b.selection.save(),null==d||"color"==c&&b.$el.find(".fr-marker").parents("u, a").length>0){var k=b.$el.find(".fr-marker");for(e=0;e<k.length;e++)if(f=a(k[e]),!0===f.data("type"))for(;b.node.isFirstSibling(f.get(0))&&!f.parent().is(b.$el)&&!b.node.isElement(f.parent().get(0))&&!b.node.isBlock(f.parent().get(0));)f.parent().before(f);else for(;b.node.isLastSibling(f.get(0))&&!f.parent().is(b.$el)&&!b.node.isElement(f.parent().get(0))&&!b.node.isBlock(f.parent().get(0));)f.parent().after(f)}var l=b.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,o={class:"fr-unprocessed"};for(d&&(o.style=c+": "+d+";"),g(l,"span",o),b.$el.find(".fr-marker + .fr-unprocessed").each(function(){a(this).prepend(a(this).prev())}),b.$el.find(".fr-unprocessed + .fr-marker").each(function(){a(this).prev().append(this)}),(d||"").match(/\dem$/)&&b.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed");b.$el.find("span.fr-unprocessed").length>0;){var p=b.$el.find("span.fr-unprocessed:first").removeClass("fr-unprocessed");if(p.parent().get(0).normalize(),p.parent().is("span")&&1==p.parent().get(0).childNodes.length){p.parent().css(c,d);var q=p;p=p.parent(),q.replaceWith(q.html())}var r=p.find("span");for(e=r.length-1;e>=0;e--)m(r[e],c);var s=p.parentsUntil(b.$el,"span[style]"),t=[];for(e=s.length-1;e>=0;e--)n(s[e],c)||t.push(s[e]);if(s=s.not(t),s.length){var u="",v="",w="",x="",y=p.get(0);do{y=y.parentNode,a(y).addClass("fr-split"),u+=b.node.closeTagString(y),v=b.node.openTagString(a(y).clone().addClass("fr-split").get(0))+v,s.get(0)!=y&&(w+=b.node.closeTagString(y),x=b.node.openTagString(a(y).clone().addClass("fr-split").get(0))+x)}while(s.get(0)!=y);var z=u+b.node.openTagString(a(s.get(0)).clone().css(c,d||"").get(0))+x+p.css(c,"").get(0).outerHTML+w+"</span>"+v;p.replaceWith('<span id="fr-break"></span>');var A=s.get(0).outerHTML;a(s.get(0)).replaceWith(A.replace(/<span id="fr-break"><\/span>/g,z))}}for(;b.$el.find(".fr-split:empty").length>0;)b.$el.find(".fr-split:empty").remove();b.$el.find(".fr-split").removeClass("fr-split"),b.$el.find('span[style=""]').removeAttr("style"),b.$el.find('span[class=""]').removeAttr("class"),b.html.cleanEmptyTags(),a(b.$el.find("span").get().reverse()).each(function(){this.attributes&&0!==this.attributes.length||a(this).replaceWith(this.innerHTML)}),b.el.normalize();var B=b.$el.find("span[style] + span[style]");for(e=0;e<B.length;e++){var C=a(B[e]),D=a(B[e]).prev();C.get(0).previousSibling==D.get(0)&&b.node.openTagString(C.get(0))==b.node.openTagString(D.get(0))&&(C.prepend(D.html()),D.remove())}b.$el.find("span[style] span[style]").each(function(){if(a(this).attr("style").indexOf("font-size")>=0){var b=a(this).parents("span[style]");b.attr("style").indexOf("background-color")>=0&&(a(this).attr("style",a(this).attr("style")+";"+b.attr("style")),i(a(this),"span[style]",{},!1))}}),b.el.normalize(),b.selection.restore()}}function p(a){o(a,null)}function q(a,c){void 0===c&&(c={}),c.style&&delete c.style;var d=b.selection.ranges(0),g=d.startContainer;if(g.nodeType==Node.ELEMENT_NODE&&g.childNodes.length>0&&g.childNodes[d.startOffset]&&(g=g.childNodes[d.startOffset]),
!d.collapsed&&g.nodeType==Node.TEXT_NODE&&d.startOffset==(g.textContent||"").length){for(;!b.node.isBlock(g.parentNode)&&!g.nextSibling;)g=g.parentNode;g.nextSibling&&(g=g.nextSibling)}for(var h=g;h&&h.nodeType==Node.ELEMENT_NODE&&!f(h,e(a,c));)h=h.firstChild;if(h&&h.nodeType==Node.ELEMENT_NODE&&f(h,e(a,c)))return!0;var i=g;for(i&&i.nodeType!=Node.ELEMENT_NODE&&(i=i.parentNode);i&&i.nodeType==Node.ELEMENT_NODE&&i!=b.el&&!f(i,e(a,c));)i=i.parentNode;return!(!i||i.nodeType!=Node.ELEMENT_NODE||i==b.el||!f(i,e(a,c)))}return{is:q,toggle:l,apply:h,remove:k,applyStyle:o,removeStyle:p}},a.extend(a.FE.DEFAULTS,{indentMargin:20}),a.FE.COMMANDS={bold:{title:"Bold",toggle:!0,refresh:function(a){var b=this.format.is("strong");a.toggleClass("fr-active",b).attr("aria-pressed",b)}},italic:{title:"Italic",toggle:!0,refresh:function(a){var b=this.format.is("em");a.toggleClass("fr-active",b).attr("aria-pressed",b)}},underline:{title:"Underline",toggle:!0,refresh:function(a){var b=this.format.is("u");a.toggleClass("fr-active",b).attr("aria-pressed",b)}},strikeThrough:{title:"Strikethrough",toggle:!0,refresh:function(a){var b=this.format.is("s");a.toggleClass("fr-active",b).attr("aria-pressed",b)}},subscript:{title:"Subscript",toggle:!0,refresh:function(a){var b=this.format.is("sub");a.toggleClass("fr-active",b).attr("aria-pressed",b)}},superscript:{title:"Superscript",toggle:!0,refresh:function(a){var b=this.format.is("sup");a.toggleClass("fr-active",b).attr("aria-pressed",b)}},outdent:{title:"Decrease Indent"},indent:{title:"Increase Indent"},undo:{title:"Undo",undo:!1,forcedRefresh:!0,disabled:!0},redo:{title:"Redo",undo:!1,forcedRefresh:!0,disabled:!0},insertHR:{title:"Insert Horizontal Line"},clearFormatting:{title:"Clear Formatting"},selectAll:{title:"Select All",undo:!1}},a.FE.RegisterCommand=function(b,c){a.FE.COMMANDS[b]=c},a.FE.MODULES.commands=function(b){function c(a){return b.html.defaultTag()&&(a="<"+b.html.defaultTag()+">"+a+"</"+b.html.defaultTag()+">"),a}function d(c,d){if(!1!==b.events.trigger("commands.before",a.merge([c],d||[]))){var e=a.FE.COMMANDS[c]&&a.FE.COMMANDS[c].callback||i[c],f=!0,g=!1;a.FE.COMMANDS[c]&&(void 0!==a.FE.COMMANDS[c].focus&&(f=a.FE.COMMANDS[c].focus),void 0!==a.FE.COMMANDS[c].accessibilityFocus&&(g=a.FE.COMMANDS[c].accessibilityFocus)),(!b.core.hasFocus()&&f&&!b.popups.areVisible()||!b.core.hasFocus()&&g&&b.accessibility.hasFocus())&&b.events.focus(!0),a.FE.COMMANDS[c]&&!1!==a.FE.COMMANDS[c].undo&&(b.$el.find(".fr-marker").length&&(b.events.disableBlur(),b.selection.restore()),b.undo.saveStep()),e&&e.apply(b,a.merge([c],d||[])),b.events.trigger("commands.after",a.merge([c],d||[])),a.FE.COMMANDS[c]&&!1!==a.FE.COMMANDS[c].undo&&b.undo.saveStep()}}function e(a,c){b.format.toggle(c)}function f(c){b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore();for(var d=b.selection.blocks(),e=0;e<d.length;e++)if("LI"!=d[e].tagName&&"LI"!=d[e].parentNode.tagName){var f=a(d[e]),g="rtl"==b.opts.direction||"rtl"==f.css("direction")?"margin-right":"margin-left",h=b.helpers.getPX(f.css(g));f.css(g,Math.max(h+c*b.opts.indentMargin,0)||""),f.removeClass("fr-temp-div")}b.selection.save(),b.html.unwrap(),b.selection.restore()}function g(a){return function(){d(a)}}function h(){b.events.on("keydown",function(a){var c=b.selection.element();if(c&&"HR"==c.tagName&&!b.keys.isArrow(a.which))return a.preventDefault(),!1}),b.events.on("keyup",function(c){var d=b.selection.element();if(d&&"HR"==d.tagName)if(c.which==a.FE.KEYCODE.ARROW_LEFT||c.which==a.FE.KEYCODE.ARROW_UP){if(d.previousSibling)return b.node.isBlock(d.previousSibling)?b.selection.setAtEnd(d.previousSibling):a(d).before(a.FE.MARKERS),b.selection.restore(),!1}else if((c.which==a.FE.KEYCODE.ARROW_RIGHT||c.which==a.FE.KEYCODE.ARROW_DOWN)&&d.nextSibling)return b.node.isBlock(d.nextSibling)?b.selection.setAtStart(d.nextSibling):a(d).after(a.FE.MARKERS),b.selection.restore(),!1}),b.events.on("mousedown",function(a){if(a.target&&"HR"==a.target.tagName)return a.preventDefault(),a.stopPropagation(),!1}),b.events.on("mouseup",function(){var c=b.selection.element();c==b.selection.endElement()&&c&&"HR"==c.tagName&&(c.nextSibling&&(b.node.isBlock(c.nextSibling)?b.selection.setAtStart(c.nextSibling):a(c).after(a.FE.MARKERS)),b.selection.restore())})}var i={bold:function(){e("bold","strong")},subscript:function(){b.format.is("sup")&&b.format.remove("sup"),e("subscript","sub")},superscript:function(){b.format.is("sub")&&b.format.remove("sub"),e("superscript","sup")},italic:function(){e("italic","em")},strikeThrough:function(){e("strikeThrough","s")},underline:function(){e("underline","u")},undo:function(){b.undo.run()},redo:function(){b.undo.redo()},indent:function(){f(1)},outdent:function(){f(-1)},show:function(){b.opts.toolbarInline&&b.toolbar.showInline(null,!0)},insertHR:function(){b.selection.remove();var d="";b.core.isEmpty()&&(d="<br>",d=c(d)),b.html.insert('<hr id="fr-just">'+d);var e=b.$el.find("hr#fr-just");e.removeAttr("id");var f;e.prev().is("hr")?f=b.selection.setAfter(e.get(0),!1):e.next().is("hr")?f=b.selection.setBefore(e.get(0),!1):b.selection.setAfter(e.get(0),!1)||b.selection.setBefore(e.get(0),!1),f||void 0===f||(d=a.FE.MARKERS+"<br>",d=c(d),e.after(d)),b.selection.restore()},clearFormatting:function(){b.format.remove()},selectAll:function(){b.doc.execCommand("selectAll",!1,!1)}},j={};for(var k in i)i.hasOwnProperty(k)&&(j[k]=g(k));return a.extend(j,{exec:d,_init:h})},a.FE.MODULES.data=function(b){function c(a){return a}function d(a){if(!a)return a;for(var b="",d=c("charCodeAt"),g=c("fromCharCode"),h=m.indexOf(a[0]),i=1;i<a.length-2;i++){for(var j=e(++h),k=a[d](i),l="";/[0-9-]/.test(a[i+1]);)l+=a[++i];l=parseInt(l,10)||0,k=f(k,j,l),k^=h-1&31,b+=String[g](k)}return b}function e(a){for(var b=a.toString(),c=0,d=0;d<b.length;d++)c+=parseInt(b.charAt(d),10);return c>10?c%9+1:c}function f(a,b,c){for(var d=Math.abs(c);d-- >0;)a-=b;return c<0&&(a+=123),a}function g(a){return!(!a||"block"===a.css("display")||(a.remove(),0))}function h(){return g(k)||g(l)}function i(){if(p>10&&b.destroy(),!b.$box)return!1;b.$wp.prepend(o(c(o("NCKB1zwtPA9tqzajXC2c2A7B-16VD3spzJ1C9C3D5oOF2OB1NB1LD7VA5QF4TE3gytXB2A4C-8VA2AC4E1D3GB2EB2KC3KD1MF1juuSB1A8C6yfbmd1B2a1A5qdsdB2tivbC3CB1KC1CH1eLA2sTF1B4I4H-7B-21UB6b1F5bzzzyAB4JC3MG2hjdKC1JE6C1E1cj1pD-16pUE5B4prra2B5ZB3D3C3pxj1EA6A3rnJA2C-7I-7JD9D1E1wYH1F3sTB5TA2G4H4ZA22qZA5BB3mjcvcCC3JB1xillavC-21VE6PC5SI4YC5C8mb1A3WC3BD2B5aoDA2qqAE3A5D-17fOD1D5RD4WC10tE6OAZC3nF-7b1C4A4D3qCF2fgmapcromlHA2QA6a1E1D3e1A6C2bie2F4iddnIA7B2mvnwcIB5OA1DB2OLQA3PB10WC7WC5d1E3uI-7b1D5D6b1E4D2arlAA4EA1F-11srxI-7MB1D7PF1E5B4adB-21YD5vrZH3D3xAC4E1A2GF2CF2J-7yNC2JE1MI2hH-7QB1C6B5B-9bA-7XB13a1B5VievwpKB4LA3NF-10H-9I-8hhaC-16nqPG4wsleTD5zqYF3h1G2B7B4yvGE2Pi1H-7C-21OE6B1uLD1kI4WC1E7C5g1D-8fue1C8C6c1D4D3Hpi1CC4kvGC2E1legallyXB4axVA11rsA4A-9nkdtlmzBA2GD3A13A6CB1dabE1lezrUE6RD5TB4A-7f1C8c1B5d1D4D3tyfCD5C2D2==")))),k=b.$wp.find("> div:first"),l=k.find("> a"),"rtl"==b.opts.direction&&k.css("left","auto").css("right",0).setAttribute("direction","rtl"),p++}function j(){var d=b.o_win.FEK;try{d=d||localStorage&&localStorage.FEK}catch(l){}d=d||b.opts.key||[""];var e=o(c("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9=="));"string"==typeof d&&(d=[d]),b.ul=!0;for(var f=0;f<d.length;f++){var g=o(d[f])||"";if(!(g!==o(c(o("mcVRDoB1BGILD7YFe1BTXBA7B6==")))&&g.indexOf(n,g.length-n.length)<0&&[o("9qqG-7amjlwq=="),o("KA3B3C2A6D1D5H5H1A3=="),o("QzbzvxyB2yA-9m=="),o("ji1kacwmgG5bc=="),o("naamngiA3dA-16xtE-11C-9B1H-8sc==")].indexOf(n)<0)){b.ul=!1;break}}var j=new Image;!0===b.ul?(i(),j.src=c(o(e))+"u"):a.FE.DT||(j.src=c(o(e))+d.join("+")),b.events.on("contentChanged",function(){!0===b.ul&&h()&&i()}),b.events.on("destroy",function(){k&&k.length&&k.remove()},!0)}var k,l,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=function(){for(var a=0,b=document.domain,c=b.split("."),d="_gd"+(new Date).getTime();a<c.length-1&&-1==document.cookie.indexOf(d+"="+d);)b=c.slice(-1-++a).join("."),document.cookie=d+"="+d+";domain="+b+";";return document.cookie=d+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+b+";",(b||"").replace(/(^\.*)|(\.*$)/g,"")}(),o=c(d),p=0;return{_init:j}},a.extend(a.FE.DEFAULTS,{pastePlain:!1,pasteDeniedTags:["colgroup","col"],pasteDeniedAttrs:["class","id","style"],pasteAllowedStyleProps:[],pasteAllowLocalImages:!1}),a.FE.MODULES.paste=function(b){function c(a,c){try{b.win.localStorage.setItem("fr-copied-html",a),b.win.localStorage.setItem("fr-copied-text",c)}catch(d){}}function d(d){var e=b.html.getSelected();c(e,a("<div>").html(e).text()),"cut"==d.type&&(b.undo.saveStep(),setTimeout(function(){b.selection.save(),b.html.wrap(),b.selection.restore(),b.events.focus(),b.undo.saveStep()},0))}function e(a){if(v)return!1;if(a.originalEvent&&(a=a.originalEvent),!1===b.events.trigger("paste.before",[a]))return a.preventDefault(),!1;if(q=b.$win.scrollTop(),a&&a.clipboardData&&a.clipboardData.getData){var c="",d=a.clipboardData.types;if(b.helpers.isArray(d))for(var e=0;e<d.length;e++)c+=d[e]+";";else c=d;if(r="",/text\/rtf/.test(c)&&(s=a.clipboardData.getData("text/rtf")),/text\/html/.test(c)?r=a.clipboardData.getData("text/html"):/text\/rtf/.test(c)&&b.browser.safari?r=s:/text\/plain/.test(c)&&!b.browser.mozilla&&(r=b.html.escapeEntities(a.clipboardData.getData("text/plain")).replace(/\n/g,"<br>")),""!==r)return j(),a.preventDefault&&(a.stopPropagation(),a.preventDefault()),!1;r=null}return g(),!1}function f(c){if(c.originalEvent&&(c=c.originalEvent),c&&c.dataTransfer&&c.dataTransfer.getData){var d="",e=c.dataTransfer.types;if(b.helpers.isArray(e))for(var f=0;f<e.length;f++)d+=e[f]+";";else d=e;if(r="",/text\/rtf/.test(d)&&(s=c.dataTransfer.getData("text/rtf")),/text\/html/.test(d)?r=c.dataTransfer.getData("text/html"):/text\/rtf/.test(d)&&b.browser.safari?r=s:/text\/plain/.test(d)&&!this.browser.mozilla&&(r=b.html.escapeEntities(c.dataTransfer.getData("text/plain")).replace(/\n/g,"<br>")),""!==r){if(!1!==b.markers.insertAtPoint(c)){var g=b.el.querySelector(".fr-marker");return a(g).replaceWith(a.FE.MARKERS),j(),c.preventDefault&&(c.stopPropagation(),c.preventDefault()),!1}}else r=null}}function g(){b.selection.save(),b.events.disableBlur(),r=null,t?t.html(""):(t=a('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 9999; line-height: 140%;" tabIndex="-1"></div>'),b.browser.safari?(t.css("top",b.$sc.scrollTop()),b.$el.after(t)):b.$box.after(t),b.events.on("destroy",function(){t.remove()})),t.focus(),b.win.setTimeout(j,1)}function h(a){var c;a=a.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li>$3</li></ul>"),a=a.replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li>$3</li></ol>"),a=a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ul>"),a=a.replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ol>"),a=a.replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi,"<span><span"),a=a.replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi,""),a=a.replace(/<!\[if \!supportLists\]>([\s\S]*?)<!\[endif\]>/gi,""),a=a.replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi," "),a=a.replace(/<!--[\s\S]*?-->/gi,""),a=a.replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi,"");var d=["style","script","applet","embed","noframes","noscript"];for(c=0;c<d.length;c++){var e=new RegExp("<"+d[c]+".*?"+d[c]+"(.*?)>","gi");a=a.replace(e,"")}a=a.replace(/&nbsp;/gi," "),a=a.replace(/<td([^>]*)><\/td>/g,"<td$1><br></td>"),a=a.replace(/<th([^>]*)><\/th>/g,"<th$1><br></th>");var f;do{f=a,a=a.replace(/<[^\/>][^>]*><\/[^>]+>/gi,"")}while(a!=f);a=a.replace(/<lilevel([^1])([^>]*)>/gi,'<li data-indent="true"$2>'),a=a.replace(/<lilevel1([^>]*)>/gi,"<li$1>"),a=b.clean.html(a,b.opts.pasteDeniedTags,b.opts.pasteDeniedAttrs),a=a.replace(/<a>(.[^<]+)<\/a>/gi,"$1"),a=a.replace(/<br> */g,"<br>");var g=b.o_doc.createElement("div");g.innerHTML=a;var h=g.querySelectorAll("li[data-indent]");for(c=0;c<h.length;c++){var i=h[c],j=i.previousElementSibling;if(j&&"LI"==j.tagName){var k=j.querySelector(":scope > ul, :scope > ol");k||(k=document.createElement("ul"),j.appendChild(k)),k.appendChild(i)}else i.removeAttribute("data-indent")}return b.html.cleanBlankSpaces(g),a=g.innerHTML}function i(a){var c,d=null,e=b.doc.createElement("div");e.innerHTML=a;var f=e.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote");for(c=0;c<f.length;c++)d=f[c],d.outerHTML="<"+(b.html.defaultTag()||"DIV")+">"+d.innerHTML+"</"+(b.html.defaultTag()||"DIV")+">";for(f=e.querySelectorAll("*:not("+"p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br, img".split(",").join("):not(")+")"),c=f.length-1;c>=0;c--)d=f[c],d.outerHTML=d.innerHTML;var g=function(a){for(var c=b.node.contents(a),d=0;d<c.length;d++)c[d].nodeType!=Node.TEXT_NODE&&c[d].nodeType!=Node.ELEMENT_NODE?c[d].parentNode.removeChild(c[d]):g(c[d])};return g(e),e.innerHTML}function j(){b.keys.forceUndo(),u=b.snapshot.get(),null===r&&(r=t.get(0).innerHTML,b.selection.restore(),b.events.enableBlur());var a=r.match(/(class=\"?Mso|class=\'?Mso|class="?Xl|class='?Xl|class=Xl|style=\"[^\"]*\bmso\-|style=\'[^\']*\bmso\-|w:WordDocument)/gi),c=b.events.chainTrigger("paste.beforeCleanup",r);c&&"string"==typeof c&&(r=c),(!a||a&&!1!==b.events.trigger("paste.wordPaste",[r]))&&k(r,a)}function k(c,d,e){var f,g=null,j=null;c.toLowerCase().indexOf("<body")>=0&&(c=c.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi,"$1"),c=c.replace(/ \n/g," ").replace(/\n /g," ").replace(/([^>])\n([^<])/g,"$1 $2"));var k=!1;if(c.indexOf('id="docs-internal-guid')>=0&&(c=c.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g,"$1"),k=!0),!d){var m=b.opts.htmlAllowedStyleProps;b.opts.htmlAllowedStyleProps=b.opts.pasteAllowedStyleProps,b.opts.htmlAllowComments=!1,c=b.clean.html(c,b.opts.pasteDeniedTags,b.opts.pasteDeniedAttrs),b.opts.htmlAllowedStyleProps=m,b.opts.htmlAllowComments=!0,c=n(c),c=c.replace(/\r|\n|\t/g,"");var o=b.doc.createElement("div");o.innerHTML=c;var p=null,q=null;try{p=b.win.localStorage.getItem("fr-copied-html"),q=b.win.localStorage.getItem("fr-copied-text")}catch(B){}q&&o.textContent.replace(/(\u00A0)/gi," ").replace(/\r|\n/gi,"")==q.replace(/(\u00A0)/gi," ").replace(/(\r|\n)+([ ]+[\r\n]+)*/gi," ")&&(c=p),c=c.replace(/^ */g,"").replace(/ *$/g,"")}!d||b.wordPaste&&e||(c=c.replace(/^\n*/g,"").replace(/^ /g,""),0===c.indexOf("<colgroup>")&&(c="<table>"+c+"</table>"),c=h(c),c=n(c)),b.opts.pastePlain&&(c=i(c));var r=b.events.chainTrigger("paste.afterCleanup",c);if("string"==typeof r&&(c=r),""!==c){var s=b.o_doc.createElement("div");s.innerHTML=c,b.spaces.normalize(s);var t=s.getElementsByTagName("span");for(f=t.length-1;f>=0;f--){var v=t[f];0===v.attributes.length&&(v.outerHTML=v.innerHTML)}var w=b.selection.element(),x=!1;if(w&&a(w).parentsUntil(b.el,"ul, ol").length&&(x=!0),x){var y=s.children;1==y.length&&["OL","UL"].indexOf(y[0].tagName)>=0&&(y[0].outerHTML=y[0].innerHTML)}if(!k){var z=s.getElementsByTagName("br");for(f=z.length-1;f>=0;f--){var A=z[f];b.node.isBlock(A.previousSibling)&&A.parentNode.removeChild(A)}}if(b.opts.enter==a.FE.ENTER_BR)for(g=s.querySelectorAll("p, div"),f=g.length-1;f>=0;f--)j=g[f],0===j.attributes.length&&(j.outerHTML=j.innerHTML+(j.nextSibling&&!b.node.isEmpty(j)?"<br>":""));else if(b.opts.enter==a.FE.ENTER_DIV)for(g=s.getElementsByTagName("p"),f=g.length-1;f>=0;f--)j=g[f],j.outerHTML="<div>"+j.innerHTML+"</div>";c=s.innerHTML,b.html.insert(c,!0)}l(),b.undo.saveStep(u),b.undo.saveStep()}function l(){b.events.trigger("paste.after")}function m(){return s}function n(c){var d,e=b.o_doc.createElement("div");e.innerHTML=c;for(var f=e.querySelectorAll("*:empty:not(td):not(th):not(iframe):not(svg):not("+a.FE.VOID_ELEMENTS.join("):not(")+")");f.length;){for(d=0;d<f.length;d++)f[d].parentNode.removeChild(f[d]);f=e.querySelectorAll("*:empty:not(td):not(th):not(iframe):not(svg):not("+a.FE.VOID_ELEMENTS.join("):not(")+")")}for(var g=e.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])");g.length;){var h=g[g.length-1];if(b.html.defaultTag()&&"div"!=b.html.defaultTag())h.querySelector(b.html.blockTagsQuery())?h.outerHTML=h.innerHTML:h.outerHTML="<"+b.html.defaultTag()+">"+h.innerHTML+"</"+b.html.defaultTag()+">";else{var i=h.querySelectorAll("*");!i.length||"BR"!==i[i.length-1].tagName&&0===h.innerText.length?h.outerHTML=h.innerHTML+"<br>":h.outerHTML=h.innerHTML}g=e.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")}for(g=e.querySelectorAll("div:not([style])");g.length;){for(d=0;d<g.length;d++){var j=g[d],k=j.innerHTML.replace(/\u0009/gi,"").trim();j.outerHTML=k}g=e.querySelectorAll("div:not([style])")}return e.innerHTML}function o(){b.el.addEventListener("copy",d),b.el.addEventListener("cut",d),b.el.addEventListener("paste",e),b.events.on("drop",f),b.browser.msie&&b.browser.version<11&&(b.events.on("mouseup",function(a){2==a.button&&(setTimeout(function(){v=!1},50),v=!0)},!0),b.events.on("beforepaste",e)),b.events.on("destroy",p)}function p(){b.el.removeEventListener("copy",d),b.el.removeEventListener("cut",d),b.el.removeEventListener("paste",e)}var q,r,s,t,u,v=!1;return{_init:o,removeEmptyTags:n,getRtfClipboard:m,saveCopiedText:c,clean:k}},a.extend(a.FE.DEFAULTS,{shortcutsEnabled:[],shortcutsHint:!0}),a.FE.SHORTCUTS_MAP={},a.FE.RegisterShortcut=function(b,c,d,e,f,g){a.FE.SHORTCUTS_MAP[(f?"^":"")+(g?"@":"")+b]={cmd:c,val:d,letter:e,shift:f,option:g},a.FE.DEFAULTS.shortcutsEnabled.push(c)},a.FE.RegisterShortcut(a.FE.KEYCODE.E,"show",null,"E",!1,!1),a.FE.RegisterShortcut(a.FE.KEYCODE.B,"bold",null,"B",!1,!1),a.FE.RegisterShortcut(a.FE.KEYCODE.I,"italic",null,"I",!1,!1),a.FE.RegisterShortcut(a.FE.KEYCODE.U,"underline",null,"U",!1,!1),a.FE.RegisterShortcut(a.FE.KEYCODE.S,"strikeThrough",null,"S",!1,!1),a.FE.RegisterShortcut(a.FE.KEYCODE.CLOSE_SQUARE_BRACKET,"indent",null,"]",!1,!1),a.FE.RegisterShortcut(a.FE.KEYCODE.OPEN_SQUARE_BRACKET,"outdent",null,"[",!1,!1),a.FE.RegisterShortcut(a.FE.KEYCODE.Z,"undo",null,"Z",!1,!1),a.FE.RegisterShortcut(a.FE.KEYCODE.Z,"redo",null,"Z",!0,!1),a.FE.MODULES.shortcuts=function(b){function c(c){if(!b.opts.shortcutsHint)return null;if(!f){f={};for(var d in a.FE.SHORTCUTS_MAP)a.FE.SHORTCUTS_MAP.hasOwnProperty(d)&&b.opts.shortcutsEnabled.indexOf(a.FE.SHORTCUTS_MAP[d].cmd)>=0&&(f[a.FE.SHORTCUTS_MAP[d].cmd+"."+(a.FE.SHORTCUTS_MAP[d].val||"")]={shift:a.FE.SHORTCUTS_MAP[d].shift,option:a.FE.SHORTCUTS_MAP[d].option,letter:a.FE.SHORTCUTS_MAP[d].letter})}var e=f[c];return e?(b.helpers.isMac()?String.fromCharCode(8984):"Ctrl+")+(e.shift?b.helpers.isMac()?String.fromCharCode(8679):"Shift+":"")+(e.option?b.helpers.isMac()?String.fromCharCode(8997):"Alt+":"")+e.letter:null}function d(c){if(!b.core.hasFocus())return!0;var d=c.which,e=-1!=navigator.userAgent.indexOf("Mac OS X")?c.metaKey:c.ctrlKey;if("keyup"==c.type&&g&&d!=a.FE.KEYCODE.META)return g=!1,!1;"keydown"==c.type&&(g=!1);var f=(c.shiftKey?"^":"")+(c.altKey?"@":"")+d;if(e&&a.FE.SHORTCUTS_MAP[f]){var h=a.FE.SHORTCUTS_MAP[f].cmd;if(h&&b.opts.shortcutsEnabled.indexOf(h)>=0){var i,j=a.FE.SHORTCUTS_MAP[f].val;if(h&&!j?i=b.$tb.find('.fr-command[data-cmd="'+h+'"]'):h&&j&&(i=b.$tb.find('.fr-command[data-cmd="'+h+'"][data-param1="'+j+'"]')),i.length)return c.preventDefault(),c.stopPropagation(),i.parents(".fr-toolbar").data("instance",b),"keydown"==c.type&&(b.button.exec(i),g=!0),!1;if(h&&b.commands[h])return c.preventDefault(),c.stopPropagation(),"keydown"==c.type&&(b.commands[h](),g=!0),!1}}}function e(){b.events.on("keydown",d,!0),b.events.on("keyup",d,!0)}var f=null,g=!1;return{_init:e,get:c}},a.FE.MODULES.snapshot=function(a){function b(a){for(var b=a.parentNode.childNodes,c=0,d=null,e=0;e<b.length;e++){if(d){var f=b[e].nodeType===Node.TEXT_NODE&&""===b[e].textContent,g=d.nodeType===Node.TEXT_NODE&&b[e].nodeType===Node.TEXT_NODE;f||g||c++}if(b[e]==a)return c;d=b[e]}}function c(c){var d=[];if(!c.parentNode)return[];for(;!a.node.isElement(c);)d.push(b(c)),c=c.parentNode;return d.reverse()}function d(a,b){for(;a&&a.nodeType===Node.TEXT_NODE;){var c=a.previousSibling;c&&c.nodeType==Node.TEXT_NODE&&(b+=c.textContent.length),a=c}return b}function e(a){return{scLoc:c(a.startContainer),scOffset:d(a.startContainer,a.startOffset),ecLoc:c(a.endContainer),ecOffset:d(a.endContainer,a.endOffset)}}function f(){var b={};if(a.events.trigger("snapshot.before"),b.html=(a.$wp?a.$el.html():a.$oel.get(0).outerHTML).replace(/ style=""/g,""),b.ranges=[],a.$wp&&a.selection.inEditor()&&a.core.hasFocus())for(var c=a.selection.ranges(),d=0;d<c.length;d++)b.ranges.push(e(c[d]));return a.events.trigger("snapshot.after"),b}function g(b){for(var c=a.el,d=0;d<b.length;d++)c=c.childNodes[b[d]];return c}function h(b,c){try{var d=g(c.scLoc),e=c.scOffset,f=g(c.ecLoc),h=c.ecOffset,i=a.doc.createRange();i.setStart(d,e),i.setEnd(f,h),b.addRange(i)}catch(j){}}function i(b){a.$el.html()!=b.html&&(a.opts.htmlExecuteScripts?a.$el.html(b.html):a.el.innerHTML=b.html);var c=a.selection.get();a.selection.clear(),a.events.focus(!0);for(var d=0;d<b.ranges.length;d++)h(c,b.ranges[d])}function j(b,c){return b.html==c.html&&(!a.core.hasFocus()||JSON.stringify(b.ranges)==JSON.stringify(c.ranges))}return{get:f,restore:i,equal:j}},a.FE.MODULES.undo=function(a){function b(b){var c=b.which;a.keys.ctrlKey(b)&&(90==c&&b.shiftKey&&b.preventDefault(),90==c&&b.preventDefault())}function c(){return!(0===a.undo_stack.length||a.undo_index<=1)}function d(){return a.undo_index!=a.undo_stack.length}function e(b){if(!a.undo_stack||a.undoing||a.el.querySelector(".fr-marker"))return!1;void 0===b?(b=a.snapshot.get(),a.undo_stack[a.undo_index-1]&&a.snapshot.equal(a.undo_stack[a.undo_index-1],b)||(f(),a.undo_stack.push(b),a.undo_index++,b.html!=l&&(a.events.trigger("contentChanged"),l=b.html))):(f(),a.undo_index>0?a.undo_stack[a.undo_index-1]=b:(a.undo_stack.push(b),a.undo_index++))}function f(){if(!a.undo_stack||a.undoing)return!1;for(;a.undo_stack.length>a.undo_index;)a.undo_stack.pop()}function g(){if(a.undo_index>1){a.undoing=!0;var b=a.undo_stack[--a.undo_index-1];clearTimeout(a._content_changed_timer),a.snapshot.restore(b),l=b.html,a.popups.hideAll(),a.toolbar.enable(),a.events.trigger("contentChanged"),a.events.trigger("commands.undo"),a.undoing=!1}}function h(){if(a.undo_index<a.undo_stack.length){a.undoing=!0;var b=a.undo_stack[a.undo_index++];clearTimeout(a._content_changed_timer),a.snapshot.restore(b),l=b.html,a.popups.hideAll(),a.toolbar.enable(),a.events.trigger("contentChanged"),a.events.trigger("commands.redo"),a.undoing=!1}}function i(){a.undo_index=0,a.undo_stack=[]}function j(){a.undo_stack=[]}function k(){i(),a.events.on("initialized",function(){l=(a.$wp?a.$el.html():a.$oel.get(0).outerHTML).replace(/ style=""/g,"")}),a.events.on("blur",function(){a.el.querySelector(".fr-dragging")||a.undo.saveStep()}),a.events.on("keydown",b),a.events.on("destroy",j)}var l=null;return{_init:k,run:g,redo:h,canDo:c,canRedo:d,dropRedo:f,reset:i,saveStep:e}},a.FE.ICON_DEFAULT_TEMPLATE="font_awesome",a.FE.ICON_TEMPLATES={font_awesome:'<i class="fa fa-[NAME]" aria-hidden="true"></i>',text:'<span style="text-align: center;">[NAME]</span>',image:"<img src=[SRC] alt=[ALT] />",svg:'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">[PATH]</svg>'},a.FE.ICONS={bold:{NAME:"bold"},italic:{NAME:"italic"},underline:{NAME:"underline"},strikeThrough:{NAME:"strikethrough"},subscript:{NAME:"subscript"},superscript:{NAME:"superscript"},color:{NAME:"tint"},outdent:{NAME:"outdent"},indent:{NAME:"indent"},undo:{NAME:"rotate-left"},redo:{NAME:"rotate-right"},insertHR:{NAME:"minus"},clearFormatting:{NAME:"eraser"},selectAll:{NAME:"mouse-pointer"}},a.FE.DefineIconTemplate=function(b,c){a.FE.ICON_TEMPLATES[b]=c},a.FE.DefineIcon=function(b,c){a.FE.ICONS[b]=c},a.FE.MODULES.icon=function(){function b(b){var c=null,d=a.FE.ICONS[b];if(void 0!==d){var e=d.template||a.FE.ICON_DEFAULT_TEMPLATE;e&&(e=a.FE.ICON_TEMPLATES[e])&&(c=e.replace(/\[([a-zA-Z]*)\]/g,function(a,c){return"NAME"==c?d[c]||b:d[c]}))}return c||b}function c(b){var c=a.FE.ICONS[b],d=a.FE.ICON_DEFAULT_TEMPLATE;return void 0!==c?d=c.template||a.FE.ICON_DEFAULT_TEMPLATE:d}return{create:b,getTemplate:c}},a.extend(a.FE.DEFAULTS,{tooltips:!0}),a.FE.MODULES.tooltip=function(b){function c(){b.$tooltip&&b.$tooltip.removeClass("fr-visible").css("left","-3000px").css("position","fixed")}function d(c,d){if(c.data("title")||c.data("title",c.attr("title")),!c.data("title"))return!1;b.$tooltip||f(),c.removeAttr("title"),b.$tooltip.text(b.language.translate(c.data("title"))),b.$tooltip.addClass("fr-visible");var e=c.offset().left+(c.outerWidth()-b.$tooltip.outerWidth())/2;e<0&&(e=0),e+b.$tooltip.outerWidth()>a(b.o_win).width()&&(e=a(b.o_win).width()-b.$tooltip.outerWidth()),void 0===d&&(d=b.opts.toolbarBottom);var g=d?c.offset().top-b.$tooltip.height():c.offset().top+c.outerHeight();b.$tooltip.css("position",""),b.$tooltip.css("left",e),b.$tooltip.css("top",Math.ceil(g)),"static"!=a(b.o_doc).find("body:first").css("position")?(b.$tooltip.css("margin-left",-a(b.o_doc).find("body:first").offset().left),b.$tooltip.css("margin-top",-a(b.o_doc).find("body:first").offset().top)):(b.$tooltip.css("margin-left",""),b.$tooltip.css("margin-top",""))}function e(e,f,g){b.opts.tooltips&&!b.helpers.isMobile()&&(b.events.$on(e,"mouseenter",f,function(c){b.node.hasClass(c.currentTarget,"fr-disabled")||b.edit.isDisabled()||d(a(c.currentTarget),g)},!0),b.events.$on(e,"mouseleave "+b._mousedown+" "+b._mouseup,f,function(){c()},!0))}function f(){b.opts.tooltips&&!b.helpers.isMobile()&&(b.shared.$tooltip?b.$tooltip=b.shared.$tooltip:(b.shared.$tooltip=a('<div class="fr-tooltip"></div>'),b.$tooltip=b.shared.$tooltip,b.opts.theme&&b.$tooltip.addClass(b.opts.theme+"-theme"),a(b.o_doc).find("body:first").append(b.$tooltip)),b.events.on("shared.destroy",function(){b.$tooltip.html("").removeData().remove(),b.$tooltip=null},!0))}return{hide:c,to:d,bind:e}},a.FE.MODULES.button=function(b){function c(b,c,d){for(var e=a(),f=0;f<b.length;f++){var g=a(b[f]);if(g.is(c)&&(e=e.add(g)),d&&g.is(".fr-dropdown")){var h=g.next().find(c);e=e.add(h)}}return e}function d(d,e){var f,g=a();if(!d)return g;g=g.add(c(v,d,e)),g=g.add(c(w,d,e));for(f in b.shared.popups)if(b.shared.popups.hasOwnProperty(f)){var h=b.shared.popups[f],i=h.children().find(d);g=g.add(i)}for(f in b.shared.modals)if(b.shared.modals.hasOwnProperty(f)){var j=b.shared.modals[f],k=j.$modal.find(d);g=g.add(k)}return g}function e(c){var e=c.next(),f=b.node.hasClass(c.get(0),"fr-active"),g=d(".fr-dropdown.fr-active").not(c),h=c.parents(".fr-toolbar, .fr-popup").data("instance")||b;if(h.helpers.isIOS()&&!h.el.querySelector(".fr-marker")&&(h.selection.save(),h.selection.clear(),h.selection.restore()),!f){var i=c.data("cmd");e.find(".fr-command").removeClass("fr-active").attr("aria-selected",!1),a.FE.COMMANDS[i]&&a.FE.COMMANDS[i].refreshOnShow&&a.FE.COMMANDS[i].refreshOnShow.apply(h,[c,e]),e.css("left",c.offset().left-c.parent().offset().left-("rtl"==b.opts.direction?e.width()-c.outerWidth():0)),e.addClass("test-height");var j=e.outerHeight();e.removeClass("test-height"),e.css("top","").css("bottom",""),!b.opts.toolbarBottom&&e.offset().top+c.outerHeight()+j<a(b.o_doc).height()?e.css("top",c.position().top+c.outerHeight()):e.css("bottom",b.$tb.height()-c.position().top)}c.addClass("fr-blink").toggleClass("fr-active"),c.hasClass("fr-active")?(e.attr("aria-hidden",!1),c.attr("aria-expanded",!0)):(e.attr("aria-hidden",!0),c.attr("aria-expanded",!1)),setTimeout(function(){c.removeClass("fr-blink")},300),e.css("margin-left",""),e.offset().left+e.outerWidth()>b.$sc.offset().left+b.$sc.width()&&e.css("margin-left",-(e.offset().left+e.outerWidth()-b.$sc.offset().left-b.$sc.width())),g.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),g.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""),0!==c.parents(".fr-popup").length||b.opts.toolbarInline||(b.node.hasClass(c.get(0),"fr-active")?b.$tb.css("zIndex",(b.opts.zIndex||1)+4):b.$tb.css("zIndex",""));var k=e.find("a.fr-command.fr-active:first");b.helpers.isMobile()||(k.length?b.accessibility.focusToolbarElement(k):b.accessibility.focusToolbarElement(c))}function f(a){a.addClass("fr-blink"),setTimeout(function(){a.removeClass("fr-blink")},500);for(var b=a.data("cmd"),c=[];void 0!==a.data("param"+(c.length+1));)c.push(a.data("param"+(c.length+1)));var e=d(".fr-dropdown.fr-active");e.length&&(e.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),e.parent(".fr-toolbar:not(.fr-inline)").css("zIndex","")),a.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(b,c)}function g(a){f(a)}function h(c){var d=c.parents(".fr-popup, .fr-toolbar").data("instance");if(0!==c.parents(".fr-popup").length||c.data("popup")||d.popups.hideAll(),d.popups.areVisible()&&!d.popups.areVisible(d)){for(var f=0;f<a.FE.INSTANCES.length;f++)a.FE.INSTANCES[f]!=d&&a.FE.INSTANCES[f].popups&&a.FE.INSTANCES[f].popups.areVisible()&&a.FE.INSTANCES[f].$el.find(".fr-marker").remove();d.popups.hideAll()}b.node.hasClass(c.get(0),"fr-dropdown")?e(c):(g(c),a.FE.COMMANDS[c.data("cmd")]&&!1!==a.FE.COMMANDS[c.data("cmd")].refreshAfterCallback&&d.button.bulkRefresh())}function i(b){h(a(b.currentTarget))}function j(a){var b=a.find(".fr-dropdown.fr-active");b.length&&(b.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),b.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""))}function k(a){a.preventDefault(),a.stopPropagation()}function l(a){if(a.stopPropagation(),!b.helpers.isMobile())return!1}function m(c,d){b.events.bindClick(c,".fr-command:not(.fr-disabled)",i),b.events.$on(c,b._mousedown+" "+b._mouseup+" "+b._move,".fr-dropdown-menu",k,!0),b.events.$on(c,b._mousedown+" "+b._mouseup+" "+b._move,".fr-dropdown-menu .fr-dropdown-wrapper",l,!0);var e=c.get(0).ownerDocument,f="defaultView"in e?e.defaultView:e.parentWindow,g=function(d){(!d||d.type==b._mouseup&&d.target!=a("html").get(0)||"keydown"==d.type&&(b.keys.isCharacter(d.which)&&!b.keys.ctrlKey(d)||d.which==a.FE.KEYCODE.ESC))&&j(c)};b.events.$on(a(f),b._mouseup+" resize keydown",g,!0),b.opts.iframe&&b.events.$on(b.$win,b._mouseup,g,!0),b.node.hasClass(c.get(0),"fr-popup")?a.merge(w,c.find(".fr-btn").toArray()):a.merge(v,c.find(".fr-btn").toArray()),b.tooltip.bind(c,".fr-btn, .fr-title",d)}function n(a,c){var d="";if(c.html)"function"==typeof c.html?d+=c.html.call(b):d+=c.html;else{var e=c.options;"function"==typeof e&&(e=e()),d+='<ul class="fr-dropdown-list" role="presentation">';for(var f in e)if(e.hasOwnProperty(f)){var g=b.shortcuts.get(a+"."+f);g=g?'<span class="fr-shortcut">'+g+"</span>":"",d+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'+a+'" data-param1="'+f+'" title="'+e[f]+'">'+b.language.translate(e[f])+"</a></li>"}d+="</ul>"}return d}function o(a,c,d){if(b.helpers.isMobile()&&!1===c.showOnMobile)return"";var e=c.displaySelection;"function"==typeof e&&(e=e(b));var f;if(e){
var g="function"==typeof c.defaultSelection?c.defaultSelection(b):c.defaultSelection;f='<span style="width:'+(c.displaySelectionWidth||100)+'px">'+b.language.translate(g||c.title)+"</span>"}else f=b.icon.create(c.icon||a),f+='<span class="fr-sr-only">'+(b.language.translate(c.title)||"")+"</span>";var h=c.popup?' data-popup="true"':"",i=c.modal?' data-modal="true"':"",j=b.shortcuts.get(a+".");j=j?" ("+j+")":"";var k=a+"-"+b.id,l="dropdown-menu-"+k,m='<button id="'+k+'"type="button" tabIndex="-1" role="button"'+(c.toggle?' aria-pressed="false"':"")+("dropdown"==c.type?' aria-controls="'+l+'" aria-expanded="false" aria-haspopup="true"':"")+(c.disabled?' aria-disabled="true"':"")+' title="'+(b.language.translate(c.title)||"")+j+'" class="fr-command fr-btn'+("dropdown"==c.type?" fr-dropdown":"")+" fr-btn-"+b.icon.getTemplate(c.icon)+(c.displaySelection?" fr-selection":"")+(c.back?" fr-back":"")+(c.disabled?" fr-disabled":"")+(d?"":" fr-hidden")+'" data-cmd="'+a+'"'+h+i+">"+f+"</button>";if("dropdown"==c.type){var o='<div id="'+l+'" class="fr-dropdown-menu" role="listbox" aria-labelledby="'+k+'" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">';o+=n(a,c),o+="</div></div></div>",m+=o}return m}function p(c,d){for(var e="",f=0;f<c.length;f++){var g=c[f],h=a.FE.COMMANDS[g];if(!(h&&void 0!==h.plugin&&b.opts.pluginsEnabled.indexOf(h.plugin)<0))if(h){var i=void 0===d||d.indexOf(g)>=0;e+=o(g,h,i)}else"|"==g?e+='<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>':"-"==g&&(e+='<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>')}return e}function q(c){var d,e=c.parents(".fr-popup, .fr-toolbar").data("instance")||b,f=c.data("cmd");b.node.hasClass(c.get(0),"fr-dropdown")?d=c.next():(c.removeClass("fr-active"),c.attr("aria-pressed")&&c.attr("aria-pressed",!1)),a.FE.COMMANDS[f]&&a.FE.COMMANDS[f].refresh?a.FE.COMMANDS[f].refresh.apply(e,[c,d]):b.refresh[f]&&e.refresh[f](c,d)}function r(c){var d=b.$tb?b.$tb.data("instance")||b:b;if(!1===b.events.trigger("buttons.refresh"))return!0;setTimeout(function(){for(var e=d.selection.inEditor()&&d.core.hasFocus(),f=0;f<c.length;f++){var g=a(c[f]),h=g.data("cmd");0===g.parents(".fr-popup").length?e||a.FE.COMMANDS[h]&&a.FE.COMMANDS[h].forcedRefresh?d.button.refresh(g):b.node.hasClass(g.get(0),"fr-dropdown")||(g.removeClass("fr-active"),g.attr("aria-pressed")&&g.attr("aria-pressed",!1)):g.parents(".fr-popup").is(":visible")&&d.button.refresh(g)}},0)}function s(){r(v),r(w)}function t(){v=[],w=[]}function u(){b.opts.toolbarInline?b.events.on("toolbar.show",s):(b.events.on("mouseup",s),b.events.on("keyup",s),b.events.on("blur",s),b.events.on("focus",s),b.events.on("contentChanged",s),b.helpers.isMobile()&&b.events.$on(b.$doc,"selectionchange",s)),b.events.on("shared.destroy",t)}var v=[];(b.opts.toolbarInline||b.opts.toolbarContainer)&&(b.shared.buttons||(b.shared.buttons=[]),v=b.shared.buttons);var w=[];return b.shared.popup_buttons||(b.shared.popup_buttons=[]),w=b.shared.popup_buttons,{_init:u,buildList:p,bindCommands:m,refresh:q,bulkRefresh:s,exec:f,click:h,hideActiveDropdowns:j,getButtons:d}},a.FE.MODULES.modals=function(b){function c(a){return n[a]}function d(c,d){var e='<div tabIndex="-1" class="fr-modal'+(b.opts.theme?" "+b.opts.theme+"-theme":"")+'"><div class="fr-modal-wrapper">';return e+='<div class="fr-modal-head">'+c+'<i title="'+b.language.translate("Cancel")+'" class="fa fa-times fr-modal-close"></i></div>',e+='<div tabIndex="-1" class="fr-modal-body">'+d+"</div>",e+="</div></div>",a(e)}function e(c,e,f){if(b.shared.$overlay||(b.shared.$overlay=a('<div class="fr-overlay">').appendTo("body:first")),m=b.shared.$overlay,b.opts.theme&&m.addClass(b.opts.theme+"-theme"),!n[c]){var g=d(e,f);n[c]={$modal:g,$head:g.find(".fr-modal-head"),$body:g.find(".fr-modal-body")},b.helpers.isMobile()||g.addClass("fr-desktop"),g.appendTo("body:first"),b.events.bindClick(g,"i.fr-modal-close",function(){h(c)}),n[c].$body.css("margin-top",n[c].$head.outerHeight()),b.events.$on(g,"keydown",function(d){var e=d.which;return e==a.FE.KEYCODE.ESC?(h(c),b.accessibility.focusModalButton(g),!1):!(!a(d.currentTarget).is("input[type=text], textarea")&&e!=a.FE.KEYCODE.ARROW_UP&&e!=a.FE.KEYCODE.ARROW_DOWN&&!b.keys.isBrowserAction(d))||(d.preventDefault(),d.stopPropagation(),!1)},!0),h(c,!0)}return n[c]}function f(){for(var a in n){var b=n[a];b&&b.$modal&&b.$modal.removeData().remove()}m&&m.removeData().remove(),n={}}function g(c){if(n[c]){var d=n[c].$modal;d.data("instance",b),d.show(),m.show(),a(b.o_doc).find("body:first").addClass("prevent-scroll"),b.helpers.isMobile()&&a(b.o_doc).find("body:first").addClass("fr-mobile"),d.addClass("fr-active"),b.accessibility.focusModal(d)}}function h(c,d){if(n[c]){var e=n[c].$modal,f=e.data("instance")||b;f.events.enableBlur(),e.hide(),m.hide(),a(f.o_doc).find("body:first").removeClass("prevent-scroll fr-mobile"),e.removeClass("fr-active"),d||(b.accessibility.restoreSelection(f),b.events.trigger("modals.hide"))}}function i(c){if(n[c]){var d=n[c],e=d.$modal,f=d.$body,g=a(b.o_win).height(),h=e.find(".fr-modal-wrapper"),i=h.outerHeight(!0),j=h.height()-(f.outerHeight(!0)-f.height()),k=g-i+j,l=f.get(0).scrollHeight,m="auto";l>k&&(m=k),f.height(m)}}function j(a){var c;if("string"==typeof a){if(!n[a])return;c=n[a].$modal}else c=a;return c&&b.node.hasClass(c,"fr-active")&&b.core.sameInstance(c)||!1}function k(a){for(var b in n)if(n.hasOwnProperty(b)&&j(b)&&(void 0===a||n[b].$modal.data("instance")==a))return n[b].$modal;return!1}function l(){b.events.on("shared.destroy",f,!0)}b.shared.modals||(b.shared.modals={});var m,n=b.shared.modals;return{_init:l,get:c,create:e,show:g,hide:h,resize:i,isVisible:j,areVisible:k}},a.FE.POPUP_TEMPLATES={"text.edit":"[_EDIT_]"},a.FE.RegisterTemplate=function(b,c){a.FE.POPUP_TEMPLATES[b]=c},a.FE.MODULES.popups=function(b){function c(a,c){c.is(":visible")||(c=b.$sc),c.is(x[a].data("container"))||(x[a].data("container",c),c.append(x[a]))}function d(a,d,e,h){if(g()&&b.$el.find(".fr-marker").length>0?(b.events.disableBlur(),b.selection.restore()):(b.events.disableBlur(),b.events.focus(),b.events.enableBlur()),m([a]),!x[a])return!1;var i=b.button.getButtons(".fr-dropdown.fr-active");i.removeClass("fr-active").attr("aria-expanded",!1).parent(".fr-toolbar").css("zIndex",""),i.next().attr("aria-hidden",!0),x[a].data("instance",b),b.$tb&&b.$tb.data("instance",b);var j=x[a].outerWidth(),k=f(a);x[a].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled");var l=x[a].data("container");b.opts.toolbarInline&&l&&b.$tb&&l.get(0)==b.$tb.get(0)&&(c(a,b.$sc),e=b.$tb.offset().top-b.helpers.getPX(b.$tb.css("margin-top")),d=b.$tb.offset().left+b.$tb.outerWidth()/2+(parseFloat(b.$tb.find(".fr-arrow").css("margin-left"))||0)+b.$tb.find(".fr-arrow").outerWidth()/2,b.node.hasClass(b.$tb.get(0),"fr-above")&&e&&(e+=b.$tb.outerHeight()),h=0),l=x[a].data("container"),!b.opts.iframe||h||k||(d&&(d-=b.$iframe.offset().left),e&&(e-=b.$iframe.offset().top)),l.is(b.$tb)?b.$tb.css("zIndex",(b.opts.zIndex||1)+4):x[a].css("zIndex",(b.opts.zIndex||1)+4),d&&(d-=j/2),b.opts.toolbarBottom&&l&&b.$tb&&l.get(0)==b.$tb.get(0)&&(x[a].addClass("fr-above"),e&&(e-=x[a].outerHeight())),x[a].removeClass("fr-active"),b.position.at(d,e,x[a],h||0),x[a].addClass("fr-active"),k||b.accessibility.focusPopup(x[a]),b.opts.toolbarInline&&b.toolbar.hide(),b.events.trigger("popups.show."+a),s(a)._repositionPopup(),o()}function e(a,c){b.events.on("popups.show."+a,c)}function f(a){return x[a]&&b.node.hasClass(x[a],"fr-active")&&b.core.sameInstance(x[a])||!1}function g(a){for(var b in x)if(x.hasOwnProperty(b)&&f(b)&&(void 0===a||x[b].data("instance")==a))return x[b];return!1}function h(a){var c=null;(c="string"!=typeof a?a:x[a])&&b.node.hasClass(c,"fr-active")&&(c.removeClass("fr-active fr-above"),b.events.trigger("popups.hide."+a),b.$tb&&(b.opts.zIndex>1?b.$tb.css("zIndex",b.opts.zIndex+1):b.$tb.css("zIndex","")),b.events.disableBlur(),c.find("input, textarea, button").filter(":focus").blur(),c.find("input, textarea").attr("disabled","disabled"))}function i(a,c){b.events.on("popups.hide."+a,c)}function j(a){var c=x[a];if(c&&!c.data("inst"+b.id)){t(s(a),a)}return c}function k(a,c){b.events.on("popups.refresh."+a,c)}function l(c){x[c].data("instance",b),b.events.trigger("popups.refresh."+c);for(var d=x[c].find(".fr-command"),e=0;e<d.length;e++){var f=a(d[e]);0===f.parents(".fr-dropdown-menu").length&&b.button.refresh(f)}}function m(a){void 0===a&&(a=[]);for(var b in x)x.hasOwnProperty(b)&&a.indexOf(b)<0&&h(b)}function n(){b.shared.exit_flag=!0}function o(){b.shared.exit_flag=!1}function p(){return b.shared.exit_flag}function q(c,d){var e=a.FE.POPUP_TEMPLATES[c];"function"==typeof e&&(e=e.apply(b));for(var f in d)d.hasOwnProperty(f)&&(e=e.replace("[_"+f.toUpperCase()+"_]",d[f]));return e}function r(c,d){var e=q(c,d),f=a('<div class="fr-popup'+(b.helpers.isMobile()?" fr-mobile":" fr-desktop")+(b.opts.toolbarInline?" fr-inline":"")+'"><span class="fr-arrow"></span>'+e+"</div>");b.opts.theme&&f.addClass(b.opts.theme+"-theme"),b.opts.zIndex>1&&b.$tb.css("z-index",b.opts.zIndex+2),"auto"!=b.opts.direction&&f.removeClass("fr-ltr fr-rtl").addClass("fr-"+b.opts.direction),f.find("input, textarea").attr("dir",b.opts.direction).attr("disabled","disabled");var g=a("body:first");return g.append(f),f.data("container",g),x[c]=f,b.button.bindCommands(f,!1),f}function s(c){var d=x[c];return{_windowResize:function(){var a=d.data("instance")||b;!a.helpers.isMobile()&&d.is(":visible")&&(a.events.disableBlur(),a.popups.hide(c),a.events.enableBlur())},_inputFocus:function(c){var e=d.data("instance")||b,f=a(c.currentTarget);if(f.is("input:file")&&f.closest(".fr-layer").addClass("fr-input-focus"),c.preventDefault(),c.stopPropagation(),setTimeout(function(){e.events.enableBlur()},100),e.helpers.isMobile()){var g=a(e.o_win).scrollTop();setTimeout(function(){a(e.o_win).scrollTop(g)},0)}},_inputBlur:function(c){var e=d.data("instance")||b,f=a(c.currentTarget);f.is("input:file")&&f.closest(".fr-layer").removeClass("fr-input-focus"),document.activeElement!=this&&a(this).is(":visible")&&(e.events.blurActive()&&e.events.trigger("blur"),e.events.enableBlur())},_editorKeydown:function(e){var g=d.data("instance")||b;g.keys.ctrlKey(e)||e.which==a.FE.KEYCODE.ALT||e.which==a.FE.KEYCODE.ESC||(f(c)&&d.find(".fr-back:visible").length?g.button.exec(d.find(".fr-back:visible:first")):e.which!=a.FE.KEYCODE.ALT&&g.popups.hide(c))},_preventFocus:function(c){var e=d.data("instance")||b,f=c.originalEvent?c.originalEvent.target||c.originalEvent.originalTarget:null;"mouseup"==c.type||a(f).is(":focus")||e.events.disableBlur(),"mouseup"!=c.type||a(f).hasClass("fr-command")||a(f).parents(".fr-command").length>0||b.button.hideActiveDropdowns(d),(b.browser.safari||b.browser.mozilla)&&"mousedown"==c.type&&a(f).is("input[type=file]")&&e.events.disableBlur();var g="input, textarea, button, select, label, .fr-command";if(f&&!a(f).is(g)&&0===a(f).parents(g).length)return c.stopPropagation(),!1;f&&a(f).is(g)&&c.stopPropagation(),o()},_editorMouseup:function(){d.is(":visible")&&p()&&d.find("input:focus, textarea:focus, button:focus, select:focus").filter(":visible").length>0&&b.events.disableBlur()},_windowMouseup:function(a){if(!b.core.sameInstance(d))return!0;var e=d.data("instance")||b;d.is(":visible")&&p()&&(a.stopPropagation(),e.markers.remove(),e.popups.hide(c),o())},_windowKeydown:function(e){if(!b.core.sameInstance(d))return!0;var f=d.data("instance")||b,g=e.which;if(a.FE.KEYCODE.ESC==g){if(f.popups.isVisible(c)&&f.opts.toolbarInline)return e.stopPropagation(),f.popups.isVisible(c)&&(d.find(".fr-back:visible").length?(f.button.exec(d.find(".fr-back:visible:first")),f.accessibility.focusPopupButton(d)):d.find(".fr-dismiss:visible").length?f.button.exec(d.find(".fr-dismiss:visible:first")):(f.popups.hide(c),f.toolbar.showInline(null,!0),f.accessibility.FocusPopupButton(d))),!1;if(f.popups.isVisible(c))return d.find(".fr-back:visible").length?(f.button.exec(d.find(".fr-back:visible:first")),f.accessibility.focusPopupButton(d)):d.find(".fr-dismiss:visible").length?f.button.exec(d.find(".fr-dismiss:visible:first")):(f.popups.hide(c),f.accessibility.focusPopupButton(d)),!1}},_doPlaceholder:function(){0===a(this).next().length&&a(this).attr("placeholder")&&a(this).after('<label for="'+a(this).attr("id")+'">'+a(this).attr("placeholder")+"</label>"),a(this).toggleClass("fr-not-empty",""!==a(this).val())},_repositionPopup:function(){if(!b.opts.height&&!b.opts.heightMax||b.opts.toolbarInline)return!0;if(b.$wp&&f(c)&&d.parent().get(0)==b.$sc.get(0)){var a=d.offset().top-b.$wp.offset().top,e=b.$wp.outerHeight();b.node.hasClass(d.get(0),"fr-above")&&(a+=d.outerHeight()),a>e||a<0?d.addClass("fr-hidden"):d.removeClass("fr-hidden")}}}}function t(a,c){b.events.on("mouseup",a._editorMouseup,!0),b.$wp&&b.events.on("keydown",a._editorKeydown),b.events.on("blur",function(){g()&&b.markers.remove(),m()}),b.$wp&&!b.helpers.isMobile()&&b.events.$on(b.$wp,"scroll.popup"+c,a._repositionPopup),b.events.on("window.mouseup",a._windowMouseup,!0),b.events.on("window.keydown",a._windowKeydown,!0),x[c].data("inst"+b.id,!0),b.events.on("destroy",function(){b.core.sameInstance(x[c])&&x[c].removeClass("fr-active").appendTo("body:first")},!0)}function u(c,d){var e=r(c,d),f=s(c);return t(f,c),b.events.$on(e,"mousedown mouseup touchstart touchend touch","*",f._preventFocus,!0),b.events.$on(e,"focus","input, textarea, button, select",f._inputFocus,!0),b.events.$on(e,"blur","input, textarea, button, select",f._inputBlur,!0),b.accessibility.registerPopup(c),b.events.$on(e,"keydown keyup change input","input, textarea",f._doPlaceholder,!0),b.helpers.isIOS()&&b.events.$on(e,"touchend","label",function(){a("#"+a(this).attr("for")).prop("checked",function(a,b){return!b})},!0),b.events.$on(a(b.o_win),"resize",f._windowResize,!0),e}function v(){for(var a in x)if(x.hasOwnProperty(a)){var b=x[a];b&&(b.html("").removeData().remove(),x[a]=null)}x=[]}function w(){b.events.on("shared.destroy",v,!0),b.events.on("window.mousedown",n),b.events.on("window.touchmove",o),b.events.on("mousedown",function(a){g()&&(a.stopPropagation(),b.$el.find(".fr-marker").remove(),n(),b.events.disableBlur())})}b.shared.popups||(b.shared.popups={});var x=b.shared.popups;return b.shared.exit_flag=!1,{_init:w,create:u,get:j,show:d,hide:h,onHide:i,hideAll:m,setContainer:c,refresh:l,onRefresh:k,onShow:e,isVisible:f,areVisible:g}},a.FE.MODULES.position=function(b){function c(){var a=b.selection.ranges(0),c=a.getBoundingClientRect();if(0===c.top&&0===c.left&&0===c.width||0===c.height){var d=!1;0===b.$el.find(".fr-marker").length&&(b.selection.save(),d=!0);var e=b.$el.find(".fr-marker:first");e.css("display","inline"),e.css("line-height","");var f=e.offset(),g=e.outerHeight();e.css("display","none"),e.css("line-height",0),c={},c.left=f.left,c.width=0,c.height=g,c.top=f.top-(b.helpers.isMobile()?0:b.helpers.scrollTop()),c.right=1,c.bottom=1,c.ok=!0,d&&b.selection.restore()}return c}function d(a,c,d){var e=a.outerHeight(!0);if(!b.helpers.isMobile()&&b.$tb&&a.parent().get(0)!=b.$tb.get(0)){var f=a.parent().offset().top,g=c-e-(d||0);a.parent().get(0)==b.$sc.get(0)&&(f-=a.parent().position().top);var h=b.$sc.get(0).scrollHeight;f+c+e>b.$sc.offset().top+h&&a.parent().offset().top+g>0?(c=g,a.addClass("fr-above")):a.removeClass("fr-above")}return c}function e(a,c){var d=a.outerWidth(!0);return a.parent().offset().left+c+d>b.$sc.get(0).clientWidth-b.$sc.position().left-10&&(c=b.$sc.get(0).clientWidth-a.parent().offset().left-d-10),c<0&&(c=10),c}function f(a){var d=c();a.css({top:0,left:0});var e=d.top+d.height,f=d.left+d.width/2-a.get(0).offsetWidth/2+b.helpers.scrollLeft();b.opts.iframe||(e+=b.helpers.scrollTop()),g(f,e,a,d.height)}function g(a,c,f,g){var h=f.data("container");!h||"BODY"===h.get(0).tagName&&"static"==h.css("position")||(a&&(a-=h.offset().left),c&&(c-=h.offset().top),"BODY"!=h.get(0).tagName?(a&&(a+=h.get(0).scrollLeft),c&&(c+=h.get(0).scrollTop)):"absolute"==h.css("position")&&(a&&(a+=h.position().left),c&&(c+=h.position().top))),b.opts.iframe&&h&&b.$tb&&h.get(0)!=b.$tb.get(0)&&(a&&(a+=b.$iframe.offset().left),c&&(c+=b.$iframe.offset().top));var i=e(f,a);if(a){f.css("left",i);var j=f.data("fr-arrow");j||(j=f.find(".fr-arrow"),f.data("fr-arrow",j)),j.data("margin-left")||j.data("margin-left",b.helpers.getPX(j.css("margin-left"))),j.css("margin-left",a-i+j.data("margin-left"))}c&&f.css("top",d(f,c,g))}function h(c){var d=a(c),e=d.is(".fr-sticky-on"),f=d.data("sticky-top"),g=d.data("sticky-scheduled");if(void 0===f){d.data("sticky-top",0);var h=a('<div class="fr-sticky-dummy" style="height: '+d.outerHeight()+'px;"></div>');b.$box.prepend(h)}else b.$box.find(".fr-sticky-dummy").css("height",d.outerHeight());if(b.core.hasFocus()||b.$tb.find("input:visible:focus").length>0){var i=b.helpers.scrollTop(),j=Math.min(Math.max(i-b.$tb.parent().offset().top,0),b.$tb.parent().outerHeight()-d.outerHeight());j!=f&&j!=g&&(clearTimeout(d.data("sticky-timeout")),d.data("sticky-scheduled",j),d.outerHeight()<i-b.$tb.parent().offset().top&&d.addClass("fr-opacity-0"),d.data("sticky-timeout",setTimeout(function(){var a=b.helpers.scrollTop(),c=Math.min(Math.max(a-b.$tb.parent().offset().top,0),b.$tb.parent().outerHeight()-d.outerHeight());c>0&&"BODY"==b.$tb.parent().get(0).tagName&&(c+=b.$tb.parent().position().top),c!=f&&(d.css("top",Math.max(c,0)),d.data("sticky-top",c),d.data("sticky-scheduled",c)),d.removeClass("fr-opacity-0")},100))),e||(d.css("top","0"),d.width(b.$tb.parent().width()),d.addClass("fr-sticky-on"),b.$box.addClass("fr-sticky-box"))}else clearTimeout(a(c).css("sticky-timeout")),d.css("top","0"),d.css("position",""),d.width(""),d.data("sticky-top",0),d.removeClass("fr-sticky-on"),b.$box.removeClass("fr-sticky-box")}function i(c){if(c.offsetWidth){var d,e,f=a(c),g=f.outerHeight(),h=f.data("sticky-position"),i=a("body"==b.opts.scrollableContainer?b.o_win:b.opts.scrollableContainer).outerHeight(),j=0,k=0;"body"!==b.opts.scrollableContainer&&(j=b.$sc.offset().top,k=a(b.o_win).outerHeight()-j-i);var l="body"==b.opts.scrollableContainer?b.helpers.scrollTop():j,m=f.is(".fr-sticky-on");f.data("sticky-parent")||f.data("sticky-parent",f.parent());var n=f.data("sticky-parent"),o=n.offset().top,p=n.outerHeight();if(f.data("sticky-offset")||(f.data("sticky-offset",!0),f.after('<div class="fr-sticky-dummy" style="height: '+g+'px;"></div>')),!h){var q="auto"!==f.css("top")||"auto"!==f.css("bottom");q||f.css("position","fixed"),h={top:b.node.hasClass(f.get(0),"fr-top"),bottom:b.node.hasClass(f.get(0),"fr-bottom")},q||f.css("position",""),f.data("sticky-position",h),f.data("top",b.node.hasClass(f.get(0),"fr-top")?f.css("top"):"auto"),f.data("bottom",b.node.hasClass(f.get(0),"fr-bottom")?f.css("bottom"):"auto")}var r=function(){return o<l+d&&o+p-g>=l+d},s=function(){return o+g<l+i-e&&o+p>l+i-e};d=b.helpers.getPX(f.data("top")),e=b.helpers.getPX(f.data("bottom"));var t=h.top&&r(),u=h.bottom&&s();t||u?(f.css("width",n.width()+"px"),m||(f.addClass("fr-sticky-on"),f.removeClass("fr-sticky-off"),f.css("top")&&("auto"!=f.data("top")?f.css("top",b.helpers.getPX(f.data("top"))+j):f.data("top","auto")),f.css("bottom")&&("auto"!=f.data("bottom")?f.css("bottom",b.helpers.getPX(f.data("bottom"))+k):f.css("bottom","auto")))):b.node.hasClass(f.get(0),"fr-sticky-off")||(f.width(""),f.removeClass("fr-sticky-on"),f.addClass("fr-sticky-off"),f.css("top")&&"auto"!=f.data("top")&&h.top&&f.css("top",0),f.css("bottom")&&"auto"!=f.data("bottom")&&h.bottom&&f.css("bottom",0))}}function j(){var a=document.createElement("test"),c=a.style;return c.cssText="position:"+["-webkit-","-moz-","-ms-","-o-",""].join("sticky; position:")+" sticky;",-1!==c.position.indexOf("sticky")&&!b.helpers.isIOS()&&!b.helpers.isAndroid()&&!b.browser.chrome}function k(){if(!j())if(b._stickyElements=[],b.helpers.isIOS()){var c=function(){b.helpers.requestAnimationFrame()(c);for(var a=0;a<b._stickyElements.length;a++)h(b._stickyElements[a])};c(),b.events.$on(a(b.o_win),"scroll",function(){if(b.core.hasFocus())for(var c=0;c<b._stickyElements.length;c++){var d=a(b._stickyElements[c]),e=d.parent(),f=b.helpers.scrollTop();d.outerHeight()<f-e.offset().top&&(d.addClass("fr-opacity-0"),d.data("sticky-top",-1),d.data("sticky-scheduled",-1))}},!0)}else b.events.$on(a("body"==b.opts.scrollableContainer?b.o_win:b.opts.scrollableContainer),"scroll",l,!0),b.events.$on(a(b.o_win),"resize",l,!0),b.events.on("initialized",l),b.events.on("focus",l),b.events.$on(a(b.o_win),"resize","textarea",l,!0);b.events.on("destroy",function(){b._stickyElements=[]})}function l(){if(b._stickyElements)for(var a=0;a<b._stickyElements.length;a++)i(b._stickyElements[a])}function m(a){a.addClass("fr-sticky"),b.helpers.isIOS()&&a.addClass("fr-sticky-ios"),j()||(a.removeClass("fr-sticky"),b._stickyElements.push(a.get(0)))}function n(){k()}return{_init:n,forSelection:f,addSticky:m,refresh:l,at:g,getBoundingRect:c}},a.FE.MODULES.refresh=function(b){function c(a){g(a,!b.undo.canDo())}function d(a){g(a,!b.undo.canRedo())}function e(a){if(b.node.hasClass(a.get(0),"fr-no-refresh"))return!1;for(var c=b.selection.blocks(),d=0;d<c.length;d++){for(var e=c[d].previousSibling;e&&e.nodeType==Node.TEXT_NODE&&0===e.textContent.length;)e=e.previousSibling;if("LI"!=c[d].tagName||e)return g(a,!1),!0;g(a,!0)}}function f(c){if(b.node.hasClass(c.get(0),"fr-no-refresh"))return!1;for(var d=b.selection.blocks(),e=0;e<d.length;e++){var f="rtl"==b.opts.direction||"rtl"==a(d[e]).css("direction")?"margin-right":"margin-left";if("LI"==d[e].tagName||"LI"==d[e].parentNode.tagName)return g(c,!1),!0;if(b.helpers.getPX(a(d[e]).css(f))>0)return g(c,!1),!0}g(c,!0)}function g(a,b){a.toggleClass("fr-disabled",b).attr("aria-disabled",b)}return{undo:c,redo:d,outdent:f,indent:e}},a.extend(a.FE.DEFAULTS,{editInPopup:!1}),a.FE.MODULES.textEdit=function(a){function b(){var b='<div id="fr-text-edit-'+a.id+'" class="fr-layer fr-text-edit-layer"><div class="fr-input-line"><input type="text" placeholder="'+a.language.translate("Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="updateText" tabIndex="2">'+a.language.translate("Update")+"</button></div></div>",c={edit:b};a.popups.create("text.edit",c)}function c(){var b,c=a.popups.get("text.edit");b="INPUT"===a.$el.prop("tagName")?a.$el.attr("placeholder"):a.$el.text(),c.find("input").val(b).trigger("change"),a.popups.setContainer("text.edit",a.$sc),a.popups.show("text.edit",a.$el.offset().left+a.$el.outerWidth()/2,a.$el.offset().top+a.$el.outerHeight(),a.$el.outerHeight())}function d(){a.events.$on(a.$el,a._mouseup,function(){setTimeout(function(){c()},10)})}function e(){var b=a.popups.get("text.edit"),c=b.find("input").val();0===c.length&&(c=a.opts.placeholderText),"INPUT"===a.$el.prop("tagName")?a.$el.attr("placeholder",c):a.$el.text(c),a.events.trigger("contentChanged"),a.popups.hide("text.edit")}function f(){a.opts.editInPopup&&(b(),d())}return{_init:f,update:e}},a.FE.RegisterCommand("updateText",{focus:!1,undo:!1,callback:function(){this.textEdit.update()}}),a.extend(a.FE.DEFAULTS,{toolbarBottom:!1,toolbarButtons:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","|","fontFamily","fontSize","color","inlineStyle","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","-","insertLink","insertImage","insertVideo","insertFile","insertTable","|","emoticons","specialCharacters","insertHR","selectAll","clearFormatting","|","print","spellChecker","help","html","|","undo","redo"],toolbarButtonsXS:["bold","italic","fontFamily","fontSize","|","undo","redo"],toolbarButtonsSM:["bold","italic","underline","|","fontFamily","fontSize","insertLink","insertImage","table","|","undo","redo"],toolbarButtonsMD:null,toolbarContainer:null,toolbarInline:!1,toolbarSticky:!0,toolbarStickyOffset:0,toolbarVisibleWithoutSelection:!1}),a.FE.MODULES.toolbar=function(b){function c(a,b){for(var c=0;c<b.length;c++)"-"!=b[c]&&"|"!=b[c]&&a.indexOf(b[c])<0&&a.push(b[c])}function d(){var d=a.merge([],e());c(d,b.opts.toolbarButtonsXS||[]),c(d,b.opts.toolbarButtonsSM||[]),c(d,b.opts.toolbarButtonsMD||[]),c(d,b.opts.toolbarButtons);for(var f=d.length-1;f>=0;f--)"-"!=d[f]&&"|"!=d[f]&&d.indexOf(d[f])<f&&d.splice(f,1);var g=b.button.buildList(d,e());b.$tb.append(g),b.button.bindCommands(b.$tb)}function e(){var a=b.helpers.screenSize();return v[a]}function f(){var a=e();b.$tb.find(".fr-separator").remove(),b.$tb.find("> .fr-command").addClass("fr-hidden");for(var c=0;c<a.length;c++)if("|"==a[c]||"-"==a[c])b.$tb.append(b.button.buildList([a[c]]));else{var d=b.$tb.find('> .fr-command[data-cmd="'+a[c]+'"]'),f=null;b.node.hasClass(d.next().get(0),"fr-dropdown-menu")&&(f=d.next()),d.removeClass("fr-hidden").appendTo(b.$tb),f&&f.appendTo(b.$tb)}}function g(){b.events.$on(a(b.o_win),"resize",f),b.events.$on(a(b.o_win),"orientationchange",f)}function h(c,d){setTimeout(function(){if((!c||c.which!=a.FE.KEYCODE.ESC)&&b.selection.inEditor()&&b.core.hasFocus()&&!b.popups.areVisible()&&(b.opts.toolbarVisibleWithoutSelection||!b.selection.isCollapsed()&&!b.keys.isIME()||d)){if(b.$tb.data("instance",b),!1===b.events.trigger("toolbar.show",[c]))return!1;b.$tb.show(),b.opts.toolbarContainer||b.position.forSelection(b.$tb),b.opts.zIndex>1?b.$tb.css("z-index",b.opts.zIndex+1):b.$tb.css("z-index",null)}},0)}function i(a){return!(!a||"keydown"!==a.type||!b.keys.ctrlKey(a))||(!!b.button.getButtons(".fr-dropdown.fr-active").next().find(b.o_doc.activeElement).length||void(!1!==b.events.trigger("toolbar.hide")&&b.$tb.hide()))}function j(){if(!1===b.events.trigger("toolbar.show"))return!1;b.$tb.show()}function k(c){clearTimeout(w),c&&c.which==a.FE.KEYCODE.ESC||(w=setTimeout(h,b.opts.typingTimer))}function l(){b.events.on("window.mousedown",i),b.events.on("keydown",i),b.events.on("blur",i),b.events.on("window.mouseup",h),b.helpers.isMobile()?b.helpers.isIOS()||(b.events.on("window.touchend",h),b.browser.mozilla&&setInterval(h,200)):b.events.on("window.keyup",k),b.events.on("keydown",function(b){b&&b.which==a.FE.KEYCODE.ESC&&i()}),b.events.on("keydown",function(b){if(b.which==a.FE.KEYCODE.ALT)return b.stopPropagation(),!1},!0),b.events.$on(b.$wp,"scroll.toolbar",h),b.events.on("commands.after",h),b.helpers.isMobile()&&(b.events.$on(b.$doc,"selectionchange",k),b.events.$on(b.$doc,"orientationchange",h))}function m(){b.opts.toolbarInline?(b.$sc.append(b.$tb),b.$tb.data("container",b.$sc),b.$tb.addClass("fr-inline"),b.$tb.prepend('<span class="fr-arrow"></span>'),l(),b.opts.toolbarBottom=!1):(b.opts.toolbarBottom&&!b.helpers.isIOS()?(b.$box.append(b.$tb),b.$tb.addClass("fr-bottom"),b.$box.addClass("fr-bottom")):(b.opts.toolbarBottom=!1,b.$box.prepend(b.$tb),b.$tb.addClass("fr-top"),b.$box.addClass("fr-top")),b.$tb.addClass("fr-basic"),b.opts.toolbarSticky&&(b.opts.toolbarStickyOffset&&(b.opts.toolbarBottom?b.$tb.css("bottom",b.opts.toolbarStickyOffset):b.$tb.css("top",b.opts.toolbarStickyOffset)),b.position.addSticky(b.$tb)))}function n(){b.$tb.html("").removeData().remove(),b.$tb=null}function o(){b.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"),b.$box.find(".fr-sticky-dummy").remove()}function p(){b.opts.theme&&b.$tb.addClass(b.opts.theme+"-theme"),b.opts.zIndex>1&&b.$tb.css("z-index",b.opts.zIndex+1),"auto"!=b.opts.direction&&b.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-"+b.opts.direction),b.helpers.isMobile()?b.$tb.addClass("fr-mobile"):b.$tb.addClass("fr-desktop"),b.opts.toolbarContainer?(b.opts.toolbarInline&&(l(),i()),b.opts.toolbarBottom?b.$tb.addClass("fr-bottom"):b.$tb.addClass("fr-top")):m(),t=b.$tb.get(0).ownerDocument,u="defaultView"in t?t.defaultView:t.parentWindow,d(),g(),b.accessibility.registerToolbar(b.$tb),b.helpers.isMobile()||b.events.$on(b.$tb,b._mousedown+" "+b._mouseup,function(a){var c=a.originalEvent?a.originalEvent.target||a.originalEvent.originalTarget:null;if(c&&"INPUT"!=c.tagName&&!b.edit.isDisabled())return a.stopPropagation(),a.preventDefault(),!1},!0)}function q(){if(b.$sc=a(b.opts.scrollableContainer).first(),!b.$wp)return!1;b.opts.toolbarContainer?(b.shared.$tb?(b.$tb=b.shared.$tb,b.opts.toolbarInline&&l()):(b.shared.$tb=a('<div class="fr-toolbar"></div>'),b.$tb=b.shared.$tb,a(b.opts.toolbarContainer).append(b.$tb),p(),b.$tb.data("instance",b)),b.opts.toolbarInline?b.$box.addClass("fr-inline"):b.$box.addClass("fr-basic"),b.events.on("focus",function(){b.$tb.data("instance",b)},!0),b.opts.toolbarInline=!1):b.opts.toolbarInline?(b.$box.addClass("fr-inline"),b.shared.$tb?(b.$tb=b.shared.$tb,l()):(b.shared.$tb=a('<div class="fr-toolbar"></div>'),b.$tb=b.shared.$tb,p())):(b.$box.addClass("fr-basic"),b.$tb=a('<div class="fr-toolbar"></div>'),p(),b.$tb.data("instance",b)),b.events.on("destroy",o,!0),b.events.on(b.opts.toolbarInline||b.opts.toolbarContainer?"shared.destroy":"destroy",n,!0)}function r(){!x&&b.$tb&&(b.$tb.find("> .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled",!0),x=!0)}function s(){x&&b.$tb&&(b.$tb.find("> .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled",!1),x=!1),b.button.bulkRefresh()}var t,u,v=[];v[a.FE.XS]=b.opts.toolbarButtonsXS||b.opts.toolbarButtons,v[a.FE.SM]=b.opts.toolbarButtonsSM||b.opts.toolbarButtons,v[a.FE.MD]=b.opts.toolbarButtonsMD||b.opts.toolbarButtons,v[a.FE.LG]=b.opts.toolbarButtons;var w=null,x=!1;return{_init:q,hide:i,show:j,showInline:h,disable:r,enable:s}},a.FE.PLUGINS.align=function(b){function c(c){b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore();for(var d=b.selection.blocks(),e=0;e<d.length;e++)b.helpers.getAlignment(a(d[e].parentNode))==c?a(d[e]).css("text-align","").removeClass("fr-temp-div"):a(d[e]).css("text-align",c).removeClass("fr-temp-div"),""===a(d[e]).attr("class")&&a(d[e]).removeAttr("class"),""===a(d[e]).attr("style")&&a(d[e]).removeAttr("style");b.selection.save(),b.html.unwrap(),b.selection.restore()}function d(c){var d=b.selection.blocks();if(d.length){var e=b.helpers.getAlignment(a(d[0]));c.find("> *:first").replaceWith(b.icon.create("align-"+e))}}function e(c,d){var e=b.selection.blocks();if(e.length){var f=b.helpers.getAlignment(a(e[0]));d.find('a.fr-command[data-param1="'+f+'"]').addClass("fr-active").attr("aria-selected",!0)}}return{apply:c,refresh:d,refreshOnShow:e}},a.FE.DefineIcon("align",{NAME:"align-left"}),a.FE.DefineIcon("align-left",{NAME:"align-left"}),a.FE.DefineIcon("align-right",{NAME:"align-right"}),a.FE.DefineIcon("align-center",{NAME:"align-center"}),a.FE.DefineIcon("align-justify",{NAME:"align-justify"}),a.FE.RegisterCommand("align",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.align.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="align" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.icon.create("align-"+d)+'<span class="fr-sr-only">'+this.language.translate(c[d])+"</span></a></li>");return b+="</ul>"},callback:function(a,b){this.align.apply(b)},refresh:function(a){this.align.refresh(a)},refreshOnShow:function(a,b){this.align.refreshOnShow(a,b)},plugin:"align"}),a.extend(a.FE.DEFAULTS,{charCounterMax:-1,charCounterCount:!0}),a.FE.PLUGINS.charCounter=function(b){function c(){return b.el.textContent.length}function d(d){if(b.opts.charCounterMax<0)return!0;if(c()<b.opts.charCounterMax)return!0;var e=d.which;return!(!b.keys.ctrlKey(d)&&b.keys.isCharacter(e)||e===a.FE.KEYCODE.IME)||(d.preventDefault(),d.stopPropagation(),b.events.trigger("charCounter.exceeded"),!1)}function e(d){return b.opts.charCounterMax<0?d:a("<div>").html(d).text().length+c()<=b.opts.charCounterMax?d:(b.events.trigger("charCounter.exceeded"),"")}
function f(){if(b.opts.charCounterCount){var a=c()+(b.opts.charCounterMax>0?"/"+b.opts.charCounterMax:"");h.text(a),b.opts.toolbarBottom&&h.css("margin-bottom",b.$tb.outerHeight(!0));var d=b.$wp.get(0).offsetWidth-b.$wp.get(0).clientWidth;d>=0&&("rtl"==b.opts.direction?h.css("margin-left",d):h.css("margin-right",d))}}function g(){return!!b.$wp&&(!!b.opts.charCounterCount&&(h=a('<span class="fr-counter"></span>'),h.css("bottom",b.$wp.css("border-bottom-width")),b.$box.append(h),b.events.on("keydown",d,!0),b.events.on("paste.afterCleanup",e),b.events.on("keyup contentChanged input",function(){b.events.trigger("charCounter.update")}),b.events.on("charCounter.update",f),b.events.trigger("charCounter.update"),void b.events.on("destroy",function(){a(b.o_win).off("resize.char"+b.id),h.removeData().remove(),h=null})))}var h;return{_init:g,count:c}},a.FE.PLUGINS.codeBeautifier=function(){function a(a,c){function d(a){return a.replace(/^\s+/g,"")}function e(a){return a.replace(/\s+$/g,"")}function g(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.newlines=0,this.indent_content=i,this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,source,!doctype,basefont,base,area,hr,wbr,param,img,isindex,embed".split(","),extra_liners:u,in_array:function(a,b){for(var c=0;c<b.length;c++)if(a==b[c])return!0;return!1}},this.is_whitespace=function(a){for(var b=0;b<a.length;a++)if(!this.Utils.in_array(a.charAt(b),this.Utils.whitespace))return!1;return!0},this.traverse_whitespace=function(){var a="";if(a=this.input.charAt(this.pos),this.Utils.in_array(a,this.Utils.whitespace)){for(this.newlines=0;this.Utils.in_array(a,this.Utils.whitespace);)o&&"\n"==a&&this.newlines<=p&&(this.newlines+=1),this.pos++,a=this.input.charAt(this.pos);return!0}return!1},this.space_or_wrap=function(a){this.line_char_count>=this.wrap_line_length?(this.print_newline(!1,a),this.print_indentation(a)):(this.line_char_count++,a.push(" "))},this.get_content=function(){for(var a="",b=[];"<"!=this.input.charAt(this.pos);){if(this.pos>=this.input.length)return b.length?b.join(""):["","TK_EOF"];if(this.traverse_whitespace())this.space_or_wrap(b);else{if(q){var c=this.input.substr(this.pos,3);if("{{#"==c||"{{/"==c)break;if("{{!"==c)return[this.get_tag(),"TK_TAG_HANDLEBARS_COMMENT"];if("{{"==this.input.substr(this.pos,2)&&"{{else}}"==this.get_tag(!0))break}a=this.input.charAt(this.pos),this.pos++,this.line_char_count++,b.push(a)}}return b.length?b.join(""):""},this.get_contents_to=function(a){if(this.pos==this.input.length)return["","TK_EOF"];var b="",c=new RegExp("</"+a+"\\s*>","igm");c.lastIndex=this.pos;var d=c.exec(this.input),e=d?d.index:this.input.length;return this.pos<e&&(b=this.input.substring(this.pos,e),this.pos=e),b},this.record_tag=function(a){this.tags[a+"count"]?(this.tags[a+"count"]++,this.tags[a+this.tags[a+"count"]]=this.indent_level):(this.tags[a+"count"]=1,this.tags[a+this.tags[a+"count"]]=this.indent_level),this.tags[a+this.tags[a+"count"]+"parent"]=this.tags.parent,this.tags.parent=a+this.tags[a+"count"]},this.retrieve_tag=function(a){if(this.tags[a+"count"]){for(var b=this.tags.parent;b&&a+this.tags[a+"count"]!=b;)b=this.tags[b+"parent"];b&&(this.indent_level=this.tags[a+this.tags[a+"count"]],this.tags.parent=this.tags[b+"parent"]),delete this.tags[a+this.tags[a+"count"]+"parent"],delete this.tags[a+this.tags[a+"count"]],1==this.tags[a+"count"]?delete this.tags[a+"count"]:this.tags[a+"count"]--}},this.indent_to_tag=function(a){if(this.tags[a+"count"]){for(var b=this.tags.parent;b&&a+this.tags[a+"count"]!=b;)b=this.tags[b+"parent"];b&&(this.indent_level=this.tags[a+this.tags[a+"count"]])}},this.get_tag=function(a){var b,c,d="",e=[],f="",g=!1,h=!0,i=this.pos,j=this.line_char_count;a=void 0!==a&&a;do{if(this.pos>=this.input.length)return a&&(this.pos=i,this.line_char_count=j),e.length?e.join(""):["","TK_EOF"];if(d=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(d,this.Utils.whitespace))g=!0;else{if("'"!=d&&'"'!=d||(d+=this.get_unformatted(d),g=!0),"="==d&&(g=!1),e.length&&"="!=e[e.length-1]&&">"!=d&&g){if(this.space_or_wrap(e),g=!1,!h&&"force"==r&&"/"!=d){this.print_newline(!0,e),this.print_indentation(e);for(var l=0;l<s;l++)e.push(k)}for(var m=0;m<e.length;m++)if(" "==e[m]){h=!1;break}}if(q&&"<"==c&&d+this.input.charAt(this.pos)=="{{"&&(d+=this.get_unformatted("}}"),e.length&&" "!=e[e.length-1]&&"<"!=e[e.length-1]&&(d=" "+d),g=!0),"<"!=d||c||(b=this.pos-1,c="<"),q&&!c&&e.length>=2&&"{"==e[e.length-1]&&"{"==e[e.length-2]&&(b="#"==d||"/"==d||"!"==d?this.pos-3:this.pos-2,c="{"),this.line_char_count++,e.push(d),e[1]&&("!"==e[1]||"?"==e[1]||"%"==e[1])){e=[this.get_comment(b)];break}if(q&&e[1]&&"{"==e[1]&&e[2]&&"!"==e[2]){e=[this.get_comment(b)];break}if(q&&"{"==c&&e.length>2&&"}"==e[e.length-2]&&"}"==e[e.length-1])break}}while(">"!=d);var o,p,t=e.join("");o=-1!=t.indexOf(" ")?t.indexOf(" "):"{"==t[0]?t.indexOf("}"):t.indexOf(">"),p="<"!=t[0]&&q?"#"==t[2]?3:2:1;var u=t.substring(p,o).toLowerCase();return"/"==t.charAt(t.length-2)||this.Utils.in_array(u,this.Utils.single_token)?a||(this.tag_type="SINGLE"):q&&"{"==t[0]&&"else"==u?a||(this.indent_to_tag("if"),this.tag_type="HANDLEBARS_ELSE",this.indent_content=!0,this.traverse_whitespace()):this.is_unformatted(u,n)?(f=this.get_unformatted("</"+u+">",t),e.push(f),this.pos-1,this.tag_type="SINGLE"):"script"==u&&(-1==t.search("type")||t.search("type")>-1&&t.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/)>-1)?a||(this.record_tag(u),this.tag_type="SCRIPT"):"style"==u&&(-1==t.search("type")||t.search("type")>-1&&t.search("text/css")>-1)?a||(this.record_tag(u),this.tag_type="STYLE"):"!"==u.charAt(0)?a||(this.tag_type="SINGLE",this.traverse_whitespace()):a||("/"==u.charAt(0)?(this.retrieve_tag(u.substring(1)),this.tag_type="END"):(this.record_tag(u),"html"!=u.toLowerCase()&&(this.indent_content=!0),this.tag_type="START"),this.traverse_whitespace()&&this.space_or_wrap(e),this.Utils.in_array(u,this.Utils.extra_liners)&&(this.print_newline(!1,this.output),this.output.length&&"\n"!=this.output[this.output.length-2]&&this.print_newline(!0,this.output))),a&&(this.pos=i,this.line_char_count=j),e.join("")},this.get_comment=function(a){var b="",c=">",d=!1;this.pos=a;var e=this.input.charAt(this.pos);for(this.pos++;this.pos<=this.input.length&&(b+=e,b[b.length-1]!=c[c.length-1]||-1==b.indexOf(c));)!d&&b.length<10&&(0===b.indexOf("<![if")?(c="<![endif]>",d=!0):0===b.indexOf("<![cdata[")?(c="]]>",d=!0):0===b.indexOf("<![")?(c="]>",d=!0):0===b.indexOf("\x3c!--")?(c="--\x3e",d=!0):0===b.indexOf("{{!")?(c="}}",d=!0):0===b.indexOf("<?")?(c="?>",d=!0):0===b.indexOf("<%")&&(c="%>",d=!0)),e=this.input.charAt(this.pos),this.pos++;return b},this.get_unformatted=function(a,b){if(b&&-1!=b.toLowerCase().indexOf(a))return"";var c="",d="",e=0,f=!0;do{if(this.pos>=this.input.length)return d;if(c=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(c,this.Utils.whitespace)){if(!f){this.line_char_count--;continue}if("\n"==c||"\r"==c){d+="\n",this.line_char_count=0;continue}}d+=c,this.line_char_count++,f=!0,q&&"{"==c&&d.length&&"{"==d[d.length-2]&&(d+=this.get_unformatted("}}"),e=d.length)}while(-1==d.toLowerCase().indexOf(a,e));return d},this.get_token=function(){var a;if("TK_TAG_SCRIPT"==this.last_token||"TK_TAG_STYLE"==this.last_token){var b=this.last_token.substr(7);return a=this.get_contents_to(b),"string"!=typeof a?a:[a,"TK_"+b]}if("CONTENT"==this.current_mode)return a=this.get_content(),"string"!=typeof a?a:[a,"TK_CONTENT"];if("TAG"==this.current_mode){if("string"!=typeof(a=this.get_tag()))return a;return[a,"TK_TAG_"+this.tag_type]}},this.get_full_indent=function(a){return a=this.indent_level+a||0,a<1?"":new Array(a+1).join(this.indent_string)},this.is_unformatted=function(a,b){if(!this.Utils.in_array(a,b))return!1;if("a"!=a.toLowerCase()||!this.Utils.in_array("a",b))return!0;var c=this.get_tag(!0),d=(c||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);return!(d&&!this.Utils.in_array(d,b))},this.printer=function(a,b,c,f,g){this.input=a||"",this.output=[],this.indent_character=b,this.indent_string="",this.indent_size=c,this.brace_style=g,this.indent_level=0,this.wrap_line_length=f,this.line_char_count=0;for(var h=0;h<this.indent_size;h++)this.indent_string+=this.indent_character;this.print_newline=function(a,b){this.line_char_count=0,b&&b.length&&(a||"\n"!=b[b.length-1])&&("\n"!=b[b.length-1]&&(b[b.length-1]=e(b[b.length-1])),b.push("\n"))},this.print_indentation=function(a){for(var b=0;b<this.indent_level;b++)a.push(this.indent_string),this.line_char_count+=this.indent_string.length},this.print_token=function(a){this.is_whitespace(a)&&!this.output.length||((a||""!==a)&&this.output.length&&"\n"==this.output[this.output.length-1]&&(this.print_indentation(this.output),a=d(a)),this.print_token_raw(a))},this.print_token_raw=function(a){this.newlines>0&&(a=e(a)),a&&""!==a&&(a.length>1&&"\n"==a[a.length-1]?(this.output.push(a.slice(0,-1)),this.print_newline(!1,this.output)):this.output.push(a));for(var b=0;b<this.newlines;b++)this.print_newline(b>0,this.output);this.newlines=0},this.indent=function(){this.indent_level++},this.unindent=function(){this.indent_level>0&&this.indent_level--}},this}var h,i,j,k,l,m,n,o,p,q,r,s,t,u;for(c=c||{},void 0!==c.wrap_line_length&&0!==parseInt(c.wrap_line_length,10)||void 0===c.max_char||0===parseInt(c.max_char,10)||(c.wrap_line_length=c.max_char),i=void 0!==c.indent_inner_html&&c.indent_inner_html,j=void 0===c.indent_size?4:parseInt(c.indent_size,10),k=void 0===c.indent_char?" ":c.indent_char,m=void 0===c.brace_style?"collapse":c.brace_style,l=0===parseInt(c.wrap_line_length,10)?32786:parseInt(c.wrap_line_length||250,10),n=c.unformatted||["a","span","img","bdo","em","strong","dfn","code","samp","kbd","var","cite","abbr","acronym","q","sub","sup","tt","i","b","big","small","u","s","strike","font","ins","del","address","pre"],o=void 0===c.preserve_newlines||c.preserve_newlines,p=o?isNaN(parseInt(c.max_preserve_newlines,10))?32786:parseInt(c.max_preserve_newlines,10):0,q=void 0!==c.indent_handlebars&&c.indent_handlebars,r=void 0===c.wrap_attributes?"auto":c.wrap_attributes,s=void 0===c.wrap_attributes_indent_size?j:parseInt(c.wrap_attributes_indent_size,10)||j,t=void 0!==c.end_with_newline&&c.end_with_newline,u=Array.isArray(c.extra_liners)?c.extra_liners.concat():"string"==typeof c.extra_liners?c.extra_liners.split(","):"head,body,/html".split(","),c.indent_with_tabs&&(k="\t",j=1),h=new g,h.printer(a,k,j,l,m);;){var v=h.get_token();if(h.token_text=v[0],h.token_type=v[1],"TK_EOF"==h.token_type)break;switch(h.token_type){case"TK_TAG_START":h.print_newline(!1,h.output),h.print_token(h.token_text),h.indent_content&&(h.indent(),h.indent_content=!1),h.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":h.print_newline(!1,h.output),h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_END":if("TK_CONTENT"==h.last_token&&""===h.last_text){var w=h.token_text.match(/\w+/)[0],x=null;h.output.length&&(x=h.output[h.output.length-1].match(/(?:<|{{#)\s*(\w+)/)),(null==x||x[1]!=w&&!h.Utils.in_array(x[1],n))&&h.print_newline(!1,h.output)}h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var y=h.token_text.match(/^\s*<([a-z-]+)/i);y&&h.Utils.in_array(y[1],n)||h.print_newline(!1,h.output),h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_ELSE":h.print_token(h.token_text),h.indent_content&&(h.indent(),h.indent_content=!1),h.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_COMMENT":case"TK_CONTENT":h.print_token(h.token_text),h.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(""!==h.token_text){h.print_newline(!1,h.output);var z,A=h.token_text,B=1;"TK_SCRIPT"==h.token_type?z="function"==typeof f&&f:"TK_STYLE"==h.token_type&&(z="function"==typeof b&&b),"keep"==c.indent_scripts?B=0:"separate"==c.indent_scripts&&(B=-h.indent_level);var C=h.get_full_indent(B);if(z)A=z(A.replace(/^\s*/,C),c);else{var D=A.match(/^\s*/)[0],E=D.match(/[^\n\r]*$/)[0].split(h.indent_string).length-1,F=h.get_full_indent(B-E);A=A.replace(/^\s*/,C).replace(/\r\n|\r|\n/g,"\n"+F).replace(/\s+$/,"")}A&&(h.print_token_raw(A),h.print_newline(!0,h.output))}h.current_mode="TAG";break;default:""!==h.token_text&&h.print_token(h.token_text)}h.last_token=h.token_type,h.last_text=h.token_text}var G=h.output.join("").replace(/[\r\n\t ]+$/,"");return t&&(G+="\n"),G}function b(a,b){function c(){return(v=a.charAt(++x))||""}function d(b){var d="",e=x;return b&&g(),d=a.charAt(x+1)||"",x=e-1,c(),d}function e(b){for(var d=x;c();)if("\\"===v)c();else{if(-1!==b.indexOf(v))break;if("\n"===v)break}return a.substring(d,x+1)}function f(a){var b=x,d=e(a);return x=b-1,c(),d}function g(){for(var a="";w.test(d());)c(),a+=v;return a}function h(){var a="";for(v&&w.test(v)&&(a=v);w.test(c());)a+=v;return a}function i(b){var e=x;for(b="/"===d(),c();c();){if(!b&&"*"===v&&"/"===d()){c();break}if(b&&"\n"===v)return a.substring(e,x)}return a.substring(e,x)+v}function j(b){return a.substring(x-b.length,x).toLowerCase()===b}function k(){for(var b=0,c=x+1;c<a.length;c++){var d=a.charAt(c);if("{"===d)return!0;if("("===d)b+=1;else if(")"===d){if(0==b)return!1;b-=1}else if(";"===d||"}"===d)return!1}return!1}function l(){B++,z+=A}function m(){B--,z=z.slice(0,-p)}var n={"@page":!0,"@font-face":!0,"@keyframes":!0,"@media":!0,"@supports":!0,"@document":!0},o={"@media":!0,"@supports":!0,"@document":!0};b=b||{},a=a||"",a=a.replace(/\r\n|[\r\u2028\u2029]/g,"\n");var p=b.indent_size||4,q=b.indent_char||" ",r=void 0===b.selector_separator_newline||b.selector_separator_newline,s=void 0!==b.end_with_newline&&b.end_with_newline,t=void 0===b.newline_between_rules||b.newline_between_rules,u=b.eol?b.eol:"\n";"string"==typeof p&&(p=parseInt(p,10)),b.indent_with_tabs&&(q="\t",p=1),u=u.replace(/\\r/,"\r").replace(/\\n/,"\n");var v,w=/^\s+$/,x=-1,y=0,z=a.match(/^[\t ]*/)[0],A=new Array(p+1).join(q),B=0,C=0,D={};D["{"]=function(a){D.singleSpace(),E.push(a),D.newLine()},D["}"]=function(a){D.newLine(),E.push(a),D.newLine()},D._lastCharWhitespace=function(){return w.test(E[E.length-1])},D.newLine=function(a){E.length&&(a||"\n"===E[E.length-1]||D.trim(),E.push("\n"),z&&E.push(z))},D.singleSpace=function(){E.length&&!D._lastCharWhitespace()&&E.push(" ")},D.preserveSingleSpace=function(){L&&D.singleSpace()},D.trim=function(){for(;D._lastCharWhitespace();)E.pop()};for(var E=[],F=!1,G=!1,H=!1,I="",J="";;){var K=h(),L=""!==K,M=-1!==K.indexOf("\n");if(J=I,I=v,!v)break;if("/"===v&&"*"===d()){var N=0===B;(M||N)&&D.newLine(),E.push(i()),D.newLine(),N&&D.newLine(!0)}else if("/"===v&&"/"===d())M||"{"===J||D.trim(),D.singleSpace(),E.push(i()),D.newLine();else if("@"===v){D.preserveSingleSpace(),E.push(v);var O=f(": ,;{}()[]/='\"");O.match(/[ :]$/)&&(c(),O=e(": ").replace(/\s$/,""),E.push(O),D.singleSpace()),O=O.replace(/\s$/,""),O in n&&(C+=1,O in o&&(H=!0))}else"#"===v&&"{"===d()?(D.preserveSingleSpace(),E.push(e("}"))):"{"===v?"}"===d(!0)?(g(),c(),D.singleSpace(),E.push("{}"),D.newLine(),t&&0===B&&D.newLine(!0)):(l(),D["{"](v),H?(H=!1,F=B>C):F=B>=C):"}"===v?(m(),D["}"](v),F=!1,G=!1,C&&C--,t&&0===B&&D.newLine(!0)):":"===v?(g(),!F&&!H||j("&")||k()?":"===d()?(c(),E.push("::")):E.push(":"):(G=!0,E.push(":"),D.singleSpace())):'"'===v||"'"===v?(D.preserveSingleSpace(),E.push(e(v))):";"===v?(G=!1,E.push(v),D.newLine()):"("===v?j("url")?(E.push(v),g(),c()&&(")"!==v&&'"'!==v&&"'"!==v?E.push(e(")")):x--)):(y++,D.preserveSingleSpace(),E.push(v),g()):")"===v?(E.push(v),y--):","===v?(E.push(v),g(),r&&!G&&y<1?D.newLine():D.singleSpace()):"]"===v?E.push(v):"["===v?(D.preserveSingleSpace(),E.push(v)):"="===v?(g(),v="=",E.push(v)):(D.preserveSingleSpace(),E.push(v))}var P="";return z&&(P+=z),P+=E.join("").replace(/[\r\n\t ]+$/,""),s&&(P+="\n"),"\n"!=u&&(P=P.replace(/[\n]/g,u)),P}function c(a,b){for(var c=0;c<b.length;c+=1)if(b[c]===a)return!0;return!1}function d(a){return a.replace(/^\s+|\s+$/g,"")}function e(a){return a.replace(/^\s+/g,"")}function f(a,b){return new g(a,b).beautify()}function g(a,b){function f(a,b){var c=0;return a&&(c=a.indentation_level,!R.just_added_newline()&&a.line_indent_level>c&&(c=a.line_indent_level)),{mode:b,parent:a,last_text:a?a.last_text:"",last_word:a?a.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:c,line_indent_level:a?a.line_indent_level:c,start_line_index:R.get_line_number(),ternary_depth:0}}function g(a){var b=a.newlines;if(ba.keep_array_indentation&&t(Y.mode))for(c=0;c<b;c+=1)n(c>0);else if(ba.max_preserve_newlines&&b>ba.max_preserve_newlines&&(b=ba.max_preserve_newlines),ba.preserve_newlines&&a.newlines>1){n();for(var c=1;c<b;c+=1)n(!0)}U=a,aa[U.type]()}function h(a){a=a.replace(/\x0d/g,"");for(var b=[],c=a.indexOf("\n");-1!==c;)b.push(a.substring(0,c)),a=a.substring(c+1),c=a.indexOf("\n");return a.length&&b.push(a),b}function m(a){if(a=void 0!==a&&a,!R.just_added_newline())if(ba.preserve_newlines&&U.wanted_newline||a)n(!1,!0);else if(ba.wrap_line_length){var b=R.current_line.get_character_count()+U.text.length+(R.space_before_token?1:0);b>=ba.wrap_line_length&&n(!1,!0)}}function n(a,b){if(!b&&";"!==Y.last_text&&","!==Y.last_text&&"="!==Y.last_text&&"TK_OPERATOR"!==V)for(;Y.mode===l.Statement&&!Y.if_block&&!Y.do_block;)v();R.add_new_line(a)&&(Y.multiline_frame=!0)}function o(){R.just_added_newline()&&(ba.keep_array_indentation&&t(Y.mode)&&U.wanted_newline?(R.current_line.push(U.whitespace_before),R.space_before_token=!1):R.set_indent(Y.indentation_level)&&(Y.line_indent_level=Y.indentation_level))}function p(a){if(R.raw)return void R.add_raw_token(U);ba.comma_first&&"TK_COMMA"===V&&R.just_added_newline()&&","===R.previous_line.last()&&(R.previous_line.pop(),o(),R.add_token(","),R.space_before_token=!0),a=a||U.text,o(),R.add_token(a)}function q(){Y.indentation_level+=1}function r(){Y.indentation_level>0&&(!Y.parent||Y.indentation_level>Y.parent.indentation_level)&&(Y.indentation_level-=1)}function s(a){Y?($.push(Y),Z=Y):Z=f(null,a),Y=f(Z,a)}function t(a){return a===l.ArrayLiteral}function u(a){return c(a,[l.Expression,l.ForInitializer,l.Conditional])}function v(){$.length>0&&(Z=Y,Y=$.pop(),Z.mode===l.Statement&&R.remove_redundant_indentation(Z))}function w(){return Y.parent.mode===l.ObjectLiteral&&Y.mode===l.Statement&&(":"===Y.last_text&&0===Y.ternary_depth||"TK_RESERVED"===V&&c(Y.last_text,["get","set"]))}function x(){return!!("TK_RESERVED"===V&&c(Y.last_text,["var","let","const"])&&"TK_WORD"===U.type||"TK_RESERVED"===V&&"do"===Y.last_text||"TK_RESERVED"===V&&"return"===Y.last_text&&!U.wanted_newline||"TK_RESERVED"===V&&"else"===Y.last_text&&("TK_RESERVED"!==U.type||"if"!==U.text)||"TK_END_EXPR"===V&&(Z.mode===l.ForInitializer||Z.mode===l.Conditional)||"TK_WORD"===V&&Y.mode===l.BlockStatement&&!Y.in_case&&"--"!==U.text&&"++"!==U.text&&"function"!==W&&"TK_WORD"!==U.type&&"TK_RESERVED"!==U.type||Y.mode===l.ObjectLiteral&&(":"===Y.last_text&&0===Y.ternary_depth||"TK_RESERVED"===V&&c(Y.last_text,["get","set"])))&&(s(l.Statement),q(),"TK_RESERVED"===V&&c(Y.last_text,["var","let","const"])&&"TK_WORD"===U.type&&(Y.declaration_statement=!0),w()||m("TK_RESERVED"===U.type&&c(U.text,["do","for","if","while"])),!0)}function y(a,b){for(var c=0;c<a.length;c++){if(d(a[c]).charAt(0)!==b)return!1}return!0}function z(a,b){for(var c,d=0,e=a.length;d<e;d++)if((c=a[d])&&0!==c.indexOf(b))return!1;return!0}function A(a){return c(a,["case","return","do","if","throw","else"])}function B(a){var b=S+(a||0);return b<0||b>=ca.length?null:ca[b]}function C(){x();var a=l.Expression;if("["===U.text){if("TK_WORD"===V||")"===Y.last_text)return"TK_RESERVED"===V&&c(Y.last_text,T.line_starters)&&(R.space_before_token=!0),s(a),p(),q(),void(ba.space_in_paren&&(R.space_before_token=!0));a=l.ArrayLiteral,t(Y.mode)&&("["!==Y.last_text&&(","!==Y.last_text||"]"!==W&&"}"!==W)||ba.keep_array_indentation||n())}else"TK_RESERVED"===V&&"for"===Y.last_text?a=l.ForInitializer:"TK_RESERVED"===V&&c(Y.last_text,["if","while"])&&(a=l.Conditional);";"===Y.last_text||"TK_START_BLOCK"===V?n():"TK_END_EXPR"===V||"TK_START_EXPR"===V||"TK_END_BLOCK"===V||"."===Y.last_text?m(U.wanted_newline):"TK_RESERVED"===V&&"("===U.text||"TK_WORD"===V||"TK_OPERATOR"===V?"TK_RESERVED"===V&&("function"===Y.last_word||"typeof"===Y.last_word)||"*"===Y.last_text&&"function"===W?ba.space_after_anon_function&&(R.space_before_token=!0):"TK_RESERVED"!==V||!c(Y.last_text,T.line_starters)&&"catch"!==Y.last_text||ba.space_before_conditional&&(R.space_before_token=!0):R.space_before_token=!0,"("===U.text&&"TK_RESERVED"===V&&"await"===Y.last_word&&(R.space_before_token=!0),"("===U.text&&("TK_EQUALS"!==V&&"TK_OPERATOR"!==V||w()||m()),s(a),p(),ba.space_in_paren&&(R.space_before_token=!0),q()}function D(){for(;Y.mode===l.Statement;)v();Y.multiline_frame&&m("]"===U.text&&t(Y.mode)&&!ba.keep_array_indentation),ba.space_in_paren&&("TK_START_EXPR"!==V||ba.space_in_empty_paren?R.space_before_token=!0:(R.trim(),R.space_before_token=!1)),"]"===U.text&&ba.keep_array_indentation?(p(),v()):(v(),p()),R.remove_redundant_indentation(Z),Y.do_while&&Z.mode===l.Conditional&&(Z.mode=l.Expression,Y.do_block=!1,Y.do_while=!1)}function E(){var a=B(1),b=B(2);s(b&&(":"===b.text&&c(a.type,["TK_STRING","TK_WORD","TK_RESERVED"])||c(a.text,["get","set"])&&c(b.type,["TK_WORD","TK_RESERVED"]))?c(W,["class","interface"])?l.BlockStatement:l.ObjectLiteral:l.BlockStatement);var d=!a.comments_before.length&&"}"===a.text,e=d&&"function"===Y.last_word&&"TK_END_EXPR"===V;"expand"===ba.brace_style||"none"===ba.brace_style&&U.wanted_newline?"TK_OPERATOR"!==V&&(e||"TK_EQUALS"===V||"TK_RESERVED"===V&&A(Y.last_text)&&"else"!==Y.last_text)?R.space_before_token=!0:n(!1,!0):"TK_OPERATOR"!==V&&"TK_START_EXPR"!==V?"TK_START_BLOCK"===V?n():R.space_before_token=!0:t(Z.mode)&&","===Y.last_text&&("}"===W?R.space_before_token=!0:n()),p(),q()}function F(){for(;Y.mode===l.Statement;)v();var a="TK_START_BLOCK"===V;"expand"===ba.brace_style?a||n():a||(t(Y.mode)&&ba.keep_array_indentation?(ba.keep_array_indentation=!1,n(),ba.keep_array_indentation=!0):n()),v(),p()}function G(){if("TK_RESERVED"===U.type&&Y.mode!==l.ObjectLiteral&&c(U.text,["set","get"])&&(U.type="TK_WORD"),"TK_RESERVED"===U.type&&Y.mode===l.ObjectLiteral){":"==B(1).text&&(U.type="TK_WORD")}if(x()||!U.wanted_newline||u(Y.mode)||"TK_OPERATOR"===V&&"--"!==Y.last_text&&"++"!==Y.last_text||"TK_EQUALS"===V||!ba.preserve_newlines&&"TK_RESERVED"===V&&c(Y.last_text,["var","let","const","set","get"])||n(),Y.do_block&&!Y.do_while){if("TK_RESERVED"===U.type&&"while"===U.text)return R.space_before_token=!0,p(),R.space_before_token=!0,void(Y.do_while=!0);n(),Y.do_block=!1}if(Y.if_block)if(Y.else_block||"TK_RESERVED"!==U.type||"else"!==U.text){for(;Y.mode===l.Statement;)v();Y.if_block=!1,Y.else_block=!1}else Y.else_block=!0;if("TK_RESERVED"===U.type&&("case"===U.text||"default"===U.text&&Y.in_case_statement))return n(),(Y.case_body||ba.jslint_happy)&&(r(),Y.case_body=!1),p(),Y.in_case=!0,void(Y.in_case_statement=!0);if("TK_RESERVED"===U.type&&"function"===U.text&&((c(Y.last_text,["}",";"])||R.just_added_newline()&&!c(Y.last_text,["[","{",":","=",","]))&&(R.just_added_blankline()||U.comments_before.length||(n(),n(!0))),"TK_RESERVED"===V||"TK_WORD"===V?"TK_RESERVED"===V&&c(Y.last_text,["get","set","new","return","export","async"])?R.space_before_token=!0:"TK_RESERVED"===V&&"default"===Y.last_text&&"export"===W?R.space_before_token=!0:n():"TK_OPERATOR"===V||"="===Y.last_text?R.space_before_token=!0:(Y.multiline_frame||!u(Y.mode)&&!t(Y.mode))&&n()),"TK_COMMA"!==V&&"TK_START_EXPR"!==V&&"TK_EQUALS"!==V&&"TK_OPERATOR"!==V||w()||m(),"TK_RESERVED"===U.type&&c(U.text,["function","get","set"]))return p(),void(Y.last_word=U.text);if(_="NONE","TK_END_BLOCK"===V?"TK_RESERVED"===U.type&&c(U.text,["else","catch","finally"])?"expand"===ba.brace_style||"end-expand"===ba.brace_style||"none"===ba.brace_style&&U.wanted_newline?_="NEWLINE":(_="SPACE",R.space_before_token=!0):_="NEWLINE":"TK_SEMICOLON"===V&&Y.mode===l.BlockStatement?_="NEWLINE":"TK_SEMICOLON"===V&&u(Y.mode)?_="SPACE":"TK_STRING"===V?_="NEWLINE":"TK_RESERVED"===V||"TK_WORD"===V||"*"===Y.last_text&&"function"===W?_="SPACE":"TK_START_BLOCK"===V?_="NEWLINE":"TK_END_EXPR"===V&&(R.space_before_token=!0,_="NEWLINE"),"TK_RESERVED"===U.type&&c(U.text,T.line_starters)&&")"!==Y.last_text&&(_="else"===Y.last_text||"export"===Y.last_text?"SPACE":"NEWLINE"),"TK_RESERVED"===U.type&&c(U.text,["else","catch","finally"]))if("TK_END_BLOCK"!==V||"expand"===ba.brace_style||"end-expand"===ba.brace_style||"none"===ba.brace_style&&U.wanted_newline)n();else{R.trim(!0);var a=R.current_line;"}"!==a.last()&&n(),R.space_before_token=!0}else"NEWLINE"===_?"TK_RESERVED"===V&&A(Y.last_text)?R.space_before_token=!0:"TK_END_EXPR"!==V?"TK_START_EXPR"===V&&"TK_RESERVED"===U.type&&c(U.text,["var","let","const"])||":"===Y.last_text||("TK_RESERVED"===U.type&&"if"===U.text&&"else"===Y.last_text?R.space_before_token=!0:n()):"TK_RESERVED"===U.type&&c(U.text,T.line_starters)&&")"!==Y.last_text&&n():Y.multiline_frame&&t(Y.mode)&&","===Y.last_text&&"}"===W?n():"SPACE"===_&&(R.space_before_token=!0);p(),Y.last_word=U.text,"TK_RESERVED"===U.type&&"do"===U.text&&(Y.do_block=!0),"TK_RESERVED"===U.type&&"if"===U.text&&(Y.if_block=!0)}function H(){for(x()&&(R.space_before_token=!1);Y.mode===l.Statement&&!Y.if_block&&!Y.do_block;)v();p()}function I(){x()?R.space_before_token=!0:"TK_RESERVED"===V||"TK_WORD"===V?R.space_before_token=!0:"TK_COMMA"===V||"TK_START_EXPR"===V||"TK_EQUALS"===V||"TK_OPERATOR"===V?w()||m():n(),p()}function J(){x(),Y.declaration_statement&&(Y.declaration_assignment=!0),R.space_before_token=!0,p(),R.space_before_token=!0}function K(){if(Y.declaration_statement)return u(Y.parent.mode)&&(Y.declaration_assignment=!1),p(),void(Y.declaration_assignment?(Y.declaration_assignment=!1,n(!1,!0)):(R.space_before_token=!0,ba.comma_first&&m()));p(),Y.mode===l.ObjectLiteral||Y.mode===l.Statement&&Y.parent.mode===l.ObjectLiteral?(Y.mode===l.Statement&&v(),n()):(R.space_before_token=!0,ba.comma_first&&m())}function L(){if(x(),"TK_RESERVED"===V&&A(Y.last_text))return R.space_before_token=!0,void p();if("*"===U.text&&"TK_DOT"===V)return void p();if(":"===U.text&&Y.in_case)return Y.case_body=!0,q(),p(),n(),void(Y.in_case=!1);if("::"===U.text)return void p();"TK_OPERATOR"===V&&m();var a=!0,b=!0;c(U.text,["--","++","!","~"])||c(U.text,["-","+"])&&(c(V,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||c(Y.last_text,T.line_starters)||","===Y.last_text)?(a=!1,b=!1,!U.wanted_newline||"--"!==U.text&&"++"!==U.text||n(!1,!0),";"===Y.last_text&&u(Y.mode)&&(a=!0),"TK_RESERVED"===V?a=!0:"TK_END_EXPR"===V?a=!("]"===Y.last_text&&("--"===U.text||"++"===U.text)):"TK_OPERATOR"===V&&(a=c(U.text,["--","-","++","+"])&&c(Y.last_text,["--","-","++","+"]),c(U.text,["+","-"])&&c(Y.last_text,["--","++"])&&(b=!0)),Y.mode!==l.BlockStatement&&Y.mode!==l.Statement||"{"!==Y.last_text&&";"!==Y.last_text||n()):":"===U.text?0===Y.ternary_depth?a=!1:Y.ternary_depth-=1:"?"===U.text?Y.ternary_depth+=1:"*"===U.text&&"TK_RESERVED"===V&&"function"===Y.last_text&&(a=!1,b=!1),R.space_before_token=R.space_before_token||a,p(),R.space_before_token=b}function M(){if(R.raw)return R.add_raw_token(U),void(U.directives&&"end"===U.directives.preserve&&(ba.test_output_raw||(R.raw=!1)));if(U.directives)return n(!1,!0),p(),"start"===U.directives.preserve&&(R.raw=!0),void n(!1,!0);if(!k.newline.test(U.text)&&!U.wanted_newline)return R.space_before_token=!0,p(),void(R.space_before_token=!0);var a,b=h(U.text),c=!1,d=!1,f=U.whitespace_before,g=f.length;for(n(!1,!0),b.length>1&&(y(b.slice(1),"*")?c=!0:z(b.slice(1),f)&&(d=!0)),p(b[0]),a=1;a<b.length;a++)n(!1,!0),c?p(" "+e(b[a])):d&&b[a].length>g?p(b[a].substring(g)):R.add_token(b[a]);n(!1,!0)}function N(){U.wanted_newline?n(!1,!0):R.trim(!0),R.space_before_token=!0,p(),n(!1,!0)}function O(){x(),"TK_RESERVED"===V&&A(Y.last_text)?R.space_before_token=!0:m(")"===Y.last_text&&ba.break_chained_methods),p()}function P(){p(),"\n"===U.text[U.text.length-1]&&n()}function Q(){for(;Y.mode===l.Statement;)v()}var R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca=[],da="";for(aa={TK_START_EXPR:C,TK_END_EXPR:D,TK_START_BLOCK:E,TK_END_BLOCK:F,TK_WORD:G,TK_RESERVED:G,TK_SEMICOLON:H,TK_STRING:I,TK_EQUALS:J,TK_OPERATOR:L,TK_COMMA:K,TK_BLOCK_COMMENT:M,TK_COMMENT:N,TK_DOT:O,TK_UNKNOWN:P,TK_EOF:Q},b=b||{},ba={},void 0!==b.braces_on_own_line&&(ba.brace_style=b.braces_on_own_line?"expand":"collapse"),ba.brace_style=b.brace_style?b.brace_style:ba.brace_style?ba.brace_style:"collapse","expand-strict"===ba.brace_style&&(ba.brace_style="expand"),ba.indent_size=b.indent_size?parseInt(b.indent_size,10):4,ba.indent_char=b.indent_char?b.indent_char:" ",ba.eol=b.eol?b.eol:"\n",ba.preserve_newlines=void 0===b.preserve_newlines||b.preserve_newlines,ba.break_chained_methods=void 0!==b.break_chained_methods&&b.break_chained_methods,ba.max_preserve_newlines=void 0===b.max_preserve_newlines?0:parseInt(b.max_preserve_newlines,10),ba.space_in_paren=void 0!==b.space_in_paren&&b.space_in_paren,ba.space_in_empty_paren=void 0!==b.space_in_empty_paren&&b.space_in_empty_paren,ba.jslint_happy=void 0!==b.jslint_happy&&b.jslint_happy,ba.space_after_anon_function=void 0!==b.space_after_anon_function&&b.space_after_anon_function,ba.keep_array_indentation=void 0!==b.keep_array_indentation&&b.keep_array_indentation,ba.space_before_conditional=void 0===b.space_before_conditional||b.space_before_conditional,ba.unescape_strings=void 0!==b.unescape_strings&&b.unescape_strings,ba.wrap_line_length=void 0===b.wrap_line_length?0:parseInt(b.wrap_line_length,10),ba.e4x=void 0!==b.e4x&&b.e4x,ba.end_with_newline=void 0!==b.end_with_newline&&b.end_with_newline,ba.comma_first=void 0!==b.comma_first&&b.comma_first,ba.test_output_raw=void 0!==b.test_output_raw&&b.test_output_raw,ba.jslint_happy&&(ba.space_after_anon_function=!0),b.indent_with_tabs&&(ba.indent_char="\t",ba.indent_size=1),ba.eol=ba.eol.replace(/\\r/,"\r").replace(/\\n/,"\n"),X="";ba.indent_size>0;)X+=ba.indent_char,ba.indent_size-=1;var ea=0;if(a&&a.length){for(;" "===a.charAt(ea)||"\t"===a.charAt(ea);)da+=a.charAt(ea),ea+=1;a=a.substring(ea)}V="TK_START_BLOCK",W="",R=new i(X,da),R.raw=ba.test_output_raw,$=[],s(l.BlockStatement),this.beautify=function(){var b,c;for(T=new j(a,ba,X),ca=T.tokenize(),S=0;b=B();){for(var d=0;d<b.comments_before.length;d++)g(b.comments_before[d]);g(b),W=Y.last_text,V=b.type,Y.last_text=b.text,S+=1}return c=R.get_code(),ba.end_with_newline&&(c+="\n"),"\n"!=ba.eol&&(c=c.replace(/[\n]/g,ba.eol)),c}}function h(a){var b=0,c=-1,d=[],e=!0;this.set_indent=function(d){b=a.baseIndentLength+d*a.indent_length,c=d},this.get_character_count=function(){return b},this.is_empty=function(){return e},this.last=function(){return this._empty?null:d[d.length-1]},this.push=function(a){d.push(a),b+=a.length,e=!1},this.pop=function(){var a=null;return e||(a=d.pop(),b-=a.length,e=0===d.length),a},this.remove_indent=function(){c>0&&(c-=1,b-=a.indent_length)},this.trim=function(){for(;" "===this.last();){d.pop();b-=1}e=0===d.length},this.toString=function(){var b="";return this._empty||(c>=0&&(b=a.indent_cache[c]),b+=d.join("")),b}}function i(a,b){b=b||"",this.indent_cache=[b],this.baseIndentLength=b.length,this.indent_length=a.length,this.raw=!1;var c=[];this.baseIndentString=b,this.indent_string=a,this.previous_line=null,this.current_line=null,this.space_before_token=!1,this.add_outputline=function(){this.previous_line=this.current_line,this.current_line=new h(this),c.push(this.current_line)},this.add_outputline(),this.get_line_number=function(){return c.length},this.add_new_line=function(a){return(1!==this.get_line_number()||!this.just_added_newline())&&(!(!a&&this.just_added_newline())&&(this.raw||this.add_outputline(),!0))},
this.get_code=function(){return c.join("\n").replace(/[\r\n\t ]+$/,"")},this.set_indent=function(a){if(c.length>1){for(;a>=this.indent_cache.length;)this.indent_cache.push(this.indent_cache[this.indent_cache.length-1]+this.indent_string);return this.current_line.set_indent(a),!0}return this.current_line.set_indent(0),!1},this.add_raw_token=function(a){for(var b=0;b<a.newlines;b++)this.add_outputline();this.current_line.push(a.whitespace_before),this.current_line.push(a.text),this.space_before_token=!1},this.add_token=function(a){this.add_space_before_token(),this.current_line.push(a)},this.add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&this.current_line.push(" "),this.space_before_token=!1},this.remove_redundant_indentation=function(a){if(!a.multiline_frame&&a.mode!==l.ForInitializer&&a.mode!==l.Conditional)for(var b=a.start_line_index,d=c.length;b<d;)c[b].remove_indent(),b++},this.trim=function(d){for(d=void 0!==d&&d,this.current_line.trim(a,b);d&&c.length>1&&this.current_line.is_empty();)c.pop(),this.current_line=c[c.length-1],this.current_line.trim();this.previous_line=c.length>1?c[c.length-2]:null},this.just_added_newline=function(){return this.current_line.is_empty()},this.just_added_blankline=function(){if(this.just_added_newline()){if(1===c.length)return!0;return c[c.length-2].is_empty()}return!1}}function j(a,b,e){function f(a){if(!a.match(y))return null;var b={};z.lastIndex=0;for(var c=z.exec(a);c;)b[c[1]]=c[2],c=z.exec(a);return b}function g(){var e,g=[];if(p=0,q="",t>=u)return["","TK_EOF"];var y;y=s.length?s[s.length-1]:new m("TK_START_BLOCK","{");var z=a.charAt(t);for(t+=1;c(z,i);){if(k.newline.test(z)?"\n"===z&&"\r"===a.charAt(t-2)||(p+=1,g=[]):g.push(z),t>=u)return["","TK_EOF"];z=a.charAt(t),t+=1}if(g.length&&(q=g.join("")),j.test(z)){var C=!0,D=!0,E=j;for("0"===z&&t<u&&/[Xxo]/.test(a.charAt(t))?(C=!1,D=!1,z+=a.charAt(t),t+=1,E=/[o]/.test(a.charAt(t))?l:n):(z="",t-=1);t<u&&E.test(a.charAt(t));)z+=a.charAt(t),t+=1,C&&t<u&&"."===a.charAt(t)&&(z+=a.charAt(t),t+=1,C=!1),D&&t<u&&/[Ee]/.test(a.charAt(t))&&(z+=a.charAt(t),t+=1,t<u&&/[+-]/.test(a.charAt(t))&&(z+=a.charAt(t),t+=1),D=!1,C=!1);return[z,"TK_WORD"]}if(k.isIdentifierStart(a.charCodeAt(t-1))){if(t<u)for(;k.isIdentifierChar(a.charCodeAt(t))&&(z+=a.charAt(t),(t+=1)!==u););return"TK_DOT"===y.type||"TK_RESERVED"===y.type&&c(y.text,["set","get"])||!c(z,v)?[z,"TK_WORD"]:"in"===z?[z,"TK_OPERATOR"]:[z,"TK_RESERVED"]}if("("===z||"["===z)return[z,"TK_START_EXPR"];if(")"===z||"]"===z)return[z,"TK_END_EXPR"];if("{"===z)return[z,"TK_START_BLOCK"];if("}"===z)return[z,"TK_END_BLOCK"];if(";"===z)return[z,"TK_SEMICOLON"];if("/"===z){var F="";if("*"===a.charAt(t)){t+=1,w.lastIndex=t;var G=w.exec(a);F="/*"+G[0],t+=G[0].length;var H=f(F);return H&&"start"===H.ignore&&(A.lastIndex=t,G=A.exec(a),F+=G[0],t+=G[0].length),F=F.replace(k.lineBreak,"\n"),[F,"TK_BLOCK_COMMENT",H]}if("/"===a.charAt(t)){t+=1,x.lastIndex=t;var G=x.exec(a);return F="//"+G[0],t+=G[0].length,[F,"TK_COMMENT"]}}if("`"===z||"'"===z||'"'===z||("/"===z||b.e4x&&"<"===z&&a.slice(t-1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/))&&("TK_RESERVED"===y.type&&c(y.text,["return","case","throw","else","do","typeof","yield"])||"TK_END_EXPR"===y.type&&")"===y.text&&y.parent&&"TK_RESERVED"===y.parent.type&&c(y.parent.text,["if","while","for"])||c(y.type,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))){var I=z,J=!1,K=!1;if(e=z,"/"===I)for(var L=!1;t<u&&(J||L||a.charAt(t)!==I)&&!k.newline.test(a.charAt(t));)e+=a.charAt(t),J?J=!1:(J="\\"===a.charAt(t),"["===a.charAt(t)?L=!0:"]"===a.charAt(t)&&(L=!1)),t+=1;else if(b.e4x&&"<"===I){var M=/<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/g,N=a.slice(t-1),O=M.exec(N);if(O&&0===O.index){for(var P=O[2],Q=0;O;){var R=!!O[1],S=O[2],T=!!O[O.length-1]||"![CDATA["===S.slice(0,8);if(S!==P||T||(R?--Q:++Q),Q<=0)break;O=M.exec(N)}var U=O?O.index+O[0].length:N.length;return N=N.slice(0,U),t+=U-1,N=N.replace(k.lineBreak,"\n"),[N,"TK_STRING"]}}else for(;t<u&&(J||a.charAt(t)!==I&&("`"===I||!k.newline.test(a.charAt(t))));)(J||"`"===I)&&k.newline.test(a.charAt(t))?("\r"===a.charAt(t)&&"\n"===a.charAt(t+1)&&(t+=1),e+="\n"):e+=a.charAt(t),J?("x"!==a.charAt(t)&&"u"!==a.charAt(t)||(K=!0),J=!1):J="\\"===a.charAt(t),t+=1;if(K&&b.unescape_strings&&(e=h(e)),t<u&&a.charAt(t)===I&&(e+=I,t+=1,"/"===I))for(;t<u&&k.isIdentifierStart(a.charCodeAt(t));)e+=a.charAt(t),t+=1;return[e,"TK_STRING"]}if("#"===z){if(0===s.length&&"!"===a.charAt(t)){for(e=z;t<u&&"\n"!==z;)z=a.charAt(t),e+=z,t+=1;return[d(e)+"\n","TK_UNKNOWN"]}var V="#";if(t<u&&j.test(a.charAt(t))){do{z=a.charAt(t),V+=z,t+=1}while(t<u&&"#"!==z&&"="!==z);return"#"===z||("["===a.charAt(t)&&"]"===a.charAt(t+1)?(V+="[]",t+=2):"{"===a.charAt(t)&&"}"===a.charAt(t+1)&&(V+="{}",t+=2)),[V,"TK_WORD"]}}if("<"===z&&("?"===a.charAt(t)||"%"===a.charAt(t))){B.lastIndex=t-1;var W=B.exec(a);if(W)return z=W[0],t+=z.length-1,z=z.replace(k.lineBreak,"\n"),[z,"TK_STRING"]}if("<"===z&&"\x3c!--"===a.substring(t-1,t+3)){for(t+=3,z="\x3c!--";!k.newline.test(a.charAt(t))&&t<u;)z+=a.charAt(t),t++;return r=!0,[z,"TK_COMMENT"]}if("-"===z&&r&&"--\x3e"===a.substring(t-1,t+2))return r=!1,t+=2,["--\x3e","TK_COMMENT"];if("."===z)return[z,"TK_DOT"];if(c(z,o)){for(;t<u&&c(z+a.charAt(t),o)&&(z+=a.charAt(t),!((t+=1)>=u)););return","===z?[z,"TK_COMMA"]:"="===z?[z,"TK_EQUALS"]:[z,"TK_OPERATOR"]}return[z,"TK_UNKNOWN"]}function h(a){for(var b,c=!1,d="",e=0,f="",g=0;c||e<a.length;)if(b=a.charAt(e),e++,c){if(c=!1,"x"===b)f=a.substr(e,2),e+=2;else{if("u"!==b){d+="\\"+b;continue}f=a.substr(e,4),e+=4}if(!f.match(/^[0123456789abcdefABCDEF]+$/))return a;if((g=parseInt(f,16))>=0&&g<32){d+="x"===b?"\\x"+f:"\\u"+f;continue}if(34===g||39===g||92===g)d+="\\"+String.fromCharCode(g);else{if("x"===b&&g>126&&g<=255)return a;d+=String.fromCharCode(g)}}else"\\"===b?c=!0:d+=b;return d}var i="\n\r\t ".split(""),j=/[0-9]/,l=/[01234567]/,n=/[0123456789abcdefABCDEF]/,o="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: =>".split(" ");this.line_starters="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");var p,q,r,s,t,u,v=this.line_starters.concat(["do","in","else","get","set","new","catch","finally","typeof","yield","async","await"]),w=/([\s\S]*?)((?:\*\/)|$)/g,x=/([^\n\r\u2028\u2029]*)/g,y=/\/\* beautify( \w+[:]\w+)+ \*\//g,z=/ (\w+)[:](\w+)/g,A=/([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g,B=/((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;this.tokenize=function(){u=a.length,t=0,r=!1,s=[];for(var b,c,d,e=null,f=[],h=[];!c||"TK_EOF"!==c.type;){for(d=g(),b=new m(d[1],d[0],p,q);"TK_COMMENT"===b.type||"TK_BLOCK_COMMENT"===b.type||"TK_UNKNOWN"===b.type;)"TK_BLOCK_COMMENT"===b.type&&(b.directives=d[2]),h.push(b),d=g(),b=new m(d[1],d[0],p,q);h.length&&(b.comments_before=h,h=[]),"TK_START_BLOCK"===b.type||"TK_START_EXPR"===b.type?(b.parent=c,f.push(e),e=b):("TK_END_BLOCK"===b.type||"TK_END_EXPR"===b.type)&&e&&("]"===b.text&&"["===e.text||")"===b.text&&"("===e.text||"}"===b.text&&"{"===e.text)&&(b.parent=e.parent,e=f.pop()),s.push(b),c=b}return s}}var k={};!function(a){var b="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",c="\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f",d=new RegExp("["+b+"]"),e=new RegExp("["+b+c+"]");a.newline=/[\n\r\u2028\u2029]/,a.lineBreak=new RegExp("\r\n|"+a.newline.source),a.allLineBreaks=new RegExp(a.lineBreak.source,"g"),a.isIdentifierStart=function(a){return a<65?36===a||64===a:a<91||(a<97?95===a:a<123||a>=170&&d.test(String.fromCharCode(a)))},a.isIdentifierChar=function(a){return a<48?36===a:a<58||!(a<65)&&(a<91||(a<97?95===a:a<123||a>=170&&e.test(String.fromCharCode(a))))}}(k);var l={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"},m=function(a,b,c,d,e,f){this.type=a,this.text=b,this.comments_before=[],this.newlines=c||0,this.wanted_newline=c>0,this.whitespace_before=d||"",this.parent=null,this.directives=null};return{run:a}},a.extend(a.FE.DEFAULTS,{codeMirror:window.CodeMirror,codeMirrorOptions:{lineNumbers:!0,tabMode:"indent",indentWithTabs:!0,lineWrapping:!0,mode:"text/html",tabSize:2},codeBeautifierOptions:{end_with_newline:!0,indent_inner_html:!0,extra_liners:["p","h1","h2","h3","h4","h5","h6","blockquote","pre","ul","ol","table","dl"],brace_style:"expand",indent_char:"\t",indent_size:1,wrap_line_length:0},codeViewKeepActiveButtons:["fullscreen"]}),a.FE.PLUGINS.codeView=function(b){function c(){return b.$box.hasClass("fr-code-view")}function d(){return l?l.getValue():k.val()}function e(a){var c=d();b.html.set(c),b.$el.blur(),b.$tb.find(" > .fr-command").not(a).removeClass("fr-disabled").attr("aria-disabled",!1),a.removeClass("fr-active").attr("aria-pressed",!1),b.events.focus(!0),b.placeholder.refresh(),b.undo.saveStep()}function f(c){k||(i(),!l&&b.opts.codeMirror?l=b.opts.codeMirror.fromTextArea(k.get(0),b.opts.codeMirrorOptions):b.events.$on(k,"keydown keyup change input",function(){b.opts.height?this.removeAttribute("rows"):(this.rows=1,0===this.value.length?this.style.height="auto":this.style.height=this.scrollHeight+"px")})),b.undo.saveStep(),b.html.cleanEmptyTags(),b.html.cleanWhiteTags(!0),b.core.hasFocus()&&(b.core.isEmpty()||(b.selection.save(),b.$el.find('.fr-marker[data-type="true"]:first').replaceWith('<span class="fr-tmp fr-sm">F</span>'),b.$el.find('.fr-marker[data-type="false"]:last').replaceWith('<span class="fr-tmp fr-em">F</span>')));var d=b.html.get(!1,!0);b.$el.find("span.fr-tmp").remove(),b.$box.toggleClass("fr-code-view",!0),b.core.hasFocus()&&b.$el.blur(),d=d.replace(/<span class="fr-tmp fr-sm">F<\/span>/,"FROALA-SM"),d=d.replace(/<span class="fr-tmp fr-em">F<\/span>/,"FROALA-EM"),b.codeBeautifier&&(d=b.codeBeautifier.run(d,b.opts.codeBeautifierOptions));var e,f;if(l){e=d.indexOf("FROALA-SM"),f=d.indexOf("FROALA-EM"),e>f?e=f:f-=9,d=d.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"");var g=d.substring(0,e).length-d.substring(0,e).replace(/\n/g,"").length,h=d.substring(0,f).length-d.substring(0,f).replace(/\n/g,"").length;e=d.substring(0,e).length-d.substring(0,d.substring(0,e).lastIndexOf("\n")+1).length,f=d.substring(0,f).length-d.substring(0,d.substring(0,f).lastIndexOf("\n")+1).length,l.setSize(null,b.opts.height?b.opts.height:"auto"),b.opts.heightMin&&b.$box.find(".CodeMirror-scroll").css("min-height",b.opts.heightMin),l.setValue(d),l.focus(),l.setSelection({line:g,ch:e},{line:h,ch:f}),l.refresh(),l.clearHistory()}else{e=d.indexOf("FROALA-SM"),f=d.indexOf("FROALA-EM")-9,b.opts.heightMin&&k.css("min-height",b.opts.heightMin),b.opts.height&&k.css("height",b.opts.height),b.opts.heightMax&&k.css("max-height",b.opts.height||b.opts.heightMax),k.val(d.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"")).trigger("change");var j=a(b.o_doc).scrollTop();k.focus(),k.get(0).setSelectionRange(e,f),a(b.o_doc).scrollTop(j)}b.$tb.find(" > .fr-command").not(c).filter(function(){return b.opts.codeViewKeepActiveButtons.indexOf(a(this).data("cmd"))<0}).addClass("fr-disabled").attr("aria-disabled",!0),c.addClass("fr-active").attr("aria-pressed",!0),!b.helpers.isMobile()&&b.opts.toolbarInline&&b.toolbar.hide()}function g(a){void 0===a&&(a=!c());var d=b.$tb.find('.fr-command[data-cmd="html"]');a?(b.popups.hideAll(),f(d)):(b.$box.toggleClass("fr-code-view",!1),e(d))}function h(){c()&&g(!1),l&&l.toTextArea(),k.val("").removeData().remove(),k=null,m&&(m.remove(),m=null)}function i(){k=a('<textarea class="fr-code" tabIndex="-1">'),b.$wp.append(k),k.attr("dir",b.opts.direction),b.$box.hasClass("fr-basic")||(m=a('<a data-cmd="html" title="Code View" class="fr-command fr-btn html-switch'+(b.helpers.isMobile()?"":" fr-desktop")+'" role="button" tabIndex="-1"><i class="fa fa-code"></i></button>'),b.$box.append(m),b.events.bindClick(b.$box,"a.html-switch",function(){g(!1)}));var e=function(){return!c()};b.events.on("buttons.refresh",e),b.events.on("copy",e,!0),b.events.on("cut",e,!0),b.events.on("paste",e,!0),b.events.on("destroy",h,!0),b.events.on("html.set",function(){c()&&g(!0)}),b.events.on("form.submit",function(){c()&&(b.html.set(d()),b.events.trigger("contentChanged",[],!0))},!0)}function j(){if(!b.$wp)return!1}var k,l,m;return{_init:j,toggle:g,isActive:c,get:d}},a.FE.RegisterCommand("html",{title:"Code View",undo:!1,focus:!1,forcedRefresh:!0,toggle:!0,callback:function(){this.codeView.toggle()},plugin:"codeView"}),a.FE.DefineIcon("html",{NAME:"code"}),a.extend(a.FE.POPUP_TEMPLATES,{"colors.picker":"[_BUTTONS_][_TEXT_COLORS_][_BACKGROUND_COLORS_]"}),a.extend(a.FE.DEFAULTS,{colorsText:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsBackground:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsStep:7,colorsDefaultTab:"text",colorsButtons:["colorsBack","|","-"]}),a.FE.PLUGINS.colors=function(b){function c(){var a=b.$tb.find('.fr-command[data-cmd="color"]'),c=b.popups.get("colors.picker");if(c||(c=e()),!c.hasClass("fr-active"))if(b.popups.setContainer("colors.picker",b.$tb),i(c.find(".fr-selected-tab").attr("data-param1")),a.is(":visible")){var d=a.offset().left+a.outerWidth()/2,f=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("colors.picker",d,f,a.outerHeight())}else b.position.forSelection(c),b.popups.show("colors.picker")}function d(){b.popups.hide("colors.picker")}function e(){var a='<div class="fr-buttons fr-colors-buttons">';b.opts.toolbarInline&&b.opts.colorsButtons.length>0&&(a+=b.button.buildList(b.opts.colorsButtons)),a+=f()+"</div>";var c={buttons:a,text_colors:g("text"),background_colors:g("background")},d=b.popups.create("colors.picker",c);return h(d),d}function f(){var a='<div class="fr-colors-tabs fr-group">';return a+='<span class="fr-colors-tab '+("background"==b.opts.colorsDefaultTab?"":"fr-selected-tab ")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"!=b.opts.colorsDefaultTab)+'" data-param1="text" data-cmd="colorChangeSet" title="'+b.language.translate("Text")+'">'+b.language.translate("Text")+"</span>",(a+='<span class="fr-colors-tab '+("background"==b.opts.colorsDefaultTab?"fr-selected-tab ":"")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"==b.opts.colorsDefaultTab)+'" data-param1="background" data-cmd="colorChangeSet" title="'+b.language.translate("Background")+'">'+b.language.translate("Background")+"</span>")+"</div>"}function g(a){for(var c="text"==a?b.opts.colorsText:b.opts.colorsBackground,d='<div class="fr-color-set fr-'+a+"-color"+(b.opts.colorsDefaultTab==a||"text"!=b.opts.colorsDefaultTab&&"background"!=b.opts.colorsDefaultTab&&"text"==a?" fr-selected-set":"")+'">',e=0;e<c.length;e++)0!==e&&e%b.opts.colorsStep==0&&(d+="<br>"),"REMOVE"!=c[e]?d+='<span class="fr-command fr-select-color" style="background: '+c[e]+';" tabIndex="-1" aria-selected="false" role="button" data-cmd="'+a+'Color" data-param1="'+c[e]+'"><span class="fr-sr-only">'+b.language.translate("Color")+" "+c[e]+"&nbsp;&nbsp;&nbsp;</span></span>":d+='<span class="fr-command fr-select-color" data-cmd="'+a+'Color" tabIndex="-1" role="button" data-param1="REMOVE" title="'+b.language.translate("Clear Formatting")+'">'+b.icon.create("remove")+'<span class="fr-sr-only">'+b.language.translate("Clear Formatting")+"</span></span>";return d+"</div>"}function h(c){b.events.on("popup.tab",function(d){var e=a(d.currentTarget);if(!b.popups.isVisible("colors.picker")||!e.is("span"))return!0;var f=d.which,g=!0;if(a.FE.KEYCODE.TAB==f){var h=c.find(".fr-buttons");g=!b.accessibility.focusToolbar(h,!!d.shiftKey)}else if(a.FE.KEYCODE.ARROW_UP==f||a.FE.KEYCODE.ARROW_DOWN==f||a.FE.KEYCODE.ARROW_LEFT==f||a.FE.KEYCODE.ARROW_RIGHT==f){if(e.is("span.fr-select-color")){var i=e.parent().find("span.fr-select-color"),j=i.index(e),k=b.opts.colorsStep,l=Math.floor(i.length/k),m=j%k,n=Math.floor(j/k),o=n*k+m,p=l*k;a.FE.KEYCODE.ARROW_UP==f?o=((o-k)%p+p)%p:a.FE.KEYCODE.ARROW_DOWN==f?o=(o+k)%p:a.FE.KEYCODE.ARROW_LEFT==f?o=((o-1)%p+p)%p:a.FE.KEYCODE.ARROW_RIGHT==f&&(o=(o+1)%p);var q=a(i.get(o));b.events.disableBlur(),q.focus(),g=!1}}else a.FE.KEYCODE.ENTER==f&&(b.button.exec(e),g=!1);return!1===g&&(d.preventDefault(),d.stopPropagation()),g},!0)}function i(c){var d,e=b.popups.get("colors.picker"),f=a(b.selection.element());d="background"==c?"background-color":"color";var g=e.find(".fr-"+c+"-color .fr-select-color");for(g.find(".fr-selected-color").remove(),g.removeClass("fr-active-item"),g.not('[data-param1="REMOVE"]').attr("aria-selected",!1);f.get(0)!=b.el;){if("transparent"!=f.css(d)&&"rgba(0, 0, 0, 0)"!=f.css(d)){var h=e.find(".fr-"+c+'-color .fr-select-color[data-param1="'+b.helpers.RGBToHex(f.css(d))+'"]');h.append('<span class="fr-selected-color" aria-hidden="true">\uf00c</span>'),h.addClass("fr-active-item").attr("aria-selected",!0);break}f=f.parent()}}function j(a,c){a.hasClass("fr-selected-tab")||(a.siblings().removeClass("fr-selected-tab").attr("aria-pressed",!1),a.addClass("fr-selected-tab").attr("aria-pressed",!0),a.parents(".fr-popup").find(".fr-color-set").removeClass("fr-selected-set"),a.parents(".fr-popup").find(".fr-color-set.fr-"+c+"-color").addClass("fr-selected-set"),i(c)),b.accessibility.focusPopup(a.parents(".fr-popup"))}function k(a){"REMOVE"!=a?b.format.applyStyle("background-color",b.helpers.HEXtoRGB(a)):b.format.removeStyle("background-color"),d()}function l(a){"REMOVE"!=a?b.format.applyStyle("color",b.helpers.HEXtoRGB(a)):b.format.removeStyle("color"),d()}function m(){b.popups.hide("colors.picker"),b.toolbar.showInline()}return{showColorsPopup:c,hideColorsPopup:d,changeSet:j,background:k,text:l,back:m}},a.FE.DefineIcon("colors",{NAME:"tint"}),a.FE.RegisterCommand("color",{title:"Colors",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("colors.picker")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("colors.picker")):this.colors.showColorsPopup()},plugin:"colors"}),a.FE.RegisterCommand("textColor",{undo:!0,callback:function(a,b){this.colors.text(b)}}),a.FE.RegisterCommand("backgroundColor",{undo:!0,callback:function(a,b){this.colors.background(b)}}),a.FE.RegisterCommand("colorChangeSet",{undo:!1,focus:!1,callback:function(a,b){var c=this.popups.get("colors.picker").find('.fr-command[data-cmd="'+a+'"][data-param1="'+b+'"]');this.colors.changeSet(c,b)}}),a.FE.DefineIcon("colorsBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("colorsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.colors.back()}}),a.FE.DefineIcon("remove",{NAME:"eraser"}),a.extend(a.FE.DEFAULTS,{dragInline:!0}),a.FE.PLUGINS.draggable=function(b){function c(c){return!(!c.originalEvent||!c.originalEvent.target||c.originalEvent.target.nodeType!=Node.TEXT_NODE)||(c.target&&"A"==c.target.tagName&&1==c.target.childNodes.length&&"IMG"==c.target.childNodes[0].tagName&&(c.target=c.target.childNodes[0]),a(c.target).hasClass("fr-draggable")?(b.undo.canDo()||b.undo.saveStep(),b.opts.dragInline?b.$el.attr("contenteditable",!0):b.$el.attr("contenteditable",!1),b.opts.toolbarInline&&b.toolbar.hide(),a(c.target).addClass("fr-dragging"),b.browser.msie||b.browser.edge||b.selection.clear(),void c.originalEvent.dataTransfer.setData("text","Froala")):(c.preventDefault(),!1))}function d(a){return!(a&&("HTML"==a.tagName||"BODY"==a.tagName||b.node.isElement(a)))}function e(a,c,d){b.opts.iframe&&(a+=b.$iframe.offset().top,c+=b.$iframe.offset().left),n.offset().top!=a&&n.css("top",a),n.offset().left!=c&&n.css("left",c),n.width()!=d&&n.css("width",d)}function f(c){var f=b.doc.elementFromPoint(c.originalEvent.pageX-b.win.pageXOffset,c.originalEvent.pageY-b.win.pageYOffset);if(!d(f)){for(var g=0,h=f;!d(h)&&h==f&&c.originalEvent.pageY-b.win.pageYOffset-g>0;)g++,h=b.doc.elementFromPoint(c.originalEvent.pageX-b.win.pageXOffset,c.originalEvent.pageY-b.win.pageYOffset-g);(!d(h)||n&&0===b.$el.find(h).length&&h!=n.get(0))&&(h=null);for(var i=0,j=f;!d(j)&&j==f&&c.originalEvent.pageY-b.win.pageYOffset+i<a(b.doc).height();)i++,j=b.doc.elementFromPoint(c.originalEvent.pageX-b.win.pageXOffset,c.originalEvent.pageY-b.win.pageYOffset+i);(!d(j)||n&&0===b.$el.find(j).length&&j!=n.get(0))&&(j=null),f=null==j&&h?h:j&&null==h?j:j&&h?g<i?h:j:null}if(a(f).hasClass("fr-drag-helper"))return!1;if(f&&!b.node.isBlock(f)&&(f=b.node.blockParent(f)),f&&["TD","TH","TR","THEAD","TBODY"].indexOf(f.tagName)>=0&&(f=a(f).parents("table").get(0)),f&&["LI"].indexOf(f.tagName)>=0&&(f=a(f).parents("UL, OL").get(0)),f&&!a(f).hasClass("fr-drag-helper")){n||(a.FE.$draggable_helper||(a.FE.$draggable_helper=a('<div class="fr-drag-helper"></div>')),n=a.FE.$draggable_helper,b.events.on("shared.destroy",function(){n.html("").removeData().remove(),n=null},!0));var k;k=c.originalEvent.pageY<a(f).offset().top+a(f).outerHeight()/2;var l=a(f),m=0;k||0!==l.next().length?(k||(l=l.next()),"before"==n.data("fr-position")&&l.is(n.data("fr-tag"))||(l.prev().length>0&&(m=parseFloat(l.prev().css("margin-bottom"))||0),m=Math.max(m,parseFloat(l.css("margin-top"))||0),e(l.offset().top-m/2-b.$box.offset().top,l.offset().left-b.win.pageXOffset-b.$box.offset().left,l.width()),n.data("fr-position","before"))):"after"==n.data("fr-position")&&l.is(n.data("fr-tag"))||(m=parseFloat(l.css("margin-bottom"))||0,e(l.offset().top+a(f).height()+m/2-b.$box.offset().top,l.offset().left-b.win.pageXOffset-b.$box.offset().left,l.width()),n.data("fr-position","after")),n.data("fr-tag",l),n.addClass("fr-visible"),n.appendTo(b.$box)}else n&&b.$box.find(n).length>0&&n.removeClass("fr-visible")}function g(a){a.originalEvent.dataTransfer.dropEffect="move",b.opts.dragInline?j()||!b.browser.msie&&!b.browser.edge||a.preventDefault():(a.preventDefault(),f(a))}function h(a){a.originalEvent.dataTransfer.dropEffect="move",b.opts.dragInline||a.preventDefault()}function i(a){b.$el.attr("contenteditable",!0);var c=b.$el.find(".fr-dragging");n&&n.hasClass("fr-visible")&&b.$box.find(n).length?k(a):c.length&&(a.preventDefault(),a.stopPropagation()),n&&b.$box.find(n).length&&n.removeClass("fr-visible"),c.removeClass("fr-dragging")}function j(){for(var b=null,c=0;c<a.FE.INSTANCES.length;c++)if(b=a.FE.INSTANCES[c].$el.find(".fr-dragging"),b.length)return b.get(0)}function k(c){for(var d,e,f=0;f<a.FE.INSTANCES.length;f++)if(d=a.FE.INSTANCES[f].$el.find(".fr-dragging"),d.length){e=a.FE.INSTANCES[f];break}if(d.length){if(c.preventDefault(),c.stopPropagation(),n&&n.hasClass("fr-visible")&&b.$box.find(n).length)n.data("fr-tag")[n.data("fr-position")]('<span class="fr-marker"></span>'),n.removeClass("fr-visible");else{if(!1===b.markers.insertAtPoint(c.originalEvent))return!1}d.removeClass("fr-dragging");var g=d;if(d.parent().is("A")&&(g=d.parent()),b.core.isEmpty())b.events.focus();else{b.$el.find(".fr-marker").replaceWith(a.FE.MARKERS),b.selection.restore()}if(e==b||b.undo.canDo()||b.undo.saveStep(),b.core.isEmpty())b.$el.html(g);else{var h=b.markers.insert();0===g.find(h).length?a(h).replaceWith(g):a(h).replaceWith(d),d.after(a.FE.MARKERS),b.selection.restore()}return b.popups.hideAll(),b.selection.save(),b.$el.find(b.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(),b.html.wrap(),b.html.fillEmptyBlocks(),b.selection.restore(),b.undo.saveStep(),b.opts.iframe&&b.size.syncIframe(),e!=b&&(e.popups.hideAll(),e.$el.find(e.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(),e.html.wrap(),e.html.fillEmptyBlocks(),e.undo.saveStep(),e.events.trigger("element.dropped"),e.opts.iframe&&e.size.syncIframe()),b.events.trigger("element.dropped",[g]),!1}n&&n.removeClass("fr-visible"),b.undo.canDo()||b.undo.saveStep(),setTimeout(function(){b.undo.saveStep()},0)}function l(a){if(a&&"DIV"==a.tagName&&b.node.hasClass(a,"fr-drag-helper"))a.parentNode.removeChild(a);else if(a&&a.nodeType==Node.ELEMENT_NODE)for(var c=a.querySelectorAll("div.fr-drag-helper"),d=0;d<c.length;d++)c[d].parentNode.removeChild(c[d])}function m(){b.opts.enter==a.FE.ENTER_BR&&(b.opts.dragInline=!0),b.events.on("dragstart",c,!0),b.events.on("dragover",g,!0),b.events.on("dragenter",h,!0),b.events.on("document.dragend",i,!0),b.events.on("document.drop",i,!0),b.events.on("drop",k,!0),b.events.on("html.processGet",l)}var n;return{_init:m}},a.extend(a.FE.POPUP_TEMPLATES,{emoticons:"[_BUTTONS_][_EMOTICONS_]"}),a.extend(a.FE.DEFAULTS,{emoticonsStep:8,emoticonsSet:[{code:"1f600",desc:"Grinning face"},{code:"1f601",desc:"Grinning face with smiling eyes"},{code:"1f602",desc:"Face with tears of joy"},{code:"1f603",desc:"Smiling face with open mouth"},{code:"1f604",desc:"Smiling face with open mouth and smiling eyes"},{code:"1f605",desc:"Smiling face with open mouth and cold sweat"},{code:"1f606",desc:"Smiling face with open mouth and tightly-closed eyes"},{code:"1f607",desc:"Smiling face with halo"},{code:"1f608",desc:"Smiling face with horns"},{code:"1f609",desc:"Winking face"},{code:"1f60a",desc:"Smiling face with smiling eyes"},{code:"1f60b",desc:"Face savoring delicious food"},{
code:"1f60c",desc:"Relieved face"},{code:"1f60d",desc:"Smiling face with heart-shaped eyes"},{code:"1f60e",desc:"Smiling face with sunglasses"},{code:"1f60f",desc:"Smirking face"},{code:"1f610",desc:"Neutral face"},{code:"1f611",desc:"Expressionless face"},{code:"1f612",desc:"Unamused face"},{code:"1f613",desc:"Face with cold sweat"},{code:"1f614",desc:"Pensive face"},{code:"1f615",desc:"Confused face"},{code:"1f616",desc:"Confounded face"},{code:"1f617",desc:"Kissing face"},{code:"1f618",desc:"Face throwing a kiss"},{code:"1f619",desc:"Kissing face with smiling eyes"},{code:"1f61a",desc:"Kissing face with closed eyes"},{code:"1f61b",desc:"Face with stuck out tongue"},{code:"1f61c",desc:"Face with stuck out tongue and winking eye"},{code:"1f61d",desc:"Face with stuck out tongue and tightly-closed eyes"},{code:"1f61e",desc:"Disappointed face"},{code:"1f61f",desc:"Worried face"},{code:"1f620",desc:"Angry face"},{code:"1f621",desc:"Pouting face"},{code:"1f622",desc:"Crying face"},{code:"1f623",desc:"Persevering face"},{code:"1f624",desc:"Face with look of triumph"},{code:"1f625",desc:"Disappointed but relieved face"},{code:"1f626",desc:"Frowning face with open mouth"},{code:"1f627",desc:"Anguished face"},{code:"1f628",desc:"Fearful face"},{code:"1f629",desc:"Weary face"},{code:"1f62a",desc:"Sleepy face"},{code:"1f62b",desc:"Tired face"},{code:"1f62c",desc:"Grimacing face"},{code:"1f62d",desc:"Loudly crying face"},{code:"1f62e",desc:"Face with open mouth"},{code:"1f62f",desc:"Hushed face"},{code:"1f630",desc:"Face with open mouth and cold sweat"},{code:"1f631",desc:"Face screaming in fear"},{code:"1f632",desc:"Astonished face"},{code:"1f633",desc:"Flushed face"},{code:"1f634",desc:"Sleeping face"},{code:"1f635",desc:"Dizzy face"},{code:"1f636",desc:"Face without mouth"},{code:"1f637",desc:"Face with medical mask"}],emoticonsButtons:["emoticonsBack","|"],emoticonsUseImage:!0}),a.FE.PLUGINS.emoticons=function(b){function c(){var a=b.$tb.find('.fr-command[data-cmd="emoticons"]'),c=b.popups.get("emoticons");if(c||(c=e()),!c.hasClass("fr-active")){b.popups.refresh("emoticons"),b.popups.setContainer("emoticons",b.$tb);var d=a.offset().left+a.outerWidth()/2,f=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("emoticons",d,f,a.outerHeight())}}function d(){b.popups.hide("emoticons")}function e(){var a="";b.opts.toolbarInline&&b.opts.emoticonsButtons.length>0&&(a='<div class="fr-buttons fr-emoticons-buttons">'+b.button.buildList(b.opts.emoticonsButtons)+"</div>");var c={buttons:a,emoticons:g()},d=b.popups.create("emoticons",c);return b.tooltip.bind(d,".fr-emoticon"),h(d),d}function f(){if(!b.selection.isCollapsed())return!1;var a=b.selection.element(),c=b.selection.endElement();if(a&&b.node.hasClass(a,"fr-emoticon"))return a;if(c&&b.node.hasClass(c,"fr-emoticon"))return c;var d=b.selection.ranges(0),e=d.startContainer;if(e.nodeType==Node.ELEMENT_NODE&&e.childNodes.length>0&&d.startOffset>0){var f=e.childNodes[d.startOffset-1];if(b.node.hasClass(f,"fr-emoticon"))return f}return!1}function g(){for(var a='<div style="text-align: center">',c=0;c<b.opts.emoticonsSet.length;c++)0!==c&&c%b.opts.emoticonsStep==0&&(a+="<br>"),a+='<span class="fr-command fr-emoticon" tabIndex="-1" data-cmd="insertEmoticon" title="'+b.language.translate(b.opts.emoticonsSet[c].desc)+'" role="button" data-param1="'+b.opts.emoticonsSet[c].code+'">'+(b.opts.emoticonsUseImage?'<img src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/'+b.opts.emoticonsSet[c].code+'.svg"/>':"&#x"+b.opts.emoticonsSet[c].code+";")+'<span class="fr-sr-only">'+b.language.translate(b.opts.emoticonsSet[c].desc)+"&nbsp;&nbsp;&nbsp;</span></span>";return b.opts.emoticonsUseImage&&(a+='<p style="font-size: 12px; text-align: center; padding: 0 5px;">Emoji free by <a class="fr-link" tabIndex="-1" href="http://emojione.com/" target="_blank" rel="nofollow" role="link" aria-label="Open Emoji One website.">Emoji One</a></p>'),a+="</div>"}function h(c){b.events.on("popup.tab",function(d){var e=a(d.currentTarget);if(!b.popups.isVisible("emoticons")||!e.is("span, a"))return!0;var f,g,h,i=d.which;if(a.FE.KEYCODE.TAB==i){if(e.is("span.fr-emoticon")&&d.shiftKey||e.is("a")&&!d.shiftKey){var j=c.find(".fr-buttons");f=!b.accessibility.focusToolbar(j,!!d.shiftKey)}if(!1!==f){var k=c.find("span.fr-emoticon:focus:first, span.fr-emoticon:visible:first, a");e.is("span.fr-emoticon")&&(k=k.not("span.fr-emoticon:not(:focus)")),g=k.index(e),g=d.shiftKey?((g-1)%k.length+k.length)%k.length:(g+1)%k.length,h=k.get(g),b.events.disableBlur(),h.focus(),f=!1}}else if(a.FE.KEYCODE.ARROW_UP==i||a.FE.KEYCODE.ARROW_DOWN==i||a.FE.KEYCODE.ARROW_LEFT==i||a.FE.KEYCODE.ARROW_RIGHT==i){if(e.is("span.fr-emoticon")){var l=e.parent().find("span.fr-emoticon");g=l.index(e);var m=b.opts.emoticonsStep,n=Math.floor(l.length/m),o=g%m,p=Math.floor(g/m),q=p*m+o,r=n*m;a.FE.KEYCODE.ARROW_UP==i?q=((q-m)%r+r)%r:a.FE.KEYCODE.ARROW_DOWN==i?q=(q+m)%r:a.FE.KEYCODE.ARROW_LEFT==i?q=((q-1)%r+r)%r:a.FE.KEYCODE.ARROW_RIGHT==i&&(q=(q+1)%r),h=a(l.get(q)),b.events.disableBlur(),h.focus(),f=!1}}else a.FE.KEYCODE.ENTER==i&&(e.is("a")?e[0].click():b.button.exec(e),f=!1);return!1===f&&(d.preventDefault(),d.stopPropagation()),f},!0)}function i(c,d){var e=f(),g=b.selection.ranges(0);e?(0===g.startOffset&&b.selection.element()===e?a(e).before(a.FE.MARKERS+a.FE.INVISIBLE_SPACE):g.startOffset>0&&b.selection.element()===e&&g.commonAncestorContainer.parentNode.classList.contains("fr-emoticon")&&a(e).after(a.FE.INVISIBLE_SPACE+a.FE.MARKERS),b.selection.restore(),b.html.insert('<span class="fr-emoticon fr-deletable'+(d?" fr-emoticon-img":"")+'"'+(d?' style="background: url('+d+');"':"")+">"+(d?"&nbsp;":c)+"</span>&nbsp;"+a.FE.MARKERS,!0)):b.html.insert('<span class="fr-emoticon fr-deletable'+(d?" fr-emoticon-img":"")+'"'+(d?' style="background: url('+d+');"':"")+">"+(d?"&nbsp;":c)+"</span>&nbsp;",!0)}function j(){b.popups.hide("emoticons"),b.toolbar.showInline()}function k(){var c=function(){for(var a=b.el.querySelectorAll(".fr-emoticon:not(.fr-deletable)"),c=0;c<a.length;c++)a[c].className+=" fr-deletable"};c(),b.events.on("html.set",c),b.events.on("keydown",function(c){if(b.keys.isCharacter(c.which)&&b.selection.inEditor()){var d=b.selection.ranges(0),e=f();b.node.hasClass(e,"fr-emoticon-img")&&e&&(0===d.startOffset&&b.selection.element()===e?a(e).before(a.FE.MARKERS+a.FE.INVISIBLE_SPACE):a(e).after(a.FE.INVISIBLE_SPACE+a.FE.MARKERS),b.selection.restore())}}),b.events.on("keyup",function(c){for(var d=b.el.querySelectorAll(".fr-emoticon"),e=0;e<d.length;e++)void 0!==d[e].textContent&&0===d[e].textContent.replace(/\u200B/gi,"").length&&a(d[e]).remove();if(!(c.which>=a.FE.KEYCODE.ARROW_LEFT&&c.which<=a.FE.KEYCODE.ARROW_DOWN)){var g=f();b.node.hasClass(g,"fr-emoticon-img")&&(a(g).append(a.FE.MARKERS),b.selection.restore())}})}return{_init:k,insert:i,showEmoticonsPopup:c,hideEmoticonsPopup:d,back:j}},a.FE.DefineIcon("emoticons",{NAME:"smile-o"}),a.FE.RegisterCommand("emoticons",{title:"Emoticons",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("emoticons")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("emoticons")):this.emoticons.showEmoticonsPopup()},plugin:"emoticons"}),a.FE.RegisterCommand("insertEmoticon",{callback:function(a,b){this.emoticons.insert("&#x"+b+";",this.opts.emoticonsUseImage?"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/"+b+".svg":null),this.emoticons.hideEmoticonsPopup()}}),a.FE.DefineIcon("emoticonsBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("emoticonsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.emoticons.back()}}),a.extend(a.FE.DEFAULTS,{entities:"&quot;&#39;&iexcl;&cent;&pound;&curren;&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&shy;&reg;&macr;&deg;&plusmn;&sup2;&sup3;&acute;&micro;&para;&middot;&cedil;&sup1;&ordm;&raquo;&frac14;&frac12;&frac34;&iquest;&Agrave;&Aacute;&Acirc;&Atilde;&Auml;&Aring;&AElig;&Ccedil;&Egrave;&Eacute;&Ecirc;&Euml;&Igrave;&Iacute;&Icirc;&Iuml;&ETH;&Ntilde;&Ograve;&Oacute;&Ocirc;&Otilde;&Ouml;&times;&Oslash;&Ugrave;&Uacute;&Ucirc;&Uuml;&Yacute;&THORN;&szlig;&agrave;&aacute;&acirc;&atilde;&auml;&aring;&aelig;&ccedil;&egrave;&eacute;&ecirc;&euml;&igrave;&iacute;&icirc;&iuml;&eth;&ntilde;&ograve;&oacute;&ocirc;&otilde;&ouml;&divide;&oslash;&ugrave;&uacute;&ucirc;&uuml;&yacute;&thorn;&yuml;&OElig;&oelig;&Scaron;&scaron;&Yuml;&fnof;&circ;&tilde;&Alpha;&Beta;&Gamma;&Delta;&Epsilon;&Zeta;&Eta;&Theta;&Iota;&Kappa;&Lambda;&Mu;&Nu;&Xi;&Omicron;&Pi;&Rho;&Sigma;&Tau;&Upsilon;&Phi;&Chi;&Psi;&Omega;&alpha;&beta;&gamma;&delta;&epsilon;&zeta;&eta;&theta;&iota;&kappa;&lambda;&mu;&nu;&xi;&omicron;&pi;&rho;&sigmaf;&sigma;&tau;&upsilon;&phi;&chi;&psi;&omega;&thetasym;&upsih;&piv;&ensp;&emsp;&thinsp;&zwnj;&zwj;&lrm;&rlm;&ndash;&mdash;&lsquo;&rsquo;&sbquo;&ldquo;&rdquo;&bdquo;&dagger;&Dagger;&bull;&hellip;&permil;&prime;&Prime;&lsaquo;&rsaquo;&oline;&frasl;&euro;&image;&weierp;&real;&trade;&alefsym;&larr;&uarr;&rarr;&darr;&harr;&crarr;&lArr;&uArr;&rArr;&dArr;&hArr;&forall;&part;&exist;&empty;&nabla;&isin;&notin;&ni;&prod;&sum;&minus;&lowast;&radic;&prop;&infin;&ang;&and;&or;&cap;&cup;&int;&there4;&sim;&cong;&asymp;&ne;&equiv;&le;&ge;&sub;&sup;&nsub;&sube;&supe;&oplus;&otimes;&perp;&sdot;&lceil;&rceil;&lfloor;&rfloor;&lang;&rang;&loz;&spades;&clubs;&hearts;&diams;"}),a.FE.PLUGINS.entities=function(b){function c(a){var b=a.textContent;if(b.match(g)){for(var c="",d=0;d<b.length;d++)h[b[d]]?c+=h[b[d]]:c+=b[d];a.textContent=c}}function d(a){if(a&&["STYLE","SCRIPT","svg","IFRAME"].indexOf(a.tagName)>=0)return!0;for(var e=b.node.contents(a),f=0;f<e.length;f++)e[f].nodeType==Node.TEXT_NODE?c(e[f]):d(e[f]);a.nodeType==Node.TEXT_NODE&&c(a)}function e(a){return 0===a.length?"":b.clean.exec(a,d).replace(/\&amp;/g,"&")}function f(){b.opts.htmlSimpleAmpersand||(b.opts.entities=b.opts.entities+"&amp;");var c=a("<div>").html(b.opts.entities).text(),d=b.opts.entities.split(";");h={},g="";for(var f=0;f<c.length;f++){var i=c.charAt(f);h[i]=d[f]+";",g+="\\"+i+(f<c.length-1?"|":"")}g=new RegExp("("+g+")","g"),b.events.on("html.get",e,!0)}var g,h;return{_init:f}},a.extend(a.FE.POPUP_TEMPLATES,{"file.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_PROGRESS_BAR_]"}),a.extend(a.FE.DEFAULTS,{fileUploadURL:"https://i.froala.com/upload",fileUploadParam:"file",fileUploadParams:{},fileUploadToS3:!1,fileUploadMethod:"POST",fileMaxSize:10485760,fileAllowedTypes:["*"],fileInsertButtons:["fileBack","|"],fileUseSelectedText:!1}),a.FE.PLUGINS.file=function(b){function c(){var a=b.$tb.find('.fr-command[data-cmd="insertFile"]'),c=b.popups.get("file.insert");if(c||(c=s()),e(),!c.hasClass("fr-active")){b.popups.refresh("file.insert"),b.popups.setContainer("file.insert",b.$tb);var d=a.offset().left+a.outerWidth()/2,f=a.offset().top+(b.opts.toolbarBottom?0:a.outerHeight());b.popups.show("file.insert",d,f,a.outerHeight())}}function d(){var a=b.popups.get("file.insert");a||(a=s()),a.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),a.find(".fr-file-progress-bar-layer").addClass("fr-active"),a.find(".fr-buttons").hide(),f(b.language.translate("Uploading"),0)}function e(a){var c=b.popups.get("file.insert");c&&(c.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),c.find(".fr-file-progress-bar-layer").removeClass("fr-active"),c.find(".fr-buttons").show(),a&&(b.events.focus(),b.popups.hide("file.insert")))}function f(a,c){var d=b.popups.get("file.insert");if(d){var e=d.find(".fr-file-progress-bar-layer");e.find("h3").text(a+(c?" "+c+"%":"")),e.removeClass("fr-error"),c?(e.find("div").removeClass("fr-indeterminate"),e.find("div > span").css("width",c+"%")):e.find("div").addClass("fr-indeterminate")}}function g(a){d();var c=b.popups.get("file.insert"),e=c.find(".fr-file-progress-bar-layer");e.addClass("fr-error");var f=e.find("h3");f.text(a),b.events.disableBlur(),f.focus()}function h(a,c,d){b.edit.on(),b.events.focus(!0),b.selection.restore(),b.opts.fileUseSelectedText&&b.selection.text().length&&(c=b.selection.text()),b.html.insert('<a href="'+a+'" id="fr-inserted-file" class="fr-file">'+c+"</a>");var e=b.$el.find("#fr-inserted-file");e.removeAttr("id"),b.popups.hide("file.insert"),b.undo.saveStep(),x(),b.events.trigger("file.inserted",[e,d])}function i(a){try{if(!1===b.events.trigger("file.uploaded",[a],!0))return b.edit.on(),!1;var c=JSON.parse(a);return c.link?c:(n(z,a),!1)}catch(d){return n(B,a),!1}}function j(c){try{var d=a(c).find("Location").text(),e=a(c).find("Key").text();return!1===b.events.trigger("file.uploadedToS3",[d,e,c],!0)?(b.edit.on(),!1):d}catch(f){return n(B,c),!1}}function k(a){var c=this.status,d=this.response,e=this.responseXML,f=this.responseText;try{if(b.opts.fileUploadToS3)if(201==c){var g=j(e);g&&h(g,a,d||e)}else n(B,d||e);else if(c>=200&&c<300){var k=i(f);k&&h(k.link,a,d||f)}else n(A,d||f)}catch(l){n(B,d||f)}}function l(){n(B,this.response||this.responseText||this.responseXML)}function m(a){if(a.lengthComputable){var c=a.loaded/a.total*100|0;f(b.language.translate("Uploading"),c)}}function n(a,c){b.edit.on(),g(b.language.translate("Something went wrong. Please try again.")),b.events.trigger("file.error",[{code:a,message:E[a]},c])}function o(){b.edit.on(),e(!0)}function p(a){if(void 0!==a&&a.length>0){if(!1===b.events.trigger("file.beforeUpload",[a]))return!1;var c=a[0];if(c.size>b.opts.fileMaxSize)return n(C),!1;if(b.opts.fileAllowedTypes.indexOf("*")<0&&b.opts.fileAllowedTypes.indexOf(c.type.replace(/file\//g,""))<0)return n(D),!1;var e;if(b.drag_support.formdata&&(e=b.drag_support.formdata?new FormData:null),e){var f;if(!1!==b.opts.fileUploadToS3){e.append("key",b.opts.fileUploadToS3.keyStart+(new Date).getTime()+"-"+(c.name||"untitled")),e.append("success_action_status","201"),e.append("X-Requested-With","xhr"),e.append("Content-Type",c.type);for(f in b.opts.fileUploadToS3.params)b.opts.fileUploadToS3.params.hasOwnProperty(f)&&e.append(f,b.opts.fileUploadToS3.params[f])}for(f in b.opts.fileUploadParams)b.opts.fileUploadParams.hasOwnProperty(f)&&e.append(f,b.opts.fileUploadParams[f]);e.append(b.opts.fileUploadParam,c);var g=b.opts.fileUploadURL;b.opts.fileUploadToS3&&(g=b.opts.fileUploadToS3.uploadURL?b.opts.fileUploadToS3.uploadURL:"https://"+b.opts.fileUploadToS3.region+".amazonaws.com/"+b.opts.fileUploadToS3.bucket);var h=b.core.getXHR(g,b.opts.fileUploadMethod);h.onload=function(){k.call(h,c.name)},h.onerror=l,h.upload.onprogress=m,h.onabort=o,d(),b.edit.off();var i=b.popups.get("file.insert");i&&i.off("abortUpload").on("abortUpload",function(){4!=h.readyState&&h.abort()}),h.send(e)}}}function q(c){b.events.$on(c,"dragover dragenter",".fr-file-upload-layer",function(){return a(this).addClass("fr-drop"),!1},!0),b.events.$on(c,"dragleave dragend",".fr-file-upload-layer",function(){return a(this).removeClass("fr-drop"),!1},!0),b.events.$on(c,"drop",".fr-file-upload-layer",function(d){d.preventDefault(),d.stopPropagation(),a(this).removeClass("fr-drop");var e=d.originalEvent.dataTransfer;if(e&&e.files){(c.data("instance")||b).file.upload(e.files)}},!0),b.helpers.isIOS()&&b.events.$on(c,"touchstart",'.fr-file-upload-layer input[type="file"]',function(){a(this).trigger("click")}),b.events.$on(c,"change",'.fr-file-upload-layer input[type="file"]',function(){if(this.files){(c.data("instance")||b).file.upload(this.files)}a(this).val("")},!0)}function r(){e()}function s(a){if(a)return b.popups.onHide("file.insert",r),!0;var c="";c='<div class="fr-buttons">'+b.button.buildList(b.opts.fileInsertButtons)+"</div>";var d="";d='<div class="fr-file-upload-layer fr-layer fr-active" id="fr-file-upload-layer-'+b.id+'"><strong>'+b.language.translate("Drop file")+"</strong><br>("+b.language.translate("or click")+')<div class="fr-form"><input type="file" name="'+b.opts.fileUploadParam+'" accept="/*" tabIndex="-1" aria-labelledby="fr-file-upload-layer-'+b.id+'" role="button"></div></div>';var e='<div class="fr-file-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="fileDismissError" tabIndex="2" role="button">OK</button></div></div>',f={buttons:c,upload_layer:d,progress_bar:e},g=b.popups.create("file.insert",f);return q(g),g}function t(a){b.node.hasClass(a,"fr-file")}function u(c){var e=c.originalEvent.dataTransfer;if(e&&e.files&&e.files.length){var f=e.files[0];if(f&&void 0!==f.type&&f.type.indexOf("image")<0&&(b.opts.fileAllowedTypes.indexOf(f.type)>=0||b.opts.fileAllowedTypes.indexOf("*")>=0)){b.markers.remove(),b.markers.insertAtPoint(c.originalEvent),b.$el.find(".fr-marker").replaceWith(a.FE.MARKERS),b.popups.hideAll();var g=b.popups.get("file.insert");return g||(g=s()),b.popups.setContainer("file.insert",b.$sc),b.popups.show("file.insert",c.originalEvent.pageX,c.originalEvent.pageY),d(),p(e.files),c.preventDefault(),c.stopPropagation(),!1}}}function v(){b.events.on("drop",u),b.events.$on(b.$win,"keydown",function(c){var d=c.which,e=b.popups.get("file.insert");e&&d==a.FE.KEYCODE.ESC&&e.trigger("abortUpload")}),b.events.on("destroy",function(){var a=b.popups.get("file.insert");a&&a.trigger("abortUpload")})}function w(){b.events.disableBlur(),b.selection.restore(),b.events.enableBlur(),b.popups.hide("file.insert"),b.toolbar.showInline()}function x(){var a,c=Array.prototype.slice.call(b.el.querySelectorAll("a.fr-file")),d=[];for(a=0;a<c.length;a++)d.push(c[a].getAttribute("href"));if(F)for(a=0;a<F.length;a++)d.indexOf(F[a].getAttribute("href"))<0&&b.events.trigger("file.unlink",[F[a]]);F=c}function y(){v(),b.events.on("link.beforeRemove",t),b.$wp&&(x(),b.events.on("contentChanged",x)),s(!0)}var z=2,A=3,B=4,C=5,D=6,E={};E[1]="File cannot be loaded from the passed link.",E[z]="No link in upload response.",E[A]="Error during file upload.",E[B]="Parsing response failed.",E[C]="File is too large.",E[D]="File file type is invalid.",E[7]="Files can be uploaded only to same domain in IE 8 and IE 9.";var F;return{_init:y,showInsertPopup:c,upload:p,insert:h,back:w,hideProgressBar:e}},a.FE.DefineIcon("insertFile",{NAME:"file-o"}),a.FE.RegisterCommand("insertFile",{title:"Upload File",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("file.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("file.insert")):this.file.showInsertPopup()},plugin:"file"}),a.FE.DefineIcon("fileBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("fileBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.file.back()},refresh:function(a){this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.RegisterCommand("fileDismissError",{title:"OK",callback:function(){this.file.hideProgressBar(!0)}}),a.extend(a.FE.DEFAULTS,{fontFamily:{"Arial,Helvetica,sans-serif":"Arial","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","Tahoma,Geneva,sans-serif":"Tahoma","Times New Roman,Times,serif,-webkit-standard":"Times New Roman","Verdana,Geneva,sans-serif":"Verdana"},fontFamilySelection:!1,fontFamilyDefaultSelection:"Font Family"}),a.FE.PLUGINS.fontFamily=function(b){function c(a){b.format.applyStyle("font-family",a)}function d(a,b){b.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),b.find('.fr-command[data-param1="'+g()+'"]').addClass("fr-active").attr("aria-selected",!0);var c=b.find(".fr-dropdown-list"),d=b.find(".fr-active").parent();d.length?c.parent().scrollTop(d.offset().top-c.offset().top-(c.parent().outerHeight()/2-d.outerHeight()/2)):c.parent().scrollTop(0)}function e(b){var c=b.replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'| /g,"").split(",");return a.grep(c,function(a){return a.length>0})}function f(a,b){for(var c=0;c<a.length;c++)for(var d=0;d<b.length;d++)if(a[c]==b[d])return[c,d];return null}function g(){var c=a(b.selection.element()).css("font-family"),d=e(c),g=[];for(var h in b.opts.fontFamily)if(b.opts.fontFamily.hasOwnProperty(h)){var i=e(h),j=f(d,i);j&&g.push([h,j])}return 0===g.length?null:(g.sort(function(a,b){var c=a[1][0]-b[1][0];return 0===c?a[1][1]-b[1][1]:c}),g[0][0])}function h(c){if(b.opts.fontFamilySelection){var d=a(b.selection.element()).css("font-family").replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'|/g,"").split(",");c.find("> span").text(b.opts.fontFamily[g()]||d[0]||b.language.translate(b.opts.fontFamilyDefaultSelection))}}return{apply:c,refreshOnShow:d,refresh:h}},a.FE.RegisterCommand("fontFamily",{type:"dropdown",displaySelection:function(a){return a.opts.fontFamilySelection},defaultSelection:function(a){return a.opts.fontFamilyDefaultSelection},displaySelectionWidth:120,html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.fontFamily;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontFamily" data-param1="'+c+'" style="font-family: '+c+'" title="'+b[c]+'">'+b[c]+"</a></li>");return a+="</ul>"},title:"Font Family",callback:function(a,b){this.fontFamily.apply(b)},refresh:function(a){this.fontFamily.refresh(a)},refreshOnShow:function(a,b){this.fontFamily.refreshOnShow(a,b)},plugin:"fontFamily"}),a.FE.DefineIcon("fontFamily",{NAME:"font"}),a.extend(a.FE.DEFAULTS,{fontSize:["8","9","10","11","12","14","18","24","30","36","48","60","72","96"],fontSizeSelection:!1,fontSizeDefaultSelection:"12"}),a.FE.PLUGINS.fontSize=function(b){function c(a){b.format.applyStyle("font-size",a)}function d(c,d){var e=a(b.selection.element()).css("font-size");d.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),d.find('.fr-command[data-param1="'+e+'"]').addClass("fr-active").attr("aria-selected",!0);var f=d.find(".fr-dropdown-list"),g=d.find(".fr-active").parent();g.length?f.parent().scrollTop(g.offset().top-f.offset().top-(f.parent().outerHeight()/2-g.outerHeight()/2)):f.parent().scrollTop(0)}function e(c){if(b.opts.fontSizeSelection){var d=b.helpers.getPX(a(b.selection.element()).css("font-size"));c.find("> span").text(d)}}return{apply:c,refreshOnShow:d,refresh:e}},a.FE.RegisterCommand("fontSize",{type:"dropdown",title:"Font Size",displaySelection:function(a){return a.opts.fontSizeSelection},displaySelectionWidth:30,defaultSelection:function(a){return a.opts.fontSizeDefaultSelection},html:function(){for(var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.fontSize,c=0;c<b.length;c++){var d=b[c];a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'+d+'px" title="'+d+'">'+d+"</a></li>"}return a+="</ul>"},callback:function(a,b){this.fontSize.apply(b)},refresh:function(a){this.fontSize.refresh(a)},refreshOnShow:function(a,b){this.fontSize.refreshOnShow(a,b)},plugin:"fontSize"}),a.FE.DefineIcon("fontSize",{NAME:"text-height"}),a.extend(a.FE.POPUP_TEMPLATES,{"forms.edit":"[_BUTTONS_]","forms.update":"[_BUTTONS_][_TEXT_LAYER_]"}),a.extend(a.FE.DEFAULTS,{formEditButtons:["inputStyle","inputEdit"],formStyles:{"fr-rounded":"Rounded","fr-large":"Large"},formMultipleStyles:!0,formUpdateButtons:["inputBack","|"]}),a.FE.PLUGINS.forms=function(b){function c(c){c.preventDefault(),b.selection.clear(),a(this).data("mousedown",!0)}function d(b){a(this).data("mousedown")&&(b.stopPropagation(),a(this).removeData("mousedown"),s=this,j(this)),b.preventDefault()}function e(){b.$el.find("input, textarea, button").removeData("mousedown")}function f(){a(this).removeData("mousedown")}function g(){b.events.$on(b.$el,b._mousedown,"input, textarea, button",c),b.events.$on(b.$el,b._mouseup,"input, textarea, button",d),b.events.$on(b.$el,"touchmove","input, textarea, button",f),b.events.$on(b.$el,b._mouseup,e),b.events.$on(b.$win,b._mouseup,e),m(!0)}function h(){return s||null}function i(){var a="";b.opts.formEditButtons.length>0&&(a='<div class="fr-buttons">'+b.button.buildList(b.opts.formEditButtons)+"</div>");var c={buttons:a},d=b.popups.create("forms.edit",c);return b.$wp&&b.events.$on(b.$wp,"scroll.link-edit",function(){h()&&b.popups.isVisible("forms.edit")&&j(h())}),d}function j(c){var d=b.popups.get("forms.edit");d||(d=i()),s=c;var e=a(c);b.popups.refresh("forms.edit"),b.popups.setContainer("forms.edit",b.$sc);var f=e.offset().left+e.outerWidth()/2,g=e.offset().top+e.outerHeight();b.popups.show("forms.edit",f,g,e.outerHeight())}function k(){var c=b.popups.get("forms.update"),d=h();if(d){var e=a(d);e.is("button")?c.find('input[type="text"][name="text"]').val(e.text()):c.find('input[type="text"][name="text"]').val(e.attr("placeholder"))}c.find('input[type="text"][name="text"]').trigger("change")}function l(){s=null}function m(a){if(a)return b.popups.onRefresh("forms.update",k),b.popups.onHide("forms.update",l),!0;var c="";b.opts.formUpdateButtons.length>=1&&(c='<div class="fr-buttons">'+b.button.buildList(b.opts.formUpdateButtons)+"</div>");var d="",e=0;d='<div class="fr-forms-text-layer fr-layer fr-active">',d+='<div class="fr-input-line"><input name="text" type="text" placeholder="Text" tabIndex="'+ ++e+'"></div>',d+='<div class="fr-action-buttons"><button class="fr-command fr-submit" data-cmd="updateInput" href="#" tabIndex="'+ ++e+'" type="button">'+b.language.translate("Update")+"</button></div></div>";var f={buttons:c,text_layer:d};return b.popups.create("forms.update",f)}function n(){var c=h();if(c){var d=a(c),e=b.popups.get("forms.update");e||(e=m()),b.popups.isVisible("forms.update")||b.popups.refresh("forms.update"),b.popups.setContainer("forms.update",b.$sc);var f=d.offset().left+d.outerWidth()/2,g=d.offset().top+d.outerHeight();b.popups.show("forms.update",f,g,d.outerHeight())}}function o(c,d,e){void 0===d&&(d=b.opts.formStyles),void 0===e&&(e=b.opts.formMultipleStyles);var f=h();if(!f)return!1;if(!e){var g=Object.keys(d);g.splice(g.indexOf(c),1),a(f).removeClass(g.join(" "))}a(f).toggleClass(c)}function p(){b.events.disableBlur(),b.selection.restore(),b.events.enableBlur();var a=h();a&&b.$wp&&("BUTTON"==a.tagName&&b.selection.restore(),j(a))}function q(){var c=b.popups.get("forms.update"),d=h();if(d){var e=a(d),f=c.find('input[type="text"][name="text"]').val()||"";f.length&&(e.is("button")?e.text(f):e.attr("placeholder",f)),b.popups.hide("forms.update"),j(d)}}function r(){g(),b.events.$on(b.$el,"submit","form",function(a){return a.preventDefault(),!1})}var s;return{_init:r,updateInput:q,getInput:h,applyStyle:o,showUpdatePopup:n,showEditPopup:j,back:p}},a.FE.RegisterCommand("updateInput",{undo:!1,focus:!1,title:"Update",callback:function(){this.forms.updateInput()}}),a.FE.DefineIcon("inputStyle",{NAME:"magic"}),a.FE.RegisterCommand("inputStyle",{title:"Style",type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list">',b=this.opts.formStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li><a class="fr-command" tabIndex="-1" data-cmd="inputStyle" data-param1="'+c+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},callback:function(a,b){var c=this.forms.getInput();c&&(this.forms.applyStyle(b),this.forms.showEditPopup(c))},refreshOnShow:function(b,c){var d=this.forms.getInput();if(d){var e=a(d);c.find(".fr-command").each(function(){var b=a(this).data("param1");a(this).toggleClass("fr-active",e.hasClass(b))})}}}),a.FE.DefineIcon("inputEdit",{NAME:"edit"}),a.FE.RegisterCommand("inputEdit",{title:"Edit Button",undo:!1,refreshAfterCallback:!1,callback:function(){this.forms.showUpdatePopup()}}),a.FE.DefineIcon("inputBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("inputBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.forms.back()}}),a.FE.RegisterCommand("updateInput",{undo:!1,focus:!1,title:"Update",callback:function(){this.forms.updateInput()}}),a.FE.PLUGINS.fullscreen=function(b){function c(){return b.$box.hasClass("fr-fullscreen")}function d(){i=b.helpers.scrollTop(),b.$box.toggleClass("fr-fullscreen"),a("body:first").toggleClass("fr-fullscreen"),j=a('<div style="display: none;"></div>'),b.$box.after(j),b.helpers.isMobile()&&(b.$tb.data("parent",b.$tb.parent()),b.$tb.prependTo(b.$box),b.$tb.data("sticky-dummy")&&b.$tb.after(b.$tb.data("sticky-dummy"))),k=b.opts.height,l=b.opts.heightMax,m=b.opts.zIndex,b.opts.height=b.o_win.innerHeight-(b.opts.toolbarInline?0:b.$tb.outerHeight()),b.opts.zIndex=9990,b.opts.heightMax=null,b.size.refresh(),b.opts.toolbarInline&&b.toolbar.showInline();for(var c=b.$box.parent();!c.is("body:first");)c.data("z-index",c.css("z-index")).data("overflow",c.css("overflow")).css("z-index","9990").css("overflow","visible"),c=c.parent();b.events.trigger("charCounter.update"),b.$win.trigger("scroll")}function e(){b.$box.toggleClass("fr-fullscreen"),a("body:first").toggleClass("fr-fullscreen"),b.$tb.prependTo(b.$tb.data("parent")),b.$tb.data("sticky-dummy")&&b.$tb.after(b.$tb.data("sticky-dummy")),b.opts.height=k,b.opts.heightMax=l,b.opts.zIndex=m,b.size.refresh(),a(b.o_win).scrollTop(i),b.opts.toolbarInline&&b.toolbar.showInline(),b.events.trigger("charCounter.update"),b.opts.toolbarSticky&&b.opts.toolbarStickyOffset&&(b.opts.toolbarBottom?b.$tb.css("bottom",b.opts.toolbarStickyOffset).data("bottom",b.opts.toolbarStickyOffset):b.$tb.css("top",b.opts.toolbarStickyOffset).data("top",b.opts.toolbarStickyOffset));for(var c=b.$box.parent();!c.is("body:first");)c.data("z-index")&&(c.css("z-index",""),c.css("z-index")!=c.data("z-index")&&c.css("z-index",c.data("z-index")),c.removeData("z-index")),c.data("overflow")?(c.css("overflow",""),c.css("overflow")!=c.data("overflow")&&c.css("overflow",c.data("overflow")),c.removeData("overflow")):(c.css("overflow",""),c.removeData("overflow")),c=c.parent();b.$win.trigger("scroll")}function f(){c()?e():d(),g(b.$tb.find('.fr-command[data-cmd="fullscreen"]'))}function g(a){var d=c();a.toggleClass("fr-active",d).attr("aria-pressed",d),a.find("> *:not(.fr-sr-only)").replaceWith(d?b.icon.create("fullscreenCompress"):b.icon.create("fullscreen"))}function h(){if(!b.$wp)return!1;b.events.$on(a(b.o_win),"resize",function(){c()&&(e(),d())}),b.events.on("toolbar.hide",function(){if(c()&&b.helpers.isMobile())return!1}),b.events.on("destroy",function(){c()&&e()},!0)}var i,j,k,l,m;return{_init:h,toggle:f,refresh:g,isActive:c}},a.FE.RegisterCommand("fullscreen",{title:"Fullscreen",undo:!1,focus:!1,accessibilityFocus:!0,forcedRefresh:!0,toggle:!0,callback:function(){this.fullscreen.toggle()},refresh:function(a){this.fullscreen.refresh(a)},plugin:"fullscreen"}),a.FE.DefineIcon("fullscreen",{NAME:"expand"}),a.FE.DefineIcon("fullscreenCompress",{NAME:"compress"}),a.extend(a.FE.DEFAULTS,{helpSets:[{title:"Inline Editor",commands:[{val:"OSkeyE",desc:"Show the editor"}]},{title:"Common actions",commands:[{val:"OSkeyC",desc:"Copy"},{val:"OSkeyX",desc:"Cut"},{val:"OSkeyV",desc:"Paste"},{val:"OSkeyZ",desc:"Undo"},{val:"OSkeyShift+Z",desc:"Redo"},{val:"OSkeyK",desc:"Insert link"},{val:"OSkeyP",desc:"Insert image"}]},{title:"Basic Formatting",commands:[{val:"OSkeyA",desc:"Select all"},{val:"OSkeyB",desc:"Bold"},{val:"OSkeyI",desc:"Italic"},{val:"OSkeyU",desc:"Underline"},{val:"OSkeyS",desc:"Strikethrough"},{val:"OSkey]",desc:"Indent"},{val:"OSkey[",desc:"Outdent"}]},{title:"Quote",commands:[{val:"OSkey'",desc:"Increase quote level"},{val:"OSkeyShift+'",desc:"Decrease quote level"}]},{title:"Image / Video",commands:[{val:"OSkey+",desc:"Resize larger"},{val:"OSkey-",desc:"Resize smaller"}]},{title:"Table",commands:[{val:"Alt+Space",desc:"Select table cell"},{val:"Shift+Left/Right arrow",desc:"Extend selection one cell"},{val:"Shift+Up/Down arrow",desc:"Extend selection one row"}]},{title:"Navigation",commands:[{val:"OSkey/",desc:"Shortcuts"},{val:"Alt+F10",desc:"Focus popup / toolbar"},{val:"Esc",
desc:"Return focus to previous position"}]}]}),a.FE.PLUGINS.help=function(b){function c(){}function d(){for(var c='<div class="fr-help-modal">',d=0;d<a.FE.DEFAULTS.helpSets.length;d++){var e=a.FE.DEFAULTS.helpSets[d],f="<table>";f+="<thead><tr><th>"+e.title+"</th></tr></thead>",f+="<tbody>";for(var g=0;g<e.commands.length;g++){var h=e.commands[g];f+="<tr>",f+="<td>"+h.desc+"</td>",f+="<td>"+h.val.replace("OSkey",b.helpers.isMac()?"&#8984;":"Ctrl+")+"</td>",f+="</tr>"}f+="</tbody></table>",c+=f}return c+="</div>"}function e(){if(!g){var c="<h4>Shortcuts</h4>",e=d(),f=b.modals.create(j,c,e);g=f.$modal,h=f.$head,i=f.$body,b.events.$on(a(b.o_win),"resize",function(){b.modals.resize(j)})}b.modals.show(j),b.modals.resize(j)}function f(){b.modals.hide(j)}var g,h,i,j="help";return{_init:c,show:e,hide:f}},a.FroalaEditor.DefineIcon("help",{NAME:"question"}),a.FE.RegisterShortcut(a.FE.KEYCODE.SLASH,"help",null,"/"),a.FE.RegisterCommand("help",{title:"Help",icon:"help",undo:!1,focus:!1,modal:!0,callback:function(){this.help.show()},plugin:"help",showOnMobile:!1}),a.extend(a.FE.POPUP_TEMPLATES,{"image.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_BY_URL_LAYER_][_PROGRESS_BAR_]","image.edit":"[_BUTTONS_]","image.alt":"[_BUTTONS_][_ALT_LAYER_]","image.size":"[_BUTTONS_][_SIZE_LAYER_]"}),a.extend(a.FE.DEFAULTS,{imageInsertButtons:["imageBack","|","imageUpload","imageByURL"],imageEditButtons:["imageReplace","imageAlign","imageRemove","|","imageLink","linkOpen","linkEdit","linkRemove","-","imageDisplay","imageStyle","imageAlt","imageSize"],imageAltButtons:["imageBack","|"],imageSizeButtons:["imageBack","|"],imageUploadURL:"https://i.froala.com/upload",imageUploadParam:"file",imageUploadParams:{},imageUploadToS3:!1,imageUploadMethod:"POST",imageMaxSize:10485760,imageAllowedTypes:["jpeg","jpg","png","gif","svg+xml"],imageResize:!0,imageResizeWithPercent:!1,imageRoundPercent:!1,imageDefaultWidth:300,imageDefaultAlign:"center",imageDefaultDisplay:"block",imageSplitHTML:!1,imageStyles:{"fr-rounded":"Rounded","fr-bordered":"Bordered"},imageMove:!0,imageMultipleStyles:!0,imageTextNear:!0,imagePaste:!0,imagePasteProcess:!1,imageMinWidth:16,imageOutputSize:!1,imageDefaultMargin:5}),a.FE.PLUGINS.image=function(b){function c(){var a=b.popups.get("image.insert"),c=a.find(".fr-image-by-url-layer input");c.val(""),xa&&c.val(xa.attr("src")),c.trigger("change")}function d(){var a=b.$tb.find('.fr-command[data-cmd="insertImage"]'),c=b.popups.get("image.insert");if(c||(c=L()),s(),!c.hasClass("fr-active"))if(b.popups.refresh("image.insert"),b.popups.setContainer("image.insert",b.$tb),a.is(":visible")){var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("image.insert",d,e,a.outerHeight())}else b.position.forSelection(c),b.popups.show("image.insert")}function e(){var a=b.popups.get("image.edit");if(a||(a=q()),a){b.popups.setContainer("image.edit",b.$sc),b.popups.refresh("image.edit");var c=xa.offset().left+xa.outerWidth()/2,d=xa.offset().top+xa.outerHeight();b.popups.show("image.edit",c,d,xa.outerHeight())}}function f(){s()}function g(a){a.hasClass("fr-dii")||a.hasClass("fr-dib")||(a.addClass("fr-fi"+ma(a)[0]),a.addClass("fr-di"+na(a)[0]),a.css("margin",""),a.css("float",""),a.css("display",""),a.css("z-index",""),a.css("position",""),a.css("overflow",""),a.css("vertical-align",""))}function h(a){ka(a,a.hasClass("fr-dib")?"block":a.hasClass("fr-dii")?"inline":null,a.hasClass("fr-fil")?"left":a.hasClass("fr-fir")?"right":ma(a)),a.removeClass("fr-dib fr-dii fr-fir fr-fil")}function i(){for(var c="IMG"==b.el.tagName?[b.el]:b.el.querySelectorAll("img"),d=0;d<c.length;d++){var e=a(c[d]);!b.opts.htmlUntouched&&b.opts.useClasses?((b.opts.imageEditButtons.indexOf("imageAlign")>=0||b.opts.imageEditButtons.indexOf("imageDisplay")>=0)&&g(e),b.opts.imageTextNear||e.removeClass("fr-dii").addClass("fr-dib")):b.opts.htmlUntouched||b.opts.useClasses||(b.opts.imageEditButtons.indexOf("imageAlign")>=0||b.opts.imageEditButtons.indexOf("imageDisplay")>=0)&&h(e),b.opts.iframe&&e.on("load",b.size.syncIframe)}}function j(c){void 0===c&&(c=!0);var d,e=Array.prototype.slice.call(b.el.querySelectorAll("img")),f=[];for(d=0;d<e.length;d++)f.push(e[d].getAttribute("src")),a(e[d]).toggleClass("fr-draggable",b.opts.imageMove),""===e[d].getAttribute("class")&&e[d].removeAttribute("class"),""===e[d].getAttribute("style")&&e[d].removeAttribute("style");if(Ka)for(d=0;d<Ka.length;d++)f.indexOf(Ka[d].getAttribute("src"))<0&&b.events.trigger("image.removed",[a(Ka[d])]);if(Ka&&c){var g=[];for(d=0;d<Ka.length;d++)g.push(Ka[d].getAttribute("src"));for(d=0;d<e.length;d++)g.indexOf(e[d].getAttribute("src"))<0&&b.events.trigger("image.loaded",[a(e[d])])}Ka=e}function k(){if(ya||Y(),!xa)return!1;var a=b.$wp||b.$sc;a.append(ya),ya.data("instance",b);var c=a.scrollTop()-("static"!=a.css("position")?a.offset().top:0),d=a.scrollLeft()-("static"!=a.css("position")?a.offset().left:0);d-=b.helpers.getPX(a.css("border-left-width")),c-=b.helpers.getPX(a.css("border-top-width")),b.$el.is("img")&&b.$sc.is("body")&&(c=0,d=0),ya.css("top",(b.opts.iframe?xa.offset().top:xa.offset().top+c)-1).css("left",(b.opts.iframe?xa.offset().left:xa.offset().left+d)-1).css("width",xa.get(0).getBoundingClientRect().width).css("height",xa.get(0).getBoundingClientRect().height).addClass("fr-active")}function l(a){return'<div class="fr-handler fr-h'+a+'"></div>'}function m(c){if(!b.core.sameInstance(ya))return!0;if(c.preventDefault(),c.stopPropagation(),b.$el.find("img.fr-error").left)return!1;b.undo.canDo()||b.undo.saveStep();var d=c.pageX||c.originalEvent.touches[0].pageX;if("mousedown"==c.type){var e=b.$oel.get(0),f=e.ownerDocument,g=f.defaultView||f.parentWindow,h=!1;try{h=g.location!=g.parent.location&&!(g.$&&g.$.FE)}catch(k){}h&&g.frameElement&&(d+=b.helpers.getPX(a(g.frameElement).offset().left)+g.frameElement.clientLeft)}za=a(this),za.data("start-x",d),za.data("start-width",xa.width()),za.data("start-height",xa.height());var i=xa.width();if(b.opts.imageResizeWithPercent){var j=xa.parentsUntil(b.$el,b.html.blockTagsQuery()).get(0)||b.el;xa.css("width",(i/a(j).outerWidth()*100).toFixed(2)+"%")}else xa.css("width",i);Aa.show(),b.popups.hideAll(),ia()}function n(c){if(!b.core.sameInstance(ya))return!0;var d;if(za&&xa){if(c.preventDefault(),b.$el.find("img.fr-error").left)return!1;var e=c.pageX||(c.originalEvent.touches?c.originalEvent.touches[0].pageX:null);if(!e)return!1;var f=za.data("start-x"),g=e-f,h=za.data("start-width");if((za.hasClass("fr-hnw")||za.hasClass("fr-hsw"))&&(g=0-g),b.opts.imageResizeWithPercent){var i=xa.parentsUntil(b.$el,b.html.blockTagsQuery()).get(0)||b.el;h=((h+g)/a(i).outerWidth()*100).toFixed(2),b.opts.imageRoundPercent&&(h=Math.round(h)),xa.css("width",h+"%"),d=(b.helpers.getPX(xa.css("width"))/a(i).outerWidth()*100).toFixed(2),d!==h&&xa.css("width",d+"%"),xa.css("height","").removeAttr("height")}else h+g>=b.opts.imageMinWidth&&xa.css("width",h+g),d=b.helpers.getPX(xa.css("width")),d!==h+g&&xa.css("width",d),(xa.attr("style")||"").match(/(^height:)|(; *height:)/)&&xa.css("height",za.data("start-height")*xa.width()/za.data("start-width"));k(),b.events.trigger("image.resize",[va()])}}function o(a){if(!b.core.sameInstance(ya))return!0;if(za&&xa){if(a&&a.stopPropagation(),b.$el.find("img.fr-error").left)return!1;za=null,Aa.hide(),k(),e(),b.undo.saveStep(),b.events.trigger("image.resizeEnd",[va()])}}function p(a,c,d){b.edit.on(),xa&&xa.addClass("fr-error"),u(b.language.translate("Something went wrong. Please try again.")),!xa&&d&&Z(d),b.events.trigger("image.error",[{code:a,message:Ja[a]},c,d])}function q(a){if(a)return b.$wp&&b.events.$on(b.$wp,"scroll",function(){xa&&b.popups.isVisible("image.edit")&&(b.events.disableBlur(),w(xa))}),!0;var c="";if(b.opts.imageEditButtons.length>0){c+='<div class="fr-buttons">',c+=b.button.buildList(b.opts.imageEditButtons),c+="</div>";var d={buttons:c};return b.popups.create("image.edit",d)}return!1}function r(a){var c=b.popups.get("image.insert");if(c||(c=L()),c.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),c.find(".fr-image-progress-bar-layer").addClass("fr-active"),c.find(".fr-buttons").hide(),xa){b.popups.setContainer("image.insert",b.$sc);var d=xa.offset().left+xa.width()/2,e=xa.offset().top+xa.height();b.popups.show("image.insert",d,e,xa.outerHeight())}void 0===a&&t(b.language.translate("Uploading"),0)}function s(a){var c=b.popups.get("image.insert");if(c&&(c.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),c.find(".fr-image-progress-bar-layer").removeClass("fr-active"),c.find(".fr-buttons").show(),a||b.$el.find("img.fr-error").length)){if(b.events.focus(),b.$el.find("img.fr-error").length&&(b.$el.find("img.fr-error").remove(),b.undo.saveStep(),b.undo.run(),b.undo.dropRedo()),!b.$wp&&xa){var d=xa;ga(!0),b.selection.setAfter(d.get(0)),b.selection.restore()}b.popups.hide("image.insert")}}function t(a,c){var d=b.popups.get("image.insert");if(d){var e=d.find(".fr-image-progress-bar-layer");e.find("h3").text(a+(c?" "+c+"%":"")),e.removeClass("fr-error"),c?(e.find("div").removeClass("fr-indeterminate"),e.find("div > span").css("width",c+"%")):e.find("div").addClass("fr-indeterminate")}}function u(a){r();var c=b.popups.get("image.insert"),d=c.find(".fr-image-progress-bar-layer");d.addClass("fr-error");var e=d.find("h3");e.text(a),b.events.disableBlur(),e.focus()}function v(){var a=b.popups.get("image.insert"),c=a.find(".fr-image-by-url-layer input");c.val().length>0&&(r(),t(b.language.translate("Loading image")),y(c.val(),!0,[],xa),c.val(""),c.blur())}function w(a){fa.call(a.get(0))}function x(){var c=a(this);b.popups.hide("image.insert"),c.removeClass("fr-uploading"),c.next().is("br")&&c.next().remove(),w(c),b.events.trigger("image.loaded",[c])}function y(a,c,d,e,f){b.edit.off(),t(b.language.translate("Loading image")),c&&(a=b.helpers.sanitizeURL(a));var g=new Image;g.onload=function(){var c,g;if(e){b.undo.canDo()||e.hasClass("fr-uploading")||b.undo.saveStep();var h=e.data("fr-old-src");e.data("fr-image-pasted")&&(h=null),b.$wp?(c=e.clone().removeData("fr-old-src").removeClass("fr-uploading").removeAttr("data-fr-image-pasted"),c.off("load"),h&&e.attr("src",h),e.replaceWith(c)):c=e;for(var i=c.get(0).attributes,k=0;k<i.length;k++){var l=i[k];0===l.nodeName.indexOf("data-")&&c.removeAttr(l.nodeName)}if(void 0!==d)for(g in d)d.hasOwnProperty(g)&&"link"!=g&&c.attr("data-"+g,d[g]);c.on("load",x),c.attr("src",a),b.edit.on(),j(!1),b.undo.saveStep(),b.$el.blur(),b.events.trigger(h?"image.replaced":"image.inserted",[c,f])}else c=E(a,d,x),j(!1),b.undo.saveStep(),b.$el.blur(),b.events.trigger("image.inserted",[c,f])},g.onerror=function(){p(Ca)},r(b.language.translate("Loading image")),g.src=a}function z(a){try{if(!1===b.events.trigger("image.uploaded",[a],!0))return b.edit.on(),!1;var c=JSON.parse(a);return c.link?c:(p(Da,a),!1)}catch(d){return p(Fa,a),!1}}function A(c){try{var d=a(c).find("Location").text(),e=a(c).find("Key").text();return!1===b.events.trigger("image.uploadedToS3",[d,e,c],!0)?(b.edit.on(),!1):d}catch(f){return p(Fa,c),!1}}function B(a){t(b.language.translate("Loading image"));var c=this.status,d=this.response,e=this.responseXML,f=this.responseText;try{if(b.opts.imageUploadToS3)if(201==c){var g=A(e);g&&y(g,!1,[],a,d||e)}else p(Fa,d||e,a);else if(c>=200&&c<300){var h=z(f);h&&y(h.link,!1,h,a,d||f)}else p(Ea,d||f,a)}catch(i){p(Fa,d||f,a)}}function C(){p(Fa,this.response||this.responseText||this.responseXML)}function D(a){if(a.lengthComputable){var c=a.loaded/a.total*100|0;t(b.language.translate("Uploading"),c)}}function E(c,d,e){var f,g="";if(d&&void 0!==d)for(f in d)d.hasOwnProperty(f)&&"link"!=f&&(g+=" data-"+f+'="'+d[f]+'"');var h=b.opts.imageDefaultWidth;h&&"auto"!=h&&(h+=b.opts.imageResizeWithPercent?"%":"px");var i=a('<img src="'+c+'"'+g+(h?' style="width: '+h+';"':"")+">");ka(i,b.opts.imageDefaultDisplay,b.opts.imageDefaultAlign),i.on("load",e),i.on("error",function(){p(Ia)}),b.edit.on(),b.events.focus(!0),b.selection.restore(),b.undo.saveStep(),b.opts.imageSplitHTML?b.markers.split():b.markers.insert();var j=b.$el.find(".fr-marker");return j.length?(j.parent().is("hr")&&j.parent().after(j),b.node.isLastSibling(j)&&j.parent().hasClass("fr-deletable")&&j.insertAfter(j.parent()),j.replaceWith(i)):b.$el.append(i),b.html.wrap(),b.selection.clear(),i}function F(){b.edit.on(),s(!0)}function G(c,d,e,f){function g(){var e=a(this);e.off("load"),e.addClass("fr-uploading"),e.next().is("br")&&e.next().remove(),b.placeholder.refresh(),w(e),k(),r(),b.edit.off(),c.onload=function(){B.call(c,e)},c.onerror=C,c.upload.onprogress=D,c.onabort=F,e.off("abortUpload").on("abortUpload",function(){4!=c.readyState&&c.abort()}),c.send(d)}var h,i=new FileReader;i.addEventListener("load",function(){var a=i.result;if(i.result.indexOf("svg+xml")<0){for(var c=atob(i.result.split(",")[1]),d=[],e=0;e<c.length;e++)d.push(c.charCodeAt(e));a=window.URL.createObjectURL(new Blob([new Uint8Array(d)],{type:"image/jpeg"}))}f?(f.on("load",g),f.one("error",function(){f.off("load"),f.attr("src",f.data("fr-old-src")),p(Ia)}),b.edit.on(),b.undo.saveStep(),f.data("fr-old-src",f.attr("src")),f.attr("src",a)):h=E(a,null,g)},!1),i.readAsDataURL(e)}function H(a,c){if(void 0!==a&&a.length>0){if(!1===b.events.trigger("image.beforeUpload",[a,c]))return!1;var d=a[0];if(d.name||(d.name=(new Date).getTime()+".jpg"),d.size>b.opts.imageMaxSize)return p(Ga),!1;if(b.opts.imageAllowedTypes.indexOf(d.type.replace(/image\//g,""))<0)return p(Ha),!1;var e;if(b.drag_support.formdata&&(e=b.drag_support.formdata?new FormData:null),e){var f;if(!1!==b.opts.imageUploadToS3){e.append("key",b.opts.imageUploadToS3.keyStart+(new Date).getTime()+"-"+(d.name||"untitled")),e.append("success_action_status","201"),e.append("X-Requested-With","xhr"),e.append("Content-Type",d.type);for(f in b.opts.imageUploadToS3.params)b.opts.imageUploadToS3.params.hasOwnProperty(f)&&e.append(f,b.opts.imageUploadToS3.params[f])}for(f in b.opts.imageUploadParams)b.opts.imageUploadParams.hasOwnProperty(f)&&e.append(f,b.opts.imageUploadParams[f]);e.append(b.opts.imageUploadParam,d,d.name);var g=b.opts.imageUploadURL;b.opts.imageUploadToS3&&(g=b.opts.imageUploadToS3.uploadURL?b.opts.imageUploadToS3.uploadURL:"https://"+b.opts.imageUploadToS3.region+".amazonaws.com/"+b.opts.imageUploadToS3.bucket);G(b.core.getXHR(g,b.opts.imageUploadMethod),e,d,c||xa)}}}function I(c){b.events.$on(c,"dragover dragenter",".fr-image-upload-layer",function(){return a(this).addClass("fr-drop"),!1}),b.events.$on(c,"dragleave dragend",".fr-image-upload-layer",function(){return a(this).removeClass("fr-drop"),!1}),b.events.$on(c,"drop",".fr-image-upload-layer",function(d){d.preventDefault(),d.stopPropagation(),a(this).removeClass("fr-drop");var e=d.originalEvent.dataTransfer;if(e&&e.files){var f=c.data("instance")||b;f.events.disableBlur(),f.image.upload(e.files),f.events.enableBlur()}}),b.helpers.isIOS()&&b.events.$on(c,"touchstart",'.fr-image-upload-layer input[type="file"]',function(){a(this).trigger("click")}),b.events.$on(c,"change",'.fr-image-upload-layer input[type="file"]',function(){if(this.files){var d=c.data("instance")||b;d.events.disableBlur(),c.find("input:focus").blur(),d.events.enableBlur(),d.image.upload(this.files,xa)}a(this).val("")})}function J(c){var d=c.originalEvent.dataTransfer;if(d&&d.files&&d.files.length){var e=d.files[0];if(e&&e.type&&-1!==e.type.indexOf("image")){b.markers.remove(),b.markers.insertAtPoint(c.originalEvent),b.$el.find(".fr-marker").replaceWith(a.FE.MARKERS),0===b.$el.find(".fr-marker").length&&b.selection.setAtEnd(b.el),b.popups.hideAll();var f=b.popups.get("image.insert");f||(f=L()),b.popups.setContainer("image.insert",b.$sc);var g=c.originalEvent.pageX,h=c.originalEvent.pageY;return b.opts.iframe&&(h+=b.$iframe.offset().top,g+=b.$iframe.offset().left),b.popups.show("image.insert",g,h),r(),b.opts.imageAllowedTypes.indexOf(e.type.replace(/image\//g,""))>=0?(ga(!0),H(d.files)):p(Ha),c.preventDefault(),c.stopPropagation(),!1}}}function K(){b.events.$on(b.$el,b._mousedown,"IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;b.helpers.isMobile()||b.selection.clear(),Ba=!0,b.popups.areVisible()&&b.events.disableBlur(),b.browser.msie&&(b.events.disableBlur(),b.$el.attr("contenteditable",!1)),b.draggable||"touchstart"==c.type||c.preventDefault(),c.stopPropagation()}),b.events.$on(b.$el,b._mouseup,"IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;Ba&&(Ba=!1,c.stopPropagation(),b.browser.msie&&(b.$el.attr("contenteditable",!0),b.events.enableBlur()))}),b.events.on("keyup",function(c){if(c.shiftKey&&""===b.selection.text().replace(/\n/g,"")){var d=b.selection.element(),e=b.selection.endElement();d&&"IMG"==d.tagName?w(a(d)):e&&"IMG"==e.tagName&&w(a(e))}},!0),b.events.on("drop",J),b.events.on("mousedown window.mousedown",ha),b.events.on("window.touchmove",ia),b.events.on("mouseup window.mouseup",function(){if(xa)return ga(),!1;ia()}),b.events.on("commands.mousedown",function(a){a.parents(".fr-toolbar").length>0&&ga()}),b.events.on("blur image.hideResizer commands.undo commands.redo element.dropped",function(){Ba=!1,ga(!0)}),b.events.on("modals.hide",function(){xa&&(ta(),b.selection.clear())})}function L(a){if(a)return b.popups.onRefresh("image.insert",c),b.popups.onHide("image.insert",f),!0;var d,e="";b.opts.imageInsertButtons.length>1&&(e='<div class="fr-buttons">'+b.button.buildList(b.opts.imageInsertButtons)+"</div>");var g=b.opts.imageInsertButtons.indexOf("imageUpload"),h=b.opts.imageInsertButtons.indexOf("imageByURL"),i="";g>=0&&(d=" fr-active",h>=0&&g>h&&(d=""),i='<div class="fr-image-upload-layer'+d+' fr-layer" id="fr-image-upload-layer-'+b.id+'"><strong>'+b.language.translate("Drop image")+"</strong><br>("+b.language.translate("or click")+')<div class="fr-form"><input type="file" accept="image/'+b.opts.imageAllowedTypes.join(", image/").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-image-upload-layer-'+b.id+'" role="button"></div></div>');var j="";h>=0&&(d=" fr-active",g>=0&&h>g&&(d=""),j='<div class="fr-image-by-url-layer'+d+' fr-layer" id="fr-image-by-url-layer-'+b.id+'"><div class="fr-input-line"><input id="fr-image-by-url-layer-text-'+b.id+'" type="text" placeholder="http://" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageInsertByURL" tabIndex="2" role="button">'+b.language.translate("Insert")+"</button></div></div>");var k='<div class="fr-image-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="imageDismissError" tabIndex="2" role="button">OK</button></div></div>',l={buttons:e,upload_layer:i,by_url_layer:j,progress_bar:k},m=b.popups.create("image.insert",l);return b.$wp&&b.events.$on(b.$wp,"scroll",function(){xa&&b.popups.isVisible("image.insert")&&sa()}),I(m),m}function M(){if(xa){b.popups.get("image.alt").find("input").val(xa.attr("alt")||"").trigger("change")}}function N(){var a=b.popups.get("image.alt");a||(a=O()),s(),b.popups.refresh("image.alt"),b.popups.setContainer("image.alt",b.$sc);var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.alt",c,d,xa.outerHeight())}function O(a){if(a)return b.popups.onRefresh("image.alt",M),!0;var c="";c='<div class="fr-buttons">'+b.button.buildList(b.opts.imageAltButtons)+"</div>";var d="";d='<div class="fr-image-alt-layer fr-layer fr-active" id="fr-image-alt-layer-'+b.id+'"><div class="fr-input-line"><input id="fr-image-alt-layer-text-'+b.id+'" type="text" placeholder="'+b.language.translate("Alternate Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetAlt" tabIndex="2" role="button">'+b.language.translate("Update")+"</button></div></div>";var e={buttons:c,alt_layer:d},f=b.popups.create("image.alt",e);return b.$wp&&b.events.$on(b.$wp,"scroll.image-alt",function(){xa&&b.popups.isVisible("image.alt")&&N()}),f}function P(a){if(xa){var c=b.popups.get("image.alt");xa.attr("alt",a||c.find("input").val()||""),c.find("input:focus").blur(),w(xa)}}function Q(){if(xa){var a=b.popups.get("image.size");a.find('input[name="width"]').val(xa.get(0).style.width).trigger("change"),a.find('input[name="height"]').val(xa.get(0).style.height).trigger("change")}}function R(){var a=b.popups.get("image.size");a||(a=S()),s(),b.popups.refresh("image.size"),b.popups.setContainer("image.size",b.$sc);var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.size",c,d,xa.outerHeight())}function S(a){if(a)return b.popups.onRefresh("image.size",Q),!0;var c="";c='<div class="fr-buttons">'+b.button.buildList(b.opts.imageSizeButtons)+"</div>";var d="";d='<div class="fr-image-size-layer fr-layer fr-active" id="fr-image-size-layer-'+b.id+'"><div class="fr-image-group"><div class="fr-input-line"><input id="fr-image-size-layer-width-'+b.id+'" type="text" name="width" placeholder="'+b.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input id="fr-image-size-layer-height'+b.id+'" type="text" name="height" placeholder="'+b.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetSize" tabIndex="2" role="button">'+b.language.translate("Update")+"</button></div></div>";var e={buttons:c,size_layer:d},f=b.popups.create("image.size",e);return b.$wp&&b.events.$on(b.$wp,"scroll.image-size",function(){xa&&b.popups.isVisible("image.size")&&R()}),f}function T(a,c){if(xa){var d=b.popups.get("image.size");a=a||d.find('input[name="width"]').val()||"",c=c||d.find('input[name="height"]').val()||"";var e=/^[\d]+((px)|%)*$/g;a.match(e)?xa.css("width",a):xa.css("width",""),c.match(e)?xa.css("height",c):xa.css("height",""),d.find("input:focus").blur(),w(xa)}}function U(a){var c,d,e=b.popups.get("image.insert");if(xa||b.opts.toolbarInline)xa&&(d=xa.offset().top+xa.outerHeight());else{var f=b.$tb.find('.fr-command[data-cmd="insertImage"]');c=f.offset().left+f.outerWidth()/2,d=f.offset().top+(b.opts.toolbarBottom?10:f.outerHeight()-10)}!xa&&b.opts.toolbarInline&&(d=e.offset().top-b.helpers.getPX(e.css("margin-top")),e.hasClass("fr-above")&&(d+=e.outerHeight())),e.find(".fr-layer").removeClass("fr-active"),e.find(".fr-"+a+"-layer").addClass("fr-active"),b.popups.show("image.insert",c,d,xa?xa.outerHeight():0),b.accessibility.focusPopup(e)}function V(a){b.popups.get("image.insert").find(".fr-image-upload-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function W(a){b.popups.get("image.insert").find(".fr-image-by-url-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function X(a,b,c,d){return a.pageX=b,m.call(this,a),a.pageX=a.pageX+c*Math.floor(Math.pow(1.1,d)),n.call(this,a),o.call(this,a),++d}function Y(){var c;if(b.shared.$image_resizer?(ya=b.shared.$image_resizer,Aa=b.shared.$img_overlay,b.events.on("destroy",function(){ya.removeClass("fr-active").appendTo(a("body:first"))},!0)):(b.shared.$image_resizer=a('<div class="fr-image-resizer"></div>'),ya=b.shared.$image_resizer,b.events.$on(ya,"mousedown",function(a){a.stopPropagation()},!0),b.opts.imageResize&&(ya.append(l("nw")+l("ne")+l("sw")+l("se")),b.shared.$img_overlay=a('<div class="fr-image-overlay"></div>'),Aa=b.shared.$img_overlay,c=ya.get(0).ownerDocument,a(c).find("body:first").append(Aa))),b.events.on("shared.destroy",function(){ya.html("").removeData().remove(),ya=null,b.opts.imageResize&&(Aa.remove(),Aa=null)},!0),b.helpers.isMobile()||b.events.$on(a(b.o_win),"resize",function(){xa&&!xa.hasClass("fr-uploading")?ga(!0):xa&&(k(),sa(),r(!1))}),b.opts.imageResize){c=ya.get(0).ownerDocument,b.events.$on(ya,b._mousedown,".fr-handler",m),b.events.$on(a(c),b._mousemove,n),b.events.$on(a(c.defaultView||c.parentWindow),b._mouseup,o),b.events.$on(Aa,"mouseleave",o);var d=1,e=null,f=0;b.events.on("keydown",function(c){if(xa){var g=-1!=navigator.userAgent.indexOf("Mac OS X")?c.metaKey:c.ctrlKey,h=c.which;(h!==e||c.timeStamp-f>200)&&(d=1),(h==a.FE.KEYCODE.EQUALS||b.browser.mozilla&&h==a.FE.KEYCODE.FF_EQUALS)&&g&&!c.altKey?d=X.call(this,c,1,1,d):(h==a.FE.KEYCODE.HYPHEN||b.browser.mozilla&&h==a.FE.KEYCODE.FF_HYPHEN)&&g&&!c.altKey?d=X.call(this,c,2,-1,d):b.keys.ctrlKey(c)||h!=a.FE.KEYCODE.ENTER||(xa.before("<br>"),w(xa)),e=h,f=c.timeStamp}},!0),b.events.on("keyup",function(){d=1})}}function Z(c){(c=c||xa)&&!1!==b.events.trigger("image.beforeRemove",[c])&&(b.popups.hideAll(),ta(),ga(!0),b.undo.canDo()||b.undo.saveStep(),c.get(0)==b.el?c.removeAttr("src"):("A"==c.get(0).parentNode.tagName?(b.selection.setBefore(c.get(0).parentNode)||b.selection.setAfter(c.get(0).parentNode)||c.parent().after(a.FE.MARKERS),a(c.get(0).parentNode).remove()):(b.selection.setBefore(c.get(0))||b.selection.setAfter(c.get(0))||c.after(a.FE.MARKERS),c.remove()),b.html.fillEmptyBlocks(),b.selection.restore()),b.undo.saveStep())}function $(c){var d=c.which;if(xa&&(d==a.FE.KEYCODE.BACKSPACE||d==a.FE.KEYCODE.DELETE))return c.preventDefault(),c.stopPropagation(),Z(),!1;if(xa&&d==a.FE.KEYCODE.ESC){var e=xa;return ga(!0),b.selection.setAfter(e.get(0)),b.selection.restore(),c.preventDefault(),!1}if(xa&&(d==a.FE.KEYCODE.ARROW_LEFT||d==a.FE.KEYCODE.ARROW_RIGHT)){var f=xa.get(0);return ga(!0),d==a.FE.KEYCODE.ARROW_LEFT?b.selection.setBefore(f):b.selection.setAfter(f),b.selection.restore(),c.preventDefault(),!1}return xa&&d!=a.FE.KEYCODE.F10&&!b.keys.isBrowserAction(c)?(c.preventDefault(),c.stopPropagation(),!1):void 0}function _(a){if(a&&"IMG"==a.tagName)b.node.hasClass(a,"fr-uploading")||b.node.hasClass(a,"fr-error")?a.parentNode.removeChild(a):b.node.hasClass(a,"fr-draggable")&&a.classList.remove("fr-draggable");else if(a&&a.nodeType==Node.ELEMENT_NODE)for(var c=a.querySelectorAll("img.fr-uploading, img.fr-error, img.fr-draggable"),d=0;d<c.length;d++)_(c[d])}function aa(){if(K(),"IMG"==b.el.tagName&&b.$el.addClass("fr-view"),b.events.$on(b.$el,b.helpers.isMobile()&&!b.helpers.isWindowsPhone()?"touchend":"click","IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',fa),b.helpers.isMobile()&&(b.events.$on(b.$el,"touchstart","IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(){La=!1}),b.events.$on(b.$el,"touchmove",function(){La=!0})),b.$wp?(b.events.on("window.keydown keydown",$,!0),b.events.on("keyup",function(b){if(xa&&b.which==a.FE.KEYCODE.ENTER)return!1},!0)):b.events.$on(b.$win,"keydown",$),b.events.on("toolbar.esc",function(){if(xa){if(b.$wp)b.events.disableBlur(),b.events.focus();else{var a=xa;ga(!0),b.selection.setAfter(a.get(0)),b.selection.restore()}return!1}},!0),b.events.on("toolbar.focusEditor",function(){if(xa)return!1},!0),b.events.on("window.cut window.copy",function(a){xa&&b.popups.isVisible("image.edit")&&!b.popups.get("image.edit").find(":focus").length&&(ta(),b.paste.saveCopiedText(xa.get(0).outerHTML,"\n"),"copy"==a.type?setTimeout(function(){w(xa)}):(ga(!0),b.undo.saveStep(),setTimeout(function(){b.undo.saveStep()},0)))},!0),b.browser.msie&&b.events.on("keydown",function(c){if(!b.selection.isCollapsed()||!xa)return!0;var d=c.which;d==a.FE.KEYCODE.C&&b.keys.ctrlKey(c)?b.events.trigger("window.copy"):d==a.FE.KEYCODE.X&&b.keys.ctrlKey(c)&&b.events.trigger("window.cut")}),b.events.$on(a(b.o_win),"keydown",function(b){var c=b.which;if(xa&&c==a.FE.KEYCODE.BACKSPACE)return b.preventDefault(),!1}),b.events.$on(b.$win,"keydown",function(b){var c=b.which;xa&&xa.hasClass("fr-uploading")&&c==a.FE.KEYCODE.ESC&&xa.trigger("abortUpload")}),b.events.on("destroy",function(){xa&&xa.hasClass("fr-uploading")&&xa.trigger("abortUpload")}),b.events.on("paste.before",da),b.events.on("paste.beforeCleanup",ea),b.events.on("paste.after",ca),b.events.on("html.set",i),b.events.on("html.inserted",i),i(),b.events.on("destroy",function(){Ka=[]}),b.events.on("html.processGet",_),b.opts.imageOutputSize){var c;b.events.on("html.beforeGet",function(){c=b.el.querySelectorAll("img");for(var d=0;d<c.length;d++){var e=c[d].style.width||a(c[d]).width(),f=c[d].style.height||a(c[d]).height();e&&c[d].setAttribute("width",(""+e).replace(/px/,"")),f&&c[d].setAttribute("height",(""+f).replace(/px/,""))}})}b.opts.iframe&&b.events.on("image.loaded",b.size.syncIframe),b.$wp&&(j(),b.events.on("contentChanged",j)),b.events.$on(a(b.o_win),"orientationchange.image",function(){setTimeout(function(){xa&&w(xa)},100)}),q(!0),L(!0),S(!0),O(!0),b.events.on("node.remove",function(a){if("IMG"==a.get(0).tagName)return Z(a),!1})}function ba(c){if(!1===b.events.trigger("image.beforePasteUpload",[c]))return!1;xa=a(c),k(),e(),sa(),r();for(var d=atob(a(c).attr("src").split(",")[1]),f=[],g=0;g<d.length;g++)f.push(d.charCodeAt(g));H([new Blob([new Uint8Array(f)],{type:"image/jpeg"})],xa)}function ca(){b.opts.imagePaste?b.$el.find("img[data-fr-image-pasted]").each(function(c,d){if(b.opts.imagePasteProcess){var e=b.opts.imageDefaultWidth;e&&"auto"!=e&&(e+=b.opts.imageResizeWithPercent?"%":"px"),a(d).css("width",e).removeClass("fr-dii fr-dib fr-fir fr-fil").addClass((b.opts.imageDefaultDisplay?"fr-di"+b.opts.imageDefaultDisplay[0]:"")+(b.opts.imageDefaultAlign&&"center"!=b.opts.imageDefaultAlign?" fr-fi"+b.opts.imageDefaultAlign[0]:""))}if(0===d.src.indexOf("data:"))ba(d);else if(0===d.src.indexOf("blob:")){var f=new Image;f.crossOrigin="Anonymous",f.onload=function(){var a=b.o_doc.createElement("CANVAS"),c=a.getContext("2d");a.height=this.naturalHeight,a.width=this.naturalWidth,c.drawImage(this,0,0),d.src=a.toDataURL("image/png"),ba(d)},f.src=d.src}else 0!==d.src.indexOf("http")||0===d.src.indexOf("https://mail.google.com/mail")?(b.selection.save(),a(d).remove(),b.selection.restore()):a(d).removeAttr("data-fr-image-pasted")}):b.$el.find("img[data-fr-image-pasted]").remove()}function da(a){if(a&&a.clipboardData&&a.clipboardData.items&&a.clipboardData.items[0]){var c=a.clipboardData.items[0].getAsFile();if(c){var d=new FileReader;return d.onload=function(a){var c=a.target.result,d=b.opts.imageDefaultWidth;d&&"auto"!=d&&(d+=b.opts.imageResizeWithPercent?"%":"px"),b.html.insert('<img data-fr-image-pasted="true" class="'+(b.opts.imageDefaultDisplay?"fr-di"+b.opts.imageDefaultDisplay[0]:"")+(b.opts.imageDefaultAlign&&"center"!=b.opts.imageDefaultAlign?" fr-fi"+b.opts.imageDefaultAlign[0]:"")+'" src="'+c+'"'+(d?' style="width: '+d+';"':"")+">"),b.events.trigger("paste.after")},d.readAsDataURL(c),!1}}}function ea(a){return a=a.replace(/<img /gi,'<img data-fr-image-pasted="true" ')}function fa(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;if(c&&"touchend"==c.type&&La)return!0;if(c&&b.edit.isDisabled())return c.stopPropagation(),c.preventDefault(),!1;for(var d=0;d<a.FE.INSTANCES.length;d++)a.FE.INSTANCES[d]!=b&&a.FE.INSTANCES[d].events.trigger("image.hideResizer");b.toolbar.disable(),c&&(c.stopPropagation(),c.preventDefault()),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur()),b.opts.iframe&&b.size.syncIframe(),xa=a(this),b.browser.msie||ta(),k(),e(),b.browser.msie||b.selection.clear(),b.helpers.isIOS()&&(b.events.disableBlur(),b.$el.blur()),b.button.bulkRefresh(),b.events.trigger("video.hideResizer")}function ga(a){xa&&(ja()||!0===a)&&(b.toolbar.enable(),ya.removeClass("fr-active"),b.popups.hide("image.edit"),xa=null,ia())}function ha(){Ma=!0}function ia(){Ma=!1}function ja(){return Ma}function ka(a,c,d){!b.opts.htmlUntouched&&b.opts.useClasses?(a.removeClass("fr-fil fr-fir fr-dib fr-dii"),d&&a.addClass("fr-fi"+d[0]),c&&a.addClass("fr-di"+c[0])):"inline"==c?(a.css({
display:"inline-block",verticalAlign:"bottom",margin:b.opts.imageDefaultMargin}),"center"==d?a.css({float:"none",marginBottom:"",marginTop:"",maxWidth:"calc(100% - "+2*b.opts.imageDefaultMargin+"px)"}):"left"==d?a.css({float:"left",marginLeft:0,maxWidth:"calc(100% - "+b.opts.imageDefaultMargin+"px)"}):a.css({float:"right",marginRight:0,maxWidth:"calc(100% - "+b.opts.imageDefaultMargin+"px)"})):"block"==c&&(a.css({display:"block",float:"none",verticalAlign:"top",margin:b.opts.imageDefaultMargin+"px auto"}),"left"==d?a.css({marginLeft:0}):"right"==d&&a.css({marginRight:0}))}function la(a){xa.removeClass("fr-fir fr-fil"),!b.opts.htmlUntouched&&b.opts.useClasses?"left"==a?xa.addClass("fr-fil"):"right"==a&&xa.addClass("fr-fir"):ka(xa,na(),a),ta(),k(),e(),b.selection.clear()}function ma(a){if(void 0===a&&(a=xa),a){if(a.hasClass("fr-fil"))return"left";if(a.hasClass("fr-fir"))return"right";if(a.hasClass("fr-dib")||a.hasClass("fr-dii"))return"center";var b=a.css("float");if(a.css("float","none"),"block"==a.css("display")){if(a.css("float",""),a.css("float")!=b&&a.css("float",b),0===parseInt(a.css("margin-left"),10))return"left";if(0===parseInt(a.css("margin-right"),10))return"right"}else{if(a.css("float",""),a.css("float")!=b&&a.css("float",b),"left"==a.css("float"))return"left";if("right"==a.css("float"))return"right"}}return"center"}function na(a){void 0===a&&(a=xa);var b=a.css("float");return a.css("float","none"),"block"==a.css("display")?(a.css("float",""),a.css("float")!=b&&a.css("float",b),"block"):(a.css("float",""),a.css("float")!=b&&a.css("float",b),"inline")}function oa(a){xa&&a.find("> *:first").replaceWith(b.icon.create("image-align-"+ma()))}function pa(a,b){xa&&b.find('.fr-command[data-param1="'+ma()+'"]').addClass("fr-active").attr("aria-selected",!0)}function qa(a){xa.removeClass("fr-dii fr-dib"),!b.opts.htmlUntouched&&b.opts.useClasses?"inline"==a?xa.addClass("fr-dii"):"block"==a&&xa.addClass("fr-dib"):ka(xa,a,ma()),ta(),k(),e(),b.selection.clear()}function ra(a,b){xa&&b.find('.fr-command[data-param1="'+na()+'"]').addClass("fr-active").attr("aria-selected",!0)}function sa(){var a=b.popups.get("image.insert");a||(a=L()),b.popups.isVisible("image.insert")||(s(),b.popups.refresh("image.insert"),b.popups.setContainer("image.insert",b.$sc));var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.insert",c,d,xa.outerHeight())}function ta(){if(xa){b.selection.clear();var a=b.doc.createRange();a.selectNode(xa.get(0));b.selection.get().addRange(a)}}function ua(){xa?(b.events.disableBlur(),a(".fr-popup input:focus").blur(),w(xa)):(b.events.disableBlur(),b.selection.restore(),b.events.enableBlur(),b.popups.hide("image.insert"),b.toolbar.showInline())}function va(){return xa}function wa(a,c,d){if(void 0===c&&(c=b.opts.imageStyles),void 0===d&&(d=b.opts.imageMultipleStyles),!xa)return!1;if(!d){var e=Object.keys(c);e.splice(e.indexOf(a),1),xa.removeClass(e.join(" "))}"object"==typeof c[a]?(xa.removeAttr("style"),xa.css(c[a].style)):xa.toggleClass(a),w(xa)}var xa,ya,za,Aa,Ba=!1,Ca=1,Da=2,Ea=3,Fa=4,Ga=5,Ha=6,Ia=8,Ja={};Ja[Ca]="Image cannot be loaded from the passed link.",Ja[Da]="No link in upload response.",Ja[Ea]="Error during file upload.",Ja[Fa]="Parsing response failed.",Ja[Ga]="File is too large.",Ja[Ha]="Image file type is invalid.",Ja[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",Ja[Ia]="Image file is corrupted.";var Ka,La,Ma=!1;return{_init:aa,showInsertPopup:d,showLayer:U,refreshUploadButton:V,refreshByURLButton:W,upload:H,insertByURL:v,align:la,refreshAlign:oa,refreshAlignOnShow:pa,display:qa,refreshDisplayOnShow:ra,replace:sa,back:ua,get:va,insert:y,showProgressBar:r,remove:Z,hideProgressBar:s,applyStyle:wa,showAltPopup:N,showSizePopup:R,setAlt:P,setSize:T,exitEdit:ga,edit:w}},a.FE.DefineIcon("insertImage",{NAME:"image"}),a.FE.RegisterShortcut(a.FE.KEYCODE.P,"insertImage",null,"P"),a.FE.RegisterCommand("insertImage",{title:"Insert Image",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("image.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("image.insert")):this.image.showInsertPopup()},plugin:"image"}),a.FE.DefineIcon("imageUpload",{NAME:"upload"}),a.FE.RegisterCommand("imageUpload",{title:"Upload Image",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-upload")},refresh:function(a){this.image.refreshUploadButton(a)}}),a.FE.DefineIcon("imageByURL",{NAME:"link"}),a.FE.RegisterCommand("imageByURL",{title:"By URL",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-by-url")},refresh:function(a){this.image.refreshByURLButton(a)}}),a.FE.RegisterCommand("imageInsertByURL",{title:"Insert Image",undo:!0,refreshAfterCallback:!1,callback:function(){this.image.insertByURL()},refresh:function(a){this.image.get()?a.text(this.language.translate("Replace")):a.text(this.language.translate("Insert"))}}),a.FE.DefineIcon("imageDisplay",{NAME:"star"}),a.FE.RegisterCommand("imageDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(a,b){this.image.display(b)},refresh:function(a){this.opts.imageTextNear||a.addClass("fr-hidden")},refreshOnShow:function(a,b){this.image.refreshDisplayOnShow(a,b)}}),a.FE.DefineIcon("image-align",{NAME:"align-left"}),a.FE.DefineIcon("image-align-left",{NAME:"align-left"}),a.FE.DefineIcon("image-align-right",{NAME:"align-right"}),a.FE.DefineIcon("image-align-center",{NAME:"align-justify"}),a.FE.DefineIcon("imageAlign",{NAME:"align-justify"}),a.FE.RegisterCommand("imageAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"None",right:"Align Right"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.imageAlign.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="imageAlign" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.icon.create("image-align-"+d)+'<span class="fr-sr-only">'+this.language.translate(c[d])+"</span></a></li>");return b+="</ul>"},callback:function(a,b){this.image.align(b)},refresh:function(a){this.image.refreshAlign(a)},refreshOnShow:function(a,b){this.image.refreshAlignOnShow(a,b)}}),a.FE.DefineIcon("imageReplace",{NAME:"exchange"}),a.FE.RegisterCommand("imageReplace",{title:"Replace",undo:!1,focus:!1,popup:!0,refreshAfterCallback:!1,callback:function(){this.image.replace()}}),a.FE.DefineIcon("imageRemove",{NAME:"trash"}),a.FE.RegisterCommand("imageRemove",{title:"Remove",callback:function(){this.image.remove()}}),a.FE.DefineIcon("imageBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("imageBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.image.back()},refresh:function(a){this.image.get()||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.RegisterCommand("imageDismissError",{title:"OK",undo:!1,callback:function(){this.image.hideProgressBar(!0)}}),a.FE.DefineIcon("imageStyle",{NAME:"magic"}),a.FE.RegisterCommand("imageStyle",{title:"Style",type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.imageStyles;for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];"object"==typeof d&&(d=d.title),a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="imageStyle" data-param1="'+c+'">'+this.language.translate(d)+"</a></li>"}return a+="</ul>"},callback:function(a,b){this.image.applyStyle(b)},refreshOnShow:function(b,c){var d=this.image.get();d&&c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=d.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}),a.FE.DefineIcon("imageAlt",{NAME:"info"}),a.FE.RegisterCommand("imageAlt",{undo:!1,focus:!1,popup:!0,title:"Alternate Text",callback:function(){this.image.showAltPopup()}}),a.FE.RegisterCommand("imageSetAlt",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setAlt()}}),a.FE.DefineIcon("imageSize",{NAME:"arrows-alt"}),a.FE.RegisterCommand("imageSize",{undo:!1,focus:!1,popup:!0,title:"Change Size",callback:function(){this.image.showSizePopup()}}),a.FE.RegisterCommand("imageSetSize",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setSize()}}),a.extend(a.FE.DEFAULTS,{imageManagerLoadURL:"https://i.froala.com/load-files",imageManagerLoadMethod:"get",imageManagerLoadParams:{},imageManagerPreloader:"",imageManagerDeleteURL:"",imageManagerDeleteMethod:"post",imageManagerDeleteParams:{},imageManagerPageSize:12,imageManagerScrollOffset:20,imageManagerToggleTags:!0}),a.FE.PLUGINS.imageManager=function(b){function c(){if(!z){var a='<div class="fr-modal-head-line"><i class="fa fa-bars fr-modal-more fr-not-available" id="fr-modal-more-'+b.sid+'" title="'+b.language.translate("Tags")+'"></i><h4 data-text="true">'+b.language.translate("Manage Images")+"</h4></div>";a+='<div class="fr-modal-tags" id="fr-modal-tags"></div>';var c='<img class="fr-preloader" id="fr-preloader" alt="'+b.language.translate("Loading")+'.." src="'+b.opts.imageManagerPreloader+'" style="display: none;">';c+='<div class="fr-image-list" id="fr-image-list"></div>';var d=b.modals.create(K,a,c);z=d.$modal,A=d.$head,B=d.$body}z.data("current-image",b.image.get()),b.modals.show(K),C||x(),g()}function d(){b.modals.hide(K)}function e(){var b=a(window).outerWidth();return b<768?2:b<1200?3:4}function f(){D.empty();for(var a=0;a<J;a++)D.append('<div class="fr-list-column"></div>')}function g(){C.show(),D.find(".fr-list-column").empty(),b.opts.imageManagerLoadURL?a.ajax({url:b.opts.imageManagerLoadURL,method:b.opts.imageManagerLoadMethod,data:b.opts.imageManagerLoadParams,dataType:"json",crossDomain:b.opts.requestWithCORS,xhrFields:{withCredentials:b.opts.requestWithCredentials},headers:b.opts.requestHeaders}).done(function(a,c,d){b.events.trigger("imageManager.imagesLoaded",[a]),h(a,d.response),C.hide()}).fail(function(){var a=this.xhr();s(M,a.response||a.responseText)}):s(N)}function h(a,b){try{D.find(".fr-list-column").empty(),G=0,H=0,I=0,F=a,i()}catch(c){s(O,b)}}function i(){if(H<F.length&&(D.outerHeight()<=B.outerHeight()+b.opts.imageManagerScrollOffset||B.scrollTop()+b.opts.imageManagerScrollOffset>D.outerHeight()-B.outerHeight())){G++;for(var a=b.opts.imageManagerPageSize*(G-1);a<Math.min(F.length,b.opts.imageManagerPageSize*G);a++)j(F[a])}}function j(c){var d=new Image,e=a('<div class="fr-image-container fr-empty fr-image-'+I+++'" data-loading="'+b.language.translate("Loading")+'.." data-deleting="'+b.language.translate("Deleting")+'..">');n(!1),d.onload=function(){e.height(Math.floor(e.width()/d.width*d.height));var f=a("<img/>");if(c.thumb)f.attr("src",c.thumb);else{if(s(P,c),!c.url)return s(Q,c),!1;f.attr("src",c.url)}if(c.url&&f.attr("data-url",c.url),c.tag)if(A.find(".fr-modal-more.fr-not-available").removeClass("fr-not-available"),A.find(".fr-modal-tags").show(),c.tag.indexOf(",")>=0){for(var g=c.tag.split(","),h=0;h<g.length;h++)g[h]=g[h].trim(),0===E.find('a[title="'+g[h]+'"]').length&&E.append('<a role="button" title="'+g[h]+'">'+g[h]+"</a>");f.attr("data-tag",g.join())}else 0===E.find('a[title="'+c.tag.trim()+'"]').length&&E.append('<a role="button" title="'+c.tag.trim()+'">'+c.tag.trim()+"</a>"),f.attr("data-tag",c.tag.trim());c.name&&f.attr("alt",c.name);for(var j in c)c.hasOwnProperty(j)&&"thumb"!=j&&"url"!=j&&"tag"!=j&&f.attr("data-"+j,c[j]);e.append(f).append(a(b.icon.create("imageManagerDelete")).addClass("fr-delete-img").attr("title",b.language.translate("Delete"))).append(a(b.icon.create("imageManagerInsert")).addClass("fr-insert-img").attr("title",b.language.translate("Insert"))),E.find(".fr-selected-tag").each(function(a,b){w(f,b.text)||e.hide()}),f.on("load",function(){e.removeClass("fr-empty"),e.height("auto"),H++,m(l(parseInt(f.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1)),n(!1),H%b.opts.imageManagerPageSize==0&&i()}),b.events.trigger("imageManager.imageLoaded",[f])},d.onerror=function(){H++,e.remove(),m(l(parseInt(e.attr("class").match(/fr-image-(\d+)/)[1],10)+1)),s(L,c),H%b.opts.imageManagerPageSize==0&&i()},d.src=c.thumb||c.url,k().append(e)}function k(){var b,c;return D.find(".fr-list-column").each(function(d,e){var f=a(e);0===d?(c=f.outerHeight(),b=f):f.outerHeight()<c&&(c=f.outerHeight(),b=f)}),b}function l(b){void 0===b&&(b=0);for(var c=[],d=I-1;d>=b;d--){var e=D.find(".fr-image-"+d);e.length&&(c.push(e),a('<div id="fr-image-hidden-container">').append(e),D.find(".fr-image-"+d).remove())}return c}function m(a){for(var b=a.length-1;b>=0;b--)k().append(a[b])}function n(a){if(void 0===a&&(a=!0),!z.is(":visible"))return!0;var c=e();if(c!=J){J=c;var d=l();f(),m(d)}b.modals.resize(K),a&&i()}function o(a){var b={},c=a.data();for(var d in c)c.hasOwnProperty(d)&&"url"!=d&&"tag"!=d&&(b[d]=c[d]);return b}function p(c){var d=a(c.currentTarget).siblings("img"),e=z.data("instance")||b,f=z.data("current-image");if(b.modals.hide(K),e.image.showProgressBar(),f)f.data("fr-old-src",f.attr("src")),f.trigger("click");else{e.events.focus(!0),e.selection.restore();var g=e.position.getBoundingRect(),h=g.left+g.width/2+a(b.doc).scrollLeft(),i=g.top+g.height+a(b.doc).scrollTop();e.popups.setContainer("image.insert",b.$sc),e.popups.show("image.insert",h,i)}e.image.insert(d.data("url"),!1,o(d),f)}function q(){z.find("#fr-modal-tags > a").each(function(){0===z.find('#fr-image-list [data-tag*="'+a(this).text()+'"]').length&&a(this).removeClass("fr-selected-tag").hide()}),u()}function r(c){var d=a(c.currentTarget).siblings("img"),e=b.language.translate("Are you sure? Image will be deleted.");confirm(e)&&(b.opts.imageManagerDeleteURL?!1!==b.events.trigger("imageManager.beforeDeleteImage",[d])&&(d.parent().addClass("fr-image-deleting"),a.ajax({method:b.opts.imageManagerDeleteMethod,url:b.opts.imageManagerDeleteURL,data:a.extend(a.extend({src:d.attr("src")},o(d)),b.opts.imageManagerDeleteParams),crossDomain:b.opts.requestWithCORS,xhrFields:{withCredentials:b.opts.requestWithCredentials},headers:b.opts.requestHeaders}).done(function(a){b.events.trigger("imageManager.imageDeleted",[a]);var c=l(parseInt(d.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1);d.parent().remove(),m(c),q(),n(!0)}).fail(function(){var a=this.xhr();s(R,a.response||a.responseText)})):s(S))}function s(c,d){10<=c&&c<20?C.hide():20<=c&&c<30&&a(".fr-image-deleting").removeClass("fr-image-deleting"),b.events.trigger("imageManager.error",[{code:c,message:T[c]},d])}function t(){var a=A.find(".fr-modal-head-line").outerHeight(),b=E.outerHeight();A.toggleClass("fr-show-tags"),A.hasClass("fr-show-tags")?(A.css("height",a+b),E.find("a").css("opacity",1)):(A.css("height",a),E.find("a").css("opacity",0))}function u(){var b=E.find(".fr-selected-tag");b.length>0?(D.find("img").parent().show(),b.each(function(b,c){D.find("img").each(function(b,d){var e=a(d);w(e,c.text)||e.parent().hide()})})):D.find("img").parent().show(),m(l()),i()}function v(c){c.preventDefault();var d=a(c.currentTarget);d.toggleClass("fr-selected-tag"),b.opts.imageManagerToggleTags&&d.siblings("a").removeClass("fr-selected-tag"),u()}function w(a,b){for(var c=(a.attr("data-tag")||"").split(","),d=0;d<c.length;d++)if(c[d]==b)return!0;return!1}function x(){C=z.find("#fr-preloader"),D=z.find("#fr-image-list"),E=z.find("#fr-modal-tags"),J=e(),f(),A.css("height",A.find(".fr-modal-head-line").outerHeight()),b.events.$on(a(b.o_win),"resize",function(){n(F?!0:!1)}),b.helpers.isMobile()&&(b.events.bindClick(D,"div.fr-image-container",function(b){z.find(".fr-mobile-selected").removeClass("fr-mobile-selected"),a(b.currentTarget).addClass("fr-mobile-selected")}),z.on(b._mousedown,function(){z.find(".fr-mobile-selected").removeClass("fr-mobile-selected")})),b.events.bindClick(D,".fr-insert-img",p),b.events.bindClick(D,".fr-delete-img",r),z.on(b._mousedown+" "+b._mouseup,function(a){a.stopPropagation()}),z.on(b._mousedown,"*",function(){b.events.disableBlur()}),B.on("scroll",i),b.events.bindClick(z,"i#fr-modal-more-"+b.sid,t),b.events.bindClick(E,"a",v)}function y(){if(!b.$wp&&"IMG"!=b.el.tagName)return!1}var z,A,B,C,D,E,F,G,H,I,J,K="image_manager",L=10,M=11,N=12,O=13,P=14,Q=15,R=21,S=22,T={};return T[L]="Image cannot be loaded from the passed link.",T[M]="Error during load images request.",T[N]="Missing imageManagerLoadURL option.",T[O]="Parsing load response failed.",T[P]="Missing image thumb.",T[Q]="Missing image URL.",T[R]="Error during delete image request.",T[S]="Missing imageManagerDeleteURL option.",{require:["image"],_init:y,show:c,hide:d}},!a.FE.PLUGINS.image)throw new Error("Image manager plugin requires image plugin.");a.FE.DEFAULTS.imageInsertButtons.push("imageManager"),a.FE.RegisterCommand("imageManager",{title:"Browse",undo:!1,focus:!1,modal:!0,callback:function(){this.imageManager.show()},plugin:"imageManager"}),a.FE.DefineIcon("imageManager",{NAME:"folder"}),a.FE.DefineIcon("imageManagerInsert",{NAME:"plus"}),a.FE.DefineIcon("imageManagerDelete",{NAME:"trash"}),a.extend(a.FE.DEFAULTS,{inlineStyles:{"Big Red":"font-size: 20px; color: red;","Small Blue":"font-size: 14px; color: blue;"}}),a.FE.PLUGINS.inlineStyle=function(b){function c(c){""!==b.selection.text()?b.html.insert(a.FE.START_MARKER+'<span style="'+c+'">'+b.selection.text()+"</span>"+a.FE.END_MARKER):b.html.insert('<span style="'+c+'">'+a.FE.INVISIBLE_SPACE+a.FE.MARKERS+"</span>")}return{apply:c}},a.FE.RegisterCommand("inlineStyle",{type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.inlineStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><span style="'+b[c]+'" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineStyle" data-param1="'+b[c]+'" title="'+this.language.translate(c)+'">'+this.language.translate(c)+"</a></span></li>");return a+="</ul>"},title:"Inline Style",callback:function(a,b){this.inlineStyle.apply(b)},plugin:"inlineStyle"}),a.FE.DefineIcon("inlineStyle",{NAME:"paint-brush"}),a.extend(a.FE.DEFAULTS,{lineBreakerTags:["table","hr","form","dl","span.fr-video"],lineBreakerOffset:15,lineBreakerHorizontalOffset:10}),a.FE.PLUGINS.lineBreaker=function(b){function c(a,c){var d,e,f,g,h,i,j,k;if(null==a)g=c.parent(),h=g.offset().top,j=c.offset().top,d=j-Math.min((j-h)/2,b.opts.lineBreakerOffset),f=g.outerWidth(),e=g.offset().left;else if(null==c)g=a.parent(),i=g.offset().top+g.outerHeight(),k=a.offset().top+a.outerHeight(),d=k+Math.min((i-k)/2,b.opts.lineBreakerOffset),f=g.outerWidth(),e=g.offset().left;else{g=a.parent();var l=a.offset().top+a.height(),m=c.offset().top;if(l>m)return!1;d=(l+m)/2,f=g.outerWidth(),e=g.offset().left}b.opts.iframe&&(e+=b.$iframe.offset().left-b.helpers.scrollLeft(),d+=b.$iframe.offset().top-b.helpers.scrollTop()),b.$box.append(q),q.css("top",d-b.win.pageYOffset),q.css("left",e-b.win.pageXOffset),q.css("width",f),q.data("tag1",a),q.data("tag2",c),q.addClass("fr-visible").data("instance",b)}function d(a,d){var f,g,h=a.offset().top,i=a.offset().top+a.outerHeight();if(Math.abs(i-d)<=b.opts.lineBreakerOffset||Math.abs(d-h)<=b.opts.lineBreakerOffset)if(Math.abs(i-d)<Math.abs(d-h)){g=a.get(0);for(var j=g.nextSibling;j&&j.nodeType==Node.TEXT_NODE&&0===j.textContent.length;)j=j.nextSibling;if(!j)return c(a,null),!0;if(f=e(j))return c(a,f),!0}else{if(g=a.get(0),!g.previousSibling)return c(null,a),!0;if(f=e(g.previousSibling))return c(f,a),!0}q.removeClass("fr-visible").removeData("instance")}function e(c){if(c){var d=a(c);if(0===b.$el.find(d).length)return null;if(c.nodeType!=Node.TEXT_NODE&&d.is(b.opts.lineBreakerTags.join(",")))return d;if(d.parents(b.opts.lineBreakerTags.join(",")).length>0)return c=d.parents(b.opts.lineBreakerTags.join(",")).get(0),0!==b.$el.find(c).length&&a(c).is(b.opts.lineBreakerTags.join(","))?a(c):null}return null}function f(c,d){var e=b.doc.elementFromPoint(c,d);return e&&!a(e).closest(".fr-line-breaker").length&&!b.node.isElement(e)&&e!=b.$wp.get(0)&&a(e).closest(b.$wp).length?e:null}function g(a,c,d){for(var e=d,g=null;e<=b.opts.lineBreakerOffset&&!g;)g=f(a,c-e),g||(g=f(a,c+e)),e+=d;return g}function h(a,c,d){for(var e=null;!e&&a>b.$box.offset().left&&a<b.$box.offset().left+b.$box.outerWidth();)e=f(a,c),e||(e=g(a,c,5)),"left"==d?a-=b.opts.lineBreakerHorizontalOffset:a+=b.opts.lineBreakerHorizontalOffset;return e}function i(a){s=null;var c=null,f=null,i=b.doc.elementFromPoint(a.pageX-b.win.pageXOffset,a.pageY-b.win.pageYOffset);i&&("HTML"==i.tagName||"BODY"==i.tagName||b.node.isElement(i)||(i.getAttribute("class")||"").indexOf("fr-line-breaker")>=0)?(f=g(a.pageX-b.win.pageXOffset,a.pageY-b.win.pageYOffset,1),f||(f=h(a.pageX-b.win.pageXOffset-b.opts.lineBreakerHorizontalOffset,a.pageY-b.win.pageYOffset,"left")),f||(f=h(a.pageX-b.win.pageXOffset+b.opts.lineBreakerHorizontalOffset,a.pageY-b.win.pageYOffset,"right")),c=e(f)):c=e(i),c?d(c,a.pageY):b.core.sameInstance(q)&&q.removeClass("fr-visible").removeData("instance")}function j(a){return!(q.hasClass("fr-visible")&&!b.core.sameInstance(q))&&(b.popups.areVisible()||b.el.querySelector(".fr-selected-cell")?(q.removeClass("fr-visible"),!0):void(!1!==r||b.edit.isDisabled()||(s&&clearTimeout(s),s=setTimeout(i,30,a))))}function k(){s&&clearTimeout(s),q.hasClass("fr-visible")&&q.removeClass("fr-visible").removeData("instance")}function l(){r=!0,k()}function m(){r=!1}function n(c){if(!b.core.sameInstance(q))return!0;c.preventDefault(),q.removeClass("fr-visible").removeData("instance");var d=q.data("tag1"),e=q.data("tag2"),f=b.html.defaultTag();null==d?f&&"TD"!=e.parent().get(0).tagName&&0===e.parents(f).length?e.before("<"+f+">"+a.FE.MARKERS+"<br></"+f+">"):e.before(a.FE.MARKERS+"<br>"):f&&"TD"!=d.parent().get(0).tagName&&0===d.parents(f).length?d.after("<"+f+">"+a.FE.MARKERS+"<br></"+f+">"):d.after(a.FE.MARKERS+"<br>"),b.selection.restore()}function o(){b.shared.$line_breaker||(b.shared.$line_breaker=a('<div class="fr-line-breaker"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+b.language.translate("Break")+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="21" y="11" width="2" height="8"/><rect x="14" y="17" width="7" height="2"/><path d="M14.000,14.000 L14.000,22.013 L9.000,18.031 L14.000,14.000 Z"/></svg></a></div>')),q=b.shared.$line_breaker,b.events.on("shared.destroy",function(){q.html("").removeData().remove(),q=null},!0),b.events.on("destroy",function(){q.removeData("instance").removeClass("fr-visible").appendTo("body:first"),clearTimeout(s)},!0),b.events.$on(q,"mousemove",function(a){a.stopPropagation()},!0),b.events.$on(q,"mousedown","a",function(a){a.stopPropagation()},!0),b.events.$on(q,"click","a",n,!0)}function p(){if(!b.$wp)return!1;o(),r=!1,b.events.$on(b.$win,"mousemove",j),b.events.$on(a(b.win),"scroll",k),b.events.on("popups.show.table.edit",k),b.events.on("commands.after",k),b.events.$on(a(b.win),"mousedown",l),b.events.$on(a(b.win),"mouseup",m)}var q,r,s;return{_init:p}},a.extend(a.FE.POPUP_TEMPLATES,{"link.edit":"[_BUTTONS_]","link.insert":"[_BUTTONS_][_INPUT_LAYER_]"}),a.extend(a.FE.DEFAULTS,{linkEditButtons:["linkOpen","linkStyle","linkEdit","linkRemove"],linkInsertButtons:["linkBack","|","linkList"],linkAttributes:{},linkAutoPrefix:"http://",linkStyles:{"fr-green":"Green","fr-strong":"Thick"},linkMultipleStyles:!0,linkConvertEmailAddress:!0,linkAlwaysBlank:!1,linkAlwaysNoFollow:!1,linkList:[{text:"Froala",href:"https://froala.com",target:"_blank"},{text:"Google",href:"https://google.com",target:"_blank"},{displayText:"Facebook",href:"https://facebook.com"}],linkText:!0}),a.FE.PLUGINS.link=function(b){function c(){var c=b.image?b.image.get():null;if(!c&&b.$wp){var d=b.selection.ranges(0).commonAncestorContainer;if(d&&(d.contains&&d.contains(b.el)||!b.el.contains(d)||b.el==d)&&(d=null),d&&"A"===d.tagName)return d;var e=b.selection.element(),f=b.selection.endElement();return"A"==e.tagName||b.node.isElement(e)||(e=a(e).parentsUntil(b.$el,"a:first").get(0)),"A"==f.tagName||b.node.isElement(f)||(f=a(f).parentsUntil(b.$el,"a:first").get(0)),f&&(f.contains&&f.contains(b.el)||!b.el.contains(f)||b.el==f)&&(f=null),e&&(e.contains&&e.contains(b.el)||!b.el.contains(e)||b.el==e)&&(e=null),f&&f==e&&"A"==f.tagName?e:null}return"A"==b.el.tagName?b.el:c&&c.get(0).parentNode&&"A"==c.get(0).parentNode.tagName?c.get(0).parentNode:void 0}function d(){var a=b.image?b.image.get():null,c=[];if(a)"A"==a.get(0).parentNode.tagName&&c.push(a.get(0).parentNode);else{var d,e,f,g;if(b.win.getSelection){var h=b.win.getSelection();if(h.getRangeAt&&h.rangeCount){g=b.doc.createRange();for(var i=0;i<h.rangeCount;++i)if(d=h.getRangeAt(i),e=d.commonAncestorContainer,e&&1!=e.nodeType&&(e=e.parentNode),e&&"a"==e.nodeName.toLowerCase())c.push(e);else{f=e.getElementsByTagName("a");for(var j=0;j<f.length;++j)g.selectNodeContents(f[j]),g.compareBoundaryPoints(d.END_TO_START,d)<1&&g.compareBoundaryPoints(d.START_TO_END,d)>-1&&c.push(f[j])}}}else if(b.doc.selection&&"Control"!=b.doc.selection.type)if(d=b.doc.selection.createRange(),e=d.parentElement(),"a"==e.nodeName.toLowerCase())c.push(e);else{f=e.getElementsByTagName("a"),g=b.doc.body.createTextRange();for(var k=0;k<f.length;++k)g.moveToElementText(f[k]),g.compareEndPoints("StartToEnd",d)>-1&&g.compareEndPoints("EndToStart",d)<1&&c.push(f[k])}}return c}function e(d){if(b.core.hasFocus()){if(g(),d&&"keyup"===d.type&&(d.altKey||d.which==a.FE.KEYCODE.ALT))return!0;setTimeout(function(){if(!d||d&&(1==d.which||"mouseup"!=d.type)){var e=c(),g=b.image?b.image.get():null;if(e&&!g){if(b.image){var h=b.node.contents(e);if(1==h.length&&"IMG"==h[0].tagName){var i=b.selection.ranges(0);return 0===i.startOffset&&0===i.endOffset?a(e).before(a.FE.MARKERS):a(e).after(a.FE.MARKERS),b.selection.restore(),!1}}d&&d.stopPropagation(),f(e)}}},b.helpers.isIOS()?100:0)}}function f(c){var d=b.popups.get("link.edit");d||(d=h());var e=a(c);b.popups.isVisible("link.edit")||b.popups.refresh("link.edit"),b.popups.setContainer("link.edit",b.$sc);var f=e.offset().left+a(c).outerWidth()/2,g=e.offset().top+e.outerHeight();b.popups.show("link.edit",f,g,e.outerHeight())}function g(){b.popups.hide("link.edit")}function h(){var a="";b.opts.linkEditButtons.length>1&&("A"==b.el.tagName&&b.opts.linkEditButtons.indexOf("linkRemove")>=0&&b.opts.linkEditButtons.splice(b.opts.linkEditButtons.indexOf("linkRemove"),1),a='<div class="fr-buttons">'+b.button.buildList(b.opts.linkEditButtons)+"</div>");var d={buttons:a},e=b.popups.create("link.edit",d);return b.$wp&&b.events.$on(b.$wp,"scroll.link-edit",function(){c()&&b.popups.isVisible("link.edit")&&f(c())}),e}function i(){}function j(){var d=b.popups.get("link.insert"),e=c();if(e){var f,g,h=a(e),i=d.find('input.fr-link-attr[type="text"]'),j=d.find('input.fr-link-attr[type="checkbox"]');for(f=0;f<i.length;f++)g=a(i[f]),g.val(h.attr(g.attr("name")||""));for(j.prop("checked",!1),f=0;f<j.length;f++)g=a(j[f]),h.attr(g.attr("name"))==g.data("checked")&&g.prop("checked",!0);d.find('input.fr-link-attr[type="text"][name="text"]').val(h.text())}else d.find('input.fr-link-attr[type="text"]').val(""),d.find('input.fr-link-attr[type="checkbox"]').prop("checked",!1),d.find('input.fr-link-attr[type="text"][name="text"]').val(b.selection.text());d.find("input.fr-link-attr").trigger("change"),(b.image?b.image.get():null)?d.find('.fr-link-attr[name="text"]').parent().hide():d.find('.fr-link-attr[name="text"]').parent().show()}function k(){var a=b.$tb.find('.fr-command[data-cmd="insertLink"]'),c=b.popups.get("link.insert");if(c||(c=l()),!c.hasClass("fr-active"))if(b.popups.refresh("link.insert"),b.popups.setContainer("link.insert",b.$tb||b.$sc),a.is(":visible")){var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("link.insert",d,e,a.outerHeight())}else b.position.forSelection(c),b.popups.show("link.insert")}function l(a){if(a)return b.popups.onRefresh("link.insert",j),b.popups.onHide("link.insert",i),!0;var d="";b.opts.linkInsertButtons.length>=1&&(d='<div class="fr-buttons">'+b.button.buildList(b.opts.linkInsertButtons)+"</div>");var e='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg>',f="",g=0;f='<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'+b.id+'">',f+='<div class="fr-input-line"><input id="fr-link-insert-layer-url-'+b.id+'" name="href" type="text" class="fr-link-attr" placeholder="URL" tabIndex="'+ ++g+'"></div>',b.opts.linkText&&(f+='<div class="fr-input-line"><input id="fr-link-insert-layer-text-'+b.id+'" name="text" type="text" class="fr-link-attr" placeholder="'+b.language.translate("Text")+'" tabIndex="'+ ++g+'"></div>');for(var h in b.opts.linkAttributes)if(b.opts.linkAttributes.hasOwnProperty(h)){var k=b.opts.linkAttributes[h];f+='<div class="fr-input-line"><input name="'+h+'" type="text" class="fr-link-attr" placeholder="'+b.language.translate(k)+'" tabIndex="'+ ++g+'"></div>'}b.opts.linkAlwaysBlank||(f+='<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'+b.id+'" tabIndex="'+ ++g+'"><span>'+e+'</span></span><label for="fr-link-target-'+b.id+'">'+b.language.translate("Open in new tab")+"</label></div>"),f+='<div class="fr-action-buttons"><button class="fr-command fr-submit" role="button" data-cmd="linkInsert" href="#" tabIndex="'+ ++g+'" type="button">'+b.language.translate("Insert")+"</button></div></div>";var l={buttons:d,input_layer:f},m=b.popups.create("link.insert",l);return b.$wp&&b.events.$on(b.$wp,"scroll.link-insert",function(){(b.image?b.image.get():null)&&b.popups.isVisible("link.insert")&&u(),c&&b.popups.isVisible("link.insert")&&s()}),m}function m(){var d=c(),e=b.image?b.image.get():null;if(!1===b.events.trigger("link.beforeRemove",[d]))return!1;e&&d?(e.unwrap(),b.image.edit(e)):d&&(b.selection.save(),a(d).replaceWith(a(d).html()),b.selection.restore(),g())}function n(){b.events.on("keyup",function(b){b.which!=a.FE.KEYCODE.ESC&&e(b)}),b.events.on("window.mouseup",e),b.events.$on(b.$el,"click","a",function(a){b.edit.isDisabled()&&a.preventDefault()}),b.helpers.isMobile()&&b.events.$on(b.$doc,"selectionchange",e),l(!0),"A"==b.el.tagName&&b.$el.addClass("fr-view"),b.events.on("toolbar.esc",function(){if(b.popups.isVisible("link.edit"))return b.events.disableBlur(),b.events.focus(),!1},!0)}function o(c){var d,e,f=b.opts.linkList[c],g=b.popups.get("link.insert"),h=g.find('input.fr-link-attr[type="text"]'),i=g.find('input.fr-link-attr[type="checkbox"]');for(e=0;e<h.length;e++)d=a(h[e]),f[d.attr("name")]?d.val(f[d.attr("name")]):"text"!=d.attr("name")&&d.val("");for(e=0;e<i.length;e++)d=a(i[e]),d.prop("checked",d.data("checked")==f[d.attr("name")]);b.accessibility.focusPopup(g)}function p(){var c,d,e=b.popups.get("link.insert"),f=e.find('input.fr-link-attr[type="text"]'),g=e.find('input.fr-link-attr[type="checkbox"]'),h=f.filter('[name="href"]').val(),i=f.filter('[name="text"]').val(),j={};for(d=0;d<f.length;d++)c=a(f[d]),["href","text"].indexOf(c.attr("name"))<0&&(j[c.attr("name")]=c.val());for(d=0;d<g.length;d++)c=a(g[d]),c.is(":checked")?j[c.attr("name")]=c.data("checked"):j[c.attr("name")]=c.data("unchecked")||null;var k=b.helpers.scrollTop();r(h,i,j),a(b.o_win).scrollTop(k)}function q(){if(!b.selection.isCollapsed()){b.selection.save();for(var c=b.$el.find(".fr-marker").addClass("fr-unprocessed").toArray();c.length;){var d=a(c.pop());d.removeClass("fr-unprocessed");var e=b.node.deepestParent(d.get(0));if(e){var f=d.get(0),g="",h="";do{f=f.parentNode,b.node.isBlock(f)||(g+=b.node.closeTagString(f),h=b.node.openTagString(f)+h)}while(f!=e)
;var i=b.node.openTagString(d.get(0))+d.html()+b.node.closeTagString(d.get(0));d.replaceWith('<span id="fr-break"></span>');var j=e.outerHTML;j=j.replace(/<span id="fr-break"><\/span>/g,g+i+h),e.outerHTML=j}c=b.$el.find(".fr-marker.fr-unprocessed").toArray()}b.html.cleanEmptyTags(),b.selection.restore()}}function r(f,g,h){if(void 0===h&&(h={}),!1===b.events.trigger("link.beforeInsert",[f,g,h]))return!1;var i=b.image?b.image.get():null;i||"A"==b.el.tagName?"A"==b.el.tagName&&b.$el.focus():(b.selection.restore(),b.popups.hide("link.insert"));var j=f;if(b.opts.linkConvertEmailAddress){a.FE.MAIL_REGEX.test(f)&&!/^mailto:.*/i.test(f)&&(f="mailto:"+f)}var k=/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i;if(""===b.opts.linkAutoPrefix||/^(mailto|tel|sms|notes|data):.*/i.test(f)||/^data:image.*/i.test(f)||/^(https?:|ftps?:|file:|)\/\//i.test(f)||k.test(f)||["/","{","[","#","("].indexOf((f||"")[0])<0&&(f=b.opts.linkAutoPrefix+f),f=b.helpers.sanitizeURL(f),b.opts.linkAlwaysBlank&&(h.target="_blank"),b.opts.linkAlwaysNoFollow&&(h.rel="nofollow"),"_blank"==h.target?h.rel?h.rel+=" noopener noreferrer":h.rel="noopener noreferrer":null==h.target&&(h.rel?h.rel=h.rel.replace(/noopener/,"").replace(/noreferrer/,""):h.rel=null),g=g||"",f===b.opts.linkAutoPrefix){return b.popups.get("link.insert").find('input[name="href"]').addClass("fr-error"),b.events.trigger("link.bad",[j]),!1}var l,m=c();if(m)l=a(m),l.attr("href",f),g.length>0&&l.text()!=g&&!i&&l.text(g),i||l.prepend(a.FE.START_MARKER).append(a.FE.END_MARKER),l.attr(h),i||b.selection.restore();else{i?i.wrap('<a href="'+f+'"></a>'):(b.format.remove("a"),b.selection.isCollapsed()?(g=0===g.length?j:g,b.html.insert('<a href="'+f+'">'+a.FE.START_MARKER+g+a.FE.END_MARKER+"</a>"),b.selection.restore()):g.length>0&&g!=b.selection.text().replace(/\n/g,"")?(b.selection.remove(),b.html.insert('<a href="'+f+'">'+a.FE.START_MARKER+g+a.FE.END_MARKER+"</a>"),b.selection.restore()):(q(),b.format.apply("a",{href:f})));for(var n=d(),o=0;o<n.length;o++)l=a(n[o]),l.attr(h),l.removeAttr("_moz_dirty");1==n.length&&b.$wp&&!i&&(a(n[0]).prepend(a.FE.START_MARKER).append(a.FE.END_MARKER),b.selection.restore())}if(i){b.popups.get("link.insert").find("input:focus").blur(),b.image.edit(i)}else e()}function s(){g();var d=c();if(d){var e=b.popups.get("link.insert");e||(e=l()),b.popups.isVisible("link.insert")||(b.popups.refresh("link.insert"),b.selection.save(),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur())),b.popups.setContainer("link.insert",b.$sc);var f=(b.image?b.image.get():null)||a(d),h=f.offset().left+f.outerWidth()/2,i=f.offset().top+f.outerHeight();b.popups.show("link.insert",h,i,f.outerHeight())}}function t(){(b.image?b.image.get():null)?b.image.back():(b.events.disableBlur(),b.selection.restore(),b.events.enableBlur(),c()&&b.$wp?(b.selection.restore(),g(),e()):"A"==b.el.tagName?(b.$el.focus(),e()):(b.popups.hide("link.insert"),b.toolbar.showInline()))}function u(){var a=b.image?b.image.get():null;if(a){var c=b.popups.get("link.insert");c||(c=l()),j(!0),b.popups.setContainer("link.insert",b.$sc);var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+a.outerHeight();b.popups.show("link.insert",d,e,a.outerHeight())}}function v(d,f,g){void 0===g&&(g=b.opts.linkMultipleStyles),void 0===f&&(f=b.opts.linkStyles);var h=c();if(!h)return!1;if(!g){var i=Object.keys(f);i.splice(i.indexOf(d),1),a(h).removeClass(i.join(" "))}a(h).toggleClass(d),e()}return{_init:n,remove:m,showInsertPopup:k,usePredefined:o,insertCallback:p,insert:r,update:s,get:c,allSelected:d,back:t,imageLink:u,applyStyle:v}},a.FE.DefineIcon("insertLink",{NAME:"link"}),a.FE.RegisterShortcut(a.FE.KEYCODE.K,"insertLink",null,"K"),a.FE.RegisterCommand("insertLink",{title:"Insert Link",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("link.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("link.insert")):this.link.showInsertPopup()},plugin:"link"}),a.FE.DefineIcon("linkOpen",{NAME:"external-link"}),a.FE.RegisterCommand("linkOpen",{title:"Open Link",undo:!1,refresh:function(a){this.link.get()?a.removeClass("fr-hidden"):a.addClass("fr-hidden")},callback:function(){var a=this.link.get();a&&this.o_win.open(a.href)}}),a.FE.DefineIcon("linkEdit",{NAME:"edit"}),a.FE.RegisterCommand("linkEdit",{title:"Edit Link",undo:!1,refreshAfterCallback:!1,popup:!0,callback:function(){this.link.update()},refresh:function(a){this.link.get()?a.removeClass("fr-hidden"):a.addClass("fr-hidden")}}),a.FE.DefineIcon("linkRemove",{NAME:"unlink"}),a.FE.RegisterCommand("linkRemove",{title:"Unlink",callback:function(){this.link.remove()},refresh:function(a){this.link.get()?a.removeClass("fr-hidden"):a.addClass("fr-hidden")}}),a.FE.DefineIcon("linkBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("linkBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.link.back()},refresh:function(a){var b=this.link.get()&&this.doc.hasFocus();(this.image?this.image.get():null)||b||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.DefineIcon("linkList",{NAME:"search"}),a.FE.RegisterCommand("linkList",{title:"Choose Link",type:"dropdown",focus:!1,undo:!1,refreshAfterCallback:!1,html:function(){for(var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.linkList,c=0;c<b.length;c++)a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkList" data-param1="'+c+'">'+(b[c].displayText||b[c].text)+"</a></li>";return a+="</ul>"},callback:function(a,b){this.link.usePredefined(b)}}),a.FE.RegisterCommand("linkInsert",{focus:!1,refreshAfterCallback:!1,callback:function(){this.link.insertCallback()},refresh:function(a){this.link.get()?a.text(this.language.translate("Update")):a.text(this.language.translate("Insert"))}}),a.FE.DefineIcon("imageLink",{NAME:"link"}),a.FE.RegisterCommand("imageLink",{title:"Insert Link",undo:!1,focus:!1,popup:!0,callback:function(){this.link.imageLink()},refresh:function(a){var b,c=this.link.get();c?(b=a.prev(),b.hasClass("fr-separator")&&b.removeClass("fr-hidden"),a.addClass("fr-hidden")):(b=a.prev(),b.hasClass("fr-separator")&&b.addClass("fr-hidden"),a.removeClass("fr-hidden"))}}),a.FE.DefineIcon("linkStyle",{NAME:"magic"}),a.FE.RegisterCommand("linkStyle",{title:"Style",type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.linkStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkStyle" data-param1="'+c+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},callback:function(a,b){this.link.applyStyle(b)},refreshOnShow:function(b,c){var d=this.link.get();if(d){var e=a(d);c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=e.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}}),a.FE.PLUGINS.lists=function(b){function c(a){return'<span class="fr-open-'+a.toLowerCase()+'"></span>'}function d(a){return'<span class="fr-close-'+a.toLowerCase()+'"></span>'}function e(b,c){for(var d=[],e=0;e<b.length;e++){var f=b[e].parentNode;"LI"==b[e].tagName&&f.tagName!=c&&d.indexOf(f)<0&&d.push(f)}for(e=d.length-1;e>=0;e--){var g=a(d[e]);g.replaceWith("<"+c.toLowerCase()+">"+g.html()+"</"+c.toLowerCase()+">")}}function f(c,d){e(c,d);var f,g=b.html.defaultTag(),h=null;c.length&&(f="rtl"==b.opts.direction||"rtl"==a(c[0]).css("direction")?"margin-right":"margin-left");for(var i=0;i<c.length;i++)if("LI"!=c[i].tagName){var j=b.helpers.getPX(a(c[i]).css(f))||0;c[i].style.marginLeft=null,null===h&&(h=j);var k=h>0?"<"+d+' style="'+f+": "+h+'px;">':"<"+d+">",l="</"+d+">";for(j-=h;j/b.opts.indentMargin>0;)k+="<"+d+">",l+=l,j-=b.opts.indentMargin;g&&c[i].tagName.toLowerCase()==g?a(c[i]).replaceWith(k+"<li"+b.node.attributes(c[i])+">"+a(c[i]).html()+"</li>"+l):a(c[i]).wrap(k+"<li></li>"+l)}b.clean.lists()}function g(e){var f,g;for(f=e.length-1;f>=0;f--)for(g=f-1;g>=0;g--)if(a(e[g]).find(e[f]).length||e[g]==e[f]){e.splice(f,1);break}var h=[];for(f=0;f<e.length;f++){var i=a(e[f]),j=e[f].parentNode,k=i.attr("class");if(i.before(d(j.tagName)),"LI"==j.parentNode.tagName)i.before(d("LI")),i.after(c("LI"));else{var l="";k&&(l+=' class="'+k+'"');var m="rtl"==b.opts.direction||"rtl"==i.css("direction")?"margin-right":"margin-left";b.helpers.getPX(a(j).css(m))&&(l+=' style="'+m+":"+b.helpers.getPX(a(j).css(m))+'px;"'),l&&i.wrapInner("<"+b.html.defaultTag()+l+"></"+b.html.defaultTag()+">"),b.node.isEmpty(i.get(0),!0)||0!==i.find(b.html.blockTagsQuery()).length||i.append("<br>"),i.append(c("LI")),i.prepend(d("LI"))}i.after(c(j.tagName)),"LI"==j.parentNode.tagName&&(j=j.parentNode.parentNode),h.indexOf(j)<0&&h.push(j)}for(f=0;f<h.length;f++){var n=a(h[f]),o=n.html();o=o.replace(/<span class="fr-close-([a-z]*)"><\/span>/g,"</$1>"),o=o.replace(/<span class="fr-open-([a-z]*)"><\/span>/g,"<$1>"),n.replaceWith(b.node.openTagString(n.get(0))+o+b.node.closeTagString(n.get(0)))}b.$el.find("li:empty").remove(),b.$el.find("ul:empty, ol:empty").remove(),b.clean.lists(),b.html.wrap()}function h(a,b){for(var c=!0,d=0;d<a.length;d++){if("LI"!=a[d].tagName)return!1;a[d].parentNode.tagName!=b&&(c=!1)}return c}function i(a){b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore();for(var c=b.selection.blocks(),d=0;d<c.length;d++)"LI"!=c[d].tagName&&"LI"==c[d].parentNode.tagName&&(c[d]=c[d].parentNode);b.selection.save(),h(c,a)?g(c):f(c,a),b.html.unwrap(),b.selection.restore()}function j(c,d){var e=a(b.selection.element());if(e.get(0)!=b.el){var f=e.get(0);f="LI"!=f.tagName&&f.firstElementChild&&"LI"!=f.firstElementChild.tagName?e.parents("li").get(0):"LI"==f.tagName||f.firstElementChild?f.firstElementChild&&"LI"==f.firstElementChild.tagName?e.get(0).firstChild:e.get(0):e.parents("li").get(0),f&&f.parentNode.tagName==d&&b.el.contains(f.parentNode)&&c.addClass("fr-active")}}function k(c){b.selection.save();for(var d=0;d<c.length;d++){var e=c[d].previousSibling;if(e){var f=a(c[d]).find("> ul, > ol").last().get(0);if(f){for(var g=a("<li>").prependTo(a(f)),h=b.node.contents(c[d])[0];h&&!b.node.isList(h);){var i=h.nextSibling;g.append(h),h=i}a(e).append(a(f)),a(c[d]).remove()}else{var j=a(e).find("> ul, > ol").last().get(0);if(j)a(j).append(a(c[d]));else{var k=a("<"+c[d].parentNode.tagName+">");a(e).append(k),k.append(a(c[d]))}}}}b.clean.lists(),b.selection.restore()}function l(a){b.selection.save(),g(a),b.selection.restore()}function m(a){if("indent"==a||"outdent"==a){for(var c=!1,d=b.selection.blocks(),e=[],f=0;f<d.length;f++)"LI"==d[f].tagName?(c=!0,e.push(d[f])):"LI"==d[f].parentNode.tagName&&(c=!0,e.push(d[f].parentNode));c&&("indent"==a?k(e):l(e))}}function n(){b.events.on("commands.after",m),b.events.on("keydown",function(c){if(c.which==a.FE.KEYCODE.TAB){for(var d=b.selection.blocks(),e=[],f=0;f<d.length;f++)"LI"==d[f].tagName?e.push(d[f]):"LI"==d[f].parentNode.tagName&&e.push(d[f].parentNode);if(e.length>1||e.length&&(b.selection.info(e[0]).atStart||b.node.isEmpty(e[0])))return c.preventDefault(),c.stopPropagation(),c.shiftKey?l(e):k(e),!1}},!0)}return{_init:n,format:i,refresh:j}},a.FE.RegisterCommand("formatUL",{title:"Unordered List",refresh:function(a){this.lists.refresh(a,"UL")},callback:function(){this.lists.format("UL")},plugin:"lists"}),a.FE.RegisterCommand("formatOL",{title:"Ordered List",refresh:function(a){this.lists.refresh(a,"OL")},callback:function(){this.lists.format("OL")},plugin:"lists"}),a.FE.DefineIcon("formatUL",{NAME:"list-ul"}),a.FE.DefineIcon("formatOL",{NAME:"list-ol"}),a.extend(a.FE.DEFAULTS,{paragraphFormat:{N:"Normal",H1:"Heading 1",H2:"Heading 2",H3:"Heading 3",H4:"Heading 4",PRE:"Code"},paragraphFormatSelection:!1}),a.FE.PLUGINS.paragraphFormat=function(b){function c(c,d){var e=b.html.defaultTag();if(d&&d.toLowerCase()!=e)if(c.find("ul, ol").length>0){var f=a("<"+d+">");c.prepend(f);for(var g=b.node.contents(c.get(0))[0];g&&["UL","OL"].indexOf(g.tagName)<0;){var h=g.nextSibling;f.append(g),g=h}}else c.html("<"+d+">"+c.html()+"</"+d+">")}function d(c,d){var e=b.html.defaultTag();d||(d='div class="fr-temp-div" data-empty="true"'),d.toLowerCase()==e?c.replaceWith(c.html()):c.replaceWith(a("<"+d+">").html(c.html()))}function e(c,d){var e=b.html.defaultTag();d||(d='div class="fr-temp-div"'+(b.node.isEmpty(c.get(0),!0)?' data-empty="true"':"")),d.toLowerCase()==e?(b.node.isEmpty(c.get(0),!0)||c.append("<br/>"),c.replaceWith(c.html())):c.replaceWith(a("<"+d+">").html(c.html()))}function f(c,d){d||(d='div class="fr-temp-div"'+(b.node.isEmpty(c.get(0),!0)?' data-empty="true"':"")),c.replaceWith(a("<"+d+" "+b.node.attributes(c.get(0))+">").html(c.html()).removeAttr("data-empty"))}function g(g){"N"==g&&(g=b.html.defaultTag()),b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore();var h=b.selection.blocks();b.selection.save(),b.$el.find("pre").attr("skip",!0);for(var i=0;i<h.length;i++)if(h[i].tagName!=g&&!b.node.isList(h[i])){var j=a(h[i]);"LI"==h[i].tagName?c(j,g):"LI"==h[i].parentNode.tagName&&h[i]?d(j,g):["TD","TH"].indexOf(h[i].parentNode.tagName)>=0?e(j,g):f(j,g)}b.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function(){a(this).prev().append("<br>"+a(this).html()),a(this).remove()}),b.$el.find("pre").removeAttr("skip"),b.html.unwrap(),b.selection.restore()}function h(a,c){var d=b.selection.blocks();if(d.length){var e=d[0],f="N",g=b.html.defaultTag();e.tagName.toLowerCase()!=g&&e!=b.el&&(f=e.tagName),c.find('.fr-command[data-param1="'+f+'"]').addClass("fr-active").attr("aria-selected",!0)}else c.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected",!0)}function i(a){if(b.opts.paragraphFormatSelection){var c=b.selection.blocks();if(c.length){var d=c[0],e="N",f=b.html.defaultTag();d.tagName.toLowerCase()!=f&&d!=b.el&&(e=d.tagName),["LI","TD","TH"].indexOf(e)>=0&&(e="N"),a.find("> span").text(b.language.translate(b.opts.paragraphFormat[e]))}else a.find("> span").text(b.language.translate(b.opts.paragraphFormat.N))}}return{apply:g,refreshOnShow:h,refresh:i}},a.FE.RegisterCommand("paragraphFormat",{type:"dropdown",displaySelection:function(a){return a.opts.paragraphFormatSelection},defaultSelection:"Normal",displaySelectionWidth:100,html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.paragraphFormat;for(var c in b)if(b.hasOwnProperty(c)){var d=this.shortcuts.get("paragraphFormat."+c);d=d?'<span class="fr-shortcut">'+d+"</span>":"",a+='<li role="presentation"><'+("N"==c?this.html.defaultTag()||"DIV":c)+' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></"+("N"==c?this.html.defaultTag()||"DIV":c)+"></li>"}return a+="</ul>"},title:"Paragraph Format",callback:function(a,b){this.paragraphFormat.apply(b)},refresh:function(a){this.paragraphFormat.refresh(a)},refreshOnShow:function(a,b){this.paragraphFormat.refreshOnShow(a,b)},plugin:"paragraphFormat"}),a.FE.DefineIcon("paragraphFormat",{NAME:"paragraph"}),a.extend(a.FE.DEFAULTS,{paragraphStyles:{"fr-text-gray":"Gray","fr-text-bordered":"Bordered","fr-text-spaced":"Spaced","fr-text-uppercase":"Uppercase"},paragraphMultipleStyles:!0}),a.FE.PLUGINS.paragraphStyle=function(b){function c(c,d,e){void 0===d&&(d=b.opts.paragraphStyles),void 0===e&&(e=b.opts.paragraphMultipleStyles);var f="";e||(f=Object.keys(d),f.splice(f.indexOf(c),1),f=f.join(" ")),b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore();var g=b.selection.blocks();b.selection.save();for(var h=a(g[0]).hasClass(c),i=0;i<g.length;i++)a(g[i]).removeClass(f).toggleClass(c,!h),a(g[i]).hasClass("fr-temp-div")&&a(g[i]).removeClass("fr-temp-div"),""===a(g[i]).attr("class")&&a(g[i]).removeAttr("class");b.html.unwrap(),b.selection.restore()}function d(c,d){var e=b.selection.blocks();if(e.length){var f=a(e[0]);d.find(".fr-command").each(function(){var b=a(this).data("param1"),c=f.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}function e(){}return{_init:e,apply:c,refreshOnShow:d}},a.FE.RegisterCommand("paragraphStyle",{type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.paragraphStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command '+c+'" tabIndex="-1" role="option" data-cmd="paragraphStyle" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},title:"Paragraph Style",callback:function(a,b){this.paragraphStyle.apply(b)},refreshOnShow:function(a,b){this.paragraphStyle.refreshOnShow(a,b)},plugin:"paragraphStyle"}),a.FE.DefineIcon("paragraphStyle",{NAME:"magic"}),a.FE.PLUGINS.print=function(a){function b(){var b=a.$el.html(),c=null;a.shared.print_iframe?c=a.shared.print_iframe:(c=document.createElement("iframe"),c.name="fr-print",c.style.position="fixed",c.style.top="0",c.style.left="-9999px",c.style.height="100%",c.style.width="0",c.style.overflow="hidden",c.style["z-index"]="9999",c.style.tabIndex="-1",document.body.appendChild(c),c.onload=function(){setTimeout(function(){a.events.disableBlur(),window.frames["fr-print"].focus(),window.frames["fr-print"].print(),a.$win.get(0).focus(),a.events.disableBlur(),a.events.focus()},0)},a.events.on("shared.destroy",function(){c.remove()}),a.shared.print_iframe=c);var d=c.contentWindow;d.document.open(),d.document.write("<!DOCTYPE html><html><head><title>"+document.title+"</title>"),Array.prototype.forEach.call(document.querySelectorAll("style"),function(a){a=a.cloneNode(!0),d.document.write(a.outerHTML)});var e=document.querySelectorAll("link[rel=stylesheet]");Array.prototype.forEach.call(e,function(a){var b=document.createElement("link");b.rel=a.rel,b.href=a.href,b.media="print",b.type="text/css",b.media="all",d.document.write(b.outerHTML)}),d.document.write('</head><body style="text-align: '+("rtl"==a.opts.direction?"right":"left")+"; direction: "+a.opts.direction+';"><div class="fr-view">'),d.document.write(b),d.document.write("</div></body></html>"),d.document.close()}return{run:b}},a.FE.DefineIcon("print",{NAME:"print"}),a.FE.RegisterCommand("print",{title:"Print",undo:!1,focus:!1,plugin:"print",callback:function(){this.print.run()}}),a.extend(a.FE.DEFAULTS,{quickInsertButtons:["image","table","ul","ol","hr"],quickInsertTags:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote"]}),a.FE.QUICK_INSERT_BUTTONS={image:{icon:"insertImage",callback:function(){var b=this;b.shared.$qi_image_input||(b.shared.$qi_image_input=a('<input accept="image/*" name="quickInsertImage'+this.id+'" style="display: none;" type="file">'),a("body:first").append(b.shared.$qi_image_input),b.events.$on(b.shared.$qi_image_input,"change",function(){var b=a(this).data("inst");this.files&&(b.quickInsert.hide(),b.image.upload(this.files)),a(this).val("")},!0)),b.$qi_image_input=b.shared.$qi_image_input,b.helpers.isMobile()&&b.selection.save(),b.$qi_image_input.data("inst",b).trigger("click")},requiredPlugin:"image",title:"Insert Image"},table:{icon:"insertTable",callback:function(){this.quickInsert.hide(),this.table.insert(2,2),this.undo.saveStep()},requiredPlugin:"table",title:"Insert Table"},ol:{icon:"formatOL",callback:function(){this.quickInsert.hide(),this.lists.format("OL"),this.undo.saveStep()},requiredPlugin:"lists",title:"Ordered List"},ul:{icon:"formatUL",callback:function(){this.quickInsert.hide(),this.lists.format("UL"),this.undo.saveStep()},requiredPlugin:"lists",title:"Unordered List"},hr:{icon:"insertHR",callback:function(){this.quickInsert.hide(),this.commands.insertHR(),this.undo.saveStep()},title:"Insert Horizontal Line"}},a.FE.DefineIcon("quickInsert",{PATH:'<path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/>',template:"svg"}),a.FE.RegisterQuickInsertCommand=function(b,c){a.FE.QUICK_INSERT_BUTTONS[b]=c},a.FE.PLUGINS.quickInsert=function(b){function c(a){var c,d,e;c=a.offset().top-b.$box.offset().top,d=0-k.outerWidth(),e=(k.outerHeight()-a.outerHeight())/2,b.opts.iframe&&(c+=b.$iframe.offset().top-b.helpers.scrollTop()),k.hasClass("fr-on")&&c>=0&&l.css("top",c-e),c>=0&&c-e<=b.$box.outerHeight()-a.outerHeight()?(k.hasClass("fr-hidden")&&(k.hasClass("fr-on")&&g(),k.removeClass("fr-hidden")),k.css("top",c-e)):k.hasClass("fr-visible")&&(k.addClass("fr-hidden"),h()),k.css("left",d)}function d(a){k||i(),k.hasClass("fr-on")&&h(),b.$box.append(k),c(a),k.data("tag",a),k.addClass("fr-visible")}function e(){if(b.core.hasFocus()){var c=b.selection.element();b.node.isBlock(c)||(c=b.node.blockParent(c)),c&&b.node.isEmpty(c)&&b.node.isElement(c.parentNode)&&b.opts.quickInsertTags.indexOf(c.tagName.toLowerCase())>=0?k&&k.data("tag").is(a(c))&&k.hasClass("fr-on")?h():b.selection.isCollapsed()&&d(a(c)):f()}}function f(){k&&(b.html.checkIfEmpty(),k.hasClass("fr-on")&&h(),k.removeClass("fr-visible fr-on"),k.css("left",-9999).css("top",-9999))}function g(c){if(c&&c.preventDefault(),k.hasClass("fr-on")&&!k.hasClass("fr-hidden"))h();else{if(!b.shared.$qi_helper){for(var d=b.opts.quickInsertButtons,e='<div class="fr-qi-helper">',f=0,g=0;g<d.length;g++){var i=a.FE.QUICK_INSERT_BUTTONS[d[g]];i&&(!i.requiredPlugin||a.FE.PLUGINS[i.requiredPlugin]&&b.opts.pluginsEnabled.indexOf(i.requiredPlugin)>=0)&&(e+='<a class="fr-btn fr-floating-btn" role="button" title="'+b.language.translate(i.title)+'" tabIndex="-1" data-cmd="'+d[g]+'" style="transition-delay: '+.025*f+++'s;">'+b.icon.create(i.icon)+"</a>")}e+="</div>",b.shared.$qi_helper=a(e),b.tooltip.bind(b.shared.$qi_helper,"> a.fr-btn")}l=b.shared.$qi_helper,l.appendTo(b.$box),setTimeout(function(){l.css("top",parseFloat(k.css("top"))),l.css("left",parseFloat(k.css("left"))+k.outerWidth()),l.find("a").addClass("fr-size-1"),k.addClass("fr-on")},10)}}function h(){var a=b.$box.find(".fr-qi-helper");a.length&&(a.find("a").removeClass("fr-size-1"),a.css("left",-9999),k.hasClass("fr-hidden")||k.removeClass("fr-on"))}function i(){b.shared.$quick_insert||(b.shared.$quick_insert=a('<div class="fr-quick-insert"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+b.language.translate("Quick Insert")+'">'+b.icon.create("quickInsert")+"</a></div>")),k=b.shared.$quick_insert,b.tooltip.bind(b.$box,".fr-quick-insert > a.fr-floating-btn"),b.events.on("destroy",function(){k.removeClass("fr-on").appendTo(a("body:first")).css("left",-9999).css("top",-9999),l&&(h(),l.appendTo(a("body:first")))},!0),b.events.on("shared.destroy",function(){k.html("").removeData().remove(),k=null,l&&(l.html("").removeData().remove(),l=null)},!0),b.events.on("commands.before",f),b.events.on("commands.after",function(){b.popups.areVisible()||e()}),b.events.bindClick(b.$box,".fr-quick-insert > a",g),b.events.bindClick(b.$box,".fr-qi-helper > a.fr-btn",function(c){var d=a(c.currentTarget).data("cmd");a.FE.QUICK_INSERT_BUTTONS[d].callback.apply(b,[c.currentTarget])}),b.events.$on(b.$wp,"scroll",function(){k.hasClass("fr-visible")&&c(k.data("tag"))})}function j(){if(!b.$wp)return!1;b.opts.iframe&&b.$el.parent("html").find("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">'),b.popups.onShow("image.edit",f),b.events.on("mouseup",e),b.helpers.isMobile()&&b.events.$on(a(b.o_doc),"selectionchange",e),b.events.on("blur",f),b.events.on("keyup",e),b.events.on("keydown",function(){setTimeout(function(){e()},0)})}var k,l;return{_init:j,hide:f}},a.FE.PLUGINS.quote=function(b){function c(a){for(;a.parentNode&&a.parentNode!=b.el;)a=a.parentNode;return a}function d(){var d,e=b.selection.blocks();for(d=0;d<e.length;d++)e[d]=c(e[d]);b.selection.save();var f=a("<blockquote>");for(f.insertBefore(e[0]),d=0;d<e.length;d++)f.append(e[d]);b.html.unwrap(),b.selection.restore()}function e(){var c,d=b.selection.blocks();for(c=0;c<d.length;c++)"BLOCKQUOTE"!=d[c].tagName&&(d[c]=a(d[c]).parentsUntil(b.$el,"BLOCKQUOTE").get(0));for(b.selection.save(),c=0;c<d.length;c++)d[c]&&a(d[c]).replaceWith(d[c].innerHTML);b.html.unwrap(),b.selection.restore()}function f(a){b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore(),"increase"==a?d():"decrease"==a&&e()}return{apply:f}},a.FE.RegisterShortcut(a.FE.KEYCODE.SINGLE_QUOTE,"quote","increase","'"),a.FE.RegisterShortcut(a.FE.KEYCODE.SINGLE_QUOTE,"quote","decrease","'",!0),a.FE.RegisterCommand("quote",{title:"Quote",type:"dropdown",options:{increase:"Increase",decrease:"Decrease"},callback:function(a,b){this.quote.apply(b)},plugin:"quote"}),a.FE.DefineIcon("quote",{NAME:"quote-left"}),a.extend(a.FE.DEFAULTS,{saveInterval:1e4,saveURL:null,saveParams:{},saveParam:"body",saveMethod:"POST"}),a.FE.PLUGINS.save=function(b){function c(a,c){b.events.trigger("save.error",[{code:a,message:n[a]},c])}function d(d){if(void 0===d&&(d=b.html.get()),!1===b.events.trigger("save.before"))return!1;if(b.opts.saveURL){var e={};for(var f in b.opts.saveParams)if(b.opts.saveParams.hasOwnProperty(f)){var g=b.opts.saveParams[f];e[f]="function"==typeof g?g.call(this):g}var h={};h[b.opts.saveParam]=d,a.ajax({type:b.opts.saveMethod,url:b.opts.saveURL,data:a.extend(h,e),crossDomain:b.opts.requestWithCORS,xhrFields:{withCredentials:b.opts.requestWithCredentials},headers:b.opts.requestHeaders}).done(function(a){j=d,b.events.trigger("save.after",[a])}).fail(function(a){c(m,a.response||a.responseText)})}else c(l)}function e(){clearTimeout(i),i=setTimeout(function(){var a=b.html.get();(j!=a||k)&&(j=a,k=!1,d(a))},b.opts.saveInterval)}function f(){e(),k=!1}function g(){k=!0}function h(){b.opts.saveInterval&&(j=b.html.get(),b.events.on("contentChanged",e),b.events.on("keydown destroy",function(){clearTimeout(i)}))}var i=null,j=null,k=!1,l=1,m=2,n={};return n[l]="Missing saveURL option.",n[m]="Something went wrong during save.",{_init:h,save:d,reset:f,force:g}},a.FE.DefineIcon("save",{NAME:"floppy-o"}),a.FE.RegisterCommand("save",{title:"Save",undo:!1,focus:!1,refreshAfterCallback:!1,callback:function(){this.save.save()},plugin:"save"}),a.extend(a.FE.DEFAULTS,{specialCharactersSets:[{title:"Latin",list:[{char:"&iexcl;",desc:"INVERTED EXCLAMATION MARK"},{char:"&cent;",desc:"CENT SIGN"},{char:"&pound;",desc:"POUND SIGN"},{char:"&curren;",desc:"CURRENCY SIGN"},{char:"&yen;",desc:"YEN SIGN"},{char:"&brvbar;",desc:"BROKEN BAR"},{char:"&sect;",desc:"SECTION SIGN"},{char:"&uml;",desc:"DIAERESIS"},{char:"&copy;",desc:"COPYRIGHT SIGN"},{char:"&trade;",desc:"TRADEMARK SIGN"},{char:"&ordf;",desc:"FEMININE ORDINAL INDICATOR"},{char:"&laquo;",desc:"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"},{char:"&not;",desc:"NOT SIGN"},{char:"&reg;",desc:"REGISTERED SIGN"},{char:"&macr;",desc:"MACRON"},{char:"&deg;",desc:"DEGREE SIGN"},{char:"&plusmn;",desc:"PLUS-MINUS SIGN"},{char:"&sup2;",desc:"SUPERSCRIPT TWO"},{char:"&sup3;",desc:"SUPERSCRIPT THREE"},{char:"&acute;",desc:"ACUTE ACCENT"},{char:"&micro;",desc:"MICRO SIGN"},{char:"&para;",desc:"PILCROW SIGN"},{char:"&middot;",desc:"MIDDLE DOT"},{char:"&cedil;",desc:"CEDILLA"},{char:"&sup1;",desc:"SUPERSCRIPT ONE"},{char:"&ordm;",desc:"MASCULINE ORDINAL INDICATOR"},{char:"&raquo;",desc:"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"},{char:"&frac14;",desc:"VULGAR FRACTION ONE QUARTER"},{char:"&frac12;",desc:"VULGAR FRACTION ONE HALF"},{char:"&frac34;",desc:"VULGAR FRACTION THREE QUARTERS"},{char:"&iquest;",desc:"INVERTED QUESTION MARK"},{char:"&Agrave;",desc:"LATIN CAPITAL LETTER A WITH GRAVE"},{char:"&Aacute;",desc:"LATIN CAPITAL LETTER A WITH ACUTE"},{char:"&Acirc;",desc:"LATIN CAPITAL LETTER A WITH CIRCUMFLEX"},{char:"&Atilde;",desc:"LATIN CAPITAL LETTER A WITH TILDE"},{char:"&Auml;",desc:"LATIN CAPITAL LETTER A WITH DIAERESIS "},{char:"&Aring;",desc:"LATIN CAPITAL LETTER A WITH RING ABOVE"},{char:"&AElig;",desc:"LATIN CAPITAL LETTER AE"},{char:"&Ccedil;",desc:"LATIN CAPITAL LETTER C WITH CEDILLA"},{char:"&Egrave;",desc:"LATIN CAPITAL LETTER E WITH GRAVE"},{char:"&Eacute;",desc:"LATIN CAPITAL LETTER E WITH ACUTE"},{char:"&Ecirc;",desc:"LATIN CAPITAL LETTER E WITH CIRCUMFLEX"},{char:"&Euml;",desc:"LATIN CAPITAL LETTER E WITH DIAERESIS"},{char:"&Igrave;",desc:"LATIN CAPITAL LETTER I WITH GRAVE"},{char:"&Iacute;",desc:"LATIN CAPITAL LETTER I WITH ACUTE"},{char:"&Icirc;",desc:"LATIN CAPITAL LETTER I WITH CIRCUMFLEX"},{char:"&Iuml;",desc:"LATIN CAPITAL LETTER I WITH DIAERESIS"},{char:"&ETH;",desc:"LATIN CAPITAL LETTER ETH"},{char:"&Ntilde;",desc:"LATIN CAPITAL LETTER N WITH TILDE"},{char:"&Ograve;",desc:"LATIN CAPITAL LETTER O WITH GRAVE"},{char:"&Oacute;",desc:"LATIN CAPITAL LETTER O WITH ACUTE"},{char:"&Ocirc;",desc:"LATIN CAPITAL LETTER O WITH CIRCUMFLEX"},{char:"&Otilde;",desc:"LATIN CAPITAL LETTER O WITH TILDE"},{char:"&Ouml;",desc:"LATIN CAPITAL LETTER O WITH DIAERESIS"},{char:"&times;",desc:"MULTIPLICATION SIGN"},{char:"&Oslash;",desc:"LATIN CAPITAL LETTER O WITH STROKE"},{char:"&Ugrave;",desc:"LATIN CAPITAL LETTER U WITH GRAVE"},{char:"&Uacute;",desc:"LATIN CAPITAL LETTER U WITH ACUTE"},{char:"&Ucirc;",desc:"LATIN CAPITAL LETTER U WITH CIRCUMFLEX"},{char:"&Uuml;",desc:"LATIN CAPITAL LETTER U WITH DIAERESIS"},{char:"&Yacute;",desc:"LATIN CAPITAL LETTER Y WITH ACUTE"},{char:"&THORN;",desc:"LATIN CAPITAL LETTER THORN"},{char:"&szlig;",desc:"LATIN SMALL LETTER SHARP S"},{char:"&agrave;",desc:"LATIN SMALL LETTER A WITH GRAVE"},{char:"&aacute;",desc:"LATIN SMALL LETTER A WITH ACUTE "},{char:"&acirc;",desc:"LATIN SMALL LETTER A WITH CIRCUMFLEX"},{char:"&atilde;",desc:"LATIN SMALL LETTER A WITH TILDE"},{char:"&auml;",desc:"LATIN SMALL LETTER A WITH DIAERESIS"},{char:"&aring;",desc:"LATIN SMALL LETTER A WITH RING ABOVE"},{char:"&aelig;",desc:"LATIN SMALL LETTER AE"},{char:"&ccedil;",desc:"LATIN SMALL LETTER C WITH CEDILLA"},{char:"&egrave;",desc:"LATIN SMALL LETTER E WITH GRAVE"},{char:"&eacute;",desc:"LATIN SMALL LETTER E WITH ACUTE"},{char:"&ecirc;",desc:"LATIN SMALL LETTER E WITH CIRCUMFLEX"},{char:"&euml;",desc:"LATIN SMALL LETTER E WITH DIAERESIS"},{char:"&igrave;",desc:"LATIN SMALL LETTER I WITH GRAVE"},{char:"&iacute;",desc:"LATIN SMALL LETTER I WITH ACUTE"},{char:"&icirc;",desc:"LATIN SMALL LETTER I WITH CIRCUMFLEX"},{char:"&iuml;",desc:"LATIN SMALL LETTER I WITH DIAERESIS"},{char:"&eth;",desc:"LATIN SMALL LETTER ETH"},{char:"&ntilde;",desc:"LATIN SMALL LETTER N WITH TILDE"},{char:"&ograve;",desc:"LATIN SMALL LETTER O WITH GRAVE"},{char:"&oacute;",desc:"LATIN SMALL LETTER O WITH ACUTE"},{char:"&ocirc;",desc:"LATIN SMALL LETTER O WITH CIRCUMFLEX"},{char:"&otilde;",desc:"LATIN SMALL LETTER O WITH TILDE"},{char:"&ouml;",desc:"LATIN SMALL LETTER O WITH DIAERESIS"},{char:"&divide;",desc:"DIVISION SIGN"},{char:"&oslash;",desc:"LATIN SMALL LETTER O WITH STROKE"},{char:"&ugrave;",desc:"LATIN SMALL LETTER U WITH GRAVE"},{char:"&uacute;",desc:"LATIN SMALL LETTER U WITH ACUTE"},{char:"&ucirc;",desc:"LATIN SMALL LETTER U WITH CIRCUMFLEX"},{char:"&uuml;",desc:"LATIN SMALL LETTER U WITH DIAERESIS"},{char:"&yacute;",desc:"LATIN SMALL LETTER Y WITH ACUTE"},{char:"&thorn;",desc:"LATIN SMALL LETTER THORN"},{char:"&yuml;",desc:"LATIN SMALL LETTER Y WITH DIAERESIS"}]},{title:"Greek",list:[{char:"&Alpha;",desc:"GREEK CAPITAL LETTER ALPHA"},{char:"&Beta;",desc:"GREEK CAPITAL LETTER BETA"},{char:"&Gamma;",desc:"GREEK CAPITAL LETTER GAMMA"},{char:"&Delta;",desc:"GREEK CAPITAL LETTER DELTA"},{char:"&Epsilon;",desc:"GREEK CAPITAL LETTER EPSILON"},{char:"&Zeta;",desc:"GREEK CAPITAL LETTER ZETA"},{char:"&Eta;",desc:"GREEK CAPITAL LETTER ETA"},{char:"&Theta;",desc:"GREEK CAPITAL LETTER THETA"},{char:"&Iota;",desc:"GREEK CAPITAL LETTER IOTA"},{char:"&Kappa;",desc:"GREEK CAPITAL LETTER KAPPA"},{char:"&Lambda;",desc:"GREEK CAPITAL LETTER LAMBDA"},{char:"&Mu;",
desc:"GREEK CAPITAL LETTER MU"},{char:"&Nu;",desc:"GREEK CAPITAL LETTER NU"},{char:"&Xi;",desc:"GREEK CAPITAL LETTER XI"},{char:"&Omicron;",desc:"GREEK CAPITAL LETTER OMICRON"},{char:"&Pi;",desc:"GREEK CAPITAL LETTER PI"},{char:"&Rho;",desc:"GREEK CAPITAL LETTER RHO"},{char:"&Sigma;",desc:"GREEK CAPITAL LETTER SIGMA"},{char:"&Tau;",desc:"GREEK CAPITAL LETTER TAU"},{char:"&Upsilon;",desc:"GREEK CAPITAL LETTER UPSILON"},{char:"&Phi;",desc:"GREEK CAPITAL LETTER PHI"},{char:"&Chi;",desc:"GREEK CAPITAL LETTER CHI"},{char:"&Psi;",desc:"GREEK CAPITAL LETTER PSI"},{char:"&Omega;",desc:"GREEK CAPITAL LETTER OMEGA"},{char:"&alpha;",desc:"GREEK SMALL LETTER ALPHA"},{char:"&beta;",desc:"GREEK SMALL LETTER BETA"},{char:"&gamma;",desc:"GREEK SMALL LETTER GAMMA"},{char:"&delta;",desc:"GREEK SMALL LETTER DELTA"},{char:"&epsilon;",desc:"GREEK SMALL LETTER EPSILON"},{char:"&zeta;",desc:"GREEK SMALL LETTER ZETA"},{char:"&eta;",desc:"GREEK SMALL LETTER ETA"},{char:"&theta;",desc:"GREEK SMALL LETTER THETA"},{char:"&iota;",desc:"GREEK SMALL LETTER IOTA"},{char:"&kappa;",desc:"GREEK SMALL LETTER KAPPA"},{char:"&lambda;",desc:"GREEK SMALL LETTER LAMBDA"},{char:"&mu;",desc:"GREEK SMALL LETTER MU"},{char:"&nu;",desc:"GREEK SMALL LETTER NU"},{char:"&xi;",desc:"GREEK SMALL LETTER XI"},{char:"&omicron;",desc:"GREEK SMALL LETTER OMICRON"},{char:"&pi;",desc:"GREEK SMALL LETTER PI"},{char:"&rho;",desc:"GREEK SMALL LETTER RHO"},{char:"&sigmaf;",desc:"GREEK SMALL LETTER FINAL SIGMA"},{char:"&sigma;",desc:"GREEK SMALL LETTER SIGMA"},{char:"&tau;",desc:"GREEK SMALL LETTER TAU"},{char:"&upsilon;",desc:"GREEK SMALL LETTER UPSILON"},{char:"&phi;",desc:"GREEK SMALL LETTER PHI"},{char:"&chi;",desc:"GREEK SMALL LETTER CHI"},{char:"&psi;",desc:"GREEK SMALL LETTER PSI"},{char:"&omega;",desc:"GREEK SMALL LETTER OMEGA"},{char:"&thetasym;",desc:"GREEK THETA SYMBOL"},{char:"&upsih;",desc:"GREEK UPSILON WITH HOOK SYMBOL"},{char:"&straightphi;",desc:"GREEK PHI SYMBOL"},{char:"&piv;",desc:"GREEK PI SYMBOL"},{char:"&Gammad;",desc:"GREEK LETTER DIGAMMA"},{char:"&gammad;",desc:"GREEK SMALL LETTER DIGAMMA"},{char:"&varkappa;",desc:"GREEK KAPPA SYMBOL"},{char:"&varrho;",desc:"GREEK RHO SYMBOL"},{char:"&straightepsilon;",desc:"GREEK LUNATE EPSILON SYMBOL"},{char:"&backepsilon;",desc:"GREEK REVERSED LUNATE EPSILON SYMBOL"}]},{title:"Cyrillic",list:[{char:"&#x400",desc:"CYRILLIC CAPITAL LETTER IE WITH GRAVE"},{char:"&#x401",desc:"CYRILLIC CAPITAL LETTER IO"},{char:"&#x402",desc:"CYRILLIC CAPITAL LETTER DJE"},{char:"&#x403",desc:"CYRILLIC CAPITAL LETTER GJE"},{char:"&#x404",desc:"CYRILLIC CAPITAL LETTER UKRAINIAN IE"},{char:"&#x405",desc:"CYRILLIC CAPITAL LETTER DZE"},{char:"&#x406",desc:"CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I"},{char:"&#x407",desc:"CYRILLIC CAPITAL LETTER YI"},{char:"&#x408",desc:"CYRILLIC CAPITAL LETTER JE"},{char:"&#x409",desc:"CYRILLIC CAPITAL LETTER LJE"},{char:"&#x40A",desc:"CYRILLIC CAPITAL LETTER NJE"},{char:"&#x40B",desc:"CYRILLIC CAPITAL LETTER TSHE"},{char:"&#x40C",desc:"CYRILLIC CAPITAL LETTER KJE"},{char:"&#x40D",desc:"CYRILLIC CAPITAL LETTER I WITH GRAVE"},{char:"&#x40E",desc:"CYRILLIC CAPITAL LETTER SHORT U"},{char:"&#x40F",desc:"CYRILLIC CAPITAL LETTER DZHE"},{char:"&#x410",desc:"CYRILLIC CAPITAL LETTER A"},{char:"&#x411",desc:"CYRILLIC CAPITAL LETTER BE"},{char:"&#x412",desc:"CYRILLIC CAPITAL LETTER VE"},{char:"&#x413",desc:"CYRILLIC CAPITAL LETTER GHE"},{char:"&#x414",desc:"CYRILLIC CAPITAL LETTER DE"},{char:"&#x415",desc:"CYRILLIC CAPITAL LETTER IE"},{char:"&#x416",desc:"CYRILLIC CAPITAL LETTER ZHE"},{char:"&#x417",desc:"CYRILLIC CAPITAL LETTER ZE"},{char:"&#x418",desc:"CYRILLIC CAPITAL LETTER I"},{char:"&#x419",desc:"CYRILLIC CAPITAL LETTER SHORT I"},{char:"&#x41A",desc:"CYRILLIC CAPITAL LETTER KA"},{char:"&#x41B",desc:"CYRILLIC CAPITAL LETTER EL"},{char:"&#x41C",desc:"CYRILLIC CAPITAL LETTER EM"},{char:"&#x41D",desc:"CYRILLIC CAPITAL LETTER EN"},{char:"&#x41E",desc:"CYRILLIC CAPITAL LETTER O"},{char:"&#x41F",desc:"CYRILLIC CAPITAL LETTER PE"},{char:"&#x420",desc:"CYRILLIC CAPITAL LETTER ER"},{char:"&#x421",desc:"CYRILLIC CAPITAL LETTER ES"},{char:"&#x422",desc:"CYRILLIC CAPITAL LETTER TE"},{char:"&#x423",desc:"CYRILLIC CAPITAL LETTER U"},{char:"&#x424",desc:"CYRILLIC CAPITAL LETTER EF"},{char:"&#x425",desc:"CYRILLIC CAPITAL LETTER HA"},{char:"&#x426",desc:"CYRILLIC CAPITAL LETTER TSE"},{char:"&#x427",desc:"CYRILLIC CAPITAL LETTER CHE"},{char:"&#x428",desc:"CYRILLIC CAPITAL LETTER SHA"},{char:"&#x429",desc:"CYRILLIC CAPITAL LETTER SHCHA"},{char:"&#x42A",desc:"CYRILLIC CAPITAL LETTER HARD SIGN"},{char:"&#x42B",desc:"CYRILLIC CAPITAL LETTER YERU"},{char:"&#x42C",desc:"CYRILLIC CAPITAL LETTER SOFT SIGN"},{char:"&#x42D",desc:"CYRILLIC CAPITAL LETTER E"},{char:"&#x42E",desc:"CYRILLIC CAPITAL LETTER YU"},{char:"&#x42F",desc:"CYRILLIC CAPITAL LETTER YA"},{char:"&#x430",desc:"CYRILLIC SMALL LETTER A"},{char:"&#x431",desc:"CYRILLIC SMALL LETTER BE"},{char:"&#x432",desc:"CYRILLIC SMALL LETTER VE"},{char:"&#x433",desc:"CYRILLIC SMALL LETTER GHE"},{char:"&#x434",desc:"CYRILLIC SMALL LETTER DE"},{char:"&#x435",desc:"CYRILLIC SMALL LETTER IE"},{char:"&#x436",desc:"CYRILLIC SMALL LETTER ZHE"},{char:"&#x437",desc:"CYRILLIC SMALL LETTER ZE"},{char:"&#x438",desc:"CYRILLIC SMALL LETTER I"},{char:"&#x439",desc:"CYRILLIC SMALL LETTER SHORT I"},{char:"&#x43A",desc:"CYRILLIC SMALL LETTER KA"},{char:"&#x43B",desc:"CYRILLIC SMALL LETTER EL"},{char:"&#x43C",desc:"CYRILLIC SMALL LETTER EM"},{char:"&#x43D",desc:"CYRILLIC SMALL LETTER EN"},{char:"&#x43E",desc:"CYRILLIC SMALL LETTER O"},{char:"&#x43F",desc:"CYRILLIC SMALL LETTER PE"},{char:"&#x440",desc:"CYRILLIC SMALL LETTER ER"},{char:"&#x441",desc:"CYRILLIC SMALL LETTER ES"},{char:"&#x442",desc:"CYRILLIC SMALL LETTER TE"},{char:"&#x443",desc:"CYRILLIC SMALL LETTER U"},{char:"&#x444",desc:"CYRILLIC SMALL LETTER EF"},{char:"&#x445",desc:"CYRILLIC SMALL LETTER HA"},{char:"&#x446",desc:"CYRILLIC SMALL LETTER TSE"},{char:"&#x447",desc:"CYRILLIC SMALL LETTER CHE"},{char:"&#x448",desc:"CYRILLIC SMALL LETTER SHA"},{char:"&#x449",desc:"CYRILLIC SMALL LETTER SHCHA"},{char:"&#x44A",desc:"CYRILLIC SMALL LETTER HARD SIGN"},{char:"&#x44B",desc:"CYRILLIC SMALL LETTER YERU"},{char:"&#x44C",desc:"CYRILLIC SMALL LETTER SOFT SIGN"},{char:"&#x44D",desc:"CYRILLIC SMALL LETTER E"},{char:"&#x44E",desc:"CYRILLIC SMALL LETTER YU"},{char:"&#x44F",desc:"CYRILLIC SMALL LETTER YA"},{char:"&#x450",desc:"CYRILLIC SMALL LETTER IE WITH GRAVE"},{char:"&#x451",desc:"CYRILLIC SMALL LETTER IO"},{char:"&#x452",desc:"CYRILLIC SMALL LETTER DJE"},{char:"&#x453",desc:"CYRILLIC SMALL LETTER GJE"},{char:"&#x454",desc:"CYRILLIC SMALL LETTER UKRAINIAN IE"},{char:"&#x455",desc:"CYRILLIC SMALL LETTER DZE"},{char:"&#x456",desc:"CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I"},{char:"&#x457",desc:"CYRILLIC SMALL LETTER YI"},{char:"&#x458",desc:"CYRILLIC SMALL LETTER JE"},{char:"&#x459",desc:"CYRILLIC SMALL LETTER LJE"},{char:"&#x45A",desc:"CYRILLIC SMALL LETTER NJE"},{char:"&#x45B",desc:"CYRILLIC SMALL LETTER TSHE"},{char:"&#x45C",desc:"CYRILLIC SMALL LETTER KJE"},{char:"&#x45D",desc:"CYRILLIC SMALL LETTER I WITH GRAVE"},{char:"&#x45E",desc:"CYRILLIC SMALL LETTER SHORT U"},{char:"&#x45F",desc:"CYRILLIC SMALL LETTER DZHE"}]},{title:"Punctuation",list:[{char:"&ndash;",desc:"EN DASH"},{char:"&mdash;",desc:"EM DASH"},{char:"&lsquo;",desc:"LEFT SINGLE QUOTATION MARK"},{char:"&rsquo;",desc:"RIGHT SINGLE QUOTATION MARK"},{char:"&sbquo;",desc:"SINGLE LOW-9 QUOTATION MARK"},{char:"&ldquo;",desc:"LEFT DOUBLE QUOTATION MARK"},{char:"&rdquo;",desc:"RIGHT DOUBLE QUOTATION MARK"},{char:"&bdquo;",desc:"DOUBLE LOW-9 QUOTATION MARK"},{char:"&dagger;",desc:"DAGGER"},{char:"&Dagger;",desc:"DOUBLE DAGGER"},{char:"&bull;",desc:"BULLET"},{char:"&hellip;",desc:"HORIZONTAL ELLIPSIS"},{char:"&permil;",desc:"PER MILLE SIGN"},{char:"&prime;",desc:"PRIME"},{char:"&Prime;",desc:"DOUBLE PRIME"},{char:"&lsaquo;",desc:"SINGLE LEFT-POINTING ANGLE QUOTATION MARK"},{char:"&rsaquo;",desc:"SINGLE RIGHT-POINTING ANGLE QUOTATION MARK"},{char:"&oline;",desc:"OVERLINE"},{char:"&frasl;",desc:"FRACTION SLASH"}]},{title:"Currency",list:[{char:"&#x20A0",desc:"EURO-CURRENCY SIGN"},{char:"&#x20A1",desc:"COLON SIGN"},{char:"&#x20A2",desc:"CRUZEIRO SIGN"},{char:"&#x20A3",desc:"FRENCH FRANC SIGN"},{char:"&#x20A4",desc:"LIRA SIGN"},{char:"&#x20A5",desc:"MILL SIGN"},{char:"&#x20A6",desc:"NAIRA SIGN"},{char:"&#x20A7",desc:"PESETA SIGN"},{char:"&#x20A8",desc:"RUPEE SIGN"},{char:"&#x20A9",desc:"WON SIGN"},{char:"&#x20AA",desc:"NEW SHEQEL SIGN"},{char:"&#x20AB",desc:"DONG SIGN"},{char:"&#x20AC",desc:"EURO SIGN"},{char:"&#x20AD",desc:"KIP SIGN"},{char:"&#x20AE",desc:"TUGRIK SIGN"},{char:"&#x20AF",desc:"DRACHMA SIGN"},{char:"&#x20B0",desc:"GERMAN PENNY SYMBOL"},{char:"&#x20B1",desc:"PESO SIGN"},{char:"&#x20B2",desc:"GUARANI SIGN"},{char:"&#x20B3",desc:"AUSTRAL SIGN"},{char:"&#x20B4",desc:"HRYVNIA SIGN"},{char:"&#x20B5",desc:"CEDI SIGN"},{char:"&#x20B6",desc:"LIVRE TOURNOIS SIGN"},{char:"&#x20B7",desc:"SPESMILO SIGN"},{char:"&#x20B8",desc:"TENGE SIGN"},{char:"&#x20B9",desc:"INDIAN RUPEE SIGN"}]},{title:"Arrows",list:[{char:"&#x2190",desc:"LEFTWARDS ARROW"},{char:"&#x2191",desc:"UPWARDS ARROW"},{char:"&#x2192",desc:"RIGHTWARDS ARROW"},{char:"&#x2193",desc:"DOWNWARDS ARROW"},{char:"&#x2194",desc:"LEFT RIGHT ARROW"},{char:"&#x2195",desc:"UP DOWN ARROW"},{char:"&#x2196",desc:"NORTH WEST ARROW"},{char:"&#x2197",desc:"NORTH EAST ARROW"},{char:"&#x2198",desc:"SOUTH EAST ARROW"},{char:"&#x2199",desc:"SOUTH WEST ARROW"},{char:"&#x219A",desc:"LEFTWARDS ARROW WITH STROKE"},{char:"&#x219B",desc:"RIGHTWARDS ARROW WITH STROKE"},{char:"&#x219C",desc:"LEFTWARDS WAVE ARROW"},{char:"&#x219D",desc:"RIGHTWARDS WAVE ARROW"},{char:"&#x219E",desc:"LEFTWARDS TWO HEADED ARROW"},{char:"&#x219F",desc:"UPWARDS TWO HEADED ARROW"},{char:"&#x21A0",desc:"RIGHTWARDS TWO HEADED ARROW"},{char:"&#x21A1",desc:"DOWNWARDS TWO HEADED ARROW"},{char:"&#x21A2",desc:"LEFTWARDS ARROW WITH TAIL"},{char:"&#x21A3",desc:"RIGHTWARDS ARROW WITH TAIL"},{char:"&#x21A4",desc:"LEFTWARDS ARROW FROM BAR"},{char:"&#x21A5",desc:"UPWARDS ARROW FROM BAR"},{char:"&#x21A6",desc:"RIGHTWARDS ARROW FROM BAR"},{char:"&#x21A7",desc:"DOWNWARDS ARROW FROM BAR"},{char:"&#x21A8",desc:"UP DOWN ARROW WITH BASE"},{char:"&#x21A9",desc:"LEFTWARDS ARROW WITH HOOK"},{char:"&#x21AA",desc:"RIGHTWARDS ARROW WITH HOOK"},{char:"&#x21AB",desc:"LEFTWARDS ARROW WITH LOOP"},{char:"&#x21AC",desc:"RIGHTWARDS ARROW WITH LOOP"},{char:"&#x21AD",desc:"LEFT RIGHT WAVE ARROW"},{char:"&#x21AE",desc:"LEFT RIGHT ARROW WITH STROKE"},{char:"&#x21AF",desc:"DOWNWARDS ZIGZAG ARROW"},{char:"&#x21B0",desc:"UPWARDS ARROW WITH TIP LEFTWARDS"},{char:"&#x21B1",desc:"UPWARDS ARROW WITH TIP RIGHTWARDS"},{char:"&#x21B2",desc:"DOWNWARDS ARROW WITH TIP LEFTWARDS"},{char:"&#x21B3",desc:"DOWNWARDS ARROW WITH TIP RIGHTWARDS"},{char:"&#x21B4",desc:"RIGHTWARDS ARROW WITH CORNER DOWNWARDS"},{char:"&#x21B5",desc:"DOWNWARDS ARROW WITH CORNER LEFTWARDS"},{char:"&#x21B6",desc:"ANTICLOCKWISE TOP SEMICIRCLE ARROW"},{char:"&#x21B7",desc:"CLOCKWISE TOP SEMICIRCLE ARROW"},{char:"&#x21B8",desc:"NORTH WEST ARROW TO LONG BAR"},{char:"&#x21B9",desc:"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR"},{char:"&#x21BA",desc:"ANTICLOCKWISE OPEN CIRCLE ARROW"},{char:"&#x21BB",desc:"CLOCKWISE OPEN CIRCLE ARROW"},{char:"&#x21BC",desc:"LEFTWARDS HARPOON WITH BARB UPWARDS"},{char:"&#x21BD",desc:"LEFTWARDS HARPOON WITH BARB DOWNWARDS"},{char:"&#x21BE",desc:"UPWARDS HARPOON WITH BARB RIGHTWARDS"},{char:"&#x21BF",desc:"UPWARDS HARPOON WITH BARB LEFTWARDS"},{char:"&#x21C0",desc:"RIGHTWARDS HARPOON WITH BARB UPWARDS"},{char:"&#x21C1",desc:"RIGHTWARDS HARPOON WITH BARB DOWNWARDS"},{char:"&#x21C2",desc:"DOWNWARDS HARPOON WITH BARB RIGHTWARDS"},{char:"&#x21C3",desc:"DOWNWARDS HARPOON WITH BARB LEFTWARDS"},{char:"&#x21C4",desc:"RIGHTWARDS ARROW OVER LEFTWARDS ARROW"},{char:"&#x21C5",desc:"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW"},{char:"&#x21C6",desc:"LEFTWARDS ARROW OVER RIGHTWARDS ARROW"},{char:"&#x21C7",desc:"LEFTWARDS PAIRED ARROWS"},{char:"&#x21C8",desc:"UPWARDS PAIRED ARROWS"},{char:"&#x21C9",desc:"RIGHTWARDS PAIRED ARROWS"},{char:"&#x21CA",desc:"DOWNWARDS PAIRED ARROWS"},{char:"&#x21CB",desc:"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON"},{char:"&#x21CC",desc:"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON"},{char:"&#x21CD",desc:"LEFTWARDS DOUBLE ARROW WITH STROKE"},{char:"&#x21CE",desc:"LEFT RIGHT DOUBLE ARROW WITH STROKE"},{char:"&#x21CF",desc:"RIGHTWARDS DOUBLE ARROW WITH STROKE"},{char:"&#x21D0",desc:"LEFTWARDS DOUBLE ARROW"},{char:"&#x21D1",desc:"UPWARDS DOUBLE ARROW"},{char:"&#x21D2",desc:"RIGHTWARDS DOUBLE ARROW"},{char:"&#x21D3",desc:"DOWNWARDS DOUBLE ARROW"},{char:"&#x21D4",desc:"LEFT RIGHT DOUBLE ARROW"},{char:"&#x21D5",desc:"UP DOWN DOUBLE ARROW"},{char:"&#x21D6",desc:"NORTH WEST DOUBLE ARROW"},{char:"&#x21D7",desc:"NORTH EAST DOUBLE ARROW"},{char:"&#x21D8",desc:"SOUTH EAST DOUBLE ARROW"},{char:"&#x21D9",desc:"SOUTH WEST DOUBLE ARROW"},{char:"&#x21DA",desc:"LEFTWARDS TRIPLE ARROW"},{char:"&#x21DB",desc:"RIGHTWARDS TRIPLE ARROW"},{char:"&#x21DC",desc:"LEFTWARDS SQUIGGLE ARROW"},{char:"&#x21DD",desc:"RIGHTWARDS SQUIGGLE ARROW"},{char:"&#x21DE",desc:"UPWARDS ARROW WITH DOUBLE STROKE"},{char:"&#x21DF",desc:"DOWNWARDS ARROW WITH DOUBLE STROKE"},{char:"&#x21E0",desc:"LEFTWARDS DASHED ARROW"},{char:"&#x21E1",desc:"UPWARDS DASHED ARROW"},{char:"&#x21E2",desc:"RIGHTWARDS DASHED ARROW"},{char:"&#x21E3",desc:"DOWNWARDS DASHED ARROW"},{char:"&#x21E4",desc:"LEFTWARDS ARROW TO BAR"},{char:"&#x21E5",desc:"RIGHTWARDS ARROW TO BAR"},{char:"&#x21E6",desc:"LEFTWARDS WHITE ARROW"},{char:"&#x21E7",desc:"UPWARDS WHITE ARROW"},{char:"&#x21E8",desc:"RIGHTWARDS WHITE ARROW"},{char:"&#x21E9",desc:"DOWNWARDS WHITE ARROW"},{char:"&#x21EA",desc:"UPWARDS WHITE ARROW FROM BAR"},{char:"&#x21EB",desc:"UPWARDS WHITE ARROW ON PEDESTAL"},{char:"&#x21EC",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR"},{char:"&#x21ED",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR"},{char:"&#x21EE",desc:"UPWARDS WHITE DOUBLE ARROW"},{char:"&#x21EF",desc:"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL"},{char:"&#x21F0",desc:"RIGHTWARDS WHITE ARROW FROM WALL"},{char:"&#x21F1",desc:"NORTH WEST ARROW TO CORNER"},{char:"&#x21F2",desc:"SOUTH EAST ARROW TO CORNER"},{char:"&#x21F3",desc:"UP DOWN WHITE ARROW"},{char:"&#x21F4",desc:"RIGHT ARROW WITH SMALL CIRCLE"},{char:"&#x21F5",desc:"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW"},{char:"&#x21F6",desc:"THREE RIGHTWARDS ARROWS"},{char:"&#x21F7",desc:"LEFTWARDS ARROW WITH VERTICAL STROKE"},{char:"&#x21F8",desc:"RIGHTWARDS ARROW WITH VERTICAL STROKE"},{char:"&#x21F9",desc:"LEFT RIGHT ARROW WITH VERTICAL STROKE"},{char:"&#x21FA",desc:"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FB",desc:"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FC",desc:"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FD",desc:"LEFTWARDS OPEN-HEADED ARROW"},{char:"&#x21FE",desc:"RIGHTWARDS OPEN-HEADED ARROW"},{char:"&#x21FF",desc:"LEFT RIGHT OPEN-HEADED ARROW"}]},{title:"Math",list:[{char:"&forall;",desc:"FOR ALL"},{char:"&part;",desc:"PARTIAL DIFFERENTIAL"},{char:"&exist;",desc:"THERE EXISTS"},{char:"&empty;",desc:"EMPTY SET"},{char:"&nabla;",desc:"NABLA"},{char:"&isin;",desc:"ELEMENT OF"},{char:"&notin;",desc:"NOT AN ELEMENT OF"},{char:"&ni;",desc:"CONTAINS AS MEMBER"},{char:"&prod;",desc:"N-ARY PRODUCT"},{char:"&sum;",desc:"N-ARY SUMMATION"},{char:"&minus;",desc:"MINUS SIGN"},{char:"&lowast;",desc:"ASTERISK OPERATOR"},{char:"&radic;",desc:"SQUARE ROOT"},{char:"&prop;",desc:"PROPORTIONAL TO"},{char:"&infin;",desc:"INFINITY"},{char:"&ang;",desc:"ANGLE"},{char:"&and;",desc:"LOGICAL AND"},{char:"&or;",desc:"LOGICAL OR"},{char:"&cap;",desc:"INTERSECTION"},{char:"&cup;",desc:"UNION"},{char:"&int;",desc:"INTEGRAL"},{char:"&there4;",desc:"THEREFORE"},{char:"&sim;",desc:"TILDE OPERATOR"},{char:"&cong;",desc:"APPROXIMATELY EQUAL TO"},{char:"&asymp;",desc:"ALMOST EQUAL TO"},{char:"&ne;",desc:"NOT EQUAL TO"},{char:"&equiv;",desc:"IDENTICAL TO"},{char:"&le;",desc:"LESS-THAN OR EQUAL TO"},{char:"&ge;",desc:"GREATER-THAN OR EQUAL TO"},{char:"&sub;",desc:"SUBSET OF"},{char:"&sup;",desc:"SUPERSET OF"},{char:"&nsub;",desc:"NOT A SUBSET OF"},{char:"&sube;",desc:"SUBSET OF OR EQUAL TO"},{char:"&supe;",desc:"SUPERSET OF OR EQUAL TO"},{char:"&oplus;",desc:"CIRCLED PLUS"},{char:"&otimes;",desc:"CIRCLED TIMES"},{char:"&perp;",desc:"UP TACK"}]},{title:"Misc",list:[{char:"&spades;",desc:"BLACK SPADE SUIT"},{char:"&clubs;",desc:"BLACK CLUB SUIT"},{char:"&hearts;",desc:"BLACK HEART SUIT"},{char:"&diams;",desc:"BLACK DIAMOND SUIT"},{char:"&#x2669",desc:"QUARTER NOTE"},{char:"&#x266A",desc:"EIGHTH NOTE"},{char:"&#x266B",desc:"BEAMED EIGHTH NOTES"},{char:"&#x266C",desc:"BEAMED SIXTEENTH NOTES"},{char:"&#x266D",desc:"MUSIC FLAT SIGN"},{char:"&#x266E",desc:"MUSIC NATURAL SIGN"},{char:"&#x2600",desc:"BLACK SUN WITH RAYS"},{char:"&#x2601",desc:"CLOUD"},{char:"&#x2602",desc:"UMBRELLA"},{char:"&#x2603",desc:"SNOWMAN"},{char:"&#x2615",desc:"HOT BEVERAGE"},{char:"&#x2618",desc:"SHAMROCK"},{char:"&#x262F",desc:"YIN YANG"},{char:"&#x2714",desc:"HEAVY CHECK MARK"},{char:"&#x2716",desc:"HEAVY MULTIPLICATION X"},{char:"&#x2744",desc:"SNOWFLAKE"},{char:"&#x275B",desc:"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275C",desc:"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275D",desc:"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275E",desc:"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT"},{char:"&#x2764",desc:"HEAVY BLACK HEART"}]}]}),a.FE.PLUGINS.specialCharacters=function(b){function c(){}function d(){for(var c='<div class="fr-special-characters-modal">',d=0;d<a.FE.DEFAULTS.specialCharactersSets.length;d++){for(var e=a.FE.DEFAULTS.specialCharactersSets[d],f=e.list,g='<div class="fr-special-characters-list"><p class="fr-special-characters-title">'+e.title+"</p>",h=0;h<f.length;h++){var i=f[h];g+='<span class="fr-command fr-special-character" tabIndex="-1" role="button" value="'+i.char+'" title="'+i.desc+'">'+i.char+'<span class="fr-sr-only">'+b.language.translate(i.desc)+"&nbsp;&nbsp;&nbsp;</span></span>"}c+=g+"</div>"}return c+="</div>"}function e(a,c){b.events.disableBlur(),a.focus(),c.preventDefault(),c.stopPropagation()}function f(){b.events.$on(l,"keydown",function(c){var d=c.which,f=l.find("span.fr-special-character:focus:first");if(!(f.length||d!=a.FE.KEYCODE.F10||b.keys.ctrlKey(c)||c.shiftKey)&&c.altKey){return e(l.find("span.fr-special-character:first"),c),!1}if(d==a.FE.KEYCODE.TAB||d==a.FE.KEYCODE.ARROW_LEFT||d==a.FE.KEYCODE.ARROW_RIGHT){var g=null,h=null,i=!1;return d==a.FE.KEYCODE.ARROW_LEFT||d==a.FE.KEYCODE.ARROW_RIGHT?(h=d==a.FE.KEYCODE.ARROW_RIGHT,i=!0):h=!c.shiftKey,f.length?(i&&(g=h?f.nextAll("span.fr-special-character:first"):f.prevAll("span.fr-special-character:first")),g&&g.length||(g=h?f.parent().next().find("span.fr-special-character:first"):f.parent().prev().find("span.fr-special-character:"+(i?"last":"first")),g.length||(g=l.find("span.fr-special-character:"+(h?"first":"last"))))):g=l.find("span.fr-special-character:"+(h?"first":"last")),e(g,c),!1}if(d!=a.FE.KEYCODE.ENTER||!f.length)return!0;(j.data("instance")||b).specialCharacters.insert(f)},!0)}function g(){if(!j){var c="<h4>Special Characters</h4>",e=d(),g=b.modals.create(m,c,e);j=g.$modal,k=g.$head,l=g.$body,b.events.$on(a(b.o_win),"resize",function(){(j.data("instance")||b).modals.resize(m)}),b.events.bindClick(l,".fr-special-character",function(c){var d=j.data("instance")||b,e=a(c.currentTarget);d.specialCharacters.insert(e)}),f()}b.modals.show(m),b.modals.resize(m)}function h(){b.modals.hide(m)}function i(a){b.specialCharacters.hide(),b.undo.saveStep(),b.html.insert(a.attr("value"),!0),b.undo.saveStep()}var j,k,l,m="special_characters";return{_init:c,show:g,hide:h,insert:i}},a.FroalaEditor.DefineIcon("specialCharacters",{template:"text",NAME:"&#937;"}),a.FE.RegisterCommand("specialCharacters",{title:"Special Characters",icon:"specialCharacters",undo:!1,focus:!1,modal:!0,callback:function(){this.specialCharacters.show()},plugin:"specialCharacters",showOnMobile:!1}),a.extend(a.FE.POPUP_TEMPLATES,{"table.insert":"[_BUTTONS_][_ROWS_COLUMNS_]","table.edit":"[_BUTTONS_]","table.colors":"[_BUTTONS_][_COLORS_]"}),a.extend(a.FE.DEFAULTS,{tableInsertMaxSize:10,tableEditButtons:["tableHeader","tableRemove","|","tableRows","tableColumns","tableStyle","-","tableCells","tableCellBackground","tableCellVerticalAlign","tableCellHorizontalAlign","tableCellStyle"],tableInsertButtons:["tableBack","|"],tableResizer:!0,tableResizerOffset:5,tableResizingLimit:30,tableColorsButtons:["tableBack","|"],tableColors:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],tableColorsStep:7,tableCellStyles:{"fr-highlighted":"Highlighted","fr-thick":"Thick"},tableStyles:{"fr-dashed-borders":"Dashed Borders","fr-alternate-rows":"Alternate Rows"},tableCellMultipleStyles:!0,tableMultipleStyles:!0,tableInsertHelper:!0,tableInsertHelperOffset:15}),a.FE.PLUGINS.table=function(b){function c(){var a=b.$tb.find('.fr-command[data-cmd="insertTable"]'),c=b.popups.get("table.insert");if(c||(c=g()),!c.hasClass("fr-active")){b.popups.refresh("table.insert"),b.popups.setContainer("table.insert",b.$tb);var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("table.insert",d,e,a.outerHeight())}}function d(){var a=I();if(a){var c=b.popups.get("table.edit");c||(c=k()),b.popups.setContainer("table.edit",b.$sc);var d=Q(a),e=(d.left+d.right)/2,f=d.bottom;b.popups.show("table.edit",e,f,d.bottom-d.top),b.edit.isDisabled()&&(b.toolbar.disable(),b.$el.removeClass("fr-no-selection"),b.edit.on(),b.button.bulkRefresh(),b.selection.setAtEnd(b.$el.find(".fr-selected-cell:last").get(0)),b.selection.restore())}}function e(){var a=I();if(a){var c=b.popups.get("table.colors");c||(c=l()),b.popups.setContainer("table.colors",b.$sc);var d=Q(a),e=(d.left+d.right)/2,f=d.bottom;o(),b.popups.show("table.colors",e,f,d.bottom-d.top)}}function f(){0===sa().length&&b.toolbar.enable()}function g(c){if(c)return b.popups.onHide("table.insert",function(){b.popups.get("table.insert").find('.fr-table-size .fr-select-table-size > span[data-row="1"][data-col="1"]').trigger("mouseenter")}),!0;var d="";b.opts.tableInsertButtons.length>0&&(d='<div class="fr-buttons">'+b.button.buildList(b.opts.tableInsertButtons)+"</div>");var e={buttons:d,rows_columns:i()},f=b.popups.create("table.insert",e);return b.events.$on(f,"mouseenter",".fr-table-size .fr-select-table-size .fr-table-cell",function(b){h(a(b.currentTarget))},!0),j(f),f}function h(a){var c=a.data("row"),d=a.data("col"),e=a.parent();e.siblings(".fr-table-size-info").html(c+" &times; "+d),e.find("> span").removeClass("hover fr-active-item");for(var f=1;f<=b.opts.tableInsertMaxSize;f++)for(var g=0;g<=b.opts.tableInsertMaxSize;g++){var h=e.find('> span[data-row="'+f+'"][data-col="'+g+'"]');f<=c&&g<=d?h.addClass("hover"):f<=c+1||f<=2&&!b.helpers.isMobile()?h.css("display","inline-block"):f>2&&!b.helpers.isMobile()&&h.css("display","none")}a.addClass("fr-active-item")}function i(){for(var a='<div class="fr-table-size"><div class="fr-table-size-info">1 &times; 1</div><div class="fr-select-table-size">',c=1;c<=b.opts.tableInsertMaxSize;c++){for(var d=1;d<=b.opts.tableInsertMaxSize;d++){var e="inline-block";c>2&&!b.helpers.isMobile()&&(e="none");var f="fr-table-cell ";1==c&&1==d&&(f+=" hover"),a+='<span class="fr-command '+f+'" tabIndex="-1" data-cmd="tableInsert" data-row="'+c+'" data-col="'+d+'" data-param1="'+c+'" data-param2="'+d+'" style="display: '+e+';" role="button"><span></span><span class="fr-sr-only">'+c+" &times; "+d+"&nbsp;&nbsp;&nbsp;</span></span>"}a+='<div class="new-line"></div>'}return a+="</div></div>"}function j(c){b.events.$on(c,"focus","[tabIndex]",function(b){h(a(b.currentTarget))}),b.events.on("popup.tab",function(c){var d=a(c.currentTarget);if(!b.popups.isVisible("table.insert")||!d.is("span, a"))return!0;var e,f=c.which;if(a.FE.KEYCODE.ARROW_UP==f||a.FE.KEYCODE.ARROW_DOWN==f||a.FE.KEYCODE.ARROW_LEFT==f||a.FE.KEYCODE.ARROW_RIGHT==f){if(d.is("span.fr-table-cell")){var g=d.parent().find("span.fr-table-cell"),i=g.index(d),j=b.opts.tableInsertMaxSize,k=i%j,l=Math.floor(i/j);a.FE.KEYCODE.ARROW_UP==f?l=Math.max(0,l-1):a.FE.KEYCODE.ARROW_DOWN==f?l=Math.min(b.opts.tableInsertMaxSize-1,l+1):a.FE.KEYCODE.ARROW_LEFT==f?k=Math.max(0,k-1):a.FE.KEYCODE.ARROW_RIGHT==f&&(k=Math.min(b.opts.tableInsertMaxSize-1,k+1));var m=l*j+k,n=a(g.get(m));h(n),b.events.disableBlur(),n.focus(),e=!1}}else a.FE.KEYCODE.ENTER==f&&(b.button.exec(d),e=!1);return!1===e&&(c.preventDefault(),c.stopPropagation()),e},!0)}function k(a){if(a)return b.popups.onHide("table.edit",f),!0;var c="";b.opts.tableEditButtons.length>0&&(c='<div class="fr-buttons">'+b.button.buildList(b.opts.tableEditButtons)+"</div>");var e={buttons:c},g=b.popups.create("table.edit",e);return b.events.$on(b.$wp,"scroll.table-edit",function(){b.popups.isVisible("table.edit")&&d()}),g}function l(){var a="";b.opts.tableColorsButtons.length>0&&(a='<div class="fr-buttons fr-table-colors-buttons">'+b.button.buildList(b.opts.tableColorsButtons)+"</div>");var c={buttons:a,colors:m()},d=b.popups.create("table.colors",c);return b.events.$on(b.$wp,"scroll.table-colors",function(){b.popups.isVisible("table.colors")&&e()}),n(d),d}function m(){for(var a='<div class="fr-table-colors">',c=0;c<b.opts.tableColors.length;c++)0!==c&&c%b.opts.tableColorsStep==0&&(a+="<br>"),"REMOVE"!=b.opts.tableColors[c]?a+='<span class="fr-command" style="background: '+b.opts.tableColors[c]+';" tabIndex="-1" role="button" data-cmd="tableCellBackgroundColor" data-param1="'+b.opts.tableColors[c]+'"><span class="fr-sr-only">'+b.language.translate("Color")+" "+b.opts.tableColors[c]+"&nbsp;&nbsp;&nbsp;</span></span>":a+='<span class="fr-command" data-cmd="tableCellBackgroundColor" tabIndex="-1" role="button" data-param1="REMOVE" title="'+b.language.translate("Clear Formatting")+'">'+b.icon.create("tableColorRemove")+'<span class="fr-sr-only">'+b.language.translate("Clear Formatting")+"</span></span>";return a+="</div>"}function n(c){b.events.on("popup.tab",function(d){var e=a(d.currentTarget);if(!b.popups.isVisible("table.colors")||!e.is("span"))return!0;var f=d.which,g=!0;if(a.FE.KEYCODE.TAB==f){var h=c.find(".fr-buttons");g=!b.accessibility.focusToolbar(h,!!d.shiftKey)}else if(a.FE.KEYCODE.ARROW_UP==f||a.FE.KEYCODE.ARROW_DOWN==f||a.FE.KEYCODE.ARROW_LEFT==f||a.FE.KEYCODE.ARROW_RIGHT==f){var i=e.parent().find("span.fr-command"),j=i.index(e),k=b.opts.colorsStep,l=Math.floor(i.length/k),m=j%k,n=Math.floor(j/k),o=n*k+m,p=l*k;a.FE.KEYCODE.ARROW_UP==f?o=((o-k)%p+p)%p:a.FE.KEYCODE.ARROW_DOWN==f?o=(o+k)%p:a.FE.KEYCODE.ARROW_LEFT==f?o=((o-1)%p+p)%p:a.FE.KEYCODE.ARROW_RIGHT==f&&(o=(o+1)%p);var q=a(i.get(o));b.events.disableBlur(),q.focus(),g=!1}else a.FE.KEYCODE.ENTER==f&&(b.button.exec(e),g=!1);return!1===g&&(d.preventDefault(),d.stopPropagation()),g},!0)}function o(){var a=b.popups.get("table.colors"),c=b.$el.find(".fr-selected-cell:first");a.find(".fr-selected-color").removeClass("fr-selected-color fr-active-item"),a.find('span[data-param1="'+b.helpers.RGBToHex(c.css("background-color"))+'"]').addClass("fr-selected-color fr-active-item")}function p(c,d){var e,f,g='<table style="width: 100%;"><tbody>',h=100/d;for(e=0;e<c;e++){for(g+="<tr>",f=0;f<d;f++)g+='<td style="width: '+h.toFixed(4)+'%;">',0===e&&0===f&&(g+=a.FE.MARKERS),g+="<br></td>";g+="</tr>"}g+="</tbody></table>",b.html.insert(g),b.selection.restore()}function q(){if(sa().length>0){var a=ta();b.selection.setBefore(a.get(0))||b.selection.setAfter(a.get(0)),b.selection.restore(),b.popups.hide("table.edit"),a.remove(),b.toolbar.enable()}}function r(){var b=ta();if(b.length>0&&0===b.find("th").length){var c,e="<thead><tr>",f=0;for(b.find("tr:first > td").each(function(){var b=a(this);f+=parseInt(b.attr("colspan"),10)||1}),c=0;c<f;c++)e+="<th><br></th>";e+="</tr></thead>",b.prepend(e),d()}}function s(){var a=ta(),c=a.find("thead");if(c.length>0)if(0===a.find("tbody tr").length)q();else if(c.remove(),sa().length>0)d();else{b.popups.hide("table.edit");var e=a.find("tbody tr:first td:first").get(0);e&&(b.selection.setAtEnd(e),b.selection.restore())}}function t(c){var e=ta();if(e.length>0){if(b.$el.find("th.fr-selected-cell").length>0&&"above"==c)return;var f,g,h=I(),i=O(h);g="above"==c?i.min_i:i.max_i;var j="<tr>";for(f=0;f<h[g].length;f++)if("below"==c&&g<h.length-1&&h[g][f]==h[g+1][f]||"above"==c&&g>0&&h[g][f]==h[g-1][f]){if(0===f||f>0&&h[g][f]!=h[g][f-1]){var k=a(h[g][f]);k.attr("rowspan",parseInt(k.attr("rowspan"),10)+1)}}else j+="<td><br></td>";j+="</tr>";var l=a(e.find("tr").not(e.find("table tr")).get(g));"below"==c?l.after(j):"above"==c&&(l.before(j),b.popups.isVisible("table.edit")&&d())}}function u(){var c=ta();if(c.length>0){var d,e,f,g=I(),h=O(g);if(0===h.min_i&&h.max_i==g.length-1)q();else{for(d=h.max_i;d>=h.min_i;d--){for(f=a(c.find("tr").not(c.find("table tr")).get(d)),e=0;e<g[d].length;e++)if(0===e||g[d][e]!=g[d][e-1]){var i=a(g[d][e]);if(parseInt(i.attr("rowspan"),10)>1){var j=parseInt(i.attr("rowspan"),10)-1;1==j?i.removeAttr("rowspan"):i.attr("rowspan",j)}if(d<g.length-1&&g[d][e]==g[d+1][e]&&(0===d||g[d][e]!=g[d-1][e])){for(var k=g[d][e],l=e;l>0&&g[d][l]==g[d][l-1];)l--;0===l?a(c.find("tr").not(c.find("table tr")).get(d+1)).prepend(k):a(g[d+1][l-1]).after(k)}}var m=f.parent();f.remove(),0===m.find("tr").length&&m.remove(),g=I(c)}A(0,g.length-1,0,g[0].length-1,c),h.min_i>0?b.selection.setAtEnd(g[h.min_i-1][0]):b.selection.setAtEnd(g[0][0]),b.selection.restore(),b.popups.hide("table.edit")}}}function v(c){var e=ta();if(e.length>0){var f,g=I(),h=O(g);f="before"==c?h.min_j:h.max_j;var i,j=100/g[0].length,k=100/(g[0].length+1);e.find("th, td").each(function(){i=a(this),i.data("old-width",i.outerWidth()/e.outerWidth()*100)}),e.find("tr").not(e.find("table tr")).each(function(b){for(var d,e=a(this),h=0,i=0;h-1<f;){if(!(d=e.find("> th, > td").get(i))){d=null;break}d==g[b][h]?(h+=parseInt(a(d).attr("colspan"),10)||1,i++):(h+=parseInt(a(g[b][h]).attr("colspan"),10)||1,"after"==c&&(d=0===i?-1:e.find("> th, > td").get(i-1)))}var l=a(d);if("after"==c&&h-1>f||"before"==c&&f>0&&g[b][f]==g[b][f-1]){if(0===b||b>0&&g[b][f]!=g[b-1][f]){var m=parseInt(l.attr("colspan"),10)+1;l.attr("colspan",m),l.css("width",(l.data("old-width")*k/j+k).toFixed(4)+"%"),l.removeData("old-width")}}else{var n;n=e.find("th").length>0?'<th style="width: '+k.toFixed(4)+'%;"><br></th>':'<td style="width: '+k.toFixed(4)+'%;"><br></td>',-1==d?e.prepend(n):null==d?e.append(n):"before"==c?l.before(n):"after"==c&&l.after(n)}}),e.find("th, td").each(function(){i=a(this),i.data("old-width")&&(i.css("width",(i.data("old-width")*k/j).toFixed(4)+"%"),i.removeData("old-width"))}),b.popups.isVisible("table.edit")&&d()}}function w(){var c=ta();if(c.length>0){var d,e,f,g=I(),h=O(g);if(0===h.min_j&&h.max_j==g[0].length-1)q();else{var i=100/g[0].length,j=100/(g[0].length-h.max_j+h.min_j-1);for(c.find("th, td").each(function(){f=a(this),f.hasClass("fr-selected-cell")||f.data("old-width",f.outerWidth()/c.outerWidth()*100)}),e=h.max_j;e>=h.min_j;e--)for(d=0;d<g.length;d++)if(0===d||g[d][e]!=g[d-1][e])if(f=a(g[d][e]),(parseInt(f.attr("colspan"),10)||1)>1){var k=parseInt(f.attr("colspan"),10)-1;1==k?f.removeAttr("colspan"):f.attr("colspan",k),f.css("width",((f.data("old-width")-ka(e,g))*j/i).toFixed(4)+"%"),f.removeData("old-width")}else{var l=a(f.parent().get(0));f.remove(),0===l.find("> th, > td").length&&(0===l.prev().length||0===l.next().length||l.prev().find("> th[rowspan], > td[rowspan]").length<l.prev().find("> th, > td").length)&&l.remove()}A(0,g.length-1,0,g[0].length-1,c),h.min_j>0?b.selection.setAtEnd(g[h.min_i][h.min_j-1]):b.selection.setAtEnd(g[h.min_i][0]),
b.selection.restore(),b.popups.hide("table.edit"),c.find("th, td").each(function(){f=a(this),f.data("old-width")&&(f.css("width",(f.data("old-width")*j/i).toFixed(4)+"%"),f.removeData("old-width"))})}}}function x(a,b,c){var d,e,f,g,h,i=0,j=I(c);for(b=Math.min(b,j[0].length-1),e=a;e<=b;e++)if(!(e>a&&j[0][e]==j[0][e-1])&&(g=parseInt(j[0][e].getAttribute("colspan"),10)||1)>1&&j[0][e]==j[0][e+1])for(i=g-1,d=1;d<j.length;d++)if(j[d][e]!=j[d-1][e]){for(f=e;f<e+g;f++)if((h=parseInt(j[d][f].getAttribute("colspan"),10)||1)>1&&j[d][f]==j[d][f+1])i=Math.min(i,h-1),f+=i;else if(!(i=Math.max(0,i-1)))break;if(!i)break}i&&z(j,i,"colspan",0,j.length-1,a,b)}function y(a,b,c){var d,e,f,g,h,i=0,j=I(c);for(b=Math.min(b,j.length-1),d=a;d<=b;d++)if(!(d>a&&j[d][0]==j[d-1][0])&&(g=parseInt(j[d][0].getAttribute("rowspan"),10)||1)>1&&j[d][0]==j[d+1][0])for(i=g-1,e=1;e<j[0].length;e++)if(j[d][e]!=j[d][e-1]){for(f=d;f<d+g;f++)if((h=parseInt(j[f][e].getAttribute("rowspan"),10)||1)>1&&j[f][e]==j[f+1][e])i=Math.min(i,h-1),f+=i;else if(!(i=Math.max(0,i-1)))break;if(!i)break}i&&z(j,i,"rowspan",a,b,0,j[0].length-1)}function z(a,b,c,d,e,f,g){var h,i,j;for(h=d;h<=e;h++)for(i=f;i<=g;i++)h>d&&a[h][i]==a[h-1][i]||i>f&&a[h][i]==a[h][i-1]||(j=parseInt(a[h][i].getAttribute(c),10)||1)>1&&(j-b>1?a[h][i].setAttribute(c,j-b):a[h][i].removeAttribute(c))}function A(a,b,c,d,e){y(a,b,e),x(c,d,e)}function B(){if(sa().length>1&&(0===b.$el.find("th.fr-selected-cell").length||0===b.$el.find("td.fr-selected-cell").length)){L();var c,e,f=I(),g=O(f),h=b.$el.find(".fr-selected-cell"),i=a(h[0]),j=i.parent(),k=j.find(".fr-selected-cell"),l=i.closest("table"),m=i.html(),n=0;for(c=0;c<k.length;c++)n+=a(k[c]).outerWidth();for(i.css("width",(n/l.outerWidth()*100).toFixed(4)+"%"),g.min_j<g.max_j&&i.attr("colspan",g.max_j-g.min_j+1),g.min_i<g.max_i&&i.attr("rowspan",g.max_i-g.min_i+1),c=1;c<h.length;c++)e=a(h[c]),"<br>"!=e.html()&&""!==e.html()&&(m+="<br>"+e.html()),e.remove();i.html(m),b.selection.setAtEnd(i.get(0)),b.selection.restore(),b.toolbar.enable(),y(g.min_i,g.max_i,l);var o=l.find("tr:empty");for(c=o.length-1;c>=0;c--)a(o[c]).remove();x(g.min_j,g.max_j,l),d()}}function C(){if(1==sa().length){var c=b.$el.find(".fr-selected-cell"),d=c.parent(),e=c.closest("table"),f=parseInt(c.attr("rowspan"),10),g=I(),h=J(c.get(0),g),i=c.clone().html("<br>");if(f>1){var j=Math.ceil(f/2);j>1?c.attr("rowspan",j):c.removeAttr("rowspan"),f-j>1?i.attr("rowspan",f-j):i.removeAttr("rowspan");for(var k=h.row+j,l=0===h.col?h.col:h.col-1;l>=0&&(g[k][l]==g[k][l-1]||k>0&&g[k][l]==g[k-1][l]);)l--;-1==l?a(e.find("tr").not(e.find("table tr")).get(k)).prepend(i):a(g[k][l]).after(i)}else{var m,n=a("<tr>").append(i);for(m=0;m<g[0].length;m++)if(0===m||g[h.row][m]!=g[h.row][m-1]){var o=a(g[h.row][m]);o.is(c)||o.attr("rowspan",(parseInt(o.attr("rowspan"),10)||1)+1)}d.after(n)}M(),b.popups.hide("table.edit")}}function D(){if(1==sa().length){var c=b.$el.find(".fr-selected-cell"),d=parseInt(c.attr("colspan"),10)||1,e=c.parent().outerWidth(),f=c.outerWidth(),g=c.clone().html("<br>"),h=I(),i=J(c.get(0),h);if(d>1){var j=Math.ceil(d/2);f=la(i.col,i.col+j-1,h)/e*100;var k=la(i.col+j,i.col+d-1,h)/e*100;j>1?c.attr("colspan",j):c.removeAttr("colspan"),d-j>1?g.attr("colspan",d-j):g.removeAttr("colspan"),c.css("width",f.toFixed(4)+"%"),g.css("width",k.toFixed(4)+"%")}else{var l;for(l=0;l<h.length;l++)if(0===l||h[l][i.col]!=h[l-1][i.col]){var m=a(h[l][i.col]);if(!m.is(c)){var n=(parseInt(m.attr("colspan"),10)||1)+1;m.attr("colspan",n)}}f=f/e*100/2,c.css("width",f.toFixed(4)+"%"),g.css("width",f.toFixed(4)+"%")}c.after(g),M(),b.popups.hide("table.edit")}}function E(a){"REMOVE"!=a?b.$el.find(".fr-selected-cell").css("background-color",b.helpers.HEXtoRGB(a)):b.$el.find(".fr-selected-cell").css("background-color","")}function F(a){b.$el.find(".fr-selected-cell").css("vertical-align",a)}function G(a){b.$el.find(".fr-selected-cell").css("text-align",a)}function H(a,b,c,d){if(b.length>0){if(!c){var e=Object.keys(d);e.splice(e.indexOf(a),1),b.removeClass(e.join(" "))}b.toggleClass(a)}}function I(b){b=b||null;var c=[];if(null==b&&sa().length>0&&(b=ta()),b)return b.find("tr").not(b.find("table tr")).each(function(b,d){var e=a(d),f=0;e.find("> th, > td").each(function(d,e){for(var g=a(e),h=parseInt(g.attr("colspan"),10)||1,i=parseInt(g.attr("rowspan"),10)||1,j=b;j<b+i;j++)for(var k=f;k<f+h;k++)c[j]||(c[j]=[]),c[j][k]?f++:c[j][k]=e;f+=h})}),c}function J(a,b){for(var c=0;c<b.length;c++)for(var d=0;d<b[c].length;d++)if(b[c][d]==a)return{row:c,col:d}}function K(a,b,c){for(var d=a+1,e=b+1;d<c.length;){if(c[d][b]!=c[a][b]){d--;break}d++}for(d==c.length&&d--;e<c[a].length;){if(c[a][e]!=c[a][b]){e--;break}e++}return e==c[a].length&&e--,{row:d,col:e}}function L(){b.el.querySelector(".fr-cell-fixed")&&b.el.querySelector(".fr-cell-fixed").classList.remove("fr-cell-fixed"),b.el.querySelector(".fr-cell-handler")&&b.el.querySelector(".fr-cell-handler").classList.remove("fr-cell-handler")}function M(){var c=b.$el.find(".fr-selected-cell");c.length>0&&c.each(function(){var b=a(this);b.removeClass("fr-selected-cell"),""===b.attr("class")&&b.removeAttr("class")}),L()}function N(){setTimeout(function(){b.selection.clear(),b.$el.addClass("fr-no-selection"),b.$el.blur()},0)}function O(a){var c=b.$el.find(".fr-selected-cell");if(c.length>0){var d,e=a.length,f=0,g=a[0].length,h=0;for(d=0;d<c.length;d++){var i=J(c[d],a),j=K(i.row,i.col,a);e=Math.min(i.row,e),f=Math.max(j.row,f),g=Math.min(i.col,g),h=Math.max(j.col,h)}return{min_i:e,max_i:f,min_j:g,max_j:h}}return null}function P(b,c,d,e,f){var g,h,i,j,k=b,l=c,m=d,n=e;for(g=k;g<=l;g++)((parseInt(a(f[g][m]).attr("rowspan"),10)||1)>1||(parseInt(a(f[g][m]).attr("colspan"),10)||1)>1)&&(i=J(f[g][m],f),j=K(i.row,i.col,f),k=Math.min(i.row,k),l=Math.max(j.row,l),m=Math.min(i.col,m),n=Math.max(j.col,n)),((parseInt(a(f[g][n]).attr("rowspan"),10)||1)>1||(parseInt(a(f[g][n]).attr("colspan"),10)||1)>1)&&(i=J(f[g][n],f),j=K(i.row,i.col,f),k=Math.min(i.row,k),l=Math.max(j.row,l),m=Math.min(i.col,m),n=Math.max(j.col,n));for(h=m;h<=n;h++)((parseInt(a(f[k][h]).attr("rowspan"),10)||1)>1||(parseInt(a(f[k][h]).attr("colspan"),10)||1)>1)&&(i=J(f[k][h],f),j=K(i.row,i.col,f),k=Math.min(i.row,k),l=Math.max(j.row,l),m=Math.min(i.col,m),n=Math.max(j.col,n)),((parseInt(a(f[l][h]).attr("rowspan"),10)||1)>1||(parseInt(a(f[l][h]).attr("colspan"),10)||1)>1)&&(i=J(f[l][h],f),j=K(i.row,i.col,f),k=Math.min(i.row,k),l=Math.max(j.row,l),m=Math.min(i.col,m),n=Math.max(j.col,n));return k==b&&l==c&&m==d&&n==e?{min_i:b,max_i:c,min_j:d,max_j:e}:P(k,l,m,n,f)}function Q(b){var c=O(b),d=a(b[c.min_i][c.min_j]),e=a(b[c.min_i][c.max_j]),f=a(b[c.max_i][c.min_j]);return{left:d.offset().left,right:e.offset().left+e.outerWidth(),top:d.offset().top,bottom:f.offset().top+f.outerHeight()}}function R(c,d){if(a(c).is(d))M(),b.edit.on(),a(c).addClass("fr-selected-cell");else{N(),b.edit.off();var e=I(),f=J(c,e),g=J(d,e),h=P(Math.min(f.row,g.row),Math.max(f.row,g.row),Math.min(f.col,g.col),Math.max(f.col,g.col),e);M(),c.classList.add("fr-cell-fixed"),d.classList.add("fr-cell-handler");for(var i=h.min_i;i<=h.max_i;i++)for(var j=h.min_j;j<=h.max_j;j++)a(e[i][j]).addClass("fr-selected-cell")}}function S(c){var d=null,e=a(c.target);return"TD"==c.target.tagName||"TH"==c.target.tagName?d=c.target:e.closest("td").length>0?d=e.closest("td").get(0):e.closest("th").length>0&&(d=e.closest("th").get(0)),0===b.$el.find(d).length?null:d}function T(){M(),b.popups.hide("table.edit")}function U(c){var d=S(c);if(sa().length>0&&!d&&T(),!b.edit.isDisabled()||b.popups.isVisible("table.edit"))if(1!=c.which||1==c.which&&b.helpers.isMac()&&c.ctrlKey)(3==c.which||1==c.which&&b.helpers.isMac()&&c.ctrlKey)&&d&&T();else if(Aa=!0,d){sa().length>0&&!c.shiftKey&&T(),c.stopPropagation(),b.events.trigger("image.hideResizer"),b.events.trigger("video.hideResizer"),za=!0;var e=d.tagName.toLowerCase();c.shiftKey&&b.$el.find(e+".fr-selected-cell").length>0?a(b.$el.find(e+".fr-selected-cell").closest("table")).is(a(d).closest("table"))?R(Ba,d):N():((b.keys.ctrlKey(c)||c.shiftKey)&&(sa().length>1||0===a(d).find(b.selection.element()).length&&!a(d).is(b.selection.element()))&&N(),Ba=d,R(Ba,Ba))}}function V(c){if(za||b.$tb.is(c.target)||b.$tb.is(a(c.target).closest(b.$tb.get(0)))||(sa().length>0&&b.toolbar.enable(),M()),!(1!=c.which||1==c.which&&b.helpers.isMac()&&c.ctrlKey)){if(Aa=!1,za){za=!1;S(c)||1!=sa().length?sa().length>0&&(b.selection.isCollapsed()?d():M()):M()}if(Da){Da=!1,xa.removeClass("fr-moving"),b.$el.removeClass("fr-no-selection"),b.edit.on();var e=parseFloat(xa.css("left"))+b.opts.tableResizerOffset;b.opts.iframe&&(e-=b.$iframe.offset().left),xa.data("release-position",e),xa.removeData("max-left"),xa.removeData("max-right"),ja(c),ba()}}}function W(c){if(!0===za){if(a(c.currentTarget).closest("table").is(ta())){if("TD"==c.currentTarget.tagName&&0===b.$el.find("th.fr-selected-cell").length)return void R(Ba,c.currentTarget);if("TH"==c.currentTarget.tagName&&0===b.$el.find("td.fr-selected-cell").length)return void R(Ba,c.currentTarget)}N()}}function X(c,d){for(var e=c;e&&"TABLE"!=e.tagName&&e.parentNode!=b.el;)e=e.parentNode;if(e&&"TABLE"==e.tagName){var f=I(a(e));"up"==d?Z(J(c,f),e,f):"down"==d&&$(J(c,f),e,f)}}function Y(a,c,d,e){for(var f,g=c;g!=b.el&&"TD"!=g.tagName&&"TH"!=g.tagName&&("up"==e?f=g.previousElementSibling:"down"==e&&(f=g.nextElementSibling),!f);)g=g.parentNode;"TD"==g.tagName||"TH"==g.tagName?X(g,e):f&&("up"==e&&b.selection.setAtEnd(f),"down"==e&&b.selection.setAtStart(f))}function Z(a,c,d){a.row>0?b.selection.setAtEnd(d[a.row-1][a.col]):Y(a,c,d,"up")}function $(a,c,d){var e=parseInt(d[a.row][a.col].getAttribute("rowspan"),10)||1;a.row<d.length-e?b.selection.setAtStart(d[a.row+e][a.col]):Y(a,c,d,"down")}function _(c){var d=c.which,e=b.selection.blocks();if(e.length&&(e=e[0],"TD"==e.tagName||"TH"==e.tagName)){for(var f=e;f&&"TABLE"!=f.tagName&&f.parentNode!=b.el;)f=f.parentNode;if(f&&"TABLE"==f.tagName&&(a.FE.KEYCODE.ARROW_LEFT==d||a.FE.KEYCODE.ARROW_UP==d||a.FE.KEYCODE.ARROW_RIGHT==d||a.FE.KEYCODE.ARROW_DOWN==d)&&(sa().length>0&&T(),b.browser.webkit&&(a.FE.KEYCODE.ARROW_UP==d||a.FE.KEYCODE.ARROW_DOWN==d))){var g=b.selection.ranges(0).startContainer;if(g.nodeType==Node.TEXT_NODE&&(a.FE.KEYCODE.ARROW_UP==d&&g.previousSibling||a.FE.KEYCODE.ARROW_DOWN==d&&g.nextSibling))return;c.preventDefault(),c.stopPropagation();var h=I(a(f)),i=J(e,h);return a.FE.KEYCODE.ARROW_UP==d?Z(i,f,h):a.FE.KEYCODE.ARROW_DOWN==d&&$(i,f,h),b.selection.restore(),!1}}}function aa(){b.shared.$table_resizer||(b.shared.$table_resizer=a('<div class="fr-table-resizer"><div></div></div>')),xa=b.shared.$table_resizer,b.events.$on(xa,"mousedown",function(a){return!b.core.sameInstance(xa)||(sa().length>0&&T(),1==a.which?(b.selection.save(),Da=!0,xa.addClass("fr-moving"),N(),b.edit.off(),xa.find("div").css("opacity",1),!1):void 0)}),b.events.$on(xa,"mousemove",function(a){if(!b.core.sameInstance(xa))return!0;Da&&(b.opts.iframe&&(a.pageX-=b.$iframe.offset().left),ma(a))}),b.events.on("shared.destroy",function(){xa.html("").removeData().remove(),xa=null},!0),b.events.on("destroy",function(){b.$el.find(".fr-selected-cell").removeClass("fr-selected-cell"),xa.hide().appendTo(a("body:first"))},!0)}function ba(){xa&&(xa.find("div").css("opacity",0),xa.css("top",0),xa.css("left",0),xa.css("height",0),xa.find("div").css("height",0),xa.hide())}function ca(){ya&&ya.removeClass("fr-visible").css("left","-9999px")}function da(c,d){var e=a(d),f=e.closest("table"),g=f.parent();if(d&&"TD"!=d.tagName&&"TH"!=d.tagName&&(e.closest("td").length>0?d=e.closest("td"):e.closest("th").length>0&&(d=e.closest("th"))),!d||"TD"!=d.tagName&&"TH"!=d.tagName)xa&&e.get(0)!=xa.get(0)&&e.parent().get(0)!=xa.get(0)&&b.core.sameInstance(xa)&&ba();else{if(e=a(d),0===b.$el.find(e).length)return!1;var h=e.offset().left-1,i=h+e.outerWidth();if(Math.abs(c.pageX-h)<=b.opts.tableResizerOffset||Math.abs(i-c.pageX)<=b.opts.tableResizerOffset){var j,k,l,m,n,o=I(f),p=J(d,o),q=K(p.row,p.col,o),r=f.offset().top,s=f.outerHeight()-1;"rtl"!=b.opts.direction?c.pageX-h<=b.opts.tableResizerOffset?(l=h,p.col>0?(m=h-ka(p.col-1,o)+b.opts.tableResizingLimit,n=h+ka(p.col,o)-b.opts.tableResizingLimit,j=p.col-1,k=p.col):(j=null,k=0,m=f.offset().left-1-parseInt(f.css("margin-left"),10),n=f.offset().left-1+f.width()-o[0].length*b.opts.tableResizingLimit)):i-c.pageX<=b.opts.tableResizerOffset&&(l=i,q.col<o[q.row].length&&o[q.row][q.col+1]?(m=i-ka(q.col,o)+b.opts.tableResizingLimit,n=i+ka(q.col+1,o)-b.opts.tableResizingLimit,j=q.col,k=q.col+1):(j=q.col,k=null,m=f.offset().left-1+o[0].length*b.opts.tableResizingLimit,n=g.offset().left-1+g.width()+parseFloat(g.css("padding-left")))):i-c.pageX<=b.opts.tableResizerOffset?(l=i,p.col>0?(m=i-ka(p.col,o)+b.opts.tableResizingLimit,n=i+ka(p.col-1,o)-b.opts.tableResizingLimit,j=p.col,k=p.col-1):(j=null,k=0,m=f.offset().left+o[0].length*b.opts.tableResizingLimit,n=g.offset().left-1+g.width()+parseFloat(g.css("padding-left")))):c.pageX-h<=b.opts.tableResizerOffset&&(l=h,q.col<o[q.row].length&&o[q.row][q.col+1]?(m=h-ka(q.col+1,o)+b.opts.tableResizingLimit,n=h+ka(q.col,o)-b.opts.tableResizingLimit,j=q.col+1,k=q.col):(j=q.col,k=null,m=g.offset().left+parseFloat(g.css("padding-left")),n=f.offset().left-1+f.width()-o[0].length*b.opts.tableResizingLimit)),xa||aa(),xa.data("table",f),xa.data("first",j),xa.data("second",k),xa.data("instance",b),b.$wp.append(xa);var t=l-b.win.pageXOffset-b.opts.tableResizerOffset,u=r-b.win.pageYOffset;b.opts.iframe&&(t+=b.$iframe.offset().left-b.helpers.scrollLeft(),u+=b.$iframe.offset().top-b.helpers.scrollTop(),m+=b.$iframe.offset().left,n+=b.$iframe.offset().left),xa.data("max-left",m),xa.data("max-right",n),xa.data("origin",l-b.win.pageXOffset),xa.css("top",u),xa.css("left",t),xa.css("height",s),xa.find("div").css("height",s),xa.css("padding-left",b.opts.tableResizerOffset),xa.css("padding-right",b.opts.tableResizerOffset),xa.show()}else b.core.sameInstance(xa)&&ba()}}function ea(c,d){if(b.$box.find(".fr-line-breaker").is(":visible"))return!1;ya||pa(),b.$box.append(ya),ya.data("instance",b);var e=a(d),f=e.find("tr:first"),g=c.pageX,h=0,i=0;b.opts.iframe&&(h+=b.$iframe.offset().left-b.helpers.scrollLeft(),i+=b.$iframe.offset().top-b.helpers.scrollTop());var j;f.find("th, td").each(function(){var c=a(this);return c.offset().left<=g&&g<c.offset().left+c.outerWidth()/2?(j=parseInt(ya.find("a").css("width"),10),ya.css("top",i+c.offset().top-b.win.pageYOffset-j-5),ya.css("left",h+c.offset().left-b.win.pageXOffset-j/2),ya.data("selected-cell",c),ya.data("position","before"),ya.addClass("fr-visible"),!1):c.offset().left+c.outerWidth()/2<=g&&g<c.offset().left+c.outerWidth()?(j=parseInt(ya.find("a").css("width"),10),ya.css("top",i+c.offset().top-b.win.pageYOffset-j-5),ya.css("left",h+c.offset().left+c.outerWidth()-b.win.pageXOffset-j/2),ya.data("selected-cell",c),ya.data("position","after"),ya.addClass("fr-visible"),!1):void 0})}function fa(c,d){if(b.$box.find(".fr-line-breaker").is(":visible"))return!1;ya||pa(),b.$box.append(ya),ya.data("instance",b);var e=a(d),f=c.pageY,g=0,h=0;b.opts.iframe&&(g+=b.$iframe.offset().left-b.helpers.scrollLeft(),h+=b.$iframe.offset().top-b.helpers.scrollTop());var i;e.find("tr").each(function(){var c=a(this);return c.offset().top<=f&&f<c.offset().top+c.outerHeight()/2?(i=parseInt(ya.find("a").css("width"),10),ya.css("top",h+c.offset().top-b.win.pageYOffset-i/2),ya.css("left",g+c.offset().left-b.win.pageXOffset-i-5),ya.data("selected-cell",c.find("td:first")),ya.data("position","above"),ya.addClass("fr-visible"),!1):c.offset().top+c.outerHeight()/2<=f&&f<c.offset().top+c.outerHeight()?(i=parseInt(ya.find("a").css("width"),10),ya.css("top",h+c.offset().top+c.outerHeight()-b.win.pageYOffset-i/2),ya.css("left",g+c.offset().left-b.win.pageXOffset-i-5),ya.data("selected-cell",c.find("td:first")),ya.data("position","below"),ya.addClass("fr-visible"),!1):void 0})}function ga(c,d){if(0===sa().length){var e,f,g;if(d&&("HTML"==d.tagName||"BODY"==d.tagName||b.node.isElement(d)))for(e=1;e<=b.opts.tableInsertHelperOffset;e++){if(f=b.doc.elementFromPoint(c.pageX-b.win.pageXOffset,c.pageY-b.win.pageYOffset+e),a(f).hasClass("fr-tooltip"))return!0;if(f&&("TH"==f.tagName||"TD"==f.tagName||"TABLE"==f.tagName)&&(a(f).parents(".fr-wrapper").length||b.opts.iframe))return ea(c,a(f).closest("table")),!0;if(g=b.doc.elementFromPoint(c.pageX-b.win.pageXOffset+e,c.pageY-b.win.pageYOffset),a(g).hasClass("fr-tooltip"))return!0;if(g&&("TH"==g.tagName||"TD"==g.tagName||"TABLE"==g.tagName)&&(a(g).parents(".fr-wrapper").length||b.opts.iframe))return fa(c,a(g).closest("table")),!0}b.core.sameInstance(ya)&&ca()}}function ha(a){Ca=null;var c=b.doc.elementFromPoint(a.pageX-b.win.pageXOffset,a.pageY-b.win.pageYOffset);b.opts.tableResizer&&(!b.popups.areVisible()||b.popups.areVisible()&&b.popups.isVisible("table.edit"))&&da(a,c),!b.opts.tableInsertHelper||b.popups.areVisible()||b.$tb.hasClass("fr-inline")&&b.$tb.is(":visible")||ga(a,c)}function ia(){if(Da){var a=xa.data("table"),c=a.offset().top-b.win.pageYOffset;b.opts.iframe&&(c+=b.$iframe.offset().top-b.helpers.scrollTop()),xa.css("top",c)}}function ja(){var c=xa.data("origin"),d=xa.data("release-position");if(c!==d){var e=xa.data("first"),f=xa.data("second"),g=xa.data("table"),h=g.outerWidth();if(b.undo.canDo()||b.undo.saveStep(),null!==e&&null!==f){var i,j,k,l=I(g),m=[],n=[],o=[],p=[];for(i=0;i<l.length;i++)j=a(l[i][e]),k=a(l[i][f]),m[i]=j.outerWidth(),o[i]=k.outerWidth(),n[i]=m[i]/h*100,p[i]=o[i]/h*100;for(i=0;i<l.length;i++){j=a(l[i][e]),k=a(l[i][f]);var q=(n[i]*(m[i]+d-c)/m[i]).toFixed(4);j.css("width",q+"%"),k.css("width",(n[i]+p[i]-q).toFixed(4)+"%")}}else{var r,s=g.parent(),t=h/s.width()*100,u=(parseInt(g.css("margin-left"),10)||0)/s.width()*100,v=(parseInt(g.css("margin-right"),10)||0)/s.width()*100;"rtl"==b.opts.direction&&0===f||"rtl"!=b.opts.direction&&0!==f?(r=(h+d-c)/h*t,g.css("margin-right","calc(100% - "+Math.round(r).toFixed(4)+"% - "+Math.round(u).toFixed(4)+"%)")):("rtl"==b.opts.direction&&0!==f||"rtl"!=b.opts.direction&&0===f)&&(r=(h-d+c)/h*t,g.css("margin-left","calc(100% - "+Math.round(r).toFixed(4)+"% - "+Math.round(v).toFixed(4)+"%)")),g.css("width",Math.round(r).toFixed(4)+"%")}b.selection.restore(),b.undo.saveStep()}xa.removeData("origin"),xa.removeData("release-position"),xa.removeData("first"),xa.removeData("second"),xa.removeData("table")}function ka(b,c){var d,e=a(c[0][b]).outerWidth();for(d=1;d<c.length;d++)e=Math.min(e,a(c[d][b]).outerWidth());return e}function la(a,b,c){var d,e=0;for(d=a;d<=b;d++)e+=ka(d,c);return e}function ma(a){if(sa().length>1&&Aa&&N(),!1===Aa&&!1===za&&!1===Da)Ca&&clearTimeout(Ca),b.edit.isDisabled()&&!b.popups.isVisible("table.edit")||(Ca=setTimeout(ha,30,a));else if(Da){var c=a.pageX-b.win.pageXOffset;b.opts.iframe&&(c+=b.$iframe.offset().left);var d=xa.data("max-left"),e=xa.data("max-right");c>=d&&c<=e?xa.css("left",c-b.opts.tableResizerOffset):c<d&&parseFloat(xa.css("left"),10)>d-b.opts.tableResizerOffset?xa.css("left",d-b.opts.tableResizerOffset):c>e&&parseFloat(xa.css("left"),10)<e-b.opts.tableResizerOffset&&xa.css("left",e-b.opts.tableResizerOffset)}else Aa&&ca()}function na(c){b.node.isEmpty(c.get(0))?c.prepend(a.FE.MARKERS):c.prepend(a.FE.START_MARKER).append(a.FE.END_MARKER)}function oa(c){if(c.which==a.FE.KEYCODE.TAB){var d;if(sa().length>0)d=b.$el.find(".fr-selected-cell:last");else{var e=b.selection.element();"TD"==e.tagName||"TH"==e.tagName?d=a(e):a(e).parentsUntil(b.$el,"td").length>0?d=a(e).parents("td:first"):a(e).parentsUntil(b.$el,"th").length>0&&(d=a(e).parents("th:first"))}if(d)return c.preventDefault(),a(b.selection.element()).parents("ol, ul").length>0||(T(),c.shiftKey?d.prev().length>0?na(d.prev()):d.closest("tr").length>0&&d.closest("tr").prev().length>0?na(d.closest("tr").prev().find("td:last")):d.closest("tbody").length>0&&d.closest("table").find("thead tr").length>0&&na(d.closest("table").find("thead tr th:last")):d.next().length>0?na(d.next()):d.closest("tr").length>0&&d.closest("tr").next().length>0?na(d.closest("tr").next().find("td:first")):d.closest("thead").length>0&&d.closest("table").find("tbody tr").length>0?na(d.closest("table").find("tbody tr td:first")):(d.addClass("fr-selected-cell"),t("below"),M(),na(d.closest("tr").next().find("td:first"))),b.selection.restore(),!1)}}function pa(){b.shared.$ti_helper||(b.shared.$ti_helper=a('<div class="fr-insert-helper"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+b.language.translate("Insert")+'"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/></svg></a></div>'),b.events.bindClick(b.shared.$ti_helper,"a",function(){var a=ya.data("selected-cell"),c=ya.data("position"),d=ya.data("instance")||b;"before"==c?(a.addClass("fr-selected-cell"),d.table.insertColumn(c),a.removeClass("fr-selected-cell")):"after"==c?(a.addClass("fr-selected-cell"),d.table.insertColumn(c),a.removeClass("fr-selected-cell")):"above"==c?(a.addClass("fr-selected-cell"),d.table.insertRow(c),a.removeClass("fr-selected-cell")):"below"==c&&(a.addClass("fr-selected-cell"),d.table.insertRow(c),a.removeClass("fr-selected-cell")),ca()}),b.events.on("shared.destroy",function(){b.shared.$ti_helper.html("").removeData().remove(),b.shared.$ti_helper=null},!0),b.events.$on(b.shared.$ti_helper,"mousemove",function(a){a.stopPropagation()},!0),b.events.$on(a(b.o_win),"scroll",function(){ca()},!0),b.events.$on(b.$wp,"scroll",function(){ca()},!0)),ya=b.shared.$ti_helper,b.events.on("destroy",function(){ya=null}),b.tooltip.bind(b.$box,".fr-insert-helper > a.fr-floating-btn")}function qa(){Ba=null,clearTimeout(Ca)}function ra(){sa().length>0?d():(b.popups.hide("table.insert"),b.toolbar.showInline())}function sa(){return b.el.querySelectorAll(".fr-selected-cell")}function ta(){var c=sa();if(c.length){for(var d=c[0];d&&"TABLE"!=d.tagName&&d.parentNode!=b.el;)d=d.parentNode;return a(d&&"TABLE"==d.tagName?d:[])}return a([])}function ua(c){if(c.altKey&&c.which==a.FE.KEYCODE.SPACE){var e,f=b.selection.element();if("TD"==f.tagName||"TH"==f.tagName?e=f:a(f).closest("td").length>0?e=a(f).closest("td").get(0):a(f).closest("th").length>0&&(e=a(f).closest("th").get(0)),e)return c.preventDefault(),R(e,e),d(),!1}}function va(c){var d=sa();if(d.length>0){var e,f,g=I(),h=c.which;1==d.length?(e=d[0],f=e):(e=b.el.querySelector(".fr-cell-fixed"),f=b.el.querySelector(".fr-cell-handler"));var i=J(f,g);if(a.FE.KEYCODE.ARROW_RIGHT==h){if(i.col<g[0].length-1)return R(e,g[i.row][i.col+1]),!1}else if(a.FE.KEYCODE.ARROW_DOWN==h){if(i.row<g.length-1)return R(e,g[i.row+1][i.col]),!1}else if(a.FE.KEYCODE.ARROW_LEFT==h){if(i.col>0)return R(e,g[i.row][i.col-1]),!1}else if(a.FE.KEYCODE.ARROW_UP==h&&i.row>0)return R(e,g[i.row-1][i.col]),!1}}function wa(){if(!b.$wp)return!1;if(!b.helpers.isMobile()){Aa=!1,za=!1,Da=!1,b.events.$on(b.$el,"mousedown",U),b.popups.onShow("image.edit",function(){M(),Aa=!1,za=!1}),b.popups.onShow("link.edit",function(){M(),Aa=!1,za=!1}),b.events.on("commands.mousedown",function(a){a.parents(".fr-toolbar").length>0&&M()}),b.events.$on(b.$el,"mouseenter","th, td",W),b.events.$on(b.$win,"mouseup",V),b.opts.iframe&&b.events.$on(a(b.o_win),"mouseup",V),b.events.$on(b.$win,"mousemove",ma),b.events.$on(a(b.o_win),"scroll",ia),b.events.on("contentChanged",function(){sa().length>0&&(d(),b.$el.find("img").on("load.selected-cells",function(){a(this).off("load.selected-cells"),sa().length>0&&d()}))}),b.events.$on(a(b.o_win),"resize",function(){M()}),b.events.on("toolbar.esc",function(){if(sa().length>0)return b.events.disableBlur(),b.events.focus(),!1},!0),b.events.$on(b.$el,"keydown",function(a){a.shiftKey?!1===va(a)&&setTimeout(function(){d()},0):_(a)}),b.events.on("keydown",function(c){if(!1===oa(c))return!1;var d=sa();if(d.length>0){if(d.length>0&&b.keys.ctrlKey(c)&&c.which==a.FE.KEYCODE.A)return M(),b.popups.isVisible("table.edit")&&b.popups.hide("table.edit"),d=[],!0;if(c.which==a.FE.KEYCODE.ESC&&b.popups.isVisible("table.edit"))return M(),b.popups.hide("table.edit"),c.preventDefault(),c.stopPropagation(),c.stopImmediatePropagation(),d=[],!1;if(d.length>1&&c.which==a.FE.KEYCODE.BACKSPACE){b.undo.saveStep();for(var e=0;e<d.length;e++)a(d[e]).html("<br>"),e==d.length-1&&a(d[e]).prepend(a.FE.MARKERS);return b.selection.restore(),b.undo.saveStep(),d=[],!1}if(d.length>1&&c.which!=a.FE.KEYCODE.F10&&!b.keys.isBrowserAction(c))return c.preventDefault(),d=[],!1}else if(d=[],!1===ua(c))return!1},!0);var c=[];b.events.on("html.beforeGet",function(){c=sa();for(var a=0;a<c.length;a++)c[a].className=(c[a].className||"").replace(/fr-selected-cell/g,"")}),b.events.on("html.afterGet",function(){for(var a=0;a<c.length;a++)c[a].className=(c[a].className?c[a].className.trim()+" ":"")+"fr-selected-cell";c=[]}),g(!0),k(!0)}b.events.on("destroy",qa)}var xa,ya,za,Aa,Ba,Ca,Da;return{_init:wa,insert:p,remove:q,insertRow:t,deleteRow:u,insertColumn:v,deleteColumn:w,mergeCells:B,splitCellVertically:D,splitCellHorizontally:C,addHeader:r,removeHeader:s,setBackground:E,showInsertPopup:c,showEditPopup:d,showColorsPopup:e,back:ra,verticalAlign:F,horizontalAlign:G,applyStyle:H,selectedTable:ta,selectedCells:sa}},a.FE.DefineIcon("insertTable",{NAME:"table"}),a.FE.RegisterCommand("insertTable",{title:"Insert Table",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("table.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("table.insert")):this.table.showInsertPopup()},plugin:"table"}),a.FE.RegisterCommand("tableInsert",{callback:function(a,b,c){this.table.insert(b,c),this.popups.hide("table.insert")}}),a.FE.DefineIcon("tableHeader",{NAME:"header"}),a.FE.RegisterCommand("tableHeader",{title:"Table Header",focus:!1,toggle:!0,callback:function(){this.popups.get("table.edit").find('.fr-command[data-cmd="tableHeader"]').hasClass("fr-active")?this.table.removeHeader():this.table.addHeader()},refresh:function(a){var b=this.table.selectedTable();b.length>0&&(0===b.find("th").length?a.removeClass("fr-active").attr("aria-pressed",!1):a.addClass("fr-active").attr("aria-pressed",!0))}}),a.FE.DefineIcon("tableRows",{NAME:"bars"}),a.FE.RegisterCommand("tableRows",{type:"dropdown",focus:!1,title:"Row",options:{above:"Insert row above",below:"Insert row below",delete:"Delete row"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableRows.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableRows" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.language.translate(c[d])+"</a></li>");return b+="</ul>"},callback:function(a,b){"above"==b||"below"==b?this.table.insertRow(b):this.table.deleteRow()}}),a.FE.DefineIcon("tableColumns",{NAME:"bars fa-rotate-90"}),a.FE.RegisterCommand("tableColumns",{type:"dropdown",focus:!1,title:"Column",options:{before:"Insert column before",after:"Insert column after",delete:"Delete column"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableColumns.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableColumns" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.language.translate(c[d])+"</a></li>");return b+="</ul>"},callback:function(a,b){"before"==b||"after"==b?this.table.insertColumn(b):this.table.deleteColumn()}}),a.FE.DefineIcon("tableCells",{NAME:"square-o"}),a.FE.RegisterCommand("tableCells",{type:"dropdown",focus:!1,title:"Cell",options:{merge:"Merge cells","vertical-split":"Vertical split","horizontal-split":"Horizontal split"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableCells.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCells" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.language.translate(c[d])+"</a></li>");return b+="</ul>"},callback:function(a,b){"merge"==b?this.table.mergeCells():"vertical-split"==b?this.table.splitCellVertically():this.table.splitCellHorizontally()},refreshOnShow:function(a,b){this.$el.find(".fr-selected-cell").length>1?(b.find('a[data-param1="vertical-split"]').addClass("fr-disabled").attr("aria-disabled",!0),b.find('a[data-param1="horizontal-split"]').addClass("fr-disabled").attr("aria-disabled",!0),b.find('a[data-param1="merge"]').removeClass("fr-disabled").attr("aria-disabled",!1)):(b.find('a[data-param1="merge"]').addClass("fr-disabled").attr("aria-disabled",!0),b.find('a[data-param1="vertical-split"]').removeClass("fr-disabled").attr("aria-disabled",!1),b.find('a[data-param1="horizontal-split"]').removeClass("fr-disabled").attr("aria-disabled",!1))}}),a.FE.DefineIcon("tableRemove",{NAME:"trash"}),a.FE.RegisterCommand("tableRemove",{title:"Remove Table",focus:!1,callback:function(){this.table.remove()}}),a.FE.DefineIcon("tableStyle",{NAME:"paint-brush"}),a.FE.RegisterCommand("tableStyle",{title:"Table Style",type:"dropdown",focus:!1,html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.tableStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableStyle" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},callback:function(a,b){this.table.applyStyle(b,this.$el.find(".fr-selected-cell").closest("table"),this.opts.tableMultipleStyles,this.opts.tableStyles)},refreshOnShow:function(b,c){var d=this.$el.find(".fr-selected-cell").closest("table");d&&c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=d.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}),a.FE.DefineIcon("tableCellBackground",{NAME:"tint"}),a.FE.RegisterCommand("tableCellBackground",{title:"Cell Background",focus:!1,popup:!0,callback:function(){this.table.showColorsPopup()}}),a.FE.RegisterCommand("tableCellBackgroundColor",{undo:!0,focus:!1,callback:function(a,b){this.table.setBackground(b)}}),a.FE.DefineIcon("tableBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("tableBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.table.back()},refresh:function(a){0!==this.table.selectedCells().length||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.DefineIcon("tableCellVerticalAlign",{NAME:"arrows-v"}),a.FE.RegisterCommand("tableCellVerticalAlign",{type:"dropdown",focus:!1,title:"Vertical Align",options:{Top:"Align Top",Middle:"Align Middle",Bottom:"Align Bottom"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableCellVerticalAlign.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellVerticalAlign" data-param1="'+d.toLowerCase()+'" title="'+this.language.translate(c[d])+'">'+this.language.translate(d)+"</a></li>");return b+="</ul>"},callback:function(a,b){this.table.verticalAlign(b)},refreshOnShow:function(a,b){b.find('.fr-command[data-param1="'+this.$el.find(".fr-selected-cell").css("vertical-align")+'"]').addClass("fr-active").attr("aria-selected",!0)}}),a.FE.DefineIcon("tableCellHorizontalAlign",{NAME:"align-left"}),a.FE.DefineIcon("align-left",{NAME:"align-left"}),a.FE.DefineIcon("align-right",{NAME:"align-right"}),a.FE.DefineIcon("align-center",{NAME:"align-center"}),a.FE.DefineIcon("align-justify",{NAME:"align-justify"}),a.FE.RegisterCommand("tableCellHorizontalAlign",{type:"dropdown",focus:!1,title:"Horizontal Align",options:{left:"Align Left",center:"Align Center",
right:"Align Right",justify:"Align Justify"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableCellHorizontalAlign.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="tableCellHorizontalAlign" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.icon.create("align-"+d)+'<span class="fr-sr-only">'+this.language.translate(c[d])+"</span></a></li>");return b+="</ul>"},callback:function(a,b){this.table.horizontalAlign(b)},refresh:function(b){var c=this.table.selectedCells();c.length&&b.find("> *:first").replaceWith(this.icon.create("align-"+this.helpers.getAlignment(a(c[0]))))},refreshOnShow:function(a,b){b.find('.fr-command[data-param1="'+this.helpers.getAlignment(this.$el.find(".fr-selected-cell:first"))+'"]').addClass("fr-active").attr("aria-selected",!0)}}),a.FE.DefineIcon("tableCellStyle",{NAME:"magic"}),a.FE.RegisterCommand("tableCellStyle",{title:"Cell Style",type:"dropdown",focus:!1,html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.tableCellStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellStyle" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},callback:function(a,b){this.table.applyStyle(b,this.$el.find(".fr-selected-cell"),this.opts.tableCellMultipleStyles,this.opts.tableCellStyles)},refreshOnShow:function(b,c){var d=this.$el.find(".fr-selected-cell:first");d&&c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=d.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}),a.FE.DefineIcon("tableColorRemove",{NAME:"eraser"}),a.FE.URLRegEx="(^| |\\u00A0)("+a.FE.LinkRegEx+"|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}))$",a.FE.PLUGINS.url=function(b){function c(c,d,e){var f=e;if(b.opts.linkConvertEmailAddress){a.FE.MAIL_REGEX.test(f)&&!/^mailto:.*/i.test(f)&&(f="mailto:"+f)}return/^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(f)||(f="//"+f),(d||"")+"<a"+(b.opts.linkAlwaysBlank?' target="_blank"':"")+(i?' rel="'+i+'"':"")+' href="'+f+'">'+e+"</a>"}function d(){return new RegExp(a.FE.URLRegEx,"gi")}function e(a){return b.opts.linkAlwaysNoFollow&&(i="nofollow"),b.opts.linkAlwaysBlank&&(i?i+=" noopener noreferrer":i="noopener noreferrer"),a.replace(d(),c)}function f(a){return!!a&&("A"===a.tagName||!(!a.parentNode||a.parentNode==b.el)&&f(a.parentNode))}function g(){var c=b.selection.ranges(0),g=c.startContainer;if(!g||g.nodeType!==Node.TEXT_NODE)return!1;if(f(g))return!1;if(d().test(g.textContent))a(g).before(e(g.textContent)),g.parentNode.removeChild(g);else if(g.previousSibling&&"A"===g.previousSibling.tagName){var h=g.previousSibling.innerText+g.textContent;d().test(h)&&(a(g.previousSibling).replaceWith(e(h)),g.parentNode.removeChild(g))}}function h(){b.events.on("paste.afterCleanup",function(b){if(new RegExp(a.FE.URLRegEx,"gi").test(b))return e(b)}),b.events.on("keydown",function(c){var d=c.which;!b.selection.isCollapsed()||d!=a.FE.KEYCODE.ENTER&&d!=a.FE.KEYCODE.SPACE&&d!=a.FE.KEYCODE.PERIOD||g()},!0)}var i=null;return{_init:h}},a.extend(a.FE.POPUP_TEMPLATES,{"video.insert":"[_BUTTONS_][_BY_URL_LAYER_][_EMBED_LAYER_][_UPLOAD_LAYER_][_PROGRESS_BAR_]","video.edit":"[_BUTTONS_]","video.size":"[_BUTTONS_][_SIZE_LAYER_]"}),a.extend(a.FE.DEFAULTS,{videoAllowedTypes:["mp4","webm","ogg"],videoAllowedProviders:[".*"],videoDefaultAlign:"center",videoDefaultDisplay:"block",videoDefaultWidth:600,videoEditButtons:["videoReplace","videoRemove","|","videoDisplay","videoAlign","videoSize"],videoInsertButtons:["videoBack","|","videoByURL","videoEmbed","videoUpload"],videoMaxSize:52428800,videoMove:!0,videoResize:!0,videoSizeButtons:["videoBack","|"],videoSplitHTML:!1,videoTextNear:!0,videoUploadMethod:"POST",videoUploadParam:"file",videoUploadParams:{},videoUploadToS3:!1,videoUploadURL:"https://i.froala.com/upload"}),a.FE.VIDEO_PROVIDERS=[{test_regex:/^.*((youtu.be)|(youtube.com))\/((v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))?\??v?=?([^#\&\?]*).*/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([0-9a-zA-Z_\-]+)(.+)?/g,url_text:"//www.youtube.com/embed/$1",html:'<iframe width="640" height="360" src="{url}?wmode=opaque" frameborder="0" allowfullscreen></iframe>',provider:"youtube"},{test_regex:/^.*(?:vimeo.com)\/(?:channels(\/\w+\/)?|groups\/*\/videos\/\u200b\d+\/|video\/|)(\d+)(?:$|\/|\?)/,url_regex:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i,url_text:"//player.vimeo.com/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"vimeo"},{test_regex:/^.+(dailymotion.com|dai.ly)\/(video|hub)?\/?([^_]+)[^#]*(#video=([^_&]+))?/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com|dai\.ly)\/(?:video|hub)?\/?(.+)/g,url_text:"//www.dailymotion.com/embed/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"dailymotion"},{test_regex:/^.+(screen.yahoo.com)\/[^_&]+/,url_regex:"",url_text:"",html:'<iframe width="640" height="360" src="{url}?format=embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>',provider:"yahoo"},{test_regex:/^.+(rutube.ru)\/[^_&]+/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:rutube\.ru)\/(?:video)?\/?(.+)/g,url_text:"//rutube.ru/play/embed/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>',provider:"rutube"},{test_regex:/^(?:.+)vidyard.com\/(?:watch)?\/?([^.&\/]+)\/?(?:[^_.&]+)?/,url_regex:/^(?:.+)vidyard.com\/(?:watch)?\/?([^.&\/]+)\/?(?:[^_.&]+)?/g,url_text:"//play.vidyard.com/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"vidyard"}],a.FE.VIDEO_EMBED_REGEX=/^\W*((<iframe.*><\/iframe>)|(<embed.*>))\W*$/i,a.FE.PLUGINS.video=function(b){function c(){var a=b.popups.get("video.insert");a.find(".fr-video-by-url-layer input").val("").trigger("change");var c=a.find(".fr-video-embed-layer textarea");c.val("").trigger("change"),c=a.find(".fr-video-upload-layer input"),c.val("").trigger("change")}function d(){var a=b.$tb.find('.fr-command[data-cmd="insertVideo"]'),c=b.popups.get("video.insert");if(c||(c=f()),o(),!c.hasClass("fr-active")){b.popups.refresh("video.insert"),b.popups.setContainer("video.insert",b.$tb);var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("video.insert",d,e,a.outerHeight())}}function e(){var a=b.popups.get("video.edit");if(a||(a=T()),a){b.popups.setContainer("video.edit",b.$sc),b.popups.refresh("video.edit");var c=ra.find("iframe, embed, video"),d=c.offset().left+c.outerWidth()/2,e=c.offset().top+c.outerHeight();b.popups.show("video.edit",d,e,c.outerHeight())}}function f(a){if(a)return b.popups.onRefresh("video.insert",c),b.popups.onHide("image.insert",ea),!0;var d="";b.opts.videoInsertButtons.length>1&&(d='<div class="fr-buttons">'+b.button.buildList(b.opts.videoInsertButtons)+"</div>");var e,f="",g=b.opts.videoInsertButtons.indexOf("videoUpload"),h=b.opts.videoInsertButtons.indexOf("videoByURL"),i=b.opts.videoInsertButtons.indexOf("videoEmbed");h>=0&&(e=" fr-active",(h>g&&g>=0||h>i&&i>=0)&&(e=""),f='<div class="fr-video-by-url-layer fr-layer'+e+'" id="fr-video-by-url-layer-'+b.id+'"><div class="fr-input-line"><input id="fr-video-by-url-layer-text-'+b.id+'" type="text" placeholder="http://" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertByURL" tabIndex="2" role="button">'+b.language.translate("Insert")+"</button></div></div>");var j="";i>=0&&(e=" fr-active",(i>g&&g>=0||i>h&&h>=0)&&(e=""),j='<div class="fr-video-embed-layer fr-layer'+e+'" id="fr-video-embed-layer-'+b.id+'"><div class="fr-input-line"><textarea id="fr-video-embed-layer-text'+b.id+'" type="text" placeholder="'+b.language.translate("Embedded Code")+'" tabIndex="1" aria-required="true" rows="5"></textarea></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertEmbed" tabIndex="2" role="button">'+b.language.translate("Insert")+"</button></div></div>");var k="";g>=0&&(e=" fr-active",(g>i&&i>=0||g>h&&h>=0)&&(e=""),k='<div class="fr-video-upload-layer fr-layer'+e+'" id="fr-video-upload-layer-'+b.id+'"><strong>'+b.language.translate("Drop video")+"</strong><br>("+b.language.translate("or click")+')<div class="fr-form"><input type="file" accept="video/'+b.opts.videoAllowedTypes.join(", video/").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-video-upload-layer-'+b.id+'" role="button"></div></div>');var l='<div class="fr-video-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="videoDismissError" tabIndex="2" role="button">OK</button></div></div>',m={buttons:d,by_url_layer:f,embed_layer:j,upload_layer:k,progress_bar:l},n=b.popups.create("video.insert",m);return Q(n),n}function g(a){var c,d,e=b.popups.get("video.insert");if(!ra&&!b.opts.toolbarInline){var f=b.$tb.find('.fr-command[data-cmd="insertVideo"]');c=f.offset().left+f.outerWidth()/2,d=f.offset().top+(b.opts.toolbarBottom?10:f.outerHeight()-10)}b.opts.toolbarInline&&(d=e.offset().top-b.helpers.getPX(e.css("margin-top")),e.hasClass("fr-above")&&(d+=e.outerHeight())),e.find(".fr-layer").removeClass("fr-active"),e.find(".fr-"+a+"-layer").addClass("fr-active"),b.popups.show("video.insert",c,d,0),b.accessibility.focusPopup(e)}function h(a){b.popups.get("video.insert").find(".fr-video-by-url-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function i(a){b.popups.get("video.insert").find(".fr-video-embed-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function j(a){b.popups.get("video.insert").find(".fr-video-upload-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function k(a){b.events.focus(!0),b.selection.restore();var c=!1;ra&&(da(),c=!0),b.html.insert('<span contenteditable="false" draggable="true" class="fr-jiv fr-video">'+a+"</span>",!1,b.opts.videoSplitHTML),b.popups.hide("video.insert");var d=b.$el.find(".fr-jiv");d.removeClass("fr-jiv"),fa(d,b.opts.videoDefaultDisplay,b.opts.videoDefaultAlign),d.toggleClass("fr-draggable",b.opts.videoMove),b.events.trigger(c?"video.replaced":"video.inserted",[d])}function l(){var c=a(this);b.popups.hide("video.insert"),c.removeClass("fr-uploading"),c.parent().next().is("br")&&c.parent().next().remove(),t(c.parent()),b.events.trigger("video.loaded",[c.parent()])}function m(a,c,d,e,f){b.edit.off(),p("Loading video"),c&&(a=b.helpers.sanitizeURL(a));var g=function(){var c,g;if(e){b.undo.canDo()||e.find("video").hasClass("fr-uploading")||b.undo.saveStep();var h=e.find("video").data("fr-old-src"),i=e.data("fr-replaced");e.data("fr-replaced",!1),b.$wp?(c=e.clone(),c.find("video").removeData("fr-old-src").removeClass("fr-uploading"),c.find("video").off("canplay"),h&&e.find("video").attr("src",h),e.replaceWith(c)):c=e;for(var j=c.find("video").get(0).attributes,k=0;k<j.length;k++){var m=j[k];0===m.nodeName.indexOf("data-")&&c.find("video").removeAttr(m.nodeName)}if(void 0!==d)for(g in d)d.hasOwnProperty(g)&&"link"!=g&&c.find("video").attr("data-"+g,d[g]);c.find("video").on("canplay",l),c.find("video").attr("src",a),b.edit.on(),H(),b.undo.saveStep(),b.$el.blur(),b.events.trigger(i?"video.replaced":"video.inserted",[c,f])}else c=A(a,d,l),H(),b.undo.saveStep(),b.events.trigger("video.inserted",[c,f])};n("Loading video"),g()}function n(a){var c=b.popups.get("video.insert");if(c||(c=f()),c.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),c.find(".fr-video-progress-bar-layer").addClass("fr-active"),c.find(".fr-buttons").hide(),ra){var d=ra.find("video");b.popups.setContainer("video.insert",b.$sc);var e=d.offset().left+d.width()/2,g=d.offset().top+d.height();b.popups.show("video.insert",e,g,d.outerHeight())}void 0===a&&p(b.language.translate("Uploading"),0)}function o(a){var c=b.popups.get("video.insert");if(c&&(c.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),c.find(".fr-video-progress-bar-layer").removeClass("fr-active"),c.find(".fr-buttons").show(),a||b.$el.find("video.fr-error").length)){if(b.events.focus(),b.$el.find("video.fr-error").length&&(b.$el.find("video.fr-error").parent().remove(),b.undo.saveStep(),b.undo.run(),b.undo.dropRedo()),!b.$wp&&ra){var d=ra;K(!0),b.selection.setAfter(d.find("video").get(0)),b.selection.restore()}b.popups.hide("video.insert")}}function p(a,c){var d=b.popups.get("video.insert");if(d){var e=d.find(".fr-video-progress-bar-layer");e.find("h3").text(a+(c?" "+c+"%":"")),e.removeClass("fr-error"),c?(e.find("div").removeClass("fr-indeterminate"),e.find("div > span").css("width",c+"%")):e.find("div").addClass("fr-indeterminate")}}function q(a){n();var c=b.popups.get("video.insert"),d=c.find(".fr-video-progress-bar-layer");d.addClass("fr-error");var e=d.find("h3");e.text(a),b.events.disableBlur(),e.focus()}function r(c){if(void 0===c){c=b.popups.get("video.insert").find('.fr-video-by-url-layer input[type="text"]').val()||""}var d=null;if(b.helpers.isURL(c))for(var e=0;e<a.FE.VIDEO_PROVIDERS.length;e++){var f=a.FE.VIDEO_PROVIDERS[e];if(f.test_regex.test(c)&&new RegExp(b.opts.videoAllowedProviders.join("|")).test(f.provider)){d=c.replace(f.url_regex,f.url_text),d=f.html.replace(/\{url\}/,d);break}}d?k(d):b.events.trigger("video.linkError",[c])}function s(c){if(void 0===c){c=b.popups.get("video.insert").find(".fr-video-embed-layer textarea").val()||""}0!==c.length&&a.FE.VIDEO_EMBED_REGEX.test(c)?k(c):b.events.trigger("video.codeError",[c])}function t(a){J.call(a.get(0))}function u(a){try{if(!1===b.events.trigger("video.uploaded",[a],!0))return b.edit.on(),!1;var c=JSON.parse(a);return c.link?c:(S(sa,a),!1)}catch(d){return S(ua,a),!1}}function v(c){try{var d=a(c).find("Location").text(),e=a(c).find("Key").text();return!1===b.events.trigger("video.uploadedToS3",[d,e,c],!0)?(b.edit.on(),!1):d}catch(f){return S(ua,c),!1}}function w(a){p("Loading video");var c=this.status,d=this.response,e=this.responseXML,f=this.responseText;try{if(b.opts.videoUploadToS3)if(201==c){var g=v(e);g&&m(g,!1,[],a,d||e)}else S(ua,d||e);else if(c>=200&&c<300){var h=u(f);h&&m(h.link,!1,h,a,d||f)}else S(ta,d||f)}catch(i){S(ua,d||f)}}function x(){S(ua,this.response||this.responseText||this.responseXML)}function y(a){if(a.lengthComputable){var c=a.loaded/a.total*100|0;p(b.language.translate("Uploading"),c)}}function z(){b.edit.on(),o(!0)}function A(c,d,e){var f,g="";if(d&&void 0!==d)for(f in d)d.hasOwnProperty(f)&&"link"!=f&&(g+=" data-"+f+'="'+d[f]+'"');var h=b.opts.videoDefaultWidth;h&&"auto"!=h&&(h+="px");var i=a('<span contenteditable="false" draggable="true" class="fr-video fr-dv'+b.opts.videoDefaultDisplay[0]+("center"!=b.opts.videoDefaultAlign?" fr-fv"+b.opts.videoDefaultAlign[0]:"")+'"><video src="'+c+'" '+g+(h?' style="width: '+h+';" ':"")+" controls>"+b.language.translate("Your browser does not support HTML5 video.")+"</video></span>");i.toggleClass("fr-draggable",b.opts.videoMove),b.edit.on(),b.events.focus(!0),b.selection.restore(),b.undo.saveStep(),b.opts.videoSplitHTML?b.markers.split():b.markers.insert();var j=b.$el.find(".fr-marker");return b.node.isLastSibling(j)&&j.parent().hasClass("fr-deletable")&&j.insertAfter(j.parent()),j.replaceWith(i),b.html.wrap(),b.selection.clear(),i.find("video").get(0).readyState>i.find("video").get(0).HAVE_FUTURE_DATA||b.helpers.isIOS()?e.call(i.find("video").get(0)):i.find("video").on("canplaythrough load",e),i}function B(c){if(!b.core.sameInstance(qa))return!0;c.preventDefault(),c.stopPropagation();var d=c.pageX||(c.originalEvent.touches?c.originalEvent.touches[0].pageX:null),e=c.pageY||(c.originalEvent.touches?c.originalEvent.touches[0].pageY:null);if(!d||!e)return!1;if("mousedown"==c.type){var f=b.$oel.get(0),g=f.ownerDocument,h=g.defaultView||g.parentWindow,i=!1;try{i=h.location!=h.parent.location&&!(h.$&&h.$.FE)}catch(j){}i&&h.frameElement&&(d+=b.helpers.getPX(a(h.frameElement).offset().left)+h.frameElement.clientLeft,e=c.clientY+b.helpers.getPX(a(h.frameElement).offset().top)+h.frameElement.clientTop)}b.undo.canDo()||b.undo.saveStep(),pa=a(this),pa.data("start-x",d),pa.data("start-y",e),oa.show(),b.popups.hideAll(),M()}function C(a){if(!b.core.sameInstance(qa))return!0;if(pa){a.preventDefault();var c=a.pageX||(a.originalEvent.touches?a.originalEvent.touches[0].pageX:null),d=a.pageY||(a.originalEvent.touches?a.originalEvent.touches[0].pageY:null);if(!c||!d)return!1;var e=pa.data("start-x"),f=pa.data("start-y");pa.data("start-x",c),pa.data("start-y",d);var g=c-e,h=d-f,i=ra.find("iframe, embed, video"),j=i.width(),k=i.height();(pa.hasClass("fr-hnw")||pa.hasClass("fr-hsw"))&&(g=0-g),(pa.hasClass("fr-hnw")||pa.hasClass("fr-hne"))&&(h=0-h),i.css("width",j+g),i.css("height",k+h),i.removeAttr("width"),i.removeAttr("height"),I()}}function D(a){if(!b.core.sameInstance(qa))return!0;pa&&ra&&(a&&a.stopPropagation(),pa=null,oa.hide(),I(),e(),b.undo.saveStep())}function E(a){return'<div class="fr-handler fr-h'+a+'"></div>'}function F(a,b,c,d){return a.pageX=b,a.pageY=b,B.call(this,a),a.pageX=a.pageX+c*Math.floor(Math.pow(1.1,d)),a.pageY=a.pageY+c*Math.floor(Math.pow(1.1,d)),C.call(this,a),D.call(this,a),++d}function G(){var c;if(b.shared.$video_resizer?(qa=b.shared.$video_resizer,oa=b.shared.$vid_overlay,b.events.on("destroy",function(){qa.removeClass("fr-active").appendTo(a("body:first"))},!0)):(b.shared.$video_resizer=a('<div class="fr-video-resizer"></div>'),qa=b.shared.$video_resizer,b.events.$on(qa,"mousedown",function(a){a.stopPropagation()},!0),b.opts.videoResize&&(qa.append(E("nw")+E("ne")+E("sw")+E("se")),b.shared.$vid_overlay=a('<div class="fr-video-overlay"></div>'),oa=b.shared.$vid_overlay,c=qa.get(0).ownerDocument,a(c).find("body:first").append(oa))),b.events.on("shared.destroy",function(){qa.html("").removeData().remove(),qa=null,b.opts.videoResize&&(oa.remove(),oa=null)},!0),b.helpers.isMobile()||b.events.$on(a(b.o_win),"resize.video",function(){K(!0)}),b.opts.videoResize){c=qa.get(0).ownerDocument,b.events.$on(qa,b._mousedown,".fr-handler",B),b.events.$on(a(c),b._mousemove,C),b.events.$on(a(c.defaultView||c.parentWindow),b._mouseup,D),b.events.$on(oa,"mouseleave",D);var d=1,e=null,f=0;b.events.on("keydown",function(c){if(ra){var g=-1!=navigator.userAgent.indexOf("Mac OS X")?c.metaKey:c.ctrlKey,h=c.which;(h!==e||c.timeStamp-f>200)&&(d=1),(h==a.FE.KEYCODE.EQUALS||b.browser.mozilla&&h==a.FE.KEYCODE.FF_EQUALS)&&g&&!c.altKey?d=F.call(this,c,1,1,d):(h==a.FE.KEYCODE.HYPHEN||b.browser.mozilla&&h==a.FE.KEYCODE.FF_HYPHEN)&&g&&!c.altKey&&(d=F.call(this,c,2,-1,d)),e=h,f=c.timeStamp}}),b.events.on("keyup",function(){d=1})}}function H(){var c,d=Array.prototype.slice.call(b.el.querySelectorAll("video")),e=[];for(c=0;c<d.length;c++)e.push(d[c].getAttribute("src")),a(d[c]).toggleClass("fr-draggable",b.opts.videoMove),""===d[c].getAttribute("class")&&d[c].removeAttribute("class"),""===d[c].getAttribute("style")&&d[c].removeAttribute("style");if(ya)for(c=0;c<ya.length;c++)e.indexOf(ya[c].getAttribute("src"))<0&&b.events.trigger("video.removed",[a(ya[c])]);ya=d}function I(){qa||G(),(b.$wp||b.$sc).append(qa),qa.data("instance",b);var a=ra.find("iframe, embed, video");qa.css("top",(b.opts.iframe?a.offset().top-1:a.offset().top-b.$wp.offset().top-1)+b.$wp.scrollTop()).css("left",(b.opts.iframe?a.offset().left-1:a.offset().left-b.$wp.offset().left-1)+b.$wp.scrollLeft()).css("width",a.outerWidth()).css("height",a.height()).addClass("fr-active")}function J(c){if(c&&"touchend"==c.type&&za)return!0;if(c&&b.edit.isDisabled())return c.stopPropagation(),c.preventDefault(),!1;if(b.edit.isDisabled())return!1;for(var d=0;d<a.FE.INSTANCES.length;d++)a.FE.INSTANCES[d]!=b&&a.FE.INSTANCES[d].events.trigger("video.hideResizer");b.toolbar.disable(),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur()),ra=a(this),a(this).addClass("fr-active"),b.opts.iframe&&b.size.syncIframe(),ka(),I(),e(),b.selection.clear(),b.button.bulkRefresh(),b.events.trigger("image.hideResizer")}function K(a){ra&&(N()||!0===a)&&(qa.removeClass("fr-active"),b.toolbar.enable(),ra.removeClass("fr-active"),ra=null,M())}function L(){b.shared.vid_exit_flag=!0}function M(){b.shared.vid_exit_flag=!1}function N(){return b.shared.vid_exit_flag}function O(c){var d=c.originalEvent.dataTransfer;if(d&&d.files&&d.files.length){var e=d.files[0];if(e&&e.type&&-1!==e.type.indexOf("video")){b.markers.remove(),b.markers.insertAtPoint(c.originalEvent),b.$el.find(".fr-marker").replaceWith(a.FE.MARKERS),b.popups.hideAll();var g=b.popups.get("video.insert");return g||(g=f()),b.popups.setContainer("video.insert",b.$sc),b.popups.show("video.insert",c.originalEvent.pageX,c.originalEvent.pageY),n(),b.opts.videoAllowedTypes.indexOf(e.type.replace(/video\//g,""))>=0?P(d.files):S(wa),c.preventDefault(),c.stopPropagation(),!1}}}function P(a){if(void 0!==a&&a.length>0){if(!1===b.events.trigger("video.beforeUpload",[a]))return!1;var c=a[0];if(c.size>b.opts.videoMaxSize)return S(va),!1;if(b.opts.videoAllowedTypes.indexOf(c.type.replace(/video\//g,""))<0)return S(wa),!1;var d;if(b.drag_support.formdata&&(d=b.drag_support.formdata?new FormData:null),d){var e;if(!1!==b.opts.videoUploadToS3){d.append("key",b.opts.videoUploadToS3.keyStart+(new Date).getTime()+"-"+(c.name||"untitled")),d.append("success_action_status","201"),d.append("X-Requested-With","xhr"),d.append("Content-Type",c.type);for(e in b.opts.videoUploadToS3.params)b.opts.videoUploadToS3.params.hasOwnProperty(e)&&d.append(e,b.opts.videoUploadToS3.params[e])}for(e in b.opts.videoUploadParams)b.opts.videoUploadParams.hasOwnProperty(e)&&d.append(e,b.opts.videoUploadParams[e]);d.append(b.opts.videoUploadParam,c);var f=b.opts.videoUploadURL;b.opts.videoUploadToS3&&(f=b.opts.videoUploadToS3.uploadURL?b.opts.videoUploadToS3.uploadURL:"https://"+b.opts.videoUploadToS3.region+".amazonaws.com/"+b.opts.videoUploadToS3.bucket);var g=b.core.getXHR(f,b.opts.videoUploadMethod);g.onload=function(){w.call(g,ra)},g.onerror=x,g.upload.onprogress=y,g.onabort=z,n(),b.events.disableBlur(),b.edit.off(),b.events.enableBlur();var h=b.popups.get("video.insert");h&&h.off("abortUpload").on("abortUpload",function(){4!=g.readyState&&g.abort()}),g.send(d)}}}function Q(c){b.events.$on(c,"dragover dragenter",".fr-video-upload-layer",function(){return a(this).addClass("fr-drop"),!1}),b.events.$on(c,"dragleave dragend",".fr-video-upload-layer",function(){return a(this).removeClass("fr-drop"),!1}),b.events.$on(c,"drop",".fr-video-upload-layer",function(d){d.preventDefault(),d.stopPropagation(),a(this).removeClass("fr-drop");var e=d.originalEvent.dataTransfer;if(e&&e.files){var f=c.data("instance")||b;f.events.disableBlur(),f.video.upload(e.files),f.events.enableBlur()}}),b.helpers.isIOS()&&b.events.$on(c,"touchstart",'.fr-video-upload-layer input[type="file"]',function(){a(this).trigger("click")}),b.events.$on(c,"change",'.fr-video-upload-layer input[type="file"]',function(){if(this.files){var d=c.data("instance")||b;d.events.disableBlur(),c.find("input:focus").blur(),d.events.enableBlur(),d.video.upload(this.files)}a(this).val("")})}function R(){b.events.on("drop",O,!0),b.events.on("mousedown window.mousedown",L),b.events.on("window.touchmove",M),b.events.on("mouseup window.mouseup",K),b.events.on("commands.mousedown",function(a){a.parents(".fr-toolbar").length>0&&K()}),b.events.on("blur video.hideResizer commands.undo commands.redo element.dropped",function(){K(!0)})}function S(a,c){b.edit.on(),ra&&ra.find("video").addClass("fr-error"),q(b.language.translate("Something went wrong. Please try again.")),b.events.trigger("video.error",[{code:a,message:xa[a]},c])}function T(){var a="";if(b.opts.videoEditButtons.length>0){a+='<div class="fr-buttons">',a+=b.button.buildList(b.opts.videoEditButtons),a+="</div>";var c={buttons:a},d=b.popups.create("video.edit",c);return b.events.$on(b.$wp,"scroll.video-edit",function(){ra&&b.popups.isVisible("video.edit")&&(b.events.disableBlur(),t(ra))}),d}return!1}function U(){if(ra){var a=b.popups.get("video.size"),c=ra.find("iframe, embed, video");a.find('input[name="width"]').val(c.get(0).style.width||c.attr("width")).trigger("change"),a.find('input[name="height"]').val(c.get(0).style.height||c.attr("height")).trigger("change")}}function V(){var a=b.popups.get("video.size");a||(a=W()),o(),b.popups.refresh("video.size"),b.popups.setContainer("video.size",b.$sc);var c=ra.find("iframe, embed, video"),d=c.offset().left+c.width()/2,e=c.offset().top+c.height();b.popups.show("video.size",d,e,c.height())}function W(a){if(a)return b.popups.onRefresh("video.size",U),!0;var c="";c='<div class="fr-buttons">'+b.button.buildList(b.opts.videoSizeButtons)+"</div>";var d="";d='<div class="fr-video-size-layer fr-layer fr-active" id="fr-video-size-layer-'+b.id+'"><div class="fr-video-group"><div class="fr-input-line"><input id="fr-video-size-layer-width-'+b.id+'" type="text" name="width" placeholder="'+b.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input id="fr-video-size-layer-height-'+b.id+'" type="text" name="height" placeholder="'+b.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoSetSize" tabIndex="2" role="button">'+b.language.translate("Update")+"</button></div></div>";var e={buttons:c,size_layer:d},f=b.popups.create("video.size",e);return b.events.$on(b.$wp,"scroll",function(){ra&&b.popups.isVisible("video.size")&&(b.events.disableBlur(),t(ra))}),f}function X(a){if(void 0===a&&(a=ra),a){if(a.hasClass("fr-fvl"))return"left";if(a.hasClass("fr-fvr"))return"right";if(a.hasClass("fr-dvb")||a.hasClass("fr-dvi"))return"center";if("block"==a.css("display")){if("left"==a.css("text-algin"))return"left";if("right"==a.css("text-align"))return"right"}else{if("left"==a.css("float"))return"left";if("right"==a.css("float"))return"right"}}return"center"}function Y(a){ra.removeClass("fr-fvr fr-fvl"),!b.opts.htmlUntouched&&b.opts.useClasses?"left"==a?ra.addClass("fr-fvl"):"right"==a&&ra.addClass("fr-fvr"):fa(ra,_(),a),ka(),I(),e(),b.selection.clear()}function Z(a){if(!ra)return!1;a.find("> *:first").replaceWith(b.icon.create("video-align-"+X()))}function $(a,b){ra&&b.find('.fr-command[data-param1="'+X()+'"]').addClass("fr-active").attr("aria-selected",!0)}function _(a){void 0===a&&(a=ra);var b=a.css("float");return a.css("float","none"),"block"==a.css("display")?(a.css("float",""),a.css("float")!=b&&a.css("float",b),"block"):(a.css("float",""),a.css("float")!=b&&a.css("float",b),"inline")}function aa(a){ra.removeClass("fr-dvi fr-dvb"),!b.opts.htmlUntouched&&b.opts.useClasses?"inline"==a?ra.addClass("fr-dvi"):"block"==a&&ra.addClass("fr-dvb"):fa(ra,a,X()),ka(),I(),e(),b.selection.clear()}function ba(a,b){ra&&b.find('.fr-command[data-param1="'+_()+'"]').addClass("fr-active").attr("aria-selected",!0)}function ca(){var a=b.popups.get("video.insert");a||(a=f()),b.popups.isVisible("video.insert")||(o(),b.popups.refresh("video.insert"),b.popups.setContainer("video.insert",b.$sc));var c=ra.offset().left+ra.width()/2,d=ra.offset().top+ra.height();b.popups.show("video.insert",c,d,ra.outerHeight())}function da(){if(ra&&!1!==b.events.trigger("video.beforeRemove",[ra])){var a=ra;b.popups.hideAll(),K(!0),b.selection.setBefore(a.get(0))||b.selection.setAfter(a.get(0)),a.remove(),b.selection.restore(),b.html.fillEmptyBlocks(),b.events.trigger("video.removed",[a])}}function ea(){o()}function fa(a,c,d){!b.opts.htmlUntouched&&b.opts.useClasses?(a.removeClass("fr-fvl fr-fvr fr-dvb fr-dvi"),a.addClass("fr-fv"+d[0]+" fr-dv"+c[0])):"inline"==c?(a.css({display:"inline-block"}),"center"==d?a.css({float:"none"}):"left"==d?a.css({float:"left"}):a.css({float:"right"})):(a.css({display:"block",clear:"both"}),"left"==d?a.css({textAlign:"left"}):"right"==d?a.css({textAlign:"right"}):a.css({textAlign:"center"}))}function ga(a){a.hasClass("fr-dvi")||a.hasClass("fr-dvb")||(a.addClass("fr-fv"+X(a)[0]),a.addClass("fr-dv"+_(a)[0]))}function ha(a){fa(a,a.hasClass("fr-dvb")?"block":a.hasClass("fr-dvi")?"inline":null,a.hasClass("fr-fvl")?"left":a.hasClass("fr-fvr")?"right":X(a)),a.removeClass("fr-dvb fr-dvi fr-fvr fr-fvl")}function ia(){b.$el.find("video").filter(function(){return 0===a(this).parents("span.fr-video").length}).wrap('<span class="fr-video" contenteditable="false"></span>'),b.$el.find("embed, iframe").filter(function(){if(b.browser.safari&&this.getAttribute("src")&&this.setAttribute("src",this.src),a(this).parents("span.fr-video").length>0)return!1;for(var c=a(this).attr("src"),d=0;d<a.FE.VIDEO_PROVIDERS.length;d++){var e=a.FE.VIDEO_PROVIDERS[d];if(e.test_regex.test(c)&&new RegExp(b.opts.videoAllowedProviders.join("|")).test(e.provider))return!0}return!1}).map(function(){return 0===a(this).parents("object").length?this:a(this).parents("object").get(0)}).wrap('<span class="fr-video" contenteditable="false"></span>');for(var c=b.$el.find("span.fr-video, video"),d=0;d<c.length;d++){var e=a(c[d]);!b.opts.htmlUntouched&&b.opts.useClasses?(ga(e),b.opts.videoTextNear||e.removeClass("fr-dvi").addClass("fr-dvb")):b.opts.htmlUntouched||b.opts.useClasses||ha(e)}c.toggleClass("fr-draggable",b.opts.videoMove)}function ja(){R(),b.helpers.isMobile()&&(b.events.$on(b.$el,"touchstart","span.fr-video",function(){za=!1}),b.events.$on(b.$el,"touchmove",function(){za=!0})),b.events.on("html.set",ia),ia(),b.events.$on(b.$el,"mousedown","span.fr-video",function(a){a.stopPropagation()}),b.events.$on(b.$el,"click touchend","span.fr-video",J),b.events.on("keydown",function(c){var d=c.which;return!ra||d!=a.FE.KEYCODE.BACKSPACE&&d!=a.FE.KEYCODE.DELETE?ra&&d==a.FE.KEYCODE.ESC?(K(!0),c.preventDefault(),!1):ra&&d!=a.FE.KEYCODE.F10&&!b.keys.isBrowserAction(c)?(c.preventDefault(),!1):void 0:(c.preventDefault(),da(),!1)},!0),b.events.on("toolbar.esc",function(){if(ra)return b.events.disableBlur(),b.events.focus(),!1},!0),b.events.on("toolbar.focusEditor",function(){if(ra)return!1},!0),b.events.on("keydown",function(){b.$el.find("span.fr-video:empty").remove()}),f(!0),W(!0)}function ka(){if(ra){b.selection.clear();var a=b.doc.createRange();a.selectNode(ra.get(0));b.selection.get().addRange(a)}}function la(){ra?(b.events.disableBlur(),ra.trigger("click")):(b.events.disableBlur(),b.selection.restore(),b.events.enableBlur(),b.popups.hide("video.insert"),b.toolbar.showInline())}function ma(a,c){if(ra){var d=b.popups.get("video.size"),e=ra.find("iframe, embed, video");e.css("width",a||d.find('input[name="width"]').val()),e.css("height",c||d.find('input[name="height"]').val()),e.get(0).style.width&&e.removeAttr("width"),e.get(0).style.height&&e.removeAttr("height"),d.find("input:focus").blur(),setTimeout(function(){ra.trigger("click")},b.helpers.isAndroid()?50:0)}}function na(){return ra}var oa,pa,qa,ra,sa=2,ta=3,ua=4,va=5,wa=6,xa={};xa[1]="Video cannot be loaded from the passed link.",xa[sa]="No link in upload response.",xa[ta]="Error during file upload.",xa[ua]="Parsing response failed.",xa[va]="File is too large.",xa[wa]="Video file type is invalid.",xa[7]="Files can be uploaded only to same domain in IE 8 and IE 9.";var ya,za;return b.shared.vid_exit_flag=!1,{_init:ja,showInsertPopup:d,showLayer:g,refreshByURLButton:h,refreshEmbedButton:i,refreshUploadButton:j,upload:P,insertByURL:r,insertEmbed:s,insert:k,align:Y,
refreshAlign:Z,refreshAlignOnShow:$,display:aa,refreshDisplayOnShow:ba,remove:da,hideProgressBar:o,showSizePopup:V,replace:ca,back:la,setSize:ma,get:na}},a.FE.RegisterCommand("insertVideo",{title:"Insert Video",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("video.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("video.insert")):this.video.showInsertPopup()},plugin:"video"}),a.FE.DefineIcon("insertVideo",{NAME:"video-camera"}),a.FE.DefineIcon("videoByURL",{NAME:"link"}),a.FE.RegisterCommand("videoByURL",{title:"By URL",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-by-url")},refresh:function(a){this.video.refreshByURLButton(a)}}),a.FE.DefineIcon("videoEmbed",{NAME:"code"}),a.FE.RegisterCommand("videoEmbed",{title:"Embedded Code",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-embed")},refresh:function(a){this.video.refreshEmbedButton(a)}}),a.FE.DefineIcon("videoUpload",{NAME:"upload"}),a.FE.RegisterCommand("videoUpload",{title:"Upload Video",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-upload")},refresh:function(a){this.video.refreshUploadButton(a)}}),a.FE.RegisterCommand("videoInsertByURL",{undo:!0,focus:!0,callback:function(){this.video.insertByURL()}}),a.FE.RegisterCommand("videoInsertEmbed",{undo:!0,focus:!0,callback:function(){this.video.insertEmbed()}}),a.FE.DefineIcon("videoDisplay",{NAME:"star"}),a.FE.RegisterCommand("videoDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(a,b){this.video.display(b)},refresh:function(a){this.opts.videoTextNear||a.addClass("fr-hidden")},refreshOnShow:function(a,b){this.video.refreshDisplayOnShow(a,b)}}),a.FE.DefineIcon("video-align",{NAME:"align-left"}),a.FE.DefineIcon("video-align-left",{NAME:"align-left"}),a.FE.DefineIcon("video-align-right",{NAME:"align-right"}),a.FE.DefineIcon("video-align-center",{NAME:"align-justify"}),a.FE.DefineIcon("videoAlign",{NAME:"align-center"}),a.FE.RegisterCommand("videoAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"None",right:"Align Right"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.videoAlign.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="videoAlign" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.icon.create("video-align-"+d)+'<span class="fr-sr-only">'+this.language.translate(c[d])+"</span></a></li>");return b+="</ul>"},callback:function(a,b){this.video.align(b)},refresh:function(a){this.video.refreshAlign(a)},refreshOnShow:function(a,b){this.video.refreshAlignOnShow(a,b)}}),a.FE.DefineIcon("videoReplace",{NAME:"exchange"}),a.FE.RegisterCommand("videoReplace",{title:"Replace",undo:!1,focus:!1,popup:!0,refreshAfterCallback:!1,callback:function(){this.video.replace()}}),a.FE.DefineIcon("videoRemove",{NAME:"trash"}),a.FE.RegisterCommand("videoRemove",{title:"Remove",callback:function(){this.video.remove()}}),a.FE.DefineIcon("videoSize",{NAME:"arrows-alt"}),a.FE.RegisterCommand("videoSize",{undo:!1,focus:!1,popup:!0,title:"Change Size",callback:function(){this.video.showSizePopup()}}),a.FE.DefineIcon("videoBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("videoBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.video.back()},refresh:function(a){this.video.get()||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.RegisterCommand("videoDismissError",{title:"OK",undo:!1,callback:function(){this.video.hideProgressBar(!0)}}),a.FE.RegisterCommand("videoSetSize",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.video.setSize()}}),a.extend(a.FE.DEFAULTS,{wordDeniedTags:[],wordDeniedAttrs:[],wordAllowedStyleProps:["font-family","font-size","background","color","width","text-align","vertical-align","background-color","padding","margin","height","margin-top","margin-left","margin-right","margin-bottom","text-decoration","font-weight","font-style"],wordPasteModal:!0}),a.FE.PLUGINS.wordPaste=function(b){function c(){b.events.on("paste.wordPaste",function(a){return A=a,b.opts.wordPasteModal?e():g(!0),!1})}function d(){var a='<div class="fr-word-paste-modal" style="padding: 20px 20px 10px 20px;">';return a+='<p style="text-align: left;">'+b.language.translate("The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?")+"</p>",a+='<div style="text-align: right; margin-top: 50px;"><button class="fr-remove-word fr-command">'+b.language.translate("Clean")+'</button> <button class="fr-keep-word fr-command">'+b.language.translate("Keep")+"</button></div>",a+="</div>"}function e(){if(!z){var c='<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.95 73.23" style="height: 25px; vertical-align: text-bottom; margin-right: 5px; display: inline-block"><defs><style>.a{fill:#2a5699;}.b{fill:#fff;}</style></defs><path class="a" d="M615.15,827.22h5.09V834c9.11.05,18.21-.09,27.32.05a2.93,2.93,0,0,1,3.29,3.25c.14,16.77,0,33.56.09,50.33-.09,1.72.17,3.63-.83,5.15-1.24.89-2.85.78-4.3.84-8.52,0-17,0-25.56,0v6.81h-5.32c-13-2.37-26-4.54-38.94-6.81q0-29.8,0-59.59c13.05-2.28,26.11-4.5,39.17-6.83Z" transform="translate(-575.97 -827.22)"/><path class="b" d="M620.24,836.59h28.1v54.49h-28.1v-6.81h22.14v-3.41H620.24v-4.26h22.14V873.2H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24V846h22.14v-3.41H620.24Zm-26.67,15c1.62-.09,3.24-.16,4.85-.25,1.13,5.75,2.29,11.49,3.52,17.21,1-5.91,2-11.8,3.06-17.7,1.7-.06,3.41-.15,5.1-.26-1.92,8.25-3.61,16.57-5.71,24.77-1.42.74-3.55,0-5.24.09-1.13-5.64-2.45-11.24-3.47-16.9-1,5.5-2.29,10.95-3.43,16.42q-2.45-.13-4.92-.3c-1.41-7.49-3.07-14.93-4.39-22.44l4.38-.18c.88,5.42,1.87,10.82,2.64,16.25,1.2-5.57,2.43-11.14,3.62-16.71Z" transform="translate(-575.97 -827.22)"/></svg> '+b.language.translate("Word Paste Detected")+"</h4>",e=d(),f=b.modals.create(B,c,e),g=f.$body;z=f.$modal,f.$modal.addClass("fr-middle"),b.events.bindClick(g,"button.fr-remove-word",function(){(z.data("instance")||b).wordPaste.clean()}),b.events.bindClick(g,"button.fr-keep-word",function(){(z.data("instance")||b).wordPaste.clean(!0)}),b.events.$on(a(b.o_win),"resize",function(){b.modals.resize(B)})}b.modals.show(B),b.modals.resize(B)}function f(){b.modals.hide(B)}function g(a){var c=b.opts.wordAllowedStyleProps;a||(b.opts.wordAllowedStyleProps=[]),A=A.replace(/^\n*/g,"").replace(/^ /g,""),0===A.indexOf("<colgroup>")&&(A="<table>"+A+"</table>"),A=y(A,b.paste.getRtfClipboard()),A=b.paste.removeEmptyTags(A),f(),b.paste.clean(A,!0,!0),b.opts.wordAllowedStyleProps=c}function h(a){a.parentNode&&a.parentNode.removeChild(a)}function i(a,b){if(b(a))for(var c=a.firstChild;c;){var d=c,e=c.previousSibling;c=c.nextSibling,i(d,b),d.previousSibling||d.nextSibling||d.parentNode||!c||e==c.previousSibling||!c.parentNode?d.previousSibling||d.nextSibling||d.parentNode||!c||c.previousSibling||c.nextSibling||c.parentNode||(e?c=e.nextSibling?e.nextSibling.nextSibling:null:a.firstChild&&(c=a.firstChild.nextSibling)):c=e?e.nextSibling:a.firstChild}}function j(a){if(!a.getAttribute("style")||!/mso-list:[\s]*l/gi.test(a.getAttribute("style").replace(/\n/gi,"")))return!1;try{if(!a.querySelector('[style="mso-list:Ignore"]'))return!1}catch(b){return!1}return!0}function k(a){return a.getAttribute("style").replace(/\n/gi,"").replace(/.*level([0-9]+?).*/gi,"$1")}function l(a,b){var c=a.cloneNode(!0);if(c.firstElementChild&&"A"==c.firstElementChild.tagName&&(c=c.firstElementChild),-1!=["H1","H2","H3","H4","H5","H6"].indexOf(a.tagName)){var d=document.createElement(a.tagName.toLowerCase());d.setAttribute("style",a.getAttribute("style")),d.innerHTML=c.innerHTML,c.innerHTML=d.outerHTML}i(c,function(a){return a.nodeType==Node.ELEMENT_NODE&&("mso-list:Ignore"==a.getAttribute("style")&&a.parentNode.removeChild(a),v(a,b)),!0});var e=c.innerHTML;return e=e.replace(/<!--[\s\S]*?-->/gi,"")}function m(a,b){var c=/[0-9a-zA-Z]./gi,d=!1;a.firstElementChild&&a.firstElementChild.firstElementChild&&a.firstElementChild.firstElementChild.firstChild&&!(d=d||c.test(a.firstElementChild.firstElementChild.firstChild.data||""))&&a.firstElementChild.firstElementChild.firstElementChild&&a.firstElementChild.firstElementChild.firstElementChild.firstChild&&(d=d||c.test(a.firstElementChild.firstElementChild.firstElementChild.firstChild.data||""));var e=d?"ol":"ul",f=k(a),g="<"+e+"><li>"+l(a,b),i=a.nextElementSibling,n=a.parentNode;for(h(a),a=null;i&&j(i);){var o=i.previousElementSibling,p=k(i);if(p>f)g+=m(i,b).outerHTML;else{if(p<f)break;g+="</li><li>"+l(i,b)}if(f=p,i.previousElementSibling||i.nextElementSibling||i.parentNode){var q=i;i=i.nextElementSibling,h(q),q=null}else i=o?o.nextElementSibling:n.firstElementChild}g+="</li></"+e+">";var r=document.createElement("div");return r.innerHTML=g,r.firstElementChild}function n(a,b){for(var c=document.createElement(b),d=0;d<a.attributes.length;d++){var e=a.attributes[d].name;c.setAttribute(e,a.getAttribute(e))}return c.innerHTML=a.innerHTML,a.parentNode.replaceChild(c,a),c}function o(c,d){b.node.clearAttributes(c);for(var e=c.firstElementChild,f=0,g=!1,i=null;e;){e.firstElementChild&&-1!=e.firstElementChild.tagName.indexOf("W:")&&(e.innerHTML=e.firstElementChild.innerHTML),i=e.getAttribute("width"),i||g||(g=!0),f+=parseInt(i,10),(!e.firstChild||e.firstChild&&e.firstChild.data==a.FE.UNICODE_NBSP)&&(e.firstChild&&h(e.firstChild),e.innerHTML="<br>");for(var k=e.firstElementChild,l=1==e.children.length;k;){if("P"==k.tagName&&!j(k)){var m=null;1==k.children.length&&k.firstElementChild&&"SPAN"==k.firstElementChild.tagName?'<span lang="EN-US">'===b.node.openTagString(k.firstElementChild)?k.firstElementChild.outerHTML=k.firstElementChild.innerHTML:(m=k.firstElementChild,l||(m=n(m,"div")),l?r(e,k.getAttribute("style")):r(m,k.getAttribute("style")),e.replaceChild(m,k)):(m=n(k,l?"span":"div"),!l&&m.getAttribute("align")&&m.removeAttribute("align")),m&&(k=m),l&&p(k)}k=k.nextElementSibling}if(d){var o=e.getAttribute("class");if(o){o=q(o);var s=o.match(/xl[0-9]+/gi);if(s){var t=s[0],u="."+t;d[u]&&r(e,d[u])}}d.td&&r(e,d.td)}var v=e.getAttribute("style");v&&(v=q(v))&&";"!=v.slice(-1)&&(v+=";");var w=e.getAttribute("valign");if(!w&&v){var x=v.match(/vertical-align:.+?[; "]{1,1}/gi);x&&(w=x[x.length-1].replace(/vertical-align:(.+?)[; "]{1,1}/gi,"$1"))}var y=null;if(v){var z=v.match(/text-align:.+?[; "]{1,1}/gi);z&&(y=z[z.length-1].replace(/text-align:(.+?)[; "]{1,1}/gi,"$1")),"general"==y&&(y=null)}var A=null;if(v){var B=v.match(/background:.+?[; "]{1,1}/gi);B&&(A=B[B.length-1].replace(/background:(.+?)[; "]{1,1}/gi,"$1"))}var C=e.getAttribute("colspan"),D=e.getAttribute("rowspan");C&&e.setAttribute("colspan",C),D&&e.setAttribute("rowspan",D),w&&(e.style["vertical-align"]=w),y&&(e.style["text-align"]=y),A&&(e.style["background-color"]=A),i&&e.setAttribute("width",i),e=e.nextElementSibling}for(e=c.firstElementChild;e;)i=e.getAttribute("width"),g?e.removeAttribute("width"):e.setAttribute("width",100*parseInt(i,10)/f+"%"),e=e.nextElementSibling}function p(a){var b=a.parentNode,c=a.getAttribute("align");c&&(b&&"TD"==b.tagName?(b.setAttribute("style",b.getAttribute("style")+"text-align:"+c+";"),a.removeAttribute("align")):(a.style["text-align"]=c,a.removeAttribute("align")))}function q(a){return a.replace(/\n|\r|\n\r|&quot;/g,"")}function r(a,b,c){if(b){var d=a.getAttribute("style");d&&";"!=d.slice(-1)&&(d+=";"),b&&";"!=b.slice(-1)&&(b+=";"),b=b.replace(/\n/gi,"");var e=null;e=c?(d||"")+b:b+(d||""),a.setAttribute("style",e)}}function s(a){var b=a.getAttribute("style");if(b){b=q(b),b&&";"!=b.slice(-1)&&(b+=";");var c=b.match(/(^|\S+?):.+?;{1,1}/gi);if(c){for(var d={},e=0;e<c.length;e++){var f=c[e],g=f.split(":");2==g.length&&("text-align"==g[0]&&"SPAN"==a.tagName||(d[g[0]]=g[1]))}var h="";for(var i in d)if(d.hasOwnProperty(i)){if("font-size"==i&&"pt;"==d[i].slice(-3)){var j=null;try{j=parseFloat(d[i].slice(0,-3),10)}catch(k){}j&&(j=Math.round(1.33*j),d[i]=j+"px;")}h+=i+":"+d[i]}h&&a.setAttribute("style",h)}}}function t(a){for(var b=a.match(/[0-9a-f]{2}/gi),c=[],d=0;d<b.length;d++)c.push(String.fromCharCode(parseInt(b[d],16)));var e=c.join("");return btoa(e)}function u(b,c){if(c){var d;if("IMG"==b.tagName){var e=b.getAttribute("src");if(!e||-1==e.indexOf("file://"))return;d=C[b.getAttribute("v:shapes")]}else d=b.parentNode.getAttribute("o:spid");if(d){var f="hplid"+d.substring(8),g=c.split(f);if(!g||2==g.length){var h=g[1].split("bliptag");if(!(h&&h.length<2)){var i=null;if(-1!=h[0].indexOf("pngblip")?i="image/png":-1!=h[0].indexOf("jpegblip")&&(i="image/jpeg"),i){var j=h[1].split("}");if(!(j&&j.length<2)){var k;if(j.length>2&&-1!=j[0].indexOf("blipuid"))k=j[1].split(" ");else{if((k=j[0].split(" "))&&k.length<2)return;k.shift()}var l=k.join(""),m=t(l),n="data:"+i+";base64,"+m;"IMG"===b.tagName?(b.src=n,b.setAttribute("data-fr-image-pasted",!0)):a(b.parentNode).before('<img data-fr-image-pasted="true" src="'+n+'" style="'+b.parentNode.getAttribute("style")+'">').remove()}}}}}}}function v(b,c){var d=b.tagName,e=d.toLowerCase();if(b.firstElementChild&&("I"==b.firstElementChild.tagName?n(b.firstElementChild,"em"):"B"==b.firstElementChild.tagName&&n(b.firstElementChild,"strong")),-1!=["SCRIPT","APPLET","EMBED","NOFRAMES","NOSCRIPT"].indexOf(d))return h(b),!1;"O:P"==d&&"&nbsp;"==b.innerHTML&&(b.innerHTML=a.FE.INVISIBLE_SPACE);var f=-1,g=["META","LINK","XML","ST1:","O:","W:","FONT"];for(f=0;f<g.length;f++)if(-1!=d.indexOf(g[f]))return b.innerHTML?(b.outerHTML=b.innerHTML,h(b),!1):(h(b),!1);if("TD"!=d){var i=b.getAttribute("class");if(c&&i){i=q(i);var j=i.split(" ");for(f=0;f<j.length;f++){var k=j[f],l=[],m="."+k;l.push(m),m=e+m,l.push(m);for(var s=0;s<l.length;s++)c[l[s]]&&r(b,c[l[s]])}}c&&c[e]&&r(b,c[e])}if(-1!=["P","H1","H2","H3","H4","H5","H6","PRE"].indexOf(d)){var t=b.getAttribute("class");if(t&&(c&&c[d.toLowerCase()+"."+t]&&r(b,c[d.toLowerCase()+"."+t]),-1!=t.toLowerCase().indexOf("mso"))){var u=q(t);u=u.replace(/[0-9a-z-_]*mso[0-9a-z-_]*/gi,""),u?b.setAttribute("class",u):b.removeAttribute("class")}var v=b.getAttribute("style");if(v){var w=v.match(/text-align:.+?[; "]{1,1}/gi);w&&w[w.length-1].replace(/(text-align:.+?[; "]{1,1})/gi,"$1")}p(b)}if("TR"==d&&o(b,c),"A"==d&&!b.attributes.getNamedItem("href")&&b.innerHTML&&(b.outerHTML=b.innerHTML),"TD"!=d&&"TH"!=d||b.innerHTML||(b.innerHTML="<br>"),"TABLE"==d&&(b.style.width="100%"),b.getAttribute("lang")&&b.removeAttribute("lang"),b.getAttribute("style")&&-1!=b.getAttribute("style").toLowerCase().indexOf("mso")){var x=q(b.getAttribute("style"));x=x.replace(/[0-9a-z-_]*mso[0-9a-z-_]*:.+?(;{1,1}|$)/gi,""),x?b.setAttribute("style",x):b.removeAttribute("style")}return!0}function w(a){var b={},c=a.getElementsByTagName("style");if(c.length){var d=c[0],e=d.innerHTML.match(/[\S ]+\s+{[\s\S]+?}/gi);if(e)for(var f=0;f<e.length;f++){var g=e[f],h=g.replace(/([\S ]+\s+){[\s\S]+?}/gi,"$1"),i=g.replace(/[\S ]+\s+{([\s\S]+?)}/gi,"$1");h=h.replace(/^[\s]|[\s]$/gm,""),i=i.replace(/^[\s]|[\s]$/gm,""),h=h.replace(/\n|\r|\n\r/g,""),i=i.replace(/\n|\r|\n\r/g,"");for(var j=h.split(", "),k=0;k<j.length;k++)b[j[k]]=i}}return b}function x(a){for(var b=a.split("v:shape"),c=1;c<b.length;c++){var d=b[c],e=d.split(' id="')[1];if(e&&e.length>1){e=e.split('"')[0];var f=d.split(' o:spid="')[1];f&&f.length>1&&(f=f.split('"')[0],C[e]=f)}}}function y(c,d){c=c.replace(/[.\s\S\w\W<>]*(<html[^>]*>[.\s\S\w\W<>]*<\/html>)[.\s\S\w\W<>]*/gi,"$1"),x(c);var e=new DOMParser,f=e.parseFromString(c,"text/html"),g=f.head,k=f.body,l=w(g);i(k,function(b){if(b.nodeType==Node.TEXT_NODE&&/\n|\u00a0/.test(b.data)){if(!/\S/.test(b.data))return b.data==a.FE.UNICODE_NBSP?(b.data="\u200b",!0):(h(b),!1);b.data=b.data.replace(/\n/gi," ")}return!0}),i(k,function(a){return a.nodeType!=Node.ELEMENT_NODE||"V:IMAGEDATA"!=a.tagName&&"IMG"!=a.tagName||u(a,d),!0}),i(k,function(a){if(a.nodeType==Node.TEXT_NODE)return a.data=a.data.replace(/<br>(\n|\r)/gi,"<br>"),!1;if(a.nodeType==Node.ELEMENT_NODE){if(j(a)){var b=a.parentNode,c=a.previousSibling,d=m(a,l),e=null;return e=c?c.nextSibling:b.firstChild,e?b.insertBefore(d,e):b.appendChild(d),!1}return v(a,l)}return a.nodeType!=Node.COMMENT_NODE||(h(a),!1)}),i(k,function(a){if(a.nodeType==Node.ELEMENT_NODE){var b=a.tagName;if(!a.innerHTML&&-1==["BR","IMG"].indexOf(b)){for(var c=a.parentNode;c&&(h(a),a=c,!a.innerHTML);)c=a.parentNode;return!1}s(a)}return!0});var n=k.outerHTML,o=b.opts.htmlAllowedStyleProps;return b.opts.htmlAllowedStyleProps=b.opts.wordAllowedStyleProps,n=b.clean.html(n,b.opts.wordDeniedTags,b.opts.wordDeniedAttrs,!1),b.opts.htmlAllowedStyleProps=o,n}var z,A,B="word_paste",C={};return{_init:c,clean:g}}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, _) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.FE.PLUGINS.codeBeautifier=function(){function a(a,c){function d(a){return a.replace(/^\s+/g,"")}function e(a){return a.replace(/\s+$/g,"")}function g(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.newlines=0,this.indent_content=i,this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,source,!doctype,basefont,base,area,hr,wbr,param,img,isindex,embed".split(","),extra_liners:u,in_array:function(a,b){for(var c=0;c<b.length;c++)if(a==b[c])return!0;return!1}},this.is_whitespace=function(a){for(var b=0;b<a.length;a++)if(!this.Utils.in_array(a.charAt(b),this.Utils.whitespace))return!1;return!0},this.traverse_whitespace=function(){var a="";if(a=this.input.charAt(this.pos),this.Utils.in_array(a,this.Utils.whitespace)){for(this.newlines=0;this.Utils.in_array(a,this.Utils.whitespace);)o&&"\n"==a&&this.newlines<=p&&(this.newlines+=1),this.pos++,a=this.input.charAt(this.pos);return!0}return!1},this.space_or_wrap=function(a){this.line_char_count>=this.wrap_line_length?(this.print_newline(!1,a),this.print_indentation(a)):(this.line_char_count++,a.push(" "))},this.get_content=function(){for(var a="",b=[];"<"!=this.input.charAt(this.pos);){if(this.pos>=this.input.length)return b.length?b.join(""):["","TK_EOF"];if(this.traverse_whitespace())this.space_or_wrap(b);else{if(q){var c=this.input.substr(this.pos,3);if("{{#"==c||"{{/"==c)break;if("{{!"==c)return[this.get_tag(),"TK_TAG_HANDLEBARS_COMMENT"];if("{{"==this.input.substr(this.pos,2)&&"{{else}}"==this.get_tag(!0))break}a=this.input.charAt(this.pos),this.pos++,this.line_char_count++,b.push(a)}}return b.length?b.join(""):""},this.get_contents_to=function(a){if(this.pos==this.input.length)return["","TK_EOF"];var b="",c=new RegExp("</"+a+"\\s*>","igm");c.lastIndex=this.pos;var d=c.exec(this.input),e=d?d.index:this.input.length;return this.pos<e&&(b=this.input.substring(this.pos,e),this.pos=e),b},this.record_tag=function(a){this.tags[a+"count"]?(this.tags[a+"count"]++,this.tags[a+this.tags[a+"count"]]=this.indent_level):(this.tags[a+"count"]=1,this.tags[a+this.tags[a+"count"]]=this.indent_level),this.tags[a+this.tags[a+"count"]+"parent"]=this.tags.parent,this.tags.parent=a+this.tags[a+"count"]},this.retrieve_tag=function(a){if(this.tags[a+"count"]){for(var b=this.tags.parent;b&&a+this.tags[a+"count"]!=b;)b=this.tags[b+"parent"];b&&(this.indent_level=this.tags[a+this.tags[a+"count"]],this.tags.parent=this.tags[b+"parent"]),delete this.tags[a+this.tags[a+"count"]+"parent"],delete this.tags[a+this.tags[a+"count"]],1==this.tags[a+"count"]?delete this.tags[a+"count"]:this.tags[a+"count"]--}},this.indent_to_tag=function(a){if(this.tags[a+"count"]){for(var b=this.tags.parent;b&&a+this.tags[a+"count"]!=b;)b=this.tags[b+"parent"];b&&(this.indent_level=this.tags[a+this.tags[a+"count"]])}},this.get_tag=function(a){var b,c,d="",e=[],f="",g=!1,h=!0,i=this.pos,j=this.line_char_count;a=void 0!==a&&a;do{if(this.pos>=this.input.length)return a&&(this.pos=i,this.line_char_count=j),e.length?e.join(""):["","TK_EOF"];if(d=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(d,this.Utils.whitespace))g=!0;else{if("'"!=d&&'"'!=d||(d+=this.get_unformatted(d),g=!0),"="==d&&(g=!1),e.length&&"="!=e[e.length-1]&&">"!=d&&g){if(this.space_or_wrap(e),g=!1,!h&&"force"==r&&"/"!=d){this.print_newline(!0,e),this.print_indentation(e);for(var l=0;l<s;l++)e.push(k)}for(var m=0;m<e.length;m++)if(" "==e[m]){h=!1;break}}if(q&&"<"==c&&d+this.input.charAt(this.pos)=="{{"&&(d+=this.get_unformatted("}}"),e.length&&" "!=e[e.length-1]&&"<"!=e[e.length-1]&&(d=" "+d),g=!0),"<"!=d||c||(b=this.pos-1,c="<"),q&&!c&&e.length>=2&&"{"==e[e.length-1]&&"{"==e[e.length-2]&&(b="#"==d||"/"==d||"!"==d?this.pos-3:this.pos-2,c="{"),this.line_char_count++,e.push(d),e[1]&&("!"==e[1]||"?"==e[1]||"%"==e[1])){e=[this.get_comment(b)];break}if(q&&e[1]&&"{"==e[1]&&e[2]&&"!"==e[2]){e=[this.get_comment(b)];break}if(q&&"{"==c&&e.length>2&&"}"==e[e.length-2]&&"}"==e[e.length-1])break}}while(">"!=d);var o,p,t=e.join("");o=-1!=t.indexOf(" ")?t.indexOf(" "):"{"==t[0]?t.indexOf("}"):t.indexOf(">"),p="<"!=t[0]&&q?"#"==t[2]?3:2:1;var u=t.substring(p,o).toLowerCase();return"/"==t.charAt(t.length-2)||this.Utils.in_array(u,this.Utils.single_token)?a||(this.tag_type="SINGLE"):q&&"{"==t[0]&&"else"==u?a||(this.indent_to_tag("if"),this.tag_type="HANDLEBARS_ELSE",this.indent_content=!0,this.traverse_whitespace()):this.is_unformatted(u,n)?(f=this.get_unformatted("</"+u+">",t),e.push(f),this.pos-1,this.tag_type="SINGLE"):"script"==u&&(-1==t.search("type")||t.search("type")>-1&&t.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/)>-1)?a||(this.record_tag(u),this.tag_type="SCRIPT"):"style"==u&&(-1==t.search("type")||t.search("type")>-1&&t.search("text/css")>-1)?a||(this.record_tag(u),this.tag_type="STYLE"):"!"==u.charAt(0)?a||(this.tag_type="SINGLE",this.traverse_whitespace()):a||("/"==u.charAt(0)?(this.retrieve_tag(u.substring(1)),this.tag_type="END"):(this.record_tag(u),"html"!=u.toLowerCase()&&(this.indent_content=!0),this.tag_type="START"),this.traverse_whitespace()&&this.space_or_wrap(e),this.Utils.in_array(u,this.Utils.extra_liners)&&(this.print_newline(!1,this.output),this.output.length&&"\n"!=this.output[this.output.length-2]&&this.print_newline(!0,this.output))),a&&(this.pos=i,this.line_char_count=j),e.join("")},this.get_comment=function(a){var b="",c=">",d=!1;this.pos=a;var e=this.input.charAt(this.pos);for(this.pos++;this.pos<=this.input.length&&(b+=e,b[b.length-1]!=c[c.length-1]||-1==b.indexOf(c));)!d&&b.length<10&&(0===b.indexOf("<![if")?(c="<![endif]>",d=!0):0===b.indexOf("<![cdata[")?(c="]]>",d=!0):0===b.indexOf("<![")?(c="]>",d=!0):0===b.indexOf("\x3c!--")?(c="--\x3e",d=!0):0===b.indexOf("{{!")?(c="}}",d=!0):0===b.indexOf("<?")?(c="?>",d=!0):0===b.indexOf("<%")&&(c="%>",d=!0)),e=this.input.charAt(this.pos),this.pos++;return b},this.get_unformatted=function(a,b){if(b&&-1!=b.toLowerCase().indexOf(a))return"";var c="",d="",e=0,f=!0;do{if(this.pos>=this.input.length)return d;if(c=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(c,this.Utils.whitespace)){if(!f){this.line_char_count--;continue}if("\n"==c||"\r"==c){d+="\n",this.line_char_count=0;continue}}d+=c,this.line_char_count++,f=!0,q&&"{"==c&&d.length&&"{"==d[d.length-2]&&(d+=this.get_unformatted("}}"),e=d.length)}while(-1==d.toLowerCase().indexOf(a,e));return d},this.get_token=function(){var a;if("TK_TAG_SCRIPT"==this.last_token||"TK_TAG_STYLE"==this.last_token){var b=this.last_token.substr(7);return a=this.get_contents_to(b),"string"!=typeof a?a:[a,"TK_"+b]}if("CONTENT"==this.current_mode)return a=this.get_content(),"string"!=typeof a?a:[a,"TK_CONTENT"];if("TAG"==this.current_mode){if("string"!=typeof(a=this.get_tag()))return a;return[a,"TK_TAG_"+this.tag_type]}},this.get_full_indent=function(a){return a=this.indent_level+a||0,a<1?"":new Array(a+1).join(this.indent_string)},this.is_unformatted=function(a,b){if(!this.Utils.in_array(a,b))return!1;if("a"!=a.toLowerCase()||!this.Utils.in_array("a",b))return!0;var c=this.get_tag(!0),d=(c||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);return!(d&&!this.Utils.in_array(d,b))},this.printer=function(a,b,c,f,g){this.input=a||"",this.output=[],this.indent_character=b,this.indent_string="",this.indent_size=c,this.brace_style=g,this.indent_level=0,this.wrap_line_length=f,this.line_char_count=0;for(var h=0;h<this.indent_size;h++)this.indent_string+=this.indent_character;this.print_newline=function(a,b){this.line_char_count=0,b&&b.length&&(a||"\n"!=b[b.length-1])&&("\n"!=b[b.length-1]&&(b[b.length-1]=e(b[b.length-1])),b.push("\n"))},this.print_indentation=function(a){for(var b=0;b<this.indent_level;b++)a.push(this.indent_string),this.line_char_count+=this.indent_string.length},this.print_token=function(a){this.is_whitespace(a)&&!this.output.length||((a||""!==a)&&this.output.length&&"\n"==this.output[this.output.length-1]&&(this.print_indentation(this.output),a=d(a)),this.print_token_raw(a))},this.print_token_raw=function(a){this.newlines>0&&(a=e(a)),a&&""!==a&&(a.length>1&&"\n"==a[a.length-1]?(this.output.push(a.slice(0,-1)),this.print_newline(!1,this.output)):this.output.push(a));for(var b=0;b<this.newlines;b++)this.print_newline(b>0,this.output);this.newlines=0},this.indent=function(){this.indent_level++},this.unindent=function(){this.indent_level>0&&this.indent_level--}},this}var h,i,j,k,l,m,n,o,p,q,r,s,t,u;for(c=c||{},void 0!==c.wrap_line_length&&0!==parseInt(c.wrap_line_length,10)||void 0===c.max_char||0===parseInt(c.max_char,10)||(c.wrap_line_length=c.max_char),i=void 0!==c.indent_inner_html&&c.indent_inner_html,j=void 0===c.indent_size?4:parseInt(c.indent_size,10),k=void 0===c.indent_char?" ":c.indent_char,m=void 0===c.brace_style?"collapse":c.brace_style,l=0===parseInt(c.wrap_line_length,10)?32786:parseInt(c.wrap_line_length||250,10),n=c.unformatted||["a","span","img","bdo","em","strong","dfn","code","samp","kbd","var","cite","abbr","acronym","q","sub","sup","tt","i","b","big","small","u","s","strike","font","ins","del","address","pre"],o=void 0===c.preserve_newlines||c.preserve_newlines,p=o?isNaN(parseInt(c.max_preserve_newlines,10))?32786:parseInt(c.max_preserve_newlines,10):0,q=void 0!==c.indent_handlebars&&c.indent_handlebars,r=void 0===c.wrap_attributes?"auto":c.wrap_attributes,s=void 0===c.wrap_attributes_indent_size?j:parseInt(c.wrap_attributes_indent_size,10)||j,t=void 0!==c.end_with_newline&&c.end_with_newline,u=Array.isArray(c.extra_liners)?c.extra_liners.concat():"string"==typeof c.extra_liners?c.extra_liners.split(","):"head,body,/html".split(","),c.indent_with_tabs&&(k="\t",j=1),h=new g,h.printer(a,k,j,l,m);;){var v=h.get_token();if(h.token_text=v[0],h.token_type=v[1],"TK_EOF"==h.token_type)break;switch(h.token_type){case"TK_TAG_START":h.print_newline(!1,h.output),h.print_token(h.token_text),h.indent_content&&(h.indent(),h.indent_content=!1),h.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":h.print_newline(!1,h.output),h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_END":if("TK_CONTENT"==h.last_token&&""===h.last_text){var w=h.token_text.match(/\w+/)[0],x=null;h.output.length&&(x=h.output[h.output.length-1].match(/(?:<|{{#)\s*(\w+)/)),(null==x||x[1]!=w&&!h.Utils.in_array(x[1],n))&&h.print_newline(!1,h.output)}h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var y=h.token_text.match(/^\s*<([a-z-]+)/i);y&&h.Utils.in_array(y[1],n)||h.print_newline(!1,h.output),h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_ELSE":h.print_token(h.token_text),h.indent_content&&(h.indent(),h.indent_content=!1),h.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_COMMENT":case"TK_CONTENT":h.print_token(h.token_text),h.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(""!==h.token_text){h.print_newline(!1,h.output);var z,A=h.token_text,B=1;"TK_SCRIPT"==h.token_type?z="function"==typeof f&&f:"TK_STYLE"==h.token_type&&(z="function"==typeof b&&b),"keep"==c.indent_scripts?B=0:"separate"==c.indent_scripts&&(B=-h.indent_level);var C=h.get_full_indent(B);if(z)A=z(A.replace(/^\s*/,C),c);else{var D=A.match(/^\s*/)[0],E=D.match(/[^\n\r]*$/)[0].split(h.indent_string).length-1,F=h.get_full_indent(B-E);A=A.replace(/^\s*/,C).replace(/\r\n|\r|\n/g,"\n"+F).replace(/\s+$/,"")}A&&(h.print_token_raw(A),h.print_newline(!0,h.output))}h.current_mode="TAG";break;default:""!==h.token_text&&h.print_token(h.token_text)}h.last_token=h.token_type,h.last_text=h.token_text}var G=h.output.join("").replace(/[\r\n\t ]+$/,"");return t&&(G+="\n"),G}function b(a,b){function c(){return(v=a.charAt(++x))||""}function d(b){var d="",e=x;return b&&g(),d=a.charAt(x+1)||"",x=e-1,c(),d}function e(b){for(var d=x;c();)if("\\"===v)c();else{if(-1!==b.indexOf(v))break;if("\n"===v)break}return a.substring(d,x+1)}function f(a){var b=x,d=e(a);return x=b-1,c(),d}function g(){for(var a="";w.test(d());)c(),a+=v;return a}function h(){var a="";for(v&&w.test(v)&&(a=v);w.test(c());)a+=v;return a}function i(b){var e=x;for(b="/"===d(),c();c();){if(!b&&"*"===v&&"/"===d()){c();break}if(b&&"\n"===v)return a.substring(e,x)}return a.substring(e,x)+v}function j(b){return a.substring(x-b.length,x).toLowerCase()===b}function k(){for(var b=0,c=x+1;c<a.length;c++){var d=a.charAt(c);if("{"===d)return!0;if("("===d)b+=1;else if(")"===d){if(0==b)return!1;b-=1}else if(";"===d||"}"===d)return!1}return!1}function l(){B++,z+=A}function m(){B--,z=z.slice(0,-p)}var n={"@page":!0,"@font-face":!0,"@keyframes":!0,"@media":!0,"@supports":!0,"@document":!0},o={"@media":!0,"@supports":!0,"@document":!0};b=b||{},a=a||"",a=a.replace(/\r\n|[\r\u2028\u2029]/g,"\n");var p=b.indent_size||4,q=b.indent_char||" ",r=void 0===b.selector_separator_newline||b.selector_separator_newline,s=void 0!==b.end_with_newline&&b.end_with_newline,t=void 0===b.newline_between_rules||b.newline_between_rules,u=b.eol?b.eol:"\n";"string"==typeof p&&(p=parseInt(p,10)),b.indent_with_tabs&&(q="\t",p=1),u=u.replace(/\\r/,"\r").replace(/\\n/,"\n");var v,w=/^\s+$/,x=-1,y=0,z=a.match(/^[\t ]*/)[0],A=new Array(p+1).join(q),B=0,C=0,D={};D["{"]=function(a){D.singleSpace(),E.push(a),D.newLine()},D["}"]=function(a){D.newLine(),E.push(a),D.newLine()},D._lastCharWhitespace=function(){return w.test(E[E.length-1])},D.newLine=function(a){E.length&&(a||"\n"===E[E.length-1]||D.trim(),E.push("\n"),z&&E.push(z))},D.singleSpace=function(){E.length&&!D._lastCharWhitespace()&&E.push(" ")},D.preserveSingleSpace=function(){L&&D.singleSpace()},D.trim=function(){for(;D._lastCharWhitespace();)E.pop()};for(var E=[],F=!1,G=!1,H=!1,I="",J="";;){var K=h(),L=""!==K,M=-1!==K.indexOf("\n");if(J=I,I=v,!v)break;if("/"===v&&"*"===d()){var N=0===B;(M||N)&&D.newLine(),E.push(i()),D.newLine(),N&&D.newLine(!0)}else if("/"===v&&"/"===d())M||"{"===J||D.trim(),D.singleSpace(),E.push(i()),D.newLine();else if("@"===v){D.preserveSingleSpace(),E.push(v);var O=f(": ,;{}()[]/='\"");O.match(/[ :]$/)&&(c(),O=e(": ").replace(/\s$/,""),E.push(O),D.singleSpace()),O=O.replace(/\s$/,""),O in n&&(C+=1,O in o&&(H=!0))}else"#"===v&&"{"===d()?(D.preserveSingleSpace(),E.push(e("}"))):"{"===v?"}"===d(!0)?(g(),c(),D.singleSpace(),E.push("{}"),D.newLine(),t&&0===B&&D.newLine(!0)):(l(),D["{"](v),H?(H=!1,F=B>C):F=B>=C):"}"===v?(m(),D["}"](v),F=!1,G=!1,C&&C--,t&&0===B&&D.newLine(!0)):":"===v?(g(),!F&&!H||j("&")||k()?":"===d()?(c(),E.push("::")):E.push(":"):(G=!0,E.push(":"),D.singleSpace())):'"'===v||"'"===v?(D.preserveSingleSpace(),E.push(e(v))):";"===v?(G=!1,E.push(v),D.newLine()):"("===v?j("url")?(E.push(v),g(),c()&&(")"!==v&&'"'!==v&&"'"!==v?E.push(e(")")):x--)):(y++,D.preserveSingleSpace(),E.push(v),g()):")"===v?(E.push(v),y--):","===v?(E.push(v),g(),r&&!G&&y<1?D.newLine():D.singleSpace()):"]"===v?E.push(v):"["===v?(D.preserveSingleSpace(),E.push(v)):"="===v?(g(),v="=",E.push(v)):(D.preserveSingleSpace(),E.push(v))}var P="";return z&&(P+=z),P+=E.join("").replace(/[\r\n\t ]+$/,""),s&&(P+="\n"),"\n"!=u&&(P=P.replace(/[\n]/g,u)),P}function c(a,b){for(var c=0;c<b.length;c+=1)if(b[c]===a)return!0;return!1}function d(a){return a.replace(/^\s+|\s+$/g,"")}function e(a){return a.replace(/^\s+/g,"")}function f(a,b){return new g(a,b).beautify()}function g(a,b){function f(a,b){var c=0;return a&&(c=a.indentation_level,!R.just_added_newline()&&a.line_indent_level>c&&(c=a.line_indent_level)),{mode:b,parent:a,last_text:a?a.last_text:"",last_word:a?a.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:c,line_indent_level:a?a.line_indent_level:c,start_line_index:R.get_line_number(),ternary_depth:0}}function g(a){var b=a.newlines;if(ba.keep_array_indentation&&t(Y.mode))for(c=0;c<b;c+=1)n(c>0);else if(ba.max_preserve_newlines&&b>ba.max_preserve_newlines&&(b=ba.max_preserve_newlines),ba.preserve_newlines&&a.newlines>1){n();for(var c=1;c<b;c+=1)n(!0)}U=a,aa[U.type]()}function h(a){a=a.replace(/\x0d/g,"");for(var b=[],c=a.indexOf("\n");-1!==c;)b.push(a.substring(0,c)),a=a.substring(c+1),c=a.indexOf("\n");return a.length&&b.push(a),b}function m(a){if(a=void 0!==a&&a,!R.just_added_newline())if(ba.preserve_newlines&&U.wanted_newline||a)n(!1,!0);else if(ba.wrap_line_length){var b=R.current_line.get_character_count()+U.text.length+(R.space_before_token?1:0);b>=ba.wrap_line_length&&n(!1,!0)}}function n(a,b){if(!b&&";"!==Y.last_text&&","!==Y.last_text&&"="!==Y.last_text&&"TK_OPERATOR"!==V)for(;Y.mode===l.Statement&&!Y.if_block&&!Y.do_block;)v();R.add_new_line(a)&&(Y.multiline_frame=!0)}function o(){R.just_added_newline()&&(ba.keep_array_indentation&&t(Y.mode)&&U.wanted_newline?(R.current_line.push(U.whitespace_before),R.space_before_token=!1):R.set_indent(Y.indentation_level)&&(Y.line_indent_level=Y.indentation_level))}function p(a){if(R.raw)return void R.add_raw_token(U);ba.comma_first&&"TK_COMMA"===V&&R.just_added_newline()&&","===R.previous_line.last()&&(R.previous_line.pop(),o(),R.add_token(","),R.space_before_token=!0),a=a||U.text,o(),R.add_token(a)}function q(){Y.indentation_level+=1}function r(){Y.indentation_level>0&&(!Y.parent||Y.indentation_level>Y.parent.indentation_level)&&(Y.indentation_level-=1)}function s(a){Y?($.push(Y),Z=Y):Z=f(null,a),Y=f(Z,a)}function t(a){return a===l.ArrayLiteral}function u(a){return c(a,[l.Expression,l.ForInitializer,l.Conditional])}function v(){$.length>0&&(Z=Y,Y=$.pop(),Z.mode===l.Statement&&R.remove_redundant_indentation(Z))}function w(){return Y.parent.mode===l.ObjectLiteral&&Y.mode===l.Statement&&(":"===Y.last_text&&0===Y.ternary_depth||"TK_RESERVED"===V&&c(Y.last_text,["get","set"]))}function x(){return!!("TK_RESERVED"===V&&c(Y.last_text,["var","let","const"])&&"TK_WORD"===U.type||"TK_RESERVED"===V&&"do"===Y.last_text||"TK_RESERVED"===V&&"return"===Y.last_text&&!U.wanted_newline||"TK_RESERVED"===V&&"else"===Y.last_text&&("TK_RESERVED"!==U.type||"if"!==U.text)||"TK_END_EXPR"===V&&(Z.mode===l.ForInitializer||Z.mode===l.Conditional)||"TK_WORD"===V&&Y.mode===l.BlockStatement&&!Y.in_case&&"--"!==U.text&&"++"!==U.text&&"function"!==W&&"TK_WORD"!==U.type&&"TK_RESERVED"!==U.type||Y.mode===l.ObjectLiteral&&(":"===Y.last_text&&0===Y.ternary_depth||"TK_RESERVED"===V&&c(Y.last_text,["get","set"])))&&(s(l.Statement),q(),"TK_RESERVED"===V&&c(Y.last_text,["var","let","const"])&&"TK_WORD"===U.type&&(Y.declaration_statement=!0),w()||m("TK_RESERVED"===U.type&&c(U.text,["do","for","if","while"])),!0)}function y(a,b){for(var c=0;c<a.length;c++){if(d(a[c]).charAt(0)!==b)return!1}return!0}function z(a,b){for(var c,d=0,e=a.length;d<e;d++)if((c=a[d])&&0!==c.indexOf(b))return!1;return!0}function A(a){return c(a,["case","return","do","if","throw","else"])}function B(a){var b=S+(a||0);return b<0||b>=ca.length?null:ca[b]}function C(){x();var a=l.Expression;if("["===U.text){if("TK_WORD"===V||")"===Y.last_text)return"TK_RESERVED"===V&&c(Y.last_text,T.line_starters)&&(R.space_before_token=!0),s(a),p(),q(),void(ba.space_in_paren&&(R.space_before_token=!0));a=l.ArrayLiteral,t(Y.mode)&&("["!==Y.last_text&&(","!==Y.last_text||"]"!==W&&"}"!==W)||ba.keep_array_indentation||n())}else"TK_RESERVED"===V&&"for"===Y.last_text?a=l.ForInitializer:"TK_RESERVED"===V&&c(Y.last_text,["if","while"])&&(a=l.Conditional);";"===Y.last_text||"TK_START_BLOCK"===V?n():"TK_END_EXPR"===V||"TK_START_EXPR"===V||"TK_END_BLOCK"===V||"."===Y.last_text?m(U.wanted_newline):"TK_RESERVED"===V&&"("===U.text||"TK_WORD"===V||"TK_OPERATOR"===V?"TK_RESERVED"===V&&("function"===Y.last_word||"typeof"===Y.last_word)||"*"===Y.last_text&&"function"===W?ba.space_after_anon_function&&(R.space_before_token=!0):"TK_RESERVED"!==V||!c(Y.last_text,T.line_starters)&&"catch"!==Y.last_text||ba.space_before_conditional&&(R.space_before_token=!0):R.space_before_token=!0,"("===U.text&&"TK_RESERVED"===V&&"await"===Y.last_word&&(R.space_before_token=!0),"("===U.text&&("TK_EQUALS"!==V&&"TK_OPERATOR"!==V||w()||m()),s(a),p(),ba.space_in_paren&&(R.space_before_token=!0),q()}function D(){for(;Y.mode===l.Statement;)v();Y.multiline_frame&&m("]"===U.text&&t(Y.mode)&&!ba.keep_array_indentation),ba.space_in_paren&&("TK_START_EXPR"!==V||ba.space_in_empty_paren?R.space_before_token=!0:(R.trim(),R.space_before_token=!1)),"]"===U.text&&ba.keep_array_indentation?(p(),v()):(v(),p()),R.remove_redundant_indentation(Z),Y.do_while&&Z.mode===l.Conditional&&(Z.mode=l.Expression,Y.do_block=!1,Y.do_while=!1)}function E(){var a=B(1),b=B(2);s(b&&(":"===b.text&&c(a.type,["TK_STRING","TK_WORD","TK_RESERVED"])||c(a.text,["get","set"])&&c(b.type,["TK_WORD","TK_RESERVED"]))?c(W,["class","interface"])?l.BlockStatement:l.ObjectLiteral:l.BlockStatement);var d=!a.comments_before.length&&"}"===a.text,e=d&&"function"===Y.last_word&&"TK_END_EXPR"===V;"expand"===ba.brace_style||"none"===ba.brace_style&&U.wanted_newline?"TK_OPERATOR"!==V&&(e||"TK_EQUALS"===V||"TK_RESERVED"===V&&A(Y.last_text)&&"else"!==Y.last_text)?R.space_before_token=!0:n(!1,!0):"TK_OPERATOR"!==V&&"TK_START_EXPR"!==V?"TK_START_BLOCK"===V?n():R.space_before_token=!0:t(Z.mode)&&","===Y.last_text&&("}"===W?R.space_before_token=!0:n()),p(),q()}function F(){for(;Y.mode===l.Statement;)v();var a="TK_START_BLOCK"===V;"expand"===ba.brace_style?a||n():a||(t(Y.mode)&&ba.keep_array_indentation?(ba.keep_array_indentation=!1,n(),ba.keep_array_indentation=!0):n()),v(),p()}function G(){if("TK_RESERVED"===U.type&&Y.mode!==l.ObjectLiteral&&c(U.text,["set","get"])&&(U.type="TK_WORD"),"TK_RESERVED"===U.type&&Y.mode===l.ObjectLiteral){":"==B(1).text&&(U.type="TK_WORD")}if(x()||!U.wanted_newline||u(Y.mode)||"TK_OPERATOR"===V&&"--"!==Y.last_text&&"++"!==Y.last_text||"TK_EQUALS"===V||!ba.preserve_newlines&&"TK_RESERVED"===V&&c(Y.last_text,["var","let","const","set","get"])||n(),Y.do_block&&!Y.do_while){if("TK_RESERVED"===U.type&&"while"===U.text)return R.space_before_token=!0,p(),R.space_before_token=!0,void(Y.do_while=!0);n(),Y.do_block=!1}if(Y.if_block)if(Y.else_block||"TK_RESERVED"!==U.type||"else"!==U.text){for(;Y.mode===l.Statement;)v();Y.if_block=!1,Y.else_block=!1}else Y.else_block=!0;if("TK_RESERVED"===U.type&&("case"===U.text||"default"===U.text&&Y.in_case_statement))return n(),(Y.case_body||ba.jslint_happy)&&(r(),Y.case_body=!1),p(),Y.in_case=!0,void(Y.in_case_statement=!0);if("TK_RESERVED"===U.type&&"function"===U.text&&((c(Y.last_text,["}",";"])||R.just_added_newline()&&!c(Y.last_text,["[","{",":","=",","]))&&(R.just_added_blankline()||U.comments_before.length||(n(),n(!0))),"TK_RESERVED"===V||"TK_WORD"===V?"TK_RESERVED"===V&&c(Y.last_text,["get","set","new","return","export","async"])?R.space_before_token=!0:"TK_RESERVED"===V&&"default"===Y.last_text&&"export"===W?R.space_before_token=!0:n():"TK_OPERATOR"===V||"="===Y.last_text?R.space_before_token=!0:(Y.multiline_frame||!u(Y.mode)&&!t(Y.mode))&&n()),"TK_COMMA"!==V&&"TK_START_EXPR"!==V&&"TK_EQUALS"!==V&&"TK_OPERATOR"!==V||w()||m(),"TK_RESERVED"===U.type&&c(U.text,["function","get","set"]))return p(),void(Y.last_word=U.text);if(_="NONE","TK_END_BLOCK"===V?"TK_RESERVED"===U.type&&c(U.text,["else","catch","finally"])?"expand"===ba.brace_style||"end-expand"===ba.brace_style||"none"===ba.brace_style&&U.wanted_newline?_="NEWLINE":(_="SPACE",R.space_before_token=!0):_="NEWLINE":"TK_SEMICOLON"===V&&Y.mode===l.BlockStatement?_="NEWLINE":"TK_SEMICOLON"===V&&u(Y.mode)?_="SPACE":"TK_STRING"===V?_="NEWLINE":"TK_RESERVED"===V||"TK_WORD"===V||"*"===Y.last_text&&"function"===W?_="SPACE":"TK_START_BLOCK"===V?_="NEWLINE":"TK_END_EXPR"===V&&(R.space_before_token=!0,_="NEWLINE"),"TK_RESERVED"===U.type&&c(U.text,T.line_starters)&&")"!==Y.last_text&&(_="else"===Y.last_text||"export"===Y.last_text?"SPACE":"NEWLINE"),"TK_RESERVED"===U.type&&c(U.text,["else","catch","finally"]))if("TK_END_BLOCK"!==V||"expand"===ba.brace_style||"end-expand"===ba.brace_style||"none"===ba.brace_style&&U.wanted_newline)n();else{R.trim(!0);var a=R.current_line;"}"!==a.last()&&n(),R.space_before_token=!0}else"NEWLINE"===_?"TK_RESERVED"===V&&A(Y.last_text)?R.space_before_token=!0:"TK_END_EXPR"!==V?"TK_START_EXPR"===V&&"TK_RESERVED"===U.type&&c(U.text,["var","let","const"])||":"===Y.last_text||("TK_RESERVED"===U.type&&"if"===U.text&&"else"===Y.last_text?R.space_before_token=!0:n()):"TK_RESERVED"===U.type&&c(U.text,T.line_starters)&&")"!==Y.last_text&&n():Y.multiline_frame&&t(Y.mode)&&","===Y.last_text&&"}"===W?n():"SPACE"===_&&(R.space_before_token=!0);p(),Y.last_word=U.text,"TK_RESERVED"===U.type&&"do"===U.text&&(Y.do_block=!0),"TK_RESERVED"===U.type&&"if"===U.text&&(Y.if_block=!0)}function H(){for(x()&&(R.space_before_token=!1);Y.mode===l.Statement&&!Y.if_block&&!Y.do_block;)v();p()}function I(){x()?R.space_before_token=!0:"TK_RESERVED"===V||"TK_WORD"===V?R.space_before_token=!0:"TK_COMMA"===V||"TK_START_EXPR"===V||"TK_EQUALS"===V||"TK_OPERATOR"===V?w()||m():n(),p()}function J(){x(),Y.declaration_statement&&(Y.declaration_assignment=!0),R.space_before_token=!0,p(),R.space_before_token=!0}function K(){if(Y.declaration_statement)return u(Y.parent.mode)&&(Y.declaration_assignment=!1),p(),void(Y.declaration_assignment?(Y.declaration_assignment=!1,n(!1,!0)):(R.space_before_token=!0,ba.comma_first&&m()));p(),Y.mode===l.ObjectLiteral||Y.mode===l.Statement&&Y.parent.mode===l.ObjectLiteral?(Y.mode===l.Statement&&v(),n()):(R.space_before_token=!0,ba.comma_first&&m())}function L(){if(x(),"TK_RESERVED"===V&&A(Y.last_text))return R.space_before_token=!0,void p();if("*"===U.text&&"TK_DOT"===V)return void p();if(":"===U.text&&Y.in_case)return Y.case_body=!0,q(),p(),n(),void(Y.in_case=!1);if("::"===U.text)return void p();"TK_OPERATOR"===V&&m();var a=!0,b=!0;c(U.text,["--","++","!","~"])||c(U.text,["-","+"])&&(c(V,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||c(Y.last_text,T.line_starters)||","===Y.last_text)?(a=!1,b=!1,!U.wanted_newline||"--"!==U.text&&"++"!==U.text||n(!1,!0),";"===Y.last_text&&u(Y.mode)&&(a=!0),"TK_RESERVED"===V?a=!0:"TK_END_EXPR"===V?a=!("]"===Y.last_text&&("--"===U.text||"++"===U.text)):"TK_OPERATOR"===V&&(a=c(U.text,["--","-","++","+"])&&c(Y.last_text,["--","-","++","+"]),c(U.text,["+","-"])&&c(Y.last_text,["--","++"])&&(b=!0)),Y.mode!==l.BlockStatement&&Y.mode!==l.Statement||"{"!==Y.last_text&&";"!==Y.last_text||n()):":"===U.text?0===Y.ternary_depth?a=!1:Y.ternary_depth-=1:"?"===U.text?Y.ternary_depth+=1:"*"===U.text&&"TK_RESERVED"===V&&"function"===Y.last_text&&(a=!1,b=!1),R.space_before_token=R.space_before_token||a,p(),R.space_before_token=b}function M(){if(R.raw)return R.add_raw_token(U),void(U.directives&&"end"===U.directives.preserve&&(ba.test_output_raw||(R.raw=!1)));if(U.directives)return n(!1,!0),p(),"start"===U.directives.preserve&&(R.raw=!0),void n(!1,!0);if(!k.newline.test(U.text)&&!U.wanted_newline)return R.space_before_token=!0,p(),void(R.space_before_token=!0);var a,b=h(U.text),c=!1,d=!1,f=U.whitespace_before,g=f.length;for(n(!1,!0),b.length>1&&(y(b.slice(1),"*")?c=!0:z(b.slice(1),f)&&(d=!0)),p(b[0]),a=1;a<b.length;a++)n(!1,!0),c?p(" "+e(b[a])):d&&b[a].length>g?p(b[a].substring(g)):R.add_token(b[a]);n(!1,!0)}function N(){U.wanted_newline?n(!1,!0):R.trim(!0),R.space_before_token=!0,p(),n(!1,!0)}function O(){x(),"TK_RESERVED"===V&&A(Y.last_text)?R.space_before_token=!0:m(")"===Y.last_text&&ba.break_chained_methods),p()}function P(){p(),"\n"===U.text[U.text.length-1]&&n()}function Q(){for(;Y.mode===l.Statement;)v()}var R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca=[],da="";for(aa={TK_START_EXPR:C,TK_END_EXPR:D,TK_START_BLOCK:E,TK_END_BLOCK:F,TK_WORD:G,TK_RESERVED:G,TK_SEMICOLON:H,TK_STRING:I,TK_EQUALS:J,TK_OPERATOR:L,TK_COMMA:K,TK_BLOCK_COMMENT:M,TK_COMMENT:N,TK_DOT:O,TK_UNKNOWN:P,TK_EOF:Q},b=b||{},ba={},void 0!==b.braces_on_own_line&&(ba.brace_style=b.braces_on_own_line?"expand":"collapse"),ba.brace_style=b.brace_style?b.brace_style:ba.brace_style?ba.brace_style:"collapse","expand-strict"===ba.brace_style&&(ba.brace_style="expand"),ba.indent_size=b.indent_size?parseInt(b.indent_size,10):4,ba.indent_char=b.indent_char?b.indent_char:" ",ba.eol=b.eol?b.eol:"\n",ba.preserve_newlines=void 0===b.preserve_newlines||b.preserve_newlines,ba.break_chained_methods=void 0!==b.break_chained_methods&&b.break_chained_methods,ba.max_preserve_newlines=void 0===b.max_preserve_newlines?0:parseInt(b.max_preserve_newlines,10),ba.space_in_paren=void 0!==b.space_in_paren&&b.space_in_paren,ba.space_in_empty_paren=void 0!==b.space_in_empty_paren&&b.space_in_empty_paren,ba.jslint_happy=void 0!==b.jslint_happy&&b.jslint_happy,ba.space_after_anon_function=void 0!==b.space_after_anon_function&&b.space_after_anon_function,ba.keep_array_indentation=void 0!==b.keep_array_indentation&&b.keep_array_indentation,ba.space_before_conditional=void 0===b.space_before_conditional||b.space_before_conditional,ba.unescape_strings=void 0!==b.unescape_strings&&b.unescape_strings,ba.wrap_line_length=void 0===b.wrap_line_length?0:parseInt(b.wrap_line_length,10),ba.e4x=void 0!==b.e4x&&b.e4x,ba.end_with_newline=void 0!==b.end_with_newline&&b.end_with_newline,ba.comma_first=void 0!==b.comma_first&&b.comma_first,ba.test_output_raw=void 0!==b.test_output_raw&&b.test_output_raw,ba.jslint_happy&&(ba.space_after_anon_function=!0),b.indent_with_tabs&&(ba.indent_char="\t",ba.indent_size=1),ba.eol=ba.eol.replace(/\\r/,"\r").replace(/\\n/,"\n"),X="";ba.indent_size>0;)X+=ba.indent_char,ba.indent_size-=1;var ea=0;if(a&&a.length){for(;" "===a.charAt(ea)||"\t"===a.charAt(ea);)da+=a.charAt(ea),ea+=1;a=a.substring(ea)}V="TK_START_BLOCK",W="",R=new i(X,da),R.raw=ba.test_output_raw,$=[],s(l.BlockStatement),this.beautify=function(){var b,c;for(T=new j(a,ba,X),ca=T.tokenize(),S=0;b=B();){for(var d=0;d<b.comments_before.length;d++)g(b.comments_before[d]);g(b),W=Y.last_text,V=b.type,Y.last_text=b.text,S+=1}return c=R.get_code(),ba.end_with_newline&&(c+="\n"),"\n"!=ba.eol&&(c=c.replace(/[\n]/g,ba.eol)),c}}function h(a){var b=0,c=-1,d=[],e=!0;this.set_indent=function(d){b=a.baseIndentLength+d*a.indent_length,c=d},this.get_character_count=function(){return b},this.is_empty=function(){return e},this.last=function(){return this._empty?null:d[d.length-1]},this.push=function(a){d.push(a),b+=a.length,e=!1},this.pop=function(){var a=null;return e||(a=d.pop(),b-=a.length,e=0===d.length),a},this.remove_indent=function(){c>0&&(c-=1,b-=a.indent_length)},this.trim=function(){for(;" "===this.last();){d.pop();b-=1}e=0===d.length},this.toString=function(){var b="";return this._empty||(c>=0&&(b=a.indent_cache[c]),b+=d.join("")),b}}function i(a,b){b=b||"",this.indent_cache=[b],this.baseIndentLength=b.length,this.indent_length=a.length,this.raw=!1;var c=[];this.baseIndentString=b,this.indent_string=a,this.previous_line=null,this.current_line=null,this.space_before_token=!1,this.add_outputline=function(){this.previous_line=this.current_line,this.current_line=new h(this),c.push(this.current_line)},this.add_outputline(),this.get_line_number=function(){return c.length},this.add_new_line=function(a){return(1!==this.get_line_number()||!this.just_added_newline())&&(!(!a&&this.just_added_newline())&&(this.raw||this.add_outputline(),!0))},this.get_code=function(){return c.join("\n").replace(/[\r\n\t ]+$/,"")},this.set_indent=function(a){if(c.length>1){for(;a>=this.indent_cache.length;)this.indent_cache.push(this.indent_cache[this.indent_cache.length-1]+this.indent_string);return this.current_line.set_indent(a),!0}return this.current_line.set_indent(0),!1},this.add_raw_token=function(a){for(var b=0;b<a.newlines;b++)this.add_outputline();this.current_line.push(a.whitespace_before),this.current_line.push(a.text),this.space_before_token=!1},this.add_token=function(a){this.add_space_before_token(),
this.current_line.push(a)},this.add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&this.current_line.push(" "),this.space_before_token=!1},this.remove_redundant_indentation=function(a){if(!a.multiline_frame&&a.mode!==l.ForInitializer&&a.mode!==l.Conditional)for(var b=a.start_line_index,d=c.length;b<d;)c[b].remove_indent(),b++},this.trim=function(d){for(d=void 0!==d&&d,this.current_line.trim(a,b);d&&c.length>1&&this.current_line.is_empty();)c.pop(),this.current_line=c[c.length-1],this.current_line.trim();this.previous_line=c.length>1?c[c.length-2]:null},this.just_added_newline=function(){return this.current_line.is_empty()},this.just_added_blankline=function(){if(this.just_added_newline()){if(1===c.length)return!0;return c[c.length-2].is_empty()}return!1}}function j(a,b,e){function f(a){if(!a.match(y))return null;var b={};z.lastIndex=0;for(var c=z.exec(a);c;)b[c[1]]=c[2],c=z.exec(a);return b}function g(){var e,g=[];if(p=0,q="",t>=u)return["","TK_EOF"];var y;y=s.length?s[s.length-1]:new m("TK_START_BLOCK","{");var z=a.charAt(t);for(t+=1;c(z,i);){if(k.newline.test(z)?"\n"===z&&"\r"===a.charAt(t-2)||(p+=1,g=[]):g.push(z),t>=u)return["","TK_EOF"];z=a.charAt(t),t+=1}if(g.length&&(q=g.join("")),j.test(z)){var C=!0,D=!0,E=j;for("0"===z&&t<u&&/[Xxo]/.test(a.charAt(t))?(C=!1,D=!1,z+=a.charAt(t),t+=1,E=/[o]/.test(a.charAt(t))?l:n):(z="",t-=1);t<u&&E.test(a.charAt(t));)z+=a.charAt(t),t+=1,C&&t<u&&"."===a.charAt(t)&&(z+=a.charAt(t),t+=1,C=!1),D&&t<u&&/[Ee]/.test(a.charAt(t))&&(z+=a.charAt(t),t+=1,t<u&&/[+-]/.test(a.charAt(t))&&(z+=a.charAt(t),t+=1),D=!1,C=!1);return[z,"TK_WORD"]}if(k.isIdentifierStart(a.charCodeAt(t-1))){if(t<u)for(;k.isIdentifierChar(a.charCodeAt(t))&&(z+=a.charAt(t),(t+=1)!==u););return"TK_DOT"===y.type||"TK_RESERVED"===y.type&&c(y.text,["set","get"])||!c(z,v)?[z,"TK_WORD"]:"in"===z?[z,"TK_OPERATOR"]:[z,"TK_RESERVED"]}if("("===z||"["===z)return[z,"TK_START_EXPR"];if(")"===z||"]"===z)return[z,"TK_END_EXPR"];if("{"===z)return[z,"TK_START_BLOCK"];if("}"===z)return[z,"TK_END_BLOCK"];if(";"===z)return[z,"TK_SEMICOLON"];if("/"===z){var F="";if("*"===a.charAt(t)){t+=1,w.lastIndex=t;var G=w.exec(a);F="/*"+G[0],t+=G[0].length;var H=f(F);return H&&"start"===H.ignore&&(A.lastIndex=t,G=A.exec(a),F+=G[0],t+=G[0].length),F=F.replace(k.lineBreak,"\n"),[F,"TK_BLOCK_COMMENT",H]}if("/"===a.charAt(t)){t+=1,x.lastIndex=t;var G=x.exec(a);return F="//"+G[0],t+=G[0].length,[F,"TK_COMMENT"]}}if("`"===z||"'"===z||'"'===z||("/"===z||b.e4x&&"<"===z&&a.slice(t-1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/))&&("TK_RESERVED"===y.type&&c(y.text,["return","case","throw","else","do","typeof","yield"])||"TK_END_EXPR"===y.type&&")"===y.text&&y.parent&&"TK_RESERVED"===y.parent.type&&c(y.parent.text,["if","while","for"])||c(y.type,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))){var I=z,J=!1,K=!1;if(e=z,"/"===I)for(var L=!1;t<u&&(J||L||a.charAt(t)!==I)&&!k.newline.test(a.charAt(t));)e+=a.charAt(t),J?J=!1:(J="\\"===a.charAt(t),"["===a.charAt(t)?L=!0:"]"===a.charAt(t)&&(L=!1)),t+=1;else if(b.e4x&&"<"===I){var M=/<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/g,N=a.slice(t-1),O=M.exec(N);if(O&&0===O.index){for(var P=O[2],Q=0;O;){var R=!!O[1],S=O[2],T=!!O[O.length-1]||"![CDATA["===S.slice(0,8);if(S!==P||T||(R?--Q:++Q),Q<=0)break;O=M.exec(N)}var U=O?O.index+O[0].length:N.length;return N=N.slice(0,U),t+=U-1,N=N.replace(k.lineBreak,"\n"),[N,"TK_STRING"]}}else for(;t<u&&(J||a.charAt(t)!==I&&("`"===I||!k.newline.test(a.charAt(t))));)(J||"`"===I)&&k.newline.test(a.charAt(t))?("\r"===a.charAt(t)&&"\n"===a.charAt(t+1)&&(t+=1),e+="\n"):e+=a.charAt(t),J?("x"!==a.charAt(t)&&"u"!==a.charAt(t)||(K=!0),J=!1):J="\\"===a.charAt(t),t+=1;if(K&&b.unescape_strings&&(e=h(e)),t<u&&a.charAt(t)===I&&(e+=I,t+=1,"/"===I))for(;t<u&&k.isIdentifierStart(a.charCodeAt(t));)e+=a.charAt(t),t+=1;return[e,"TK_STRING"]}if("#"===z){if(0===s.length&&"!"===a.charAt(t)){for(e=z;t<u&&"\n"!==z;)z=a.charAt(t),e+=z,t+=1;return[d(e)+"\n","TK_UNKNOWN"]}var V="#";if(t<u&&j.test(a.charAt(t))){do{z=a.charAt(t),V+=z,t+=1}while(t<u&&"#"!==z&&"="!==z);return"#"===z||("["===a.charAt(t)&&"]"===a.charAt(t+1)?(V+="[]",t+=2):"{"===a.charAt(t)&&"}"===a.charAt(t+1)&&(V+="{}",t+=2)),[V,"TK_WORD"]}}if("<"===z&&("?"===a.charAt(t)||"%"===a.charAt(t))){B.lastIndex=t-1;var W=B.exec(a);if(W)return z=W[0],t+=z.length-1,z=z.replace(k.lineBreak,"\n"),[z,"TK_STRING"]}if("<"===z&&"\x3c!--"===a.substring(t-1,t+3)){for(t+=3,z="\x3c!--";!k.newline.test(a.charAt(t))&&t<u;)z+=a.charAt(t),t++;return r=!0,[z,"TK_COMMENT"]}if("-"===z&&r&&"--\x3e"===a.substring(t-1,t+2))return r=!1,t+=2,["--\x3e","TK_COMMENT"];if("."===z)return[z,"TK_DOT"];if(c(z,o)){for(;t<u&&c(z+a.charAt(t),o)&&(z+=a.charAt(t),!((t+=1)>=u)););return","===z?[z,"TK_COMMA"]:"="===z?[z,"TK_EQUALS"]:[z,"TK_OPERATOR"]}return[z,"TK_UNKNOWN"]}function h(a){for(var b,c=!1,d="",e=0,f="",g=0;c||e<a.length;)if(b=a.charAt(e),e++,c){if(c=!1,"x"===b)f=a.substr(e,2),e+=2;else{if("u"!==b){d+="\\"+b;continue}f=a.substr(e,4),e+=4}if(!f.match(/^[0123456789abcdefABCDEF]+$/))return a;if((g=parseInt(f,16))>=0&&g<32){d+="x"===b?"\\x"+f:"\\u"+f;continue}if(34===g||39===g||92===g)d+="\\"+String.fromCharCode(g);else{if("x"===b&&g>126&&g<=255)return a;d+=String.fromCharCode(g)}}else"\\"===b?c=!0:d+=b;return d}var i="\n\r\t ".split(""),j=/[0-9]/,l=/[01234567]/,n=/[0123456789abcdefABCDEF]/,o="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: =>".split(" ");this.line_starters="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");var p,q,r,s,t,u,v=this.line_starters.concat(["do","in","else","get","set","new","catch","finally","typeof","yield","async","await"]),w=/([\s\S]*?)((?:\*\/)|$)/g,x=/([^\n\r\u2028\u2029]*)/g,y=/\/\* beautify( \w+[:]\w+)+ \*\//g,z=/ (\w+)[:](\w+)/g,A=/([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g,B=/((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;this.tokenize=function(){u=a.length,t=0,r=!1,s=[];for(var b,c,d,e=null,f=[],h=[];!c||"TK_EOF"!==c.type;){for(d=g(),b=new m(d[1],d[0],p,q);"TK_COMMENT"===b.type||"TK_BLOCK_COMMENT"===b.type||"TK_UNKNOWN"===b.type;)"TK_BLOCK_COMMENT"===b.type&&(b.directives=d[2]),h.push(b),d=g(),b=new m(d[1],d[0],p,q);h.length&&(b.comments_before=h,h=[]),"TK_START_BLOCK"===b.type||"TK_START_EXPR"===b.type?(b.parent=c,f.push(e),e=b):("TK_END_BLOCK"===b.type||"TK_END_EXPR"===b.type)&&e&&("]"===b.text&&"["===e.text||")"===b.text&&"("===e.text||"}"===b.text&&"{"===e.text)&&(b.parent=e.parent,e=f.pop()),s.push(b),c=b}return s}}var k={};!function(a){var b="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",c="\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f",d=new RegExp("["+b+"]"),e=new RegExp("["+b+c+"]");a.newline=/[\n\r\u2028\u2029]/,a.lineBreak=new RegExp("\r\n|"+a.newline.source),a.allLineBreaks=new RegExp(a.lineBreak.source,"g"),a.isIdentifierStart=function(a){return a<65?36===a||64===a:a<91||(a<97?95===a:a<123||a>=170&&d.test(String.fromCharCode(a)))},a.isIdentifierChar=function(a){return a<48?36===a:a<58||!(a<65)&&(a<91||(a<97?95===a:a<123||a>=170&&e.test(String.fromCharCode(a))))}}(k);var l={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"},m=function(a,b,c,d,e,f){this.type=a,this.text=b,this.comments_before=[],this.newlines=c||0,this.wanted_newline=c>0,this.whitespace_before=d||"",this.parent=null,this.directives=null};return{run:a}}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{codeMirror:window.CodeMirror,codeMirrorOptions:{lineNumbers:!0,tabMode:"indent",indentWithTabs:!0,lineWrapping:!0,mode:"text/html",tabSize:2},codeBeautifierOptions:{end_with_newline:!0,indent_inner_html:!0,extra_liners:["p","h1","h2","h3","h4","h5","h6","blockquote","pre","ul","ol","table","dl"],brace_style:"expand",indent_char:"\t",indent_size:1,wrap_line_length:0},codeViewKeepActiveButtons:["fullscreen"]}),a.FE.PLUGINS.codeView=function(b){function c(){return b.$box.hasClass("fr-code-view")}function d(){return l?l.getValue():k.val()}function e(a){var c=d();b.html.set(c),b.$el.blur(),b.$tb.find(" > .fr-command").not(a).removeClass("fr-disabled").attr("aria-disabled",!1),a.removeClass("fr-active").attr("aria-pressed",!1),b.events.focus(!0),b.placeholder.refresh(),b.undo.saveStep()}function f(c){k||(i(),!l&&b.opts.codeMirror?l=b.opts.codeMirror.fromTextArea(k.get(0),b.opts.codeMirrorOptions):b.events.$on(k,"keydown keyup change input",function(){b.opts.height?this.removeAttribute("rows"):(this.rows=1,0===this.value.length?this.style.height="auto":this.style.height=this.scrollHeight+"px")})),b.undo.saveStep(),b.html.cleanEmptyTags(),b.html.cleanWhiteTags(!0),b.core.hasFocus()&&(b.core.isEmpty()||(b.selection.save(),b.$el.find('.fr-marker[data-type="true"]:first').replaceWith('<span class="fr-tmp fr-sm">F</span>'),b.$el.find('.fr-marker[data-type="false"]:last').replaceWith('<span class="fr-tmp fr-em">F</span>')));var d=b.html.get(!1,!0);b.$el.find("span.fr-tmp").remove(),b.$box.toggleClass("fr-code-view",!0),b.core.hasFocus()&&b.$el.blur(),d=d.replace(/<span class="fr-tmp fr-sm">F<\/span>/,"FROALA-SM"),d=d.replace(/<span class="fr-tmp fr-em">F<\/span>/,"FROALA-EM"),b.codeBeautifier&&(d=b.codeBeautifier.run(d,b.opts.codeBeautifierOptions));var e,f;if(l){e=d.indexOf("FROALA-SM"),f=d.indexOf("FROALA-EM"),e>f?e=f:f-=9,d=d.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"");var g=d.substring(0,e).length-d.substring(0,e).replace(/\n/g,"").length,h=d.substring(0,f).length-d.substring(0,f).replace(/\n/g,"").length;e=d.substring(0,e).length-d.substring(0,d.substring(0,e).lastIndexOf("\n")+1).length,f=d.substring(0,f).length-d.substring(0,d.substring(0,f).lastIndexOf("\n")+1).length,l.setSize(null,b.opts.height?b.opts.height:"auto"),b.opts.heightMin&&b.$box.find(".CodeMirror-scroll").css("min-height",b.opts.heightMin),l.setValue(d),l.focus(),l.setSelection({line:g,ch:e},{line:h,ch:f}),l.refresh(),l.clearHistory()}else{e=d.indexOf("FROALA-SM"),f=d.indexOf("FROALA-EM")-9,b.opts.heightMin&&k.css("min-height",b.opts.heightMin),b.opts.height&&k.css("height",b.opts.height),b.opts.heightMax&&k.css("max-height",b.opts.height||b.opts.heightMax),k.val(d.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"")).trigger("change");var j=a(b.o_doc).scrollTop();k.focus(),k.get(0).setSelectionRange(e,f),a(b.o_doc).scrollTop(j)}b.$tb.find(" > .fr-command").not(c).filter(function(){return b.opts.codeViewKeepActiveButtons.indexOf(a(this).data("cmd"))<0}).addClass("fr-disabled").attr("aria-disabled",!0),c.addClass("fr-active").attr("aria-pressed",!0),!b.helpers.isMobile()&&b.opts.toolbarInline&&b.toolbar.hide()}function g(a){void 0===a&&(a=!c());var d=b.$tb.find('.fr-command[data-cmd="html"]');a?(b.popups.hideAll(),f(d)):(b.$box.toggleClass("fr-code-view",!1),e(d))}function h(){c()&&g(!1),l&&l.toTextArea(),k.val("").removeData().remove(),k=null,m&&(m.remove(),m=null)}function i(){k=a('<textarea class="fr-code" tabIndex="-1">'),b.$wp.append(k),k.attr("dir",b.opts.direction),b.$box.hasClass("fr-basic")||(m=a('<a data-cmd="html" title="Code View" class="fr-command fr-btn html-switch'+(b.helpers.isMobile()?"":" fr-desktop")+'" role="button" tabIndex="-1"><i class="fa fa-code"></i></button>'),b.$box.append(m),b.events.bindClick(b.$box,"a.html-switch",function(){g(!1)}));var e=function(){return!c()};b.events.on("buttons.refresh",e),b.events.on("copy",e,!0),b.events.on("cut",e,!0),b.events.on("paste",e,!0),b.events.on("destroy",h,!0),b.events.on("html.set",function(){c()&&g(!0)}),b.events.on("form.submit",function(){c()&&(b.html.set(d()),b.events.trigger("contentChanged",[],!0))},!0)}function j(){if(!b.$wp)return!1}var k,l,m;return{_init:j,toggle:g,isActive:c,get:d}},a.FE.RegisterCommand("html",{title:"Code View",undo:!1,focus:!1,forcedRefresh:!0,toggle:!0,callback:function(){this.codeView.toggle()},plugin:"codeView"}),a.FE.DefineIcon("html",{NAME:"code"})});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.POPUP_TEMPLATES,{"colors.picker":"[_BUTTONS_][_TEXT_COLORS_][_BACKGROUND_COLORS_]"}),a.extend(a.FE.DEFAULTS,{colorsText:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsBackground:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsStep:7,colorsDefaultTab:"text",colorsButtons:["colorsBack","|","-"]}),a.FE.PLUGINS.colors=function(b){function c(){var a=b.$tb.find('.fr-command[data-cmd="color"]'),c=b.popups.get("colors.picker");if(c||(c=e()),!c.hasClass("fr-active"))if(b.popups.setContainer("colors.picker",b.$tb),i(c.find(".fr-selected-tab").attr("data-param1")),a.is(":visible")){var d=a.offset().left+a.outerWidth()/2,f=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("colors.picker",d,f,a.outerHeight())}else b.position.forSelection(c),b.popups.show("colors.picker")}function d(){b.popups.hide("colors.picker")}function e(){var a='<div class="fr-buttons fr-colors-buttons">';b.opts.toolbarInline&&b.opts.colorsButtons.length>0&&(a+=b.button.buildList(b.opts.colorsButtons)),a+=f()+"</div>";var c={buttons:a,text_colors:g("text"),background_colors:g("background")},d=b.popups.create("colors.picker",c);return h(d),d}function f(){var a='<div class="fr-colors-tabs fr-group">';return a+='<span class="fr-colors-tab '+("background"==b.opts.colorsDefaultTab?"":"fr-selected-tab ")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"!=b.opts.colorsDefaultTab)+'" data-param1="text" data-cmd="colorChangeSet" title="'+b.language.translate("Text")+'">'+b.language.translate("Text")+"</span>",(a+='<span class="fr-colors-tab '+("background"==b.opts.colorsDefaultTab?"fr-selected-tab ":"")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"==b.opts.colorsDefaultTab)+'" data-param1="background" data-cmd="colorChangeSet" title="'+b.language.translate("Background")+'">'+b.language.translate("Background")+"</span>")+"</div>"}function g(a){for(var c="text"==a?b.opts.colorsText:b.opts.colorsBackground,d='<div class="fr-color-set fr-'+a+"-color"+(b.opts.colorsDefaultTab==a||"text"!=b.opts.colorsDefaultTab&&"background"!=b.opts.colorsDefaultTab&&"text"==a?" fr-selected-set":"")+'">',e=0;e<c.length;e++)0!==e&&e%b.opts.colorsStep==0&&(d+="<br>"),"REMOVE"!=c[e]?d+='<span class="fr-command fr-select-color" style="background: '+c[e]+';" tabIndex="-1" aria-selected="false" role="button" data-cmd="'+a+'Color" data-param1="'+c[e]+'"><span class="fr-sr-only">'+b.language.translate("Color")+" "+c[e]+"&nbsp;&nbsp;&nbsp;</span></span>":d+='<span class="fr-command fr-select-color" data-cmd="'+a+'Color" tabIndex="-1" role="button" data-param1="REMOVE" title="'+b.language.translate("Clear Formatting")+'">'+b.icon.create("remove")+'<span class="fr-sr-only">'+b.language.translate("Clear Formatting")+"</span></span>";return d+"</div>"}function h(c){b.events.on("popup.tab",function(d){var e=a(d.currentTarget);if(!b.popups.isVisible("colors.picker")||!e.is("span"))return!0;var f=d.which,g=!0;if(a.FE.KEYCODE.TAB==f){var h=c.find(".fr-buttons");g=!b.accessibility.focusToolbar(h,!!d.shiftKey)}else if(a.FE.KEYCODE.ARROW_UP==f||a.FE.KEYCODE.ARROW_DOWN==f||a.FE.KEYCODE.ARROW_LEFT==f||a.FE.KEYCODE.ARROW_RIGHT==f){if(e.is("span.fr-select-color")){var i=e.parent().find("span.fr-select-color"),j=i.index(e),k=b.opts.colorsStep,l=Math.floor(i.length/k),m=j%k,n=Math.floor(j/k),o=n*k+m,p=l*k;a.FE.KEYCODE.ARROW_UP==f?o=((o-k)%p+p)%p:a.FE.KEYCODE.ARROW_DOWN==f?o=(o+k)%p:a.FE.KEYCODE.ARROW_LEFT==f?o=((o-1)%p+p)%p:a.FE.KEYCODE.ARROW_RIGHT==f&&(o=(o+1)%p);var q=a(i.get(o));b.events.disableBlur(),q.focus(),g=!1}}else a.FE.KEYCODE.ENTER==f&&(b.button.exec(e),g=!1);return!1===g&&(d.preventDefault(),d.stopPropagation()),g},!0)}function i(c){var d,e=b.popups.get("colors.picker"),f=a(b.selection.element());d="background"==c?"background-color":"color";var g=e.find(".fr-"+c+"-color .fr-select-color");for(g.find(".fr-selected-color").remove(),g.removeClass("fr-active-item"),g.not('[data-param1="REMOVE"]').attr("aria-selected",!1);f.get(0)!=b.el;){if("transparent"!=f.css(d)&&"rgba(0, 0, 0, 0)"!=f.css(d)){var h=e.find(".fr-"+c+'-color .fr-select-color[data-param1="'+b.helpers.RGBToHex(f.css(d))+'"]');h.append('<span class="fr-selected-color" aria-hidden="true">\uf00c</span>'),h.addClass("fr-active-item").attr("aria-selected",!0);break}f=f.parent()}}function j(a,c){a.hasClass("fr-selected-tab")||(a.siblings().removeClass("fr-selected-tab").attr("aria-pressed",!1),a.addClass("fr-selected-tab").attr("aria-pressed",!0),a.parents(".fr-popup").find(".fr-color-set").removeClass("fr-selected-set"),a.parents(".fr-popup").find(".fr-color-set.fr-"+c+"-color").addClass("fr-selected-set"),i(c)),b.accessibility.focusPopup(a.parents(".fr-popup"))}function k(a){"REMOVE"!=a?b.format.applyStyle("background-color",b.helpers.HEXtoRGB(a)):b.format.removeStyle("background-color"),d()}function l(a){"REMOVE"!=a?b.format.applyStyle("color",b.helpers.HEXtoRGB(a)):b.format.removeStyle("color"),d()}function m(){b.popups.hide("colors.picker"),b.toolbar.showInline()}return{showColorsPopup:c,hideColorsPopup:d,changeSet:j,background:k,text:l,back:m}},a.FE.DefineIcon("colors",{NAME:"tint"}),a.FE.RegisterCommand("color",{title:"Colors",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("colors.picker")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("colors.picker")):this.colors.showColorsPopup()},plugin:"colors"}),a.FE.RegisterCommand("textColor",{undo:!0,callback:function(a,b){this.colors.text(b)}}),a.FE.RegisterCommand("backgroundColor",{undo:!0,callback:function(a,b){this.colors.background(b)}}),a.FE.RegisterCommand("colorChangeSet",{undo:!1,focus:!1,callback:function(a,b){var c=this.popups.get("colors.picker").find('.fr-command[data-cmd="'+a+'"][data-param1="'+b+'"]');this.colors.changeSet(c,b)}}),a.FE.DefineIcon("colorsBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("colorsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.colors.back()}}),a.FE.DefineIcon("remove",{NAME:"eraser"})});

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{dragInline:!0}),a.FE.PLUGINS.draggable=function(b){function c(c){return!(!c.originalEvent||!c.originalEvent.target||c.originalEvent.target.nodeType!=Node.TEXT_NODE)||(c.target&&"A"==c.target.tagName&&1==c.target.childNodes.length&&"IMG"==c.target.childNodes[0].tagName&&(c.target=c.target.childNodes[0]),a(c.target).hasClass("fr-draggable")?(b.undo.canDo()||b.undo.saveStep(),b.opts.dragInline?b.$el.attr("contenteditable",!0):b.$el.attr("contenteditable",!1),b.opts.toolbarInline&&b.toolbar.hide(),a(c.target).addClass("fr-dragging"),b.browser.msie||b.browser.edge||b.selection.clear(),void c.originalEvent.dataTransfer.setData("text","Froala")):(c.preventDefault(),!1))}function d(a){return!(a&&("HTML"==a.tagName||"BODY"==a.tagName||b.node.isElement(a)))}function e(a,c,d){b.opts.iframe&&(a+=b.$iframe.offset().top,c+=b.$iframe.offset().left),n.offset().top!=a&&n.css("top",a),n.offset().left!=c&&n.css("left",c),n.width()!=d&&n.css("width",d)}function f(c){var f=b.doc.elementFromPoint(c.originalEvent.pageX-b.win.pageXOffset,c.originalEvent.pageY-b.win.pageYOffset);if(!d(f)){for(var g=0,h=f;!d(h)&&h==f&&c.originalEvent.pageY-b.win.pageYOffset-g>0;)g++,h=b.doc.elementFromPoint(c.originalEvent.pageX-b.win.pageXOffset,c.originalEvent.pageY-b.win.pageYOffset-g);(!d(h)||n&&0===b.$el.find(h).length&&h!=n.get(0))&&(h=null);for(var i=0,j=f;!d(j)&&j==f&&c.originalEvent.pageY-b.win.pageYOffset+i<a(b.doc).height();)i++,j=b.doc.elementFromPoint(c.originalEvent.pageX-b.win.pageXOffset,c.originalEvent.pageY-b.win.pageYOffset+i);(!d(j)||n&&0===b.$el.find(j).length&&j!=n.get(0))&&(j=null),f=null==j&&h?h:j&&null==h?j:j&&h?g<i?h:j:null}if(a(f).hasClass("fr-drag-helper"))return!1;if(f&&!b.node.isBlock(f)&&(f=b.node.blockParent(f)),f&&["TD","TH","TR","THEAD","TBODY"].indexOf(f.tagName)>=0&&(f=a(f).parents("table").get(0)),f&&["LI"].indexOf(f.tagName)>=0&&(f=a(f).parents("UL, OL").get(0)),f&&!a(f).hasClass("fr-drag-helper")){n||(a.FE.$draggable_helper||(a.FE.$draggable_helper=a('<div class="fr-drag-helper"></div>')),n=a.FE.$draggable_helper,b.events.on("shared.destroy",function(){n.html("").removeData().remove(),n=null},!0));var k;k=c.originalEvent.pageY<a(f).offset().top+a(f).outerHeight()/2;var l=a(f),m=0;k||0!==l.next().length?(k||(l=l.next()),"before"==n.data("fr-position")&&l.is(n.data("fr-tag"))||(l.prev().length>0&&(m=parseFloat(l.prev().css("margin-bottom"))||0),m=Math.max(m,parseFloat(l.css("margin-top"))||0),e(l.offset().top-m/2-b.$box.offset().top,l.offset().left-b.win.pageXOffset-b.$box.offset().left,l.width()),n.data("fr-position","before"))):"after"==n.data("fr-position")&&l.is(n.data("fr-tag"))||(m=parseFloat(l.css("margin-bottom"))||0,e(l.offset().top+a(f).height()+m/2-b.$box.offset().top,l.offset().left-b.win.pageXOffset-b.$box.offset().left,l.width()),n.data("fr-position","after")),n.data("fr-tag",l),n.addClass("fr-visible"),n.appendTo(b.$box)}else n&&b.$box.find(n).length>0&&n.removeClass("fr-visible")}function g(a){a.originalEvent.dataTransfer.dropEffect="move",b.opts.dragInline?j()||!b.browser.msie&&!b.browser.edge||a.preventDefault():(a.preventDefault(),f(a))}function h(a){a.originalEvent.dataTransfer.dropEffect="move",b.opts.dragInline||a.preventDefault()}function i(a){b.$el.attr("contenteditable",!0);var c=b.$el.find(".fr-dragging");n&&n.hasClass("fr-visible")&&b.$box.find(n).length?k(a):c.length&&(a.preventDefault(),a.stopPropagation()),n&&b.$box.find(n).length&&n.removeClass("fr-visible"),c.removeClass("fr-dragging")}function j(){for(var b=null,c=0;c<a.FE.INSTANCES.length;c++)if(b=a.FE.INSTANCES[c].$el.find(".fr-dragging"),b.length)return b.get(0)}function k(c){for(var d,e,f=0;f<a.FE.INSTANCES.length;f++)if(d=a.FE.INSTANCES[f].$el.find(".fr-dragging"),d.length){e=a.FE.INSTANCES[f];break}if(d.length){if(c.preventDefault(),c.stopPropagation(),n&&n.hasClass("fr-visible")&&b.$box.find(n).length)n.data("fr-tag")[n.data("fr-position")]('<span class="fr-marker"></span>'),n.removeClass("fr-visible");else{if(!1===b.markers.insertAtPoint(c.originalEvent))return!1}d.removeClass("fr-dragging");var g=d;if(d.parent().is("A")&&(g=d.parent()),b.core.isEmpty())b.events.focus();else{b.$el.find(".fr-marker").replaceWith(a.FE.MARKERS),b.selection.restore()}if(e==b||b.undo.canDo()||b.undo.saveStep(),b.core.isEmpty())b.$el.html(g);else{var h=b.markers.insert();0===g.find(h).length?a(h).replaceWith(g):a(h).replaceWith(d),d.after(a.FE.MARKERS),b.selection.restore()}return b.popups.hideAll(),b.selection.save(),b.$el.find(b.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(),b.html.wrap(),b.html.fillEmptyBlocks(),b.selection.restore(),b.undo.saveStep(),b.opts.iframe&&b.size.syncIframe(),e!=b&&(e.popups.hideAll(),e.$el.find(e.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(),e.html.wrap(),e.html.fillEmptyBlocks(),e.undo.saveStep(),e.events.trigger("element.dropped"),e.opts.iframe&&e.size.syncIframe()),b.events.trigger("element.dropped",[g]),!1}n&&n.removeClass("fr-visible"),b.undo.canDo()||b.undo.saveStep(),setTimeout(function(){b.undo.saveStep()},0)}function l(a){if(a&&"DIV"==a.tagName&&b.node.hasClass(a,"fr-drag-helper"))a.parentNode.removeChild(a);else if(a&&a.nodeType==Node.ELEMENT_NODE)for(var c=a.querySelectorAll("div.fr-drag-helper"),d=0;d<c.length;d++)c[d].parentNode.removeChild(c[d])}function m(){b.opts.enter==a.FE.ENTER_BR&&(b.opts.dragInline=!0),b.events.on("dragstart",c,!0),b.events.on("dragover",g,!0),b.events.on("dragenter",h,!0),b.events.on("document.dragend",i,!0),b.events.on("document.drop",i,!0),b.events.on("drop",k,!0),b.events.on("html.processGet",l)}var n;return{_init:m}}});

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.FE.PLUGINS.fullscreen=function(b){function c(){return b.$box.hasClass("fr-fullscreen")}function d(){i=b.helpers.scrollTop(),b.$box.toggleClass("fr-fullscreen"),a("body:first").toggleClass("fr-fullscreen"),j=a('<div style="display: none;"></div>'),b.$box.after(j),b.helpers.isMobile()&&(b.$tb.data("parent",b.$tb.parent()),b.$tb.prependTo(b.$box),b.$tb.data("sticky-dummy")&&b.$tb.after(b.$tb.data("sticky-dummy"))),k=b.opts.height,l=b.opts.heightMax,m=b.opts.zIndex,b.opts.height=b.o_win.innerHeight-(b.opts.toolbarInline?0:b.$tb.outerHeight()),b.opts.zIndex=9990,b.opts.heightMax=null,b.size.refresh(),b.opts.toolbarInline&&b.toolbar.showInline();for(var c=b.$box.parent();!c.is("body:first");)c.data("z-index",c.css("z-index")).data("overflow",c.css("overflow")).css("z-index","9990").css("overflow","visible"),c=c.parent();b.events.trigger("charCounter.update"),b.$win.trigger("scroll")}function e(){b.$box.toggleClass("fr-fullscreen"),a("body:first").toggleClass("fr-fullscreen"),b.$tb.prependTo(b.$tb.data("parent")),b.$tb.data("sticky-dummy")&&b.$tb.after(b.$tb.data("sticky-dummy")),b.opts.height=k,b.opts.heightMax=l,b.opts.zIndex=m,b.size.refresh(),a(b.o_win).scrollTop(i),b.opts.toolbarInline&&b.toolbar.showInline(),b.events.trigger("charCounter.update"),b.opts.toolbarSticky&&b.opts.toolbarStickyOffset&&(b.opts.toolbarBottom?b.$tb.css("bottom",b.opts.toolbarStickyOffset).data("bottom",b.opts.toolbarStickyOffset):b.$tb.css("top",b.opts.toolbarStickyOffset).data("top",b.opts.toolbarStickyOffset));for(var c=b.$box.parent();!c.is("body:first");)c.data("z-index")&&(c.css("z-index",""),c.css("z-index")!=c.data("z-index")&&c.css("z-index",c.data("z-index")),c.removeData("z-index")),c.data("overflow")?(c.css("overflow",""),c.css("overflow")!=c.data("overflow")&&c.css("overflow",c.data("overflow")),c.removeData("overflow")):(c.css("overflow",""),c.removeData("overflow")),c=c.parent();b.$win.trigger("scroll")}function f(){c()?e():d(),g(b.$tb.find('.fr-command[data-cmd="fullscreen"]'))}function g(a){var d=c();a.toggleClass("fr-active",d).attr("aria-pressed",d),a.find("> *:not(.fr-sr-only)").replaceWith(d?b.icon.create("fullscreenCompress"):b.icon.create("fullscreen"))}function h(){if(!b.$wp)return!1;b.events.$on(a(b.o_win),"resize",function(){c()&&(e(),d())}),b.events.on("toolbar.hide",function(){if(c()&&b.helpers.isMobile())return!1}),b.events.on("destroy",function(){c()&&e()},!0)}var i,j,k,l,m;return{_init:h,toggle:f,refresh:g,isActive:c}},a.FE.RegisterCommand("fullscreen",{title:"Fullscreen",undo:!1,focus:!1,accessibilityFocus:!0,forcedRefresh:!0,toggle:!0,callback:function(){this.fullscreen.toggle()},refresh:function(a){this.fullscreen.refresh(a)},plugin:"fullscreen"}),a.FE.DefineIcon("fullscreen",{NAME:"expand"}),a.FE.DefineIcon("fullscreenCompress",{NAME:"compress"})});

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{helpSets:[{title:"Inline Editor",commands:[{val:"OSkeyE",desc:"Show the editor"}]},{title:"Common actions",commands:[{val:"OSkeyC",desc:"Copy"},{val:"OSkeyX",desc:"Cut"},{val:"OSkeyV",desc:"Paste"},{val:"OSkeyZ",desc:"Undo"},{val:"OSkeyShift+Z",desc:"Redo"},{val:"OSkeyK",desc:"Insert link"},{val:"OSkeyP",desc:"Insert image"}]},{title:"Basic Formatting",commands:[{val:"OSkeyA",desc:"Select all"},{val:"OSkeyB",desc:"Bold"},{val:"OSkeyI",desc:"Italic"},{val:"OSkeyU",desc:"Underline"},{val:"OSkeyS",desc:"Strikethrough"},{val:"OSkey]",desc:"Indent"},{val:"OSkey[",desc:"Outdent"}]},{title:"Quote",commands:[{val:"OSkey'",desc:"Increase quote level"},{val:"OSkeyShift+'",desc:"Decrease quote level"}]},{title:"Image / Video",commands:[{val:"OSkey+",desc:"Resize larger"},{val:"OSkey-",desc:"Resize smaller"}]},{title:"Table",commands:[{val:"Alt+Space",desc:"Select table cell"},{val:"Shift+Left/Right arrow",desc:"Extend selection one cell"},{val:"Shift+Up/Down arrow",desc:"Extend selection one row"}]},{title:"Navigation",commands:[{val:"OSkey/",desc:"Shortcuts"},{val:"Alt+F10",desc:"Focus popup / toolbar"},{val:"Esc",desc:"Return focus to previous position"}]}]}),a.FE.PLUGINS.help=function(b){function c(){}function d(){for(var c='<div class="fr-help-modal">',d=0;d<a.FE.DEFAULTS.helpSets.length;d++){var e=a.FE.DEFAULTS.helpSets[d],f="<table>";f+="<thead><tr><th>"+e.title+"</th></tr></thead>",f+="<tbody>";for(var g=0;g<e.commands.length;g++){var h=e.commands[g];f+="<tr>",f+="<td>"+h.desc+"</td>",f+="<td>"+h.val.replace("OSkey",b.helpers.isMac()?"&#8984;":"Ctrl+")+"</td>",f+="</tr>"}f+="</tbody></table>",c+=f}return c+="</div>"}function e(){if(!g){var c="<h4>Shortcuts</h4>",e=d(),f=b.modals.create(j,c,e);g=f.$modal,h=f.$head,i=f.$body,b.events.$on(a(b.o_win),"resize",function(){b.modals.resize(j)})}b.modals.show(j),b.modals.resize(j)}function f(){b.modals.hide(j)}var g,h,i,j="help";return{_init:c,show:e,hide:f}},a.FroalaEditor.DefineIcon("help",{NAME:"question"}),a.FE.RegisterShortcut(a.FE.KEYCODE.SLASH,"help",null,"/"),a.FE.RegisterCommand("help",{title:"Help",icon:"help",undo:!1,focus:!1,modal:!0,callback:function(){this.help.show()},plugin:"help",showOnMobile:!1})});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.POPUP_TEMPLATES,{"image.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_BY_URL_LAYER_][_PROGRESS_BAR_]","image.edit":"[_BUTTONS_]","image.alt":"[_BUTTONS_][_ALT_LAYER_]","image.size":"[_BUTTONS_][_SIZE_LAYER_]"}),a.extend(a.FE.DEFAULTS,{imageInsertButtons:["imageBack","|","imageUpload","imageByURL"],imageEditButtons:["imageReplace","imageAlign","imageRemove","|","imageLink","linkOpen","linkEdit","linkRemove","-","imageDisplay","imageStyle","imageAlt","imageSize"],imageAltButtons:["imageBack","|"],imageSizeButtons:["imageBack","|"],imageUploadURL:"https://i.froala.com/upload",imageUploadParam:"file",imageUploadParams:{},imageUploadToS3:!1,imageUploadMethod:"POST",imageMaxSize:10485760,imageAllowedTypes:["jpeg","jpg","png","gif","svg+xml"],imageResize:!0,imageResizeWithPercent:!1,imageRoundPercent:!1,imageDefaultWidth:300,imageDefaultAlign:"center",imageDefaultDisplay:"block",imageSplitHTML:!1,imageStyles:{"fr-rounded":"Rounded","fr-bordered":"Bordered"},imageMove:!0,imageMultipleStyles:!0,imageTextNear:!0,imagePaste:!0,imagePasteProcess:!1,imageMinWidth:16,imageOutputSize:!1,imageDefaultMargin:5}),a.FE.PLUGINS.image=function(b){function c(){var a=b.popups.get("image.insert"),c=a.find(".fr-image-by-url-layer input");c.val(""),xa&&c.val(xa.attr("src")),c.trigger("change")}function d(){var a=b.$tb.find('.fr-command[data-cmd="insertImage"]'),c=b.popups.get("image.insert");if(c||(c=L()),s(),!c.hasClass("fr-active"))if(b.popups.refresh("image.insert"),b.popups.setContainer("image.insert",b.$tb),a.is(":visible")){var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("image.insert",d,e,a.outerHeight())}else b.position.forSelection(c),b.popups.show("image.insert")}function e(){var a=b.popups.get("image.edit");if(a||(a=q()),a){b.popups.setContainer("image.edit",b.$sc),b.popups.refresh("image.edit");var c=xa.offset().left+xa.outerWidth()/2,d=xa.offset().top+xa.outerHeight();b.popups.show("image.edit",c,d,xa.outerHeight())}}function f(){s()}function g(a){a.hasClass("fr-dii")||a.hasClass("fr-dib")||(a.addClass("fr-fi"+ma(a)[0]),a.addClass("fr-di"+na(a)[0]),a.css("margin",""),a.css("float",""),a.css("display",""),a.css("z-index",""),a.css("position",""),a.css("overflow",""),a.css("vertical-align",""))}function h(a){ka(a,a.hasClass("fr-dib")?"block":a.hasClass("fr-dii")?"inline":null,a.hasClass("fr-fil")?"left":a.hasClass("fr-fir")?"right":ma(a)),a.removeClass("fr-dib fr-dii fr-fir fr-fil")}function i(){for(var c="IMG"==b.el.tagName?[b.el]:b.el.querySelectorAll("img"),d=0;d<c.length;d++){var e=a(c[d]);!b.opts.htmlUntouched&&b.opts.useClasses?((b.opts.imageEditButtons.indexOf("imageAlign")>=0||b.opts.imageEditButtons.indexOf("imageDisplay")>=0)&&g(e),b.opts.imageTextNear||e.removeClass("fr-dii").addClass("fr-dib")):b.opts.htmlUntouched||b.opts.useClasses||(b.opts.imageEditButtons.indexOf("imageAlign")>=0||b.opts.imageEditButtons.indexOf("imageDisplay")>=0)&&h(e),b.opts.iframe&&e.on("load",b.size.syncIframe)}}function j(c){void 0===c&&(c=!0);var d,e=Array.prototype.slice.call(b.el.querySelectorAll("img")),f=[];for(d=0;d<e.length;d++)f.push(e[d].getAttribute("src")),a(e[d]).toggleClass("fr-draggable",b.opts.imageMove),""===e[d].getAttribute("class")&&e[d].removeAttribute("class"),""===e[d].getAttribute("style")&&e[d].removeAttribute("style");if(Ka)for(d=0;d<Ka.length;d++)f.indexOf(Ka[d].getAttribute("src"))<0&&b.events.trigger("image.removed",[a(Ka[d])]);if(Ka&&c){var g=[];for(d=0;d<Ka.length;d++)g.push(Ka[d].getAttribute("src"));for(d=0;d<e.length;d++)g.indexOf(e[d].getAttribute("src"))<0&&b.events.trigger("image.loaded",[a(e[d])])}Ka=e}function k(){if(ya||Y(),!xa)return!1;var a=b.$wp||b.$sc;a.append(ya),ya.data("instance",b);var c=a.scrollTop()-("static"!=a.css("position")?a.offset().top:0),d=a.scrollLeft()-("static"!=a.css("position")?a.offset().left:0);d-=b.helpers.getPX(a.css("border-left-width")),c-=b.helpers.getPX(a.css("border-top-width")),b.$el.is("img")&&b.$sc.is("body")&&(c=0,d=0),ya.css("top",(b.opts.iframe?xa.offset().top:xa.offset().top+c)-1).css("left",(b.opts.iframe?xa.offset().left:xa.offset().left+d)-1).css("width",xa.get(0).getBoundingClientRect().width).css("height",xa.get(0).getBoundingClientRect().height).addClass("fr-active")}function l(a){return'<div class="fr-handler fr-h'+a+'"></div>'}function m(c){if(!b.core.sameInstance(ya))return!0;if(c.preventDefault(),c.stopPropagation(),b.$el.find("img.fr-error").left)return!1;b.undo.canDo()||b.undo.saveStep();var d=c.pageX||c.originalEvent.touches[0].pageX;if("mousedown"==c.type){var e=b.$oel.get(0),f=e.ownerDocument,g=f.defaultView||f.parentWindow,h=!1;try{h=g.location!=g.parent.location&&!(g.$&&g.$.FE)}catch(k){}h&&g.frameElement&&(d+=b.helpers.getPX(a(g.frameElement).offset().left)+g.frameElement.clientLeft)}za=a(this),za.data("start-x",d),za.data("start-width",xa.width()),za.data("start-height",xa.height());var i=xa.width();if(b.opts.imageResizeWithPercent){var j=xa.parentsUntil(b.$el,b.html.blockTagsQuery()).get(0)||b.el;xa.css("width",(i/a(j).outerWidth()*100).toFixed(2)+"%")}else xa.css("width",i);Aa.show(),b.popups.hideAll(),ia()}function n(c){if(!b.core.sameInstance(ya))return!0;var d;if(za&&xa){if(c.preventDefault(),b.$el.find("img.fr-error").left)return!1;var e=c.pageX||(c.originalEvent.touches?c.originalEvent.touches[0].pageX:null);if(!e)return!1;var f=za.data("start-x"),g=e-f,h=za.data("start-width");if((za.hasClass("fr-hnw")||za.hasClass("fr-hsw"))&&(g=0-g),b.opts.imageResizeWithPercent){var i=xa.parentsUntil(b.$el,b.html.blockTagsQuery()).get(0)||b.el;h=((h+g)/a(i).outerWidth()*100).toFixed(2),b.opts.imageRoundPercent&&(h=Math.round(h)),xa.css("width",h+"%"),d=(b.helpers.getPX(xa.css("width"))/a(i).outerWidth()*100).toFixed(2),d!==h&&xa.css("width",d+"%"),xa.css("height","").removeAttr("height")}else h+g>=b.opts.imageMinWidth&&xa.css("width",h+g),d=b.helpers.getPX(xa.css("width")),d!==h+g&&xa.css("width",d),(xa.attr("style")||"").match(/(^height:)|(; *height:)/)&&xa.css("height",za.data("start-height")*xa.width()/za.data("start-width"));k(),b.events.trigger("image.resize",[va()])}}function o(a){if(!b.core.sameInstance(ya))return!0;if(za&&xa){if(a&&a.stopPropagation(),b.$el.find("img.fr-error").left)return!1;za=null,Aa.hide(),k(),e(),b.undo.saveStep(),b.events.trigger("image.resizeEnd",[va()])}}function p(a,c,d){b.edit.on(),xa&&xa.addClass("fr-error"),u(b.language.translate("Something went wrong. Please try again.")),!xa&&d&&Z(d),b.events.trigger("image.error",[{code:a,message:Ja[a]},c,d])}function q(a){if(a)return b.$wp&&b.events.$on(b.$wp,"scroll",function(){xa&&b.popups.isVisible("image.edit")&&(b.events.disableBlur(),w(xa))}),!0;var c="";if(b.opts.imageEditButtons.length>0){c+='<div class="fr-buttons">',c+=b.button.buildList(b.opts.imageEditButtons),c+="</div>";var d={buttons:c};return b.popups.create("image.edit",d)}return!1}function r(a){var c=b.popups.get("image.insert");if(c||(c=L()),c.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),c.find(".fr-image-progress-bar-layer").addClass("fr-active"),c.find(".fr-buttons").hide(),xa){b.popups.setContainer("image.insert",b.$sc);var d=xa.offset().left+xa.width()/2,e=xa.offset().top+xa.height();b.popups.show("image.insert",d,e,xa.outerHeight())}void 0===a&&t(b.language.translate("Uploading"),0)}function s(a){var c=b.popups.get("image.insert");if(c&&(c.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),c.find(".fr-image-progress-bar-layer").removeClass("fr-active"),c.find(".fr-buttons").show(),a||b.$el.find("img.fr-error").length)){if(b.events.focus(),b.$el.find("img.fr-error").length&&(b.$el.find("img.fr-error").remove(),b.undo.saveStep(),b.undo.run(),b.undo.dropRedo()),!b.$wp&&xa){var d=xa;ga(!0),b.selection.setAfter(d.get(0)),b.selection.restore()}b.popups.hide("image.insert")}}function t(a,c){var d=b.popups.get("image.insert");if(d){var e=d.find(".fr-image-progress-bar-layer");e.find("h3").text(a+(c?" "+c+"%":"")),e.removeClass("fr-error"),c?(e.find("div").removeClass("fr-indeterminate"),e.find("div > span").css("width",c+"%")):e.find("div").addClass("fr-indeterminate")}}function u(a){r();var c=b.popups.get("image.insert"),d=c.find(".fr-image-progress-bar-layer");d.addClass("fr-error");var e=d.find("h3");e.text(a),b.events.disableBlur(),e.focus()}function v(){var a=b.popups.get("image.insert"),c=a.find(".fr-image-by-url-layer input");c.val().length>0&&(r(),t(b.language.translate("Loading image")),y(c.val(),!0,[],xa),c.val(""),c.blur())}function w(a){fa.call(a.get(0))}function x(){var c=a(this);b.popups.hide("image.insert"),c.removeClass("fr-uploading"),c.next().is("br")&&c.next().remove(),w(c),b.events.trigger("image.loaded",[c])}function y(a,c,d,e,f){b.edit.off(),t(b.language.translate("Loading image")),c&&(a=b.helpers.sanitizeURL(a));var g=new Image;g.onload=function(){var c,g;if(e){b.undo.canDo()||e.hasClass("fr-uploading")||b.undo.saveStep();var h=e.data("fr-old-src");e.data("fr-image-pasted")&&(h=null),b.$wp?(c=e.clone().removeData("fr-old-src").removeClass("fr-uploading").removeAttr("data-fr-image-pasted"),c.off("load"),h&&e.attr("src",h),e.replaceWith(c)):c=e;for(var i=c.get(0).attributes,k=0;k<i.length;k++){var l=i[k];0===l.nodeName.indexOf("data-")&&c.removeAttr(l.nodeName)}if(void 0!==d)for(g in d)d.hasOwnProperty(g)&&"link"!=g&&c.attr("data-"+g,d[g]);c.on("load",x),c.attr("src",a),b.edit.on(),j(!1),b.undo.saveStep(),b.$el.blur(),b.events.trigger(h?"image.replaced":"image.inserted",[c,f])}else c=E(a,d,x),j(!1),b.undo.saveStep(),b.$el.blur(),b.events.trigger("image.inserted",[c,f])},g.onerror=function(){p(Ca)},r(b.language.translate("Loading image")),g.src=a}function z(a){try{if(!1===b.events.trigger("image.uploaded",[a],!0))return b.edit.on(),!1;var c=JSON.parse(a);return c.link?c:(p(Da,a),!1)}catch(d){return p(Fa,a),!1}}function A(c){try{var d=a(c).find("Location").text(),e=a(c).find("Key").text();return!1===b.events.trigger("image.uploadedToS3",[d,e,c],!0)?(b.edit.on(),!1):d}catch(f){return p(Fa,c),!1}}function B(a){t(b.language.translate("Loading image"));var c=this.status,d=this.response,e=this.responseXML,f=this.responseText;try{if(b.opts.imageUploadToS3)if(201==c){var g=A(e);g&&y(g,!1,[],a,d||e)}else p(Fa,d||e,a);else if(c>=200&&c<300){var h=z(f);h&&y(h.link,!1,h,a,d||f)}else p(Ea,d||f,a)}catch(i){p(Fa,d||f,a)}}function C(){p(Fa,this.response||this.responseText||this.responseXML)}function D(a){if(a.lengthComputable){var c=a.loaded/a.total*100|0;t(b.language.translate("Uploading"),c)}}function E(c,d,e){var f,g="";if(d&&void 0!==d)for(f in d)d.hasOwnProperty(f)&&"link"!=f&&(g+=" data-"+f+'="'+d[f]+'"');var h=b.opts.imageDefaultWidth;h&&"auto"!=h&&(h+=b.opts.imageResizeWithPercent?"%":"px");var i=a('<img src="'+c+'"'+g+(h?' style="width: '+h+';"':"")+">");ka(i,b.opts.imageDefaultDisplay,b.opts.imageDefaultAlign),i.on("load",e),i.on("error",function(){p(Ia)}),b.edit.on(),b.events.focus(!0),b.selection.restore(),b.undo.saveStep(),b.opts.imageSplitHTML?b.markers.split():b.markers.insert();var j=b.$el.find(".fr-marker");return j.length?(j.parent().is("hr")&&j.parent().after(j),b.node.isLastSibling(j)&&j.parent().hasClass("fr-deletable")&&j.insertAfter(j.parent()),j.replaceWith(i)):b.$el.append(i),b.html.wrap(),b.selection.clear(),i}function F(){b.edit.on(),s(!0)}function G(c,d,e,f){function g(){var e=a(this);e.off("load"),e.addClass("fr-uploading"),e.next().is("br")&&e.next().remove(),b.placeholder.refresh(),w(e),k(),r(),b.edit.off(),c.onload=function(){B.call(c,e)},c.onerror=C,c.upload.onprogress=D,c.onabort=F,e.off("abortUpload").on("abortUpload",function(){4!=c.readyState&&c.abort()}),c.send(d)}var h,i=new FileReader;i.addEventListener("load",function(){var a=i.result;if(i.result.indexOf("svg+xml")<0){for(var c=atob(i.result.split(",")[1]),d=[],e=0;e<c.length;e++)d.push(c.charCodeAt(e));a=window.URL.createObjectURL(new Blob([new Uint8Array(d)],{type:"image/jpeg"}))}f?(f.on("load",g),f.one("error",function(){f.off("load"),f.attr("src",f.data("fr-old-src")),p(Ia)}),b.edit.on(),b.undo.saveStep(),f.data("fr-old-src",f.attr("src")),f.attr("src",a)):h=E(a,null,g)},!1),i.readAsDataURL(e)}function H(a,c){if(void 0!==a&&a.length>0){if(!1===b.events.trigger("image.beforeUpload",[a,c]))return!1;var d=a[0];if(d.name||(d.name=(new Date).getTime()+".jpg"),d.size>b.opts.imageMaxSize)return p(Ga),!1;if(b.opts.imageAllowedTypes.indexOf(d.type.replace(/image\//g,""))<0)return p(Ha),!1;var e;if(b.drag_support.formdata&&(e=b.drag_support.formdata?new FormData:null),e){var f;if(!1!==b.opts.imageUploadToS3){e.append("key",b.opts.imageUploadToS3.keyStart+(new Date).getTime()+"-"+(d.name||"untitled")),e.append("success_action_status","201"),e.append("X-Requested-With","xhr"),e.append("Content-Type",d.type);for(f in b.opts.imageUploadToS3.params)b.opts.imageUploadToS3.params.hasOwnProperty(f)&&e.append(f,b.opts.imageUploadToS3.params[f])}for(f in b.opts.imageUploadParams)b.opts.imageUploadParams.hasOwnProperty(f)&&e.append(f,b.opts.imageUploadParams[f]);e.append(b.opts.imageUploadParam,d,d.name);var g=b.opts.imageUploadURL;b.opts.imageUploadToS3&&(g=b.opts.imageUploadToS3.uploadURL?b.opts.imageUploadToS3.uploadURL:"https://"+b.opts.imageUploadToS3.region+".amazonaws.com/"+b.opts.imageUploadToS3.bucket);G(b.core.getXHR(g,b.opts.imageUploadMethod),e,d,c||xa)}}}function I(c){b.events.$on(c,"dragover dragenter",".fr-image-upload-layer",function(){return a(this).addClass("fr-drop"),!1}),b.events.$on(c,"dragleave dragend",".fr-image-upload-layer",function(){return a(this).removeClass("fr-drop"),!1}),b.events.$on(c,"drop",".fr-image-upload-layer",function(d){d.preventDefault(),d.stopPropagation(),a(this).removeClass("fr-drop");var e=d.originalEvent.dataTransfer;if(e&&e.files){var f=c.data("instance")||b;f.events.disableBlur(),f.image.upload(e.files),f.events.enableBlur()}}),b.helpers.isIOS()&&b.events.$on(c,"touchstart",'.fr-image-upload-layer input[type="file"]',function(){a(this).trigger("click")}),b.events.$on(c,"change",'.fr-image-upload-layer input[type="file"]',function(){if(this.files){var d=c.data("instance")||b;d.events.disableBlur(),c.find("input:focus").blur(),d.events.enableBlur(),d.image.upload(this.files,xa)}a(this).val("")})}function J(c){var d=c.originalEvent.dataTransfer;if(d&&d.files&&d.files.length){var e=d.files[0];if(e&&e.type&&-1!==e.type.indexOf("image")){b.markers.remove(),b.markers.insertAtPoint(c.originalEvent),b.$el.find(".fr-marker").replaceWith(a.FE.MARKERS),0===b.$el.find(".fr-marker").length&&b.selection.setAtEnd(b.el),b.popups.hideAll();var f=b.popups.get("image.insert");f||(f=L()),b.popups.setContainer("image.insert",b.$sc);var g=c.originalEvent.pageX,h=c.originalEvent.pageY;return b.opts.iframe&&(h+=b.$iframe.offset().top,g+=b.$iframe.offset().left),b.popups.show("image.insert",g,h),r(),b.opts.imageAllowedTypes.indexOf(e.type.replace(/image\//g,""))>=0?(ga(!0),H(d.files)):p(Ha),c.preventDefault(),c.stopPropagation(),!1}}}function K(){b.events.$on(b.$el,b._mousedown,"IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;b.helpers.isMobile()||b.selection.clear(),Ba=!0,b.popups.areVisible()&&b.events.disableBlur(),b.browser.msie&&(b.events.disableBlur(),b.$el.attr("contenteditable",!1)),b.draggable||"touchstart"==c.type||c.preventDefault(),c.stopPropagation()}),b.events.$on(b.$el,b._mouseup,"IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;Ba&&(Ba=!1,c.stopPropagation(),b.browser.msie&&(b.$el.attr("contenteditable",!0),b.events.enableBlur()))}),b.events.on("keyup",function(c){if(c.shiftKey&&""===b.selection.text().replace(/\n/g,"")){var d=b.selection.element(),e=b.selection.endElement();d&&"IMG"==d.tagName?w(a(d)):e&&"IMG"==e.tagName&&w(a(e))}},!0),b.events.on("drop",J),b.events.on("mousedown window.mousedown",ha),b.events.on("window.touchmove",ia),b.events.on("mouseup window.mouseup",function(){if(xa)return ga(),!1;ia()}),b.events.on("commands.mousedown",function(a){a.parents(".fr-toolbar").length>0&&ga()}),b.events.on("blur image.hideResizer commands.undo commands.redo element.dropped",function(){Ba=!1,ga(!0)}),b.events.on("modals.hide",function(){xa&&(ta(),b.selection.clear())})}function L(a){if(a)return b.popups.onRefresh("image.insert",c),b.popups.onHide("image.insert",f),!0;var d,e="";b.opts.imageInsertButtons.length>1&&(e='<div class="fr-buttons">'+b.button.buildList(b.opts.imageInsertButtons)+"</div>");var g=b.opts.imageInsertButtons.indexOf("imageUpload"),h=b.opts.imageInsertButtons.indexOf("imageByURL"),i="";g>=0&&(d=" fr-active",h>=0&&g>h&&(d=""),i='<div class="fr-image-upload-layer'+d+' fr-layer" id="fr-image-upload-layer-'+b.id+'"><strong>'+b.language.translate("Drop image")+"</strong><br>("+b.language.translate("or click")+')<div class="fr-form"><input type="file" accept="image/'+b.opts.imageAllowedTypes.join(", image/").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-image-upload-layer-'+b.id+'" role="button"></div></div>');var j="";h>=0&&(d=" fr-active",g>=0&&h>g&&(d=""),j='<div class="fr-image-by-url-layer'+d+' fr-layer" id="fr-image-by-url-layer-'+b.id+'"><div class="fr-input-line"><input id="fr-image-by-url-layer-text-'+b.id+'" type="text" placeholder="http://" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageInsertByURL" tabIndex="2" role="button">'+b.language.translate("Insert")+"</button></div></div>");var k='<div class="fr-image-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="imageDismissError" tabIndex="2" role="button">OK</button></div></div>',l={buttons:e,upload_layer:i,by_url_layer:j,progress_bar:k},m=b.popups.create("image.insert",l);return b.$wp&&b.events.$on(b.$wp,"scroll",function(){xa&&b.popups.isVisible("image.insert")&&sa()}),I(m),m}function M(){if(xa){b.popups.get("image.alt").find("input").val(xa.attr("alt")||"").trigger("change")}}function N(){var a=b.popups.get("image.alt");a||(a=O()),s(),b.popups.refresh("image.alt"),b.popups.setContainer("image.alt",b.$sc);var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.alt",c,d,xa.outerHeight())}function O(a){if(a)return b.popups.onRefresh("image.alt",M),!0;var c="";c='<div class="fr-buttons">'+b.button.buildList(b.opts.imageAltButtons)+"</div>";var d="";d='<div class="fr-image-alt-layer fr-layer fr-active" id="fr-image-alt-layer-'+b.id+'"><div class="fr-input-line"><input id="fr-image-alt-layer-text-'+b.id+'" type="text" placeholder="'+b.language.translate("Alternate Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetAlt" tabIndex="2" role="button">'+b.language.translate("Update")+"</button></div></div>";var e={buttons:c,alt_layer:d},f=b.popups.create("image.alt",e);return b.$wp&&b.events.$on(b.$wp,"scroll.image-alt",function(){xa&&b.popups.isVisible("image.alt")&&N()}),f}function P(a){if(xa){var c=b.popups.get("image.alt");xa.attr("alt",a||c.find("input").val()||""),c.find("input:focus").blur(),w(xa)}}function Q(){if(xa){var a=b.popups.get("image.size");a.find('input[name="width"]').val(xa.get(0).style.width).trigger("change"),a.find('input[name="height"]').val(xa.get(0).style.height).trigger("change")}}function R(){var a=b.popups.get("image.size");a||(a=S()),s(),b.popups.refresh("image.size"),b.popups.setContainer("image.size",b.$sc);var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.size",c,d,xa.outerHeight())}function S(a){if(a)return b.popups.onRefresh("image.size",Q),!0;var c="";c='<div class="fr-buttons">'+b.button.buildList(b.opts.imageSizeButtons)+"</div>";var d="";d='<div class="fr-image-size-layer fr-layer fr-active" id="fr-image-size-layer-'+b.id+'"><div class="fr-image-group"><div class="fr-input-line"><input id="fr-image-size-layer-width-'+b.id+'" type="text" name="width" placeholder="'+b.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input id="fr-image-size-layer-height'+b.id+'" type="text" name="height" placeholder="'+b.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetSize" tabIndex="2" role="button">'+b.language.translate("Update")+"</button></div></div>";var e={buttons:c,size_layer:d},f=b.popups.create("image.size",e);return b.$wp&&b.events.$on(b.$wp,"scroll.image-size",function(){xa&&b.popups.isVisible("image.size")&&R()}),f}function T(a,c){if(xa){var d=b.popups.get("image.size");a=a||d.find('input[name="width"]').val()||"",c=c||d.find('input[name="height"]').val()||"";var e=/^[\d]+((px)|%)*$/g;a.match(e)?xa.css("width",a):xa.css("width",""),c.match(e)?xa.css("height",c):xa.css("height",""),d.find("input:focus").blur(),w(xa)}}function U(a){var c,d,e=b.popups.get("image.insert");if(xa||b.opts.toolbarInline)xa&&(d=xa.offset().top+xa.outerHeight());else{var f=b.$tb.find('.fr-command[data-cmd="insertImage"]');c=f.offset().left+f.outerWidth()/2,d=f.offset().top+(b.opts.toolbarBottom?10:f.outerHeight()-10)}!xa&&b.opts.toolbarInline&&(d=e.offset().top-b.helpers.getPX(e.css("margin-top")),e.hasClass("fr-above")&&(d+=e.outerHeight())),e.find(".fr-layer").removeClass("fr-active"),e.find(".fr-"+a+"-layer").addClass("fr-active"),b.popups.show("image.insert",c,d,xa?xa.outerHeight():0),b.accessibility.focusPopup(e)}function V(a){b.popups.get("image.insert").find(".fr-image-upload-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function W(a){b.popups.get("image.insert").find(".fr-image-by-url-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function X(a,b,c,d){return a.pageX=b,m.call(this,a),a.pageX=a.pageX+c*Math.floor(Math.pow(1.1,d)),n.call(this,a),o.call(this,a),++d}function Y(){var c;if(b.shared.$image_resizer?(ya=b.shared.$image_resizer,Aa=b.shared.$img_overlay,b.events.on("destroy",function(){ya.removeClass("fr-active").appendTo(a("body:first"))},!0)):(b.shared.$image_resizer=a('<div class="fr-image-resizer"></div>'),ya=b.shared.$image_resizer,b.events.$on(ya,"mousedown",function(a){a.stopPropagation()},!0),b.opts.imageResize&&(ya.append(l("nw")+l("ne")+l("sw")+l("se")),b.shared.$img_overlay=a('<div class="fr-image-overlay"></div>'),Aa=b.shared.$img_overlay,c=ya.get(0).ownerDocument,a(c).find("body:first").append(Aa))),b.events.on("shared.destroy",function(){ya.html("").removeData().remove(),ya=null,b.opts.imageResize&&(Aa.remove(),Aa=null)},!0),b.helpers.isMobile()||b.events.$on(a(b.o_win),"resize",function(){xa&&!xa.hasClass("fr-uploading")?ga(!0):xa&&(k(),sa(),r(!1))}),b.opts.imageResize){c=ya.get(0).ownerDocument,b.events.$on(ya,b._mousedown,".fr-handler",m),b.events.$on(a(c),b._mousemove,n),b.events.$on(a(c.defaultView||c.parentWindow),b._mouseup,o),b.events.$on(Aa,"mouseleave",o);var d=1,e=null,f=0;b.events.on("keydown",function(c){if(xa){var g=-1!=navigator.userAgent.indexOf("Mac OS X")?c.metaKey:c.ctrlKey,h=c.which;(h!==e||c.timeStamp-f>200)&&(d=1),(h==a.FE.KEYCODE.EQUALS||b.browser.mozilla&&h==a.FE.KEYCODE.FF_EQUALS)&&g&&!c.altKey?d=X.call(this,c,1,1,d):(h==a.FE.KEYCODE.HYPHEN||b.browser.mozilla&&h==a.FE.KEYCODE.FF_HYPHEN)&&g&&!c.altKey?d=X.call(this,c,2,-1,d):b.keys.ctrlKey(c)||h!=a.FE.KEYCODE.ENTER||(xa.before("<br>"),w(xa)),e=h,f=c.timeStamp}},!0),b.events.on("keyup",function(){d=1})}}function Z(c){(c=c||xa)&&!1!==b.events.trigger("image.beforeRemove",[c])&&(b.popups.hideAll(),ta(),ga(!0),b.undo.canDo()||b.undo.saveStep(),c.get(0)==b.el?c.removeAttr("src"):("A"==c.get(0).parentNode.tagName?(b.selection.setBefore(c.get(0).parentNode)||b.selection.setAfter(c.get(0).parentNode)||c.parent().after(a.FE.MARKERS),a(c.get(0).parentNode).remove()):(b.selection.setBefore(c.get(0))||b.selection.setAfter(c.get(0))||c.after(a.FE.MARKERS),c.remove()),b.html.fillEmptyBlocks(),b.selection.restore()),b.undo.saveStep())}function $(c){var d=c.which;if(xa&&(d==a.FE.KEYCODE.BACKSPACE||d==a.FE.KEYCODE.DELETE))return c.preventDefault(),c.stopPropagation(),Z(),!1;if(xa&&d==a.FE.KEYCODE.ESC){var e=xa;return ga(!0),b.selection.setAfter(e.get(0)),b.selection.restore(),c.preventDefault(),!1}if(xa&&(d==a.FE.KEYCODE.ARROW_LEFT||d==a.FE.KEYCODE.ARROW_RIGHT)){var f=xa.get(0);return ga(!0),d==a.FE.KEYCODE.ARROW_LEFT?b.selection.setBefore(f):b.selection.setAfter(f),b.selection.restore(),c.preventDefault(),!1}return xa&&d!=a.FE.KEYCODE.F10&&!b.keys.isBrowserAction(c)?(c.preventDefault(),c.stopPropagation(),!1):void 0}function _(a){if(a&&"IMG"==a.tagName)b.node.hasClass(a,"fr-uploading")||b.node.hasClass(a,"fr-error")?a.parentNode.removeChild(a):b.node.hasClass(a,"fr-draggable")&&a.classList.remove("fr-draggable");else if(a&&a.nodeType==Node.ELEMENT_NODE)for(var c=a.querySelectorAll("img.fr-uploading, img.fr-error, img.fr-draggable"),d=0;d<c.length;d++)_(c[d])}function aa(){if(K(),"IMG"==b.el.tagName&&b.$el.addClass("fr-view"),b.events.$on(b.$el,b.helpers.isMobile()&&!b.helpers.isWindowsPhone()?"touchend":"click","IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',fa),b.helpers.isMobile()&&(b.events.$on(b.$el,"touchstart","IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(){La=!1}),b.events.$on(b.$el,"touchmove",function(){La=!0})),b.$wp?(b.events.on("window.keydown keydown",$,!0),b.events.on("keyup",function(b){if(xa&&b.which==a.FE.KEYCODE.ENTER)return!1},!0)):b.events.$on(b.$win,"keydown",$),b.events.on("toolbar.esc",function(){if(xa){if(b.$wp)b.events.disableBlur(),b.events.focus();else{var a=xa;ga(!0),b.selection.setAfter(a.get(0)),b.selection.restore()}return!1}},!0),b.events.on("toolbar.focusEditor",function(){if(xa)return!1},!0),b.events.on("window.cut window.copy",function(a){xa&&b.popups.isVisible("image.edit")&&!b.popups.get("image.edit").find(":focus").length&&(ta(),b.paste.saveCopiedText(xa.get(0).outerHTML,"\n"),"copy"==a.type?setTimeout(function(){w(xa)}):(ga(!0),b.undo.saveStep(),setTimeout(function(){b.undo.saveStep()},0)))},!0),b.browser.msie&&b.events.on("keydown",function(c){if(!b.selection.isCollapsed()||!xa)return!0;var d=c.which;d==a.FE.KEYCODE.C&&b.keys.ctrlKey(c)?b.events.trigger("window.copy"):d==a.FE.KEYCODE.X&&b.keys.ctrlKey(c)&&b.events.trigger("window.cut")}),b.events.$on(a(b.o_win),"keydown",function(b){var c=b.which;if(xa&&c==a.FE.KEYCODE.BACKSPACE)return b.preventDefault(),!1}),b.events.$on(b.$win,"keydown",function(b){var c=b.which;xa&&xa.hasClass("fr-uploading")&&c==a.FE.KEYCODE.ESC&&xa.trigger("abortUpload")}),b.events.on("destroy",function(){xa&&xa.hasClass("fr-uploading")&&xa.trigger("abortUpload")}),b.events.on("paste.before",da),b.events.on("paste.beforeCleanup",ea),b.events.on("paste.after",ca),b.events.on("html.set",i),b.events.on("html.inserted",i),i(),b.events.on("destroy",function(){Ka=[]}),b.events.on("html.processGet",_),b.opts.imageOutputSize){var c;b.events.on("html.beforeGet",function(){c=b.el.querySelectorAll("img");for(var d=0;d<c.length;d++){var e=c[d].style.width||a(c[d]).width(),f=c[d].style.height||a(c[d]).height();e&&c[d].setAttribute("width",(""+e).replace(/px/,"")),f&&c[d].setAttribute("height",(""+f).replace(/px/,""))}})}b.opts.iframe&&b.events.on("image.loaded",b.size.syncIframe),b.$wp&&(j(),b.events.on("contentChanged",j)),b.events.$on(a(b.o_win),"orientationchange.image",function(){setTimeout(function(){xa&&w(xa)},100)}),q(!0),L(!0),S(!0),O(!0),b.events.on("node.remove",function(a){if("IMG"==a.get(0).tagName)return Z(a),!1})}function ba(c){if(!1===b.events.trigger("image.beforePasteUpload",[c]))return!1;xa=a(c),k(),e(),sa(),r();for(var d=atob(a(c).attr("src").split(",")[1]),f=[],g=0;g<d.length;g++)f.push(d.charCodeAt(g));H([new Blob([new Uint8Array(f)],{type:"image/jpeg"})],xa)}function ca(){b.opts.imagePaste?b.$el.find("img[data-fr-image-pasted]").each(function(c,d){if(b.opts.imagePasteProcess){var e=b.opts.imageDefaultWidth;e&&"auto"!=e&&(e+=b.opts.imageResizeWithPercent?"%":"px"),a(d).css("width",e).removeClass("fr-dii fr-dib fr-fir fr-fil").addClass((b.opts.imageDefaultDisplay?"fr-di"+b.opts.imageDefaultDisplay[0]:"")+(b.opts.imageDefaultAlign&&"center"!=b.opts.imageDefaultAlign?" fr-fi"+b.opts.imageDefaultAlign[0]:""))}if(0===d.src.indexOf("data:"))ba(d);else if(0===d.src.indexOf("blob:")){var f=new Image;f.crossOrigin="Anonymous",f.onload=function(){var a=b.o_doc.createElement("CANVAS"),c=a.getContext("2d");a.height=this.naturalHeight,a.width=this.naturalWidth,c.drawImage(this,0,0),d.src=a.toDataURL("image/png"),ba(d)},f.src=d.src}else 0!==d.src.indexOf("http")||0===d.src.indexOf("https://mail.google.com/mail")?(b.selection.save(),a(d).remove(),b.selection.restore()):a(d).removeAttr("data-fr-image-pasted")}):b.$el.find("img[data-fr-image-pasted]").remove()}function da(a){if(a&&a.clipboardData&&a.clipboardData.items&&a.clipboardData.items[0]){var c=a.clipboardData.items[0].getAsFile();if(c){var d=new FileReader;return d.onload=function(a){var c=a.target.result,d=b.opts.imageDefaultWidth;d&&"auto"!=d&&(d+=b.opts.imageResizeWithPercent?"%":"px"),b.html.insert('<img data-fr-image-pasted="true" class="'+(b.opts.imageDefaultDisplay?"fr-di"+b.opts.imageDefaultDisplay[0]:"")+(b.opts.imageDefaultAlign&&"center"!=b.opts.imageDefaultAlign?" fr-fi"+b.opts.imageDefaultAlign[0]:"")+'" src="'+c+'"'+(d?' style="width: '+d+';"':"")+">"),b.events.trigger("paste.after")},d.readAsDataURL(c),!1}}}function ea(a){return a=a.replace(/<img /gi,'<img data-fr-image-pasted="true" ')}function fa(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;if(c&&"touchend"==c.type&&La)return!0;if(c&&b.edit.isDisabled())return c.stopPropagation(),c.preventDefault(),!1;for(var d=0;d<a.FE.INSTANCES.length;d++)a.FE.INSTANCES[d]!=b&&a.FE.INSTANCES[d].events.trigger("image.hideResizer");b.toolbar.disable(),c&&(c.stopPropagation(),c.preventDefault()),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur()),b.opts.iframe&&b.size.syncIframe(),xa=a(this),b.browser.msie||ta(),k(),e(),b.browser.msie||b.selection.clear(),b.helpers.isIOS()&&(b.events.disableBlur(),b.$el.blur()),b.button.bulkRefresh(),b.events.trigger("video.hideResizer")}function ga(a){xa&&(ja()||!0===a)&&(b.toolbar.enable(),ya.removeClass("fr-active"),b.popups.hide("image.edit"),xa=null,ia())}function ha(){Ma=!0}function ia(){Ma=!1}function ja(){return Ma}function ka(a,c,d){!b.opts.htmlUntouched&&b.opts.useClasses?(a.removeClass("fr-fil fr-fir fr-dib fr-dii"),d&&a.addClass("fr-fi"+d[0]),c&&a.addClass("fr-di"+c[0])):"inline"==c?(a.css({display:"inline-block",verticalAlign:"bottom",margin:b.opts.imageDefaultMargin}),"center"==d?a.css({float:"none",marginBottom:"",marginTop:"",maxWidth:"calc(100% - "+2*b.opts.imageDefaultMargin+"px)"}):"left"==d?a.css({float:"left",marginLeft:0,maxWidth:"calc(100% - "+b.opts.imageDefaultMargin+"px)"}):a.css({float:"right",marginRight:0,maxWidth:"calc(100% - "+b.opts.imageDefaultMargin+"px)"})):"block"==c&&(a.css({display:"block",float:"none",verticalAlign:"top",margin:b.opts.imageDefaultMargin+"px auto"}),"left"==d?a.css({marginLeft:0}):"right"==d&&a.css({marginRight:0}))}function la(a){xa.removeClass("fr-fir fr-fil"),!b.opts.htmlUntouched&&b.opts.useClasses?"left"==a?xa.addClass("fr-fil"):"right"==a&&xa.addClass("fr-fir"):ka(xa,na(),a),ta(),k(),e(),b.selection.clear()}function ma(a){
if(void 0===a&&(a=xa),a){if(a.hasClass("fr-fil"))return"left";if(a.hasClass("fr-fir"))return"right";if(a.hasClass("fr-dib")||a.hasClass("fr-dii"))return"center";var b=a.css("float");if(a.css("float","none"),"block"==a.css("display")){if(a.css("float",""),a.css("float")!=b&&a.css("float",b),0===parseInt(a.css("margin-left"),10))return"left";if(0===parseInt(a.css("margin-right"),10))return"right"}else{if(a.css("float",""),a.css("float")!=b&&a.css("float",b),"left"==a.css("float"))return"left";if("right"==a.css("float"))return"right"}}return"center"}function na(a){void 0===a&&(a=xa);var b=a.css("float");return a.css("float","none"),"block"==a.css("display")?(a.css("float",""),a.css("float")!=b&&a.css("float",b),"block"):(a.css("float",""),a.css("float")!=b&&a.css("float",b),"inline")}function oa(a){xa&&a.find("> *:first").replaceWith(b.icon.create("image-align-"+ma()))}function pa(a,b){xa&&b.find('.fr-command[data-param1="'+ma()+'"]').addClass("fr-active").attr("aria-selected",!0)}function qa(a){xa.removeClass("fr-dii fr-dib"),!b.opts.htmlUntouched&&b.opts.useClasses?"inline"==a?xa.addClass("fr-dii"):"block"==a&&xa.addClass("fr-dib"):ka(xa,a,ma()),ta(),k(),e(),b.selection.clear()}function ra(a,b){xa&&b.find('.fr-command[data-param1="'+na()+'"]').addClass("fr-active").attr("aria-selected",!0)}function sa(){var a=b.popups.get("image.insert");a||(a=L()),b.popups.isVisible("image.insert")||(s(),b.popups.refresh("image.insert"),b.popups.setContainer("image.insert",b.$sc));var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.insert",c,d,xa.outerHeight())}function ta(){if(xa){b.selection.clear();var a=b.doc.createRange();a.selectNode(xa.get(0));b.selection.get().addRange(a)}}function ua(){xa?(b.events.disableBlur(),a(".fr-popup input:focus").blur(),w(xa)):(b.events.disableBlur(),b.selection.restore(),b.events.enableBlur(),b.popups.hide("image.insert"),b.toolbar.showInline())}function va(){return xa}function wa(a,c,d){if(void 0===c&&(c=b.opts.imageStyles),void 0===d&&(d=b.opts.imageMultipleStyles),!xa)return!1;if(!d){var e=Object.keys(c);e.splice(e.indexOf(a),1),xa.removeClass(e.join(" "))}"object"==typeof c[a]?(xa.removeAttr("style"),xa.css(c[a].style)):xa.toggleClass(a),w(xa)}var xa,ya,za,Aa,Ba=!1,Ca=1,Da=2,Ea=3,Fa=4,Ga=5,Ha=6,Ia=8,Ja={};Ja[Ca]="Image cannot be loaded from the passed link.",Ja[Da]="No link in upload response.",Ja[Ea]="Error during file upload.",Ja[Fa]="Parsing response failed.",Ja[Ga]="File is too large.",Ja[Ha]="Image file type is invalid.",Ja[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",Ja[Ia]="Image file is corrupted.";var Ka,La,Ma=!1;return{_init:aa,showInsertPopup:d,showLayer:U,refreshUploadButton:V,refreshByURLButton:W,upload:H,insertByURL:v,align:la,refreshAlign:oa,refreshAlignOnShow:pa,display:qa,refreshDisplayOnShow:ra,replace:sa,back:ua,get:va,insert:y,showProgressBar:r,remove:Z,hideProgressBar:s,applyStyle:wa,showAltPopup:N,showSizePopup:R,setAlt:P,setSize:T,exitEdit:ga,edit:w}},a.FE.DefineIcon("insertImage",{NAME:"image"}),a.FE.RegisterShortcut(a.FE.KEYCODE.P,"insertImage",null,"P"),a.FE.RegisterCommand("insertImage",{title:"Insert Image",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("image.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("image.insert")):this.image.showInsertPopup()},plugin:"image"}),a.FE.DefineIcon("imageUpload",{NAME:"upload"}),a.FE.RegisterCommand("imageUpload",{title:"Upload Image",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-upload")},refresh:function(a){this.image.refreshUploadButton(a)}}),a.FE.DefineIcon("imageByURL",{NAME:"link"}),a.FE.RegisterCommand("imageByURL",{title:"By URL",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-by-url")},refresh:function(a){this.image.refreshByURLButton(a)}}),a.FE.RegisterCommand("imageInsertByURL",{title:"Insert Image",undo:!0,refreshAfterCallback:!1,callback:function(){this.image.insertByURL()},refresh:function(a){this.image.get()?a.text(this.language.translate("Replace")):a.text(this.language.translate("Insert"))}}),a.FE.DefineIcon("imageDisplay",{NAME:"star"}),a.FE.RegisterCommand("imageDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(a,b){this.image.display(b)},refresh:function(a){this.opts.imageTextNear||a.addClass("fr-hidden")},refreshOnShow:function(a,b){this.image.refreshDisplayOnShow(a,b)}}),a.FE.DefineIcon("image-align",{NAME:"align-left"}),a.FE.DefineIcon("image-align-left",{NAME:"align-left"}),a.FE.DefineIcon("image-align-right",{NAME:"align-right"}),a.FE.DefineIcon("image-align-center",{NAME:"align-justify"}),a.FE.DefineIcon("imageAlign",{NAME:"align-justify"}),a.FE.RegisterCommand("imageAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"None",right:"Align Right"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.imageAlign.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="imageAlign" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.icon.create("image-align-"+d)+'<span class="fr-sr-only">'+this.language.translate(c[d])+"</span></a></li>");return b+="</ul>"},callback:function(a,b){this.image.align(b)},refresh:function(a){this.image.refreshAlign(a)},refreshOnShow:function(a,b){this.image.refreshAlignOnShow(a,b)}}),a.FE.DefineIcon("imageReplace",{NAME:"exchange"}),a.FE.RegisterCommand("imageReplace",{title:"Replace",undo:!1,focus:!1,popup:!0,refreshAfterCallback:!1,callback:function(){this.image.replace()}}),a.FE.DefineIcon("imageRemove",{NAME:"trash"}),a.FE.RegisterCommand("imageRemove",{title:"Remove",callback:function(){this.image.remove()}}),a.FE.DefineIcon("imageBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("imageBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.image.back()},refresh:function(a){this.image.get()||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.RegisterCommand("imageDismissError",{title:"OK",undo:!1,callback:function(){this.image.hideProgressBar(!0)}}),a.FE.DefineIcon("imageStyle",{NAME:"magic"}),a.FE.RegisterCommand("imageStyle",{title:"Style",type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.imageStyles;for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];"object"==typeof d&&(d=d.title),a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="imageStyle" data-param1="'+c+'">'+this.language.translate(d)+"</a></li>"}return a+="</ul>"},callback:function(a,b){this.image.applyStyle(b)},refreshOnShow:function(b,c){var d=this.image.get();d&&c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=d.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}),a.FE.DefineIcon("imageAlt",{NAME:"info"}),a.FE.RegisterCommand("imageAlt",{undo:!1,focus:!1,popup:!0,title:"Alternate Text",callback:function(){this.image.showAltPopup()}}),a.FE.RegisterCommand("imageSetAlt",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setAlt()}}),a.FE.DefineIcon("imageSize",{NAME:"arrows-alt"}),a.FE.RegisterCommand("imageSize",{undo:!1,focus:!1,popup:!0,title:"Change Size",callback:function(){this.image.showSizePopup()}}),a.FE.RegisterCommand("imageSetSize",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setSize()}})});

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{lineBreakerTags:["table","hr","form","dl","span.fr-video"],lineBreakerOffset:15,lineBreakerHorizontalOffset:10}),a.FE.PLUGINS.lineBreaker=function(b){function c(a,c){var d,e,f,g,h,i,j,k;if(null==a)g=c.parent(),h=g.offset().top,j=c.offset().top,d=j-Math.min((j-h)/2,b.opts.lineBreakerOffset),f=g.outerWidth(),e=g.offset().left;else if(null==c)g=a.parent(),i=g.offset().top+g.outerHeight(),k=a.offset().top+a.outerHeight(),d=k+Math.min((i-k)/2,b.opts.lineBreakerOffset),f=g.outerWidth(),e=g.offset().left;else{g=a.parent();var l=a.offset().top+a.height(),m=c.offset().top;if(l>m)return!1;d=(l+m)/2,f=g.outerWidth(),e=g.offset().left}b.opts.iframe&&(e+=b.$iframe.offset().left-b.helpers.scrollLeft(),d+=b.$iframe.offset().top-b.helpers.scrollTop()),b.$box.append(q),q.css("top",d-b.win.pageYOffset),q.css("left",e-b.win.pageXOffset),q.css("width",f),q.data("tag1",a),q.data("tag2",c),q.addClass("fr-visible").data("instance",b)}function d(a,d){var f,g,h=a.offset().top,i=a.offset().top+a.outerHeight();if(Math.abs(i-d)<=b.opts.lineBreakerOffset||Math.abs(d-h)<=b.opts.lineBreakerOffset)if(Math.abs(i-d)<Math.abs(d-h)){g=a.get(0);for(var j=g.nextSibling;j&&j.nodeType==Node.TEXT_NODE&&0===j.textContent.length;)j=j.nextSibling;if(!j)return c(a,null),!0;if(f=e(j))return c(a,f),!0}else{if(g=a.get(0),!g.previousSibling)return c(null,a),!0;if(f=e(g.previousSibling))return c(f,a),!0}q.removeClass("fr-visible").removeData("instance")}function e(c){if(c){var d=a(c);if(0===b.$el.find(d).length)return null;if(c.nodeType!=Node.TEXT_NODE&&d.is(b.opts.lineBreakerTags.join(",")))return d;if(d.parents(b.opts.lineBreakerTags.join(",")).length>0)return c=d.parents(b.opts.lineBreakerTags.join(",")).get(0),0!==b.$el.find(c).length&&a(c).is(b.opts.lineBreakerTags.join(","))?a(c):null}return null}function f(c,d){var e=b.doc.elementFromPoint(c,d);return e&&!a(e).closest(".fr-line-breaker").length&&!b.node.isElement(e)&&e!=b.$wp.get(0)&&a(e).closest(b.$wp).length?e:null}function g(a,c,d){for(var e=d,g=null;e<=b.opts.lineBreakerOffset&&!g;)g=f(a,c-e),g||(g=f(a,c+e)),e+=d;return g}function h(a,c,d){for(var e=null;!e&&a>b.$box.offset().left&&a<b.$box.offset().left+b.$box.outerWidth();)e=f(a,c),e||(e=g(a,c,5)),"left"==d?a-=b.opts.lineBreakerHorizontalOffset:a+=b.opts.lineBreakerHorizontalOffset;return e}function i(a){s=null;var c=null,f=null,i=b.doc.elementFromPoint(a.pageX-b.win.pageXOffset,a.pageY-b.win.pageYOffset);i&&("HTML"==i.tagName||"BODY"==i.tagName||b.node.isElement(i)||(i.getAttribute("class")||"").indexOf("fr-line-breaker")>=0)?(f=g(a.pageX-b.win.pageXOffset,a.pageY-b.win.pageYOffset,1),f||(f=h(a.pageX-b.win.pageXOffset-b.opts.lineBreakerHorizontalOffset,a.pageY-b.win.pageYOffset,"left")),f||(f=h(a.pageX-b.win.pageXOffset+b.opts.lineBreakerHorizontalOffset,a.pageY-b.win.pageYOffset,"right")),c=e(f)):c=e(i),c?d(c,a.pageY):b.core.sameInstance(q)&&q.removeClass("fr-visible").removeData("instance")}function j(a){return!(q.hasClass("fr-visible")&&!b.core.sameInstance(q))&&(b.popups.areVisible()||b.el.querySelector(".fr-selected-cell")?(q.removeClass("fr-visible"),!0):void(!1!==r||b.edit.isDisabled()||(s&&clearTimeout(s),s=setTimeout(i,30,a))))}function k(){s&&clearTimeout(s),q.hasClass("fr-visible")&&q.removeClass("fr-visible").removeData("instance")}function l(){r=!0,k()}function m(){r=!1}function n(c){if(!b.core.sameInstance(q))return!0;c.preventDefault(),q.removeClass("fr-visible").removeData("instance");var d=q.data("tag1"),e=q.data("tag2"),f=b.html.defaultTag();null==d?f&&"TD"!=e.parent().get(0).tagName&&0===e.parents(f).length?e.before("<"+f+">"+a.FE.MARKERS+"<br></"+f+">"):e.before(a.FE.MARKERS+"<br>"):f&&"TD"!=d.parent().get(0).tagName&&0===d.parents(f).length?d.after("<"+f+">"+a.FE.MARKERS+"<br></"+f+">"):d.after(a.FE.MARKERS+"<br>"),b.selection.restore()}function o(){b.shared.$line_breaker||(b.shared.$line_breaker=a('<div class="fr-line-breaker"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+b.language.translate("Break")+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="21" y="11" width="2" height="8"/><rect x="14" y="17" width="7" height="2"/><path d="M14.000,14.000 L14.000,22.013 L9.000,18.031 L14.000,14.000 Z"/></svg></a></div>')),q=b.shared.$line_breaker,b.events.on("shared.destroy",function(){q.html("").removeData().remove(),q=null},!0),b.events.on("destroy",function(){q.removeData("instance").removeClass("fr-visible").appendTo("body:first"),clearTimeout(s)},!0),b.events.$on(q,"mousemove",function(a){a.stopPropagation()},!0),b.events.$on(q,"mousedown","a",function(a){a.stopPropagation()},!0),b.events.$on(q,"click","a",n,!0)}function p(){if(!b.$wp)return!1;o(),r=!1,b.events.$on(b.$win,"mousemove",j),b.events.$on(a(b.win),"scroll",k),b.events.on("popups.show.table.edit",k),b.events.on("commands.after",k),b.events.$on(a(b.win),"mousedown",l),b.events.$on(a(b.win),"mouseup",m)}var q,r,s;return{_init:p}}});

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.POPUP_TEMPLATES,{"link.edit":"[_BUTTONS_]","link.insert":"[_BUTTONS_][_INPUT_LAYER_]"}),a.extend(a.FE.DEFAULTS,{linkEditButtons:["linkOpen","linkStyle","linkEdit","linkRemove"],linkInsertButtons:["linkBack","|","linkList"],linkAttributes:{},linkAutoPrefix:"http://",linkStyles:{"fr-green":"Green","fr-strong":"Thick"},linkMultipleStyles:!0,linkConvertEmailAddress:!0,linkAlwaysBlank:!1,linkAlwaysNoFollow:!1,linkList:[{text:"Froala",href:"https://froala.com",target:"_blank"},{text:"Google",href:"https://google.com",target:"_blank"},{displayText:"Facebook",href:"https://facebook.com"}],linkText:!0}),a.FE.PLUGINS.link=function(b){function c(){var c=b.image?b.image.get():null;if(!c&&b.$wp){var d=b.selection.ranges(0).commonAncestorContainer;if(d&&(d.contains&&d.contains(b.el)||!b.el.contains(d)||b.el==d)&&(d=null),d&&"A"===d.tagName)return d;var e=b.selection.element(),f=b.selection.endElement();return"A"==e.tagName||b.node.isElement(e)||(e=a(e).parentsUntil(b.$el,"a:first").get(0)),"A"==f.tagName||b.node.isElement(f)||(f=a(f).parentsUntil(b.$el,"a:first").get(0)),f&&(f.contains&&f.contains(b.el)||!b.el.contains(f)||b.el==f)&&(f=null),e&&(e.contains&&e.contains(b.el)||!b.el.contains(e)||b.el==e)&&(e=null),f&&f==e&&"A"==f.tagName?e:null}return"A"==b.el.tagName?b.el:c&&c.get(0).parentNode&&"A"==c.get(0).parentNode.tagName?c.get(0).parentNode:void 0}function d(){var a=b.image?b.image.get():null,c=[];if(a)"A"==a.get(0).parentNode.tagName&&c.push(a.get(0).parentNode);else{var d,e,f,g;if(b.win.getSelection){var h=b.win.getSelection();if(h.getRangeAt&&h.rangeCount){g=b.doc.createRange();for(var i=0;i<h.rangeCount;++i)if(d=h.getRangeAt(i),e=d.commonAncestorContainer,e&&1!=e.nodeType&&(e=e.parentNode),e&&"a"==e.nodeName.toLowerCase())c.push(e);else{f=e.getElementsByTagName("a");for(var j=0;j<f.length;++j)g.selectNodeContents(f[j]),g.compareBoundaryPoints(d.END_TO_START,d)<1&&g.compareBoundaryPoints(d.START_TO_END,d)>-1&&c.push(f[j])}}}else if(b.doc.selection&&"Control"!=b.doc.selection.type)if(d=b.doc.selection.createRange(),e=d.parentElement(),"a"==e.nodeName.toLowerCase())c.push(e);else{f=e.getElementsByTagName("a"),g=b.doc.body.createTextRange();for(var k=0;k<f.length;++k)g.moveToElementText(f[k]),g.compareEndPoints("StartToEnd",d)>-1&&g.compareEndPoints("EndToStart",d)<1&&c.push(f[k])}}return c}function e(d){if(b.core.hasFocus()){if(g(),d&&"keyup"===d.type&&(d.altKey||d.which==a.FE.KEYCODE.ALT))return!0;setTimeout(function(){if(!d||d&&(1==d.which||"mouseup"!=d.type)){var e=c(),g=b.image?b.image.get():null;if(e&&!g){if(b.image){var h=b.node.contents(e);if(1==h.length&&"IMG"==h[0].tagName){var i=b.selection.ranges(0);return 0===i.startOffset&&0===i.endOffset?a(e).before(a.FE.MARKERS):a(e).after(a.FE.MARKERS),b.selection.restore(),!1}}d&&d.stopPropagation(),f(e)}}},b.helpers.isIOS()?100:0)}}function f(c){var d=b.popups.get("link.edit");d||(d=h());var e=a(c);b.popups.isVisible("link.edit")||b.popups.refresh("link.edit"),b.popups.setContainer("link.edit",b.$sc);var f=e.offset().left+a(c).outerWidth()/2,g=e.offset().top+e.outerHeight();b.popups.show("link.edit",f,g,e.outerHeight())}function g(){b.popups.hide("link.edit")}function h(){var a="";b.opts.linkEditButtons.length>1&&("A"==b.el.tagName&&b.opts.linkEditButtons.indexOf("linkRemove")>=0&&b.opts.linkEditButtons.splice(b.opts.linkEditButtons.indexOf("linkRemove"),1),a='<div class="fr-buttons">'+b.button.buildList(b.opts.linkEditButtons)+"</div>");var d={buttons:a},e=b.popups.create("link.edit",d);return b.$wp&&b.events.$on(b.$wp,"scroll.link-edit",function(){c()&&b.popups.isVisible("link.edit")&&f(c())}),e}function i(){}function j(){var d=b.popups.get("link.insert"),e=c();if(e){var f,g,h=a(e),i=d.find('input.fr-link-attr[type="text"]'),j=d.find('input.fr-link-attr[type="checkbox"]');for(f=0;f<i.length;f++)g=a(i[f]),g.val(h.attr(g.attr("name")||""));for(j.prop("checked",!1),f=0;f<j.length;f++)g=a(j[f]),h.attr(g.attr("name"))==g.data("checked")&&g.prop("checked",!0);d.find('input.fr-link-attr[type="text"][name="text"]').val(h.text())}else d.find('input.fr-link-attr[type="text"]').val(""),d.find('input.fr-link-attr[type="checkbox"]').prop("checked",!1),d.find('input.fr-link-attr[type="text"][name="text"]').val(b.selection.text());d.find("input.fr-link-attr").trigger("change"),(b.image?b.image.get():null)?d.find('.fr-link-attr[name="text"]').parent().hide():d.find('.fr-link-attr[name="text"]').parent().show()}function k(){var a=b.$tb.find('.fr-command[data-cmd="insertLink"]'),c=b.popups.get("link.insert");if(c||(c=l()),!c.hasClass("fr-active"))if(b.popups.refresh("link.insert"),b.popups.setContainer("link.insert",b.$tb||b.$sc),a.is(":visible")){var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("link.insert",d,e,a.outerHeight())}else b.position.forSelection(c),b.popups.show("link.insert")}function l(a){if(a)return b.popups.onRefresh("link.insert",j),b.popups.onHide("link.insert",i),!0;var d="";b.opts.linkInsertButtons.length>=1&&(d='<div class="fr-buttons">'+b.button.buildList(b.opts.linkInsertButtons)+"</div>");var e='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg>',f="",g=0;f='<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'+b.id+'">',f+='<div class="fr-input-line"><input id="fr-link-insert-layer-url-'+b.id+'" name="href" type="text" class="fr-link-attr" placeholder="URL" tabIndex="'+ ++g+'"></div>',b.opts.linkText&&(f+='<div class="fr-input-line"><input id="fr-link-insert-layer-text-'+b.id+'" name="text" type="text" class="fr-link-attr" placeholder="'+b.language.translate("Text")+'" tabIndex="'+ ++g+'"></div>');for(var h in b.opts.linkAttributes)if(b.opts.linkAttributes.hasOwnProperty(h)){var k=b.opts.linkAttributes[h];f+='<div class="fr-input-line"><input name="'+h+'" type="text" class="fr-link-attr" placeholder="'+b.language.translate(k)+'" tabIndex="'+ ++g+'"></div>'}b.opts.linkAlwaysBlank||(f+='<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'+b.id+'" tabIndex="'+ ++g+'"><span>'+e+'</span></span><label for="fr-link-target-'+b.id+'">'+b.language.translate("Open in new tab")+"</label></div>"),f+='<div class="fr-action-buttons"><button class="fr-command fr-submit" role="button" data-cmd="linkInsert" href="#" tabIndex="'+ ++g+'" type="button">'+b.language.translate("Insert")+"</button></div></div>";var l={buttons:d,input_layer:f},m=b.popups.create("link.insert",l);return b.$wp&&b.events.$on(b.$wp,"scroll.link-insert",function(){(b.image?b.image.get():null)&&b.popups.isVisible("link.insert")&&u(),c&&b.popups.isVisible("link.insert")&&s()}),m}function m(){var d=c(),e=b.image?b.image.get():null;if(!1===b.events.trigger("link.beforeRemove",[d]))return!1;e&&d?(e.unwrap(),b.image.edit(e)):d&&(b.selection.save(),a(d).replaceWith(a(d).html()),b.selection.restore(),g())}function n(){b.events.on("keyup",function(b){b.which!=a.FE.KEYCODE.ESC&&e(b)}),b.events.on("window.mouseup",e),b.events.$on(b.$el,"click","a",function(a){b.edit.isDisabled()&&a.preventDefault()}),b.helpers.isMobile()&&b.events.$on(b.$doc,"selectionchange",e),l(!0),"A"==b.el.tagName&&b.$el.addClass("fr-view"),b.events.on("toolbar.esc",function(){if(b.popups.isVisible("link.edit"))return b.events.disableBlur(),b.events.focus(),!1},!0)}function o(c){var d,e,f=b.opts.linkList[c],g=b.popups.get("link.insert"),h=g.find('input.fr-link-attr[type="text"]'),i=g.find('input.fr-link-attr[type="checkbox"]');for(e=0;e<h.length;e++)d=a(h[e]),f[d.attr("name")]?d.val(f[d.attr("name")]):"text"!=d.attr("name")&&d.val("");for(e=0;e<i.length;e++)d=a(i[e]),d.prop("checked",d.data("checked")==f[d.attr("name")]);b.accessibility.focusPopup(g)}function p(){var c,d,e=b.popups.get("link.insert"),f=e.find('input.fr-link-attr[type="text"]'),g=e.find('input.fr-link-attr[type="checkbox"]'),h=f.filter('[name="href"]').val(),i=f.filter('[name="text"]').val(),j={};for(d=0;d<f.length;d++)c=a(f[d]),["href","text"].indexOf(c.attr("name"))<0&&(j[c.attr("name")]=c.val());for(d=0;d<g.length;d++)c=a(g[d]),c.is(":checked")?j[c.attr("name")]=c.data("checked"):j[c.attr("name")]=c.data("unchecked")||null;var k=b.helpers.scrollTop();r(h,i,j),a(b.o_win).scrollTop(k)}function q(){if(!b.selection.isCollapsed()){b.selection.save();for(var c=b.$el.find(".fr-marker").addClass("fr-unprocessed").toArray();c.length;){var d=a(c.pop());d.removeClass("fr-unprocessed");var e=b.node.deepestParent(d.get(0));if(e){var f=d.get(0),g="",h="";do{f=f.parentNode,b.node.isBlock(f)||(g+=b.node.closeTagString(f),h=b.node.openTagString(f)+h)}while(f!=e);var i=b.node.openTagString(d.get(0))+d.html()+b.node.closeTagString(d.get(0));d.replaceWith('<span id="fr-break"></span>');var j=e.outerHTML;j=j.replace(/<span id="fr-break"><\/span>/g,g+i+h),e.outerHTML=j}c=b.$el.find(".fr-marker.fr-unprocessed").toArray()}b.html.cleanEmptyTags(),b.selection.restore()}}function r(f,g,h){if(void 0===h&&(h={}),!1===b.events.trigger("link.beforeInsert",[f,g,h]))return!1;var i=b.image?b.image.get():null;i||"A"==b.el.tagName?"A"==b.el.tagName&&b.$el.focus():(b.selection.restore(),b.popups.hide("link.insert"));var j=f;if(b.opts.linkConvertEmailAddress){a.FE.MAIL_REGEX.test(f)&&!/^mailto:.*/i.test(f)&&(f="mailto:"+f)}var k=/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i;if(""===b.opts.linkAutoPrefix||/^(mailto|tel|sms|notes|data):.*/i.test(f)||/^data:image.*/i.test(f)||/^(https?:|ftps?:|file:|)\/\//i.test(f)||k.test(f)||["/","{","[","#","("].indexOf((f||"")[0])<0&&(f=b.opts.linkAutoPrefix+f),f=b.helpers.sanitizeURL(f),b.opts.linkAlwaysBlank&&(h.target="_blank"),b.opts.linkAlwaysNoFollow&&(h.rel="nofollow"),"_blank"==h.target?h.rel?h.rel+=" noopener noreferrer":h.rel="noopener noreferrer":null==h.target&&(h.rel?h.rel=h.rel.replace(/noopener/,"").replace(/noreferrer/,""):h.rel=null),g=g||"",f===b.opts.linkAutoPrefix){return b.popups.get("link.insert").find('input[name="href"]').addClass("fr-error"),b.events.trigger("link.bad",[j]),!1}var l,m=c();if(m)l=a(m),l.attr("href",f),g.length>0&&l.text()!=g&&!i&&l.text(g),i||l.prepend(a.FE.START_MARKER).append(a.FE.END_MARKER),l.attr(h),i||b.selection.restore();else{i?i.wrap('<a href="'+f+'"></a>'):(b.format.remove("a"),b.selection.isCollapsed()?(g=0===g.length?j:g,b.html.insert('<a href="'+f+'">'+a.FE.START_MARKER+g+a.FE.END_MARKER+"</a>"),b.selection.restore()):g.length>0&&g!=b.selection.text().replace(/\n/g,"")?(b.selection.remove(),b.html.insert('<a href="'+f+'">'+a.FE.START_MARKER+g+a.FE.END_MARKER+"</a>"),b.selection.restore()):(q(),b.format.apply("a",{href:f})));for(var n=d(),o=0;o<n.length;o++)l=a(n[o]),l.attr(h),l.removeAttr("_moz_dirty");1==n.length&&b.$wp&&!i&&(a(n[0]).prepend(a.FE.START_MARKER).append(a.FE.END_MARKER),b.selection.restore())}if(i){b.popups.get("link.insert").find("input:focus").blur(),b.image.edit(i)}else e()}function s(){g();var d=c();if(d){var e=b.popups.get("link.insert");e||(e=l()),b.popups.isVisible("link.insert")||(b.popups.refresh("link.insert"),b.selection.save(),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur())),b.popups.setContainer("link.insert",b.$sc);var f=(b.image?b.image.get():null)||a(d),h=f.offset().left+f.outerWidth()/2,i=f.offset().top+f.outerHeight();b.popups.show("link.insert",h,i,f.outerHeight())}}function t(){(b.image?b.image.get():null)?b.image.back():(b.events.disableBlur(),b.selection.restore(),b.events.enableBlur(),c()&&b.$wp?(b.selection.restore(),g(),e()):"A"==b.el.tagName?(b.$el.focus(),e()):(b.popups.hide("link.insert"),b.toolbar.showInline()))}function u(){var a=b.image?b.image.get():null;if(a){var c=b.popups.get("link.insert");c||(c=l()),j(!0),b.popups.setContainer("link.insert",b.$sc);var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+a.outerHeight();b.popups.show("link.insert",d,e,a.outerHeight())}}function v(d,f,g){void 0===g&&(g=b.opts.linkMultipleStyles),void 0===f&&(f=b.opts.linkStyles);var h=c();if(!h)return!1;if(!g){var i=Object.keys(f);i.splice(i.indexOf(d),1),a(h).removeClass(i.join(" "))}a(h).toggleClass(d),e()}return{_init:n,remove:m,showInsertPopup:k,usePredefined:o,insertCallback:p,insert:r,update:s,get:c,allSelected:d,back:t,imageLink:u,applyStyle:v}},a.FE.DefineIcon("insertLink",{NAME:"link"}),a.FE.RegisterShortcut(a.FE.KEYCODE.K,"insertLink",null,"K"),a.FE.RegisterCommand("insertLink",{title:"Insert Link",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("link.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("link.insert")):this.link.showInsertPopup()},plugin:"link"}),a.FE.DefineIcon("linkOpen",{NAME:"external-link"}),a.FE.RegisterCommand("linkOpen",{title:"Open Link",undo:!1,refresh:function(a){this.link.get()?a.removeClass("fr-hidden"):a.addClass("fr-hidden")},callback:function(){var a=this.link.get();a&&this.o_win.open(a.href)}}),a.FE.DefineIcon("linkEdit",{NAME:"edit"}),a.FE.RegisterCommand("linkEdit",{title:"Edit Link",undo:!1,refreshAfterCallback:!1,popup:!0,callback:function(){this.link.update()},refresh:function(a){this.link.get()?a.removeClass("fr-hidden"):a.addClass("fr-hidden")}}),a.FE.DefineIcon("linkRemove",{NAME:"unlink"}),a.FE.RegisterCommand("linkRemove",{title:"Unlink",callback:function(){this.link.remove()},refresh:function(a){this.link.get()?a.removeClass("fr-hidden"):a.addClass("fr-hidden")}}),a.FE.DefineIcon("linkBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("linkBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.link.back()},refresh:function(a){var b=this.link.get()&&this.doc.hasFocus();(this.image?this.image.get():null)||b||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.DefineIcon("linkList",{NAME:"search"}),a.FE.RegisterCommand("linkList",{title:"Choose Link",type:"dropdown",focus:!1,undo:!1,refreshAfterCallback:!1,html:function(){for(var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.linkList,c=0;c<b.length;c++)a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkList" data-param1="'+c+'">'+(b[c].displayText||b[c].text)+"</a></li>";return a+="</ul>"},callback:function(a,b){this.link.usePredefined(b)}}),a.FE.RegisterCommand("linkInsert",{focus:!1,refreshAfterCallback:!1,callback:function(){this.link.insertCallback()},refresh:function(a){this.link.get()?a.text(this.language.translate("Update")):a.text(this.language.translate("Insert"))}}),a.FE.DefineIcon("imageLink",{NAME:"link"}),a.FE.RegisterCommand("imageLink",{title:"Insert Link",undo:!1,focus:!1,popup:!0,callback:function(){this.link.imageLink()},refresh:function(a){var b,c=this.link.get();c?(b=a.prev(),b.hasClass("fr-separator")&&b.removeClass("fr-hidden"),a.addClass("fr-hidden")):(b=a.prev(),b.hasClass("fr-separator")&&b.addClass("fr-hidden"),a.removeClass("fr-hidden"))}}),a.FE.DefineIcon("linkStyle",{NAME:"magic"}),a.FE.RegisterCommand("linkStyle",{title:"Style",type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.linkStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkStyle" data-param1="'+c+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},callback:function(a,b){this.link.applyStyle(b)},refreshOnShow:function(b,c){var d=this.link.get();if(d){var e=a(d);c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=e.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}})});

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.FE.PLUGINS.lists=function(b){function c(a){return'<span class="fr-open-'+a.toLowerCase()+'"></span>'}function d(a){return'<span class="fr-close-'+a.toLowerCase()+'"></span>'}function e(b,c){for(var d=[],e=0;e<b.length;e++){var f=b[e].parentNode;"LI"==b[e].tagName&&f.tagName!=c&&d.indexOf(f)<0&&d.push(f)}for(e=d.length-1;e>=0;e--){var g=a(d[e]);g.replaceWith("<"+c.toLowerCase()+">"+g.html()+"</"+c.toLowerCase()+">")}}function f(c,d){e(c,d);var f,g=b.html.defaultTag(),h=null;c.length&&(f="rtl"==b.opts.direction||"rtl"==a(c[0]).css("direction")?"margin-right":"margin-left");for(var i=0;i<c.length;i++)if("LI"!=c[i].tagName){var j=b.helpers.getPX(a(c[i]).css(f))||0;c[i].style.marginLeft=null,null===h&&(h=j);var k=h>0?"<"+d+' style="'+f+": "+h+'px;">':"<"+d+">",l="</"+d+">";for(j-=h;j/b.opts.indentMargin>0;)k+="<"+d+">",l+=l,j-=b.opts.indentMargin;g&&c[i].tagName.toLowerCase()==g?a(c[i]).replaceWith(k+"<li"+b.node.attributes(c[i])+">"+a(c[i]).html()+"</li>"+l):a(c[i]).wrap(k+"<li></li>"+l)}b.clean.lists()}function g(e){var f,g;for(f=e.length-1;f>=0;f--)for(g=f-1;g>=0;g--)if(a(e[g]).find(e[f]).length||e[g]==e[f]){e.splice(f,1);break}var h=[];for(f=0;f<e.length;f++){var i=a(e[f]),j=e[f].parentNode,k=i.attr("class");if(i.before(d(j.tagName)),"LI"==j.parentNode.tagName)i.before(d("LI")),i.after(c("LI"));else{var l="";k&&(l+=' class="'+k+'"');var m="rtl"==b.opts.direction||"rtl"==i.css("direction")?"margin-right":"margin-left";b.helpers.getPX(a(j).css(m))&&(l+=' style="'+m+":"+b.helpers.getPX(a(j).css(m))+'px;"'),l&&i.wrapInner("<"+b.html.defaultTag()+l+"></"+b.html.defaultTag()+">"),b.node.isEmpty(i.get(0),!0)||0!==i.find(b.html.blockTagsQuery()).length||i.append("<br>"),i.append(c("LI")),i.prepend(d("LI"))}i.after(c(j.tagName)),"LI"==j.parentNode.tagName&&(j=j.parentNode.parentNode),h.indexOf(j)<0&&h.push(j)}for(f=0;f<h.length;f++){var n=a(h[f]),o=n.html();o=o.replace(/<span class="fr-close-([a-z]*)"><\/span>/g,"</$1>"),o=o.replace(/<span class="fr-open-([a-z]*)"><\/span>/g,"<$1>"),n.replaceWith(b.node.openTagString(n.get(0))+o+b.node.closeTagString(n.get(0)))}b.$el.find("li:empty").remove(),b.$el.find("ul:empty, ol:empty").remove(),b.clean.lists(),b.html.wrap()}function h(a,b){for(var c=!0,d=0;d<a.length;d++){if("LI"!=a[d].tagName)return!1;a[d].parentNode.tagName!=b&&(c=!1)}return c}function i(a){b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore();for(var c=b.selection.blocks(),d=0;d<c.length;d++)"LI"!=c[d].tagName&&"LI"==c[d].parentNode.tagName&&(c[d]=c[d].parentNode);b.selection.save(),h(c,a)?g(c):f(c,a),b.html.unwrap(),b.selection.restore()}function j(c,d){var e=a(b.selection.element());if(e.get(0)!=b.el){var f=e.get(0);f="LI"!=f.tagName&&f.firstElementChild&&"LI"!=f.firstElementChild.tagName?e.parents("li").get(0):"LI"==f.tagName||f.firstElementChild?f.firstElementChild&&"LI"==f.firstElementChild.tagName?e.get(0).firstChild:e.get(0):e.parents("li").get(0),f&&f.parentNode.tagName==d&&b.el.contains(f.parentNode)&&c.addClass("fr-active")}}function k(c){b.selection.save();for(var d=0;d<c.length;d++){var e=c[d].previousSibling;if(e){var f=a(c[d]).find("> ul, > ol").last().get(0);if(f){for(var g=a("<li>").prependTo(a(f)),h=b.node.contents(c[d])[0];h&&!b.node.isList(h);){var i=h.nextSibling;g.append(h),h=i}a(e).append(a(f)),a(c[d]).remove()}else{var j=a(e).find("> ul, > ol").last().get(0);if(j)a(j).append(a(c[d]));else{var k=a("<"+c[d].parentNode.tagName+">");a(e).append(k),k.append(a(c[d]))}}}}b.clean.lists(),b.selection.restore()}function l(a){b.selection.save(),g(a),b.selection.restore()}function m(a){if("indent"==a||"outdent"==a){for(var c=!1,d=b.selection.blocks(),e=[],f=0;f<d.length;f++)"LI"==d[f].tagName?(c=!0,e.push(d[f])):"LI"==d[f].parentNode.tagName&&(c=!0,e.push(d[f].parentNode));c&&("indent"==a?k(e):l(e))}}function n(){b.events.on("commands.after",m),b.events.on("keydown",function(c){if(c.which==a.FE.KEYCODE.TAB){for(var d=b.selection.blocks(),e=[],f=0;f<d.length;f++)"LI"==d[f].tagName?e.push(d[f]):"LI"==d[f].parentNode.tagName&&e.push(d[f].parentNode);if(e.length>1||e.length&&(b.selection.info(e[0]).atStart||b.node.isEmpty(e[0])))return c.preventDefault(),c.stopPropagation(),c.shiftKey?l(e):k(e),!1}},!0)}return{_init:n,format:i,refresh:j}},a.FE.RegisterCommand("formatUL",{title:"Unordered List",refresh:function(a){this.lists.refresh(a,"UL")},callback:function(){this.lists.format("UL")},plugin:"lists"}),a.FE.RegisterCommand("formatOL",{title:"Ordered List",refresh:function(a){this.lists.refresh(a,"OL")},callback:function(){this.lists.format("OL")},plugin:"lists"}),a.FE.DefineIcon("formatUL",{NAME:"list-ul"}),a.FE.DefineIcon("formatOL",{NAME:"list-ol"})});

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{paragraphFormat:{N:"Normal",H1:"Heading 1",H2:"Heading 2",H3:"Heading 3",H4:"Heading 4",PRE:"Code"},paragraphFormatSelection:!1}),a.FE.PLUGINS.paragraphFormat=function(b){function c(c,d){var e=b.html.defaultTag();if(d&&d.toLowerCase()!=e)if(c.find("ul, ol").length>0){var f=a("<"+d+">");c.prepend(f);for(var g=b.node.contents(c.get(0))[0];g&&["UL","OL"].indexOf(g.tagName)<0;){var h=g.nextSibling;f.append(g),g=h}}else c.html("<"+d+">"+c.html()+"</"+d+">")}function d(c,d){var e=b.html.defaultTag();d||(d='div class="fr-temp-div" data-empty="true"'),d.toLowerCase()==e?c.replaceWith(c.html()):c.replaceWith(a("<"+d+">").html(c.html()))}function e(c,d){var e=b.html.defaultTag();d||(d='div class="fr-temp-div"'+(b.node.isEmpty(c.get(0),!0)?' data-empty="true"':"")),d.toLowerCase()==e?(b.node.isEmpty(c.get(0),!0)||c.append("<br/>"),c.replaceWith(c.html())):c.replaceWith(a("<"+d+">").html(c.html()))}function f(c,d){d||(d='div class="fr-temp-div"'+(b.node.isEmpty(c.get(0),!0)?' data-empty="true"':"")),c.replaceWith(a("<"+d+" "+b.node.attributes(c.get(0))+">").html(c.html()).removeAttr("data-empty"))}function g(g){"N"==g&&(g=b.html.defaultTag()),b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore();var h=b.selection.blocks();b.selection.save(),b.$el.find("pre").attr("skip",!0);for(var i=0;i<h.length;i++)if(h[i].tagName!=g&&!b.node.isList(h[i])){var j=a(h[i]);"LI"==h[i].tagName?c(j,g):"LI"==h[i].parentNode.tagName&&h[i]?d(j,g):["TD","TH"].indexOf(h[i].parentNode.tagName)>=0?e(j,g):f(j,g)}b.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function(){a(this).prev().append("<br>"+a(this).html()),a(this).remove()}),b.$el.find("pre").removeAttr("skip"),b.html.unwrap(),b.selection.restore()}function h(a,c){var d=b.selection.blocks();if(d.length){var e=d[0],f="N",g=b.html.defaultTag();e.tagName.toLowerCase()!=g&&e!=b.el&&(f=e.tagName),c.find('.fr-command[data-param1="'+f+'"]').addClass("fr-active").attr("aria-selected",!0)}else c.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected",!0)}function i(a){if(b.opts.paragraphFormatSelection){var c=b.selection.blocks();if(c.length){var d=c[0],e="N",f=b.html.defaultTag();d.tagName.toLowerCase()!=f&&d!=b.el&&(e=d.tagName),["LI","TD","TH"].indexOf(e)>=0&&(e="N"),a.find("> span").text(b.language.translate(b.opts.paragraphFormat[e]))}else a.find("> span").text(b.language.translate(b.opts.paragraphFormat.N))}}return{apply:g,refreshOnShow:h,refresh:i}},a.FE.RegisterCommand("paragraphFormat",{type:"dropdown",displaySelection:function(a){return a.opts.paragraphFormatSelection},defaultSelection:"Normal",displaySelectionWidth:100,html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.paragraphFormat;for(var c in b)if(b.hasOwnProperty(c)){var d=this.shortcuts.get("paragraphFormat."+c);d=d?'<span class="fr-shortcut">'+d+"</span>":"",a+='<li role="presentation"><'+("N"==c?this.html.defaultTag()||"DIV":c)+' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></"+("N"==c?this.html.defaultTag()||"DIV":c)+"></li>"}return a+="</ul>"},title:"Paragraph Format",callback:function(a,b){this.paragraphFormat.apply(b)},refresh:function(a){this.paragraphFormat.refresh(a)},refreshOnShow:function(a,b){this.paragraphFormat.refreshOnShow(a,b)},plugin:"paragraphFormat"}),a.FE.DefineIcon("paragraphFormat",{NAME:"paragraph"})});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{paragraphStyles:{"fr-text-gray":"Gray","fr-text-bordered":"Bordered","fr-text-spaced":"Spaced","fr-text-uppercase":"Uppercase"},paragraphMultipleStyles:!0}),a.FE.PLUGINS.paragraphStyle=function(b){function c(c,d,e){void 0===d&&(d=b.opts.paragraphStyles),void 0===e&&(e=b.opts.paragraphMultipleStyles);var f="";e||(f=Object.keys(d),f.splice(f.indexOf(c),1),f=f.join(" ")),b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore();var g=b.selection.blocks();b.selection.save();for(var h=a(g[0]).hasClass(c),i=0;i<g.length;i++)a(g[i]).removeClass(f).toggleClass(c,!h),a(g[i]).hasClass("fr-temp-div")&&a(g[i]).removeClass("fr-temp-div"),""===a(g[i]).attr("class")&&a(g[i]).removeAttr("class");b.html.unwrap(),b.selection.restore()}function d(c,d){var e=b.selection.blocks();if(e.length){var f=a(e[0]);d.find(".fr-command").each(function(){var b=a(this).data("param1"),c=f.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}function e(){}return{_init:e,apply:c,refreshOnShow:d}},a.FE.RegisterCommand("paragraphStyle",{type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.paragraphStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command '+c+'" tabIndex="-1" role="option" data-cmd="paragraphStyle" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},title:"Paragraph Style",callback:function(a,b){this.paragraphStyle.apply(b)},refreshOnShow:function(a,b){this.paragraphStyle.refreshOnShow(a,b)},plugin:"paragraphStyle"}),a.FE.DefineIcon("paragraphStyle",{NAME:"magic"})});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{quickInsertButtons:["image","table","ul","ol","hr"],quickInsertTags:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote"]}),a.FE.QUICK_INSERT_BUTTONS={image:{icon:"insertImage",callback:function(){var b=this;b.shared.$qi_image_input||(b.shared.$qi_image_input=a('<input accept="image/*" name="quickInsertImage'+this.id+'" style="display: none;" type="file">'),a("body:first").append(b.shared.$qi_image_input),b.events.$on(b.shared.$qi_image_input,"change",function(){var b=a(this).data("inst");this.files&&(b.quickInsert.hide(),b.image.upload(this.files)),a(this).val("")},!0)),b.$qi_image_input=b.shared.$qi_image_input,b.helpers.isMobile()&&b.selection.save(),b.$qi_image_input.data("inst",b).trigger("click")},requiredPlugin:"image",title:"Insert Image"},table:{icon:"insertTable",callback:function(){this.quickInsert.hide(),this.table.insert(2,2),this.undo.saveStep()},requiredPlugin:"table",title:"Insert Table"},ol:{icon:"formatOL",callback:function(){this.quickInsert.hide(),this.lists.format("OL"),this.undo.saveStep()},requiredPlugin:"lists",title:"Ordered List"},ul:{icon:"formatUL",callback:function(){this.quickInsert.hide(),this.lists.format("UL"),this.undo.saveStep()},requiredPlugin:"lists",title:"Unordered List"},hr:{icon:"insertHR",callback:function(){this.quickInsert.hide(),this.commands.insertHR(),this.undo.saveStep()},title:"Insert Horizontal Line"}},a.FE.DefineIcon("quickInsert",{PATH:'<path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/>',template:"svg"}),a.FE.RegisterQuickInsertCommand=function(b,c){a.FE.QUICK_INSERT_BUTTONS[b]=c},a.FE.PLUGINS.quickInsert=function(b){function c(a){var c,d,e;c=a.offset().top-b.$box.offset().top,d=0-k.outerWidth(),e=(k.outerHeight()-a.outerHeight())/2,b.opts.iframe&&(c+=b.$iframe.offset().top-b.helpers.scrollTop()),k.hasClass("fr-on")&&c>=0&&l.css("top",c-e),c>=0&&c-e<=b.$box.outerHeight()-a.outerHeight()?(k.hasClass("fr-hidden")&&(k.hasClass("fr-on")&&g(),k.removeClass("fr-hidden")),k.css("top",c-e)):k.hasClass("fr-visible")&&(k.addClass("fr-hidden"),h()),k.css("left",d)}function d(a){k||i(),k.hasClass("fr-on")&&h(),b.$box.append(k),c(a),k.data("tag",a),k.addClass("fr-visible")}function e(){if(b.core.hasFocus()){var c=b.selection.element();b.node.isBlock(c)||(c=b.node.blockParent(c)),c&&b.node.isEmpty(c)&&b.node.isElement(c.parentNode)&&b.opts.quickInsertTags.indexOf(c.tagName.toLowerCase())>=0?k&&k.data("tag").is(a(c))&&k.hasClass("fr-on")?h():b.selection.isCollapsed()&&d(a(c)):f()}}function f(){k&&(b.html.checkIfEmpty(),k.hasClass("fr-on")&&h(),k.removeClass("fr-visible fr-on"),k.css("left",-9999).css("top",-9999))}function g(c){if(c&&c.preventDefault(),k.hasClass("fr-on")&&!k.hasClass("fr-hidden"))h();else{if(!b.shared.$qi_helper){for(var d=b.opts.quickInsertButtons,e='<div class="fr-qi-helper">',f=0,g=0;g<d.length;g++){var i=a.FE.QUICK_INSERT_BUTTONS[d[g]];i&&(!i.requiredPlugin||a.FE.PLUGINS[i.requiredPlugin]&&b.opts.pluginsEnabled.indexOf(i.requiredPlugin)>=0)&&(e+='<a class="fr-btn fr-floating-btn" role="button" title="'+b.language.translate(i.title)+'" tabIndex="-1" data-cmd="'+d[g]+'" style="transition-delay: '+.025*f+++'s;">'+b.icon.create(i.icon)+"</a>")}e+="</div>",b.shared.$qi_helper=a(e),b.tooltip.bind(b.shared.$qi_helper,"> a.fr-btn")}l=b.shared.$qi_helper,l.appendTo(b.$box),setTimeout(function(){l.css("top",parseFloat(k.css("top"))),l.css("left",parseFloat(k.css("left"))+k.outerWidth()),l.find("a").addClass("fr-size-1"),k.addClass("fr-on")},10)}}function h(){var a=b.$box.find(".fr-qi-helper");a.length&&(a.find("a").removeClass("fr-size-1"),a.css("left",-9999),k.hasClass("fr-hidden")||k.removeClass("fr-on"))}function i(){b.shared.$quick_insert||(b.shared.$quick_insert=a('<div class="fr-quick-insert"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+b.language.translate("Quick Insert")+'">'+b.icon.create("quickInsert")+"</a></div>")),k=b.shared.$quick_insert,b.tooltip.bind(b.$box,".fr-quick-insert > a.fr-floating-btn"),b.events.on("destroy",function(){k.removeClass("fr-on").appendTo(a("body:first")).css("left",-9999).css("top",-9999),l&&(h(),l.appendTo(a("body:first")))},!0),b.events.on("shared.destroy",function(){k.html("").removeData().remove(),k=null,l&&(l.html("").removeData().remove(),l=null)},!0),b.events.on("commands.before",f),b.events.on("commands.after",function(){b.popups.areVisible()||e()}),b.events.bindClick(b.$box,".fr-quick-insert > a",g),b.events.bindClick(b.$box,".fr-qi-helper > a.fr-btn",function(c){var d=a(c.currentTarget).data("cmd");a.FE.QUICK_INSERT_BUTTONS[d].callback.apply(b,[c.currentTarget])}),b.events.$on(b.$wp,"scroll",function(){k.hasClass("fr-visible")&&c(k.data("tag"))})}function j(){if(!b.$wp)return!1;b.opts.iframe&&b.$el.parent("html").find("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">'),b.popups.onShow("image.edit",f),b.events.on("mouseup",e),b.helpers.isMobile()&&b.events.$on(a(b.o_doc),"selectionchange",e),b.events.on("blur",f),b.events.on("keyup",e),b.events.on("keydown",function(){setTimeout(function(){e()},0)})}var k,l;return{_init:j,hide:f}}});

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.FE.PLUGINS.quote=function(b){function c(a){for(;a.parentNode&&a.parentNode!=b.el;)a=a.parentNode;return a}function d(){var d,e=b.selection.blocks();for(d=0;d<e.length;d++)e[d]=c(e[d]);b.selection.save();var f=a("<blockquote>");for(f.insertBefore(e[0]),d=0;d<e.length;d++)f.append(e[d]);b.html.unwrap(),b.selection.restore()}function e(){var c,d=b.selection.blocks();for(c=0;c<d.length;c++)"BLOCKQUOTE"!=d[c].tagName&&(d[c]=a(d[c]).parentsUntil(b.$el,"BLOCKQUOTE").get(0));for(b.selection.save(),c=0;c<d.length;c++)d[c]&&a(d[c]).replaceWith(d[c].innerHTML);b.html.unwrap(),b.selection.restore()}function f(a){b.selection.save(),b.html.wrap(!0,!0,!0,!0),b.selection.restore(),"increase"==a?d():"decrease"==a&&e()}return{apply:f}},a.FE.RegisterShortcut(a.FE.KEYCODE.SINGLE_QUOTE,"quote","increase","'"),a.FE.RegisterShortcut(a.FE.KEYCODE.SINGLE_QUOTE,"quote","decrease","'",!0),a.FE.RegisterCommand("quote",{title:"Quote",type:"dropdown",options:{increase:"Increase",decrease:"Decrease"},callback:function(a,b){this.quote.apply(b)},plugin:"quote"}),a.FE.DefineIcon("quote",{NAME:"quote-left"})});

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{specialCharactersSets:[{title:"Latin",list:[{char:"&iexcl;",desc:"INVERTED EXCLAMATION MARK"},{char:"&cent;",desc:"CENT SIGN"},{char:"&pound;",desc:"POUND SIGN"},{char:"&curren;",desc:"CURRENCY SIGN"},{char:"&yen;",desc:"YEN SIGN"},{char:"&brvbar;",desc:"BROKEN BAR"},{char:"&sect;",desc:"SECTION SIGN"},{char:"&uml;",desc:"DIAERESIS"},{char:"&copy;",desc:"COPYRIGHT SIGN"},{char:"&trade;",desc:"TRADEMARK SIGN"},{char:"&ordf;",desc:"FEMININE ORDINAL INDICATOR"},{char:"&laquo;",desc:"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"},{char:"&not;",desc:"NOT SIGN"},{char:"&reg;",desc:"REGISTERED SIGN"},{char:"&macr;",desc:"MACRON"},{char:"&deg;",desc:"DEGREE SIGN"},{char:"&plusmn;",desc:"PLUS-MINUS SIGN"},{char:"&sup2;",desc:"SUPERSCRIPT TWO"},{char:"&sup3;",desc:"SUPERSCRIPT THREE"},{char:"&acute;",desc:"ACUTE ACCENT"},{char:"&micro;",desc:"MICRO SIGN"},{char:"&para;",desc:"PILCROW SIGN"},{char:"&middot;",desc:"MIDDLE DOT"},{char:"&cedil;",desc:"CEDILLA"},{char:"&sup1;",desc:"SUPERSCRIPT ONE"},{char:"&ordm;",desc:"MASCULINE ORDINAL INDICATOR"},{char:"&raquo;",desc:"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"},{char:"&frac14;",desc:"VULGAR FRACTION ONE QUARTER"},{char:"&frac12;",desc:"VULGAR FRACTION ONE HALF"},{char:"&frac34;",desc:"VULGAR FRACTION THREE QUARTERS"},{char:"&iquest;",desc:"INVERTED QUESTION MARK"},{char:"&Agrave;",desc:"LATIN CAPITAL LETTER A WITH GRAVE"},{char:"&Aacute;",desc:"LATIN CAPITAL LETTER A WITH ACUTE"},{char:"&Acirc;",desc:"LATIN CAPITAL LETTER A WITH CIRCUMFLEX"},{char:"&Atilde;",desc:"LATIN CAPITAL LETTER A WITH TILDE"},{char:"&Auml;",desc:"LATIN CAPITAL LETTER A WITH DIAERESIS "},{char:"&Aring;",desc:"LATIN CAPITAL LETTER A WITH RING ABOVE"},{char:"&AElig;",desc:"LATIN CAPITAL LETTER AE"},{char:"&Ccedil;",desc:"LATIN CAPITAL LETTER C WITH CEDILLA"},{char:"&Egrave;",desc:"LATIN CAPITAL LETTER E WITH GRAVE"},{char:"&Eacute;",desc:"LATIN CAPITAL LETTER E WITH ACUTE"},{char:"&Ecirc;",desc:"LATIN CAPITAL LETTER E WITH CIRCUMFLEX"},{char:"&Euml;",desc:"LATIN CAPITAL LETTER E WITH DIAERESIS"},{char:"&Igrave;",desc:"LATIN CAPITAL LETTER I WITH GRAVE"},{char:"&Iacute;",desc:"LATIN CAPITAL LETTER I WITH ACUTE"},{char:"&Icirc;",desc:"LATIN CAPITAL LETTER I WITH CIRCUMFLEX"},{char:"&Iuml;",desc:"LATIN CAPITAL LETTER I WITH DIAERESIS"},{char:"&ETH;",desc:"LATIN CAPITAL LETTER ETH"},{char:"&Ntilde;",desc:"LATIN CAPITAL LETTER N WITH TILDE"},{char:"&Ograve;",desc:"LATIN CAPITAL LETTER O WITH GRAVE"},{char:"&Oacute;",desc:"LATIN CAPITAL LETTER O WITH ACUTE"},{char:"&Ocirc;",desc:"LATIN CAPITAL LETTER O WITH CIRCUMFLEX"},{char:"&Otilde;",desc:"LATIN CAPITAL LETTER O WITH TILDE"},{char:"&Ouml;",desc:"LATIN CAPITAL LETTER O WITH DIAERESIS"},{char:"&times;",desc:"MULTIPLICATION SIGN"},{char:"&Oslash;",desc:"LATIN CAPITAL LETTER O WITH STROKE"},{char:"&Ugrave;",desc:"LATIN CAPITAL LETTER U WITH GRAVE"},{char:"&Uacute;",desc:"LATIN CAPITAL LETTER U WITH ACUTE"},{char:"&Ucirc;",desc:"LATIN CAPITAL LETTER U WITH CIRCUMFLEX"},{char:"&Uuml;",desc:"LATIN CAPITAL LETTER U WITH DIAERESIS"},{char:"&Yacute;",desc:"LATIN CAPITAL LETTER Y WITH ACUTE"},{char:"&THORN;",desc:"LATIN CAPITAL LETTER THORN"},{char:"&szlig;",desc:"LATIN SMALL LETTER SHARP S"},{char:"&agrave;",desc:"LATIN SMALL LETTER A WITH GRAVE"},{char:"&aacute;",desc:"LATIN SMALL LETTER A WITH ACUTE "},{char:"&acirc;",desc:"LATIN SMALL LETTER A WITH CIRCUMFLEX"},{char:"&atilde;",desc:"LATIN SMALL LETTER A WITH TILDE"},{char:"&auml;",desc:"LATIN SMALL LETTER A WITH DIAERESIS"},{char:"&aring;",desc:"LATIN SMALL LETTER A WITH RING ABOVE"},{char:"&aelig;",desc:"LATIN SMALL LETTER AE"},{char:"&ccedil;",desc:"LATIN SMALL LETTER C WITH CEDILLA"},{char:"&egrave;",desc:"LATIN SMALL LETTER E WITH GRAVE"},{char:"&eacute;",desc:"LATIN SMALL LETTER E WITH ACUTE"},{char:"&ecirc;",desc:"LATIN SMALL LETTER E WITH CIRCUMFLEX"},{char:"&euml;",desc:"LATIN SMALL LETTER E WITH DIAERESIS"},{char:"&igrave;",desc:"LATIN SMALL LETTER I WITH GRAVE"},{char:"&iacute;",desc:"LATIN SMALL LETTER I WITH ACUTE"},{char:"&icirc;",desc:"LATIN SMALL LETTER I WITH CIRCUMFLEX"},{char:"&iuml;",desc:"LATIN SMALL LETTER I WITH DIAERESIS"},{char:"&eth;",desc:"LATIN SMALL LETTER ETH"},{char:"&ntilde;",desc:"LATIN SMALL LETTER N WITH TILDE"},{char:"&ograve;",desc:"LATIN SMALL LETTER O WITH GRAVE"},{char:"&oacute;",desc:"LATIN SMALL LETTER O WITH ACUTE"},{char:"&ocirc;",desc:"LATIN SMALL LETTER O WITH CIRCUMFLEX"},{char:"&otilde;",desc:"LATIN SMALL LETTER O WITH TILDE"},{char:"&ouml;",desc:"LATIN SMALL LETTER O WITH DIAERESIS"},{char:"&divide;",desc:"DIVISION SIGN"},{char:"&oslash;",desc:"LATIN SMALL LETTER O WITH STROKE"},{char:"&ugrave;",desc:"LATIN SMALL LETTER U WITH GRAVE"},{char:"&uacute;",desc:"LATIN SMALL LETTER U WITH ACUTE"},{char:"&ucirc;",desc:"LATIN SMALL LETTER U WITH CIRCUMFLEX"},{char:"&uuml;",desc:"LATIN SMALL LETTER U WITH DIAERESIS"},{char:"&yacute;",desc:"LATIN SMALL LETTER Y WITH ACUTE"},{char:"&thorn;",desc:"LATIN SMALL LETTER THORN"},{char:"&yuml;",desc:"LATIN SMALL LETTER Y WITH DIAERESIS"}]},{title:"Greek",list:[{char:"&Alpha;",desc:"GREEK CAPITAL LETTER ALPHA"},{char:"&Beta;",desc:"GREEK CAPITAL LETTER BETA"},{char:"&Gamma;",desc:"GREEK CAPITAL LETTER GAMMA"},{char:"&Delta;",desc:"GREEK CAPITAL LETTER DELTA"},{char:"&Epsilon;",desc:"GREEK CAPITAL LETTER EPSILON"},{char:"&Zeta;",desc:"GREEK CAPITAL LETTER ZETA"},{char:"&Eta;",desc:"GREEK CAPITAL LETTER ETA"},{char:"&Theta;",desc:"GREEK CAPITAL LETTER THETA"},{char:"&Iota;",desc:"GREEK CAPITAL LETTER IOTA"},{char:"&Kappa;",desc:"GREEK CAPITAL LETTER KAPPA"},{char:"&Lambda;",desc:"GREEK CAPITAL LETTER LAMBDA"},{char:"&Mu;",desc:"GREEK CAPITAL LETTER MU"},{char:"&Nu;",desc:"GREEK CAPITAL LETTER NU"},{char:"&Xi;",desc:"GREEK CAPITAL LETTER XI"},{char:"&Omicron;",desc:"GREEK CAPITAL LETTER OMICRON"},{char:"&Pi;",desc:"GREEK CAPITAL LETTER PI"},{char:"&Rho;",desc:"GREEK CAPITAL LETTER RHO"},{char:"&Sigma;",desc:"GREEK CAPITAL LETTER SIGMA"},{char:"&Tau;",desc:"GREEK CAPITAL LETTER TAU"},{char:"&Upsilon;",desc:"GREEK CAPITAL LETTER UPSILON"},{char:"&Phi;",desc:"GREEK CAPITAL LETTER PHI"},{char:"&Chi;",desc:"GREEK CAPITAL LETTER CHI"},{char:"&Psi;",desc:"GREEK CAPITAL LETTER PSI"},{char:"&Omega;",desc:"GREEK CAPITAL LETTER OMEGA"},{char:"&alpha;",desc:"GREEK SMALL LETTER ALPHA"},{char:"&beta;",desc:"GREEK SMALL LETTER BETA"},{char:"&gamma;",desc:"GREEK SMALL LETTER GAMMA"},{char:"&delta;",desc:"GREEK SMALL LETTER DELTA"},{char:"&epsilon;",desc:"GREEK SMALL LETTER EPSILON"},{char:"&zeta;",desc:"GREEK SMALL LETTER ZETA"},{char:"&eta;",desc:"GREEK SMALL LETTER ETA"},{char:"&theta;",desc:"GREEK SMALL LETTER THETA"},{char:"&iota;",desc:"GREEK SMALL LETTER IOTA"},{char:"&kappa;",desc:"GREEK SMALL LETTER KAPPA"},{char:"&lambda;",desc:"GREEK SMALL LETTER LAMBDA"},{char:"&mu;",desc:"GREEK SMALL LETTER MU"},{char:"&nu;",desc:"GREEK SMALL LETTER NU"},{char:"&xi;",desc:"GREEK SMALL LETTER XI"},{char:"&omicron;",desc:"GREEK SMALL LETTER OMICRON"},{char:"&pi;",desc:"GREEK SMALL LETTER PI"},{char:"&rho;",desc:"GREEK SMALL LETTER RHO"},{char:"&sigmaf;",desc:"GREEK SMALL LETTER FINAL SIGMA"},{char:"&sigma;",desc:"GREEK SMALL LETTER SIGMA"},{char:"&tau;",desc:"GREEK SMALL LETTER TAU"},{char:"&upsilon;",desc:"GREEK SMALL LETTER UPSILON"},{char:"&phi;",desc:"GREEK SMALL LETTER PHI"},{char:"&chi;",desc:"GREEK SMALL LETTER CHI"},{char:"&psi;",desc:"GREEK SMALL LETTER PSI"},{char:"&omega;",desc:"GREEK SMALL LETTER OMEGA"},{char:"&thetasym;",desc:"GREEK THETA SYMBOL"},{char:"&upsih;",desc:"GREEK UPSILON WITH HOOK SYMBOL"},{char:"&straightphi;",desc:"GREEK PHI SYMBOL"},{char:"&piv;",desc:"GREEK PI SYMBOL"},{char:"&Gammad;",desc:"GREEK LETTER DIGAMMA"},{char:"&gammad;",desc:"GREEK SMALL LETTER DIGAMMA"},{char:"&varkappa;",desc:"GREEK KAPPA SYMBOL"},{char:"&varrho;",desc:"GREEK RHO SYMBOL"},{char:"&straightepsilon;",desc:"GREEK LUNATE EPSILON SYMBOL"},{char:"&backepsilon;",desc:"GREEK REVERSED LUNATE EPSILON SYMBOL"}]},{title:"Cyrillic",list:[{char:"&#x400",desc:"CYRILLIC CAPITAL LETTER IE WITH GRAVE"},{char:"&#x401",desc:"CYRILLIC CAPITAL LETTER IO"},{char:"&#x402",desc:"CYRILLIC CAPITAL LETTER DJE"},{char:"&#x403",desc:"CYRILLIC CAPITAL LETTER GJE"},{char:"&#x404",desc:"CYRILLIC CAPITAL LETTER UKRAINIAN IE"},{char:"&#x405",desc:"CYRILLIC CAPITAL LETTER DZE"},{char:"&#x406",desc:"CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I"},{char:"&#x407",desc:"CYRILLIC CAPITAL LETTER YI"},{char:"&#x408",desc:"CYRILLIC CAPITAL LETTER JE"},{char:"&#x409",desc:"CYRILLIC CAPITAL LETTER LJE"},{char:"&#x40A",desc:"CYRILLIC CAPITAL LETTER NJE"},{char:"&#x40B",desc:"CYRILLIC CAPITAL LETTER TSHE"},{char:"&#x40C",desc:"CYRILLIC CAPITAL LETTER KJE"},{char:"&#x40D",desc:"CYRILLIC CAPITAL LETTER I WITH GRAVE"},{char:"&#x40E",desc:"CYRILLIC CAPITAL LETTER SHORT U"},{char:"&#x40F",desc:"CYRILLIC CAPITAL LETTER DZHE"},{char:"&#x410",desc:"CYRILLIC CAPITAL LETTER A"},{char:"&#x411",desc:"CYRILLIC CAPITAL LETTER BE"},{char:"&#x412",desc:"CYRILLIC CAPITAL LETTER VE"},{char:"&#x413",desc:"CYRILLIC CAPITAL LETTER GHE"},{char:"&#x414",desc:"CYRILLIC CAPITAL LETTER DE"},{char:"&#x415",desc:"CYRILLIC CAPITAL LETTER IE"},{char:"&#x416",desc:"CYRILLIC CAPITAL LETTER ZHE"},{char:"&#x417",desc:"CYRILLIC CAPITAL LETTER ZE"},{char:"&#x418",desc:"CYRILLIC CAPITAL LETTER I"},{char:"&#x419",desc:"CYRILLIC CAPITAL LETTER SHORT I"},{char:"&#x41A",desc:"CYRILLIC CAPITAL LETTER KA"},{char:"&#x41B",desc:"CYRILLIC CAPITAL LETTER EL"},{char:"&#x41C",desc:"CYRILLIC CAPITAL LETTER EM"},{char:"&#x41D",desc:"CYRILLIC CAPITAL LETTER EN"},{char:"&#x41E",desc:"CYRILLIC CAPITAL LETTER O"},{char:"&#x41F",desc:"CYRILLIC CAPITAL LETTER PE"},{char:"&#x420",desc:"CYRILLIC CAPITAL LETTER ER"},{char:"&#x421",desc:"CYRILLIC CAPITAL LETTER ES"},{char:"&#x422",desc:"CYRILLIC CAPITAL LETTER TE"},{char:"&#x423",desc:"CYRILLIC CAPITAL LETTER U"},{char:"&#x424",desc:"CYRILLIC CAPITAL LETTER EF"},{char:"&#x425",desc:"CYRILLIC CAPITAL LETTER HA"},{char:"&#x426",desc:"CYRILLIC CAPITAL LETTER TSE"},{char:"&#x427",desc:"CYRILLIC CAPITAL LETTER CHE"},{char:"&#x428",desc:"CYRILLIC CAPITAL LETTER SHA"},{char:"&#x429",desc:"CYRILLIC CAPITAL LETTER SHCHA"},{char:"&#x42A",desc:"CYRILLIC CAPITAL LETTER HARD SIGN"},{char:"&#x42B",desc:"CYRILLIC CAPITAL LETTER YERU"},{char:"&#x42C",desc:"CYRILLIC CAPITAL LETTER SOFT SIGN"},{char:"&#x42D",desc:"CYRILLIC CAPITAL LETTER E"},{char:"&#x42E",desc:"CYRILLIC CAPITAL LETTER YU"},{char:"&#x42F",desc:"CYRILLIC CAPITAL LETTER YA"},{char:"&#x430",desc:"CYRILLIC SMALL LETTER A"},{char:"&#x431",desc:"CYRILLIC SMALL LETTER BE"},{char:"&#x432",desc:"CYRILLIC SMALL LETTER VE"},{char:"&#x433",desc:"CYRILLIC SMALL LETTER GHE"},{char:"&#x434",desc:"CYRILLIC SMALL LETTER DE"},{char:"&#x435",desc:"CYRILLIC SMALL LETTER IE"},{char:"&#x436",desc:"CYRILLIC SMALL LETTER ZHE"},{char:"&#x437",desc:"CYRILLIC SMALL LETTER ZE"},{char:"&#x438",desc:"CYRILLIC SMALL LETTER I"},{char:"&#x439",desc:"CYRILLIC SMALL LETTER SHORT I"},{char:"&#x43A",desc:"CYRILLIC SMALL LETTER KA"},{char:"&#x43B",desc:"CYRILLIC SMALL LETTER EL"},{char:"&#x43C",desc:"CYRILLIC SMALL LETTER EM"},{char:"&#x43D",desc:"CYRILLIC SMALL LETTER EN"},{char:"&#x43E",desc:"CYRILLIC SMALL LETTER O"},{char:"&#x43F",desc:"CYRILLIC SMALL LETTER PE"},{char:"&#x440",desc:"CYRILLIC SMALL LETTER ER"},{char:"&#x441",desc:"CYRILLIC SMALL LETTER ES"},{char:"&#x442",desc:"CYRILLIC SMALL LETTER TE"},{char:"&#x443",desc:"CYRILLIC SMALL LETTER U"},{char:"&#x444",desc:"CYRILLIC SMALL LETTER EF"},{char:"&#x445",desc:"CYRILLIC SMALL LETTER HA"},{char:"&#x446",desc:"CYRILLIC SMALL LETTER TSE"},{char:"&#x447",desc:"CYRILLIC SMALL LETTER CHE"},{char:"&#x448",desc:"CYRILLIC SMALL LETTER SHA"},{char:"&#x449",desc:"CYRILLIC SMALL LETTER SHCHA"},{char:"&#x44A",desc:"CYRILLIC SMALL LETTER HARD SIGN"},{char:"&#x44B",desc:"CYRILLIC SMALL LETTER YERU"},{char:"&#x44C",desc:"CYRILLIC SMALL LETTER SOFT SIGN"},{char:"&#x44D",desc:"CYRILLIC SMALL LETTER E"},{char:"&#x44E",desc:"CYRILLIC SMALL LETTER YU"},{char:"&#x44F",desc:"CYRILLIC SMALL LETTER YA"},{char:"&#x450",desc:"CYRILLIC SMALL LETTER IE WITH GRAVE"},{char:"&#x451",desc:"CYRILLIC SMALL LETTER IO"},{char:"&#x452",desc:"CYRILLIC SMALL LETTER DJE"},{char:"&#x453",desc:"CYRILLIC SMALL LETTER GJE"},{char:"&#x454",desc:"CYRILLIC SMALL LETTER UKRAINIAN IE"},{char:"&#x455",desc:"CYRILLIC SMALL LETTER DZE"},{char:"&#x456",desc:"CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I"},{char:"&#x457",desc:"CYRILLIC SMALL LETTER YI"},{char:"&#x458",desc:"CYRILLIC SMALL LETTER JE"},{char:"&#x459",desc:"CYRILLIC SMALL LETTER LJE"},{char:"&#x45A",desc:"CYRILLIC SMALL LETTER NJE"},{char:"&#x45B",desc:"CYRILLIC SMALL LETTER TSHE"},{char:"&#x45C",desc:"CYRILLIC SMALL LETTER KJE"},{char:"&#x45D",desc:"CYRILLIC SMALL LETTER I WITH GRAVE"},{char:"&#x45E",desc:"CYRILLIC SMALL LETTER SHORT U"},{char:"&#x45F",desc:"CYRILLIC SMALL LETTER DZHE"}]},{title:"Punctuation",list:[{char:"&ndash;",desc:"EN DASH"},{char:"&mdash;",desc:"EM DASH"},{char:"&lsquo;",desc:"LEFT SINGLE QUOTATION MARK"},{char:"&rsquo;",desc:"RIGHT SINGLE QUOTATION MARK"},{char:"&sbquo;",desc:"SINGLE LOW-9 QUOTATION MARK"},{char:"&ldquo;",desc:"LEFT DOUBLE QUOTATION MARK"},{char:"&rdquo;",desc:"RIGHT DOUBLE QUOTATION MARK"},{char:"&bdquo;",desc:"DOUBLE LOW-9 QUOTATION MARK"},{char:"&dagger;",desc:"DAGGER"},{char:"&Dagger;",desc:"DOUBLE DAGGER"},{char:"&bull;",desc:"BULLET"},{char:"&hellip;",desc:"HORIZONTAL ELLIPSIS"},{char:"&permil;",desc:"PER MILLE SIGN"},{char:"&prime;",desc:"PRIME"},{char:"&Prime;",desc:"DOUBLE PRIME"},{char:"&lsaquo;",desc:"SINGLE LEFT-POINTING ANGLE QUOTATION MARK"},{char:"&rsaquo;",desc:"SINGLE RIGHT-POINTING ANGLE QUOTATION MARK"},{char:"&oline;",desc:"OVERLINE"},{char:"&frasl;",desc:"FRACTION SLASH"}]},{title:"Currency",list:[{char:"&#x20A0",desc:"EURO-CURRENCY SIGN"},{char:"&#x20A1",desc:"COLON SIGN"},{char:"&#x20A2",desc:"CRUZEIRO SIGN"},{char:"&#x20A3",desc:"FRENCH FRANC SIGN"},{char:"&#x20A4",desc:"LIRA SIGN"},{char:"&#x20A5",desc:"MILL SIGN"},{char:"&#x20A6",desc:"NAIRA SIGN"},{char:"&#x20A7",desc:"PESETA SIGN"},{char:"&#x20A8",desc:"RUPEE SIGN"},{char:"&#x20A9",desc:"WON SIGN"},{char:"&#x20AA",desc:"NEW SHEQEL SIGN"},{char:"&#x20AB",desc:"DONG SIGN"},{char:"&#x20AC",desc:"EURO SIGN"},{char:"&#x20AD",desc:"KIP SIGN"},{char:"&#x20AE",desc:"TUGRIK SIGN"},{char:"&#x20AF",desc:"DRACHMA SIGN"},{char:"&#x20B0",desc:"GERMAN PENNY SYMBOL"},{char:"&#x20B1",desc:"PESO SIGN"},{char:"&#x20B2",desc:"GUARANI SIGN"},{char:"&#x20B3",desc:"AUSTRAL SIGN"},{char:"&#x20B4",desc:"HRYVNIA SIGN"},{char:"&#x20B5",desc:"CEDI SIGN"},{char:"&#x20B6",desc:"LIVRE TOURNOIS SIGN"},{char:"&#x20B7",desc:"SPESMILO SIGN"},{char:"&#x20B8",desc:"TENGE SIGN"},{char:"&#x20B9",desc:"INDIAN RUPEE SIGN"}]},{title:"Arrows",list:[{char:"&#x2190",desc:"LEFTWARDS ARROW"},{char:"&#x2191",desc:"UPWARDS ARROW"},{char:"&#x2192",desc:"RIGHTWARDS ARROW"},{char:"&#x2193",desc:"DOWNWARDS ARROW"},{char:"&#x2194",desc:"LEFT RIGHT ARROW"},{char:"&#x2195",desc:"UP DOWN ARROW"},{char:"&#x2196",desc:"NORTH WEST ARROW"},{char:"&#x2197",desc:"NORTH EAST ARROW"},{char:"&#x2198",desc:"SOUTH EAST ARROW"},{char:"&#x2199",desc:"SOUTH WEST ARROW"},{char:"&#x219A",desc:"LEFTWARDS ARROW WITH STROKE"},{char:"&#x219B",desc:"RIGHTWARDS ARROW WITH STROKE"},{char:"&#x219C",desc:"LEFTWARDS WAVE ARROW"},{char:"&#x219D",desc:"RIGHTWARDS WAVE ARROW"},{char:"&#x219E",desc:"LEFTWARDS TWO HEADED ARROW"},{char:"&#x219F",desc:"UPWARDS TWO HEADED ARROW"},{char:"&#x21A0",desc:"RIGHTWARDS TWO HEADED ARROW"},{char:"&#x21A1",desc:"DOWNWARDS TWO HEADED ARROW"},{char:"&#x21A2",desc:"LEFTWARDS ARROW WITH TAIL"},{char:"&#x21A3",desc:"RIGHTWARDS ARROW WITH TAIL"},{char:"&#x21A4",desc:"LEFTWARDS ARROW FROM BAR"},{char:"&#x21A5",desc:"UPWARDS ARROW FROM BAR"},{char:"&#x21A6",desc:"RIGHTWARDS ARROW FROM BAR"},{char:"&#x21A7",desc:"DOWNWARDS ARROW FROM BAR"},{char:"&#x21A8",desc:"UP DOWN ARROW WITH BASE"},{char:"&#x21A9",desc:"LEFTWARDS ARROW WITH HOOK"},{char:"&#x21AA",desc:"RIGHTWARDS ARROW WITH HOOK"},{char:"&#x21AB",desc:"LEFTWARDS ARROW WITH LOOP"},{char:"&#x21AC",desc:"RIGHTWARDS ARROW WITH LOOP"},{char:"&#x21AD",desc:"LEFT RIGHT WAVE ARROW"},{char:"&#x21AE",desc:"LEFT RIGHT ARROW WITH STROKE"},{char:"&#x21AF",desc:"DOWNWARDS ZIGZAG ARROW"},{char:"&#x21B0",desc:"UPWARDS ARROW WITH TIP LEFTWARDS"},{char:"&#x21B1",desc:"UPWARDS ARROW WITH TIP RIGHTWARDS"},{char:"&#x21B2",desc:"DOWNWARDS ARROW WITH TIP LEFTWARDS"},{char:"&#x21B3",desc:"DOWNWARDS ARROW WITH TIP RIGHTWARDS"},{char:"&#x21B4",desc:"RIGHTWARDS ARROW WITH CORNER DOWNWARDS"},{char:"&#x21B5",desc:"DOWNWARDS ARROW WITH CORNER LEFTWARDS"},{char:"&#x21B6",desc:"ANTICLOCKWISE TOP SEMICIRCLE ARROW"},{char:"&#x21B7",desc:"CLOCKWISE TOP SEMICIRCLE ARROW"},{char:"&#x21B8",desc:"NORTH WEST ARROW TO LONG BAR"},{char:"&#x21B9",desc:"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR"},{char:"&#x21BA",desc:"ANTICLOCKWISE OPEN CIRCLE ARROW"},{char:"&#x21BB",desc:"CLOCKWISE OPEN CIRCLE ARROW"},{char:"&#x21BC",desc:"LEFTWARDS HARPOON WITH BARB UPWARDS"},{char:"&#x21BD",desc:"LEFTWARDS HARPOON WITH BARB DOWNWARDS"},{char:"&#x21BE",desc:"UPWARDS HARPOON WITH BARB RIGHTWARDS"},{char:"&#x21BF",desc:"UPWARDS HARPOON WITH BARB LEFTWARDS"},{char:"&#x21C0",desc:"RIGHTWARDS HARPOON WITH BARB UPWARDS"},{char:"&#x21C1",desc:"RIGHTWARDS HARPOON WITH BARB DOWNWARDS"},{char:"&#x21C2",desc:"DOWNWARDS HARPOON WITH BARB RIGHTWARDS"},{char:"&#x21C3",desc:"DOWNWARDS HARPOON WITH BARB LEFTWARDS"},{char:"&#x21C4",desc:"RIGHTWARDS ARROW OVER LEFTWARDS ARROW"},{char:"&#x21C5",desc:"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW"},{char:"&#x21C6",desc:"LEFTWARDS ARROW OVER RIGHTWARDS ARROW"},{char:"&#x21C7",desc:"LEFTWARDS PAIRED ARROWS"},{char:"&#x21C8",desc:"UPWARDS PAIRED ARROWS"},{char:"&#x21C9",desc:"RIGHTWARDS PAIRED ARROWS"},{char:"&#x21CA",desc:"DOWNWARDS PAIRED ARROWS"},{char:"&#x21CB",desc:"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON"},{char:"&#x21CC",desc:"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON"},{char:"&#x21CD",desc:"LEFTWARDS DOUBLE ARROW WITH STROKE"},{char:"&#x21CE",desc:"LEFT RIGHT DOUBLE ARROW WITH STROKE"},{char:"&#x21CF",desc:"RIGHTWARDS DOUBLE ARROW WITH STROKE"},{char:"&#x21D0",desc:"LEFTWARDS DOUBLE ARROW"},{char:"&#x21D1",desc:"UPWARDS DOUBLE ARROW"},{char:"&#x21D2",desc:"RIGHTWARDS DOUBLE ARROW"},{char:"&#x21D3",desc:"DOWNWARDS DOUBLE ARROW"},{char:"&#x21D4",desc:"LEFT RIGHT DOUBLE ARROW"},{char:"&#x21D5",desc:"UP DOWN DOUBLE ARROW"},{char:"&#x21D6",desc:"NORTH WEST DOUBLE ARROW"},{char:"&#x21D7",desc:"NORTH EAST DOUBLE ARROW"},{char:"&#x21D8",desc:"SOUTH EAST DOUBLE ARROW"},{char:"&#x21D9",desc:"SOUTH WEST DOUBLE ARROW"},{char:"&#x21DA",desc:"LEFTWARDS TRIPLE ARROW"},{char:"&#x21DB",desc:"RIGHTWARDS TRIPLE ARROW"},{char:"&#x21DC",desc:"LEFTWARDS SQUIGGLE ARROW"},{char:"&#x21DD",desc:"RIGHTWARDS SQUIGGLE ARROW"},{char:"&#x21DE",desc:"UPWARDS ARROW WITH DOUBLE STROKE"},{char:"&#x21DF",desc:"DOWNWARDS ARROW WITH DOUBLE STROKE"},{char:"&#x21E0",desc:"LEFTWARDS DASHED ARROW"},{char:"&#x21E1",desc:"UPWARDS DASHED ARROW"},{char:"&#x21E2",desc:"RIGHTWARDS DASHED ARROW"},{char:"&#x21E3",desc:"DOWNWARDS DASHED ARROW"},{char:"&#x21E4",desc:"LEFTWARDS ARROW TO BAR"},{char:"&#x21E5",desc:"RIGHTWARDS ARROW TO BAR"},{char:"&#x21E6",desc:"LEFTWARDS WHITE ARROW"},{char:"&#x21E7",desc:"UPWARDS WHITE ARROW"},{char:"&#x21E8",desc:"RIGHTWARDS WHITE ARROW"},{char:"&#x21E9",desc:"DOWNWARDS WHITE ARROW"},{char:"&#x21EA",desc:"UPWARDS WHITE ARROW FROM BAR"},{char:"&#x21EB",desc:"UPWARDS WHITE ARROW ON PEDESTAL"},{char:"&#x21EC",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR"},{char:"&#x21ED",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR"},{char:"&#x21EE",desc:"UPWARDS WHITE DOUBLE ARROW"},{char:"&#x21EF",desc:"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL"},{char:"&#x21F0",desc:"RIGHTWARDS WHITE ARROW FROM WALL"},{char:"&#x21F1",desc:"NORTH WEST ARROW TO CORNER"},{char:"&#x21F2",desc:"SOUTH EAST ARROW TO CORNER"},{char:"&#x21F3",desc:"UP DOWN WHITE ARROW"},{char:"&#x21F4",desc:"RIGHT ARROW WITH SMALL CIRCLE"},{char:"&#x21F5",desc:"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW"},{char:"&#x21F6",desc:"THREE RIGHTWARDS ARROWS"},{char:"&#x21F7",desc:"LEFTWARDS ARROW WITH VERTICAL STROKE"},{char:"&#x21F8",desc:"RIGHTWARDS ARROW WITH VERTICAL STROKE"},{char:"&#x21F9",desc:"LEFT RIGHT ARROW WITH VERTICAL STROKE"},{char:"&#x21FA",desc:"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FB",desc:"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FC",desc:"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FD",desc:"LEFTWARDS OPEN-HEADED ARROW"},{char:"&#x21FE",desc:"RIGHTWARDS OPEN-HEADED ARROW"},{char:"&#x21FF",desc:"LEFT RIGHT OPEN-HEADED ARROW"}]},{title:"Math",list:[{char:"&forall;",desc:"FOR ALL"},{char:"&part;",desc:"PARTIAL DIFFERENTIAL"},{char:"&exist;",desc:"THERE EXISTS"},{char:"&empty;",desc:"EMPTY SET"},{char:"&nabla;",desc:"NABLA"},{char:"&isin;",desc:"ELEMENT OF"},{char:"&notin;",desc:"NOT AN ELEMENT OF"},{char:"&ni;",desc:"CONTAINS AS MEMBER"},{char:"&prod;",desc:"N-ARY PRODUCT"},{char:"&sum;",desc:"N-ARY SUMMATION"},{char:"&minus;",desc:"MINUS SIGN"},{char:"&lowast;",desc:"ASTERISK OPERATOR"},{char:"&radic;",desc:"SQUARE ROOT"},{char:"&prop;",desc:"PROPORTIONAL TO"},{char:"&infin;",desc:"INFINITY"},{char:"&ang;",desc:"ANGLE"},{char:"&and;",desc:"LOGICAL AND"},{char:"&or;",desc:"LOGICAL OR"},{char:"&cap;",desc:"INTERSECTION"},{char:"&cup;",desc:"UNION"},{char:"&int;",desc:"INTEGRAL"},{char:"&there4;",desc:"THEREFORE"},{char:"&sim;",desc:"TILDE OPERATOR"},{char:"&cong;",desc:"APPROXIMATELY EQUAL TO"},{char:"&asymp;",desc:"ALMOST EQUAL TO"},{char:"&ne;",desc:"NOT EQUAL TO"},{char:"&equiv;",desc:"IDENTICAL TO"},{char:"&le;",desc:"LESS-THAN OR EQUAL TO"},{char:"&ge;",desc:"GREATER-THAN OR EQUAL TO"},{char:"&sub;",desc:"SUBSET OF"},{char:"&sup;",desc:"SUPERSET OF"},{char:"&nsub;",desc:"NOT A SUBSET OF"},{char:"&sube;",desc:"SUBSET OF OR EQUAL TO"},{char:"&supe;",desc:"SUPERSET OF OR EQUAL TO"},{char:"&oplus;",desc:"CIRCLED PLUS"},{char:"&otimes;",desc:"CIRCLED TIMES"},{char:"&perp;",desc:"UP TACK"}]},{title:"Misc",list:[{char:"&spades;",desc:"BLACK SPADE SUIT"},{char:"&clubs;",desc:"BLACK CLUB SUIT"},{char:"&hearts;",desc:"BLACK HEART SUIT"},{char:"&diams;",desc:"BLACK DIAMOND SUIT"},{char:"&#x2669",desc:"QUARTER NOTE"},{char:"&#x266A",desc:"EIGHTH NOTE"},{char:"&#x266B",desc:"BEAMED EIGHTH NOTES"},{char:"&#x266C",desc:"BEAMED SIXTEENTH NOTES"},{char:"&#x266D",desc:"MUSIC FLAT SIGN"},{char:"&#x266E",desc:"MUSIC NATURAL SIGN"},{char:"&#x2600",desc:"BLACK SUN WITH RAYS"},{char:"&#x2601",desc:"CLOUD"},{char:"&#x2602",desc:"UMBRELLA"},{char:"&#x2603",desc:"SNOWMAN"},{char:"&#x2615",desc:"HOT BEVERAGE"},{char:"&#x2618",desc:"SHAMROCK"},{char:"&#x262F",desc:"YIN YANG"},{char:"&#x2714",desc:"HEAVY CHECK MARK"},{char:"&#x2716",desc:"HEAVY MULTIPLICATION X"},{char:"&#x2744",desc:"SNOWFLAKE"},{char:"&#x275B",desc:"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275C",desc:"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275D",desc:"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275E",desc:"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT"},{char:"&#x2764",desc:"HEAVY BLACK HEART"}]}]}),a.FE.PLUGINS.specialCharacters=function(b){function c(){}function d(){for(var c='<div class="fr-special-characters-modal">',d=0;d<a.FE.DEFAULTS.specialCharactersSets.length;d++){for(var e=a.FE.DEFAULTS.specialCharactersSets[d],f=e.list,g='<div class="fr-special-characters-list"><p class="fr-special-characters-title">'+e.title+"</p>",h=0;h<f.length;h++){var i=f[h];g+='<span class="fr-command fr-special-character" tabIndex="-1" role="button" value="'+i.char+'" title="'+i.desc+'">'+i.char+'<span class="fr-sr-only">'+b.language.translate(i.desc)+"&nbsp;&nbsp;&nbsp;</span></span>"}c+=g+"</div>"}return c+="</div>"}function e(a,c){b.events.disableBlur(),a.focus(),c.preventDefault(),c.stopPropagation()}function f(){b.events.$on(l,"keydown",function(c){var d=c.which,f=l.find("span.fr-special-character:focus:first");if(!(f.length||d!=a.FE.KEYCODE.F10||b.keys.ctrlKey(c)||c.shiftKey)&&c.altKey){return e(l.find("span.fr-special-character:first"),c),!1}if(d==a.FE.KEYCODE.TAB||d==a.FE.KEYCODE.ARROW_LEFT||d==a.FE.KEYCODE.ARROW_RIGHT){var g=null,h=null,i=!1;return d==a.FE.KEYCODE.ARROW_LEFT||d==a.FE.KEYCODE.ARROW_RIGHT?(h=d==a.FE.KEYCODE.ARROW_RIGHT,i=!0):h=!c.shiftKey,f.length?(i&&(g=h?f.nextAll("span.fr-special-character:first"):f.prevAll("span.fr-special-character:first")),g&&g.length||(g=h?f.parent().next().find("span.fr-special-character:first"):f.parent().prev().find("span.fr-special-character:"+(i?"last":"first")),g.length||(g=l.find("span.fr-special-character:"+(h?"first":"last"))))):g=l.find("span.fr-special-character:"+(h?"first":"last")),e(g,c),!1}if(d!=a.FE.KEYCODE.ENTER||!f.length)return!0;(j.data("instance")||b).specialCharacters.insert(f)},!0)}function g(){if(!j){var c="<h4>Special Characters</h4>",e=d(),g=b.modals.create(m,c,e);j=g.$modal,k=g.$head,l=g.$body,b.events.$on(a(b.o_win),"resize",function(){(j.data("instance")||b).modals.resize(m)}),b.events.bindClick(l,".fr-special-character",function(c){var d=j.data("instance")||b,e=a(c.currentTarget);d.specialCharacters.insert(e)}),f()}b.modals.show(m),b.modals.resize(m)}function h(){b.modals.hide(m)}function i(a){b.specialCharacters.hide(),b.undo.saveStep(),b.html.insert(a.attr("value"),!0),b.undo.saveStep()}var j,k,l,m="special_characters";return{_init:c,show:g,hide:h,insert:i}},a.FroalaEditor.DefineIcon("specialCharacters",{template:"text",NAME:"&#937;"}),a.FE.RegisterCommand("specialCharacters",{title:"Special Characters",icon:"specialCharacters",undo:!1,focus:!1,modal:!0,callback:function(){this.specialCharacters.show()},plugin:"specialCharacters",showOnMobile:!1})});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.POPUP_TEMPLATES,{"table.insert":"[_BUTTONS_][_ROWS_COLUMNS_]","table.edit":"[_BUTTONS_]","table.colors":"[_BUTTONS_][_COLORS_]"}),a.extend(a.FE.DEFAULTS,{tableInsertMaxSize:10,tableEditButtons:["tableHeader","tableRemove","|","tableRows","tableColumns","tableStyle","-","tableCells","tableCellBackground","tableCellVerticalAlign","tableCellHorizontalAlign","tableCellStyle"],tableInsertButtons:["tableBack","|"],tableResizer:!0,tableResizerOffset:5,tableResizingLimit:30,tableColorsButtons:["tableBack","|"],tableColors:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],tableColorsStep:7,tableCellStyles:{"fr-highlighted":"Highlighted","fr-thick":"Thick"},tableStyles:{"fr-dashed-borders":"Dashed Borders","fr-alternate-rows":"Alternate Rows"},tableCellMultipleStyles:!0,tableMultipleStyles:!0,tableInsertHelper:!0,tableInsertHelperOffset:15}),a.FE.PLUGINS.table=function(b){function c(){var a=b.$tb.find('.fr-command[data-cmd="insertTable"]'),c=b.popups.get("table.insert");if(c||(c=g()),!c.hasClass("fr-active")){b.popups.refresh("table.insert"),b.popups.setContainer("table.insert",b.$tb);var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("table.insert",d,e,a.outerHeight())}}function d(){var a=I();if(a){var c=b.popups.get("table.edit");c||(c=k()),b.popups.setContainer("table.edit",b.$sc);var d=Q(a),e=(d.left+d.right)/2,f=d.bottom;b.popups.show("table.edit",e,f,d.bottom-d.top),b.edit.isDisabled()&&(b.toolbar.disable(),b.$el.removeClass("fr-no-selection"),b.edit.on(),b.button.bulkRefresh(),b.selection.setAtEnd(b.$el.find(".fr-selected-cell:last").get(0)),b.selection.restore())}}function e(){var a=I();if(a){var c=b.popups.get("table.colors");c||(c=l()),b.popups.setContainer("table.colors",b.$sc);var d=Q(a),e=(d.left+d.right)/2,f=d.bottom;o(),b.popups.show("table.colors",e,f,d.bottom-d.top)}}function f(){0===sa().length&&b.toolbar.enable()}function g(c){if(c)return b.popups.onHide("table.insert",function(){b.popups.get("table.insert").find('.fr-table-size .fr-select-table-size > span[data-row="1"][data-col="1"]').trigger("mouseenter")}),!0;var d="";b.opts.tableInsertButtons.length>0&&(d='<div class="fr-buttons">'+b.button.buildList(b.opts.tableInsertButtons)+"</div>");var e={buttons:d,rows_columns:i()},f=b.popups.create("table.insert",e);return b.events.$on(f,"mouseenter",".fr-table-size .fr-select-table-size .fr-table-cell",function(b){h(a(b.currentTarget))},!0),j(f),f}function h(a){var c=a.data("row"),d=a.data("col"),e=a.parent();e.siblings(".fr-table-size-info").html(c+" &times; "+d),e.find("> span").removeClass("hover fr-active-item");for(var f=1;f<=b.opts.tableInsertMaxSize;f++)for(var g=0;g<=b.opts.tableInsertMaxSize;g++){var h=e.find('> span[data-row="'+f+'"][data-col="'+g+'"]');f<=c&&g<=d?h.addClass("hover"):f<=c+1||f<=2&&!b.helpers.isMobile()?h.css("display","inline-block"):f>2&&!b.helpers.isMobile()&&h.css("display","none")}a.addClass("fr-active-item")}function i(){for(var a='<div class="fr-table-size"><div class="fr-table-size-info">1 &times; 1</div><div class="fr-select-table-size">',c=1;c<=b.opts.tableInsertMaxSize;c++){for(var d=1;d<=b.opts.tableInsertMaxSize;d++){var e="inline-block";c>2&&!b.helpers.isMobile()&&(e="none");var f="fr-table-cell ";1==c&&1==d&&(f+=" hover"),a+='<span class="fr-command '+f+'" tabIndex="-1" data-cmd="tableInsert" data-row="'+c+'" data-col="'+d+'" data-param1="'+c+'" data-param2="'+d+'" style="display: '+e+';" role="button"><span></span><span class="fr-sr-only">'+c+" &times; "+d+"&nbsp;&nbsp;&nbsp;</span></span>"}a+='<div class="new-line"></div>'}return a+="</div></div>"}function j(c){b.events.$on(c,"focus","[tabIndex]",function(b){h(a(b.currentTarget))}),b.events.on("popup.tab",function(c){var d=a(c.currentTarget);if(!b.popups.isVisible("table.insert")||!d.is("span, a"))return!0;var e,f=c.which;if(a.FE.KEYCODE.ARROW_UP==f||a.FE.KEYCODE.ARROW_DOWN==f||a.FE.KEYCODE.ARROW_LEFT==f||a.FE.KEYCODE.ARROW_RIGHT==f){if(d.is("span.fr-table-cell")){var g=d.parent().find("span.fr-table-cell"),i=g.index(d),j=b.opts.tableInsertMaxSize,k=i%j,l=Math.floor(i/j);a.FE.KEYCODE.ARROW_UP==f?l=Math.max(0,l-1):a.FE.KEYCODE.ARROW_DOWN==f?l=Math.min(b.opts.tableInsertMaxSize-1,l+1):a.FE.KEYCODE.ARROW_LEFT==f?k=Math.max(0,k-1):a.FE.KEYCODE.ARROW_RIGHT==f&&(k=Math.min(b.opts.tableInsertMaxSize-1,k+1));var m=l*j+k,n=a(g.get(m));h(n),b.events.disableBlur(),n.focus(),e=!1}}else a.FE.KEYCODE.ENTER==f&&(b.button.exec(d),e=!1);return!1===e&&(c.preventDefault(),c.stopPropagation()),e},!0)}function k(a){if(a)return b.popups.onHide("table.edit",f),!0;var c="";b.opts.tableEditButtons.length>0&&(c='<div class="fr-buttons">'+b.button.buildList(b.opts.tableEditButtons)+"</div>");var e={buttons:c},g=b.popups.create("table.edit",e);return b.events.$on(b.$wp,"scroll.table-edit",function(){b.popups.isVisible("table.edit")&&d()}),g}function l(){var a="";b.opts.tableColorsButtons.length>0&&(a='<div class="fr-buttons fr-table-colors-buttons">'+b.button.buildList(b.opts.tableColorsButtons)+"</div>");var c={buttons:a,colors:m()},d=b.popups.create("table.colors",c);return b.events.$on(b.$wp,"scroll.table-colors",function(){b.popups.isVisible("table.colors")&&e()}),n(d),d}function m(){for(var a='<div class="fr-table-colors">',c=0;c<b.opts.tableColors.length;c++)0!==c&&c%b.opts.tableColorsStep==0&&(a+="<br>"),"REMOVE"!=b.opts.tableColors[c]?a+='<span class="fr-command" style="background: '+b.opts.tableColors[c]+';" tabIndex="-1" role="button" data-cmd="tableCellBackgroundColor" data-param1="'+b.opts.tableColors[c]+'"><span class="fr-sr-only">'+b.language.translate("Color")+" "+b.opts.tableColors[c]+"&nbsp;&nbsp;&nbsp;</span></span>":a+='<span class="fr-command" data-cmd="tableCellBackgroundColor" tabIndex="-1" role="button" data-param1="REMOVE" title="'+b.language.translate("Clear Formatting")+'">'+b.icon.create("tableColorRemove")+'<span class="fr-sr-only">'+b.language.translate("Clear Formatting")+"</span></span>";return a+="</div>"}function n(c){b.events.on("popup.tab",function(d){var e=a(d.currentTarget);if(!b.popups.isVisible("table.colors")||!e.is("span"))return!0;var f=d.which,g=!0;if(a.FE.KEYCODE.TAB==f){var h=c.find(".fr-buttons");g=!b.accessibility.focusToolbar(h,!!d.shiftKey)}else if(a.FE.KEYCODE.ARROW_UP==f||a.FE.KEYCODE.ARROW_DOWN==f||a.FE.KEYCODE.ARROW_LEFT==f||a.FE.KEYCODE.ARROW_RIGHT==f){var i=e.parent().find("span.fr-command"),j=i.index(e),k=b.opts.colorsStep,l=Math.floor(i.length/k),m=j%k,n=Math.floor(j/k),o=n*k+m,p=l*k;a.FE.KEYCODE.ARROW_UP==f?o=((o-k)%p+p)%p:a.FE.KEYCODE.ARROW_DOWN==f?o=(o+k)%p:a.FE.KEYCODE.ARROW_LEFT==f?o=((o-1)%p+p)%p:a.FE.KEYCODE.ARROW_RIGHT==f&&(o=(o+1)%p);var q=a(i.get(o));b.events.disableBlur(),q.focus(),g=!1}else a.FE.KEYCODE.ENTER==f&&(b.button.exec(e),g=!1);return!1===g&&(d.preventDefault(),d.stopPropagation()),g},!0)}function o(){var a=b.popups.get("table.colors"),c=b.$el.find(".fr-selected-cell:first");a.find(".fr-selected-color").removeClass("fr-selected-color fr-active-item"),a.find('span[data-param1="'+b.helpers.RGBToHex(c.css("background-color"))+'"]').addClass("fr-selected-color fr-active-item")}function p(c,d){var e,f,g='<table style="width: 100%;"><tbody>',h=100/d;for(e=0;e<c;e++){for(g+="<tr>",f=0;f<d;f++)g+='<td style="width: '+h.toFixed(4)+'%;">',0===e&&0===f&&(g+=a.FE.MARKERS),g+="<br></td>";g+="</tr>"}g+="</tbody></table>",b.html.insert(g),b.selection.restore()}function q(){if(sa().length>0){var a=ta();b.selection.setBefore(a.get(0))||b.selection.setAfter(a.get(0)),b.selection.restore(),b.popups.hide("table.edit"),a.remove(),b.toolbar.enable()}}function r(){var b=ta();if(b.length>0&&0===b.find("th").length){var c,e="<thead><tr>",f=0;for(b.find("tr:first > td").each(function(){var b=a(this);f+=parseInt(b.attr("colspan"),10)||1}),c=0;c<f;c++)e+="<th><br></th>";e+="</tr></thead>",b.prepend(e),d()}}function s(){var a=ta(),c=a.find("thead");if(c.length>0)if(0===a.find("tbody tr").length)q();else if(c.remove(),sa().length>0)d();else{b.popups.hide("table.edit");var e=a.find("tbody tr:first td:first").get(0);e&&(b.selection.setAtEnd(e),b.selection.restore())}}function t(c){var e=ta();if(e.length>0){if(b.$el.find("th.fr-selected-cell").length>0&&"above"==c)return;var f,g,h=I(),i=O(h);g="above"==c?i.min_i:i.max_i;var j="<tr>";for(f=0;f<h[g].length;f++)if("below"==c&&g<h.length-1&&h[g][f]==h[g+1][f]||"above"==c&&g>0&&h[g][f]==h[g-1][f]){if(0===f||f>0&&h[g][f]!=h[g][f-1]){var k=a(h[g][f]);k.attr("rowspan",parseInt(k.attr("rowspan"),10)+1)}}else j+="<td><br></td>";j+="</tr>";var l=a(e.find("tr").not(e.find("table tr")).get(g));"below"==c?l.after(j):"above"==c&&(l.before(j),b.popups.isVisible("table.edit")&&d())}}function u(){var c=ta();if(c.length>0){var d,e,f,g=I(),h=O(g);if(0===h.min_i&&h.max_i==g.length-1)q();else{for(d=h.max_i;d>=h.min_i;d--){for(f=a(c.find("tr").not(c.find("table tr")).get(d)),e=0;e<g[d].length;e++)if(0===e||g[d][e]!=g[d][e-1]){var i=a(g[d][e]);if(parseInt(i.attr("rowspan"),10)>1){var j=parseInt(i.attr("rowspan"),10)-1;1==j?i.removeAttr("rowspan"):i.attr("rowspan",j)}if(d<g.length-1&&g[d][e]==g[d+1][e]&&(0===d||g[d][e]!=g[d-1][e])){for(var k=g[d][e],l=e;l>0&&g[d][l]==g[d][l-1];)l--;0===l?a(c.find("tr").not(c.find("table tr")).get(d+1)).prepend(k):a(g[d+1][l-1]).after(k)}}var m=f.parent();f.remove(),0===m.find("tr").length&&m.remove(),g=I(c)}A(0,g.length-1,0,g[0].length-1,c),h.min_i>0?b.selection.setAtEnd(g[h.min_i-1][0]):b.selection.setAtEnd(g[0][0]),b.selection.restore(),b.popups.hide("table.edit")}}}function v(c){var e=ta();if(e.length>0){var f,g=I(),h=O(g);f="before"==c?h.min_j:h.max_j;var i,j=100/g[0].length,k=100/(g[0].length+1);e.find("th, td").each(function(){i=a(this),i.data("old-width",i.outerWidth()/e.outerWidth()*100)}),e.find("tr").not(e.find("table tr")).each(function(b){for(var d,e=a(this),h=0,i=0;h-1<f;){if(!(d=e.find("> th, > td").get(i))){d=null;break}d==g[b][h]?(h+=parseInt(a(d).attr("colspan"),10)||1,i++):(h+=parseInt(a(g[b][h]).attr("colspan"),10)||1,"after"==c&&(d=0===i?-1:e.find("> th, > td").get(i-1)))}var l=a(d);if("after"==c&&h-1>f||"before"==c&&f>0&&g[b][f]==g[b][f-1]){if(0===b||b>0&&g[b][f]!=g[b-1][f]){var m=parseInt(l.attr("colspan"),10)+1;l.attr("colspan",m),l.css("width",(l.data("old-width")*k/j+k).toFixed(4)+"%"),l.removeData("old-width")}}else{var n;n=e.find("th").length>0?'<th style="width: '+k.toFixed(4)+'%;"><br></th>':'<td style="width: '+k.toFixed(4)+'%;"><br></td>',-1==d?e.prepend(n):null==d?e.append(n):"before"==c?l.before(n):"after"==c&&l.after(n)}}),e.find("th, td").each(function(){i=a(this),i.data("old-width")&&(i.css("width",(i.data("old-width")*k/j).toFixed(4)+"%"),i.removeData("old-width"))}),b.popups.isVisible("table.edit")&&d()}}function w(){var c=ta();if(c.length>0){var d,e,f,g=I(),h=O(g);if(0===h.min_j&&h.max_j==g[0].length-1)q();else{var i=100/g[0].length,j=100/(g[0].length-h.max_j+h.min_j-1);for(c.find("th, td").each(function(){f=a(this),f.hasClass("fr-selected-cell")||f.data("old-width",f.outerWidth()/c.outerWidth()*100)}),e=h.max_j;e>=h.min_j;e--)for(d=0;d<g.length;d++)if(0===d||g[d][e]!=g[d-1][e])if(f=a(g[d][e]),(parseInt(f.attr("colspan"),10)||1)>1){var k=parseInt(f.attr("colspan"),10)-1;1==k?f.removeAttr("colspan"):f.attr("colspan",k),f.css("width",((f.data("old-width")-ka(e,g))*j/i).toFixed(4)+"%"),f.removeData("old-width")}else{var l=a(f.parent().get(0));f.remove(),0===l.find("> th, > td").length&&(0===l.prev().length||0===l.next().length||l.prev().find("> th[rowspan], > td[rowspan]").length<l.prev().find("> th, > td").length)&&l.remove()}A(0,g.length-1,0,g[0].length-1,c),h.min_j>0?b.selection.setAtEnd(g[h.min_i][h.min_j-1]):b.selection.setAtEnd(g[h.min_i][0]),b.selection.restore(),b.popups.hide("table.edit"),c.find("th, td").each(function(){f=a(this),f.data("old-width")&&(f.css("width",(f.data("old-width")*j/i).toFixed(4)+"%"),f.removeData("old-width"))})}}}function x(a,b,c){var d,e,f,g,h,i=0,j=I(c);for(b=Math.min(b,j[0].length-1),e=a;e<=b;e++)if(!(e>a&&j[0][e]==j[0][e-1])&&(g=parseInt(j[0][e].getAttribute("colspan"),10)||1)>1&&j[0][e]==j[0][e+1])for(i=g-1,d=1;d<j.length;d++)if(j[d][e]!=j[d-1][e]){for(f=e;f<e+g;f++)if((h=parseInt(j[d][f].getAttribute("colspan"),10)||1)>1&&j[d][f]==j[d][f+1])i=Math.min(i,h-1),f+=i;else if(!(i=Math.max(0,i-1)))break;if(!i)break}i&&z(j,i,"colspan",0,j.length-1,a,b)}function y(a,b,c){var d,e,f,g,h,i=0,j=I(c);for(b=Math.min(b,j.length-1),d=a;d<=b;d++)if(!(d>a&&j[d][0]==j[d-1][0])&&(g=parseInt(j[d][0].getAttribute("rowspan"),10)||1)>1&&j[d][0]==j[d+1][0])for(i=g-1,e=1;e<j[0].length;e++)if(j[d][e]!=j[d][e-1]){for(f=d;f<d+g;f++)if((h=parseInt(j[f][e].getAttribute("rowspan"),10)||1)>1&&j[f][e]==j[f+1][e])i=Math.min(i,h-1),f+=i;else if(!(i=Math.max(0,i-1)))break;if(!i)break}i&&z(j,i,"rowspan",a,b,0,j[0].length-1)}function z(a,b,c,d,e,f,g){var h,i,j;for(h=d;h<=e;h++)for(i=f;i<=g;i++)h>d&&a[h][i]==a[h-1][i]||i>f&&a[h][i]==a[h][i-1]||(j=parseInt(a[h][i].getAttribute(c),10)||1)>1&&(j-b>1?a[h][i].setAttribute(c,j-b):a[h][i].removeAttribute(c))}function A(a,b,c,d,e){y(a,b,e),x(c,d,e)}function B(){if(sa().length>1&&(0===b.$el.find("th.fr-selected-cell").length||0===b.$el.find("td.fr-selected-cell").length)){L();var c,e,f=I(),g=O(f),h=b.$el.find(".fr-selected-cell"),i=a(h[0]),j=i.parent(),k=j.find(".fr-selected-cell"),l=i.closest("table"),m=i.html(),n=0;for(c=0;c<k.length;c++)n+=a(k[c]).outerWidth();for(i.css("width",(n/l.outerWidth()*100).toFixed(4)+"%"),g.min_j<g.max_j&&i.attr("colspan",g.max_j-g.min_j+1),g.min_i<g.max_i&&i.attr("rowspan",g.max_i-g.min_i+1),c=1;c<h.length;c++)e=a(h[c]),"<br>"!=e.html()&&""!==e.html()&&(m+="<br>"+e.html()),e.remove();i.html(m),b.selection.setAtEnd(i.get(0)),b.selection.restore(),b.toolbar.enable(),y(g.min_i,g.max_i,l);var o=l.find("tr:empty");for(c=o.length-1;c>=0;c--)a(o[c]).remove();x(g.min_j,g.max_j,l),d()}}function C(){if(1==sa().length){var c=b.$el.find(".fr-selected-cell"),d=c.parent(),e=c.closest("table"),f=parseInt(c.attr("rowspan"),10),g=I(),h=J(c.get(0),g),i=c.clone().html("<br>");if(f>1){var j=Math.ceil(f/2);j>1?c.attr("rowspan",j):c.removeAttr("rowspan"),f-j>1?i.attr("rowspan",f-j):i.removeAttr("rowspan");for(var k=h.row+j,l=0===h.col?h.col:h.col-1;l>=0&&(g[k][l]==g[k][l-1]||k>0&&g[k][l]==g[k-1][l]);)l--;-1==l?a(e.find("tr").not(e.find("table tr")).get(k)).prepend(i):a(g[k][l]).after(i)}else{var m,n=a("<tr>").append(i);for(m=0;m<g[0].length;m++)if(0===m||g[h.row][m]!=g[h.row][m-1]){var o=a(g[h.row][m]);o.is(c)||o.attr("rowspan",(parseInt(o.attr("rowspan"),10)||1)+1)}d.after(n)}M(),b.popups.hide("table.edit")}}function D(){if(1==sa().length){var c=b.$el.find(".fr-selected-cell"),d=parseInt(c.attr("colspan"),10)||1,e=c.parent().outerWidth(),f=c.outerWidth(),g=c.clone().html("<br>"),h=I(),i=J(c.get(0),h);if(d>1){var j=Math.ceil(d/2);f=la(i.col,i.col+j-1,h)/e*100;var k=la(i.col+j,i.col+d-1,h)/e*100;j>1?c.attr("colspan",j):c.removeAttr("colspan"),d-j>1?g.attr("colspan",d-j):g.removeAttr("colspan"),c.css("width",f.toFixed(4)+"%"),g.css("width",k.toFixed(4)+"%")}else{var l;for(l=0;l<h.length;l++)if(0===l||h[l][i.col]!=h[l-1][i.col]){var m=a(h[l][i.col]);if(!m.is(c)){var n=(parseInt(m.attr("colspan"),10)||1)+1;m.attr("colspan",n)}}f=f/e*100/2,c.css("width",f.toFixed(4)+"%"),g.css("width",f.toFixed(4)+"%")}c.after(g),M(),b.popups.hide("table.edit")}}function E(a){"REMOVE"!=a?b.$el.find(".fr-selected-cell").css("background-color",b.helpers.HEXtoRGB(a)):b.$el.find(".fr-selected-cell").css("background-color","")}function F(a){b.$el.find(".fr-selected-cell").css("vertical-align",a)}function G(a){b.$el.find(".fr-selected-cell").css("text-align",a)}function H(a,b,c,d){if(b.length>0){if(!c){var e=Object.keys(d);e.splice(e.indexOf(a),1),b.removeClass(e.join(" "))}b.toggleClass(a)}}function I(b){b=b||null;var c=[];if(null==b&&sa().length>0&&(b=ta()),b)return b.find("tr").not(b.find("table tr")).each(function(b,d){var e=a(d),f=0;e.find("> th, > td").each(function(d,e){for(var g=a(e),h=parseInt(g.attr("colspan"),10)||1,i=parseInt(g.attr("rowspan"),10)||1,j=b;j<b+i;j++)for(var k=f;k<f+h;k++)c[j]||(c[j]=[]),c[j][k]?f++:c[j][k]=e;f+=h})}),c}function J(a,b){for(var c=0;c<b.length;c++)for(var d=0;d<b[c].length;d++)if(b[c][d]==a)return{row:c,col:d}}function K(a,b,c){for(var d=a+1,e=b+1;d<c.length;){if(c[d][b]!=c[a][b]){d--;break}d++}for(d==c.length&&d--;e<c[a].length;){if(c[a][e]!=c[a][b]){e--;break}e++}return e==c[a].length&&e--,{row:d,col:e}}function L(){b.el.querySelector(".fr-cell-fixed")&&b.el.querySelector(".fr-cell-fixed").classList.remove("fr-cell-fixed"),b.el.querySelector(".fr-cell-handler")&&b.el.querySelector(".fr-cell-handler").classList.remove("fr-cell-handler")}function M(){var c=b.$el.find(".fr-selected-cell");c.length>0&&c.each(function(){var b=a(this);b.removeClass("fr-selected-cell"),""===b.attr("class")&&b.removeAttr("class")}),L()}function N(){setTimeout(function(){b.selection.clear(),b.$el.addClass("fr-no-selection"),b.$el.blur()},0)}function O(a){var c=b.$el.find(".fr-selected-cell");if(c.length>0){var d,e=a.length,f=0,g=a[0].length,h=0;for(d=0;d<c.length;d++){var i=J(c[d],a),j=K(i.row,i.col,a);e=Math.min(i.row,e),f=Math.max(j.row,f),g=Math.min(i.col,g),h=Math.max(j.col,h)}return{min_i:e,max_i:f,min_j:g,max_j:h}}return null}function P(b,c,d,e,f){var g,h,i,j,k=b,l=c,m=d,n=e;for(g=k;g<=l;g++)((parseInt(a(f[g][m]).attr("rowspan"),10)||1)>1||(parseInt(a(f[g][m]).attr("colspan"),10)||1)>1)&&(i=J(f[g][m],f),j=K(i.row,i.col,f),k=Math.min(i.row,k),l=Math.max(j.row,l),m=Math.min(i.col,m),n=Math.max(j.col,n)),((parseInt(a(f[g][n]).attr("rowspan"),10)||1)>1||(parseInt(a(f[g][n]).attr("colspan"),10)||1)>1)&&(i=J(f[g][n],f),j=K(i.row,i.col,f),k=Math.min(i.row,k),l=Math.max(j.row,l),m=Math.min(i.col,m),n=Math.max(j.col,n));for(h=m;h<=n;h++)((parseInt(a(f[k][h]).attr("rowspan"),10)||1)>1||(parseInt(a(f[k][h]).attr("colspan"),10)||1)>1)&&(i=J(f[k][h],f),j=K(i.row,i.col,f),k=Math.min(i.row,k),l=Math.max(j.row,l),m=Math.min(i.col,m),n=Math.max(j.col,n)),((parseInt(a(f[l][h]).attr("rowspan"),10)||1)>1||(parseInt(a(f[l][h]).attr("colspan"),10)||1)>1)&&(i=J(f[l][h],f),j=K(i.row,i.col,f),k=Math.min(i.row,k),l=Math.max(j.row,l),m=Math.min(i.col,m),n=Math.max(j.col,n));return k==b&&l==c&&m==d&&n==e?{min_i:b,max_i:c,min_j:d,max_j:e}:P(k,l,m,n,f)}function Q(b){var c=O(b),d=a(b[c.min_i][c.min_j]),e=a(b[c.min_i][c.max_j]),f=a(b[c.max_i][c.min_j]);return{left:d.offset().left,right:e.offset().left+e.outerWidth(),top:d.offset().top,bottom:f.offset().top+f.outerHeight()}}function R(c,d){if(a(c).is(d))M(),b.edit.on(),a(c).addClass("fr-selected-cell");else{N(),b.edit.off();var e=I(),f=J(c,e),g=J(d,e),h=P(Math.min(f.row,g.row),Math.max(f.row,g.row),Math.min(f.col,g.col),Math.max(f.col,g.col),e);M(),c.classList.add("fr-cell-fixed"),d.classList.add("fr-cell-handler");for(var i=h.min_i;i<=h.max_i;i++)for(var j=h.min_j;j<=h.max_j;j++)a(e[i][j]).addClass("fr-selected-cell")}}function S(c){var d=null,e=a(c.target);return"TD"==c.target.tagName||"TH"==c.target.tagName?d=c.target:e.closest("td").length>0?d=e.closest("td").get(0):e.closest("th").length>0&&(d=e.closest("th").get(0)),0===b.$el.find(d).length?null:d}function T(){M(),b.popups.hide("table.edit")}function U(c){var d=S(c);if(sa().length>0&&!d&&T(),!b.edit.isDisabled()||b.popups.isVisible("table.edit"))if(1!=c.which||1==c.which&&b.helpers.isMac()&&c.ctrlKey)(3==c.which||1==c.which&&b.helpers.isMac()&&c.ctrlKey)&&d&&T();else if(Aa=!0,d){sa().length>0&&!c.shiftKey&&T(),c.stopPropagation(),b.events.trigger("image.hideResizer"),b.events.trigger("video.hideResizer"),za=!0;var e=d.tagName.toLowerCase();c.shiftKey&&b.$el.find(e+".fr-selected-cell").length>0?a(b.$el.find(e+".fr-selected-cell").closest("table")).is(a(d).closest("table"))?R(Ba,d):N():((b.keys.ctrlKey(c)||c.shiftKey)&&(sa().length>1||0===a(d).find(b.selection.element()).length&&!a(d).is(b.selection.element()))&&N(),Ba=d,R(Ba,Ba))}}function V(c){if(za||b.$tb.is(c.target)||b.$tb.is(a(c.target).closest(b.$tb.get(0)))||(sa().length>0&&b.toolbar.enable(),M()),!(1!=c.which||1==c.which&&b.helpers.isMac()&&c.ctrlKey)){if(Aa=!1,za){za=!1;S(c)||1!=sa().length?sa().length>0&&(b.selection.isCollapsed()?d():M()):M()}if(Da){Da=!1,xa.removeClass("fr-moving"),b.$el.removeClass("fr-no-selection"),b.edit.on();var e=parseFloat(xa.css("left"))+b.opts.tableResizerOffset;b.opts.iframe&&(e-=b.$iframe.offset().left),xa.data("release-position",e),xa.removeData("max-left"),xa.removeData("max-right"),ja(c),ba()}}}function W(c){if(!0===za){if(a(c.currentTarget).closest("table").is(ta())){if("TD"==c.currentTarget.tagName&&0===b.$el.find("th.fr-selected-cell").length)return void R(Ba,c.currentTarget);if("TH"==c.currentTarget.tagName&&0===b.$el.find("td.fr-selected-cell").length)return void R(Ba,c.currentTarget)}N()}}function X(c,d){for(var e=c;e&&"TABLE"!=e.tagName&&e.parentNode!=b.el;)e=e.parentNode;if(e&&"TABLE"==e.tagName){var f=I(a(e));"up"==d?Z(J(c,f),e,f):"down"==d&&$(J(c,f),e,f)}}function Y(a,c,d,e){for(var f,g=c;g!=b.el&&"TD"!=g.tagName&&"TH"!=g.tagName&&("up"==e?f=g.previousElementSibling:"down"==e&&(f=g.nextElementSibling),!f);)g=g.parentNode;"TD"==g.tagName||"TH"==g.tagName?X(g,e):f&&("up"==e&&b.selection.setAtEnd(f),"down"==e&&b.selection.setAtStart(f))}function Z(a,c,d){a.row>0?b.selection.setAtEnd(d[a.row-1][a.col]):Y(a,c,d,"up")}function $(a,c,d){var e=parseInt(d[a.row][a.col].getAttribute("rowspan"),10)||1;a.row<d.length-e?b.selection.setAtStart(d[a.row+e][a.col]):Y(a,c,d,"down")}function _(c){var d=c.which,e=b.selection.blocks();if(e.length&&(e=e[0],"TD"==e.tagName||"TH"==e.tagName)){for(var f=e;f&&"TABLE"!=f.tagName&&f.parentNode!=b.el;)f=f.parentNode;if(f&&"TABLE"==f.tagName&&(a.FE.KEYCODE.ARROW_LEFT==d||a.FE.KEYCODE.ARROW_UP==d||a.FE.KEYCODE.ARROW_RIGHT==d||a.FE.KEYCODE.ARROW_DOWN==d)&&(sa().length>0&&T(),b.browser.webkit&&(a.FE.KEYCODE.ARROW_UP==d||a.FE.KEYCODE.ARROW_DOWN==d))){var g=b.selection.ranges(0).startContainer;if(g.nodeType==Node.TEXT_NODE&&(a.FE.KEYCODE.ARROW_UP==d&&g.previousSibling||a.FE.KEYCODE.ARROW_DOWN==d&&g.nextSibling))return;c.preventDefault(),c.stopPropagation();var h=I(a(f)),i=J(e,h);return a.FE.KEYCODE.ARROW_UP==d?Z(i,f,h):a.FE.KEYCODE.ARROW_DOWN==d&&$(i,f,h),b.selection.restore(),!1}}}function aa(){b.shared.$table_resizer||(b.shared.$table_resizer=a('<div class="fr-table-resizer"><div></div></div>')),xa=b.shared.$table_resizer,b.events.$on(xa,"mousedown",function(a){return!b.core.sameInstance(xa)||(sa().length>0&&T(),1==a.which?(b.selection.save(),Da=!0,xa.addClass("fr-moving"),N(),b.edit.off(),xa.find("div").css("opacity",1),!1):void 0)}),b.events.$on(xa,"mousemove",function(a){if(!b.core.sameInstance(xa))return!0;Da&&(b.opts.iframe&&(a.pageX-=b.$iframe.offset().left),ma(a))}),b.events.on("shared.destroy",function(){xa.html("").removeData().remove(),xa=null},!0),b.events.on("destroy",function(){b.$el.find(".fr-selected-cell").removeClass("fr-selected-cell"),xa.hide().appendTo(a("body:first"))},!0)}function ba(){xa&&(xa.find("div").css("opacity",0),xa.css("top",0),xa.css("left",0),xa.css("height",0),xa.find("div").css("height",0),xa.hide())}function ca(){ya&&ya.removeClass("fr-visible").css("left","-9999px")}function da(c,d){var e=a(d),f=e.closest("table"),g=f.parent();if(d&&"TD"!=d.tagName&&"TH"!=d.tagName&&(e.closest("td").length>0?d=e.closest("td"):e.closest("th").length>0&&(d=e.closest("th"))),!d||"TD"!=d.tagName&&"TH"!=d.tagName)xa&&e.get(0)!=xa.get(0)&&e.parent().get(0)!=xa.get(0)&&b.core.sameInstance(xa)&&ba();else{if(e=a(d),0===b.$el.find(e).length)return!1;var h=e.offset().left-1,i=h+e.outerWidth();if(Math.abs(c.pageX-h)<=b.opts.tableResizerOffset||Math.abs(i-c.pageX)<=b.opts.tableResizerOffset){var j,k,l,m,n,o=I(f),p=J(d,o),q=K(p.row,p.col,o),r=f.offset().top,s=f.outerHeight()-1;"rtl"!=b.opts.direction?c.pageX-h<=b.opts.tableResizerOffset?(l=h,p.col>0?(m=h-ka(p.col-1,o)+b.opts.tableResizingLimit,n=h+ka(p.col,o)-b.opts.tableResizingLimit,j=p.col-1,k=p.col):(j=null,k=0,m=f.offset().left-1-parseInt(f.css("margin-left"),10),n=f.offset().left-1+f.width()-o[0].length*b.opts.tableResizingLimit)):i-c.pageX<=b.opts.tableResizerOffset&&(l=i,q.col<o[q.row].length&&o[q.row][q.col+1]?(m=i-ka(q.col,o)+b.opts.tableResizingLimit,n=i+ka(q.col+1,o)-b.opts.tableResizingLimit,j=q.col,k=q.col+1):(j=q.col,k=null,m=f.offset().left-1+o[0].length*b.opts.tableResizingLimit,n=g.offset().left-1+g.width()+parseFloat(g.css("padding-left")))):i-c.pageX<=b.opts.tableResizerOffset?(l=i,p.col>0?(m=i-ka(p.col,o)+b.opts.tableResizingLimit,n=i+ka(p.col-1,o)-b.opts.tableResizingLimit,j=p.col,k=p.col-1):(j=null,k=0,m=f.offset().left+o[0].length*b.opts.tableResizingLimit,n=g.offset().left-1+g.width()+parseFloat(g.css("padding-left")))):c.pageX-h<=b.opts.tableResizerOffset&&(l=h,q.col<o[q.row].length&&o[q.row][q.col+1]?(m=h-ka(q.col+1,o)+b.opts.tableResizingLimit,n=h+ka(q.col,o)-b.opts.tableResizingLimit,j=q.col+1,k=q.col):(j=q.col,k=null,m=g.offset().left+parseFloat(g.css("padding-left")),n=f.offset().left-1+f.width()-o[0].length*b.opts.tableResizingLimit)),xa||aa(),xa.data("table",f),xa.data("first",j),xa.data("second",k),xa.data("instance",b),b.$wp.append(xa);var t=l-b.win.pageXOffset-b.opts.tableResizerOffset,u=r-b.win.pageYOffset;b.opts.iframe&&(t+=b.$iframe.offset().left-b.helpers.scrollLeft(),u+=b.$iframe.offset().top-b.helpers.scrollTop(),m+=b.$iframe.offset().left,n+=b.$iframe.offset().left),xa.data("max-left",m),xa.data("max-right",n),xa.data("origin",l-b.win.pageXOffset),xa.css("top",u),xa.css("left",t),xa.css("height",s),xa.find("div").css("height",s),xa.css("padding-left",b.opts.tableResizerOffset),xa.css("padding-right",b.opts.tableResizerOffset),xa.show()}else b.core.sameInstance(xa)&&ba()}}function ea(c,d){if(b.$box.find(".fr-line-breaker").is(":visible"))return!1;ya||pa(),b.$box.append(ya),ya.data("instance",b);var e=a(d),f=e.find("tr:first"),g=c.pageX,h=0,i=0;b.opts.iframe&&(h+=b.$iframe.offset().left-b.helpers.scrollLeft(),i+=b.$iframe.offset().top-b.helpers.scrollTop());var j;f.find("th, td").each(function(){var c=a(this);return c.offset().left<=g&&g<c.offset().left+c.outerWidth()/2?(j=parseInt(ya.find("a").css("width"),10),ya.css("top",i+c.offset().top-b.win.pageYOffset-j-5),ya.css("left",h+c.offset().left-b.win.pageXOffset-j/2),ya.data("selected-cell",c),ya.data("position","before"),ya.addClass("fr-visible"),!1):c.offset().left+c.outerWidth()/2<=g&&g<c.offset().left+c.outerWidth()?(j=parseInt(ya.find("a").css("width"),10),ya.css("top",i+c.offset().top-b.win.pageYOffset-j-5),ya.css("left",h+c.offset().left+c.outerWidth()-b.win.pageXOffset-j/2),ya.data("selected-cell",c),ya.data("position","after"),ya.addClass("fr-visible"),!1):void 0})}function fa(c,d){if(b.$box.find(".fr-line-breaker").is(":visible"))return!1;ya||pa(),b.$box.append(ya),ya.data("instance",b);var e=a(d),f=c.pageY,g=0,h=0;b.opts.iframe&&(g+=b.$iframe.offset().left-b.helpers.scrollLeft(),h+=b.$iframe.offset().top-b.helpers.scrollTop());var i;e.find("tr").each(function(){var c=a(this);return c.offset().top<=f&&f<c.offset().top+c.outerHeight()/2?(i=parseInt(ya.find("a").css("width"),10),ya.css("top",h+c.offset().top-b.win.pageYOffset-i/2),ya.css("left",g+c.offset().left-b.win.pageXOffset-i-5),ya.data("selected-cell",c.find("td:first")),ya.data("position","above"),ya.addClass("fr-visible"),!1):c.offset().top+c.outerHeight()/2<=f&&f<c.offset().top+c.outerHeight()?(i=parseInt(ya.find("a").css("width"),10),ya.css("top",h+c.offset().top+c.outerHeight()-b.win.pageYOffset-i/2),ya.css("left",g+c.offset().left-b.win.pageXOffset-i-5),ya.data("selected-cell",c.find("td:first")),ya.data("position","below"),ya.addClass("fr-visible"),!1):void 0})}function ga(c,d){if(0===sa().length){var e,f,g;if(d&&("HTML"==d.tagName||"BODY"==d.tagName||b.node.isElement(d)))for(e=1;e<=b.opts.tableInsertHelperOffset;e++){if(f=b.doc.elementFromPoint(c.pageX-b.win.pageXOffset,c.pageY-b.win.pageYOffset+e),a(f).hasClass("fr-tooltip"))return!0;if(f&&("TH"==f.tagName||"TD"==f.tagName||"TABLE"==f.tagName)&&(a(f).parents(".fr-wrapper").length||b.opts.iframe))return ea(c,a(f).closest("table")),!0;if(g=b.doc.elementFromPoint(c.pageX-b.win.pageXOffset+e,c.pageY-b.win.pageYOffset),a(g).hasClass("fr-tooltip"))return!0;if(g&&("TH"==g.tagName||"TD"==g.tagName||"TABLE"==g.tagName)&&(a(g).parents(".fr-wrapper").length||b.opts.iframe))return fa(c,a(g).closest("table")),!0}b.core.sameInstance(ya)&&ca()}}function ha(a){Ca=null;var c=b.doc.elementFromPoint(a.pageX-b.win.pageXOffset,a.pageY-b.win.pageYOffset);b.opts.tableResizer&&(!b.popups.areVisible()||b.popups.areVisible()&&b.popups.isVisible("table.edit"))&&da(a,c),!b.opts.tableInsertHelper||b.popups.areVisible()||b.$tb.hasClass("fr-inline")&&b.$tb.is(":visible")||ga(a,c)}function ia(){if(Da){var a=xa.data("table"),c=a.offset().top-b.win.pageYOffset;b.opts.iframe&&(c+=b.$iframe.offset().top-b.helpers.scrollTop()),xa.css("top",c)}}function ja(){var c=xa.data("origin"),d=xa.data("release-position");if(c!==d){var e=xa.data("first"),f=xa.data("second"),g=xa.data("table"),h=g.outerWidth();if(b.undo.canDo()||b.undo.saveStep(),null!==e&&null!==f){var i,j,k,l=I(g),m=[],n=[],o=[],p=[];for(i=0;i<l.length;i++)j=a(l[i][e]),k=a(l[i][f]),m[i]=j.outerWidth(),o[i]=k.outerWidth(),n[i]=m[i]/h*100,p[i]=o[i]/h*100;for(i=0;i<l.length;i++){j=a(l[i][e]),k=a(l[i][f]);var q=(n[i]*(m[i]+d-c)/m[i]).toFixed(4);j.css("width",q+"%"),k.css("width",(n[i]+p[i]-q).toFixed(4)+"%")}}else{var r,s=g.parent(),t=h/s.width()*100,u=(parseInt(g.css("margin-left"),10)||0)/s.width()*100,v=(parseInt(g.css("margin-right"),10)||0)/s.width()*100;"rtl"==b.opts.direction&&0===f||"rtl"!=b.opts.direction&&0!==f?(r=(h+d-c)/h*t,g.css("margin-right","calc(100% - "+Math.round(r).toFixed(4)+"% - "+Math.round(u).toFixed(4)+"%)")):("rtl"==b.opts.direction&&0!==f||"rtl"!=b.opts.direction&&0===f)&&(r=(h-d+c)/h*t,g.css("margin-left","calc(100% - "+Math.round(r).toFixed(4)+"% - "+Math.round(v).toFixed(4)+"%)")),g.css("width",Math.round(r).toFixed(4)+"%")}b.selection.restore(),b.undo.saveStep()}xa.removeData("origin"),xa.removeData("release-position"),xa.removeData("first"),xa.removeData("second"),xa.removeData("table")}function ka(b,c){var d,e=a(c[0][b]).outerWidth();for(d=1;d<c.length;d++)e=Math.min(e,a(c[d][b]).outerWidth());return e}function la(a,b,c){var d,e=0;for(d=a;d<=b;d++)e+=ka(d,c);return e}function ma(a){if(sa().length>1&&Aa&&N(),!1===Aa&&!1===za&&!1===Da)Ca&&clearTimeout(Ca),b.edit.isDisabled()&&!b.popups.isVisible("table.edit")||(Ca=setTimeout(ha,30,a));else if(Da){var c=a.pageX-b.win.pageXOffset;b.opts.iframe&&(c+=b.$iframe.offset().left);var d=xa.data("max-left"),e=xa.data("max-right");c>=d&&c<=e?xa.css("left",c-b.opts.tableResizerOffset):c<d&&parseFloat(xa.css("left"),10)>d-b.opts.tableResizerOffset?xa.css("left",d-b.opts.tableResizerOffset):c>e&&parseFloat(xa.css("left"),10)<e-b.opts.tableResizerOffset&&xa.css("left",e-b.opts.tableResizerOffset)}else Aa&&ca()}function na(c){b.node.isEmpty(c.get(0))?c.prepend(a.FE.MARKERS):c.prepend(a.FE.START_MARKER).append(a.FE.END_MARKER)}function oa(c){if(c.which==a.FE.KEYCODE.TAB){var d;if(sa().length>0)d=b.$el.find(".fr-selected-cell:last");else{var e=b.selection.element();"TD"==e.tagName||"TH"==e.tagName?d=a(e):a(e).parentsUntil(b.$el,"td").length>0?d=a(e).parents("td:first"):a(e).parentsUntil(b.$el,"th").length>0&&(d=a(e).parents("th:first"))}if(d)return c.preventDefault(),a(b.selection.element()).parents("ol, ul").length>0||(T(),
c.shiftKey?d.prev().length>0?na(d.prev()):d.closest("tr").length>0&&d.closest("tr").prev().length>0?na(d.closest("tr").prev().find("td:last")):d.closest("tbody").length>0&&d.closest("table").find("thead tr").length>0&&na(d.closest("table").find("thead tr th:last")):d.next().length>0?na(d.next()):d.closest("tr").length>0&&d.closest("tr").next().length>0?na(d.closest("tr").next().find("td:first")):d.closest("thead").length>0&&d.closest("table").find("tbody tr").length>0?na(d.closest("table").find("tbody tr td:first")):(d.addClass("fr-selected-cell"),t("below"),M(),na(d.closest("tr").next().find("td:first"))),b.selection.restore(),!1)}}function pa(){b.shared.$ti_helper||(b.shared.$ti_helper=a('<div class="fr-insert-helper"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+b.language.translate("Insert")+'"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/></svg></a></div>'),b.events.bindClick(b.shared.$ti_helper,"a",function(){var a=ya.data("selected-cell"),c=ya.data("position"),d=ya.data("instance")||b;"before"==c?(a.addClass("fr-selected-cell"),d.table.insertColumn(c),a.removeClass("fr-selected-cell")):"after"==c?(a.addClass("fr-selected-cell"),d.table.insertColumn(c),a.removeClass("fr-selected-cell")):"above"==c?(a.addClass("fr-selected-cell"),d.table.insertRow(c),a.removeClass("fr-selected-cell")):"below"==c&&(a.addClass("fr-selected-cell"),d.table.insertRow(c),a.removeClass("fr-selected-cell")),ca()}),b.events.on("shared.destroy",function(){b.shared.$ti_helper.html("").removeData().remove(),b.shared.$ti_helper=null},!0),b.events.$on(b.shared.$ti_helper,"mousemove",function(a){a.stopPropagation()},!0),b.events.$on(a(b.o_win),"scroll",function(){ca()},!0),b.events.$on(b.$wp,"scroll",function(){ca()},!0)),ya=b.shared.$ti_helper,b.events.on("destroy",function(){ya=null}),b.tooltip.bind(b.$box,".fr-insert-helper > a.fr-floating-btn")}function qa(){Ba=null,clearTimeout(Ca)}function ra(){sa().length>0?d():(b.popups.hide("table.insert"),b.toolbar.showInline())}function sa(){return b.el.querySelectorAll(".fr-selected-cell")}function ta(){var c=sa();if(c.length){for(var d=c[0];d&&"TABLE"!=d.tagName&&d.parentNode!=b.el;)d=d.parentNode;return a(d&&"TABLE"==d.tagName?d:[])}return a([])}function ua(c){if(c.altKey&&c.which==a.FE.KEYCODE.SPACE){var e,f=b.selection.element();if("TD"==f.tagName||"TH"==f.tagName?e=f:a(f).closest("td").length>0?e=a(f).closest("td").get(0):a(f).closest("th").length>0&&(e=a(f).closest("th").get(0)),e)return c.preventDefault(),R(e,e),d(),!1}}function va(c){var d=sa();if(d.length>0){var e,f,g=I(),h=c.which;1==d.length?(e=d[0],f=e):(e=b.el.querySelector(".fr-cell-fixed"),f=b.el.querySelector(".fr-cell-handler"));var i=J(f,g);if(a.FE.KEYCODE.ARROW_RIGHT==h){if(i.col<g[0].length-1)return R(e,g[i.row][i.col+1]),!1}else if(a.FE.KEYCODE.ARROW_DOWN==h){if(i.row<g.length-1)return R(e,g[i.row+1][i.col]),!1}else if(a.FE.KEYCODE.ARROW_LEFT==h){if(i.col>0)return R(e,g[i.row][i.col-1]),!1}else if(a.FE.KEYCODE.ARROW_UP==h&&i.row>0)return R(e,g[i.row-1][i.col]),!1}}function wa(){if(!b.$wp)return!1;if(!b.helpers.isMobile()){Aa=!1,za=!1,Da=!1,b.events.$on(b.$el,"mousedown",U),b.popups.onShow("image.edit",function(){M(),Aa=!1,za=!1}),b.popups.onShow("link.edit",function(){M(),Aa=!1,za=!1}),b.events.on("commands.mousedown",function(a){a.parents(".fr-toolbar").length>0&&M()}),b.events.$on(b.$el,"mouseenter","th, td",W),b.events.$on(b.$win,"mouseup",V),b.opts.iframe&&b.events.$on(a(b.o_win),"mouseup",V),b.events.$on(b.$win,"mousemove",ma),b.events.$on(a(b.o_win),"scroll",ia),b.events.on("contentChanged",function(){sa().length>0&&(d(),b.$el.find("img").on("load.selected-cells",function(){a(this).off("load.selected-cells"),sa().length>0&&d()}))}),b.events.$on(a(b.o_win),"resize",function(){M()}),b.events.on("toolbar.esc",function(){if(sa().length>0)return b.events.disableBlur(),b.events.focus(),!1},!0),b.events.$on(b.$el,"keydown",function(a){a.shiftKey?!1===va(a)&&setTimeout(function(){d()},0):_(a)}),b.events.on("keydown",function(c){if(!1===oa(c))return!1;var d=sa();if(d.length>0){if(d.length>0&&b.keys.ctrlKey(c)&&c.which==a.FE.KEYCODE.A)return M(),b.popups.isVisible("table.edit")&&b.popups.hide("table.edit"),d=[],!0;if(c.which==a.FE.KEYCODE.ESC&&b.popups.isVisible("table.edit"))return M(),b.popups.hide("table.edit"),c.preventDefault(),c.stopPropagation(),c.stopImmediatePropagation(),d=[],!1;if(d.length>1&&c.which==a.FE.KEYCODE.BACKSPACE){b.undo.saveStep();for(var e=0;e<d.length;e++)a(d[e]).html("<br>"),e==d.length-1&&a(d[e]).prepend(a.FE.MARKERS);return b.selection.restore(),b.undo.saveStep(),d=[],!1}if(d.length>1&&c.which!=a.FE.KEYCODE.F10&&!b.keys.isBrowserAction(c))return c.preventDefault(),d=[],!1}else if(d=[],!1===ua(c))return!1},!0);var c=[];b.events.on("html.beforeGet",function(){c=sa();for(var a=0;a<c.length;a++)c[a].className=(c[a].className||"").replace(/fr-selected-cell/g,"")}),b.events.on("html.afterGet",function(){for(var a=0;a<c.length;a++)c[a].className=(c[a].className?c[a].className.trim()+" ":"")+"fr-selected-cell";c=[]}),g(!0),k(!0)}b.events.on("destroy",qa)}var xa,ya,za,Aa,Ba,Ca,Da;return{_init:wa,insert:p,remove:q,insertRow:t,deleteRow:u,insertColumn:v,deleteColumn:w,mergeCells:B,splitCellVertically:D,splitCellHorizontally:C,addHeader:r,removeHeader:s,setBackground:E,showInsertPopup:c,showEditPopup:d,showColorsPopup:e,back:ra,verticalAlign:F,horizontalAlign:G,applyStyle:H,selectedTable:ta,selectedCells:sa}},a.FE.DefineIcon("insertTable",{NAME:"table"}),a.FE.RegisterCommand("insertTable",{title:"Insert Table",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("table.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("table.insert")):this.table.showInsertPopup()},plugin:"table"}),a.FE.RegisterCommand("tableInsert",{callback:function(a,b,c){this.table.insert(b,c),this.popups.hide("table.insert")}}),a.FE.DefineIcon("tableHeader",{NAME:"header"}),a.FE.RegisterCommand("tableHeader",{title:"Table Header",focus:!1,toggle:!0,callback:function(){this.popups.get("table.edit").find('.fr-command[data-cmd="tableHeader"]').hasClass("fr-active")?this.table.removeHeader():this.table.addHeader()},refresh:function(a){var b=this.table.selectedTable();b.length>0&&(0===b.find("th").length?a.removeClass("fr-active").attr("aria-pressed",!1):a.addClass("fr-active").attr("aria-pressed",!0))}}),a.FE.DefineIcon("tableRows",{NAME:"bars"}),a.FE.RegisterCommand("tableRows",{type:"dropdown",focus:!1,title:"Row",options:{above:"Insert row above",below:"Insert row below",delete:"Delete row"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableRows.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableRows" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.language.translate(c[d])+"</a></li>");return b+="</ul>"},callback:function(a,b){"above"==b||"below"==b?this.table.insertRow(b):this.table.deleteRow()}}),a.FE.DefineIcon("tableColumns",{NAME:"bars fa-rotate-90"}),a.FE.RegisterCommand("tableColumns",{type:"dropdown",focus:!1,title:"Column",options:{before:"Insert column before",after:"Insert column after",delete:"Delete column"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableColumns.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableColumns" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.language.translate(c[d])+"</a></li>");return b+="</ul>"},callback:function(a,b){"before"==b||"after"==b?this.table.insertColumn(b):this.table.deleteColumn()}}),a.FE.DefineIcon("tableCells",{NAME:"square-o"}),a.FE.RegisterCommand("tableCells",{type:"dropdown",focus:!1,title:"Cell",options:{merge:"Merge cells","vertical-split":"Vertical split","horizontal-split":"Horizontal split"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableCells.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCells" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.language.translate(c[d])+"</a></li>");return b+="</ul>"},callback:function(a,b){"merge"==b?this.table.mergeCells():"vertical-split"==b?this.table.splitCellVertically():this.table.splitCellHorizontally()},refreshOnShow:function(a,b){this.$el.find(".fr-selected-cell").length>1?(b.find('a[data-param1="vertical-split"]').addClass("fr-disabled").attr("aria-disabled",!0),b.find('a[data-param1="horizontal-split"]').addClass("fr-disabled").attr("aria-disabled",!0),b.find('a[data-param1="merge"]').removeClass("fr-disabled").attr("aria-disabled",!1)):(b.find('a[data-param1="merge"]').addClass("fr-disabled").attr("aria-disabled",!0),b.find('a[data-param1="vertical-split"]').removeClass("fr-disabled").attr("aria-disabled",!1),b.find('a[data-param1="horizontal-split"]').removeClass("fr-disabled").attr("aria-disabled",!1))}}),a.FE.DefineIcon("tableRemove",{NAME:"trash"}),a.FE.RegisterCommand("tableRemove",{title:"Remove Table",focus:!1,callback:function(){this.table.remove()}}),a.FE.DefineIcon("tableStyle",{NAME:"paint-brush"}),a.FE.RegisterCommand("tableStyle",{title:"Table Style",type:"dropdown",focus:!1,html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.tableStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableStyle" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},callback:function(a,b){this.table.applyStyle(b,this.$el.find(".fr-selected-cell").closest("table"),this.opts.tableMultipleStyles,this.opts.tableStyles)},refreshOnShow:function(b,c){var d=this.$el.find(".fr-selected-cell").closest("table");d&&c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=d.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}),a.FE.DefineIcon("tableCellBackground",{NAME:"tint"}),a.FE.RegisterCommand("tableCellBackground",{title:"Cell Background",focus:!1,popup:!0,callback:function(){this.table.showColorsPopup()}}),a.FE.RegisterCommand("tableCellBackgroundColor",{undo:!0,focus:!1,callback:function(a,b){this.table.setBackground(b)}}),a.FE.DefineIcon("tableBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("tableBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.table.back()},refresh:function(a){0!==this.table.selectedCells().length||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.DefineIcon("tableCellVerticalAlign",{NAME:"arrows-v"}),a.FE.RegisterCommand("tableCellVerticalAlign",{type:"dropdown",focus:!1,title:"Vertical Align",options:{Top:"Align Top",Middle:"Align Middle",Bottom:"Align Bottom"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableCellVerticalAlign.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellVerticalAlign" data-param1="'+d.toLowerCase()+'" title="'+this.language.translate(c[d])+'">'+this.language.translate(d)+"</a></li>");return b+="</ul>"},callback:function(a,b){this.table.verticalAlign(b)},refreshOnShow:function(a,b){b.find('.fr-command[data-param1="'+this.$el.find(".fr-selected-cell").css("vertical-align")+'"]').addClass("fr-active").attr("aria-selected",!0)}}),a.FE.DefineIcon("tableCellHorizontalAlign",{NAME:"align-left"}),a.FE.DefineIcon("align-left",{NAME:"align-left"}),a.FE.DefineIcon("align-right",{NAME:"align-right"}),a.FE.DefineIcon("align-center",{NAME:"align-center"}),a.FE.DefineIcon("align-justify",{NAME:"align-justify"}),a.FE.RegisterCommand("tableCellHorizontalAlign",{type:"dropdown",focus:!1,title:"Horizontal Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.tableCellHorizontalAlign.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="tableCellHorizontalAlign" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.icon.create("align-"+d)+'<span class="fr-sr-only">'+this.language.translate(c[d])+"</span></a></li>");return b+="</ul>"},callback:function(a,b){this.table.horizontalAlign(b)},refresh:function(b){var c=this.table.selectedCells();c.length&&b.find("> *:first").replaceWith(this.icon.create("align-"+this.helpers.getAlignment(a(c[0]))))},refreshOnShow:function(a,b){b.find('.fr-command[data-param1="'+this.helpers.getAlignment(this.$el.find(".fr-selected-cell:first"))+'"]').addClass("fr-active").attr("aria-selected",!0)}}),a.FE.DefineIcon("tableCellStyle",{NAME:"magic"}),a.FE.RegisterCommand("tableCellStyle",{title:"Cell Style",type:"dropdown",focus:!1,html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.tableCellStyles;for(var c in b)b.hasOwnProperty(c)&&(a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellStyle" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></li>");return a+="</ul>"},callback:function(a,b){this.table.applyStyle(b,this.$el.find(".fr-selected-cell"),this.opts.tableCellMultipleStyles,this.opts.tableCellStyles)},refreshOnShow:function(b,c){var d=this.$el.find(".fr-selected-cell:first");d&&c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=d.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}),a.FE.DefineIcon("tableColorRemove",{NAME:"eraser"})});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.FE.URLRegEx="(^| |\\u00A0)("+a.FE.LinkRegEx+"|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}))$",a.FE.PLUGINS.url=function(b){function c(c,d,e){var f=e;if(b.opts.linkConvertEmailAddress){a.FE.MAIL_REGEX.test(f)&&!/^mailto:.*/i.test(f)&&(f="mailto:"+f)}return/^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(f)||(f="//"+f),(d||"")+"<a"+(b.opts.linkAlwaysBlank?' target="_blank"':"")+(i?' rel="'+i+'"':"")+' href="'+f+'">'+e+"</a>"}function d(){return new RegExp(a.FE.URLRegEx,"gi")}function e(a){return b.opts.linkAlwaysNoFollow&&(i="nofollow"),b.opts.linkAlwaysBlank&&(i?i+=" noopener noreferrer":i="noopener noreferrer"),a.replace(d(),c)}function f(a){return!!a&&("A"===a.tagName||!(!a.parentNode||a.parentNode==b.el)&&f(a.parentNode))}function g(){var c=b.selection.ranges(0),g=c.startContainer;if(!g||g.nodeType!==Node.TEXT_NODE)return!1;if(f(g))return!1;if(d().test(g.textContent))a(g).before(e(g.textContent)),g.parentNode.removeChild(g);else if(g.previousSibling&&"A"===g.previousSibling.tagName){var h=g.previousSibling.innerText+g.textContent;d().test(h)&&(a(g.previousSibling).replaceWith(e(h)),g.parentNode.removeChild(g))}}function h(){b.events.on("paste.afterCleanup",function(b){if(new RegExp(a.FE.URLRegEx,"gi").test(b))return e(b)}),b.events.on("keydown",function(c){var d=c.which;!b.selection.isCollapsed()||d!=a.FE.KEYCODE.ENTER&&d!=a.FE.KEYCODE.SPACE&&d!=a.FE.KEYCODE.PERIOD||g()},!0)}var i=null;return{_init:h}}});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{wordDeniedTags:[],wordDeniedAttrs:[],wordAllowedStyleProps:["font-family","font-size","background","color","width","text-align","vertical-align","background-color","padding","margin","height","margin-top","margin-left","margin-right","margin-bottom","text-decoration","font-weight","font-style"],wordPasteModal:!0}),a.FE.PLUGINS.wordPaste=function(b){function c(){b.events.on("paste.wordPaste",function(a){return A=a,b.opts.wordPasteModal?e():g(!0),!1})}function d(){var a='<div class="fr-word-paste-modal" style="padding: 20px 20px 10px 20px;">';return a+='<p style="text-align: left;">'+b.language.translate("The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?")+"</p>",a+='<div style="text-align: right; margin-top: 50px;"><button class="fr-remove-word fr-command">'+b.language.translate("Clean")+'</button> <button class="fr-keep-word fr-command">'+b.language.translate("Keep")+"</button></div>",a+="</div>"}function e(){if(!z){var c='<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.95 73.23" style="height: 25px; vertical-align: text-bottom; margin-right: 5px; display: inline-block"><defs><style>.a{fill:#2a5699;}.b{fill:#fff;}</style></defs><path class="a" d="M615.15,827.22h5.09V834c9.11.05,18.21-.09,27.32.05a2.93,2.93,0,0,1,3.29,3.25c.14,16.77,0,33.56.09,50.33-.09,1.72.17,3.63-.83,5.15-1.24.89-2.85.78-4.3.84-8.52,0-17,0-25.56,0v6.81h-5.32c-13-2.37-26-4.54-38.94-6.81q0-29.8,0-59.59c13.05-2.28,26.11-4.5,39.17-6.83Z" transform="translate(-575.97 -827.22)"/><path class="b" d="M620.24,836.59h28.1v54.49h-28.1v-6.81h22.14v-3.41H620.24v-4.26h22.14V873.2H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24V846h22.14v-3.41H620.24Zm-26.67,15c1.62-.09,3.24-.16,4.85-.25,1.13,5.75,2.29,11.49,3.52,17.21,1-5.91,2-11.8,3.06-17.7,1.7-.06,3.41-.15,5.1-.26-1.92,8.25-3.61,16.57-5.71,24.77-1.42.74-3.55,0-5.24.09-1.13-5.64-2.45-11.24-3.47-16.9-1,5.5-2.29,10.95-3.43,16.42q-2.45-.13-4.92-.3c-1.41-7.49-3.07-14.93-4.39-22.44l4.38-.18c.88,5.42,1.87,10.82,2.64,16.25,1.2-5.57,2.43-11.14,3.62-16.71Z" transform="translate(-575.97 -827.22)"/></svg> '+b.language.translate("Word Paste Detected")+"</h4>",e=d(),f=b.modals.create(B,c,e),g=f.$body;z=f.$modal,f.$modal.addClass("fr-middle"),b.events.bindClick(g,"button.fr-remove-word",function(){(z.data("instance")||b).wordPaste.clean()}),b.events.bindClick(g,"button.fr-keep-word",function(){(z.data("instance")||b).wordPaste.clean(!0)}),b.events.$on(a(b.o_win),"resize",function(){b.modals.resize(B)})}b.modals.show(B),b.modals.resize(B)}function f(){b.modals.hide(B)}function g(a){var c=b.opts.wordAllowedStyleProps;a||(b.opts.wordAllowedStyleProps=[]),A=A.replace(/^\n*/g,"").replace(/^ /g,""),0===A.indexOf("<colgroup>")&&(A="<table>"+A+"</table>"),A=y(A,b.paste.getRtfClipboard()),A=b.paste.removeEmptyTags(A),f(),b.paste.clean(A,!0,!0),b.opts.wordAllowedStyleProps=c}function h(a){a.parentNode&&a.parentNode.removeChild(a)}function i(a,b){if(b(a))for(var c=a.firstChild;c;){var d=c,e=c.previousSibling;c=c.nextSibling,i(d,b),d.previousSibling||d.nextSibling||d.parentNode||!c||e==c.previousSibling||!c.parentNode?d.previousSibling||d.nextSibling||d.parentNode||!c||c.previousSibling||c.nextSibling||c.parentNode||(e?c=e.nextSibling?e.nextSibling.nextSibling:null:a.firstChild&&(c=a.firstChild.nextSibling)):c=e?e.nextSibling:a.firstChild}}function j(a){if(!a.getAttribute("style")||!/mso-list:[\s]*l/gi.test(a.getAttribute("style").replace(/\n/gi,"")))return!1;try{if(!a.querySelector('[style="mso-list:Ignore"]'))return!1}catch(b){return!1}return!0}function k(a){return a.getAttribute("style").replace(/\n/gi,"").replace(/.*level([0-9]+?).*/gi,"$1")}function l(a,b){var c=a.cloneNode(!0);if(c.firstElementChild&&"A"==c.firstElementChild.tagName&&(c=c.firstElementChild),-1!=["H1","H2","H3","H4","H5","H6"].indexOf(a.tagName)){var d=document.createElement(a.tagName.toLowerCase());d.setAttribute("style",a.getAttribute("style")),d.innerHTML=c.innerHTML,c.innerHTML=d.outerHTML}i(c,function(a){return a.nodeType==Node.ELEMENT_NODE&&("mso-list:Ignore"==a.getAttribute("style")&&a.parentNode.removeChild(a),v(a,b)),!0});var e=c.innerHTML;return e=e.replace(/<!--[\s\S]*?-->/gi,"")}function m(a,b){var c=/[0-9a-zA-Z]./gi,d=!1;a.firstElementChild&&a.firstElementChild.firstElementChild&&a.firstElementChild.firstElementChild.firstChild&&!(d=d||c.test(a.firstElementChild.firstElementChild.firstChild.data||""))&&a.firstElementChild.firstElementChild.firstElementChild&&a.firstElementChild.firstElementChild.firstElementChild.firstChild&&(d=d||c.test(a.firstElementChild.firstElementChild.firstElementChild.firstChild.data||""));var e=d?"ol":"ul",f=k(a),g="<"+e+"><li>"+l(a,b),i=a.nextElementSibling,n=a.parentNode;for(h(a),a=null;i&&j(i);){var o=i.previousElementSibling,p=k(i);if(p>f)g+=m(i,b).outerHTML;else{if(p<f)break;g+="</li><li>"+l(i,b)}if(f=p,i.previousElementSibling||i.nextElementSibling||i.parentNode){var q=i;i=i.nextElementSibling,h(q),q=null}else i=o?o.nextElementSibling:n.firstElementChild}g+="</li></"+e+">";var r=document.createElement("div");return r.innerHTML=g,r.firstElementChild}function n(a,b){for(var c=document.createElement(b),d=0;d<a.attributes.length;d++){var e=a.attributes[d].name;c.setAttribute(e,a.getAttribute(e))}return c.innerHTML=a.innerHTML,a.parentNode.replaceChild(c,a),c}function o(c,d){b.node.clearAttributes(c);for(var e=c.firstElementChild,f=0,g=!1,i=null;e;){e.firstElementChild&&-1!=e.firstElementChild.tagName.indexOf("W:")&&(e.innerHTML=e.firstElementChild.innerHTML),i=e.getAttribute("width"),i||g||(g=!0),f+=parseInt(i,10),(!e.firstChild||e.firstChild&&e.firstChild.data==a.FE.UNICODE_NBSP)&&(e.firstChild&&h(e.firstChild),e.innerHTML="<br>");for(var k=e.firstElementChild,l=1==e.children.length;k;){if("P"==k.tagName&&!j(k)){var m=null;1==k.children.length&&k.firstElementChild&&"SPAN"==k.firstElementChild.tagName?'<span lang="EN-US">'===b.node.openTagString(k.firstElementChild)?k.firstElementChild.outerHTML=k.firstElementChild.innerHTML:(m=k.firstElementChild,l||(m=n(m,"div")),l?r(e,k.getAttribute("style")):r(m,k.getAttribute("style")),e.replaceChild(m,k)):(m=n(k,l?"span":"div"),!l&&m.getAttribute("align")&&m.removeAttribute("align")),m&&(k=m),l&&p(k)}k=k.nextElementSibling}if(d){var o=e.getAttribute("class");if(o){o=q(o);var s=o.match(/xl[0-9]+/gi);if(s){var t=s[0],u="."+t;d[u]&&r(e,d[u])}}d.td&&r(e,d.td)}var v=e.getAttribute("style");v&&(v=q(v))&&";"!=v.slice(-1)&&(v+=";");var w=e.getAttribute("valign");if(!w&&v){var x=v.match(/vertical-align:.+?[; "]{1,1}/gi);x&&(w=x[x.length-1].replace(/vertical-align:(.+?)[; "]{1,1}/gi,"$1"))}var y=null;if(v){var z=v.match(/text-align:.+?[; "]{1,1}/gi);z&&(y=z[z.length-1].replace(/text-align:(.+?)[; "]{1,1}/gi,"$1")),"general"==y&&(y=null)}var A=null;if(v){var B=v.match(/background:.+?[; "]{1,1}/gi);B&&(A=B[B.length-1].replace(/background:(.+?)[; "]{1,1}/gi,"$1"))}var C=e.getAttribute("colspan"),D=e.getAttribute("rowspan");C&&e.setAttribute("colspan",C),D&&e.setAttribute("rowspan",D),w&&(e.style["vertical-align"]=w),y&&(e.style["text-align"]=y),A&&(e.style["background-color"]=A),i&&e.setAttribute("width",i),e=e.nextElementSibling}for(e=c.firstElementChild;e;)i=e.getAttribute("width"),g?e.removeAttribute("width"):e.setAttribute("width",100*parseInt(i,10)/f+"%"),e=e.nextElementSibling}function p(a){var b=a.parentNode,c=a.getAttribute("align");c&&(b&&"TD"==b.tagName?(b.setAttribute("style",b.getAttribute("style")+"text-align:"+c+";"),a.removeAttribute("align")):(a.style["text-align"]=c,a.removeAttribute("align")))}function q(a){return a.replace(/\n|\r|\n\r|&quot;/g,"")}function r(a,b,c){if(b){var d=a.getAttribute("style");d&&";"!=d.slice(-1)&&(d+=";"),b&&";"!=b.slice(-1)&&(b+=";"),b=b.replace(/\n/gi,"");var e=null;e=c?(d||"")+b:b+(d||""),a.setAttribute("style",e)}}function s(a){var b=a.getAttribute("style");if(b){b=q(b),b&&";"!=b.slice(-1)&&(b+=";");var c=b.match(/(^|\S+?):.+?;{1,1}/gi);if(c){for(var d={},e=0;e<c.length;e++){var f=c[e],g=f.split(":");2==g.length&&("text-align"==g[0]&&"SPAN"==a.tagName||(d[g[0]]=g[1]))}var h="";for(var i in d)if(d.hasOwnProperty(i)){if("font-size"==i&&"pt;"==d[i].slice(-3)){var j=null;try{j=parseFloat(d[i].slice(0,-3),10)}catch(k){}j&&(j=Math.round(1.33*j),d[i]=j+"px;")}h+=i+":"+d[i]}h&&a.setAttribute("style",h)}}}function t(a){for(var b=a.match(/[0-9a-f]{2}/gi),c=[],d=0;d<b.length;d++)c.push(String.fromCharCode(parseInt(b[d],16)));var e=c.join("");return btoa(e)}function u(b,c){if(c){var d;if("IMG"==b.tagName){var e=b.getAttribute("src");if(!e||-1==e.indexOf("file://"))return;d=C[b.getAttribute("v:shapes")]}else d=b.parentNode.getAttribute("o:spid");if(d){var f="hplid"+d.substring(8),g=c.split(f);if(!g||2==g.length){var h=g[1].split("bliptag");if(!(h&&h.length<2)){var i=null;if(-1!=h[0].indexOf("pngblip")?i="image/png":-1!=h[0].indexOf("jpegblip")&&(i="image/jpeg"),i){var j=h[1].split("}");if(!(j&&j.length<2)){var k;if(j.length>2&&-1!=j[0].indexOf("blipuid"))k=j[1].split(" ");else{if((k=j[0].split(" "))&&k.length<2)return;k.shift()}var l=k.join(""),m=t(l),n="data:"+i+";base64,"+m;"IMG"===b.tagName?(b.src=n,b.setAttribute("data-fr-image-pasted",!0)):a(b.parentNode).before('<img data-fr-image-pasted="true" src="'+n+'" style="'+b.parentNode.getAttribute("style")+'">').remove()}}}}}}}function v(b,c){var d=b.tagName,e=d.toLowerCase();if(b.firstElementChild&&("I"==b.firstElementChild.tagName?n(b.firstElementChild,"em"):"B"==b.firstElementChild.tagName&&n(b.firstElementChild,"strong")),-1!=["SCRIPT","APPLET","EMBED","NOFRAMES","NOSCRIPT"].indexOf(d))return h(b),!1;"O:P"==d&&"&nbsp;"==b.innerHTML&&(b.innerHTML=a.FE.INVISIBLE_SPACE);var f=-1,g=["META","LINK","XML","ST1:","O:","W:","FONT"];for(f=0;f<g.length;f++)if(-1!=d.indexOf(g[f]))return b.innerHTML?(b.outerHTML=b.innerHTML,h(b),!1):(h(b),!1);if("TD"!=d){var i=b.getAttribute("class");if(c&&i){i=q(i);var j=i.split(" ");for(f=0;f<j.length;f++){var k=j[f],l=[],m="."+k;l.push(m),m=e+m,l.push(m);for(var s=0;s<l.length;s++)c[l[s]]&&r(b,c[l[s]])}}c&&c[e]&&r(b,c[e])}if(-1!=["P","H1","H2","H3","H4","H5","H6","PRE"].indexOf(d)){var t=b.getAttribute("class");if(t&&(c&&c[d.toLowerCase()+"."+t]&&r(b,c[d.toLowerCase()+"."+t]),-1!=t.toLowerCase().indexOf("mso"))){var u=q(t);u=u.replace(/[0-9a-z-_]*mso[0-9a-z-_]*/gi,""),u?b.setAttribute("class",u):b.removeAttribute("class")}var v=b.getAttribute("style");if(v){var w=v.match(/text-align:.+?[; "]{1,1}/gi);w&&w[w.length-1].replace(/(text-align:.+?[; "]{1,1})/gi,"$1")}p(b)}if("TR"==d&&o(b,c),"A"==d&&!b.attributes.getNamedItem("href")&&b.innerHTML&&(b.outerHTML=b.innerHTML),"TD"!=d&&"TH"!=d||b.innerHTML||(b.innerHTML="<br>"),"TABLE"==d&&(b.style.width="100%"),b.getAttribute("lang")&&b.removeAttribute("lang"),b.getAttribute("style")&&-1!=b.getAttribute("style").toLowerCase().indexOf("mso")){var x=q(b.getAttribute("style"));x=x.replace(/[0-9a-z-_]*mso[0-9a-z-_]*:.+?(;{1,1}|$)/gi,""),x?b.setAttribute("style",x):b.removeAttribute("style")}return!0}function w(a){var b={},c=a.getElementsByTagName("style");if(c.length){var d=c[0],e=d.innerHTML.match(/[\S ]+\s+{[\s\S]+?}/gi);if(e)for(var f=0;f<e.length;f++){var g=e[f],h=g.replace(/([\S ]+\s+){[\s\S]+?}/gi,"$1"),i=g.replace(/[\S ]+\s+{([\s\S]+?)}/gi,"$1");h=h.replace(/^[\s]|[\s]$/gm,""),i=i.replace(/^[\s]|[\s]$/gm,""),h=h.replace(/\n|\r|\n\r/g,""),i=i.replace(/\n|\r|\n\r/g,"");for(var j=h.split(", "),k=0;k<j.length;k++)b[j[k]]=i}}return b}function x(a){for(var b=a.split("v:shape"),c=1;c<b.length;c++){var d=b[c],e=d.split(' id="')[1];if(e&&e.length>1){e=e.split('"')[0];var f=d.split(' o:spid="')[1];f&&f.length>1&&(f=f.split('"')[0],C[e]=f)}}}function y(c,d){c=c.replace(/[.\s\S\w\W<>]*(<html[^>]*>[.\s\S\w\W<>]*<\/html>)[.\s\S\w\W<>]*/gi,"$1"),x(c);var e=new DOMParser,f=e.parseFromString(c,"text/html"),g=f.head,k=f.body,l=w(g);i(k,function(b){if(b.nodeType==Node.TEXT_NODE&&/\n|\u00a0/.test(b.data)){if(!/\S/.test(b.data))return b.data==a.FE.UNICODE_NBSP?(b.data="\u200b",!0):(h(b),!1);b.data=b.data.replace(/\n/gi," ")}return!0}),i(k,function(a){return a.nodeType!=Node.ELEMENT_NODE||"V:IMAGEDATA"!=a.tagName&&"IMG"!=a.tagName||u(a,d),!0}),i(k,function(a){if(a.nodeType==Node.TEXT_NODE)return a.data=a.data.replace(/<br>(\n|\r)/gi,"<br>"),!1;if(a.nodeType==Node.ELEMENT_NODE){if(j(a)){var b=a.parentNode,c=a.previousSibling,d=m(a,l),e=null;return e=c?c.nextSibling:b.firstChild,e?b.insertBefore(d,e):b.appendChild(d),!1}return v(a,l)}return a.nodeType!=Node.COMMENT_NODE||(h(a),!1)}),i(k,function(a){if(a.nodeType==Node.ELEMENT_NODE){var b=a.tagName;if(!a.innerHTML&&-1==["BR","IMG"].indexOf(b)){for(var c=a.parentNode;c&&(h(a),a=c,!a.innerHTML);)c=a.parentNode;return!1}s(a)}return!0});var n=k.outerHTML,o=b.opts.htmlAllowedStyleProps;return b.opts.htmlAllowedStyleProps=b.opts.wordAllowedStyleProps,n=b.clean.html(n,b.opts.wordDeniedTags,b.opts.wordDeniedAttrs,!1),b.opts.htmlAllowedStyleProps=o,n}var z,A,B="word_paste",C={};return{_init:c,clean:g}}});

/***/ }),
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(384),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/components/Footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bba7834", Component.options)
  } else {
    hotAPI.reload("data-v-3bba7834", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(372),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/components/Navigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02af80a6", Component.options)
  } else {
    hotAPI.reload("data-v-02af80a6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(387),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/components/Notification.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notification.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d8c3ec4", Component.options)
  } else {
    hotAPI.reload("data-v-4d8c3ec4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(393),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/components/Notifications.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notifications.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67a73adf", Component.options)
  } else {
    hotAPI.reload("data-v-67a73adf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(373),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/components/Pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Pagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06058b9a", Component.options)
  } else {
    hotAPI.reload("data-v-06058b9a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(382),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/components/TimeAgo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TimeAgo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-301e639a", Component.options)
  } else {
    hotAPI.reload("data-v-301e639a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(385),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/AdminArea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AdminArea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40069811", Component.options)
  } else {
    hotAPI.reload("data-v-40069811", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(398),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Blogs/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8c07546", Component.options)
  } else {
    hotAPI.reload("data-v-a8c07546", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(381),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Blogs/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ef91a89", Component.options)
  } else {
    hotAPI.reload("data-v-2ef91a89", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(371),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Components/AdminNavigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AdminNavigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00c92c36", Component.options)
  } else {
    hotAPI.reload("data-v-00c92c36", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(380),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Dashboard/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e8151cc", Component.options)
  } else {
    hotAPI.reload("data-v-2e8151cc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(386),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Projects/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b1307ee", Component.options)
  } else {
    hotAPI.reload("data-v-4b1307ee", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(396),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Projects/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dee2a18", Component.options)
  } else {
    hotAPI.reload("data-v-7dee2a18", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(185),
  /* template */
  __webpack_require__(379),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Tags/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-263d54a2", Component.options)
  } else {
    hotAPI.reload("data-v-263d54a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(186),
  /* template */
  __webpack_require__(377),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Tags/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15e99477", Component.options)
  } else {
    hotAPI.reload("data-v-15e99477", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(187),
  /* template */
  __webpack_require__(374),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Technologies/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08cdcd3e", Component.options)
  } else {
    hotAPI.reload("data-v-08cdcd3e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(188),
  /* template */
  __webpack_require__(395),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Technologies/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-778c0ec8", Component.options)
  } else {
    hotAPI.reload("data-v-778c0ec8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(189),
  /* template */
  __webpack_require__(399),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Timelines/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c7c13488", Component.options)
  } else {
    hotAPI.reload("data-v-c7c13488", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(389),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Timelines/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e6d860a", Component.options)
  } else {
    hotAPI.reload("data-v-4e6d860a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(375),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Admin/Users/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ad65ac0", Component.options)
  } else {
    hotAPI.reload("data-v-0ad65ac0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(383),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Blogs/Components/BlogCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BlogCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a32ec62", Component.options)
  } else {
    hotAPI.reload("data-v-3a32ec62", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(401),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Blogs/Components/CommentsArea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CommentsArea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e995889e", Component.options)
  } else {
    hotAPI.reload("data-v-e995889e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(402),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Blogs/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fed8c9ae", Component.options)
  } else {
    hotAPI.reload("data-v-fed8c9ae", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(197),
  /* template */
  __webpack_require__(390),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Blogs/View.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] View.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d6e061e", Component.options)
  } else {
    hotAPI.reload("data-v-5d6e061e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(388),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Home/Components/GitTree.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] GitTree.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dd01bbc", Component.options)
  } else {
    hotAPI.reload("data-v-4dd01bbc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(199),
  /* template */
  __webpack_require__(394),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Home/Components/Project.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Project.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-762bbbc5", Component.options)
  } else {
    hotAPI.reload("data-v-762bbbc5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(397),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Home/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87d0c238", Component.options)
  } else {
    hotAPI.reload("data-v-87d0c238", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(392),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6086bf9e", Component.options)
  } else {
    hotAPI.reload("data-v-6086bf9e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(391),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/PageNotFound.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PageNotFound.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f16420e", Component.options)
  } else {
    hotAPI.reload("data-v-5f16420e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(376),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/LukePOLO/PhpstormProjects/LukePOLO/resources/assets/js/pages/Resume.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Resume.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c303470", Component.options)
  } else {
    hotAPI.reload("data-v-0c303470", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row panel-links"
  }, [_c('div', {
    staticClass: "col-md-2"
  }, [_c('router-link', {
    staticClass: "panel panel-default",
    attrs: {
      "tag": "div",
      "to": {
        name: 'admin-dashboard'
      }
    }
  }, [_c('div', {
    staticClass: "panel-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                Dashboard\n                "), _c('span', [_c('div', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-arrow-right"
  })])])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('router-link', {
    staticClass: "panel panel-default",
    attrs: {
      "tag": "div",
      "to": {
        name: 'admin-projects'
      }
    }
  }, [_c('div', {
    staticClass: "panel-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                    Projects\n                    "), _c('span', [_c('div', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-arrow-right"
  })])])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('router-link', {
    staticClass: "panel panel-default",
    attrs: {
      "tag": "div",
      "to": {
        name: 'admin-blogs'
      }
    }
  }, [_c('div', {
    staticClass: "panel-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                Blogs\n                "), _c('span', [_c('div', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-arrow-right"
  })])])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('router-link', {
    staticClass: "panel panel-default",
    attrs: {
      "tag": "div",
      "to": {
        name: 'admin-timelines'
      }
    }
  }, [_c('div', {
    staticClass: "panel-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                Timelines\n                "), _c('span', [_c('div', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-arrow-right"
  })])])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('router-link', {
    staticClass: "panel panel-default",
    attrs: {
      "tag": "div",
      "to": {
        name: 'admin-technologies'
      }
    }
  }, [_c('div', {
    staticClass: "panel-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                Technologies\n                "), _c('span', [_c('div', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-arrow-right"
  })])])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('router-link', {
    staticClass: "panel panel-default",
    attrs: {
      "tag": "div",
      "to": {
        name: 'admin-tags'
      }
    }
  }, [_c('div', {
    staticClass: "panel-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                Tags\n                "), _c('span', [_c('div', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-arrow-right"
  })])])])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-00c92c36", module.exports)
  }
}

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar navbar-default",
    attrs: {
      "id": "main-nav"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_vm._m(0), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-brand",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("LukePOLO")])], 1), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "main-menu"
    }
  }, [_c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": {
        name: 'blogs'
      }
    }
  }, [_vm._v("BLOG")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": {
        name: 'resume'
      }
    }
  }, [_vm._v("RESUME")])], 1), _vm._v(" "), (_vm.isAuthed) ? [(_vm.isAdmin) ? [_c('li', {
    staticClass: "dropdown"
  }, [_vm._m(1), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": {
        name: 'admin-dashboard'
      }
    }
  }, [_vm._v("Dashboard")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": {
        name: 'admin-users'
      }
    }
  }, [_vm._v("Users")])], 1), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.logout($event)
      }
    }
  }, [_vm._v("Logout")])])])])] : [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.logout($event)
      }
    }
  }, [_vm._v("LOGOUT")])])]] : _vm._e()], 2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "navbar-toggle collapsed",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#main-menu"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n                                ADMIN\n                                "), _c('span', {
    staticClass: "caret"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-02af80a6", module.exports)
  }
}

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.pagination && _vm.pagination.total) ? _c('div', {
    staticClass: "Pagination"
  }, [(_vm.pagination.per_page) ? _c('div', [_c('div', {
    staticClass: "Pagination__info"
  }, [_vm._v("\n            Showing " + _vm._s(_vm.pagination.from) + " to " + _vm._s(_vm.pagination.to) + " of " + _vm._s(_vm.pagination.total) + " items\n        ")]), _vm._v(" "), (_vm.lastPage !== 1) ? _c('div', {
    staticClass: "Pagination__buttons"
  }, [_c('a', {
    class: {
      disabled: _vm.currentPage == 1
    },
    on: {
      "click": function($event) {
        _vm.goToPage(_vm.currentPage - 1)
      }
    }
  }, [_vm._v("\n                Prev\n            ")]), _vm._v(" "), _c('a', {
    class: {
      current: _vm.currentPage == 1
    },
    on: {
      "click": function($event) {
        _vm.goToPage(1)
      }
    }
  }, [_vm._v(" 1 ")]), _vm._v(" "), (_vm.currentPage >= 5 && _vm.lastPage > 10) ? _c('span', [_vm._v("...")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.centerPartPage), function(page) {
    return _c('a', {
      class: {
        current: _vm.currentPage == page + 1
      },
      on: {
        "click": function($event) {
          _vm.goToPage(page + 1)
        }
      }
    }, [_vm._v("\n                " + _vm._s(page + 1) + "\n            ")])
  }), _vm._v(" "), (_vm.lastPage > 10 && _vm.lastPage - _vm.currentPage > 5) ? _c('span', [_vm._v("...")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.lastPartPage), function(page) {
    return _c('a', {
      class: {
        current: _vm.currentPage == page + 1
      },
      on: {
        "click": function($event) {
          _vm.goToPage(page + 1)
        }
      }
    }, [_vm._v("\n                " + _vm._s(page + 1) + "\n            ")])
  }), _vm._v(" "), _c('a', {
    class: {
      disabled: _vm.currentPage == _vm.lastPage
    },
    on: {
      "click": function($event) {
        _vm.goToPage(_vm.currentPage + 1)
      }
    }
  }, [_vm._v("\n                Next\n            ")])], 2) : _vm._e()]) : _vm._e()]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-06058b9a", module.exports)
  }
}

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "col-md-3"
  }, [_c('h3', [_vm._v(_vm._s(_vm.actionStatus) + " Technology")]), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control",
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("URL")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.url),
      expression: "form.url"
    }],
    staticClass: "form-control",
    domProps: {
      "value": (_vm.form.url)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.url = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Color")]), _vm._v(" "), _c('material-picker', {
    model: {
      value: (_vm.color),
      callback: function($$v) {
        _vm.color = $$v
      },
      expression: "color"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("\n                " + _vm._s(_vm.actionStatus) + "\n            ")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08cdcd3e", module.exports)
  }
}

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Users")]), _vm._v(" "), _c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.users), function(user) {
    return _c('tr', [_c('td', [_vm._v("\n                " + _vm._s(user.name) + "\n            ")]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-link confirm",
      on: {
        "click": function($event) {
          _vm.deleteUser(user)
        }
      }
    }, [_vm._v("Delete")])])])
  }))]), _vm._v(" "), _c('pagination', {
    attrs: {
      "pagination": _vm.usersPagination,
      "commit": "users/setAll"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0ad65ac0", module.exports)
  }
}

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('a', {
    attrs: {
      "href": "https://www.dropbox.com/s/4q6urgnixx8tdb0/Luke%20Policinski.pdf?dl=1"
    }
  }, [_vm._v("Download PDF")]), _vm._v(" "), _c('iframe', {
    staticClass: "no-border",
    attrs: {
      "src": "https://docs.google.com/viewer?url=https://www.dropbox.com/s/4q6urgnixx8tdb0/Luke%20Policinski.pdf?dl=1&embedded=true",
      "width": "100%",
      "height": "1080"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c303470", module.exports)
  }
}

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [(_vm.tags.length) ? [_c('h3', [_vm._v("Tags")]), _vm._v(" "), _c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.tags), function(tag) {
    return _c('tr', [_c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'admin-tags-edit',
          params: {
            tag: tag.id
          }
        }
      }
    }, [_vm._v("\n                        " + _vm._s(tag.name) + "\n                    ")])], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(tag.color))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-link confirm",
      on: {
        "click": function($event) {
          _vm.deleteTag(tag)
        }
      }
    }, [_vm._v("Delete")])])])
  }))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'admin-tags-create'
      }
    }
  }, [_vm._v("Create")])] : [_c('h3', {
    staticClass: "text-center"
  }, [_vm._v("\n            Lets create your first "), _c('router-link', {
    staticClass: "text-center",
    attrs: {
      "to": {
        name: 'admin-tags-create'
      }
    }
  }, [_vm._v(" Tag")]), _vm._v("!\n        ")], 1)]], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Color")]), _vm._v(" "), _c('th')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-15e99477", module.exports)
  }
}

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.comment.user) ? _c('div', {
    staticClass: "col-sm-12 comment-row"
  }, [(_vm.comment.user.user_provider) ? _c('div', {
    staticClass: "col-xs-1 hidden-md"
  }, [_c('img', {
    staticClass: "user-image img-responsive",
    attrs: {
      "src": _vm.comment.user.user_provider.avatar
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-xs-11 reply-area"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('span', {
    staticClass: "user-name"
  }, [_vm._v("\n                " + _vm._s(_vm.comment.user.name) + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "timestamp"
  }, [_c('time-ago', {
    attrs: {
      "time": _vm.comment.created_at
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row comment"
  }, [(!_vm.editing) ? [_vm._v("\n                " + _vm._s(_vm.comment.comment) + "\n            ")] : [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.update($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.comment),
      expression: "form.comment"
    }],
    staticClass: "form-control",
    domProps: {
      "value": (_vm.form.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.comment = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cancel comment-post btn btn-danger",
    on: {
      "click": function($event) {
        _vm.editing = false
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('button', {
    staticClass: "comment-post btn btn-primary"
  }, [_vm._v("Update")])])]], 2), _vm._v(" "), _c('div', {
    staticClass: "row comment-footer"
  }, [(_vm.isAuthed) ? [_vm._v("\n                • "), _c('span', {
    staticClass: "btn-link reply",
    on: {
      "click": function($event) {
        _vm.reply = true
      }
    }
  }, [_vm._v("Reply")]), _vm._v(" "), (_vm.isOwners) ? [_vm._v("\n                    • "), _c('span', {
    staticClass: "btn-link edit",
    on: {
      "click": function($event) {
        _vm.editing = true
      }
    }
  }, [_vm._v("Edit")])] : _vm._e(), _vm._v(" "), (_vm.isAdmin) ? _c('span', [_vm._v("\n                    • "), _c('span', {
    staticClass: "btn-link delete",
    on: {
      "click": _vm.deleteComment
    }
  }, [_vm._v("Delete")])]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.reply) ? _c('comment-form', {
    attrs: {
      "blog_id": _vm.comment.blog_id,
      "parentComment": _vm.comment,
      "placeholder": "Reply",
      "open": _vm.reply
    },
    on: {
      "updated": _vm.emitUpdated,
      "update:open": function($event) {
        _vm.reply = $event
      }
    }
  }) : _vm._e()], 2), _vm._v(" "), _vm._l((_vm.comment.children), function(comment) {
    return _c('comment', {
      key: comment.id,
      attrs: {
        "comment": comment
      }
    })
  })], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1937e57f", module.exports)
  }
}

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "col-md-3"
  }, [_c('h3', [_vm._v(_vm._s(_vm.actionStatus) + " Tag")]), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control",
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Color")]), _vm._v(" "), _c('material-picker', {
    model: {
      value: (_vm.color),
      callback: function($$v) {
        _vm.color = $$v
      },
      expression: "color"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("\n                " + _vm._s(_vm.actionStatus) + "\n            ")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-263d54a2", module.exports)
  }
}

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("\n                    User Comments\n                    "), _c('span', {
    staticClass: "pull-right unread label",
    class: {
      'label-warning': _vm.comments.length > 0, 'label-default': _vm.comments.length === 0
    }
  }, [_c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.comments.length))]), _vm._v(" Messages\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [(_vm.comments.length === 0) ? [_c('div', {
    staticClass: "text-center"
  }, [_vm._v("\n                        Go Enjoy Your Day!\n                    ")])] : _vm._l((_vm.comments), function(comment) {
    return [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-9"
    }, [_c('comment', {
      attrs: {
        "comment": comment
      },
      on: {
        "updated": _vm.refreshPagination
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-sm-3"
    }, [_c('div', {
      staticClass: "btn btn-primary",
      on: {
        "click": function($event) {
          _vm.moderatedComment(comment.id)
        }
      }
    }, [_vm._v("\n                                Moderated\n                            ")])])])]
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('pagination', {
    attrs: {
      "pagination": _vm.commentsPagination,
      "commit": "admin_blog_comments/setAll",
      "refresh": _vm.refresh
    },
    on: {
      "update:refresh": function($event) {
        _vm.refresh = $event
      }
    }
  })], 1)], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "visitor-chart"
  }, [_c('canvas', {
    ref: "chart"
  })]), _vm._v(" "), _c('div', {
    staticClass: "popular-pages"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.popularData), function(datum) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(datum.url))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(datum.pageViews) + " ")])])
  }))])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("Visitors")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("URL")]), _vm._v(" "), _c('th', [_vm._v("Views")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e8151cc", module.exports)
  }
}

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [(_vm.blogs.length) ? [_c('h3', [_vm._v("Blogs")]), _vm._v(" "), _c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.blogs), function(blog) {
    return _c('tr', [_c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'admin-blogs-edit',
          params: {
            blog: blog.id
          }
        }
      }
    }, [_vm._v("\n                        " + _vm._s(blog.name) + "\n                    ")])], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(blog.draft))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(blog.created_at))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(blog.updated_at))]), _vm._v(" "), _c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'blog',
          params: {
            blog: blog.id
          }
        }
      }
    }, [_vm._v("preview")])], 1), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-link confirm",
      on: {
        "click": function($event) {
          _vm.deleteBlog(blog)
        }
      }
    }, [_vm._v("Delete")])])])
  }))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'admin-blogs-create'
      }
    }
  }, [_vm._v("Create")])] : [_c('h3', {
    staticClass: "text-center"
  }, [_vm._v("\n            Lets create your first "), _c('router-link', {
    staticClass: "text-center",
    attrs: {
      "to": {
        name: 'admin-blogs-create'
      }
    }
  }, [_vm._v(" Blog")]), _vm._v("!\n        ")], 1)]], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Draft")]), _vm._v(" "), _c('th', [_vm._v("Created At")]), _vm._v(" "), _c('th', [_vm._v("Updated At")]), _vm._v(" "), _c('th', [_vm._v("Preview")]), _vm._v(" "), _c('th')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ef91a89", module.exports)
  }
}

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_vm._v(" " + _vm._s(_vm.text) + " ")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-301e639a", module.exports)
  }
}

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "blog row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h1', {
    staticClass: "blog-name"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'blog',
        params: {
          blog: _vm.blog.id
        }
      }
    }
  }, [_vm._v("\n                    { " + _vm._s(_vm.blog.name) + "\n                ")])], 1), _vm._v(" "), _c('small', [_vm._v(_vm._s(_vm.parseDate(_vm.blog.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')))]), _vm._v(" "), _c('div', {
    staticClass: "technologies"
  }, [_vm._l((_vm.blog.tags), function(tag) {
    return [_c('span', {
      staticClass: "label",
      style: ('background-color:' + tag.color)
    }, [_vm._v("\n                    " + _vm._s(tag.name) + "\n                ")])]
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('a', [_c('img', {
    staticClass: "img-responsive blog-image center-block",
    attrs: {
      "src": _vm.blog.blog_image
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('p', [_c('froalaView', {
    model: {
      value: (_vm.blog.preview_text),
      callback: function($$v) {
        _vm.blog.preview_text = $$v
      },
      expression: "blog.preview_text"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('router-link', {
    staticClass: "pull-right",
    attrs: {
      "to": {
        name: 'blog',
        params: {
          blog: _vm.blog.id
        }
      }
    }
  }, [_vm._v("\n                Continue Reading ...\n            ")])], 1)]), _vm._v(" "), _c('hr')])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a32ec62", module.exports)
  }
}

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "col-md-2 col-md-offset-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3bba7834", module.exports)
  }
}

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "container admin-area"
  }, [_c('admin-navigation'), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40069811", module.exports)
  }
}

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [(_vm.timelines.length) ? [_c('div', {
    staticClass: "col-md-9"
  }, [_c('froala', {
    attrs: {
      "config": _vm.froalaConfig
    },
    model: {
      value: (_vm.form.html),
      callback: function($$v) {
        _vm.form.html = $$v
      },
      expression: "form.html"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "url"
    },
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("URL")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.url),
      expression: "form.url"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "url"
    },
    domProps: {
      "value": (_vm.form.url)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.url = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Project Image")]), _vm._v(" "), _c('div', {
    staticClass: "dropzone"
  }, [(_vm.projectImage) ? _c('div', {
    staticClass: "js-preview-reset btn btn-xs btn-primary",
    on: {
      "click": _vm.resetProjectImage
    }
  }, [_vm._v("Reset")]) : _vm._e(), _vm._v(" "), (!_vm.projectImage) ? _c('h4', {
    staticClass: "dropzone-text"
  }, [_vm._v("Drop files here or click to upload.")]) : _vm._e(), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "name": "project_image"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "id": "image-preview",
      "src": _vm.projectImage
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Start Date")]), _vm._v(" "), _c('flat-pickr', {
    model: {
      value: (_vm.form.start_date),
      callback: function($$v) {
        _vm.form.start_date = $$v
      },
      expression: "form.start_date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("End Date")]), _vm._v(" "), _c('flat-pickr', {
    model: {
      value: (_vm.form.end_date),
      callback: function($$v) {
        _vm.form.end_date = $$v
      },
      expression: "form.end_date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Timeline")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.timeline_id),
      expression: "form.timeline_id"
    }],
    staticClass: "form-control",
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.timeline_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option'), _vm._v(" "), _vm._l((_vm.timelines), function(timeline) {
    return _c('option', {
      domProps: {
        "value": timeline.id
      }
    }, [_vm._v("\n                            " + _vm._s(timeline.name) + "\n                        ")])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Technologies")]), _vm._v(" "), (_vm.technologies) ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.technologies),
      expression: "form.technologies"
    }],
    staticClass: "form-control",
    attrs: {
      "multiple": ""
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.technologies = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.technologies), function(technology) {
    return _c('option', {
      domProps: {
        "value": technology.id
      }
    }, [_vm._v("\n                            " + _vm._s(technology.name) + "\n                        ")])
  })) : _vm._e()]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary"
  }, [(_vm.projectId) ? [_vm._v("\n                        Update\n                    ")] : [_vm._v("\n                        Create\n                    ")]], 2)])])] : [_c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n            You need to create at least one "), _c('router-link', {
    attrs: {
      "to": {
        name: 'admin-timelines-create'
      }
    }
  }, [_vm._v("timeline")]), _vm._v("!\n        ")], 1)]], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b1307ee", module.exports)
  }
}

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "notification",
    class: _vm.notification.class
  }, [_c('button', {
    staticClass: "notification-close btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.close(_vm.notification)
      }
    }
  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), (_vm.notification.title) ? _c('h4', {
    staticClass: "notification-heading"
  }, [_vm._v(_vm._s(_vm.notification.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "notification-text",
    domProps: {
      "innerHTML": _vm._s(_vm.notification.text)
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4d8c3ec4", module.exports)
  }
}

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('svg', {
    ref: "tree",
    attrs: {
      "id": "git_tree"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dd01bbc", module.exports)
  }
}

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [(_vm.timelines.length) ? [_c('h3', [_vm._v("Timelines")]), _vm._v(" "), _c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.timelines), function(timeline) {
    return _c('tr', [_c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'admin-timelines-edit',
          params: {
            timeline: timeline.id
          }
        }
      }
    }, [_vm._v("\n                            " + _vm._s(timeline.name) + "\n                        ")])], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(timeline.start_date))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(timeline.end_date))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-link confirm",
      on: {
        "click": function($event) {
          _vm.deleteTimeline(timeline)
        }
      }
    }, [_vm._v("Delete")])])])
  }))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'admin-timelines-create'
      }
    }
  }, [_vm._v("Create")])] : [_c('h3', {
    staticClass: "text-center"
  }, [_vm._v("\n            Lets create your first "), _c('router-link', {
    staticClass: "text-center",
    attrs: {
      "to": {
        name: 'admin-timelines-create'
      }
    }
  }, [_vm._v(" Timeline")]), _vm._v("!\n        ")], 1)]], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Start Date")]), _vm._v(" "), _c('th', [_vm._v("End Date")]), _vm._v(" "), _c('th')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e6d860a", module.exports)
  }
}

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(_vm.blog) ? _c('div', {
    staticClass: "col-md-12 big-bottom-padding"
  }, [_c('h1', {
    staticClass: "blog-name"
  }, [_vm._v("\n            { " + _vm._s(_vm.blog.name) + "\n            "), (_vm.isAdmin) ? _c('router-link', {
    staticClass: "pull-right btn btn-sm btn-primary",
    attrs: {
      "to": {
        name: 'admin-blogs-edit',
        params: {
          blog: _vm.blog.id
        }
      }
    }
  }, [_vm._v("\n                Edit\n            ")]) : _vm._e()], 1), _vm._v(" "), _c('small', [_vm._v(_vm._s(_vm.parseDate(_vm.blog.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')))]), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "technologies"
  }, [_vm._l((_vm.blog.tags), function(tag) {
    return [_c('a', {
      staticClass: "label",
      style: ('background-color:' + tag.color),
      attrs: {
        "href": "#"
      }
    }, [_vm._v("\n                    " + _vm._s(tag.name) + "\n                ")])]
  })], 2), _vm._v(" "), _c('hr'), _vm._v(" "), _c('img', {
    staticClass: "img-responsive blog-image center-block",
    attrs: {
      "src": _vm.blog.blog_image
    }
  }), _vm._v(" "), _c('froalaView', {
    model: {
      value: (_vm.blog.html),
      callback: function($$v) {
        _vm.blog.html = $$v
      },
      expression: "blog.html"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('comments-area', {
    attrs: {
      "blog": _vm.blog
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d6e061e", module.exports)
  }
}

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "error-page"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n        Whelp, you found a missing page!\n        "), _c('br'), _c('br'), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Go Back Home!")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f16420e", module.exports)
  }
}

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row login-buttons"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_vm._v("\n        Login\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('a', {
    attrs: {
      "href": "/oauth/google"
    }
  }, [_c('i', {
    staticClass: "fa fa-google"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('a', {
    attrs: {
      "href": "/oauth/github"
    }
  }, [_c('i', {
    staticClass: "fa fa-github"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('a', {
    attrs: {
      "href": "/oauth/twitter"
    }
  }, [_c('i', {
    staticClass: "fa fa-twitter"
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6086bf9e", module.exports)
  }
}

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notifications"
  }, _vm._l((_vm.notifications), function(notification, index) {
    return _c('notification', {
      key: index,
      attrs: {
        "notification": notification
      }
    })
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-67a73adf", module.exports)
  }
}

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [(!_vm.viewing) ? _c('div', {
    staticClass: "project",
    on: {
      "click": _vm.viewProject
    }
  }, [_c('div', {
    staticClass: "col-md-6 img-holder",
    attrs: {
      "data-project_id": "project_id"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": _vm.project.project_image
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.viewing) ? _c('div', {
    staticClass: "project-details",
    attrs: {
      "id": "project->id"
    }
  }, [_c('div', {
    staticClass: "show-projects"
  }, [_c('span', {
    staticClass: "btn btn-info",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.closeProject()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-left"
  })]), _vm._v(" "), _c('h2', [_vm._v("\n                " + _vm._s(_vm.project.name) + "\n                "), _c('small', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_vm._v(_vm._s(_vm.project.url))])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "row panel-links"
  }, _vm._l((_vm.technologies), function(technology) {
    return _c('div', {
      staticClass: "col-lg-3",
      on: {
        "click": function($event) {
          _vm.goToUrl(technology.url)
        }
      }
    }, [_c('div', {
      staticClass: "panel panel-default"
    }, [_c('div', {
      staticClass: "panel-color",
      style: ('background-color:' + technology.color)
    }), _vm._v(" "), _c('div', {
      staticClass: "panel-body"
    }, [_vm._v("\n                        " + _vm._s(technology.name) + "\n                        "), _c('span', [_c('i', {
      staticClass: "pull-right fa fa-arrow-right",
      style: ('color:' + technology.color)
    })])])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "project-html"
  }, [_c('froalaView', {
    model: {
      value: (_vm.project.html),
      callback: function($$v) {
        _vm.project.html = $$v
      },
      expression: "project.html"
    }
  })], 1)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-762bbbc5", module.exports)
  }
}

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [(_vm.technologies.length) ? [_c('h3', [_vm._v("Technologies")]), _vm._v(" "), _c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.technologies), function(technology) {
    return _c('tr', [_c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'admin-technologies-edit',
          params: {
            technology: technology.id
          }
        }
      }
    }, [_vm._v("\n                        " + _vm._s(technology.name) + "\n                    ")])], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(technology.url))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(technology.color))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-link confirm",
      on: {
        "click": function($event) {
          _vm.deleteTechnology(technology)
        }
      }
    }, [_vm._v("Delete")])])])
  }))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'admin-technologies-create'
      }
    }
  }, [_vm._v("Create")])] : [_c('h3', {
    staticClass: "text-center"
  }, [_vm._v("\n            Lets create your first "), _c('router-link', {
    staticClass: "text-center",
    attrs: {
      "to": {
        name: 'admin-technologies-create'
      }
    }
  }, [_vm._v(" Techonlogy")]), _vm._v("!\n        ")], 1)]], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("URL")]), _vm._v(" "), _c('th', [_vm._v("Color")]), _vm._v(" "), _c('th')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-778c0ec8", module.exports)
  }
}

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [(_vm.projects.length) ? [_c('h3', [_vm._v("Projects")]), _vm._v(" "), _c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.projects), function(project) {
    return _c('tr', [_c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'admin-projects-edit',
          params: {
            project: project.id
          }
        }
      }
    }, [_vm._v("\n                            " + _vm._s(project.name) + "\n                        ")])], 1), _vm._v(" "), _c('td', [_c('a', {
      attrs: {
        "target": "_blank",
        "href": project.url
      }
    }, [_vm._v("\n                            " + _vm._s(project.url) + "\n                        ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(project.timeline.name) + " ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(project.end_date))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(project.start_date))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-link confirm",
      on: {
        "click": function($event) {
          _vm.deleteProject(project)
        }
      }
    }, [_vm._v("Delete")])])])
  }))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'admin-projects-create'
      }
    }
  }, [_vm._v("Create")])] : [_c('h3', {
    staticClass: "text-center"
  }, [_vm._v("\n            Lets create your first "), _c('router-link', {
    staticClass: "text-center",
    attrs: {
      "to": {
        name: 'admin-projects-create'
      }
    }
  }, [_vm._v(" Project")]), _vm._v("!\n        ")], 1)]], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("URL")]), _vm._v(" "), _c('th', [_vm._v("Timeline")]), _vm._v(" "), _c('th', [_vm._v("Start Date")]), _vm._v(" "), _c('th', [_vm._v("End Date")]), _vm._v(" "), _c('th')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7dee2a18", module.exports)
  }
}

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "col-md-3 visible-md visible-lg"
  }, [(_vm.projects) ? _c('git-tree') : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.projects), function(project) {
    return [_c('project', {
      attrs: {
        "project": project
      }
    })]
  })], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "select-title"
  }, [_c('h1', [_vm._v("Projects")]), _vm._v(" "), _c('div', [_c('small', [_c('span', {
    staticClass: "visible-md visible-lg"
  }, [_c('i', {
    staticClass: "fa fa-long-arrow-left"
  }), _vm._v(" You can navigate my site using my \"git tree\" just click / hover over them\n                    ")]), _vm._v(" "), _c('span', {
    staticClass: "visible-sm visible-xs"
  }, [_vm._v("\n                        Click on the images to find out more\n                    ")])])]), _vm._v(" "), _c('hr')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-87d0c238", module.exports)
  }
}

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "col-md-9"
  }, [_c('h3', [_vm._v("Preview Text")]), _vm._v(" "), _c('froala', {
    attrs: {
      "config": _vm.previewConfig
    },
    model: {
      value: (_vm.form.preview_text),
      callback: function($$v) {
        _vm.form.preview_text = $$v
      },
      expression: "form.preview_text"
    }
  }), _vm._v(" "), _c('froala', {
    attrs: {
      "config": _vm.blogConfig
    },
    model: {
      value: (_vm.form.html),
      callback: function($$v) {
        _vm.form.html = $$v
      },
      expression: "form.html"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "url"
    },
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Draft")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.draft),
      expression: "form.draft"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "checkbox",
      "name": "url"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.draft) ? _vm._i(_vm.form.draft, null) > -1 : (_vm.form.draft)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.form.draft,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.form.draft = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.form.draft = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.form.draft = $$c
        }
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Link name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.link_name),
      expression: "form.link_name"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "link_name"
    },
    domProps: {
      "value": (_vm.form.link_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.link_name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Blog Image")]), _vm._v(" "), _c('div', {
    staticClass: "dropzone"
  }, [(_vm.blogImage) ? _c('div', {
    staticClass: "js-preview-reset btn btn-xs btn-primary",
    on: {
      "click": _vm.resetblogImage
    }
  }, [_vm._v("Reset")]) : _vm._e(), _vm._v(" "), (!_vm.blogImage) ? _c('h4', {
    staticClass: "dropzone-text"
  }, [_vm._v("Drop files here or click to upload.")]) : _vm._e(), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "name": "blog_image"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "id": "image-preview",
      "src": _vm.blogImage
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tags")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.tags),
      expression: "form.tags"
    }],
    staticClass: "form-control",
    attrs: {
      "multiple": ""
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.tags = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.tags), function(tag) {
    return _c('option', {
      domProps: {
        "value": tag.id
      }
    }, [_vm._v("\n                        " + _vm._s(tag.name) + "\n                    ")])
  }))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary"
  }, [(_vm.blog) ? [_vm._v("\n                    Update\n                ")] : [_vm._v("\n                    Create\n                ")]], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a8c07546", module.exports)
  }
}

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "col-md-3"
  }, [_c('h3', [_vm._v(_vm._s(_vm.actionStatus) + " Timeline")]), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control",
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Start Date")]), _vm._v(" "), _c('flat-pickr', {
    model: {
      value: (_vm.form.start_date),
      callback: function($$v) {
        _vm.form.start_date = $$v
      },
      expression: "form.start_date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("End Date")]), _vm._v(" "), _c('flat-pickr', {
    model: {
      value: (_vm.form.end_date),
      callback: function($$v) {
        _vm.form.end_date = $$v
      },
      expression: "form.end_date"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("\n                " + _vm._s(_vm.actionStatus) + "\n            ")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c7c13488", module.exports)
  }
}

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.open) ? _c('form', {
    staticClass: "row comment-form form-horizontal",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.postComment($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [(_vm.user.user_provider) ? _c('div', {
    staticClass: "col-xs-1"
  }, [_c('img', {
    staticClass: "user-image img-responsive",
    attrs: {
      "src": _vm.user.user_provider.avatar
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-xs-11"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.comment),
      expression: "form.comment"
    }],
    ref: "comment_input",
    staticClass: "comment-text form-control",
    attrs: {
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": (_vm.form.comment)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.cancel($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.comment = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "pull-right"
  }, [(_vm.parentComment) ? _c('span', {
    staticClass: "comment-post btn btn-danger",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.cancel($event)
      }
    }
  }, [_vm._v("Cancel")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "comment-post btn btn-primary"
  }, [(_vm.parentComment) ? [_vm._v("\n                Reply\n            ")] : [_vm._v("\n                Post\n            ")]], 2)])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e416ee3a", module.exports)
  }
}

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-12 comment-area "
  }, [_c('nav', {
    staticClass: "navbar row"
  }, [_c('ul', {
    staticClass: "nav navbar-nav"
  }, [_c('li', [_c('p', {
    staticClass: "navbar-text"
  }, [_c('span', {
    staticClass: "total_count"
  }, [_vm._v(_vm._s(_vm.blogComments.length))]), _vm._v(" Comments")])])]), _vm._v(" "), _c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [(!_vm.isAuthed) ? [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)] : _vm._e()], 2)]), _vm._v(" "), (_vm.isAuthed) ? [_c('comment-form', {
    attrs: {
      "placeholder": _vm.blogComments ? 'Join the discussion ...' : 'Start the discussion ...',
      "open": "true"
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "comments row"
  }, [_vm._l((_vm.blogComments), function(comment) {
    return _c('comment', {
      key: comment.id,
      attrs: {
        "comment": comment
      }
    })
  }), _vm._v(" "), _c('hr')], 2)], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('div', {
    staticClass: "navbar-text"
  }, [_vm._v("\n                        Login to comment :\n                    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "/oauth/google"
    }
  }, [_c('i', {
    staticClass: "fa fa-google"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "/oauth/github"
    }
  }, [_c('i', {
    staticClass: "fa fa-github"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "/oauth/twitter"
    }
  }, [_c('i', {
    staticClass: "fa fa-twitter"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e995889e", module.exports)
  }
}

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container blog-container"
  }, [_c('div', {
    staticClass: "col-md-10"
  }, [(_vm.form.filters.length) ? _c('div', {
    staticClass: "row"
  }, [_c('a', {
    staticClass: "label clear-filter",
    on: {
      "click": _vm.clearFilters
    }
  }, [_vm._v("Clear Filters")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.blogs), function(blog) {
    return _c('blog-card', {
      key: blog.id,
      attrs: {
        "blog": blog
      }
    })
  }), _vm._v(" "), (_vm.blogs.length === 0) ? _c('div', {
    staticClass: "row"
  }, [
    [_c('h2', [_vm._v("Oh no, there are no blogs ...")])], _vm._v(" "), (_vm.form.filters.length) ? [_c('h2', [_vm._v("Oh no, there are no blogs with that filter ...")])] : _vm._e()
  ], 2) : _vm._e(), _vm._v(" "), _c('pagination', {
    attrs: {
      "pagination": _vm.blogPagination,
      "commit": "blogs/setAll"
    }
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.search),
      expression: "form.search"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "Search for a blog ..."
    },
    domProps: {
      "value": (_vm.form.search)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.search = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('hr'), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12 tags-area"
  }, [_vm._l((_vm.tags), function(tag) {
    return [_c('div', {
      staticClass: "checkbox"
    }, [_c('label', {
      staticClass: "label pull-right",
      style: ('background-color:' + tag.color)
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.form.filters),
        expression: "form.filters"
      }],
      staticClass: "hidden",
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "value": tag.id,
        "checked": Array.isArray(_vm.form.filters) ? _vm._i(_vm.form.filters, tag.id) > -1 : (_vm.form.filters)
      },
      on: {
        "__c": function($event) {
          var $$a = _vm.form.filters,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = tag.id,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.form.filters = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.form.filters = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.form.filters = $$c
          }
        }
      }
    }), _vm._v(_vm._s(tag.name) + "\n                        ")])])]
  })], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fed8c9ae", module.exports)
  }
}

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
module.exports = __webpack_require__(150);


/***/ })
],[403]);