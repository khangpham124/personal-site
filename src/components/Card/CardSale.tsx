import { FC } from 'react';
import Link from 'next/link';
import { formatPriceVND } from '@/Util/helper';
import styles from './CardSale.module.css';
import { PRODUCTS } from '@/constants/routes';
import { IProductStore } from "@/interfaces/customerProduct-service";
import { removeCookies, setCookies } from 'cookies-next';
import { useRouter } from 'next/router';
// import product from 'next-seo/lib/jsonld/product';

interface Props {
  item: IProductStore;
  sold: number
}

const CardSale: FC<Props> = ({ item, sold }) => {
  const { product = null } = item;
  const slugCate = product?.category?.name as string;
  const slugName = product?.slug as string;
  const itemLink = `${PRODUCTS}/${slugCate ? slugCate.toLowerCase() : ''}/${slugName ? slugName?.toLowerCase() : ''}`;
  const router = useRouter()
  const { pid } = router.query
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={itemLink}>
          <a
            tabIndex={-1}  
          >
            <img src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${product?.mainImage}` as string} />
          </a>
        </Link>
        {item?.discount && (
          <div className="uppercase absolute top-2 py-4px px-8px left-2 bg-[#F09696] text-[16px] text-white w-[53px] h-[27px] flex items-center justify-center">
            {item?.discount}
          </div>
        )}
      </div>

      <div className="content mt-[16px]">
        <Link href={itemLink}>
          <a className={styles.itemName}>{product?.name}</a>
        </Link>
        <div className="mt-[8px]">
          <span className="text-[#9a9a9a] text-[16px] line-through"> {formatPriceVND(+Number(product?.price))}</span>
        </div>
        <div className="flex items-center justify-between mt-[8px] mb-[16px]">
          <span className="text-[#F09696] font-bold lg:text-[24px] text-[18px] font-PlusJakartaSansMedium">
          {formatPriceVND(+Number(product?.priceAfterDiscount))}
          </span>
          <span className="text-[#333] capitalize md:text-[14px] text-[12px]">{sold} đã bán</span>
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#FDEAE7]">
            <div
              style={{ width: '30%' }}
              className="shadow-none flex flex-col text-center whitespace-nowrap rounded text-white justify-center bg-[#F09696]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSale;
