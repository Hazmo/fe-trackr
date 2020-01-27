import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Chart from "./components/chart/Chart";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Chart />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
