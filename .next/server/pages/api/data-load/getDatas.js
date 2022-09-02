"use strict";
(() => {
var exports = {};
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 3019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ executeQuery)
});

;// CONCATENATED MODULE: external "serverless-mysql"
const external_serverless_mysql_namespaceObject = require("serverless-mysql");
var external_serverless_mysql_default = /*#__PURE__*/__webpack_require__.n(external_serverless_mysql_namespaceObject);
;// CONCATENATED MODULE: ./src/common/config/db/db.js

const db = external_serverless_mysql_default()({
    config: {
        user: "admin",
        password: "khnp1234!",
        host: "khnpdb.ctamcwxguh9x.ap-northeast-1.rds.amazonaws.com",
        port: "3306",
        database: "khnp"
    }
});
async function executeQuery({ query , values  }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return {
            error
        };
    }
};


/***/ }),

/***/ 8431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_config_db_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3019);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const result = await (0,_common_config_db_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            query: `SELECT * FROM DATA`
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8431));
module.exports = __webpack_exports__;

})();