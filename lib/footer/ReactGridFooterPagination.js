'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var ReactGridFooterPagination = (function (_React$Component) {
    function ReactGridFooterPagination() {
        _classCallCheck(this, ReactGridFooterPagination);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ReactGridFooterPagination, _React$Component);

    _createClass(ReactGridFooterPagination, [{
        key: 'goToPage',
        value: function goToPage(page) {
            if (page > 0 && page <= this.props.totalPages && page !== this.props.currentPage) {
                this.props.setCurrentPage(page);
            }
        }
    }, {
        key: 'goToLastPage',
        value: function goToLastPage() {
            if (this.props.currentPage !== this.props.totalPages) {
                this.props.setCurrentPage(this.props.totalPages);
            }
        }
    }, {
        key: 'goToFirstPage',
        value: function goToFirstPage() {
            if (this.props.currentPage !== 1) {
                this.props.setCurrentPage(1);
            }
        }
    }, {
        key: 'goToNextPage',
        value: function goToNextPage() {
            if (this.props.currentPage !== this.props.totalPages) {
                this.props.setCurrentPage(this.props.currentPage + 1);
            }
        }
    }, {
        key: 'goToPrevPage',
        value: function goToPrevPage() {
            if (this.props.currentPage !== 1) {
                this.props.setCurrentPage(this.props.currentPage - 1);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var _props = this.props;
            var totalPages = _props.totalPages;
            var currentPage = _props.currentPage;

            var pager = 2;
            var pagerDiff = currentPage - pager;
            var pagerSum = currentPage + pager;
            var indexStart = pagerDiff <= 0 ? 1 : pagerDiff;
            var indexEnd = pagerSum >= totalPages ? totalPages : pagerSum;
            var pages = [];

            for (var i = indexStart; i <= indexEnd; i++) {
                pages.push(i);
            }

            pages = pages.map(function (page, key) {
                return _React2['default'].createElement(
                    'li',
                    { key: key, className: page === currentPage ? 'active' : '' },
                    _React2['default'].createElement(
                        'a',
                        { href: 'javascript:', onClick: function () {
                                return _this.goToPage(page);
                            } },
                        page
                    )
                );
            });

            var prevProps = currentPage === 1 ? { className: 'active' } : {};
            var nextProps = currentPage === totalPages ? { className: 'active' } : {};

            return _React2['default'].createElement(
                'div',
                { className: 'ngReactGridPagination', style: { fontSize: 12, display: totalPages > 1 ? '' : 'none' } },
                _React2['default'].createElement(
                    'ul',
                    { className: 'pagination pull-right', style: { marginTop: 10, marginRight: 10 } },
                    _React2['default'].createElement(
                        'li',
                        prevProps,
                        _React2['default'].createElement(
                            'a',
                            { href: 'javascript:', onClick: this.goToPrevPage.bind(this) },
                            'Prev'
                        )
                    ),
                    _React2['default'].createElement(
                        'li',
                        _extends({}, prevProps, { style: { display: totalPages > 2 ? '' : 'none' } }),
                        _React2['default'].createElement(
                            'a',
                            { href: 'javascript:', onClick: this.goToFirstPage.bind(this) },
                            'First'
                        )
                    ),
                    pages,
                    _React2['default'].createElement(
                        'li',
                        _extends({}, nextProps, { style: { display: totalPages > 2 ? '' : 'none' } }),
                        _React2['default'].createElement(
                            'a',
                            { href: 'javascript:', onClick: this.goToLastPage.bind(this) },
                            'Last'
                        )
                    ),
                    _React2['default'].createElement(
                        'li',
                        nextProps,
                        _React2['default'].createElement(
                            'a',
                            { href: 'javascript:', onClick: this.goToNextPage.bind(this) },
                            'Next'
                        )
                    )
                )
            );
        }
    }]);

    return ReactGridFooterPagination;
})(_React2['default'].Component);

module.exports = ReactGridFooterPagination;