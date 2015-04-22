import React from 'react/addons';
import { tableStyle } from '../Styles';
import Immutable from 'immutable';

class ReactGridHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollBarWidth: 0
        };
    }

    componentDidMount() {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";

        /**
         * Needed for WinJS apps
         * @type {string}
         */
        outer.style.msOverflowStyle = "scrollbar";

        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;

        /*
         * Force scroll bars
         */
        outer.style.overflow = "scroll";

        /*
         * Add innerDiv
         */
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        /**
         * Remove divs
         */
        outer.parentNode.removeChild(outer);

        let scrollBarWidth = widthNoScroll - widthWithScroll;

        this.setState({scrollBarWidth});
    }

    render() {

        let columns = this.props.children.map((column, key) => {
            return React.addons.cloneWithProps(column, {key, header: true});
        });

        let style = (this.state.scrollBarWidth > 0) ? Immutable.fromJS(tableStyle).set('width', `calc(100% - ${this.state.scrollBarWidth}px`).toObject() : tableStyle;
        return (
            <div>
                <div style={{overflow: 'auto'}}>

                </div>
                <div style={{background: '#F5F5F6'}}>
                    <div>
                        <div style={{fontSize: 12}}>
                            <table className="table table-bordered" style={style}>
                                <thead>
                                <tr>
                                    {columns}
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = ReactGridHeader;