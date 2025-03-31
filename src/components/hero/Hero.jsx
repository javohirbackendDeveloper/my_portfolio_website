import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src="./myPicture.jpg" alt="Javohir Abdusharipov" />
      <h1>I'm Javohir Abdusharipov, fullstack developer based in Uzbekistan</h1>
      <p>
        I am a fullstack developer from Uzbekistan, I have 1 year of experience
        in Node.js and React.js.
      </p>
      <div className="hero_action">
        <div className="hero_resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
