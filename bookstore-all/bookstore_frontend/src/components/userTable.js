import React from 'react';
import {Button, List, notification} from "antd";
import {history} from "../utils/history";
import { Switch } from 'antd';
import {getUserAuths} from "../services/userService";
import { Table, Input } from "antd";
import {ValidUser} from "../services/userService";
const { Column } = Table;



export default class UserTable extends React.Component{

    constructor(props) {
        super(props);
        this.state = {users:[]};
    }


    componentDidMount() {
        const callback =  (data) => {
            this.setState({users:data});
        };

        getUserAuths({"search":null}, callback);
        console.log('this.state.userAuths');
        console.log(this.state.users);
    }

    handleSetStatus = (checked,username,index)=>{
        const callback =  (data) => {
            this.setState({users:data});
        };

        var _users = this.state.users;
        ValidUser(_users[index].username,!_users[index].user_valid,()=>{});
        getUserAuths({"search":null}, callback);
        // this.state.users[index].user_valid=!this.state.users[index].user_valid;
        // const callbackagain =  (data) => {
        //     this.setState({users:data});
        // };
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
                title: "有效状态",
                dataIndex: "user_valid",
                key: "user_valid",
                width:270,
                height:80,
                render:(o,record,index)=>{
                    return(
                        <Switch
                            checkedChildren = "ON"
                            unCheckedChildren= "OFF"
                            checked = {o}
                            onClick={(checked => this.handleSetStatus(checked,record.username,index))}
                        />
                    )
                }
            },
            ];

        return (
            <div style={{ width: "80%", }}>
                <div style={{marginLeft:'15%',textAlign:'center',}}>
                    <Table
                        rowKey={(record) => record.username}
                        dataSource={this.state.users}
                        columns={columns}
                        size={'middle'}
                        pagination={false}
                    />
                </div>
            </div>
                );
    }
}
