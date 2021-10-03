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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --clr-primary: rgb(54, 112, 199);\n  --clr-light: #f4f4f4;\n  --clr-dark: #333;\n  --clr-warning: rgb(99, 36, 36);\n}\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.all-tasks {\n  grid-area: lists;\n}\n.title {\n  grid-area: header;\n  text-align: center;\n  font-size: calc(7vw + 2rem);\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.1);\n  letter-spacing: 2px;\n  margin: -0.3em 0 0.5em;\n}\nbody {\n  margin: 0;\n  font-family: \"Work Sans\", sans-serif;\n  font-weight: 300;\n  height: 100%;\n  background-color: var(--clr-primary);\n  color: var(--clr-light);\n  font-family: sans-serif;\n  font-weight: 100;\n  display: grid;\n  grid:\n    \"header header header header\" auto \"...... lists  active ......\" auto/1fr minmax(\n      100px,\n      300px\n    )\n    minmax(250px, 500px) 1fr;\n}\n#container {\n  position: absolute;\n  top: 60%;\n\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\ntable {\n  width: 800px;\n  border-collapse: collapse;\n  overflow: hidden;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n#form-btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  align-self: stretch;\n  font: bold;\n  border-width: 1px;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 400;\n  height: 30px;\n  font: bold;\n\n  opacity: 0.7;\n}\n#form-btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n.btn.create:hover {\n  opacity: 0.7;\n}\n.check-box {\n  background-color: beige;\n}\n#form-btn:hover {\n  opacity: 1.2;\n}\n.big-box {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n#projects-menu {\n  position: relative;\n  grid-area: lists;\n  overflow: auto;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 350px;\n  width: 500px;\n  bottom: 150px;\n  right: 100px;\n}\n#projects-title {\n  position: relative;\n  bottom: 50px;\n  align-self: center;\n  font-family: \"Work sans\", sans-serif;\n  font-size: 30px;\n  color: white;\n}\n.project-grid {\n  overflow: auto;\n  align-self: center;\n  align-content: flex-start;\n  position: relative;\n  font-size: 1.2rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1.1em;\n  bottom: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n}\n.list-name {\n  cursor: pointer;\n}\n.list-name:hover {\n  opacity: 0.7;\n}\nform {\n  display: flex;\n}\n.project-btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  height: 20px;\n  position: relative;\n  top: 80px;\n  align-self: stretch;\n  align-content: flex-end;\n}\n.project-btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n.project-btn.create:hover {\n  opacity: 0.7;\n}\n.project-form {\n  position: relative;\n  bottom: 50px;\n}\n\nth,\ntd {\n  padding: 15px;\n  background-color: white;\n  color: var(--clr-dark);\n}\n\nth {\n  text-align: left;\n}\nthead {\n  background-color: #4d4e52;\n}\nth {\n  background-color: #4d4e52;\n}\ntr:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n}\ntd {\n  position: relative;\n  color: var(--clr-dark);\n}\ntd:hover::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -9999px;\n  bottom: -9999px;\n  background-color: rgba(255, 255, 255, 0.2);\n  z-index: -1;\n}\n.current {\n  position: relative;\n  bottom: 5px;\n  align-self: stretch;\n\n  align-content: flex-start;\n  background-color: transparent;\n  color: white;\n  font-family: sans-serif;\n  font: bold;\n  font-size: 20px;\n}\n.del-btn {\n  font: inherit;\n  font-family: inherit;\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  position: relative;\n  top: 10px;\n}\n.del-btn:hover {\n  opacity: 0.7;\n}\n.input {\n  background: transparent;\n  border: 0;\n  color: #fff;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n  padding: 0.25em;\n  transition: border-bottom 150ms ease-in;\n  order: 2;\n}\n.input::-webkit-input-placeholder {\n  opacity: 0.4;\n}\n\n.input:-ms-input-placeholder {\n  opacity: 0.4;\n}\n\n.input::-ms-input-placeholder {\n  opacity: 0.4;\n}\n\n.input::placeholder {\n  opacity: 0.9;\n}\n\n.input:focus {\n  border-bottom-width: 3px;\n}\n\n.input:focus::-webkit-input-placeholder {\n  opacity: 0.15;\n}\n\n.input:focus:-ms-input-placeholder {\n  opacity: 0.15;\n}\n\n.input:focus::-ms-input-placeholder {\n  opacity: 0.15;\n}\n\n.input:focus::placeholder {\n  opacity: 0.15;\n}\n\n.btn-div {\n  font-family: \"Work Sans\", sans-serif;\n  position: relative;\n\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  height: 100px;\n  background-color: var(--clr-primary);\n}\n.edit-btn {\n  font-family: inherit;\n  font: inherit;\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  position: relative;\n  top: 10px;\n}\n.edit-btn:hover {\n  opacity: 0.7;\n}\n.check-box {\n  --size: 0.75em;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-right: var(--size);\n  cursor: pointer;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  transition: -webkit-transform 300ms ease-in-out;\n  transition: transform 300ms ease-in-out;\n  transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\n}\n\ninput[type=\"checkbox\"]:checked + td {\n  background: var(--clr-primary);\n  border-color: var(--clr-primary);\n  text-decoration: overline;\n  box-shadow: inset 0 0 0px 2px rgb(75, 73, 73);\n}\n\n#project-menu {\n  border-radius: 10px;\n  scrollbar-face-color: #f5f5f5;\n  scrollbar-track-color: 0 0 6px rgba(0, 0, 0, 0.3);\n  scrollbar-darkshadow-color: 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #f3f3f3;\n}\ntd.checked {\n  text-decoration: overline;\n  text-shadow: 2px 2px rgb(75, 73, 73);\n}\n.view-btn {\n  font-family: inherit;\n  font: inherit;\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  position: relative;\n}\n.view-btn:hover {\n  opacity: 0.7;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,oBAAoB;EACpB,gBAAgB;EAChB,8BAA8B;AAChC;AACA;;;EAGE,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,oCAAoC;EACpC,gBAAgB;EAChB,YAAY;EACZ,oCAAoC;EACpC,uBAAuB;EACvB,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;EACb;;;;;4BAK0B;AAC5B;AACA;EACE,kBAAkB;EAClB,QAAQ;;EAER,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,uCAAuC;AACzC;AACA;EACE,eAAe;EACf,aAAa;EACb,SAAS;EACT,UAAU;EACV,cAAc;EACd,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,UAAU;;EAEV,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,iCAAiC;AACnC;AACA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,eAAe;EACf,YAAY;AACd;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,aAAa;EACb,SAAS;EACT,UAAU;EACV,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,iCAAiC;AACnC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,eAAe;EACf,0CAA0C;EAC1C,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,mBAAmB;;EAEnB,yBAAyB;EACzB,6BAA6B;EAC7B,YAAY;EACZ,uBAAuB;EACvB,UAAU;EACV,eAAe;AACjB;AACA;EACE,aAAa;EACb,oBAAoB;EACpB,eAAe;EACf,aAAa;EACb,SAAS;EACT,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,uCAAuC;EACvC,QAAQ;AACV;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;;EAElB,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,oBAAoB;EACpB,aAAa;EACb,eAAe;EACf,aAAa;EACb,SAAS;EACT,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,2BAA2B;EAC3B,mBAAmB;EACnB,+CAA+C;EAC/C,uCAAuC;EACvC,4EAA4E;AAC9E;;AAEA;EACE,8BAA8B;EAC9B,gCAAgC;EAChC,yBAAyB;EACzB,6CAA6C;AAC/C;;AAEA;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,iDAAiD;EACjD,sDAAsD;EACtD,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,oCAAoC;AACtC;AACA;EACE,oBAAoB;EACpB,aAAa;EACb,eAAe;EACf,aAAa;EACb,SAAS;EACT,UAAU;EACV,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,YAAY;AACd","sourcesContent":[":root {\n  --clr-primary: rgb(54, 112, 199);\n  --clr-light: #f4f4f4;\n  --clr-dark: #333;\n  --clr-warning: rgb(99, 36, 36);\n}\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.all-tasks {\n  grid-area: lists;\n}\n.title {\n  grid-area: header;\n  text-align: center;\n  font-size: calc(7vw + 2rem);\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.1);\n  letter-spacing: 2px;\n  margin: -0.3em 0 0.5em;\n}\nbody {\n  margin: 0;\n  font-family: \"Work Sans\", sans-serif;\n  font-weight: 300;\n  height: 100%;\n  background-color: var(--clr-primary);\n  color: var(--clr-light);\n  font-family: sans-serif;\n  font-weight: 100;\n  display: grid;\n  grid:\n    \"header header header header\" auto \"...... lists  active ......\" auto/1fr minmax(\n      100px,\n      300px\n    )\n    minmax(250px, 500px) 1fr;\n}\n#container {\n  position: absolute;\n  top: 60%;\n\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\ntable {\n  width: 800px;\n  border-collapse: collapse;\n  overflow: hidden;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n#form-btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  align-self: stretch;\n  font: bold;\n  border-width: 1px;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 400;\n  height: 30px;\n  font: bold;\n\n  opacity: 0.7;\n}\n#form-btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n.btn.create:hover {\n  opacity: 0.7;\n}\n.check-box {\n  background-color: beige;\n}\n#form-btn:hover {\n  opacity: 1.2;\n}\n.big-box {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n#projects-menu {\n  position: relative;\n  grid-area: lists;\n  overflow: auto;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 350px;\n  width: 500px;\n  bottom: 150px;\n  right: 100px;\n}\n#projects-title {\n  position: relative;\n  bottom: 50px;\n  align-self: center;\n  font-family: \"Work sans\", sans-serif;\n  font-size: 30px;\n  color: white;\n}\n.project-grid {\n  overflow: auto;\n  align-self: center;\n  align-content: flex-start;\n  position: relative;\n  font-size: 1.2rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1.1em;\n  bottom: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n}\n.list-name {\n  cursor: pointer;\n}\n.list-name:hover {\n  opacity: 0.7;\n}\nform {\n  display: flex;\n}\n.project-btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  height: 20px;\n  position: relative;\n  top: 80px;\n  align-self: stretch;\n  align-content: flex-end;\n}\n.project-btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n.project-btn.create:hover {\n  opacity: 0.7;\n}\n.project-form {\n  position: relative;\n  bottom: 50px;\n}\n\nth,\ntd {\n  padding: 15px;\n  background-color: white;\n  color: var(--clr-dark);\n}\n\nth {\n  text-align: left;\n}\nthead {\n  background-color: #4d4e52;\n}\nth {\n  background-color: #4d4e52;\n}\ntr:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n}\ntd {\n  position: relative;\n  color: var(--clr-dark);\n}\ntd:hover::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -9999px;\n  bottom: -9999px;\n  background-color: rgba(255, 255, 255, 0.2);\n  z-index: -1;\n}\n.current {\n  position: relative;\n  bottom: 5px;\n  align-self: stretch;\n\n  align-content: flex-start;\n  background-color: transparent;\n  color: white;\n  font-family: sans-serif;\n  font: bold;\n  font-size: 20px;\n}\n.del-btn {\n  font: inherit;\n  font-family: inherit;\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  position: relative;\n  top: 10px;\n}\n.del-btn:hover {\n  opacity: 0.7;\n}\n.input {\n  background: transparent;\n  border: 0;\n  color: #fff;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n  padding: 0.25em;\n  transition: border-bottom 150ms ease-in;\n  order: 2;\n}\n.input::-webkit-input-placeholder {\n  opacity: 0.4;\n}\n\n.input:-ms-input-placeholder {\n  opacity: 0.4;\n}\n\n.input::-ms-input-placeholder {\n  opacity: 0.4;\n}\n\n.input::placeholder {\n  opacity: 0.9;\n}\n\n.input:focus {\n  border-bottom-width: 3px;\n}\n\n.input:focus::-webkit-input-placeholder {\n  opacity: 0.15;\n}\n\n.input:focus:-ms-input-placeholder {\n  opacity: 0.15;\n}\n\n.input:focus::-ms-input-placeholder {\n  opacity: 0.15;\n}\n\n.input:focus::placeholder {\n  opacity: 0.15;\n}\n\n.btn-div {\n  font-family: \"Work Sans\", sans-serif;\n  position: relative;\n\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  height: 100px;\n  background-color: var(--clr-primary);\n}\n.edit-btn {\n  font-family: inherit;\n  font: inherit;\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  position: relative;\n  top: 10px;\n}\n.edit-btn:hover {\n  opacity: 0.7;\n}\n.check-box {\n  --size: 0.75em;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-right: var(--size);\n  cursor: pointer;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  transition: -webkit-transform 300ms ease-in-out;\n  transition: transform 300ms ease-in-out;\n  transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\n}\n\ninput[type=\"checkbox\"]:checked + td {\n  background: var(--clr-primary);\n  border-color: var(--clr-primary);\n  text-decoration: overline;\n  box-shadow: inset 0 0 0px 2px rgb(75, 73, 73);\n}\n\n#project-menu {\n  border-radius: 10px;\n  scrollbar-face-color: #f5f5f5;\n  scrollbar-track-color: 0 0 6px rgba(0, 0, 0, 0.3);\n  scrollbar-darkshadow-color: 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #f3f3f3;\n}\ntd.checked {\n  text-decoration: overline;\n  text-shadow: 2px 2px rgb(75, 73, 73);\n}\n.view-btn {\n  font-family: inherit;\n  font: inherit;\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  position: relative;\n}\n.view-btn:hover {\n  opacity: 0.7;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskFormButton": () => (/* binding */ TaskFormButton),
/* harmony export */   "createProjectBtn": () => (/* binding */ createProjectBtn),
/* harmony export */   "projectsMenu": () => (/* binding */ projectsMenu),
/* harmony export */   "MenuApear": () => (/* binding */ MenuApear),
/* harmony export */   "CurrentProject": () => (/* binding */ CurrentProject),
/* harmony export */   "DisplayIf": () => (/* binding */ DisplayIf),
/* harmony export */   "AddBtns": () => (/* binding */ AddBtns),
/* harmony export */   "GetCurr": () => (/* binding */ GetCurr),
/* harmony export */   "IfChecked": () => (/* binding */ IfChecked)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");





