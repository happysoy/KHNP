import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// slices
import dataLoadReducer from "./slices/dataLoad";

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

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistsConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const dataLoadPersistConfig = {
  key: "dataLoad",
  storage,
  keyPrefix: "redux-",
  whitelist: ["sortBy", "checkout"],
};

const rootReducer = combineReducers({
  dataList: persistReducer(dataLoadPersistConfig, dataLoadReducer),
});

export { rootPersistsConfig, rootReducer };
