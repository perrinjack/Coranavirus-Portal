import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Dashboard from './dashboard.js';
class DataGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: [0],
      nationalData: [0],
      test: this.props.count,
    };
  }
  localData() {
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
          `filters=areaType=ltla;areaName=${this.props.count}&` +
          'structure={"date":"date","newCases":"newCasesByPublishDate"}'
      )
      .then((response) => {
        this.setState({
          localData: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  nationalData() {
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
          `filters=areaType=nation;areaName=england&` +
          'structure={"date":"date","newCases":"newCasesByPublishDate"}'
      )
      .then((response) => {
        this.setState({
          nationalData: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.nationalData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      this.localData();
    }
  }

  render() {
    return (
      <div>
        <Dashboard
          localdata={this.state.localData}
          nationaldata={this.state.nationalData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter,
  };
};

export default connect(mapStateToProps)(DataGenerator);
