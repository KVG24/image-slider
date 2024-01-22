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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

li {
  list-style: none;
  cursor: pointer;
}

.navbar {
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  border-bottom: 1px solid white;
  height: 100px;
  align-content: stretch;
  align-items: center;
  background-color: rgb(37, 42, 63);
}

.main-bar {
  width: 70%;
}

.main-bar > ul {
  display: flex;
  gap: 10%;
}

.main-bar > ul > li {
  border: 2px solid black;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  font-size: 2rem;
  text-align: center;
  background-color: rgb(56, 64, 95);
}

.main-bar > ul > li:hover {
  background-color: rgb(80, 91, 136);
}

.more-tab {
  border: 2px solid black;
  border-radius: 5px;
  position: relative;
  font-size: 2rem;
  width: 200px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  background-color: rgb(56, 64, 95);
}

.more-tab:hover {
  background-color: rgb(80, 91, 136);
}

.more > li {
  border: 1px solid black;
  width: 100%;
  height: 40px;
  background-color: gray;
  font-size: 1.5rem;
}

.more > li:hover {
  background-color: rgb(85, 85, 85);
}

.more {
  border: 2px solid black;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: 1;
}

.hidden {
  display: none;
}

.gallery {
  width: 100%;
  height: 800px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}

.img-container {
  width: 20000px;
  height: 400px;
  display: flex;
  gap: 400px;
  position: relative;
  margin-left: 34.5%;
  transition: 0.3s;
}

.image {
  width: 600px;
  height: 400px;
  overflow: hidden;
}

img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

.btn-back,
.btn-next {
  position: absolute;
  font-size: 3rem;
  width: 70px;
  height: 50px;
  background-color: rgba(88, 88, 88, .7);
  border: 2px solid white;
  cursor: pointer;
  border-radius: 10%;
}

.btn-back:hover,
.btn-next:hover {
  background-color: rgba(119, 119, 119, 0.7);
}

.btn-back {
  bottom: 20px;
  left: 25%;
}

.btn-next {
  bottom: 20px;
  right: 25%;
}

.arrow-next {
  position: relative;
  top: -20%;
  right: -15%;
}

.arrow-back {
  transform: rotate(180deg);
  position: relative;
  top: -8%;
  right: 15%;
}

.autoplay {
  position: absolute;
  bottom: 20px;
  right: 5%;
  background-color: rgba(88, 88, 88, .7);
  border: 2px solid white;
  color: white;
  font-size: 2rem;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
}

.on {
  background-color: rgba(126, 126, 126, 0.7);
  box-shadow: 0 0 20px rgb(15, 177, 0);
}

.dots {
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
}

