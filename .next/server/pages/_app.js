"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/utils/index.ts + 1 modules
var utils = __webpack_require__(5720);
// EXTERNAL MODULE: ./src/config/theme/index.ts + 5 modules
var theme = __webpack_require__(7612);
;// CONCATENATED MODULE: ./src/providers/mui-provider.tsx




const MUIProvider = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
        theme: theme/* default */.ZP,
        children: children
    });
};
/* harmony default export */ const mui_provider = (MUIProvider);

;// CONCATENATED MODULE: ./src/providers/index.ts


;// CONCATENATED MODULE: ./src/pages/_app.tsx










// import 'slick-carousel/slick/slick-theme.css'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,utils/* createEmotionCache */.S)();
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page)=>page
    );
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Zottr"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mui_provider, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                    getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }))
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [360], () => (__webpack_exec__(6039)));
module.exports = __webpack_exports__;

})();