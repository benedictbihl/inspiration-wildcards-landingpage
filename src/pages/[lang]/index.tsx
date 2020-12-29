import Link from "next/link";
import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import i18next from "i18next";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const LangIndex: NextPage = ({ language }) => {
  return (
    <Layout>
      <h1 className="mt-5 mb-5 text-4xl font-bold">index.js</h1>
      <div>
        {i18next.t("language")}: {language}
      </div>
      <Link prefetch={false} href={`/[lang]/test`} as={`/${language}/test`}>
        <a className="text-blue-600">/{language}/test</a>
      </Link>
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
