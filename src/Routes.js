import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import DriverForm from './components/DriverForm/DriverForm';
import SubConfirm from './pages/SubConfirm/SubConfirm';

export default class Routes extends Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route path="/" exact component={DriverForm} />
                    <Route path="/Complete" component={SubConfirm} />
                </Switch>
            </Router>
        )
    }
}