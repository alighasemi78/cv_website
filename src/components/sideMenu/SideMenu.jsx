import "./SideMenu.css";

// Images
import close from "../../images/close.svg";

// Functions
import { changeActiveSectionPosition } from "../../functions";

const SideMenu = ({ visible, setVisible, activeSection }) => {
  const goToSections = (index) => {
    setVisible(false);
    changeActiveSectionPosition(index);
  };

  const closeSideMenu = (e) => {
    if (e.target.id === "sideMenu") {
      setVisible(false);
    }
  };

  return (
    <div
      id="sideMenu"
      className={visible ? "active" : null}
      onClick={closeSideMenu}
    >
      <div id="sideMenuContent">
        <img src={close} alt="close" onClick={() => setVisible(false)} />
        <div
          className={activeSection === 0 ? "active" : null}
          onClick={() => goToSections(0)}
        >
          Home
        </div>
        <div
          className={activeSection === 1 ? "active" : null}
          onClick={() => goToSections(1)}
        >
          About
        </div>
        <div
          className={activeSection === 2 ? "active" : null}
          onClick={() => goToSections(2)}
        >
          What I do
        </div>
        <div
          className={activeSection === 3 ? "active" : null}
          onClick={() => goToSections(3)}
        >
          Skills
        </div>
        <div
          className={activeSection === 4 ? "active" : null}
          onClick={() => goToSections(4)}
        >
          Experiences
        </div>
        {/* <div
        className={activeSection === 5 ? "active" : null}
        onClick={() => goToSections(5)}
      >
        Portfolio
      </div> */}
        <div
          className={activeSection === 6 ? "active" : null}
          onClick={() => goToSections(6)}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
