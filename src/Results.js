import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const endpoint =
  'https://api.coronavirus.data.gov.uk/v1/data?' +
  'filters=areaType=nation;areaName=england&' +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';

const endpoint1 =
  'https://api.coronavirus.data.gov.uk/v1/data?' +
  'filters=areaType=ltla;areaName=st albans&' +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';

class Results extends React.Component {
  constructor(props) {
    super(); // or super(props) ?
    this.state = {
      nationwideNewCasesToday: '',
      localNewCasesToday: '',
    };
  }

  nationwideData() {
    axios
      .get(endpoint, { timeout: 10000 })
      .then((response) => {
        console.log(response.data.data[0].newCases);
        this.setState({
          nationwideNewCasesToday: response.data.data[0].newCases,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  localData() {
    axios
      .get(endpoint1, { timeout: 10000 })
      .then((response) => {
        console.log(response);
        this.setState({
          localNewCasesToday: response.data.data[0].newCases,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.nationwideData();
    this.localData();
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Home</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" >
          <Grid container spacing={2}  >
            <Grid item xs={'auto'} sm={4} align="center" >
              <h2>Overview of the U.K</h2>
              <p>New Cases Nationwide: {this.state.nationwideNewCasesToday}</p>
              <p>Number of Deaths: {this.state.nationwideNewCasesToday}</p>
            </Grid>

            <Grid item xs={'auto'} sm={4} align="center">
              <h2> St Albans Today</h2>
              <p>New Cases in St Albans: {this.state.nationwideNewCasesToday}</p>
            </Grid>
            <Grid item xs={'auto'} sm={4} align="center">
              <h2>Tier 3 Zones</h2>
              <p>New Cases in St Albans: {this.state.nationwideNewCasesToday}</p>
            </Grid>
            
          </Grid>
          <Grid container spacing={2} align="center">
            <Grid item xs={'auto'} sm={6}>
              <h2>Tier 3 Zones</h2>
              <p>New Cases Nationwide: {this.state.nationwideNewCasesToday}</p>
            </Grid>

            <Grid item xs={'auto'} sm={6} align="center">
              <h2>The Last week in St Albans</h2>
              <p>New Cases Nationwide: {this.state.nationwideNewCasesToday}</p>
            </Grid>
            
          </Grid>
          
        </Container>
      </div>
    );
  }
}

export default Results;
