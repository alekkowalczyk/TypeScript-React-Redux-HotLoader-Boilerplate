import * as React from "react";
import { IndexRoute, Route } from "react-router";
import { App } from "../containers";
import { CounterPage } from "../containers";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CounterPage}/>
    </Route>
);
