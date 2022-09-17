import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices
import responseTableReducer from './slices/response-table';
import dataReducer from './slices/data';
import testInformationReducer from './slices/test-information';
import analysisSettingReducer from './slices/analysis-setting';
// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const dataPersistConfig = {
  key: 'data',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  data: persistReducer(dataPersistConfig, dataReducer),
  testInformation: testInformationReducer,
  tableDatas: persistReducer(dataPersistConfig, responseTableReducer),
  analysisSetting: persistReducer(dataPersistConfig, analysisSettingReducer),
});

export { rootPersistConfig, rootReducer };
