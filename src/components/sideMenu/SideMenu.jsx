import "./SideMenu.css";

// Images
import close from "../../images/close.svg";

const SideMenu = ({ visible, setVisible, activeSection, setActiveSection }) => {
  const goToSections = (index) => {
    setVisible(false);
    setActiveSection(index);
  };

  return (
    <div id="sideMenu" className={visible ? "active" : null}>
      <img src={close} alt="close" onClick={() => setVisible(false)} />
      <div
        href="#home"
        className={activeSection === 0 ? "active" : null}
        onClick={() => goToSections(0)}
      >
        Home
      </div>
      <div
        href="#about"
        className={activeSection === 1 ? "active" : null}
        onClick={() => goToSections(1)}
      >
        About
      </div>
      <div
        href="#skills"
        className={activeSection === 2 ? "active" : null}
        onClick={() => goToSections(2)}
      >
        Skills
      </div>
      <div
        href="#experiences"
        className={activeSection === 3 ? "active" : null}
        onClick={() => goToSections(3)}
      >
        Experiences
      </div>
      <div
        href="#portfolio"
        className={activeSection === 4 ? "active" : null}
        onClick={() => goToSections(4)}
      >
        Portfolio
      </div>
      <div
        href="#contact"
        className={activeSection === 5 ? "active" : null}
        onClick={() => goToSections(5)}
      >
        Contact
      </div>
    </div>
  );
};

export default SideMenu;
