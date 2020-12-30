import React from "react";
import Link from "next/link";
import i18next from "i18next";

interface ILanguageMenu {
  pathname: string;
}

const LanguageMenu: React.FC<ILanguageMenu> = ({ pathname }) => {
  return (
    <div className="flex w-2/12 ml-4 py-2 md:ml-8 md:py-4 text-xl md:text-base z-40">
      <Link
        prefetch={false}
        href={pathname}
        as={pathname.replace(/\[lang\]/i, "de")}
      >
        <a
          className={`styled-language-link ${
            i18next.language === "de" ? "styled-language-link-active" : ""
          }`}
        >
          DE
        </a>
      </Link>
      |
      <Link
        prefetch={false}
        href={pathname}
        as={pathname.replace(/\[lang\]/i, "en")}
      >
        <a
          className={`styled-language-link ${
            i18next.language === "en" ? "styled-language-link-active" : ""
          }`}
        >
          EN
        </a>
      </Link>
    </div>
  );
};

export default LanguageMenu;
