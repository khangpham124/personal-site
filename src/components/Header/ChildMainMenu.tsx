import classNames from 'classnames';
import { useTranslations } from 'next-intl';
// import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { HOME } from '@/constants/routes';
import { useRouter } from 'next/router';
import { TNavigation } from '@/interfaces/common';

interface ChildMainMenuProps {
  childMenu?: TNavigation[];
  isMobile?: boolean;
}

const ChildMainMenu: React.FC<ChildMainMenuProps> = ({ childMenu, isMobile }) => {
  const route = useRouter();
  const t = useTranslations('Navigation');
  // const [imageColletion, setImageColletion] = useState('');
  // const changeBackground = (img: string) => {
  //   setImageColletion(img)
  // }

  return (
    <>
      <div
        className={classNames(
          'bg-white shadow-xl lg:py-32px lg:px-40px z-[2]',
          [`${styles.megaMenu}`],
          { 'overflow-y-auto h-[400px]': isMobile }
        )}
      >
        <div className="w-full h-full lg:flex block items-start justify-between">
          <div className="lg:w-1/4 w-full h-fit lg:flex justify-start">
            <ul>
              {childMenu?.map((child: TNavigation, index) => (
                <li
                  key={`child-${new Date().getTime()}-${index}`}
                  className={classNames(
                    'max-w-7xl mx-auto w-full lg:flex items-center justify-between lg:mb-12px',
                    {
                      [`${styles.activeNavigationChild}`]: route.asPath === child.url,
                    }
                  )}
                >
                  <Link href={child?.url || HOME}>
                    <a
                      // onMouseOver={changeBackground(String(child?.thumb))}
                      className={classNames(
                        'w-full text-gray700 lg:mb-8 text-center hover:text-extraHover capitalize',
                        {
                          'font-PlusJakartaSansMedium hover:text-gray700 cursor-[default] pointer-events-none':
                            !child?.url,
                        }
                      )}
                    >
                      {child?.trans ? t(child?.trans) : child?.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-3/4 lg:p-0 p-20px w-full block">
            {/* <Image src={imageColletion} alt="collection image" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildMainMenu;
