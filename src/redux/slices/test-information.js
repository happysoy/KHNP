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
  isOpenModalEquipment: false,
  isOpenModalSignalAcquisition: false,
  isOpenModalTestInstrument: false,
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
    },
    closeModalEquipment(state) {
      state.isOpenModalEquipment = false;
    },
    closeModalSignalAcquisition(state) {
      state.isOpenModalSignalAcquisition = false;
    },
    closeModalTestInstrument(state) {
      state.isOpenModalTestInstrument = false;
    },
  },
});

export default slice.reducer;

// actions
export const {
  openModalUser,
  openModalEquipment,
  openModalSignalAcquisition,
  openModalTestInstrument,
  closeModalUser,
  closeModalEquipment,
  closeModalSignalAcquisition,
  closeModalTestInstrument,
} = slice.actions;
