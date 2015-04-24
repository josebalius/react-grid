import React from 'react/addons';
import _ from 'lodash';

class ReactGridBodyColumn extends React.Component {
    static defaultProps = {
        width: '10%',
        row: {}
    };

    constructor(props) {
        super(props);

        this.state = {
            cellStyle: {
                width: props.width
            }
        };
    }

    render() {

        let cell = '';

        if(this.props.header) {

            if(!this.props.label) {

                console.warn(`A key is necessary for column: ${this.props.key}`);
                cell = <th style={this.state.cellStyle} {...this.props}></th>;

            } else {

                cell = (
                    <th style={this.state.cellStyle} {...this.props}>{this.props.label}</th>
                )

            }

        } else {

            if(this.props.renderer) {

                cell = this.props.renderer(this.props.field, this.props.row);

                if(cell.props.style) {
                    _.merge(this.state.cellStyle, cell.props.style);
                } else {
                    cell = React.addons.cloneWithProps(cell, {style: this.state.cellStyle});
                }

            } else {
                if(!this.props.field) {

                    console.warn(`A 'field' is necessary for column: ${this.props.label}`);
                    cell = <td style={this.state.cellStyle} {...this.props}></td>;

                } else {

                    cell = (
                        <td style={this.state.cellStyle} {...this.props}>{this.props.row[this.props.field]}</td>
                    )

                }
            }

        }

        return cell;
    }
}

module.exports = ReactGridBodyColumn;