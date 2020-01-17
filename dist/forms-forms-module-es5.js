(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/forms.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" id=\"page-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"row row-stat\">\n      <div class=\"col-sm-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading panel-heading-divider\">Basic Form Elements<span class=\"panel-subtitle\">These are the basic form elements</span>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"xs-mt-10 xs-mb-10  \">\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <form class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-1\">Text input</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"form-control-1\" class=\"form-control\" type=\"text\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-2\">Rounded text input</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"form-control-2\" class=\"form-control input-pill\" type=\"text\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-4\">Password input</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"form-control-4\" class=\"form-control\" type=\"password\" value=\"password\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-5\">Placeholder Input</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"form-control-5\" class=\"form-control\" type=\"email\"\n                                 placeholder=\"Placeholder input text\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-6\">Disabled Input</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"form-control-6\" class=\"form-control\" type=\"text\" placeholder=\"Disabled input text\"\n                                 disabled=\"disabled\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-7\">Read only input</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"form-control-7\" class=\"form-control\" type=\"email\" value=\"Read only input text\"\n                                 readonly=\"readonly\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\">Static input</label>\n                        <div class=\"col-sm-9\">\n                          <p class=\"form-control-static\">email@example.com</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-8\">Textarea</label>\n                        <div class=\"col-sm-9\">\n                          <textarea id=\"form-control-8\" class=\"form-control\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-9\">Select</label>\n                        <div class=\"col-sm-9\">\n                          <select id=\"form-control-9\" class=\"form-control\">\n                            <option value=\"corporate\">Corporate</option>\n                            <option value=\"creative\">Creative</option>\n                            <option value=\"ecommerce\">eCommerce</option>\n                            <option value=\"mobile\">Mobile</option>\n                            <option value=\"retail\">Retail</option>\n                            <option value=\"technology\">Technology</option>\n                            <option value=\"wedding\">Wedding</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-10\">Multiple select</label>\n                        <div class=\"col-sm-9\">\n                          <select id=\"form-control-10\" class=\"form-control\" multiple=\"multiple\">\n                            <option value=\"c-plus-plus\">C++</option>\n                            <option value=\"css\">CSS</option>\n                            <option value=\"java\">Java</option>\n                            <option value=\"javascript\">JavaScript</option>\n                            <option value=\"php\">PHP</option>\n                            <option value=\"python\">Python</option>\n                            <option value=\"ruby\">Ruby</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-11\">File input</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"form-control-11\" type=\"file\" accept=\"image/*\" multiple=\"multiple\">\n                          <p class=\"help-block\">\n                            <small>Unlimited number of files can be uploaded to this field. Allowed types: png gif jpg\n                              jpeg.\n                            </small>\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\">Checkboxes and radios</label>\n                        <div class=\"col-sm-9\">\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" name=\"signed\" checked=\"checked\"> Keep me signed in\n                            </label>\n                          </div>\n                          <div class=\"radio\">\n                            <label>\n                              <input type=\"radio\" name=\"period\" value=\"day\"> Day\n                            </label>\n                          </div>\n                          <div class=\"radio\">\n                            <label>\n                              <input type=\"radio\" name=\"period\" value=\"week\" checked=\"checked\"> Week\n                            </label>\n                          </div>\n                          <div class=\"radio\">\n                            <label>\n                              <input type=\"radio\" name=\"period\" value=\"month\"> Month\n                            </label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading panel-heading-divider\">Custom form element\n              <span class=\"panel-subtitle\">Custom form elements with overriding styles</span>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <form class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-21\">Custom select</label>\n                        <div class=\"col-sm-9\">\n                          <select id=\"form-control-21\" class=\"custom-select\">\n                            <option value=\"\" selected=\"selected\">Day of the week</option>\n                            <option value=\"1\">Monday</option>\n                            <option value=\"2\">Tuesday</option>\n                            <option value=\"3\">Wednesday</option>\n                            <option value=\"4\">Thursday</option>\n                            <option value=\"5\">Friday</option>\n                            <option value=\"6\">Saturday</option>\n                            <option value=\"7\">Sunday</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\" for=\"form-control-22\">Custom file inputs</label>\n                        <div class=\"col-sm-9\">\n                          <div class=\"input-group\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Choose file...\">\n                            <span class=\"input-group-btn\">\n                          <label class=\"btn btn-primary file-upload-btn\">\n                            <input class=\"file-upload-input\" type=\"file\" name=\"file\">\n                            <i class=\"icon mdi mdi-upload\"></i>\n                          </label>\n                        </span>\n                          </div>\n                          <p class=\"help-block\">\n                            <small>Click the button next to the input field.</small>\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group \">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\">Custom checkboxes</label>\n                        <div class=\"col-sm-9\">\n                          <div class=\"custom-controls-stacked\">\n                            <label class=\"custom-control custom-control-default custom-checkbox\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"custom\" checked=\"checked\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Default</span>\n                            </label>\n                            <label class=\"custom-control custom-control-primary custom-checkbox active\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"custom\" checked=\"checked\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Primary</span>\n                            </label>\n                            <label class=\"custom-control custom-control-success custom-checkbox\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"custom\" checked=\"checked\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Success</span>\n                            </label>\n                            <label class=\"custom-control custom-control-info custom-checkbox\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"custom\" checked=\"checked\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Info</span>\n                            </label>\n                            <label class=\"custom-control custom-control-warning custom-checkbox\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"custom\" checked=\"checked\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Warning</span>\n                            </label>\n                            <label class=\"custom-control custom-control-danger custom-checkbox\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"custom\" checked=\"checked\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Danger</span>\n                            </label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group \">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\">Custom checkboxes validation states</label>\n                        <div class=\"col-sm-9\">\n                          <div class=\"custom-controls-stacked\">\n                            <label class=\"custom-control custom-control-success custom-checkbox has-success\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"validation\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">With success</span>\n                            </label>\n                            <label class=\"custom-control custom-control-warning custom-checkbox has-warning\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"validation\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">With warning</span>\n                            </label>\n                            <label class=\"custom-control custom-control-danger custom-checkbox has-error\">\n                              <input class=\"custom-control-input\" type=\"checkbox\" name=\"validation\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">With error</span>\n                            </label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group \">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\">Switches</label>\n                        <div class=\"col-sm-9\">\n                          <div class=\"switches-stacked\">\n                            <label class=\"switch\">\n                              <input type=\"checkbox\" name=\"switches\" class=\"s-input\">\n                              <span class=\"s-content\">\n                            <span class=\"s-track\"></span>\n                            <span class=\"s-handle\"></span>\n                          </span>\n                            </label>\n                            <label class=\"switch switch-primary\">\n                              <input type=\"checkbox\" name=\"switches\" class=\"s-input\" checked=\"checked\">\n                              <span class=\"s-content\">\n                            <span class=\"s-track\"></span>\n                            <span class=\"s-handle\"></span>\n                          </span>\n                            </label>\n                            <label class=\"switch switch-success\">\n                              <input type=\"checkbox\" name=\"switches\" class=\"s-input\" checked=\"checked\">\n                              <span class=\"s-content\">\n                            <span class=\"s-track\"></span>\n                            <span class=\"s-handle\"></span>\n                          </span>\n                            </label>\n                            <label class=\"switch switch-info\">\n                              <input type=\"checkbox\" name=\"switches\" class=\"s-input\" checked=\"checked\">\n                              <span class=\"s-content\">\n                            <span class=\"s-track\"></span>\n                            <span class=\"s-handle\"></span>\n                          </span>\n                            </label>\n                            <label class=\"switch switch-warning\">\n                              <input type=\"checkbox\" name=\"switches\" class=\"s-input\" checked=\"checked\">\n                              <span class=\"s-content\">\n                            <span class=\"s-track\"></span>\n                            <span class=\"s-handle\"></span>\n                          </span>\n                            </label>\n                            <label class=\"switch switch-danger\">\n                              <input type=\"checkbox\" name=\"switches\" class=\"s-input\" checked=\"checked\">\n                              <span class=\"s-content\">\n                            <span class=\"s-track\"></span>\n                            <span class=\"s-handle\"></span>\n                          </span>\n                            </label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <label class=\"col-sm-3 control-label\">Custom radios</label>\n                        <div class=\"col-sm-9\">\n                          <div class=\"custom-controls-stacked\">\n                            <label class=\"custom-control custom-control-primary custom-radio\">\n                              <input class=\"custom-control-input\" type=\"radio\" name=\"period\" value=\"day\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Day</span>\n                            </label>\n                            <label class=\"custom-control custom-control-primary custom-radio\">\n                              <input class=\"custom-control-input\" type=\"radio\" name=\"period\" value=\"week\"\n                                     checked=\"checked\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Week</span>\n                            </label>\n                            <label class=\"custom-control custom-control-primary custom-radio\">\n                              <input class=\"custom-control-input\" type=\"radio\" name=\"period\" value=\"month\">\n                              <span class=\"custom-control-indicator\"></span>\n                              <span class=\"custom-control-label\">Month</span>\n                            </label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/forms/forms-routing/forms-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/forms-routing/forms-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms.component */ "./src/app/forms/forms.component.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
        data: {
            title: 'Forms Works'
        }
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.scss":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FormsComponent = /** @class */ (function () {
    function FormsComponent(router, route) {
        this.route = route;
    }
    FormsComponent.prototype.ngOnInit = function () {
        this.pageData = this.route.snapshot.data;
        console.log(this.pageData.title);
    };
    FormsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/forms/forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_routing_forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms-routing/forms-routing.module */ "./src/app/forms/forms-routing/forms-routing.module.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.component */ "./src/app/forms/forms.component.ts");




var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _forms_routing_forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]
            ],
            declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"]],
            providers: []
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module-es5.js.map