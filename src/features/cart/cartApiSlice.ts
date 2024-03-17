import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {CartResponse} from "../../types/types";

const BASE_API_URL = "https://dummyjson.com/";

export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCart: builder.query<CartResponse, number | void>({
      query: () => "carts/1",
    }),
  }),
})

export const { useGetCartQuery } = cartApiSlice;
