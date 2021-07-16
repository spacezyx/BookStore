import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css';
import {getUserAuths, register, ValidUser} from "../services/userService";


class UserRegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users:[],usernames:[]};
    }

    checkPsd(rule, value, callback) {
        let password2 = this.props.form.getFieldValue('reinput password');
        if (password2 && password2 !== value) {
            callback(new Error('两次密码输入不一致'));
        } else {
            callback();
        }
    }

    checkPsd2(rule, value, callback) {
        let password = this.props.form.getFieldValue('password');
        if (password && password !== value) {
            callback(new Error('两次密码输入不一致'));
        } else {
            callback();
        }
    }

    checkemail(rule, value, callback) {
        if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
            //console.log('请输入正确的Email');
            callback(new Error('请输入正确的Email'));
        } else {
            callback();
        }
    }

    componentDidMount() {
        const callback =  (data) => {
            this.setState({users:data});
        };

        getUserAuths({"search":null}, callback);
        console.log('this.state.userAuths');
        console.log('users: ',this.state.users);

    }

    checkusername(rule, value, callback) {
        var userns = this.state.users.map((item)=>{
            return item.username;
        })
        console.log('usernames ',userns);
        if (userns.includes(value)) {
            callback(new Error('用户名已存在'));
        } else {
            callback();
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                register(values,()=>{});

            }
        });

    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input the username!' },
                            { validator: (rule, value, callback) => { this.checkusername(rule, value, callback) }}
                        ],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input the password!' },
                           // { validator: (rule, value, callback) => { this.checkPsd(rule, value, callback) }}
                            ],}
                    )(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('reinput password', {
                        rules: [{ required: true, message: 'Please input the password again!' },
                            { validator: (rule, value, callback) => { this.checkPsd2(rule, value, callback) }}
                        ],}
                    )(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="reinput password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input the email!' },
                            { validator: (rule, value, callback) => { this.checkemail(rule, value, callback) }}
                        ],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="email"
                        />,
                    )}
                </Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Register Now!
                </Button>
            </Form>
        );
    }
}

const RegiserForm = Form.create({ name: 'add_new_book' })(UserRegisterForm);

export default RegiserForm
