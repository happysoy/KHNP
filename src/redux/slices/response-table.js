import { createSlice } from '@reduxjs/toolkit';

import axios from '../../utils/axios';
import { dispatch } from '../store';

const initialState = {
  isLoading: false,
  error: null,
  tableDatas: [],
};
const slice = createSlice({
  name: 'tableDatas',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getHeaderSuccess(state, action) {
      state.isLoading = false;
      state.tableDatas = action.payload;
    },
  },
});

export default slice.reducer;
export const { actions } = slice;

export function getTableHeader() {
  return async () => {
    try {
      const response = await axios.post('/api/response-table/getTableHeader');
      dispatch(slice.actions.getHeaderSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
