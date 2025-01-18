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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpaceAgencies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst agencies = [\n    {\n        id: \"jaxa\",\n        name: \"24.00\",\n        title: [\n            \"Introduction: Scale\"\n        ],\n        bgColor: \"bg-red-700\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"roscosmos\",\n        name: \"24.01 \",\n        title: [\n            \"A New Perspective on a Decades-old Mystery\"\n        ],\n        bgColor: \"bg-black\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"esa\",\n        name: \"24.02\",\n        title: [\n            \"Engineering Better Gene-Editing Tools\"\n        ],\n        bgColor: \"bg-gray-300\",\n        textColor: \"text-black\"\n    },\n    {\n        id: \"nasa\",\n        name: \"NASA\",\n        title: [\n            \"National\",\n            \"Aeronautics and\",\n            \"Space\",\n            \"Administration\"\n        ],\n        bgColor: \"bg-gray-100\",\n        textColor: \"text-black\"\n    }\n];\nfunction SpaceAgencies() {\n    _s();\n    const [activeAgency, setActiveAgency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"jaxa\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col md:flex-row\",\n        children: agencies.map((agency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(agency.bgColor, \" \").concat(activeAgency === agency.id ? \"md:w-[70%]\" : \"md:w-[10%]\", \" transition-all duration-500 ease-in-out cursor-pointer overflow-hidden\"),\n                onClick: ()=>setActiveAgency(activeAgency === agency.id ? agency.id : agency.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 h-full flex flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm tracking-wider \".concat(agency.textColor, \" whitespace-nowrap\"),\n                                        children: agency.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                        animate: {\n                                            rotate: activeAgency === agency.id ? 180 : 0\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"w-4 h-4 \".concat(agency.textColor)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                    initial: {\n                                        opacity: 0\n                                    },\n                                    animate: {\n                                        opacity: 1\n                                    },\n                                    exit: {\n                                        opacity: 0\n                                    },\n                                    transition: {\n                                        duration: 0.3\n                                    },\n                                    className: \"space-y-1 overflow-hidden flex-grow\",\n                                    children: [\n                                        agency.title.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-4xl font-light \".concat(agency.textColor, \" transition-all duration-500\"),\n                                                style: activeAgency === agency.id ? {} : {\n                                                    writingMode: \"vertical-rl\",\n                                                    textOrientation: \"mixed\",\n                                                    transform: \"rotate(180deg)\",\n                                                    marginLeft: index === 0 ? \"auto\" : \"0\",\n                                                    marginRight: index === agency.title.length - 1 ? \"auto\" : \"0\"\n                                                },\n                                                children: line\n                                            }, index, false, {\n                                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 21\n                                            }, this)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-12 h-0.5 bg-sky-400 mt-4 \".concat(activeAgency === agency.id ? \"\" : \"hidden\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, activeAgency === agency.id ? \"expanded\" : \"collapsed\", true, {\n                                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            }, agency.id, false, {\n                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(SpaceAgencies, \"IM2uPo+IQBYbvdXt/kdbGpHmsTA=\");\n_c = SpaceAgencies;\nvar _c;\n$RefreshReg$(_c, \"SpaceAgencies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NwYWNlLWFnZW5jaWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDdUI7QUFDYjtBQVUxQyxNQUFNSSxXQUFxQjtJQUN6QjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1NBQXNCO1FBQzlCQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1lBQUM7U0FBNkM7UUFDckRDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87WUFBQztTQUF3QztRQUNoREMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1lBQVk7WUFBbUI7WUFBUztTQUFpQjtRQUNqRUMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBUztJQUV6RCxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDWlYsU0FBU1csR0FBRyxDQUFDLENBQUNDLHVCQUNiLDhEQUFDSDtnQkFFQ0MsV0FBVyxHQUNUSCxPQURZSyxPQUFPUixPQUFPLEVBQUMsS0FFNUIsT0FEQ0csaUJBQWlCSyxPQUFPWCxFQUFFLEdBQUcsZUFBZSxjQUM3QztnQkFDRFksU0FBUyxJQUFNTCxnQkFBZ0JELGlCQUFpQkssT0FBT1gsRUFBRSxHQUFHVyxPQUFPWCxFQUFFLEdBQUdXLE9BQU9YLEVBQUU7MEJBRWpGLDRFQUFDUTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNJO3dDQUFFSixXQUFXLDBCQUEyQyxPQUFqQkUsT0FBT1AsU0FBUyxFQUFDO2tEQUFzQk8sT0FBT1YsSUFBSTs7Ozs7O2tEQUMxRiw4REFBQ0wsaURBQU1BLENBQUNZLEdBQUc7d0NBQ1RNLFNBQVM7NENBQUVDLFFBQVFULGlCQUFpQkssT0FBT1gsRUFBRSxHQUFHLE1BQU07d0NBQUU7d0NBQ3hEZ0IsWUFBWTs0Q0FBRUMsVUFBVTt3Q0FBSTtrREFFNUIsNEVBQUNuQix1RkFBV0E7NENBQUNXLFdBQVcsV0FBNEIsT0FBakJFLE9BQU9QLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUl2RCw4REFBQ1AsMERBQWVBOzBDQUNkLDRFQUFDRCxpREFBTUEsQ0FBQ1ksR0FBRztvQ0FFVFUsU0FBUzt3Q0FBRUMsU0FBUztvQ0FBRTtvQ0FDdEJMLFNBQVM7d0NBQUVLLFNBQVM7b0NBQUU7b0NBQ3RCQyxNQUFNO3dDQUFFRCxTQUFTO29DQUFFO29DQUNuQkgsWUFBWTt3Q0FBRUMsVUFBVTtvQ0FBSTtvQ0FDNUJSLFdBQVU7O3dDQUVURSxPQUFPVCxLQUFLLENBQUNRLEdBQUcsQ0FBQyxDQUFDVyxNQUFNQyxzQkFDdkIsOERBQUNUO2dEQUVDSixXQUFXLHVCQUF3QyxPQUFqQkUsT0FBT1AsU0FBUyxFQUFDO2dEQUNuRG1CLE9BQ0VqQixpQkFBaUJLLE9BQU9YLEVBQUUsR0FDdEIsQ0FBQyxJQUNEO29EQUNFd0IsYUFBYTtvREFDYkMsaUJBQWlCO29EQUNqQkMsV0FBVztvREFDWEMsWUFBWUwsVUFBVSxJQUFJLFNBQVM7b0RBQ25DTSxhQUFhTixVQUFVWCxPQUFPVCxLQUFLLENBQUMyQixNQUFNLEdBQUcsSUFBSSxTQUFTO2dEQUM1RDswREFHTFI7K0NBZElDOzs7OztzREFpQlQsOERBQUNkOzRDQUFJQyxXQUFXLDhCQUF5RSxPQUEzQ0gsaUJBQWlCSyxPQUFPWCxFQUFFLEdBQUcsS0FBSzs7Ozs7OzttQ0ExQjNFTSxpQkFBaUJLLE9BQU9YLEVBQUUsR0FBRyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFwQmxEVyxPQUFPWCxFQUFFOzs7Ozs7Ozs7O0FBdUR4QjtHQTlEd0JLO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NwYWNlLWFnZW5jaWVzLnRzeD80ZWI1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5cbmludGVyZmFjZSBBZ2VuY3kge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nW11cbiAgYmdDb2xvcjogc3RyaW5nXG4gIHRleHRDb2xvcjogc3RyaW5nXG59XG5cbmNvbnN0IGFnZW5jaWVzOiBBZ2VuY3lbXSA9IFtcbiAge1xuICAgIGlkOiAnamF4YScsXG4gICAgbmFtZTogJzI0LjAwJyxcbiAgICB0aXRsZTogWydJbnRyb2R1Y3Rpb246IFNjYWxlJ10sXG4gICAgYmdDb2xvcjogJ2JnLXJlZC03MDAnLFxuICAgIHRleHRDb2xvcjogJ3RleHQtd2hpdGUnXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Jvc2Nvc21vcycsXG4gICAgbmFtZTogJzI0LjAxICcsXG4gICAgdGl0bGU6IFsnQSBOZXcgUGVyc3BlY3RpdmUgb24gYSBEZWNhZGVzLW9sZCBNeXN0ZXJ5J10sXG4gICAgYmdDb2xvcjogJ2JnLWJsYWNrJyxcbiAgICB0ZXh0Q29sb3I6ICd0ZXh0LXdoaXRlJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdlc2EnLFxuICAgIG5hbWU6ICcyNC4wMicsXG4gICAgdGl0bGU6IFsnRW5naW5lZXJpbmcgQmV0dGVyIEdlbmUtRWRpdGluZyBUb29scyddLFxuICAgIGJnQ29sb3I6ICdiZy1ncmF5LTMwMCcsXG4gICAgdGV4dENvbG9yOiAndGV4dC1ibGFjaydcbiAgfSxcbiAge1xuICAgIGlkOiAnbmFzYScsXG4gICAgbmFtZTogJ05BU0EnLFxuICAgIHRpdGxlOiBbJ05hdGlvbmFsJywgJ0Flcm9uYXV0aWNzIGFuZCcsICdTcGFjZScsICdBZG1pbmlzdHJhdGlvbiddLFxuICAgIGJnQ29sb3I6ICdiZy1ncmF5LTEwMCcsXG4gICAgdGV4dENvbG9yOiAndGV4dC1ibGFjaydcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGFjZUFnZW5jaWVzKCkge1xuICBjb25zdCBbYWN0aXZlQWdlbmN5LCBzZXRBY3RpdmVBZ2VuY3ldID0gdXNlU3RhdGU8c3RyaW5nPignamF4YScpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XG4gICAgICB7YWdlbmNpZXMubWFwKChhZ2VuY3kpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YWdlbmN5LmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWdlbmN5LmJnQ29sb3J9ICR7XG4gICAgICAgICAgICBhY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZCA/ICdtZDp3LVs3MCVdJyA6ICdtZDp3LVsxMCVdJ1xuICAgICAgICAgIH0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlbmB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQWdlbmN5KGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkID8gYWdlbmN5LmlkIDogYWdlbmN5LmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IGgtZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXNtIHRyYWNraW5nLXdpZGVyICR7YWdlbmN5LnRleHRDb2xvcn0gd2hpdGVzcGFjZS1ub3dyYXBgfT57YWdlbmN5Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHJvdGF0ZTogYWN0aXZlQWdlbmN5ID09PSBhZ2VuY3kuaWQgPyAxODAgOiAwIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPXtgdy00IGgtNCAke2FnZW5jeS50ZXh0Q29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAga2V5PXthY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJ31cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BhY2UteS0xIG92ZXJmbG93LWhpZGRlbiBmbGV4LWdyb3dcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHthZ2VuY3kudGl0bGUubWFwKChsaW5lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cCBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTR4bCBmb250LWxpZ2h0ICR7YWdlbmN5LnRleHRDb2xvcn0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwYH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGluZ01vZGU6ICd2ZXJ0aWNhbC1ybCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3JpZW50YXRpb246ICdtaXhlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBpbmRleCA9PT0gMCA/ICdhdXRvJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBpbmRleCA9PT0gYWdlbmN5LnRpdGxlLmxlbmd0aCAtIDEgPyAnYXV0bycgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5lfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0xMiBoLTAuNSBiZy1za3ktNDAwIG10LTQgJHthY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZCA/ICcnIDogJ2hpZGRlbid9YH0gLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ2hldnJvbkRvd24iLCJhZ2VuY2llcyIsImlkIiwibmFtZSIsInRpdGxlIiwiYmdDb2xvciIsInRleHRDb2xvciIsIlNwYWNlQWdlbmNpZXMiLCJhY3RpdmVBZ2VuY3kiLCJzZXRBY3RpdmVBZ2VuY3kiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJhZ2VuY3kiLCJvbkNsaWNrIiwicCIsImFuaW1hdGUiLCJyb3RhdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwib3BhY2l0eSIsImV4aXQiLCJsaW5lIiwiaW5kZXgiLCJzdHlsZSIsIndyaXRpbmdNb2RlIiwidGV4dE9yaWVudGF0aW9uIiwidHJhbnNmb3JtIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./space-agencies.tsx\n"));

/***/ })

});