import React from 'react';
import {Button} from "antd";
import {Col,Row} from "antd";
import {Form} from "antd";
import {Table} from "antd";
import {Input} from "antd";
import {addNewBook, getBooks} from "../services/bookService";
import {Link} from "react-router-dom";
import {modifyBook} from "../services/bookService";
import {history} from "../utils/history";


class EditTable extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            dataSource:[
            {
                key: 0,
                title: '三体：全三册',
                author: '刘慈欣',
                image1: 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg',
                isbn:'1',
                inventory:'14414',
            },
            ],//应用信息化查询方法
            count:1,//总数
        }
    }

    //保存
    save = () => {
        //处理校验值
        this.props.form.validateFields((err, values) => {
             console.log(values)
            if(!err){
                modifyBook(values[0],()=>{});
                // values.tableDt就是个表格数据的数组，可对获取的值进行处理校验处理
            }
        })
    }

    handleRowAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            title: '',
            author: '',
            image1: '',
            isbn: '',
            inventory: '',
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }

    handleDelete = () => {
        history.push("/RootHomeView");
    }

    toback = () => {
        history.push("/RootHomeView");
    }

    render() {
        const { form: { getFieldDecorator },dataSource } = this.props;
        return (
            <div>

                <Form>
                    <Form.Item>
                        <Table
                            columns={[
                                { title: '书名', dataIndex: 'title',render: (text, record, index) =>
                                        <Form.Item key={index}>
                                            {getFieldDecorator(`tableDt[${index}].title`)(
                                                <Input placeholder="请输入" />
                                            )}
                                        </Form.Item>
                                },
                                { title: '作者', dataIndex: 'author',render: (text, record, index) =>
                                        <Form.Item key={index}>
                                            {getFieldDecorator(`tableDt[${index}].author`)(
                                                <Input placeholder="请输入" />
                                            )}
                                        </Form.Item>
                                },
                                { title: '封面', dataIndex: 'image1',render: (text, record, index) =>
                                        <Form.Item key={index}>
                                            {getFieldDecorator(`tableDt[${index}].image1`)(
                                                <Input placeholder="请输入" />
                                            )}
                                        </Form.Item>
                                },
                                { title: 'isbn', dataIndex: 'isbn',render: (text, record, index) =>
                                        <Form.Item key={index}>
                                            {getFieldDecorator(`tableDt[${index}].isbn`)(
                                                <Input placeholder="请输入" />
                                            )}
                                        </Form.Item>
                                },
                                { title: '库存', dataIndex: 'inventory',render: (text, record, index) =>
                                        <Form.Item key={index}>
                                            {getFieldDecorator(`tableDt[${index}].inventory`)(
                                                <Input placeholder="请输入" />
                                            )}
                                        </Form.Item>
                                },
                            ]}
                            dataSource={this.state.dataSource}
                            pagination={false}
                        />
                    </Form.Item>

                </Form>
                <Row gutter={16}>
                    <Col span={24}>
                        <Button onClick={ this.save } type="primary">确认修改</Button>
                        <Button onClick={ this.toback }>返回书籍列表</Button>
                        {/*<Button onClick={ this.handleRowAdd } type="primary">添加书籍</Button>*/}
                        {/*<Button onClick={ this.handleDelete }>删除本书</Button>*/}
                        <span className="tips">{this.state.saveTipCont}</span>
                    </Col>
                </Row>
            </div>

        );
    }

}

export default Form.create()(EditTable);