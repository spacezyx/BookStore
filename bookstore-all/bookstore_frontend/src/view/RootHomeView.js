import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/home.css'
import {withRouter} from "react-router-dom";
import {BookCarousel} from "../components/BookCarousel";
import {SearchBar} from "../components/SearchBar";
import {BookList} from "../components/BookList";
import {BookListForRoot} from "../components/BookListForRoot";
import {Button} from "antd";
import {SideBarRoot} from "../components/SideBarRoot";
import {history} from "../utils/history";

const { Header, Content, Footer } = Layout;

class RootHomeView extends React.Component{

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    handleRowAdd= () => {
        history.push("/AddBookView");
    };

    render(){
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBarRoot />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            {/*<SearchBar />*/}
                            {/*<BookCarousel />*/}
                            <BookListForRoot />
                            <Button onClick={ this.handleRowAdd } type="primary">添加书籍</Button>
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>

                </Layout>
            </Layout>
        );
    }
}

export default withRouter(RootHomeView);