import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProfilePictureModal.css';


const ProfilePictures = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch()
    },[dispatch])

    // const users = useSelector((state) => state.session.users)
    const users = ['./profileImages/1.png',
                   '../../public/profileImages/2.png',
                   '../../public/profileImages/3.png',
                   '../../public/profileImages/4.png',
                   '../../public/profileImages/5.png',
                   '../../public/profileImages/6.png',
                   '../../public/profileImages/7.png',
                   '../../public/profileImages/8.png',
                   '../../public/profileImages/9.png'
        ]

    return (
        <>
        <div id="header">Who Are You?</div>
        <div className="container">
            {users.map(user => {
                return (
                    <input type="button" className="profilePic" style={{backgroundImage:`require(${user}))`}}></input>
                )
            })}
            {/* <input type="button" className="profilePic" ></input>
            <input type="button" className="profilePic" ></input>
            <input type="button" className="profilePic" ></input>
            <input type="button" className="profilePic" ></input>
            <input type="button" className="profilePic" ></input>
            <input type="button" className="profilePic" ></input>
            <input type="button" className="profilePic" ></input>
            <input type="button" className="profilePic" ></input>
            <input type="button" className="profilePic" ></input> */}
        </div>
        <button>New User</button>
        </>
    )
}

export default ProfilePictures;
