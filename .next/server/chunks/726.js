"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 3726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Au": () => (/* binding */ NAVBAR),
/* harmony export */   "Wm": () => (/* binding */ ICON),
/* harmony export */   "d$": () => (/* binding */ COGNITO_API),
/* harmony export */   "wd": () => (/* binding */ PATH_AFTER_LOGIN),
/* harmony export */   "yf": () => (/* binding */ HEADER)
/* harmony export */ });
/* unused harmony export BACKEND_API */
/* harmony import */ var _routes_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6939);
// routes

// API
// ----------------------------------------------------------
const PATH_AFTER_LOGIN = _routes_paths__WEBPACK_IMPORTED_MODULE_0__/* .PATH_DASHBOARD.autoSignal */ .vB.autoSignal;
const COGNITO_API = {
    userPoolId: "ap-northeast-1_w3UksuqHs",
    clientId: "3av4uac3efaf0dlqlds43mbpkk"
};
const BACKEND_API = {
    apiKey: process.env.API_URL
};
// LAYOUT
// ----------------------------------------------------------
const HEADER = {
    MOBILE_HEIGHT: 64,
    MAIN_DESKTOP_HEIGHT: 88,
    DASHBOARD_DESKTOP_HEIGHT: 80,
    DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32
};
const NAVBAR = {
    BASE_WIDTH: 260,
    DASHBOARD_WIDTH: 210,
    DASHBOARD_COLLAPSE_WIDTH: 88,
    //
    DASHBOARD_ITEM_ROOT_HEIGHT: 48,
    DASHBOARD_ITEM_SUB_HEIGHT: 40,
    DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32
};
const ICON = {
    NAVBAR_ITEM: 24,
    NAVBAR_ITEM_HORIZONTAL: 20
}; // LANGUAGES
 // ----------------------------------------------------------
 // export const allLangs = [{ label: "English", value: "en", systemValue: enUS },
 // { label: "Korean", value: "en", systemValue: enUS }];
 // export const defaultLang = allLangs[0]; // 기본 언어 English


/***/ }),

/***/ 6939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EE": () => (/* binding */ PATH_AUTH),
/* harmony export */   "vB": () => (/* binding */ PATH_DASHBOARD)
/* harmony export */ });
/* unused harmony export PATH_PAGE */
function path(root, sublink) {
    return `${root}${sublink}`;
}
const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";
const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, "/login"),
    register: path(ROOTS_AUTH, "/register")
};
const PATH_PAGE = {
    page404: "/404"
};
const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    autoSignal: path(ROOTS_DASHBOARD, "/auto-signal"),
    dataLoad: {
        root: path(ROOTS_DASHBOARD, "/data-load"),
        new: path(ROOTS_DASHBOARD, "/data-load/data/new"),
        view: (id)=>path(ROOTS_DASHBOARD, `/data-load/data/${id}`),
        edit: (id)=>path(ROOTS_DASHBOARD, `/data-load/data/${id}/edit`)
    },
    autoEvaluation: path(ROOTS_DASHBOARD, "/auto-evaluation"),
    autoResult: path(ROOTS_DASHBOARD, "/auto-result"),
    manualEvaluation: path(ROOTS_DASHBOARD, "/manual-evaluation"),
    report: path(ROOTS_DASHBOARD, "/report"),
    settings: path(ROOTS_DASHBOARD, "/settings")
};


/***/ })

};
;