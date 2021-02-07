import React from "react";
import { useSelector } from "react-redux";
import LoginFormModal from '../LoginFormModal'
import SignUpFormModal from '../SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';
import ProtectedRoute from '../auth/ProtectedRoute';

const NavBar = () => {
  const authenticate = useSelector((state) => state.session.authenticate);

  return (
    <>
        <>
        {!authenticate && (
          <LoginFormModal />
        )}
        {authenticate && (
          <ProtectedRoute>
            <LogoutButton />
          </ProtectedRoute>
        )}
        </>

    </>

  );
}

export default NavBar;
