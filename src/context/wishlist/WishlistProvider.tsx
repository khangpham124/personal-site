import { useEffect } from 'react';
import WishlistContext from './WishlistContext';
import {
  wishlistType,
} from './wishlist-type';
import { ICart } from '@/interfaces/cart-types';
import {  profileAPI } from '@/services/customerProfile';
import { getCookie } from 'cookies-next';
// import { IProductStore } from "@/interfaces/customerProduct-service";

export const ProvideWishlist = ({ children }: { children: React.ReactNode }) => {
  const value = useProvideWishlist();
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

// export const useWishlist = () => useContext(WishlistContext);

const useProvideWishlist = () => {
  const serviceprofileAPI = new profileAPI();
  // const initPersistState: wishlistType = { wishlist: [] };
  // const [state, dispatch] = useReducer(wishlistReducer, initPersistState);

  useEffect(() => {
    if( getCookie('token') && getCookie('user') )  {
      serviceprofileAPI.getCustomerWishList().then((res: any) => {
        if(res.error) {
          console.log('logout')
          return false
        }
        const wishlist = res.data?.data;
        const wistlistUuid = wishlist.map((wish: any) => wish.product.uuid);
        localStorage.setItem('wishlist', JSON.stringify(wistlistUuid));
      });
    }
    
  }, []);


  const addToWishlist = (item: ICart) => {
    console.log(item)
  };

  const deleteWishlistItem = (item: ICart) => {
    console.log(item)
  };

  const clearWishlist = () => {
    console.log('clear wishlist')
  };

  const value: wishlistType = {
    addToWishlist,
    deleteWishlistItem,
    clearWishlist,
  };

  return value;
};
