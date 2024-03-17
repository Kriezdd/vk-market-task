import {FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {SerializedError} from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}

export interface CartResponse {
  id?: number;
  products: Product[];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
}
