/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/MerriweatherSans-VariableFont_wght.woff */ "./src/assets/MerriweatherSans-VariableFont_wght.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/seoul-nightlife-bg.jpeg */ "./src/assets/seoul-nightlife-bg.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
}

@font-face {
    font-family: 'MyFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');
}

#content {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 100vw;
    height: 100vh;
}

.header {
    background-color: black;
    border: solid 4px #FF0000;
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 80px;
    font-family: 'MyFont';
    font-style: italic;
}

.headerTitle {
    font-size: 32px;
    color: white;
}

.headerButtons {
    display: flex;
    gap: 50px;
}

.button {
    border: none;
    background: none;
    padding: 0;
    font-family: inherit;
    font-size: 18px;
    cursor: pointer;
    color: white;
    margin: 20px;
}

.display {
    grid-row: 2;
    max-height: fit-content;
    overflow-y: auto;
    background-color: var(--white);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.home {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    color: white;
    border: solid 1px black;
    background-color: rgba(255, 0, 0, 0.5);
    font-family: 'MyFont';
}

.menu {
    text-align: center;
    font-family: 'MyFont';
    font-size: 36px;
    margin: 20px;
    color: white;
    background-color: rgba(128, 128, 128, 0.6);
}

.about, .contact {
    /* text-align: center;
    font-size: 36px; */
    /* margin: 20px auto; */
    /* width: 300px; */
    /* color: white; */
    /* background-color: rgba(128, 128, 128, 0.6); */
}

.contact-info, .about-info {
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.about-info {
    background-color: rgba(255, 0, 0, 0.5)
}

.contact-info {
    background-color: rgba(0, 0, 255, 0.5);
}

.title {
    font-size: 36px;
    font-family: 'MyFont';
}

.subtitle {
    font-size: 28px;
    margin: 20px;
}

.para {
    font-size: 24px;
    margin: 20px;
    min-width: 200px;
}

.menu-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
}

.food-container, .drink-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50px, auto);
    align-items: center;
}

.food-title, .drink-title {
    font-family: 'MyFont';
    font-style: italic;
    font-size: 32px;
    text-align: center;
    grid-column: span 2;
    grid-row: 1;
}

.food-menu-card {
    border: 1px solid black;
    font-size: 24px;
    min-width: 200px;
    min-height: 150px;
    max-height: 150px;
    margin: 12px;
    padding: 8px;
    background-color: rgba(255, 0, 0, 0.5)
}

.drink-menu-card {
    border: 1px solid black;
    min-width: 200px;
    min-height: 150px;
    max-height: 150px;
    margin: 12px;
    padding: 8px;
    background-color: rgba(0, 0, 255, 0.5);
}

.empty-menu-card {
    min-width: 200px;
    min-height: 150px;
    max-height: 150px;
    margin: 12px;
    padding: 8px;
}

.menu-item {
    font-size: 24px;
    font-family: 'Courier New', Courier, monospace;
}

.menu-description {
    font-size: 18px;
    text-align: left;
}

.footer {
    border: solid 4px #0000FF;
    grid-row: 3;
    height: 80px;
    background-color: black;
}

.footer-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
}

.address, .hours {
    font-size: 18px;
}

