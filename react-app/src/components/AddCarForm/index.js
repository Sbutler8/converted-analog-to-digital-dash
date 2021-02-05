import React from 'react';
import { useSelector } from "react-redux";
import './AddCarForm.css'

if (authenticated) {
    return <Redirect to="/" />;
  }

const AddCarForm = () => {
    const [carName, setCarName] = useState("");
    const [year, setYear] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [vin, setVin] = useState("");
    const [pic, setPic] = useState("");
    const [imgPreview, setImagePreview] = useState(null);

    const user = useSelector(state => state.session.user);

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

    return (
        <>
        
          <div id="header" >Add Your Car</div>
        <form onSubmit={handleSubmit}>

          <div>
            <label className="fields">Car Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <img className="imgPreview" src={imgPreview} alt=''></img>
          <label  className="custom-file-upload">CLICK HERE TO UPLOAD A PHOTO
            <input onChange={updateProfPic} type="file" name="user_file" />
          </label>
          <div>
            <label className="fields">Year</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label className="fields">Make</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label className="fields">Model</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div>
            <label className="fields">Vin</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button id="submit-button" type="submit">Sign Up</button>
        </form>
        </>
      );

}

export default AddCarForm;
