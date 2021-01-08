import React, { useState, useRef, useEffect, useMemo } from "react";
import FlipCard from "../sampleCardsFeature/FlipCard";
import i18next from "i18next";
import { cards, cards_unavailable } from "../../util/cards";

interface ICardStack {
  language: string;
  cardOnTop: number;
}

const CardStack: React.FC<ICardStack> = ({ language, cardOnTop }) => {
  console.log(screen.availWidth);
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

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  /**
   * Shuffle once,then add the cover card to the beginning &
   * sprinkle in the unavailable cards after every third card
   */
  const shuffledCards = useMemo(() => {
    const content = JSON.parse(JSON.stringify(shuffle(cards)));
    content.unshift({
      imgBack: "001.png",
      imgFront: "000.png",
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
          setCardNumber(`card ${shuffledCards[cardOnTop + 1].number}/50`);
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
      style={{ minHeight: "80%" }}
      className="w-full flex flex-col items-center justify-center md:pt-36 h-4/5 relative overflow-hidden"
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
      <div className="font-light flex justify-between w-10/12 sm:w-1/2 lg:w-2/6 xl:w-1/4">
        <p className="">{cardCategory}</p>
        <p className="">{cardNumber}</p>
      </div>
    </div>
  );
};

export default CardStack;
