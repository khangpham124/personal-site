import { cartType } from '@/interfaces/cart-types';
import { createContext } from 'react';

export const initialContextValues: cartType = {
  // cart: [],
};

const CartContext = createContext<cartType>(initialContextValues);

export default CartContext;
