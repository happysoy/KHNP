"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 1988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function createGradient(color1, color2) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}
// SETUP COLORS
const PRIMARY = {
    lighter: "#C8FACD",
    light: "#5BE584",
    main: "#00AB55",
    dark: "#007B55",
    darker: "#005249"
};
const SECONDARY = {
    lighter: "#D6E4FF",
    light: "#84A9FF",
    main: "#3366FF",
    dark: "#1939B7",
    darker: "#091A7A"
};
const INFO = {
    lighter: "#D0F2FF",
    light: "#74CAFF",
    main: "#1890FF",
    dark: "#0C53B7",
    darker: "#04297A"
};
const SUCCESS = {
    lighter: "#E9FCD4",
    light: "#AAF27F",
    main: "#54D62C",
    dark: "#229A16",
    darker: "#08660D"
};
const WARNING = {
    lighter: "#FFF7CD",
    light: "#FFE16A",
    main: "#FFC107",
    dark: "#B78103",
    darker: "#7A4F01"
};
const ERROR = {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E"
};
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
    5008: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.08),
    50012: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.12),
    50016: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.16),
    50024: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.24),
    50032: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.32),
    50048: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.48),
    50056: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.56),
    50080: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.8)
};
const GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main)
};
const CHART_COLORS = {
    violet: [
        "#826AF9",
        "#9E86FF",
        "#D0AEFF",
        "#F7D2FF"
    ],
    blue: [
        "#2D99FF",
        "#83CFFF",
        "#A5F3FF",
        "#CCFAFF"
    ],
    green: [
        "#2CD9C5",
        "#60F1C8",
        "#A4F7CC",
        "#C0F2DC"
    ],
    yellow: [
        "#FFE700",
        "#FFEF5A",
        "#FFF7AE",
        "#FFF3D6"
    ],
    red: [
        "#FF6C40",
        "#FF8F6D",
        "#FFBD98",
        "#FFF2D4"
    ]
};
const COMMON = {
    common: {
        black: "#000",
        white: "#fff"
    },
    primary: {
        ...PRIMARY,
        contrastText: "#fff"
    },
    secondary: {
        ...SECONDARY,
        contrastText: "#fff"
    },
    info: {
        ...INFO,
        contrastText: "#fff"
    },
    success: {
        ...SUCCESS,
        contrastText: GREY[800]
    },
    warning: {
        ...WARNING,
        contrastText: GREY[800]
    },
    error: {
        ...ERROR,
        contrastText: "#fff"
    },
    grey: GREY,
    gradients: GRADIENTS,
    chart: CHART_COLORS,
    divider: GREY[50024],
    action: {
        hover: GREY[5008],
        selected: GREY[50016],
        disabled: GREY[50080],
        disabledBackground: GREY[50024],
        focus: GREY[50024],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
const palette = {
    light: {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#fff",
            default: "#fff",
            neutral: GREY[200]
        },
        action: {
            active: GREY[600],
            ...COMMON.action
        }
    },
    dark: {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#fff",
            secondary: GREY[500],
            disabled: GREY[600]
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: GREY[50016]
        },
        action: {
            active: GREY[500],
            ...COMMON.action
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (palette);


/***/ })

};
;