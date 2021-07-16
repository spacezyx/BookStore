import React from 'react';
import AddNewBookForm from "../components/AddNewBook";
import {withRouter} from "react-router-dom";
import {SideBarRoot} from "../components/SideBarRoot";


class AddBookView extends React.Component{


    render(){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <div className="login-content">
                            <AddNewBookForm />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(AddBookView);