import React, { useEffect } from 'react';
import Slider from "react-slick";
import io from "socket.io-client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

let endPoint = process.env.REACT_APP_BASE_URL;
var socket = io.connect(`${endPoint}`);

const Home = () => {

    socket.on("connected", () => {
        console.log('Connected to Front End YAY')
        socket.emit('lient-disconnecting');
    }, [socket]);

    // useEffect(() => {
    //     window.onbeforeunload = function () {
    //     socket.emit('client_disconnecting', {'username':localStorage.getItem('username')});
    // }
    // }, [])

    const carImages = ['https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/995474/pexels-photo-995474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/103290/pexels-photo-103290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1008659/pexels-photo-1008659.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/103286/pexels-photo-103286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/149813/pexels-photo-149813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1409968/pexels-photo-1409968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/35624/auto-car-cadillac-oldtimer.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500']

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
        };

    return (

        <Slider {...settings} className="carousel">
        {carImages.map(img => {
            return (
            <div key={img} className="img-container">
                <img className="carouselImg" src={img} alt=''></img>
                <hr id="picture-top"></hr>
                <div id="pictureText">Let's go places</div>
                <div id="pictureSmallText">Out with the old and in with the new</div>
                <hr id="picture-bottom"></hr>
            </div>
            )
        })}
    </Slider>

    )
}

export default Home;
