import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewCar } from "../../store/cars";
import { setPic } from "../../store/session";
import './AddCarForm.css'

const AddCarForm = ({setShowAddCarModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [pic, setCarPic] = useState("");
  const [imgPreview, setImagePreview] = useState(null);

  const userId = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
  });

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setPic(pic))
          .then(file => {
            console.log('FILE------>', file)
              dispatch(addNewCar({userId, name, year, make, model, vin, pic: file.output }))
          }).catch(error => {
              console.log('😱 Error: ', error)
          });

      setPic(null);
      setShowAddCarModal(false);
      history.push("/dash");
  };

  const updateProfPic = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) setCarPic(file);

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
        <img className="car-imgPreview" src={imgPreview} alt=''></img>
        <label  className="custom-file-upload">CLICK HERE TO UPLOAD A PHOTO OF YOUR CAR
          <input onChange={updateProfPic} type="file" name="user_file" />
        </label>
        <form onSubmit={handleSubmit}>
          <div className="add-car-form" >

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
          </div>
          <button id="submit-button" type="submit">Add Car</button>
        </form>
      </>
    );
}

export default AddCarForm;
