import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import i18next from "i18next";

interface IBuyPage {
  language: string;
}

const BuyPage: NextPage<IBuyPage> = ({ language }) => {
  return (
    <Layout
      language={language}
      title={i18next.t("siteMeta.titleBuy")}
      description={i18next.t("siteMeta.descriptionBuy")}
    >
      <section className="flex w-full justify-center ">
        {/* <div className="w-1/3 flex justify-center">
          <div className="styled-buyBG-left w-full h-1/2 xxl:h-3/4"></div>
        </div> */}
        <div className="w-11/12 mx-auto lg:w-2/3 flex items-center flex-col min-h-screen">
          <div className="pt-28">
            <h2 className="font-semibold text-3xl text-accent text-center pb-6">
              {i18next.t("buy.headline")}
            </h2>
            <p className="text-lg pb-4 text-center">
              {i18next.t("buy.subheadline")}
            </p>
            <div className="w-full flex flex-col lg:flex-row">
              <div className="w-11/12 mx-auto lg:w-1/2">
                <p className="text-center font-semibold text-xl">english</p>
                <img src="/img/CardsEN.png" alt="cards" />
                <p className="text-xl text-center pb-8">
                  {i18next.t("buy.isbn_EN")}
                </p>
                <p className="text-xl text-center hover:underline hover:text-accent">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={i18next.t("buy.LOGOS_link_EN")}
                  >
                    {i18next.t("buy.LOGOS_EN")}
                  </a>
                </p>
                <p className="text-xl text-center hover:underline hover:text-accent">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={i18next.t("buy.AMZN_link_EN")}
                  >
                    {i18next.t("buy.AMZN_EN")}
                  </a>
                </p>
                <p className="text-xl text-center hover:underline hover:text-accent">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={i18next.t("buy.GOOGLE_LINK_EN")}
                  >
                    {i18next.t("buy.GOOGLE_EN")}
                  </a>
                </p>
              </div>
              <div className="mt-8 lg:mt-0 w-11/12 mx-auto lg:w-1/2">
                <p className="text-center font-semibold text-xl">deutsch</p>
                <img src="/img/CardsDE.png" alt="cards" />
                <p className="text-xl text-center pb-8">
                  {i18next.t("buy.isbn_DE")}
                </p>
                <p className="text-xl text-center hover:underline hover:text-accent">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={i18next.t("buy.LOGOS_link_DE")}
                  >
                    {i18next.t("buy.LOGOS_DE")}
                  </a>
                </p>
                <p className="text-xl text-center hover:underline hover:text-accent">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={i18next.t("buy.AMZN_link_DE")}
                  >
                    {i18next.t("buy.AMZN_DE")}
                  </a>
                </p>
                <p className="text-xl text-center hover:underline hover:text-accent">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={i18next.t("buy.GOOGLE_LINK_DE")}
                  >
                    {i18next.t("buy.GOOGLE_DE")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-1/3 flex justify-center items-end">
          <div className="styled-buyBG-right w-full h-1/2 xxl:h-3/4"></div>
        </div> */}
      </section>
    </Layout>
  );
};

export default BuyPage;

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
