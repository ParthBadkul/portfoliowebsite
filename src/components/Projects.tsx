import "../styles/Projects.css";
import SocialWallLogo from "../assets/Projects assets/pp.png";
import FashoffLogo from "../assets/Projects assets/fashoff.png";
import GGLogo from "../assets/Projects assets/gg.png";
const Projects = () => {
  return (
    <div className="proflex">
      <div
        onClick={() => {
          window.open("https://github.com/ParthBadkul/social_wall");
        }}
        className="proItem"
      >
        <div className="proimg">
          <img className="prlogo" src={SocialWallLogo} alt="" />
        </div>
        <div className="discripton">
          {" "}
          <div className="title1">Walli</div>
          <div className="des">
            {" "}
            Social Walli is an app I built that lets anyone share their thoughts
            in a public space. It’s a simple, interactive social wall where
            people can post messages, ideas, or anything they want to say. The
            goal is to create a space where everyone feels free to express
            themselves. This project highlights my ability to design and develop
            user-friendly, community-focused applications.
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          window.open("https://github.com/ParthBadkul/fash0ff");
        }}
        className="proItem"
      >
        <div className="discripton">
          {" "}
          <div className="title1">FashOff</div>
          <div className="des">
            {" "}
            I developed Fashoff, a fashion app created with Flutter, where I
            handled both the UI/UX design and the development. The app has a
            sleek, modern interface designed for a seamless and stylish shopping
            experience. By blending elegant design with functionality, Fashoff
            offers users smooth navigation while exploring fashion products.
            This project showcases my expertise in both design and
            cross-platform development using Flutter.
          </div>
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/ParthBadkul/ModernLoginPager");
          }}
          className="proimg"
        >
          <img className="prlogo" src={FashoffLogo} alt="" />
        </div>
      </div>
      <div className="proItem">
        <div className="proimg">
          <img className="prlogo" src={GGLogo} alt="" />
        </div>
        <div className="discripton">
          {" "}
          <div className="title1">Auth App</div>
          <div className="des">
            {" "}
            This project is a minimalist and efficient login interface built
            using Flutter and powered by Google Firebase. It offers secure
            authentication with real-time validation and smooth animations. The
            design is clean and user-centric, featuring seamless login
            experiences for various authentication methods, including
            email/password and social logins.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
