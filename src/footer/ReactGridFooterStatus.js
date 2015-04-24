import React from 'react';

class ReactGridFooterStatus extends React.Component {
    render() {
        return (
            <div className="ngReactGridStatus" style={{fontSize: 11, padding: 10, display: (this.props.totalPages > 0) ? '':'none'}}>
                <div>Page <strong>{this.props.currentPage}</strong> of <strong>{this.props.totalPages}</strong> - Showing <strong>{this.props.visibleRecords}</strong> of <strong>{this.props.totalRecords}</strong> records</div>
            </div>
        )
    }
}

module.exports = ReactGridFooterStatus;