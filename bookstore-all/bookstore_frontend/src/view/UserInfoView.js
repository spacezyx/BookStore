import UserTable from "../components/userTable";
import React from "react";
import {Layout} from "antd";
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import {SearchBar} from "../components/SearchBar";
import {withRouter} from "react-router-dom";
import {SideBarRoot} from "../components/SideBarRoot";
const { Header, Content, Footer } = Layout;

class UserInfoView extends React.Component{
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
                                <SearchBar/>
                                <UserTable/>

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

export default withRouter(UserInfoView);