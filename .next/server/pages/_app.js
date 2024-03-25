"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialContextValues */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialContextValues = {
};
const WishlistContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialContextValues);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishlistContext);


/***/ }),

/***/ 9723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ProvideWishlist)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WishlistContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8507);
/* harmony import */ var _services_customerProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3207);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_customerProfile__WEBPACK_IMPORTED_MODULE_3__]);
_services_customerProfile__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// import { IProductStore } from "@/interfaces/customerProduct-service";
const ProvideWishlist = ({ children  })=>{
    const value = useProvideWishlist();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WishlistContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
        value: value,
        children: children
    });
};
// export const useWishlist = () => useContext(WishlistContext);
const useProvideWishlist = ()=>{
    const serviceprofileAPI = new _services_customerProfile__WEBPACK_IMPORTED_MODULE_3__/* .profileAPI */ .F();
    // const initPersistState: wishlistType = { wishlist: [] };
    // const [state, dispatch] = useReducer(wishlistReducer, initPersistState);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if ((0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("token") && (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("user")) {
            serviceprofileAPI.getCustomerWishList().then((res)=>{
                if (res.error) {
                    console.log("logout");
                    return false;
                }
                const wishlist = res.data?.data;
                const wistlistUuid = wishlist.map((wish)=>wish.product.uuid);
                localStorage.setItem("wishlist", JSON.stringify(wistlistUuid));
            });
        }
    }, []);
    const addToWishlist = (item)=>{
        console.log(item);
    };
    const deleteWishlistItem = (item)=>{
        console.log(item);
    };
    const clearWishlist = ()=>{
        console.log("clear wishlist");
    };
    const value = {
        addToWishlist,
        deleteWishlistItem,
        clearWishlist
    };
    return value;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4431);
/* harmony import */ var _context_cart_CartProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8386);
/* harmony import */ var _context_wishlist_WishlistProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9723);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _context_wishlist_WishlistProvider__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__]);
([_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _context_wishlist_WishlistProvider__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().start());
next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
const MyApp = ({ Component , pageProps  })=>{
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_intl__WEBPACK_IMPORTED_MODULE_3__.NextIntlProvider, {
        messages: pageProps?.messages,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* .ProvideAuth */ .Y, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_wishlist_WishlistProvider__WEBPACK_IMPORTED_MODULE_6__/* .ProvideWishlist */ .D, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_cart_CartProvider__WEBPACK_IMPORTED_MODULE_5__/* .ProvideCart */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.Hydrate, {
                            state: pageProps.dehydratedState,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 503:
/***/ ((module) => {

module.exports = require("next-intl");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 2194:
/***/ ((module) => {

module.exports = import("query-string");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [705], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();