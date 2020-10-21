import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';
import Results from './Results';
function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route path="/">
            <h1>Custom 404 Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
