import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css';
import {modifyBook} from "../services/bookService";
import {addNewBook} from "../services/bookService";
import {addCartProduct} from "../services/cartService";

class EditBForm extends React.Component {

    //id = localStorage.getItem("info_id");
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                modifyBook(values.id,values,()=>{});
            }
        });
    };


    render() {


        const { getFieldDecorator } = this.props.form;

        //localStorage.setItem("bookDetail",this.props);
        //const {info} = localStorage.getItem("bookDetail");

        const {info} = this.props;

        console.log(info);

        if(info == null){
            return null;
        }

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('id', {
                        initialValue:info.bookId,
                        rules: [{ required: true, message: info.bookId }],
                    })}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('ISBN', {
                        initialValue:info.isbn,
                        rules: [{ required: true, message: info.isbn }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="ISBN"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('bookname', {
                        initialValue:info.title,
                        rules: [{ required: true, message: info.title }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="bookname"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('author', {
                        initialValue:info.author,
                        rules: [{ required: true, message: info.author }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="author"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('book_picture', {
                        initialValue:info.image1,
                        rules: [{ required: true, message: info.image1 }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="book_picture"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('inventory', {
                        initialValue:info.inventory,
                        rules: [{ required: true, message: this.inventory }],
                    })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="inventory"
                        />,
                    )}
                </Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Modify the Book!
                </Button>
            </Form>
        );
    }
}

const EditBookForm = Form.create({ name: 'add_new_book' })(EditBForm);

export default EditBookForm