@media only screen and (max-width: 1088px) {
    .header {
        margin: 0;
        padding: 0;
    }

    .headerTitle {
        font-size: 24px;
    }
    
    .headerButtons {
        gap: 10px;
    }

    .button {
        font-size: 14px;
    }

    .title {
        font-size: 24px;
    }

    .subtitle {
        font-size: 20px;
    }

    .para {
        font-size: 18px;
    }

    .menu-container {
        grid-template-columns: 1fr;
    }

    .food-menu-card, .drink-menu-card {
        min-width: 100px;
        margin: 12px 0;
    }
    .menu-item {
        font-size: 18px;
    }

    .menu-description {
        font-size: 14px;
    }

    .footer {
        margin: 0;
        padding: 0;
    }

    .address, .hours {
        font-size: 14px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n}\n\n@font-face {\n    font-family: 'MyFont';\n    src: url('./assets/MerriweatherSans-VariableFont_wght.woff') format('woff');\n}\n\n#content {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    width: 100vw;\n    height: 100vh;\n}\n\n.header {\n    background-color: black;\n    border: solid 4px #FF0000;\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    height: 80px;\n    font-family: 'MyFont';\n    font-style: italic;\n}\n\n.headerTitle {\n    font-size: 32px;\n    color: white;\n}\n\n.headerButtons {\n    display: flex;\n    gap: 50px;\n}\n\n.button {\n    border: none;\n    background: none;\n    padding: 0;\n    font-family: inherit;\n    font-size: 18px;\n    cursor: pointer;\n    color: white;\n    margin: 20px;\n}\n\n.display {\n    grid-row: 2;\n    max-height: fit-content;\n    overflow-y: auto;\n    background-color: var(--white);\n    background-image: url('./assets/seoul-nightlife-bg.jpeg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.home {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); \n    color: white;\n    border: solid 1px black;\n    background-color: rgba(255, 0, 0, 0.5);\n    font-family: 'MyFont';\n}\n\n.menu {\n    text-align: center;\n    font-family: 'MyFont';\n    font-size: 36px;\n    margin: 20px;\n    color: white;\n    background-color: rgba(128, 128, 128, 0.6);\n}\n\n.about, .contact {\n    /* text-align: center;\n    font-size: 36px; */\n    /* margin: 20px auto; */\n    /* width: 300px; */\n    /* color: white; */\n    /* background-color: rgba(128, 128, 128, 0.6); */\n}\n\n.contact-info, .about-info {\n    color: white;\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); \n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n.about-info {\n    background-color: rgba(255, 0, 0, 0.5)\n}\n\n.contact-info {\n    background-color: rgba(0, 0, 255, 0.5);\n}\n\n.title {\n    font-size: 36px;\n    font-family: 'MyFont';\n}\n\n.subtitle {\n    font-size: 28px;\n    margin: 20px;\n}\n\n.para {\n    font-size: 24px;\n    margin: 20px;\n    min-width: 200px;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: minmax(200px, auto);\n}\n\n.food-container, .drink-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: minmax(50px, auto);\n    align-items: center;\n}\n\n.food-title, .drink-title {\n    font-family: 'MyFont';\n    font-style: italic;\n    font-size: 32px;\n    text-align: center;\n    grid-column: span 2;\n    grid-row: 1;\n}\n\n.food-menu-card {\n    border: 1px solid black;\n    font-size: 24px;\n    min-width: 200px;\n    min-height: 150px;\n    max-height: 150px;\n    margin: 12px;\n    padding: 8px;\n    background-color: rgba(255, 0, 0, 0.5)\n}\n\n.drink-menu-card {\n    border: 1px solid black;\n    min-width: 200px;\n    min-height: 150px;\n    max-height: 150px;\n    margin: 12px;\n    padding: 8px;\n    background-color: rgba(0, 0, 255, 0.5);\n}\n\n.empty-menu-card {\n    min-width: 200px;\n    min-height: 150px;\n    max-height: 150px;\n    margin: 12px;\n    padding: 8px;\n}\n\n.menu-item {\n    font-size: 24px;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.menu-description {\n    font-size: 18px;\n    text-align: left;\n}\n\n.footer {\n    border: solid 4px #0000FF;\n    grid-row: 3;\n    height: 80px;\n    background-color: black;\n}\n\n.footer-info {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 80px;\n    color: white;\n    font-family: 'Times New Roman', Times, serif;\n}\n\n.address, .hours {\n    font-size: 18px;\n}\n\n@media only screen and (max-width: 1088px) {\n    .header {\n        margin: 0;\n        padding: 0;\n    }\n\n    .headerTitle {\n        font-size: 24px;\n    }\n    \n    .headerButtons {\n        gap: 10px;\n    }\n\n    .button {\n        font-size: 14px;\n    }\n\n    .title {\n        font-size: 24px;\n    }\n\n    .subtitle {\n        font-size: 20px;\n    }\n\n    .para {\n        font-size: 18px;\n    }\n\n    .menu-container {\n        grid-template-columns: 1fr;\n    }\n\n    .food-menu-card, .drink-menu-card {\n        min-width: 100px;\n        margin: 12px 0;\n    }\n    .menu-item {\n        font-size: 18px;\n    }\n\n    .menu-description {\n        font-size: 14px;\n    }\n\n    .footer {\n        margin: 0;\n        padding: 0;\n    }\n\n    .address, .hours {\n        font-size: 14px;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutClick)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

 

function aboutClick() {
    const about = document.createElement('div');
    about.classList.add('about');
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(about);

    const aboutInfo = document.createElement('div');
    aboutInfo.innerHTML = 
    `<div>
        <div class='title'>About K-Pocha<div>
        <div class='subtitle'>Location<div>
        <div class='para'>1234 Fake Address Place, <div>
        <div>Wonderland CA, 99999<div>
        <div class='subtitle'>Hours<div>
        <div class='para'>Monday-Friday<div> 
        <div class='para'>4PM-1AM<div>
        <div class='para'>Weekends<div>
        <div class='para'>4PM-3AM<div>
     <div>`
    aboutInfo.classList.add('about-info');
    about.appendChild(aboutInfo);

    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].replaceChildren(about);
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactClick)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

 

function contactClick() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(contact);

    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = 
    `<div>
        <div class='title'>Contact Us<div>
        <div class='subtitle'>Email:<div>
        <div class='para'>k-pocha@gmail.com<div>
        <div class='subtitle'>Phone:<div>
        <div class='para'>(123) 456 - 7891<div>
     <div>`
    contactInfo.classList.add('contact-info');
    contact.appendChild(contactInfo); 

    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].replaceChildren(contact);
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
 

const content = document.getElementById('content');

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);

    const footerInfo = document.createElement('div');
    footerInfo.classList.add('footer-info');
    footer.appendChild(footerInfo);

    const address = document.createElement('div');
    address.classList.add('address');
    address.innerHTML = '1234 Fake Address Place, Wonderland CA, 99999'
    footerInfo.appendChild(address);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = 'Mon-Fri: 4PM-1AM Sat-Sun: 4PM-3AM'
    footerInfo.appendChild(hours);
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    const headerTitle = document.createElement('div');
    headerTitle.innerHTML = 'K-Pocha';
    headerTitle.classList.add('headerTitle');
    header.appendChild(headerTitle);

    const headerButtons = document.createElement('div');
    headerButtons.classList.add('headerButtons');
    header.appendChild(headerButtons);

    const homeButton = document.createElement('button');
    homeButton.classList.add('button');
    homeButton.innerHTML = 'Home'
    homeButton.onclick = _home_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    headerButtons.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('button');
    menuButton.innerHTML = 'Menu'
    menuButton.onclick = _menu_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    headerButtons.appendChild(menuButton);

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('button');
    aboutButton.innerHTML = 'About'
    aboutButton.onclick = _about_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    headerButtons.appendChild(aboutButton);

    const contactButton = document.createElement('button');
    contactButton.classList.add('button');
    contactButton.innerHTML = 'Contact'
    contactButton.onclick = _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    headerButtons.appendChild(contactButton);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeClick)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

 

