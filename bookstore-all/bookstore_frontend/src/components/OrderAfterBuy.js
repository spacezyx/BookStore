import React from 'react';
import {Button, List, notification} from "antd";
import {history} from "../utils/history";
import { Switch } from 'antd';
import {getOrders} from "../services/orderService";
import { Table, Input } from "antd";
import {ValidUser} from "../services/userService";
import {getCartByCustomerId} from "../services/cartService";
import {cleanCartByCustomerId} from "../services/cartService";
const { Column } = Table;


export default class OrderAfterBuy extends React.Component{

    constructor(){
        super()
        this.state={books:[]};
    }

    bookInfo=data=>{
        this.setState({
            books:[...this.state.books,data],
        })
    }

    componentDidMount() {
        getCartByCustomerId(1,this.bookInfo);
        cleanCartByCustomerId(1,this.bookInfo);
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
                title: "价格",
                dataIndex: "price",
                key: "price",
                width:270,
                height:80,
            },
        ];

        return (
            <div style={{ width: "80%", }}>
                <div style={{marginLeft:'15%',textAlign:'center',}}>
                    <Table
                         rowKey={(record) => record.username}
                        dataSource={this.state.books}
                        columns={columns}
                        size={'middle'}
                        pagination={false}
                    />
                </div>
            </div>
        );
    }
}
