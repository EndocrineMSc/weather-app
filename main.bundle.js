"use strict";
(self["webpackChunktop_template"] = self["webpackChunktop_template"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Roboto";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}

:root {
  --mariner-50: #f1f7fe;
  --mariner-100: #e2edfc;
  --mariner-200: #bdd9fa;
  --mariner-300: #83bbf6;
  --mariner-400: #4298ee;
  --mariner-500: #1771cc;
  --mariner-600: #0c5fbd;
  --mariner-700: #0b4c99;
  --mariner-800: #0d417f;
  --mariner-900: #113869;
  --mariner-950: #0b2346;

  --fonts: "Roboto", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: var(--fonts);
  background-color: var(--mariner-200);
}

.active.day,
#stats {
  background-color: var(--mariner-300);
}

#content-container {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  width: 98vw;
  height: 98vh;
  align-items: center;
  justify-content: space-around;
}

#header {
  font-size: 4rem;
  height: 4.4rem;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 50px;
  text-align: center;
  border-radius: 10px;
  border: none;
  background-color: inherit;
}

.invalid {
  outline: 2px solid red;
}

#days-container {
  display: flex;
  justify-content: space-around;
  width: 100vw;
}

.day {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4rem;
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  flex: 1;
}

.day-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.day img {
  min-width: 60px;
  max-width: 80px;
  width: max(60px, 80%, 80px);
  height: auto;
}

.condition {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

#stats {
  display: grid;
  position: relative;
  z-index: 2;
  grid-template: 1fr 1fr / 1fr 1fr;
  flex: 1 1;
  width: 100vw;
}

.stat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2rem;
  gap: 12px;
  color: white;
  font-weight: bold;
}

.stat :first-child {
  font-size: 1.6rem;
}

