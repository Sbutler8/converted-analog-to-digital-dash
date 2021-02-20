import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import './LoginFormModal.css'


const LoginForm = ({selectedUser, setShowLoginModal, setShowCarModal}) => {

  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(selectedUser.email)
  },[dispatch, selectedUser.email])

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(sessionActions.login({email, password}))
    setShowLoginModal(false)
    setShowCarModal(true)
  };


  return (
    <>
    <div id="login-header">Welcome back {selectedUser.username}!</div>
      <form className="login-form" onSubmit={onLogin}>
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
        </div>

          <button id="submit-button" type="submit">Login</button>
      
      </form>
    </>
  );
};

export default LoginForm;
