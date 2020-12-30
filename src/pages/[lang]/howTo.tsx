import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import i18next from "i18next";
import Instructions from "../../components/howToPage/Instructions";
import FAQ from "../../components/howToPage/FAQ";

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
      <section className="flex w-full min-h-screen">
        <div className="hidden md:flex w-1/3  justify-center">
          <div className="styled-howToBG-left w-3/4 h-1/2 xxl:h-3/4"></div>
        </div>
        <div className="w-11/12 mx-auto md:w-1/3 flex items-center flex-col">
          <div>
            <Instructions />
            <FAQ />
          </div>
        </div>
        <div className="w-1/3 hidden md:flex justify-center items-end">
          <div className="styled-howToBG-right w-3/4 h-1/2 xxl:h-3/4"></div>
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
