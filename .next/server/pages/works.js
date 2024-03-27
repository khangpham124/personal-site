"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 9154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _services_worksServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3885);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_worksServices__WEBPACK_IMPORTED_MODULE_3__]);
_services_worksServices__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { useArticlesByPost } from "@/hooks/useArticle";
// import { ItemPost } from '@/services/articleServices';




function WorksLayout() {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_1__.useTranslations)("Category");
    const sevicesWorksAPI = new _services_worksServices__WEBPACK_IMPORTED_MODULE_3__/* .infoAPI */ .j();
    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: images , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: imagesUrl , 1: setImagesUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const settings = {
        slidesToShow: 1,
        swipeToSlide: true,
        // focusOnSelect: true,
        arrows: true,
        // vertical: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        infinite: true,
        speed: 800
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        sevicesWorksAPI.getListWorks().then((res)=>{
            const allWorks = res.data;
            let arryWorks = [];
            let mediaIds = [];
            allWorks?.map((item)=>{
                const items = {
                    title: item.title.rendered,
                    link: item.acf.url,
                    thumb: item.acf.thumb,
                    content: item.content.rendered
                };
                arryWorks.push(items);
                mediaIds.push(item.featured_media);
            });
            setPosts(arryWorks);
            setImages(mediaIds);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mainContent",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "heading--sub",
                children: "WORKS"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                ...settings,
                children: posts?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-3/12 mt-10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "heading--2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: `${item.link}`,
                                                target: "_blank",
                                                children: item.title
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4",
                                            dangerouslySetInnerHTML: {
                                                __html: String(item.content)
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: `${item.link}`,
                                            className: "btn-view",
                                            target: "_blank",
                                            children: "View more"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-8/12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${item.thumb}`,
                                        className: "w-full",
                                        alt: "Our Shop"
                                    })
                                })
                            ]
                        })
                    }, `slide_${index}`))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorksLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3056:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7209);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6828);
/* harmony import */ var _fixtures_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5038);
/* harmony import */ var _layouts_Works__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9154);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Works__WEBPACK_IMPORTED_MODULE_4__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__]);
([_layouts_Works__WEBPACK_IMPORTED_MODULE_4__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { HOME } from "@/constants/routes";



const DocumentsPage = ()=>{
    // const t = useTranslations("Category");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* .MainLayout */ .Z, {
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_1__/* .Meta */ .h, {
            title: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.title */ .X.title,
            description: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.description */ .X.description
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Works__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
    });
};
const getServerSideProps = async ({ locale  })=>{
    return {
        props: {
            messages: {
                ...__webpack_require__(2390)(`./${locale}.json`)
            },
            products: _fixtures_products_json__WEBPACK_IMPORTED_MODULE_3__
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ infoAPI)
/* harmony export */ });
/* harmony import */ var _interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5633);
/* harmony import */ var _lib_httpPrivate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3033);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_httpPrivate__WEBPACK_IMPORTED_MODULE_1__, _instance__WEBPACK_IMPORTED_MODULE_2__]);
([_lib_httpPrivate__WEBPACK_IMPORTED_MODULE_1__, _instance__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class infoAPI extends _lib_httpPrivate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    getListWorks = async ()=>{
        const response = await this.instance.get(`${_interfaces_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .v}/works?per_page=100`).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
    getThumbWork = async (url)=>{
        const response = await this.instance.get(`${url}`).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
}

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,4,901,176,246], () => (__webpack_exec__(3056)));
module.exports = __webpack_exports__;

})();