import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOBDCode } from '../../store/codes';
import './Codes.css';

const Codes = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [vin, setVin] = useState("");
    const [mileage, setMileage] = useState("");
    const [code, setCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getOBDCode({year, make, model, vin, mileage }))
    };

    const car = useSelector(state => state.cars.chosenCar)

    useEffect(() => {
        if (car) {
            setName(car.name);
            setYear(car.year);
            setMake(car.make);
            setModel(car.model);
            setVin(car.vin);
        }
    }, [dispatch, car])

    return (
        <>
            <div className="code-header">Code Lookup</div>
            <form onSubmit={handleSubmit}>
            <div className="add-car-form" >
                <label className="fields">Year</label>
                <input
                type="text"
                name="year"
                onChange={e => setYear(e.target.value)}
                value={year}
                ></input>
                <label className="fields">Make</label>
                <input
                type="text"
                name="make"
                onChange={e => setMake(e.target.value)}
                value={make}
                ></input>
                <label className="fields">Model</label>
                <input
                type="text"
                name="model"
                onChange={e => setModel(e.target.value)}
                value={model}
                ></input>
                <label className="fields">Vin</label>
                <input
                type="text"
                name="vin"
                onChange={e => setVin(e.target.value)}
                value={vin}
                ></input>
                <label className="fields">Mileage</label>
                <input
                type="text"
                name="mileage"
                onChange={e => setMileage(e.target.value)}
                value={mileage}
                ></input>
                <label className="fields">Code</label>
                <input
                type="text"
                name="code"
                onChange={e => setCode(e.target.value)}
                value={code}
                ></input>
            </div>
            <button id="submit-button" type="submit">What Is Wrong With {car.name}</button>
            </form>
        </>
    )
}

export default Codes;
