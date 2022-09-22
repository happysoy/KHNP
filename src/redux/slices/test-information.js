import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

const initialState = {
  isLoading: false,
  error: null,
  savedDatasECT: [],
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
    getDataSuccess(state, action) {
      state.isLoading = false;
      state.savedDatasECT = action.payload;
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

export function insertData(newData) {
  return async () => {
    try {
      await axios.post('/api/auto-evaluation/insertData', newData);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getData(userName) {
  return async () => {
    try {
      const response = await axios.post('/api/auto-evaluation/getData', userName);
      dispatch(slice.actions.getDataSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteData(newData) {
  return async () => {
    try {
      await axios.post('/api/auto-evaluation/deleteData', newData);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
