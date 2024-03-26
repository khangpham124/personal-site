import Link from "next/link";
import { useTranslations } from "next-intl";
import FacebookLogo from "@/public/assets/icons/FacebookLogo";
import InstagramLogo from "@/public/assets/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HOME } from "@/constants/routes";

export default function Footer() {
  const t = useTranslations("Navigation");
  const { route } = useRouter();

  return (
    <>
      <div id="footer" className={`${styles.footerContainer}  `}>
        <div
          className={`lg:px-40px px-20px sm:px-8 md:px-12 ${styles.footerContents} flex flex-wrap`}
        >
          <div className="flex justify-between w-full">
            <ul className="flex">
              <li id="phone">
                <a href="tel">
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                </a>
              </li>
              <li id="mail" className="ml-4">
                <a href="mailto:khangpham421@gmail.com">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </a>
              </li>
              <li className="ml-4">
                <a href="skype:khangpham124" className="hvr-bob">
                  <i className="fa fa-skype"></i>
                </a>
              </li>
            </ul>
            <p>copyright © teddycoder.com - 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
