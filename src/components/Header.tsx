import React, { useState, useRef } from "react";
import LanguageMenu from "./LanguageMenu";
import NavBar from "./NavBar";
import Link from "next/link";
import i18next from "i18next";
import { useRouter } from "next/router";
import Burger from "./Burger";
import MobileNavBar from "./MobileNavBar";

interface IHeader {
  language: string;
}
const Header: React.FC<IHeader> = ({ language }) => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="flex justify-between bg-secondary w-full absolute md:fixed z-50">
      <LanguageMenu pathname={pathname} />
      <div ref={node} className="md:hidden">
        <Burger
          open={open}
          setOpen={() => setOpen(!open)}
          aria-controls="main-menu"
        />
        <nav
          aria-hidden={!open}
          className={`flex flex-col justify-center bg-secondary h-screen text-center p-8 absolute top-0 right-0 transition-transform duration-700 ease-in-out w-full ${
            open ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <MobileNavBar
            language={language}
            pathname={pathname}
            className="flex flex-col w-1/2 mx-auto justify-center"
          />
          <div className=" w-11/12 flex justify-center mx-auto">
            <Link
              prefetch={false}
              href={`/[lang]/imprint`}
              as={`/${language}/imprint`}
            >
              <a
                className={`styled-navbar-link-mobile ${
                  pathname === "/[lang]/imprint"
                    ? "styled-navbar-link-mobile-active"
                    : ""
                }`}
              >
                {i18next.t("siteMeta.titleImprint")}
              </a>
            </Link>
          </div>
        </nav>
      </div>
      <NavBar
        language={language}
        pathname={pathname}
        className="md:flex hidden"
      />
      <div className=" w-2/12 md:flex hidden justify-end whitespace-nowrap">
        <Link
          prefetch={false}
          href={`/[lang]/imprint`}
          as={`/${language}/imprint`}
        >
          <a
            title={i18next.t("siteMeta.titleImprint")}
            className={`mr-6 styled-navbar-link ${
              pathname === "/[lang]/imprint" ? "styled-navbar-link-active" : ""
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
