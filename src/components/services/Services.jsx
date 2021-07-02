import "./Services.css";

// Components
import ServiceItem from "../serviceItem/ServiceItem";

// Images
import code from "../../images/code.svg";

const Services = ({ darkMode }) => {
  return (
    <div id="services" className={darkMode ? "dark" : null}>
      <div id="servicesTitle">What I do</div>
      <ServiceItem
        image={code}
        title="Web Development"
        content="It's been over 1 year that I'm working as the head of the React Front-End team @ Marketmap. I've gained a rich experience and I'm comfortable to call myself a good web developer."
        darkMode={darkMode}
      />
    </div>
  );
};

export default Services;
