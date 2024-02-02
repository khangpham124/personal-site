import ArrowDownIcon from '@/public/assets/icons/ArrowDownIcon';
import Hamburger from '@/public/assets/icons/Humbuger';
import UserIcon from '@/public/assets/icons/UserIcon';
import LOGO from '@/public/assets/logo-ju.png';
import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import AuthForm from '../Auth/AuthForm';
import CartItem from '../CartItem/CartItem';
import SearchForm from '../SearchForm/SearchForm';
import styles from './Header.module.css';
import MainMenu from './Navigation';
import { MyLink } from './MyLink';

type Props = {
  isMobile: boolean;
};

const MenuMobile: React.FC<Props> = ({ isMobile }) => {
  const t = useTranslations('Navigation');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
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
    window.addEventListener('scroll', handleScroll);
    document.body.style.overflow = 'auto';
    return () => {
      setDidMount(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  if (!didMount) {
    return null;
  }

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    if (!toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className={styles.menuMobile}>
      {/* ===== Main Navigation ===== */}
      <nav
        className={`${
          scrolled ? 'bg-white top-0 shadow-md z-[10] fixed' : 'relative bg-transparent'
        } w-full z-[10] h-[60px] bg-white`}
      >
        <div className="lg:px-40px px-20px w-full flex items-center justify-between h-full">
          <div className={`w-full flex justify-between h-full`}>
            <div className="flex items-center cursor-pointer">
              <div onClick={handleToggleMenu} className={'relative'}>
                <Hamburger active={toggleMenu ? true : false} />
              </div>
              {toggleMenu && (
                <ul
                  className={`${
                    toggleMenu
                      ? 'opacity-1 ease-in duration-300 visible'
                      : 'opacity-0 invisible ease-in duration-300 z-[2]'
                  } absolute bg-white w-full p-20px left-0 shadow-2xl z-[2] ${
                    styles.menuExpandMobile
                  }`}
                >
                  <MainMenu isMobile={isMobile} />
                  <div className={classNames('flex', [`${styles.menuExpandMobile__bottom}`])}>
                    <ul className={`flex m-0 ${styles.topRightMenu}`}>
                      <li>
                        <Menu as="div" className="relative">
                          <Menu.Button as="a" href="#" className="flex text-16px">
                            {locale === 'en' ? t('eng') : t('vi')} <ArrowDownIcon />
                          </Menu.Button>
                          <Menu.Items
                            className="flex flex-col w-20 right-0 absolute p-1 border border-gray200 bg-white mt-2 outline-none"
                            style={{ zIndex: 9999 }}
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <MyLink active={active} href={asPath} locale="en">
                                  {t('eng')}
                                </MyLink>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <MyLink active={active} href={asPath} locale="vi">
                                  {t('vi')}
                                </MyLink>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </li>
                    </ul>
                    <li className={`${styles.rightMenu__item}`}>
                      <SearchForm />
                    </li>
                  </div>
                </ul>
              )}
            </div>
            {/* Ju Logo */}
            <div className="w-32 flex items-center">
              <Link href="/">
                <a className="w-full">
                  <Image src={LOGO} alt="Ju Clothing" width={182} height={58} layout="responsive" />
                </a>
              </Link>
            </div>
            {/* Right Nav */}
            <ul className={`${styles.rightMenu} flex items-center justify-start`}>
              <li className={styles.rightMenu__item}>
                <AuthForm>
                  <UserIcon />
                </AuthForm>
              </li>
              <li className={styles.rightMenu__item}>
                <CartItem />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuMobile;
