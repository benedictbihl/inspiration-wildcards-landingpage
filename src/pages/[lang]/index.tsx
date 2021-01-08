import React, { useState } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import i18next from "i18next";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cards } from "../../util/cards";

const DynamicCardstack = dynamic(
  () => import("../../components/index/CardStack"),
  { ssr: false }
);
interface ILangIndex {
  language: string;
}

const LangIndex: NextPage<ILangIndex> = ({ language }) => {
  const [cardOnTop, setCardOnTop] = useState<number>(-1); //-1 for first render

  return (
    <Layout
      language={language}
      title={i18next.t("siteMeta.titleIndex")}
      description={i18next.t("siteMeta.descriptionIndex")}
    >
      <section className="w-full flex flex-col items-center h-screen">
        <div className="w-11/12 h-screen">
          <DynamicCardstack language={language} cardOnTop={cardOnTop} />
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
                cardOnTop === cards.length + 3 //include the sprinkled in unavailable cards in CardStack.tsx
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
