import { HOME } from '@/constants/routes';
import { TNavigation } from '@/interfaces/common';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import ChildMainMenu from './ChildMainMenu';
import styles from './Header.module.css';
import { useCollections } from "@/hooks/useCollections";
import { ICollection } from '@/interfaces/collection-service';



type MainMenuProps = {
  isMobile?: boolean;
};

const Navigation = ({ isMobile }: MainMenuProps) => {
  const collections = useCollections();
  const collectionsArr = collections?.data?.data;
  let collectionMenus: [any?] = [];
  collectionsArr?.map((collection: ICollection) => {
    const itemCollection = {
      title: collection.name,
      thumb: collection.imageUrl,
      class_name: 'menu-item-child',
    }
    collectionMenus.push(itemCollection)
  });

  const navigations = [
    {
      url: '/collections',
      title: 'Bộ sưu tập',
      trans: 'menu.collection',
      class_name: 'menu-item',
      children: collectionMenus,
    },
    {
      url: '/products',
      title: 'Sản phẩm',
      trans: 'menu.product',
      class_name: 'menu-item',
      children: collectionMenus,
    },
    {
      url: '/sales',
      title: 'Sale',
      trans: 'menu.sale',
      class_name: 'menu-item',
    },
    {
      url: '/blog',
      title: 'Blog',
      trans: 'menu.blog',
      class_name: 'menu-item',
    },
    {
      url: '/about-us',
      title: 'Về Ju',
      trans: 'menu.about_us',
      class_name: 'menu-item',
    },
  ];
  const route = useRouter();
  const t = useTranslations('Navigation');
  const [active, setActive] = useState<{ index: number | null; isDisplay: boolean }>({
    index: null,
    isDisplay: false,
  });


  const handleActiveMenuMobile = useCallback(
    (index) => {
      if (!isMobile) return;
      setActive((pre) => {
        const isDisplay = pre.index === index ? !pre.isDisplay : true;

        return {
          index,
          isDisplay,
        };
      });
    },
    [isMobile]
  );

  const handleActiveMenu = useCallback(
    (item: TNavigation) => {
      return item?.children?.some((child) => child.url === route.asPath);
    },
    [route]
  );

  return (
    <>
      {navigations.map((item: TNavigation, i: number) => (
        <li
          key={`navigation-item-${i}`}
          className={classNames('flex items-center text-gray600 relative', {
            [`${styles.hoverable}`]: !isMobile && item?.children,
            [`${styles.activeNavigation}`]: route.pathname === item.url || handleActiveMenu(item),
            [`${styles.displayMegaMenu}`]: isMobile && active.index === i && active.isDisplay,
          })}
          onClick={() => {
            handleActiveMenuMobile(i);
          }}
        >
          <div
            className={classNames(`flex items-center h-full`, [`${styles.menuItem}`], {
              'flex justify-between items-center w-full': isMobile,
            })}
          >
            <Link href={item?.url || HOME}>
              <a className="h-full relative flex items-center text-16px text-gray600 uppercase font-PlusJakartaSansMedium mr-8px">
                {item?.trans ? t(item?.trans) : item?.title}
              </a>
            </Link>
            {item?.children && (
              <span
                className={classNames('float-left', [`${styles.menuItemIcon}`], {
                  'bg-[#00000012] w-[25px] h-[25px] rounded-[6px] flex items-center justify-center':
                    isMobile,
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  className={classNames({
                    'rotate-[180deg]': isMobile && active.index === i && active.isDisplay,
                  })}
                >
                  <path
                    d="M1.30548 0.890625L0.465332 1.7308L6.23268 7.4981L12 1.7308L11.1599 0.890625L6.23268 5.81782L1.30548 0.890625Z"
                    fill="black"
                  />
                </svg>
              </span>
            )}
          </div>
          {/* {item?.children && <ChildMainMenu childMenu={item?.children} isMobile={isMobile} />} */}
        </li>
      ))}
    </>
  );
};

export default Navigation;
