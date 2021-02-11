import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../store/session'
import { setPic } from "../../store/session";
import { addNewUser } from '../../store/session'
import * as sessionActions from "../../store/session";
import { signUp } from '../../services/auth';

import './SignUpForm.css'

const SignUpForm = ({authenticated, setShowSignupModal, setShowAddCarModal}) => {
  const dispatch = useDispatch()
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gpsPermission, setGpsPermission] = useState(false);
  const [profPic, setProfPic] = useState({'name': null});
  const [imgPreview, setImagePreview] = useState(null);


  if (authenticated) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setPic( profPic ))
    .then(file => {
          dispatch(addNewUser({ name, email, password, gpsPermission, profPic: file.output }))

          // dispatch(sessionActions.login({email, password}))

        }).catch(error => {
          console.log('😱 Error: ', error)
        });

        setProfPic(null);
        setShowSignupModal(false);
        setShowAddCarModal(true);
        // await history.push("/dash");
  };

    const updateProfPic = (e) => {
      const file = e.target.files[0];
      console.log(file)
      if (file) setProfPic(file);

      const fileReader = new FileReader();
      if (file) {
          fileReader.readAsDataURL(file);
      }
      fileReader.onloadend = () => {
        setImagePreview(fileReader.result);
    }
};

  return (
    <>
    <div id="signup-header" >Sign up</div>
    <form onSubmit={handleSubmit}>
      <img className="imgPreview" src={imgPreview} alt=''></img>
      <label  className="custom-file-upload">CLICK HERE TO UPLOAD A PHOTO
          <input onChange={updateProfPic} type="file" name="user_file" />
      </label>
      <div>
        <input
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
      </div>
      <div>
        <input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>
      <div>
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
      </div>
      <div>
        <input
          id="repeatPassword"
          type="password"
          placeholder="Enter Your Password Again"
          name="repeat_password"
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div>
      <label>Would you like to enable GPS location services?</label>
      <input
          id="gpsPermission"
          type="checkbox"
          name="gpsPermission"
          onChange={(e) => {gpsPermission ? setGpsPermission(false):setGpsPermission(true)}}
          value={gpsPermission}
        ></input>
      </div>
    <button id="submit-button" type="submit">Sign Up</button>
    </form>
    </>
  );
};

export default SignUpForm;
