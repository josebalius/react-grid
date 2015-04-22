import React from 'react/addons';
import _ from 'lodash';

class ReactGridBodyColumn extends React.Component {
    render() {

        let cell = '';

        let cellStyle = {
            width: this.props.width || '10%'
        };

        if(this.props.header) {

            if(!this.props.label) {

                console.warn(`A key is necessary for column: ${this.props.key}`);
                cell = <th style={cellStyle} {...this.props}></th>;

            } else {

                cell = (
                    <th style={cellStyle} {...this.props}>{this.props.label}</th>
                )

            }

        } else {

            let row = this.props.row || {};

            if(this.props.renderer) {

                cell = this.props.renderer(this.props.field, row);

                if(cell.props.style) {
                    _.merge(cell.props.style, cellStyle);
                } else {
                    cell = React.addons.cloneWithProps(cell, {style: cellStyle});
                }

            } else {
                if(!this.props.field) {

                    console.warn(`A 'field' is necessary for column: ${this.props.label}`);
                    cell = <td style={cellStyle} {...this.props}></td>;

                } else {

                    cell = (
                        <td style={cellStyle} {...this.props}>{row[this.props.field]}</td>
                    )

                }
            }

        }

        return cell;
    }
}

module.exports = ReactGridBodyColumn;