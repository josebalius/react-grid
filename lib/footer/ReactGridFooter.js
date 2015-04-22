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