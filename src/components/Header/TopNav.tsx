import { useTranslations } from "next-intl";
import styles from "./Header.module.css";

const TopNav = () => {
  const t = useTranslations("Navigation");

  return <div className={styles.topNav}>test</div>;
};

export default TopNav;
