import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';
import { Link } from 'react-router-dom';
import ProfilePictures from '../ProfilePictures';

function LoginFormModal() {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    return (
      <>
        <Link id="login" to="/" onClick={() => {
          setShowProfileModal(true)
          }}>Login
        </Link>
        {showProfileModal && (
          <Modal onClose={() => setShowProfileModal(false)} name="profile">
            <ProfilePictures setShowProfileModal={setShowProfileModal} setShowLoginModal={setShowLoginModal} setSelectedUser={setSelectedUser}/>
          </Modal>
        )}
        {showLoginModal &&  (
          <Modal onClose={() => setShowLoginModal(false)} name="login">
            <LoginForm setShowLoginModal={setShowLoginModal} selectedUser={selectedUser}/>
          </Modal>
        )}
      </>
    );
  }

  export default LoginFormModal;