const DisplayProject = (name) => {
  //if (project_name == "somestuff") {
  //}
  const container = document.querySelector("#container");
  const table = document.querySelector("table");
  const project = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getProjectbyName)(name);

  for (let item in project.tasks) {
    const row = table.insertRow();
    row.classList.add("tr");
    let title = row.insertCell(0);
    title.innerHTML = project.tasks[item].title;
    title.classList.add("label");
    let description = row.insertCell(1);
    description.innerHTML = project.tasks[item].description;
    let due = row.insertCell(2);
    due.innerHTML = project.tasks[item].dueDate;
    let priority = row.insertCell(3);
    priority.innerHTML = project.tasks[item].priority;
    let checklist = row.insertCell(4);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("check-box");
    checkbox.innerHTML = " ";
    checklist.appendChild(checkbox);
  }
};
const DisplayIf = (project) => {
  if (!project) {
    DisplayProject("Some-stuff");
    AddBtns();
  } else {
    const curr_project = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getProjectbyName)(project);
    let len = curr_project.tasks.length;
    const rows = document.querySelectorAll(".tr");
    rows.forEach((row) => {
      console.log(row);
      row.remove();
    });
    DisplayProject(curr_project.name);
    AddBtns();

    //get current len
    //delete apropriete amout of rows
  }
};

const TaskFormButton = () => {
  const container = document.querySelector("#container");
  const btn = document.querySelector("#form-btn");
  console.log("i'm here");
  btn.addEventListener("click", (e) => {
    btn.classList.add("create");
    let check = document.querySelector("#task-form");
    if (container.contains(check) == false) {
      console.log("wowza");
      const flex = document.createElement("div");
      let form = document.createElement("form");
      form.setAttribute("id", "task-form");
      let title = document.createElement("input");
      title.classList.add("input");
      title.setAttribute("id", "title");
      title.setAttribute("type", "text");
      title.setAttribute("name", "title");
      title.setAttribute("placeholder", "title");
      let desc = document.createElement("input");
      desc.classList.add("input");
      desc.setAttribute("id", "description");
      desc.setAttribute("type", "text");
      desc.setAttribute("name", "description");
      desc.setAttribute("placeholder", "description");
      let due = document.createElement("input");
      due.classList.add("input");
      due.setAttribute("id", "due-date");
      due.setAttribute("type", "text");
      due.setAttribute("name", "Due date");
      due.setAttribute("placeholder", "Due date");
      let prior = document.createElement("input");
      prior.classList.add("input");
      prior.setAttribute("id", "priority");
      prior.setAttribute("type", "text");
      prior.setAttribute("name", "priority");
      prior.setAttribute("placeholder", "priority");
      let submit = document.createElement("input");

      submit.setAttribute("type", "submit");
      submit.setAttribute("value", "Submit");
      container.appendChild(flex);
      flex.appendChild(form);
      form.appendChild(title);
      form.appendChild(desc);
      form.appendChild(due);
      form.appendChild(prior);
      form.appendChild(submit);
      submit.addEventListener("click", (e) => {
        const p = document.querySelector(".current");
        let proj_name = p.innerHTML;
        const item = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.CreateTask)(
          title.value,
          desc.value,
          due.value,
          prior.value
        );
        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.AddTasks)(proj_name, item);
      });
    }
  });
};

const projectsMenu = () => {
  //const container=document.querySelector("#container");
  const container = document.querySelector("#projects-menu");

  const grid = document.createElement("ul");
  grid.classList.add("project-grid");
  const retrievedProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)();
  console.log(retrievedProjects);
  for (let project in retrievedProjects) {
    const box = document.createElement("li");
    box.classList.add("list-name");
    box.innerHTML = retrievedProjects[project].name;
    const view = document.createElement("button");
    view.setAttribute("name", retrievedProjects[project].name);

    view.innerHTML = "View";
    view.classList.add("view-btn");
    view.addEventListener("click", View);
    // const add=document.createElement('button')
    grid.appendChild(box);
    grid.appendChild(view);
  }
  container.appendChild(grid);
};
const View = (e) => {
  let name = e.target.name;
  console.log(name);
  CurrentProject(name);
  DisplayIf(name);

  displaynew = true;
};

