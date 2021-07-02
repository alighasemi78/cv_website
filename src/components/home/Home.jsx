import "./Home.css";

// Images
import aliGhasemi from "../../images/Ali Ghasemi 4.jpg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import envelope from "../../images/envelope.svg";
import telegram from "../../images/telegram.svg";

const Home = () => {
  return (
    <div id="home">
      <div id="homeImageOuterLayer">
        <img src={aliGhasemi} alt="aliGhasemi" />
      </div>
      <div id="homeInfo">
        <div id="homeInfoHello">Hello I'm</div>
        <div id="homeInfoName">Ali Ghasemi</div>
        <div id="homeInfoRole">React Developer</div>
        <div className="homeInfoContactOption">
          <img src={linkedin} alt="linkedin" />
          <a href="https://www.linkedin.com/in/alighasemi13781999">
            Ali Ghasemi
          </a>
        </div>
        <div className="homeInfoContactOption">
          <img src={github} alt="github" />
          <a href="https://github.com/hesanghasemi">Ali Ghasemi</a>
        </div>
        <div className="homeInfoContactOption">
          <img src={envelope} alt="envelope" />
          <a href="mailto:hesanghasemi99@gmail.com">hesanghasemi99@gmail.com</a>
        </div>
        <div className="homeInfoContactOption">
          <img src={telegram} alt="telegram" />
          <a href="https://t.me/Hesan_G">@Hesan_G</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
