import React from 'react';
import './App.css';

import axios from 'axios';
import delayAdapterEnhancer from 'axios-delay';
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { usePromiseTracker, trackPromise } from 'react-promise-tracker';

import Loader from 'react-loader-spinner';

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div
        style={{
          width: '100%',
          height: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader type="Bars" color="#2BAD60" height="50" width="50" />
      </div>
    )
  );
};

function createData(name) {
  return { name };
}
const rows = [
  createData('Slough'),
  createData('St Albans'),
  createData('Harpenden'),
];
const endpoint =
  'https://api.coronavirus.data.gov.uk/v1/data?' +
  'filters=areaType=nation;areaName=england&' +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';

const api = axios.create({
  adapter: delayAdapterEnhancer(axios.defaults.adapter),
});
class Results extends React.Component {
  constructor(props) {
    super(props); // or super(props) ?
    this.state = {
      nationwideNewCasesToday: null,
      localNewCasesToday: null,
      location: this.props.location,
    };
  }

  nationwideData() {
    trackPromise(
      api
        .get(endpoint, { delay: 2000 })
        .then((response) => {
          console.log(response.data.data[0]);
          this.setState({
            nationwideNewCasesToday: response.data.data[0].newCases,
          });
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }

  localData() {
    trackPromise(
      api
        .get(
          'https://api.coronavirus.data.gov.uk/v1/data?' +
            `filters=areaType=ltla;areaName=${this.state.location}&` +
            'structure={"date":"date","newCases":"newCasesByPublishDate"}',
          { delay: 2000 }
        )
        .then((response) => {
          console.log(response);
          this.setState({
            localNewCasesToday: response.data.data[0].newCases,
          });
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }

  componentDidMount() {
    this.nationwideData();
    this.localData();
  }

  render() {
    let dataLocal;
    if (this.state.localNewCasesToday) {
      dataLocal = (
        <p>
          New Cases in {this.state.location}: {this.state.localNewCasesToday}
        </p>
      );
    } else {
      dataLocal = <LoadingIndicator />;
    }

    let dataNational;
    if (this.state.localNewCasesToday) {
      dataNational = (
        <div>
          <p>New Cases Nationwide: {this.state.nationwideNewCasesToday}</p>
          <p>Number of Deaths: {this.state.nationwideNewCasesToday}</p>
        </div>
      );
    } else {
      dataNational = <LoadingIndicator />;
    }

    return (
      <div>
        <Container maxWidth="md">
          <Grid container spacing={2} justify="center">
            <Grid item xs={'auto'} sm={4} align="center">
              <h2>Overview of the U.K</h2>
              {dataNational}
            </Grid>

            <Grid item xs={'auto'} sm={4} align="center">
              <h2> {this.state.location} Today</h2>
              {dataLocal}
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
