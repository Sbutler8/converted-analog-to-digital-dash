import { useState } from "react";
import { useSelector } from "react-redux";
import ModalViews from "../ModalViews";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import GPSPermission from "../GPSPermission/index";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.session.authenticate);
  const user = useSelector((state) => state.session.user);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCarModal, setShowCarModal] = useState(false);
  const [showGPSPermissionModal, setShowGPSPermissionModal] = useState(false);

  const handleLogout = () => {
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <nav className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </label>
        {authenticate && (
          <>
            <Link
              className="menu-item blue"
              to="/"
              onClick={() => handleLogout()}
            >
              <i className="fas fa-sign-out-alt"></i>
            </Link>
            <Link className="menu-item red" to="/dash">
              <i className="fas fa-tachometer-alt"></i>
            </Link>
            {user.gps_permission && (
              <Link className="menu-item purple" to="/map">
                <i className="fas fa-map-marked-alt"></i>
              </Link>
            )}
            {!user.gps_permission && (
              <Link
                className="menu-item purple"
                to=""
                onClick={() => setShowGPSPermissionModal(true)}
              >
                <i className="fas fa-map-marked-alt"></i>
              </Link>
            )}
            {showGPSPermissionModal && (
              <Modal
                id="gps-modal"
                onClose={() => setShowGPSPermissionModal(false)}
                name="gps"
              >
                <GPSPermission
                  setShowGPSPermissionModal={setShowGPSPermissionModal}
                />
              </Modal>
            )}
            <Link
              className="menu-item orange"
              to=""
              onClick={() => {
                setShowCarModal(true);
              }}
            >
              <i className="fas fa-car"></i>
            </Link>
            <Link className="menu-item green" to="/codes">
              <i className="fas fa-exclamation-circle"></i>
            </Link>
          </>
        )}
        {!authenticate && (
          <>
            <Link
              className="menu-item lightblue"
              id="login"
              to="/"
              onClick={() => {
                setShowProfileModal(true);
              }}
            >
              <i className="fas fa-sign-in-alt"></i>
            </Link>
          </>
        )}
      </nav>

      <ModalViews
        showProfileModal={showProfileModal}
        setShowProfileModal={setShowProfileModal}
        showCarModal={showCarModal}
        setShowCarModal={setShowCarModal}
      />
    </>
  );
};

export default NavBar;
