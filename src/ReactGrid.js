import React from 'react';
import ReactGridHeader from './header/ReactGridHeader';
import ReactGridBody from './body/ReactGridBody';
import ReactGridFooter from './footer/ReactGridFooter';
import _ from 'lodash';

class ReactGrid extends React.Component {
    static defaultProps = {
        pageSizes: [25, 50, 100, 500],
        data: []
    };

    constructor(props) {
        super(props);

        this.state = {
            pageSize: 25,
            search : '',
            currentPage: 1,
            data: props.data.slice(0),
            originalData: props.data
        };
    }

    componentWillReceiveProps({data} = nextProps) {
        this.setState({data: data.slice(0), originalData: data});
    }

    setPageSize(pageSize) {
        this.setState({pageSize});
    }

    setSearch(search) {
        let originalData = this.state.originalData.slice(0);

        let filteredData = originalData.filter((row) => {
             return this.deepSearch(row, search);
        });

        this.setState({search, data: filteredData, currentPage: 1});
    }

    deepSearch(target, search) {
        let found = false;

        if(target) {
            _.forEach(target, (value, key) => {

                if(_.isObject(value)) {
                    found = this.deepSearch(value, search);

                    if(found === true) {
                        return false;
                    }
                } else {
                    if(_.includes(String(value).toLowerCase(), String(search).toLowerCase())) {
                        found = true;
                        return false;
                    }
                }

            });
        }

        return found;
    }

    setCurrentPage(currentPage) {
        this.setState({currentPage});
    }

    render() {

        let children = [];

        if(this.props.children && _.isArray(this.props.children)) {
            children = this.props.children;
        } else {
            children = [this.props.children];
        }

        let start = (this.state.currentPage - 1) * this.state.pageSize;
        let end = (this.state.pageSize * this.state.currentPage);

        let data = this.state.data.slice(start, end);

        let totalCount = this.state.data.length;
        let totalPages = Math.ceil(totalCount / this.state.pageSize);

        return (
            <div style={this.props.style}>
                <ReactGridHeader
                    pageSizes={this.props.pageSizes}
                    pageSize={this.state.pageSize}
                    onPageSizeChange={pageSize => this.setPageSize(parseInt(pageSize))}
                    search={this.state.search}
                    onSearchChange={search => this.setSearch(search)}>
                    {children}
                </ReactGridHeader>

                <ReactGridBody data={data}>
                    {children}
                </ReactGridBody>

                <ReactGridFooter
                    pageSize={this.state.pageSize}
                    visibleRecords={data.length}
                    totalRecords={totalCount}
                    currentPage={this.state.currentPage}
                    totalPages={totalPages}
                    setCurrentPage={currentPage => this.setCurrentPage(parseInt(currentPage))} />
            </div>
        )
    }
}

module.exports = ReactGrid;