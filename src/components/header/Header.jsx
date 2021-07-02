import "./Header.css";

// Images
import hamburgerBlack from "../../images/Hamburger_icon-000000.svg";
import hamburgerWhite from "../../images/Hamburger_icon-ffffff.svg";
import moonBlack from "../../images/moon-000000.svg";
import moonWhite from "../../images/moon-ffffff.svg";

// Components
import SwitchButton from "../switchButton/SwitchButton";

// Functions
import { changeActiveSectionPosition } from "../../functions";

import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useEffect } from "react";

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
        <img
          src={darkMode ? moonWhite : moonBlack}
          alt="moon"
          id="headerMoon"
        />
        {windowWidth < 991 ? (
          <img
            src={darkMode ? hamburgerWhite : hamburgerBlack}
            alt="hamburger"
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
