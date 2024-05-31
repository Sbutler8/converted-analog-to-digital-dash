import React from "react";
import "./DateTime.css";

const DateTime = ({ component }) => {
  const date = new Date();
  const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"][
    date.getDay()
  ];
  const month = date.toLocaleString("default", {
    month: "long",
  });
  const day = date.getDate();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div
      className={
        component === "dash"
          ? "dash-date-time-container"
          : component === "map"
          ? "map-date-time-container"
          : null
      }
    >
      <div
        className={
          component === "dash"
            ? "dash-date"
            : component === "map"
            ? "map-date"
            : null
        }
      >{`${weekDay} ${month}, ${day}`}</div>
      <div
        className={
          component === "dash"
            ? "dash-time"
            : component === "map"
            ? "map-time"
            : null
        }
      >
        {time}
      </div>
    </div>
  );
};

export default DateTime;
