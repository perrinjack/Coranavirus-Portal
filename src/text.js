import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { localDataIn } from './actions';
function Test() {
  const counter = useSelector((state) => state.counter);
  const localData1 = useSelector((state) => state.localData);
  const dispatch = useDispatch();
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
        dispatch(localDataIn(100));
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

  return (
    <div>
      {counter} {localData1}
    </div>
  );
}

export default Test;
