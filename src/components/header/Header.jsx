import "./Header.css";

// Images
import hamburger from "../../images/Hamburger_icon.svg";

// Functions
import { changeActiveSectionPosition } from "../../functions";

import { useWindowWidth } from "@react-hook/window-size/throttled";

const Header = ({ setSideMenuVisible, activeSection }) => {
  const windowWidth = useWindowWidth();

  const changeActiveSection = (index) => {
    changeActiveSectionPosition(index);
  };

  return (
    <div id="header">
      {windowWidth < 991 ? (
        <img
          src={hamburger}
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
          <div
            className={`headerOption${activeSection === 5 ? " active" : ""}`}
          >
            <div onClick={() => changeActiveSection(5)}>Portfolio</div>
          </div>
          <div
            className={`headerOption${activeSection === 6 ? " active" : ""}`}
          >
            <div onClick={() => changeActiveSection(6)}>Contact</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
