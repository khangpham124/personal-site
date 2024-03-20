exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 9186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1535);
/* harmony import */ var react_if__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_if__WEBPACK_IMPORTED_MODULE_4__);





function Breadcrumb({ breadcrumbs , border  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full lg:mt-0 mt-20px", {
            "flex mx-auto w-[calc(100%-80px)] border-t-[1px] border-[#c3c3c3] pt-24px md:pb-[32px] md:px-[40px] px-[20px]": border
        }, {
            "mb-16px": !border
        }),
        "aria-label": "Breadcrumb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            className: "inline-flex flex-wrap items-center",
            children: breadcrumbs.map((breadcrumb, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_if__WEBPACK_IMPORTED_MODULE_4__.If, {
                    condition: !!breadcrumb?.url,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_if__WEBPACK_IMPORTED_MODULE_4__.Then, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "inline-flex items-center ml-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: breadcrumb.url,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "text-[14px] text-[#949494] hover:text-[#cecece] capitalize",
                                            children: breadcrumb.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[14px] text-[#949494] mx-8px",
                                        children: "/"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_if__WEBPACK_IMPORTED_MODULE_4__.Else, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                "aria-current": "page",
                                className: "ml-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[#333333] text-[14px] font-PlusJakartaSansMedium capitalize",
                                        children: breadcrumb.title
                                    })
                                })
                            })
                        })
                    ]
                }, `breadcrumbs-item-` + i))
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


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

