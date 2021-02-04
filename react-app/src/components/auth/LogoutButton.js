import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session'
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return <Link onClick={() => {dispatch(sessionActions.logout()); history.push('/login')}}>Logout</Link>;
};

export default LogoutButton;
