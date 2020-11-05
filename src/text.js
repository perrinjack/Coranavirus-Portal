import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux';

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
          'structure={"date":"date","newCases":"newCasesByPublishDate"}',
        { delay: 2000 }
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
          'structure={"date":"date","newCases":"newCasesByPublishDate"}',
        { delay: 2000 }
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
        {this.props.count}
        {this.state.localData.slice(0, 7).map((num) => (
          <p>
            {num.date} : {num.newCases}
          </p>
        ))}

        <p>Entire UK</p>
        {this.state.nationalData.slice(0, 7).map((num) => (
          <p>
            {num.date} : {num.newCases}
          </p>
        ))}
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
