import React, { useState, useEffect } from 'react';
import './DateTime.css';

const DateTime = ({component}) => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        setInterval(getTime, 1000);
      }, [time])

    function getTime () {
        let d = new Date();
        let month = d.getMonth();
        let day = d.getDay();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        setDate(months[month] + ', ' + day);
        setTime(("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2));
    }

    return (
        <div className={component==="dash" ? 'dash-date-time-container'
        :component==="map" ? 'map-date-time-container':null}>
            <div className={component==="dash" ? 'dash-date'
                :component==="map" ? 'map-date':null}>{date}</div>
            <div className={component==="dash" ? 'dash-time'
                :component==="map" ? 'map-time':null}>{time}</div>
        </div>
    )
}

export default DateTime;
