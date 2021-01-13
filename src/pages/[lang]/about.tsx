import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import i18next from "i18next";
import Instructions from "../../components/howToPage/Instructions";
import FAQ from "../../components/howToPage/FAQ";
import FurtherInfo from "../../components/howToPage/FurtherInfo";
import {
  CarouselProvider,
  DotGroup,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import Carousel from "../../components/howToPage/Carousel";
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
          <CarouselProvider
            infinite
            naturalSlideWidth={16}
            naturalSlideHeight={9}
            totalSlides={5}
            className="w-full"
          >
            <div className="flex flex-col items-center w-full">
              <h1 className="font-bold text-3xl text-accent mx-auto w-11/12 md:w-1/3 xl:w-1/4 pb-4 pt-16 md:pt-28">
                {i18next.t("howTo.headline")}
              </h1>
              <p className="w-11/12 md:w-1/3 xl:w-1/4 font-light text-accent">
                {i18next.t("howTo.subheadline")}
              </p>
              <Carousel />
            </div>
            <div className="flex items-stretch justify-center w-2/3 sm:w-1/3 mx-auto mt-10 md:mt-5 mb-10">
              <ButtonBack className="px-4 focus:outline-none">
                <img
                  className="transform rotate-180"
                  src="/icon/chevron.svg"
                  alt=""
                />
              </ButtonBack>
              <DotGroup className="styled-dotgroup flex items-center justify-between w-full md:w-3/12 mx-4 md:mx-6" />
              <ButtonNext className="px-4 focus:outline-none">
                <img src="/icon/chevron.svg" alt="" />
              </ButtonNext>
            </div>
          </CarouselProvider>
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
