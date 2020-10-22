import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';
import Results from './Results';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
function App() {
  const handleCalculateClick = (place) => {
    alert(place.town);
  };
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Home</Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Form input={handleCalculateClick} />
          </Route>
          <Route exact path="/results">
            <Results location={'Harpenden'} />
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
