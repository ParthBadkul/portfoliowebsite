import { useEffect, useState } from "react";

interface BentoGridProps {
  images: string[];
}

const BentoGridMobile = ({ images }: BentoGridProps) => {
  const [frameImages, setFrameImages] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getRandomImages = () => {
    // Get 4 random images for the 4 frames
    return Array(4)
      .fill(null)
      .map(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      });
  };

  const changeImages = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const newImages = getRandomImages();
      setFrameImages(newImages);
      setIsTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    if (images.length > 0) {
      changeImages();
      const interval = setInterval(changeImages, 7000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <>
      {frameImages.map((image, index) => (
        <div key={index} className="single-frame-mobile">
          <div className="frame-container" data-aos="fade-up">
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              loading="lazy"
              className={`frame-image ${
                isTransitioning ? "fade-out" : "fade-in"
              }`}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default BentoGridMobile;
