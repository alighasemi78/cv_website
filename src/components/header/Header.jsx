import "./Header.css";

// Images
import MoonIcon from "../../images/moon";

// Components
import SwitchButton from "../switchButton/SwitchButton";

// Functions
import { changeActiveSectionPosition } from "../../functions";

import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";

const Header = ({
  setSideMenuVisible,
  activeSection,
  darkMode,
  setDarkMode,
}) => {
  useEffect(() => {
    if (darkMode) {
      document.getElementById("header").classList.add("dark");
    } else {
      document.getElementById("header").classList.remove("dark");
    }
  }, [darkMode]);

  const windowWidth = useWindowWidth();

  const changeActiveSection = (index) => {
    changeActiveSectionPosition(index);
  };

  return (
    <div id="header">
      <div id="headerContent">
        <SwitchButton darkMode={darkMode} setDarkMode={setDarkMode} />
        <MoonIcon
          style={{ color: darkMode ? "#fff" : "#000" }}
          id="headerMoon"
        />
        {windowWidth < 991 ? (
          <MenuOutlined
            style={{ color: darkMode ? "#fff" : "#000" }}
            id="headerHamburger"
            onClick={() => setSideMenuVisible(true)}
          />
        ) : (
          <>
            <div
              className={`headerOption${activeSection === 0 ? " active" : ""}`}
            >
              <div onClick={() => changeActiveSection(0)}>Home</div>
            </div>
            <div
              className={`headerOption${activeSection === 1 ? " active" : ""}`}
            >
              <div onClick={() => changeActiveSection(1)}>About</div>
            </div>
            <div
              className={`headerOption${activeSection === 2 ? " active" : ""}`}
            >
              <div onClick={() => changeActiveSection(2)}>What I do</div>
            </div>
            <div
              className={`headerOption${activeSection === 3 ? " active" : ""}`}
            >
              <div onClick={() => changeActiveSection(3)}>Skills</div>
            </div>
            <div
              className={`headerOption${activeSection === 4 ? " active" : ""}`}
            >
              <div onClick={() => changeActiveSection(4)}>Experiences</div>
            </div>
            {/* <div
            className={`headerOption${activeSection === 5 ? " active" : ""}`}
          >
            <div onClick={() => changeActiveSection(5)}>Portfolio</div>
          </div> */}
            <div
              className={`headerOption${activeSection === 6 ? " active" : ""}`}
            >
              <div onClick={() => changeActiveSection(6)}>Contact</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
