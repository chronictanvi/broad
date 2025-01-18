"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./space-agencies.tsx":
/*!****************************!*\
  !*** ./space-agencies.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpaceAgencies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst agencies = [\n    {\n        id: \"jaxa\",\n        name: \"24.00\",\n        title: [\n            \"Introduction: Scale\"\n        ],\n        bgColor: \"bg-red-700\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"roscosmos\",\n        name: \"24.01 \",\n        title: [\n            \"A New Perspective on a Decades-old Mystery\"\n        ],\n        bgColor: \"bg-black\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"esa\",\n        name: \"24.02\",\n        title: [\n            \"Engineering Better Gene-Editing Tools\"\n        ],\n        bgColor: \"bg-gray-300\",\n        textColor: \"text-black\"\n    },\n    {\n        id: \"nasa\",\n        name: \"24.03\",\n        title: [\n            \" DepMap and Patient Impact\"\n        ],\n        bgColor: \"bg-gray-100\",\n        textColor: \"text-black\"\n    }\n];\nfunction SpaceAgencies() {\n    _s();\n    const [activeAgency, setActiveAgency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"jaxa\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col md:flex-row\",\n        children: agencies.map((agency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(agency.bgColor, \" \").concat(activeAgency === agency.id ? \"md:w-[70%] h-auto\" : \"md:w-[10%] h-[70px] md:h-auto\", \" transition-all duration-500 ease-in-out cursor-pointer overflow-hidden\"),\n                onClick: ()=>setActiveAgency(agency.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-5 pt-6 h-full flex flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm tracking-wider \".concat(agency.textColor, \" whitespace-nowrap\"),\n                                        children: agency.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                        animate: {\n                                            rotate: activeAgency === agency.id ? 180 : 0\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"w-4 h-4 \".concat(agency.textColor)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                    initial: {\n                                        opacity: 0\n                                    },\n                                    animate: {\n                                        opacity: 1\n                                    },\n                                    exit: {\n                                        opacity: 0\n                                    },\n                                    transition: {\n                                        duration: 0.3\n                                    },\n                                    className: \"space-y-1 overflow-hidden flex-grow\",\n                                    children: [\n                                        agency.title.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-3xl font-light \".concat(agency.textColor, \" transition-all duration-500\\n                        \").concat(activeAgency === agency.id ? \"md:text-left\" : \"text-right md:text-left\", \"\\n                      \"),\n                                                style: activeAgency === agency.id ? {} : {\n                                                    writingMode: \"vertical-lr\",\n                                                    textOrientation: \"mixed\",\n                                                    transform: \"rotate(0deg)\",\n                                                    marginLeft: \"auto\",\n                                                    marginRight: \"0\"\n                                                },\n                                                children: line\n                                            }, index, false, {\n                                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, this)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-12 h-0.5 bg-sky-400 mt-4 \".concat(activeAgency === agency.id ? \"\" : \"hidden\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, activeAgency === agency.id ? \"expanded\" : \"collapsed\", true, {\n                                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            }, agency.id, false, {\n                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(SpaceAgencies, \"6qaBqpBZbJRC9TmSINX2YSrgvB8=\");\n_c = SpaceAgencies;\nvar _c;\n$RefreshReg$(_c, \"SpaceAgencies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NwYWNlLWFnZW5jaWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUM7QUFDdUI7QUFDYjtBQVUzQyxNQUFNSSxXQUFxQjtJQUN6QjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1NBQXNCO1FBQzlCQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1lBQUM7U0FBNkM7UUFDckRDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87WUFBQztTQUF3QztRQUNoREMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1NBQTZCO1FBQ3JDQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFTO0lBRXpELHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNaVixTQUFTVyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ2IsOERBQUNIO2dCQUVDQyxXQUFXLEdBQ1RILE9BRFlLLE9BQU9SLE9BQU8sRUFBQyxLQUk1QixPQUhDRyxpQkFBaUJLLE9BQU9YLEVBQUUsR0FDdEIsc0JBQ0EsaUNBQ0w7Z0JBQ0RZLFNBQVMsSUFBTUwsZ0JBQWdCSSxPQUFPWCxFQUFFOzBCQUV4Qyw0RUFBQ1E7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FDQ0osV0FBVywwQkFBMkMsT0FBakJFLE9BQU9QLFNBQVMsRUFBQztrREFFckRPLE9BQU9WLElBQUk7Ozs7OztrREFFZCw4REFBQ0wsaURBQU1BLENBQUNZLEdBQUc7d0NBQ1RNLFNBQVM7NENBQUVDLFFBQVFULGlCQUFpQkssT0FBT1gsRUFBRSxHQUFHLE1BQU07d0NBQUU7d0NBQ3hEZ0IsWUFBWTs0Q0FBRUMsVUFBVTt3Q0FBSTtrREFFNUIsNEVBQUNuQix1RkFBV0E7NENBQUNXLFdBQVcsV0FBNEIsT0FBakJFLE9BQU9QLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUl2RCw4REFBQ1AsMERBQWVBOzBDQUNkLDRFQUFDRCxpREFBTUEsQ0FBQ1ksR0FBRztvQ0FFVFUsU0FBUzt3Q0FBRUMsU0FBUztvQ0FBRTtvQ0FDdEJMLFNBQVM7d0NBQUVLLFNBQVM7b0NBQUU7b0NBQ3RCQyxNQUFNO3dDQUFFRCxTQUFTO29DQUFFO29DQUNuQkgsWUFBWTt3Q0FBRUMsVUFBVTtvQ0FBSTtvQ0FDNUJSLFdBQVU7O3dDQUVURSxPQUFPVCxLQUFLLENBQUNRLEdBQUcsQ0FBQyxDQUFDVyxNQUFNQyxzQkFDdkIsOERBQUNUO2dEQUVDSixXQUFXLHVCQUlQSCxPQUhGSyxPQUFPUCxTQUFTLEVBQ2pCLDBEQUtFLE9BSENFLGlCQUFpQkssT0FBT1gsRUFBRSxHQUN0QixpQkFDQSwyQkFDTDtnREFFSHVCLE9BQ0VqQixpQkFBaUJLLE9BQU9YLEVBQUUsR0FDdEIsQ0FBQyxJQUNEO29EQUNFd0IsYUFBYTtvREFDYkMsaUJBQWlCO29EQUNqQkMsV0FBVztvREFDWEMsWUFBWTtvREFDWkMsYUFBYTtnREFDZjswREFHTFA7K0NBdEJJQzs7Ozs7c0RBeUJULDhEQUFDZDs0Q0FDQ0MsV0FBVyw4QkFFVixPQURDSCxpQkFBaUJLLE9BQU9YLEVBQUUsR0FBRyxLQUFLOzs7Ozs7O21DQXBDakNNLGlCQUFpQkssT0FBT1gsRUFBRSxHQUFHLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTFCbERXLE9BQU9YLEVBQUU7Ozs7Ozs7Ozs7QUF5RXhCO0dBaEZ3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3BhY2UtYWdlbmNpZXMudHN4PzRlYjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW50ZXJmYWNlIEFnZW5jeSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZ1tdO1xuICBiZ0NvbG9yOiBzdHJpbmc7XG4gIHRleHRDb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBhZ2VuY2llczogQWdlbmN5W10gPSBbXG4gIHtcbiAgICBpZDogXCJqYXhhXCIsXG4gICAgbmFtZTogXCIyNC4wMFwiLFxuICAgIHRpdGxlOiBbXCJJbnRyb2R1Y3Rpb246IFNjYWxlXCJdLFxuICAgIGJnQ29sb3I6IFwiYmctcmVkLTcwMFwiLFxuICAgIHRleHRDb2xvcjogXCJ0ZXh0LXdoaXRlXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyb3Njb3Ntb3NcIixcbiAgICBuYW1lOiBcIjI0LjAxIFwiLFxuICAgIHRpdGxlOiBbXCJBIE5ldyBQZXJzcGVjdGl2ZSBvbiBhIERlY2FkZXMtb2xkIE15c3RlcnlcIl0sXG4gICAgYmdDb2xvcjogXCJiZy1ibGFja1wiLFxuICAgIHRleHRDb2xvcjogXCJ0ZXh0LXdoaXRlXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJlc2FcIixcbiAgICBuYW1lOiBcIjI0LjAyXCIsXG4gICAgdGl0bGU6IFtcIkVuZ2luZWVyaW5nIEJldHRlciBHZW5lLUVkaXRpbmcgVG9vbHNcIl0sXG4gICAgYmdDb2xvcjogXCJiZy1ncmF5LTMwMFwiLFxuICAgIHRleHRDb2xvcjogXCJ0ZXh0LWJsYWNrXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJuYXNhXCIsXG4gICAgbmFtZTogXCIyNC4wM1wiLFxuICAgIHRpdGxlOiBbXCIgRGVwTWFwIGFuZCBQYXRpZW50IEltcGFjdFwiXSxcbiAgICBiZ0NvbG9yOiBcImJnLWdyYXktMTAwXCIsXG4gICAgdGV4dENvbG9yOiBcInRleHQtYmxhY2tcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwYWNlQWdlbmNpZXMoKSB7XG4gIGNvbnN0IFthY3RpdmVBZ2VuY3ksIHNldEFjdGl2ZUFnZW5jeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiamF4YVwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cbiAgICAgIHthZ2VuY2llcy5tYXAoKGFnZW5jeSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXthZ2VuY3kuaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHthZ2VuY3kuYmdDb2xvcn0gJHtcbiAgICAgICAgICAgIGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkXG4gICAgICAgICAgICAgID8gXCJtZDp3LVs3MCVdIGgtYXV0b1wiXG4gICAgICAgICAgICAgIDogXCJtZDp3LVsxMCVdIGgtWzcwcHhdIG1kOmgtYXV0b1wiXG4gICAgICAgICAgfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuYH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVBZ2VuY3koYWdlbmN5LmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBwdC02IGgtZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSB0cmFja2luZy13aWRlciAke2FnZW5jeS50ZXh0Q29sb3J9IHdoaXRlc3BhY2Utbm93cmFwYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWdlbmN5Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHJvdGF0ZTogYWN0aXZlQWdlbmN5ID09PSBhZ2VuY3kuaWQgPyAxODAgOiAwIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPXtgdy00IGgtNCAke2FnZW5jeS50ZXh0Q29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17YWN0aXZlQWdlbmN5ID09PSBhZ2VuY3kuaWQgPyBcImV4cGFuZGVkXCIgOiBcImNvbGxhcHNlZFwifVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTEgb3ZlcmZsb3ctaGlkZGVuIGZsZXgtZ3Jvd1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FnZW5jeS50aXRsZS5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTN4bCBmb250LWxpZ2h0ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VuY3kudGV4dENvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1kOnRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtcmlnaHQgbWQ6dGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0aW5nTW9kZTogXCJ2ZXJ0aWNhbC1sclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE9yaWVudGF0aW9uOiBcIm1peGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDBkZWcpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2xpbmV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEyIGgtMC41IGJnLXNreS00MDAgbXQtNCAke1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkID8gXCJcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkNoZXZyb25Eb3duIiwiYWdlbmNpZXMiLCJpZCIsIm5hbWUiLCJ0aXRsZSIsImJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJTcGFjZUFnZW5jaWVzIiwiYWN0aXZlQWdlbmN5Iiwic2V0QWN0aXZlQWdlbmN5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYWdlbmN5Iiwib25DbGljayIsInAiLCJhbmltYXRlIiwicm90YXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJleGl0IiwibGluZSIsImluZGV4Iiwic3R5bGUiLCJ3cml0aW5nTW9kZSIsInRleHRPcmllbnRhdGlvbiIsInRyYW5zZm9ybSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./space-agencies.tsx\n"));

/***/ })

});