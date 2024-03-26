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
/* harmony import */ var vivus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2775);
/* harmony import */ var vivus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vivus__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useContentWeb__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCollections__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useContentWeb__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCollections__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const HomeLayout = ({ products  })=>{
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_1__.useTranslations)("Index");
    const { 0: currentItems , 1: setCurrentItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(products);
    const { 0: flashSaleItems , 1: setFlashSaleItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(products);
    const { 0: postHome , 1: setPostHome  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: flashTime , 1: setFlashTime  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { data  } = (0,_hooks_useContentWeb__WEBPACK_IMPORTED_MODULE_3__/* .useContentWeb */ .$)();
    const collections = (0,_hooks_useCollections__WEBPACK_IMPORTED_MODULE_4__/* .useLastestCollections */ .u)();
    const { 0: showAnim , 1: setShowAnim  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const container = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const settings = {
        slidesToShow: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        vertical: true,
        fade: true,
        autoPlay: true,
        infinite: true,
        speed: 800,
        afterChange: ()=>{
            jquery__WEBPACK_IMPORTED_MODULE_7___default()(".innerText").addClass("start-anim");
            jquery__WEBPACK_IMPORTED_MODULE_7___default()(".innerText2").addClass("start-anim");
        },
        beforeChange: ()=>{
            jquery__WEBPACK_IMPORTED_MODULE_7___default()(".innerText").removeClass("start-anim");
            jquery__WEBPACK_IMPORTED_MODULE_7___default()(".innerText2").removeClass("start-anim");
        }
    };
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
        // TweenMax.to(".innerText", 0.5, {
        //   ease: Back.easeOut.config(1.5),
        //   opacity: 1,
        //   y: 0,
        // });
        new (vivus__WEBPACK_IMPORTED_MODULE_5___default())("hi-there", {
            type: "scenario",
            duration: 200,
            start: "autostart",
            dashGap: 150,
            forceRender: false
        });
        setTimeout(function() {
            setShowAnim(false);
        }, 3500);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "teddy_slide",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: showAnim === true ? `anim` : `d-none`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        stroke: "white",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        viewBox: "0 0 400 150",
                        enableBackground: "new 0 0 427 287.7",
                        id: "hi-there",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M150.3,30.5v8.3h3.9v5.5h-3.9v11.1h3.9V61h-7.5c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.7-0.9-0.7-1.5V44.4h-2.8 v-5.5h2.8v-8.3h5.9V30.5z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M158.6,41c0-0.6,0.2-1.1,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6h18c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.6v9.4 c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.7-1.6,0.7h-14.4v2.8H181V61h-20.1c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6L158.6,41 L158.6,41z M164.4,44.4v2.8h10.9v-2.8H164.4z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M203,58.8c0,0.6-0.2,1.1-0.7,1.6c-0.4,0.4-1,0.6-1.6,0.6h-12.2c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6 V41c0-0.6,0.2-1.1,0.6-1.6s1-0.7,1.6-0.7h12.2c0.6,0,1.1,0.2,1.6,0.7s0.7,1,0.7,1.6V30.5h5.7V61H203V58.8z M200.7,55.4 c0.6,0,1.1-0.2,1.6-0.6c0.4-0.4,0.7-1,0.7-1.6v-8.9h-11v11.1H200.7z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M230.6,58.8c0,0.6-0.2,1.1-0.7,1.6c-0.4,0.4-1,0.6-1.6,0.6h-12.2c-0.6,0-1.1-0.2-1.6-0.6 c-0.4-0.4-0.6-1-0.6-1.6V41c0-0.6,0.2-1.1,0.6-1.6s1-0.7,1.6-0.7h12.2c0.6,0,1.1,0.2,1.6,0.7s0.7,1,0.7,1.6V30.5h5.7V61h-5.7V58.8z M228.4,55.4c0.6,0,1.1-0.2,1.6-0.6c0.4-0.4,0.7-1,0.7-1.6v-8.9h-10.9v11.1H228.4z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M249.8,52.7l5.1-13.8h6.1l-10.7,29c-0.2,0.4-0.5,0.8-0.9,1.1c-0.4,0.3-0.8,0.4-1.3,0.4h-4.4v-5.5h2l1.2-3.1 L238.7,39h6L249.8,52.7z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M263.1,41c0-0.6,0.2-1.1,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6h17.9c0.6,0,1.1,0.2,1.6,0.6c0.4,0.4,0.6,1,0.6,1.6v4.7 h-5.7v-1.4h-10.9v11.1h10.9V54h5.7v4.7c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6h-17.9c-0.6,0-1.1-0.2-1.6-0.6 c-0.4-0.4-0.6-1-0.6-1.6V41z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M313.2,58.8c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6h-18c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6 V41.1c0-0.6,0.2-1.2,0.6-1.6s1-0.7,1.6-0.7h18c0.6,0,1.1,0.2,1.6,0.7c0.4,0.4,0.6,1,0.6,1.6V58.8z M307.5,44.4h-10.9v11.1h10.9 V44.4z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M335.1,58.8c0,0.6-0.2,1.1-0.7,1.6c-0.4,0.4-1,0.6-1.6,0.6h-12.2c-0.6,0-1.1-0.2-1.6-0.6 c-0.4-0.4-0.6-1-0.6-1.6V41c0-0.6,0.2-1.1,0.6-1.6s1-0.7,1.6-0.7h12.2c0.6,0,1.1,0.2,1.6,0.7s0.7,1,0.7,1.6V30.5h5.7V61h-5.7V58.8z M332.9,55.4c0.6,0,1.1-0.2,1.6-0.6c0.4-0.4,0.7-1,0.7-1.6v-8.9h-10.9v11.1H332.9z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M346.2,41c0-0.6,0.2-1.1,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6h18c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.6v9.4 c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.7-1.6,0.7h-14.4v2.8h16.6V61h-20.1c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6V41z M351.9,44.4v2.8h10.9v-2.8H351.9z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M379.6,61h-5.7V38.8h5.7V41c0-0.6,0.2-1.1,0.7-1.6c0.4-0.4,1-0.6,1.6-0.6h6.5c0.6,0,1.1,0.2,1.6,0.6 c0.4,0.4,0.6,1,0.6,1.6v4.7h-5.7v-1.4h-3c-0.6,0-1.1,0.2-1.5,0.6c-0.4,0.4-0.6,1-0.6,1.6V61H379.6z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M143.6,101.2c0-0.4,0.2-0.5,0.5-0.5h4.7c0.4,0,0.5,0.2,0.5,0.5v4.5c0,0.4-0.2,0.5-0.5,0.5h-4.7 c-0.4,0-0.5-0.2-0.5-0.5V101.2z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M154.6,86.3c0-0.6,0.2-1.1,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6h17.9c0.6,0,1.1,0.2,1.6,0.6c0.4,0.4,0.6,1,0.6,1.6 V91h-5.7v-1.4h-10.9v11.1h10.9v-1.4h5.7v4.7c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6h-17.9c-0.6,0-1.1-0.2-1.6-0.6 c-0.4-0.4-0.6-1-0.6-1.6V86.3z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M204.6,104c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6h-17.9c-0.6,0-1.1-0.2-1.6-0.6 c-0.4-0.4-0.6-1-0.6-1.6V86.3c0-0.6,0.2-1.2,0.6-1.6c0.4-0.4,1-0.7,1.6-0.7h17.9c0.6,0,1.1,0.2,1.6,0.7c0.4,0.4,0.6,1,0.6,1.6V104z M198.9,89.6H188v11.1h10.9V89.6z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M230.5,106.2h-5.7V89.6H218c-0.6,0-1.1,0.2-1.6,0.6s-0.7,1-0.7,1.6v14.4H210V84h5.7v2.2c0-0.6,0.2-1.1,0.7-1.6 c0.4-0.4,1-0.6,1.6-0.6h9.9c0.6,0,1.1,0.2,1.6,0.7c0.4,0.4,0.6,1,0.6,1.6c0-0.6,0.2-1.1,0.7-1.6c0.4-0.4,1-0.6,1.6-0.6H243 c0.6,0,1.1,0.2,1.6,0.6c0.4,0.4,0.7,1,0.7,1.6v20h-5.7V89.6h-6.8c-0.6,0-1.1,0.2-1.6,0.6c-0.4,0.4-0.6,1-0.6,1.6L230.5,106.2 L230.5,106.2z"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                className: "st0",
                                cx: "68.9",
                                cy: "68.4",
                                r: "63.2"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M60,68.4v10.1h4.7v6.7H60v13.4h4.7v6.7h-9c-0.7,0-1.4-0.3-1.9-0.8c-0.5-0.5-0.8-1.1-0.8-1.9V85.2h-3.4v-6.7H53 V68.4H60z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M70.2,99.3c0-0.4,0.3-0.6,0.7-0.6h5.7c0.4,0,0.7,0.3,0.7,0.6v5.4c0,0.4-0.3,0.6-0.7,0.6h-5.7 c-0.4,0-0.7-0.3-0.7-0.6V99.3z"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        className: "st0",
                                        d: "M83.6,81.1c0-0.8,0.3-1.4,0.8-1.9s1.2-0.8,1.9-0.8h21.8c0.8,0,1.4,0.3,1.9,0.8s0.8,1.1,0.8,1.9v5.7h-7v-1.6 H90.6v13.4h13.3V97h7v5.7c0,0.8-0.3,1.4-0.8,1.9s-1.2,0.8-1.9,0.8H86.3c-0.8,0-1.4-0.3-1.9-0.8s-0.8-1.1-0.8-1.9 C83.6,102.6,83.6,81.1,83.6,81.1z"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_6___default()), {
                    ...settings,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "warpText--wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `https://teddycoder.com/assets/img/top/coder1.jpg`,
                                    alt: "Our Shop"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "warpText",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "I'm",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "squareText",
                                                    children: "Khang Pham"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "innerText",
                                            children: "WORK AS A LITTLE "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "innerText2",
                                            children: "FRONTEND DEVELOPER"
                                        })
                                    ]
                                })
                            ]
                        }, `slide_1`),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "warpText--wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `https://teddycoder.com/assets/img/top/coder3.jpg`,
                                    alt: "Our Shop"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "warpText",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "I'm",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "squareText",
                                                    children: "Khang Pham"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "innerText",
                                            children: "DESIGN AND"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "innerText2",
                                            children: "DEVELOP WEBSITE"
                                        })
                                    ]
                                })
                            ]
                        }, `slide_1`),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "warpText--wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `https://teddycoder.com/assets/img/top/coder2.jpg`,
                                    alt: "Our Shop"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "warpText",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "I'm",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "squareText",
                                                    children: "Khang Pham"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "innerText",
                                            children: "AND NOW"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "innerText2",
                                            children: "I LIVE IN SAIGON"
                                        })
                                    ]
                                })
                            ]
                        }, `slide_1`)
                    ]
                })
            ]
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

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

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

/***/ 2775:
/***/ ((module) => {

"use strict";
module.exports = require("vivus");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,4,901,176], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();