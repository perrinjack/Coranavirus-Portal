import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Test() {
  const counter = useSelector((state) => state.counter);

  const endpointl =
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    `filters=areaType=ltla;areaName=${counter}&` +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}';

  const endpointn =
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}';

  const localData = () => {
    axios
      .get(endpointl, { delay: 2000 })
      .then((response) => {
        console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nationwideData = () => {
    axios
      .get(endpointn, { delay: 2000 })
      .then((response) => {
        console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    localData();
    nationwideData();
  });

  return <div>{counter}</div>;
}

export default Test;
