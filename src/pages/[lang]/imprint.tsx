import React from "react";
import Layout from "../../components/Layout";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import i18next from "i18next";

interface IContactAndImprintPage {
  language: string;
}

const ContactAndImprintPage: NextPage<IContactAndImprintPage> = ({
  language
}) => {
  return (
    <Layout
      language={language}
      title={i18next.t("siteMeta.titleImprint")}
      description={i18next.t("siteMeta.descriptionImprint")}
    >
      <section className="flex justify-center min-h-screen text-lg">
        <div className="pt-16 md:pt-28 mx-auto w-11/12 md:w-1/2">
          <h1 className="text-accent font-semibold text-4xl">Impressum</h1>
          <br></br>
          <p>
            ©2019-2021 Jens M&uuml;hlstedt
            <br />
            Zenettistr. 39
            <br />
            80337 M&uuml;nchen
          </p>
          <br />

          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            <a href="mailto:info@inspirationwildcards.com">
              info@inspirationwildcards.com
            </a>
          </p>
          <br />
          <h3 className="text-xl font-semibold">Urheberrecht</h3>
          <p>
            Die Inhalte und Werke auf diesen Seiten unterliegen dem
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
            jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
            Erstellers. Soweit Inhalte auf dieser Seite nicht vom Betreiber
            erstellt wurden, werden die Urheberrechte Dritter beachtet und als
            solche gekennzeichnet. Solltest Du trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
            entsprechenden Hinweis.
          </p>
          <br />
          <h3 className="text-xl font-semibold">Cookies</h3>
          <p>
            Keine Cookies auf dieser Seite verwendet, um diese übelst nervigen
            Popup-Fragen nicht zu benötigen. Geht auch ohne.
          </p>
        </div>
      </section>
    </Layout>
  );
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
