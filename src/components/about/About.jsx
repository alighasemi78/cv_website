import "./About.css";

// Images
import about from "../../images/about-img.png";
import { DownloadOutlined } from "@ant-design/icons";

const About = ({ darkMode }) => {
  return (
    <div id="about" className={darkMode ? "dark" : null}>
      <img src={about} alt="about" />
      <div id="aboutContent">
        <div id="aboutContentTitle">About Me</div>
        <div id="aboutContentText">
          Hello, I'm Ali. I'm a computer engineering student @{" "}
          <a href="http://www.sharif.ir/home">
            Sharif University of Technology
          </a>
          . I'm currently the head of the <strong>React Front-End</strong> team
          @ <a href="https://marketmap.org/fa">Marketmap</a>. I'm also familiar
          with <strong>AI</strong> and <strong>ML</strong> with educational
          projects. I got familiar with <strong>Python</strong> through
          University projects and assignments. <strong>Toefl</strong> score of{" "}
          <strong>111</strong>. Moreover, I'm good at:
        </div>
        <div id="aboutContentSkills">
          <div>HTML</div>
          <div>CSS</div>
          <div>JS</div>
          <div>React.js</div>
          <div>Java</div>
          <div>Python</div>
        </div>
        <a
          href="https://github.com/hesanghasemi/cv_website/raw/master/src/files/CV.pdf"
          target="_blank"
          rel="noreferrer"
          download="CV.pdf"
          id="aboutContentCV"
        >
          Download CV
          <DownloadOutlined />
        </a>
      </div>
    </div>
  );
};

export default About;
