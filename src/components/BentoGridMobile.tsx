import { useEffect, useState } from "react";

interface BentoGridProps {
  images: string[];
}

const BentoGridMobile = ({ images }: BentoGridProps) => {
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
      setIsTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    if (images.length > 0) {
      setCurrentImage(images[0]);
      const interval = setInterval(changeImage, 7000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="single-frame-mobile">
      {currentImage && (
        <div className="frame-container" data-aos="fade-up">
          <img
            src={currentImage}
            alt="Gallery item"
            loading="lazy"
            className={`frame-image ${
              isTransitioning ? "fade-out" : "fade-in"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default BentoGridMobile;
