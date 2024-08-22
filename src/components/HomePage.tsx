import Spline from "@splinetool/react-spline";
import "../styles/HomePage.css";
import DateDisplay from "./DateDisplay";
import Ticker from "./Ticker";
import FlexboxContainers from "./FlexboxContainer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import FigmaLogo from "../assets/navbar assets/figma.svg";
import GithubLogo from "../assets/navbar assets/github.svg";
import LinkedInLogo from "../assets/navbar assets/linkedin.svg";
import InstagramLogo from "../assets/navbar assets/insta.svg";
import Projects from "./Projects";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="navbarPc1">
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
      <div className="bigContainer">
        <div className="grid-container">
          <div className="grid-item first-column">
            <div className="flexcol">
              <div className="f1">
                <div className="title">Parth Badkul</div>
              </div>
              <div className="f2">
                <div data-aos="fade-right" className="subheading">
                  I am a full-stack developer and animator focused on
                  aesthetics. I blend creativity with functionality, ensuring
                  that each element of my work contributes to a cohesive and
                  fluid digital experience. By paying attention to both design
                  and technical detail, I create visually engaging interfaces
                  that are intuitive and efficient, offering users an immersive
                  and seamless journey across digital platforms.
                </div>
              </div>
              <div className="f3">
                <a
                  href="https://www.linkedin.com/in/parth-badkul-35b62b217/"
                  className="learn-more-button"
                >
                  Lets Connect
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.828 4.854a.5.5 0 0 1 .682-.731l5 5a.5.5 0 0 1 0 .707l-5 5a.5.5 0 0 1-.682-.731L14.293 10H1.5a.5.5 0 0 1 0-1h12.793l-3.465-3.854z"
                    />
                  </svg>
                </a>
              </div>
              <div className="f4">
                <DateDisplay />
              </div>
            </div>
          </div>
          <div data-aos="fade-up-left" className="grid-item secon-column">
            <Spline
              onClick={() => {
                window.open("https://app.spline.design/@badkul191");
              }}
              className="robot"
              scene="https://prod.spline.design/tgmljp9bwWyIGs5P/scene.splinecode"
            />
          </div>
        </div>
      </div>
      <div className="flextwo">
        <div data-aos="fade-up" className="techstuff">
          TECH STUFF
        </div>

        <div className="tickerContainer">
          <Ticker />
        </div>

        <div data-aos="fade-up" className="experience">
          <div data-aos="fade-up" className="exptext">
            EXPERIENCE
          </div>
        </div>

        <div data-aos="fade-up" className="fcon">
          <FlexboxContainers />
        </div>

        <div data-aos="fade-up" className="experience pro">
          <div data-aos="fade-up" className="exptext">
            Projects
          </div>
        </div>

        <div data-aos="fade-down" className="fpro">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default HomePage;
