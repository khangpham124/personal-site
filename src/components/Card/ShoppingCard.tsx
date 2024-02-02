import { PRODUCTS } from '@/constants/routes';
import { ICart } from '@/interfaces/cart-types';
import { Option } from '@/interfaces/filters';
import DeleteIcon from '@/public/assets/icons/DeleteIcon';
import { formatPriceVND } from '@/Util/helper';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Input from '../Input/Input';
import Select from '../Select';
import styles from './Card.module.css';

interface Props {
  item: ICart;
}

const sizeOptions: Option[] = [
  {
    label: 'S',
    value: 'createdAt.desc',
  },
];

const ShoppingCard: FC<Props> = ({ item }) => {
  const { slug, name, mainImg, price, skuCode } = item;

  const itemLink = `${PRODUCTS}/${slug}`;

  return (
    <div
      className={classNames(
        `md:flex block h-fit border-b-[1px] border-[#c3c3c3] ${styles.cardShopping}`
      )}
    >
      <div className={`${styles.imageContainer} ${styles.ShoppingCard}`}>
        <Link href={itemLink}>
          <a>
            <Image
              className="transition-transform transform hover:scale-110 duration-1000"
              src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${mainImg}`}
              alt={name}
              width={200}
              height={270}
            />
          </a>
        </Link>
      </div>

      <div className="md:flex block flex-col w-full h-full md:ml-[24px]">
        <div className="md:flex block items-start justify-between w-full content text-center">
          <div className="flex flex-col">
            <Link href={itemLink}>
              <a
                className={
                  'font-PlusJakartaSansMedium text-left md:mt-0 mt-14px text-[24px] color-[#333]'
                }
              >
                {name}
              </a>
            </Link>
            <span className="text-[12px] text-left text-[#626262] mb-16px mt-[4px]">
              sku: {skuCode}
            </span>
            <div className="flex items-center">
              <span className="text-[#1F2937] text-[14px] mr-8px">Màu sắc</span>
              <div
                className={classNames(
                  `rounded-[50%] cursor-pointer w-[16px] h-[16px] bg-[#F5C3CB]`
                )}
              />
            </div>
          </div>
          <div className="flex flex-col md:items-end items-start">
            <span className="text-[#333] text-[24px] md:mt-0 mt-20px font-PlusJakartaSansMedium">
              {formatPriceVND(price as number)}
            </span>
            <span className="text-[#626262] text-[16px] line-through">
              {formatPriceVND(price as number)}
            </span>
          </div>
        </div>
        <div className="md:flex justify-between items-center w-full md:mt-[68px] mt-12px">
          <div className="md:flex">
            <div className="block">
              <label htmlFor="amount" className="text-[16px] mr-16px text-[#1F2937]">
                Số lượng
              </label>
              <Input
                value={item.quantity + ''}
                type="amount"
                name="amount"
                required
                extraClass="md:w-[81px] w-full h-[48px]"
                border="border-[1px] mt-[9px] border-[#66666659]"
              />
            </div>
            <div className="md:flex block items-center md:ml-32px ml-0 md:mt-0 mt-16px">
              <label htmlFor="size" className="text-[16px] mr-16px text-[#1F2937]">
                Size
              </label>
              <Select
                id="size"
                className="w-full"
                label=""
                checkmark={true}
                options={sizeOptions}
                selected={sizeOptions[0]}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="cursor-pointer md:mt-0 mt-16px">
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
