import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import UserContext from "../utils/useContext";


const Header = () => {
  const { user } = useContext(UserContext);
  
  let [title, setTitle] =  useState("Foodza");
    return (
      <div className="flex justify-between py-1 bg-purple-300 items-center shadow-lg">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={LOGO_URL}
          ></img>
        </div>
        <h1 className="text-3xl font-bold font-serif">{user.name}</h1>
        <button onClick={() => setTitle("food villa")}></button>
        <div>
          <ul className="flex gap-8 pr-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>Location</li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;