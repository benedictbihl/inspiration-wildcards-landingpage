import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import i18next from "i18next";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const Test: NextPage = () => {
  return (
    <Layout>
      <h1 className="mt-5 mb-5 font-bold text-4xl">test.js</h1>
      <p>{i18next.t("helloWorld")}</p>
    </Layout>
  );
};

export default Test;

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
