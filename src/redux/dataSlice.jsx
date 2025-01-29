import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataSlice = createSlice({
  name: "restaurant",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setData } = dataSlice.actions;
export default dataSlice.reducer;

export const fetchRestaurants = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("https://dummyjson.com/recipes");
    dispatch(setData(response.data.recipes));
  } catch (error) {
    console.log("Error fetching data:", error);
    dispatch(setLoading(false));
  }
};
