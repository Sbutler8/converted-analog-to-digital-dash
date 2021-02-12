import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, setChosenCar } from "../../store/cars";
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
      <div className="car-header">Which car will you be driving?</div>
        {cars &&
          cars.map(car => {
          return (
            <div key={car.id} className="button-container">
            <button className="carPic" style={{backgroundImage: `url(${car.pic})`}} onClick={() => dispatch(setChosenCar(car.id))}></button>
            </div>
          )
        })}
    </>
  );
}

export default ChooseCar;
