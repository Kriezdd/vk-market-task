import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { CartResponse, Product } from "../../types/types";

interface CartState {
  products: Product[];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  totalCost?: number;
  totalQuantity?: number;
}

const initialState: CartState = {
  products: [],
  isLoading: false,
  error: undefined,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity(state, action: PayloadAction<{ id: number }>) {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item && item.quantity < 10) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action: PayloadAction<{ id: number }>) {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    remove(state, action: PayloadAction<{ id: number }>) {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
    },
    setCart(state, action: PayloadAction<CartResponse>) {
      state.products = action.payload.products;
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
    setTotals(state) {
      state.totalCost = state.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
      state.totalQuantity = state.products.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
});

export const {increaseQuantity, decreaseQuantity, remove, setCart, setTotals} = cartSlice.actions;

export default cartSlice.reducer;
