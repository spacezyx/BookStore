import React from 'react';
import {Button, List, notification} from "antd";
import {history} from "../utils/history";
import { Switch } from 'antd';
import {getOrders} from "../services/orderService";
import { Table, Input } from "antd";
import {ValidUser} from "../services/userService";
const { Column } = Table;



export default class UserOrderTable extends React.Component{

    constructor(props) {
        super(props);
        this.state = {orders:[]};
    }


    componentDidMount() {
        const callback =  (data) => {
            this.setState({orders:data});
        };

        getOrders({"search":null}, callback);
    }


    render() {

        const columns = [
            {
                title: "用户名",
                dataIndex: "username",
                key: "username",
                width:270,
                height:80,
            },
            {
                title: "书名",
                dataIndex: "book_title",
                key: "book_title",
                width:270,
                height:80,
            },
            {
                title: "价格",
                dataIndex: "book_price",
                key: "book_price",
                width:270,
                height:80,
            },
            {
                title: "数量",
                dataIndex: "book_num",
                key: "book_num",
                width:270,
                height:80,
            },
        ];

        return (
            <div style={{ width: "80%", }}>
                <div style={{marginLeft:'15%',textAlign:'center',}}>
                    <Table
                        rowKey={(record) => record.username}
                        dataSource={this.state.orders}
                        columns={columns}
                        size={'middle'}
                        pagination={false}
                    />
                </div>
            </div>
        );
    }
}
