"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 5907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);



// @mui

// ----------------------------------------------------------------------
Image.propTypes = {
    disabledEffect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    effect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    ratio: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "4/3",
        "3/4",
        "6/4",
        "4/6",
        "16/9",
        "9/16",
        "21/9",
        "9/21",
        "1/1"
    ]),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Image({ ratio , disabledEffect =false , effect ="blur" , sx , ...other }) {
    if (ratio) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            component: "span",
            sx: {
                width: 1,
                lineHeight: 0,
                display: "block",
                overflow: "hidden",
                position: "relative",
                pt: getRatio(ratio),
                "& .wrapper": {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    lineHeight: 0,
                    position: "absolute",
                    backgroundSize: "cover !important"
                },
                ...sx
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage,
                wrapperClassName: "wrapper",
                effect: disabledEffect ? undefined : effect,
                placeholderSrc: "/assets/placeholder.svg",
                sx: {
                    width: 1,
                    height: 1,
                    objectFit: "cover"
                },
                ...other
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: "span",
        sx: {
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            "& .wrapper": {
                width: 1,
                height: 1,
                backgroundSize: "cover !important"
            },
            ...sx
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage,
            wrapperClassName: "wrapper",
            effect: disabledEffect ? undefined : effect,
            placeholderSrc: "/assets/placeholder.svg",
            sx: {
                width: 1,
                height: 1,
                objectFit: "cover"
            },
            ...other
        })
    });
};
// ----------------------------------------------------------------------
function getRatio(ratio = "1/1") {
    return ({
        "4/3": "calc(100% / 4 * 3)",
        "3/4": "calc(100% / 3 * 4)",
        "6/4": "calc(100% / 6 * 4)",
        "4/6": "calc(100% / 4 * 6)",
        "16/9": "calc(100% / 16 * 9)",
        "9/16": "calc(100% / 9 * 16)",
        "21/9": "calc(100% / 21 * 9)",
        "9/21": "calc(100% / 9 * 21)",
        "1/1": "100%"
    })[ratio];
}


/***/ }),

/***/ 7850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oe": () => (/* binding */ fData)
/* harmony export */ });
/* unused harmony exports fCurrency, fPercent, fNumber, fShortenNumber */
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function fCurrency(number) {
    return numeral(number).format(Number.isInteger(number) ? "$0,0" : "$0,0.00");
}
function fPercent(number) {
    return numeral(number / 100).format("0.0%");
}
function fNumber(number) {
    return numeral(number).format();
}
function fShortenNumber(number) {
    return numeral(number).format("0.00a").replace(".00", "");
}
function fData(number) {
    return numeral__WEBPACK_IMPORTED_MODULE_0___default()(number).format("0.0 b");
}


/***/ })

};
;