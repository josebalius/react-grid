import React from 'react';

class ReactGridFooterPagination extends React.Component {

    goToPage(page) {
        if (page > 0 && page <= this.props.totalPages && page !== this.props.currentPage) {
            this.props.setCurrentPage(page);
        }
    }

    goToLastPage() {
        if (this.props.currentPage !== this.props.totalPages) {
            this.props.setCurrentPage(this.props.totalPages);
        }
    }

    goToFirstPage() {
        if (this.props.currentPage !== 1) {
            this.props.setCurrentPage(1);
        }
    }

    goToNextPage() {
        if (this.props.currentPage !== this.props.totalPages) {
            this.props.setCurrentPage(this.props.currentPage + 1);
        }
    }

    goToPrevPage() {
        if (this.props.currentPage !== 1) {
            this.props.setCurrentPage(this.props.currentPage - 1);
        }
    }

    render() {

        let {totalPages, currentPage} = this.props;

        let pager = 2;
        let pagerDiff = (currentPage - pager);
        let pagerSum = (currentPage + pager);
        let indexStart = pagerDiff <= 0 ? 1 : pagerDiff;
        let indexEnd = pagerSum >= totalPages ? totalPages : pagerSum;
        let pages = [];

        for (let i = indexStart; i <= indexEnd; i++) {
            pages.push(i);
        }

        pages = pages.map((page, key) => {
            return (
                <li key={key} className={(page === currentPage) ? 'active':''}>
                    <a href="javascript:" onClick={() => this.goToPage(page)}>{page}</a>
                </li>
            )
        });

        let prevProps = (currentPage === 1) ? {className: 'active'} : {};
        let nextProps = (currentPage === totalPages) ? {className: 'active'} : {};

        return (
            <div className="ngReactGridPagination" style={{fontSize: 12, display: (totalPages > 1) ? '':'none'}}>
                <ul className="pagination pull-right" style={{marginTop: 10, marginRight: 10}}>
                    <li {...prevProps}>
                        <a href="javascript:" onClick={this.goToPrevPage.bind(this)}>Prev</a>
                    </li>

                    <li {...prevProps} style={{display: (totalPages > 2) ? '':'none'}}>
                        <a href="javascript:" onClick={this.goToFirstPage.bind(this)}>First</a>
                    </li>

                    {pages}

                    <li {...nextProps} style={{display: (totalPages > 2) ? '':'none'}}>
                        <a href="javascript:" onClick={this.goToLastPage.bind(this)}>Last</a>
                    </li>

                    <li {...nextProps}>
                        <a href="javascript:" onClick={this.goToNextPage.bind(this)}>Next</a>
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = ReactGridFooterPagination;