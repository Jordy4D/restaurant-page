/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Allura-Regular.woff */ \"./src/Allura-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/theatre-551797_1920.jpg */ \"./src/assets/theatre-551797_1920.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'MyFont';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');\n    font-weight: 700;\n    font-style: normal;\n}\n\n:root {\n    --light-gray: rgb(70, 70, 70);\n    --khaki: #FFFDD0;\n}\n\n* {\n    font-family:Georgia, 'Times New Roman', Times, serif;\n    padding:0;\n    margin:0;\n}\n\nbody {\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\nh1, h2 {\n    /* font-family: Arial, Helvetica, sans-serif; */\n    /* font-family: 'MyFont'; */\n    text-align: center;\n    color:black;\n}\n\nh1 {\n    font-family: 'MyFont';\n    margin-top: 16px;\n    font-weight: 800;\n    font-size: 4em;\n}\n\nh2 {\n    font-weight: 700;\n    font-size: 2em;\n}\n\nh3 {\n    font-weight: 600;\n    font-size: 1.75em;\n}\n\nh4 {\n    font-weight: 600;\n    font-size: 1.25em;\n}\n\np {\n    font-size: 18px!important;\n}\n\nimg {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n    align-items: center;\n    max-width: 80%;\n    border: 1px solid black;\n    border-radius: 5px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 48px 0;\n}\n\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: end;\n    /* background-color: black; */\n    height: 50px;\n    width: 100%;\n    margin-bottom: 25px;\n}\n\nnav {\n    display: flex;\n    width: 30%;\n    justify-content: space-evenly;\n    align-items: center;\n    \n}\n\nnav button {\n    font-size: 24px;\n    font-family: 'MyFont';\n    font-weight: 900;\n    background-color: var(--khaki);\n    border:none;\n    border-radius: 8px;\n    /* border-top-left-radius: 8px;\n    border-top-right-radius: 8px; */\n    width: 30%;\n    height: 40px;\n}\n\nnav button:hover {\n    background-color: crimson;\n\n}\n\n.homeContainer, \n.menuContainer,\n.contactContainer {\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-width: 800px;\n    max-width: 800px;\n    background-color: var(--khaki);\n    padding: 0 12px;\n    border-radius: 8px;\n}\n\n.current {\n    background-color: crimson;\n}\n\n.homeContainer h2 {\n    font-size: 24px;\n    margin-top: -8px;\n}\n\n.homeContainer p {\n    margin-top: 42px;\n    margin-bottom: -16px;\n    width: 70%;\n    text-align: center;\n}\n\n.menuContainer h3,\n.contactContainer h3 {\n    margin-top: 30px;\n    margin-bottom: 16px;\n    text-decoration: underline;\n}\n\n.menuContainer p,\n.contactContainer p {\n    margin-bottom: 24px;\n    font-size: .9em;\n    color: var(--light-gray);\n}\n\n.menuContainer {\n    padding-bottom: 24px;\n}\n\n.contactContainer h1 {\n    margin-bottom: 36px;\n}\n\n.contactContainer h5,\n.contactContainer p {\n    width: 60%;\n    text-align: center;\n}\n\n.contactContainer h4 {\n    text-decoration: underline;\n    margin-bottom: 5px;\n\n}\n\n.contactContainer h5 {\n    font-size: 14px;\n    margin-top: 24px;\n    margin-bottom: -12px;\n\n}\n\n\n#footer {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: var(--khaki);\n    height: 50px;\n    width: 100%;\n    margin-top: 25px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_steak_and_late_JPG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/steak-and-late.JPG */ \"./src/assets/steak-and-late.JPG\");\n\n\nfunction contactPageLoad() {\n\n    const homeBtn = document.getElementById('home')\n    const menuBtn = document.getElementById('menu')\n    const contactBtn = document.getElementById('contact')\n\n    homeBtn.classList.remove(\"current\")\n    menuBtn.classList.remove(\"current\")\n    contactBtn.classList.add(\"current\")\n\n    const content = document.getElementById('content')\n    const container = document.createElement('div')\n    container.classList.add('contactContainer')\n\n    const header = document.createElement('h1')\n    const ops = document.createElement('h4')\n    const hours = document.createElement('p')\n    const callUs = document.createElement('h4')\n    const genInq = document.createElement('p')\n    const forRes = document.createElement('h4')\n    const resNum = document.createElement('p')\n    const emailUs = document.createElement('h4')\n    const emailAdr = document.createElement('p')\n    const ourAdr = document.createElement('h4')\n    const address = document.createElement('p')\n\n\n    const mapText = document.createElement('h5')\n    const image = new Image()\n    \n\n    header.textContent = \"Contact Us\";\n    ops.textContent = \"Hours of Operation\"\n    hours.textContent = \"Tues - Sun, 4pm to 2am\"    \n    callUs.textContent = \"For General Inquiries\"\n    genInq.textContent = \"312-555-5555\"\n    forRes.textContent = \"For Reservations\"\n    resNum.textContent = \"312-555-5455\"\n    emailUs.textContent = \"Email Us\"\n    emailAdr.textContent = \"contact@chicagosteakandlate.com\"\n    ourAdr.textContent = \"Find Us\"\n    address.textContent = \"199 N State Street, Chicago, IL 60601\"\n    mapText.textContent = \"We're located n the heart of downtown Chicago, just a few blocks south of the river on North State Street\"\n    image.src = _assets_steak_and_late_JPG__WEBPACK_IMPORTED_MODULE_0__;\n\n\n    content.appendChild(container)\n    container.appendChild(header)\n    container.appendChild(ops)\n    container.appendChild(hours)\n    container.appendChild(callUs)\n    container.appendChild(genInq)\n    container.appendChild(forRes)\n    container.appendChild(resNum)\n    container.appendChild(emailUs)\n    container.appendChild(emailAdr)\n    container.appendChild(ourAdr)\n    container.appendChild(address)\n\n    container.appendChild(mapText)\n    \n    container.appendChild(image)\n\n    return content\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getFooter() {\n\n    const thisYear = new Date()\n\n    const footer = document.getElementById('footer')\n    const copyright = document.createElement('p')\n    copyright.textContent = `\\u00A9 ${thisYear.getFullYear()} Chicago Steak & Late`;\n    footer.appendChild(copyright)\n    \n\n    return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFooter);\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_steakhouse_steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/steakhouse-steak.jpg */ \"./src/assets/steakhouse-steak.jpg\");\n\n\nfunction homePageLoad() {\n\n    const homeBtn = document.getElementById('home')\n    const menuBtn = document.getElementById('menu')\n    const contactBtn = document.getElementById('contact')\n\n    homeBtn.classList.add(\"current\")\n    menuBtn.classList.remove(\"current\")\n    contactBtn.classList.remove(\"current\")\n\n\n    const content = document.getElementById('content')\n    const container = document.createElement('div')\n    container.classList.add('homeContainer')\n\n    const header = document.createElement('h1')\n    const subheader = document.createElement('h2')\n    const image = new Image()\n    const text = document.createElement('p')\n    \n    header.textContent = \"Chicago Steak & Late\";\n    subheader.textContent = \"on State & Lake\";\n    text.textContent = `Welcome to the world's premier late-night steak house located on State & Lake St. in downtown Chicago.`;\n    image.src = _assets_steakhouse_steak_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    content.appendChild(container)\n    container.appendChild(header)\n    container.appendChild(subheader)\n    container.appendChild(text)\n    container.appendChild(image)\n\n    return content\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nconst content = document.getElementById('content')\nconst homeBtn = document.getElementById('home')\nconst menuBtn = document.getElementById('menu')\nconst contactBtn = document.getElementById('contact')\n\n\nhomeBtn.addEventListener('click', function() {\n    content.innerHTML = '';\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\nmenuBtn.addEventListener('click', function() {\n    content.innerHTML = '';\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\ncontactBtn.addEventListener('click', function() {\n    content.innerHTML = '';\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPageLoad() {\n\n    const homeBtn = document.getElementById('home')\n    const menuBtn = document.getElementById('menu')\n    const contactBtn = document.getElementById('contact')\n\n    homeBtn.classList.remove(\"current\")\n    menuBtn.classList.add(\"current\")\n    contactBtn.classList.remove(\"current\")\n\n    const content = document.getElementById('content')\n    const container = document.createElement('div')\n    container.classList.add('menuContainer')\n\n    const header = document.createElement('h1')\n    header.textContent = \"Our Menu\";\n    \n    //starters\n    const appHead = document.createElement('h3')\n    const appOne = document.createElement('h4')\n    const appTwo = document.createElement('h4')\n    const appThree = document.createElement('h4')\n    const appFour = document.createElement('h4')\n    const appOneSub = document.createElement('p')\n    const appTwoSub = document.createElement('p')\n    const appThreeSub = document.createElement('p')\n    const appFourSub = document.createElement('p')\n    \n    appHead.textContent = `Starters`;\n    appOne.textContent = `Wagyu Filet Sliders`;\n    appOneSub.textContent = `Japanese Wagyu | Three $15.99 / Six $29.99`;\n    appTwo.textContent = `Chilled Oysters`;\n    appTwoSub.textContent = `East Coast & West Coast | Six $23.99 / Twelve $39.99 `;\n    appThree.textContent = `American Wagyu Tataki`;\n    appThreeSub.textContent = `Black Garlic Ponzu, Crispy Potatoes | $23.99`;\n    appFour.textContent = `Crispy Calamari`;\n    appFourSub.textContent = `Mediterranean Octopus, Jalapeno Crema | $20.99`;\n    \n    //entrees\n    const entHead = document.createElement('h3')\n    const entOne = document.createElement('h4')\n    const entTwo = document.createElement('h4')\n    const entThree = document.createElement('h4')\n    const entFour = document.createElement('h4')\n    const entOneSub = document.createElement('p')\n    const entTwoSub = document.createElement('p')\n    const entThreeSub = document.createElement('p')\n    const entFourSub = document.createElement('p')\n\n    entHead.textContent = `Entrees`;\n    entOne.textContent = `Bone-In New York Strip`;\n    entOneSub.textContent = `American Wagyu | $94.99`;\n    entTwo.textContent = `Porterhouse`;\n    entTwoSub.textContent = `28-Day Prime Aged | $189.99`;\n    entThree.textContent = `Center-Cut Filet`;\n    entThreeSub.textContent = `Grass-Fed Beef | $69.99`;\n    entFour.textContent = `Whole Roasted Denver Sole`;\n    entFourSub.textContent = `Brown Butter, Champagne | $89.99`;\n\n    //deserts\n    const desHead = document.createElement('h3')\n    const desOne = document.createElement('h4')\n    const desTwo = document.createElement('h4')\n    const desThree = document.createElement('h4')\n    const desFour = document.createElement('h4')\n    const desOneSub = document.createElement('p')\n    const desTwoSub = document.createElement('p')\n    const desThreeSub = document.createElement('p')\n    const desFourSub = document.createElement('p')\n\n    desHead.textContent = `Deserts`;\n    desOne.textContent = `Steak & Late Cheesecake`;\n    desOneSub.textContent = `Cookie Butter, Vanilla Whipped Cream | $13.99`;\n    desTwo.textContent = `Crème Brûlée`;\n    desTwoSub.textContent = `Coffee or Chocolate | $15.99`;\n    desThree.textContent = `Cookies and Cream`;\n    desThreeSub.textContent = `Ganache Ripple, Sweet Cream Ice Cream, Magic Chocolate Shell | $12.99`;\n    desFour.textContent = `Macaron Platter`;\n    desFourSub.textContent = `Blueberry, Cookie Butter, Raspberry, Espresso | $29.99`;\n\n\n    content.appendChild(container)\n    container.appendChild(header)\n    //starters\n    container.appendChild(appHead)\n    container.appendChild(appOne)\n    container.appendChild(appOneSub)\n    container.appendChild(appTwo)\n    container.appendChild(appTwoSub)\n    container.appendChild(appThree)\n    container.appendChild(appThreeSub)\n    container.appendChild(appFour)\n    container.appendChild(appFourSub)\n   \n    // entrees\n    container.appendChild(entHead)\n    container.appendChild(entOne)\n    container.appendChild(entOneSub)\n    container.appendChild(entTwo)\n    container.appendChild(entTwoSub)\n    container.appendChild(entThree)\n    container.appendChild(entThreeSub)\n    container.appendChild(entFour)\n    container.appendChild(entFourSub)\n\n    // deserts\n    container.appendChild(desHead)\n    container.appendChild(desOne)\n    container.appendChild(desOneSub)\n    container.appendChild(desTwo)\n    container.appendChild(desTwoSub)\n    container.appendChild(desThree)\n    container.appendChild(desThreeSub)\n    container.appendChild(desFour)\n    container.appendChild(desFourSub)\n\n    return content\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/Allura-Regular.woff":
/*!*********************************!*\
  !*** ./src/Allura-Regular.woff ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"533b9ee1ec2ab094c66d.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/Allura-Regular.woff?");

/***/ }),

/***/ "./src/assets/steak-and-late.JPG":
/*!***************************************!*\
  !*** ./src/assets/steak-and-late.JPG ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11386b7cdf0d58bf0556.JPG\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/steak-and-late.JPG?");

/***/ }),

/***/ "./src/assets/steakhouse-steak.jpg":
/*!*****************************************!*\
  !*** ./src/assets/steakhouse-steak.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2c2f5e6c95fa9e377bb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/steakhouse-steak.jpg?");

/***/ }),

/***/ "./src/assets/theatre-551797_1920.jpg":
/*!********************************************!*\
  !*** ./src/assets/theatre-551797_1920.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8dfca60d22fd4c898e06.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/theatre-551797_1920.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;