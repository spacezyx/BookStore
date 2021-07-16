import React from 'react';
import {getUserAuths} from "../services/userService";
import { Table, Input } from "antd";
import {getBooks} from "../services/bookService";
const { Column } = Table;

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

export default class SalesSortTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {books:[]};

    }
    componentDidMount() {
        const callback =  (data) => {
            this.setState({books:data});
        };

        getBooks({"search":null}, callback);
        console.log('this.state.books');
    }
    render() {
        const columns = [
            {
                title: "书名",
                dataIndex: "title",
                key: "title",
                width:270,
                height:80,
            },
            {
                title: "作者",
                dataIndex: "author",
                key: "author",
                width:270,
                height:80,
            },
            {
                title: "销量",
                dataIndex: "sales",
                key: "sales",
                width:270,
                height:80,
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.sales - b.sales,
            },
        ];

        return (
            <div style={{ width: "80%", }}>
                <div style={{marginLeft:'15%',textAlign:'center',}}>
                    <Table
                        rowKey={(record) => record.title}
                        dataSource={this.state.books}
                        columns={columns}
                        size={'middle'}
                        pagination={false}
                        onChange={onChange}
                        title={() => '图书热销榜'}
                    />
                </div>
            </div>
        );
    }
}
