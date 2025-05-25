"use strict";
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 7612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ config_theme)
});

// UNUSED EXPORTS: paletteBase, paletteDark, paletteLight, shadows, typography

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/config/theme/typography.ts
const fontFamily = [
    '"Cabin",-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', 
].join(",");
const headingLineHeight = 1.4;
const typography = {
    fontFamily: "Poppins, sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontSize: 34,
        lineHeight: headingLineHeight,
        fontWeight: 700
    },
    h2: {
        fontSize: 28,
        lineHeight: headingLineHeight,
        fontWeight: 700
    },
    h3: {
        fontSize: 24,
        lineHeight: headingLineHeight,
        fontWeight: 700
    },
    h4: {
        fontSize: 22,
        lineHeight: headingLineHeight,
        fontWeight: 700
    },
    h5: {
        fontSize: 17,
        lineHeight: headingLineHeight,
        fontWeight: 600
    },
    h6: {
        fontSize: 15,
        lineHeight: headingLineHeight,
        fontWeight: 600
    },
    h7: {
        fontSize: 13,
        lineHeight: headingLineHeight,
        fontWeight: 600
    },
    body1: {
        fontSize: "1rem"
    },
    body2: {
        fontSize: "0.9rem"
    },
    subtitle1: {
        fontSize: "0.85rem"
    },
    subtitle2: {
        fontSize: "0.8rem"
    }
};
// const typography: TypographyOptions = {
//   fontFamily,
//   fontWeightLight: 400,
//   fontWeightRegular: 400,
//   fontWeightMedium: 600,
//   fontWeightBold: 700,
//   h1: {
//     fontSize: 34,
//     lineHeight: headingLineHeight,
//     fontWeight: 700,
//   },
//   h2: {
//     fontSize: 28,
//     lineHeight: headingLineHeight,
//     fontWeight: 700,
//   },
//   h3: {
//     fontSize: 24,
//     lineHeight: headingLineHeight,
//     fontWeight: 700,
//   },
//   h4: {
//     fontSize: 22,
//     lineHeight: headingLineHeight,
//     fontWeight: 700,
//   },
//   h5: {
//     fontSize: 17,
//     lineHeight: headingLineHeight,
//     fontWeight: 600,
//   },
//   h6: {
//     fontSize: 15,
//     lineHeight: headingLineHeight,
//     fontWeight: 600,
//   },
//   body1: {
//     fontSize: '1rem',
//   },
//   body2: {
//     fontSize: '0.9rem',
//   },
//   subtitle1: {
//     fontSize: '0.85rem',
//   },
//   subtitle2: {
//     fontSize: '0.8rem',
//   },
// }
/* harmony default export */ const theme_typography = (typography);

;// CONCATENATED MODULE: ./src/config/theme/palette-base.ts
const paletteBase = {
    // primary: {
    //   light: '#9FF1D2',
    //   main: '#127C71',
    //   dark: '#0D6A69',
    //   contrastText: '#fbfbfb',
    // },
    // secondary: {
    //   light: '#FDE6A8',
    //   main: '#ffaf35',
    //   dark: '#D0821C',
    //   contrastText: '#fbfbfb',
    // },
    primary: {
        main: "#673AB7",
        light: "#9575CD",
        dark: "#512DA8",
        // surface: 'hsl(270, 60%, 90%)', // Soft purple background
        // lightsurface: 'hsl(270, 60%, 99%)', // Soft purple background
        contrastText: "#fff"
    },
    secondary: {
        main: "#FFB300",
        light: "#FFD54F",
        dark: "#FF8F00",
        // surface: 'hsl(42, 80%, 90%)', // Light golden cream
        // lightsurface: 'hsl(42, 80%, 99%)', // Light golden cream
        contrastText: "#000"
    }
};
/* harmony default export */ const palette_base = (paletteBase);

// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(5574);
;// CONCATENATED MODULE: ./src/config/theme/palette-light.ts

const palette = {
    mode: "light",
    background: {
        default: "#f2f5f5",
        paper: colors_.common.white
    },
    text: {
        primary: colors_.grey[900],
        secondary: "#717171",
        disabled: colors_.grey[500]
    }
};
/* harmony default export */ const palette_light = (palette);

;// CONCATENATED MODULE: ./src/config/theme/palette-dark.ts

const paletteDark = {
    mode: "dark",
    background: {
        default: colors_.grey[900],
        paper: "#222128"
    },
    text: {
        primary: colors_.grey[100],
        secondary: colors_.grey[200],
        disabled: colors_.grey[300]
    }
};
/* harmony default export */ const palette_dark = (paletteDark);

;// CONCATENATED MODULE: ./src/config/theme/shadows.ts
const shadows = [
    "none",
    "0 10px 10px 0 rgb(0 0 0 / 3%)",
    "0 15px 15px 0 rgb(0 0 0 / 5%)",
    "0 22px 22px 0 rgb(0 0 0 /6%)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)", 
];
/* harmony default export */ const theme_shadows = (shadows);

;// CONCATENATED MODULE: ./src/config/theme/index.ts






// default
const createTheme = (darkMode)=>{
    const palette = darkMode ? {
        ...palette_base,
        ...palette_dark
    } : {
        ...palette_base,
        ...palette_light
    };
    return (0,styles_.createTheme)({
        palette,
        typography: theme_typography,
        shadows: theme_shadows
    });
};
const theme = createTheme(false);

/* harmony default export */ const config_theme = (theme);


/***/ }),

/***/ 5720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* reexport */ createEmotionCache)
});

// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(1913);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
;// CONCATENATED MODULE: ./src/utils/emotion-cache.ts

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    return cache_default()({
        key: "css",
        prepend: true
    });
}

;// CONCATENATED MODULE: ./src/utils/index.ts



/***/ })

};
;