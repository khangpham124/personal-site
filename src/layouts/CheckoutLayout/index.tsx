/* eslint-disable jsx-a11y/alt-text */
import Input from '@/components/Input/Input';
import { useTranslations } from 'next-intl';
import React, { useState,useEffect } from 'react';

import VOUCHER_ICON from '@/public/assets/icons/voucher.png';
import MOMO_ICON from '@/public/assets/icons/momo.png';
import ATM_ICON from '@/public/assets/icons/atm.png';
import DELIVER_ICON from '@/public/assets/icons/on_deliver.png';
import Image from 'next/image';
import Item from '@/components/CartItem/Item';
import Select from '@/components/Select';
import { Option } from '@/interfaces/filters';
import Button from '@/components/Buttons/Button';
import CheckSuccessIcon from '@/public/assets/icons/CheckSuccessIcon';
import Link from 'next/link';
// import { useCart } from '@/context/cart/CartProvider';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { getCookie  } from 'cookies-next';
import { orderAPI } from '@/services/checkoutServices';
import { itemAPI } from '@/services/customerItems';
import { promotionAPI, ItemPromotion } from '@/services/customerPromotion';
import { useCart } from '@/context/cart/CartProvider';
import Moment from 'react-moment';

export enum EMomoRequestType {
  PAY_WITH_ATM = 'payWithATM',
  PAY_WITH_WALLET = 'captureWallet',
  PAY_WITH_CC = 'payWithCC',
}

const CountryOptions: Option[] = [
  {
    label: 'Việt Nam',
    value: 'createdAt.desc',
  },
];

