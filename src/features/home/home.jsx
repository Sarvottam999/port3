import React from "react";

import "./home.css";
import Navbar from "../navbar/navbar";
import home_img from "../../imgs/h1.svg"
const Home = () => {
  return (
    <div className="home-container container">
      <div className="left-bigbox home-left-bigbox">
        <div className="home-text-container">
          <span className="home-text">Hi` Im</span>
          <span className="  home-text2 ">sarvottam</span>
          {/* <span className="home-text">sharma</span> */}
          <span className="btn top-margin1">follow</span>
        </div>
      </div>

      <div className="right-bigbox ">
        <Navbar/>
        <img className="home-img" src = {home_img} alt="My Happy SVG"/>

      </div>
    </div>
  );
};

export default Home;
