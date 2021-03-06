'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var ReactGridBodyCheckboxColumn = (function (_React$Component) {
    function ReactGridBodyCheckboxColumn(props) {
        _classCallCheck(this, ReactGridBodyCheckboxColumn);

        _get(Object.getPrototypeOf(ReactGridBodyCheckboxColumn.prototype), 'constructor', this).call(this, props);
    }

    _inherits(ReactGridBodyCheckboxColumn, _React$Component);

    _createClass(ReactGridBodyCheckboxColumn, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var cell = '';
            var cellStyle = {
                width: this.props.width,
                textAlign: 'center'
            };

            var isChecked = this.props.checked(this.props.row) || false;

            if (this.props.header) {
                cell = _React2['default'].createElement(
                    'th',
                    { style: cellStyle },
                    _React2['default'].createElement('input', { type: 'checkbox', style: { cursor: 'pointer' }, onChange: function (e) {
                            return _this.props.onChangeAll(e.target.checked);
                        } })
                );
            } else {
                cell = _React2['default'].createElement(
                    'td',
                    { style: cellStyle },
                    _React2['default'].createElement('input', { type: 'checkbox', style: { cursor: 'pointer' }, checked: isChecked, onChange: function (e) {
                            return _this.props.onChange(_this.props.row, e.target.checked);
                        } })
                );
            }

            return cell;
        }
    }], [{
        key: 'defaultProps',
        value: {
            width: '3%',
            row: {}
        },
        enumerable: true
    }]);

    return ReactGridBodyCheckboxColumn;
})(_React2['default'].Component);

module.exports = ReactGridBodyCheckboxColumn;