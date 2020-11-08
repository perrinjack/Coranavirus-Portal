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
            <DataGenerator />
          </Route>

          <Route key={'england'} exact path="/england">
            <DataGenerator />
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