.stat::after {
  position: absolute;
  z-index: -1;
  width: 40vw;
  height: 40vw;
  background-color: var(--mariner-600);
  content: "";
  border-radius: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,+DAAyD;AAC3D;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;;EAEtB,kEAAkE;AACpE;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,SAAS;EACT,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,cAAc;EACd,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,4BAA4B;EAC5B,OAAO;AACT;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,gCAAgC;EAChC,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,SAAS;EACT,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,WAAW;EACX,mBAAmB;AACrB","sourcesContent":["@font-face {\n  font-family: \"Roboto\";\n  src: url(\"./fonts/Roboto-Regular.ttf\") format(\"truetype\");\n}\n\n:root {\n  --mariner-50: #f1f7fe;\n  --mariner-100: #e2edfc;\n  --mariner-200: #bdd9fa;\n  --mariner-300: #83bbf6;\n  --mariner-400: #4298ee;\n  --mariner-500: #1771cc;\n  --mariner-600: #0c5fbd;\n  --mariner-700: #0b4c99;\n  --mariner-800: #0d417f;\n  --mariner-900: #113869;\n  --mariner-950: #0b2346;\n\n  --fonts: \"Roboto\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: var(--fonts);\n  background-color: var(--mariner-200);\n}\n\n.active.day,\n#stats {\n  background-color: var(--mariner-300);\n}\n\n#content-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 0;\n  width: 98vw;\n  height: 98vh;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#header {\n  font-size: 4rem;\n  height: 4.4rem;\n  width: 80%;\n  margin-top: 12px;\n  margin-bottom: 50px;\n  text-align: center;\n  border-radius: 10px;\n  border: none;\n  background-color: inherit;\n}\n\n.invalid {\n  outline: 2px solid red;\n}\n\n#days-container {\n  display: flex;\n  justify-content: space-around;\n  width: 100vw;\n}\n\n.day {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  line-height: 1.4rem;\n  padding: 10px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  flex: 1;\n}\n\n.day-name {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.day img {\n  min-width: 60px;\n  max-width: 80px;\n  width: max(60px, 80%, 80px);\n  height: auto;\n}\n\n.condition {\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n}\n\n#stats {\n  display: grid;\n  position: relative;\n  z-index: 2;\n  grid-template: 1fr 1fr / 1fr 1fr;\n  flex: 1 1;\n  width: 100vw;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n  font-size: 1.4rem;\n  line-height: 2rem;\n  gap: 12px;\n  color: white;\n  font-weight: bold;\n}\n\n.stat :first-child {\n  font-size: 1.6rem;\n}\n\n.stat::after {\n  position: absolute;\n  z-index: -1;\n  width: 40vw;\n  height: 40vw;\n  background-color: var(--mariner-600);\n  content: \"\";\n  border-radius: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _scripts_weather_api_getForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/weather-api/getForecast */ "./src/scripts/weather-api/getForecast.js");
/* harmony import */ var _scripts_weather_api_processForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/weather-api/processForecast */ "./src/scripts/weather-api/processForecast.js");




const locationInput = document.getElementById("header");
const days = document.getElementsByClassName("day");
const maxTempDiv = document.getElementById("max-temp");
const rainChanceDiv = document.getElementById("rain-chance");
const meanTempDiv = document.getElementById("mean-temp");
const rainAmountDiv = document.getElementById("rain-amount");
const DEFAULT_LOCATION = "39.474275,2.830115" // Son Atem Mallorca
const DEFAULT_LOCATION_NAME = "Son Atem";

const WEEKDAYS = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
const MONTHS = [
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
];

locationInput.addEventListener("change", event => {updateForecast(event)});

async function updateForecast(data) {
  const rawForecast = data ? await (0,_scripts_weather_api_getForecast__WEBPACK_IMPORTED_MODULE_1__["default"])(data.target.value) : await (0,_scripts_weather_api_getForecast__WEBPACK_IMPORTED_MODULE_1__["default"])(DEFAULT_LOCATION);
  const processedForecast = (0,_scripts_weather_api_processForecast__WEBPACK_IMPORTED_MODULE_2__["default"])(rawForecast);

  if (processedForecast) {
    setDays(processedForecast);
    setForecastDetails(processedForecast, 0);
    locationInput.value = data ? data.target.value : DEFAULT_LOCATION_NAME;
    locationInput.classList.remove("invalid");
  }
  else {
    locationInput.classList.add("invalid");
  }
}

function setDays(forecasts) {
  for (let i = 0; i < forecasts.length; i++) {
    const dayDiv = days[i];

    const oldImage = dayDiv.getElementsByTagName("img")[0];
    if (oldImage) {
      oldImage.remove();
    }

    dayDiv.dataset.dayIndex = i;

    const currentDay = new Date();
    currentDay.setDate(currentDay.getDate() + i);

    const day = currentDay.getDate();
    const year = currentDay.getFullYear();
    const weekDay = currentDay.getDay();

    const dayName = WEEKDAYS[weekDay];
    const month = MONTHS[currentDay.getMonth()];

    const dayNameDiv = dayDiv.firstElementChild;
    dayNameDiv.textContent = dayName;

    const dateDiv = dayNameDiv.nextElementSibling;
    dateDiv.textContent = `${day}. ${month}. ${year}`;

    const conditionImage = new Image();
    conditionImage.src = forecasts[i].condition.icon;

    const conditionText = dateDiv.nextElementSibling;
    conditionText.textContent = forecasts[i].condition.text;
    dayDiv.insertBefore(conditionImage, conditionText);

    dayDiv.addEventListener("click", (event) => {
      Array.from(days).forEach((div) => {
        if (div === event.target.parentElement) {
          div.classList.add("active");
          setForecastDetails(forecasts, event.target.parentElement.dataset.dayIndex);
        } else if (div === event.target) {
          div.classList.add("active");
          setForecastDetails(forecasts, event.target.dataset.dayIndex);
        } else {
          div.classList.remove("active");
        }
      });
    });
  }
}

function setForecastDetails(processedForecast, dayIndex) {
  const forecast = processedForecast[dayIndex];
  maxTempDiv.lastElementChild.textContent = `${forecast.maxtemp_c}°C`;
  rainChanceDiv.lastElementChild.textContent = `${forecast.daily_chance_of_rain}%`;
  meanTempDiv.lastElementChild.textContent = `${forecast.avgtemp_c}°C`;
  rainAmountDiv.lastElementChild.textContent = `${forecast.totalprecip_mm} mm`;
}

updateForecast();

/***/ }),

