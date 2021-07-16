import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import LoginRoute from  './LoginRoute'
import HomeView from "./view/HomeView";
import LoginView from './view/LoginView'
import {history} from "./utils/history";
import BookView from "./view/BookView";
import cartView from "./view/cartView";
import RootUserView from "./view/UOrderView";
import checkoutView from "./view/checkoutView";
import UserInfoView from "./view/UserInfoView";
import GraphView from "./view/GraphView";
import RootOrderView from "./view/RootOrderView";
import RootBookView from "./view/RootBookView";
import EditTableView from "./view/EditTableView";
import RootHomeView from "./view/RootHomeView";
import AddBookView from "./view/AddBookView";
import OrderAfterBuyView from "./view/OrderAfterBuyView";
import RegisterView from "./view/RegisterView";


class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={LoginView} />
                    <PrivateRoute exact path="/HomeView" component={HomeView} />
                    <PrivateRoute exact path="/RootHomeView" component={RootHomeView} />
                    <LoginRoute exact path="/login" component={LoginView} />
                    <Route exact path="/cartView" component={cartView} />
                    <PrivateRoute exact path="/bookDetails" component={BookView} />
                    <Route exact path="/rootuserView" component={RootUserView} />
                    <Route exact path="/checkoutView" component={checkoutView} />
                    <Route exact path="/UserInfoView" component={UserInfoView} />
                    <Route exact path="/GraphView" component={GraphView} />
                    <Route exact path="/RootOrderView" component={RootOrderView} />
                    <Route exact path="/RootBookView" component={RootBookView} />
                    <Route exact path="/EditTableView" component={EditTableView} />
                    <Route exact path="/AddBookView" component={AddBookView} />
                    <Route exact path="/OrderAfterBuyView" component={OrderAfterBuyView} />
                    <Route exact path="/RegisterView" component={RegisterView} />

                    <Redirect from="/*" to="/" />
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;