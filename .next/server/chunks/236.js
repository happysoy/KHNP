"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 1804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KJ": () => (/* binding */ getDatas),
/* harmony export */   "SR": () => (/* binding */ deleteData),
/* harmony export */   "VA": () => (/* binding */ updateData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kt": () => (/* binding */ insertData)
/* harmony export */ });
/* unused harmony export actions */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2369);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4513);



const initialState = {
    isLoading: false,
    error: null,
    datas: [],
    data: null
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "data",
    initialState,
    reducers: {
        startLoading (state) {
            state.isLoading = true;
        },
        hasError (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        getDatasSuccess (state, action) {
            state.isLoading = false;
            state.datas = action.payload;
        },
        updateDataSuccess (state, action) {
            state.isLoading = false;
            state.data = action.payload;
        },
        insertDataSuccess (state, action) {
            state.isLoading = false;
            state.datas = action.payload;
        },
        deleteDataSuccess (state, action) {
            state.isLoading = false;
            state.datas = action.payload;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);
const { actions  } = slice;
function getDatas() {
    return async ()=>{
        (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.startLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("/api/data-load/getDatas");
            (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.getDatasSuccess(response.data));
        } catch (error) {
            (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.hasError(error));
        }
    };
}
function updateData(newData) {
    return async ()=>{
        (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.startLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/api/data-load/updateData", newData);
            (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.updateDataSuccess(response.data));
        } catch (error) {
            (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.hasError(error));
        }
    };
}
function insertData(newData) {
    return async ()=>{
        (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.startLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/api/data-load/insertData", newData);
            (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.insertDataSuccess(response.data));
        } catch (error) {
            (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.hasError(error));
        }
    };
}
function deleteData(row) {
    return async ()=>{
        (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.startLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/api/data-load/deleteData", row);
            (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.deleteDataSuccess(response.data));
        } catch (error) {
            (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .WI)(slice.actions.hasError(error));
        }
    };
}


/***/ }),

/***/ 4513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "WI": () => (/* binding */ store_dispatch),
  "h": () => (/* binding */ store),
  "I0": () => (/* binding */ useDispatch),
  "v9": () => (/* binding */ useSelector)
});

// UNUSED EXPORTS: persistor

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(4161);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "redux-persist/lib/storage/createWebStorage"
var createWebStorage_ = __webpack_require__(7388);
// EXTERNAL MODULE: external "lodash/sum"
var sum_ = __webpack_require__(5594);
// EXTERNAL MODULE: external "lodash/uniqBy"
var uniqBy_ = __webpack_require__(9309);
// EXTERNAL MODULE: ./src/utils/axios.js
var utils_axios = __webpack_require__(2369);
;// CONCATENATED MODULE: ./src/redux/slices/product.js



// utils

//

// ----------------------------------------------------------------------
const initialState = {
    isLoading: false,
    error: null,
    products: [],
    product: null
};
const slice = (0,toolkit_.createSlice)({
    name: "product",
    initialState,
    reducers: {
        // START LOADING
        startLoading (state) {
            state.isLoading = true;
        },
        // HAS ERROR
        hasError (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        // GET PRODUCTS
        getProductsSuccess (state, action) {
            state.isLoading = false;
            state.products = action.payload;
        },
        // GET PRODUCT
        getProductSuccess (state, action) {
            state.isLoading = false;
            state.product = action.payload;
        }
    }
});
// Reducer
/* harmony default export */ const product = (slice.reducer);
// ----------------------------------------------------------------------
function getProducts() {
    return async ()=>{
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get("/api/products");
            dispatch(slice.actions.getProductsSuccess(response.data.products));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
// ----------------------------------------------------------------------
function getProduct(name) {
    return async ()=>{
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get("/api/products/product", {
                params: {
                    name
                }
            });
            dispatch(slice.actions.getProductSuccess(response.data.product));
        } catch (error) {
            console.error(error);
            dispatch(slice.actions.hasError(error));
        }
    };
}

// EXTERNAL MODULE: ./src/redux/slices/data.js
var data = __webpack_require__(1804);
;// CONCATENATED MODULE: ./src/redux/RootReducer.js



// slices


// ----------------------------------------------------------------------
const createNoopStorage = ()=>({
        getItem () {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem () {
            return Promise.resolve();
        }
    });
const storage =  false ? 0 : createNoopStorage();
const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: []
};
const productPersistConfig = {
    key: "product",
    storage,
    keyPrefix: "redux-",
    whitelist: [
        "sortBy",
        "checkout"
    ]
};
const dataPersistConfig = {
    key: "data",
    storage,
    keyPrefix: "redux-",
    whitelist: []
};
const rootReducer = (0,external_redux_.combineReducers)({
    product: (0,external_redux_persist_.persistReducer)(productPersistConfig, product),
    data: (0,external_redux_persist_.persistReducer)(dataPersistConfig, data/* default */.ZP)
});


;// CONCATENATED MODULE: ./src/redux/store.js




// ----------------------------------------------------------------------
const store = (0,toolkit_.configureStore)({
    reducer: (0,external_redux_persist_.persistReducer)(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        })
});
const persistor = (0,external_redux_persist_.persistStore)(store);
const { dispatch: store_dispatch  } = store;
const useSelector = external_react_redux_.useSelector;
const useDispatch = ()=>(0,external_react_redux_.useDispatch)();



/***/ })

};
;