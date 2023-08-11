import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCarItem: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);

      if (check) {
        toast("Already item in cart");
      } else {
        toast('Item Add succesfully'); 
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
    deleteCarItem: (state, action) => {
      toast("One item Delete");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);

      state.cartItem.splice(index, 1);
    },
    increseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      state.cartItem[index].qty = ++qty;
    },
    decreceQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        state.cartItem[index].qty = --qty;
      }
    },
  },
});

export const {
  setDataProduct,
  addCarItem,
  deleteCarItem,
  increseQty,
  decreceQty,
} = productSlice.actions;

export default productSlice.reducer;
