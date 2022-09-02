"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 7150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NotistackProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2554);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_6__, _animate__WEBPACK_IMPORTED_MODULE_7__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_6__, _animate__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// @mui


//


// ----------------------------------------------------------------------
function SnackbarStyles() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const isLight = theme.palette.mode === "light";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.GlobalStyles, {
        styles: {
            "#__next": {
                "& .SnackbarContent-root": {
                    width: "100%",
                    padding: theme.spacing(1),
                    margin: theme.spacing(0.25, 0),
                    boxShadow: theme.customShadows.z8,
                    borderRadius: theme.shape.borderRadius,
                    color: theme.palette.grey[isLight ? 0 : 800],
                    backgroundColor: theme.palette.grey[isLight ? 900 : 0],
                    "&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo": {
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.background.paper
                    },
                    [theme.breakpoints.up("md")]: {
                        minWidth: 240
                    }
                },
                "& .SnackbarItem-message": {
                    padding: "0 !important",
                    fontWeight: theme.typography.fontWeightMedium
                },
                "& .SnackbarItem-action": {
                    marginRight: 0,
                    color: theme.palette.action.active,
                    "& svg": {
                        width: 20,
                        height: 20
                    }
                }
            }
        }
    });
}
// ----------------------------------------------------------------------
NotistackProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function NotistackProvider({ children  }) {
    const notistackRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const onClose = (key)=>()=>{
            notistackRef.current.closeSnackbar(key);
        };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarStyles, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(notistack__WEBPACK_IMPORTED_MODULE_3__.SnackbarProvider, {
                ref: notistackRef,
                dense: true,
                maxSnack: 5,
                preventDuplicate: true,
                autoHideDuration: 3000,
                TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_5__.Collapse,
                variant: "success" // Set default variant
                ,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                iconVariant: {
                    info: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarIcon, {
                        icon: "eva:info-fill",
                        color: "info"
                    }),
                    success: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarIcon, {
                        icon: "eva:checkmark-circle-2-fill",
                        color: "success"
                    }),
                    warning: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarIcon, {
                        icon: "eva:alert-triangle-fill",
                        color: "warning"
                    }),
                    error: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarIcon, {
                        icon: "eva:alert-circle-fill",
                        color: "error"
                    })
                },
                // With close as default
                action: (key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_7__/* .AnimateIconButton */ .aZ, {
                        size: "small",
                        onClick: onClose(key),
                        sx: {
                            p: 0.5
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            icon: "eva:close-fill"
                        })
                    }),
                children: children
            })
        ]
    });
};
// ----------------------------------------------------------------------
SnackbarIcon.propTypes = {
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error", 
    ])
};
function SnackbarIcon({ icon , color  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        component: "span",
        sx: {
            mr: 1.5,
            width: 40,
            height: 40,
            display: "flex",
            borderRadius: 1.5,
            alignItems: "center",
            justifyContent: "center",
            color: `${color}.main`,
            bgcolor: (theme)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette[color].main, 0.16)
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            icon: icon,
            width: 24,
            height: 24
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionLazyContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// ----------------------------------------------------------------------
// eslint-disable-next-line import/extensions
const loadFeatures = ()=>__webpack_require__.e(/* import() */ 754).then(__webpack_require__.bind(__webpack_require__, 2754)).then((res)=>res.default);
MotionLazyContainer.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function MotionLazyContainer({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.LazyMotion, {
        strict: true,
        features: loadFeatures,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rB": () => (/* reexport */ ChartStyle)
});

// UNUSED EXPORTS: BaseOptionChart, default

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/utils/cssStyles.js
var cssStyles = __webpack_require__(6034);
;// CONCATENATED MODULE: ./src/components/chart/ChartStyle.js
// @mui



// utils

// ----------------------------------------------------------------------
function ChartStyle() {
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.GlobalStyles, {
        styles: {
            "&.apexcharts-canvas": {
                // Tooltip
                ".apexcharts-xaxistooltip": {
                    ...(0,cssStyles/* default */.Z)(theme).bgBlur(),
                    border: 0,
                    color: theme.palette.text.primary,
                    boxShadow: theme.customShadows.dropdown,
                    borderRadius: Number(theme.shape.borderRadius) * 1.5,
                    "&:before": {
                        borderBottomColor: "transparent"
                    },
                    "&:after": {
                        borderBottomColor: (0,styles_.alpha)(theme.palette.background.default, 0.8)
                    }
                },
                ".apexcharts-tooltip.apexcharts-theme-light": {
                    ...(0,cssStyles/* default */.Z)(theme).bgBlur(),
                    border: 0,
                    boxShadow: theme.customShadows.dropdown,
                    borderRadius: Number(theme.shape.borderRadius) * 1.5,
                    "& .apexcharts-tooltip-title": {
                        border: 0,
                        textAlign: "center",
                        fontWeight: theme.typography.fontWeightBold,
                        backgroundColor: theme.palette.grey[50016],
                        color: theme.palette.text[theme.palette.mode === "light" ? "secondary" : "primary"]
                    }
                },
                // Legend
                ".apexcharts-legend": {
                    padding: 0
                },
                ".apexcharts-legend-series": {
                    display: "flex !important",
                    alignItems: "center"
                },
                ".apexcharts-legend-marker": {
                    marginRight: 8
                },
                ".apexcharts-legend-text": {
                    lineHeight: "18px",
                    textTransform: "capitalize"
                }
            }
        }
    });
};

;// CONCATENATED MODULE: ./src/components/chart/BaseOptionChart.js
// @mui

// ----------------------------------------------------------------------
function BaseOptionChart() {
    const theme = useTheme();
    const LABEL_TOTAL = {
        show: true,
        label: "Total",
        color: theme.palette.text.secondary,
        fontSize: theme.typography.subtitle2.fontSize,
        fontWeight: theme.typography.subtitle2.fontWeight,
        lineHeight: theme.typography.subtitle2.lineHeight
    };
    const LABEL_VALUE = {
        offsetY: 8,
        color: theme.palette.text.primary,
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
        lineHeight: theme.typography.h3.lineHeight
    };
    return {
        // Colors
        colors: [
            theme.palette.primary.main,
            theme.palette.chart.yellow[0],
            theme.palette.chart.blue[0],
            theme.palette.chart.violet[0],
            theme.palette.chart.green[0],
            theme.palette.chart.red[0], 
        ],
        // Chart
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            // animations: { enabled: false },
            foreColor: theme.palette.text.disabled,
            fontFamily: theme.typography.fontFamily
        },
        // States
        states: {
            hover: {
                filter: {
                    type: "lighten",
                    value: 0.04
                }
            },
            active: {
                filter: {
                    type: "darken",
                    value: 0.88
                }
            }
        },
        // Fill
        fill: {
            opacity: 1,
            gradient: {
                type: "vertical",
                shadeIntensity: 0,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [
                    0,
                    100
                ]
            }
        },
        // Datalabels
        dataLabels: {
            enabled: false
        },
        // Stroke
        stroke: {
            width: 3,
            curve: "smooth",
            lineCap: "round"
        },
        // Grid
        grid: {
            strokeDashArray: 3,
            borderColor: theme.palette.divider
        },
        // Xaxis
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        // Markers
        markers: {
            size: 0,
            strokeColors: theme.palette.background.paper
        },
        // Tooltip
        tooltip: {
            x: {
                show: false
            }
        },
        // Legend
        legend: {
            show: true,
            fontSize: String(13),
            position: "top",
            horizontalAlign: "right",
            markers: {
                radius: 12
            },
            fontWeight: 500,
            itemMargin: {
                horizontal: 12
            },
            labels: {
                colors: theme.palette.text.primary
            }
        },
        // plotOptions
        plotOptions: {
            // Bar
            bar: {
                columnWidth: "28%",
                borderRadius: 4
            },
            // Pie + Donut
            pie: {
                donut: {
                    labels: {
                        show: true,
                        value: LABEL_VALUE,
                        total: LABEL_TOTAL
                    }
                }
            },
            // Radialbar
            radialBar: {
                track: {
                    strokeWidth: "100%",
                    background: theme.palette.grey[50016]
                },
                dataLabels: {
                    value: LABEL_VALUE,
                    total: LABEL_TOTAL
                }
            },
            // Radar
            radar: {
                polygons: {
                    fill: {
                        colors: [
                            "transparent"
                        ]
                    },
                    strokeColors: theme.palette.divider,
                    connectorColors: theme.palette.divider
                }
            },
            // polarArea
            polarArea: {
                rings: {
                    strokeColor: theme.palette.divider
                },
                spokes: {
                    connectorColors: theme.palette.divider
                }
            }
        },
        // Responsive
        responsive: [
            {
                // sm
                breakpoint: theme.breakpoints.values.sm,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "40%"
                        }
                    }
                }
            },
            {
                // md
                breakpoint: theme.breakpoints.values.md,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "32%"
                        }
                    }
                }
            }, 
        ]
    };
};

