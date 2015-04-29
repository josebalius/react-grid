"use strict";

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require("react");

var _React2 = _interopRequireDefault(_React);

var ReactGridHeaderSearch = (function (_React$Component) {
    function ReactGridHeaderSearch() {
        _classCallCheck(this, ReactGridHeaderSearch);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ReactGridHeaderSearch, _React$Component);

    _createClass(ReactGridHeaderSearch, [{
        key: "render",
        value: function render() {
            var _this = this;

            return _React2["default"].createElement(
                "div",
                { className: "col-md-6 pull-right", style: { padding: 10 } },
                _React2["default"].createElement("input", {
                    type: "text",
                    className: "form-control",
                    placeholder: "Search...",
                    ref: "searchField",
                    onChange: function (e) {
                        return _this.props.onSearchChange(e.target.value);
                    }, value: this.props.search })
            );
        }
    }]);

    return ReactGridHeaderSearch;
})(_React2["default"].Component);

module.exports = ReactGridHeaderSearch;