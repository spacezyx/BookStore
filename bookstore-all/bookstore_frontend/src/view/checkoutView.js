import React from 'react';
import '../App.css';
import Checkout from "../components/CheckOut/Checkout";
import {SearchBar} from "../components/SearchBar";
import {withRouter} from "react-router-dom";
import {HeaderInfo} from "../components/HeaderInfo";
import {Layout} from "antd";
import {SideBar} from "../components/SideBar";
const { Header, Content, Footer } = Layout;

class checkoutView extends React.Component{
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
                                <SearchBar/>
                                <Checkout/>

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

export default withRouter(checkoutView);