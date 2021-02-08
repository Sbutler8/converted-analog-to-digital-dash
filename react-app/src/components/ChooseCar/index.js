import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from 'react-redux';
import getAllCars from "../../store/cars";
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
          dispatch(getAllCars(userId));
        };
  }, [dispatch,userId])

  return (
    <>
      <div id="login-header">Which car will you be driving?</div>
      <form className="form" >
        <div>CARS</div>
      </form>
    </>
  );
}

export default ChooseCar;
