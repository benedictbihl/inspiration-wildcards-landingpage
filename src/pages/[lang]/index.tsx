import React, { useState, useRef, useEffect } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import i18next from "i18next";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import FlipCard from "../../components/sampleCardsFeature/FlipCard";
import Link from "next/link";

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
        cardRefs.current[index].style.top = 5 * index + "px";
        cardRefs.current[index].style.left = 5 * index + "px";
      });
    } else {
      if (cardRefs.current.length > 0) {
        cardRefs.current.map((card, index) => {
          card.style.animationName = "";
          const currentZIndex = parseInt(card.style.zIndex);
          const currentPos = parseInt(card.style.left); //used for left & top
          const maxShift = (cardRefs.current.length - 1) * 5; //how much the last card should shift
          card.style.zIndex =
            currentZIndex === cardRefs.current.length - 1
              ? 0
              : currentZIndex + 1;
          card.style.left =
            currentPos === 0 ? maxShift + "px" : currentPos - 5 + "px";
          card.style.top =
            currentPos === 0 ? maxShift + "px" : currentPos - 5 + "px";
        });
        cardRefs.current[cardOnTop].style.animationName = "frontToBack";
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
        <div className="w-full flex flex-col items-center justify-center md:pt-36 h-4/5 relative overflow-hidden">
          <figure className="stack w-11/12 mx-auto md:w-1/4">
            <div className="card one" ref={addToRefs}>
              <FlipCard
                imageFront={`/img/cards/InspirationWildCard_${language}_100.png`}
                imageBack={`/img/cards/InspirationWildCard_${language}_101.png`}
              />
            </div>
            <div className="card two" ref={addToRefs}>
              <FlipCard
                imageFront={`/img/cards/InspirationWildCard_${language}_200.png`}
                imageBack={`/img/cards/InspirationWildCard_${language}_201.png`}
              />
            </div>
            <div className="card three" ref={addToRefs}>
              <FlipCard
                imageFront={`/img/cards/InspirationWildCard_${language}_300.png`}
                imageBack={`/img/cards/InspirationWildCard_${language}_303.png`}
              />
            </div>
            <div className="card four" ref={addToRefs}>
              <FlipCard
                imageFront={`/img/cards/InspirationWildCard_${language}_400.png`}
                imageBack={`/img/cards/InspirationWildCard_${language}_401.png`}
              />
            </div>
            <div className="card five" ref={addToRefs}>
              <FlipCard
                imageFront={`/img/cards/InspirationWildCard_${language}_500.png`}
                imageBack={`/img/cards/InspirationWildCard_${language}_501.png`}
              />
            </div>
          </figure>
          <p
            style={{ left: "20px" }}
            className="font-light mt-2 mx-auto w-10/12 md:w-1/4 relative"
          >
            {i18next.t("index.explanation")}
          </p>
        </div>
        <div className="h-1/5 w-10/12 mx-auto md:w-1/4 flex items-start justify-between">
          <Link prefetch={false} href={`/[lang]/buy`} as={`/${language}/buy`}>
            <button
              type="button"
              className="text-base md:text-xl xl:text-2xl font-light mt-8 px-4 md:px-8 py-1 border-2 border-accent rounded-full hover:text-accent"
            >
              {i18next.t("index.buyBtn")}
            </button>
          </Link>
          <button
            className="text-base md:text-xl xl:text-2xl font-semibold text-primary mt-8 px-4 md:px-8 py-1 border-2 border-accent rounded-full bg-accent hover:text-secondary"
            onClick={() =>
              cardOnTop === cardRefs.current.length - 1
                ? setCardOnTop(0)
                : setCardOnTop(cardOnTop + 1)
            }
          >
            {i18next.t("index.nextBtn")}
          </button>
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
