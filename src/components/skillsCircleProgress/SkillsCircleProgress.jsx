import "./SkillsCircleProgress.css";

const SkillsCircleProgress = ({ name, percent }) => {
  return (
    <div className="skillsCircleProgress">
      <div className="skillsCircleProgressContent">
        <svg viewBox="0 0 100 100">
          <path
            d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
            stroke="rgba(255, 255, 255, 0.5)"
            stroke-width="5"
            fill-opacity="0"
          ></path>
          <path
            d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
            stroke="#a97afd"
            stroke-width="5"
            fill-opacity="0"
            style={{
              strokeDasharray: "298.493, 298.493",
              strokeDashoffset: ((100 - percent) * 298.493) / 100,
            }}
          ></path>
        </svg>
        <div className="skillsCircleProgressContentPercent">{percent}%</div>
      </div>
      <div className="skillsCircleProgressName">{name}</div>
    </div>
  );
};

export default SkillsCircleProgress;
