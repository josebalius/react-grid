'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var _import = require('lodash');

var _import2 = _interopRequireWildcard(_import);

var ReactGridBodyColumn = (function (_React$Component) {
    function ReactGridBodyColumn() {
        _classCallCheck(this, ReactGridBodyColumn);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ReactGridBodyColumn, _React$Component);

    _createClass(ReactGridBodyColumn, [{
        key: 'render',
        value: function render() {

            var cell = '';

            var cellStyle = {
                width: this.props.width || '10%'
            };

            if (this.props.header) {

                if (!this.props.label) {

                    console.warn('A key is necessary for column: ' + this.props.key);
                    cell = _React2['default'].createElement('th', _extends({ style: cellStyle }, this.props));
                } else {

                    cell = _React2['default'].createElement(
                        'th',
                        _extends({ style: cellStyle }, this.props),
                        this.props.label
                    );
                }
            } else {

                var row = this.props.row || {};

                if (this.props.renderer) {

                    cell = this.props.renderer(this.props.field, row);

                    if (cell.props.style) {
                        _import2['default'].merge(cell.props.style, cellStyle);
                    } else {
                        cell = _React2['default'].addons.cloneWithProps(cell, { style: cellStyle });
                    }
                } else {
                    if (!this.props.field) {

                        console.warn('A \'field\' is necessary for column: ' + this.props.label);
                        cell = _React2['default'].createElement('td', _extends({ style: cellStyle }, this.props));
                    } else {

                        cell = _React2['default'].createElement(
                            'td',
                            _extends({ style: cellStyle }, this.props),
                            row[this.props.field]
                        );
                    }
                }
            }

            return cell;
        }
    }]);

    return ReactGridBodyColumn;
})(_React2['default'].Component);

module.exports = ReactGridBodyColumn;