import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

interface IHowToPage {
  language: string;
}

const HowToPage: NextPage<IHowToPage> = ({ language }) => {
  return <Layout language={language} title="" description="" />;
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
