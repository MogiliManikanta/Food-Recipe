import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
  name: "price",
  initialState: {
    priceCategory: "All",
  },
  reducers: {
    priceCategory: (state, action) => {
      state.priceCategory = action.payload;
    },
  },
});

export const { priceCategory } = priceSlice.actions;
export default priceSlice.reducer;
