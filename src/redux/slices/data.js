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
    updateDataSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    insertDataSuccess(state, action) {
      state.isLoading = false;
      state.datas = action.payload;
    },
    deleteDataSuccess(state, action) {
      state.isLoading = false;
      state.datas = action.payload;
    },
  },
});

export default slice.reducer;
export const { actions } = slice;

export function getDatas() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/data-load/getDatas");
      dispatch(slice.actions.getDatasSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function updateData(newData) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/data-load/updateData", newData);
      dispatch(slice.actions.updateDataSuccess(response.data));
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
      dispatch(slice.actions.insertDataSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteData(row) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/data-load/deleteData", row);
      dispatch(slice.actions.deleteDataSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
