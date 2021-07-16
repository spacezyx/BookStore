import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css'
import {addNewBook} from "../services/bookService";
import {addCartProduct} from "../services/cartService";

class AddForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                addNewBook(values,()=>{});
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('ISBN', {
                        rules: [{ required: true, message: 'Please input the ISBN!' }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="ISBN"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('bookname', {
                        rules: [{ required: true, message: 'Please input the bookname!' }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="bookname"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('type', {
                        rules: [{ required: true, message: 'Please input the type!' }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="type"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('author', {
                        rules: [{ required: true, message: 'Please input the author!' }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="author"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('book_price', {
                        rules: [{ required: true, message: 'Please input the book_price!' }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="book_price"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Please input the description!' }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="description"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('inventory', {
                        rules: [{ required: true, message: 'Please input the inventory!' }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="inventory"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('book_picture', {
                        rules: [{ required: true, message: 'Please input the book_picture!' }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="book_picture"
                        />,
                    )}
                </Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Add the Book!
                </Button>
            </Form>
        );
    }
}

const AddNewBookForm = Form.create({ name: 'add_new_book' })(AddForm);

export default AddNewBookForm
