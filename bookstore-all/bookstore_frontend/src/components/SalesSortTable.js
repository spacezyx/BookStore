import React from 'react';
import { Switch } from 'antd';
import {getUserAuths} from "../services/userService";
import { Table, Input } from "antd";
import {ValidUser} from "../services/userService";
import {getBooks} from "../services/bookService";
import  {getUsers} from "../services/userService";

const { Column } = Table;

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

export default class ConsumeTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {users:[]};

    }
    componentDidMount() {
        const callback =  (data) => {
            this.setState({users:data});
        };

        getUsers({"search":null}, callback);
        console.log('this.state.users');
    }
    render() {
        const columns = [
            {
                title: "姓名",
                dataIndex: "name",
                key: "name",
                width:270,
                height:80,
            },
            {
                title: "消费金额",
                dataIndex: "expense_all",
                key: "expense_all",
                width:270,
                height:80,
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.expense_all - b.expense_all,
            },
        ];

        return (
            <div style={{ width: "80%", }}>
                <div style={{marginLeft:'15%',textAlign:'center',}}>
                    <Table
                        rowKey={(record) => record.name}
                        dataSource={this.state.users}
                        columns={columns}
                        size={'middle'}
                        pagination={false}
                        onChange={onChange}
                        title={() => '消费排行榜'}
                    />
                </div>
            </div>
        );
    }
}
