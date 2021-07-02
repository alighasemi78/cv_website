import "./SwitchButton.css";

const SwitchButton = ({ darkMode, setDarkMode }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchButton;
