import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './ChooseDash.css'

const ChooseDash = () => {
  const dispatch = useDispatch();

  const [speed, setSpeed] = useState(0);
  const [status, setStatus] = useState("");

  return (
    <>
    <div id="header">Choose A Dashboard For Your Trip</div>
    </>
  );
}

export default ChooseDash;
