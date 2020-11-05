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
            <Test />
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
