import "./SkillsProgress.css";

const SkillsProgress = ({ name, percent }) => {
  return (
    <div className="skillsProgress">
      <div className="skillsProgressHeader">
        <div>{name}</div>
        <div>{percent}%</div>
      </div>
      <div className="skillsProgressContainer">
        <div
          className="skillsProgressPercent"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillsProgress;
