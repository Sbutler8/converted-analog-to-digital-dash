import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import SignUpForm from '../auth/SignUpForm'
import { Link } from 'react-router-dom';


function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Link id="signUpButton" onClick={() => {
                setShowModal(true)
                }}>SignUp
        </Link>
        {showModal && (
        <Modal onClose={() => setShowModal(false)} name="signUp">
            <SignUpForm />
        </Modal>
    )}
     </>
    );
}

export default SignUpFormModal;
