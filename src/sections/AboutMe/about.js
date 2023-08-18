import "./about.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

const About = () => {
  return (
    <div id="about" className="firstCont center">
      <div className="AboutSide">
      
        <img
          src="https://github.com/aydengemz/MyPortfolio/blob/f6fb15975b64a320b3526796bf262194ea1ffaf6/public/profile.png?raw=true"
          alt="PFP"
        ></img>
        <div className="textSide">
          <p className="aboutTextBig">
            Hi! I am <span className="impor">Ayden</span>, 
            a sophomore at{" "}
            <span className="impor">Carnegie Mellon University</span> originally from Chapel Hill, North Carolina.
            I've always had a passion for{" "}
            <span className="impor">Web Development</span>, but recently I have
            developed an interest for
            <span className="impor">AI/Machine Learning!</span> In my free time
            I also like to{" "}
            <span className="impor">travel, swim, and play piano.</span> Overall
            though, I am a spontaneous person and just like to go with the flow.
          </p>
          {/* <div className="aboutTextSmall">
            <span>Technologies I'm Proficient With: </span>
            <section id="skills">
              <ul className="skillCont">
                <li className="skillitem skillbutton">React</li>
                <li className="skillitem skillbutton">Python</li>
                <li className="skillitem skillbutton">NodeJS</li>
                <li className="skillitem skillbutton">AWS</li>
                <li className="skillitem skillbutton">C</li>
                <li className="skillitem skillbutton">Swift</li>
                <li className="skillitem skillbutton">SQL</li>
                <li className="skillitem skillbutton">HTML</li>
              </ul>
            </section>
          </div> */}
          <div className="aboutTextSmall">
     
          <div className="contact center">
        <a href="AydenXu-Resume2023.pdf" target="_blank" download>
            <span type="button" className="outlinedButton">
            Resume
          </span>
        </a>
          <a
            href="https://github.com/aydengemz"
            target="_blank"
            className="link iconLink"
          >
            <GitHubIcon sx={{fontSize: "1.8rem"}}/>
          </a>

          <a
            href="https://www.linkedin.com/in/aydenx/"
            target="_blank"
            className="link iconLink"
          >
            <LinkedInIcon sx={{fontSize: "1.8rem"}}/>
          </a>
          <a
            href="https://www.instagram.com/ayd_xu/"
            target="_blank"
            className="link iconLink"
          >
            <InstagramIcon sx={{fontSize: "1.8rem"}}/>
          </a>
          <a
            href="mailto: aydenxunc@gmail.com"
            target="_blank"
            className="link iconLink"
          >
            <EmailIcon sx={{fontSize: "1.8rem"}}/>
          </a>
      </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
