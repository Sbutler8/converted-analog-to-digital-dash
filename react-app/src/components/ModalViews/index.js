import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import { Link } from 'react-router-dom';
import ProfilePictures from '../ProfilePictures';
import ChooseCar from '../ChooseCar';
import AddCarForm from '../AddCarForm';

function ModalViews() {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showCarModal, setShowCarModal] = useState(false);
    const [showAddCarModal, setShowAddCarModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    return (
      <>
        <Link id="login" to="/" onClick={() => {
          setShowProfileModal(true)
          }}>Login
        </Link>

        {showProfileModal && (
          <Modal onClose={() => setShowProfileModal(false)} name="profile">
            <ProfilePictures setShowProfileModal={setShowProfileModal} setShowLoginModal={setShowLoginModal} setSelectedUser={setSelectedUser} setShowSignupModal={setShowSignupModal} />
          </Modal>
        )}
        {showLoginModal &&  (
          <Modal onClose={() => setShowLoginModal(false)} name="login">
            <LoginForm setShowLoginModal={setShowLoginModal} selectedUser={selectedUser} showCarModal={showCarModal} setShowCarModal={setShowCarModal}/>
          </Modal>
        )}
        {showCarModal &&  (
          <Modal onClose={() => setShowCarModal(false)} name="car">
            <ChooseCar />
          </Modal>
        )}
        {showAddCarModal &&  (
          <Modal onClose={() => setShowAddCarModal(false)} name="signup">
            <AddCarForm setShowAddCarModal={setShowAddCarModal}/>
          </Modal>
        )}
        {showSignupModal &&  (
        <Modal onClose={() => setShowSignupModal(false)} name="signup">
          <SignUpForm setShowSignupModal={setShowSignupModal} setShowAddCarModal={setShowAddCarModal}/>
        </Modal>
        )}
      </>
    );
  }

  export default ModalViews;
