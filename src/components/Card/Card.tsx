import { PRODUCTS } from "@/constants/routes";
import { IProductStore } from "@/interfaces/customerProduct-service";
import { formatPriceVND } from "@/Util/helper";
import { setCookies, removeCookies } from "cookies-next";
// import Image from 'next/image';
import Link from "next/link";
// import { FC, useState } from 'react';
import { FC } from "react";
import styles from "./Card.module.css";
import { profileAPI } from "@/services/documentService";
import Image from "next/image";
import unLike from "@/public/assets/icons/un_like_icon.png";
import liked from "@/public/assets/icons/liked_icon.png";

interface Props {
  item: IProductStore;
}

const Card: FC<Props> = ({ item }) => {
  // const [isHovered, setIsHovered] = useState(false);
  const serviceprofileAPI = new profileAPI();
  const { product = null } = item;
  const slugCate = product?.category?.name as string;
  const slugName = product?.slug as string;
  const itemLink = `${PRODUCTS}/${slugCate ? slugCate.toLowerCase() : ""}/${
    slugName ? slugName?.toLowerCase() : ""
  }`;
  const wishtlist = localStorage?.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist") || "{}")
    : null;

  const addWishList = (id: string) => {
    const body = {
      productUuid: id,
    };
    serviceprofileAPI.addItemToWishList(body).then((res: any) => {
      console.log(res);
    });
  };

  const removeWishList = (id: string) => {
    const body = {
      productUuid: id,
    };
    serviceprofileAPI.removeItemFromWishList(body).then((res: any) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={itemLink}>
          <a tabIndex={-1}>
            <img
              src={
                `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${product?.mainImage}` as string
              }
            />
          </a>
        </Link>
        {wishtlist?.includes(product?.uuid) ? (
          <p
            className={styles.iconLike}
            onClick={() => {
              removeWishList(String(product?.uuid));
            }}
          >
            <Image
              src={liked}
              alt="Policy"
              className="md:w-full"
              width={25}
              height={25}
            />
          </p>
        ) : (
          <p
            className={styles.iconLike}
            onClick={() => {
              addWishList(String(product?.uuid));
            }}
          >
            <Image
              src={unLike}
              alt="Policy"
              className="md:w-full"
              width={25}
              height={25}
            />
          </p>
        )}
        {product?.brand && (
          <div className="uppercase absolute top-2 left-2 bg-white text-[14px] text-[#000] w-[53px] h-[27px] flex items-center justify-center">
            {product?.brand}
          </div>
        )}
      </div>

      <div className="content text-center mt-[16px]">
        <Link href={itemLink}>
          <a className={styles.itemName}>{product?.name}</a>
        </Link>

        <div className="text-gray400 mt-[8px] md:flex justify-center">
          {/* <span className="text-[#9a9a9a] text-[16px] line-through">
            {formatPriceVND(+Number(product?.price))}
          </span> */}
          {product?.price ? (
            <span className="text-[#000] text-[16px] ml-8px font-PlusJakartaSansMedium">
              {formatPriceVND(+Number(product?.price))}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
