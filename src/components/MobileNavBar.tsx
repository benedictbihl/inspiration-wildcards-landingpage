import React from "react";
import Link from "next/link";
import i18next from "i18next";

interface IMobileNavBar {
  language: string;
  pathname: string;
  className?: string;
}
const MobileNavBar: React.FC<IMobileNavBar> = ({
  language,
  pathname,
  className
}) => {
  return (
    <div className={`justify-center w-8/12 z-50 ${className}`}>
      <Link prefetch={false} href={`/[lang]/howTo`} as={`/${language}/howTo`}>
        <a
          className={`styled-navbar-link-mobile ${
            pathname === "/[lang]/howTo"
              ? "styled-navbar-link-mobile-active"
              : ""
          }`}
        >
          {i18next.t("siteMeta.titleHowTo")}
        </a>
      </Link>
      <Link prefetch={false} href={`/[lang]`} as={`/${language}`}>
        <a
          className={`styled-navbar-link-mobile ${
            pathname === "/[lang]" ? "styled-navbar-link-mobile-active" : ""
          }`}
        >
          {i18next.t("siteMeta.titleIndex")}
        </a>
      </Link>
      <Link prefetch={false} href={`/[lang]/buy`} as={`/${language}/buy`}>
        <a
          className={`styled-navbar-link-mobile ${
            pathname === "/[lang]/buy" ? "styled-navbar-link-mobile-active" : ""
          }`}
        >
          {i18next.t("siteMeta.titleBuy")}
        </a>
      </Link>
    </div>
  );
};

export default MobileNavBar;
