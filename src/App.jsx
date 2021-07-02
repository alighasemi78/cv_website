import { useEffect, useState } from "react";
import "./App.css";

// Components
import Header from "./components/header/Header";
import SideMenu from "./components/sideMenu/SideMenu";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Contact from "./components/contact/Contact";

const App = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#100e17";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  }, [darkMode]);

  const onScroll = () => {
    if (window.scrollY > 0) {
      document.getElementById("header").classList.add("active");
    } else {
      document.getElementById("header").classList.remove("active");
    }

    if (window.scrollY < document.getElementById("about").offsetTop - 53) {
      setActiveSection(0);
    } else if (
      window.scrollY <
      document.getElementById("services").offsetTop - 53
    ) {
      setActiveSection(1);
    } else if (
      window.scrollY <
      document.getElementById("skills").offsetTop - 53
    ) {
      setActiveSection(2);
    } else if (
      window.scrollY <
      document.getElementById("experiences").offsetTop - 53
    ) {
      setActiveSection(3);
    } else if (
      window.scrollY <
      document.getElementById("contact").offsetTop - 53
    ) {
      setActiveSection(4);
    } else {
      setActiveSection(6);
    }
  };

  return (
    <div id="app">
      <Header
        setSideMenuVisible={setSideMenuVisible}
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <SideMenu
        visible={sideMenuVisible}
        setVisible={setSideMenuVisible}
        activeSection={activeSection}
      />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Experiences darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
