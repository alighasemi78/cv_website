import "./ServiceItem.css";

const ServiceItem = ({ image, title, content, darkMode }) => {
  return (
    <div className={`serviceItem${darkMode ? " dark" : ""}`}>
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default ServiceItem;
