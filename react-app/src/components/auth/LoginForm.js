import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './LoginFormModal.css'




const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authenticate = useSelector((state) => state.session.authenticate);
  const user = useSelector((state => state.session.user));

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({email, password}))

  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  if (authenticate) {
    return <Redirect to="/" />;
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
    {/* <div id="header">Welcome back {user.name}</div> */}
      <form className="form" onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <button id="submit-button" type="submit" onClick={() => history.push("/dash")}>Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
