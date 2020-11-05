import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Test() {
  const counter = useSelector((state) => state.counter);

  return <div>{counter}</div>;
}

export default Test;
