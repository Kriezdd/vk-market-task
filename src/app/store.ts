import { configureStore } from '@reduxjs/toolkit';
import { cartApiSlice } from "../features/cart/cartApiSlice";
import cartSliceReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
