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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,2DAA2E;AAC/E;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,oBAAoB;IACpB,eAAe;IACf,eAAe;IACf,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,8BAA8B;IAC9B,yDAAyD;IACzD,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,YAAY;IACZ,uBAAuB;IACvB,sCAAsC;IACtC,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uEAAuE;AAC3E;;AAEA;IACI;AACJ;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ;AACJ;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,8CAA8C;AAClD;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,SAAS;QACT,UAAU;IACd;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,gBAAgB;QAChB,cAAc;IAClB;IACA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,SAAS;QACT,UAAU;IACd;;IAEA;QACI,eAAe;IACnB;AACJ","sourcesContent":["body {\n    margin: 0;\n}\n\n@font-face {\n    font-family: 'MyFont';\n    src: url('./assets/MerriweatherSans-VariableFont_wght.woff') format('woff');\n}\n\n#content {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    width: 100vw;\n    height: 100vh;\n}\n\n.header {\n    background-color: black;\n    border: solid 4px #FF0000;\n    grid-row: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    height: 80px;\n    font-family: 'MyFont';\n    font-style: italic;\n}\n\n.headerTitle {\n    font-size: 32px;\n    color: white;\n}\n\n.headerButtons {\n    display: flex;\n    gap: 50px;\n}\n\n.button {\n    border: none;\n    background: none;\n    padding: 0;\n    font-family: inherit;\n    font-size: 18px;\n    cursor: pointer;\n    color: white;\n    margin: 20px;\n}\n\n.display {\n    grid-row: 2;\n    max-height: fit-content;\n    overflow-y: auto;\n    background-color: var(--white);\n    background-image: url('./assets/seoul-nightlife-bg.jpeg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.home {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); \n    color: white;\n    border: solid 1px black;\n    background-color: rgba(255, 0, 0, 0.5);\n    font-family: 'MyFont';\n}\n\n.menu {\n    text-align: center;\n    font-family: 'MyFont';\n    font-size: 36px;\n    margin: 20px;\n    color: white;\n    background-color: rgba(128, 128, 128, 0.6);\n}\n\n.contact-info, .about-info {\n    color: white;\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); \n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n.about-info {\n    background-color: rgba(255, 0, 0, 0.5)\n}\n\n.contact-info {\n    background-color: rgba(0, 0, 255, 0.5);\n}\n\n.title {\n    font-size: 36px;\n    font-family: 'MyFont';\n}\n\n.subtitle {\n    font-size: 28px;\n    margin: 20px;\n}\n\n.para {\n    font-size: 24px;\n    margin: 20px;\n    min-width: 200px;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: minmax(200px, auto);\n}\n\n.food-container, .drink-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: minmax(50px, auto);\n    align-items: center;\n}\n\n.food-title, .drink-title {\n    font-family: 'MyFont';\n    font-style: italic;\n    font-size: 32px;\n    text-align: center;\n    grid-column: span 2;\n    grid-row: 1;\n}\n\n.food-menu-card {\n    border: 1px solid black;\n    font-size: 24px;\n    min-width: 200px;\n    min-height: 150px;\n    max-height: 150px;\n    margin: 12px;\n    padding: 8px;\n    background-color: rgba(255, 0, 0, 0.5)\n}\n\n.drink-menu-card {\n    border: 1px solid black;\n    min-width: 200px;\n    min-height: 150px;\n    max-height: 150px;\n    margin: 12px;\n    padding: 8px;\n    background-color: rgba(0, 0, 255, 0.5);\n}\n\n.empty-menu-card {\n    min-width: 200px;\n    min-height: 150px;\n    max-height: 150px;\n    margin: 12px;\n    padding: 8px;\n}\n\n.menu-item {\n    font-size: 24px;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.menu-description {\n    font-size: 18px;\n    text-align: left;\n}\n\n.footer {\n    border: solid 4px #0000FF;\n    grid-row: 3;\n    height: 80px;\n    background-color: black;\n}\n\n.footer-info {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 80px;\n    color: white;\n    font-family: 'Times New Roman', Times, serif;\n}\n\n.address, .hours {\n    font-size: 18px;\n}\n\n@media only screen and (max-width: 1088px) {\n    .header {\n        margin: 0;\n        padding: 0;\n    }\n\n    .headerTitle {\n        font-size: 24px;\n    }\n    \n    .headerButtons {\n        gap: 10px;\n    }\n\n    .button {\n        font-size: 14px;\n    }\n\n    .title {\n        font-size: 24px;\n    }\n\n    .subtitle {\n        font-size: 20px;\n    }\n\n    .para {\n        font-size: 18px;\n    }\n\n    .menu-container {\n        grid-template-columns: 1fr;\n    }\n\n    .food-menu-card, .drink-menu-card {\n        min-width: 100px;\n        margin: 12px 0;\n    }\n    .menu-item {\n        font-size: 18px;\n    }\n\n    .menu-description {\n        font-size: 14px;\n    }\n\n    .footer {\n        margin: 0;\n        padding: 0;\n    }\n\n    .address, .hours {\n        font-size: 14px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNktBQW1FO0FBQy9HLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFV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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksaURBQVc7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqT0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9NZXJyaXdlYXRoZXJTYW5zLVZhcmlhYmxlRm9udF93Z2h0LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zZW91bC1uaWdodGxpZmUtYmcuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIG1hcmdpbjogMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZicpO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogc29saWQgNHB4ICNGRjAwMDA7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaGVhZGVyVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXJCdXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNTBweDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5kaXNwbGF5IHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhvbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xufVxuXG4ubWVudSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNik7XG59XG5cbi5jb250YWN0LWluZm8sIC5hYm91dC1pbmZvIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxuICAgIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSlcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250Jztcbn1cblxuLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4ucGFyYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDIwMHB4LCBhdXRvKTtcbn1cblxuLmZvb2QtY29udGFpbmVyLCAuZHJpbmstY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9vZC10aXRsZSwgLmRyaW5rLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICBncmlkLXJvdzogMTtcbn1cblxuLmZvb2QtbWVudS1jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDEycHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpXG59XG5cbi5kcmluay1tZW51LWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAxMnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KTtcbn1cblxuLmVtcHR5LW1lbnUtY2FyZCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDEycHg7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLm1lbnUtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZm9vdGVyIHtcbiAgICBib3JkZXI6IHNvbGlkIDRweCAjMDAwMEZGO1xuICAgIGdyaWQtcm93OiAzO1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmZvb3Rlci1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmFkZHJlc3MsIC5ob3VycyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODhweCkge1xuICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmhlYWRlclRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyQnV0dG9ucyB7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnBhcmEge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLmZvb2QtbWVudS1jYXJkLCAuZHJpbmstbWVudS1jYXJkIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgfVxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLm1lbnUtZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuYWRkcmVzcywgLmhvdXJzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIs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Z0I7UUFDaEIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9NZXJyaXdlYXRoZXJTYW5zLVZhcmlhYmxlRm9udF93Z2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCAjRkYwMDAwO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGVhZGVyVGl0bGUge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlckJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvc2VvdWwtbmlnaHRsaWZlLWJnLmpwZWcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi5tZW51IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbywgLmFib3V0LWluZm8ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXFxuICAgIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYWJvdXQtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpXFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ucGFyYSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDIwMHB4LCBhdXRvKTtcXG59XFxuXFxuLmZvb2QtY29udGFpbmVyLCAuZHJpbmstY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2QtdGl0bGUsIC5kcmluay10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5mb29kLW1lbnUtY2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgbWFyZ2luOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpXFxufVxcblxcbi5kcmluay1tZW51LWNhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXJnaW46IDEycHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XFxufVxcblxcbi5lbXB0eS1tZW51LWNhcmQge1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIG1hcmdpbjogMTJweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG4ubWVudS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJvcmRlcjogc29saWQgNHB4ICMwMDAwRkY7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZm9vdGVyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4uYWRkcmVzcywgLmhvdXJzIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODhweCkge1xcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlclRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlYWRlckJ1dHRvbnMge1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5idXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuXFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLnN1YnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAucGFyYSB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5mb29kLW1lbnUtY2FyZCwgLmRyaW5rLW1lbnUtY2FyZCB7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMnB4IDA7XFxuICAgIH1cXG4gICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuXFxuICAgIC5mb290ZXIge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAuYWRkcmVzcywgLmhvdXJzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkaXNwbGF5Qm9keSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dENsaWNrKCkge1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgICBkaXNwbGF5Qm9keS5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgICBjb25zdCBhYm91dEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEluZm8uaW5uZXJIVE1MID0gXG4gICAgYDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5BYm91dCBLLVBvY2hhPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nc3VidGl0bGUnPkxvY2F0aW9uPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncGFyYSc+MTIzNCBGYWtlIEFkZHJlc3MgUGxhY2UsIDxkaXY+XG4gICAgICAgIDxkaXY+V29uZGVybGFuZCBDQSwgOTk5OTk8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzdWJ0aXRsZSc+SG91cnM8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXJhJz5Nb25kYXktRnJpZGF5PGRpdj4gXG4gICAgICAgIDxkaXYgY2xhc3M9J3BhcmEnPjRQTS0xQU08ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXJhJz5XZWVrZW5kczxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3BhcmEnPjRQTS0zQU08ZGl2PlxuICAgICA8ZGl2PmBcbiAgICBhYm91dEluZm8uY2xhc3NMaXN0LmFkZCgnYWJvdXQtaW5mbycpO1xuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0SW5mbyk7XG5cbiAgICBkaXNwbGF5Qm9keS5yZXBsYWNlQ2hpbGRyZW4oYWJvdXQpO1xufSIsImltcG9ydCBkaXNwbGF5Qm9keSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0Q2xpY2soKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGRpc3BsYXlCb2R5LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mby5pbm5lckhUTUwgPSBcbiAgICBgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPkNvbnRhY3QgVXM8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzdWJ0aXRsZSc+RW1haWw6PGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncGFyYSc+ay1wb2NoYUBnbWFpbC5jb208ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzdWJ0aXRsZSc+UGhvbmU6PGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncGFyYSc+KDEyMykgNDU2IC0gNzg5MTxkaXY+XG4gICAgIDxkaXY+YFxuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pOyBcblxuICAgIGRpc3BsYXlCb2R5LnJlcGxhY2VDaGlsZHJlbihjb250YWN0KTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJzsgXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGNvbnN0IGZvb3RlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJJbmZvLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1pbmZvJyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckluZm8pO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gJzEyMzQgRmFrZSBBZGRyZXNzIFBsYWNlLCBXb25kZXJsYW5kIENBLCA5OTk5OSdcbiAgICBmb290ZXJJbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgIGhvdXJzLmlubmVySFRNTCA9ICdNb24tRnJpOiA0UE0tMUFNIFNhdC1TdW46IDRQTS0zQU0nXG4gICAgZm9vdGVySW5mby5hcHBlbmRDaGlsZChob3Vycyk7XG59IiwiaW1wb3J0IG1lbnVDbGljayBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGFib3V0Q2xpY2sgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgY29udGFjdENsaWNrIGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgaG9tZUNsaWNrIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUaXRsZS5pbm5lckhUTUwgPSAnSy1Qb2NoYSc7XG4gICAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyVGl0bGUnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgY29uc3QgaGVhZGVyQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQnV0dG9ucycpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25zKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdXR0b24uaW5uZXJIVE1MID0gJ0hvbWUnXG4gICAgaG9tZUJ1dHRvbi5vbmNsaWNrID0gaG9tZUNsaWNrO1xuICAgIGhlYWRlckJ1dHRvbnMuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmlubmVySFRNTCA9ICdNZW51J1xuICAgIG1lbnVCdXR0b24ub25jbGljayA9IG1lbnVDbGljaztcbiAgICBoZWFkZXJCdXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBhYm91dEJ1dHRvbi5pbm5lckhUTUwgPSAnQWJvdXQnXG4gICAgYWJvdXRCdXR0b24ub25jbGljayA9IGFib3V0Q2xpY2s7XG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbik7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLmlubmVySFRNTCA9ICdDb250YWN0J1xuICAgIGNvbnRhY3RCdXR0b24ub25jbGljayA9IGNvbnRhY3RDbGljaztcbiAgICBoZWFkZXJCdXR0b25zLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xufVxuIiwiaW1wb3J0IGRpc3BsYXlCb2R5IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDbGljaygpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0ndGl0bGUnPldlbGNvbWUgdG8gSy1Qb2NoYTxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J3BhcmEnPk91ciBtaXNzaW9uIGlzIHRvIHByb3ZpZGUgY3VzdG9tZXJzIHRoZSBiZXN0IGtvcmVhbiBiYXIgZXhwZXJpZW5jZSB0aGF0IG1vbmV5IGNhbiBidXkuIFdlIGhhdmUgdHJhZGl0aW9uYWwga29yZWFuIGJhciBmb29kcywgYXMgd2VsbCBhcyBtb2Rlcm4gZnVzaW9uIGZhdm9yaXRlcy4gV2l0aCBhIHdpZGUgc2VsZWN0aW9uIG9mIGRyaW5rcywgSy1Qb2NoYSB3aWxsIGJlIHlvdXIgZmF2b3JpdGUgcGxhY2UgdG8ga2ljayBiYWNrIHdpdGggZnJpZW5kcyE8ZGl2PmA7XG4gICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGRpc3BsYXlCb2R5LmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgZGlzcGxheUJvZHkucmVwbGFjZUNoaWxkcmVuKGhvbWUpO1xufSIsImltcG9ydCBob21lQ2xpY2sgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsgXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBkaXNwbGF5Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kaXNwbGF5Qm9keS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlCb2R5KTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUJvZHlcblxuaG9tZUNsaWNrKCk7XG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZUZvb3RlcigpO1xuXG5jb25zb2xlLmxvZygnaGknKTtcbiIsImltcG9ydCBkaXNwbGF5Qm9keSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q2xpY2soKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9vZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1jb250YWluZXInKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9vZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb29kVGl0bGUuaW5uZXJIVE1MID0gJ0Zvb2QnXG4gICAgZm9vZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtdGl0bGUnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RUaXRsZSk7XG5cbiAgICBjb25zdCBmcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZyaWVzLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPkZyaWVzICQ2PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+Q2xhc3NpYyBmcmVuY2ggZnJpZXMuIE1ha2Ugc3VwZXIgZnJpZXModG9wIHdpdGggY2hvaWNlIG9mIGJlZWYvY2hpY2tlbi9wb3JrLCB3aXRoIGNoZWVzZSwgYW5kIGhvdXNlIHNhdWNlKSBmb3IgJDExPGRpdj5gXG4gICAgZnJpZXMuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyaWVzKTtcblxuICAgIGNvbnN0IGNhbGFtYXJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FsYW1hcmkuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+Q2FsYW1hcmkgJDk8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5GcmllZCBjYWxhbWFyaSBzZXJ2ZWQgd2l0aCBhc3NvcnRtZW50IG9mIHNhdWNlczxkaXY+YFxuICAgIGNhbGFtYXJpLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxhbWFyaSk7XG5cbiAgICBjb25zdCBjaGlja2VuV2luZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGlja2VuV2luZ3MuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+Q2hpY2tlbiBXaW5ncyAkMjQ8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5Lb3JlYW4gc3R5bGUgZG91YmxlIGZyaWVkIGNoaWNrZW4gd2luZ3MuIE9yaWdpbmFsLCBHYXJsaWMtU295LCBvciBTd2VldC1hbmQtU3BpY3kuPGRpdj5gXG4gICAgY2hpY2tlbldpbmdzLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuV2luZ3MpO1xuXG4gICAgY29uc3Qgd2hvbGVDaGlja2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2hvbGVDaGlja2VuLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPldob2xlIEZyaWVkIENoaWNrZW4gJDMwPGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+S29yZWFuIHN0eWxlIGRvdWJsZSBmcmllZCBjaGlja2VuIHdpbmdzLiBPcmlnaW5hbCwgR2FybGljLVNveSwgb3IgU3dlZXQtYW5kLVNwaWN5LjxkaXY+YFxuICAgIHdob2xlQ2hpY2tlbi5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQod2hvbGVDaGlja2VuKTtcblxuICAgIGNvbnN0IGdhbGJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FsYmkuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+R2FsYmkgJDI4PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+U3dlZXQgS29yZWFuIHNob3J0IHJpYiBncmlsbGVkIHRvIHBlcmZlY3Rpb24uPGRpdj5gXG4gICAgZ2FsYmkuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbGJpKTtcblxuICAgIGNvbnN0IHBvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3JrLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPlNwaWN5IFBvcmsgQmVsbHkgJDI2PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+U3RpciBmcmllZCBzcGljeSBhbmQgc3dlZXQgcG9yayBiZWxseS48ZGl2PmBcbiAgICBwb3JrLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3JrKTtcblxuICAgIGNvbnN0IHRhY29zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFjb3MuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+VGFjb3MoMykgJDEyPGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+Sy1iYnEgdGFjb3Mgd2l0aCBjaG9pY2Ugb2YgbWVhdChiZWVmL3BvcmsvY2hpY2tlbiksIHRvcHBlZCB3aXRoIGtvcmVhLXN0eWxlIHNsYXcuPGRpdj5gXG4gICAgdGFjb3MuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhY29zKTtcblxuICAgIGNvbnN0IGtpbWNoaVBhc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2ltY2hpUGFzdGEuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+S2ltY2hpIENhcmJvbmFyYSAkMjE8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5DcmVhbXkgY2FyYm9uYXJhIHBhc3RhIG1hZGUgd2l0aCBraW1jaGkgYW5kIHBvcmsgYmVsbHkuPGRpdj5gXG4gICAga2ltY2hpUGFzdGEuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGtpbWNoaVBhc3RhKTtcblxuICAgIGNvbnN0IGdhbGJpUGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYWxiaVBhc3RhLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPkdhbGJpIFN0cm9nYW5vZmYgJDIxPGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+R2FybGlja3ksIGNyZWFteSwgc295LWJhc2VkIHN0cm9nYW5vZmYgbWFkZSB3aXRoIGtvcmVhbiBzaG9ydCByaWI8ZGl2PmBcbiAgICBnYWxiaVBhc3RhLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChnYWxiaVBhc3RhKTtcblxuICAgIGNvbnN0IGtpbWNoaVN0ZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBraW1jaGlTdGV3LmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPktpbWNoaSBKamlnYWUgJDE5PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+Q2xhc3NpYyBraW1jaGkgc3RldyB3aXRoIHBvcmsgYmVsbHksIGtpbWNoaSwgb25pb25zLCB0b2Z1LjxkaXY+YFxuICAgIGtpbWNoaVN0ZXcuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGtpbWNoaVN0ZXcpO1xuXG4gICAgY29uc3Qgc295YmVhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNveWJlYW4uaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+RG9lbmphbmcgSmppZ2FlICQxOTxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkNsYXNzaWMgc295YmVhbiBzdGV3IHdpdGggYmVlZiwgdG9mdSwgb25pb25zLCByYWRpc2guPGRpdj5gXG4gICAgc295YmVhbi5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoc295YmVhbik7XG5cbiAgICBjb25zdCB0b2Z1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9mdS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5Tb29uZHVidSAkMTk8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5TaWxrZW4gdG9mdSBzdGV3IHNlcnZlZCB3aXRoIGNob2ljZSBvZiBiZWVmL3BvcmsvY2hpY2tlbi48ZGl2PmBcbiAgICB0b2Z1LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Z1KTtcblxuICAgIGNvbnN0IHJhbWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmFtZW4uaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+QnVkYWUgSmppZ2FlICQxOTxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkFybXkgc3RldyB3aXRoIHNwYW0sIHJhbWVuLCBraW1jaGksIHNhdXNhZ2UsIG9uaW9ucywgY2hlZXNlLjxkaXY+YFxuICAgIHJhbWVuLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudS1jYXJkJyk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChyYW1lbik7XG5cbiAgICBjb25zdCByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmljZS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5LaW1jaGkgRnJpZWQgUmljZSAkMTU8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5LaW1jaGkgZnJpZWQgcmljZSB3aXRoIGNob2ljZSBvZiBiZWVmL3BvcmsvY2hpY2tlbi9zcGFtLiBUb3BwZWQgd2l0aCBzZWF3ZWVkIGFuZCBjaGVlc2UuPGRpdj5gXG4gICAgcmljZS5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocmljZSk7XG5cbiAgICBjb25zdCB0dGVva2Jva2tpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHRlb2tib2traS5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz5UdGVva2Jva2tpICQxODxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPlNwaWN5IHJpY2UgY2FrZXMgc2VydmVkIHdpdGggZmlzaCBjYWtlcywgZWdncywgYW5kIHZlZ2V0YWJsZXMuPGRpdj5gO1xuICAgIHR0ZW9rYm9ra2kuY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51LWNhcmQnKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHR0ZW9rYm9ra2kpO1xuXG4gICAgY29uc3QgY29ybkNoZWVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcm5DaGVlc2UuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+Q29ybiBDaGVlc2UgJDE0PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+UG9wdWxhciBLb3JlYW4gc2lkZSBkaXNoIGNvbnNpc3Rpbmcgb2YgY29ybiwgb25pb25zLCBhbmQgcGVwcGVycy4gVG9wcGVkIHdpdGggYSBtZWx0ZWQgbGF5ZXIgb2YgbW96emFyZWxsYSBjaGVlc2UuPGRpdj5gXG4gICAgY29ybkNoZWVzZS5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUtY2FyZCcpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29ybkNoZWVzZSk7XG5cbiAgICBjb25zdCBkcmlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLWNvbnRhaW5lcicpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtDb250YWluZXIpO1xuXG4gICAgY29uc3QgZHJpbmtUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZHJpbmtUaXRsZS5pbm5lckhUTUwgPSAnRHJpbmsnXG4gICAgZHJpbmtUaXRsZS5jbGFzc0xpc3QuYWRkKCdkcmluay10aXRsZScpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyaW5rVGl0bGUpO1xuXG4gICAgY29uc3QgYmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJlZXIuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+QmVlciAkMTE8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5DaG9pY2Ugb2YgU2Fwb3JvLCBIaXRlLCBDYXNzLCBIZWluZWtlbi48ZGl2PmBcbiAgICBiZWVyLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGJlZXIpO1xuXG4gICAgY29uc3Qgc29qdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvanUuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+U29qdSAkMTY8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5DaG9pY2Ugb2YgQ2hhbWlzdWwsIENodW1jaHVydW0sIFdvbiBTb2p1LCBKaW5ybzxkaXY+YFxuICAgIHNvanUuY2xhc3NMaXN0LmFkZCgnZHJpbmstbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoc29qdSk7XG5cbiAgICBjb25zdCBmcnVpdFNvanUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmcnVpdFNvanUuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+Rmxhdm9yZWQgU29qdSAkMTc8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5DaG9pY2Ugb2YgU3RyYXdiZXJyeSwgUGVhY2gsIExlbW9uLCBNYW5nbzxkaXY+YFxuICAgIGZydWl0U29qdS5jbGFzc0xpc3QuYWRkKCdkcmluay1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcnVpdFNvanUpO1xuXG4gICAgY29uc3Qgc2FrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNha2UuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+U2FrZSAkMTg8ZGl2PlxuICAgICA8ZGl2IGNsYXNzPSdtZW51LWRlc2NyaXB0aW9uJz5DaG9pY2Ugb2YgS2lrdXN1aSwgS3Vyb3Nhd2EsIE9uaWdhcmFzaGksIEhvdCBTYWtlPGRpdj5gXG4gICAgc2FrZS5jbGFzc0xpc3QuYWRkKCdkcmluay1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChzYWtlKTtcblxuICAgIGNvbnN0IHdpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5lLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPldpbmUgJDI4PGRpdj5cbiAgICAgPGRpdiBjbGFzcz0nbWVudS1kZXNjcmlwdGlvbic+Q2hvaWNlIG9mIFJpY2UgV2luZSwgUmVkLCBXaGl0ZSwgUm9zZS48ZGl2PmBcbiAgICB3aW5lLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmUpO1xuXG4gICAgY29uc3Qgc29kYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvZGEuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9J21lbnUtaXRlbSc+U29kYSAkNzxkaXY+XG4gICAgIDxkaXYgY2xhc3M9J21lbnUtZGVzY3JpcHRpb24nPkNob2ljZSBvZiBDb2xhLCBQZXBzaSwgU3ByaXRlLCBEci4gUGVwcGVyLCBSb290IEJlZXIsIE9yYW5nZSBGYW50YSwgQ29rZSBaZXJvLjxkaXY+YFxuICAgIHNvZGEuY2xhc3NMaXN0LmFkZCgnZHJpbmstbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoc29kYSk7XG5cbiAgICBjb25zdCBlbXB0eURyaW5rQ2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eURyaW5rQ2FyZDEuY2xhc3NMaXN0LmFkZCgnZW1wdHktbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlEcmlua0NhcmQxKTtcblxuICAgIGNvbnN0IGVtcHR5RHJpbmtDYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5RHJpbmtDYXJkMi5jbGFzc0xpc3QuYWRkKCdlbXB0eS1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eURyaW5rQ2FyZDIpO1xuXG4gICAgY29uc3QgZW1wdHlEcmlua0NhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHlEcmlua0NhcmQzLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5RHJpbmtDYXJkMyk7XG5cbiAgICBjb25zdCBlbXB0eURyaW5rQ2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eURyaW5rQ2FyZDQuY2xhc3NMaXN0LmFkZCgnZW1wdHktbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlEcmlua0NhcmQ0KTtcblxuICAgIGNvbnN0IGVtcHR5RHJpbmtDYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5RHJpbmtDYXJkNS5jbGFzc0xpc3QuYWRkKCdlbXB0eS1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eURyaW5rQ2FyZDUpO1xuXG4gICAgY29uc3QgZW1wdHlEcmlua0NhcmQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHlEcmlua0NhcmQ2LmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5RHJpbmtDYXJkNik7XG5cbiAgICBjb25zdCBlbXB0eURyaW5rQ2FyZDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eURyaW5rQ2FyZDcuY2xhc3NMaXN0LmFkZCgnZW1wdHktbWVudS1jYXJkJyk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlEcmlua0NhcmQ3KTtcblxuICAgIGNvbnN0IGVtcHR5RHJpbmtDYXJkOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5RHJpbmtDYXJkOC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eURyaW5rQ2FyZDgpO1xuXG4gICAgY29uc3QgZW1wdHlEcmlua0NhcmQ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHlEcmlua0NhcmQ5LmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lbnUtY2FyZCcpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5RHJpbmtDYXJkOSk7XG5cbiAgICBjb25zdCBlbXB0eURyaW5rQ2FyZDEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHlEcmlua0NhcmQxMC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1tZW51LWNhcmQnKTtcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eURyaW5rQ2FyZDEwKTtcblxuICAgIGRpc3BsYXlCb2R5LnJlcGxhY2VDaGlsZHJlbihtZW51KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9