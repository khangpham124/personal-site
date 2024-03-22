"use strict";
(() => {
var exports = {};
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 9023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const productCategories = [
    {
        url: "/products/dam",
        title: "đầm",
        trans: "menu.folder_product.prom_dress",
        class_name: "menu-item-child"
    },
    {
        url: "/products/ao",
        title: "\xe1o",
        trans: "menu.folder_product.t_shirt",
        class_name: "menu-item-child"
    },
    {
        url: "/products/quan-vay",
        title: "quần/ v\xe1y",
        trans: "menu.folder_product.jeans_dress",
        class_name: "menu-item-child"
    },
    {
        url: "/products/jumpsuit",
        title: "Jumpsuit",
        trans: "menu.folder_product.jumpsuit",
        class_name: "menu-item-child"
    },
    {
        url: "/products/ao-dai",
        title: "\xc1o d\xe0i",
        trans: "menu.folder_product.t_shirt_long",
        class_name: "menu-item-child"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productCategories);


/***/ }),

/***/ 3444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9186);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7209);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6828);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6648);
/* harmony import */ var _fixtures_productCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9023);
/* harmony import */ var _fixtures_products_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5038);
/* harmony import */ var _layouts_Filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3692);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3292);
/* harmony import */ var _Util_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4031);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Filters__WEBPACK_IMPORTED_MODULE_6__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_7__]);
([_layouts_Filters__WEBPACK_IMPORTED_MODULE_6__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ProductCategoryPage = ({ slug  })=>{
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_9__.useTranslations)("Category");
    const breadcrumbs = [
        {
            title: t("home"),
            url: _constants_routes__WEBPACK_IMPORTED_MODULE_10__/* .HOME */ .Sd
        },
        {
            title: t("products"),
            url: _constants_routes__WEBPACK_IMPORTED_MODULE_10__/* .PRODUCTS */ .bQ
        },
        {
            title: slug
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_7__/* .MainLayout */ .Z, {
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h, {
            title: _constants_config__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.title */ .X.title,
            description: _constants_config__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.description */ .X.description
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                breadcrumbs: breadcrumbs,
                border: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Filters__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ params , locale  })=>{
    const checkSlugExist = (0,_Util_helper__WEBPACK_IMPORTED_MODULE_8__/* .checkExists */ .rx)(_fixtures_productCategories__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, "/products/", params.category);
    if (!checkSlugExist) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            slug: params?.category,
            messages: {
                ...__webpack_require__(2390)(`./${locale}.json`)
            },
            products: _fixtures_products_json__WEBPACK_IMPORTED_MODULE_5__
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCategoryPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 503:
/***/ ((module) => {

module.exports = require("next-intl");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1535:
/***/ ((module) => {

module.exports = require("react-if");

/***/ }),

/***/ 8056:
/***/ ((module) => {

module.exports = require("react-range-slider-input");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 2194:
/***/ ((module) => {

module.exports = import("query-string");;

/***/ }),

/***/ 9512:
/***/ ((module) => {

module.exports = require("timers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,705,963,901,176,4,582,202,148,692], () => (__webpack_exec__(3444)));
module.exports = __webpack_exports__;

})();