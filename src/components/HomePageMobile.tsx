import Spline from "@splinetool/react-spline";
import "../styles/Mobilecss/HomeMob.css";
import Ticker from "./Ticker";

const HomePageMobile = () => {
  return (
    <div className="screen">
      <div className="titlemob">Parth Badkul</div>
      <Spline
        className="robotmob"
        scene="https://prod.spline.design/tgmljp9bwWyIGs5P/scene.splinecode"
      />

      <div className="sec2">Robo is working on it </div>
      <div className="sec2">Checkout the desktop site </div>
      <div className="tickermob">
        <Ticker />
      </div>
    </div>
  );
};

export default HomePageMobile;
