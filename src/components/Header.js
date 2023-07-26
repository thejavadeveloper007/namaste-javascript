import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  let [title, setTitle] =  useState("Foodza");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <h1>{title}</h1>
        <button onClick={() => setTitle("food villa")}></button>
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>Location</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;