import React from 'react';
import ReactGridFooterStatus from './ReactGridFooterStatus';
import ReactGridFooterPagination from './ReactGridFooterPagination';

class ReactGridFooter extends React.Component {
    render() {
        return (
            <div className="ngReactGridFooter">
                <ReactGridFooterStatus />
                <ReactGridFooterPagination />
            </div>
        )
    }
}

module.exports = ReactGridFooter;