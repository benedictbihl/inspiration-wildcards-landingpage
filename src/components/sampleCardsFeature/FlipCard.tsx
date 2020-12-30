import React, { useState } from "react";

interface IFlipCard {
  imageFront: string;
  imageBack: string;
  className?: string;
}
const FlipCard: React.FC<IFlipCard> = ({
  imageFront,
  imageBack,
  className
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={`flip-card ${className ? className : ""}`}>
      <div
        className="flip-card-inner"
        onClick={() => setIsFlipped(!isFlipped)}
        style={isFlipped ? { transform: "rotateY(180deg)" } : null}
      >
        <div className="flip-card-front">
          <img src={imageFront} alt="Card Front" />
        </div>
        <div className="flip-card-back">
          <img src={imageBack} alt="Card Back" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
