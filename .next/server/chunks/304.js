"use strict";
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 2554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Iconify)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// icons

// @mui

// ----------------------------------------------------------------------
Iconify.propTypes = {
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    ]),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Iconify({ icon , sx , ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: _iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon,
        icon: icon,
        sx: {
            ...sx
        },
        ...other
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// @mui

// ----------------------------------------------------------------------
const AnimateIconButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ children , size ="medium" , ...other }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimateWrap, {
        size: size,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
            size: size,
            ref: ref,
            ...other,
            children: children
        })
    }));
AnimateIconButton.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "inherit",
        "default",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error", 
    ]),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "small",
        "medium",
        "large"
    ])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimateIconButton);
// ----------------------------------------------------------------------
const varSmall = {
    hover: {
        scale: 1.1
    },
    tap: {
        scale: 0.95
    }
};
const varMedium = {
    hover: {
        scale: 1.09
    },
    tap: {
        scale: 0.97
    }
};
const varLarge = {
    hover: {
        scale: 1.08
    },
    tap: {
        scale: 0.99
    }
};
AnimateWrap.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "small",
        "medium",
        "large"
    ])
};
function AnimateWrap({ size , children  }) {
    const isSmall = size === "small";
    const isLarge = size === "large";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
        whileTap: "tap",
        whileHover: "hover",
        variants: isSmall && varSmall || isLarge && varLarge || varMedium,
        sx: {
            display: "inline-flex"
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EU": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.EU),
/* harmony export */   "aZ": () => (/* reexport safe */ _AnimateIconButton__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var _AnimateIconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AnimateIconButton__WEBPACK_IMPORTED_MODULE_1__]);
_AnimateIconButton__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EU": () => (/* reexport */ varFade)
});

// UNUSED EXPORTS: TRANSITION, varBgColor, varBgKenburns, varBgPan, varBounce, varContainer, varFlip, varHover, varPath, varRotate, varScale, varSlide, varTranEnter, varTranExit, varTranHover, varZoom

;// CONCATENATED MODULE: ./src/components/animate/variants/path.js
// ----------------------------------------------------------------------
const TRANSITION = {
    duration: 2,
    ease: [
        0.43,
        0.13,
        0.23,
        0.96
    ]
};
const varPath = {
    animate: {
        fillOpacity: [
            0,
            0,
            1
        ],
        pathLength: [
            1,
            0.4,
            0
        ],
        transition: TRANSITION
    }
};

;// CONCATENATED MODULE: ./src/components/animate/variants/transition.js
// ----------------------------------------------------------------------
const varTranHover = (props)=>{
    const duration = props?.duration || 0.32;
    const ease = props?.ease || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranEnter = (props)=>{
    const duration = props?.durationIn || 0.64;
    const ease = props?.easeIn || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranExit = (props)=>{
    const duration = props?.durationOut || 0.48;
    const ease = props?.easeOut || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/fade.js

// ----------------------------------------------------------------------
const varFade = (props)=>{
    const distance = props?.distance || 120;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: varTranEnter
            },
            exit: {
                opacity: 0,
                transition: varTranExit
            }
        },
        inUp: {
            initial: {
                y: distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                y: -distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                x: -distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                x: distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outUp: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outDown: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outLeft: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outRight: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/index.js














/***/ }),

/***/ 8439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* binding */ AuthProvider),
/* harmony export */   "Vo": () => (/* binding */ AuthContext)
/* harmony export */ });
/* unused harmony export UserPool */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8212);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2369);
/* harmony import */ var _routes_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6939);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3726);




// utils

// routes

//

// ----------------------------------------------------------------------
const UserPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__.CognitoUserPool({
    UserPoolId: _config__WEBPACK_IMPORTED_MODULE_6__/* .COGNITO_API.userPoolId */ .d$.userPoolId,
    ClientId: _config__WEBPACK_IMPORTED_MODULE_6__/* .COGNITO_API.clientId */ .d$.clientId
});
const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null
};
const handlers = {
    AUTHENTICATE: (state, action)=>{
        const { isAuthenticated , user  } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    LOGOUT: (state)=>({
            ...state,
            isAuthenticated: false,
            user: null
        })
};
const reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state;
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    ...initialState,
    method: "cognito",
    login: ()=>Promise.resolve(),
    register: ()=>Promise.resolve(),
    logout: ()=>Promise.resolve()
});
// ----------------------------------------------------------------------
AuthProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function AuthProvider({ children  }) {
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
    const getUserAttributes = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((currentUser)=>new Promise((resolve, reject)=>{
            currentUser.getUserAttributes((err, attributes)=>{
                if (err) {
                    reject(err);
                } else {
                    const results = {};
                    attributes.forEach((attribute)=>{
                        results[attribute.Name] = attribute.Value;
                    });
                    resolve(results);
                }
            });
        }), []);
    const getSession = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>new Promise((resolve, reject)=>{
            const user = UserPool.getCurrentUser();
            if (user) {
                user.getSession(async (err, session)=>{
                    if (err) {
                        reject(err);
                    } else {
                        const attributes = await getUserAttributes(user);
                        const token = session.getIdToken().getJwtToken();
                        _utils_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaults.headers.common.Authorization */ .Z.defaults.headers.common.Authorization = token;
                        dispatch({
                            type: "AUTHENTICATE",
                            payload: {
                                isAuthenticated: true,
                                user: attributes
                            }
                        });
                        resolve({
                            user,
                            session,
                            headers: {
                                Authorization: token
                            }
                        });
                    }
                });
            } else {
                dispatch({
                    type: "AUTHENTICATE",
                    payload: {
                        isAuthenticated: false,
                        user: null
                    }
                });
            }
        }), [
        getUserAttributes
    ]);
    const initial = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            await getSession();
        } catch  {
            dispatch({
                type: "AUTHENTICATE",
                payload: {
                    isAuthenticated: false,
                    user: null
                }
            });
        }
    }, [
        getSession
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        initial();
    }, [
        initial
    ]);
    const login = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((email, password)=>new Promise((resolve, reject)=>{
            const user = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__.CognitoUser({
                Username: email,
                Pool: UserPool
            });
            const authDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__.AuthenticationDetails({
                Username: email,
                Password: password
            });
            user.authenticateUser(authDetails, {
                onSuccess: (data)=>{
                    getSession();
                    resolve(data);
                },
                onFailure: (err)=>{
                    reject(err);
                },
                newPasswordRequired: ()=>{
                    // Handle this on login page for update password.
                    resolve({
                        message: "newPasswordRequired"
                    });
                }
            });
        }), [
        getSession
    ]);
    const logout = ()=>{
        const user = UserPool.getCurrentUser();
        if (user) {
            user.signOut();
            dispatch({
                type: "LOGOUT"
            });
        }
    };
    const register = (email, password, firstName, lastName)=>new Promise((resolve, reject)=>UserPool.signUp(email, password, [
                {
                    Name: "email",
                    Value: email
                },
                {
                    Name: "name",
                    Value: `${firstName} ${lastName}`
                }, 
            ], null, async (err)=>{
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
                window.location.href = _routes_paths__WEBPACK_IMPORTED_MODULE_5__/* .PATH_AUTH.login */ .EE.login;
            }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            ...state,
            method: "cognito",
            user: {
                displayName: state?.user?.name || "Admin",
                role: "admin",
                ...state.user
            },
            login,
            register,
            logout
        },
        children: children
    });
}



/***/ }),

/***/ 2369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://localhost:8000" || 0
});
axiosInstance.interceptors.response.use((response)=>response, (error)=>Promise.reject(error.response && error.response.data || "Axios Error"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);


/***/ })

};
;