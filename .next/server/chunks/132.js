"use strict";
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 3132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cb": () => (/* binding */ useCustomerProducts),
/* harmony export */   "d$": () => (/* binding */ useProductsSameStyle),
/* harmony export */   "uY": () => (/* binding */ colorOptions),
/* harmony export */   "xn": () => (/* binding */ useCustomerProductsDetail)
/* harmony export */ });
/* unused harmony export useProductsByUuid */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _services_customerProductServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _services_customerProductServices__WEBPACK_IMPORTED_MODULE_1__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _services_customerProductServices__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useCustomerProducts = (queryObject)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "products"
    ], async ()=>{
        const response = await _services_customerProductServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getProducts */ .Z.getProducts(queryObject);
        return response.data;
    });
};
// export const useCustomerProductsDetail = (id?: string) => {
//   return useQuery(['products'], async () => {
//     const response = await customerProductServices.getProductsDetail(id);
//     return response.data;
//   });
// };
const useCustomerProductsDetail = (id)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "products"
    ], async ()=>{
        const response = await _services_customerProductServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getProductsDetail */ .Z.getProductsDetail(id);
        return response.data;
    });
};
const useProductsSameStyle = (style)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "productsStyle"
    ], async ()=>{
        const response = await _services_customerProductServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getProductsByStyle */ .Z.getProductsByStyle(String(style));
        return response.data;
    });
};
const useProductsByUuid = (id)=>{
    return useQuery([
        "productsStyle"
    ], async ()=>{
        const response = await customerProductServices.getProductsByStyle(String(id));
        return response.data;
    });
};
const colorOptions = [
    {
        label: "PINK",
        value: "H",
        code: "F5C3CB"
    },
    {
        label: "ORANGE",
        value: "C",
        code: "EFA543"
    },
    {
        label: "RED",
        value: "R",
        code: "E85F59"
    },
    {
        label: "YELLOW",
        value: "V",
        code: "F7DC8B"
    },
    {
        label: "GREEN",
        value: "XL",
        code: "73CF9A"
    },
    {
        label: "BLUE",
        value: "XD",
        code: "9FCBF6"
    },
    {
        label: "VOILET",
        value: "T",
        code: "3571E3"
    },
    {
        label: "BLACK",
        value: "D",
        code: "000000"
    },
    {
        label: "GRAY",
        value: "XA",
        code: "1F262C"
    },
    {
        label: "WHITE",
        value: "TR",
        code: "FFFFFF"
    },
    {
        label: "BROWN",
        value: "N",
        code: "743B3A"
    },
    {
        label: "BE",
        value: "B",
        code: "F5C3CB"
    },
    {
        label: "Multicolor",
        value: "M",
        code: "F5C3CB"
    },
    {
        label: "PANTERN",
        value: "P",
        code: "F5C3CB"
    },
    {
        label: "CREAM",
        value: "K",
        code: "F5C3CB"
    }, 
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6275);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_http__WEBPACK_IMPORTED_MODULE_0__]);
_lib_http__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const customerProductServices = {
    getProducts: (queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get("/customer/products", {
            params: queryObject
        });
    },
    getProductsDetail: (id)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(`/customer/products/get-by-slug/${id}`);
    },
    // /api/jusystem/customer/products/get-by-slug/{slug}
    getProductsByStyle: (style, queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(`/customer/products?styleCode=${style}`, {
            params: queryObject
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customerProductServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;