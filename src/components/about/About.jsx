import "./About.css";

// Images
import about from "../../images/about-img.png";
import download from "../../images/download.svg";

// Files
import cv from "../../files/علی قاسمی_1400-2-27.pdf";

const About = () => {
  return (
    <div id="about">
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
          with the concepts of <strong>AI</strong> and <strong>ML</strong>. I
          got familiar with <strong>Python</strong> through University projects
          and assignments. Also, I have the <strong>Advanced</strong> English
          certificate from <strong>British Council</strong>. Currently, I'm
          getting ready for the <strong>Toefl</strong> test. Also, I'm good at:
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
          href={cv}
          target="_blank"
          rel="noreferrer"
          download="Ali Ghasemi's CV.pdf"
          id="aboutContentCV"
        >
          Download CV
          <img src={download} alt="download" />
        </a>
      </div>
    </div>
  );
};

export default About;
