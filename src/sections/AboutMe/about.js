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
          src="https://github.com/aydengemz/MyPortfolio/blob/main/public/profilepic.png?raw=true"
          alt="PFP"
        ></img>
        <div className="textSide">
          <p className="aboutTextBig">
            Hi! I am <span className="impor">Ayden</span>, 
            a Junior at{" "}
            <span className="impor">Carnegie Mellon University</span> originally from Chapel Hill, North Carolina.
            I'm currently studying Information Systems + AI. Currently, I am studying abroad in Copenhagen!
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