.current {
  background-color: rgba(255, 255, 255, 0.596);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,YAAY;EACZ,4DAA4D;EAC5D,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,uBAAuB;EACvB,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,sCAAsC;EACtC,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,0CAA0C;EAC1C,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,4CAA4C;AAC9C","sourcesContent":["body {\n  width: 100vw;\n  max-width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-color: black;\n  color: white;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  box-sizing: border-box;\n}\n\nli {\n  list-style: none;\n  cursor: pointer;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 1rem;\n  border-bottom: 1px solid white;\n  height: 100px;\n  align-content: stretch;\n  align-items: center;\n  background-color: rgb(37, 42, 63);\n}\n\n.main-bar {\n  width: 70%;\n}\n\n.main-bar > ul {\n  display: flex;\n  gap: 10%;\n}\n\n.main-bar > ul > li {\n  border: 2px solid black;\n  border-radius: 5px;\n  width: 200px;\n  height: 50px;\n  font-size: 2rem;\n  text-align: center;\n  background-color: rgb(56, 64, 95);\n}\n\n.main-bar > ul > li:hover {\n  background-color: rgb(80, 91, 136);\n}\n\n.more-tab {\n  border: 2px solid black;\n  border-radius: 5px;\n  position: relative;\n  font-size: 2rem;\n  width: 200px;\n  height: 50px;\n  text-align: center;\n  cursor: pointer;\n  background-color: rgb(56, 64, 95);\n}\n\n.more-tab:hover {\n  background-color: rgb(80, 91, 136);\n}\n\n.more > li {\n  border: 1px solid black;\n  width: 100%;\n  height: 40px;\n  background-color: gray;\n  font-size: 1.5rem;\n}\n\n.more > li:hover {\n  background-color: rgb(85, 85, 85);\n}\n\n.more {\n  border: 2px solid black;\n  border-radius: 5px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.gallery {\n  width: 100%;\n  height: 800px;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.img-container {\n  width: 20000px;\n  height: 400px;\n  display: flex;\n  gap: 400px;\n  position: relative;\n  margin-left: 34.5%;\n  transition: 0.3s;\n}\n\n.image {\n  width: 600px;\n  height: 400px;\n  overflow: hidden;\n}\n\nimg {\n  height: auto;\n  width: 100%;\n  object-fit: cover;\n}\n\n.btn-back,\n.btn-next {\n  position: absolute;\n  font-size: 3rem;\n  width: 70px;\n  height: 50px;\n  background-color: rgba(88, 88, 88, .7);\n  border: 2px solid white;\n  cursor: pointer;\n  border-radius: 10%;\n}\n\n.btn-back:hover,\n.btn-next:hover {\n  background-color: rgba(119, 119, 119, 0.7);\n}\n\n.btn-back {\n  bottom: 20px;\n  left: 25%;\n}\n\n.btn-next {\n  bottom: 20px;\n  right: 25%;\n}\n\n.arrow-next {\n  position: relative;\n  top: -20%;\n  right: -15%;\n}\n\n.arrow-back {\n  transform: rotate(180deg);\n  position: relative;\n  top: -8%;\n  right: 15%;\n}\n\n.autoplay {\n  position: absolute;\n  bottom: 20px;\n  right: 5%;\n  background-color: rgba(88, 88, 88, .7);\n  border: 2px solid white;\n  color: white;\n  font-size: 2rem;\n  width: 250px;\n  height: 50px;\n  border-radius: 10px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.on {\n  background-color: rgba(126, 126, 126, 0.7);\n  box-shadow: 0 0 20px rgb(15, 177, 0);\n}\n\n.dots {\n  width: 700px;\n  height: 50px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n.dot {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n}\n\n.current {\n  background-color: rgba(255, 255, 255, 0.596);\n}"],"sourceRoot":""}]);
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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropDown: () => (/* binding */ dropDown),
/* harmony export */   slider: () => (/* binding */ slider)
/* harmony export */ });
function dropDown(eventTarget, hiddenElement) {
  eventTarget.addEventListener("click", () => {
    if (hiddenElement.classList.contains("hidden")) {
      hiddenElement.classList.remove("hidden");
    } else {
      hiddenElement.classList.add("hidden");
    }
  });
}

const slider = (() => {
  let px = 0;
  let autoplay = false;
  let slideshowInterval;
  const imgContainer = document.querySelector(".img-container");
  const dots = document.querySelectorAll(".dot");

  const nextSlide = () => {
    if (imgContainer.style.transform === "translateX(-9000px)") {
      px += 9000;
    } else {
      px -= 1000;
    }
    imgContainer.style.transform = `translateX(${px}px)`;
    dots.forEach(dot => {
      dot.classList.remove('current')
      if (dot.dataset.px == px) {
        dot.classList.add('current')
      }
    });
  };

  const previousSlide = () => {
    if (imgContainer.style.transform === "translateX(0px)") {
      px -= 9000;
    } else {
      px += 1000;
    }
    imgContainer.style.transform = `translateX(${px}px)`;
    dots.forEach(dot => {
      dot.classList.remove('current')
      if (dot.dataset.px == px) {
        dot.classList.add('current')
      }
    });
  };

  const slideShow = () => {
    if (!autoplay) {
      autoplay = true;
      slideshowInterval = setInterval(nextSlide, 3000);
    } else {
      autoplay = false;
      clearInterval(slideshowInterval);
      slideshowInterval = null;
    }
  };

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      imgContainer.style.transform = `translateX(-${i}000px)`;
      px = i * -1000;
      for (let j = 0; j < dots.length; j++) {
        dots[j].classList.remove("current");
      }
      dots[i].classList.add("current");
    });
  }

  return { nextSlide, previousSlide, slideShow };
})();




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



// Header

const moreTab = document.querySelector('.more-tab');
const moreList = document.querySelector('.more');

(0,_functions__WEBPACK_IMPORTED_MODULE_0__.dropDown)(moreTab, moreList);

// Image slider

