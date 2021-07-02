import "./Home.css";

// Images
import aliGhasemi from "../../images/Ali Ghasemi 4.jpg";
import linkedinBlack from "../../images/linkedin-000000.svg";
import linkedinWhite from "../../images/linkedin-ffffff.svg";
import githubBlack from "../../images/github-000000.svg";
import githubWhite from "../../images/github-ffffff.svg";
import envelopeBlack from "../../images/envelope-000000.svg";
import envelopeWhite from "../../images/envelope-ffffff.svg";
import telegramBlack from "../../images/telegram-000000.svg";
import telegramWhite from "../../images/telegram-ffffff.svg";

const Home = ({ darkMode }) => {
  return (
    <div id="home" className={darkMode ? "dark" : null}>
      <div id="homeOverlay">
        <div id="homeImageOuterLayer">
          <img src={aliGhasemi} alt="aliGhasemi" />
        </div>
        <div id="homeInfo">
          <div id="homeInfoHello">Hello I'm</div>
          <div id="homeInfoName">Ali Ghasemi</div>
          <div id="homeInfoRole">React Developer</div>
          <div className="homeInfoContactOption">
            <img
              src={darkMode ? linkedinWhite : linkedinBlack}
              alt="linkedin"
            />
            <a href="https://www.linkedin.com/in/alighasemi13781999">
              Ali Ghasemi
            </a>
          </div>
          <div className="homeInfoContactOption">
            <img src={darkMode ? githubWhite : githubBlack} alt="github" />
            <a href="https://github.com/hesanghasemi">Ali Ghasemi</a>
          </div>
          <div className="homeInfoContactOption">
            <img
              src={darkMode ? envelopeWhite : envelopeBlack}
              alt="envelope"
            />
            <a href="mailto:hesanghasemi99@gmail.com">
              hesanghasemi99@gmail.com
            </a>
          </div>
          <div className="homeInfoContactOption">
            <img
              src={darkMode ? telegramWhite : telegramBlack}
              alt="telegram"
            />
            <a href="https://t.me/Hesan_G">@Hesan_G</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
