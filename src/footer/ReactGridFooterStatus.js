import React from 'react';

class ReactGridFooterStatus extends React.Component {
    render() {
        return (
            <div className="ngReactGridStatus">
                <div>Page <strong>{this.props.grid.currentPage}</strong> of <strong>{this.props.grid.totalPages}</strong> - Showing <strong>{this.props.grid.react.showingRecords}</strong> of <strong>{this.props.grid.totalCount}</strong> records</div>
            </div>
        )
    }
}

module.exports = ReactGridFooterStatus;