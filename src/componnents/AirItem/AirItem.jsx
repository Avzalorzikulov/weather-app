/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./AirItem.css";
const AirItem = ({ airData, airType }) => {
  return (
    <li>
      <p>{airType}</p>
      <h2>{airData}</h2>
    </li>
  );
};

export default AirItem;