const nextBtn = document.querySelector('.btn-next');
const backBtn = document.querySelector('.btn-back');
const autoplayBtn = document.querySelector('.autoplay');

nextBtn.addEventListener('click', _functions__WEBPACK_IMPORTED_MODULE_0__.slider.nextSlide);
backBtn.addEventListener('click', _functions__WEBPACK_IMPORTED_MODULE_0__.slider.previousSlide);
autoplayBtn.addEventListener('click', () => {
  _functions__WEBPACK_IMPORTED_MODULE_0__.slider.slideShow();
  autoplayBtn.classList.toggle('on');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxX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QUVyQjs7QUFFQTtBQUNBOztBQUVBLG9EQUFROztBQUVSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsOENBQU07QUFDeEMsa0NBQWtDLDhDQUFNO0FBQ3hDO0FBQ0EsRUFBRSw4Q0FBTTtBQUNSO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmFtaWNfdXNlcl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2R5bmFtaWNfdXNlcl9pbnRlcmZhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2R5bmFtaWNfdXNlcl9pbnRlcmZhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljX3VzZXJfaW50ZXJmYWNlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2R5bmFtaWNfdXNlcl9pbnRlcmZhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pY191c2VyX2ludGVyZmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHluYW1pY191c2VyX2ludGVyZmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljX3VzZXJfaW50ZXJmYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bmFtaWNfdXNlcl9pbnRlcmZhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keW5hbWljX3VzZXJfaW50ZXJmYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHluYW1pY191c2VyX2ludGVyZmFjZS8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pY191c2VyX2ludGVyZmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9keW5hbWljX3VzZXJfaW50ZXJmYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2R5bmFtaWNfdXNlcl9pbnRlcmZhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWNfdXNlcl9pbnRlcmZhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljX3VzZXJfaW50ZXJmYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pY191c2VyX2ludGVyZmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZHluYW1pY191c2VyX2ludGVyZmFjZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA2Myk7XG59XG5cbi5tYWluLWJhciB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5tYWluLWJhciA+IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMCU7XG59XG5cbi5tYWluLWJhciA+IHVsID4gbGkge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNjQsIDk1KTtcbn1cblxuLm1haW4tYmFyID4gdWwgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgOTEsIDEzNik7XG59XG5cbi5tb3JlLXRhYiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNjQsIDk1KTtcbn1cblxuLm1vcmUtdGFiOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA5MSwgMTM2KTtcbn1cblxuLm1vcmUgPiBsaSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm1vcmUgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NSwgODUsIDg1KTtcbn1cblxuLm1vcmUge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5nYWxsZXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltZy1jb250YWluZXIge1xuICB3aWR0aDogMjAwMDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMzQuNSU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5idG4tYmFjayxcbi5idG4tbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCA4OCwgODgsIC43KTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4uYnRuLWJhY2s6aG92ZXIsXG4uYnRuLW5leHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOSwgMTE5LCAxMTksIDAuNyk7XG59XG5cbi5idG4tYmFjayB7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjUlO1xufVxuXG4uYnRuLW5leHQge1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5hcnJvdy1uZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMCU7XG4gIHJpZ2h0OiAtMTUlO1xufVxuXG4uYXJyb3ctYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtOCU7XG4gIHJpZ2h0OiAxNSU7XG59XG5cbi5hdXRvcGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDg4LCA4OCwgLjcpO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjYsIDEyNiwgMTI2LCAwLjcpO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2IoMTUsIDE3NywgMCk7XG59XG5cbi5kb3RzIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTk2KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osNERBQTREO0VBQzVELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA2Myk7XFxufVxcblxcbi5tYWluLWJhciB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ubWFpbi1iYXIgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMCU7XFxufVxcblxcbi5tYWluLWJhciA+IHVsID4gbGkge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDY0LCA5NSk7XFxufVxcblxcbi5tYWluLWJhciA+IHVsID4gbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA5MSwgMTM2KTtcXG59XFxuXFxuLm1vcmUtdGFiIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA2NCwgOTUpO1xcbn1cXG5cXG4ubW9yZS10YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA5MSwgMTM2KTtcXG59XFxuXFxuLm1vcmUgPiBsaSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubW9yZSA+IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG59XFxuXFxuLm1vcmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2FsbGVyeSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbWctY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMDAwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IDM0LjUlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmltYWdlIHtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5pbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmJ0bi1iYWNrLFxcbi5idG4tbmV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDg4LCA4OCwgLjcpO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi5idG4tYmFjazpob3ZlcixcXG4uYnRuLW5leHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDExOSwgMTE5LCAwLjcpO1xcbn1cXG5cXG4uYnRuLWJhY2sge1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgbGVmdDogMjUlO1xcbn1cXG5cXG4uYnRuLW5leHQge1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDI1JTtcXG59XFxuXFxuLmFycm93LW5leHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMjAlO1xcbiAgcmlnaHQ6IC0xNSU7XFxufVxcblxcbi5hcnJvdy1iYWNrIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC04JTtcXG4gIHJpZ2h0OiAxNSU7XFxufVxcblxcbi5hdXRvcGxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCA4OCwgODgsIC43KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LCAxMjYsIDEyNiwgMC43KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYigxNSwgMTc3LCAwKTtcXG59XFxuXFxuLmRvdHMge1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jdXJyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OTYpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZHJvcERvd24oZXZlbnRUYXJnZXQsIGhpZGRlbkVsZW1lbnQpIHtcbiAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoaGlkZGVuRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZGVuRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHNsaWRlciA9ICgoKSA9PiB7XG4gIGxldCBweCA9IDA7XG4gIGxldCBhdXRvcGxheSA9IGZhbHNlO1xuICBsZXQgc2xpZGVzaG93SW50ZXJ2YWw7XG4gIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG90XCIpO1xuXG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICBpZiAoaW1nQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJ0cmFuc2xhdGVYKC05MDAwcHgpXCIpIHtcbiAgICAgIHB4ICs9IDkwMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHB4IC09IDEwMDA7XG4gICAgfVxuICAgIGltZ0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3B4fXB4KWA7XG4gICAgZG90cy5mb3JFYWNoKGRvdCA9PiB7XG4gICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpXG4gICAgICBpZiAoZG90LmRhdGFzZXQucHggPT0gcHgpIHtcbiAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHByZXZpb3VzU2xpZGUgPSAoKSA9PiB7XG4gICAgaWYgKGltZ0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPT09IFwidHJhbnNsYXRlWCgwcHgpXCIpIHtcbiAgICAgIHB4IC09IDkwMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHB4ICs9IDEwMDA7XG4gICAgfVxuICAgIGltZ0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3B4fXB4KWA7XG4gICAgZG90cy5mb3JFYWNoKGRvdCA9PiB7XG4gICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpXG4gICAgICBpZiAoZG90LmRhdGFzZXQucHggPT0gcHgpIHtcbiAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNsaWRlU2hvdyA9ICgpID0+IHtcbiAgICBpZiAoIWF1dG9wbGF5KSB7XG4gICAgICBhdXRvcGxheSA9IHRydWU7XG4gICAgICBzbGlkZXNob3dJbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRTbGlkZSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1dG9wbGF5ID0gZmFsc2U7XG4gICAgICBjbGVhckludGVydmFsKHNsaWRlc2hvd0ludGVydmFsKTtcbiAgICAgIHNsaWRlc2hvd0ludGVydmFsID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG90c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaW1nQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2l9MDAwcHgpYDtcbiAgICAgIHB4ID0gaSAqIC0xMDAwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkb3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvdHNbal0uY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XG4gICAgICB9XG4gICAgICBkb3RzW2ldLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgbmV4dFNsaWRlLCBwcmV2aW91c1NsaWRlLCBzbGlkZVNob3cgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHNsaWRlciwgZHJvcERvd24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGRyb3BEb3duLCBzbGlkZXIgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBIZWFkZXJcblxuY29uc3QgbW9yZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLXRhYicpO1xuY29uc3QgbW9yZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9yZScpO1xuXG5kcm9wRG93bihtb3JlVGFiLCBtb3JlTGlzdCk7XG5cbi8vIEltYWdlIHNsaWRlclxuXG5jb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1uZXh0Jyk7XG5jb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1iYWNrJyk7XG5jb25zdCBhdXRvcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRvcGxheScpO1xuXG5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVyLm5leHRTbGlkZSk7XG5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVyLnByZXZpb3VzU2xpZGUpO1xuYXV0b3BsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNsaWRlci5zbGlkZVNob3coKTtcbiAgYXV0b3BsYXlCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9