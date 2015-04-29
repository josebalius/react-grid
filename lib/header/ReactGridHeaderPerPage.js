'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var ReactGridHeaderPerPage = (function (_React$Component) {
    function ReactGridHeaderPerPage() {
        _classCallCheck(this, ReactGridHeaderPerPage);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ReactGridHeaderPerPage, _React$Component);

    _createClass(ReactGridHeaderPerPage, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var options = this.props.pageSizes.map(function (pageSize, key) {
                return _React2['default'].createElement(
                    'option',
                    { value: pageSize, key: key },
                    pageSize
                );
            });

            return _React2['default'].createElement(
                'div',
                { className: 'ngReactGridShowPerPage', style: { padding: 10, lineHeight: '30px' } },
                'Show',
                _React2['default'].createElement(
                    'select',
                    { onChange: function (e) {
                            return _this.props.onPageSizeChange(e.target.value);
                        }, ref: 'showPerPage', value: this.props.pageSize, style: { marginLeft: 5, marginRight: 5 } },
                    options
                ),
                ' entries'
            );
        }
    }]);

    return ReactGridHeaderPerPage;
})(_React2['default'].Component);

module.exports = ReactGridHeaderPerPage;