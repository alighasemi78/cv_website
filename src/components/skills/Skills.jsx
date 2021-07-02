import "./Skills.css";

// Components
import SkillsProgress from "../skillsProgress/SkillsProgress";
import SkillsCircleProgress from "../skillsCircleProgress/SkillsCircleProgress";

const Skills = () => {
  return (
    <div id="skills">
      <div id="skillsTechnical">
        <div id="skillsTechnicalTitle">Technical Skills</div>
        <SkillsProgress name="Javascript" percent={86} />
        <SkillsProgress name="HTML" percent={90} />
        <SkillsProgress name="CSS" percent={90} />
        <SkillsProgress name="Python" percent={68} />
      </div>
      <div id="skillsProfessional">
        <div id="skillsProfessionalTitle">Professional Skills</div>
        <div id="skillsProfessionalProgresses">
          <SkillsCircleProgress name="Communication" percent={95} />
          <SkillsCircleProgress name="Team Work" percent={85} />
          <SkillsCircleProgress name="Project Management" percent={80} />
          <SkillsCircleProgress name="Creativity" percent={75} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
