import "./Contact.css";

// Images
import envelope from "../../images/envelope.svg";
import skype from "../../images/skype.svg";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import linkedin from "../../images/linkedin.svg";

// Components
import ContactItem from "../contactItem/ContactItem";

const Contact = () => {
  return (
    <div id="contact">
      <div id="contactTitle">Contact Me</div>
      <div id="contactContent">
        <ContactItem
          image={envelope}
          title="Email"
          value="hesanghasemi99@gmail.com"
          link="mailto:hesanghasemi99@gmail.com"
        />
        <ContactItem
          image={skype}
          title="Skype"
          value="Ali Ghasemi"
          link="skype:live:.cid.ae0ede6705e47885?chat"
        />
        <ContactItem
          image={telegram}
          title="Telegram"
          value="Ali Ghasemi"
          link="https://t.me/Hesan_G"
        />
        <ContactItem
          image={whatsapp}
          title="WhatsApp"
          value="Ali Ghasemi"
          link="https://api.whatsapp.com/send?phone=989028336171"
        />
        <ContactItem
          image={linkedin}
          title="LinkedIn"
          value="Ali Ghasemi"
          link="https://www.linkedin.com/in/alighasemi13781999"
        />
      </div>
    </div>
  );
};

export default Contact;
