import "./Contact.css";

// Images
import EnvelopeIcon from "../../images/envelope";
import TelegramIcon from "../../images/telegram";

// Components
import ContactItem from "../contactItem/ContactItem";
import {
  LinkedinFilled,
  SkypeFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Contact = ({ darkMode }) => {
  return (
    <div id="contact" className={darkMode ? "dark" : null}>
      <div id="contactTitle">Contact Me</div>
      <div id="contactContent">
        <ContactItem
          image={<EnvelopeIcon style={{ color: darkMode ? "#fff" : "#000" }} />}
          title="Email"
          value="hesanghasemi99@gmail.com"
          link="mailto:hesanghasemi99@gmail.com"
        />
        <ContactItem
          image={<SkypeFilled style={{ color: darkMode ? "#fff" : "#000" }} />}
          title="Skype"
          value="Ali Ghasemi"
          link="skype:live:.cid.ae0ede6705e47885?chat"
        />
        <ContactItem
          image={<TelegramIcon style={{ color: darkMode ? "#fff" : "#000" }} />}
          title="Telegram"
          value="Ali Ghasemi"
          link="https://t.me/Hesan_G"
        />
        <ContactItem
          image={
            <WhatsAppOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
          }
          title="WhatsApp"
          value="Ali Ghasemi"
          link="https://api.whatsapp.com/send?phone=989028336171"
        />
        <ContactItem
          image={
            <LinkedinFilled style={{ color: darkMode ? "#fff" : "#000" }} />
          }
          title="LinkedIn"
          value="Ali Ghasemi"
          link="https://www.linkedin.com/in/alighasemi13781999"
        />
      </div>
    </div>
  );
};

export default Contact;