const createProjectBtn = () => {
  const container = document.querySelector("#projects-menu");
  const btn = document.createElement("button");
  btn.innerHTML = "+";
  btn.classList.add("project-btn");
  btn.addEventListener("click", (e) => {
    btn.classList.add("create");
    let form = document.createElement("form");
    form.classList.add("project-form");
    let name = document.createElement("input");
    name.classList.add("input");

    name.setAttribute("id", "name");
    name.setAttribute("type", "text");
    name.setAttribute("name", "name");
    name.setAttribute("placeholder", "project's name");
    name.classList.add("project-inpt");
    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.addEventListener("click", (e) => {
      let tasks = [];
      if (!name.value) {
        alert("You have to name the project!");
        return;
      }
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.AddProject)(name.value, tasks);
    });
    form.appendChild(name);
    form.appendChild(submit);
    container.appendChild(form);
  });
  container.appendChild(btn);
};
const MenuApear = () => {
  const p = document.querySelector("#projects-title");
  const grid = document.querySelectorAll(".project-grid");
  if (grid.length === 0) {
    p.addEventListener("click", (e) => {
      createProjectBtn();
      projectsMenu();
    });
  }
};
const CurrentProject = (title) => {
  const p = document.querySelector(".current");
  p.innerHTML = title;
};
const AddBtns = () => {
  const container = document.querySelector("#container");
  const rows = container.querySelectorAll("tr");
  const current = GetCurr();
  const curr_project = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getProjectbyName)(current);
  let new_project = new _projects_js__WEBPACK_IMPORTED_MODULE_2__["default"](current);
  new_project.setTasks(curr_project.tasks);
  console.log(new_project);
  rows.forEach((row, index) => {
    if (index > 0) {
      //create new objec get shit from that
      //let name = new_project.tasks[index - 1].title;
      let name = new_project.tasks[index - 1].title;
      console.log(name);
      let btn_div = document.createElement("div");
      btn_div.classList.add("btn-div");
      let edit_btn = document.createElement("button");
      edit_btn.classList.add("edit-btn");
      edit_btn.innerHTML = "EDIT";
      edit_btn.addEventListener("click", Edit.bind(undefined, row));
      //console.log(name);
      let btn = document.createElement("button");
      btn.classList.add("del-btn");
      btn.innerHTML = "DELETE";
      btn.addEventListener("click", (e) => {
        new_project.deleteTask(name);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.RemoveProject)(current);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeSingle)(new_project);
        DisplayIf(new_project.name);
      });

      btn_div.appendChild(btn);
      btn_div.appendChild(edit_btn);
      row.append(btn_div);
    }
  });
};

const Edit = function (row) {
  const ChooseAction = (e) => {
    e.target.removeEventListener("click", ChooseAction);
    if (e.target.getAttribute("data-idx") == 4) {
      IfChecked();
      return;
    }

    let input = document.createElement("input");
    input.classList.add("input");
    let placeholder = e.target.innerHTML;
    input.setAttribute("placeholder", `"${placeholder}"`);
    input.setAttribute("type", "text");
    input.classList.add("inpt-edit");
    input.setAttribute("data-idx", e.target.getAttribute("data-idx"));

    e.target.appendChild(input);
    const btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    console.log("kill me");
    let indx = e.target.getAttribute("data-idx");
    console.log(indx);

    btn.setAttribute("data-idx", indx);
    let inside_result = e.target.innerHTML;
    let results = inside_result.split("<");
    let the_name = results[0];
    btn.innerHTML = "SUBMIT CHANGES";
    btn.classList.add("edit-btn-submit");
    e.target.appendChild(btn);

    btn.addEventListener("click", (event) => {
      console.log("give it to me");
      let inputs = document.querySelectorAll(".inpt-edit");
      let listOfinputs = [...inputs];
      console.log(event.target.getAttribute("data-idx"));
      let current = GetCurr();
      if (event.target.getAttribute("data-idx") == 0) {
        const found0 = listOfinputs.find(
          (inpt) => inpt.getAttribute("data-idx") == 0
        );
        if (!found0.value) {
          alert("You have to type something in!");
        }
        console.log(the_name);
        console.log(found0.value);
        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.RenameTask)(the_name, found0.value);

        DisplayIf(current);
      }
      if (e.target.getAttribute("data-idx") == 1) {
        const found1 = listOfinputs.find(
          (inpt) => inpt.getAttribute("data-idx") == 1
        );
        if (!found1.value) {
          alert("You have to type something in!");
        }
        console.log(found1.value);
        console.log(the_name);
        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.ChangeDescription)(the_name, found1.value);
        DisplayIf(current);
      }
      if (e.target.getAttribute("data-idx") == 2) {
        const found2 = listOfinputs.find(
          (inpt) => inpt.getAttribute("data-idx") == 2
        );
        if (!found2.value) {
          alert("You have to type something in!");
        }
        console.log(found2.value);
        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.ChangeDate)(the_name, found2.value);
        DisplayIf(current);
      }
      if (e.target.getAttribute("data-idx") == 3) {
        const found3 = listOfinputs.find(
          (inpt) => inpt.getAttribute("data-idx") == 3
        );
        if (!found3.value) {
          alert("You have to type something in!");
        }
        console.log(found3.value);
        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.ChangePriority)(the_name, found3.value);
        DisplayIf(current);
      }
    });
  };

  for (var j = 0, col; (col = row.cells[j]); j++) {
    col.setAttribute("data-idx", j);
    col.addEventListener("click", ChooseAction);
  }
  //if (e.target.getAttribute("data-idx") == 4) {
  // const checkbox = document.querySelector(".check-box");
  //  const check_stem = document.createElement("div");
  // check_stem.classList.add("check-stem");
  //  const check_kick = document.createElement("div");
  // check_kick.classList.add("check-kick");
  // checkbox.appendChild(check_stem);
  //checkbox.appendChild(check_kick);
  //}

  // const submit=document.createElement('input')
  // submit.setAttribute("type", 'submit');
  // submit.innerHTML=" Comit Changes";
};

const GetCurr = () => {
  const p = document.querySelector(".current");
  const current = p.innerHTML;
  return current;
};
const IfChecked = () => {
  const checkboxes = document.querySelectorAll(".check-box");
  const td = document.querySelectorAll("td");
  checkboxes.forEach((box) => {
    if (box.checked) {
      td.forEach((td) => {
        td.classList.add("checked");
      });
    }
  });
};




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "createDefault": () => (/* binding */ createDefault),
/* harmony export */   "projectsList": () => (/* binding */ projectsList),
/* harmony export */   "AddProject": () => (/* binding */ AddProject),
/* harmony export */   "AddTasky": () => (/* binding */ AddTasky)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.title;
  }
  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }
  getTaskbyDiscr(taskName) {
    let found = this.tasks.find((task) => task.description == taskName);
    return found;
  }
  getTaskbyDate(taskName) {
    let found = this.tasks.find((task) => task.dueDate == taskName);
    return found;
  }
  getTaskbyPrior(taskName) {
    let found = this.tasks.find((task) => task.priority == taskName);
    return found;
  }
  getTask(taskName) {
    let found = this.tasks.find((task) => task.title == taskName);
    return found;
  }
  addTask(newTask) {
    //if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.title !== taskName);
  }
}
let projectsList = [];
const createDefault = () => {
  let defaultProject = new Project("Some-stuff");
  defaultProject.setTasks(_tasks_js__WEBPACK_IMPORTED_MODULE_0__.defaultList);
  projectsList.push(defaultProject);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeSingle)(defaultProject);
  console.log(localStorage);
};
const AddProject = (name, tasks) => {
  let retrievedProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)();
  let project = new Project(name);
  project.setTasks(tasks);
  projectsList.push(project);

  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeSingle)(project);
};
const AddTasky = (project, newTask) => {
  if (project.tasks.find((task) => task.getName() === newTask.name)) return;
  project.tasks.push(newTask);
};
//const CheckStore=()=>{
// listofnums=['']
//if(localStorage.getItem("project"))
//}
//if (localStorage.getItem("project") === null) {
///storeProjects(projectsList);
//}



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeList": () => (/* binding */ storeList),
/* harmony export */   "getList": () => (/* binding */ getList),
/* harmony export */   "storeProjects": () => (/* binding */ storeProjects),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "storeSingle": () => (/* binding */ storeSingle),
/* harmony export */   "getDefault": () => (/* binding */ getDefault),
/* harmony export */   "getProjectbyName": () => (/* binding */ getProjectbyName),
/* harmony export */   "RemoveProject": () => (/* binding */ RemoveProject)
/* harmony export */ });
const storeList = (list) => {
  localStorage.setItem("list", JSON.stringify(list));

  console.log(localStorage);
};
const getList = () => {
  let localArray = localStorage.getItem("list");

  let retrievedArray = JSON.parse(localArray);

  return retrievedArray;
};
const storeSingle = (project) => {
  let name = project.name;
  localStorage.setItem(name, JSON.stringify(project));
  console.log(localStorage);
};
const storeProjects = (projects) => {
  for (let i = 0; i < projects.length; i++) {
    localStorage.setItem(`"project${i}"`, JSON.stringify(projects[i]));
  }
  console.log(localStorage);
};
const getDefault = () => {
  let item = JSON.parse(localStorage.getItem("Some-stuff"));
  return item;
};
const getProjectbyName = (name) => {
  let item = JSON.parse(localStorage.getItem(name));
  return item;
};
const getProjects = () => {
  let retrievedProjects = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    retrievedProjects.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  return retrievedProjects;
};
const RemoveProject = (name) => {
  localStorage.removeItem(name);
};




