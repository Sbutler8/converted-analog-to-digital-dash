import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getAllCars} from "../../store/cars";
import './ChooseCar.css'

const ChooseCar = () => {
  const dispatch = useDispatch();

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

  const cars = useSelector(state => state.cars.cars)

  return (
    <>
      <div id="login-header">Which car will you be driving?</div>
      <form className="form" >
        {cars &&
          cars.map(car => {
          return (
            <div className="button-container">
            <button className="profilePic" style={{backgroundImage: `url(${car.pic})`}}></button>
            </div>
          )
        })}
      </form>
    </>
  );
}

export default ChooseCar;
