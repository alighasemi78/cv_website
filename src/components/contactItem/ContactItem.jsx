import "./ContactItem.css";

const ContactItem = ({ image, title, value, link }) => {
  return (
    <a href={link} className="contactItem">
      <div className="contactItemImage">
        <img src={image} alt="" />
      </div>
      <div className="contactItemTitle">{title}</div>
      <div className="contactItemValue">{value}</div>
    </a>
  );
};

export default ContactItem;
