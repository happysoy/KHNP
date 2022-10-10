import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

const initialState = {
  isLoading: false,
  error: null,
  savedDatas: [],
  isOpenModalTSP: false,
  isOpenModalDEFECT: false,
  isOpenModalCALCURVE: false,
  toggleTSP: false,
  toggleDEFECT: false,
  toggleCALCURVE: false,
};

const slice = createSlice({
  name: 'analysisSetting',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    openModalTSP(state) {
      state.isOpenModalTSP = true;
    },
    openModalDEFECT(state) {
      state.isOpenModalDEFECT = true;
    },
    openModalCALCURVE(state) {
      state.isOpenModalCALCURVE = true;
    },
    closeModalTSP(state) {
      state.isOpenModalTSP = false;
      state.toggleTSP = true;
    },
    closeModalDEFECT(state) {
      state.isOpenModalDEFECT = false;
      state.toggleDEFECT = true;
    },
    closeModalCALCURVE(state) {
      state.isOpenModalCALCURVE = false;
      state.toggleCALCURVE = true;
    },
    getDatasSuccess(state, action) {
      state.isLoading = false;
      state.savedDatas = action.payload;
    },
    deleteDatasSuccess(state, action) {
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

// actions
export const { openModalTSP, openModalDEFECT, openModalCALCURVE, closeModalCALCURVE, closeModalTSP, closeModalDEFECT } =
  slice.actions;

export function insertData(newData) {
  return async () => {
    try {
      await axios.post('/api/analysis-setting/insertData', newData);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function updateData(newData) {
  return async () => {
    try {
      await axios.post('/api/analysis-setting/updateData', newData);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getData(userName) {
  return async () => {
    try {
      const response = await axios.post('/api/analysis-setting/getData', userName);
      dispatch(slice.actions.getDatasSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteData(userName) {
  return async () => {
    try {
      const response = await axios.post('/api/analysis-setting/deleteData', userName);
      dispatch(slice.actions.deleteDatasSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
