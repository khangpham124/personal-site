import React, { useContext, useEffect,useState } from 'react';
// import cartReducer from './cartReducer';
import CartContext from './CartContext';

import { cartType, ICart } from '@/interfaces/cart-types';

export const ProvideCart = ({ children }: { children: React.ReactNode }) => {
  const value = useProvideCart();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

const useProvideCart = () => {
  const [cartCustomer, setCartCustomer] = useState<any[]>([]);

  const refreshTotal = () => {
    const cartLocal = localStorage?.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
    let subtotal = 0;
    let quantityTotal = 0;
    cartLocal?.map((item :any) => {
      subtotal += item.price * item.quantity!;
      quantityTotal += item.quantity!;
    })
    localStorage.setItem('tempTotal', String(subtotal))
    localStorage.setItem('tempQuantityTotal', String(quantityTotal))
  }

  useEffect(() => {
    const cartLocal = localStorage?.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
    setCartCustomer(cartLocal)
  }, []);


  const addItem = (item: ICart) => {
    const cartCustomer = localStorage?.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
    if(cartCustomer === null) {
      let arrCart: [any?] = [];
      arrCart.push(item)
      localStorage.setItem('cartCustomer', JSON.stringify(arrCart));
    } else {
      const listItem = cartCustomer?.map((cart: any) => (
        cart.productUuid
      ));
      
      if(listItem.includes(item.productUuid)) {
        const posItemInCart = listItem.indexOf(item.productUuid)
        cartCustomer[posItemInCart]['quantity'] = cartCustomer[posItemInCart]['quantity'] + item.quantity;
        localStorage.setItem('cartCustomer', JSON.stringify(cartCustomer));
      } else {
        
        cartCustomer.push(item);
        localStorage.setItem('cartCustomer', JSON.stringify(cartCustomer));
      }
    }
    const btnShowCart = document.getElementById("btn-show-cart");
    btnShowCart?.click();
    refreshTotal();
  };

  const addOne = (item: ICart) => {
    const cartCustomer = localStorage?.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
    const listItem = cartCustomer?.map((cart: any) => (
      cart.productUuid
    ));

    
    if(listItem?.includes(item.productUuid)) {      
      const posItemInCart = listItem.indexOf(item.productUuid)
      if(Number(item?.totalAvailableItems) > cartCustomer[posItemInCart]['quantity']) {
        cartCustomer[posItemInCart]['quantity'] = cartCustomer[posItemInCart]['quantity'] + 1;
        localStorage.setItem('cartCustomer', JSON.stringify(cartCustomer));
      } else {
        alert(`Kho chỉ còn ${item?.totalAvailableItems} cái`)
      }
    } else {
      cartCustomer.push(item);
      localStorage.setItem('cartCustomer', JSON.stringify(cartCustomer));
    }
    refreshTotal();
  };

  const removeItem = (item: ICart) => {
    const listItem = cartCustomer?.map((cart: any) => (
      cart.productUuid
    ));
    const posItemInCart = listItem.indexOf(item.productUuid);
    if(item.quantity > 1 ) {
      cartCustomer[posItemInCart]['quantity'] = cartCustomer[posItemInCart]['quantity'] - 1;
      localStorage.setItem('cartCustomer', JSON.stringify(cartCustomer));
    } else {
      deleteItem(item.productUuid)
    }
    refreshTotal();
  };

  const deleteItem = (item: string) => {
    const listItem = cartCustomer?.map((cart: any) => (
      cart.productUuid
    ));
    if(listItem.length > 0) {
      const posItemInCart = listItem?.indexOf(item);
      cartCustomer.splice(posItemInCart, 1);
    } else {
      if(cartCustomer.length === 0) {
        localStorage.removeItem('cartCustomer');
      } else {
        localStorage.setItem('cartCustomer', JSON.stringify(cartCustomer));
      }
    }
    refreshTotal();
    const btnShowCart = document.getElementById("btn-show-cart");
    btnShowCart?.click();
  };

  const clearCart = () => {
    console.log('clear')
  };

  const value: cartType = {
    addItem,
    addOne,
    removeItem,
    deleteItem,
    clearCart
  };

  return value;
};
