import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { signUp } from '../../services/auth';

import './SignUpForm.css'

const SignUpForm = ({authenticated}) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profPic, setProfPic] = useState({'name': null});


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await signUp(username, email, password);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPic( profPic ))
        .then(file => {
            dispatch(addEntry({userId: user.id, title, tripId: lastTripId, profPic: file.output, entry, lat: addedLat, lon: addedLon }))
        }).catch(error => {
            console.log('😱 Error: ', error)
        });

    setProfPic(null);
    history.push("/dash");
};

  const updateProfPic = (e) => {
    const file = e.target.files[0];
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
      <div id="header" >Sign up! Track your adventures now!</div>
    <form onSubmit={onSignUp}>

      <div>
        <input
          type="text"
          placeholder="Name"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter Your Password Again"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <img className="imgPreview" src={imgPreview} alt=''></img>
                        <label  className="custom-file-upload">CLICK HERE TO UPLOAD A PHOTO
                            <input onChange={updateProfPic} type="file" name="user_file" />
                        </label>
      <button id="submit-button" type="submit">Sign Up</button>
    </form>
    </>
  );
};

export default SignUpForm;
