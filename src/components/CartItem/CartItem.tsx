import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '../Buttons/Button';
import Item from './Item';
import { roundDecimal } from '../Util/utilFunc';
import { useCart } from '../../context/cart/CartProvider';
import { useRouter } from 'next/router';
import CART_ICON from '@/public/assets/icons/icon_cart.png';
import { formatPriceVND } from '@/Util/helper';
import Image from 'next/image';
import { setTimeout } from 'timers';


export default function CartItem() {
  const router = useRouter();
  const t = useTranslations('CartWishlist');
  const [animate, setAnimate] = useState('');
  const { addOne, removeItem, deleteItem } = useCart();
  const [open, setOpen] = useState(false);
  const cartLocal = localStorage.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
  const [cartCustomer, setCartCustomer] = useState(cartLocal);
  const [delItem, setDelItem] = useState('');
  

  let subtotal = 0;
  let noOfItems = 0;

  
  if(cartLocal) {
    cartLocal?.forEach((item :any) => {
      noOfItems += item.quantity!;
    });
  }

  const refreshCart = () => {
    setCartCustomer(cartLocal);
  }

  const handleAnimate = useCallback(() => {
    // if (noOfItems === 0) return;
    setAnimate('animate__animated animate__headShake');
    // setTimeout(() => {
    //   setAnimate("");
    // }, 0.1);
  }, [noOfItems, setAnimate]);

  // Set animate when no of items changes
  useEffect(() => {
    handleAnimate();
    setCartCustomer(cartLocal);
    setTimeout(() => {
      setAnimate('');
    }, 1000);
  }, [handleAnimate]);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div className="relative line-heigh-1">
        <button type="button" id="btn-show-cart" onClick={openModal} aria-label="Cart">
        <Image src={CART_ICON} alt="icon" width={20} height={20} />
          {noOfItems > 0 && (
            <span
              className={`${animate} absolute bg-gray500 text-gray100 rounded-full number-item`}
            >
              {noOfItems}
            </span>
          )}
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen text-right">
            <Transition.Child
              as={Fragment}
              //   enter="ease-out duration-300"
              //   enterFrom="opacity-0"
              //   enterTo="opacity-100"
              //   leave="ease-in duration-200"
              //   leaveFrom="opacity-100"
              //   leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray500 opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            {/* <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span> */}
            <Transition.Child
              as={Fragment}
              enter="ease-linear duration-600"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-linear duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                style={{ height: '100vh' }}
                className="relative inline-block dur h-screen w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
              >
                <div className="bg-[#FACDC8] flex justify-between items-center p-6">
                  <h3 className="text-lg">
                    {t('cart')} ({noOfItems})
                  </h3>
                  <button
                    type="button"
                    className="outline-none focus:outline-none text-3xl sm:text-2xl"
                    onClick={closeModal}
                  >
                    &#10005;
                  </button>
                </div>

                <div className="h-full">
                  <div className="itemContainer px-4 w-full flex-grow flex-shrink overflow-y-auto">
                    {cartCustomer?.map((item :any, idx: any) => {
                      subtotal += Number(item.priceAfterDiscount) > 0 ? item.priceAfterDiscount * item.quantity : item.price * item.quantity;
                      return (
                        <Item
                          key={item.id}
                          name={item.name}
                          price={Number(item.price) * Number(item.quantity)}
                          qty={item.quantity!}
                          img={item.mainImg as string}
                          priceAfterDiscount={Number(item.priceAfterDiscount) * Number(item.quantity)}
                          productUuid={item.uuid}
                          onAdd={() => {
                            refreshCart();
                            addOne!(item)} }
                          onRemove={() => {
                            refreshCart();
                            removeItem!(item)
                          } }
                          onDelete={() => {
                            refreshCart();
                            deleteItem!(item.id)
                            setDelItem(idx)
                          } }
                          hideTemp={delItem === idx}
                        />
                      );
                    })}
                  </div>
                  <div className="btnContainer px-4 w-full flex flex-col ">
                    <div className="flex justify-between">
                      <span>{t('subtotal')}</span>
                      <span>{formatPriceVND(roundDecimal(subtotal))}</span>
                    </div>
                    
                    <div className="flex-box flex-box--between mt-4">
                      {/* <Button
                        value={t('cart')}
                        onClick={() => router.push(`/carts`)}
                        disabled={cartCustomer?.length > 0 ? false : true}
                        extraClass="text-center w-48"
                        size="lg"
                      /> */}
                      <Button
                        value={t('checkout')}
                        onClick={() => router.push(`/checkout`)}
                        disabled={cartCustomer?.length > 0 ? false : true}
                        extraClass="text-center w-100"
                        size="lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
