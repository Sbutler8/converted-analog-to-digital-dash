import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewCar } from "../../store/cars";
import { setPic } from "../../store/session";
import "./AddCarForm.css";

const AddCarForm = ({ setShowAddCarModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [pic, setCarPic] = useState("");
  const [imgPreview, setImagePreview] = useState(null);

  const userId = useSelector((state) => {
    if (state.session.user) {
      return state.session.user.id;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPic(pic))
      .then((file) => {
        dispatch(
          addNewCar({ userId, name, year, make, model, vin, pic: file.output })
        );
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });

    setPic(null);
    setShowAddCarModal(false);
    history.push("/dash");
  };

  const updateProfPic = (e) => {
    const file = e.target.files[0];
    if (file) setCarPic(file);

    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = () => {
      setImagePreview(fileReader.result);
    };
  };

  return (
    <>
      <div id="new-car-header">Add A New Car</div>
      <img className="car-imgPreview" src={imgPreview} alt=""></img>
      <label for="profile-pic" className="custom-file-upload">
        CLICK HERE TO UPLOAD A PHOTO OF YOUR CAR
        <input
          id="profile-pic"
          onChange={updateProfPic}
          type="file"
          name="user_file"
        />
      </label>
      <form onSubmit={handleSubmit}>
        <div className="add-car-form">
          <label for="name" className="fields">
            Car Name (optional)
          </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <label for="year" className="fields">
            Year
          </label>
          <input
            id="year"
            type="text"
            name="year"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          ></input>
          <label for="make" className="fields">
            Make
          </label>
          <input
            id="make"
            type="text"
            name="make"
            onChange={(e) => setMake(e.target.value)}
            value={make}
          ></input>
          <label for="model" className="fields">
            Model
          </label>
          <input
            id="model"
            type="text"
            name="model"
            onChange={(e) => setModel(e.target.value)}
            value={model}
          ></input>
          <label for="vin" className="fields">
            Vin
          </label>
          <input
            id="vin"
            type="text"
            name="vin"
            onChange={(e) => setVin(e.target.value)}
            value={vin}
          ></input>
        </div>
        <button id="submit-button" type="submit">
          Add Car
        </button>
      </form>
    </>
  );
};

export default AddCarForm;
