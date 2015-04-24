import React from 'react/addons';
import { tableStyle } from '../Styles';

class ReactGridBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let rowMap = (row, key) => {
            let cells = this.props.children.map((cell, cellKey) => {
                return React.addons.cloneWithProps(cell, {key: cellKey, row});
            });

            return (
                <tr key={key}>
                    {cells}
                </tr>
            )
        };

        let rows = this.props.data.map(rowMap);

        if (this.props.data.length === 0) {
            rows = (
                <tr>
                    <td colSpan={this.props.children.length} className="text-center">No records found</td>
                </tr>
            )
        }

        return (
            <div className="ngReactGridBody" style={{marginTop: -1}}>
                <div className="ngReactGridViewPort"
                     style={{overflowY: 'scroll', overflowX: 'hidden', maxHeight: 300}}>
                    <div className="ngReactGridInnerViewPort" style={{fontSize: 12}}>

                        <table className="table table-bordered" style={tableStyle}>
                            <tbody>
                            {rows}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

module.exports = ReactGridBody;