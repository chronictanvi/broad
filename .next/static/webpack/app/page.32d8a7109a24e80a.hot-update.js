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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpaceAgencies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst agencies = [\n    {\n        id: \"jaxa\",\n        name: \"24.00\",\n        title: [\n            \"Introduction: Scale\"\n        ],\n        bgColor: \"bg-red-700\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"roscosmos\",\n        name: \"24.01 \",\n        title: [\n            \"A New Perspective on a Decades-old Mystery\"\n        ],\n        bgColor: \"bg-black\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"esa\",\n        name: \"24.02\",\n        title: [\n            \"Engineering Better Gene-Editing Tools\"\n        ],\n        bgColor: \"bg-gray-300\",\n        textColor: \"text-black\"\n    },\n    {\n        id: \"nasa\",\n        name: \"24.03\",\n        title: [\n            \" DepMap and Patient Impact\"\n        ],\n        bgColor: \"bg-gray-100\",\n        textColor: \"text-black\"\n    }\n];\nfunction SpaceAgencies() {\n    _s();\n    const [activeAgency, setActiveAgency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"jaxa\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col md:flex-row\",\n        children: agencies.map((agency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(agency.bgColor, \" \").concat(activeAgency === agency.id ? \"md:w-[90%] h-auto\" : \"md:w-[5%] h-[70px] md:h-auto\", \" transition-all duration-500 ease-in-out cursor-pointer overflow-hidden\"),\n                onClick: ()=>setActiveAgency(agency.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pl-12 pt-6 h-full flex flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm tracking-wider \".concat(agency.textColor, \" whitespace-nowrap\"),\n                                        children: agency.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                        animate: {\n                                            rotate: activeAgency === agency.id ? 180 : 0\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                    initial: {\n                                        opacity: 0\n                                    },\n                                    animate: {\n                                        opacity: 1\n                                    },\n                                    exit: {\n                                        opacity: 0\n                                    },\n                                    transition: {\n                                        duration: 0.3\n                                    },\n                                    className: \"space-y-1 overflow-hidden flex-grow\",\n                                    children: [\n                                        agency.title.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-3xl font-light \".concat(agency.textColor, \" transition-all duration-500\\n                        \").concat(activeAgency === agency.id ? \"md:text-left\" : \"text-right md:text-left\", \"\\n                      \"),\n                                                style: activeAgency === agency.id ? {} : {\n                                                    writingMode: \"vertical-lr\",\n                                                    textOrientation: \"mixed\"\n                                                },\n                                                children: line\n                                            }, index, false, {\n                                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, this)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-12 h-0.5 bg-sky-400 mt-4 \".concat(activeAgency === agency.id ? \"\" : \"hidden\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, activeAgency === agency.id ? \"expanded\" : \"collapsed\", true, {\n                                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            }, agency.id, false, {\n                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(SpaceAgencies, \"6qaBqpBZbJRC9TmSINX2YSrgvB8=\");\n_c = SpaceAgencies;\nvar _c;\n$RefreshReg$(_c, \"SpaceAgencies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NwYWNlLWFnZW5jaWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVpQztBQUN1QjtBQVd4RCxNQUFNRyxXQUFxQjtJQUN6QjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1NBQXNCO1FBQzlCQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1lBQUM7U0FBNkM7UUFDckRDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87WUFBQztTQUF3QztRQUNoREMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1NBQTZCO1FBQ3JDQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFTO0lBRXpELHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNaVixTQUFTVyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ2IsOERBQUNIO2dCQUVDQyxXQUFXLEdBQ1RILE9BRFlLLE9BQU9SLE9BQU8sRUFBQyxLQUk1QixPQUhDRyxpQkFBaUJLLE9BQU9YLEVBQUUsR0FDdEIsc0JBQ0EsZ0NBQ0w7Z0JBQ0RZLFNBQVMsSUFBTUwsZ0JBQWdCSSxPQUFPWCxFQUFFOzBCQUV4Qyw0RUFBQ1E7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FDQ0osV0FBVywwQkFBMkMsT0FBakJFLE9BQU9QLFNBQVMsRUFBQztrREFFckRPLE9BQU9WLElBQUk7Ozs7OztrREFFZCw4REFBQ0osaURBQU1BLENBQUNXLEdBQUc7d0NBQ1RNLFNBQVM7NENBQUVDLFFBQVFULGlCQUFpQkssT0FBT1gsRUFBRSxHQUFHLE1BQU07d0NBQUU7d0NBQ3hEZ0IsWUFBWTs0Q0FBRUMsVUFBVTt3Q0FBSTs7Ozs7Ozs7Ozs7OzBDQU1oQyw4REFBQ25CLDBEQUFlQTswQ0FDZCw0RUFBQ0QsaURBQU1BLENBQUNXLEdBQUc7b0NBRVRVLFNBQVM7d0NBQUVDLFNBQVM7b0NBQUU7b0NBQ3RCTCxTQUFTO3dDQUFFSyxTQUFTO29DQUFFO29DQUN0QkMsTUFBTTt3Q0FBRUQsU0FBUztvQ0FBRTtvQ0FDbkJILFlBQVk7d0NBQUVDLFVBQVU7b0NBQUk7b0NBQzVCUixXQUFVOzt3Q0FFVEUsT0FBT1QsS0FBSyxDQUFDUSxHQUFHLENBQUMsQ0FBQ1csTUFBTUMsc0JBQ3ZCLDhEQUFDVDtnREFFQ0osV0FBVyx1QkFJUEgsT0FIRkssT0FBT1AsU0FBUyxFQUNqQiwwREFLRSxPQUhDRSxpQkFBaUJLLE9BQU9YLEVBQUUsR0FDdEIsaUJBQ0EsMkJBQ0w7Z0RBRUh1QixPQUNFakIsaUJBQWlCSyxPQUFPWCxFQUFFLEdBQ3RCLENBQUMsSUFDRDtvREFDRXdCLGFBQWE7b0RBQ2JDLGlCQUFpQjtnREFDbkI7MERBR0xKOytDQW5CSUM7Ozs7O3NEQXNCVCw4REFBQ2Q7NENBQ0NDLFdBQVcsOEJBRVYsT0FEQ0gsaUJBQWlCSyxPQUFPWCxFQUFFLEdBQUcsS0FBSzs7Ozs7OzttQ0FqQ2pDTSxpQkFBaUJLLE9BQU9YLEVBQUUsR0FBRyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUExQmxEVyxPQUFPWCxFQUFFOzs7Ozs7Ozs7O0FBc0V4QjtHQTdFd0JLO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NwYWNlLWFnZW5jaWVzLnRzeD80ZWI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmludGVyZmFjZSBBZ2VuY3kge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmdbXTtcbiAgYmdDb2xvcjogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgYWdlbmNpZXM6IEFnZW5jeVtdID0gW1xuICB7XG4gICAgaWQ6IFwiamF4YVwiLFxuICAgIG5hbWU6IFwiMjQuMDBcIixcbiAgICB0aXRsZTogW1wiSW50cm9kdWN0aW9uOiBTY2FsZVwiXSxcbiAgICBiZ0NvbG9yOiBcImJnLXJlZC03MDBcIixcbiAgICB0ZXh0Q29sb3I6IFwidGV4dC13aGl0ZVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicm9zY29zbW9zXCIsXG4gICAgbmFtZTogXCIyNC4wMSBcIixcbiAgICB0aXRsZTogW1wiQSBOZXcgUGVyc3BlY3RpdmUgb24gYSBEZWNhZGVzLW9sZCBNeXN0ZXJ5XCJdLFxuICAgIGJnQ29sb3I6IFwiYmctYmxhY2tcIixcbiAgICB0ZXh0Q29sb3I6IFwidGV4dC13aGl0ZVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZXNhXCIsXG4gICAgbmFtZTogXCIyNC4wMlwiLFxuICAgIHRpdGxlOiBbXCJFbmdpbmVlcmluZyBCZXR0ZXIgR2VuZS1FZGl0aW5nIFRvb2xzXCJdLFxuICAgIGJnQ29sb3I6IFwiYmctZ3JheS0zMDBcIixcbiAgICB0ZXh0Q29sb3I6IFwidGV4dC1ibGFja1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibmFzYVwiLFxuICAgIG5hbWU6IFwiMjQuMDNcIixcbiAgICB0aXRsZTogW1wiIERlcE1hcCBhbmQgUGF0aWVudCBJbXBhY3RcIl0sXG4gICAgYmdDb2xvcjogXCJiZy1ncmF5LTEwMFwiLFxuICAgIHRleHRDb2xvcjogXCJ0ZXh0LWJsYWNrXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGFjZUFnZW5jaWVzKCkge1xuICBjb25zdCBbYWN0aXZlQWdlbmN5LCBzZXRBY3RpdmVBZ2VuY3ldID0gdXNlU3RhdGU8c3RyaW5nPihcImpheGFcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XG4gICAgICB7YWdlbmNpZXMubWFwKChhZ2VuY3kpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YWdlbmN5LmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWdlbmN5LmJnQ29sb3J9ICR7XG4gICAgICAgICAgICBhY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZFxuICAgICAgICAgICAgICA/IFwibWQ6dy1bOTAlXSBoLWF1dG9cIlxuICAgICAgICAgICAgICA6IFwibWQ6dy1bNSVdIGgtWzcwcHhdIG1kOmgtYXV0b1wiXG4gICAgICAgICAgfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuYH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVBZ2VuY3koYWdlbmN5LmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMTIgcHQtNiBoLWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtc20gdHJhY2tpbmctd2lkZXIgJHthZ2VuY3kudGV4dENvbG9yfSB3aGl0ZXNwYWNlLW5vd3JhcGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FnZW5jeS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyByb3RhdGU6IGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkID8gMTgwIDogMCB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgey8qIDxDaGV2cm9uRG93biBjbGFzc05hbWU9e2B3LTQgaC00ICR7YWdlbmN5LnRleHRDb2xvcn1gfSAvPiAqL31cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17YWN0aXZlQWdlbmN5ID09PSBhZ2VuY3kuaWQgPyBcImV4cGFuZGVkXCIgOiBcImNvbGxhcHNlZFwifVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTEgb3ZlcmZsb3ctaGlkZGVuIGZsZXgtZ3Jvd1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FnZW5jeS50aXRsZS5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTN4bCBmb250LWxpZ2h0ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VuY3kudGV4dENvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1kOnRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtcmlnaHQgbWQ6dGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0aW5nTW9kZTogXCJ2ZXJ0aWNhbC1sclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE9yaWVudGF0aW9uOiBcIm1peGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5lfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMiBoLTAuNSBiZy1za3ktNDAwIG10LTQgJHtcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZCA/IFwiXCIgOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJhZ2VuY2llcyIsImlkIiwibmFtZSIsInRpdGxlIiwiYmdDb2xvciIsInRleHRDb2xvciIsIlNwYWNlQWdlbmNpZXMiLCJhY3RpdmVBZ2VuY3kiLCJzZXRBY3RpdmVBZ2VuY3kiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJhZ2VuY3kiLCJvbkNsaWNrIiwicCIsImFuaW1hdGUiLCJyb3RhdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwib3BhY2l0eSIsImV4aXQiLCJsaW5lIiwiaW5kZXgiLCJzdHlsZSIsIndyaXRpbmdNb2RlIiwidGV4dE9yaWVudGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./space-agencies.tsx\n"));

/***/ })

});