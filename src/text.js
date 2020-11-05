import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux';

const endpointl =
  'https://api.coronavirus.data.gov.uk/v1/data?' +
  `filters=areaType=ltla;areaName=&` +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';

const endpointn =
  'https://api.coronavirus.data.gov.uk/v1/data?' +
  'filters=areaType=nation;areaName=england&' +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';
class Test extends React.Component {
  localData = () => {
    axios
      .get(endpointl, { delay: 2000 })
      .then((response) => {
        console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  nationwideData = () => {
    axios
      .get(endpointn, { delay: 2000 })
      .then((response) => {
        console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.localData();
    this.nationwideData();
  }
  render() {
    return <div>{this.props.count} </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter,
  };
};

export default connect(mapStateToProps)(Test);
