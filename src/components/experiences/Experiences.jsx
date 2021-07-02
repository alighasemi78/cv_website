import "./Experiences.css";

// Components
import ExperienceItem from "../experienceItem/ExperienceItem";

const Experiences = ({ darkMode }) => {
  return (
    <div id="experiences" className={darkMode ? "dark" : null}>
      <div id="experiencesOverlay">
        <div id="experiencesEducation">
          <div id="experiencesEducationTitle">Education</div>
          <ExperienceItem
            title="Computer Engineering"
            place="Sharif University of Technology"
            time="September 2018 - Now"
            link="http://www.sharif.ir/home"
            description="Sharif is the most competetive technical university in Iran. As a result, It's very hard to get to this university and one has to take the university entrance exam and get a very good result. I took the entrance exam in 2018 and I became 16 from about 140,000 students. That's how I got to Sharif."
          />
          <ExperienceItem
            title="HTML, CSS, JS"
            place="MFT"
            time="September 2019 - January 2020"
            link="https://www.mftplus.com/"
            description=""
          />
        </div>
        <div id="experiencesWork">
          <div id="experiencesWorkTitle">Work Experience</div>
          <ExperienceItem
            title="React Developer"
            place="Marketmap"
            time="March 2020 - Now"
            link="https://marketmap.org/fa"
            skills={["React", "Material UI", "Chart.js", "Antd"]}
          />
          <ExperienceItem
            title="React Developer"
            place="Safarbazi"
            time="August 2020 - November 2020"
            link="https://www.safarbazi.com/"
            skills={["React", "Antd", "OpenStreetMap"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
