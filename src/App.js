import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';
import Dashboard from './dashboard.js';
import Test from './text';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
function App() {
  const location = useSelector((state) => state.counter);
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        {/* <AppBar position="static">
          <Toolbar component={Link} to="/">
            <Typography variant="h6">Home</Typography>
          </Toolbar>
        </AppBar> */}
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/jj">
            <Dashboard />
          </Route>
          <Route exact path="/results">
            {location ? <Test /> : <Redirect to="/" />}
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
