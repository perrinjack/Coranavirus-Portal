import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux';
import StickyHeadTable from './Table';
import Dashboard from './dashboard.js';
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: [0],
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
        console.log(response.data.data);
        this.setState({
          localData: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    this.localData();
  }
  render() {
    return (
      <div>
        <Dashboard today ={this.state.localData[0].newCases} />
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
