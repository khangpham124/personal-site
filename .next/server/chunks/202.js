"use strict";
exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 1202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ itemAPI)
/* harmony export */ });
/* harmony import */ var _interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5758);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_instance__WEBPACK_IMPORTED_MODULE_1__]);
_instance__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { CustomerArticleServices, QueryObject } from '@/interfaces/customerInform-service.ts';

// import { axiosPrivate } from '@/lib/http';
// import axiosPrivate from '@/lib/httpPrivate';


// const customerProfileServices: CustomerArticleServices = {
//   getCustomerProfile: (queryObject?: QueryObject) => {
//     return axiosPrivate.get('/customers/profile', { params: queryObject });
//   },
// };
// export default customerProfileServices;
class itemAPI extends _instance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    getProductDetai = async (id)=>{
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/products/${id}`).catch(_instance__WEBPACK_IMPORTED_MODULE_1__/* .catchAxiosError */ .A);
        return response;
    };
    getProductInHot = async (page)=>{
        const perPage = 8;
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/products?page=${page}&perPage=${perPage}&lteTotalAvailableItems=1&isHot=true`).catch(_instance__WEBPACK_IMPORTED_MODULE_1__/* .catchAxiosError */ .A);
        return response;
    };
    getProductInStore = async (page)=>{
        const perPage = 18;
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/products?page=${page}&perPage=${perPage}&lteTotalAvailableItems=1`).catch(_instance__WEBPACK_IMPORTED_MODULE_1__/* .catchAxiosError */ .A);
        return response;
    };
    getFlashSaleInStore = async ()=>{
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/flash-sale`).catch(_instance__WEBPACK_IMPORTED_MODULE_1__/* .catchAxiosError */ .A);
        return response;
    };
    getCategoryItem = async ()=>{
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/category`).catch(_instance__WEBPACK_IMPORTED_MODULE_1__/* .catchAxiosError */ .A);
        return response;
    };
    getProductInFilter = async (fromPrice, toPrice, categoryUuids, colors, sort)=>{
        const paramFromPrice = `?fromPrice=${fromPrice}`;
        const paramToPrice = `&toPrice=${toPrice}`;
        const paramCategoryUuids = categoryUuids !== "" ? `&categoryUuids=${categoryUuids}` : ``;
        const paramColors = colors !== "" ? `&colors=${colors}` : ``;
        const paramSort = sort !== "" ? sort : ``;
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/products${paramFromPrice}${paramToPrice}${paramCategoryUuids}${paramColors}${paramSort}`).catch(_instance__WEBPACK_IMPORTED_MODULE_1__/* .catchAxiosError */ .A);
        return response;
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;