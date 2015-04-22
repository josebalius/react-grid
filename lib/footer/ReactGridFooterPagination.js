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