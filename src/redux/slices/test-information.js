import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

const initialState = {
  isLoading: false,
  error: null,
  events: [],
  isOpenModalUser: false,
  toggleUser: false,

  isOpenModalEquipment: false,
  toggleEquipment: false,
  isOpenModalSignalAcquisition: false,
  toggleSignalAcquisition: false,
  isOpenModalTestInstrument: false,
  toggleTestInstrument: false,
};

const slice = createSlice({
  name: 'testInformation',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    openModalUser(state) {
      state.isOpenModalUser = true;
    },
    openModalEquipment(state) {
      state.isOpenModalEquipment = true;
    },
    openModalSignalAcquisition(state) {
      state.isOpenModalSignalAcquisition = true;
    },
    openModalTestInstrument(state) {
      state.isOpenModalTestInstrument = true;
    },
    closeModalUser(state) {
      state.isOpenModalUser = false;
      state.toggleUser = true;
    },
    closeModalEquipment(state) {
      state.isOpenModalEquipment = false;
      state.toggleEquipment = true;
    },
    closeModalSignalAcquisition(state) {
      state.isOpenModalSignalAcquisition = false;
      state.toggleSignalAcquisition = true;
    },
    closeModalTestInstrument(state) {
      state.isOpenModalTestInstrument = false;
      state.toggleTestInstrument = true;
    },
  },
});

export default slice.reducer;

// actions
export const {
  toggleUser,
  toggleEquipment,
  toggleSignalAcquisition,
  toggleTestInstrument,
  openModalUser,
  openModalEquipment,
  openModalSignalAcquisition,
  openModalTestInstrument,
  closeModalUser,
  closeModalEquipment,
  closeModalSignalAcquisition,
  closeModalTestInstrument,
} = slice.actions;
