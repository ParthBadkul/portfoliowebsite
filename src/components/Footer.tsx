import { useState } from "react";
import Lottie from "lottie-react";
import i7 from "../assets/pictures/12.jpeg";
import "../styles/Footer.css";
import lazyCatAnimation from "../assets/cat.json";
import FigmaLogo from "../assets/navbar assets/figma.svg";
import GithubLogo from "../assets/navbar assets/github.svg";
import LinkedInLogo from "../assets/navbar assets/linkedin.svg";
import InstagramLogo from "../assets/navbar assets/insta.svg";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Column - Image with Overlaid Quote */}
        <div className="footer-left">
          <div className="footer-image-container">
            <img src={i7} alt="Footer" className="footer-image" />
            <div className="footer-quote-overlay">
              <p className="footer-quote">
                "I'm not lazy, I'm just conserving pixels."
              </p>
            </div>
          </div>
        </div>

        {/* Center - Lazy Cat Animation */}
        <div className="footer-center">
          <Lottie
            animationData={lazyCatAnimation}
            loop={true}
            autoplay={true}
            className="lazy-cat-animation"
          />
        </div>

        {/* Right Column - Contact and Social */}
        <div className="footer-right">
          <div
            className="email-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() =>
              (window.location.href = "mailto:badkul191@gmail.com")
            }
          >
            <h3 className="email-title">Email Me</h3>
            <div className="email-field">
              <HiMail className="email-icon" />
              <p className={`email-address ${isHovered ? "hovered" : ""}`}>
                badkul191@gmail.com
              </p>
            </div>
          </div>

          <div className="social-section">
            <h3 className="social-title">Socials</h3>
            <div className="social-grid">
              <a
                href="https://www.framer.community/u/b85ad1c2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FigmaLogo} alt="Figma" />
                <span>Figma</span>
              </a>
              <a
                href="https://github.com/ParthBadkul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubLogo} alt="GitHub" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/parth-badkul-35b62b217/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedInLogo} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/badkulparth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramLogo} alt="Instagram" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
