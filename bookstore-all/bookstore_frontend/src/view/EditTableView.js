import React from 'react';
import '../App.css';
import SalesSortTable from "../components/ConsumeTable";
import ConsumeTable from "../components/SalesSortTable";
import {withRouter} from "react-router-dom";
import {Layout} from "antd";
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import {SearchBar} from "../components/SearchBar";
import RootOrderTable from "../components/RootOrder";
import EditTable from "../components/EditTable";
import EditBook from "../components/EditBook";
import {getBook} from "../services/bookService";
import {BookDetail} from "../components/BookDetail";
const { Header, Content, Footer } = Layout;


class EditTableView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {books:null};
    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});

        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        getBook(bookId, (data) => {this.setState({bookInfo: data})})
    }

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
                                <EditBook info={this.state.bookInfo} />
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

export default withRouter(EditTableView);