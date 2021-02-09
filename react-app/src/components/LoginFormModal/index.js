import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import { Link } from 'react-router-dom';
import ProfilePictures from '../ProfilePictures';
import ChooseCar from '../ChooseCar';

function LoginFormModal() {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showCarModal, setShowCarModal] = useState(false);
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
        {showSignupModal &&  (
        <Modal onClose={() => setShowSignupModal(false)} name="signup">
          <SignUpForm setShowSignupModal={setShowSignupModal} selectedUser={selectedUser}/>
        </Modal>
        )}
      </>
    );
  }

  export default LoginFormModal;
