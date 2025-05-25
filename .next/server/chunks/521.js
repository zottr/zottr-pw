"use strict";
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 4521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testimonial)
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
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBack"
var ArrowBack_ = __webpack_require__(3622);
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForward"
var ArrowForward_ = __webpack_require__(1883);
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);
;// CONCATENATED MODULE: ./src/components/testimonial/testimonial-item.tsx


// import Image from 'next/image'


const TestimonialItem = ({ item  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            padding: {
                xs: "10px",
                md: "30px"
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        component: "h2",
                        variant: "h4",
                        sx: {
                            mb: 4,
                            fontSize: {
                                xs: 24,
                                md: 42
                            },
                            color: "grey.900",
                            fontWeight: 500
                        },
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 4,
                            color: "grey.700",
                            fontSize: {
                                xs: 16,
                                md: 22
                            },
                            fontStyle: "italic"
                        },
                        children: item.content
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    boxShadow: 1,
                    borderRadius: 5,
                    px: 2,
                    py: 2,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    width: {
                        xs: 240,
                        md: 270
                    },
                    backgroundColor: "background.paper"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            borderRadius: "50%",
                            height: 76,
                            width: 76,
                            overflow: "hidden",
                            mr: 2,
                            "& img": {
                                width: "100%"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: `/images/avatars/${item.user.photo}`,
                            width: 80,
                            height: 80,
                            alt: item.user.name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                sx: {
                                    fontSize: {
                                        xs: 12,
                                        md: 18
                                    },
                                    color: "grey.900"
                                },
                                children: item.user.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle1",
                                sx: {
                                    fontSize: {
                                        xs: 12,
                                        md: 15
                                    },
                                    color: "text.secondary"
                                },
                                children: item.user.description
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const testimonial_item = (TestimonialItem);

;// CONCATENATED MODULE: ./src/components/testimonial/index.ts


;// CONCATENATED MODULE: ./src/components/home/testimonial.data.ts
const data = [
    {
        id: 1,
        title: "Zero tech skills required",
        content: '" I\u2019ve got 2 kids and a home business which I run on Whatsapp & Instagram. I thought I needed a web developer to create my online store. With Zottr, I was able to make a good-looking store myself and manage orders & customers using Whatsapp with ease. "',
        user: {
            id: 1,
            name: "Madhu",
            description: "Home Bakery",
            photo: "1.jpg"
        }
    },
    {
        id: 2,
        title: "Customers take me more seriously now",
        content: '" Before Zottr, I used to just send product pics on WhatsApp. Now, with my own link and clean store, I feel more confident and my customers trust me more. It has actually helped increase my sales. "',
        user: {
            id: 1,
            name: "Ayush",
            description: "Grocery Store",
            photo: "2.jpg"
        }
    },
    {
        id: 3,
        title: "Easy to set up, even easier to manage",
        content: '" I\u2019m not very tech-savvy, but Zottr was so simple to use. It took me less than 15 minutes to set everything up. Managing orders directly from WhatsApp is a game changer. "',
        user: {
            id: 1,
            name: "Shivam",
            description: "Cloud Kitchen",
            photo: "3.jpg"
        }
    },
    {
        id: 4,
        title: "Perfect for WhatsApp and Instagram sellers",
        content: '" I run a small handmade jewelry business on Instagram. Zottr gave me a proper store link I can add to my bio and share on WhatsApp. My buyers find it so much easier to browse and place orders. "',
        user: {
            id: 1,
            name: "Payas",
            description: "Jewelry Store",
            photo: "4.jpg"
        }
    }, 
];

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/home/testimonial.tsx


// import Image from 'next/image'











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
            bottom: {
                xs: "-28px !important",
                md: "64px !important"
            },
            left: "unset !important",
            right: type === "prev" ? "90px !important" : "30px !important",
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
const StyledSlickContainer = (0,styles_.styled)("div")(()=>({
        position: "relative",
        "& .slick-list": {
            marginLeft: "-30px",
            marginBottom: "24px"
        }
    })
);
const HomeTestimonial = ()=>{
    const sliderRef = (0,external_react_.useRef)(null);
    const theme1 = (0,material_.useTheme)();
    const isMobile = (0,material_.useMediaQuery)(theme1.breakpoints.down("sm"));
    const imageWidth = isMobile ? 400 : 750;
    const imageHeight = isMobile ? 400 : 750;
    const StyledDots = (0,styles_.styled)("ul")(({ theme  })=>({
            "&.slick-dots": {
                position: "absolute",
                left: 0,
                bottom: -30,
                paddingLeft: theme.spacing(1),
                textAlign: "left",
                "& li": {
                    marginRight: theme.spacing(2),
                    "& > div": {
                        backgroundColor: theme.palette.primary.light
                    },
                    "&.slick-active>div": {
                        backgroundColor: theme.palette.common.white
                    }
                }
            }
        })
    );
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(SliderArrow, {
            type: "prev"
        }),
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(SliderArrow, {
            type: "next"
        }),
        dots: true,
        arrows: false,
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
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        id: "Stories",
        sx: {
            pb: {
                xs: 6,
                md: 10
            },
            px: {
                xs: 2,
                md: 10
            },
            pt: {
                xs: 12,
                md: 10
            },
            mt: {
                xs: 0,
                md: 6
            },
            backgroundColor: "background.paper"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 5,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    sx: {
                        display: {
                            xs: "block",
                            md: "none"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            width: "100%",
                            height: "100%",
                            mt: -12,
                            ml: -4
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/home-testimonial.svg",
                            width: imageWidth,
                            height: imageHeight,
                            alt: "Testimonial img"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        sx: {
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "h2",
                                sx: {
                                    position: "relative",
                                    fontSize: {
                                        xs: 32,
                                        md: 64
                                    },
                                    mt: {
                                        xs: -7,
                                        md: 0
                                    },
                                    mb: {
                                        xs: -1,
                                        md: 4
                                    },
                                    lineHeight: 1.2,
                                    fontWeight: 500,
                                    color: "grey.900"
                                },
                                children: "What our early users love about Zottr"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    width: {
                                        xs: "100%",
                                        md: "120%"
                                    },
                                    height: 600,
                                    bgcolor: "hsl(270, 60%, 96%)",
                                    p: 5,
                                    borderRadius: 5,
                                    ml: {
                                        xs: 0,
                                        md: -6
                                    },
                                    mt: 5,
                                    zIndex: 1000
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledSlickContainer, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                        ref: sliderRef,
                                        ...sliderConfig,
                                        children: data.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(testimonial_item, {
                                                item: item
                                            }, String(index))
                                        )
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    sx: {
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            width: "120%",
                            height: "120%",
                            mt: -22
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/home-testimonial.svg",
                            width: imageWidth,
                            height: imageHeight,
                            alt: "Testimonial img"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const testimonial = (HomeTestimonial);


/***/ })

};
;