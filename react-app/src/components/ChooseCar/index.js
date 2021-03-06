import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getAllCars, setChosenCar } from "../../store/cars";
import './ChooseCar.css'

const ChooseCar = ({setShowCarModal, setShowAddCarModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector(state => {
      if (state.session.user) {
            return state.session.user.id
      }
    });

  const addCar = () => {
    setShowCarModal(false);
    setShowAddCarModal(true);
    // setShowAddCarModal(false);
    // setShowCarModal(true);
  }

  useEffect(() => {
      if (userId) {
          dispatch(getAllCars(userId));
        };
  }, [dispatch,userId])

  const cars = useSelector(state => state.cars.cars)

  return (
    <>
      <button className="left-button-container" type="button" onClick={() => addCar()}><i class="fas fa-plus"></i></button>
      <div className="car-header">Which car will you be driving?</div>
        {cars &&
          cars.map(car => {
          return (
            <div key={car.id} className="button-container">
            <button className="carPic" style={{backgroundImage: `url(${car.pic})`}} onClick={() => {dispatch(setChosenCar(car.id)); setShowCarModal(false); history.push('/dash')}}></button>
            </div>
          )
        })}
    </>
  );
}

export default ChooseCar;
