"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 6029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ features)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBack"
var ArrowBack_ = __webpack_require__(3622);
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForward"
var ArrowForward_ = __webpack_require__(1883);
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/feature/feature-card-item2.tsx


// import Image from 'next/image'



const FeatureCardItem2 = ({ item  })=>{
    const theme1 = (0,material_.useTheme)();
    const isMobile = (0,material_.useMediaQuery)(theme1.breakpoints.down("sm"));
    const imageWidth = isMobile ? 280 : 400;
    const imageHeight = isMobile ? 280 : 300;
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            mx: 1,
            my: 0.5,
            px: {
                xs: 0,
                md: 1
            },
            py: 1
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                p: 3,
                backgroundColor: "hsl(42, 80%, 95%)",
                borderRadius: 5,
                height: {
                    xs: 450,
                    md: 520
                },
                transition: (theme)=>theme.transitions.create([
                        "box-shadow"
                    ])
                ,
                "&:hover": {
                    boxShadow: 1,
                    backgroundColor: "hsl(42, 80%, 92%)"
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        lineHeight: 0,
                        overflow: "hidden",
                        borderRadius: 3,
                        height: {
                            xs: 280,
                            md: 300
                        },
                        mb: 2
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: item.photo,
                        width: imageWidth,
                        height: imageHeight,
                        alt: "Feature " + item.id
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "h2",
                            variant: "h4",
                            sx: {
                                fontSize: {
                                    xs: 22,
                                    md: 32
                                },
                                color: "grey.900",
                                fontWeight: 600
                            },
                            children: item.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                fontSize: {
                                    xs: 16,
                                    md: 22
                                },
                                lineHeight: 1.3,
                                color: "grey.700",
                                mt: 1,
                                fontWeight: 400
                            },
                            variant: "subtitle1",
                            children: item.description
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const feature_card_item2 = (FeatureCardItem2);

;// CONCATENATED MODULE: ./src/components/home/features.data.ts
const data = [
    {
        id: 1,
        photo: "/images/features/8252000_3875170.svg",
        name: "Your Own Store Address",
        description: "Promote your business by just sharing a simple, recognizable store URL."
    },
    {
        id: 2,
        photo: "/images/features/11641784_4782233.svg",
        name: "Customize Your Store",
        description: "Pick color themes & layouts that best suit your business type & brand."
    },
    {
        id: 3,
        photo: "/images/features/13246586_5179457.svg",
        name: "Provide Offers & Discounts",
        description: "FLAT \u20B9200 OFF, 50% OFF, 1+1 Offer, and much more."
    },
    {
        id: 5,
        photo: "/images/features/16485210_5739254.svg",
        name: "Run Everything On Whatsapp",
        description: "Automatic order updates, store promotions, chat with customers."
    },
    {
        id: 6,
        photo: "/images/features/7741865_3708241.svg",
        name: "Pay via UPI",
        description: "Why pay payment gateway fees when you can simply use UPI or cash for free?"
    }, 
];

;// CONCATENATED MODULE: ./src/components/home/features.tsx












const SliderArrow = (props)=>{
    const { onClick , type , className  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        sx: {
            backgroundColor: "background.paper",
            color: "primary.main",
            "&:hover": {
                backgroundColor: "primary.main",
                color: "primary.contrastText"
            },
            bottom: "-28px !important",
            left: "unset !important",
            right: type === "prev" ? "60px !important" : "0 !important",
            zIndex: 10,
            boxShadow: 1
        },
        disableRipple: true,
        color: "inherit",
        onClick: onClick,
        className: className,
        children: type === "next" ? /*#__PURE__*/ jsx_runtime_.jsx((ArrowForward_default()), {
            sx: {
                fontSize: 22
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx((ArrowBack_default()), {
            sx: {
                fontSize: 22
            }
        })
    });
};
const StyledDots = (0,styles_.styled)("ul")(({ theme  })=>({
        "&.slick-dots": {
            position: "absolute",
            left: 0,
            bottom: -20,
            paddingLeft: theme.spacing(1),
            textAlign: "left",
            "& li": {
                marginRight: theme.spacing(2),
                "&.slick-active>div": {
                    backgroundColor: theme.palette.primary.main
                }
            }
        }
    })
);
const HomeOurFeatures = ()=>{
    const { breakpoints  } = (0,styles_.useTheme)();
    const matchMobileView = useMediaQuery_default()(breakpoints.down("md"));
    const sliderConfig = {
        infinite: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 3,
        slidesToScroll: 1,
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(SliderArrow, {
            type: "prev"
        }),
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(SliderArrow, {
            type: "next"
        }),
        dots: true,
        appendDots: (dots)=>/*#__PURE__*/ jsx_runtime_.jsx(StyledDots, {
                children: dots
            })
        ,
        customPaging: ()=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: 8,
                    width: 30,
                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: 4
                }
            })
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        id: "Features",
        sx: {
            pt: {
                xs: 10,
                md: 10
            },
            mt: {
                xs: -10,
                md: -10
            },
            px: {
                xs: 2,
                md: 10
            },
            backgroundColor: "background.paper"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "h1",
                component: "h2",
                sx: {
                    fontSize: {
                        xs: 32,
                        md: 64
                    },
                    lineHeight: 1.2,
                    fontWeight: 500,
                    textAlign: {
                        xs: "left",
                        md: "center"
                    }
                },
                children: [
                    "Design It Your Way. Manage Easily.",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " Sell Like",
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
                            "A Pro. ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                sx: {
                    mt: 3
                },
                children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(feature_card_item2, {
                            item: item
                        }, String(item.id))
                    }, item.id)
                )
            })
        ]
    });
};
/* harmony default export */ const features = (HomeOurFeatures);


/***/ })

};
;