function homeClick() {
    const home = document.createElement('div');
    home.innerHTML = 
    `<div class='title'>Welcome to K-Pocha<div>
     <div class='para'>Our mission is to provide customers the best korean bar experience that money can buy. We have traditional korean bar foods, as well as modern fusion favorites. With a wide selection of drinks, K-Pocha will be your favorite place to kick back with friends!<div>`;
     home.classList.add('home');
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(home);

    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].replaceChildren(home);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



 

const content = document.getElementById('content');

const displayBody = document.createElement('div')
displayBody.classList.add('display');
content.appendChild(displayBody);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayBody);

;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

console.log('hi');


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuClick)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

 

function menuClick() {
    const menu = document.createElement('div');
    menu.innerHTML = 'Menu';
    menu.classList.add('menu');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    menu.appendChild(menuContainer);

    const foodContainer = document.createElement('div');
    foodContainer.classList.add('food-container');
    menuContainer.appendChild(foodContainer);

    const foodTitle = document.createElement('div')
    foodTitle.innerHTML = 'Food'
    foodTitle.classList.add('food-title');
    foodContainer.appendChild(foodTitle);

    const fries = document.createElement('div');
    fries.innerHTML = 
    `<div class='menu-item'>Fries $6<div>
     <div class='menu-description'>Classic french fries. Make super fries(top with choice of beef/chicken/pork, with cheese, and house sauce) for $11<div>`
    fries.classList.add('food-menu-card');
    foodContainer.appendChild(fries);

    const calamari = document.createElement('div');
    calamari.innerHTML = 
    `<div class='menu-item'>Calamari $9<div>
     <div class='menu-description'>Fried calamari served with assortment of sauces<div>`
    calamari.classList.add('food-menu-card');
    foodContainer.appendChild(calamari);

    const chickenWings = document.createElement('div');
    chickenWings.innerHTML = 
    `<div class='menu-item'>Chicken Wings $24<div>
     <div class='menu-description'>Korean style double fried chicken wings. Original, Garlic-Soy, or Sweet-and-Spicy.<div>`
    chickenWings.classList.add('food-menu-card');
    foodContainer.appendChild(chickenWings);

    const wholeChicken = document.createElement('div');
    wholeChicken.innerHTML = 
    `<div class='menu-item'>Whole Fried Chicken $30<div>
     <div class='menu-description'>Korean style double fried chicken wings. Original, Garlic-Soy, or Sweet-and-Spicy.<div>`
    wholeChicken.classList.add('food-menu-card');
    foodContainer.appendChild(wholeChicken);

    const galbi = document.createElement('div');
    galbi.innerHTML = 
    `<div class='menu-item'>Galbi $28<div>
     <div class='menu-description'>Sweet Korean short rib grilled to perfection.<div>`
    galbi.classList.add('food-menu-card');
    foodContainer.appendChild(galbi);

    const pork = document.createElement('div');
    pork.innerHTML = 
    `<div class='menu-item'>Spicy Pork Belly $26<div>
     <div class='menu-description'>Stir fried spicy and sweet pork belly.<div>`
    pork.classList.add('food-menu-card');
    foodContainer.appendChild(pork);

    const tacos = document.createElement('div');
    tacos.innerHTML = 
    `<div class='menu-item'>Tacos(3) $12<div>
     <div class='menu-description'>K-bbq tacos with choice of meat(beef/pork/chicken), topped with korea-style slaw.<div>`
    tacos.classList.add('food-menu-card');
    foodContainer.appendChild(tacos);

    const kimchiPasta = document.createElement('div');
    kimchiPasta.innerHTML = 
    `<div class='menu-item'>Kimchi Carbonara $21<div>
     <div class='menu-description'>Creamy carbonara pasta made with kimchi and pork belly.<div>`
    kimchiPasta.classList.add('food-menu-card');
    foodContainer.appendChild(kimchiPasta);

    const galbiPasta = document.createElement('div');
    galbiPasta.innerHTML = 
    `<div class='menu-item'>Galbi Stroganoff $21<div>
     <div class='menu-description'>Garlicky, creamy, soy-based stroganoff made with korean short rib<div>`
    galbiPasta.classList.add('food-menu-card');
    foodContainer.appendChild(galbiPasta);

    const kimchiStew = document.createElement('div');
    kimchiStew.innerHTML = 
    `<div class='menu-item'>Kimchi Jjigae $19<div>
     <div class='menu-description'>Classic kimchi stew with pork belly, kimchi, onions, tofu.<div>`
    kimchiStew.classList.add('food-menu-card');
    foodContainer.appendChild(kimchiStew);

    const soybean = document.createElement('div');
    soybean.innerHTML = 
    `<div class='menu-item'>Doenjang Jjigae $19<div>
     <div class='menu-description'>Classic soybean stew with beef, tofu, onions, radish.<div>`
    soybean.classList.add('food-menu-card');
    foodContainer.appendChild(soybean);

    const tofu = document.createElement('div');
    tofu.innerHTML = 
    `<div class='menu-item'>Soondubu $19<div>
     <div class='menu-description'>Silken tofu stew served with choice of beef/pork/chicken.<div>`
    tofu.classList.add('food-menu-card');
    foodContainer.appendChild(tofu);

    const ramen = document.createElement('div');
    ramen.innerHTML = 
    `<div class='menu-item'>Budae Jjigae $19<div>
     <div class='menu-description'>Army stew with spam, ramen, kimchi, sausage, onions, cheese.<div>`
    ramen.classList.add('food-menu-card');
    foodContainer.appendChild(ramen);

    const rice = document.createElement('div');
    rice.innerHTML = 
    `<div class='menu-item'>Kimchi Fried Rice $15<div>
     <div class='menu-description'>Kimchi fried rice with choice of beef/pork/chicken/spam. Topped with seaweed and cheese.<div>`
    rice.classList.add('food-menu-card');
    foodContainer.appendChild(rice);

    const tteokbokki = document.createElement('div');
    tteokbokki.innerHTML = 
    `<div class='menu-item'>Tteokbokki $18<div>
     <div class='menu-description'>Spicy rice cakes served with fish cakes, eggs, and vegetables.<div>`;
    tteokbokki.classList.add('food-menu-card');
    foodContainer.appendChild(tteokbokki);

    const cornCheese = document.createElement('div');
    cornCheese.innerHTML = 
    `<div class='menu-item'>Corn Cheese $14<div>
     <div class='menu-description'>Popular Korean side dish consisting of corn, onions, and peppers. Topped with a melted layer of mozzarella cheese.<div>`
    cornCheese.classList.add('food-menu-card');
    foodContainer.appendChild(cornCheese);

    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container');
    menuContainer.appendChild(drinkContainer);

    const drinkTitle = document.createElement('div')
    drinkTitle.innerHTML = 'Drink'
    drinkTitle.classList.add('drink-title');
    drinkContainer.appendChild(drinkTitle);

    const beer = document.createElement('div');
    beer.innerHTML = 
    `<div class='menu-item'>Beer $11<div>
     <div class='menu-description'>Choice of Saporo, Hite, Cass, Heineken.<div>`
    beer.classList.add('drink-menu-card');
    drinkContainer.appendChild(beer);

    const soju = document.createElement('div');
    soju.innerHTML = 
    `<div class='menu-item'>Soju $16<div>
     <div class='menu-description'>Choice of Chamisul, Chumchurum, Won Soju, Jinro<div>`
    soju.classList.add('drink-menu-card');
    drinkContainer.appendChild(soju);

    const fruitSoju = document.createElement('div');
    fruitSoju.innerHTML = 
    `<div class='menu-item'>Flavored Soju $17<div>
     <div class='menu-description'>Choice of Strawberry, Peach, Lemon, Mango<div>`
    fruitSoju.classList.add('drink-menu-card');
    drinkContainer.appendChild(fruitSoju);

    const sake = document.createElement('div');
    sake.innerHTML = 
    `<div class='menu-item'>Sake $18<div>
     <div class='menu-description'>Choice of Kikusui, Kurosawa, Onigarashi, Hot Sake<div>`
    sake.classList.add('drink-menu-card');
    drinkContainer.appendChild(sake);

    const wine = document.createElement('div');
    wine.innerHTML = 
    `<div class='menu-item'>Wine $28<div>
     <div class='menu-description'>Choice of Rice Wine, Red, White, Rose.<div>`
    wine.classList.add('drink-menu-card');
    drinkContainer.appendChild(wine);

    const soda = document.createElement('div');
    soda.innerHTML = 
    `<div class='menu-item'>Soda $7<div>
     <div class='menu-description'>Choice of Cola, Pepsi, Sprite, Dr. Pepper, Root Beer, Orange Fanta, Coke Zero.<div>`
    soda.classList.add('drink-menu-card');
    drinkContainer.appendChild(soda);

    const emptyDrinkCard1 = document.createElement('div');
    emptyDrinkCard1.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard1);

    const emptyDrinkCard2 = document.createElement('div');
    emptyDrinkCard2.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard2);

    const emptyDrinkCard3 = document.createElement('div');
    emptyDrinkCard3.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard3);

    const emptyDrinkCard4 = document.createElement('div');
    emptyDrinkCard4.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard4);

    const emptyDrinkCard5 = document.createElement('div');
    emptyDrinkCard5.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard5);

    const emptyDrinkCard6 = document.createElement('div');
    emptyDrinkCard6.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard6);

    const emptyDrinkCard7 = document.createElement('div');
    emptyDrinkCard7.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard7);

    const emptyDrinkCard8 = document.createElement('div');
    emptyDrinkCard8.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard8);

    const emptyDrinkCard9 = document.createElement('div');
    emptyDrinkCard9.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard9);

    const emptyDrinkCard10 = document.createElement('div');
    emptyDrinkCard10.classList.add('empty-menu-card');
    drinkContainer.appendChild(emptyDrinkCard10);

    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].replaceChildren(menu);
}

