import React from 'react';
import ReactGridHeader from './header/ReactGridHeader';
import ReactGridBody from './body/ReactGridBody';
import ReactGridFooter from './footer/ReactGridFooter';

class ReactGrid extends React.Component {
    render() {

        let data = this.props.data || [];
        let children = [];

        if(this.props.children && this.props.children.constructor === Array) {
            children = this.props.children;
        } else {
            children = [this.props.children];
        }

        return (
            <div {...this.props}>
                <ReactGridHeader>
                    {children}
                </ReactGridHeader>

                <ReactGridBody data={data}>
                    {children}
                </ReactGridBody>
            </div>
        )
    }
}

module.exports = ReactGrid;