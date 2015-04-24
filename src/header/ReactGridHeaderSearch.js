import React from 'react';

class ReactGridHeaderSearch extends React.Component {
    render() {
        return (
            <div className="col-md-6 pull-right" style={{padding: 10}}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    ref="searchField"
                    onChange={(e) => this.props.onSearchChange(e.target.value)} value={this.props.search} />
            </div>
        )
    }
}

module.exports = ReactGridHeaderSearch;