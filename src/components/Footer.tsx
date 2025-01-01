import { useState } from "react";
import i7 from "../assets/pictures/12.jpeg";
import "../styles/Footer.css";

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
                "Design is not just what it looks like and feels like. Design is
                how it works."
              </p>
            </div>
          </div>
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
            <p className={`email-address ${isHovered ? "hovered" : ""}`}>
              badkul191@gmail.com
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://instagram.com/badkulparth"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/badkuparth"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/parth-badkul-35b62b217"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