/***/ "./src/scripts/weather-api/getForecast.js":
/*!************************************************!*\
  !*** ./src/scripts/weather-api/getForecast.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLocationForecast)
/* harmony export */ });
async function getLocationForecast(
  location = "39.474275,2.830115",
) {
  const apiKey = "b6f3bfef636f4c98ac093255242401";
  location.trim();

  try {
    const forecast = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: "cors" },
    )
      .then((response) => response.json())
      .then((response) => response.forecast.forecastday);
    return forecast;
  } catch (error) {
    alert("Ups, das hat nicht geklappt. Eventuell ist der Ort nicht bekannt");
    return null;
  }
}


/***/ }),

/***/ "./src/scripts/weather-api/processForecast.js":
/*!****************************************************!*\
  !*** ./src/scripts/weather-api/processForecast.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(rawForecast) {
  if (rawForecast) {
    const forecasts = [];
    rawForecast.forEach((day) => {
      forecasts.push(day.day);
    });
    return forecasts;
  }
  return null;
}


/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdGVtcGxhdGUvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b3AtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy93ZWF0aGVyLWFwaS9nZXRGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly90b3AtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy93ZWF0aGVyLWFwaS9wcm9jZXNzRm9yZWNhc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG46cm9vdCB7XG4gIC0tbWFyaW5lci01MDogI2YxZjdmZTtcbiAgLS1tYXJpbmVyLTEwMDogI2UyZWRmYztcbiAgLS1tYXJpbmVyLTIwMDogI2JkZDlmYTtcbiAgLS1tYXJpbmVyLTMwMDogIzgzYmJmNjtcbiAgLS1tYXJpbmVyLTQwMDogIzQyOThlZTtcbiAgLS1tYXJpbmVyLTUwMDogIzE3NzFjYztcbiAgLS1tYXJpbmVyLTYwMDogIzBjNWZiZDtcbiAgLS1tYXJpbmVyLTcwMDogIzBiNGM5OTtcbiAgLS1tYXJpbmVyLTgwMDogIzBkNDE3ZjtcbiAgLS1tYXJpbmVyLTkwMDogIzExMzg2OTtcbiAgLS1tYXJpbmVyLTk1MDogIzBiMjM0NjtcblxuICAtLWZvbnRzOiBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyLTIwMCk7XG59XG5cbi5hY3RpdmUuZGF5LFxuI3N0YXRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lci0zMDApO1xufVxuXG4jY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiA5OHZ3O1xuICBoZWlnaHQ6IDk4dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4jaGVhZGVyIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBoZWlnaHQ6IDQuNHJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5pbnZhbGlkIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcbn1cblxuI2RheXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmRheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBmbGV4OiAxO1xufVxuXG4uZGF5LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5kYXkgaW1nIHtcbiAgbWluLXdpZHRoOiA2MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIHdpZHRoOiBtYXgoNjBweCwgODAlLCA4MHB4KTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNzdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XG4gIGZsZXg6IDEgMTtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uc3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3RhdCA6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLnN0YXQ6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogNDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lci02MDApO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLCtEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7O0VBRXRCLGtFQUFrRTtBQUNwRTs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsT0FBTztBQUNUOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYXJpbmVyLTUwOiAjZjFmN2ZlO1xcbiAgLS1tYXJpbmVyLTEwMDogI2UyZWRmYztcXG4gIC0tbWFyaW5lci0yMDA6ICNiZGQ5ZmE7XFxuICAtLW1hcmluZXItMzAwOiAjODNiYmY2O1xcbiAgLS1tYXJpbmVyLTQwMDogIzQyOThlZTtcXG4gIC0tbWFyaW5lci01MDA6ICMxNzcxY2M7XFxuICAtLW1hcmluZXItNjAwOiAjMGM1ZmJkO1xcbiAgLS1tYXJpbmVyLTcwMDogIzBiNGM5OTtcXG4gIC0tbWFyaW5lci04MDA6ICMwZDQxN2Y7XFxuICAtLW1hcmluZXItOTAwOiAjMTEzODY5O1xcbiAgLS1tYXJpbmVyLTk1MDogIzBiMjM0NjtcXG5cXG4gIC0tZm9udHM6IFxcXCJSb2JvdG9cXFwiLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyLTIwMCk7XFxufVxcblxcbi5hY3RpdmUuZGF5LFxcbiNzdGF0cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyLTMwMCk7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxuICB3aWR0aDogOTh2dztcXG4gIGhlaWdodDogOTh2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBoZWlnaHQ6IDQuNHJlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBvdXRsaW5lOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4jZGF5cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uZGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmRheS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5kYXkgaW1nIHtcXG4gIG1pbi13aWR0aDogNjBweDtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIHdpZHRoOiBtYXgoNjBweCwgODAlLCA4MHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNzdGF0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgZmxleDogMSAxO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc3RhdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBnYXA6IDEycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnN0YXQgOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uc3RhdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogNDB2dztcXG4gIGhlaWdodDogNDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmluZXItNjAwKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL3NjcmlwdHMvd2VhdGhlci1hcGkvZ2V0Rm9yZWNhc3RcIjtcbmltcG9ydCBwcm9jZXNzRm9yZWNhc3QgZnJvbSBcIi4vc2NyaXB0cy93ZWF0aGVyLWFwaS9wcm9jZXNzRm9yZWNhc3RcIjtcblxuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuY29uc3QgZGF5cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkYXlcIik7XG5jb25zdCBtYXhUZW1wRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXgtdGVtcFwiKTtcbmNvbnN0IHJhaW5DaGFuY2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhaW4tY2hhbmNlXCIpO1xuY29uc3QgbWVhblRlbXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYW4tdGVtcFwiKTtcbmNvbnN0IHJhaW5BbW91bnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhaW4tYW1vdW50XCIpO1xuY29uc3QgREVGQVVMVF9MT0NBVElPTiA9IFwiMzkuNDc0Mjc1LDIuODMwMTE1XCIgLy8gU29uIEF0ZW0gTWFsbG9yY2FcbmNvbnN0IERFRkFVTFRfTE9DQVRJT05fTkFNRSA9IFwiU29uIEF0ZW1cIjtcblxuY29uc3QgV0VFS0RBWVMgPSBbXG4gIFwiU29ubnRhZ1wiLFxuICBcIk1vbnRhZ1wiLFxuICBcIkRpZW5zdGFnXCIsXG4gIFwiTWl0dHdvY2hcIixcbiAgXCJEb25uZXJzdGFnXCIsXG4gIFwiRnJlaXRhZ1wiLFxuICBcIlNhbXN0YWdcIixcbl07XG5jb25zdCBNT05USFMgPSBbXG4gIFwiSmFuXCIsXG4gIFwiRmViXCIsXG4gIFwiTcOkclwiLFxuICBcIkFwclwiLFxuICBcIk1haVwiLFxuICBcIkp1blwiLFxuICBcIkp1bFwiLFxuICBcIkF1Z1wiLFxuICBcIlNlcFwiLFxuICBcIk9rdFwiLFxuICBcIk5vdlwiLFxuICBcIkRlelwiLFxuXTtcblxubG9jYXRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHt1cGRhdGVGb3JlY2FzdChldmVudCl9KTtcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3QoZGF0YSkge1xuICBjb25zdCByYXdGb3JlY2FzdCA9IGRhdGEgPyBhd2FpdCBnZXRGb3JlY2FzdChkYXRhLnRhcmdldC52YWx1ZSkgOiBhd2FpdCBnZXRGb3JlY2FzdChERUZBVUxUX0xPQ0FUSU9OKTtcbiAgY29uc3QgcHJvY2Vzc2VkRm9yZWNhc3QgPSBwcm9jZXNzRm9yZWNhc3QocmF3Rm9yZWNhc3QpO1xuXG4gIGlmIChwcm9jZXNzZWRGb3JlY2FzdCkge1xuICAgIHNldERheXMocHJvY2Vzc2VkRm9yZWNhc3QpO1xuICAgIHNldEZvcmVjYXN0RGV0YWlscyhwcm9jZXNzZWRGb3JlY2FzdCwgMCk7XG4gICAgbG9jYXRpb25JbnB1dC52YWx1ZSA9IGRhdGEgPyBkYXRhLnRhcmdldC52YWx1ZSA6IERFRkFVTFRfTE9DQVRJT05fTkFNRTtcbiAgICBsb2NhdGlvbklucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xuICB9XG4gIGVsc2Uge1xuICAgIGxvY2F0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGF5cyhmb3JlY2FzdHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkYXlEaXYgPSBkYXlzW2ldO1xuXG4gICAgY29uc3Qgb2xkSW1hZ2UgPSBkYXlEaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIilbMF07XG4gICAgaWYgKG9sZEltYWdlKSB7XG4gICAgICBvbGRJbWFnZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBkYXlEaXYuZGF0YXNldC5kYXlJbmRleCA9IGk7XG5cbiAgICBjb25zdCBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF5LnNldERhdGUoY3VycmVudERheS5nZXREYXRlKCkgKyBpKTtcblxuICAgIGNvbnN0IGRheSA9IGN1cnJlbnREYXkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3Qgd2Vla0RheSA9IGN1cnJlbnREYXkuZ2V0RGF5KCk7XG5cbiAgICBjb25zdCBkYXlOYW1lID0gV0VFS0RBWVNbd2Vla0RheV07XG4gICAgY29uc3QgbW9udGggPSBNT05USFNbY3VycmVudERheS5nZXRNb250aCgpXTtcblxuICAgIGNvbnN0IGRheU5hbWVEaXYgPSBkYXlEaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgZGF5TmFtZURpdi50ZXh0Q29udGVudCA9IGRheU5hbWU7XG5cbiAgICBjb25zdCBkYXRlRGl2ID0gZGF5TmFtZURpdi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGAke2RheX0uICR7bW9udGh9LiAke3llYXJ9YDtcblxuICAgIGNvbnN0IGNvbmRpdGlvbkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY29uZGl0aW9uSW1hZ2Uuc3JjID0gZm9yZWNhc3RzW2ldLmNvbmRpdGlvbi5pY29uO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRhdGVEaXYubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdHNbaV0uY29uZGl0aW9uLnRleHQ7XG4gICAgZGF5RGl2Lmluc2VydEJlZm9yZShjb25kaXRpb25JbWFnZSwgY29uZGl0aW9uVGV4dCk7XG5cbiAgICBkYXlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgQXJyYXkuZnJvbShkYXlzKS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgaWYgKGRpdiA9PT0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICBzZXRGb3JlY2FzdERldGFpbHMoZm9yZWNhc3RzLCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmRheUluZGV4KTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXYgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIHNldEZvcmVjYXN0RGV0YWlscyhmb3JlY2FzdHMsIGV2ZW50LnRhcmdldC5kYXRhc2V0LmRheUluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Rm9yZWNhc3REZXRhaWxzKHByb2Nlc3NlZEZvcmVjYXN0LCBkYXlJbmRleCkge1xuICBjb25zdCBmb3JlY2FzdCA9IHByb2Nlc3NlZEZvcmVjYXN0W2RheUluZGV4XTtcbiAgbWF4VGVtcERpdi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QubWF4dGVtcF9jfcKwQ2A7XG4gIHJhaW5DaGFuY2VEaXYubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xuICBtZWFuVGVtcERpdi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuYXZndGVtcF9jfcKwQ2A7XG4gIHJhaW5BbW91bnREaXYubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LnRvdGFscHJlY2lwX21tfSBtbWA7XG59XG5cbnVwZGF0ZUZvcmVjYXN0KCk7IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25Gb3JlY2FzdChcbiAgbG9jYXRpb24gPSBcIjM5LjQ3NDI3NSwyLjgzMDExNVwiLFxuKSB7XG4gIGNvbnN0IGFwaUtleSA9IFwiYjZmM2JmZWY2MzZmNGM5OGFjMDkzMjU1MjQyNDAxXCI7XG4gIGxvY2F0aW9uLnRyaW0oKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9LFxuICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheSk7XG4gICAgcmV0dXJuIGZvcmVjYXN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KFwiVXBzLCBkYXMgaGF0IG5pY2h0IGdla2xhcHB0LiBFdmVudHVlbGwgaXN0IGRlciBPcnQgbmljaHQgYmVrYW5udFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJhd0ZvcmVjYXN0KSB7XG4gIGlmIChyYXdGb3JlY2FzdCkge1xuICAgIGNvbnN0IGZvcmVjYXN0cyA9IFtdO1xuICAgIHJhd0ZvcmVjYXN0LmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgZm9yZWNhc3RzLnB1c2goZGF5LmRheSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcmVjYXN0cztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==