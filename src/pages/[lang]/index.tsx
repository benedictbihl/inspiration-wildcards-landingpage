import React, { useState, Suspense } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import i18next from "i18next";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import Link from "next/link";
import { cards } from "../../util/cards";

const DynamicCardstack = React.lazy(() =>
  import("../../components/indexPage/CardStack")
);
interface ILangIndex {
  language: string;
}

const isServer = typeof window === "undefined";
const LangIndex: NextPage<ILangIndex> = ({ language }) => {
  const [cardOnTop, setCardOnTop] = useState<number>(-1); //-1 for first render
  return (
    <Layout
      showFooter={false}
      language={language}
      title={i18next.t("siteMeta.titleIndex")}
      description={i18next.t("siteMeta.descriptionIndex")}
    >
      <section className="w-full flex flex-col items-center h-screen">
        <div className="w-full h-screen flex flex-col justify-between">
          <div>
            {isServer ? (
              <div>ERROR</div>
            ) : (
              <Suspense
                fallback={
                  <div className="flex flex-col items-center justify-start pt-16 md:pt-28 relative ">
                    <div
                      style={{ width: "var(--width)", height: "var(--height)" }}
                      className="mx-auto flex justify-center items-center "
                    >
                      <div className="font-semibold text-lg">Loading...</div>
                    </div>
                    <div
                      style={{
                        width: "var(--width)"
                      }}
                      className="font-light relative flex justify-between my-10 card-meta"
                    >
                      <p className=""></p>
                      <p className=""></p>
                    </div>
                  </div>
                }
              >
                <DynamicCardstack language={language} cardOnTop={cardOnTop} />
              </Suspense>
            )}

            <div className=" mx-auto flex flex-col flex-grow items-center justify-between ">
              <div
                style={{
                  width: "var(--width)"
                }}
                className="flex justify-between relative mx-auto card-buttons"
              >
                <Link
                  prefetch={false}
                  href={`/[lang]/buy`}
                  as={`/${language}/buy`}
                >
                  <button
                    type="button"
                    className="focus:outline-none text-xl xl:text-2xl font-light px-4 md:px-8 mr-1 py-1 border-2 border-accent rounded-full hover:text-accent "
                  >
                    {i18next.t("index.buyBtn")}
                  </button>
                </Link>
                <button
                  className="focus:outline-none text-xl xl:text-2xl font-semibold text-primary ml-1 px-4 md:px-8 py-1 border-2 border-accent rounded-full bg-accent hover:text-secondary"
                  onClick={() => {
                    cardOnTop === cards.length + 3 //include the sprinkled in unavailable cards in CardStack.tsx
                      ? setCardOnTop(0)
                      : setCardOnTop(cardOnTop + 1);
                  }}
                >
                  {i18next.t("index.nextBtn")}
                </button>
              </div>
            </div>
          </div>
          <footer className="w-full bottom-0 flex justify-center py-6">
            <p className="mx-auto text-center">
              <span className="text-secondary">©2018-2021 Jens Mühlstedt</span>
            </p>
          </footer>
        </div>
      </section>
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
