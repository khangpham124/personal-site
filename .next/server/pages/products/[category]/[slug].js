"use strict";
(() => {
var exports = {};
exports.id = 911;
exports.ids = [911];
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

/***/ 1362:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9186);
/* harmony import */ var _components_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5079);
/* harmony import */ var _context_cart_CartProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8386);
/* harmony import */ var _Util_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4031);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SliderThumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5445);
/* harmony import */ var _hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3132);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9817);
/* harmony import */ var _services_customerArticles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8892);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, _hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_9__, _components_Card_Card__WEBPACK_IMPORTED_MODULE_10__, _services_customerArticles__WEBPACK_IMPORTED_MODULE_11__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, _hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_9__, _components_Card_Card__WEBPACK_IMPORTED_MODULE_10__, _services_customerArticles__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable jsx-a11y/alt-text */ 






// import { useTranslations } from 'next-intl';

// import SizeTutorialModal from './components/SizeTutorialModal';








// import product from 'next-seo/lib/jsonld/product';
// type Props = {
//   breadcrumbs: Breadcrumb[];
//   // product: IProductsDetail;
//   // products: IProductStore[];
// };
const ProductDetailLayout = ()=>{
    const { addItem , addOne  } = (0,_context_cart_CartProvider__WEBPACK_IMPORTED_MODULE_3__/* .useCart */ .j)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const slugName = router.query.slug;
    const sevicesPostAPI = new _services_customerArticles__WEBPACK_IMPORTED_MODULE_11__/* .postAPI */ .l();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_12__.useTranslations)("Category");
    const { data  } = (0,_hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_9__/* .useCustomerProductsDetail */ .xn)(String(slugName));
    const styleCode = data?.product?.style?.code;
    const sameStyleItem = (0,_hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_9__/* .useProductsSameStyle */ .d$)(String(styleCode));
    const arrraySameStyleArr = sameStyleItem.data?.data;
    const arrColor = arrraySameStyleArr?.filter((item)=>item.totalAvailableItems > 0).map((role)=>role.product.color);
    const arrSize = arrraySameStyleArr?.filter((item)=>item.totalAvailableItems > 0).map((role)=>role.product.size);
    const { 0: currentQty , 1: setCurrentQty  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    const { 0: openSizeModal , 1: setOpenSizeModal  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: skuSelect , 1: setSkuSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: colorSelect , 1: setColorSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: sizeSelect , 1: setSizeSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: totalAvailableItems , 1: setTotalAvailableItems  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: itemChoseByCustom , 1: setItemChoseByCustom  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const { 0: postProducts , 1: setPostProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    let arrColorReduce = arrColor?.filter(function(item, pos) {
        return arrColor.indexOf(item) == pos;
    });
    let arrSizeReduce = arrSize?.filter(function(item, pos) {
        return arrSize.indexOf(item) == pos;
    });
    const getItemtoAddCart = (sku)=>{
        const findeItem = arrraySameStyleArr?.filter((item)=>item.product.skuCode === sku);
        setItemChoseByCustom(findeItem);
    };
    const checkAvailableItem = (sku)=>{
        const findeItem = arrraySameStyleArr?.filter((item)=>item.product.skuCode === sku);
        setTotalAvailableItems(findeItem[0]["totalAvailableItems"]);
    };
    const thisItem = {
        name: skuSelect && skuSelect.split("-").length === 3 ? String(data?.product?.name) : String(data?.product?.name),
        price: Number(data?.product?.price),
        productUuid: itemChoseByCustom.length > 0 ? itemChoseByCustom[0]["product"]["uuid"] : String(data?.product?.uuid),
        mainImg: String(data?.product?.mainImage),
        skuCode: itemChoseByCustom.length > 0 ? itemChoseByCustom[0]["product"]["skuCode"] : String(data?.product?.skuCode),
        totalAvailableItems: data?.totalAvailableItems,
        priceAfterDiscount: Number(data?.product?.priceAfterDiscount)
    };
    const currentItem = {
        ...thisItem,
        quantity: currentQty
    };
    const breadcrumbs = [
        {
            title: t("home"),
            url: _constants_routes__WEBPACK_IMPORTED_MODULE_14__/* .HOME */ .Sd
        },
        {
            title: t("products"),
            url: _constants_routes__WEBPACK_IMPORTED_MODULE_14__/* .PRODUCTS */ .bQ
        },
        {
            title: data?.product?.category?.name,
            url: `test`
        },
        {
            title: data?.product?.name
        }, 
    ];
    const resetState = ()=>{
        setColorSelect("");
        setSkuSelect("");
        setSizeSelect("");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        sevicesPostAPI.getPostbySlug("chinh-sach-doi-tra-san-pham").then((res)=>{
            setPostProducts(res.data.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lg:px-[40px] px-[20px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " gap-x-[32px] lg:flex flex-col md:flex-row detail-wrapper",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "imgSection w-full lg:w-2/3 h-full md:flex relative",
                            children: [
                                data?.product?.promotions?.map((promo, idx)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "uppercase top-2 py-4px px-8px left-2 bg-[#F09696] text-[16px] text-white w-[53px] h-[27px] flex items-center justify-center absolute icon-percent-sale",
                                        children: promo.discountUnit === 0 ? `${promo.discountValue}%` : `${promo?.discountValue} Đ`
                                    }, `dis_${idx}`);
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SliderThumbs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    images: data?.product?.images
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "infoSection w-full lg:w-1/3 h-auto flex flex-col lg:mt-0 mt-[20px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    breadcrumbs: breadcrumbs,
                                    border: false
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "md:text-[32px] text-[26px] text-[#333] font-PlusJakartaSansSemiBold",
                                    children: data?.product?.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-[12px] text-[#626262] mb-16px mt-[4px]",
                                    children: [
                                        " sku: ",
                                        data?.product?.skuCode
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-gray400",
                                    children: [
                                        Number(data?.product?.priceAfterDiscount) < Number(data?.product?.price) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "md:text-[24px] text-[18px] text-[#333] font-PlusJakartaSansMedium",
                                                    children: (0,_Util_helper__WEBPACK_IMPORTED_MODULE_4__/* .formatPriceVND */ .SF)(data?.product?.priceAfterDiscount)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[#626262] md:text-[24px] text-[18px] ml-16px line-through",
                                                    children: (0,_Util_helper__WEBPACK_IMPORTED_MODULE_4__/* .formatPriceVND */ .SF)(data?.product?.price)
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "md:text-[24px] text-[18px] text-[#333] font-PlusJakartaSansMedium",
                                                children: (0,_Util_helper__WEBPACK_IMPORTED_MODULE_4__/* .formatPriceVND */ .SF)(data?.product?.price)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-3",
                                            children: [
                                                "Sản phẩm n\xe0y c\xf2n ",
                                                totalAvailableItems
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "md:my-[25px] my-[10px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "text-[16px] text-[#1F2937] uppercase font-PlusJakartaSansSemiBold mb-16px",
                                            children: "M\xe0u sắc"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center",
                                            children: arrColorReduce?.map((colorItem, i)=>{
                                                const colorCircle = _hooks_useCustomerProducts__WEBPACK_IMPORTED_MODULE_9__/* .colorOptions.filter */ .uY.filter((item)=>item.value === colorItem).map((role)=>role.code);
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(`rounded-[50%] cursor-pointer w-[32px] h-[32px] mr-10px border-normal ${colorSelect === colorItem ? `border-active` : ``}`),
                                                        style: {
                                                            backgroundColor: `#${colorCircle[0]}`
                                                        },
                                                        onClick: ()=>{
                                                            setColorSelect(colorItem);
                                                            setSkuSelect(`${data?.product?.style?.code}-${colorItem}-${sizeSelect}`);
                                                            getItemtoAddCart(`${data?.product?.style?.code}-${colorItem}-${sizeSelect}`);
                                                            if (sizeSelect !== "" && colorItem !== "") {
                                                                checkAvailableItem(`${data?.product?.style?.code}-${sizeSelect}-${colorItem}`);
                                                            }
                                                        }
                                                    })
                                                }, `colorItem-${i}`);
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between items-center mb-16px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-[16px] text-[#1F2937] uppercase font-PlusJakartaSansSemiBold ",
                                                    children: "SIZE"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[14px] text-[#626262] underline cursor-pointer",
                                                    onClick: ()=>setOpenSizeModal(!openSizeModal),
                                                    children: "Hướng dẫn t\xednh size"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center",
                                            children: arrSizeReduce?.map((sizeItem, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(`flex justify-center text-[#333] text-[14px] items-center cursor-pointer w-[32px] h-[32px] p-[4px] mr-10px hover:bg-gray100 border-[1px] border-[#949494] bg-[#FBFBFB]
                        ${sizeSelect === sizeItem ? `border-active` : ``}
                        `),
                                                        onClick: ()=>{
                                                            setSizeSelect(sizeItem);
                                                            setSkuSelect(`${data?.product?.style?.code}-${sizeItem}-${colorSelect}`);
                                                            getItemtoAddCart(`${data?.product?.style?.code}-${sizeItem}-${colorSelect}`);
                                                            if (sizeItem !== "" && colorSelect !== "") {
                                                                checkAvailableItem(`${data?.product?.style?.code}-${sizeItem}-${colorSelect}`);
                                                            }
                                                        },
                                                        children: sizeItem
                                                    })
                                                }, `colorItem-${i}`))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "addToCart flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-4 sm:space-y-0 mt-20px btn-change-qty w-40",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "plusOrMinus w-fit h-[32px] flex justify-center border-default",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    setCurrentQty((prevState)=>prevState - 1);
                                                },
                                                className: `${currentQty === 1 && "pointer-events-none"} text-[#333] bg-[#FBFBFB] text-[16px] h-full w-[40px] flex justify-center items-center cursor-pointer hover:bg-gray100 gty-minus`,
                                                children: "-"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-full disabled bg-[#FBFBFB] text-[#333] text-[16px] w-[70px] flex justify-center items-center pointer-events-none qty-middle",
                                                children: currentQty
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    if (currentQty < Number(totalAvailableItems)) {
                                                        setCurrentQty((prevState)=>prevState + 1);
                                                    } else {
                                                        alert(`Kho chỉ còn ${totalAvailableItems} sản phẩm`);
                                                    }
                                                },
                                                className: `h-full bg-[#FBFBFB] w-[40px] flex justify-center items-center cursor-pointer hover:bg-gray100 text-[#333] text-[16px] gty-plus
                  `,
                                                children: "+"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "md:flex block h-12 w-full md:mt-[24px] mt-[0px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            value: "Y\xeau th\xedch",
                                            extraClass: `w-[208px] md:mt-0 mt-[20px] h-[48px] text-center whitespace-nowrap uppercase text-[#000] bg-transparent hover:text-[#ffffff] hover:bg-[#000] duration-300`,
                                            onClick: ()=>{
                                            // addItem!(currentItem);
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            value: "Mua ngay",
                                            onClick: ()=>{
                                                if (sizeSelect !== "" && colorSelect !== "") {
                                                    addItem(currentItem);
                                                    resetState();
                                                } else {
                                                    alert("Bạn chưa chọn k\xedch thước hoặc m\xe0u");
                                                }
                                            },
                                            extraClass: `w-[208px] md:mt-0 mt-[20px] h-[48px] text-center whitespace-nowrap uppercase hover:text-[#000] hover:bg-transparent text-[#ffffff] bg-[#000] duration-300 md:ml-16px ml-0`
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:my-[60px] md:my-[30px] my-[90px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Group, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.List, {
                                className: "border-b-[1px] border-gray100 flex flex-wrap md:mt-0 mt-[60px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                        as: react__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                                        children: ({ selected  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase", {
                                                    "border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium": selected,
                                                    "text-[#626262] font-PlusJakartaSansRegular": !selected
                                                }),
                                                children: "Chi tiết sản phẩm"
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                        as: react__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                                        children: ({ selected  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase", {
                                                    "border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium": selected,
                                                    "text-[#626262] font-PlusJakartaSansRegular": !selected
                                                }),
                                                children: "Th\xf4ng tin bảo quản"
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                        as: react__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                                        children: ({ selected  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("mr-32px text-[16px] cursor-pointer flex items-center justify-center h-[46px] py-16px uppercase", {
                                                    "border-b-[2px] text-[#333] border-[#000] font-PlusJakartaSansMedium": selected,
                                                    "text-[#626262] font-PlusJakartaSansRegular": !selected
                                                }),
                                                children: "Giao h\xe0ng v\xe0 đổi trả"
                                            })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panels, {
                                className: "pt-24px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: String(data?.product?.descriptionVi)
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                        children: " th\xf4ng tin bảo quản"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                        children: postProducts?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: String(item?.descriptionVi)
                                                }
                                            }, `post${index}`))
                                    })
                                ]
                            })
                        ]
                    })
                }),
                data?.product?.relatedItems.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:mb-[60px] md:mb-[30px] mb-[20px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "md:text-[24px] text-[20px] text-left text-[#333] mb-32px font-PlusJakartaSansMedium uppercase",
                            children: "C\xf3 thể Bạn cũng th\xedch"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-6",
                            children: data?.product?.relatedItems?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    item: item
                                }, `card-item-` + index))
                        })
                    ]
                }) : null
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);


