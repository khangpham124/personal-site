import { FC } from 'react';
import Link from 'next/link';
import styles from './CardCollection.module.css';
import { ICollection } from '@/interfaces/cart-types';
import { useTranslations } from 'next-intl';
import { COLLECTIONS } from '@/constants/routes';
import { setCookies, removeCookies } from 'cookies-next';

interface Props {
  item: ICollection;
}

const CardCollection: FC<Props> = ({ item }) => {
  
  const t = useTranslations('Index');
  const toSlug = (str: string) => {
    str = str.toLowerCase();
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    str = str.replace(/[đĐ]/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/-+/g, '-');
    str = str.replace(/^-+|-+$/g, '');
    // return
    return str;
  }
  const { uuid, name, imageUrl, descriptionVi } = item;

  const itemLink = `${COLLECTIONS}/${toSlug(name)}`;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={itemLink}
        
        >
          <a
            tabIndex={-1}
            onClick={() => {
              removeCookies('uuid')
              setCookies('uuid', uuid )
            }}
          >
            <img src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${imageUrl}` as string} />
          </a>
        </Link>
      </div>

      <div className="content md:mt-[16px] mt-[0px] flex flex-col items-center">
        <Link href={itemLink}>
          <a 
            className={styles.itemName}
            onClick={() => {
              removeCookies('uuid')
              setCookies('uuid', uuid )
            }}
          >{name}</a>
        </Link>
        <p
          className={
            'text-[#9a9a9a] md:text-[16px] text-[14px] leading-[21.79px] text-center px-8px md:mt-8px md:mb-16px my-8px'
          }
        >
          {descriptionVi}
        </p>
        <Link href={itemLink}>
          <a className={'viewNow text-[16px]'}>{t('view_now')}</a>
        </Link>
      </div>
    </div>
  );
};

export default CardCollection;
