import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewCar } from "../../store/cars";
import './AddCarForm.css'

// if (authenticated) {
//     return <Redirect to="/" />;
//   }

const AddCarForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [pic, setPic] = useState("");
  const [imgPreview, setImagePreview] = useState(null);

  const user = useSelector(state => state.session.user);

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setPic(pic))
          .then(file => {
              dispatch(addNewCar({userId: user.id, name, year, make, model, vin, profPic: file.output }))
          }).catch(error => {
              console.log('😱 Error: ', error)
          });

      setPic(null);
      history.push("/dash");
  };

  const updateProfPic = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) setPic(file);

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
        <div id="new-car-header" >Add A New Car</div>
        <img className="imgPreview" src={imgPreview} alt=''></img>
        <label  className="custom-file-upload">CLICK HERE TO UPLOAD A PHOTO
          <input onChange={updateProfPic} type="file" name="user_file" />
        </label>
        <form className="add-car-form" onSubmit={handleSubmit}>
            <label className="fields">Car Name (optional)</label>
            <input
              type="text"
              name="name"
              onChange={e => setName(e.target.value)}
              value={name}
            ></input>
            <label className="fields">Year</label>
            <input
              type="text"
              name="year"
              onChange={e => setYear(e.target.value)}
              value={year}
            ></input>
            <label className="fields">Make</label>
            <input
              type="text"
              name="make"
              onChange={e => setMake(e.target.value)}
              value={make}
            ></input>
            <label className="fields">Model</label>
            <input
              type="text"
              name="model"
              onChange={e => setModel(e.target.value)}
              value={model}
            ></input>
            <label className="fields">Vin</label>
            <input
              type="text"
              name="vin"
              onChange={e => setVin(e.target.value)}
              value={vin}
            ></input>
        </form>
        <button id="submit-button" type="submit">Sign Up</button>
      </>
    );

}

export default AddCarForm;
