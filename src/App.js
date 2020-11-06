import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './text';
import { Redirect } from 'react-router';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Test />
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
