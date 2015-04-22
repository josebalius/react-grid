import React from 'react';

class ReactGridFooterStatus extends React.Component {
    render() {
        return (
            <div className="ngReactGridStatus">
                <div>Page <strong>1</strong> of <strong>10</strong> - Showing <strong>25</strong> of <strong>10</strong> records</div>
            </div>
        )
    }
}

module.exports = ReactGridFooterStatus;