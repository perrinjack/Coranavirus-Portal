import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Slough', 159),
  createData('St Albans', 237),
  createData('Harpenden', 262),
];
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
    super(props); // or super(props) ?
    this.state = {
      nationwideNewCasesToday: '',
      localNewCasesToday: '',
      location: this.props.location,
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
        <Container maxWidth="md">
          <Grid container spacing={2} justify="center">
            <Grid item xs={'auto'} sm={4} align="center">
              <h2>Overview of the U.K</h2>
              <p>New Cases Nationwide: {this.state.nationwideNewCasesToday}</p>
              <p>Number of Deaths: {this.state.nationwideNewCasesToday}</p>
            </Grid>

            <Grid item xs={'auto'} sm={4} align="center">
              <h2> {this.state.location} Today</h2>
              <p>
                New Cases in {this.state.location}:{' '}
                {this.state.localNewCasesToday}
              </p>
            </Grid>
            <Grid item xs={'auto'} sm={4} align="center">
              <h2>Tier 3 Zones</h2>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Area</TableCell>
                    <TableCell align="right">Calories</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Results;
