import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOBDCode } from '../../store/codes';
import './Codes.css';

const Codes = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [vin, setVin] = useState("");
    const [code, setCode] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(getOBDCode({vin,code}))
    };

    const car = useSelector(state => {
        if (state.cars.chosenCar) {
            return state.cars.chosenCar
        }
     })

    useEffect(() => {
        if (car) {
            setName(car.name);
            setVin(car.vin.slice(0,11));
        }
    }, [dispatch])

    const diagnostic = useSelector(state => {
        if (state.codes.diagnostic) {
            return state.codes.diagnostic.dtc_data
        }
    });

    return (
        <>
            <div className="code-header">Code Lookup</div>
            <form onSubmit={handleSubmit}>
            <div className="code-form" >
                <label className="fields">Vin</label>
                <input
                type="text"
                name="vin"
                onChange={e => setVin(e.target.value.slice(0,11))}
                value={vin.slice(0,11)}
                ></input>
                <label className="fields">Code</label>
                <input
                type="text"
                name="code"
                onChange={e => setCode(e.target.value)}
                value={code}
                ></input>
            </div>
            <button id="code-submit-button" type="submit">What Is Wrong With {name}?</button>
            </form>
            <table className="code-table">
                <thead>
                    <tr>
                        <th>System</th>
                        <th>Fault</th>
                    </tr>
                    {!diagnostic &&
                        <tr>
                            <th className="table-no-data">Car Looks Great!</th>
                        </tr>
                    }
                </thead>
                <tbody>
                    {diagnostic &&
                    <>
                        <tr>
                            <td className="table-data-row-system">{diagnostic.system}</td>
                            <td className="table-data-row-fault">{diagnostic.fault}</td>
                        </tr>
                    </>
                    }
                    {}
                </tbody>
            </table>
        </>
    )
}

export default Codes;
