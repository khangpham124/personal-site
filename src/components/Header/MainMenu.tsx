import ArrowDownIcon from "@/public/assets/icons/ArrowDownIcon";
import USER_ICON from "@/public/assets/icons/icon_user.png";

import LOGO from "@/public/assets/logo-ju.png";
import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import AuthForm from "../Auth/AuthForm";
import CartItem from "../CartItem/CartItem";
import SearchForm from "../SearchForm/SearchForm";
import styles from "./Header.module.css";
import { MyLink } from "./MyLink";
import { useAuth } from "../../context/AuthContext";

type Props = {
  isMobile: boolean;
};

const MainMenu: React.FC<Props> = () => {
  const auth = useAuth();
  const t = useTranslations("Navigation");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false); // to disable Can't perform a React state Warning
  const router = useRouter();
  // const { asPath, locale } = router;

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    // if (!toggleMenu) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }
  };

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    setDidMount(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      setDidMount(false);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (!didMount) {
    return null;
  }

  return (
    <>
      {/* ===== Main Navigation ===== */}
      <nav
        className={classNames(
          "w-full z-50 h-20 fixed top-0 left-0 right-0 lg:px-40px px-20px",
          {
            "top-0 shadow-md z-50": scrolled,
            "bg-transparent": !scrolled,
          }
        )}
      >
        <div className="w-full flex items-center justify-between h-full">
          <div className="flex justify-between relative z-1000 w-full">
            <Link href="/">
              <a className="logo-headder relative">
                <img
                  src={`https://teddycoder.click/assets/img/header/logo.svg`}
                  alt="Our Shop"
                />
                <span className="dot"></span>
              </a>
            </Link>
            <div
              className={`hamburger hamburger--slider ${
                toggleMenu ? `is-active` : ``
              }`}
            >
              <div className="hamburger-box" onClick={handleToggleMenu}>
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>

          <div className={`naviBar ${toggleMenu ? `active` : ``}`}>
            <ul>
              <li className="menu1">
                <a href="https://teddycoder.com/">HOME</a>
              </li>
              <li className="menu2">
                <a href="/about/">ABOUT</a>
              </li>
              <li className="menu3">
                <a href="/works/">WORKS</a>
              </li>
              <li className="menu4">
                <a href="/documents/">DOCUMENT</a>
              </li>
              <li className="menu5">
                <a href="/contact/">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
