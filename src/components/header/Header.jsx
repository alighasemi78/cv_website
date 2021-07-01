import "./Header.css";

// Images
import hamburger from "../../images/Hamburger_icon.svg";

import { useWindowWidth } from "@react-hook/window-size/throttled";

const Header = ({ setSideMenuVisible, activeSection, setActiveSection }) => {
  const windowWidth = useWindowWidth();

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
            <div onClick={() => setActiveSection(0)}>Home</div>
          </div>
          <div
            className={`headerOption${activeSection === 1 ? " active" : ""}`}
          >
            <div onClick={() => setActiveSection(1)}>About</div>
          </div>
          <div
            className={`headerOption${activeSection === 2 ? " active" : ""}`}
          >
            <div onClick={() => setActiveSection(2)}>Skills</div>
          </div>
          <div
            className={`headerOption${activeSection === 3 ? " active" : ""}`}
          >
            <div onClick={() => setActiveSection(3)}>Experiences</div>
          </div>
          <div
            className={`headerOption${activeSection === 4 ? " active" : ""}`}
          >
            <div onClick={() => setActiveSection(4)}>Portfolio</div>
          </div>
          <div
            className={`headerOption${activeSection === 5 ? " active" : ""}`}
          >
            <div onClick={() => setActiveSection(5)}>Contact</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
