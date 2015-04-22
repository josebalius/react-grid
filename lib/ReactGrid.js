'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _ReactGridHeader = require('./header/ReactGridHeader');

var _ReactGridHeader2 = _interopRequireWildcard(_ReactGridHeader);

var _ReactGridBody = require('./body/ReactGridBody');

var _ReactGridBody2 = _interopRequireWildcard(_ReactGridBody);

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

            var data = this.props.data || [];
            var children = [];

            if (this.props.children && this.props.children.constructor === Array) {
                children = this.props.children;
            } else {
                children = [this.props.children];
            }

            return _React2['default'].createElement(
                'div',
                this.props,
                _React2['default'].createElement(
                    _ReactGridHeader2['default'],
                    null,
                    children
                ),
                _React2['default'].createElement(
                    _ReactGridBody2['default'],
                    { data: data },
                    children
                )
            );
        }
    }]);

    return ReactGrid;
})(_React2['default'].Component);

module.exports = ReactGrid;