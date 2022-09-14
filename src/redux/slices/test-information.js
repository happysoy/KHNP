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

    closeModalUser(state) {
      state.isOpenModalUser = false;
    },
    closeModalEquipment(state) {
      state.isOpenModalEquipment = false;
    },
  },
});

export default slice.reducer;

// actions
export const { openModalUser, openModalEquipment, closeModalUser, closeModalEquipment } = slice.actions;
