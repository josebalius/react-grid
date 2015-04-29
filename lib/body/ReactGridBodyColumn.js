'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _React = require('react/addons');

var _React2 = _interopRequireDefault(_React);

var _import = require('lodash');

var _import2 = _interopRequireDefault(_import);

var ReactGridBodyColumn = (function (_React$Component) {
    function ReactGridBodyColumn(props) {
        _classCallCheck(this, ReactGridBodyColumn);

        _get(Object.getPrototypeOf(ReactGridBodyColumn.prototype), 'constructor', this).call(this, props);

        this.state = {
            cellStyle: {
                width: props.width
            }
        };
    }

    _inherits(ReactGridBodyColumn, _React$Component);

    _createClass(ReactGridBodyColumn, [{
        key: 'render',
        value: function render() {

            var cell = '';

            if (this.props.header) {

                if (!this.props.label) {

                    console.warn('A key is necessary for column: ' + this.props.key);
                    cell = _React2['default'].createElement('th', _extends({ style: this.state.cellStyle }, this.props));
                } else {

                    cell = _React2['default'].createElement(
                        'th',
                        _extends({ style: this.state.cellStyle }, this.props),
                        this.props.label
                    );
                }
            } else {

                if (this.props.renderer) {

                    cell = this.props.renderer(this.props.field, this.props.row);

                    if (cell.props.style) {
                        _import2['default'].merge(this.state.cellStyle, cell.props.style);
                    } else {
                        cell = _React2['default'].addons.cloneWithProps(cell, { style: this.state.cellStyle });
                    }
                } else {
                    if (!this.props.field) {

                        console.warn('A \'field\' is necessary for column: ' + this.props.label);
                        cell = _React2['default'].createElement('td', _extends({ style: this.state.cellStyle }, this.props));
                    } else {

                        cell = _React2['default'].createElement(
                            'td',
                            _extends({ style: this.state.cellStyle }, this.props),
                            this.props.row[this.props.field]
                        );
                    }
                }
            }

            return cell;
        }
    }], [{
        key: 'defaultProps',
        value: {
            width: '10%',
            row: {}
        },
        enumerable: true
    }]);

    return ReactGridBodyColumn;
})(_React2['default'].Component);

module.exports = ReactGridBodyColumn;