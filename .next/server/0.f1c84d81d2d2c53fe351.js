exports.ids = [0];
exports.modules = {

/***/ "ESK1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ImportScript; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/utils/hook/useScript/index.tsx


const useScript = url => {
  Object(external_react_["useEffect"])(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

/* harmony default export */ var hook_useScript = (useScript);
// CONCATENATED MODULE: ./src/containers/Dashboard/importScript.tsx




function ImportScript() {
  hook_useScript("/theme/js/waves.js");
  hook_useScript("/theme/js/sidebarmenu.js");
  hook_useScript("/theme/node_modules/raphael/raphael-min.js");
  hook_useScript("/theme/node_modules/morrisjs/morris.min.js");
  hook_useScript("/theme/node_modules/popper/popper.min.js");
  hook_useScript("/theme/node_modules/jquery-sparkline/jquery.sparkline.min.js");
  hook_useScript("/theme/node_modules/toast-master/js/jquery.toast.js");
  hook_useScript("/theme/node_modules/select2/dist/js/select2.full.min.js");
  hook_useScript("/theme/js/perfect-scrollbar.jquery.min.js");
  hook_useScript("/theme/node_modules/Magnific-Popup-master/dist/jquery.magnific-popup.min.js");
  hook_useScript("/theme/js/jquery.onepage-scroll.js");
  hook_useScript("/theme/js/drag-arrange.min.js");
  hook_useScript("/theme/js/slick.min.js");
  hook_useScript("/theme/js/custom.js");
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {});
}

/***/ })

};;