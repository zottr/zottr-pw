"use strict";
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 5280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ benefit)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/LinearProgress"
var LinearProgress_ = __webpack_require__(5545);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);
// EXTERNAL MODULE: external "@mui/icons-material/CurrencyRupee"
var CurrencyRupee_ = __webpack_require__(3924);
var CurrencyRupee_default = /*#__PURE__*/__webpack_require__.n(CurrencyRupee_);
// EXTERNAL MODULE: external "@mui/icons-material/Link"
var Link_ = __webpack_require__(7190);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/icons-material/EventNote"
var EventNote_ = __webpack_require__(7980);
var EventNote_default = /*#__PURE__*/__webpack_require__.n(EventNote_);
// EXTERNAL MODULE: external "@mui/icons-material/WhatsApp"
var WhatsApp_ = __webpack_require__(2232);
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_);
// EXTERNAL MODULE: external "@mui/icons-material/Storefront"
var Storefront_ = __webpack_require__(7458);
var Storefront_default = /*#__PURE__*/__webpack_require__.n(Storefront_);
;// CONCATENATED MODULE: ./src/components/home/benefit.data.tsx







const data = [
    {
        title: "Your own store link",
        description: "Get a customized URL like yourstore.zottr.com \u2014 ready to share with the world.",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {})
    },
    {
        title: "Simply pay via UPI",
        description: "Use UPI or Cash. Forget those payment gateway charges.",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((CurrencyRupee_default()), {})
    },
    {
        title: "Cuztomize your store",
        description: 'Cloth shop? bakery? Choose a "look & feel" that best suits your business.',
        icon: /*#__PURE__*/ jsx_runtime_.jsx((Storefront_default()), {})
    },
    {
        title: "Track Orders & Stock Easily",
        description: "Better than tracking chat messages from multiple customers.",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((EventNote_default()), {})
    },
    {
        title: "100% Managed on WhatsApp",
        description: "Track orders & communicate with your customers simply using Whatsapp.",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((WhatsApp_default()), {})
    }, 
];

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/home/benefit.tsx


// import Image from 'next/image'







const BorderLinearProgress = (0,styles_.styled)((LinearProgress_default()), {
    shouldForwardProp: (prop)=>prop !== "color"
})(({ theme , order  })=>({
        height: 6,
        borderRadius: 5,
        [`&.${LinearProgress_.linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200]
        },
        [`& .${LinearProgress_.linearProgressClasses.bar}`]: {
            borderRadius: 5,
            ...order === 1 && {
                backgroundColor: "#f303ff"
            },
            ...order === 2 && {
                backgroundColor: "#26e8bd"
            },
            ...order === 3 && {
                backgroundColor: "#0063ff"
            }
        }
    })
);
const HomeBenefit = ()=>{
    const theme = (0,styles_.useTheme)();
    const isMobile = (0,material_.useMediaQuery)(theme.breakpoints.down("sm"));
    const imageWidth = isMobile ? 340 : 650;
    const imageHeight = isMobile ? 340 : 650;
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        id: "benefit",
        sx: {
            pb: {
                xs: 0,
                md: 14
            },
            pt: {
                xs: 5,
                md: 0
            },
            mt: {
                xs: -8,
                md: -8
            },
            px: {
                xs: 2,
                md: 10
            },
            backgroundColor: "background.paper"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            position: "relative",
                            ml: {
                                xs: 0,
                                md: -10
                            },
                            width: "100%",
                            height: "100%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/home-feature.svg",
                            width: imageWidth,
                            height: imageHeight,
                            alt: "Feature img"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 7,
                    sx: {},
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            component: "h2",
                            sx: {
                                position: "relative",
                                fontSize: {
                                    xs: 32,
                                    md: 64
                                },
                                ml: {
                                    xs: 0,
                                    md: 4
                                },
                                mt: {
                                    xs: -2,
                                    md: 13
                                },
                                mb: {
                                    xs: 2,
                                    md: 5
                                },
                                lineHeight: 1.2,
                                fontWeight: 500
                            },
                            children: [
                                "Stay Organized.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "Boost Sales.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "Build",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "mark",
                                    sx: {
                                        position: "relative",
                                        color: "primary.main",
                                        fontSize: "inherit",
                                        fontWeight: "inherit",
                                        backgroundColor: "unset",
                                        lineHeight: "inherit"
                                    },
                                    children: [
                                        "Stunning Stores. ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                color: "grey.700",
                                mb: 2,
                                ml: {
                                    xs: 0,
                                    md: 4
                                },
                                fontSize: {
                                    xs: 16,
                                    md: 22
                                },
                                lineHeight: 1.4
                            },
                            children: "Why should big brands have all the fancy tools? Zottr brings the same power to your phone. Whether you sell sarees, pickles, or home-made candles, you get :"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    container: true,
                    rowSpacing: 3,
                    columnSpacing: 10,
                    sx: {
                        mt: {
                            xs: -4,
                            md: -4
                        }
                    },
                    children: data.map(({ title , description , icon  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    px: {
                                        xs: -1,
                                        md: 3
                                    },
                                    py: 1,
                                    borderRadius: 25,
                                    display: "flex",
                                    alignItems: "flex-start",
                                    height: {
                                        xs: "auto",
                                        md: 150
                                    },
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        sx: {
                                            mr: {
                                                xs: 2,
                                                md: 3
                                            },
                                            backgroundColor: "secondary.light",
                                            borderRadius: "50%",
                                            height: {
                                                xs: 64,
                                                md: 104
                                            },
                                            width: {
                                                xs: 64,
                                                md: 104
                                            },
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "primary.contrastText",
                                            "& svg": {
                                                fontSize: {
                                                    xs: 42,
                                                    md: 64
                                                },
                                                color: "black"
                                            }
                                        },
                                        children: icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            flex: 1,
                                            flexDirection: "column"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    fontSize: {
                                                        xs: 18,
                                                        md: 26
                                                    },
                                                    mb: 1,
                                                    color: "grey.900",
                                                    fontWeight: 500
                                                },
                                                children: title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    fontSize: {
                                                        xs: 16,
                                                        md: 22
                                                    },
                                                    lineHeight: 1.3,
                                                    color: "grey.700"
                                                },
                                                variant: "subtitle1",
                                                children: description
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, String(index))
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const benefit = (HomeBenefit);


/***/ })

};
;