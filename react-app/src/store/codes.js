const GET_CODE = "cars/getCode";

const getCode = (diagnostic) => {
  return {
    type: GET_CODE,
    payload: diagnostic,
  };
};

export const getOBDCode = (car) => async (dispatch) => {
  const { code } = car;

  // const response = await fetch(`https://api.eu.apiconnect.ibmcloud.com/hella-ventures-car-diagnostic-api/api/v1/dtc?client_id=${process.env.REACT_APP_IBM_CLIENT_ID}&client_secret=${process.env.REACT_APP_IBM_CLIENT_SECRET}&code_id=${code}&vin=${vin}&language=EN`, {
  //   method: 'GET',
  //   headers: {
  //     "content-type": 'application/json',
  //   },
  // });
  const sampleOBDFaults = [
    {
      message: "Fuel pump fault",
      system: "Fuel quantity controller",
      fault: "Fault in electric circuit",
    },
    {
      message: "Oxygen sensor malfunction",
      system: "Emission control system",
      fault: "Sensor circuit low voltage",
    },
    {
      message: "Catalytic converter efficiency below threshold",
      system: "Emission control system",
      fault: "Catalyst system efficiency low",
    },
    {
      message: "Engine misfire detected",
      system: "Ignition system",
      fault: "Random/multiple cylinder misfire",
    },
    {
      message: "Mass or volume air flow circuit range/performance problem",
      system: "Fuel and air metering",
      fault: "Air flow sensor circuit high input",
    },
    {
      message: "EGR valve malfunction",
      system: "Exhaust gas recirculation system",
      fault: "EGR flow insufficient detected",
    },
    {
      message: "Transmission fluid temperature sensor circuit high input",
      system: "Transmission control system",
      fault: "High voltage in temperature sensor circuit",
    },
    {
      message:
        "Throttle/pedal position sensor/switch A circuit range/performance problem",
      system: "Engine control system",
      fault: "Throttle position sensor/switch malfunction",
    },
    {
      message: 'Camshaft position sensor "A" circuit malfunction',
      system: "Engine control system",
      fault: "Camshaft position sensor failure",
    },
    {
      message: "Coolant temperature sensor circuit high input",
      system: "Engine cooling system",
      fault: "Coolant temperature sensor high voltage",
    },
  ];

  const data = {
    diagnostic: {
      dtc_data: sampleOBDFaults[code],
    },
  };
  // let data = await response.json();
  dispatch(getCode(data));
  return data;
};

const initialState = {};

const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CODE:
      return { ...state, diagnostic: action.payload };
    default:
      return state;
  }
};

export default codeReducer;
