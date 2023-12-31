import "./about.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

const About = () => {
  return (
    <div id="about" className="firstCont">
      <div className="AboutSide">
      
        <img
          src="https://github.com/aydengemz/MyPortfolio/blob/main/public/pfpcrop.png?raw=true"
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
          <div className="aboutTextSmall">
     
          <div className="contact center">
        <a href="AydenXu-Resume2025.pdf" target="_blank" download>
            <span type="button" className="outlinedButton">
            Resume
          </span>
        </a>
          <a
            href="https://github.com/aydengemz"
            target="_blank"
            className="link iconLink"
          >
            <GitHubIcon sx={{fontSize: {s: "1.4em", m:"1.8rem"}}}/>
          </a>

          <a
            href="https://www.linkedin.com/in/aydenx/"
            target="_blank"
            className="link iconLink"
          >
            <LinkedInIcon sx={{fontSize: {s: "1.4em", m:"1.8rem"}}}/>
          </a>
          <a
            href="https://www.instagram.com/ayd_xu/"
            target="_blank"
            className="link iconLink"
          >
            <InstagramIcon sx={{fontSize: {s: "1.4em", m:"1.8rem"}}}/>
          </a>
          <a
            href="mailto: aydenxunc@gmail.com"
            target="_blank"
            className="link iconLink"
          >
            <EmailIcon sx={{fontSize: {s: "1.4em", m:"1.8rem"}}}/>
          </a>
      </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
