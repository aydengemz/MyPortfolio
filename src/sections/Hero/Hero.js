import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroCont center">
      <h1>
        <span className="name">Ayden Xu</span>
      </h1>
      <h2 className="title">Aspiring Full-Stack Developer</h2>

      <div className="contact center">
        <a href="" target="_blank">
            <span type="button" className="outlinedButton">
            Resume
          </span>
        </a>
          <a
            href="https://github.com/aydengemz"
            target="_blank"
            className="link iconLink"
          >
            <GitHubIcon />
            <div class="bar"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/aydenx/"
            target="_blank"
            className="link iconLink"
          >
            <LinkedInIcon />
            <div class="bar"></div>
          </a>
          <a
            href="https://www.instagram.com/ayd_xu/"
            target="_blank"
            className="link iconLink"
          >
            <InstagramIcon />
            <div class="bar"></div>
          </a>
          <a
            href="mailto: aydenxunc@gmail.com"
            target="_blank"
            className="link iconLink"
          >
            <EmailIcon />
            <div class="bar"></div>
          </a>
      </div>
    </div>
  );
};

export default Hero;
