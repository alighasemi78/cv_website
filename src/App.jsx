import { useEffect, useState } from "react";
import "./App.css";

// Components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SideMenu from "./components/sideMenu/SideMenu";
import About from "./components/about/About";

const App = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    switch (activeSection) {
      case 0:
        document
          .getElementById("home")
          .scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 1:
        document
          .getElementById("about")
          .scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 2:
        document
          .getElementById("home")
          .scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 3:
        document
          .getElementById("home")
          .scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 4:
        document
          .getElementById("home")
          .scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 5:
        document
          .getElementById("home")
          .scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      default:
        break;
    }
  }, [activeSection]);

  const onScroll = () => {
    if (window.scrollY > 0) {
      document.getElementById("header").classList.add("active");
    } else {
      document.getElementById("header").classList.remove("active");
    }
  };

  return (
    <div id="app">
      <Header
        setSideMenuVisible={setSideMenuVisible}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <SideMenu
        visible={sideMenuVisible}
        setVisible={setSideMenuVisible}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home />
      <About />
    </div>
  );
};

export default App;
