import "./Home.css";

// Images
import aliGhasemi from "../../images/Ali Ghasemi 4.jpg";
import EnvelopeIcon from "../../images/envelope";
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import TelegramIcon from "../../images/telegram";

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
            <LinkedinFilled style={{ color: darkMode ? "#fff" : "#000" }} />
            <a href="https://www.linkedin.com/in/alighasemi13781999">
              Ali Ghasemi
            </a>
          </div>
          <div className="homeInfoContactOption">
            <GithubOutlined style={{ color: darkMode ? "#fff" : "#000" }} />
            <a href="https://github.com/hesanghasemi">Ali Ghasemi</a>
          </div>
          <div className="homeInfoContactOption">
            <EnvelopeIcon style={{ color: darkMode ? "#fff" : "#000" }} />
            <a href="mailto:hesanghasemi99@gmail.com">
              hesanghasemi99@gmail.com
            </a>
          </div>
          <div className="homeInfoContactOption">
            <TelegramIcon style={{ color: darkMode ? "#fff" : "#000" }} />
            <a href="https://t.me/Hesan_G">@Hesan_G</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