export default function CheckoutLayout() {  
  const servicesOrderAPI = new orderAPI();
  const servicesPromotionAPI = new promotionAPI();
  const sevicesitemAPI = new itemAPI();
  const { addOne, removeItem, deleteItem } = useCart();
  const t = useTranslations('Shopping_Cart');
  const [cartCustomer, setCartCustomer] = useState<any[]>([]);
  const [isPayment, setIsPayment] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };


  const refreshCart = () => {
    const cartLocal = localStorage.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
    const tempTotal = localStorage.getItem('tempTotal') ? JSON.parse(localStorage.getItem('tempTotal') || '{}') : null
    const tempQuantityTotal = localStorage.getItem('tempQuantityTotal') ? JSON.parse(localStorage.getItem('tempQuantityTotal') || '{}') : null
    setNumberItems(tempQuantityTotal)
    setCartCustomer(cartLocal);
    setCalcTempTotal(tempTotal)
    setBeforeDiscount(tempTotal)
  }

  const [voucherUuids, setVoucherUuids] = useState<any[]>([]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [countryCode, setCountryCode] = useState('');
  const [fullName, setFullName] = useState('');
  
  const [toWardId, setToWardId] = useState('');
  const [toDistrictId, setToDistrictId] = useState('');
  const [provinceId, setProvinceId] = useState('');
  const [address, setAddress] = useState('');
  const [customerUuid, setCustomerUuid] = useState('');

  const [payBy, setPayBy] = useState('');
  
  const [promos, setPromos] = useState<ItemPromotion[]>([]);

  const [vouchers, setVouchers] = useState<any[]>([]);
  
  const [paymentMethod, setPaymentMethod] = useState(5);
  const [createdType, setCreatedType] = useState(0);
  const [province, setProvince] = useState<any[]>([]);
  const [district, setDistrict] = useState<any[]>([]);
  const [ward, setWard] = useState<any[]>([]);

  const [districtSelected, setDistrictSelected] = useState(null);
  const [wardSelected, setWardSelected] = useState(null);
  const [provinceSelected, setProvinceSelected] = useState(null);
  const [calcTempTotal, setCalcTempTotal] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);
  const [beforeDiscount, setBeforeDiscount] = useState(0);
  // const [voucherDiscountPrice, setVoucherDiscountPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [numberItems, setNumberItems] = useState(0);
  
  
  const [promotionUuids, setPromotionUuids] = useState<any[]>([]);

  const checkPhoneExist = (phone: string) => {
    servicesOrderAPI.checkPhoneExist(phone).then((res: any) => {
      if(res.error) {
        setCreatedType(0);
      }
    });
  }

  const getDistrict = (id: string) => {
    servicesOrderAPI.getDistrict(id).then((res: any) => {
        setDistrict(res.data.data);
    });
  };

  const getWard = (id: string) => {
      servicesOrderAPI.getWard(id).then((res: any) => {
          setWard(res.data.data);
      });
  };


  const handlePricing = (promoId?: any, cart?: any, type?: string) => {
    if(type === 'voucher') {
      if (promoId !== '') {
        if (!voucherUuids.includes(promoId)) {
            voucherUuids.push(promoId);
            setVoucherUuids(voucherUuids);
        }
      } else {
          setVoucherUuids([]);
      }
    } else {
      if(promoId) {
        if(promotionUuids.indexOf(promoId) === -1) {
          promotionUuids.push(promoId)
        } else {
          const pos = promotionUuids.indexOf(promoId);
          promotionUuids.splice(pos, 1)
        }
        setPromotionUuids(promotionUuids);
      }
    }
    

    const payload = {
      storeUuid: 1,
      createdType: createdType,
      customerUuid: customerUuid,
      paymentMethod: paymentMethod,
      products:
      cart?.map((item: any) => ({
        productUuid: item.productUuid,
        quantity: item.quantity
      })),
      promotionUuids: promotionUuids,
      voucherUuids: voucherUuids.length > 0 ? voucherUuids : undefined,
      // spendingPoints: 111,
      isApplyMembershipWithSaleDiscount: true
    };

    servicesPromotionAPI.pricingOrder(payload).then((res: any) => {
      setBeforeDiscount(res.data?.totalPriceBeforeDiscount)
      setTotalFinal(res.data?.totalPrice)
      setShippingPrice(res.data?.shippingPrice)
    });
  }

  const handleCreate = () => {
      //  let customerInfo;

      const payload = {
        storeUuid: 1,
        createdType: createdType,
        customerUuid: customerUuid,
        paymentMethod: paymentMethod,
        products:
        cartCustomer.map((item: any) => ({
          productUuid: item.productUuid,
          quantity: item.quantity
        })),
        newCustomerInfo: {
          phone: phone,
          email: email,
          fullName: fullName,
          toWardId: toWardId,
          toDistrictId: String(toDistrictId),
          address: `${address}-${provinceId}`
        },
        promotionUuids: promotionUuids,
        // spendingPoints: 111,
        isApplyMembershipWithSaleDiscount: true
      };

        servicesOrderAPI.createOrder(payload).then((res: any) => {
            if(paymentMethod === 3) {
              servicesOrderAPI.paymentToMomo(res.data.uuid, payBy).then((payment: any) => {
                window.location.href = payment.data.payUrl;
              })
            }
            localStorage.removeItem('cartCustomer');
        });
};

  const refreshTotal = () => {
    const tempTotal = localStorage.getItem('tempTotal') ? JSON.parse(localStorage.getItem('tempTotal') || '{}') : null
    setCalcTempTotal(tempTotal)
  }

  useEffect(() => {
    const cartLocal = localStorage.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
    const tempTotal = localStorage.getItem('tempTotal') ? JSON.parse(localStorage.getItem('tempTotal') || '{}') : null
    const tempQuantityTotal = localStorage.getItem('tempQuantityTotal') ? JSON.parse(localStorage.getItem('tempQuantityTotal') || '{}') : null
    
    // setCartCustomer(cartLocal);
    setCalcTempTotal(tempTotal)
    setTotalFinal(tempTotal)
    setNumberItems(tempQuantityTotal)
    if(cartLocal !== undefined && cartLocal !== null) {
      cartLocal?.map((item: any, idx: any) => {
        sevicesitemAPI.getProductDetai(item.productUuid).then((res: any) => {
          if((res.data?.product.uuid === item.productUuid && res.data?.totalAvailableItems === 0) || res.data?.totalAvailableItems < item.quantity) {
            cartLocal.splice(idx, 1)
          }
          setCartCustomer(cartLocal)
          localStorage.setItem('cartCustomer', JSON.stringify(cartLocal))
        });
      });
      handlePricing('', cartLocal);
      
    }

    servicesOrderAPI.getProvince().then((res: any) => {
      setProvince(res.data.data);
    });

    servicesPromotionAPI.getAllPromotions().then((res: any) => {
      setPromos(res.data.common);
    });

    servicesPromotionAPI.getAllVoucher().then((res: any) => {
      // setPromos(res.data.common);
      setVouchers(res.data.data)
    });

    

    const userInfo = getCookie('user');
    const dataUserInfo = JSON.parse(String(userInfo));
    if(dataUserInfo) {
      setPhone(dataUserInfo.phone)
      setEmail(dataUserInfo.email)
      setFullName(dataUserInfo.fullname)
      setAddress(dataUserInfo.shippingAddress)
      setCustomerUuid(dataUserInfo.id)
      setCreatedType(1);
    }

  }, []);


  const provinceOptions = province.map((item: any) => ({ label: item.ProvinceName, value: item.ProvinceID }));
  const districtOptions = district.map((item: any) => ({ label: item.DistrictName, value: item.DistrictID }));
  const wardOptions = ward.map((item: any) => ({ label: item.WardName, value: item.WardCode }));
  

  return (
    <>
      {!isPayment ? (
        <div className="lg:px-[40px] px-[20px] w-full lg:pb-[60px] pb-[20px]">
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="lg:flex gap-x-6">
              <div className="lg:w-1/2 w-full lg:mb-0 mb-24px">
                <div className="w-full p-24px bg-[#F9FAFB]">
                  <h3 className="font-PlusJakartaSansSemiBold text-[20px] text-[#000000] uppercase lg:mb-32px mb-20px">
                    thông tin giao hàng
                  </h3>
                  <div className="block">
                    <label htmlFor="name" className="text-[16px] text-[#333]">
                      {t('name')}
                    </label>
                    <Input
                      type="name"
                      value={fullName}
                      placeholder={`${t('name')}`}
                      name="name"
                      required
                      extraClass="w-full"
                      border="border-[1px] mt-[9px] border-[#66666659]"
                      onChange={(e: any) => {
                        setFullName(e.target.value)
                      }}
                    />
                  </div>
                  <div className="lg:flex gap-x-4 my-[16px]">
                    <div className="lg:w-1/3 w-full block ">
                      <label htmlFor="email" className="text-[16px] text-[#333]">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={email}
                        placeholder={`${t('email')}`}
                        name="email"
                        required
                        extraClass="w-full"
                        border="border-[1px] mt-[9px] border-[#66666659]"
                        onChange={(e: any) => {
                          setEmail(e.target.value)
                        }}
                      />
                    </div>

                    <div className="block lg:w-1/3 w-full lg:mt-0 mt-16px">
                      <label htmlFor="phone" className="text-[16px] text-[#333]">
                        {t('phone')}
                      </label>
                      <Input
                        type="text"
                        value={phone}
                        placeholder={`${t('phone')}`}
                        name="phone"
                        required
                        extraClass="w-full"
                        border="border-[1px] mt-[9px] border-[#66666659]"
                        onChange={(e: any) => {
                          setPhone(e.target.value)
                        }}
                        onBlur={(e: any) => {
                          setPhone(e.target.value)
                          const phoneCheck = e.target.value;
                          checkPhoneExist(phoneCheck)
                        }}
                      />
                    </div>
                    <div className="block lg:w-1/3 w-full lg:mt-0 mt-16px">
                      <label htmlFor="phone" className="text-[16px] text-[#333]">
                        Ngày sinh
                      </label>
                      <Input
                        type="text"
                        placeholder={`Ngày sinh`}
                        name="phone"
                        // required
                        extraClass="w-full"
                        border="border-[1px] mt-[9px] border-[#66666659]"
                      />
                    </div>
                  </div>
                  <div className="block">
                    <label htmlFor="address" className="text-[16px] text-[#333]">
                      {t('address')}
                    </label>
                    <Input
                      type="address"
                      value={address}
                      placeholder={`${t('address')}`}
                      name="address"
                      required
                      extraClass="w-full"
                      border="border-[1px] mt-[9px] border-[#66666659]"
                    />
                  </div>
                  
                    <div className="lg:flex gap-x-4 my-[16px]">
                    <div className="lg:w-1/2 w-full block ">
                      <label htmlFor="country" className="text-[16px] text-[#333]">
                        {t('country')}
                      </label>
                      <Select
                        id="country"
                        className="w-full"
                        label=""
                        checkmark={true}
                        options={CountryOptions}
                        selected={CountryOptions[0]}
                        onChange={() => {}}
                      />
                    </div>

                    <div className="block lg:w-1/2 w-full lg:mt-0 mt-16px">
                      <label htmlFor="city" className="text-[16px] text-[#333]">
                        {t('city')}
                      </label>
                      <Select
                        id="city"
                        className="w-full"
                        label=""
                        checkmark={true}
                        options={provinceOptions}
                        selected={provinceSelected}
                        onChange={(e: any) => {
                          getDistrict(e.value);
                          setProvinceId(e.value)
                          setProvinceSelected(e)
                      }}
                      />
                    </div>
                  </div>
                  
                  
                  
                    <div className="lg:flex gap-x-4">
                      <div className="lg:w-1/2 w-full block ">
                        <label htmlFor="district" className="text-[16px] text-[#333]">
                          {t('district')}
                        </label>
                        <Select
                          id="district"
                          className="w-full"
                          label=""
                          checkmark={true}
                          selected={districtSelected}
                          options={districtOptions}
                          onChange={(e: any) => {
                            getWard(e.value);
                            setToDistrictId(e.value);
                            setDistrictSelected(e)
                        }}
                        />
                      </div>

                      <div className="block lg:w-1/2 w-full lg:mt-0 mt-16px">
                        <label htmlFor="ward" className="text-[16px] text-[#333]">
                          {t('ward')}
                        </label>
                        <Select
                          id="ward"
                          className="w-full"
                          label=""
                          checkmark={true}
                          options={wardOptions}
                          selected={wardSelected}
                          onChange={(e: any) => {
                            setToWardId(e.value);
                            setWardSelected(e)
                        }}
                        />
                      </div>
                    </div>
                  
                  
                  <div className="pt-24px">
                    <h4 className="font-PlusJakartaSansSemiBold text-[20px] text-[#333] mb-24px">
                      Phương thức thanh toán
                    </h4>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="deli"
                        value="STORE_PICKUP"
                        id="momo"
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor="momo"
                        className="cursor-pointer text-[16px] ml-16px text-[#000000d9] flex items-center"
                        onClick={() => {
                            setPaymentMethod(3)
                            setPayBy(EMomoRequestType.PAY_WITH_WALLET)
                        }}
                      >
                        <Image src={MOMO_ICON} alt="icon" height={36} />
                        <span className="ml-16px text-[#000] text-[16px]">Thanh toán qua Momo</span>
                      </label>
                    </div>
                    <div className="flex items-center my-16px">
                      <input
                        type="radio"
                        name="deli"
                        value="STORE_PICKUP"
                        id="atm"
                        className="cursor-pointer"
                      />
                      <label  
                        htmlFor="atm"
                        className="cursor-pointer text-[16px] ml-16px text-[#000000d9] flex items-center"
                        onClick={() => {
                          setPaymentMethod(3)
                          setPayBy(EMomoRequestType.PAY_WITH_ATM)
                      }}
                      >
                        <Image src={ATM_ICON} alt="icon" width={40} height={40} />
                        <span className="ml-16px text-[#000] text-[16px]">
                          ATM/Visa//Master
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="deli"
                        value="STORE_PICKUP"
                        id="deliver"
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor="deliver"
                        className="cursor-pointer text-[16px] ml-16px text-[#000000d9] flex items-center"
                        onClick={() => {
                          setPaymentMethod(5)
                      }}
                      >
                        <Image src={DELIVER_ICON} alt="icon" width={36} height={36} />
                        <span className="ml-16px text-[#000] text-[16px]">
                          Thanh toán khi nhận hàng (COD)
                        </span>
                      </label>
                    </div>
                    <Button
                      type="submit"
                      onClick={() => handleCreate()}
                      value={'Thanh toán'}
                      extraClass="w-full mt-24px text-[14px] bg-[#000] lg:py-[14px] py-[10px] text-center text-[16px] capitalize flex items-center justify-center text-[#fff]"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h3 className="font-PlusJakartaSansSemiBold text-[20px] text-[#000000] uppercase lg:mb-32px mb-20px">
                    thông tin sản phẩm
                </h3>
                {cartCustomer?.length > 0
                  ? cartCustomer?.map((item :any) => {
                    // subtotal += item.price * item.quantity!;
                    return (
                      <Item
                        key={item.id}
                        name={item.name}
                        price={Number(item.price) * Number(item.quantity)!}
                        qty={item.quantity!}
                        img={item.mainImg as string}
                        productUuid={String(item.id)}
                        priceAfterDiscount={Number(item.priceAfterDiscount) * Number(item.quantity)}
                        onAdd={() => {
                          addOne!(item)
                          refreshCart();
                          refreshTotal()
                        } }
                        onRemove={() => {
                          removeItem!(item)
                          refreshCart();
                          refreshTotal()
                        } }
                        onDelete={() => {
                          deleteItem!(item.id)
                          refreshCart();
                          refreshTotal()
                        } }
                      />
                    );
                  })
                  : null}

                <div className="border-[#c3c3c3] border-b-[1px] py-24px">
                  <div className="flex">
                    <Input
                      type="name"
                      placeholder={`Nhập mã khuyến mãi`}
                      name="name"
                      required
                      extraClass="w-full h-[48px]"
                      border="border-[1px] mr-24px border-[#66666659]"
                    />
                    <Button
                      type="submit"
                      value={'Áp dụng'}
                      extraClass="w-[150px] h-[48px] text-[14px] border-[#E6E6E6] bg-[#E6E6E6] lg:py-[14px] py-[10px] text-center text-[16px] capitalize flex items-center justify-center text-[#333]"

                    />
                  </div>
                  <h4 className="my-24px text-[16px] text-[#060606]">Voucher dành riêng cho bạn</h4>
                  {vouchers?.map((item: any, idx: any) => (
                    <div key={`promo_${idx}`} className={`flex p-8px border-[1px] border-[#D8D8D8] w-48 item-promp ${Number(calcTempTotal) < Number(item.minimumOrderPrice) ? `disabled` : `` } `}>
                    <div>
                      <Image src={VOUCHER_ICON} alt="icon" width={50} height={35} />
                    </div>
                    <div className="flex items-center w-full justify-between " data-tooltip-id="my-tooltip-1">
                      <div className="ml-8px">
                        <h4 className="text-[16px] text-[#3A3A3A] leading-[17px]">Giảm {item.discountValue} đ</h4>
                        <div className="text-[12px] text-[#616161] py-[2px]">
                        {item.name}
                        </div>
                        <div className="text-[12px] text-[#616161]">HSD: <Moment format='DD/MM/YYYY'>{item.endDate}</Moment></div>
                        {item.subType === 0 ? (<div className="text-[12px] text-[#616161]">Điều kiện: {Number(item.minimumOrderPrice).toLocaleString()} Đ</div>) : null}
                        {item.subType === 2 ? (<div className="text-[12px] text-[#616161]">Điều kiện: Mua sản phẩm {item?.category?.name}</div>) : null}
                        {item.subType === 3 ? (<div className="text-[12px] text-[#616161]">Điều kiện: Mua hàng Brand {item.brand}</div>) : null}
                        {item.subType === 4 ? (<div className="text-[12px] text-[#616161]">Điều kiện: Mua ít nhất {item.minimumOrderTotalItems} món</div>) : null}
                        
                      </div>
                      <Button
                        value={'Chọn'}
                        extraClass="w-[66px] h-[32px] text-[14px] border-[#FFA096] bg-[#fff] lg:py-[14px] py-[10px] text-center text-[14px] capitalize flex items-center justify-center text-[#FFA096] ml-24px hover:bg-[#FFA096] hover:text-[#fff] duration-300"
                        onClick={() => handlePricing(item.uuid, cartCustomer, 'voucher')}
                      />
                    </div>
                    <ReactTooltip
                      id="my-tooltip-1"
                      place="bottom"
                      style={{ backgroundColor: "#FACDC8", color: "#222", width: "25%", fontSize:"12px" }}
                      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                  </div>
                  ))
                  }
                  <div className="flex-box flex-box--wrap">
                    {promos?.map((item: any, idx: any) => (
                      <div key={`promo_${idx}`} className={`flex p-8px border-[1px] border-[#D8D8D8] w-48 item-promp ${Number(calcTempTotal) < Number(item.minimumOrderPrice) ? `disabled` : `` } `}>
                      <div>
                        <Image src={VOUCHER_ICON} alt="icon" width={50} height={35} />
                      </div>
                      <div className="flex items-center w-full justify-between " data-tooltip-id="my-tooltip-1">
                        <div className="ml-8px">
                          <h4 className="text-[16px] text-[#3A3A3A] leading-[17px]">Giảm {item.discountValue} đ</h4>
                          <div className="text-[12px] text-[#616161] py-[2px]">
                          {item.name}
                          </div>
                          <div className="text-[12px] text-[#616161]">HSD: <Moment format='DD/MM/YYYY'>{item.endDate}</Moment></div>
                          {item.subType === 0 ? (<div className="text-[12px] text-[#616161]">Điều kiện: {Number(item.minimumOrderPrice).toLocaleString()} Đ</div>) : null}
                          {item.subType === 2 ? (<div className="text-[12px] text-[#616161]">Điều kiện: Mua sản phẩm {item?.category?.name}</div>) : null}
                          {item.subType === 3 ? (<div className="text-[12px] text-[#616161]">Điều kiện: Mua hàng Brand {item.brand}</div>) : null}
                          {item.subType === 4 ? (<div className="text-[12px] text-[#616161]">Điều kiện: Mua ít nhất {item.minimumOrderTotalItems} món</div>) : null}
                          
                        </div>
                        <Button
                          value={'Chọn'}
                          extraClass="w-[66px] h-[32px] text-[14px] border-[#FFA096] bg-[#fff] lg:py-[14px] py-[10px] text-center text-[14px] capitalize flex items-center justify-center text-[#FFA096] ml-24px hover:bg-[#FFA096] hover:text-[#fff] duration-300"
                          onClick={() => handlePricing(item.uuid, cartCustomer)}
                        />
                      </div>
                      <ReactTooltip
                        id="my-tooltip-1"
                        place="bottom"
                        style={{ backgroundColor: "#FACDC8", color: "#222", width: "25%", fontSize:"12px" }}
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                      />
                    </div>
                    ))
                    }
                    
                  </div>
                </div>
                <div>
                  <h4 className="text-[20px] text-[#333] font-PlusJakartaSansSemiBold my-24px uppercase">
                    Chi tiết thanh toán
                  </h4>
                  <div className="w-full flex items-center mb-8px">
                    <span className="w-full text-[#616161] text-[14px]">{numberItems} Sản phẩm</span>
                    <div className="w-full flex items-center justify-end text-[#616161] text-[14px]">
                    {Number(calcTempTotal).toLocaleString()} Đ
                    </div>
                  </div>
                  <div className="w-full flex items-center mb-8px">
                    <span className="w-full text-[#616161] text-[14px]">Phí vận chuyển</span>
                    <div className="w-full flex items-center justify-end text-[#616161] text-[14px]">
                      {Number(shippingPrice).toLocaleString()} Đ
                    </div>
                  </div>
                  <div className="w-full flex items-center mb-8px">
                    <span className="w-full text-[#616161] text-[14px]">Tổng cộng</span>
                    <div className="w-full flex items-center justify-end text-[#616161] text-[14px]">
                    {Number(beforeDiscount).toLocaleString()} Đ
                    </div>
                  </div>
                  {beforeDiscount > 0 ? (
                    <div className="w-full flex items-center mb-8px">
                    <span className="w-full text-[#616161] text-[14px]">Giảm giá</span>
                    <div className="w-full flex items-center justify-end text-[#616161] text-[14px]">{Number(Number(beforeDiscount) - Number(totalFinal)).toLocaleString()} Đ</div>
                  </div>
                  ) : null}
                  
                  <div className="w-full flex items-center">
                    <h4 className="text-[20px] text-[#333] font-PlusJakartaSansSemiBold my-24px uppercase whitespace-nowrap">
                      tổng thanh toán
                    </h4>
                    <div className="w-full flex items-center justify-end text-[#616161] text-[14px]">
                      {Number(totalFinal).toLocaleString()} Đ
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="lg:px-[40px] px-[20px]">
          <div className="flex items-center flex-col justify-center">
            <CheckSuccessIcon />
            <h2 className="text-center lg:text-[40px] text-[24px] text-[#030303] lg:leading-[54.48px] leading-[30px] font-PlusJakartaSansSemiBold mt-24px mb-16px">
              ĐƠN HÀNG ĐÃ ĐƯỢC ĐẶT THÀNH CÔNG!
            </h2>
            <p className="text-[#333333] lg:text-[20px] text-[16px] leading-[30px] text-center">
              Mã đơn hàng của bạn là <span className="font-PlusJakartaSansMedium">1234567</span>
            </p>
            <p className="text-[#333333] lg:text-[20px] text-[16px] leading-[30px] text-center">
              Ju Clothing đã gửi mail xác nhận đơn hàng đến bạn qua email{' '}
              <span className="font-PlusJakartaSansMedium">info@gmail.com</span>
            </p>
          </div>
          <div className="lg:p-[80px] p-[30px] bg-[#F9FAFB] w-fit mx-auto lg:my-48px mt-[35px] lg:mb-[60px] mb-[30px]">
            <h2 className="lg:text-[32px] text-[24px] text-center text-[#000] font-PlusJakartaSansMedium mb-16px">
              TẠO TÀI KHOẢN ĐỂ TÍCH ĐIỂM
            </h2>
            <p className="lg:text-[20px] text-[16px] text-center text-[#333]">
              Bạn đã mua hàng với SDT <span className="font-PlusJakartaSansMedium">1234567</span> và
              Email
              <span className="font-PlusJakartaSansMedium"> info@gmail.com</span>
            </p>
            <p className="lg:text-[20px] text-[16px] text-center text-[#333]">
              Hãy nhập mật khẩu để tạo tài khoản và nhận thêm nhiều ưu đãi độc quyền.
            </p>
            <form className="lg:mt-32px mt-[25px]">
              <div className="block">
                <label htmlFor="password" className="text-[16px] text-[#333]">
                  <span className="text-[#EE1D52] text-[16px]">*</span> Tạo mật khẩu
                </label>
                <Input
                  type="password"
                  name="password"
                  required
                  extraClass="w-full"
                  border="border-[1px] mt-[9px] border-[#66666659]"
                />
              </div>
              <div className="block my-16px">
                <label htmlFor="re-password" className="text-[16px] text-[#333]">
                  <span className="text-[#EE1D52] text-[16px]">*</span> Xác nhận lại mật khẩu
                </label>
                <Input
                  type="re-password"
                  name="re-password"
                  required
                  extraClass="w-full"
                  border="border-[1px] mt-[9px] border-[#66666659]"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="checkbox_policy flex items-start checkbox-card">
                  <input type="checkbox" className="checkbox__input" />
                  <span className="checkbox__inner"></span>
                  <p className="ml-8px text-[14px] text-[#333] leading-[19.07px]">
                    Tôi đồng ý với{' '}
                    <Link href="#">
                      <a className="underline">các điều khoản</a>
                    </Link>{' '}
                    và{' '}
                    <Link href="#">
                      <a className="underline">chính sách bảo mật</a>
                    </Link>{' '}
                    của Ju Clothing
                  </p>
                </div>
              </div>
              <Button
                type="submit"
                onClick={() => setIsPayment(false)}
                value={'Tạo tài khoản'}
                extraClass="w-full mt-16px text-[14px] bg-[#000] lg:py-[14px] py-[10px] text-center text-[16px] capitalize flex items-center justify-center text-[#fff]"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
