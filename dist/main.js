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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: #ddd;\\n  font-family: \\\"Barlow\\\", arial, sans-serif;\\n  font-size: 18px;\\n}\\n\\n.hidden {\\n  display: none !important;\\n}\\n\\nh1 {\\n  font-size: 3rem;\\n  font-weight: 700;\\n  text-align: center;\\n  margin-top: 3rem;\\n  margin-bottom: 4rem;\\n}\\n\\nh3 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n}\\n\\nbutton {\\n  width: 40%;\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  font-family: inherit;\\n  font-size: inherit;\\n  font-weight: 700;\\n  background-color: lightgreen;\\n}\\n\\nbutton:hover {\\n  cursor: pointer;\\n  background-color: #189a18;\\n}\\n\\n.wrapper,\\n#weather-data,\\n.col {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.col {\\n  width: 60%;\\n  background-color: rgba(221, 221, 221, 0.507);\\n}\\n\\n.radio-buttons {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n}\\n\\n#get-weather {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.text-inputs {\\n  display: flex;\\n  flex-direction: column;\\n  width: 60%;\\n}\\n.text-inputs label {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 10px;\\n}\\n.text-inputs label p {\\n  width: 30%;\\n}\\n.text-inputs label input {\\n  width: 70%;\\n}\\n\\ninput[type=radio]:hover {\\n  cursor: pointer;\\n}\\n\\n.units {\\n  width: 60%;\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 10px;\\n}\\n\\n.data-container {\\n  display: flex;\\n  justify-content: center;\\n  width: 50%;\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n  border: 1px solid gray;\\n  border-radius: 5px;\\n  box-shadow: 2px 2px 1px black;\\n  background-color: rgba(255, 250, 205, 0.507);\\n}\\n\\n#weather-data {\\n  padding: 2rem;\\n}\\n\\n.info {\\n  margin-bottom: 1rem;\\n}\\n\\n#gh-link {\\n  margin-top: 40px;\\n  margin-bottom: 20px;\\n}\\n\\n#gh-link:visited {\\n  color: inherit;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/addInfo.js":
/*!************************!*\
  !*** ./src/addInfo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addName\": () => (/* binding */ addName),\n/* harmony export */   \"addDescription\": () => (/* binding */ addDescription),\n/* harmony export */   \"addTemp\": () => (/* binding */ addTemp),\n/* harmony export */   \"addWind\": () => (/* binding */ addWind)\n/* harmony export */ });\nconst addName = (data) => {\n  const nameEl = document.createElement(\"h3\");\n  nameEl.textContent = data;\n  nameEl.classList.add(\"info\");\n  return nameEl;\n}\n\nconst addDescription = (data) => {\n  const descriptionEl = document.createElement(\"p\");\n  descriptionEl.textContent = data[0].toUpperCase() + data.slice(1);\n  descriptionEl.classList.add(\"info\");\n  return descriptionEl;\n}\n\nconst addTemp = (data, units) => {\n  const tempEl = document.createElement(\"p\");\n  if (units === 'imperial') {\n    tempEl.textContent = `${data} \\u00B0F`\n  } else {\n  tempEl.textContent = `${data} \\u00B0C`;\n  }\n  tempEl.classList.add(\"info\");\n  return tempEl;\n}\n\nconst addWind = (data, units) => {\n  const windEl = document.createElement(\"p\");\n  if (units === 'imperial') {\n    windEl.textContent = `Wind: ${data} mph`\n  } else {\n  windEl.textContent = `Wind: ${data} m/s`;\n  }\n  windEl.classList.add(\"info\");\n  return windEl;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/addInfo.js?");

/***/ }),

