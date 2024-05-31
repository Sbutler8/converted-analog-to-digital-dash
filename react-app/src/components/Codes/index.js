import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOBDCode } from "../../store/codes";
import "./Codes.css";

const Codes = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [vin, setVin] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getOBDCode({ vin, code }));
  };

  const user = useSelector((state) => state.session.user);

  const car = useSelector((state) => {
    if (state.cars.chosenCar) {
      return state.cars.chosenCar;
    }
  });

  useEffect(() => {
    if (car && user) {
      setName(car.name);
      setVin(car.vin.slice(0, 11));
    }
  }, [dispatch, setName, setVin, user, car]);

  const diagnostic = useSelector((state) => {
    if (state.codes.diagnostic) {
      if (!state.codes.diagnostic.dtc_data) {
        return state.codes.diagnostic;
      }
      return state.codes.diagnostic.dtc_data;
    }
  });

  // eslint-disable-next-line
  console.log(diagnostic);

  return (
    <div className="code-container">
      <div className="code-header">Code Lookup</div>
      <form onSubmit={handleSubmit}>
        <div className="code-form">
          <label htmlFor="vin" className="fields">
            Vin
          </label>
          <input
            id="vin"
            type="text"
            name="vin"
            onChange={(e) => setVin(e.target.value.slice(0, 11))}
            value={vin.slice(0, 11)}
          ></input>
          <label htmlFor="code" className="fields">
            Code
          </label>
          <input
            id="code"
            type="text"
            name="code"
            onChange={(e) => setCode(e.target.value)}
            value={code}
            required
          ></input>
        </div>
        {car && (
          <button id="code-submit-button" type="submit">
            What Is Wrong With {name}?
          </button>
        )}
        {!car && (
          <button id="code-submit-button" type="submit">
            What Is Wrong With My Car?
          </button>
        )}
      </form>
      <table className="code-table">
        <thead>
          <tr>
            <th>System</th>
            <th>Fault</th>
          </tr>
          {!diagnostic && (
            <tr>
              <th className="table-no-data">Car Looks Great!</th>
            </tr>
          )}
        </thead>
        <tbody>
          {diagnostic && (
            <>
              <tr>
                <th className="table-no-data">
                  {diagnostic.diagnostic.dtc_data.message}
                </th>
              </tr>
              <tr>
                <td className="table-data-row-system">
                  {diagnostic.diagnostic.dtc_data.system}
                </td>
                <td className="table-data-row-fault">
                  {diagnostic.diagnostic.dtc_data.fault}
                </td>
              </tr>
            </>
          )}
          {}
        </tbody>
      </table>
    </div>
  );
};

export default Codes;
