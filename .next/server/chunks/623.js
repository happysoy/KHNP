"use strict";
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 7740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ _notifications)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
;// CONCATENATED MODULE: ./src/_mock/_mock.js

const _mock_mock = {
    id: (index)=>`e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
    time: (index)=>(0,external_date_fns_.sub)(new Date(), {
            days: index,
            hours: index
        }),
    image: {
        cover: (index)=>`https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_${index + 1}.jpg`,
        feed: (index)=>`https://minimal-assets-api-dev.vercel.app/assets/images/feeds/feed_${index + 1}.jpg`,
        product: (index)=>`https://minimal-assets-api-dev.vercel.app/assets/images/products/product_${index + 1}.jpg`,
        avatar: (index)=>`https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`
    }
};
/* harmony default export */ const src_mock_mock = (_mock_mock);

;// CONCATENATED MODULE: ./src/_mock/_others.js

const _notifications = [
    ...Array(5)
].map((_, index)=>({
        id: src_mock_mock.id(index),
        title: [
            "Your order is placed",
            "Sylvan King",
            "You have new message",
            "You have new mail",
            "Delivery processing", 
        ][index],
        description: [
            "waiting for shipping",
            "answered to your comment on the Minimal",
            "5 unread messages",
            "sent from Guido Padberg",
            "Your order is being shipped", 
        ][index],
        avatar: [
            null,
            src_mock_mock.image.avatar(2),
            null,
            null,
            null
        ][index],
        type: [
            "order_placed",
            "friend_interactive",
            "chat_message",
            "mail",
            "order_shipped", 
        ][index],
        createdAt: src_mock_mock.time(index),
        isUnRead: [
            true,
            true,
            false,
            false,
            false
        ][index]
    }));

;// CONCATENATED MODULE: ./src/_mock/index.js


/* harmony default export */ const src_mock = ((/* unused pure expression or super */ null && (_mock)));


/***/ }),

/***/ 9218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AdminAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7364);



function AdminAvatar({ ...other }) {
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
        children: "A"
    });
};


/***/ }),

/***/ 4818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MenuPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


function MenuPopover({ children , sx , ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Popover, {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        PaperProps: {
            sx: {
                p: 1,
                width: 200,
                overflow: "inherit",
                ...sx
            }
        },
        ...other,
        children: children
    });
};


/***/ }),

/***/ 5447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);



// @mui


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(()=>({
        flexGrow: 1,
        height: "100%",
        overflow: "hidden"
    }));
const SimpleBarStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((simplebar_react__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({
        maxHeight: "100%",
        "& .simplebar-scrollbar": {
            "&:before": {
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.grey[600], 0.48)
            },
            "&.simplebar-visible:before": {
                opacity: 1
            }
        },
        "& .simplebar-track.simplebar-vertical": {
            width: 10
        },
        "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
            height: 6
        },
        "& .simplebar-mask": {
            zIndex: "inherit"
        }
    }));
// ----------------------------------------------------------------------
Scrollbar.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Scrollbar({ children , sx , ...other }) {
    const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (isMobile) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            sx: {
                overflowX: "auto",
                ...sx
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SimpleBarStyle, {
            timeout: 500,
            clickOnTrack: false,
            sx: sx,
            ...other,
            children: children
        })
    });
};


/***/ }),

/***/ 5554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* reexport */ NavSectionVertical),
  "$": () => (/* binding */ getActive)
});

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/config.js
var config = __webpack_require__(3726);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/utils/cssStyles.js
var cssStyles = __webpack_require__(6034);
;// CONCATENATED MODULE: ./src/components/nav-section/vertical/style.js
// @mui


// utils

// config

