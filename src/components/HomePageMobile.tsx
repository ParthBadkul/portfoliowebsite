import Spline from "@splinetool/react-spline";
import "../styles/Mobilecss/HomeMob.css";
import Ticker from "./Ticker";

import FigmaLogo from "../assets/navbar assets/figma.svg";
import GithubLogo from "../assets/navbar assets/github.svg";
import LinkedInLogo from "../assets/navbar assets/linkedin.svg";
import InstagramLogo from "../assets/navbar assets/insta.svg";
import { useEffect } from "react";
import AOS from "aos";
import Datemob from "./Datemob";
import Flexboxmob from "./Flexboxmob";

const HomePageMobile = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="screen">
        <div className="navbar">
          <div className="c1">
            <Datemob />
          </div>
          <div className="c2">Parth Badkul</div>
          <div className="c3">
            <div className="icon1">
              <img
                src={FigmaLogo}
                alt="Figma"
                onClick={() => {
                  window.open("https://www.framer.community/u/b85ad1c2");
                }}
              />
            </div>
            <div className="icon2">
              <img
                src={GithubLogo}
                alt="GitHub"
                onClick={() => {
                  window.open("https://github.com/ParthBadkul");
                }}
              />
            </div>
            <div className="icon3">
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/parth-badkul-35b62b217/"
                  );
                }}
              />
            </div>
            <div className="icon4">
              <img
                src={InstagramLogo}
                onClick={() => {
                  window.open("https://www.instagram.com/badkulparth/");
                }}
                alt="Instagram"
              />
            </div>
          </div>
        </div>
        <Spline
          className="robotmob"
          style={{ width: "900px", margin: "0" }}
          scene="https://prod.spline.design/tgmljp9bwWyIGs5P/scene.splinecode"
        />

        <div className="subheadingmob">
          I am a full-stack developer and animator focused on aesthetics. I
          blend creativity with functionality, ensuring that each element of my
          work contributes to a cohesive and fluid digital experience. By paying
          attention to both design and technical detail, I create visually
          engaging interfaces that are intuitive and efficient, offering users
          an immersive and seamless journey across digital platforms.
        </div>

        <div data-aos="fade-up" className="techstuff mob">
          TECH STUFF
        </div>
        <div className="tickermob">
          <Ticker />
        </div>
        <div data-aos="fade-up" className="exptext-mob">
          EXPERIENCE
        </div>
        <div data-aos="fade-down" style={{ marginTop: "30px" }}>
          <Flexboxmob />
        </div>
      </div>
    </>
  );
};

export default HomePageMobile;
