import React from "react";
import LanguageMenu from "./LanguageMenu";
import NavBar from "./NavBar";
import Link from "next/link";
import i18next from "i18next";
import { useRouter } from "next/router";

interface IHeader {
  language: string;
}
const Header: React.FC<IHeader> = ({ language }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="flex justify-between bg-secondary w-full fixed z-50">
      <LanguageMenu pathname={pathname} />
      <NavBar language={language} pathname={pathname} />
      <div className=" w-2/12 flex justify-end">
        <Link
          prefetch={false}
          href={`/[lang]/contact-and-imprint`}
          as={`/${language}/contact-and-imprint`}
        >
          <a
            className={`mr-6 styled-navbar-link ${
              pathname === "/[lang]/contact-and-imprint"
                ? "styled-navbar-link-active"
                : ""
            }`}
          >
            {i18next.t("siteMeta.titleImprint")}
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
