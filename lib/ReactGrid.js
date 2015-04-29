'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _ReactGridHeader = require('./header/ReactGridHeader');

var _ReactGridHeader2 = _interopRequireDefault(_ReactGridHeader);

var _ReactGridBody = require('./body/ReactGridBody');

var _ReactGridBody2 = _interopRequireDefault(_ReactGridBody);

var _ReactGridFooter = require('./footer/ReactGridFooter');

var _ReactGridFooter2 = _interopRequireDefault(_ReactGridFooter);

var _import = require('lodash');

var _import2 = _interopRequireDefault(_import);

var ReactGrid = (function (_React$Component) {
    function ReactGrid(props) {
        _classCallCheck(this, ReactGrid);

        _get(Object.getPrototypeOf(ReactGrid.prototype), 'constructor', this).call(this, props);

        this.state = {
            pageSize: 25,
            search: '',
            currentPage: 1,
            data: props.data.slice(0),
            originalData: props.data
        };
    }

    _inherits(ReactGrid, _React$Component);

    _createClass(ReactGrid, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            var _ref = arguments[0] === undefined ? nextProps : arguments[0];

            var data = _ref.data;

            this.setState({ data: data.slice(0), originalData: data });
        }
    }, {
        key: 'setPageSize',
        value: function setPageSize(pageSize) {
            this.setState({ pageSize: pageSize });
        }
    }, {
        key: 'setSearch',
        value: function setSearch(search) {
            var _this = this;

            var originalData = this.state.originalData.slice(0);

            var filteredData = originalData.filter(function (row) {
                return _this.deepSearch(row, search);
            });

            this.setState({ search: search, data: filteredData, currentPage: 1 });
        }
    }, {
        key: 'deepSearch',
        value: function deepSearch(target, search) {
            var _this2 = this;

            var found = false;

            if (target) {
                _import2['default'].forEach(target, function (value, key) {

                    if (_import2['default'].isObject(value)) {
                        found = _this2.deepSearch(value, search);

                        if (found === true) {
                            return false;
                        }
                    } else {
                        if (_import2['default'].includes(String(value).toLowerCase(), String(search).toLowerCase())) {
                            found = true;
                            return false;
                        }
                    }
                });
            }

            return found;
        }
    }, {
        key: 'setCurrentPage',
        value: function setCurrentPage(currentPage) {
            this.setState({ currentPage: currentPage });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var children = [];

            if (this.props.children && _import2['default'].isArray(this.props.children)) {
                children = this.props.children;
            } else {
                children = [this.props.children];
            }

            var start = (this.state.currentPage - 1) * this.state.pageSize;
            var end = this.state.pageSize * this.state.currentPage;

            var data = this.state.data.slice(start, end);

            var totalCount = this.state.data.length;
            var totalPages = Math.ceil(totalCount / this.state.pageSize);

            return _React2['default'].createElement(
                'div',
                { style: this.props.style },
                _React2['default'].createElement(
                    _ReactGridHeader2['default'],
                    {
                        pageSizes: this.props.pageSizes,
                        pageSize: this.state.pageSize,
                        onPageSizeChange: function (pageSize) {
                            return _this3.setPageSize(parseInt(pageSize));
                        },
                        search: this.state.search,
                        onSearchChange: function (search) {
                            return _this3.setSearch(search);
                        } },
                    children
                ),
                _React2['default'].createElement(
                    _ReactGridBody2['default'],
                    { data: data },
                    children
                ),
                _React2['default'].createElement(_ReactGridFooter2['default'], {
                    pageSize: this.state.pageSize,
                    visibleRecords: data.length,
                    totalRecords: totalCount,
                    currentPage: this.state.currentPage,
                    totalPages: totalPages,
                    setCurrentPage: function (currentPage) {
                        return _this3.setCurrentPage(parseInt(currentPage));
                    } })
            );
        }
    }], [{
        key: 'defaultProps',
        value: {
            pageSizes: [25, 50, 100, 500],
            data: []
        },
        enumerable: true
    }]);

    return ReactGrid;
})(_React2['default'].Component);

module.exports = ReactGrid;