// ----------------------------------------------------------------------
const ListItemStyle = (0,styles_.styled)(material_.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active , depth , theme  })=>({
        // position: "relative",
        textTransform: "capitalize",
        // alignItems: "left",
        // justifyContent: "left",
        // paddingLeft: theme.spacing(2),
        // paddingRight: theme.spacing(1.5),
        marginBottom: theme.spacing(0.5),
        color: theme.palette.text.secondary,
        borderRadius: "15px",
        height: config/* NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT */.Au.DASHBOARD_ITEM_ROOT_HEIGHT,
        // Active item
        ...active && {
            color: theme.palette.primary.main,
            backgroundColor: (0,styles_.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
    }));
// ----------------------------------------------------------------------
const ListItemTextStyle = (0,styles_.styled)(material_.ListItemText, {
    shouldForwardProp: (prop)=>prop !== "isCollapse"
})(({ isCollapse , theme  })=>({
        transition: theme.transitions.create([
            "width",
            "opacity"
        ], {
            duration: theme.transitions.duration.shorter
        }),
        ...isCollapse && {
            width: 0,
            opacity: 0
        }
    })); // ----------------------------------------------------------------------
 // export const ListItemIconStyle = styled(ListItemIcon, {
 //   shouldForwardProp: (prop) => prop !== "active",
 // })(({ active, theme }) => ({
 //   width: ICON.NAVBAR_ITEM,
 //   height: ICON.NAVBAR_ITEM,
 //   "& svg": { width: "100%", height: "100%" },
 //   // ...(active && {
 //   //   // color: theme.palette.primary.main,
 //   // }),
 // }));
 // ----------------------------------------------------------------------
 // export const ListSubheaderStyle = styled(ListSubheader)(({ theme }) => ({
 //   ...theme.typography.overline,
 //   borderRadius: theme.shape.borderRadius,
 //   paddingTop: theme.spacing(3),
 //   paddingLeft: theme.spacing(2),
 //   paddingBottom: theme.spacing(1),
 //   color: theme.palette.text.primary,
 //   transition: theme.transitions.create("opacity", {
 //     duration: theme.transitions.duration.shorter,
 //   }),
 //   ...cssStyles(theme).bgBlur(),
 // }));

;// CONCATENATED MODULE: ./src/components/nav-section/vertical/NavItem.js


// @mui



//


function NavItem({ data , isCollapse , ...other }) {
    const { pathname , asPath , push  } = (0,router_.useRouter)();
    const { path , title , icon  } = data;
    const active = getActive(path, pathname, asPath);
    const handleClickItem = ()=>{
        push(path);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ListItemStyle, {
        sx: {
            margin: 2
        },
        active: active,
        onClick: handleClickItem,
        ...other,
        children: icon && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Icon, {
                    sx: {
                        display: "flex"
                    },
                    height: config/* ICON.NAVBAR_ITEM */.Wm.NAVBAR_ITEM,
                    width: config/* ICON.NAVBAR_ITEM */.Wm.NAVBAR_ITEM,
                    children: icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ListItemTextStyle, {
                    sx: {
                        margin: 2
                    },
                    isCollapse: isCollapse,
                    primary: title,
                    primaryTypographyProps: {
                        noWrap: true,
                        // variant: "caption",
                        variant: active ? "subtitle2" : "body2"
                    }
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/nav-section/vertical/index.js



function NavSectionVertical({ navConfig , isCollapse , ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        ...other,
        children: navConfig.map((item)=>// <List key={item.title} disablePadding sx={{ px: 2 }}>
            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                isCollapse: isCollapse,
                data: item,
                depth: 1
            }, item.title))
    });
};

;// CONCATENATED MODULE: ./src/components/nav-section/index.js


function getActive(path, pathname) {
    return path ? !!(0,external_react_router_dom_.matchPath)({
        path,
        end: false
    }, pathname) : false;
}


/***/ }),

/***/ 2193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_CollapseDrawerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(925);


// ----------------------------------------------------------------------
const useCollapseDrawer = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_CollapseDrawerContext__WEBPACK_IMPORTED_MODULE_1__/* .CollapseDrawerContext */ .y);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCollapseDrawer);


/***/ }),