/***/ }),

/***/ "./src/assets/MerriweatherSans-VariableFont_wght.woff":
/*!************************************************************!*\
  !*** ./src/assets/MerriweatherSans-VariableFont_wght.woff ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75ef527fa72df860380d.woff";

/***/ }),

/***/ "./src/assets/seoul-nightlife-bg.jpeg":
/*!********************************************!*\
  !*** ./src/assets/seoul-nightlife-bg.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cba7c09772c1a4d45b05.jpeg";

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNktBQW1FO0FBQy9HLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsMEJBQTBCO0FBQzFCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsbURBQW1EO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FB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QUNBO0FBQ2xCOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7QUFFMUIscURBQVM7QUFDVCxzREFBWTtBQUNaLHNEQUFZOztBQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCcUM7QUFDaEI7O0FBRU47QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlEQUFXO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak9BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvTWVycml3ZWF0aGVyU2Fucy1WYXJpYWJsZUZvbnRfd2dodC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvc2VvdWwtbmlnaHRsaWZlLWJnLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYnKTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IHNvbGlkIDRweCAjRkYwMDAwO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmhlYWRlclRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyQnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZGlzcGxheSB7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5ob21lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250Jztcbn1cblxuLm1lbnUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYpO1xufVxuXG4uYWJvdXQsIC5jb250YWN0IHtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNnB4OyAqL1xuICAgIC8qIG1hcmdpbjogMjBweCBhdXRvOyAqL1xuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYpOyAqL1xufVxuXG4uY29udGFjdC1pbmZvLCAuYWJvdXQtaW5mbyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmFib3V0LWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpXG59XG5cbi5jb250YWN0LWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLnBhcmEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMDBweCwgYXV0byk7XG59XG5cbi5mb29kLWNvbnRhaW5lciwgLmRyaW5rLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNTBweCwgYXV0byk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvb2QtdGl0bGUsIC5kcmluay10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgZ3JpZC1yb3c6IDE7XG59XG5cbi5mb29kLW1lbnUtY2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAxMnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KVxufVxuXG4uZHJpbmstbWVudS1jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XG59XG5cbi5lbXB0eS1tZW51LWNhcmQge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAxMnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5tZW51LWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZvb3RlciB7XG4gICAgYm9yZGVyOiBzb2xpZCA0cHggIzAwMDBGRjtcbiAgICBncmlkLXJvdzogMztcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5mb290ZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogODBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbi5hZGRyZXNzLCAuaG91cnMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDg4cHgpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5oZWFkZXJUaXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlckJ1dHRvbnMge1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5wYXJhIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5mb29kLW1lbnUtY2FyZCwgLmRyaW5rLW1lbnUtY2FyZCB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbjogMTJweCAwO1xuICAgIH1cbiAgICAubWVudS1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5tZW51LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmFkZHJlc3MsIC5ob3VycyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJEQUEyRTtBQUMvRTs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5Qix5REFBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osMENBQTBDO0FBQzlDOztBQUVBO0lBQ0k7c0JBQ2tCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL01lcnJpd2VhdGhlclNhbnMtVmFyaWFibGVGb250X3dnaHQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogc29saWQgNHB4ICNGRjAwMDA7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5oZWFkZXJUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyQnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9zZW91bC1uaWdodGxpZmUtYmcuanBlZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG59XFxuXFxuLm1lbnUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYpO1xcbn1cXG5cXG4uYWJvdXQsIC5jb250YWN0IHtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDM2cHg7ICovXFxuICAgIC8qIG1hcmdpbjogMjBweCBhdXRvOyAqL1xcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYpOyAqL1xcbn1cXG5cXG4uY29udGFjdC1pbmZvLCAuYWJvdXQtaW5mbyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcXG4gICAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dC1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSlcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5wYXJhIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjAwcHgsIGF1dG8pO1xcbn1cXG5cXG4uZm9vZC1jb250YWluZXIsIC5kcmluay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDUwcHgsIGF1dG8pO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vZC10aXRsZSwgLmRyaW5rLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmZvb2QtbWVudS1jYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXJnaW46IDEycHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSlcXG59XFxuXFxuLmRyaW5rLW1lbnUtY2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIG1hcmdpbjogMTJweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KTtcXG59XFxuXFxuLmVtcHR5LW1lbnUtY2FyZCB7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgbWFyZ2luOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbi5tZW51LWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggIzAwMDBGRjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5mb290ZXItaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbi5hZGRyZXNzLCAuaG91cnMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4OHB4KSB7XFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyVGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGVyQnV0dG9ucyB7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcblxcbiAgICAuc3VidGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wYXJhIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcblxcbiAgICAubWVudS1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLmZvb2QtbWVudS1jYXJkLCAuZHJpbmstbWVudS1jYXJkIHtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgICAgICBtYXJnaW46IDEycHggMDtcXG4gICAgfVxcbiAgICAubWVudS1pdGVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcblxcbiAgICAubWVudS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgLmZvb3RlciB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC5hZGRyZXNzLCAuaG91cnMge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGRpc3BsYXlCb2R5IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0Q2xpY2soKSB7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICAgIGRpc3BsYXlCb2R5LmFwcGVuZENoaWxkKGFib3V0KTtcblxuICAgIGNvbnN0IGFib3V0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0SW5mby5pbm5lckhUTUwgPSBcbiAgICBgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPkFib3V0IEstUG9jaGE8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzdWJ0aXRsZSc+TG9jYXRpb248ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXJhJz4xMjM0IEZha2UgQWRkcmVzcyBQbGFjZSwgPGRpdj5cbiAgICAgICAgPGRpdj5Xb25kZXJsYW5kIENBLCA5OTk5OTxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3N1YnRpdGxlJz5Ib3VyczxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3BhcmEnPk1vbmRheS1GcmlkYXk8ZGl2PiBcbiAgICAgICAgPGRpdiBjbGFzcz0ncGFyYSc+NFBNLTFBTTxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3BhcmEnPldlZWtlbmRzPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncGFyYSc+NFBNLTNBTTxkaXY+XG4gICAgIDxkaXY+YFxuICAgIGFib3V0SW5mby5jbGFzc0xpc3QuYWRkKCdhYm91dC1pbmZvJyk7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRJbmZvKTtcblxuICAgIGRpc3BsYXlCb2R5LnJlcGxhY2VDaGlsZHJlbihhYm91dCk7XG59IiwiaW1wb3J0IGRpc3BsYXlCb2R5IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RDbGljaygpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgZGlzcGxheUJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+Q29udGFjdCBVczxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3N1YnRpdGxlJz5FbWFpbDo8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXJhJz5rLXBvY2hhQGdtYWlsLmNvbTxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3N1YnRpdGxlJz5QaG9uZTo8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXJhJz4oMTIzKSA0NTYgLSA3ODkxPGRpdj5cbiAgICAgPGRpdj5gXG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7IFxuXG4gICAgZGlzcGxheUJvZHkucmVwbGFjZUNoaWxkcmVuKGNvbnRhY3QpO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnOyBcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgY29uc3QgZm9vdGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckluZm8uY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWluZm8nKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVySW5mbyk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSAnMTIzNCBGYWtlIEFkZHJlc3MgUGxhY2UsIFdvbmRlcmxhbmQgQ0EsIDk5OTk5J1xuICAgIGZvb3RlckluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gJ01vbi1Gcmk6IDRQTS0xQU0gU2F0LVN1bjogNFBNLTNBTSdcbiAgICBmb290ZXJJbmZvLmFwcGVuZENoaWxkKGhvdXJzKTtcbn0iLCJpbXBvcnQgbWVudUNsaWNrIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgYWJvdXRDbGljayBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCBjb250YWN0Q2xpY2sgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBob21lQ2xpY2sgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRpdGxlLmlubmVySFRNTCA9ICdLLVBvY2hhJztcbiAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUaXRsZScpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgICBjb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCdXR0b25zJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckJ1dHRvbnMpO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgPSAnSG9tZSdcbiAgICBob21lQnV0dG9uLm9uY2xpY2sgPSBob21lQ2xpY2s7XG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdXR0b24uaW5uZXJIVE1MID0gJ01lbnUnXG4gICAgbWVudUJ1dHRvbi5vbmNsaWNrID0gbWVudUNsaWNrO1xuICAgIGhlYWRlckJ1dHRvbnMuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGFib3V0QnV0dG9uLmlubmVySFRNTCA9ICdBYm91dCdcbiAgICBhYm91dEJ1dHRvbi5vbmNsaWNrID0gYWJvdXRDbGljaztcbiAgICBoZWFkZXJCdXR0b25zLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdXR0b24uaW5uZXJIVE1MID0gJ0NvbnRhY3QnXG4gICAgY29udGFjdEJ1dHRvbi5vbmNsaWNrID0gY29udGFjdENsaWNrO1xuICAgIGhlYWRlckJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG59XG4iLCJpbXBvcnQgZGlzcGxheUJvZHkgZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnOyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNsaWNrKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSd0aXRsZSc+V2VsY29tZSB0byBLLVBvY2hhPGRpdj5cbiAgICAgPGRpdiBjbGFzcz0ncGFyYSc+T3VyIG1pc3Npb24gaXMgdG8gcHJvdmlkZSBjdXN0b21lcnMgdGhlIGJlc3Qga29yZWFuIGJhciBleHBlcmllbmNlIHRoYXQgbW9uZXkgY2FuIGJ1eS4gV2UgaGF2ZSB0cmFkaXRpb25hbCBrb3JlYW4gYmFyIGZvb2RzLCBhcyB3ZWxsIGFzIG1vZGVybiBmdXNpb24gZmF2b3JpdGVzLiBXaXRoIGEgd2lkZSBzZWxlY3Rpb24gb2YgZHJpbmtzLCBLLVBvY2hhIHdpbGwgYmUgeW91ciBmYXZvcml0ZSBwbGFjZSB0byBraWNrIGJhY2sgd2l0aCBmcmllbmRzITxkaXY+YDtcbiAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgZGlzcGxheUJvZHkuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgICBkaXNwbGF5Qm9keS5yZXBsYWNlQ2hpbGRyZW4oaG9tZSk7XG59IiwiaW1wb3J0IGhvbWVDbGljayBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnOyBcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGRpc3BsYXlCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpc3BsYXlCb2R5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheUJvZHkpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Qm9keVxuXG5ob21lQ2xpY2soKTtcbmNyZWF0ZUhlYWRlcigpO1xuY3JlYXRlRm9vdGVyKCk7XG5cbmNvbnNvbGUubG9nKCdoaScpO1xuIiwiaW1wb3J0IGRpc3BsYXlCb2R5IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVDbGljaygpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb29kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb29kLWNvbnRhaW5lcicpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb29kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb2RUaXRsZS5pbm5lckhUTUwgPSAnRm9vZCdcbiAgICBmb29kVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9vZC10aXRsZScpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZFRpdGxlKTtcblxuICAgIGNvbnN0IGZyaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJpZXMuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+RnJpZXMgJDY8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5DbGFzc2ljIGZyZW5jaCBmcmllcy4gTWFrZSBzdXBlciBmcmllcyh0b3Agd2l0aCBjaG9pY2Ugb2YgYmVlZi9jaGlja2VuL3BvcmssIHdpdGggY2hlZXNlLCBhbmQgaG91c2Ugc2F1Y2UpIGZvciAkMTE8ZGl2PmBcbiAgICBmcmllcy5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJpZXMpO1xuXG4gICAgY29uc3QgY2FsYW1hcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYWxhbWFyaS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5DYWxhbWFyaSAkOTxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkZyaWVkIGNhbGFtYXJpIHNlcnZlZCB3aXRoIGFzc29ydG1lbnQgb2Ygc2F1Y2VzPGRpdj5gXG4gICAgY2FsYW1hcmkuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbGFtYXJpKTtcblxuICAgIGNvbnN0IGNoaWNrZW5XaW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWNrZW5XaW5ncy5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5DaGlja2VuIFdpbmdzICQyNDxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPktvcmVhbiBzdHlsZSBkb3VibGUgZnJpZWQgY2hpY2tlbiB3aW5ncy4gT3JpZ2luYWwsIEdhcmxpYy1Tb3ksIG9yIFN3ZWV0LWFuZC1TcGljeS48ZGl2PmBcbiAgICBjaGlja2VuV2luZ3MuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5XaW5ncyk7XG5cbiAgICBjb25zdCB3aG9sZUNoaWNrZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aG9sZUNoaWNrZW4uaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+V2hvbGUgRnJpZWQgQ2hpY2tlbiAkMzA8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5Lb3JlYW4gc3R5bGUgZG91YmxlIGZyaWVkIGNoaWNrZW4gd2luZ3MuIE9yaWdpbmFsLCBHYXJsaWMtU295LCBvciBTd2VldC1hbmQtU3BpY3kuPGRpdj5gXG4gICAgd2hvbGVDaGlja2VuLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aG9sZUNoaWNrZW4pO1xuXG4gICAgY29uc3QgZ2FsYmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYWxiaS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5HYWxiaSAkMjg8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5Td2VldCBLb3JlYW4gc2hvcnQgcmliIGdyaWxsZWQgdG8gcGVyZmVjdGlvbi48ZGl2PmBcbiAgICBnYWxiaS5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FsYmkpO1xuXG4gICAgY29uc3QgcG9yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcmsuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+U3BpY3kgUG9yayBCZWxseSAkMjY8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5TdGlyIGZyaWVkIHNwaWN5IGFuZCBzd2VldCBwb3JrIGJlbGx5LjxkaXY+YFxuICAgIHBvcmsuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcmspO1xuXG4gICAgY29uc3QgdGFjb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWNvcy5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5UYWNvcygzKSAkMTI8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5LLWJicSB0YWNvcyB3aXRoIGNob2ljZSBvZiBtZWF0KGJlZWYvcG9yay9jaGlja2VuKSwgdG9wcGVkIHdpdGgga29yZWEtc3R5bGUgc2xhdy48ZGl2PmBcbiAgICB0YWNvcy5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFjb3MpO1xuXG4gICAgY29uc3Qga2ltY2hpUGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBraW1jaGlQYXN0YS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5LaW1jaGkgQ2FyYm9uYXJhICQyMTxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkNyZWFteSBjYXJib25hcmEgcGFzdGEgbWFkZSB3aXRoIGtpbWNoaSBhbmQgcG9yayBiZWxseS48ZGl2PmBcbiAgICBraW1jaGlQYXN0YS5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoa2ltY2hpUGFzdGEpO1xuXG4gICAgY29uc3QgZ2FsYmlQYXN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbGJpUGFzdGEuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+R2FsYmkgU3Ryb2dhbm9mZiAkMjE8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5HYXJsaWNreSwgY3JlYW15LCBzb3ktYmFzZWQgc3Ryb2dhbm9mZiBtYWRlIHdpdGgga29yZWFuIHNob3J0IHJpYjxkaXY+YFxuICAgIGdhbGJpUGFzdGEuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbGJpUGFzdGEpO1xuXG4gICAgY29uc3Qga2ltY2hpU3RldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtpbWNoaVN0ZXcuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+S2ltY2hpIEpqaWdhZSAkMTk8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5DbGFzc2ljIGtpbWNoaSBzdGV3IHdpdGggcG9yayBiZWxseSwga2ltY2hpLCBvbmlvbnMsIHRvZnUuPGRpdj5gXG4gICAga2ltY2hpU3Rldy5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoa2ltY2hpU3Rldyk7XG5cbiAgICBjb25zdCBzb3liZWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc295YmVhbi5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5Eb2VuamFuZyBKamlnYWUgJDE5PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+Q2xhc3NpYyBzb3liZWFuIHN0ZXcgd2l0aCBiZWVmLCB0b2Z1LCBvbmlvbnMsIHJhZGlzaC48ZGl2PmBcbiAgICBzb3liZWFuLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChzb3liZWFuKTtcblxuICAgIGNvbnN0IHRvZnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Z1LmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPlNvb25kdWJ1ICQxOTxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPlNpbGtlbiB0b2Z1IHN0ZXcgc2VydmVkIHdpdGggY2hvaWNlIG9mIGJlZWYvcG9yay9jaGlja2VuLjxkaXY+YFxuICAgIHRvZnUuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZnUpO1xuXG4gICAgY29uc3QgcmFtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYW1lbi5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5CdWRhZSBKamlnYWUgJDE5PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+QXJteSBzdGV3IHdpdGggc3BhbSwgcmFtZW4sIGtpbWNoaSwgc2F1c2FnZSwgb25pb25zLCBjaGVlc2UuPGRpdj5gXG4gICAgcmFtZW4uY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhbWVuKTtcblxuICAgIGNvbnN0IHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWNlLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPktpbWNoaSBGcmllZCBSaWNlICQxNTxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPktpbWNoaSBmcmllZCByaWNlIHdpdGggY2hvaWNlIG9mIGJlZWYvcG9yay9jaGlja2VuL3NwYW0uIFRvcHBlZCB3aXRoIHNlYXdlZWQgYW5kIGNoZWVzZS48ZGl2PmBcbiAgICByaWNlLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWNlKTtcblxuICAgIGNvbnN0IHR0ZW9rYm9ra2kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0dGVva2Jva2tpLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPlR0ZW9rYm9ra2kgJDE4PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+U3BpY3kgcmljZSBjYWtlcyBzZXJ2ZWQgd2l0aCBmaXNoIGNha2VzLCBlZ2dzLCBhbmQgdmVnZXRhYmxlcy48ZGl2PmA7XG4gICAgdHRlb2tib2traS5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQodHRlb2tib2traSk7XG5cbiAgICBjb25zdCBjb3JuQ2hlZXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29ybkNoZWVzZS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5Db3JuIENoZWVzZSAkMTQ8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5Qb3B1bGFyIEtvcmVhbiBzaWRlIGRpc2ggY29uc2lzdGluZyBvZiBjb3JuLCBvbmlvbnMsIGFuZCBwZXBwZXJzLiBUb3BwZWQgd2l0aCBhIG1lbHRlZCBsYXllciBvZiBtb3p6YXJlbGxhIGNoZWVzZS48ZGl2PmBcbiAgICBjb3JuQ2hlZXNlLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb3JuQ2hlZXNlKTtcblxuICAgIGNvbnN0IGRyaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJpbmstY29udGFpbmVyJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkcmlua1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkcmlua1RpdGxlLmlubmVySFRNTCA9ICdEcmluaydcbiAgICBkcmlua1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLXRpdGxlJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtUaXRsZSk7XG5cbiAgICBjb25zdCBiZWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmVlci5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5CZWVyICQxMTxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkNob2ljZSBvZiBTYXBvcm8sIEhpdGUsIENhc3MsIEhlaW5la2VuLjxkaXY+YFxuICAgIGJlZXIuY2xhc3NMaXN0LmFkZCgnZHJpbmstbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoYmVlcik7XG5cbiAgICBjb25zdCBzb2p1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29qdS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5Tb2p1ICQxNjxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkNob2ljZSBvZiBDaGFtaXN1bCwgQ2h1bWNodXJ1bSwgV29uIFNvanUsIEppbnJvPGRpdj5gXG4gICAgc29qdS5jbGFzc0xpc3QuYWRkKCdkcmluay1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb2p1KTtcblxuICAgIGNvbnN0IGZydWl0U29qdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZydWl0U29qdS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5GbGF2b3JlZCBTb2p1ICQxNzxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkNob2ljZSBvZiBTdHJhd2JlcnJ5LCBQZWFjaCwgTGVtb24sIE1hbmdvPGRpdj5gXG4gICAgZnJ1aXRTb2p1LmNsYXNzTGlzdC5hZGQoJ2RyaW5rLW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGZydWl0U29qdSk7XG5cbiAgICBjb25zdCBzYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2FrZS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5TYWtlICQxODxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkNob2ljZSBvZiBLaWt1c3VpLCBLdXJvc2F3YSwgT25pZ2FyYXNoaSwgSG90IFNha2U8ZGl2PmBcbiAgICBzYWtlLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHNha2UpO1xuXG4gICAgY29uc3Qgd2luZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmUuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+V2luZSAkMjg8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5DaG9pY2Ugb2YgUmljZSBXaW5lLCBSZWQsIFdoaXRlLCBSb3NlLjxkaXY+YFxuICAgIHdpbmUuY2xhc3NMaXN0LmFkZCgnZHJpbmstbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZSk7XG5cbiAgICBjb25zdCBzb2RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29kYS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5Tb2RhICQ3PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+Q2hvaWNlIG9mIENvbGEsIFBlcHNpLCBTcHJpdGUsIERyLiBQZXBwZXIsIFJvb3QgQmVlciwgT3JhbmdlIEZhbnRhLCBDb2tlIFplcm8uPGRpdj5gXG4gICAgc29kYS5jbGFzc0xpc3QuYWRkKCdkcmluay1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb2RhKTtcblxuICAgIGNvbnN0IGVtcHR5RHJpbmtDYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5RHJpbmtDYXJkMS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eURyaW5rQ2FyZDEpO1xuXG4gICAgY29uc3QgZW1wdHlEcmlua0NhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHlEcmlua0NhcmQyLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5RHJpbmtDYXJkMik7XG5cbiAgICBjb25zdCBlbXB0eURyaW5rQ2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eURyaW5rQ2FyZDMuY2xhc3NMaXN0LmFkZCgnZW1wdHktbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlEcmlua0NhcmQzKTtcblxuICAgIGNvbnN0IGVtcHR5RHJpbmtDYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5RHJpbmtDYXJkNC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eURyaW5rQ2FyZDQpO1xuXG4gICAgY29uc3QgZW1wdHlEcmlua0NhcmQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHlEcmlua0NhcmQ1LmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5RHJpbmtDYXJkNSk7XG5cbiAgICBjb25zdCBlbXB0eURyaW5rQ2FyZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eURyaW5rQ2FyZDYuY2xhc3NMaXN0LmFkZCgnZW1wdHktbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlEcmlua0NhcmQ2KTtcblxuICAgIGNvbnN0IGVtcHR5RHJpbmtDYXJkNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5RHJpbmtDYXJkNy5jbGFzc0xpc3QuYWRkKCdlbXB0eS1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eURyaW5rQ2FyZDcpO1xuXG4gICAgY29uc3QgZW1wdHlEcmlua0NhcmQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHlEcmlua0NhcmQ4LmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5RHJpbmtDYXJkOCk7XG5cbiAgICBjb25zdCBlbXB0eURyaW5rQ2FyZDkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eURyaW5rQ2FyZDkuY2xhc3NMaXN0LmFkZCgnZW1wdHktbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlEcmlua0NhcmQ5KTtcblxuICAgIGNvbnN0IGVtcHR5RHJpbmtDYXJkMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eURyaW5rQ2FyZDEwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5RHJpbmtDYXJkMTApO1xuXG4gICAgZGlzcGxheUJvZHkucmVwbGFjZUNoaWxkcmVuKG1lbnUpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=