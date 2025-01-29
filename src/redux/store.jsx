import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import priceSlice from "./priceSlice";

export const store = configureStore({
  reducer: {
    restaurant: dataSlice,
    cart: cartSlice,
    filter: filterSlice,
    price: priceSlice,
  },
});
