import React from 'react';
import { Descriptions, Button } from 'antd';
import {addCartProduct} from "../services/cartService";
import {history} from "../utils/history";
import {deleteBook} from "../services/bookService";
import {Link} from "react-router-dom";


export class RootBookDetail extends React.Component{

    EditTableOnClick = (info) => {
        localStorage.setItem("info_id",this.info);
        history.push("/EditTableView/?id="+info);
    };

    DeleteOnClick=(bookId)=>{
        deleteBook(bookId,()=>{});
        history.push("/RootHomeView");
    }

    render() {

        const {info} = this.props;

        if(info == null){
            return null;
        }

        return (
            <div className={"content"}>
                <div claisbnme={"book-detail"}>
                    <div className={"book-image"}><img alt="image" src={info.image1} style={{width:"350px", height:"350px"}}/></div>
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.title}</Descriptions.Item>
                            <Descriptions.Item label={"作者"} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"ISBN"} span={3}>{info.isbn}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>{'¥' + info.price}</span>}</Descriptions.Item>
                            <Descriptions.Item label={"库存"} span={3}>{info.inventory}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>

                {/*onClick={this.setCertainBook.bind(this,1,info.bookId,info.title,info.image1,info.price)}*/}
                <Button type="danger" size={"large"} onClick={this.EditTableOnClick.bind(this,info.bookId)}>
                    编辑
                </Button>

                <Button type="danger" size={"large"}  style={{marginLeft:"15%"}}ghost onClick={this.DeleteOnClick.bind(this,info.bookId)}>
                    删除
                </Button>
            </div>


        )

    }

}
