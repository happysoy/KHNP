import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

const initialState = {
  isLoading: false,
  error: null,
  events: [],
  isOpenModalTSP: false,
  isOpenModalDEFECT: false,
  isOpenCALCURVE: false,
  toggleTSP: false,
  toggleDEFECT: false,
  toggleOption: false,
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
    openModalCALCRUVE(state) {
      state.isOpenCALCURVE = true;
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
      state.isOpenCALCURVE = false;
      state.toggleCALCURVE = true;
    },
  },
});

export default slice.reducer;

// actions
export const { openModalTSP, openModalDEFECT, openModalCALCURVE, closeModalCALCURVE, closeModalTSP, closeModalDEFECT } =
  slice.actions;
