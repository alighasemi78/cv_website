import "./ExperienceItem.css";

const ExperienceItem = ({ title, place, time, link, description, skills }) => {
  return (
    <div className="experienceItem">
      <div className="experienceItemTitle">{title}</div>
      <a href={link} className="experienceItemPlace">
        {place}
      </a>
      <div className="experienceItemTime">{time}</div>
      {description !== undefined ? (
        <div className="experienceItemDescription">{description}</div>
      ) : (
        <li className="experienceItemSkills">
          {skills.map((skill, index) => (
            <ul key={index} className="experienceItemSkill">
              <div></div> {skill}
            </ul>
          ))}
        </li>
      )}
    </div>
  );
};

export default ExperienceItem;
