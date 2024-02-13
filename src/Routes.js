import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/HomePage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/statistics">
                <h1>Statistics</h1>
            </Route>
            <Route exact path="/customers">
                <h1>Customers</h1>
            </Route>
            <Route exact path="/diagrams">
                <h1>Diagrams</h1>
            </Route>
        </Switch>
    );
};

export default Routes;