/***/ 7627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useOffSetTop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useOffSetTop(top) {
    const { 0: offsetTop , 1: setOffSetTop  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const isTop = top || 100;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.onscroll = ()=>{
            if (window.pageYOffset > isTop) {
                setOffSetTop(true);
            } else {
                setOffSetTop(false);
            }
        };
        return ()=>{
            window.onscroll = null;
        };
    }, [
        isTop
    ]);
    return offsetTop;
}; // Usage
 // const offset = useOffSetTop(100);


/***/ }),

/***/ 1053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7364);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MenuPopover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4818);
/* harmony import */ var _components_AdminAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9218);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_animate__WEBPACK_IMPORTED_MODULE_9__]);
_components_animate__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui


// next

// routes

// hooks

// components



function Account() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { user , logout  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const handleOpen = (event)=>{
        setOpen(event.currentTarget);
    };
    const handleClose = ()=>{
        setOpen(null);
    };
    const handleLogout = async ()=>{
        try {
            await logout();
            router.replace(_routes_paths__WEBPACK_IMPORTED_MODULE_5__/* .PATH_AUTH.login */ .EE.login);
        } catch (error) {
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animate__WEBPACK_IMPORTED_MODULE_9__/* .AnimateIconButton */ .aZ, {
                onClick: handleOpen,
                sx: {
                    p: 0,
                    ...open && {
                        "&:before": {
                            zIndex: 1,
                            content: "''",
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            position: "absolute",
                            bgcolor: (theme)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.grey[900], 0.8)
                        }
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AdminAvatar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MenuPopover__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                open: Boolean(open),
                anchorEl: open,
                onClose: handleClose,
                sx: {
                    p: 0,
                    mt: 1.5,
                    ml: 0.75,
                    "& .MuiMenuItem-root": {
                        typography: "body2",
                        borderRadius: 0.75
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            my: 1.5,
                            px: 2.5
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "subtitle2",
                                noWrap: true,
                                children: user?.displayName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "body2",
                                sx: {
                                    color: "text.secondary"
                                },
                                noWrap: true,
                                children: user?.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                        sx: {
                            borderStyle: "dashed"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                        sx: {
                            m: 1
                        },
                        children: "Settings"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                        sx: {
                            m: 1
                        },
                        children: "Profile"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                        sx: {
                            borderStyle: "dashed"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                        onClick: handleLogout,
                        sx: {
                            m: 1
                        },
                        children: "Logout"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NotificationsPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6110);
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(change_case__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5267);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7740);
/* harmony import */ var _components_Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2554);
/* harmony import */ var _components_Scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5447);
/* harmony import */ var _components_MenuPopover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4818);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Iconify__WEBPACK_IMPORTED_MODULE_7__, _components_animate__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Iconify__WEBPACK_IMPORTED_MODULE_7__, _components_animate__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// @mui

// utils

// _mock_

// components




// ----------------------------------------------------------------------
function NotificationsPopover() {
    const { 0: notifications , 1: setNotifications  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_mock__WEBPACK_IMPORTED_MODULE_6__/* ._notifications */ .I);
    const totalUnRead = notifications.filter((item)=>item.isUnRead === true).length;
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const handleOpen = (event)=>{
        setOpen(event.currentTarget);
    };
    const handleClose = ()=>{
        setOpen(null);
    };
    const handleMarkAllAsRead = ()=>{
        setNotifications(notifications.map((notification)=>({
                ...notification,
                isUnRead: false
            })));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animate__WEBPACK_IMPORTED_MODULE_10__/* .AnimateIconButton */ .aZ, {
                color: open ? "primary" : "default",
                onClick: handleOpen,
                sx: {
                    width: 40,
                    height: 40
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                    badgeContent: totalUnRead,
                    color: "error",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        icon: "eva:bell-fill",
                        width: 20,
                        height: 20
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MenuPopover__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                open: Boolean(open),
                anchorEl: open,
                onClose: handleClose,
                sx: {
                    width: 360,
                    p: 0,
                    mt: 1.5,
                    ml: 0.75
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            py: 2,
                            px: 2.5
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    flexGrow: 1
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                        variant: "subtitle1",
                                        children: "Notifications"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                        variant: "body2",
                                        sx: {
                                            color: "text.secondary"
                                        },
                                        children: [
                                            "You have ",
                                            totalUnRead,
                                            " unread messages"
                                        ]
                                    })
                                ]
                            }),
                            totalUnRead > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                                title: " Mark all as read",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                    color: "primary",
                                    onClick: handleMarkAllAsRead,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        icon: "eva:done-all-fill",
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                        sx: {
                            borderStyle: "dashed"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            p: 1
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                            fullWidth: true,
                            disableRipple: true,
                            children: "View All"
                        })
                    })
                ]
            })
        ]
    });
};
// ----------------------------------------------------------------------
NotificationItem.propTypes = {
    notification: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date),
        id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        isUnRead: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        avatar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
    })
};
function NotificationItem({ notification  }) {
    const { avatar , title  } = renderContent(notification);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemButton, {
        sx: {
            py: 1.5,
            px: 2.5,
            mt: "1px",
            ...notification.isUnRead && {
                bgcolor: "action.selected"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemAvatar, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                    sx: {
                        bgcolor: "background.neutral"
                    },
                    children: avatar
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                primary: title,
                secondary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                    variant: "caption",
                    sx: {
                        mt: 0.5,
                        display: "flex",
                        alignItems: "center",
                        color: "text.disabled"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            icon: "eva:clock-outline",
                            sx: {
                                mr: 0.5,
                                width: 16,
                                height: 16
                            }
                        }),
                        (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_5__/* .fToNow */ .DY)(notification.createdAt)
                    ]
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
function renderContent(notification) {
    const title = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "subtitle2",
        children: [
            notification.title,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                component: "span",
                variant: "body2",
                sx: {
                    color: "text.secondary"
                },
                children: [
                    "\xa0 ",
                    (0,change_case__WEBPACK_IMPORTED_MODULE_2__.noCase)(notification.description)
                ]
            })
        ]
    });
    if (notification.type === "order_placed") {
        return {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: notification.title,
                src: "https://minimal-assets-api-dev.vercel.app/assets/icons/ic_notification_package.svg"
            }),
            title
        };
    }
    if (notification.type === "order_shipped") {
        return {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: notification.title,
                src: "https://minimal-assets-api-dev.vercel.app/assets/icons/ic_notification_shipping.svg"
            }),
            title
        };
    }
    if (notification.type === "mail") {
        return {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: notification.title,
                src: "https://minimal-assets-api-dev.vercel.app/assets/icons/ic_notification_mail.svg"
            }),
            title
        };
    }
    if (notification.type === "chat_message") {
        return {
            avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: notification.title,
                src: "https://minimal-assets-api-dev.vercel.app/assets/icons/ic_notification_chat.svg"
            }),
            title
        };
    }
    return {
        avatar: notification.avatar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            alt: notification.title,
            src: notification.avatar
        }) : null,
        title
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DashboardHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7627);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5102);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1796);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4744);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3726);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6034);
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1053);
/* harmony import */ var _NotificationsPopover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7753);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6248);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_animate__WEBPACK_IMPORTED_MODULE_6__, _Account__WEBPACK_IMPORTED_MODULE_9__, _NotificationsPopover__WEBPACK_IMPORTED_MODULE_10__]);
([_components_animate__WEBPACK_IMPORTED_MODULE_6__, _Account__WEBPACK_IMPORTED_MODULE_9__, _NotificationsPopover__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @mui



// hooks


// components
// import Iconify from "src/components/Iconify";


// config

// utils

//



const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {
    shouldForwardProp: (prop)=>prop !== "isCollapse" && prop !== "isOffset" && prop !== "verticalLayout"
})(({ isCollapse , isOffset , verticalLayout , theme  })=>({
        ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(theme).bgBlur(),
        boxShadow: "none",
        height: _config__WEBPACK_IMPORTED_MODULE_7__/* .HEADER.MOBILE_HEIGHT */ .yf.MOBILE_HEIGHT,
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create([
            "width",
            "height"
        ], {
            duration: theme.transitions.duration.shorter
        }),
        [theme.breakpoints.up("lg")]: {
            height: _config__WEBPACK_IMPORTED_MODULE_7__/* .HEADER.DASHBOARD_DESKTOP_HEIGHT */ .yf.DASHBOARD_DESKTOP_HEIGHT,
            width: `calc(100% - ${_config__WEBPACK_IMPORTED_MODULE_7__/* .NAVBAR.DASHBOARD_WIDTH */ .Au.DASHBOARD_WIDTH + 1}px)`,
            ...isCollapse && {
                width: `calc(100% - ${_config__WEBPACK_IMPORTED_MODULE_7__/* .NAVBAR.DASHBOARD_COLLAPSE_WIDTH */ .Au.DASHBOARD_COLLAPSE_WIDTH}px)`
            },
            ...isOffset && {
                height: _config__WEBPACK_IMPORTED_MODULE_7__/* .HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT */ .yf.DASHBOARD_DESKTOP_OFFSET_HEIGHT
            },
            ...verticalLayout && {
                width: "100%",
                height: _config__WEBPACK_IMPORTED_MODULE_7__/* .HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT */ .yf.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
                backgroundColor: theme.palette.background.default
            }
        }
    }));
function DashboardHeader({ isCollapse =true , onOpenSidebar , verticalLayout =false ,  }) {
    const isOffset = (0,_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_config__WEBPACK_IMPORTED_MODULE_7__/* .HEADER.DASHBOARD_DESKTOP_HEIGHT */ .yf.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
    const isDesktop = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("up", "lg");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        isCollapse: isCollapse,
        isOffset: isOffset,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {
            sx: {
                minHeight: "100% !important",
                px: {
                    lg: 5
                }
            },
            children: [
                isDesktop && verticalLayout && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    sx: {
                        mr: 2.5
                    }
                }),
                !isDesktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animate__WEBPACK_IMPORTED_MODULE_6__/* .AnimateIconButton */ .aZ, {
                    onClick: onOpenSidebar,
                    sx: {
                        mr: 1,
                        color: "text.primary"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        flexGrow: 1
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "row",
                    alignItems: "center",
                    spacing: {
                        xs: 0.5,
                        sm: 4
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NotificationsPopover__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Account__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DashboardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useCollapseDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2193);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3726);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7643);
/* harmony import */ var _navbar_NavbarVertical__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5922);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_6__, _navbar_NavbarVertical__WEBPACK_IMPORTED_MODULE_7__]);
([_header__WEBPACK_IMPORTED_MODULE_6__, _navbar_NavbarVertical__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui


// hooks

// config

//


const MainStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("main", {
    shouldForwardProp: (prop)=>prop !== "collapseClick"
})(({ collapseClick , theme  })=>({
        flexGrow: 1,
        paddingTop: _config__WEBPACK_IMPORTED_MODULE_5__/* .HEADER.MOBILE_HEIGHT */ .yf.MOBILE_HEIGHT + 24,
        paddingBottom: _config__WEBPACK_IMPORTED_MODULE_5__/* .HEADER.MOBILE_HEIGHT */ .yf.MOBILE_HEIGHT + 24,
        // marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
        [theme.breakpoints.up("lg")]: {
            paddingTop: _config__WEBPACK_IMPORTED_MODULE_5__/* .HEADER.DASHBOARD_DESKTOP_HEIGHT */ .yf.DASHBOARD_DESKTOP_HEIGHT + 24,
            paddingBottom: _config__WEBPACK_IMPORTED_MODULE_5__/* .HEADER.DASHBOARD_DESKTOP_HEIGHT */ .yf.DASHBOARD_DESKTOP_HEIGHT + 24,
            width: `calc(100% - ${_config__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR.DASHBOARD_WIDTH */ .Au.DASHBOARD_WIDTH}px)`,
            transition: theme.transitions.create("margin-right", {
                duration: theme.transitions.duration.shorter
            }),
            ...collapseClick && {
                marginLeft: _config__WEBPACK_IMPORTED_MODULE_5__/* .NAVBAR.DASHBOARD_COLLAPSE_WIDTH */ .Au.DASHBOARD_COLLAPSE_WIDTH
            }
        }
    }));
function DashboardLayout({ children  }) {
    const { collapseClick , isCollapse  } = (0,_hooks_useCollapseDrawer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            display: {
                lg: "flex"
            },
            minHeight: {
                lg: 1
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                isCollapse: isCollapse,
                onOpenSidebar: ()=>setOpen(true)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_NavbarVertical__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                isOpenSidebar: open,
                onCloseSidebar: ()=>setOpen(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MainStyle, {
                collapseClick: collapseClick,
                children: children
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollapseButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_KeyboardTabOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3675);
/* harmony import */ var _mui_icons_material_KeyboardTabOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardTabOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_animate_AnimateIconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_animate_AnimateIconButton__WEBPACK_IMPORTED_MODULE_4__]);
_components_animate_AnimateIconButton__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui


// components

// ----------------------------------------------------------------------
CollapseButton.propTypes = {
    collapseClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    onToggleCollapse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function CollapseButton({ onToggleCollapse , collapseClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animate_AnimateIconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        onClick: onToggleCollapse,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                lineHeight: 0,
                transition: (theme)=>theme.transitions.create("transform", {
                        duration: theme.transitions.duration.shorter
                    }),
                ...!collapseClick && {
                    transform: "rotateY(180deg)"
                }
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardTabOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {})
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6939);
/* harmony import */ var _mui_icons_material_DriveFolderUploadOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5744);
/* harmony import */ var _mui_icons_material_DriveFolderUploadOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DriveFolderUploadOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_AutorenewOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3014);
/* harmony import */ var _mui_icons_material_AutorenewOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AutorenewOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_QueryStatsOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4372);
/* harmony import */ var _mui_icons_material_QueryStatsOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_QueryStatsOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_PersonSearchOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5043);
/* harmony import */ var _mui_icons_material_PersonSearchOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PersonSearchOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_InsertChartOutlinedTwoTone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9586);
/* harmony import */ var _mui_icons_material_InsertChartOutlinedTwoTone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_InsertChartOutlinedTwoTone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_SettingsOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5649);
/* harmony import */ var _mui_icons_material_SettingsOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SettingsOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8613);
/* harmony import */ var _mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_8__);
// routes


