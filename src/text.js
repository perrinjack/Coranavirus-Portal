import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux';
import StickyHeadTable from './Table';
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      localData: [],
      nationalData: [],
    };
  }
  localData = () => {
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
          `filters=areaType=ltla;areaName=${this.props.count}&` +
          'structure={"date":"date","newCases":"newCasesByPublishDate"}'
      )
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          localData: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  nationwideData = () => {
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
          'filters=areaType=nation;areaName=england&' +
          'structure={"date":"date","newCases":"newCasesByPublishDate"}'
      )
      .then((response) => {
        this.setState({ nationalData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.nationwideData();
    this.localData();
  }
  render() {
    return (
      <div>
        <p>Entire UK</p>
        {this.state.nationalData.slice(0, 7).map((num) => (
          <p>
            {num.date} : {num.newCases}
          </p>
        ))}
        <h3>{this.props.count}</h3>
        <StickyHeadTable data={this.state.localData.slice(0, 7)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter,
  };
};

export default connect(mapStateToProps)(Test);
