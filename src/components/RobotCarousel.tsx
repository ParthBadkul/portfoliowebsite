import { useEffect, useState } from "react";

interface RobotCarouselProps {
  robots: string[]; // Array of robot SVG paths
}

const RobotCarousel = ({ robots }: RobotCarouselProps) => {
  const [currentRobot, setCurrentRobot] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeRobot = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentRobot((prev) => (prev + 1) % robots.length);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(changeRobot, 3000); // Change robot every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="robot-carousel">
      <div className="robot-container">
        <img
          src={robots[currentRobot]}
          alt="Robot illustration"
          className={`robot-image ${isTransitioning ? "fade-out" : "fade-in"}`}
        />
      </div>
    </div>
  );
};

export default RobotCarousel;
