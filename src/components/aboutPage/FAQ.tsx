import React from "react";
import i18next from "i18next";

const FAQ: React.FC = () => {
  const QuestionSet = [
    { Q: "howTo.Question1", A: "howTo.Answer1" },
    { Q: "howTo.Question2", A: "howTo.Answer2" },
    { Q: "howTo.Question3", A: "howTo.Answer3" },
    { Q: "howTo.Question4", A: "howTo.Answer4" },
    { Q: "howTo.Question5", A: "howTo.Answer5" }
  ];
  return (
    <div className="styled-FAQ mt-20">
      <h3 className="font-semibold text-lg text-typo-active pb-4">
        {i18next.t("howTo.FAQ")}
      </h3>
      {QuestionSet.map((item, index) => {
        return (
          <div
            key={index}
            className={`${index === QuestionSet.length - 1 ? "" : "mb-10"}`}
          >
            <p className="font-semibold mb-1">{i18next.t(item.Q)}</p>
            <p className="font-light">{i18next.t(item.A)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
