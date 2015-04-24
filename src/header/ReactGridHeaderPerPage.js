import React from 'react';

class ReactGridHeaderPerPage extends React.Component {

    render() {

        let options = this.props.pageSizes.map((pageSize, key) => {
            return (<option value={pageSize} key={key}>{pageSize}</option>)
        });

        return (
            <div className="ngReactGridShowPerPage" style={{padding: 10, lineHeight: '30px'}}>
                Show
                 <select onChange={(e) => this.props.onPageSizeChange(e.target.value)} ref="showPerPage" value={this.props.pageSize} style={{marginLeft: 5, marginRight: 5}}>
                    {options}
                </select> entries
            </div>
        )
    }
}

module.exports = ReactGridHeaderPerPage;