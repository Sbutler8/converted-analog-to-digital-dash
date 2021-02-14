import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalViews from '../ModalViews'
import SignUpFormModal from '../SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';
import ProtectedRoute from '../auth/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authenticate = useSelector((state) => state.session.authenticate);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCarModal, setShowCarModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  // const [showCarModal, setShowCarModal] = useState(false);
  const [showAddCarModal, setShowAddCarModal] = useState(false);

  const handleLogout = () => {
    dispatch(sessionActions.logout());

  }

  return (
      <>
        <nav className="menu">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1"></span>
            <span className="lines line-2"></span>
            <span className="lines line-3"></span>
          </label>

          <Link className="menu-item blue" to="/" onClick={() => handleLogout()} to=''><i className="fas fa-sign-out-alt"></i></Link>
          <Link className="menu-item lightblue" id="login" to="/" onClick={() => {setShowProfileModal(true)}}><i className="fas fa-sign-in-alt"></i></Link>
          <Link className="menu-item red" to="/dash" ><i className="fas fa-tachometer-alt"></i></Link>
          <Link className="menu-item purple" to="/map" ><i className="fas fa-map-marked-alt"></i></Link>
          <Link className="menu-item orange" to="" onClick={() => {setShowCarModal(true)}} ><i className="fas fa-car"></i></Link>
          <Link className="menu-item green" to="/codes"><i className="fas fa-exclamation-circle"></i></Link>
        </nav>

        <ModalViews showProfileModal={showProfileModal} setShowProfileModal={setShowProfileModal} showCarModal={showCarModal} setShowCarModal={setShowCarModal}/>
    </>
  );
}

export default NavBar;
