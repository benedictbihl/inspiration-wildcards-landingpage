import React from "react";
import Link from "next/link";
import i18next from "i18next";

interface INavBar {
  language: string;
  pathname: string;
}
const NavBar: React.FC<INavBar> = ({ language, pathname }) => {
  return (
    <div className="flex justify-center w-8/12">
      <Link prefetch={false} href={`/[lang]/howTo`} as={`/${language}/howTo`}>
        <a
          className={`styled-navbar-link ${
            pathname === "/[lang]/howTo" ? "styled-navbar-link-active" : ""
          }`}
        >
          {i18next.t("siteMeta.titleHowTo")}
        </a>
      </Link>
      <Link prefetch={false} href={`/[lang]`} as={`/${language}`}>
        <a
          className={`styled-navbar-link ${
            pathname === "/[lang]" ? "styled-navbar-link-active" : ""
          }`}
        >
          {i18next.t("siteMeta.titleIndex")}
        </a>
      </Link>
      <Link prefetch={false} href={`/[lang]/buy`} as={`/${language}/buy`}>
        <a
          className={`styled-navbar-link ${
            pathname === "/[lang]/buy" ? "styled-navbar-link-active" : ""
          }`}
        >
          {i18next.t("siteMeta.titleBuy")}
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