;// CONCATENATED MODULE: ./src/components/chart/index.js

const ReactApexChart = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\chart\\index.js -> " + "react-apexcharts"
        ]
    },
    ssr: false
});
// ----------------------------------------------------------------------


/* harmony default export */ const chart = ((/* unused pure expression or super */ null && (ReactApexChart)));


/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4046);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3280);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(839);
/* harmony import */ var _contexts_CollapseDrawerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(925);
/* harmony import */ var _components_NotistackProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7150);
/* harmony import */ var _contexts_AwsCognitoContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8439);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4513);
/* harmony import */ var _components_animate_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7406);
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2819);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NotistackProvider__WEBPACK_IMPORTED_MODULE_5__, _components_animate_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_10__]);
([_components_NotistackProvider__WEBPACK_IMPORTED_MODULE_5__, _components_animate_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// lightbox


// lazy image



// @mui


// scroll bar

// theme

// context




// redux


// components


function MyApp(props) {
    const { Component , pageProps  } = props;
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_AwsCognitoContext__WEBPACK_IMPORTED_MODULE_6__/* .AuthProvider */ .Ho, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
                    store: _redux_store__WEBPACK_IMPORTED_MODULE_9__/* .store */ .h,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2__.LocalizationProvider, {
                        dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_1__.AdapterDateFns,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_CollapseDrawerContext__WEBPACK_IMPORTED_MODULE_4__/* .CollapseDrawerProvider */ .z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animate_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_NotistackProvider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chart__WEBPACK_IMPORTED_MODULE_11__/* .ChartStyle */ .rB, {}),
                                            getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                ...pageProps
                                            }))
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ThemeProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/theme/overrides/Fab.js
// ----------------------------------------------------------------------
function Fab(theme) {
    return {
        MuiFab: {
            defaultProps: {
                color: "primary"
            },
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.z8,
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                primary: {
                    boxShadow: theme.customShadows.primary,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark
                    }
                },
                secondary: {
                    boxShadow: theme.customShadows.secondary,
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.dark
                    }
                },
                extended: {
                    "& svg": {
                        marginRight: theme.spacing(1)
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Card.js
// ----------------------------------------------------------------------
function Card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: "relative",
                    boxShadow: theme.customShadows.card,
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    zIndex: 0
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2",
                    marginTop: theme.spacing(0.5)
                }
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/CustomIcons.js


// ----------------------------------------------------------------------
// CloseIcon
function CloseIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L12,10.59 L13.29,9.29 C13.6821222,8.89787783 14.3178778,8.89787783 14.71,9.29 C15.1021222,9.68212217 15.1021222,10.3178778 14.71,10.71 L13.41,12 L14.71,13.29 Z"
        })
    });
}
// StarIcon
function StarIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.56,21 C17.4000767,21.0006435 17.2423316,20.9629218 17.1,20.89 L12,18.22 L6.9,20.89 C6.56213339,21.067663 6.15259539,21.0374771 5.8444287,20.8121966 C5.53626201,20.5869161 5.38323252,20.2058459 5.45,19.83 L6.45,14.2 L2.33,10.2 C2.06805623,9.93860108 1.9718844,9.55391377 2.08,9.2 C2.19824414,8.83742187 2.51242293,8.57366684 2.89,8.52 L8.59,7.69 L11.1,2.56 C11.2670864,2.21500967 11.6166774,1.99588989 12,1.99588989 C12.3833226,1.99588989 12.7329136,2.21500967 12.9,2.56 L15.44,7.68 L21.14,8.51 C21.5175771,8.56366684 21.8317559,8.82742187 21.95,9.19 C22.0581156,9.54391377 21.9619438,9.92860108 21.7,10.19 L17.58,14.19 L18.58,19.82 C18.652893,20.2027971 18.4967826,20.5930731 18.18,20.82 C17.9989179,20.9468967 17.7808835,21.010197 17.56,21 L17.56,21 Z"
        })
    });
}
// Using for Alert
function InfoIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,11 C11,10.4477153 11.4477153,10 12,10 C12.5522847,10 13,10.4477153 13,11 L13,16 Z M12,9 C11.4477153,9 11,8.55228475 11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 C13,8.55228475 12.5522847,9 12,9 Z"
        })
    });
}
function WarningIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M22.56,16.3 L14.89,3.58 C14.2597186,2.59400001 13.1702353,1.99737652 12,1.99737652 C10.8297647,1.99737652 9.74028139,2.59400001 9.11,3.58 L1.44,16.3 C0.888546003,17.2192471 0.869485343,18.3628867 1.39,19.3 C1.99197363,20.3551378 3.11522982,21.0046397 4.33,21 L19.67,21 C20.8765042,21.0128744 21.9978314,20.3797441 22.61,19.34 C23.146086,18.3926382 23.1269508,17.2292197 22.56,16.3 L22.56,16.3 Z M12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 C13,16.5522847 12.5522847,17 12,17 Z M13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,9 C11,8.44771525 11.4477153,8 12,8 C12.5522847,8 13,8.44771525 13,9 L13,13 Z"
        })
    });
}
function SuccessIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M16.3,9.61 L11.73,15.61 C11.5412074,15.855247 11.2494966,15.9992561 10.94,16.0000145 C10.6322197,16.001658 10.3408221,15.861492 10.15,15.62 L7.71,12.51 C7.49028166,12.2277602 7.43782669,11.8497415 7.57239438,11.5183399 C7.70696206,11.1869384 8.00810836,10.9525017 8.36239438,10.9033399 C8.7166804,10.8541782 9.07028166,10.9977602 9.29,11.28 L10.92,13.36 L14.7,8.36 C14.917932,8.07418751 15.2717886,7.92635122 15.6282755,7.97217964 C15.9847624,8.01800806 16.2897207,8.25053875 16.4282755,8.58217966 C16.5668304,8.91382056 16.517932,9.29418753 16.3,9.58 L16.3,9.61 Z"
        })
    });
}
function ErrorIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 C13,16.5522847 12.5522847,17 12,17 Z M13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 L13,13 Z"
        })
    });
}
// Using for Checkbox
function CheckboxIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm0 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z"
        })
    });
}
function CheckboxCheckedIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.372 4.972a1.006 1.006 0 00-.928.388l-3.78 5-1.63-2.08a1.001 1.001 0 00-1.58 1.23l2.44 3.11a1 1 0 001.58-.01l4.57-6v-.03a1.006 1.006 0 00-.672-1.608z"
        })
    });
}
function CheckboxIndeterminateIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.75 8h-6.5a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-.5a.75.75 0 00-.75-.75z"
        })
    });
}
// Using for Select Input
function InputSelectIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        sx: {
            right: 12,
            fontSize: 16,
            position: "absolute",
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,16 C11.7663478,16.0004565 11.5399121,15.9190812 11.36,15.77 L5.36,10.77 C4.93474074,10.4165378 4.87653776,9.78525926 5.23,9.36 C5.58346224,8.93474074 6.21474074,8.87653776 6.64,9.23 L12,13.71 L17.36,9.39 C17.5665934,9.2222295 17.8315409,9.14373108 18.0961825,9.17188444 C18.3608241,9.2000378 18.6033268,9.33252029 18.77,9.54 C18.9551341,9.74785947 19.0452548,10.0234772 19.0186853,10.3005589 C18.9921158,10.5776405 18.8512608,10.8311099 18.63,11 L12.63,15.83 C12.444916,15.955516 12.2231011,16.0153708 12,16 Z"
        })
    });
}
//  Using for TreeView
function TreeViewCollapseIcon(props) {
    return /*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M12,8 C12.5522847,8 13,8.44771525 13,9 L13,9 L13,11 L15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L13,13 L13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 L11,15 L11,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 L11,11 L11,9 C11,8.44771525 11.4477153,8 12,8 Z"
        })
    });
}
function TreeViewExpandIcon(props) {
    return /*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 Z"
        })
    });
}
function TreeViewEndIcon(props) {
    return /*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M14,8.99420168 C14.2666375,8.99420168 14.5222334,9.10068735 14.71,9.29 C14.8993127,9.4777666 15.0057983,9.73336246 15.0057983,10 C15.0057983,10.2666375 14.8993127,10.5222334 14.71,10.71 L14.71,10.71 L13.41,12 L14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L10.71,9.29 L12,10.59 L13.29,9.29 C13.4777666,9.10068735 13.7333625,8.99420168 14,8.99420168 Z"
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/overrides/Chip.js


// ----------------------------------------------------------------------
function Chip(theme) {
    return {
        MuiChip: {
            defaultProps: {
                deleteIcon: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {})
            },
            styleOverrides: {
                colorDefault: {
                    "& .MuiChip-avatarMedium, .MuiChip-avatarSmall": {
                        color: theme.palette.text.secondary
                    }
                },
                outlined: {
                    borderColor: theme.palette.grey[50032],
                    "&.MuiChip-colorPrimary": {
                        borderColor: theme.palette.primary.main
                    },
                    "&.MuiChip-colorSecondary": {
                        borderColor: theme.palette.secondary.main
                    }
                },
                //
                avatarColorInfo: {
                    color: theme.palette.info.contrastText,
                    backgroundColor: theme.palette.info.dark
                },
                avatarColorSuccess: {
                    color: theme.palette.success.contrastText,
                    backgroundColor: theme.palette.success.dark
                },
                avatarColorWarning: {
                    color: theme.palette.warning.contrastText,
                    backgroundColor: theme.palette.warning.dark
                },
                avatarColorError: {
                    color: theme.palette.error.contrastText,
                    backgroundColor: theme.palette.error.dark
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Tabs.js
// ----------------------------------------------------------------------
function Tabs(theme) {
    return {
        MuiTabs: {
            styleOverrides: {
                scrollButtons: {
                    width: 48,
                    borderRadius: "50%"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    fontWeight: theme.typography.fontWeightMedium,
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius,
                    "&.Mui-selected": {
                        color: theme.palette.text.primary
                    },
                    "&:not(:last-of-type)": {
                        marginRight: theme.spacing(5)
                    },
                    "@media (min-width: 600px)": {
                        minWidth: 48
                    }
                },
                labelIcon: {
                    minHeight: 48,
                    flexDirection: "row",
                    "& > *:first-of-type": {
                        marginBottom: 0,
                        marginRight: theme.spacing(1)
                    }
                },
                wrapped: {
                    flexDirection: "row",
                    whiteSpace: "nowrap"
                },
                textColorInherit: {
                    opacity: 1,
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Menu.js
// ----------------------------------------------------------------------
function Menu(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Link.js
// ----------------------------------------------------------------------
function Link() {
    return {
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/List.js
// ----------------------------------------------------------------------
function List(theme) {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    marginBottom: 0
                },
                multiline: {
                    marginTop: 0,
                    marginBottom: 0
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Table.js
// ----------------------------------------------------------------------
function Table(theme) {
    return {
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: "none"
                },
                head: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.neutral,
                    "&:first-of-type": {
                        paddingLeft: theme.spacing(3),
                        borderTopLeftRadius: theme.shape.borderRadius,
                        borderBottomLeftRadius: theme.shape.borderRadius,
                        boxShadow: `inset 8px 0 0 ${theme.palette.background.paper}`
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(3),
                        borderTopRightRadius: theme.shape.borderRadius,
                        borderBottomRightRadius: theme.shape.borderRadius,
                        boxShadow: `inset -8px 0 0 ${theme.palette.background.paper}`
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`
                },
                body: {
                    "&:first-of-type": {
                        paddingLeft: theme.spacing(3)
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(3)
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    borderTop: `solid 1px ${theme.palette.divider}`
                },
                toolbar: {
                    height: 64
                },
                select: {
                    "&:focus": {
                        borderRadius: theme.shape.borderRadius
                    }
                },
                selectIcon: {
                    width: 20,
                    height: 20,
                    marginTop: -4
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Alert.js


// ----------------------------------------------------------------------
function Alert(theme) {
    const isLight = theme.palette.mode === "light";
    const standardStyle = (color)=>({
            color: theme.palette[color][isLight ? "darker" : "lighter"],
            backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
            "& .MuiAlert-icon": {
                color: theme.palette[color][isLight ? "main" : "light"]
            }
        });
    const filledStyle = (color)=>({
            color: theme.palette[color].contrastText
        });
    const outlinedStyle = (color)=>({
            color: theme.palette[color][isLight ? "darker" : "lighter"],
            border: `solid 1px ${theme.palette[color][isLight ? "light" : "dark"]}`,
            backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
            "& .MuiAlert-icon": {
                color: theme.palette[color][isLight ? "main" : "light"]
            }
        });
    return {
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    info: /*#__PURE__*/ jsx_runtime_.jsx(InfoIcon, {}),
                    success: /*#__PURE__*/ jsx_runtime_.jsx(SuccessIcon, {}),
                    warning: /*#__PURE__*/ jsx_runtime_.jsx(WarningIcon, {}),
                    error: /*#__PURE__*/ jsx_runtime_.jsx(ErrorIcon, {})
                }
            },
            styleOverrides: {
                message: {
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(0.5)
                    }
                },
                action: {
                    "& button:not(:first-of-type)": {
                        marginLeft: theme.spacing(1)
                    }
                },
                standardInfo: standardStyle("info"),
                standardSuccess: standardStyle("success"),
                standardWarning: standardStyle("warning"),
                standardError: standardStyle("error"),
                filledInfo: filledStyle("info"),
                filledSuccess: filledStyle("success"),
                filledWarning: filledStyle("warning"),
                filledError: filledStyle("error"),
                outlinedInfo: outlinedStyle("info"),
                outlinedSuccess: outlinedStyle("success"),
                outlinedWarning: outlinedStyle("warning"),
                outlinedError: outlinedStyle("error")
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Badge.js
// ----------------------------------------------------------------------
function Badge() {
    return {
        MuiBadge: {
            styleOverrides: {
                dot: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%"
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Paper.js
// ----------------------------------------------------------------------
function Paper(theme) {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            variants: [
                {
                    props: {
                        variant: "outlined"
                    },
                    style: {
                        borderColor: theme.palette.grey[50012]
                    }
                }, 
            ],
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Input.js
// ----------------------------------------------------------------------
function Input(theme) {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        "& svg": {
                            color: theme.palette.text.disabled
                        }
                    }
                },
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: theme.palette.text.disabled
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[50012],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[50016]
                    },
                    "&.Mui-focused": {
                        backgroundColor: theme.palette.action.focus
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                },
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.grey[50032]
                    },
                    "&.Mui-disabled": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Radio.js
// ----------------------------------------------------------------------
function Radio(theme) {
    return {
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    svg: {
                        fontSize: 24,
                        "&[font-size=small]": {
                            fontSize: 20
                        }
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Drawer.js

// ----------------------------------------------------------------------
function Drawer(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiDrawer: {
            styleOverrides: {
                modal: {
                    '&[role="presentation"]': {
                        "& .MuiDrawer-paperAnchorLeft": {
                            boxShadow: `8px 24px 24px 12px ${(0,material_.alpha)(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`
                        },
                        "& .MuiDrawer-paperAnchorRight": {
                            boxShadow: `-8px 24px 24px 12px ${(0,material_.alpha)(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`
                        }
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Dialog.js
// ----------------------------------------------------------------------
function Dialog(theme) {
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.dialog,
                    "&.MuiPaper-rounded": {
                        borderRadius: Number(theme.shape.borderRadius) * 2
                    },
                    "&.MuiDialog-paperFullScreen": {
                        borderRadius: 0
                    },
                    "&.MuiDialog-paper .MuiDialogActions-root": {
                        padding: theme.spacing(3)
                    },
                    "@media (max-width: 600px)": {
                        margin: theme.spacing(2)
                    },
                    "@media (max-width: 663.95px)": {
                        "&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody": {
                            maxWidth: "100%"
                        }
                    }
                },
                paperFullWidth: {
                    width: "100%"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    borderTop: 0,
                    borderBottom: 0,
                    padding: theme.spacing(3)
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    "& > :not(:first-of-type)": {
                        marginLeft: theme.spacing(1.5)
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Avatar.js
// ----------------------------------------------------------------------
function Avatar(theme) {
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.grey[400]
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                avatar: {
                    fontSize: 16,
                    fontWeight: theme.typography.fontWeightMedium,
                    "&:first-of-type": {
                        fontSize: 14,
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.primary.lighter
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Rating.js


// ----------------------------------------------------------------------
const ICON_SMALL = {
    width: 20,
    height: 20
};
const ICON_LARGE = {
    width: 28,
    height: 28
};
function Rating(theme) {
    return {
        MuiRating: {
            defaultProps: {
                emptyIcon: /*#__PURE__*/ jsx_runtime_.jsx(StarIcon, {}),
                icon: /*#__PURE__*/ jsx_runtime_.jsx(StarIcon, {})
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        opacity: 0.48
                    }
                },
                iconEmpty: {
                    color: theme.palette.grey[50048]
                },
                sizeSmall: {
                    "& svg": {
                        ...ICON_SMALL
                    }
                },
                sizeLarge: {
                    "& svg": {
                        ...ICON_LARGE
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Slider.js
// ----------------------------------------------------------------------
function Slider(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiSlider: {
            defaultProps: {
                size: "small"
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        color: theme.palette.action.disabled
                    }
                },
                markLabel: {
                    fontSize: 13,
                    color: theme.palette.text.disabled
                },
                valueLabel: {
                    borderRadius: 8,
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Button.js
// ----------------------------------------------------------------------
function Button(theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none"
                    }
                },
                sizeLarge: {
                    height: 48
                },
                // contained
                containedInherit: {
                    color: theme.palette.grey[800],
                    boxShadow: theme.customShadows.z8,
                    "&:hover": {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                containedPrimary: {
                    boxShadow: theme.customShadows.primary
                },
                containedSecondary: {
                    boxShadow: theme.customShadows.secondary
                },
                containedInfo: {
                    boxShadow: theme.customShadows.info
                },
                containedSuccess: {
                    boxShadow: theme.customShadows.success
                },
                containedWarning: {
                    boxShadow: theme.customShadows.warning
                },
                containedError: {
                    boxShadow: theme.customShadows.error
                },
                // outlined
                outlinedInherit: {
                    border: `1px solid ${theme.palette.grey[50032]}`,
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                textInherit: {
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Switch.js
// ----------------------------------------------------------------------
function Switch(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiSwitch: {
            styleOverrides: {
                thumb: {
                    boxShadow: theme.customShadows.z1
                },
                track: {
                    opacity: 1,
                    backgroundColor: theme.palette.grey[500]
                },
                switchBase: {
                    left: 0,
                    right: "auto",
                    "&:not(:.Mui-checked)": {
                        color: theme.palette.grey[isLight ? 100 : 300]
                    },
                    "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
                        color: theme.palette.grey[isLight ? 400 : 600]
                    },
                    "&.Mui-disabled+.MuiSwitch-track": {
                        opacity: 1,
                        backgroundColor: `${theme.palette.action.disabledBackground} !important`
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Select.js

// ----------------------------------------------------------------------
function Select() {
    return {
        MuiSelect: {
            defaultProps: {
                IconComponent: InputSelectIcon
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/SvgIcon.js
// ----------------------------------------------------------------------
function SvgIcon_SvgIcon() {
    return {
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeSmall: {
                    width: 20,
                    height: 20,
                    fontSize: "inherit"
                },
                fontSizeLarge: {
                    width: 32,
                    height: 32,
                    fontSize: "inherit"
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Tooltip.js
// ----------------------------------------------------------------------
function Tooltip(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                },
                arrow: {
                    color: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Popover.js
// ----------------------------------------------------------------------
function Popover(theme) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.dropdown,
                    borderRadius: Number(theme.shape.borderRadius) * 1.5
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Stepper.js
// ----------------------------------------------------------------------
function Stepper(theme) {
    return {
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/DataGrid.js
// ----------------------------------------------------------------------
function DataGrid(theme) {
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    border: `1px solid transparent`,
                    "& .MuiTablePagination-root": {
                        borderTop: 0
                    }
                },
                cell: {
                    borderBottom: `1px solid ${theme.palette.divider}`
                },
                columnSeparator: {
                    color: theme.palette.divider
                },
                toolbarContainer: {
                    padding: theme.spacing(2),
                    backgroundColor: theme.palette.background.neutral,
                    "& .MuiButton-root": {
                        marginRight: theme.spacing(1.5),
                        color: theme.palette.text.primary,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                },
                paper: {
                    boxShadow: theme.customShadows.dropdown
                },
                menu: {
                    "& .MuiPaper-root": {
                        boxShadow: theme.customShadows.dropdown
                    },
                    "& .MuiMenuItem-root": {
                        ...theme.typography.body2,
                        "& .MuiListItemIcon-root": {
                            minWidth: "auto"
                        }
                    }
                },
                panelFooter: {
                    padding: theme.spacing(2),
                    justifyContent: "flex-end",
                    borderTop: `1px solid ${theme.palette.divider}`,
                    "& .MuiButton-root": {
                        "&:first-of-type": {
                            marginRight: theme.spacing(1.5),
                            color: theme.palette.text.primary,
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover
                            }
                        },
                        "&:last-of-type": {
                            color: theme.palette.common.white,
                            backgroundColor: theme.palette.primary.main,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark
                            }
                        }
                    }
                },
                filterForm: {
                    padding: theme.spacing(1.5, 0),
                    "& .MuiFormControl-root": {
                        margin: theme.spacing(0, 0.5)
                    },
                    "& .MuiInput-root": {
                        marginTop: theme.spacing(3),
                        "&::before, &::after": {
                            display: "none"
                        },
                        "& .MuiNativeSelect-select, .MuiInput-input": {
                            ...theme.typography.body2,
                            padding: theme.spacing(0.75, 1),
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: theme.palette.background.neutral
                        },
                        "& .MuiSvgIcon-root": {
                            right: 4
                        }
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Skeleton.js
// ----------------------------------------------------------------------
function Skeleton(theme) {
    return {
        MuiSkeleton: {
            defaultProps: {
                animation: "wave"
            },
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.neutral
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Backdrop.js

// ----------------------------------------------------------------------
function Backdrop(theme) {
    const varLow = (0,styles_.alpha)(theme.palette.grey[900], 0.48);
    const varHigh = (0,styles_.alpha)(theme.palette.grey[900], 1);
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    background: [
                        `rgb(22,28,36)`,
                        `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
                        `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
                        `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`, 
                    ],
                    "&.MuiBackdrop-invisible": {
                        background: "transparent"
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Progress.js
// ----------------------------------------------------------------------
function Progress(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    overflow: "hidden"
                },
                bar: {
                    borderRadius: 4
                },
                colorPrimary: {
                    backgroundColor: theme.palette.primary[isLight ? "lighter" : "darker"]
                },
                buffer: {
                    backgroundColor: "transparent"
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Timeline.js
// ----------------------------------------------------------------------
function Timeline(theme) {
    return {
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Checkbox.js


// ----------------------------------------------------------------------
function Checkbox(theme) {
    return {
        MuiCheckbox: {
            defaultProps: {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxIcon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxCheckedIcon, {}),
                indeterminateIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxIndeterminateIcon, {})
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
                        color: theme.palette.action.disabled
                    },
                    "& .MuiSvgIcon-fontSizeMedium": {
                        width: 24,
                        height: 24
                    },
                    "& .MuiSvgIcon-fontSizeSmall": {
                        width: 20,
                        height: 20
                    },
                    svg: {
                        fontSize: 24,
                        "&[font-size=small]": {
                            fontSize: 20
                        }
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Accordion.js
// ----------------------------------------------------------------------
function Accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&.Mui-expanded": {
                        boxShadow: theme.customShadows.z8,
                        borderRadius: theme.shape.borderRadius
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(1),
                    "&.Mui-disabled": {
                        opacity: 1,
                        color: theme.palette.action.disabled,
                        "& .MuiTypography-root": {
                            color: "inherit"
                        }
                    }
                },
                expandIconWrapper: {
                    color: "inherit"
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Typography.js
// ----------------------------------------------------------------------
function Typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Pagination.js

// ----------------------------------------------------------------------
function Pagination(theme) {
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        fontWeight: theme.typography.fontWeightBold
                    }
                },
                textPrimary: {
                    "&.Mui-selected": {
                        color: theme.palette.primary.main,
                        backgroundColor: (0,styles_.alpha)(theme.palette.primary.main, 0.08),
                        "&:hover, &.Mui-focusVisible": {
                            backgroundColor: `${(0,styles_.alpha)(theme.palette.primary.main, 0.24)} !important`
                        }
                    }
                },
                outlined: {
                    border: `1px solid ${theme.palette.grey[50032]}`
                },
                outlinedPrimary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,styles_.alpha)(theme.palette.primary.main, 0.08),
                        border: `1px solid ${(0,styles_.alpha)(theme.palette.primary.main, 0.24)}`
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Breadcrumbs.js
// ----------------------------------------------------------------------
function Breadcrumbs(theme) {
    return {
        MuiBreadcrumbs: {
            styleOverrides: {
                separator: {
                    marginLeft: theme.spacing(2),
                    marginRight: theme.spacing(2)
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/ButtonGroup.js
// ----------------------------------------------------------------------
function ButtonGroup(theme) {
    const styleContained = (color)=>({
            props: {
                variant: "contained",
                color
            },
            style: {
                boxShadow: theme.customShadows[color]
            }
        });
    return {
        MuiButtonGroup: {
            variants: [
                {
                    props: {
                        variant: "contained",
                        color: "inherit"
                    },
                    style: {
                        boxShadow: theme.customShadows.z8
                    }
                },
                styleContained("primary"),
                styleContained("secondary"),
                styleContained("info"),
                styleContained("success"),
                styleContained("warning"),
                styleContained("error"),
                {
                    props: {
                        disabled: true
                    },
                    style: {
                        boxShadow: "none",
                        "& .MuiButtonGroup-grouped.Mui-disabled": {
                            color: theme.palette.action.disabled,
                            borderColor: `${theme.palette.action.disabledBackground} !important`,
                            "&.MuiButton-contained": {
                                backgroundColor: theme.palette.action.disabledBackground
                            }
                        }
                    }
                }, 
            ],
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none"
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/CssBaseline.js
// ----------------------------------------------------------------------
function CssBaseline() {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box"
                },
                html: {
                    width: "100%",
                    height: "100%",
                    WebkitOverflowScrolling: "touch"
                },
                body: {
                    width: "100%",
                    height: "100%"
                },
                "#__next": {
                    width: "100%",
                    height: "100%"
                },
                input: {
                    "&[type=number]": {
                        MozAppearance: "textfield",
                        "&::-webkit-outer-spin-button": {
                            margin: 0,
                            WebkitAppearance: "none"
                        },
                        "&::-webkit-inner-spin-button": {
                            margin: 0,
                            WebkitAppearance: "none"
                        }
                    }
                },
                img: {
                    display: "block",
                    maxWidth: "100%"
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/Autocomplete.js
// ----------------------------------------------------------------------
function Autocomplete(theme) {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.dropdown
                },
                listbox: {
                    padding: theme.spacing(0, 1),
                    "& .MuiAutocomplete-option": {
                        padding: theme.spacing(1),
                        margin: theme.spacing(1, 0),
                        borderRadius: theme.shape.borderRadius
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/ToggleButton.js

// ----------------------------------------------------------------------
function ToggleButton(theme) {
    const style = (color)=>({
            props: {
                color
            },
            style: {
                "&:hover": {
                    borderColor: (0,styles_.alpha)(theme.palette[color].main, 0.48),
                    backgroundColor: (0,styles_.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                },
                "&.Mui-selected": {
                    borderColor: (0,styles_.alpha)(theme.palette[color].main, 0.48)
                }
            }
        });
    return {
        MuiToggleButton: {
            variants: [
                {
                    props: {
                        color: "standard"
                    },
                    style: {
                        "&.Mui-selected": {
                            backgroundColor: theme.palette.action.selected
                        }
                    }
                },
                style("primary"),
                style("secondary"),
                style("info"),
                style("success"),
                style("warning"),
                style("error"), 
            ]
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    border: `solid 1px ${theme.palette.grey[50012]}`,
                    "& .MuiToggleButton-root": {
                        margin: 4,
                        borderColor: "transparent !important",
                        borderRadius: `${theme.shape.borderRadius}px !important`
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/ControlLabel.js
// ----------------------------------------------------------------------
function ControlLabel(theme) {
    return {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(1)
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.disabled
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/LoadingButton.js
// ----------------------------------------------------------------------
function LoadingButton() {
    return {
        MuiLoadingButton: {
            styleOverrides: {
                root: {
                    "&.MuiButton-text": {
                        "& .MuiLoadingButton-startIconPendingStart": {
                            marginLeft: 0
                        },
                        "& .MuiLoadingButton-endIconPendingEnd": {
                            marginRight: 0
                        }
                    }
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/overrides/index.js









































// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
    return Object.assign(Fab(theme), Tabs(theme), Chip(theme), Card(theme), Menu(theme), Link(theme), Input(theme), Radio(theme), Badge(theme), List(theme), Table(theme), Paper(theme), Alert(theme), Switch(theme), Select(theme), Button(theme), Rating(theme), Dialog(theme), Avatar(theme), Slider(theme), Drawer(theme), Stepper(theme), Tooltip(theme), Popover(theme), SvgIcon_SvgIcon(theme), Checkbox(theme), DataGrid(theme), Skeleton(theme), Timeline(theme), Backdrop(theme), Progress(theme), Accordion(theme), Typography(theme), Pagination(theme), ButtonGroup(theme), Breadcrumbs(theme), CssBaseline(theme), Autocomplete(theme), ControlLabel(theme), ToggleButton(theme), LoadingButton(theme));
};

// EXTERNAL MODULE: ./src/theme/palette.js
var palette = __webpack_require__(1988);
// EXTERNAL MODULE: ./src/hooks/useResponsive.js
var hooks_useResponsive = __webpack_require__(5102);
;// CONCATENATED MODULE: ./src/utils/getFontValue.js
// @mui

// hooks

// ----------------------------------------------------------------------
function GetFontValue(variant) {
    const theme = useTheme();
    const breakpoints = useWidth();
    const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);
    const hasResponsive = variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4" || variant === "h5" || variant === "h6";
    const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
    const fontSize = remToPx(getFont.fontSize);
    const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
    const { fontWeight  } = theme.typography[variant];
    const { letterSpacing  } = theme.typography[variant];
    return {
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing
    };
};
// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm , md , lg  }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
function useWidth() {
    const theme = useTheme();
    const keys = [
        ...theme.breakpoints.keys
    ].reverse();
    return keys.reduce((output, key)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useResponsive("up", key);
        return !output && matches ? key : output;
    }, null) || "xs";
}

;// CONCATENATED MODULE: ./src/theme/typography.js

// ----------------------------------------------------------------------
const FONT_PRIMARY = "Noto Sans KR,sans-serif"; // Google Font
const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 700,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        letterSpacing: 2,
        ...responsiveFontSizes({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 700,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize"
    }
};
/* harmony default export */ const theme_typography = (typography);

;// CONCATENATED MODULE: ./src/theme/shadows.js
// @mui

//

// ----------------------------------------------------------------------
const LIGHT_MODE = palette/* default.light.grey.500 */.Z.light.grey[500];
const DARK_MODE = "#000000";
const createShadow = (color)=>{
    const transparent1 = (0,styles_.alpha)(color, 0.2);
    const transparent2 = (0,styles_.alpha)(color, 0.14);
    const transparent3 = (0,styles_.alpha)(color, 0.12);
    return [
        "none",
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
        `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
        `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
        `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
        `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
        `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
        `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
        `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
        `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
        `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
        `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
        `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
        `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
        `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
        `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`, 
    ];
};
const createCustomShadow = (color)=>{
    const transparent = (0,styles_.alpha)(color, 0.16);
    return {
        z1: `0 1px 2px 0 ${transparent}`,
        z8: `0 8px 16px 0 ${transparent}`,
        z12: `0 12px 24px -4px ${transparent}`,
        z16: `0 16px 32px -4px ${transparent}`,
        z20: `0 20px 40px -4px ${transparent}`,
        z24: `0 24px 48px 0 ${transparent}`,
        //
        primary: `0 8px 16px 0 ${(0,styles_.alpha)(palette/* default.light.primary.main */.Z.light.primary.main, 0.24)}`,
        info: `0 8px 16px 0 ${(0,styles_.alpha)(palette/* default.light.info.main */.Z.light.info.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${(0,styles_.alpha)(palette/* default.light.secondary.main */.Z.light.secondary.main, 0.24)}`,
        success: `0 8px 16px 0 ${(0,styles_.alpha)(palette/* default.light.success.main */.Z.light.success.main, 0.24)}`,
        warning: `0 8px 16px 0 ${(0,styles_.alpha)(palette/* default.light.warning.main */.Z.light.warning.main, 0.24)}`,
        error: `0 8px 16px 0 ${(0,styles_.alpha)(palette/* default.light.error.main */.Z.light.error.main, 0.24)}`,
        //
        card: `0 0 2px 0 ${(0,styles_.alpha)(color, 0.2)}, 0 12px 24px -4px ${(0,styles_.alpha)(color, 0.12)}`,
        dialog: `-40px 40px 80px -8px ${(0,styles_.alpha)(palette/* default.light.common.black */.Z.light.common.black, 0.24)}`,
        dropdown: `0 0 2px 0 ${(0,styles_.alpha)(color, 0.24)}, -20px 20px 40px -4px ${(0,styles_.alpha)(color, 0.24)}`
    };
};
const customShadows = {
    light: createCustomShadow(LIGHT_MODE),
    dark: createCustomShadow(DARK_MODE)
};
const shadows = {
    light: createShadow(LIGHT_MODE),
    dark: createShadow(DARK_MODE)
};
/* harmony default export */ const theme_shadows = (shadows);

;// CONCATENATED MODULE: ./src/theme/index.js


// @mui


//




function ThemeProvider({ children  }) {
    const themeOptions = (0,external_react_.useMemo)(()=>({
            palette: palette/* default.light */.Z.light,
            typography: theme_typography,
            // breakpoints,
            shape: {
                borderRadius: 8
            },
            shadows: theme_shadows.light,
            customShadows: customShadows.light
        }));
    const theme = (0,styles_.createTheme)(themeOptions);
    theme.components = ComponentsOverrides(theme);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            children
        ]
    });
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers");

/***/ }),

/***/ 4046:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/AdapterDateFns");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8212:
/***/ ((module) => {

module.exports = require("amazon-cognito-identity-js");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5594:
/***/ ((module) => {

module.exports = require("lodash/sum");

/***/ }),

/***/ 9309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 7388:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage/createWebStorage");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,726,304,870,236,988], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();