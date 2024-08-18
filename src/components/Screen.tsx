import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import HomePageMobile from "./HomePageMobile";

const Screen = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      {isDesktop ? (
        <HomePage />
      ) : (
        <div>
          <HomePageMobile />
        </div>
      )}
    </>
  );
};

export default Screen;