/***/ 5038:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":1,"name":"Lily Of The Valley 1","slug":"lily-of-the-valley-1","price":999000,"sale_price":2000000,"badge":"hot","qty":10,"variants":{"color":["#ffffff","#F5C3CB","#EFA543"],"sizes":["XS","S","M","L","XL","C"]},"product_specifications":[{"size":"S","shoulder":"44","chest":"104","sleeve":"62.7","long_shirt":"70.5"},{"size":"M","shoulder":"45","chest":"107","sleeve":"64","long_shirt":"73"},{"size":"L","shoulder":"47","chest":"112","sleeve":"66","long_shirt":"75.5"},{"size":"XL","shoulder":"48","chest":"114","sleeve":"68.5","long_shirt":"76.5"}],"discountPercent":"10%","description":"description","detail":"detail","categoryId":10,"stock":200,"createdAt":"10/10/2021","updatedAt":"10/10/2021","category":{"id":3,"name":"Áo","slug":"ao","description":"description","thumbnailImage":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","createdAt":"10/10/2021","updatedAt":"10/10/2021"},"images":[{"id":1,"image_url":"https://images.pexels.com/photos/17157659/pexels-photo-17157659/free-photo-of-th-i-trang-kinh-ram-dan-ba-mua-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":2,"image_url":"https://images.pexels.com/photos/17157654/pexels-photo-17157654/free-photo-of-th-i-trang-kinh-ram-dan-ba-mua-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":3,"image_url":"https://images.pexels.com/photos/17157649/pexels-photo-17157649/free-photo-of-kinh-ram-dan-ba-mau-vang-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":4,"image_url":"https://images.pexels.com/photos/17157647/pexels-photo-17157647/free-photo-of-k-ngh-dan-ba-mua-he-mau-vang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":5,"image_url":"https://images.pexels.com/photos/17157647/pexels-photo-17157647/free-photo-of-k-ngh-dan-ba-mua-he-mau-vang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":6,"image_url":"https://images.pexels.com/photos/17157647/pexels-photo-17157647/free-photo-of-k-ngh-dan-ba-mua-he-mau-vang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":7,"image_url":"https://images.pexels.com/photos/17157647/pexels-photo-17157647/free-photo-of-k-ngh-dan-ba-mua-he-mau-vang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}],"image1":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","image2":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":2,"name":"Lily Of The Valley 2","slug":"lily-of-the-valley-2","price":4500000,"sale_price":2000000,"badge":"hot","qty":10,"discountPercent":"10%","product_specifications":[{"size":"S","shoulder":"44","chest":"104","sleeve":"62.7","long_shirt":"70.5"},{"size":"M","shoulder":"45","chest":"107","sleeve":"64","long_shirt":"73"},{"size":"L","shoulder":"47","chest":"112","sleeve":"66","long_shirt":"75.5"},{"size":"XL","shoulder":"48","chest":"114","sleeve":"68.5","long_shirt":"76.5"}],"variants":{"color":["#ffffff","#F5C3CB","#EFA543"],"sizes":["XS","S","M","L","XL","C"]},"description":"description","detail":"detail","categoryId":10,"stock":200,"createdAt":"10/10/2021","updatedAt":"10/10/2021","category":{"id":3,"name":"Đầm","slug":"dam","description":"description","thumbnailImage":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","createdAt":"10/10/2021","updatedAt":"10/10/2021"},"images":[{"id":1,"image_url":"https://images.pexels.com/photos/17157659/pexels-photo-17157659/free-photo-of-th-i-trang-kinh-ram-dan-ba-mua-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":2,"image_url":"https://images.pexels.com/photos/17157654/pexels-photo-17157654/free-photo-of-th-i-trang-kinh-ram-dan-ba-mua-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":3,"image_url":"https://images.pexels.com/photos/17157649/pexels-photo-17157649/free-photo-of-kinh-ram-dan-ba-mau-vang-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":4,"image_url":"https://images.pexels.com/photos/17157647/pexels-photo-17157647/free-photo-of-k-ngh-dan-ba-mua-he-mau-vang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}],"image1":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","image2":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":3,"name":"Lily Of The Valley 3","slug":"lily-of-the-valley-3","price":3500000,"sale_price":200000,"badge":"hot","qty":10,"discountPercent":"10%","product_specifications":[{"size":"S","shoulder":"44","chest":"104","sleeve":"62.7","long_shirt":"70.5"},{"size":"M","shoulder":"45","chest":"107","sleeve":"64","long_shirt":"73"},{"size":"L","shoulder":"47","chest":"112","sleeve":"66","long_shirt":"75.5"},{"size":"XL","shoulder":"48","chest":"114","sleeve":"68.5","long_shirt":"76.5"}],"variants":{"color":["#ffffff","#F5C3CB","#EFA543"],"sizes":["XS","S","M","L","XL","C"]},"description":"description","detail":"detail","categoryId":10,"stock":200,"createdAt":"10/10/2021","updatedAt":"10/10/2021","category":{"id":3,"name":"Jumpsuit","slug":"jumpsuit","description":"description","thumbnailImage":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","createdAt":"10/10/2021","updatedAt":"10/10/2021"},"images":[{"id":1,"image_url":"https://images.pexels.com/photos/17157659/pexels-photo-17157659/free-photo-of-th-i-trang-kinh-ram-dan-ba-mua-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":2,"image_url":"https://images.pexels.com/photos/17157654/pexels-photo-17157654/free-photo-of-th-i-trang-kinh-ram-dan-ba-mua-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":3,"image_url":"https://images.pexels.com/photos/17157649/pexels-photo-17157649/free-photo-of-kinh-ram-dan-ba-mau-vang-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":4,"image_url":"https://images.pexels.com/photos/17157647/pexels-photo-17157647/free-photo-of-k-ngh-dan-ba-mua-he-mau-vang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}],"image1":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","image2":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":4,"name":"Lily Of The Valley 5","slug":"lily-of-the-valley-5","price":2000000,"sale_price":2000000,"badge":"hot","qty":10,"discountPercent":"10%","product_specifications":[{"size":"S","shoulder":"44","chest":"104","sleeve":"62.7","long_shirt":"70.5"},{"size":"M","shoulder":"45","chest":"107","sleeve":"64","long_shirt":"73"},{"size":"L","shoulder":"47","chest":"112","sleeve":"66","long_shirt":"75.5"},{"size":"XL","shoulder":"48","chest":"114","sleeve":"68.5","long_shirt":"76.5"}],"variants":{"color":["#ffffff","#F5C3CB","#EFA543"],"sizes":["XS","S","M","L","XL","C"]},"description":"description","detail":"detail","categoryId":10,"stock":200,"createdAt":"10/10/2021","updatedAt":"10/10/2021","category":{"id":3,"name":"Ao dai","slug":"ao-dai","description":"description","thumbnailImage":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","createdAt":"10/10/2021","updatedAt":"10/10/2021"},"images":[{"id":1,"image_url":"https://images.pexels.com/photos/17157659/pexels-photo-17157659/free-photo-of-th-i-trang-kinh-ram-dan-ba-mua-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":2,"image_url":"https://images.pexels.com/photos/17157654/pexels-photo-17157654/free-photo-of-th-i-trang-kinh-ram-dan-ba-mua-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":3,"image_url":"https://images.pexels.com/photos/17157649/pexels-photo-17157649/free-photo-of-kinh-ram-dan-ba-mau-vang-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{"id":4,"image_url":"https://images.pexels.com/photos/17157647/pexels-photo-17157647/free-photo-of-k-ngh-dan-ba-mua-he-mau-vang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}],"image1":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","image2":"https://images.pexels.com/photos/5119212/pexels-photo-5119212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}]');

/***/ })

};
;