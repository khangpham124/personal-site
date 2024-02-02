/* eslint-disable jsx-a11y/alt-text */
import Input from '@/components/Input/Input';
import Button from '@/components/Buttons/Button';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect, Fragment } from 'react';
import {  profileAPI, ItemOrder, ItemMember } from '@/services/customerProfile';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { IProductStore } from "@/interfaces/customerProduct-service";
import Card from '@/components/Card/Card';


const ProfileLayout = () => {
  // const router = useRouter();
  const serviceprofileAPI = new profileAPI();
  const t = useTranslations('Shopping_Cart');
  const [profileCustomer, setProfileCustomer] = useState<ItemMember>();
  const [ordesCustomer, setOrdesCustomer] = useState<ItemOrder[]>();
  const [wishListCustomer, setWishListCustomer] = useState<IProductStore[]>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  console.log(fullName)

  useEffect(() => {
    serviceprofileAPI.getCustomerProfile().then((res: any) => {
      setProfileCustomer(res.data.membershipInfo);
      setFullName(res.data?.fullName)
      setFirstName(res.data?.firstName)
      setLastName(res.data?.lastName)
      setEmail(res.data?.email)
      setPhone(res.data?.phone)
    });

    serviceprofileAPI.getCustomerOrders().then((res: any) => {
      setOrdesCustomer(res.data.data)
    });

    serviceprofileAPI.getCustomerWishList().then((res: any) => {
      setWishListCustomer(res.data.data)
    });    
  }, []);


  return (
    <>
      <div className="lg:px-[40px] px-[20px]">
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
                    Profile
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
                    Orders
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
                    Wishlist
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
                    Membership
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className={'pt-24px'}>
              <Tab.Panel>
              {/* <div dangerouslySetInnerHTML={{ __html: String(data?.product?.descriptionVi) }}></div> */}
              <form onSubmit={handleSubmit} className="mt-2">
                <div className="flex-box flex-box--between">
                  <div className="block w-48">
                    <label htmlFor="name" className="text-[16px] text-[#333]">
                      firstName
                    </label>
                    <Input
                      type="name"
                      value={firstName}
                      placeholder={`${t('name')}`}
                      name="name"
                      required
                      extraClass="w-full"
                      border="border-[1px] mt-[9px] border-[#66666659]"
                      onChange={(e: any) => {
                        setFirstName(e.target.value)
                      }}
                    />
                  </div>

                  <div className="block w-48">
                    <label htmlFor="name" className="text-[16px] text-[#333]">
                    lastName
                    </label>
                    <Input
                      type="name"
                      value={lastName}
                      placeholder={`${t('name')}`}
                      name="name"
                      required
                      extraClass="w-full"
                      border="border-[1px] mt-[9px] border-[#66666659]"
                      onChange={(e: any) => {
                        setLastName(e.target.value)
                      }}
                    />
                  </div>
                </div>
              
                <div className="flex-box flex-box--between mt--40">
                  <div className="block w-48">
                    <label htmlFor="name" className="text-[16px] text-[#333]">
                      Email
                    </label>
                    <Input
                      type="name"
                      value={email}
                      placeholder={`${t('name')}`}
                      name="name"
                      extraClass="w-full"
                      border="border-[1px] mt-[9px] border-[#66666659]"
                    />
                  </div>
                  <div className="block w-48">
                    <label htmlFor="name" className="text-[16px] text-[#333]">
                      Phone
                    </label>
                    <Input
                      type="name"
                      value={phone}
                      disabled
                      placeholder={`${t('name')}`}
                      name="name"
                      extraClass="w-full"
                      border="border-[1px] mt-[9px] border-[#66666659]"
                    />
                  </div>
                </div>

                <Button
                      type="submit"
                      // onClick={() => handleCreate()}
                      value={'Update'}
                      extraClass="mt-24px text-[14px] bg-[#000] lg:py-[14px] py-[10px] text-center text-[16px] capitalize flex items-center justify-center text-[#fff]"
                    />
              </form>
              </Tab.Panel>
              <Tab.Panel>
              <div className=' dataTables_wrapper form-inline dt-bootstrap wrapper_sroll overflow-box'>
                                <div className='mt-3 font-weight-bold table-product bordered flex-box' style={{ overflow: 'visible' }}>
                                    <div className='table-product-column bg-head w-20'>OrderID</div>
                                    <div className='table-product-column bg-head w-20'>Created At</div>
                                    <div className='table-product-column bg-head w-15'>Total Bill</div>
                                    <div className='table-product-column bg-head w-1'>Payment</div>
                                    <div className='table-product-column bg-head w-15'>Status</div>
                                </div>
                                {ordesCustomer?.map((item: any, idx: any) => (
                                    <div
                                        className='table-product table-product-item flex-box'
                                        key={`user_${idx}`}
                                        onClick={() => (window.location.href = `/order/${item.uuid}`)}
                                    >
                                        <div className='table-product-column w-20'>{item.code}</div>
                                        <div className='table-product-column w-20'>
                                            <Moment format='DD/MM/YYYY'>{item.createdAt}</Moment>
                                        </div>
                                        <div className='table-product-column w-15'>{Number(item.totalPrice).toLocaleString()} Đ</div>
                                        <div className='table-product-column w-1'>
                                            {item.paymentMethod == 0
                                                ? `CASHING`
                                                : item.paymentMethod === 1
                                                ? `CARD`
                                                : item.paymentMethod === 2
                                                ? `BANKING`
                                                : item.paymentMethod === 3
                                                ? `MOMO`
                                                : item.paymentMethod === 4
                                                ? `VNPAY`
                                                : item.paymentMethod === 5
                                                ? `COD`
                                                : ``}
                                        </div>
                                        <div
                                            className={`table-product-column w-15
                                        ${
                                            item.status == 0
                                                ? `text--yellow`
                                                : item.status === 1
                                                ? `text--yellow`
                                                : item.status === 2
                                                ? `text--green`
                                                : item.status === 3
                                                ? `text--red`
                                                : ``
                                        }
                                        `}
                                        >
                                            {item.status == 0
                                                ? `PENDING`
                                                : item.status === 1
                                                ? `SHIPING`
                                                : item.status === 2
                                                ? `DONE`
                                                : item.status === 3
                                                ? `CANCELED`
                                                : ``}
                                        </div>
                                    </div>
                                ))}
                                {/* <div className='mt-5'>
                                    <ReactPaginate
                                        breakClassName={`wrap_paginate`}
                                        previousLabel={'Previous'}
                                        nextLabel={'Next'}
                                        breakLabel={'...'}
                                        pageCount={totalPages}
                                        marginPagesDisplayed={4}
                                        pageRangeDisplayed={1}
                                        forcePage={page - 1}
                                        onPageChange={handlePageClick}
                                        containerClassName={'wrap_paginate'}
                                        activeClassName={'active'}
                                    />
                                </div> */}
                            </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-6">
                  {wishListCustomer?.map((item: IProductStore, index: number) => (
                    <Card key={`card-item-` + index} item={item} />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="p-24px bg-[#F9FAFB]">
                  <p>totalSpending : {profileCustomer?.totalSpending}</p>
                  <p>totalPoints : {profileCustomer?.totalPoints}</p>
                  <p>totalOrders : {profileCustomer?.totalOrders}</p>
                  <p>ranking : {profileCustomer?.ranking}</p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
      </div>
    </>
  );
};

export default ProfileLayout;
