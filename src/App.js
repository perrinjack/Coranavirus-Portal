import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataGenerator from './dataGenerator';
import { Redirect } from 'react-router';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route key={'main'} exact path="/">
            <DataGenerator areaType="overview" areaName="&" />
          </Route>

          <Route key={'england'} exact path="/england">
            <DataGenerator areaType="nation" areaName=";areaName=England&" />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
