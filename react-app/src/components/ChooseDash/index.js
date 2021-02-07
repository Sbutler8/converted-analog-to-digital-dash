import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from 'react-redux';

import './Dash.css'

const ChooseDash = () => {
  const dispatch = useDispatch();

  const [speed, setSpeed] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {

  }, [dispatch])
});


  return (
    <>

    </>
  );
}

export default ChooseDash;
