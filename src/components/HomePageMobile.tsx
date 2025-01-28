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
    <div className="screen">
      <MobileNavbar />

      <section className="hero-section">
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
      </section>

      <section className="tech-section">
        <h2 data-aos="fade-up" className="section-heading">
          TECH STUFF
        </h2>
        <div className="tickermob">
          <Ticker />
        </div>
      </section>

      <section className="experience-section">
        <h2 data-aos="fade-up" className="section-heading">
          EXPERIENCE
        </h2>
        <div data-aos="fade-down" className="experience-content">
          <Flexboxmob />
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-heading">Projects</h2>
        <div data-aos="fade-down" className="projects-content">
          <Projmoj />
        </div>
      </section>

      <section className="gallery-section">
        <h2 data-aos="fade-up" className="section-heading">
          Life Frames
        </h2>
        <BentoGridMobile images={galleryImages} />
      </section>

      <Footer />
      <div className="gradient-line"></div>
    </div>
  );
};

export default HomePageMobile;
