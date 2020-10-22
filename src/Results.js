import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import axios from 'axios';

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
        <Container maxWidth="sm" align = "center" justify = "center">
          <h1>Today at a glance</h1>
          <p>New Cases Nationwide: {this.state.nationwideNewCasesToday}</p>
          <p>
            New Cases in St Albans Local Authority:{' '}
            {this.state.localNewCasesToday}
          </p>
          <h1>Last Week at a glance</h1>
        </Container>
      </div>
    );
  }
}

export default Results;
