"use strict";
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 4431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ProvideAuth),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authCustomerServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authCustomerServices__WEBPACK_IMPORTED_MODULE_3__]);
_services_authCustomerServices__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const initialAuth = {
    user: null
};
const authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialAuth);
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
function ProvideAuth({ children  }) {
    const auth = useProvideAuth();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(authContext.Provider, {
        value: auth,
        children: children
    });
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
const useAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const initialAuth = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("user");
        if (initialAuth) {
            const initUser = JSON.parse(initialAuth);
            setUser(initUser);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookies)("user", user);
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookies)("token", user?.token);
    }, [
        user
    ]);
    const register = async (email, fullname, password, phone)=>{
        try {
            await _services_authCustomerServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"].register */ .Z.register({
                username: fullname,
                password: password,
                email,
                phone,
                role: 0
            });
            return {
                success: true,
                message: "register_successful"
            };
        } catch (err) {
            return {
                success: false,
                errorCode: err.response?.data?.errorCode && err.response.data.errorCode || "",
                message: err.response?.data?.message && err.response.data.message || "alreadyExists"
            };
        }
    };
    const login = async (username, password)=>{
        try {
            const response = await _services_authCustomerServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"].login */ .Z.login({
                username,
                password
            });
            const user = {
                id: response.data.uuid,
                email: response.data.email,
                fullname: response.data.fullName,
                phone: response.data.phone,
                shippingAddress: response.data.address,
                token: response.data.accessToken
            };
            setUser(user);
            return {
                success: true,
                message: "login_successful"
            };
        } catch (err) {
            return {
                success: false,
                errorCode: err.response?.data?.errorCode && err.response.data.errorCode || "",
                message: err.response?.data?.message && err.response.data.message || "incorrect"
            };
        }
    };
    const verify = async (phone)=>{
        let isSuccess = true;
        const isActivated = true;
        if (isActivated) {
            try {
                const isSendOtpCode = await _services_authCustomerServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"].sendOtp */ .Z.sendOtp(phone);
                if (isSendOtpCode) isSuccess = true;
            } catch (error) {
                isSuccess = false;
            }
        }
        return {
            success: isSuccess,
            message: isSuccess ? "verify_successful" : "verify_failed"
        };
    };
    const checkOtp = async (phone, otpCode)=>{
        let isSuccess = true;
        try {
            await _services_authCustomerServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"].checkOtp */ .Z.checkOtp({
                phone: phone,
                otpCode: otpCode
            });
        } catch (error) {
            isSuccess = false;
        }
        return {
            success: isSuccess,
            message: isSuccess ? "OTP valid" : "OPT invalid , please check"
        };
    };
    const activate = async (user, otpCode)=>{
        let isSuccess = true;
        await _services_authCustomerServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"].accountActivation */ .Z.accountActivation({
            phone: user.phone,
            otpCode,
            username: user.username,
            password: user.password
        });
        return {
            success: isSuccess,
            message: isSuccess ? "activate_successful" : "activate_failed"
        };
    };
    const forgotPassword = async ()=>{
        try {
            // const response = await axios.post(
            //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/forgot-password`,
            //   {
            //     email,
            //   }
            // );
            const response = {
                data: {
                    success: true
                }
            };
            const forgotPasswordResponse = response.data;
            setUser(user);
            return {
                success: forgotPasswordResponse.success,
                message: "reset_email_sent"
            };
        } catch (err) {
            console.log(err);
            return {
                success: false,
                message: "something_went_wrong"
            };
        }
    };
    const logout = ()=>{
        setUser(null);
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("user");
    };
    // Return the user object and auth methods
    return {
        user,
        setUser,
        register,
        login,
        verify,
        activate,
        forgotPassword,
        logout,
        checkOtp
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProvideCart),
  "j": () => (/* binding */ useCart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/context/cart/CartContext.ts

const initialContextValues = {
};
const CartContext = (0,external_react_.createContext)(initialContextValues);
/* harmony default export */ const cart_CartContext = (CartContext);

;// CONCATENATED MODULE: ./src/context/cart/CartProvider.tsx


// import cartReducer from './cartReducer';

const ProvideCart = ({ children  })=>{
    const value = useProvideCart();
    return /*#__PURE__*/ jsx_runtime_.jsx(cart_CartContext.Provider, {
        value: value,
        children: children
    });
};
const useCart = ()=>(0,external_react_.useContext)(cart_CartContext);
const useProvideCart = ()=>{
    const { 0: cartCustomer , 1: setCartCustomer  } = (0,external_react_.useState)([]);
    const refreshTotal = ()=>{
        const cartLocal = localStorage?.getItem("cartCustomer") ? JSON.parse(localStorage.getItem("cartCustomer") || "{}") : null;
        let subtotal = 0;
        let quantityTotal = 0;
        cartLocal?.map((item)=>{
            subtotal += item.price * item.quantity;
            quantityTotal += item.quantity;
        });
        localStorage.setItem("tempTotal", String(subtotal));
        localStorage.setItem("tempQuantityTotal", String(quantityTotal));
    };
    (0,external_react_.useEffect)(()=>{
        const cartLocal = localStorage?.getItem("cartCustomer") ? JSON.parse(localStorage.getItem("cartCustomer") || "{}") : null;
        setCartCustomer(cartLocal);
    }, []);
    const addItem = (item)=>{
        const cartCustomer = localStorage?.getItem("cartCustomer") ? JSON.parse(localStorage.getItem("cartCustomer") || "{}") : null;
        if (cartCustomer === null) {
            let arrCart = [];
            arrCart.push(item);
            localStorage.setItem("cartCustomer", JSON.stringify(arrCart));
        } else {
            const listItem = cartCustomer?.map((cart)=>cart.productUuid);
            if (listItem.includes(item.productUuid)) {
                const posItemInCart = listItem.indexOf(item.productUuid);
                cartCustomer[posItemInCart]["quantity"] = cartCustomer[posItemInCart]["quantity"] + item.quantity;
                localStorage.setItem("cartCustomer", JSON.stringify(cartCustomer));
            } else {
                cartCustomer.push(item);
                localStorage.setItem("cartCustomer", JSON.stringify(cartCustomer));
            }
        }
        const btnShowCart = document.getElementById("btn-show-cart");
        btnShowCart?.click();
        refreshTotal();
    };
    const addOne = (item)=>{
        const cartCustomer = localStorage?.getItem("cartCustomer") ? JSON.parse(localStorage.getItem("cartCustomer") || "{}") : null;
        const listItem = cartCustomer?.map((cart)=>cart.productUuid);
        if (listItem?.includes(item.productUuid)) {
            const posItemInCart = listItem.indexOf(item.productUuid);
            if (Number(item?.totalAvailableItems) > cartCustomer[posItemInCart]["quantity"]) {
                cartCustomer[posItemInCart]["quantity"] = cartCustomer[posItemInCart]["quantity"] + 1;
                localStorage.setItem("cartCustomer", JSON.stringify(cartCustomer));
            } else {
                alert(`Kho chỉ còn ${item?.totalAvailableItems} cái`);
            }
        } else {
            cartCustomer.push(item);
            localStorage.setItem("cartCustomer", JSON.stringify(cartCustomer));
        }
        refreshTotal();
    };
    const removeItem = (item)=>{
        const listItem = cartCustomer?.map((cart)=>cart.productUuid);
        const posItemInCart = listItem.indexOf(item.productUuid);
        if (item.quantity > 1) {
            cartCustomer[posItemInCart]["quantity"] = cartCustomer[posItemInCart]["quantity"] - 1;
            localStorage.setItem("cartCustomer", JSON.stringify(cartCustomer));
        } else {
            deleteItem(item.productUuid);
        }
        refreshTotal();
    };
    const deleteItem = (item)=>{
        const listItem = cartCustomer?.map((cart)=>cart.productUuid);
        if (listItem.length > 0) {
            const posItemInCart = listItem?.indexOf(item);
            cartCustomer.splice(posItemInCart, 1);
        } else {
            if (cartCustomer.length === 0) {
                localStorage.removeItem("cartCustomer");
            } else {
                localStorage.setItem("cartCustomer", JSON.stringify(cartCustomer));
            }
        }
        refreshTotal();
        const btnShowCart = document.getElementById("btn-show-cart");
        btnShowCart?.click();
    };
    const clearCart = ()=>{
        console.log("clear");
    };
    const value = {
        addItem,
        addOne,
        removeItem,
        deleteItem,
        clearCart
    };
    return value;
};


/***/ }),

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vU": () => (/* binding */ API_PREFIX)
/* harmony export */ });
/* unused harmony exports ORDERS_BASE_URL, SHIPPING_BASE_URL */
const API_PREFIX = "https://api.juclothing.com/api/jusystem";
const ORDERS_BASE_URL = (/* unused pure expression or super */ null && (`/customer/orders`));
const SHIPPING_BASE_URL = `${API_PREFIX}/external/ghn`;


