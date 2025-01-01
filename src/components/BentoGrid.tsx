import { useEffect, useState } from "react";

interface BentoGridProps {
  images: string[];
}

const BentoGrid = ({ images }: BentoGridProps) => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to shuffle images
  const shuffleImages = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const shuffled = [...images].sort(() => Math.random() - 0.5).slice(0, 6);
      setShuffledImages(shuffled);
      setIsTransitioning(false);
    }, 800); // Slower fade transition
  };

  useEffect(() => {
    shuffleImages();
    const interval = setInterval(shuffleImages, 7000); // Longer interval between changes
    return () => clearInterval(interval);
  }, [images]);

  const bentoLayouts = ["large", "", "tall", ""];

  return (
    <div className="bento-grid">
      {bentoLayouts.map((layout, index) => (
        <div
          key={index}
          className={`bento-item ${layout}`}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {shuffledImages[index] && (
            <img
              src={shuffledImages[index]}
              alt={`Gallery item ${index + 1}`}
              loading="lazy"
              className={`bento-image ${
                isTransitioning ? "fade-out" : "fade-in"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
