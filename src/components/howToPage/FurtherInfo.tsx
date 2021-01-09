import React from "react";
import i18next from "i18next";

const FurtherInfo = () => {
  return (
    <div className="styled-instructions mt-20">
      <h3 className="font-semibold text-lg text-typo-active pb-4">
        {i18next.t("howTo.futherInfo")}
      </h3>
      <p className=" font-light text-accent">
        {i18next.t("howTo.futherInfo_paragraph1_a")}
        <a
          className="underline"
          target="_blank"
          rel="noreferrer noopen"
          href="https://uxpamagazine.org/the-3-phases-of-inspiration-offload-look-around-go-wild-the-process-of-creating-ideas-in-design-experience-and-innovation-projects/"
        >
          {i18next.t("howTo.futherInfo_paragraph1_b")}
        </a>
        {i18next.t("howTo.futherInfo_paragraph1_c")}
      </p>
      <br />
      <p className=" font-light text-accent">
        {i18next.t("howTo.futherInfo_paragraph2_a")}
        <a
          className="underline"
          target="_blank"
          rel="noreferrer noopen"
          href="https://www.behance.net/gallery/107172801/Inspiration-Wild-Cards-%28Making-Of%29"
        >
          {i18next.t("howTo.futherInfo_paragraph2_b")}
        </a>
      </p>
      <br />
      <p className=" font-light text-accent">
        {i18next.t("howTo.futherInfo_paragraph3")}
        <a
          href="http://www.inspirationwildcards.com/inspirationwildcards_presskit_v1.zip"
          className="underline"
        >
          (.zip, 45mb).
        </a>
      </p>
      <a href="http://www.inspirationwildcards.com/inspirationwildcards_presskit_v1.zip">
        <img className="pt-6" src="/img/presskit_L2.png" />
      </a>
    </div>
  );
};

export default FurtherInfo;
