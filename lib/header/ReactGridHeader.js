'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var _tableStyle = require('../Styles');

var _Immutable = require('immutable');

var _Immutable2 = _interopRequireWildcard(_Immutable);

var ReactGridHeader = (function (_React$Component) {
    function ReactGridHeader(props) {
        _classCallCheck(this, ReactGridHeader);

        _get(Object.getPrototypeOf(ReactGridHeader.prototype), 'constructor', this).call(this, props);

        this.state = {
            scrollBarWidth: 0
        };
    }

    _inherits(ReactGridHeader, _React$Component);

    _createClass(ReactGridHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';

            /**
             * Needed for WinJS apps
             * @type {string}
             */
            outer.style.msOverflowStyle = 'scrollbar';

            document.body.appendChild(outer);

            var widthNoScroll = outer.offsetWidth;

            /*
             * Force scroll bars
             */
            outer.style.overflow = 'scroll';

            /*
             * Add innerDiv
             */
            var inner = document.createElement('div');
            inner.style.width = '100%';
            outer.appendChild(inner);

            var widthWithScroll = inner.offsetWidth;

            /**
             * Remove divs
             */
            outer.parentNode.removeChild(outer);

            var scrollBarWidth = widthNoScroll - widthWithScroll;

            this.setState({ scrollBarWidth: scrollBarWidth });
        }
    }, {
        key: 'render',
        value: function render() {

            var columns = this.props.children.map(function (column, key) {
                return _React2['default'].addons.cloneWithProps(column, { key: key, header: true });
            });

            var style = this.state.scrollBarWidth > 0 ? _Immutable2['default'].fromJS(_tableStyle.tableStyle).set('width', 'calc(100% - ' + this.state.scrollBarWidth + 'px').toObject() : _tableStyle.tableStyle;
            return _React2['default'].createElement(
                'div',
                null,
                _React2['default'].createElement('div', { style: { overflow: 'auto' } }),
                _React2['default'].createElement(
                    'div',
                    { style: { background: '#F5F5F6' } },
                    _React2['default'].createElement(
                        'div',
                        null,
                        _React2['default'].createElement(
                            'div',
                            { style: { fontSize: 12 } },
                            _React2['default'].createElement(
                                'table',
                                { className: 'table table-bordered', style: style },
                                _React2['default'].createElement(
                                    'thead',
                                    null,
                                    _React2['default'].createElement(
                                        'tr',
                                        null,
                                        columns
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ReactGridHeader;
})(_React2['default'].Component);

module.exports = ReactGridHeader;