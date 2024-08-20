import Spline from "@splinetool/react-spline";
import "../styles/Mobilecss/HomeMob.css";
import Ticker from "./Ticker";

import FigmaLogo from "../assets/navbar assets/figma.svg";
import GithubLogo from "../assets/navbar assets/github.svg";
import LinkedInLogo from "../assets/navbar assets/linkedin.svg";
import InstagramLogo from "../assets/navbar assets/insta.svg";

const HomePageMobile = () => {
  return (
    <>
      <div className="screen">
        <div className="navbar">
          <div className="c1"> c1</div>
          <div className="c2">Parth Badkul</div>
          <div className="c3">
            <div className="icon1">
              <img src={FigmaLogo} alt="Figma" />
            </div>
            <div className="icon2">
              <img src={GithubLogo} alt="GitHub" />
            </div>
            <div className="icon3">
              <img src={LinkedInLogo} alt="LinkedIn" />
            </div>
            <div className="icon4">
              <img src={InstagramLogo} alt="Instagram" />
            </div>
          </div>
        </div>
        <div className="titlemob"></div>
        <Spline
          className="robotmob"
          scene="https://prod.spline.design/tgmljp9bwWyIGs5P/scene.splinecode"
        />

        <div className="sec2">Robo is working on it </div>
        <div className="sec2">Checkout the desktop site </div>
        <div className="tickermob">
          <Ticker />
        </div>
        <div
          style={{
            height: "500px",
          }}
        ></div>
      </div>
    </>
  );
};

export default HomePageMobile;
