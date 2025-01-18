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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpaceAgencies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst agencies = [\n    {\n        id: \"jaxa\",\n        name: \"24.00\",\n        title: [\n            \"Introduction: Scale\"\n        ],\n        bgColor: \"bg-red-700\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"roscosmos\",\n        name: \"24.01 \",\n        title: [\n            \"A New Perspective on a Decades-old Mystery\"\n        ],\n        bgColor: \"bg-black\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"esa\",\n        name: \"24.02\",\n        title: [\n            \"Engineering Better Gene-Editing Tools\"\n        ],\n        bgColor: \"bg-gray-300\",\n        textColor: \"text-black\"\n    },\n    {\n        id: \"nasa\",\n        name: \"NASA\",\n        title: [\n            \"National\",\n            \"Aeronautics and\",\n            \"Space\",\n            \"Administration\"\n        ],\n        bgColor: \"bg-gray-100\",\n        textColor: \"text-black\"\n    }\n];\nfunction SpaceAgencies() {\n    _s();\n    const [activeAgency, setActiveAgency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"jaxa\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col md:flex-row\",\n        children: agencies.map((agency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(agency.bgColor, \" \").concat(activeAgency === agency.id ? \"md:w-[70%]\" : \"md:w-[10%]\", \" transition-all duration-500 ease-in-out cursor-pointer overflow-hidden\"),\n                onClick: ()=>setActiveAgency(activeAgency === agency.id ? agency.id : agency.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 h-full flex flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm tracking-wider \".concat(agency.textColor, \" whitespace-nowrap\"),\n                                        children: agency.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                        animate: {\n                                            rotate: activeAgency === agency.id ? 180 : 0\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"w-4 h-4 \".concat(agency.textColor)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                    initial: {\n                                        opacity: 0\n                                    },\n                                    animate: {\n                                        opacity: 1\n                                    },\n                                    exit: {\n                                        opacity: 0\n                                    },\n                                    transition: {\n                                        duration: 0.3\n                                    },\n                                    className: \"space-y-1 overflow-hidden flex-grow\",\n                                    children: [\n                                        agency.title.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-4xl font-light \".concat(agency.textColor, \" transition-all duration-500\"),\n                                                style: activeAgency === agency.id ? {} : {\n                                                    writingMode: \"vertical-rl\",\n                                                    textOrientation: \"mixed\",\n                                                    transform: \"rotate(-180deg)\",\n                                                    marginLeft: index === 0 ? \"auto\" : \"0\",\n                                                    marginRight: index === agency.title.length - 1 ? \"auto\" : \"0\"\n                                                },\n                                                children: line\n                                            }, index, false, {\n                                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, this)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-12 h-0.5 bg-sky-400 mt-4 \".concat(activeAgency === agency.id ? \"\" : \"hidden\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, activeAgency === agency.id ? \"expanded\" : \"collapsed\", true, {\n                                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            }, agency.id, false, {\n                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(SpaceAgencies, \"6qaBqpBZbJRC9TmSINX2YSrgvB8=\");\n_c = SpaceAgencies;\nvar _c;\n$RefreshReg$(_c, \"SpaceAgencies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NwYWNlLWFnZW5jaWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUM7QUFDdUI7QUFDYjtBQVUzQyxNQUFNSSxXQUFxQjtJQUN6QjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1NBQXNCO1FBQzlCQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1lBQUM7U0FBNkM7UUFDckRDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87WUFBQztTQUF3QztRQUNoREMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1lBQVk7WUFBbUI7WUFBUztTQUFpQjtRQUNqRUMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBUztJQUV6RCxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDWlYsU0FBU1csR0FBRyxDQUFDLENBQUNDLHVCQUNiLDhEQUFDSDtnQkFFQ0MsV0FBVyxHQUNUSCxPQURZSyxPQUFPUixPQUFPLEVBQUMsS0FFNUIsT0FEQ0csaUJBQWlCSyxPQUFPWCxFQUFFLEdBQUcsZUFBZSxjQUM3QztnQkFDRFksU0FBUyxJQUNQTCxnQkFBZ0JELGlCQUFpQkssT0FBT1gsRUFBRSxHQUFHVyxPQUFPWCxFQUFFLEdBQUdXLE9BQU9YLEVBQUU7MEJBR3BFLDRFQUFDUTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNJO3dDQUNDSixXQUFXLDBCQUEyQyxPQUFqQkUsT0FBT1AsU0FBUyxFQUFDO2tEQUVyRE8sT0FBT1YsSUFBSTs7Ozs7O2tEQUVkLDhEQUFDTCxpREFBTUEsQ0FBQ1ksR0FBRzt3Q0FDVE0sU0FBUzs0Q0FBRUMsUUFBUVQsaUJBQWlCSyxPQUFPWCxFQUFFLEdBQUcsTUFBTTt3Q0FBRTt3Q0FDeERnQixZQUFZOzRDQUFFQyxVQUFVO3dDQUFJO2tEQUU1Qiw0RUFBQ25CLHVGQUFXQTs0Q0FBQ1csV0FBVyxXQUE0QixPQUFqQkUsT0FBT1AsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSXZELDhEQUFDUCwwREFBZUE7MENBQ2QsNEVBQUNELGlEQUFNQSxDQUFDWSxHQUFHO29DQUVUVSxTQUFTO3dDQUFFQyxTQUFTO29DQUFFO29DQUN0QkwsU0FBUzt3Q0FBRUssU0FBUztvQ0FBRTtvQ0FDdEJDLE1BQU07d0NBQUVELFNBQVM7b0NBQUU7b0NBQ25CSCxZQUFZO3dDQUFFQyxVQUFVO29DQUFJO29DQUM1QlIsV0FBVTs7d0NBRVRFLE9BQU9ULEtBQUssQ0FBQ1EsR0FBRyxDQUFDLENBQUNXLE1BQU1DLHNCQUN2Qiw4REFBQ1Q7Z0RBRUNKLFdBQVcsdUJBQXdDLE9BQWpCRSxPQUFPUCxTQUFTLEVBQUM7Z0RBQ25EbUIsT0FDRWpCLGlCQUFpQkssT0FBT1gsRUFBRSxHQUN0QixDQUFDLElBQ0Q7b0RBQ0V3QixhQUFhO29EQUNiQyxpQkFBaUI7b0RBQ2pCQyxXQUFXO29EQUNYQyxZQUFZTCxVQUFVLElBQUksU0FBUztvREFDbkNNLGFBQ0VOLFVBQVVYLE9BQU9ULEtBQUssQ0FBQzJCLE1BQU0sR0FBRyxJQUM1QixTQUNBO2dEQUNSOzBEQUdMUjsrQ0FqQklDOzs7OztzREFvQlQsOERBQUNkOzRDQUNDQyxXQUFXLDhCQUVWLE9BRENILGlCQUFpQkssT0FBT1gsRUFBRSxHQUFHLEtBQUs7Ozs7Ozs7bUNBL0JqQ00saUJBQWlCSyxPQUFPWCxFQUFFLEdBQUcsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBMUJsRFcsT0FBT1gsRUFBRTs7Ozs7Ozs7OztBQW9FeEI7R0EzRXdCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcGFjZS1hZ2VuY2llcy50c3g/NGViNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IENoZXZyb25Eb3duIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbnRlcmZhY2UgQWdlbmN5IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nW107XG4gIGJnQ29sb3I6IHN0cmluZztcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IGFnZW5jaWVzOiBBZ2VuY3lbXSA9IFtcbiAge1xuICAgIGlkOiBcImpheGFcIixcbiAgICBuYW1lOiBcIjI0LjAwXCIsXG4gICAgdGl0bGU6IFtcIkludHJvZHVjdGlvbjogU2NhbGVcIl0sXG4gICAgYmdDb2xvcjogXCJiZy1yZWQtNzAwXCIsXG4gICAgdGV4dENvbG9yOiBcInRleHQtd2hpdGVcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInJvc2Nvc21vc1wiLFxuICAgIG5hbWU6IFwiMjQuMDEgXCIsXG4gICAgdGl0bGU6IFtcIkEgTmV3IFBlcnNwZWN0aXZlIG9uIGEgRGVjYWRlcy1vbGQgTXlzdGVyeVwiXSxcbiAgICBiZ0NvbG9yOiBcImJnLWJsYWNrXCIsXG4gICAgdGV4dENvbG9yOiBcInRleHQtd2hpdGVcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcImVzYVwiLFxuICAgIG5hbWU6IFwiMjQuMDJcIixcbiAgICB0aXRsZTogW1wiRW5naW5lZXJpbmcgQmV0dGVyIEdlbmUtRWRpdGluZyBUb29sc1wiXSxcbiAgICBiZ0NvbG9yOiBcImJnLWdyYXktMzAwXCIsXG4gICAgdGV4dENvbG9yOiBcInRleHQtYmxhY2tcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIm5hc2FcIixcbiAgICBuYW1lOiBcIk5BU0FcIixcbiAgICB0aXRsZTogW1wiTmF0aW9uYWxcIiwgXCJBZXJvbmF1dGljcyBhbmRcIiwgXCJTcGFjZVwiLCBcIkFkbWluaXN0cmF0aW9uXCJdLFxuICAgIGJnQ29sb3I6IFwiYmctZ3JheS0xMDBcIixcbiAgICB0ZXh0Q29sb3I6IFwidGV4dC1ibGFja1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BhY2VBZ2VuY2llcygpIHtcbiAgY29uc3QgW2FjdGl2ZUFnZW5jeSwgc2V0QWN0aXZlQWdlbmN5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJqYXhhXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxuICAgICAge2FnZW5jaWVzLm1hcCgoYWdlbmN5KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2FnZW5jeS5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2FnZW5jeS5iZ0NvbG9yfSAke1xuICAgICAgICAgICAgYWN0aXZlQWdlbmN5ID09PSBhZ2VuY3kuaWQgPyBcIm1kOnctWzcwJV1cIiA6IFwibWQ6dy1bMTAlXVwiXG4gICAgICAgICAgfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuYH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgc2V0QWN0aXZlQWdlbmN5KGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkID8gYWdlbmN5LmlkIDogYWdlbmN5LmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IGgtZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSB0cmFja2luZy13aWRlciAke2FnZW5jeS50ZXh0Q29sb3J9IHdoaXRlc3BhY2Utbm93cmFwYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWdlbmN5Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHJvdGF0ZTogYWN0aXZlQWdlbmN5ID09PSBhZ2VuY3kuaWQgPyAxODAgOiAwIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPXtgdy00IGgtNCAke2FnZW5jeS50ZXh0Q29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17YWN0aXZlQWdlbmN5ID09PSBhZ2VuY3kuaWQgPyBcImV4cGFuZGVkXCIgOiBcImNvbGxhcHNlZFwifVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTEgb3ZlcmZsb3ctaGlkZGVuIGZsZXgtZ3Jvd1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FnZW5jeS50aXRsZS5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTR4bCBmb250LWxpZ2h0ICR7YWdlbmN5LnRleHRDb2xvcn0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwYH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGluZ01vZGU6IFwidmVydGljYWwtcmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPcmllbnRhdGlvbjogXCJtaXhlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtMTgwZGVnKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogaW5kZXggPT09IDAgPyBcImF1dG9cIiA6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBhZ2VuY3kudGl0bGUubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bGluZX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTIgaC0wLjUgYmctc2t5LTQwMCBtdC00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQWdlbmN5ID09PSBhZ2VuY3kuaWQgPyBcIlwiIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ2hldnJvbkRvd24iLCJhZ2VuY2llcyIsImlkIiwibmFtZSIsInRpdGxlIiwiYmdDb2xvciIsInRleHRDb2xvciIsIlNwYWNlQWdlbmNpZXMiLCJhY3RpdmVBZ2VuY3kiLCJzZXRBY3RpdmVBZ2VuY3kiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJhZ2VuY3kiLCJvbkNsaWNrIiwicCIsImFuaW1hdGUiLCJyb3RhdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwib3BhY2l0eSIsImV4aXQiLCJsaW5lIiwiaW5kZXgiLCJzdHlsZSIsIndyaXRpbmdNb2RlIiwidGV4dE9yaWVudGF0aW9uIiwidHJhbnNmb3JtIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./space-agencies.tsx\n"));

/***/ })

});