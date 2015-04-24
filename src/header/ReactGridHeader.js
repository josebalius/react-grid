import React from 'react/addons';
import { tableStyle } from '../Styles';
import _ from 'lodash';
import ReactGridHeaderPerPage from './ReactGridHeaderPerPage';
import ReactGridHeaderSearch from './ReactGridHeaderSearch';

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

        let style = tableStyle;

        if(this.state.scrollBarWidth > 0) {
            let clone = _.clone(tableStyle);
            clone.width = `calc(100% - ${this.state.scrollBarWidth}px`;
            style = clone;
        }

        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <ReactGridHeaderPerPage {...this.props} />
                        </div>
                        <div className="col-md-6">
                            <ReactGridHeaderSearch search={this.props.search} onSearchChange={this.props.onSearchChange} />
                        </div>
                    </div>

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