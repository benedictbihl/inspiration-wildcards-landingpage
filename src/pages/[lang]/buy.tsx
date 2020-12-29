import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

interface IBuyPage {
  language: string;
}

const BuyPage: NextPage<IBuyPage> = ({ language }) => {
  return <Layout language={language} title="" description="" />;
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
