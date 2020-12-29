import React from "react";
import Layout from "../../components/Layout";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";

interface IContactAndImprintPage {
  language: string;
}

const ContactAndImprintPage: NextPage<IContactAndImprintPage> = ({
  language
}) => {
  return <Layout language={language} title="" description="" />;
};

export default ContactAndImprintPage;

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
