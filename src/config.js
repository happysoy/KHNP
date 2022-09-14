// routes
import { PATH_DASHBOARD } from './routes/paths';

// API
// ----------------------------------------------------------
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.autoEvaluation;

export const COGNITO_API = {
  userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID,
};
export const BACKEND_API = {
  apiKey: process.env.API_URL,
};
// LAYOUT
// ----------------------------------------------------------
export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 80,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 210,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 24,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// LANGUAGES
// ----------------------------------------------------------
// export const allLangs = [{ label: "English", value: "en", systemValue: enUS },
// { label: "Korean", value: "en", systemValue: enUS }];

// export const defaultLang = allLangs[0]; // 기본 언어 English
