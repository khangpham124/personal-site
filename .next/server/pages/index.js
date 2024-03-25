(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useContentWeb)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _services_contentWebServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _services_contentWebServices__WEBPACK_IMPORTED_MODULE_1__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _services_contentWebServices__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useContentWeb = (queryObject)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "slider"
    ], async ()=>{
        const response = await _services_contentWebServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getSlider */ .Z.getSlider(queryObject);
        return response.data;
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cb": () => (/* binding */ useCustomerProducts)
/* harmony export */ });
/* unused harmony exports useCustomerProductsDetail, useProductsSameStyle, useProductsByUuid, colorOptions */
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
    return useQuery([
        "products"
    ], async ()=>{
        const response = await customerProductServices.getProductsDetail(id);
        return response.data;
    });
};
const useProductsSameStyle = (style)=>{
    return useQuery([
        "productsStyle"
    ], async ()=>{
        const response = await customerProductServices.getProductsByStyle(String(style));
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

/***/ 5654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useContentWeb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2772);
/* harmony import */ var _hooks_useCollections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8011);
/* harmony import */ var _services_customerItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1202);
/* harmony import */ var _services_customerArticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8892);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useContentWeb__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCollections__WEBPACK_IMPORTED_MODULE_4__, _services_customerItems__WEBPACK_IMPORTED_MODULE_5__, _services_customerArticles__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks_useContentWeb__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCollections__WEBPACK_IMPORTED_MODULE_4__, _services_customerItems__WEBPACK_IMPORTED_MODULE_5__, _services_customerArticles__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const HomeLayout = ({ products  })=>{
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_1__.useTranslations)("Index");
    const sevicesitemAPI = new _services_customerItems__WEBPACK_IMPORTED_MODULE_5__/* .itemAPI */ .S();
    const sevicesPostAPI = new _services_customerArticles__WEBPACK_IMPORTED_MODULE_6__/* .postAPI */ .l();
    const { 0: currentItems , 1: setCurrentItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(products);
    const { 0: flashSaleItems , 1: setFlashSaleItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(products);
    const { 0: postHome , 1: setPostHome  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: flashTime , 1: setFlashTime  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { data  } = (0,_hooks_useContentWeb__WEBPACK_IMPORTED_MODULE_3__/* .useContentWeb */ .$)();
    const collections = (0,_hooks_useCollections__WEBPACK_IMPORTED_MODULE_4__/* .useLastestCollections */ .u)();
    const collectionsArr = collections?.data?.data;
    const { 0: nav1 , 1: setNav1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: nav2 , 1: setNav2  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
    // sevicesitemAPI.getProductInHot(1).then((res: any) => {
    //   setCurrentItems(res.data.data);
    // });
    // sevicesitemAPI.getFlashSaleInStore().then((res: any) => {
    //   // setFlashSaleItems(res.data.paginatedProducts)
    //   setFlashSaleItems(res.data.paginatedProducts.data);
    //   const endTime = res.data.flashSale.endDate;
    //   setFlashTime(endTime);
    // });
    // sevicesPostAPI.getPostbyHomepage().then((res: any) => {
    //   setPostHome(res.data.data);
    // });
    // new Vivus("hi-there", {
    //   type: "scenario",
    //   duration: 200,
    //   start: "autostart",
    //   dashGap: 150,
    //   forceRender: false,
    // });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "teddy_slide",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_7___default()), {
                // ref={(slider2) => setNav2(slider2 as any)}
                slidesToShow: 1,
                swipeToSlide: true,
                focusOnSelect: true,
                arrows: false,
                vertical: true,
                fade: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `https://teddycoder.com/assets/img/top/coder1.jpg`,
                            alt: "Our Shop"
                        })
                    }, `slide_1`),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `https://teddycoder.com/assets/img/top/coder3.jpg`,
                            alt: "Our Shop"
                        })
                    }, `slide_1`),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `https://teddycoder.com/assets/img/top/coder2.jpg`,
                            alt: "Our Shop"
                        })
                    }, `slide_1`)
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7209);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6828);
/* harmony import */ var _layouts_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5654);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3292);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3132);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Home__WEBPACK_IMPORTED_MODULE_3__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__, _hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_6__]);
([_layouts_Home__WEBPACK_IMPORTED_MODULE_3__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__, _hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import ProductsJson from '@/fixtures/products.json';


const Home = ()=>{
    // const { data } = useCustomerProducts();
    const { data  } = (0,_hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_6__/* .useCustomerProducts */ .Cb)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__/* .MainLayout */ .Z, {
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_1__/* .Meta */ .h, {
            title: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.title */ .X.title,
            description: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.description */ .X.description
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            products: data?.data || []
        })
    });
};
const getStaticProps = async ({ locale  })=>{
    // let products: IProduct[] = ProductsJson;
    // const res = await axios.get(
    //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products?order_by=createdAt.desc&limit=10`
    // );
    // const fetchedProducts = res.data;
    // fetchedProducts.data.forEach((product: IProduct) => {
    //   products = [
    //     ...products,
    //     {
    //       id: product.id,
    //       name: product.name,
    //       price: product.price,
    //       img1: product.image1,
    //       img2: product.image2,
    //     },
    //   ];
    // });
    return {
        props: {
            messages: {
                ...__webpack_require__(2390)(`./${locale}.json`)
            }
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6275);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_http__WEBPACK_IMPORTED_MODULE_0__]);
_lib_http__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { CustomerProductServices } from '@/interfaces/customerProduct-service';

const contentWebServices = {
    getSlider: (queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get("/slider", {
            params: queryObject
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentWebServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 8562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 2390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": 5176,
	"./vi.json": 4901
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2390;

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 8982:
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1535:
/***/ ((module) => {

"use strict";
module.exports = require("react-if");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 2194:
/***/ ((module) => {

"use strict";
module.exports = import("query-string");;

/***/ }),

/***/ 9512:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,705,4,901,176,892], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();