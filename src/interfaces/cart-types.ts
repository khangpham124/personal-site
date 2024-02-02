export type TImage = {
  id: number | string;
  image_url: string;
};

export type commonType = {
  name: string;
  skuCode: string
  slug?: string;
  price: number;
  sale_price?: number;
  variants?: any;
  product_specifications?: any;
  qty?: number | undefined;
  discountPercent?: string;
  description?: string;
  detail?: string;
  categoryId?: number;
  stock?: number;
  createdAt?: string;
  updatedAt?: string | null;
  category?: {
    id?: number;
    name?: string;
    slug?: string;
    description?: string;
    thumbnailImage?: string;
    createdAt?: string;
    images?: TImage[] | undefined;
    updatedAt?: string | null;
  };
  images?: TImage[];
};

export interface IProduct extends commonType {
  uuid: string;
  badge?: string;
  image1?: string;
  image2?: string;
}


export interface ICart extends commonType {
  productUuid: string;
  quantity: number,
  mainImg:string,
  totalAvailableItems?:number
}

export interface ICollection  {
  uuid: string;
  name: string;
  imageUrl?: string;
  descriptionVi?: string;
  descriptionEn?: string;
}

export type cartFuncType = (item: ICart) => void;
export type cartFuncTypeNo = (item: string) => void;

export type cartType = {
  addItem?: cartFuncType;
  addOne?: cartFuncType;
  removeItem?: cartFuncType;
  deleteItem?: cartFuncTypeNo;
  clearCart?: () => void;
};
