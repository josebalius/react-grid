(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

//import ReactGridHeader from './header/ReactGridHeader';
//import ReactGridBody from './body/ReactGridBody';

var _ReactGridFooter = require('./footer/ReactGridFooter');

var _ReactGridFooter2 = _interopRequireWildcard(_ReactGridFooter);

var ReactGrid = (function (_React$Component) {
    function ReactGrid() {
        _classCallCheck(this, ReactGrid);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ReactGrid, _React$Component);

    _createClass(ReactGrid, [{
        key: 'render',
        value: function render() {
            /*
             <ReactGridHeader />
             <ReactGridBody />
             <ReactGridFooter />
             */
            return _React2['default'].createElement(
                'div',
                null,
                'here'
            );
        }
    }]);

    return ReactGrid;
})(_React2['default'].Component);

module.exports = ReactGrid;
},{"./footer/ReactGridFooter":2,"react":5}],2:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _ReactGridFooterStatus = require('./ReactGridFooterStatus');

var _ReactGridFooterStatus2 = _interopRequireWildcard(_ReactGridFooterStatus);

var _ReactGridFooterPagination = require('./ReactGridFooterPagination');

var _ReactGridFooterPagination2 = _interopRequireWildcard(_ReactGridFooterPagination);

var ReactGridFooter = (function (_React$Component) {
    function ReactGridFooter() {
        _classCallCheck(this, ReactGridFooter);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ReactGridFooter, _React$Component);

    _createClass(ReactGridFooter, [{
        key: 'render',
        value: function render() {
            return _React2['default'].createElement(
                'div',
                { className: 'ngReactGridFooter' },
                _React2['default'].createElement(_ReactGridFooterStatus2['default'], null),
                _React2['default'].createElement(_ReactGridFooterPagination2['default'], null)
            );
        }
    }]);

    return ReactGridFooter;
})(_React2['default'].Component);

module.exports = ReactGridFooter;
},{"./ReactGridFooterPagination":3,"./ReactGridFooterStatus":4,"react":5}],3:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var ReactGridFooterPagination = (function (_React$Component) {
    function ReactGridFooterPagination() {
        _classCallCheck(this, ReactGridFooterPagination);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ReactGridFooterPagination, _React$Component);

    _createClass(ReactGridFooterPagination, [{
        key: "goToPage",
        value: function goToPage(page) {}
    }, {
        key: "goToLastPage",
        value: function goToLastPage() {}
    }, {
        key: "goToFirstPage",
        value: function goToFirstPage() {}
    }, {
        key: "goToNextPage",
        value: function goToNextPage() {}
    }, {
        key: "goToPrevPage",
        value: function goToPrevPage() {}
    }, {
        key: "render",
        value: function render() {
            var _this = this;

            return _React2["default"].createElement(
                "div",
                { className: "ngReactGridPagination" },
                _React2["default"].createElement(
                    "ul",
                    null,
                    _React2["default"].createElement(
                        "li",
                        null,
                        _React2["default"].createElement(
                            "a",
                            { href: "javascript:", onClick: function () {
                                    return _this.goToPrevPage();
                                } },
                            "Prev"
                        )
                    ),
                    _React2["default"].createElement(
                        "li",
                        null,
                        _React2["default"].createElement(
                            "a",
                            { href: "javascript:", onClick: function () {
                                    return _this.goToFirstPage();
                                } },
                            "First"
                        )
                    ),
                    _React2["default"].createElement(
                        "li",
                        null,
                        _React2["default"].createElement(
                            "a",
                            { href: "javascript:", onClick: function () {
                                    return _this.goToLastPage();
                                } },
                            "Last"
                        )
                    ),
                    _React2["default"].createElement(
                        "li",
                        null,
                        _React2["default"].createElement(
                            "a",
                            { href: "javascript:", onClick: function () {
                                    return _this.goToNextPage();
                                } },
                            "Next"
                        )
                    )
                )
            );
        }
    }]);

    return ReactGridFooterPagination;
})(_React2["default"].Component);

module.exports = ReactGridFooterPagination;
},{"react":5}],4:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var ReactGridFooterStatus = (function (_React$Component) {
    function ReactGridFooterStatus() {
        _classCallCheck(this, ReactGridFooterStatus);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ReactGridFooterStatus, _React$Component);

    _createClass(ReactGridFooterStatus, [{
        key: "render",
        value: function render() {
            return _React2["default"].createElement(
                "div",
                { className: "ngReactGridStatus" },
                _React2["default"].createElement(
                    "div",
                    null,
                    "Page ",
                    _React2["default"].createElement(
                        "strong",
                        null,
                        this.props.grid.currentPage
                    ),
                    " of ",
                    _React2["default"].createElement(
                        "strong",
                        null,
                        this.props.grid.totalPages
                    ),
                    " - Showing ",
                    _React2["default"].createElement(
                        "strong",
                        null,
                        this.props.grid.react.showingRecords
                    ),
                    " of ",
                    _React2["default"].createElement(
                        "strong",
                        null,
                        this.props.grid.totalCount
                    ),
                    " records"
                )
            );
        }
    }]);

    return ReactGridFooterStatus;
})(_React2["default"].Component);

module.exports = ReactGridFooterStatus;
},{"react":5}],5:[function(require,module,exports){

},{}]},{},[1])