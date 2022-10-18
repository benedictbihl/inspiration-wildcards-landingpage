import React from "react";
import Head from "next/head";
import i18next from "i18next";
import Header from "./Header";
import { motion } from "framer-motion";

interface ILayout {
  title: string;
  description: string;
  language: string;
  showFooter?: boolean;
}

const animation = {
  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.175, 0.85, 0.42, 0.96] }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.175, 0.85, 0.42, 0.96]
    }
  }
};

const Layout: React.FC<ILayout> = ({
  title,
  description,
  language,
  showFooter = true,
  children
}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={i18next.t(description)} />
        <meta name="og:title" content={i18next.t(title)} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{i18next.t(title)}</title>
      </Head>
      <Header language={language} />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={animation}>
          <main>{children}</main>
        </motion.div>
      </motion.div>
      {showFooter && (
        <footer className="w-full bottom-0 flex justify-center pb-6 pt-10">
          <p className="mx-auto text-center">
            <span className="text-secondary"> ©2019-2021 Jens Mühlstedt</span>
          </p>
        </footer>
      )}
    </>
  );
};
export default Layout;
