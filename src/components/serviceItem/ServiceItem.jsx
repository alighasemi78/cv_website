import "./ServiceItem.css";

const ServiceItem = ({ image, title, content }) => {
  return (
    <div className="serviceItem">
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default ServiceItem;
