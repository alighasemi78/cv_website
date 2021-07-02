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

const App = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    if (window.scrollY > 0) {
      document.getElementById("header").classList.add("active");
    } else {
      document.getElementById("header").classList.remove("active");
    }

    if (window.scrollY < document.getElementById("about").offsetTop) {
      setActiveSection(0);
    } else if (window.scrollY < document.getElementById("services").offsetTop) {
      setActiveSection(1);
    } else if (window.scrollY < document.getElementById("skills").offsetTop) {
      setActiveSection(2);
    } else {
      setActiveSection(3);
    }
  };

  return (
    <div id="app">
      <Header
        setSideMenuVisible={setSideMenuVisible}
        activeSection={activeSection}
      />
      <SideMenu
        visible={sideMenuVisible}
        setVisible={setSideMenuVisible}
        activeSection={activeSection}
      />
      <Home />
      <About />
      <Services />
      <Skills />
      <Experiences />
    </div>
  );
};

export default App;
