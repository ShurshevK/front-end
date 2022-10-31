import React from "react";
import "../styles/dashboard.css"

// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import cloud from "../assets/cloud.png"


  
const dashboard = () => {
  return (
    <div className="div">
      
      <h1 className="welcome">Welcome to Credo</h1>
      
      <ul className="cloud">
          
          <Link className="link" to="/contents">
          <img className="image" src= {cloud} />
          <div class="middle">
            <div class="text">Login</div>
          </div>
          </Link>
          
        
        </ul>
    </div>
  );
};
  
export default dashboard;