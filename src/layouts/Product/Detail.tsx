/* eslint-disable jsx-a11y/alt-text */
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Buttons/Button';
import { useCart } from '@/context/cart/CartProvider';
import { formatPriceVND } from '@/Util/helper';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
// import { useTranslations } from 'next-intl';
import React, { Fragment, useEffect, useState } from 'react';
// import SizeTutorialModal from './components/SizeTutorialModal';
import SliderThumbs from './components/SliderThumbs';
import { useCustomerProductsDetail } from "@/hooks/useCustomerProducts";
// import { getCookie } from 'cookies-next';
import { IProductStore } from '@/interfaces/customerProduct-service';
import Card from '@/components/Card/Card';
import { useProductsSameStyle, colorOptions } from "@/hooks/useCustomerProducts";
import { postAPI } from '@/services/customerArticles';
import { IArticle } from '@/interfaces/customerArticles-service';
import { useTranslations } from 'next-intl';
import { HOME, PRODUCTS } from '@/constants/routes';
import { t } from 'i18next';
import { useRouter } from "next/router";

// import product from 'next-seo/lib/jsonld/product';

// type Props = {
//   breadcrumbs: Breadcrumb[];
//   // product: IProductsDetail;
//   // products: IProductStore[];
// };

const ProductDetailLayout = () => {
  const { addItem, addOne } = useCart();
  const router = useRouter();
  const slugName =  router.query.slug;
  const sevicesPostAPI = new postAPI();
  const t = useTranslations('Category');
  const { data } = useCustomerProductsDetail(String(slugName));
  const styleCode = data?.product?.style?.code;
  const sameStyleItem = useProductsSameStyle(String(styleCode));
  const arrraySameStyleArr = sameStyleItem.data?.data;
  const arrColor = arrraySameStyleArr?.filter((item: any) => item.totalAvailableItems > 0).map((role: any) => role.product.color);
  const arrSize = arrraySameStyleArr?.filter((item: any) => item.totalAvailableItems > 0).map((role: any) => role.product.size);
  const [currentQty, setCurrentQty] = useState(1);
  const [openSizeModal, setOpenSizeModal] = useState<boolean>(false);

  const [skuSelect, setSkuSelect] = useState('');
  const [colorSelect, setColorSelect] = useState('');
  const [sizeSelect, setSizeSelect] = useState('');
  const [totalAvailableItems, setTotalAvailableItems] = useState('');
  const [itemChoseByCustom, setItemChoseByCustom] = useState<any>([]);

  const [postProducts, setPostProducts] = useState<IArticle[]>([]);

  let arrColorReduce = arrColor?.filter(function(item, pos) {
    return arrColor.indexOf(item) == pos;
  })

  let arrSizeReduce = arrSize?.filter(function(item, pos) {
    return arrSize.indexOf(item) == pos;
  })

  

  const getItemtoAddCart = (sku: string) => {
    const findeItem = arrraySameStyleArr?.filter((item: any) => item.product.skuCode === sku);
    setItemChoseByCustom(findeItem)
  };


  const checkAvailableItem = (sku: string) => {
    const findeItem = arrraySameStyleArr?.filter((item: any) => item.product.skuCode === sku);
    setTotalAvailableItems(findeItem[0]['totalAvailableItems'])
  };

  const thisItem = {
    name: skuSelect && skuSelect.split("-").length ===3 ? String(data?.product?.name) : String(data?.product?.name),
    price: Number(data?.product?.price),
    productUuid: itemChoseByCustom.length > 0 ? itemChoseByCustom[0]['product']['uuid'] : String(data?.product?.uuid),
    mainImg: String(data?.product?.mainImage),
    skuCode: itemChoseByCustom.length > 0 ? itemChoseByCustom[0]['product']['skuCode'] : String(data?.product?.skuCode),
    totalAvailableItems: data?.totalAvailableItems,
    priceAfterDiscount:Number(data?.product?.priceAfterDiscount)
  }


  const currentItem = {
    ...thisItem,
    quantity: currentQty,
  };

  const breadcrumbs = [
    {
      title: t('home'),
      url: HOME,
    },
    {
      title: t('products'),
      url: PRODUCTS,
    },
    {
      title: data?.product?.category?.name,
      url: `test`,
    },
    {
      title: data?.product?.name,
    },
  ];

  const resetState = () => {
    setColorSelect('');
    setSkuSelect('')
    setSizeSelect('')
  };

  useEffect(() => {
    sevicesPostAPI.getPostbySlug('chinh-sach-doi-tra-san-pham').then((res: any) => {
      setPostProducts(res.data.data)
    });    

  }, []);



  return (
    <>
      <div className="lg:px-[40px] px-[20px]">
        <div className=" gap-x-[32px] lg:flex flex-col md:flex-row detail-wrapper">
          <div className="imgSection w-full lg:w-2/3 h-full md:flex relative">
              {data?.product?.promotions?.map((promo: any, idx: number) => {
                return (
                  <div className="uppercase top-2 py-4px px-8px left-2 bg-[#F09696] text-[16px] text-white w-[53px] h-[27px] flex items-center justify-center absolute icon-percent-sale" key={`dis_${idx}`}>
                  {promo.discountUnit === 0 ? `${promo.discountValue}%` : `${promo?.discountValue} Đ`}
                  </div>
                )
              })}
            <SliderThumbs images={data?.product?.images} />
          </div>
          <div className="infoSection w-full lg:w-1/3 h-auto flex flex-col lg:mt-0 mt-[20px]">
            <Breadcrumb breadcrumbs={breadcrumbs} border={false} />
            <h2 className="md:text-[32px] text-[26px] text-[#333] font-PlusJakartaSansSemiBold">
              {data?.product?.name}
            </h2>
            <span className="text-[12px] text-[#626262] mb-16px mt-[4px]"> sku: {data?.product?.skuCode}</span>
            <div className="text-gray400">
              {Number(data?.product?.priceAfterDiscount) < Number(data?.product?.price) ? (
                <div>
                  <span className="md:text-[24px] text-[18px] text-[#333] font-PlusJakartaSansMedium">
                    {formatPriceVND(data?.product?.priceAfterDiscount as number)}
                  </span>
                  <span className="text-[#626262] md:text-[24px] text-[18px] ml-16px line-through">
                  {formatPriceVND(data?.product?.price as number)}
                </span>
              </div>
              ) : (
                <div>
                  <span className="md:text-[24px] text-[18px] text-[#333] font-PlusJakartaSansMedium">
                    {formatPriceVND(data?.product?.price as number)}
                  </span>
              </div>
              ) }
              <p className="mt-3">Sản phẩm này còn {totalAvailableItems}</p>
            </div>
            <div className="md:my-[25px] my-[10px]">
              <h4 className="text-[16px] text-[#1F2937] uppercase font-PlusJakartaSansSemiBold mb-16px">
                Màu sắc
              </h4>
              <div className="flex items-center">
                {arrColorReduce?.map((colorItem: any, i: number) => {
                  const colorCircle = colorOptions.filter((item: any) => item.value === colorItem).map((role: any) => role.code);
                  return (
                      <Fragment key={`colorItem-${i}`}>
                      <div
                        className={classNames(
                          `rounded-[50%] cursor-pointer w-[32px] h-[32px] mr-10px border-normal ${colorSelect === colorItem ? `border-active` : ``}`,
                        )}
                        style={{ backgroundColor:  `#${colorCircle[0]}` }}
                        onClick={() => {
                          setColorSelect(colorItem);
                          setSkuSelect(`${data?.product?.style?.code}-${colorItem}-${sizeSelect}`)
                          getItemtoAddCart(`${data?.product?.style?.code}-${colorItem}-${sizeSelect}`)
                          if(sizeSelect !== '' && colorItem !== '') {
                            checkAvailableItem(`${data?.product?.style?.code}-${sizeSelect}-${colorItem}`)
                          }
                        }}
                      />
                    </Fragment>
                  )
                })}
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-16px">
                <h4 className="text-[16px] text-[#1F2937] uppercase font-PlusJakartaSansSemiBold ">
                  SIZE
                </h4>
                <div
                  className="text-[14px] text-[#626262] underline cursor-pointer"
                  onClick={() => setOpenSizeModal(!openSizeModal)}
                >
                  Hướng dẫn tính size
                </div>
              </div>
              <div className="flex items-center">
                {arrSizeReduce?.map((sizeItem: any, i: number) => (
                  <Fragment key={`colorItem-${i}`}>
                    <div
                      className={classNames(
                        `flex justify-center text-[#333] text-[14px] items-center cursor-pointer w-[32px] h-[32px] p-[4px] mr-10px hover:bg-gray100 border-[1px] border-[#949494] bg-[#FBFBFB]
                        ${sizeSelect === sizeItem ? `border-active` : ``}
                        `,
                      )}
                      onClick={() => {
                        setSizeSelect(sizeItem);
                        setSkuSelect(`${data?.product?.style?.code}-${sizeItem}-${colorSelect}`)
                        getItemtoAddCart(`${data?.product?.style?.code}-${sizeItem}-${colorSelect}`)
                        if(sizeItem !== '' && colorSelect !== '') {
                          checkAvailableItem(`${data?.product?.style?.code}-${sizeItem}-${colorSelect}`)
                        }
                      }}
                    >
                      {sizeItem}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="addToCart flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-4 sm:space-y-0 mt-20px btn-change-qty w-40">
              <div className="plusOrMinus w-fit h-[32px] flex justify-center border-default">
              <div
                  onClick={() => 
                    {
                      setCurrentQty((prevState) => prevState - 1)
                    }
                    }
                  className={`${currentQty === 1 && 'pointer-events-none'
                    } text-[#333] bg-[#FBFBFB] text-[16px] h-full w-[40px] flex justify-center items-center cursor-pointer hover:bg-gray100 gty-minus`}
                >
                  -
                </div>
                <div className="h-full disabled bg-[#FBFBFB] text-[#333] text-[16px] w-[70px] flex justify-center items-center pointer-events-none qty-middle">
                  {currentQty}
                </div>
                
                <div
                  onClick={() => 
                    {
                      if(currentQty < Number(totalAvailableItems)) {
                        setCurrentQty((prevState) => prevState + 1)
                      } else {
                        alert(`Kho chỉ còn ${totalAvailableItems} sản phẩm`)
                      } 
                    }
                    
                  }
                  className={`h-full bg-[#FBFBFB] w-[40px] flex justify-center items-center cursor-pointer hover:bg-gray100 text-[#333] text-[16px] gty-plus
                  `}
                >
                  +
                </div>
              </div>
            </div>
            <div className="md:flex block h-12 w-full md:mt-[24px] mt-[0px]">
              <Button
                value={'Yêu thích'}
                extraClass={`w-[208px] md:mt-0 mt-[20px] h-[48px] text-center whitespace-nowrap uppercase text-[#000] bg-transparent hover:text-[#ffffff] hover:bg-[#000] duration-300`}
                onClick={() => {
                  // addItem!(currentItem);
                } }
              />
              <Button
                value={'Mua ngay'}
                onClick={() => {
                  if(sizeSelect !== '' && colorSelect !== '') {
                    addItem!(currentItem);
                    resetState();
                  } else {
                    alert('Bạn chưa chọn kích thước hoặc màu')
                  }
                }}
                extraClass={`w-[208px] md:mt-0 mt-[20px] h-[48px] text-center whitespace-nowrap uppercase hover:text-[#000] hover:bg-transparent text-[#ffffff] bg-[#000] duration-300 md:ml-16px ml-0`}
              />
            </div>
          </div>
        </div>
        <div className="lg:my-[60px] md:my-[30px] my-[90px]">
          {/* TODO: create it into a component */}
          <Tab.Group>
            <Tab.List className={'border-b-[1px] border-gray100 flex flex-wrap md:mt-0 mt-[60px]'}>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase',
                      {
                        'border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium':
                          selected,
                        'text-[#626262] font-PlusJakartaSansRegular': !selected,
                      }
                    )}
                  >
                    Chi tiết sản phẩm
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase',
                      {
                        'border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium':
                          selected,
                        'text-[#626262] font-PlusJakartaSansRegular': !selected,
                      }
                    )}
                  >
                    Thông tin bảo quản
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase',
                      {
                        'border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium':
                          selected,
                        'text-[#626262] font-PlusJakartaSansRegular': !selected,
                      }
                    )}
                  >
                    Giao hàng và đổi trả
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className={'pt-24px'}>
              <Tab.Panel>
              <div dangerouslySetInnerHTML={{ __html: String(data?.product?.descriptionVi) }}></div>
              </Tab.Panel>
              <Tab.Panel> thông tin bảo quản</Tab.Panel>
              <Tab.Panel>
                  {postProducts?.map((item: any, index: number) => 
                      <div key={`post${index}`} dangerouslySetInnerHTML={{ __html: String(item?.descriptionVi) }}></div>
                  )}

              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {data?.product?.relatedItems.length > 0 ? (
          <div className="lg:mb-[60px] md:mb-[30px] mb-[20px]">
          <h2 className="md:text-[24px] text-[20px] text-left text-[#333] mb-32px font-PlusJakartaSansMedium uppercase">
            Có thể Bạn cũng thích
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-6">
            {data?.product?.relatedItems?.map((item: IProductStore, index: number) => (
              <Card key={`card-item-` + index} item={item} />
            ))}
          </div>
        </div>
        ) : null}
        
      </div>
      {/* {openSizeModal && (
        <SizeTutorialModal
          isOpen={openSizeModal}
          closeModal={() => setOpenSizeModal(false)}
          product={product}
        />
      )} */}
    </>
  );
};

export default ProductDetailLayout;
