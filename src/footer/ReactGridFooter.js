import React from 'react';
import ReactGridFooterStatus from './ReactGridFooterStatus';
import ReactGridFooterPagination from './ReactGridFooterPagination';

class ReactGridFooter extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <ReactGridFooterStatus {...this.props} />
                </div>
                <div className="col-md-6">
                    <ReactGridFooterPagination {...this.props} />
                </div>
            </div>
        )
    }
}

module.exports = ReactGridFooter;