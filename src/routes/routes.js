import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import React from 'react'
const Routes = () => {
    return (<Router>
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    </Router>
    )
}
export default Routes