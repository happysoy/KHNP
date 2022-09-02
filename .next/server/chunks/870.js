"use strict";
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ CollapseDrawerContext),
/* harmony export */   "z": () => (/* binding */ CollapseDrawerProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);



// @mui


// ----------------------------------------------------------------------
const initialState = {
    isCollapse: false,
    collapseClick: false,
    onToggleCollapse: ()=>{}
};
const CollapseDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialState);
// ----------------------------------------------------------------------
CollapseDrawerProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function CollapseDrawerProvider({ children  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.down("lg"));
    const { 0: collapse , 1: setCollapse  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        click: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isMobile) {
            setCollapse({
                click: false
            });
        }
    }, [
        isMobile
    ]);
    const handleToggleCollapse = ()=>{
        setCollapse({
            ...collapse,
            click: !collapse.click
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollapseDrawerContext.Provider, {
        value: {
            isCollapse: collapse.click,
            collapseClick: collapse.click,
            onToggleCollapse: handleToggleCollapse
        },
        children: children
    });
}



/***/ }),

/***/ 5102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useResponsive)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
// @mui


// ----------------------------------------------------------------------
function useResponsive(query, key, start, end) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const mediaUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.up(key));
    const mediaDown = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.down(key));
    const mediaBetween = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.between(start, end));
    const mediaOnly = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.only(key));
    if (query === "up") {
        return mediaUp;
    }
    if (query === "down") {
        return mediaDown;
    }
    if (query === "between") {
        return mediaBetween;
    }
    if (query === "only") {
        return mediaOnly;
    }
};


/***/ }),

/***/ 6034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ cssStyles)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function getDirection(value = "bottom") {
    return ({
        top: "to top",
        right: "to right",
        bottom: "to bottom",
        left: "to left"
    })[value];
}
// ----------------------------------------------------------------------
function cssStyles(theme) {
    return {
        bgBlur: (props)=>{
            const color = props?.color || theme?.palette.background.default || "#000000";
            const blur = props?.blur || 6;
            const opacity = props?.opacity || 0.8;
            return {
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, opacity)
            };
        },
        bgGradient: (props)=>{
            const direction = getDirection(props?.direction);
            const startColor = props?.startColor || `${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#000000", 0)} 0%`;
            const endColor = props?.endColor || "#000000 75%";
            return {
                background: `linear-gradient(${direction}, ${startColor}, ${endColor});`
            };
        },
        bgImage: (props)=>{
            const url = props?.url || "/assets/bg_gradient.jpeg";
            const direction = getDirection(props?.direction);
            const startColor = props?.startColor || (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme?.palette.grey[900] || "#000000", 0.88);
            const endColor = props?.endColor || (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme?.palette.grey[900] || "#000000", 0.88);
            return {
                background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            };
        }
    };
};


/***/ })

};
;