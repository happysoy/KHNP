"use strict";
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);



// next

// @mui


// ----------------------------------------------------------------------
const Logo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ disabledLink =false , isCollapse , sx  }, ref)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const cropLogo = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        ref: ref,
        component: "img",
        src: "/cropLogo.png",
        sx: {
            width: 27,
            height: 32,
            cursor: "pointer",
            ...sx
        }
    });
    const logo = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        display: "flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                ref: ref,
                component: "img",
                src: "/cropLogo.png",
                sx: {
                    width: 27,
                    height: 32,
                    cursor: "pointer",
                    ...sx
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                ref: ref,
                component: "img",
                src: "/textLogo.png",
                sx: {
                    ml: 1,
                    width: "40%",
                    height: 32,
                    cursor: "pointer",
                    ...sx
                }
            })
        ]
    });
    //   const logo = (
    //     <Box ref={ref} sx={{ width: 40, height: 40, cursor: "pointer", ...sx }}>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="100%"
    //         height="100%"
    //         viewBox="0 0 512 512"
    //       >
    //         <defs>
    //           <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
    //             <stop offset="0%" stopColor={PRIMARY_DARK} />
    //             <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //           </linearGradient>
    //           <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
    //             <stop offset="0%" stopColor={PRIMARY_LIGHT} />
    //             <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //           </linearGradient>
    //           <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
    //             <stop offset="0%" stopColor={PRIMARY_LIGHT} />
    //             <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //           </linearGradient>
    //         </defs>
    //         <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
    //           <path
    //             fill="url(#BG1)"
    //             d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"
    //           />
    //           <path
    //             fill="url(#BG2)"
    //             d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
    //           />
    //           <path
    //             fill="url(#BG3)"
    //             d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
    //           />
    //         </g>
    //       </svg>
    //     </Box>
    //   );
    if (disabledLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: isCollapse ? cropLogo : null
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: isCollapse ? cropLogo : logo
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ })

};
;