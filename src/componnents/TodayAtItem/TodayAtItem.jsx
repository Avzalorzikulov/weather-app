/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./TodayAtItem.css";
function TodayAtItem({ currentTime, currentTemp, currentIcon }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currnetDate = new Date(currentTime * 1000).getDate();
  let currnetMonth = monthNames[new Date(currentTime * 1000).getMonth()].slice(
    0,
    3
  );
  let currentHour = new Date(currentTime * 1000).getHours();
  let currentHourReal =
    currentHour > 12 ? currentHour - 12 + "PM" : currentHour + "PM";
  return (
    <li>
      <span className="spancha">
        {currnetDate} {currnetMonth}
      </span>
      <h3> {currentHourReal} </h3>
      <img
        src={`https://openweathermap.org/img/wn/${currentIcon}@2x.png`}
        alt="Hourly Weather"
      />
      <h3>{currentTemp}°C</h3>
    </li>
  );
}

export default TodayAtItem;
