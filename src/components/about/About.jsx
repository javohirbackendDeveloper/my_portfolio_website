import React from "react";
import "./About.css";
function About() {
  return (
    <div id="about" className="about">
      <h1>About me</h1>
      <div className="about_title">
        <img src="/about.png" alt="" />
      </div>
      <div className="about_sections">
        <div className="about_left">
          <img
            src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
            alt=""
          />
        </div>
        <div className="about_right">
          <div className="about_para">
            <p>
              I am experienced Fullstack developer with our a development and I
              have created some real world projects
            </p>
          </div>

          <div className="frontend_skills">
            <h2>Frontend Skills</h2>
            <div className="about_skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about_skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about_skill">
              <p>Javascript </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about_skill">
              <p>Tailwind Css </p>
              <hr style={{ width: "30%" }} />
            </div>
          </div>

          <div className="backend_skills">
            <h2>Backend skills</h2>
            <div className="about_skill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about_skill">
              <p>MongoDb </p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about_skill">
              <p>Postgresql </p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about_skill">
              <p>Javascript </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about_skill">
              <p>Typescript </p>
              <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about_achievements">
        <div className="about_achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about_achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about_achievement">
          <h1>1+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
