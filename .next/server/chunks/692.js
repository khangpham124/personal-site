"use strict";
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 3692:
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
/* harmony import */ var _services_customerItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__, _components_Filters__WEBPACK_IMPORTED_MODULE_2__, _components_Filters_Sort__WEBPACK_IMPORTED_MODULE_3__, _services_customerItems__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__, _components_Filters__WEBPACK_IMPORTED_MODULE_2__, _components_Filters_Sort__WEBPACK_IMPORTED_MODULE_3__, _services_customerItems__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SortOptions = [
    {
        label: "mới nhất",
        value: "&orderByCreatedAt=DESC"
    },
    {
        label: "cũ nhất",
        value: "&orderByCreatedAt=ASC"
    },
    {
        label: "Gi\xe1 tăng dần",
        value: "&orderByPrice=DESC"
    },
    {
        label: "Gi\xe1 giảm dần",
        value: "&orderByPrice=DESC"
    }, 
];
// IProductStore
function FiltersLayout() {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_7__.useTranslations)("Filters");
    const size = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const sevicesitemAPI = new _services_customerItems__WEBPACK_IMPORTED_MODULE_9__/* .itemAPI */ .S();
    const { 0: isFilter , 1: setIsFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { 0: listItems , 1: setListItems  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const { 0: queries , 1: setQueries  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
        prices: [
            0,
            4000000
        ],
        sort: SortOptions[0]
    });
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1);
    // const [totalPages, setTotalPages] = useState(1);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const filterByPrice = (queries)=>{
        const fromPrice = queries.prices[0];
        const toPrice = queries.prices[1];
        const categoryUuids = queries.categoryUuids?.toString() || "";
        const colors = queries.colors?.toString() || "";
        const sort = queries.sort.value;
        sevicesitemAPI.getProductInFilter(fromPrice, toPrice, categoryUuids, colors, sort).then((res)=>{
            setListItems(res.data.data);
        });
    };
    const getList = (pageCurrent)=>{
        sevicesitemAPI.getProductInStore(pageCurrent).then((res)=>{
            const allItem = res.data.data;
            setListItems(allItem);
        // setTotalPages(res.data.totalPages)
        });
    };
    const fetchList = (pageCurrent)=>{
        setIsLoading(true);
        // setError(null);
        try {
            sevicesitemAPI.getProductInStore(pageCurrent).then((res)=>{
                const allItem = res.data.data;
                const cloneItems = listItems !== undefined ? [
                    ...listItems
                ] : [];
                const newItems = cloneItems.concat(allItem);
                console.log(newItems);
                setListItems(newItems);
                setPage(pageCurrent + 1);
            });
        } catch (error) {
        // setError(error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleScroll = ()=>{
        const offsetHeight = document.documentElement.offsetHeight;
        const scrollTop = document.documentElement.scrollTop;
        if (window.innerHeight + scrollTop >= offsetHeight + 150 || window.innerHeight + scrollTop <= offsetHeight - 150 || isLoading) {
            return;
        }
        fetchList(page + 1);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        isLoading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        filterByPrice(queries);
    }, [
        queries
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        getList(page);
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
                                children: listItems?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        item: item
                                    }, `card-item-` + index))
                            }),
                            isLoading ? `loading` : ``
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;