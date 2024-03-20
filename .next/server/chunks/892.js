"use strict";
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 8892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l": () => (/* binding */ postAPI)
/* harmony export */ });
/* harmony import */ var _lib_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6275);
/* harmony import */ var _interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5758);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_http__WEBPACK_IMPORTED_MODULE_0__, _instance__WEBPACK_IMPORTED_MODULE_2__]);
([_lib_http__WEBPACK_IMPORTED_MODULE_0__, _instance__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const customerArticlesServices = {
    getArticles: (queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get("/articals", {
            params: queryObject
        });
    },
    getArticleDetail: (id)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(`/articals/${id}`);
    },
    getArticleByPost: (typePost, queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(`/articals?type=${typePost}`, {
            params: queryObject
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customerArticlesServices);
class postAPI extends _instance__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z {
    getPostbySlug = async (slug)=>{
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/articals?slug=${slug}`).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
    getPostbyHomepage = async ()=>{
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .vU}/articals?onTop=true`).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;