/***/ "./src/fetchGIF.js":
/*!*************************!*\
  !*** ./src/fetchGIF.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherGIF\": () => (/* binding */ getWeatherGIF)\n/* harmony export */ });\nconst getWeatherGIF = (term) => {\n  switch (term) {\n    case 'Clouds':\n      return 'https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif';\n    case 'Clear':\n      return 'https://media.giphy.com/media/WzLDljBpplUvm/giphy.gif';\n    case 'Haze':\n      return 'https://media.giphy.com/media/LmC5rpntvJPxe/giphy.gif';\n    case 'Rain':\n      return 'https://media.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif';\n    case 'Drizzle':\n      return 'https://media.giphy.com/media/xT9GEOg09OuResnZ6g/giphy.gif';\n    case 'Thunderstorm':\n      return 'https://media.giphy.com/media/iN6lLmUb8exMI/giphy.gif';\n    case 'Snow':\n      return 'https://media.giphy.com/media/PkaZUCdVm2c5G/giphy.gif';\n    default:\n      return 'https://i.ytimg.com/vi/r4sdwdtCiXQ/maxresdefault.jpg';\n  }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/fetchGIF.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\nconst _makeUrl = (city, units, state, country) => {\n  if (state && country) {\n    return `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=cf025b14eddc7fc6ffdf78d47f089146&units=${units}`;\n  } else if (state) {\n    return `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=cf025b14eddc7fc6ffdf78d47f089146&units=${units}`;\n  } else {\n    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf025b14eddc7fc6ffdf78d47f089146&units=${units}`;\n  }\n}\n\nconst getWeather = async (city, units, state, country) => {\n  let url = _makeUrl(city, units, state, country);\n  try {\n    const response = await fetch(url, {mode: 'cors'});\n    const data = await response.json();\n    return {\n      name: data.name,\n      param: data.weather[0].main,\n      description: data.weather[0].description,\n      temp: data.main.temp,\n      wind: data.wind.speed\n    };\n  } \n  catch (e) {\n    console.log(e);\n    return {\n      name: \"Error\",\n      description: \"We couldn\\'t find that location.\",\n      temp: \"\"\n    };\n  }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/getWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/main.scss */ \"./src/stylesheets/main.scss\");\n/* harmony import */ var _fetchGIF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchGIF */ \"./src/fetchGIF.js\");\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n/* harmony import */ var _addInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addInfo */ \"./src/addInfo.js\");\n\n\n\n\n\nconst wrapper = document.querySelector(\".wrapper\");\nconst infoContainer = document.querySelector(\".data-container\");\nconst weatherInfo = document.getElementById(\"weather-data\");\nconst weatherForm = document.getElementById(\"get-weather\");\nconst cityInput = document.getElementById(\"city\");\nconst stateInput = document.getElementById(\"state\");\nconst countryInput = document.getElementById(\"country\");\n\nweatherForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  let city = e.target.elements.city.value;\n  let state = e.target.elements.state.value;\n  let country = e.target.elements.country.value;\n  let units = e.target.elements.units.value;\n\n  clearInfo(weatherInfo);\n  clearForm();\n\n  handleSubmit(city, units, state, country);\n})\n\nconst handleSubmit = async (city, units, state, country) => {\n  let weatherData = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_2__.getWeather)(city, units, state, country);\n  fillInfo(weatherData, units);\n\n  let gifTerm = weatherData.param;\n  let gifURL = (0,_fetchGIF__WEBPACK_IMPORTED_MODULE_1__.getWeatherGIF)(gifTerm);\n  wrapper.style.background = `url(${gifURL})`;\n  wrapper.style.backgroundSize = \"cover\";\n}\n\nconst fillInfo = (data, units) => {\n  weatherInfo.appendChild((0,_addInfo__WEBPACK_IMPORTED_MODULE_3__.addName)(data.name));\n  weatherInfo.appendChild((0,_addInfo__WEBPACK_IMPORTED_MODULE_3__.addDescription)(data.description));\n  weatherInfo.appendChild((0,_addInfo__WEBPACK_IMPORTED_MODULE_3__.addTemp)(data.temp, units));\n  weatherInfo.appendChild((0,_addInfo__WEBPACK_IMPORTED_MODULE_3__.addWind)(data.wind, units));\n\n  infoContainer.classList.remove('hidden');\n}\n\nconst clearInfo = (element) => {\n  while (element.firstChild) {\n    element.lastChild.remove();\n  }\n}\n\nconst clearForm = () => {\n  cityInput.value = '';\n  stateInput.value = '';\n  countryInput.value = '';\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;