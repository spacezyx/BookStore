import React from 'react';
import '../App.css';
import SalesSortTable from "../components/ConsumeTable";
import ConsumeTable from "../components/SalesSortTable";
import {withRouter} from "react-router-dom";
import {Layout} from "antd";
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import {SearchBar} from "../components/SearchBar";
import {SideBarRoot} from "../components/SideBarRoot";
import RootOrderTable from "../components/RootOrder";
const { Header, Content, Footer } = Layout;


class RootUserView extends React.Component {
    render() {
        return (
            <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBarRoot />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <div style={{marginTop: '3%'}}>
                                <SalesSortTable/>
                                <ConsumeTable/>
                                {/*<SearchBar/>*/}
                                {/*<RootOrderTable/>*/}
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

export default withRouter(RootUserView);