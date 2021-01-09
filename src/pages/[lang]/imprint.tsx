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
      <section className="flex justify-center min-h-screen">
        <div className="pt-8 md:pt-28 mx-auto w-11/12 md:w-1/2">
          <h1 className="text-accent font-semibold text-4xl">Impressum</h1>
          <br></br>
          <p>
            ©2018-2021 Jens M&uuml;hlstedt
            <br />
            Zenettistr. 39
            <br />
            80337 M&uuml;nchen
          </p>
          <br />

          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>info@inspirationwildcards.com</p>
          <br />
          <h3 className="text-xl font-semibold">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
          <br />
          <h3 className="text-xl font-semibold">Cookies</h3>
          <p>Auf dieser Seite werden keine Cookies verwendet.</p>
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
