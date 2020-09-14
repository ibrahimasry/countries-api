import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

import Layout from "./style/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/details" component={Details}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
