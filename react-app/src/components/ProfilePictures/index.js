import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session'
import './ProfilePictureModal.css';


const ProfilePictures = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sessionActions.getAllUsers())
    }, [dispatch])

    const users = useSelector(state => state.session.users);

    console.log(users)

    // const users = useSelector((state) => state.session.users)
    const userPics = ['../../public/profileImages/1.png',
    '../../public/profileImages/2.png',
    '../../public/profileImages/3.png',
    '../../public/profileImages/4.png',
    '../../public/profileImages/5.png',
    '../../public/profileImages/6.png',
    '../../public/profileImages/7.png',
    '../../public/profileImages/8.png',
    '../../public/profileImages/9.png',
    '../../public/profileImages/new_user.png'
        ]
    const getClickedUser = (user) => {
        console.log(user)
    }

    return (
        <>
        <div id="header">Who's Driving'?</div>
        <div className="container">
            {users &&
            users.map((user) => {
                return (
                    <div className="button-container">
                    <button className="profilePic" style={{backgroundImage: `url(${user.pic})`}} onClick={() => getClickedUser(user)}></button>
                    </div>
                )
            })}
            {/* <button className="profilePic" style={{backgroundImage: 'url(' + require('../../public/profileImages/1.png') + ')'}}></button>
            <img className="profilePic" src="./profileImages/2.png"></img>
            <img className="profilePic" src="./profileImages/3.png"></img>
            <img className="profilePic" src="./profileImages/4.png"></img>
            <img className="profilePic" src="./profileImages/5.png"></img>
            <img className="profilePic" src="./profileImages/6.png"></img>
            <img className="profilePic" src="./profileImages/7.png"></img>
            <img className="profilePic" src="./profileImages/8.png"></img>
            <img className="profilePic" src="./profileImages/9.png"></img>
            <img className="profilePic" src="./profileImages/new_user.png"></img> */}
        </div>

        </>
    )
}

export default ProfilePictures;
