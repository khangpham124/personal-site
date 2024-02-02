import { ICart } from '@/interfaces/cart-types';
// import addWishlist from '@/Util/addWishlist';
import {
  ADD_TO_WISHLIST,
  DELETE_WISHLIST_ITEM,
  CLEAR_WISHLIST,
  wishlistType,
  SET_WISHLIST,
} from './wishlist-type';

type actionType = {
  type: string;
  payload?: ICart | ICart[];
};

const wishlistReducer = (state: wishlistType, action: actionType) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        // wishlist: addWishlist(state.wishlist, action.payload as ICart),
      };
    case DELETE_WISHLIST_ITEM:
      return {
        ...state,
        // wishlist: state.wishlist.filter(
        //   (wishlistItem) => wishlistItem.id !== (action.payload as ICart).id
        // ),
      };
    case SET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload as ICart[],
      };
    case CLEAR_WISHLIST:
      return {
        ...state,
        wishlist: [],
      };
    default:
      return state;
  }
};

export default wishlistReducer;