// @mui







const ICONS = {
    autoSignal: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AutorenewOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {}),
    dataLoad: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DriveFolderUploadOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {}),
    autoEvaluation: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_QueryStatsOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {}),
    manualEvaluation: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PersonSearchOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {}),
    autoResult: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_InsertChartOutlinedTwoTone__WEBPACK_IMPORTED_MODULE_6___default()), {}),
    settings: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SettingsOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {}),
    report: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {})
};
const navConfig = [
    {
        title: `자동 신호 수집`,
        path: _routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .PATH_DASHBOARD.autoSignal */ .vB.autoSignal,
        icon: ICONS.autoSignal
    },
    {
        title: `DATA LOAD`,
        path: _routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .PATH_DASHBOARD.dataLoad.root */ .vB.dataLoad.root,
        icon: ICONS.dataLoad
    },
    {
        title: `자동 평가`,
        path: _routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .PATH_DASHBOARD.autoEvaluation */ .vB.autoEvaluation,
        icon: ICONS.autoEvaluation
    },
    {
        title: `자동 평가 결과`,
        path: _routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .PATH_DASHBOARD.autoResult */ .vB.autoResult,
        icon: ICONS.autoResult
    },
    {
        title: `수동 평가`,
        path: _routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .PATH_DASHBOARD.manualEvaluation */ .vB.manualEvaluation,
        icon: ICONS.manualEvaluation
    },
    {
        title: `REPORT`,
        path: _routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .PATH_DASHBOARD.report */ .vB.report,
        icon: ICONS.report
    },
    {
        title: `Settings`,
        path: _routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .PATH_DASHBOARD.settings */ .vB.settings,
        icon: ICONS.settings
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navConfig);


/***/ }),

