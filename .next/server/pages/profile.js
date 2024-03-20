"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 452:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8466);
/* harmony import */ var _components_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5079);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_customerProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3207);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1185);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9817);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_customerProfile__WEBPACK_IMPORTED_MODULE_5__, _headlessui_react__WEBPACK_IMPORTED_MODULE_6__, _components_Card_Card__WEBPACK_IMPORTED_MODULE_9__]);
([_services_customerProfile__WEBPACK_IMPORTED_MODULE_5__, _headlessui_react__WEBPACK_IMPORTED_MODULE_6__, _components_Card_Card__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable jsx-a11y/alt-text */ 









const ProfileLayout = ()=>{
    // const router = useRouter();
    const serviceprofileAPI = new _services_customerProfile__WEBPACK_IMPORTED_MODULE_5__/* .profileAPI */ .F();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_3__.useTranslations)("Shopping_Cart");
    const { 0: profileCustomer , 1: setProfileCustomer  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: ordesCustomer , 1: setOrdesCustomer  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: wishListCustomer , 1: setWishListCustomer  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: firstName , 1: setFirstName  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: lastName , 1: setLastName  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: fullName , 1: setFullName  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
    };
    console.log(fullName);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        serviceprofileAPI.getCustomerProfile().then((res)=>{
            setProfileCustomer(res.data.membershipInfo);
            setFullName(res.data?.fullName);
            setFirstName(res.data?.firstName);
            setLastName(res.data?.lastName);
            setEmail(res.data?.email);
            setPhone(res.data?.phone);
        });
        serviceprofileAPI.getCustomerOrders().then((res)=>{
            setOrdesCustomer(res.data.data);
        });
        serviceprofileAPI.getCustomerWishList().then((res)=>{
            setWishListCustomer(res.data.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "lg:px-[40px] px-[20px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab.Group, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab.List, {
                        className: "border-b-[1px] border-gray100 flex flex-wrap md:mt-0 mt-[60px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab, {
                                as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                                children: ({ selected  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase", {
                                            "border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium": selected,
                                            "text-[#626262] font-PlusJakartaSansRegular": !selected
                                        }),
                                        children: "Profile"
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab, {
                                as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                                children: ({ selected  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase", {
                                            "border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium": selected,
                                            "text-[#626262] font-PlusJakartaSansRegular": !selected
                                        }),
                                        children: "Orders"
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab, {
                                as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                                children: ({ selected  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase", {
                                            "border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium": selected,
                                            "text-[#626262] font-PlusJakartaSansRegular": !selected
                                        }),
                                        children: "Wishlist"
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab, {
                                as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                                children: ({ selected  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase", {
                                            "border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium": selected,
                                            "text-[#626262] font-PlusJakartaSansRegular": !selected
                                        }),
                                        children: "Membership"
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab.Panels, {
                        className: "pt-24px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab.Panel, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    className: "mt-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-box flex-box--between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "block w-48",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "name",
                                                            className: "text-[16px] text-[#333]",
                                                            children: "firstName"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                            type: "name",
                                                            value: firstName,
                                                            placeholder: `${t("name")}`,
                                                            name: "name",
                                                            required: true,
                                                            extraClass: "w-full",
                                                            border: "border-[1px] mt-[9px] border-[#66666659]",
                                                            onChange: (e)=>{
                                                                setFirstName(e.target.value);
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "block w-48",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "name",
                                                            className: "text-[16px] text-[#333]",
                                                            children: "lastName"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                            type: "name",
                                                            value: lastName,
                                                            placeholder: `${t("name")}`,
                                                            name: "name",
                                                            required: true,
                                                            extraClass: "w-full",
                                                            border: "border-[1px] mt-[9px] border-[#66666659]",
                                                            onChange: (e)=>{
                                                                setLastName(e.target.value);
                                                            }
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-box flex-box--between mt--40",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "block w-48",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "name",
                                                            className: "text-[16px] text-[#333]",
                                                            children: "Email"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                            type: "name",
                                                            value: email,
                                                            placeholder: `${t("name")}`,
                                                            name: "name",
                                                            extraClass: "w-full",
                                                            border: "border-[1px] mt-[9px] border-[#66666659]"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "block w-48",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "name",
                                                            className: "text-[16px] text-[#333]",
                                                            children: "Phone"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                            type: "name",
                                                            value: phone,
                                                            disabled: true,
                                                            placeholder: `${t("name")}`,
                                                            name: "name",
                                                            extraClass: "w-full",
                                                            border: "border-[1px] mt-[9px] border-[#66666659]"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            type: "submit",
                                            // onClick={() => handleCreate()}
                                            value: "Update",
                                            extraClass: "mt-24px text-[14px] bg-[#000] lg:py-[14px] py-[10px] text-center text-[16px] capitalize flex items-center justify-center text-[#fff]"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab.Panel, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " dataTables_wrapper form-inline dt-bootstrap wrapper_sroll overflow-box",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-3 font-weight-bold table-product bordered flex-box",
                                            style: {
                                                overflow: "visible"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "table-product-column bg-head w-20",
                                                    children: "OrderID"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "table-product-column bg-head w-20",
                                                    children: "Created At"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "table-product-column bg-head w-15",
                                                    children: "Total Bill"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "table-product-column bg-head w-1",
                                                    children: "Payment"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "table-product-column bg-head w-15",
                                                    children: "Status"
                                                })
                                            ]
                                        }),
                                        ordesCustomer?.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "table-product table-product-item flex-box",
                                                onClick: ()=>window.location.href = `/order/${item.uuid}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "table-product-column w-20",
                                                        children: item.code
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "table-product-column w-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            format: "DD/MM/YYYY",
                                                            children: item.createdAt
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "table-product-column w-15",
                                                        children: [
                                                            Number(item.totalPrice).toLocaleString(),
                                                            " Đ"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "table-product-column w-1",
                                                        children: item.paymentMethod == 0 ? `CASHING` : item.paymentMethod === 1 ? `CARD` : item.paymentMethod === 2 ? `BANKING` : item.paymentMethod === 3 ? `MOMO` : item.paymentMethod === 4 ? `VNPAY` : item.paymentMethod === 5 ? `COD` : ``
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `table-product-column w-15
                                        ${item.status == 0 ? `text--yellow` : item.status === 1 ? `text--yellow` : item.status === 2 ? `text--green` : item.status === 3 ? `text--red` : ``}
                                        `,
                                                        children: item.status == 0 ? `PENDING` : item.status === 1 ? `SHIPING` : item.status === 2 ? `DONE` : item.status === 3 ? `CANCELED` : ``
                                                    })
                                                ]
                                            }, `user_${idx}`))
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-1 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-6",
                                    children: wishListCustomer?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            item: item
                                        }, `card-item-` + index))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Tab.Panel, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-24px bg-[#F9FAFB]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "totalSpending : ",
                                                profileCustomer?.totalSpending
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "totalPoints : ",
                                                profileCustomer?.totalPoints
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "totalOrders : ",
                                                profileCustomer?.totalOrders
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "ranking : ",
                                                profileCustomer?.ranking
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2254:
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
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6648);
/* harmony import */ var _fixtures_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5038);
/* harmony import */ var _layouts_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(452);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3292);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Profile__WEBPACK_IMPORTED_MODULE_5__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__]);
([_layouts_Profile__WEBPACK_IMPORTED_MODULE_5__, _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Carts = ()=>{
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_7__.useTranslations)("Category");
    const breadcrumbs = [
        {
            title: t("home"),
            url: _constants_routes__WEBPACK_IMPORTED_MODULE_8__/* .HOME */ .Sd
        },
        {
            title: "profile"
        }, 
    ];
    // useEffect(() => {
    // }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__/* .MainLayout */ .Z, {
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h, {
            title: _constants_config__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.title */ .X.title,
            description: _constants_config__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.description */ .X.description
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                breadcrumbs: breadcrumbs,
                border: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Profile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ locale  })=>{
    return {
        props: {
            messages: {
                ...__webpack_require__(2390)(`./${locale}.json`)
            },
            products: _fixtures_products_json__WEBPACK_IMPORTED_MODULE_4__
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carts);

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

/***/ 661:
/***/ ((module) => {

module.exports = require("react-moment");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,705,963,901,176,4,582], () => (__webpack_exec__(2254)));
module.exports = __webpack_exports__;

})();