import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';
import { Link } from 'react-router-dom';
import ProfilePictures from '../ProfilePictures';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Link id="login" to="/" onClick={() => {
          setShowModal(true)
          }}>Login
        </Link>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} name="profile">
            <ProfilePictures />
            {/* <LoginForm /> */}
          </Modal>
        )}
      </>
    );
  }

  export default LoginFormModal;
