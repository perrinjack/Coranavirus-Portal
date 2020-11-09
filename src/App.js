import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataGenerator from './dataGenerator';
import { Redirect } from 'react-router';

const countries = ['England', 'Scotland', 'Wales']; 
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route key={'main'} exact path="/">
            <DataGenerator areaType="overview" areaName="&" option={'the UK'} local = {true}/>
          </Route>

          {countries.map((country) => (
            <Route key={country} exact path={`/${country}`}>
              <DataGenerator
                areaType="nation"
                areaName={`;areaName=${country}&`}
                option={country}
                local = {false}
              />
            </Route>
          ))}

          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
