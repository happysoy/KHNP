import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";
import { dispatch } from "../store";

const initialState = {
  isLoading: false,
  error: null,
  datas: [],
  data: null,
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getDatasSuccess(state, action) {
      state.isLoading = false;
      state.datas = action.payload;
    },
    getDataSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export default slice.reducer;
export const { actions } = slice;

export function getDatas() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/data-load/selectData");
      dispatch(slice.actions.getDatasSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function insertData(newData) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/data-load/insertData", newData);
      console.log("response", response);
      // dispatch(slice.actions.getDatasSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
