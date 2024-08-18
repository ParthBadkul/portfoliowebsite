import React from "react";
import "../styles/FlexboxContainers.css";
import PepsiLogo from "../assets/pepsi-20330.svg";
import SynergyLogo from "../assets/synergy.svg";
import GamePointLogo from "../assets/gamepoint.svg";
import SafeoutsLogo from "../assets/safeouts.svg";

const FlexboxContainers: React.FC = () => {
  return (
    <div className="flexbox-container">
      <div className="flexbox-item">
        {" "}
        <div className="item-content">
          <img src={PepsiLogo} alt="Pepsi Logo" className="company-logo" />
          <div className="company-details">
            <h2>PepsiCo</h2>
            <p>Sustain Analyst</p>
            <p>2023 - Current</p>
          </div>
        </div>
      </div>
      <div className="flexbox-item">
        {" "}
        <div className="item-content">
          <img src={SynergyLogo} alt="Pepsi Logo" className="company-logo" />
          <div className="company-details">
            <h2>Synergy</h2>
            <p>App Developer</p>
            <p>June-2022 | December-2022</p>
          </div>
        </div>
      </div>
      <div className="flexbox-item">
        {" "}
        <div className="item-content">
          <img src={GamePointLogo} alt="Pepsi Logo" className="company-logo" />
          <div className="company-details">
            <h2>GamePoint</h2>
            <p>App Developer</p>
            <p>January-2022 | March-2022</p>
          </div>
        </div>
      </div>
      <div className="flexbox-item">
        {" "}
        <div className="item-content">
          <img src={SafeoutsLogo} alt="Pepsi Logo" className="company-logo" />
          <div className="company-details">
            <h2>SafeOuts</h2>
            <p>Web Dev Intern</p>
            <p>September-2021 | November-2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexboxContainers;
