import React from "react";
import { Route, Switch } from "react-router-dom";
import Produto from "../../pages/produto";

const RouterApp: React.FC = () => (
  <Switch>
       <Route path="/">
          <Produto />
       </Route>

     </Switch>
);

export default RouterApp;