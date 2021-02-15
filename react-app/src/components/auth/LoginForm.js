import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './LoginFormModal.css'


const LoginForm = ({selectedUser, setShowLoginModal, setShowCarModal}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const authenticate = useSelector((state) => state.session.authenticate);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(selectedUser.email)
  },[dispatch])

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(sessionActions.login({email, password}))
    setShowLoginModal(false)
    setShowCarModal(true)
    // if (!authenticate) history.push('/cars');

  };


  if (authenticate) {
    // return <Redirect to="/" />;
    // setShowCarModal(true)
  }


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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="submit-button" type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
