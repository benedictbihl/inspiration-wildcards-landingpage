import React from "react";
import Link from "next/link";
import i18next from "i18next";

interface INavBar {
  language: string;
  pathname: string;
  className?: string;
}
const NavBar: React.FC<INavBar> = ({ language, pathname, className }) => {
  return (
    <div className={`justify-center w-8/12 ${className}`}>
      <Link prefetch={false} href={`/[lang]/about`} as={`/${language}/about`}>
        <a
          className={`styled-navbar-link ${
            pathname === "/[lang]/about" ? "styled-navbar-link-active" : ""
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
