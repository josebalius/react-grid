'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require('react/addons');

var _React2 = _interopRequireDefault(_React);

var _tableStyle = require('../Styles');

var ReactGridBody = (function (_React$Component) {
    function ReactGridBody(props) {
        _classCallCheck(this, ReactGridBody);

        _get(Object.getPrototypeOf(ReactGridBody.prototype), 'constructor', this).call(this, props);
    }

    _inherits(ReactGridBody, _React$Component);

    _createClass(ReactGridBody, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var rowMap = function rowMap(row, key) {
                var cells = _this.props.children.map(function (cell, cellKey) {
                    return _React2['default'].addons.cloneWithProps(cell, { key: cellKey, row: row });
                });

                return _React2['default'].createElement(
                    'tr',
                    { key: key },
                    cells
                );
            };

            var rows = this.props.data.map(rowMap);

            if (this.props.data.length === 0) {
                rows = _React2['default'].createElement(
                    'tr',
                    null,
                    _React2['default'].createElement(
                        'td',
                        { colSpan: this.props.children.length, className: 'text-center' },
                        'No records found'
                    )
                );
            }

            return _React2['default'].createElement(
                'div',
                { className: 'ngReactGridBody', style: { marginTop: -1 } },
                _React2['default'].createElement(
                    'div',
                    { className: 'ngReactGridViewPort',
                        style: { overflowY: 'scroll', overflowX: 'hidden', maxHeight: 300 } },
                    _React2['default'].createElement(
                        'div',
                        { className: 'ngReactGridInnerViewPort', style: { fontSize: 12 } },
                        _React2['default'].createElement(
                            'table',
                            { className: 'table table-bordered', style: _tableStyle.tableStyle },
                            _React2['default'].createElement(
                                'tbody',
                                null,
                                rows
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ReactGridBody;
})(_React2['default'].Component);

module.exports = ReactGridBody;