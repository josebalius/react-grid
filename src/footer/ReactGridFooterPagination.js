import React from 'react';

class ReactGridFooterPagination extends React.Component {

    goToPage(page) {

    }

    goToLastPage() {

    }

    goToFirstPage() {

    }

    goToNextPage() {

    }

    goToPrevPage() {

    }

    render() {
        return (
            <div className="ngReactGridPagination">
                <ul>
                    <li><a href="javascript:" onClick={() => this.goToPrevPage()}>Prev</a></li>
                    <li><a href="javascript:" onClick={() => this.goToFirstPage()}>First</a></li>
                    <li><a href="javascript:" onClick={() => this.goToLastPage()}>Last</a></li>
                    <li><a href="javascript:" onClick={() => this.goToNextPage()}>Next</a></li>
                </ul>
            </div>
        )
    }
}

module.exports = ReactGridFooterPagination;