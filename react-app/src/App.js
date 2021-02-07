import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from './components/NavBar'
import * as sessionActions from './store/session'
import Dash from './components/Dash/index'
import Home from "./components/Home";
import ChooseDash from "./components/ChooseDash";

function App() {

  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      dispatch(sessionActions.authenticate())
      setLoaded(true);
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path="/" exact={true}>
          <Home  />
        </Route>
        <Route path="/dashboards" exact={true}>
            <ChooseDash />
        </Route>
        <Route path="/dash" exact={true}>
            <Dash />
        </Route>
        <ProtectedRoute path="/" exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