/***/ 5922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavbarVertical)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5102);
/* harmony import */ var _hooks_useCollapseDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2193);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6034);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3726);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1796);
/* harmony import */ var _components_nav_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5554);
/* harmony import */ var _NavConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(275);
/* harmony import */ var _CollapseButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollapseButton__WEBPACK_IMPORTED_MODULE_13__]);
_CollapseButton__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// @mui


// hooks


// utils

// config

// components


//


const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)("div")(({ theme  })=>({
        [theme.breakpoints.up("lg")]: {
            flexShrink: 0,
            transition: theme.transitions.create("width", {
                duration: theme.transitions.duration.shorter
            })
        }
    }));
// ----------------------------------------------------------------------
NavbarVertical.propTypes = {
    isOpenSidebar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    onCloseSidebar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function NavbarVertical({ isOpenSidebar , onCloseSidebar  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isDesktop = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("up", "lg");
    const { isCollapse , collapseClick , collapseHover , onToggleCollapse , onHoverEnter , onHoverLeave ,  } = (0,_hooks_useCollapseDrawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isOpenSidebar) {
            console.log("열려있음");
            onCloseSidebar();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                spacing: 3,
                sx: {
                    pt: 3,
                    px: 3,
                    pl: 3.6
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    isCollapse: isCollapse
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    flexGrow: 2
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav_section__WEBPACK_IMPORTED_MODULE_11__/* .NavSectionVertical */ .M, {
                navConfig: _NavConfig__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                isCollapse: isCollapse
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    flexGrow: 2
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    p: 3
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CollapseButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    sx: {
                        position: "absolute"
                    },
                    onToggleCollapse: onToggleCollapse,
                    collapseClick: collapseClick
                })
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        sx: {
            width: {
                lg: isCollapse ? _config__WEBPACK_IMPORTED_MODULE_9__/* .NAVBAR.DASHBOARD_COLLAPSE_WIDTH */ .Au.DASHBOARD_COLLAPSE_WIDTH : _config__WEBPACK_IMPORTED_MODULE_9__/* .NAVBAR.DASHBOARD_WIDTH */ .Au.DASHBOARD_WIDTH
            },
            ...collapseClick && {
                position: "absolute"
            }
        },
        children: isDesktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
            open: true,
            variant: "persistent",
            // onMouseEnter={onHoverEnter}
            // onMouseLeave={onHoverLeave}
            PaperProps: {
                sx: {
                    width: _config__WEBPACK_IMPORTED_MODULE_9__/* .NAVBAR.DASHBOARD_COLLAPSE_WIDTH */ .Au.DASHBOARD_COLLAPSE_WIDTH,
                    borderRightStyle: "dashed",
                    bgcolor: "background.default",
                    transition: (theme)=>theme.transitions.create("width", {
                            duration: theme.transitions.duration.standard
                        }),
                    ...!isCollapse && {
                        width: _config__WEBPACK_IMPORTED_MODULE_9__/* .NAVBAR.DASHBOARD_WIDTH */ .Au.DASHBOARD_WIDTH
                    }
                }
            },
            children: renderContent
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_dashboard__WEBPACK_IMPORTED_MODULE_1__]);
_dashboard__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// components


function Layout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dashboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: children
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ fToNow)
/* harmony export */ });
/* unused harmony exports fDate, fDateTime, fTimestamp, fDateTimeSuffix */
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function fDate(date) {
    return format(new Date(date), "dd MMMM yyyy");
}
function fDateTime(date) {
    return format(new Date(date), "dd MMM yyyy p");
}
function fTimestamp(date) {
    return getTime(new Date(date));
}
function fDateTimeSuffix(date) {
    return format(new Date(date), "dd/MM/yyyy hh:mm p");
}
function fToNow(date) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.formatDistanceToNow)(new Date(date), {
        addSuffix: true
    });
}


/***/ })

};
;