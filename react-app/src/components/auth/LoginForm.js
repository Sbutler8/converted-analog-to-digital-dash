import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './LoginFormModal.css'


const LoginForm = ({selectedUser, setShowLoginModal}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const authenticate = useSelector((state) => state.session.authenticate);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(selectedUser.email)
    console.log('EMAIL', email)
  },[dispatch])

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({email, password}))
    if (!authenticate) history.push('/dash');

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
    <div id="login-header">Welcome back {selectedUser.username}!</div>
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
          <button id="submit-button" type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
