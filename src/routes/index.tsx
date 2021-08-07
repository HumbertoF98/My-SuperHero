import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../views/Home";
import SearchResult from "../views/SearchResult";
import Result from "../views/Result";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resultados/:name" component={SearchResult} />
        <Route path="/resultado/:id" component={Result} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
