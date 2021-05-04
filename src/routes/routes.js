import Login from "../pages/login/login";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import UserDashboard from "../pages/dashboard/UserDashboard";
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
            <Route exact path="/admindashboard">
                <AdminDashboard />
            </Route>
            <Route exact path="/userdashboard">
                <UserDashboard />
            </Route>
        </Switch>
    </Router>
    )
}
export default Routes