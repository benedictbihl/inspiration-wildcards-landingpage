import React from "react";
import Head from "next/head";
import i18next from "i18next";
import Header from "./Header";

interface ILayout {
  title: string;
  description: string;
  language: string;
  showFooter?: boolean;
}

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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={i18next.t(description)} />
        <meta name="og:title" content={i18next.t(title)} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{i18next.t(title)}</title>
      </Head>
      <Header language={language} />
      <main>{children}</main>
      {showFooter && (
        <footer className="w-full bottom-0 flex justify-center py-6">
          <p className="mx-auto text-center">
            <span className="text-secondary"> ©2018-2021 Jens Mühlstedt</span>
          </p>
        </footer>
      )}
    </>
  );
};
export default Layout;
