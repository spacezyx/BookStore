import React from 'react';
import {withRouter} from "react-router-dom";
import RegiserForm from "../components/RegisterForm";


class RegisterView extends React.Component{


    render(){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <div className="login-content">
                            <RegiserForm />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(RegisterView);