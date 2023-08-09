import "./about.css";

const About = () => {
  return (
    <div id="about" className="firstCont center">
      <div className="AboutSide">
        <h2 id="vertHeader">About Me :D</h2>
        <img src="../../../profile.png" alt="PFP"></img>
        <div className="textSide">
          <p className="aboutTextBig">
            Hi! My name is <span className="impor">Ayden</span> and I am
            currently a sophomore at{" "}
            <span className="impor">Carnegie Mellon University. </span>
            I've always had a passion for{" "}
            <span className="impor">Web Development</span>, but recently I have
            developed an inerest for
            <span className="impor">AI/Machine Learning!</span> In my free time
            I also like to{" "}
            <span className="impor">travel, swim, and play piano.</span> Overall
            though, I am a spontaneous person and just like to go with the flow.
          </p>
          <div className="aboutTextSmall">
            <span>Technologies I've been using: </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
