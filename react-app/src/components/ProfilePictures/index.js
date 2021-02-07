import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session'
import './ProfilePictureModal.css';



const ProfilePictures = ({setShowProfileModal, setShowLoginModal, setSelectedUser}) => {
    const dispatch = useDispatch();
    const [loginModal, setLoginModal] = useState(false);

    useEffect(() => {
        dispatch(sessionActions.getAllUsers());
    }, [dispatch])

    const users = useSelector(state => state.session.users);

    const getClickedUser = (user) => {
        setSelectedUser(user);
        console.log(user)
        setShowLoginModal(true);
        // return (
        //     <>
        //         {loginModal && (
        //             <Modal onClose={() => setShowModal(true)} name="profile">
        //             <LoginForm user={user}/>
        //             </Modal>
        //         )}

        //     </>
        //   );
    }

    return (
        <>
        <div id="header">Who's Driving'?</div>
        <div className="container">
            {users &&
            users.map((user) => {
                return (
                    <div className="button-container">
                    <button className="profilePic" style={{backgroundImage: `url(${user.pic})`}} onClick={() =>{ getClickedUser(user); setShowProfileModal(false)}}></button>
                    </div>
                )
            })}
        </div>
        <button className="profilePic" style={{backgroundImage: 'url(' + require('../../public/profileImages/new_user.png') + ')'}}></button>
        </>
    )
}

export default ProfilePictures;
