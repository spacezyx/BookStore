import React from 'react';
import {getCarts} from "../services/cartService";
import {Button} from "antd";
import {history} from "../utils/history";
import {getCartByCustomerId} from "../services/cartService"
import {orderSend} from "../services/orderService"


function formatPrice(price){
    if(typeof price !=="number"){
        price = Number("aaa") || 0
    }
    return "¥"+ price.toFixed(2)
}



const castyle={
    width: 600,
    height: 240,
    marginLeft:10,
    marginTop:60,
    textAlign:'center',
}


export default class Cartpage extends React.Component{
    addBookToOrder=()=>{
        fetch('http://localhost:8080/addBookToOrder', {
            method:'post',
            mode: 'cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            body:"Book_id="+JSON.parse(localStorage.getItem("CurBook")).id,
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
        alert("下单成功！数据已发送后台:)")
    }

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
    }

    addressOnClick = () => {
        const callback=()=>{}
        orderSend(1,callback);
        // history.push("/checkoutView");
        //显示订单
        //删除购物车内容放在显示订单之后
        history.push("/OrderAfterBuyView");
        localStorage.setItem("itemInCart",this.state.books);

    };

    renderBooks(){
        return(

            <div style={castyle}>
                <table style={castyle}>

                    <thead>
                    <tr>
                        {/*<th></th>*/}
                        <th>书籍名称</th>
                        <th>价格</th>
                        <th>购买数量</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.books.map((item,index)=>{
                            // item.name=bookinfo.name;
                            // item.price=bookinfo.price;
                            item.numbers = 1
                            return (
                                <tr>
                                    {/*<td>{index+1}</td>*/}
                                    <td>{item.title}</td>
                                    <td>{formatPrice(item.price)}</td>
                                    <td>
                                        <button onClick={()=>this.changeBookCount(index,-1)}
                                                disabled={item.numbers ==1}
                                        >-</button>
                                        <span>{item.numbers}</span>
                                        <button onClick={()=>this.changeBookCount(index,1)}>+</button>
                                    </td>
                                    <td><button onClick={()=>this.removeItem(index)}>移除</button></td>
                                </tr>)
                        })
                    }
                    </tbody>
                </table>
                <h2 style={{marginLeft:400}}>总价格:{this.getTotalprice()}</h2>

                <Button type="primary"  className="login-form-button" onClick={this.addressOnClick}>
                    结算
                </Button>


            </div>)
    }

    renderNone(){
        return <h2>购物车为空</h2>
    }
    render() {
        const {books} = this.state
        return books.length ==0?this.renderNone():this.renderBooks()
    }
    changeBookCount(index,count){
        const newBooks =[...this.state.books]
        newBooks[index].numbers +=count
        this.setState({
            books:newBooks
        })
    }
    removeItem(index){
        this.setState({
            books:this.state.books.filter((item,indey)=>index !=indey)
        })
    }
    getTotalprice(){
        let totalPrice = this.state.books.reduce((pre,item)=>{
            return pre+item.price * item.numbers
        },0)
        return formatPrice(totalPrice)
    }
}
