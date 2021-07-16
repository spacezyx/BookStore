import React from 'react';
import '../App.css';
import Filter from "../components/rootsearch";
import EditTable from "../components/tableforroot";
import {withRouter} from "react-router-dom";
import {Layout} from "antd";
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import OrderAfterBuy from "../components/OrderAfterBuy";
const { Header, Content, Footer } = Layout;


class OrderAfterBuyView extends React.Component {
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
                                <OrderAfterBuy/>

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

export default withRouter(OrderAfterBuyView);