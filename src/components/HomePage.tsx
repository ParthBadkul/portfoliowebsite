import Spline from "@splinetool/react-spline";
import "../styles/HomePage.css";
import DateDisplay from "./DateDisplay";
import Ticker from "./Ticker";
import FlexboxContainers from "./FlexboxContainer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bigContainer">
        <div className="grid-container">
          <div className="grid-item first-column">
            <div className="flexcol">
              <div className="f1">
                <div className="title">Parth Badkul</div>
              </div>
              <div className="f2">
                <div data-aos="fade-right" className="subheading">
                  Building a user interface is more than just designing
                  beautiful visuals; it’s about shaping an experience that feels
                  natural, captivating, and unforgettable. By merging technical
                  expertise with artistic vision, a well-executed UI draws users
                  in and leads them smoothly through every interaction. As a
                  full-stack developer and animator focused on aesthetics, I
                  strive to balance creativity with functionality, ensuring each
                  element contributes to a cohesive and fluid digital journey
                </div>
              </div>
              <div data-aos="fade-right" className="f3">
                <a
                  href="https://www.linkedin.com/in/parth-badkul-35b62b217/"
                  className="learn-more-button"
                >
                  Learn More
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
              className="robot"
              scene="https://prod.spline.design/tgmljp9bwWyIGs5P/scene.splinecode"
            />
          </div>
        </div>
      </div>

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
    </>
  );
};

export default HomePage;
