import React from 'react';
import { Descriptions, Button } from 'antd';
import {addCartProduct} from "../services/cartService";


var bookinfo=[];

export class BookDetail extends React.Component{

    setCertainBook=(customerId,bookId,bookTile,bookImage1,bookprice)=>{
        addCartProduct(customerId,bookId,bookTile,bookImage1,bookprice,()=>{});
        // localStorage['curBook'] = JSON.stringify(bookinfo);
        // localStorage.setItem("CurBook",JSON.stringify(bookinfo));
    }

    render() {

        const {info} = this.props;

        if(info == null){
            return null;
        }

        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    <div className={"book-image"}><img alt="image" src={info.image1} style={{width:"350px", height:"350px"}}/></div>
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.title}</Descriptions.Item>
                            <Descriptions.Item label={"作者"} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"分类"} span={3}>{info.type}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>{'¥' + info.price}</span>}</Descriptions.Item>
                            {/*<Descriptions.Item label={"状态 "} span={3}>{info.inventory !== 0? <span>有货 <span className={"inventory"}>库存{info.inventory}件</span></span> : <span className={"status"}>无货</span>}</Descriptions.Item>*/}
                            <Descriptions.Item label={"作品简介"} span={3}>{info.description}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <div className={"button-groups"}>
                    <Button type="danger" icon="shopping-cart" size={"large"} onClick={this.setCertainBook.bind(this,1,info.bookId,info.title,info.image1,info.price)}>
                        加入购物车
                    </Button>

                    <Button type="danger" icon="pay-circle" size={"large"} style={{marginLeft:"15%"}}ghost>
                        立即购买
                    </Button>
                </div>
            </div>


        )

    }

}