/***/ }),

/***/ 6275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports baseURL, axiosPrivate */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2194);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([query_string__WEBPACK_IMPORTED_MODULE_1__]);
query_string__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { useAuth } from '@/context/AuthContext';



const baseURL = process.env.NEXT_PUBLIC_IMAGE_PREFIX;
const axiosPrivate = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL,
    headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("token")}`
    },
    paramsSerializer: (params)=>query_string__WEBPACK_IMPORTED_MODULE_1__["default"].stringify(params),
    withCredentials: true
});
const http = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL,
    headers: {
        "content-type": "application/json"
    },
    paramsSerializer: (params)=>query_string__WEBPACK_IMPORTED_MODULE_1__["default"].stringify(params)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HttpClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2194);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([query_string__WEBPACK_IMPORTED_MODULE_1__]);
query_string__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("token");
class HttpClient {
    constructor(baseURL){
        this.instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL,
            headers: {
                "content-type": "application/json"
            },
            paramsSerializer: (params)=>query_string__WEBPACK_IMPORTED_MODULE_1__["default"].stringify(params)
        });
        this.requestInterceptor();
        this.responseInterceptor();
    }
    requestInterceptor = ()=>{
        this.instance.interceptors.request.use(async (config)=>{
            // is development mode
            // if (process.env.NODE_ENV === 'development') {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        // }
        });
    };
    responseInterceptor = ()=>{
        this.instance.interceptors.response.use(this._handleResponse, this.handleError);
    };
    _handleResponse = ({ data  })=>({
            data
        });
    handleError = (error)=>{
        throw error;
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6275);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_http__WEBPACK_IMPORTED_MODULE_0__]);
_lib_http__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const authCustomerServices = {
    login: (queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post("/auth/customer/login", {
            ...queryObject
        });
    },
    register: (queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post("/auth/customer/register", {
            ...queryObject
        });
    },
    sendOtp: (phone)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post("/auth/customer/send-verify-phone-otp", {
            phone
        });
    },
    checkOtp: (queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post("/auth/customer/check-otp", queryObject);
    },
    accountActivation: (queryObject)=>{
        return _lib_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post("/auth/customer/account-activation", queryObject);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authCustomerServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ profileAPI)
/* harmony export */ });
/* harmony import */ var _interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5758);
/* harmony import */ var _lib_httpPrivate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3033);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_httpPrivate__WEBPACK_IMPORTED_MODULE_1__, _instance__WEBPACK_IMPORTED_MODULE_2__]);
([_lib_httpPrivate__WEBPACK_IMPORTED_MODULE_1__, _instance__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class profileAPI extends _lib_httpPrivate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    getCustomerProfile = async ()=>{
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customers/profile`).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
    getCustomerOrders = async ()=>{
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/orders/me`).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
    addItemToWishList = async (payload)=>{
        const response = await this.instance.post(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/wishlist/like`, payload).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
    removeItemFromWishList = async (payload)=>{
        const response = await this.instance.post(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/wishlist/unlike`, payload).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
    getCustomerWishList = async ()=>{
        const response = await this.instance.get(`${_interfaces_orderCustomer_service__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .vU}/customer/wishlist`).catch(_instance__WEBPACK_IMPORTED_MODULE_2__/* .catchAxiosError */ .A);
        return response;
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ catchAxiosError),
/* harmony export */   "Z": () => (/* binding */ HttpClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2194);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([query_string__WEBPACK_IMPORTED_MODULE_1__]);
query_string__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class HttpClient {
    constructor(baseURL){
        this.instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL,
            headers: {
                "content-type": "application/json"
            },
            paramsSerializer: (params)=>query_string__WEBPACK_IMPORTED_MODULE_1__["default"].stringify(params)
        });
        this.requestInterceptor();
        this.responseInterceptor();
    }
    requestInterceptor = ()=>{
        this.instance.interceptors.request.use(async (config)=>{
            // config.headers.Authorization = `Bearer ${REACT_APP_TOKEN}`;
            return config;
        // }
        });
    };
    responseInterceptor = ()=>{
        this.instance.interceptors.response.use(this._handleResponse, this.handleError);
    };
    _handleResponse = ({ data  })=>({
            data
        });
    handleError = (error)=>{
        throw error;
    };
}
function catchAxiosError(err) {
    // Something happened in setting up the request that triggered an Error
    const error = {
        headers: null,
        message: "Something happened in setting up the request that triggered an Error",
        status: 0
    };
    if (err && err.response) {
        error.headers = err.response.headers;
        error.message = err.response.data.message;
        error.status = err.response.status;
        console.log(error.status);
    // if(error.status === 401) {
    //   localStorage.removeItem('user');
    //   window.location.href = '/login';
    // }
    // if(error.status === 403) {
    //   window.location.href = '/permission-denied';
    // }
    } else if (err && err.request) {
        error.headers = err.request.headers;
        error.message = "The request was made, but no response was received";
        console.error(err.request);
    }
    return {
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;