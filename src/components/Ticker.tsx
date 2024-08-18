import React from "react";
import "../styles/Ticker.css"; // Make sure to create this CSS file
import ReactLogo from "../assets/react.svg";
import Css3Logo from "../assets/css3-logo.svg";

import FigmaLogo from "../assets/figma-logo.svg";
import FirebaseLogo from "../assets/firebase-logo.svg";
import FlutterLogo from "../assets/flutter-logo.svg";
import HtmlLogo from "../assets/html-5-logo.svg";
import NodeLogo from "../assets/nodejs-logo.svg";
import SqlLogo from "../assets/sql-logo.svg";
import SplineLogog from "../assets/spline.svg";
import FramerLogog from "../assets/framer-svgrepo-com.svg";

const logos = [
  { src: ReactLogo, alt: "React" },

  { src: FigmaLogo, alt: "Figma" },
  { src: FirebaseLogo, alt: "Firebase" },
  { src: FlutterLogo, alt: "Flutter" },
  { src: Css3Logo, alt: "CSS3" },
  { src: HtmlLogo, alt: "HTML5" },
  { src: NodeLogo, alt: "Node.js" },
  { src: SqlLogo, alt: "SQL" },
  {
    src: SplineLogog,
    alt: "Spline",
  },
  {
    src: FramerLogog,
    alt: "Spline",
  },
];

const extendedLogos = logos.concat(logos, logos, logos);

const Ticker: React.FC = () => {
  return (
    <div className="ticker-container">
      <div className="ticker">
        {extendedLogos.map((logo, index) => (
          <div className="ticker-item" key={index}>
            <img src={logo.src} alt={logo.alt} className="ticker-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
