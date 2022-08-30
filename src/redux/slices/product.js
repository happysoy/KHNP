import { createSlice } from "@reduxjs/toolkit";
import sum from "lodash/sum";
import uniqBy from "lodash/uniqBy";
// utils
import axios from "../../utils/axios";
//
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  products: [],
  product: null,
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },

    // GET PRODUCT
    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getProducts() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/products");
      dispatch(slice.actions.getProductsSuccess(response.data.products));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getProduct(name) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/products/product", {
        params: { name },
      });
      dispatch(slice.actions.getProductSuccess(response.data.product));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
