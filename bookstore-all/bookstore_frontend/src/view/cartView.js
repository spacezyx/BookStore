import React from 'react';
import '../App.css';
import Cartpage from "../components/cartItem";
import {withRouter} from "react-router-dom";
import {HeaderInfo} from "../components/HeaderInfo";
import {Layout} from "antd";
import {SideBar} from "../components/SideBar";
const { Header, Content, Footer } = Layout;
// import EditTable from "../components/tableforroot";

class cartView extends React.Component{
    render() {
        return (
            <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <div style={{marginTop: '3%'}}>
                                <Cartpage/>

                            </div>

                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(cartView);