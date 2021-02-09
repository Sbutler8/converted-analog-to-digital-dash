import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session'
import './ProfilePictureModal.css';



const ProfilePictures = ({setShowProfileModal, setShowLoginModal, setSelectedUser, setShowSignupModal}) => {
    const dispatch = useDispatch();
    const [loginModal, setLoginModal] = useState(false);

    useEffect(() => {
        dispatch(sessionActions.getAllUsers());
    }, [dispatch])

    const users = useSelector(state => state.session.users);

    const getClickedUser = (user) => {
        setSelectedUser(user);
        setShowLoginModal(true);
    }

    return (
        <>
        <div id="header">Who's Driving'?</div>
        <div className="container">
            {users &&
            users.map((user) => {
                return (
                    <div key={user.id} className="button-container">
                    <button className="profilePic" style={{backgroundImage: `url(${user.pic})`}} onClick={() =>{ getClickedUser(user); setShowProfileModal(false)}}></button>
                    </div>
                )
            })}
        </div>
        <div className="signupPic">
            <button className="profilePic" style={{backgroundImage: 'url(' + require('../../public/profileImages/new_user.png') + ')'}} onClick={()=> {setShowProfileModal(false); setShowSignupModal(true)}}></button>
        </div>
        <div id="signup-link">
            <div>Don't Have An Account?</div>
            <div>Sign-up Now</div>
        </div>
        </>
    )
}

export default ProfilePictures;
