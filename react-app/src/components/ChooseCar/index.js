import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as carActions from "../../store/cars";
import './ChooseCar.css'

const ChooseCar = () => {
  const dispatch = useDispatch();

  const [speed, setSpeed] = useState(0);
  const [status, setStatus] = useState("");

  const userId = useSelector(state => {
      if (state.session.user) {
            return state.session.user.id
      }
    });

  useEffect(() => {
      if (userId) {
          dispatch(carActions.getAllCars(userId));
        };
  }, [dispatch])

  return (
    <>
    <div id="header">Choose A Dashboard For Your Trip</div>
    </>
  );
}

export default ChooseCar;
