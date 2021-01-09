import React, { useState, useRef, useEffect } from "react";

interface IFlipCard {
  wasFlipped?: (isFlipped: boolean) => boolean;
  imageFront: string;
  imageBack: string;
  className?: string;
  isFlippable?: boolean;
}
const FlipCard: React.FC<IFlipCard> = ({
  wasFlipped,
  imageFront,
  imageBack,
  className,
  isFlippable = true
}) => {
  const initialRender = useRef(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const innerCardRef = useRef<HTMLDivElement>(null);
  const setStyles = () => {
    if (isFlippable && isFlipped) return { transform: "rotateY(180deg)" };
  };
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (innerCardRef.current && !isFlippable) {
        innerCardRef.current.style.animationName = "wiggle";
        setTimeout(() => {
          innerCardRef.current.style.animationName = "";
        }, 600);
      }
    }
  }, [isFlipped]);

  //flip the card back everytime there is a change
  useEffect(() => {
    setIsFlipped(false);
  }, [wasFlipped]);

  return (
    <div
      onContextMenu={e => e.preventDefault()}
      className={`flip-card ${className ? className : ""}`}
    >
      <div
        ref={innerCardRef}
        className="flip-card-inner"
        onClick={() => setIsFlipped(!isFlipped)}
        style={setStyles()}
      >
        <div className="flip-card-front">
          <img
            className="flip-card-front-img"
            src={imageFront}
            alt="Card Front"
          />
        </div>
        <div className="flip-card-back">
          <img src={imageBack} alt="Card Back" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
