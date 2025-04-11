Abdusharipov_Javohir_resume;

import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  const handleDownloadResume = () => {
    const resumeUrl =
      "https://my-portfolio-website-six-xi.vercel.app/" +
      "/Javohir_Abdusharipov_Resume.docx";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Javohir_Abdusharipov_Resume.docx";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div id="home" className="hero">
      <img src="./myPicture.jpg" alt="Javohir Abdusharipov" />
      <h1>I'm Javohir Abdusharipov, fullstack developer based in Uzbekistan</h1>
      <p>
        I am a fullstack developer from Uzbekistan, I have 1 year of experience
        in Node.js and React.js.
      </p>
      <div className="hero_action">
        <div className="hero_resume" onClick={handleDownloadResume}>
          My resume
        </div>
      </div>
    </div>
  );
}

export default Hero;
