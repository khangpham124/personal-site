import { useTranslations } from 'next-intl';
import styles from './Header.module.css';

const TopNav = () => {
  const t = useTranslations('Navigation');

  return (
    <div className={styles.topNav}>
      <div className={styles.topNav__item}>
        {t('top_nav_content')}{' '}
        <span className="font-PlusJakartaSansSemiBold mx-[5px]">599,000</span>{' '}
        {t('top_nav_content_or_more')}
      </div>
    </div>
  );
};

export default TopNav;
