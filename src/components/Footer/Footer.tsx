import Link from "next/link";
import { useTranslations } from "next-intl";
import FacebookLogo from "@/public/assets/icons/FacebookLogo";
import InstagramLogo from "@/public/assets/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";
import Image from "next/image";
import LOGO from "@/public/assets/logo-footer.png";
import Payment_1 from "@/public/assets/icons/payment.png";
import TiktokIcon from "@/public/assets/icons/TiktokIcon";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HOME } from "@/constants/routes";

export default function Footer() {
  const t = useTranslations("Navigation");
  const { route } = useRouter();

  return (
    <>
      <div
        className={`${styles.footerContainer} ${
          route !== HOME ? "border-t-[1px] border-[#e6e6e6]" : "border-0"
        } `}
      >
        <div
          className={`lg:px-40px px-20px sm:px-8 md:px-12 ${styles.footerContents} flex flex-wrap`}
        >
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <h4 className="text-[20px] mb-4 text-gray700 uppercase font-PlusJakartaSansSemiBold">
              {t("register")}
            </h4>
            <span className="text-center  text-base">
              {t("newsletter_desc")}
            </span>
            <div className="mt-16px flex w-full sm:w-auto sm:flex-row">
              <Input
                placeholder={t("email_of_you")}
                name="email"
                type="email"
                extraClass={`${styles.inputEmail} sm:w-auto border-[#e7e7e7] border-[1px]`}
              />
              <Button
                size="lg"
                value={t("register")}
                extraClass={classNames(
                  "bg-[#000] px-4 whitespace-nowrap w-[106px] h-[48px] p-0 h-[46px] ml-0 mt-4 sm:mt-0 tracking-widest sm:tracking-normal sm:mt-0 w-auto w-full sm:w-auto text-white",
                  [`${styles.btnRegister}`]
                )}
              />
            </div>
            <div className="flex items-center mt-16px">
              <Link href={"#"}>
                <a className={styles.socialItem}>
                  <FacebookLogo />
                </a>
              </Link>
              <Link href={"#"}>
                <a className={`${styles.socialItem} mx-8px`}>
                  <InstagramLogo />
                </a>
              </Link>
              <Link href={"#"}>
                <a className={styles.socialItem}>
                  <TiktokIcon />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <span className="text-[14px] font-PlusJakartaSansMedium text-[#000000]">
          &copy; {t("all_rights_reserved")}
        </span>
      </div>
    </>
  );
}
