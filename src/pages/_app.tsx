/* eslint-disable */

import "../i18n/init";
import "../styles/global.css";
import "../styles/sampleCardsFeature.css";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import i18next from "i18next";

const App = function({ Component, pageProps, router }: AppProps) {
  i18next.changeLanguage(pageProps.language);
  console.log(router.route);
  return router.route === "/" ? (
    <Component {...pageProps} key={router.route} />
  ) : (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
};

export default App;
