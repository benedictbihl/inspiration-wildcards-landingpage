import React, { useState, useRef, useEffect, useMemo } from "react";
import FlipCard from "./FlipCard";
import i18next from "i18next";
import { cards, cards_unavailable } from "../../util/cards";
import { shuffle } from "../../util/helper";
import { useSwipeable } from "react-swipeable";

interface ICardStack {
  language: string;
  cardOnTop: number;
  onSwipeLeft: () => void;
}

const CardStack: React.FC<ICardStack> = ({
  language,
  cardOnTop,
  onSwipeLeft
}) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onSwipeLeft(),
    trackMouse: true
  });

  const initialRender = useRef(true);
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const addToRefs = el => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  const [cardNumber, setCardNumber] = useState("");
  const [cardCategory, setCardCategory] = useState(
    i18next.t("index.explanation")
  );

  useEffect(() => {
    if (shuffledCards[cardOnTop + 1] === undefined || cardOnTop === -1) {
      setCardCategory(i18next.t("index.explanation"));
    } else {
      setCardCategory(
        //@ts-ignore
        i18next.t("index.category") +
          " " +
          i18next.t(shuffledCards[cardOnTop + 1].category)
      );
    }
  }, [language]);

  /**
   * Shuffle once,then add the cover card to the beginning &
   * sprinkle in the unavailable cards after every third card
   */
  const shuffledCards = useMemo(() => {
    const content = JSON.parse(JSON.stringify(shuffle(cards)));
    content.unshift({
      imgBack: "000.png",
      imgFront: "001.png",
      category: "",
      number: 1
    });
    const finalArr = JSON.parse(JSON.stringify(content));
    let ctr = 0;
    content.map((card, index) => {
      if (index > 0 && index % 3 === 0) {
        finalArr.splice(index, 0, cards_unavailable[ctr]);
        ctr++;
      }
    });
    return finalArr;
  }, []);

  /**
   * Set initial pos & zIndex of every card & skip animation on first render.
   * On every following render adjust zIndex and apply animationName
   */
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (cardRefs.current.length > 0) {
        cardRefs.current.map((card, index) => {
          card.style.animationName = "";
          const currentZIndex = parseInt(card.style.zIndex);
          const currentPos = parseInt(card.style.left); //used for left & top
          const maxShift = (cardRefs.current.length - 1) * 1; //how much the last card should shift
          card.style.zIndex =
            currentZIndex === cardRefs.current.length - 1
              ? 0
              : currentZIndex + 1;
          card.style.left =
            currentPos === 0 ? maxShift + "px" : currentPos - 1 + "px";
          card.style.top =
            currentPos === 0 ? maxShift + "px" : currentPos - 1 + "px";
        });
        cardRefs.current[cardOnTop].style.animationName =
          screen.availWidth < 768 ? "frontToBackMobile" : "frontToBack";
        if (shuffledCards[cardOnTop + 1] === undefined) {
          setCardNumber("");
          setCardCategory(i18next.t("index.explanation"));
        } else {
          setCardNumber(`${shuffledCards[cardOnTop + 1].number}/50`);
          setCardCategory(
            //@ts-ignore
            i18next.t("index.category") +
              " " +
              i18next.t(shuffledCards[cardOnTop + 1].category)
          );
        }
      }
    }
  }, [cardOnTop]);

  return (
    <div
      {...swipeHandlers}
      className=" flex flex-col items-center justify-start pt-16 md:pt-28 relative "
    >
      <figure className="stack w-full mx-auto">
        {shuffledCards.map((card, index) => {
          return (
            <div
              key={index}
              className="card"
              ref={addToRefs}
              style={{
                zIndex: shuffledCards.length - (index + 1),
                top: 1 * index + "px",
                left: 1 * index + "px"
              }}
            >
              <FlipCard
                isFlippable={!card.imgBack.includes("na")}
                wasFlipped={isFlipped => {
                  if (isFlipped) {
                    return true;
                  } else {
                    return false;
                  }
                }}
                imageFront={`/img/cards/InspirationWildCard_${language}_${card.imgFront}`}
                imageBack={`/img/cards/InspirationWildCard_${language}_${card.imgBack}`}
              />
            </div>
          );
        })}
      </figure>
      <div
        style={{
          width: "var(--width)"
        }}
        className="font-light relative flex justify-between mt-10 xxl:mt-20 mb-6 card-meta"
      >
        <p className="">{cardCategory}</p>
        <p className="">{cardNumber}</p>
      </div>
    </div>
  );
};

export default CardStack;
