import './App.css';
import UserContainer from "./user/components/UserContainer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DashboardComponent from "./dashboard/DashboardComponent";
import React from "react";
import HeaderComponent from "./shared/components/header/HeaderComponent";
import NotFoundComponent from "./shared/components/not-found/NotFoundComponent";
import FormUserComponent from "./user/components/FormUserComponent";

const App = (props) => {

  return (
    <Router>
        <HeaderComponent/>
        <Switch>
            <Route exact path='/'>
                <DashboardComponent />
            </Route>
            <Route path='/users'>
                <UserContainer />
            </Route>
            <Route path='/form-user'>
                <FormUserComponent />
            </Route>
            <Route path='*'>
                <NotFoundComponent />
            </Route>
        </Switch>
    </Router>
  )
}

export default App;
