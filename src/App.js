import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataGenerator from './dataGenerator';
import { Redirect } from 'react-router';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
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
