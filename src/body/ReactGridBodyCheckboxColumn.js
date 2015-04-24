import React from 'react';

class ReactGridBodyCheckboxColumn extends React.Component {
    static defaultProps = {
        width: '3%',
        row: {}
    };

    constructor(props) {
        super(props);
    }

    render() {
        let cell = '';
        let cellStyle = {
            width: this.props.width,
            textAlign: 'center'
        };

        let isChecked = this.props.checked(this.props.row) || false;

        if(this.props.header) {
            cell = (
                <th style={cellStyle}>
                    <input type="checkbox" style={{cursor: 'pointer'}} onChange={(e) => this.props.onChangeAll(e.target.checked)} />
                </th>
            )
        } else {
            cell = (
                <td style={cellStyle}>
                    <input type="checkbox" style={{cursor: 'pointer'}} checked={isChecked} onChange={(e) => this.props.onChange(this.props.row, e.target.checked)} />
                </td>
            )
        }


        return cell;
    }
}

module.exports = ReactGridBodyCheckboxColumn;