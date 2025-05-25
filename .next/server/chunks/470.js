"use strict";
exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 8470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_trial_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1699);


// import Image from 'next/image'





const exps = [
    {
        label: "Students",
        value: "10K+"
    },
    {
        label: "Quality Course",
        value: "20+"
    },
    {
        label: "Experience Features",
        value: "10+"
    }, 
];
const ExpItem = ({ item  })=>{
    const { value , label  } = item;
    return /*#__PURE__*/ _jsxs(Box, {
        sx: {
            textAlign: "center",
            mb: {
                xs: 1,
                md: 0
            }
        },
        children: [
            /*#__PURE__*/ _jsx(Typography, {
                sx: {
                    color: "secondary.main",
                    mb: {
                        xs: 1,
                        md: 2
                    },
                    fontSize: {
                        xs: 34,
                        md: 44
                    },
                    fontWeight: "bold"
                },
                children: value
            }),
            /*#__PURE__*/ _jsx(Typography, {
                color: "text.secondary",
                variant: "h5",
                children: label
            })
        ]
    });
};
const HomeHero = ()=>{
    const { 0: openDialog , 1: setOpenDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDialogOpen = ()=>setOpenDialog(true)
    ;
    const handleDialogClose = ()=>setOpenDialog(false)
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "Hero",
                sx: {
                    backgroundColor: "background.paper",
                    position: "relative",
                    pt: {
                        xs: 4,
                        md: 15
                    },
                    pb: {
                        xs: 6,
                        md: 10
                    },
                    px: {
                        xs: 2,
                        md: 10
                    },
                    width: "100%"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                    container: true,
                    spacing: 0,
                    sx: {
                        flexDirection: {
                            xs: "column",
                            md: "unset"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        sx: {
                                            mb: {
                                                xs: 4,
                                                md: 3
                                            },
                                            mt: 7
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            component: "h2",
                                            sx: {
                                                textAlign: {
                                                    xs: "left",
                                                    md: "left"
                                                },
                                                position: "relative",
                                                fontSize: {
                                                    xs: 32,
                                                    md: 76
                                                },
                                                letterSpacing: 1.5,
                                                fontWeight: 500,
                                                lineHeight: 1.2
                                            },
                                            children: [
                                                "Taking orders on Whatsapp works fine. Zottr makes it",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                                        " ",
                                                        "Work Better"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        sx: {
                                            lineHeight: 0,
                                            maxWidth: "100%",
                                            overflow: "hidden",
                                            display: {
                                                xs: "block",
                                                md: "none"
                                            },
                                            mt: {
                                                xs: -3,
                                                md: 0
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/home-hero.svg",
                                            width: 330,
                                            height: 330,
                                            alt: "Hero img"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        sx: {
                                            mb: 3,
                                            mt: 2,
                                            width: {
                                                xs: "100%",
                                                md: "70%"
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                color: "grey.700",
                                                lineHeight: 1.4,
                                                fontSize: {
                                                    xs: 16,
                                                    md: 22
                                                },
                                                textAlign: {
                                                    xs: "left",
                                                    md: "left"
                                                }
                                            },
                                            children: "Zottr helps you go beyond chats \u2014 create a modern online store, manage orders and promote your brand across WhatsApp and more."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                        gap: 3,
                                        sx: {
                                            "& button": {},
                                            display: "flex",
                                            justifyContent: {
                                                xs: "flex-start",
                                                md: "flex-start"
                                            },
                                            alignItems: {
                                                xs: "flex-start",
                                                md: "flex-start"
                                            },
                                            mt: {
                                                xs: 0,
                                                md: 4
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                sx: {
                                                    color: "grey.700",
                                                    lineHeight: 1.4,
                                                    fontWeight: 500,
                                                    fontSize: {
                                                        xs: 18,
                                                        md: 24
                                                    },
                                                    fontStyle: "italic",
                                                    textAlign: {
                                                        xs: "left",
                                                        md: "left"
                                                    }
                                                },
                                                children: "Try Zottr Now \u2013 It\u2019s Free!"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                onClick: handleDialogOpen,
                                                variant: "contained",
                                                sx: {
                                                    height: {
                                                        xs: "4rem",
                                                        md: "4.6rem"
                                                    },
                                                    width: {
                                                        xs: "100%",
                                                        md: "40%"
                                                    },
                                                    borderRadius: "50px",
                                                    bgcolor: "secondary.light",
                                                    "&:hover, &:focus, &:active": {
                                                        bgcolor: "secondary.main"
                                                    }
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    sx: {
                                                        fontSize: {
                                                            xs: "1.2rem",
                                                            md: "1.5rem"
                                                        },
                                                        fontWeight: 500,
                                                        textTransform: "none",
                                                        color: "grey.900"
                                                    },
                                                    children: "Start My Trial"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            sx: {
                                position: "relative"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    width: "100%",
                                    height: "100%",
                                    lineHeight: 0,
                                    overflow: "hidden",
                                    display: {
                                        xs: "none",
                                        md: "block"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/home-hero.svg",
                                    width: 650,
                                    height: 650,
                                    alt: "Hero img"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_trial_dialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                openDialog: openDialog,
                handleDialogClose: handleDialogClose
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeHero);


/***/ })

};
;