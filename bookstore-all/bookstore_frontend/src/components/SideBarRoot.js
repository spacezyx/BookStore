import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {history} from "../utils/history";


const { SubMenu } = Menu;
const { Sider } = Layout;

export class SideBarRoot extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        if(collapsed){

        }
        console.log(collapsed);
        this.setState({ collapsed });
    };

    bookOnClick = () => {
        history.push("/RootHomeView");
    };

    cartOnClick = () => {
        history.push("/cartView");
    };

    RootBookOnClick = () => {
        history.push("/RootBookView");
    };

    rootOnClick = () => {
        // history.push("/rootuserView");
        history.push("/UserInfoView")
    };

    addressOnClick = () => {
        history.push("/checkoutView");
    };

    GraphOnClick= () => {
        history.push("/GraphView");
    };

    orderOnClick= () => {
        history.push("/RootOrderView");
    };

    render() {
        return (
            <div style={{width:this.state.collapsed? "80px":"180px", maxWidth:this.state.collapsed? "80px":"180px", minWidth:this.state.collapsed? "80px":"180px" }}>
                <div className="mySider">
                    <Sider collapsible collapsed={this.state.collapsed} width="180px" onCollapse={this.onCollapse} className="sider" style={{ background: '#fff'}}>
                        <Menu defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" onClick={this.bookOnClick}>
                                <Icon type="read" style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>Books</span>
                            </Menu.Item>
                            {/*<Menu.Item key="7" onClick={this.RootBookOnClick}>*/}
                            {/*    <Icon type="read" style={{ fontSize: '18px'}}/>*/}
                            {/*    <span style={{ fontSize: '16px'}}>Root Books</span>*/}
                            {/*</Menu.Item>*/}
                            {/*<Menu.Item key="2" onClick={this.cartOnClick}>*/}
                            {/*    <Icon type="shopping-cart" style={{ fontSize: '18px'}} />*/}
                            {/*    <span style={{ fontSize: '16px'}}>My Cart</span>*/}
                            {/*</Menu.Item>*/}
                            <Menu.Item key="3" onClick={this.orderOnClick}>
                                <Icon type="solution"  style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>Orders</span>
                            </Menu.Item>
                            {/*<Menu.Item key="4" onClick={this.addressOnClick}>*/}
                            {/*    <Icon type="user" style={{ fontSize: '18px'}}/>*/}
                            {/*    <span style={{ fontSize: '16px'}}>My Profile</span>*/}
                            {/*</Menu.Item>*/}
                            <Menu.Item key="5" onClick={this.rootOnClick}>
                                <Icon type="user" style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>Users</span>
                            </Menu.Item>
                            <Menu.Item key="6" onClick={this.GraphOnClick}>
                                <Icon type="user" style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>Graphs</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </div>
            </div>

        );
    }

}