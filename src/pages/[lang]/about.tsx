import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import i18next from "i18next";
import Instructions from "../../components/howToPage/Instructions";
import FAQ from "../../components/howToPage/FAQ";
import FurtherInfo from "../../components/howToPage/FurtherInfo";

interface IHowToPage {
  language: string;
}

const HowToPage: NextPage<IHowToPage> = ({ language }) => {
  return (
    <Layout
      language={language}
      title={i18next.t("siteMeta.titleHowTo")}
      description={i18next.t("siteMeta.descriptionHowTo")}
    >
      <section className="flex w-full min-h-screen text-lg">
        <div className="flex flex-col items-center w-full">
          <div className="md:min-h-screen flex flex-col items-center w-full">
            <h1 className="font-bold text-3xl text-accent w-11/12 md:w-1/3 xl:w-1/4 pb-4 pt-16 md:pt-28">
              {i18next.t("howTo.headline")}
            </h1>
            <p className="w-11/12 md:w-1/3 xl:w-1/4 font-light text-accent">
              {i18next.t("howTo.subheadline")}
            </p>
            <img
              className="max-w-screen w-full md:w-4/6 mx-auto"
              src="/img/cards_box_ad_01.png"
            />
          </div>
          <div className="flex w-full min-h-screen">
            <div className="hidden md:flex w-1/3 justify-center">
              <div className="styled-howToBG-left w-3/4 h-1/2 xxl:h-3/4"></div>
            </div>
            <div className="w-11/12 mx-auto md:w-1/3 xl:w-1/4 flex items-center flex-col">
              <div>
                <div className="w-full flex flex-col items-center">
                  <p className=" font-light text-accent">
                    {i18next.t("howTo.description")}
                  </p>
                  <img className="pt-6 pb-12" src="/img/card_icons.png" />
                </div>
                <Instructions />
                <FurtherInfo />
                <FAQ />
              </div>
            </div>
            <div className="w-1/3 hidden md:flex justify-center items-end">
              <div className="styled-howToBG-right w-3/4 h-1/2 xxl:h-3/4"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowToPage;

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
