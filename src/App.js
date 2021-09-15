import './App.css';
import UserContainer from "./user/components/UserContainer";
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation} from "react-router-dom";
import DashboardComponent from "./dashboard/DashboardComponent";
import React, {createContext, useContext, useState} from "react";
import HeaderComponent from "./shared/components/header/HeaderComponent";
import NotFoundComponent from "./shared/components/not-found/NotFoundComponent";
import FormUserComponent from "./user/components/FormUserComponent";

const App = (props) => {

    return (
        <ProvideAuth>
            <Router>
                <HeaderComponent authButton={<AuthButton/>}/>
                <Switch>
                    <Route exact path='/'>
                        <DashboardComponent/>
                    </Route>
                    <PrivateRoute path='/users'>
                        <UserContainer/>
                    </PrivateRoute>
                    <PrivateRoute path='/form-user'>
                        <FormUserComponent/>
                    </PrivateRoute>
                    <Route path='/login'>
                        <LoginPage/>
                    </Route>
                    <Route path='*'>
                        <NotFoundComponent/>
                    </Route>
                </Switch>
            </Router>
        </ProvideAuth>
    )
}

const fakeAuth = {
    isAuthenticated: false,
    signIn(cb) {
        fakeAuth.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signOut(cb) {
        fakeAuth.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

const authContext = createContext();

const useAuth = () => {
    return useContext(authContext);
}

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signIn = (cb) => {
        return fakeAuth.signIn(() => {
            setUser('user');
            cb();
        })
    }

    const signOut = (cb) => {
        return fakeAuth.signIn(() => {
            setUser(null);
            cb();
        })
    }

    return {
        user,
        signIn,
        signOut
    }
}

const ProvideAuth = ({children}) => {
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

const PrivateRoute = ({children, ...rest}) => {

    const auth = useAuth();

    return (
        <Route {...rest} render={({location}) => auth.user ? (children) : (
            <Redirect to={{pathname: '/login', state: {from: location}}}/>
        )
        }/>
    )
}

const LoginPage = () => {

    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    const {from} = location.state || {from: {pathname: '/'}};

    const login = () => {
        auth.signIn(() => {
            history.replace(from);
        });
    }

    return (
        <div>
            <p>You must log in to view the page at </p>
            <button onClick={login}>Log in</button>
        </div>
    )
}

const AuthButton = () => {
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    const {from} = location.state || {from: {pathname: '/'}};

    const login = () => {
        auth.signIn(() => {
            history.replace(from);
        });
    }

    return auth.user ? (
        <button type="button" className="btn btn-warning"
                onClick={() => {
                    auth.signOut(() => history.push("/login"));
                }}
        >Sign Out</button>
    ) : (
        <button type="button" className="btn btn-primary" onClick={login}>Login</button>
    )
}

export default App;
