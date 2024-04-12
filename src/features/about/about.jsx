import React from 'react'

import about_img from "../../imgs/a.svg"
import a2 from "../../imgs/a2.svg"
import a3 from "../../imgs/a3.svg"
import a4 from "../../imgs/a4.svg"


import "./about.css"




const About = () => {
  return (
    <div className=" about-container container">
      <div className="about-left-bigbox left-bigbox">
      <h1 className='heading1'>about</h1>

        <div className="about-text-container">
        <img className="home-img" src = {a2} alt="My Happy SVG"/>

            
          <div className="">OOnce upon a time, I started my journey as a programmer. I began by learning the basics of coding, using languages like Python, JavaScript, Java, and C++.

As I delved deeper, I discovered endless possibilities. I built simple websites, mastering HTML, CSS, and JavaScript to create my own little corner of the internet. </div>
          {/* <span className="btn top-margin1">follow</span> */}
        <div>But I didn't stop there. I wanted to make apps for phones, so I dived into mobile app development. Learning iOS and Android app development was challenging, but seeing my creations come to life on a smartphone screen was rewarding.

Despite the ups and downs, the journey as a programmer has been incredibly rewarding. Each line of code written is a step forward, each project completed is a milestone reached. And as I continue on this path, I look forward to discovering new technologies, solving new problems, and sharing my knowledge with others who embark on their own programming journeys.





</div>

        <img className="home-img" src = {a3} alt="My Happy SVG"/>

        
        
        {/* <div></div> */}
        
        {/* <div>Throughout my journey, I embraced the constant learning curve of programming. Each project, each line of code, taught me something new. And here I am today, still on that journey, eager to explore new technologies and solve new challenges in the ever-evolving world of programming</div> */}
        </div>
      </div>

      <div className="right-bigbox  about-right-bigbox">

        {/* <Navbar/> */}
        <img className="home-img" src = {a4} alt="My Happy SVG"/>

        {/* <img className="home-img" src = {about_img} alt="My Happy SVG"/> */}

      </div>
    </div>
  )
}

export default About