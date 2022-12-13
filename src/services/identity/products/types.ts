
export type TProduct = {
  id?: string;
  block?: string;
  note?: string;
  price?: string;
  productName?: string;
  productStatus?: string;
  projectId?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string; 
};

export type TFetchProductsResponse = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  items: TProduct[];
  totalItems: number;
  totalPages: number;
  pageSize: number;
  pageIndex: number;
};

export type TFetchProductResponse = {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  id: string;
  block: string;
  floor: string;
  note: string;
  price: string;
  productName: string;
  productStatus: string;
  projectId: string;
};

export type TUpdateProductBody = {
    productName: string;
    projectId: string;
    productStatus: string;
    price: number;
    block: string;
    floor: string;
    note: string;
}

export type TCreateProductBody = {
  productName: string;
  projectId: string;
  productStatus: string;
  price: number;
  block: string;
  floor: string;
  note: string;
  companyId: string;
}

export type TCreateProductResponse = {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  id: string;
  block: string;
  floor: string;
  note: string;
  price: string;
  productName: string;
  productStatus: string;
  projectId: string;
}