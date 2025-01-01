import "../styles/Mobilecss/HomeMob.css";
import Ticker from "./Ticker";

import { useEffect } from "react";
import AOS from "aos";
import Flexboxmob from "./Flexboxmob";
import Projmoj from "./Projmoj";
import BentoGridMobile from "./BentoGridMobile";
import i from "../assets/pictures/1.jpeg";
import i2 from "../assets/pictures/2.jpeg";
import i3 from "../assets/pictures/11.jpeg";
import i4 from "../assets/pictures/4.jpeg";
import i5 from "../assets/pictures/5.jpeg";
import i6 from "../assets/pictures/6.jpeg";
import i7 from "../assets/pictures/7.jpeg";
import i8 from "../assets/pictures/8.jpeg";
import i9 from "../assets/pictures/9.jpeg";
import i10 from "../assets/pictures/10.jpeg";
import Footer from "./Footer";
import RobotCarousel from "./RobotCarousel";
import r1 from "../assets/ROBOTS/robot.png";
import r2 from "../assets/ROBOTS/robot2.png";
import r3 from "../assets/ROBOTS/robot3.png";
import r4 from "../assets/ROBOTS/robot1.png";
import MobileNavbar from "./MobileNavbar";

const robotImages = [r1, r2, r3, r4];

const HomePageMobile = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const galleryImages = [i, i2, i3, i4, i5, i6, i7, i8, i9, i10];
  return (
    <>
      <div className="screen">
        <MobileNavbar />

        <div className="mobile-animation">
          <RobotCarousel robots={robotImages} />
        </div>

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
        <div className="exptext-mob">Projects</div>
        <div data-aos="fade-down" style={{ marginTop: "30px" }}>
          <Projmoj />
        </div>

        <div
          data-aos="fade-up"
          className="experience"
          style={{ paddingBottom: "30px" }}
        >
          <div data-aos="fade-up" className="exptext-mob">
            Life Frames
          </div>
        </div>

        <BentoGridMobile images={galleryImages} />
        <Footer />

        <div className="gradient-line"></div>
      </div>
    </>
  );
};

export default HomePageMobile;
