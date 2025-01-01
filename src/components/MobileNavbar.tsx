import { FC } from "react";
import FigmaLogo from "../assets/navbar assets/figma.svg";
import GithubLogo from "../assets/navbar assets/github.svg";
import LinkedInLogo from "../assets/navbar assets/linkedin.svg";
import InstagramLogo from "../assets/navbar assets/insta.svg";
import Datemob from "./Datemob";

const MobileNavbar: FC = () => {
  return (
    <nav className="mobile-navbar">
      <div className="mobile-nav-left">
        <Datemob />
      </div>

      <div className="mobile-nav-center">
        <h1>Parth Badkul</h1>
      </div>

      <div className="mobile-nav-right">
        <a
          href="https://www.framer.community/u/b85ad1c2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FigmaLogo} alt="Figma" />
        </a>
        <a
          href="https://github.com/ParthBadkul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubLogo} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/parth-badkul-35b62b217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInLogo} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/badkulparth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramLogo} alt="Instagram" />
        </a>
      </div>
    </nav>
  );
};

export default MobileNavbar;
