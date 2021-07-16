import React from "react";
import { Table, Input } from "antd";

export default class EditTable extends React.Component {
    state = {
        dataSource: [],
        editArr: [],
    };
    componentDidMount() {
        let arr = [];
        arr.push({
            id:1,name:'百年孤独',author:'加夫列尔·加西亚·马尔克斯',ISBN:9787544291170,price:30
        })
        arr.push({
            id:2,name: '乌合之众',author: '勒庞' ,ISBN:9787801093660 ,price: 16
        })
        arr.push({
            id:3,name: '追风筝的人',author:'卡勒德·胡赛尼' ,ISBN:9787208061644 ,price:20
        })
        arr.push({
            id:4,name:'万历十五年' ,author: '黄仁宇',ISBN:9787108009821 ,price:18
        })
        arr.push({
            id:5,name:'红楼梦' ,author:'曹雪芹' ,ISBN:  9787020002207,price: 59.7
        })
        arr.push({
            id:6,name:'三体' ,author:'刘慈欣' ,ISBN: 9787900516176,price:70
        })
        arr.push({
            id:7,name: '白夜行',author: '东野圭吾',ISBN: 9787544258609,price:39.5
        })
        arr.push({
            id:8,name: '小王子',author:'安东尼·德·圣-埃克苏佩里' ,ISBN:9787020042494 ,price: 22
        })
        arr.push({
            id:9,name:'月亮与六便士' ,author:'威廉·萨默塞特·毛姆' ,ISBN: 9787533936020,price: 39.8
        })
        this.setState({ dataSource: arr });
    }

    // 渲染出来input,输入的时候改变dataSource的数据
    renderInput = (text, record, index, field) => {
        const { editArr } = this.state;
        return record.edit ? (
            <Input
                value={
                    editArr[index] && editArr[index][field]
                        ? editArr[index][field]
                        : record[field]
                }
                onChange={(e) => this.inputChange(e, record, index, field)}
                // onPressEnter={(e) => this.handleSave(e, record)}
                // onBlur={(e) => this.handleSave(e, record)}
            />
        ) : (
            text
        );
    };

    // 编辑表格
    edit = (record, id) => {
        const { dataSource } = this.state;
        // 浅拷贝下数据
        const newArr = [...dataSource];
        // 找到index的值
        const index = newArr.findIndex((item) => item.id === id);
        // 利用splice方法删除原数据，新增新数据
        newArr.splice(index, 1, { ...record, edit: true });
        // 注意：一开始写法是const arr = newArr.splice(index, 1, { ...record, ...{ edit: true } });是错的，因为这个方法返回的是删除的那一条值
        this.setState({ dataSource: newArr });
    };

    // input改变的时候
    inputChange = (e, record, index, field) => {
        let { editArr } = this.state;
        editArr[index] = record;
        record[field] = e.target.value;
        this.setState({ editArr });
    };

    // 单条保存
    handleSave = (record, index) => {
        const { editArr, dataSource } = this.state;
        const newData = [...dataSource];
        // 用splice不改变原来的数组顺序
        newData.splice(index, 1, {
            ...record,
            ...editArr[index],
            edit: false,
        });
        this.setState({ dataSource: newData });
    };

    render() {
        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                width:270,
                height:80,

                render: (text, record, index) =>
                    this.renderInput(text, record, index, "name"),
            },
            {
                title: "Author",
                dataIndex: "author",
                key: "author",
                width:270,
                height:80,
                render: (text, record, index) =>
                    this.renderInput(text, record, index, "author"),
            },
            {
                title: "ISBN",
                dataIndex: "ISBN",
                key: "ISBN",
                width:270,
                height:80,
                render: (text, record, index) =>
                    this.renderInput(text, record, index, "ISBN"),
            },
            {
                title: "Price",
                dataIndex: "price",
                key: "price",
                width:270,
                height:180,
                render: (text, record, index) =>
                    this.renderInput(text, record, index, "price"),
            },
            {
                title: "Opreation",
                dataIndex: "opreation",
                key: "opreation",
                width:270,
                height:180,
                render: (text, record, index) => {
                    return !record.edit ? (
                        <span
                            style={{ color: "primary", cursor: "pointer" }}
                            onClick={() => this.edit(record, record.id)}
                        >
              Edit
            </span>
                    ) : (
                        <span
                            style={{ color: "primary", cursor: "pointer" }}
                            onClick={() => this.handleSave(record, index)}
                        >
              Save
            </span>
                    );
                },
            },
        ];

        return (
            <div style={{ width: "80%", }}>
                <div style={{marginLeft:'15%',textAlign:'center',}}>
                    <Table

                        rowKey={(record) => record.id}
                        dataSource={this.state.dataSource}
                        columns={columns}
                        size={'middle'}


                        pagination={false}

                    />
                </div>
            </div>
        );
    }
}
