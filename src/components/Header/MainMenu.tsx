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
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false); // to disable Can't perform a React state Warning
  const router = useRouter();
  const { asPath, locale } = router;

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
          <div className={`w-full flex justify-between align-baseline h-full`}>
            {/* Ju Logo */}
            <div className="flex-1 flex justify-start cursor-pointer">
              <div className="w-[182px] flex items-center">
                <Link href="/">
                  <a className="w-[182px]">
                    <img
                      src={`https://teddycoder.com/assets/img/header/logo.svg`}
                      alt="Our Shop"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
