import { ICart } from '@/interfaces/cart-types';

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const DELETE_WISHLIST_ITEM = 'DELETE_WISHLIST_ITEMS';
export const SET_WISHLIST = 'SET_WISHLIST';
export const CLEAR_WISHLIST = 'CLEAR_WISHLIST';

export type TypeProduct = {
  id: number;
  image1?: string;
  image2?: string;
  name: string;
  price: number;
  qty?: number;
};

export type wishlistType = {
  addItem?: (item: ICart) => void; // delete
  addToWishlist?: (item: ICart) => void;
  removeItem?: (item: ICart) => void; // delete
  deleteWishlistItem?: (item: ICart) => void;
  clearWishlist?: () => void;
};
