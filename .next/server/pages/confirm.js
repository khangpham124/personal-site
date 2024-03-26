(() => {
var exports = {};
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 7566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Input/Input.tsx
var Input = __webpack_require__(8466);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Buttons/Button.tsx
var Button = __webpack_require__(5079);
;// CONCATENATED MODULE: ./public/assets/icons/CheckSuccessIcon.tsx

const CheckSuccessIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "32",
                fill: "#06C167"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M44.8002 22.4004L27.2002 40.0004L19.2002 32.0004",
                stroke: "white",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })
        ]
    });
/* harmony default export */ const icons_CheckSuccessIcon = (CheckSuccessIcon);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/Contact/index.tsx
/* eslint-disable jsx-a11y/alt-text */ 

// import { useTranslations } from 'next-intl';




// import { useRouter } from 'next/router';
const ConfirmmLayout = ()=>{
    // const router = useRouter();
    // const t = useTranslations('Shopping_Cart');
    (0,external_react_.useEffect)(()=>{
    // const cartLocal = localStorage.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
    // setCartCustomer(cartLocal);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "lg:px-[40px] px-[20px]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center flex-col justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons_CheckSuccessIcon, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-center lg:text-[40px] text-[24px] text-[#030303] lg:leading-[54.48px] leading-[30px] font-PlusJakartaSansSemiBold mt-24px mb-16px",
                            children: "ĐƠN H\xc0NG Đ\xc3 ĐƯỢC ĐẶT TH\xc0NH C\xd4NG!"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-[#333333] lg:text-[20px] text-[16px] leading-[30px] text-center",
                            children: [
                                "M\xe3 đơn h\xe0ng của bạn l\xe0 ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-PlusJakartaSansMedium",
                                    children: "1234567"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-[#333333] lg:text-[20px] text-[16px] leading-[30px] text-center",
                            children: [
                                "Ju Clothing đ\xe3 gửi mail x\xe1c nhận đơn h\xe0ng đến bạn qua email",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-PlusJakartaSansMedium",
                                    children: "info@gmail.com"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:p-[80px] p-[30px] bg-[#F9FAFB] w-fit mx-auto lg:my-48px mt-[35px] lg:mb-[60px] mb-[30px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "lg:text-[32px] text-[24px] text-center text-[#000] font-PlusJakartaSansMedium mb-16px",
                            children: "TẠO T\xc0I KHOẢN ĐỂ T\xcdCH ĐIỂM"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "lg:text-[20px] text-[16px] text-center text-[#333]",
                            children: [
                                "Bạn đ\xe3 mua h\xe0ng với SDT ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-PlusJakartaSansMedium",
                                    children: "1234567"
                                }),
                                " v\xe0 Email",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-PlusJakartaSansMedium",
                                    children: " info@gmail.com"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "lg:text-[20px] text-[16px] text-center text-[#333]",
                            children: "H\xe3y nhập mật khẩu để tạo t\xe0i khoản v\xe0 nhận th\xeam nhiều ưu đ\xe3i độc quyền."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "lg:mt-32px mt-[25px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "block",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            htmlFor: "password",
                                            className: "text-[16px] text-[#333]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-[#EE1D52] text-[16px]",
                                                    children: "*"
                                                }),
                                                " Tạo mật khẩu"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                            type: "password",
                                            name: "password",
                                            required: true,
                                            extraClass: "w-full",
                                            border: "border-[1px] mt-[9px] border-[#66666659]"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "block my-16px",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            htmlFor: "re-password",
                                            className: "text-[16px] text-[#333]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-[#EE1D52] text-[16px]",
                                                    children: "*"
                                                }),
                                                " X\xe1c nhận lại mật khẩu"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                            type: "re-password",
                                            name: "re-password",
                                            required: true,
                                            extraClass: "w-full",
                                            border: "border-[1px] mt-[9px] border-[#66666659]"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center mb-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "checkbox_policy flex items-start checkbox-card",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                className: "checkbox__input"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "checkbox__inner"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "ml-8px text-[14px] text-[#333] leading-[19.07px]",
                                                children: [
                                                    "T\xf4i đồng \xfd với",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "underline",
                                                            children: "c\xe1c điều khoản"
                                                        })
                                                    }),
                                                    " ",
                                                    "v\xe0",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "underline",
                                                            children: "ch\xednh s\xe1ch bảo mật"
                                                        })
                                                    }),
                                                    " ",
                                                    "của Ju Clothing"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    type: "submit",
                                    // onClick={() => setIsPayment(false)}
                                    value: "Tạo t\xe0i khoản",
                                    extraClass: "w-full mt-16px text-[14px] bg-[#000] lg:py-[14px] py-[10px] text-center text-[16px] capitalize flex items-center justify-center text-[#fff]"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Contact = (ConfirmmLayout);


/***/ }),

/***/ 8227:
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
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6828);
/* harmony import */ var _layouts_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7566);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7209);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__]);
_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const confirmOrder = ()=>{
    // const t = useTranslations('Others');
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__/* .MainLayout */ .Z, {
            meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_5__/* .Meta */ .h, {
                title: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.title */ .X.title,
                description: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.description */ .X.description
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Contact__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        })
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            messages: (await __webpack_require__(3911)(`./${locale}.json`)).default
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (confirmOrder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": [
		5176,
		176
	],
	"./vi.json": [
		4901,
		901
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3911;
module.exports = webpackAsyncContext;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,4], () => (__webpack_exec__(8227)));
module.exports = __webpack_exports__;

})();