import { FC } from 'react';
import Link from 'next/link';
import styles from './CardBlog.module.css';
// import { ItemPost } from '@/services/articleServices';
// import { useTranslations } from 'next-intl';
import { BLOG } from '@/constants/routes';
import Moment from 'react-moment';
import { setCookies } from 'cookies-next';
import { IArticle } from '@/interfaces/customerArticles-service';

interface Props {
  item: IArticle;
}

const CardBlog: FC<Props> = ({ item }) => {
  
  // const t = useTranslations('Index');

  const { uuid, titleVi, imageUrl, createdAt, slug } = item;

  const itemLink = `${BLOG}/${encodeURIComponent(slug)}`;

  return (
    <div className={styles.card}>
      <div className={`${styles.imageContainer} ${styles.thumbWrap}`}
        style={{ 
          backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${imageUrl})`
        }}
      >
        <Link href={itemLink}>
          <a
            tabIndex={-1}
            onClick={() => {
              setCookies('uuid', uuid )
            }}
          >
            {/* <img src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${imageUrl}` as string} /> */}
          </a>
        </Link>
      </div>

      <div className="content md:mt-[16px] mt-[0px] flex flex-col items-center">
        <Link href={itemLink}>
          <a className={styles.itemName}
          onClick={() => {
            setCookies('uuid', uuid )
          }}
          >{titleVi}</a>
          
        </Link>
        
        <Moment format='DD/MM/YYYY'>{createdAt}</Moment>
          {/* <div className={
            'text-[#9a9a9a] md:text-[16px] text-[14px] leading-[21.79px] text-center px-8px md:mt-8px md:mb-16px my-8px'
          } dangerouslySetInnerHTML={{ __html: String(descriptionVi) }}></div> */}
      </div>
    </div>
  );
};

export default CardBlog;
