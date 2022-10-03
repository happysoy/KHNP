import { createSlice } from '@reduxjs/toolkit';
import { shortId } from 'src/sections/dashboard/auto-evaluation/add-delete-table/utils';

import axios from '../../utils/axios';
import { dispatch } from '../store';

const initialState = {
  isLoading: false,
  drawLoading: true,
  error: null,
  datas: [],
  data: null,
  graphDatas: [],
  errorDatas: [],
};

const slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    doneDrawing(state) {
      state.drawLoading = false;
    },
    startDrawing(state) {
      state.drawLoading = true;
    },
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
    // postGraphDatasSuccess(state, action) {
    //   state.isLoading = false;
    //   state.graphDatas = action.payload;
    // },
    getGraphDatasSuccess(state, action) {
      state.isLoading = false;
      state.graphDatas = action.payload;
    },
    getErrorGraphListSuccess(state, action) {
      state.isLoading = false;
      state.errorDatas = action.payload;
    },
  },
});

export default slice.reducer;
export const { actions } = slice;

export function getDatas() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/data-load/getDatas');
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
      const response = await axios.post('/api/data-load/updateData', newData);
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
      const response = await axios.post('/api/data-load/insertData', newData);
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
      const response = await axios.post('/api/data-load/deleteData', row);
      dispatch(slice.actions.deleteDataSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// export function postGraphDatas(data) {
//   return async () => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.post('/api/manual-evaluation/postGraphDatas', data);
//       dispatch(slice.actions.postGraphDatasSuccess(response.data));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

export function doneDrawing() {
  return async () => {
    dispatch(slice.actions.doneDrawing());
  };
}

export function startDrawing() {
  return async () => {
    dispatch(slice.actions.startDrawing());
  };
}

export function getGraphDatas(data) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/api/manual-evaluation/getGraphDatas', data);
      const parse = JSON.parse(response.data[0]?.channel_data);
      dispatch(slice.actions.getGraphDatasSuccess(parse));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getErrorGraphList() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/manual-evaluation/getErrorGraphList');
      const refineList = [];
      response.data.map((data, index) => {
        const defectCode = JSON.parse(data.DEFECT_CODE);
        const defectTEIO = JSON.parse(data.TEIO);
        const defectLocation = JSON.parse(data.DEFECT_LOCATION);
        const codeArray = Object.values(defectCode);
        const locationArray = Object.values(defectLocation);
        const pns = data.id;
        codeArray.map((item, idx) => {
          const obj = {
            id: shortId(),
            pns: pns,
            TEIO: defectTEIO,
            DEFECT_CODE: item,
            DEFECT_LOCATION: locationArray,
          };
          refineList.push(obj);
        });
      });
      dispatch(slice.actions.getErrorGraphListSuccess(refineList));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
