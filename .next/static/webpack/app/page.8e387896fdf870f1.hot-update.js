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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpaceAgencies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst agencies = [\n    {\n        id: \"roscosmos\",\n        name: \"ROSCOSMOS\",\n        title: [\n            \"Rus\",\n            \"Spa\",\n            \"Age\"\n        ],\n        bgColor: \"bg-black\",\n        textColor: \"text-white\"\n    },\n    {\n        id: \"esa\",\n        name: \"ESA\",\n        title: [\n            \"Euro\",\n            \"Spa\",\n            \"Age\"\n        ],\n        bgColor: \"bg-gray-300\",\n        textColor: \"text-black\"\n    },\n    {\n        id: \"nasa\",\n        name: \"NASA\",\n        title: [\n            \"National\",\n            \"Aeronautics and\",\n            \"Space\",\n            \"Administration\"\n        ],\n        bgColor: \"bg-gray-100\",\n        textColor: \"text-black\"\n    },\n    {\n        id: \"jaxa\",\n        name: \"JAXA\",\n        title: [\n            \"Japan\",\n            \"Aerospace\",\n            \"Exploration\",\n            \"Agency\"\n        ],\n        bgColor: \"bg-blue-900\",\n        textColor: \"text-white\"\n    }\n];\nfunction SpaceAgencies() {\n    _s();\n    const [activeAgency, setActiveAgency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"jaxa\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col md:flex-row\",\n        children: agencies.map((agency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"\".concat(agency.bgColor, \" transition-all duration-500 ease-in-out cursor-pointer overflow-hidden\"),\n                animate: {\n                    flex: activeAgency === agency.id ? 2 : 0.2\n                },\n                onClick: ()=>setActiveAgency(activeAgency === agency.id ? \"jaxa\" : agency.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 h-full flex flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm tracking-wider \".concat(agency.textColor),\n                                        children: agency.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                        animate: {\n                                            rotate: activeAgency === agency.id ? 180 : 0\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"w-4 h-4 \".concat(agency.textColor)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                                children: activeAgency === agency.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                    initial: {\n                                        opacity: 0,\n                                        height: 0\n                                    },\n                                    animate: {\n                                        opacity: 1,\n                                        height: \"auto\"\n                                    },\n                                    exit: {\n                                        opacity: 0,\n                                        height: 0\n                                    },\n                                    transition: {\n                                        duration: 0.3\n                                    },\n                                    className: \"space-y-1 overflow-hidden md:vertical-text\",\n                                    children: [\n                                        agency.title.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-4xl font-light \".concat(agency.textColor),\n                                                children: line\n                                            }, index, false, {\n                                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 23\n                                            }, this)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"accent-line bg-sky-400\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            }, agency.id, false, {\n                fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/yuchi/GitHub Projects/broad/space-agencies.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(SpaceAgencies, \"6qaBqpBZbJRC9TmSINX2YSrgvB8=\");\n_c = SpaceAgencies;\nvar _c;\n$RefreshReg$(_c, \"SpaceAgencies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NwYWNlLWFnZW5jaWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUM7QUFDdUI7QUFDYjtBQVUzQyxNQUFNSSxXQUFxQjtJQUN6QjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztZQUFDO1lBQU87WUFBTztTQUFNO1FBQzVCQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1lBQUM7WUFBUTtZQUFPO1NBQU07UUFDN0JDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87WUFBQztZQUFZO1lBQW1CO1lBQVM7U0FBaUI7UUFDakVDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87WUFBQztZQUFTO1lBQWE7WUFBZTtTQUFTO1FBQ3REQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFTO0lBRXpELHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNaVixTQUFTVyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ2IsOERBQUNmLGlEQUFNQSxDQUFDWSxHQUFHO2dCQUVUQyxXQUFXLEdBQWtCLE9BQWZFLE9BQU9SLE9BQU8sRUFBQztnQkFDN0JTLFNBQVM7b0JBQ1BDLE1BQU1QLGlCQUFpQkssT0FBT1gsRUFBRSxHQUFHLElBQUk7Z0JBQ3pDO2dCQUNBYyxTQUFTLElBQ1BQLGdCQUFnQkQsaUJBQWlCSyxPQUFPWCxFQUFFLEdBQUcsU0FBU1csT0FBT1gsRUFBRTswQkFHakUsNEVBQUNRO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ007d0NBQUVOLFdBQVcsMEJBQTJDLE9BQWpCRSxPQUFPUCxTQUFTO2tEQUNyRE8sT0FBT1YsSUFBSTs7Ozs7O2tEQUVkLDhEQUFDTCxpREFBTUEsQ0FBQ1ksR0FBRzt3Q0FDVEksU0FBUzs0Q0FBRUksUUFBUVYsaUJBQWlCSyxPQUFPWCxFQUFFLEdBQUcsTUFBTTt3Q0FBRTt3Q0FDeERpQixZQUFZOzRDQUFFQyxVQUFVO3dDQUFJO2tEQUU1Qiw0RUFBQ3BCLHVGQUFXQTs0Q0FBQ1csV0FBVyxXQUE0QixPQUFqQkUsT0FBT1AsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSXZELDhEQUFDUCwwREFBZUE7MENBQ2JTLGlCQUFpQkssT0FBT1gsRUFBRSxrQkFDekIsOERBQUNKLGlEQUFNQSxDQUFDWSxHQUFHO29DQUNUVyxTQUFTO3dDQUFFQyxTQUFTO3dDQUFHQyxRQUFRO29DQUFFO29DQUNqQ1QsU0FBUzt3Q0FBRVEsU0FBUzt3Q0FBR0MsUUFBUTtvQ0FBTztvQ0FDdENDLE1BQU07d0NBQUVGLFNBQVM7d0NBQUdDLFFBQVE7b0NBQUU7b0NBQzlCSixZQUFZO3dDQUFFQyxVQUFVO29DQUFJO29DQUM1QlQsV0FBWTs7d0NBRVhFLE9BQU9ULEtBQUssQ0FBQ1EsR0FBRyxDQUFDLENBQUNhLE1BQU1DLHNCQUN2Qiw4REFBQ1Q7Z0RBRUNOLFdBQVcsdUJBQXdDLE9BQWpCRSxPQUFPUCxTQUFTOzBEQUVqRG1COytDQUhJQzs7Ozs7c0RBTVQsOERBQUNoQjs0Q0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXhDcEJFLE9BQU9YLEVBQUU7Ozs7Ozs7Ozs7QUFrRHhCO0dBekR3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3BhY2UtYWdlbmNpZXMudHN4PzRlYjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW50ZXJmYWNlIEFnZW5jeSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZ1tdO1xuICBiZ0NvbG9yOiBzdHJpbmc7XG4gIHRleHRDb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBhZ2VuY2llczogQWdlbmN5W10gPSBbXG4gIHtcbiAgICBpZDogXCJyb3Njb3Ntb3NcIixcbiAgICBuYW1lOiBcIlJPU0NPU01PU1wiLFxuICAgIHRpdGxlOiBbXCJSdXNcIiwgXCJTcGFcIiwgXCJBZ2VcIl0sXG4gICAgYmdDb2xvcjogXCJiZy1ibGFja1wiLFxuICAgIHRleHRDb2xvcjogXCJ0ZXh0LXdoaXRlXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJlc2FcIixcbiAgICBuYW1lOiBcIkVTQVwiLFxuICAgIHRpdGxlOiBbXCJFdXJvXCIsIFwiU3BhXCIsIFwiQWdlXCJdLFxuICAgIGJnQ29sb3I6IFwiYmctZ3JheS0zMDBcIixcbiAgICB0ZXh0Q29sb3I6IFwidGV4dC1ibGFja1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibmFzYVwiLFxuICAgIG5hbWU6IFwiTkFTQVwiLFxuICAgIHRpdGxlOiBbXCJOYXRpb25hbFwiLCBcIkFlcm9uYXV0aWNzIGFuZFwiLCBcIlNwYWNlXCIsIFwiQWRtaW5pc3RyYXRpb25cIl0sXG4gICAgYmdDb2xvcjogXCJiZy1ncmF5LTEwMFwiLFxuICAgIHRleHRDb2xvcjogXCJ0ZXh0LWJsYWNrXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJqYXhhXCIsXG4gICAgbmFtZTogXCJKQVhBXCIsXG4gICAgdGl0bGU6IFtcIkphcGFuXCIsIFwiQWVyb3NwYWNlXCIsIFwiRXhwbG9yYXRpb25cIiwgXCJBZ2VuY3lcIl0sXG4gICAgYmdDb2xvcjogXCJiZy1ibHVlLTkwMFwiLFxuICAgIHRleHRDb2xvcjogXCJ0ZXh0LXdoaXRlXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGFjZUFnZW5jaWVzKCkge1xuICBjb25zdCBbYWN0aXZlQWdlbmN5LCBzZXRBY3RpdmVBZ2VuY3ldID0gdXNlU3RhdGU8c3RyaW5nPihcImpheGFcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XG4gICAgICB7YWdlbmNpZXMubWFwKChhZ2VuY3kpID0+IChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBrZXk9e2FnZW5jeS5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2FnZW5jeS5iZ0NvbG9yfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuYH1cbiAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBmbGV4OiBhY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZCA/IDIgOiAwLjIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgc2V0QWN0aXZlQWdlbmN5KGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkID8gXCJqYXhhXCIgOiBhZ2VuY3kuaWQpXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggaC1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtc20gdHJhY2tpbmctd2lkZXIgJHthZ2VuY3kudGV4dENvbG9yfWB9PlxuICAgICAgICAgICAgICAgICAge2FnZW5jeS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyByb3RhdGU6IGFjdGl2ZUFnZW5jeSA9PT0gYWdlbmN5LmlkID8gMTgwIDogMCB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT17YHctNCBoLTQgJHthZ2VuY3kudGV4dENvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIHthY3RpdmVBZ2VuY3kgPT09IGFnZW5jeS5pZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIGhlaWdodDogXCJhdXRvXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwYWNlLXktMSBvdmVyZmxvdy1oaWRkZW4gbWQ6dmVydGljYWwtdGV4dGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthZ2VuY3kudGl0bGUubWFwKChsaW5lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC00eGwgZm9udC1saWdodCAke2FnZW5jeS50ZXh0Q29sb3J9YH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGluZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2VudC1saW5lIGJnLXNreS00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ2hldnJvbkRvd24iLCJhZ2VuY2llcyIsImlkIiwibmFtZSIsInRpdGxlIiwiYmdDb2xvciIsInRleHRDb2xvciIsIlNwYWNlQWdlbmNpZXMiLCJhY3RpdmVBZ2VuY3kiLCJzZXRBY3RpdmVBZ2VuY3kiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJhZ2VuY3kiLCJhbmltYXRlIiwiZmxleCIsIm9uQ2xpY2siLCJwIiwicm90YXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJoZWlnaHQiLCJleGl0IiwibGluZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./space-agencies.tsx\n"));

/***/ })

});