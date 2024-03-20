"use strict";
(() => {
var exports = {};
exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 7297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/collection-menu.49e25111.png","height":974,"width":2316,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/AMrAvNvW1KuVh5ZtVrWmoMzEv8q9tsCvpQCzpJzTy8ahiHqEYE2ScGLCsqnGuLDFtasAqZiO0ca/nYR2U0E5Vzktr5aJwbCmw7Oq4CYs0R82WzsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9817);
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var _components_Filters_Sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4321);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _public_assets_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4975);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_collectionsServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5909);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__, _components_Filters__WEBPACK_IMPORTED_MODULE_2__, _components_Filters_Sort__WEBPACK_IMPORTED_MODULE_3__, _services_collectionsServices__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__, _components_Filters__WEBPACK_IMPORTED_MODULE_2__, _components_Filters_Sort__WEBPACK_IMPORTED_MODULE_3__, _services_collectionsServices__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SortOptions = [
    {
        label: "mới nhất",
        value: "createdAt.desc"
    },
    {
        label: "cũ nhất",
        value: "createdAt.asc"
    },
    {
        label: "Gi\xe1 tăng dần",
        value: "prices.desc"
    },
    {
        label: "Gi\xe1 giảm dần",
        value: "prices.asc"
    }, 
];
// IProductStore
function DetailCollectionLayout() {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_7__.useTranslations)("Filters");
    const size = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const uuid = (0,cookies_next__WEBPACK_IMPORTED_MODULE_10__.getCookie)("uuid") || null;
    const sevicescollectionAPI = new _services_collectionsServices__WEBPACK_IMPORTED_MODULE_9__/* .collectionAPI */ .zU();
    const { 0: isFilter , 1: setIsFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { 0: listItems , 1: setListItems  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const { 0: queries , 1: setQueries  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
        prices: [
            0,
            4000000
        ],
        sort: SortOptions[0]
    });
    // const filterByPrice = (queries: any) => {
    //   const fromPrice = queries.prices[0];
    //   const toPrice = queries.prices[1];
    //   const categoryUuids = queries.categoryUuids?.toString() || '' ;
    //   const colors = queries.colors?.toString() || '' ;
    //   sevicesitemAPI.getProductInFilter(fromPrice, toPrice, categoryUuids, colors).then((res: any) => {
    //     setListItems(res.data.data)
    //   })
    // };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
    // filterByPrice(queries);
    }, [
        queries
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        // sevicesitemAPI.getProductInStore().then((res: any) => {
        //   setListItems(res.data.data)
        // });
        sevicescollectionAPI.getDetailCollection(String(uuid)).then((res)=>{
            setListItems(res.data.products);
        });
        if (size.width > 1024) {
            setIsFilter(true);
        } else {
            setIsFilter(false);
        }
    }, [
        size.width
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full flex flex-col justify-center items-center lg:mb-[60px] mb-[20px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("w-full block gap-x-4 lg:gap-x-8 md:px-[40px] px-[20px] mt-[0px]", {
                    "md:flex": isFilter,
                    "md:block": !isFilter
                }),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
                            "md:w-1/4 relative": isFilter,
                            "h-fit absolute": !isFilter,
                            "mt-24px": !isFilter && size.width < 768
                        }),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("flex mb-16px items-center cursor-pointer"),
                                onClick: ()=>setIsFilter(!isFilter),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_assets_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "text-[16px] text-[#333] font-PlusJakartaSansSemiBold uppercase ml-8px",
                                        children: t("title")
                                    })
                                ]
                            }),
                            isFilter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Filters__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                queries: queries,
                                setQueries: setQueries
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("w-full md:mt-0 mt-[24px]", {
                            "md:w-3/4": isFilter
                        }),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full flex justify-end mb-16px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Filters_Sort__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    id: "sort_by",
                                    className: "flex-1",
                                    label: "Sắp xếp theo:",
                                    checkmark: true,
                                    options: SortOptions,
                                    selected: queries.sort,
                                    onChange: (selectedOption)=>{
                                        setQueries((prev)=>({
                                                ...prev,
                                                sort: selectedOption
                                            }));
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("w-full grid md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-6 mb-10", {
                                    "lg:grid-cols-3": isFilter
                                }, {
                                    "lg:grid-cols-4": !isFilter
                                }),
                                children: listItems?.map((item, index)=>{
                                    const products = {
                                        product: item
                                    };
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        item: products
                                    }, `card-item-` + index);
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailCollectionLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2721:
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
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6648);
/* harmony import */ var _fixtures_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5038);
/* harmony import */ var _layouts_Collection_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(498);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3292);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_products_collection_menu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7297);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9186);
/* harmony import */ var _fixtures_collectionCategories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6633);
/* harmony import */ var _Util_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4031);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Collection_detail__WEBPACK_IMPORTED_MODULE_4__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__]);
([_layouts_Collection_detail__WEBPACK_IMPORTED_MODULE_4__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const CollectionCategoryPage = ({ slug  })=>{
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_6__.useTranslations)("Category");
    const breadcrumbs = [
        {
            title: t("home"),
            url: _constants_routes__WEBPACK_IMPORTED_MODULE_13__/* .HOME */ .Sd
        },
        {
            title: t("collection"),
            url: _constants_routes__WEBPACK_IMPORTED_MODULE_13__/* .COLLECTIONS */ .Ul
        },
        {
            title: slug
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* .MainLayout */ .Z, {
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_1__/* .Meta */ .h, {
            title: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.title */ .X.title,
            description: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.description */ .X.description
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative w-full flex justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                        src: _public_assets_products_collection_menu_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                        alt: "Our Shop",
                        className: "w-full",
                        loading: "lazy"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "absolute lg:text-[96px] md:text-[60px] text-[40px] text-white leading-[120px] font-italianno",
                        children: slug
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                breadcrumbs: breadcrumbs || [],
                border: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Collection_detail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ params , locale  })=>{
    const checkSlugExist = (0,_Util_helper__WEBPACK_IMPORTED_MODULE_11__/* .checkExists */ .rx)(_fixtures_collectionCategories__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, "/collections/", params.slug);
    console.log(checkSlugExist);
    // if (!checkSlugExist) {
    //   return {
    //     notFound: true,
    //   };
    // }
    return {
        props: {
            messages: {
                ...__webpack_require__(2390)(`./${locale}.json`)
            },
            slug: params.slug,
            products: _fixtures_products_json__WEBPACK_IMPORTED_MODULE_3__
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionCategoryPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,705,963,901,176,4,582,202,148,633], () => (__webpack_exec__(2721)));
module.exports = __webpack_exports__;

})();