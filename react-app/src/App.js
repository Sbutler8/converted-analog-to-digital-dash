import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from './components/NavBar'
import * as sessionActions from './store/session'
import GPS from "./components/GPS";
import Dash from './components/Dash/index'
import io from "socket.io-client"

let endPoint = process.env.REACT_APP_BASE_URL;
const socket = io.connect(`${endPoint}`);

function App() {

  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
      dispatch(sessionActions.authenticate())
      setLoaded(true);
      setSocketListeners();
  }, [dispatch]);


  const setSocketListeners = () => {
    socket.on("Connected", () => {
      console.log('Connected to Front End YAY')
      socket.emit('get_speed')
    }, [socket]);
  }

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/dash" exact={true}>
            <div>DASH ROUTE HIT</div>
            <Dash />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm  />
        </Route>
        <ProtectedRoute path="/" exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