/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToItems": () => (/* binding */ AddToItems),
/* harmony export */   "defaultList": () => (/* binding */ defaultList),
/* harmony export */   "AddTasks": () => (/* binding */ AddTasks),
/* harmony export */   "CreateTask": () => (/* binding */ CreateTask),
/* harmony export */   "RenameTask": () => (/* binding */ RenameTask),
/* harmony export */   "ChangeDate": () => (/* binding */ ChangeDate),
/* harmony export */   "ChangePriority": () => (/* binding */ ChangePriority),
/* harmony export */   "ChangeDescription": () => (/* binding */ ChangeDescription)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");






const Taskfactory = (title, description, dueDate, priority) => {
  let checklist = false;
  return { title, description, dueDate, priority, checklist };
};

let defaultList = [];
let someitem = Taskfactory(
  "something to do",
  "what do i want do do?",
  "when do i need to get it done by?",
  "How bad do i need to get it done?"
);
defaultList.push(someitem);

//if (localStorage.getItem("list") === null) {
//  storeList(defaultList);
//}

console.log(localStorage);
const AddToItems = (title_inp, description_inp, dueDate_inp, priority_inp) => {
  const retrievedArray = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getList)();
  const item = Taskfactory(
    title_inp,
    description_inp,
    dueDate_inp,
    priority_inp
  );

  retrievedArray.push(item);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeList)(retrievedArray);
  console.log(localStorage);
};
const CreateTask = (title_inp, description_inp, dueDate_inp, priority_inp) => {
  const item = Taskfactory(
    title_inp,
    description_inp,
    dueDate_inp,
    priority_inp
  );
  return item;
};
const AddTasks = (project_name, task) => {
  const project = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getProjectbyName)(project_name);
  let new_project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](project_name);
  new_project.setTasks(project.tasks);
  new_project.addTask(task);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.RemoveProject)(project_name);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeSingle)(new_project);
};
const RenameTask = (old_tname, new_tname) => {
  let project_name = (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.GetCurr)();
  const current = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getProjectbyName)(project_name);

  let new_project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](project_name);
  new_project.setTasks(current.tasks);
  console.log(new_project);
  const old_task = new_project.getTask(old_tname);
  console.log(old_task);
  let new_task = CreateTask(
    new_tname,
    old_task.description,
    old_task.dueDate,
    old_task.priority
  );
  new_project.deleteTask(old_tname);
  new_project.addTask(new_task);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.RemoveProject)(project_name);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeSingle)(new_project);
  console.log(localStorage);
};
const ChangeDate = (task_name, new_date) => {
  let project_name = (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.GetCurr)();
  const current = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getProjectbyName)(project_name);

  let new_project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](project_name);
  new_project.setTasks(current.tasks);

  const old_task = new_project.getTaskbyDate(task_name);
  console.log(old_task);
  let new_task = CreateTask(
    old_task.title,
    old_task.description,
    new_date,
    old_task.priority
  );
  new_project.deleteTask(old_tname);
  new_project.addTask(new_task);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.RemoveProject)(project_name);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeSingle)(new_project);
};
const ChangePriority = (task_name, new_prior) => {
  let project_name = (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.GetCurr)();
  const current = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getProjectbyName)(project_name);

  let new_project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](project_name);
  new_project.setTasks(current.tasks);

  const old_task = new_project.getTaskbyPrior(task_name);
  console.log(old_task);
  let new_task = CreateTask(
    old_task.title,
    old_task.description,
    old_task.dueDate,
    new_prior
  );
  new_project.deleteTask(old_tname);
  new_project.addTask(new_task);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.RemoveProject)(project_name);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeSingle)(new_project);
};
const ChangeDescription = (task_name, new_description) => {
  let project_name = (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.GetCurr)();
  const current = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getProjectbyName)(project_name);

  let new_project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](project_name);
  new_project.setTasks(current.tasks);

  const old_task = new_project.getTaskbyDiscr(task_name);
  console.log(old_task);

  let new_task = CreateTask(
    old_task.title,
    new_description,
    old_task.dueDate,
    old_task.priority
  );
  new_project.deleteTask(old_task.title);
  new_project.addTask(new_task);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.RemoveProject)(project_name);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeSingle)(new_project);
};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.TaskFormButton)();
(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.IfChecked)();
//createDefault();
(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.DisplayIf)();
//storeSingle(projectsList);
//storeProjects(projectsList);
(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.MenuApear)();

