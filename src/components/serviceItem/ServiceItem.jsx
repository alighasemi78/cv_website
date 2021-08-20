import "./ServiceItem.css";

const ServiceItem = ({ image, title, content, darkMode }) => {
  return (
    <div className={`serviceItem${darkMode ? " dark" : ""}`}>
      {image}
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default ServiceItem;
