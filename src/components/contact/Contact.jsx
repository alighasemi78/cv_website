import "./Contact.css";

// Images
import envelopeBlack from "../../images/envelope-000000.svg";
import envelopeWhite from "../../images/envelope-ffffff.svg";
import skypeBlack from "../../images/skype-000000.svg";
import skypeWhite from "../../images/skype-ffffff.svg";
import telegramBlack from "../../images/telegram-000000.svg";
import telegramWhite from "../../images/telegram-ffffff.svg";
import whatsappBlack from "../../images/whatsapp-000000.svg";
import whatsappWhite from "../../images/whatsapp-ffffff.svg";
import linkedinBlack from "../../images/linkedin-000000.svg";
import linkedinWhite from "../../images/linkedin-ffffff.svg";

// Components
import ContactItem from "../contactItem/ContactItem";

const Contact = ({ darkMode }) => {
  return (
    <div id="contact" className={darkMode ? "dark" : null}>
      <div id="contactTitle">Contact Me</div>
      <div id="contactContent">
        <ContactItem
          image={darkMode ? envelopeWhite : envelopeBlack}
          title="Email"
          value="hesanghasemi99@gmail.com"
          link="mailto:hesanghasemi99@gmail.com"
        />
        <ContactItem
          image={darkMode ? skypeWhite : skypeBlack}
          title="Skype"
          value="Ali Ghasemi"
          link="skype:live:.cid.ae0ede6705e47885?chat"
        />
        <ContactItem
          image={darkMode ? telegramWhite : telegramBlack}
          title="Telegram"
          value="Ali Ghasemi"
          link="https://t.me/Hesan_G"
        />
        <ContactItem
          image={darkMode ? whatsappWhite : whatsappBlack}
          title="WhatsApp"
          value="Ali Ghasemi"
          link="https://api.whatsapp.com/send?phone=989028336171"
        />
        <ContactItem
          image={darkMode ? linkedinWhite : linkedinBlack}
          title="LinkedIn"
          value="Ali Ghasemi"
          link="https://www.linkedin.com/in/alighasemi13781999"
        />
      </div>
    </div>
  );
};

export default Contact;
