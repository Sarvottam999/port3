import React from "react";

import "./contact.css";
import contact_img from "../../imgs/c1.svg";
import github_img from "../../imgs/s1.svg";
import email_img from "../../imgs/s2.svg";
import in_img from "../../imgs/s3.svg";
import twitter_img from "../../imgs/s4.svg";

const Contact = () => {
  return (
    <div className="container  ">
      <div className="left-bigbox  ">
        <h1 className="contact-left-heading">ping me on</h1>
        <div className="social-containe-icon">


        <div className="social-item">
          <a href="mailto:kallitex1@gmail.com">

          <img className="social-img" src = {email_img} alt="My Happy SVG"/>

          </a>
        </div>

        <div className="social-item">
          <a target="_blank"  href="https://x.com/0x67658773?t=gko6cyN2eXNiESaosLTGgA&s=08"> <img className="social-img" src = {twitter_img} alt="My Happy SVG"/></a>
          
        </div>
        {/* <div className="social-item">
          <img className="social-img" src = {in_img} alt="My Happy SVG"/>
        </div> */}
        <div className="social-item">
          <a href="https://github.com/Sarvottam999">

          <img className="social-img" src = {github_img} alt="My Happy SVG"/>

          </a>
        </div>
        </div>

      </div>

      <div className="right-bigbox ">
        {/* <Navbar/> */}
        <div className=" contact-right-heading">contact</div>

        <img className="home-img" src={contact_img} alt="My Happy SVG" />
      </div>
    </div>
  );
};

export default Contact;