(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.CurrentProject)("Some-stuff");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FB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bEpGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ2tCO0FBQ3RCO0FBV2hCO0FBT0E7QUFDRDs7QUFFckIsMkRBQWM7QUFDZCxzREFBUztBQUNUO0FBQ0Esc0RBQVM7QUFDVDtBQUNBO0FBQ0Esc0RBQVM7O0FBRVQsMkRBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNsci1wcmltYXJ5OiByZ2IoNTQsIDExMiwgMTk5KTtcXG4gIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcbiAgLS1jbHItZGFyazogIzMzMztcXG4gIC0tY2xyLXdhcm5pbmc6IHJnYig5OSwgMzYsIDM2KTtcXG59XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYWxsLXRhc2tzIHtcXG4gIGdyaWQtYXJlYTogbGlzdHM7XFxufVxcbi50aXRsZSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyg3dncgKyAycmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIGF1dG8gXFxcIi4uLi4uLiBsaXN0cyAgYWN0aXZlIC4uLi4uLlxcXCIgYXV0by8xZnIgbWlubWF4KFxcbiAgICAgIDEwMHB4LFxcbiAgICAgIDMwMHB4XFxuICAgIClcXG4gICAgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjAlO1xcblxcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG50YWJsZSB7XFxuICB3aWR0aDogODAwcHg7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuI2Zvcm0tYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZm9udDogYm9sZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQ6IGJvbGQ7XFxuXFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbiNmb3JtLWJ0bi5jcmVhdGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxufVxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuLmNoZWNrLWJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuI2Zvcm0tYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDEuMjtcXG59XFxuLmJpZy1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jcHJvamVjdHMtbWVudSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWFyZWE6IGxpc3RzO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJvdHRvbTogMTUwcHg7XFxuICByaWdodDogMTAwcHg7XFxufVxcbiNwcm9qZWN0cy10aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIldvcmsgc2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcm9qZWN0LWdyaWQge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXG4gIGJvdHRvbTogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5saXN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogODBweDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLnByb2plY3QtYnRuLmNyZWF0ZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG59XFxuLnByb2plY3QtYnRuLmNyZWF0ZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiA1MHB4O1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcbn1cXG5cXG50aCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG50aGVhZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZTUyO1xcbn1cXG50aCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZTUyO1xcbn1cXG50cjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcbnRkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxufVxcbnRkOmhvdmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IC05OTk5cHg7XFxuICBib3R0b206IC05OTk5cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmN1cnJlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcblxcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uZGVsLWJ0biB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMHB4O1xcbn1cXG4uZGVsLWJ0bjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbi5pbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XFxuICBvcmRlcjogMjtcXG59XFxuLmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxufVxcblxcbi5pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDAuMTU7XFxufVxcblxcbi5pbnB1dDpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDAuMTU7XFxufVxcblxcbi5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMC4xNTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcbi5lZGl0LWJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMHB4O1xcbn1cXG4uZWRpdC1idG46aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG4uY2hlY2stYm94IHtcXG4gIC0tc2l6ZTogMC43NWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgdGQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggcmdiKDc1LCA3MywgNzMpO1xcbn1cXG5cXG4jcHJvamVjdC1tZW51IHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogI2Y1ZjVmNTtcXG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBzY3JvbGxiYXItZGFya3NoYWRvdy1jb2xvcjogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG50ZC5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoNzUsIDczLCA3Myk7XFxufVxcbi52aWV3LWJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udmlldy1idG46aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDO0FBQ0E7OztFQUdFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qs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LGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxuICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXG4gIC0tY2xyLWRhcms6ICMzMzM7XFxuICAtLWNsci13YXJuaW5nOiByZ2IoOTksIDM2LCAzNik7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmFsbC10YXNrcyB7XFxuICBncmlkLWFyZWE6IGxpc3RzO1xcbn1cXG4udGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoN3Z3ICsgMnJlbSk7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBtYXJnaW46IC0wLjNlbSAwIDAuNWVtO1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBhdXRvIFxcXCIuLi4uLi4gbGlzdHMgIGFjdGl2ZSAuLi4uLi5cXFwiIGF1dG8vMWZyIG1pbm1heChcXG4gICAgICAxMDBweCxcXG4gICAgICAzMDBweFxcbiAgICApXFxuICAgIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmcjtcXG59XFxuI2NvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDYwJTtcXG5cXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxudGFibGUge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbiNmb3JtLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGZvbnQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250OiBib2xkO1xcblxcbiAgb3BhY2l0eTogMC43O1xcbn1cXG4jZm9ybS1idG4uY3JlYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbi5jaGVjay1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxufVxcbiNmb3JtLWJ0bjpob3ZlciB7XFxuICBvcGFjaXR5OiAxLjI7XFxufVxcbi5iaWctYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3Byb2plY3RzLW1lbnUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1hcmVhOiBsaXN0cztcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3R0b206IDE1MHB4O1xcbiAgcmlnaHQ6IDEwMHB4O1xcbn1cXG4jcHJvamVjdHMtdGl0bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIHNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJvamVjdC1ncmlkIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gIHBhZGRpbmctbGVmdDogMS4xZW07XFxuICBib3R0b206IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubGlzdC1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpc3QtbmFtZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2plY3QtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDgwcHg7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5wcm9qZWN0LWJ0bi5jcmVhdGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxufVxcbi5wcm9qZWN0LWJ0bi5jcmVhdGU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG4ucHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogNTBweDtcXG59XFxuXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXG59XFxuXFxudGgge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxudGhlYWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNGU1MjtcXG59XFxudGgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNGU1MjtcXG59XFxudHI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG50ZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcbn1cXG50ZDpob3Zlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAtOTk5OXB4O1xcbiAgYm90dG9tOiAtOTk5OXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5jdXJyZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogNXB4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmRlbC1idG4ge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTBweDtcXG59XFxuLmRlbC1idG46aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG4uaW5wdXQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xcbiAgb3JkZXI6IDI7XFxufVxcbi5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMC4xNTtcXG59XFxuXFxuLmlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXM6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDAuMTU7XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG4uZWRpdC1idG4ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTBweDtcXG59XFxuLmVkaXQtYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuLmNoZWNrLWJveCB7XFxuICAtLXNpemU6IDAuNzVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIHRkIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMnB4IHJnYig3NSwgNzMsIDczKTtcXG59XFxuXFxuI3Byb2plY3QtbWVudSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICNmNWY1ZjU7XFxuICBzY3JvbGxiYXItdHJhY2stY29sb3I6IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgc2Nyb2xsYmFyLWRhcmtzaGFkb3ctY29sb3I6IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG59XFxudGQuY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiKDc1LCA3MywgNzMpO1xcbn1cXG4udmlldy1idG4ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnZpZXctYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBkZWZhdWx0TGlzdCxcbiAgQWRkVG9JdGVtcyxcbiAgQWRkVGFza3MsXG4gIENyZWF0ZVRhc2ssXG4gIFJlbmFtZVRhc2ssXG4gIENoYW5nZURhdGUsXG4gIENoYW5nZVByaW9yaXR5LFxuICBDaGFuZ2VEZXNjcmlwdGlvbixcbn0gZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCB7XG4gIGdldExpc3QsXG4gIGdldFByb2plY3RzLFxuICBnZXREZWZhdWx0LFxuICBnZXRQcm9qZWN0YnlOYW1lLFxuICBSZW1vdmVQcm9qZWN0LFxuICBzdG9yZVNpbmdsZSxcbn0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0LCBBZGRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IERpc3BsYXlQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgLy9pZiAocHJvamVjdF9uYW1lID09IFwic29tZXN0dWZmXCIpIHtcbiAgLy99XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RieU5hbWUobmFtZSk7XG5cbiAgZm9yIChsZXQgaXRlbSBpbiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJ0clwiKTtcbiAgICBsZXQgdGl0bGUgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRhc2tzW2l0ZW1dLnRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsYWJlbFwiKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSByb3cuaW5zZXJ0Q2VsbCgxKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0LnRhc2tzW2l0ZW1dLmRlc2NyaXB0aW9uO1xuICAgIGxldCBkdWUgPSByb3cuaW5zZXJ0Q2VsbCgyKTtcbiAgICBkdWUuaW5uZXJIVE1MID0gcHJvamVjdC50YXNrc1tpdGVtXS5kdWVEYXRlO1xuICAgIGxldCBwcmlvcml0eSA9IHJvdy5pbnNlcnRDZWxsKDMpO1xuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IHByb2plY3QudGFza3NbaXRlbV0ucHJpb3JpdHk7XG4gICAgbGV0IGNoZWNrbGlzdCA9IHJvdy5pbnNlcnRDZWxsKDQpO1xuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrLWJveFwiKTtcbiAgICBjaGVja2JveC5pbm5lckhUTUwgPSBcIiBcIjtcbiAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICB9XG59O1xuY29uc3QgRGlzcGxheUlmID0gKHByb2plY3QpID0+IHtcbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgRGlzcGxheVByb2plY3QoXCJTb21lLXN0dWZmXCIpO1xuICAgIEFkZEJ0bnMoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjdXJyX3Byb2plY3QgPSBnZXRQcm9qZWN0YnlOYW1lKHByb2plY3QpO1xuICAgIGxldCBsZW4gPSBjdXJyX3Byb2plY3QudGFza3MubGVuZ3RoO1xuICAgIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyXCIpO1xuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyb3cpO1xuICAgICAgcm93LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIERpc3BsYXlQcm9qZWN0KGN1cnJfcHJvamVjdC5uYW1lKTtcbiAgICBBZGRCdG5zKCk7XG5cbiAgICAvL2dldCBjdXJyZW50IGxlblxuICAgIC8vZGVsZXRlIGFwcm9wcmlldGUgYW1vdXQgb2Ygcm93c1xuICB9XG59O1xuXG5jb25zdCBUYXNrRm9ybUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1idG5cIik7XG4gIGNvbnNvbGUubG9nKFwiaSdtIGhlcmVcIik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImNyZWF0ZVwiKTtcbiAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGNoZWNrKSA9PSBmYWxzZSkge1xuICAgICAgY29uc29sZS5sb2coXCJ3b3d6YVwiKTtcbiAgICAgIGNvbnN0IGZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWZvcm1cIik7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcInRpdGxlXCIpO1xuICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICBkZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBkdWUuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgICAgZHVlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGVcIik7XG4gICAgICBkdWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICBkdWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkR1ZSBkYXRlXCIpO1xuICAgICAgZHVlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRHVlIGRhdGVcIik7XG4gICAgICBsZXQgcHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBwcmlvci5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgICBwcmlvci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgcHJpb3Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICBwcmlvci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgICBwcmlvci5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmxleCk7XG4gICAgICBmbGV4LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWUpO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcik7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRcIik7XG4gICAgICAgIGxldCBwcm9qX25hbWUgPSBwLmlubmVySFRNTDtcbiAgICAgICAgY29uc3QgaXRlbSA9IENyZWF0ZVRhc2soXG4gICAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgICAgZGVzYy52YWx1ZSxcbiAgICAgICAgICBkdWUudmFsdWUsXG4gICAgICAgICAgcHJpb3IudmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgQWRkVGFza3MocHJval9uYW1lLCBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBwcm9qZWN0c01lbnUgPSAoKSA9PiB7XG4gIC8vY29uc3QgY29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLW1lbnVcIik7XG5cbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1ncmlkXCIpO1xuICBjb25zdCByZXRyaWV2ZWRQcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gIGNvbnNvbGUubG9nKHJldHJpZXZlZFByb2plY3RzKTtcbiAgZm9yIChsZXQgcHJvamVjdCBpbiByZXRyaWV2ZWRQcm9qZWN0cykge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZChcImxpc3QtbmFtZVwiKTtcbiAgICBib3guaW5uZXJIVE1MID0gcmV0cmlldmVkUHJvamVjdHNbcHJvamVjdF0ubmFtZTtcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB2aWV3LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgcmV0cmlldmVkUHJvamVjdHNbcHJvamVjdF0ubmFtZSk7XG5cbiAgICB2aWV3LmlubmVySFRNTCA9IFwiVmlld1wiO1xuICAgIHZpZXcuY2xhc3NMaXN0LmFkZChcInZpZXctYnRuXCIpO1xuICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFZpZXcpO1xuICAgIC8vIGNvbnN0IGFkZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICBncmlkLmFwcGVuZENoaWxkKHZpZXcpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcbn07XG5jb25zdCBWaWV3ID0gKGUpID0+IHtcbiAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgQ3VycmVudFByb2plY3QobmFtZSk7XG4gIERpc3BsYXlJZihuYW1lKTtcblxuICBkaXNwbGF5bmV3ID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtbWVudVwiKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlubmVySFRNTCA9IFwiK1wiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuXCIpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVcIik7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG5cbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFtZVwiKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcInByb2plY3QncyBuYW1lXCIpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdFwiKTtcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsZXQgdGFza3MgPSBbXTtcbiAgICAgIGlmICghbmFtZS52YWx1ZSkge1xuICAgICAgICBhbGVydChcIllvdSBoYXZlIHRvIG5hbWUgdGhlIHByb2plY3QhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBBZGRQcm9qZWN0KG5hbWUudmFsdWUsIHRhc2tzKTtcbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbn07XG5jb25zdCBNZW51QXBlYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLXRpdGxlXCIpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWdyaWRcIik7XG4gIGlmIChncmlkLmxlbmd0aCA9PT0gMCkge1xuICAgIHAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjcmVhdGVQcm9qZWN0QnRuKCk7XG4gICAgICBwcm9qZWN0c01lbnUoKTtcbiAgICB9KTtcbiAgfVxufTtcbmNvbnN0IEN1cnJlbnRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRcIik7XG4gIHAuaW5uZXJIVE1MID0gdGl0bGU7XG59O1xuY29uc3QgQWRkQnRucyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG4gIGNvbnN0IHJvd3MgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcInRyXCIpO1xuICBjb25zdCBjdXJyZW50ID0gR2V0Q3VycigpO1xuICBjb25zdCBjdXJyX3Byb2plY3QgPSBnZXRQcm9qZWN0YnlOYW1lKGN1cnJlbnQpO1xuICBsZXQgbmV3X3Byb2plY3QgPSBuZXcgUHJvamVjdChjdXJyZW50KTtcbiAgbmV3X3Byb2plY3Quc2V0VGFza3MoY3Vycl9wcm9qZWN0LnRhc2tzKTtcbiAgY29uc29sZS5sb2cobmV3X3Byb2plY3QpO1xuICByb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAvL2NyZWF0ZSBuZXcgb2JqZWMgZ2V0IHNoaXQgZnJvbSB0aGF0XG4gICAgICAvL2xldCBuYW1lID0gbmV3X3Byb2plY3QudGFza3NbaW5kZXggLSAxXS50aXRsZTtcbiAgICAgIGxldCBuYW1lID0gbmV3X3Byb2plY3QudGFza3NbaW5kZXggLSAxXS50aXRsZTtcbiAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgbGV0IGJ0bl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYnRuX2Rpdi5jbGFzc0xpc3QuYWRkKFwiYnRuLWRpdlwiKTtcbiAgICAgIGxldCBlZGl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idG5cIik7XG4gICAgICBlZGl0X2J0bi5pbm5lckhUTUwgPSBcIkVESVRcIjtcbiAgICAgIGVkaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBFZGl0LmJpbmQodGhpcywgcm93KSk7XG4gICAgICAvL2NvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRlbC1idG5cIik7XG4gICAgICBidG4uaW5uZXJIVE1MID0gXCJERUxFVEVcIjtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbmV3X3Byb2plY3QuZGVsZXRlVGFzayhuYW1lKTtcbiAgICAgICAgUmVtb3ZlUHJvamVjdChjdXJyZW50KTtcbiAgICAgICAgc3RvcmVTaW5nbGUobmV3X3Byb2plY3QpO1xuICAgICAgICBEaXNwbGF5SWYobmV3X3Byb2plY3QubmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgYnRuX2Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgYnRuX2Rpdi5hcHBlbmRDaGlsZChlZGl0X2J0bik7XG4gICAgICByb3cuYXBwZW5kKGJ0bl9kaXYpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBFZGl0ID0gZnVuY3Rpb24gKHJvdykge1xuICBjb25zdCBDaG9vc2VBY3Rpb24gPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBDaG9vc2VBY3Rpb24pO1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkeFwiKSA9PSA0KSB7XG4gICAgICBJZkNoZWNrZWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIGxldCBwbGFjZWhvbGRlciA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBgXCIke3BsYWNlaG9sZGVyfVwiYCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHQtZWRpdFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkeFwiLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkeFwiKSk7XG5cbiAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGNvbnNvbGUubG9nKFwia2lsbCBtZVwiKTtcbiAgICBsZXQgaW5keCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWR4XCIpO1xuICAgIGNvbnNvbGUubG9nKGluZHgpO1xuXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaWR4XCIsIGluZHgpO1xuICAgIGxldCBpbnNpZGVfcmVzdWx0ID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgIGxldCByZXN1bHRzID0gaW5zaWRlX3Jlc3VsdC5zcGxpdChcIjxcIik7XG4gICAgbGV0IHRoZV9uYW1lID0gcmVzdWx0c1swXTtcbiAgICBidG4uaW5uZXJIVE1MID0gXCJTVUJNSVQgQ0hBTkdFU1wiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idG4tc3VibWl0XCIpO1xuICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJnaXZlIGl0IHRvIG1lXCIpO1xuICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdC1lZGl0XCIpO1xuICAgICAgbGV0IGxpc3RPZmlucHV0cyA9IFsuLi5pbnB1dHNdO1xuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWR4XCIpKTtcbiAgICAgIGxldCBjdXJyZW50ID0gR2V0Q3VycigpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkeFwiKSA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kMCA9IGxpc3RPZmlucHV0cy5maW5kKFxuICAgICAgICAgIChpbnB0KSA9PiBpbnB0LmdldEF0dHJpYnV0ZShcImRhdGEtaWR4XCIpID09IDBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFmb3VuZDAudmFsdWUpIHtcbiAgICAgICAgICBhbGVydChcIllvdSBoYXZlIHRvIHR5cGUgc29tZXRoaW5nIGluIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGVfbmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvdW5kMC52YWx1ZSk7XG4gICAgICAgIFJlbmFtZVRhc2sodGhlX25hbWUsIGZvdW5kMC52YWx1ZSk7XG5cbiAgICAgICAgRGlzcGxheUlmKGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWR4XCIpID09IDEpIHtcbiAgICAgICAgY29uc3QgZm91bmQxID0gbGlzdE9maW5wdXRzLmZpbmQoXG4gICAgICAgICAgKGlucHQpID0+IGlucHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZHhcIikgPT0gMVxuICAgICAgICApO1xuICAgICAgICBpZiAoIWZvdW5kMS52YWx1ZSkge1xuICAgICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgdG8gdHlwZSBzb21ldGhpbmcgaW4hXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGZvdW5kMS52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoZV9uYW1lKTtcbiAgICAgICAgQ2hhbmdlRGVzY3JpcHRpb24odGhlX25hbWUsIGZvdW5kMS52YWx1ZSk7XG4gICAgICAgIERpc3BsYXlJZihjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkeFwiKSA9PSAyKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kMiA9IGxpc3RPZmlucHV0cy5maW5kKFxuICAgICAgICAgIChpbnB0KSA9PiBpbnB0LmdldEF0dHJpYnV0ZShcImRhdGEtaWR4XCIpID09IDJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFmb3VuZDIudmFsdWUpIHtcbiAgICAgICAgICBhbGVydChcIllvdSBoYXZlIHRvIHR5cGUgc29tZXRoaW5nIGluIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhmb3VuZDIudmFsdWUpO1xuICAgICAgICBDaGFuZ2VEYXRlKHRoZV9uYW1lLCBmb3VuZDIudmFsdWUpO1xuICAgICAgICBEaXNwbGF5SWYoY3VycmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZHhcIikgPT0gMykge1xuICAgICAgICBjb25zdCBmb3VuZDMgPSBsaXN0T2ZpbnB1dHMuZmluZChcbiAgICAgICAgICAoaW5wdCkgPT4gaW5wdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkeFwiKSA9PSAzXG4gICAgICAgICk7XG4gICAgICAgIGlmICghZm91bmQzLnZhbHVlKSB7XG4gICAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSB0byB0eXBlIHNvbWV0aGluZyBpbiFcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZm91bmQzLnZhbHVlKTtcbiAgICAgICAgQ2hhbmdlUHJpb3JpdHkodGhlX25hbWUsIGZvdW5kMy52YWx1ZSk7XG4gICAgICAgIERpc3BsYXlJZihjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBqID0gMCwgY29sOyAoY29sID0gcm93LmNlbGxzW2pdKTsgaisrKSB7XG4gICAgY29sLnNldEF0dHJpYnV0ZShcImRhdGEtaWR4XCIsIGopO1xuICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQ2hvb3NlQWN0aW9uKTtcbiAgfVxuICAvL2lmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkeFwiKSA9PSA0KSB7XG4gIC8vIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVjay1ib3hcIik7XG4gIC8vICBjb25zdCBjaGVja19zdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gY2hlY2tfc3RlbS5jbGFzc0xpc3QuYWRkKFwiY2hlY2stc3RlbVwiKTtcbiAgLy8gIGNvbnN0IGNoZWNrX2tpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyBjaGVja19raWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVjay1raWNrXCIpO1xuICAvLyBjaGVja2JveC5hcHBlbmRDaGlsZChjaGVja19zdGVtKTtcbiAgLy9jaGVja2JveC5hcHBlbmRDaGlsZChjaGVja19raWNrKTtcbiAgLy99XG5cbiAgLy8gY29uc3Qgc3VibWl0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgLy8gc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgJ3N1Ym1pdCcpO1xuICAvLyBzdWJtaXQuaW5uZXJIVE1MPVwiIENvbWl0IENoYW5nZXNcIjtcbn07XG5cbmNvbnN0IEdldEN1cnIgPSAoKSA9PiB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRcIik7XG4gIGNvbnN0IGN1cnJlbnQgPSBwLmlubmVySFRNTDtcbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuY29uc3QgSWZDaGVja2VkID0gKCkgPT4ge1xuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVjay1ib3hcIik7XG4gIGNvbnN0IHRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xuICBjaGVja2JveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgIGlmIChib3guY2hlY2tlZCkge1xuICAgICAgdGQuZm9yRWFjaCgodGQpID0+IHtcbiAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgVGFza0Zvcm1CdXR0b24sXG4gIGNyZWF0ZVByb2plY3RCdG4sXG4gIHByb2plY3RzTWVudSxcbiAgTWVudUFwZWFyLFxuICBDdXJyZW50UHJvamVjdCxcbiAgRGlzcGxheUlmLFxuICBBZGRCdG5zLFxuICBHZXRDdXJyLFxuICBJZkNoZWNrZWQsXG59O1xuIiwiaW1wb3J0IHsgZGVmYXVsdExpc3QgfSBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IHsgZ2V0TGlzdCwgc3RvcmVTaW5nbGUsIHN0b3JlUHJvamVjdHMsIGdldFByb2plY3RzIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cbiAgc2V0VGFza3ModGFza3MpIHtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuICBnZXRUYXNrYnlEaXNjcih0YXNrTmFtZSkge1xuICAgIGxldCBmb3VuZCA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5kZXNjcmlwdGlvbiA9PSB0YXNrTmFtZSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIGdldFRhc2tieURhdGUodGFza05hbWUpIHtcbiAgICBsZXQgZm91bmQgPSB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZHVlRGF0ZSA9PSB0YXNrTmFtZSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIGdldFRhc2tieVByaW9yKHRhc2tOYW1lKSB7XG4gICAgbGV0IGZvdW5kID0gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLnByaW9yaXR5ID09IHRhc2tOYW1lKTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgIGxldCBmb3VuZCA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0YXNrTmFtZSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIGFkZFRhc2sobmV3VGFzaykge1xuICAgIC8vaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IG5ld1Rhc2submFtZSkpIHJldHVybjtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tOYW1lKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0YXNrTmFtZSk7XG4gIH1cbn1cbmxldCBwcm9qZWN0c0xpc3QgPSBbXTtcbmNvbnN0IGNyZWF0ZURlZmF1bHQgPSAoKSA9PiB7XG4gIGxldCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiU29tZS1zdHVmZlwiKTtcbiAgZGVmYXVsdFByb2plY3Quc2V0VGFza3MoZGVmYXVsdExpc3QpO1xuICBwcm9qZWN0c0xpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gIHN0b3JlU2luZ2xlKGRlZmF1bHRQcm9qZWN0KTtcbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbn07XG5jb25zdCBBZGRQcm9qZWN0ID0gKG5hbWUsIHRhc2tzKSA9PiB7XG4gIGxldCByZXRyaWV2ZWRQcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gIHByb2plY3Quc2V0VGFza3ModGFza3MpO1xuICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcblxuICBzdG9yZVNpbmdsZShwcm9qZWN0KTtcbn07XG5jb25zdCBBZGRUYXNreSA9IChwcm9qZWN0LCBuZXdUYXNrKSA9PiB7XG4gIGlmIChwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSBuZXdUYXNrLm5hbWUpKSByZXR1cm47XG4gIHByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbn07XG4vL2NvbnN0IENoZWNrU3RvcmU9KCk9Pntcbi8vIGxpc3RvZm51bXM9WycnXVxuLy9pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RcIikpXG4vL31cbi8vaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFwiKSA9PT0gbnVsbCkge1xuLy8vc3RvcmVQcm9qZWN0cyhwcm9qZWN0c0xpc3QpO1xuLy99XG5leHBvcnQgeyBjcmVhdGVEZWZhdWx0LCBwcm9qZWN0c0xpc3QsIEFkZFByb2plY3QsIEFkZFRhc2t5IH07XG4iLCJjb25zdCBzdG9yZUxpc3QgPSAobGlzdCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RcIiwgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuXG4gIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG59O1xuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgbGV0IGxvY2FsQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RcIik7XG5cbiAgbGV0IHJldHJpZXZlZEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbEFycmF5KTtcblxuICByZXR1cm4gcmV0cmlldmVkQXJyYXk7XG59O1xuY29uc3Qgc3RvcmVTaW5nbGUgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgbmFtZSA9IHByb2plY3QubmFtZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufTtcbmNvbnN0IHN0b3JlUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBcInByb2plY3Qke2l9XCJgLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c1tpXSkpO1xuICB9XG4gIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG59O1xuY29uc3QgZ2V0RGVmYXVsdCA9ICgpID0+IHtcbiAgbGV0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU29tZS1zdHVmZlwiKSk7XG4gIHJldHVybiBpdGVtO1xufTtcbmNvbnN0IGdldFByb2plY3RieU5hbWUgPSAobmFtZSkgPT4ge1xuICBsZXQgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xuICByZXR1cm4gaXRlbTtcbn07XG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgbGV0IHJldHJpZXZlZFByb2plY3RzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldHJpZXZlZFByb2plY3RzLnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlzW2ldKSkpO1xuICB9XG5cbiAgcmV0dXJuIHJldHJpZXZlZFByb2plY3RzO1xufTtcbmNvbnN0IFJlbW92ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcbn07XG5cbmV4cG9ydCB7XG4gIHN0b3JlTGlzdCxcbiAgZ2V0TGlzdCxcbiAgc3RvcmVQcm9qZWN0cyxcbiAgZ2V0UHJvamVjdHMsXG4gIHN0b3JlU2luZ2xlLFxuICBnZXREZWZhdWx0LFxuICBnZXRQcm9qZWN0YnlOYW1lLFxuICBSZW1vdmVQcm9qZWN0LFxufTtcbiIsImltcG9ydCB7IHN0b3JlTGlzdCwgZ2V0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBBZGRUYXNreSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBSZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0YnlOYW1lLCBzdG9yZVNpbmdsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IEdldEN1cnIgfSBmcm9tIFwiLi9kaXNwbGF5LmpzXCI7XG5cbmNvbnN0IFRhc2tmYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgbGV0IGNoZWNrbGlzdCA9IGZhbHNlO1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QgfTtcbn07XG5cbmxldCBkZWZhdWx0TGlzdCA9IFtdO1xubGV0IHNvbWVpdGVtID0gVGFza2ZhY3RvcnkoXG4gIFwic29tZXRoaW5nIHRvIGRvXCIsXG4gIFwid2hhdCBkbyBpIHdhbnQgZG8gZG8/XCIsXG4gIFwid2hlbiBkbyBpIG5lZWQgdG8gZ2V0IGl0IGRvbmUgYnk/XCIsXG4gIFwiSG93IGJhZCBkbyBpIG5lZWQgdG8gZ2V0IGl0IGRvbmU/XCJcbik7XG5kZWZhdWx0TGlzdC5wdXNoKHNvbWVpdGVtKTtcblxuLy9pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0XCIpID09PSBudWxsKSB7XG4vLyAgc3RvcmVMaXN0KGRlZmF1bHRMaXN0KTtcbi8vfVxuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuY29uc3QgQWRkVG9JdGVtcyA9ICh0aXRsZV9pbnAsIGRlc2NyaXB0aW9uX2lucCwgZHVlRGF0ZV9pbnAsIHByaW9yaXR5X2lucCkgPT4ge1xuICBjb25zdCByZXRyaWV2ZWRBcnJheSA9IGdldExpc3QoKTtcbiAgY29uc3QgaXRlbSA9IFRhc2tmYWN0b3J5KFxuICAgIHRpdGxlX2lucCxcbiAgICBkZXNjcmlwdGlvbl9pbnAsXG4gICAgZHVlRGF0ZV9pbnAsXG4gICAgcHJpb3JpdHlfaW5wXG4gICk7XG5cbiAgcmV0cmlldmVkQXJyYXkucHVzaChpdGVtKTtcbiAgc3RvcmVMaXN0KHJldHJpZXZlZEFycmF5KTtcbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbn07XG5jb25zdCBDcmVhdGVUYXNrID0gKHRpdGxlX2lucCwgZGVzY3JpcHRpb25faW5wLCBkdWVEYXRlX2lucCwgcHJpb3JpdHlfaW5wKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBUYXNrZmFjdG9yeShcbiAgICB0aXRsZV9pbnAsXG4gICAgZGVzY3JpcHRpb25faW5wLFxuICAgIGR1ZURhdGVfaW5wLFxuICAgIHByaW9yaXR5X2lucFxuICApO1xuICByZXR1cm4gaXRlbTtcbn07XG5jb25zdCBBZGRUYXNrcyA9IChwcm9qZWN0X25hbWUsIHRhc2spID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RieU5hbWUocHJvamVjdF9uYW1lKTtcbiAgbGV0IG5ld19wcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdF9uYW1lKTtcbiAgbmV3X3Byb2plY3Quc2V0VGFza3MocHJvamVjdC50YXNrcyk7XG4gIG5ld19wcm9qZWN0LmFkZFRhc2sodGFzayk7XG4gIFJlbW92ZVByb2plY3QocHJvamVjdF9uYW1lKTtcbiAgc3RvcmVTaW5nbGUobmV3X3Byb2plY3QpO1xufTtcbmNvbnN0IFJlbmFtZVRhc2sgPSAob2xkX3RuYW1lLCBuZXdfdG5hbWUpID0+IHtcbiAgbGV0IHByb2plY3RfbmFtZSA9IEdldEN1cnIoKTtcbiAgY29uc3QgY3VycmVudCA9IGdldFByb2plY3RieU5hbWUocHJvamVjdF9uYW1lKTtcblxuICBsZXQgbmV3X3Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0X25hbWUpO1xuICBuZXdfcHJvamVjdC5zZXRUYXNrcyhjdXJyZW50LnRhc2tzKTtcbiAgY29uc29sZS5sb2cobmV3X3Byb2plY3QpO1xuICBjb25zdCBvbGRfdGFzayA9IG5ld19wcm9qZWN0LmdldFRhc2sob2xkX3RuYW1lKTtcbiAgY29uc29sZS5sb2cob2xkX3Rhc2spO1xuICBsZXQgbmV3X3Rhc2sgPSBDcmVhdGVUYXNrKFxuICAgIG5ld190bmFtZSxcbiAgICBvbGRfdGFzay5kZXNjcmlwdGlvbixcbiAgICBvbGRfdGFzay5kdWVEYXRlLFxuICAgIG9sZF90YXNrLnByaW9yaXR5XG4gICk7XG4gIG5ld19wcm9qZWN0LmRlbGV0ZVRhc2sob2xkX3RuYW1lKTtcbiAgbmV3X3Byb2plY3QuYWRkVGFzayhuZXdfdGFzayk7XG4gIFJlbW92ZVByb2plY3QocHJvamVjdF9uYW1lKTtcbiAgc3RvcmVTaW5nbGUobmV3X3Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufTtcbmNvbnN0IENoYW5nZURhdGUgPSAodGFza19uYW1lLCBuZXdfZGF0ZSkgPT4ge1xuICBsZXQgcHJvamVjdF9uYW1lID0gR2V0Q3VycigpO1xuICBjb25zdCBjdXJyZW50ID0gZ2V0UHJvamVjdGJ5TmFtZShwcm9qZWN0X25hbWUpO1xuXG4gIGxldCBuZXdfcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RfbmFtZSk7XG4gIG5ld19wcm9qZWN0LnNldFRhc2tzKGN1cnJlbnQudGFza3MpO1xuXG4gIGNvbnN0IG9sZF90YXNrID0gbmV3X3Byb2plY3QuZ2V0VGFza2J5RGF0ZSh0YXNrX25hbWUpO1xuICBjb25zb2xlLmxvZyhvbGRfdGFzayk7XG4gIGxldCBuZXdfdGFzayA9IENyZWF0ZVRhc2soXG4gICAgb2xkX3Rhc2sudGl0bGUsXG4gICAgb2xkX3Rhc2suZGVzY3JpcHRpb24sXG4gICAgbmV3X2RhdGUsXG4gICAgb2xkX3Rhc2sucHJpb3JpdHlcbiAgKTtcbiAgbmV3X3Byb2plY3QuZGVsZXRlVGFzayhvbGRfdG5hbWUpO1xuICBuZXdfcHJvamVjdC5hZGRUYXNrKG5ld190YXNrKTtcbiAgUmVtb3ZlUHJvamVjdChwcm9qZWN0X25hbWUpO1xuICBzdG9yZVNpbmdsZShuZXdfcHJvamVjdCk7XG59O1xuY29uc3QgQ2hhbmdlUHJpb3JpdHkgPSAodGFza19uYW1lLCBuZXdfcHJpb3IpID0+IHtcbiAgbGV0IHByb2plY3RfbmFtZSA9IEdldEN1cnIoKTtcbiAgY29uc3QgY3VycmVudCA9IGdldFByb2plY3RieU5hbWUocHJvamVjdF9uYW1lKTtcblxuICBsZXQgbmV3X3Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0X25hbWUpO1xuICBuZXdfcHJvamVjdC5zZXRUYXNrcyhjdXJyZW50LnRhc2tzKTtcblxuICBjb25zdCBvbGRfdGFzayA9IG5ld19wcm9qZWN0LmdldFRhc2tieVByaW9yKHRhc2tfbmFtZSk7XG4gIGNvbnNvbGUubG9nKG9sZF90YXNrKTtcbiAgbGV0IG5ld190YXNrID0gQ3JlYXRlVGFzayhcbiAgICBvbGRfdGFzay50aXRsZSxcbiAgICBvbGRfdGFzay5kZXNjcmlwdGlvbixcbiAgICBvbGRfdGFzay5kdWVEYXRlLFxuICAgIG5ld19wcmlvclxuICApO1xuICBuZXdfcHJvamVjdC5kZWxldGVUYXNrKG9sZF90bmFtZSk7XG4gIG5ld19wcm9qZWN0LmFkZFRhc2sobmV3X3Rhc2spO1xuICBSZW1vdmVQcm9qZWN0KHByb2plY3RfbmFtZSk7XG4gIHN0b3JlU2luZ2xlKG5ld19wcm9qZWN0KTtcbn07XG5jb25zdCBDaGFuZ2VEZXNjcmlwdGlvbiA9ICh0YXNrX25hbWUsIG5ld19kZXNjcmlwdGlvbikgPT4ge1xuICBsZXQgcHJvamVjdF9uYW1lID0gR2V0Q3VycigpO1xuICBjb25zdCBjdXJyZW50ID0gZ2V0UHJvamVjdGJ5TmFtZShwcm9qZWN0X25hbWUpO1xuXG4gIGxldCBuZXdfcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RfbmFtZSk7XG4gIG5ld19wcm9qZWN0LnNldFRhc2tzKGN1cnJlbnQudGFza3MpO1xuXG4gIGNvbnN0IG9sZF90YXNrID0gbmV3X3Byb2plY3QuZ2V0VGFza2J5RGlzY3IodGFza19uYW1lKTtcbiAgY29uc29sZS5sb2cob2xkX3Rhc2spO1xuXG4gIGxldCBuZXdfdGFzayA9IENyZWF0ZVRhc2soXG4gICAgb2xkX3Rhc2sudGl0bGUsXG4gICAgbmV3X2Rlc2NyaXB0aW9uLFxuICAgIG9sZF90YXNrLmR1ZURhdGUsXG4gICAgb2xkX3Rhc2sucHJpb3JpdHlcbiAgKTtcbiAgbmV3X3Byb2plY3QuZGVsZXRlVGFzayhvbGRfdGFzay50aXRsZSk7XG4gIG5ld19wcm9qZWN0LmFkZFRhc2sobmV3X3Rhc2spO1xuICBSZW1vdmVQcm9qZWN0KHByb2plY3RfbmFtZSk7XG4gIHN0b3JlU2luZ2xlKG5ld19wcm9qZWN0KTtcbn07XG5leHBvcnQge1xuICBBZGRUb0l0ZW1zLFxuICBkZWZhdWx0TGlzdCxcbiAgQWRkVGFza3MsXG4gIENyZWF0ZVRhc2ssXG4gIFJlbmFtZVRhc2ssXG4gIENoYW5nZURhdGUsXG4gIENoYW5nZVByaW9yaXR5LFxuICBDaGFuZ2VEZXNjcmlwdGlvbixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgaXRlbXNNb2R1bGUgZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHQsIHByb2plY3RzTGlzdCB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBkZWZhdWx0TGlzdCB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQge1xuICBUYXNrRm9ybUJ1dHRvbixcbiAgY3JlYXRlUHJvamVjdEJ0bixcbiAgcHJvamVjdHNNZW51LFxuICBNZW51QXBlYXIsXG4gIEN1cnJlbnRQcm9qZWN0LFxuICBEaXNwbGF5SWYsXG4gIEFkZFJlbW92ZUJ0bixcbiAgRGlzcGxheUZvcm0sXG4gIElmQ2hlY2tlZCxcbn0gZnJvbSBcIi4vZGlzcGxheS5qc1wiO1xuaW1wb3J0IHtcbiAgc3RvcmVTaW5nbGUsXG4gIHN0b3JlUHJvamVjdHMsXG4gIGdldFByb2plY3RzLFxuICBnZXRQcm9qZWN0czIsXG4gIFJlbW92ZVByb2plY3QsXG59IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cblRhc2tGb3JtQnV0dG9uKCk7XG5JZkNoZWNrZWQoKTtcbi8vY3JlYXRlRGVmYXVsdCgpO1xuRGlzcGxheUlmKCk7XG4vL3N0b3JlU2luZ2xlKHByb2plY3RzTGlzdCk7XG4vL3N0b3JlUHJvamVjdHMocHJvamVjdHNMaXN0KTtcbk1lbnVBcGVhcigpO1xuXG5DdXJyZW50UHJvamVjdChcIlNvbWUtc3R1ZmZcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=