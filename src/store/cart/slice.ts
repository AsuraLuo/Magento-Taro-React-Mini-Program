import { createSlice, Slice } from "@reduxjs/toolkit";

export const slice: Slice = createSlice({
  name: "cart",
  initialState: {
    cartId: null,
    cartDetail: null,
  },
  reducers: {
    setCartId: (state: any, { payload }) => {
      state.cartId = payload;
    },
    setCartDetail: (state: any, { payload }) => {
      state.cartId = payload.id;
      state.cartDetail = payload;
    },
    setInitialState: (state: any) => {
      state.cartId = null;
      state.cartDetail = null;
    },
  },
});