// import styles from '../Detail.module.css';



const SliderThumbs = (data)=>{
    const { 0: nav1 , 1: setNav1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: nav2 , 1: setNav2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const sliders = data.images;
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   fade: true,
    //   speed: 800,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-100 flex-box",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-20",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                        asNavFor: nav1,
                        ref: (slider2)=>setNav2(slider2),
                        slidesToShow: 3,
                        swipeToSlide: true,
                        focusOnSelect: true,
                        arrows: false,
                        vertical: true,
                        children: sliders?.map((slider, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${slider.imageUrl}`,
                                    alt: "Image slide home",
                                    className: "w-100"
                                })
                            }, `slide_${idx}`))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-80",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                        asNavFor: nav2,
                        ref: (slider1)=>setNav1(slider1),
                        children: sliders?.map((slider, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${slider.imageUrl}`,
                                    alt: "Image slide home",
                                    className: "w-100"
                                })
                            }, `slide_${idx}`))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderThumbs);


/***/ }),

/***/ 1637:
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
/* harmony import */ var _fixtures_productCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9023);
/* harmony import */ var _fixtures_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5038);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3292);
/* harmony import */ var _layouts_Product_Detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1362);
/* harmony import */ var _Util_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _layouts_Product_Detail__WEBPACK_IMPORTED_MODULE_6__]);
([_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _layouts_Product_Detail__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { HOME, PRODUCTS } from '@/constants/routes';





const ProductDetailPage = ({ product  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* .MainLayout */ .Z, {
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_1__/* .Meta */ .h, {
            title: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.title */ .X.title,
            description: _constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.description */ .X.description
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Product_Detail__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
    });
};
const getServerSideProps = async ({ params , locale  })=>{
    const checkSlugExist = (0,_Util_helper__WEBPACK_IMPORTED_MODULE_7__/* .checkExists */ .rx)(_fixtures_productCategories__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, `/products/${params.category}/`, params.slug);
    console.log(checkSlugExist);
    // if (!checkSlugExist) {
    //   return {
    //     notFound: true,
    //   };
    // }
    // console.log('params', params)
    // const product = await
    // Pass data to the page via props
    return {
        props: {
            product: _fixtures_products_json__WEBPACK_IMPORTED_MODULE_4__[0],
            products: _fixtures_products_json__WEBPACK_IMPORTED_MODULE_4__,
            category: params.category,
            slug: params.slug,
            messages: {
                ...__webpack_require__(2390)(`./${locale}.json`)
            }
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailPage);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,705,963,901,176,4,582,892,132], () => (__webpack_exec__(1637)));
module.exports = __webpack_exports__;

})();