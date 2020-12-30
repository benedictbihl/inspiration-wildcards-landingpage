import React from "react";
import i18next from "i18next";

const Instructions: React.FC = () => {
  return (
    <div className="styled-instructions pt-14 md:pt-28">
      <h3 className="font-semibold text-lg text-typo-active pb-4">
        {i18next.t("howTo.headline")}
      </h3>
      <p className="font-light pb-4">{i18next.t("howTo.precondition")}</p>
      <ol className="font-semibold list-decimal list-inside">
        <li>{i18next.t("howTo.step1")}</li>
        <li>{i18next.t("howTo.step2")}</li>
        <li>{i18next.t("howTo.step3")}</li>
        <li>{i18next.t("howTo.step4")}</li>
        <li>{i18next.t("howTo.step5")}</li>
      </ol>
      <p className="font-light">{i18next.t("howTo.repeatUntilSuccess")}</p>
    </div>
  );
};

export default Instructions;
