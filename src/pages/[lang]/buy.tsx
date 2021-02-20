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
      showFooter={false}
      language={language}
      title={i18next.t("siteMeta.titleBuy")}
      description={i18next.t("siteMeta.descriptionBuy")}
    >
      <section className="flex w-full justify-center text-lg  ">
        <div className="w-full mx-auto flex items-center flex-col min-h-screen">
          <div className="w-full pt-16 md:pt-28 flex-grow">
            <h2 className="text-accent font-semibold text-4xl pb-6 w-11/12 md:w-1/3 xl:w-1/4 mx-auto text-left">
              {i18next.t("buy.headline")}
            </h2>
            <p className="text-lg font-light mb-8 w-11/12 md:w-1/3 xl:w-1/4 mx-auto text-left">
              {i18next.t("buy.subheadline")}
            </p>
            <div className="w-11/12 md:w-2/3 mx-auto flex flex-col md:flex-row">
              <div className="w-11/12 mx-auto md:w-1/2 mb-4">
                <div className="w-full flex flex-col items-center mb-4">
                  <span className="font-semibold text-xl text-accent text-center md:text-left">
                    English
                    <br /> “Inspiration Wildcards”
                    <br />
                    <span className="font-light">
                      {i18next.t("buy.isbn_EN")}
                    </span>
                  </span>
                </div>
                <img
                  className="mx-auto mb-4"
                  src="/img/cards_EN.png"
                  alt="cards"
                />
                <div className="md:w-4/6 mx-auto">
                  <p className="styled-buy-btn flex-grow">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={i18next.t("buy.LOGOS_link_EN")}
                    >
                      <img src="/img/button_logos_en.png"></img>
                    </a>
                  </p>
                  <p className="styled-buy-btn">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={i18next.t("buy.AMZN_link_EN")}
                    >
                      <img src="/img/button_amazon_en.png"></img>
                    </a>
                  </p>
                  <p className="styled-buy-btn">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={i18next.t("buy.GOOGLE_link_EN")}
                    >
                      <img src="/img/button_google_en.png"></img>
                    </a>
                  </p>
                  <p className="styled-buy-btn">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={i18next.t("buy.GOOGLE_link_2_EN")}
                    >
                      <img src="/img/button_google_en2.png"></img>
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-0 w-11/12 mx-auto md:w-1/2 mb-4">
                <div className="w-full flex flex-col items-center mb-4">
                  <span className="font-semibold text-xl text-accent text-center md:text-left">
                    Deutsch
                    <br /> „Wildcards der Inspiration“
                    <br />
                    <span className="font-light">
                      {i18next.t("buy.isbn_DE")}
                    </span>
                  </span>
                </div>
                <img
                  className="mx-auto mb-4"
                  src="/img/cards_DE.png"
                  alt="cards"
                />

                <div className="md:w-4/6 mx-auto">
                  <p className="styled-buy-btn">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={i18next.t("buy.LOGOS_link_DE")}
                    >
                      <img src="/img/button_logos_de.png"></img>
                    </a>
                  </p>
                  <p className="styled-buy-btn">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={i18next.t("buy.AMZN_link_DE")}
                    >
                      <img src="/img/button_amazon_de.png"></img>
                    </a>
                  </p>
                  <p className="styled-buy-btn">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={i18next.t("buy.GOOGLE_link_DE")}
                    >
                      <img src="/img/button_google_de.png"></img>
                    </a>
                  </p>
                  <p className="styled-buy-btn">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={i18next.t("buy.GOOGLE_link_2_DE")}
                    >
                      <img src="/img/button_google_de2.png"></img>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer className="w-full bottom-0 flex justify-center pb-6 pt-10">
            <p className="mx-auto text-center">
              <span className="text-secondary">©2019-2021 Jens Mühlstedt</span>
            </p>
          </footer>
        </div>
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
