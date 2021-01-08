import React, { useState, useRef, useEffect } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import i18next from "i18next";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import FlipCard from "../../components/sampleCardsFeature/FlipCard";
import Link from "next/link";
import { cards } from "../../util/cards";

interface ILangIndex {
  language: string;
}

const LangIndex: NextPage<ILangIndex> = ({ language }) => {
  const initialRender = useRef(true);
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const addToRefs = el => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  const [cardOnTop, setCardOnTop] = useState<number>(-1); //-1 for first render
  const [cardNumber, setCardNumber] = useState("");
  const [cardCategory, setCardCategory] = useState(
    i18next.t("index.explanation")
  );

  /**
   * Set initial pos & zIndex of every card & skip animation on first render.
   * On every following render adjust zIndex and apply animationName
   */
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      cardRefs.current.map((card, index) => {
        cardRefs.current[index].style.zIndex =
          cardRefs.current.length - (index + 1);
        cardRefs.current[index].style.top = 1 * index + "px";
        cardRefs.current[index].style.left = 1 * index + "px";
      });
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
        cardRefs.current[cardOnTop].style.animationName = "frontToBack";
        if (cards[cardOnTop] === undefined) {
          setCardNumber("");
          setCardCategory(i18next.t("index.explanation"));
        } else {
          setCardNumber(`card ${cards[cardOnTop].number}/50`);
          setCardCategory(
            //@ts-ignore
            i18next.t("index.category") +
              " " +
              i18next.t(cards[cardOnTop].category)
          );
        }
      }
    }
  }, [cardOnTop]);

  return (
    <Layout
      language={language}
      title={i18next.t("siteMeta.titleIndex")}
      description={i18next.t("siteMeta.descriptionIndex")}
    >
      <section className="w-full flex flex-col items-center h-screen">
        <div className="w-11/12 h-screen">
          <div className="w-full flex flex-col items-center justify-center md:pt-36 h-4/5 relative overflow-hidden">
            <figure className="stack w-full mx-auto">
              <div className="card" ref={addToRefs}>
                <FlipCard
                  wasFlipped={isFlipped => {
                    if (isFlipped) {
                      return true;
                    } else {
                      return false;
                    }
                  }}
                  imageFront={`/img/cards/InspirationWildCard_de_000.png`}
                  imageBack={`/img/cards/InspirationWildCard_de_001.png`}
                />
              </div>
              {cards.map((card, index) => {
                return (
                  <div key={index} className="card" ref={addToRefs}>
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
            <div className="font-light text-secondary flex justify-between w-10/12 sm:w-1/2 lg:w-2/6 xl:w-1/4">
              <p className="">{cardCategory}</p>
              <p className="">{cardNumber}</p>
            </div>
          </div>
          <div className="h-1/5 mx-auto flex items-start justify-between sm:mt-6 w-10/12 sm:w-1/2 lg:w-2/6 xl:w-1/4 ">
            <Link prefetch={false} href={`/[lang]/buy`} as={`/${language}/buy`}>
              <button
                type="button"
                className="text-base md:text-xl xl:text-2xl font-light px-4 md:px-8 py-1 border-2 border-accent rounded-full hover:text-accent"
              >
                {i18next.t("index.buyBtn")}
              </button>
            </Link>
            <button
              className="text-base md:text-xl xl:text-2xl font-semibold text-primary  px-4 md:px-8 py-1 border-2 border-accent rounded-full bg-accent hover:text-secondary"
              onClick={() => {
                cardOnTop === cardRefs.current.length - 1
                  ? setCardOnTop(0)
                  : setCardOnTop(cardOnTop + 1);
              }}
            >
              {i18next.t("index.nextBtn")}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default LangIndex;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const language = getLanguage(params.lang);
  return {
    props: {
      language
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false
  };
};
