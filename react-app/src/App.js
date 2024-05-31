import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import * as sessionActions from "./store/session";
import Dash from "./components/Dash/index";
import Home from "./components/Home";
import ChooseDash from "./components/ChooseDash";
import AddCarForm from "./components/AddCarForm";
import GPS from "./components/GPS";
import Codes from "./components/Codes";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.authenticate());
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
          <Home />
        </Route>
        <Route path="/map" exact={true}>
          <APIProvider
            apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            onLoad={() => console.log("Maps API has loaded.")}
            libraries={["places", "geometry", "drawing"]}
          >
            <GPS />
          </APIProvider>
        </Route>
        <Route path="/dashboards" exact={true}>
          <ChooseDash />
        </Route>
        <Route path="/car" exact={true}>
          <AddCarForm />
        </Route>
        <Route path="/dash" exact={true}>
          <Dash />
        </Route>
        <Route path="/codes" exact={true}>
          <Codes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
