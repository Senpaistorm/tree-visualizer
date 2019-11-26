webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transAnimation */
/* unused harmony export highlightNode */
/* unused harmony export highlightEdge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return preorderAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inorderAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postorderAnimation; });
/* unused harmony export applyAnimation */
/* unused harmony export applyAnimationList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateEdges; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util__ = __webpack_require__("../../../../../src/app/util.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;


var transAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('{{ time }}')
]);
var highlightNode = function (value) {
    if (value === void 0) { value = null; }
    var nodeEle = document.getElementById("node-" + value);
    if (nodeEle) {
        nodeEle.classList.add('hl-node');
    }
};
var unhighlightNode = function (value) {
    if (value === void 0) { value = null; }
    var nodeEle = document.getElementById("node-" + value);
    if (nodeEle) {
        nodeEle.classList.remove('hl-node');
    }
};
var highlightEdge = function (from, to) {
    if (from === void 0) { from = null; }
    if (to === void 0) { to = null; }
    var nodeEle = document.getElementById("edge-" + from.value + "-" + to.value);
    if (nodeEle) {
        nodeEle.classList.add('hl-edge');
    }
};
var unhighlightEdge = function (from, to) {
    if (from === void 0) { from = null; }
    if (to === void 0) { to = null; }
    var nodeEle = document.getElementById("edge-" + from.value + "-" + to.value);
    if (nodeEle) {
        nodeEle.classList.remove('hl-edge');
    }
};
var highlightNodeList = function (nodeList, speed) {
    if (speed === void 0) { speed = 1000; }
    return __awaiter(_this, void 0, void 0, function () {
        var sleep, getValue, prev, index, val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sleep = function (ms) {
                        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
                    };
                    getValue = function (i) {
                        return sleep(speed).then(function (v) { return nodeList[i]; });
                    };
                    prev = null;
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < nodeList.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, getValue(index)];
                case 2:
                    val = _a.sent();
                    unhighlightNode(prev);
                    highlightNode(val);
                    prev = val;
                    _a.label = 3;
                case 3:
                    index++;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, getValue(0)];
                case 5:
                    _a.sent();
                    unhighlightNode(prev);
                    return [2 /*return*/];
            }
        });
    });
};
var preorderAnimation = function (tree, speed) {
    if (speed === void 0) { speed = 1000; }
    return __awaiter(_this, void 0, void 0, function () {
        var pre;
        return __generator(this, function (_a) {
            pre = Object(__WEBPACK_IMPORTED_MODULE_1__app_util__["j" /* preorder */])(tree);
            highlightNodeList(pre);
            return [2 /*return*/];
        });
    });
};
var inorderAnimation = function (tree, speed) {
    if (speed === void 0) { speed = 1000; }
    return __awaiter(_this, void 0, void 0, function () {
        var inOrder;
        return __generator(this, function (_a) {
            inOrder = Object(__WEBPACK_IMPORTED_MODULE_1__app_util__["f" /* inorder */])(tree);
            highlightNodeList(inOrder);
            return [2 /*return*/];
        });
    });
};
var postorderAnimation = function (tree, speed) {
    if (speed === void 0) { speed = 1000; }
    return __awaiter(_this, void 0, void 0, function () {
        var post;
        return __generator(this, function (_a) {
            post = Object(__WEBPACK_IMPORTED_MODULE_1__app_util__["i" /* postorder */])(tree);
            highlightNodeList(post);
            return [2 /*return*/];
        });
    });
};
var applyAnimation = function (animateObj) {
    var className = animateObj.className;
    switch (className) {
        case 'node':
            var value = animateObj.arg1.value;
            highlightNode(value);
            break;
        case 'edge':
            var from = animateObj.arg1;
            var to = animateObj.arg2;
            highlightEdge(from, to);
            break;
        default:
            console.error('animation not supported');
    }
};
var applyAnimationList = function (animationList, speed) {
    if (speed === void 0) { speed = 500; }
    return __awaiter(_this, void 0, void 0, function () {
        var sleep, getValue, index, cur;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sleep = function (ms) {
                        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
                    };
                    getValue = function (i) {
                        return sleep(speed).then(function (v) { return animationList[i]; });
                    };
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < animationList.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, getValue(index)];
                case 2:
                    cur = _a.sent();
                    console.log(cur);
                    applyAnimation(cur);
                    _a.label = 3;
                case 3:
                    index++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
};
var updateNodes = function (diff, treeNodes) {
    diff.modified.forEach(function (node, i) {
        var index = treeNodes.findIndex(function (n) { return n.value === node.value; });
        treeNodes[index].top = node.top;
        treeNodes[index].left = node.left;
        treeNodes[index].edges = node.edges;
    });
    diff.new.forEach(function (node) {
        treeNodes.push(node);
    });
    diff.deleted.forEach(function (node) {
        var index = treeNodes.findIndex(function (n) { return n.value === node.value; });
        if (index !== -1) {
            treeNodes.splice(index, 1);
        }
    });
};
var updateEdges = function (diff, treeEdges) {
    diff.modified.forEach(function (edge, i) {
        var index = treeEdges.findIndex(function (n) { return Object(__WEBPACK_IMPORTED_MODULE_1__app_util__["k" /* sameEdge */])(n, edge); });
        if (index !== -1) {
            treeEdges[index].x1 = edge.x1;
            treeEdges[index].y1 = edge.y1;
            treeEdges[index].x2 = edge.x2;
            treeEdges[index].y2 = edge.y2;
        }
    });
    diff.new.forEach(function (edge) {
        treeEdges.push(edge);
    });
    diff.deleted.forEach(function (edge) {
        var index = treeEdges.findIndex(function (n) { return Object(__WEBPACK_IMPORTED_MODULE_1__app_util__["k" /* sameEdge */])(n, edge); });
        if (index !== -1) {
            treeEdges.splice(index, 1);
        }
    });
};


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n  <router-outlet></router-outlet>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_workspace_workspace_component__ = __webpack_require__("../../../../../src/app/components/workspace/workspace.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tutorial_tutorial_component__ = __webpack_require__("../../../../../src/app/components/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_binary_search_tree_binary_search_tree_component__ = __webpack_require__("../../../../../src/app/components/binary-search-tree/binary-search-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_alert_popup_alert_popup_component__ = __webpack_require__("../../../../../src/app/components/alert-popup/alert-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_avl_tree_avl_tree_component__ = __webpack_require__("../../../../../src/app/components/avl-tree/avl-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_heap_heap_component__ = __webpack_require__("../../../../../src/app/components/heap/heap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_tree_editor_tree_editor_component__ = __webpack_require__("../../../../../src/app/components/tree-editor/tree-editor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_workspace_workspace_component__["a" /* WorkspaceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_tutorial_tutorial_component__["a" /* TutorialComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_binary_search_tree_binary_search_tree_component__["a" /* BinarySearchTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_alert_popup_alert_popup_component__["a" /* AlertPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_avl_tree_avl_tree_component__["a" /* AvlTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_heap_heap_component__["a" /* HeapComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_tree_editor_tree_editor_component__["a" /* TreeEditorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/alert-popup/alert-popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#alertPopup{\r\n  position: absolute;\r\n  top: 100px;\r\n  height: auto;\r\n  width: auto;\r\n  /* animation: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 normal both running slide-in-top; */\r\n}\r\n\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-11-14 12:43:9\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info.\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n\r\n@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\r\n\r\n\r\n@keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/alert-popup/alert-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isActive\" @flyInOut\r\n  id=\"alertPopup\" class=\"alert alert-danger\" role=\"alert\" >\r\n  {{alertMessage}}\r\n  <a href=\"#\"\r\n    (click)=\"onAlertDismiss()\">\r\n    Dismiss\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/alert-popup/alert-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertPopupComponent = /** @class */ (function () {
    function AlertPopupComponent() {
        this.isActive = false;
        this.alertMessage = '';
        this.alertDismiss = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AlertPopupComponent.prototype.ngOnInit = function () {
    };
    AlertPopupComponent.prototype.onAlertDismiss = function () {
        this.alertDismiss.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AlertPopupComponent.prototype, "isActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AlertPopupComponent.prototype, "alertMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AlertPopupComponent.prototype, "alertDismiss", void 0);
    AlertPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert-popup',
            template: __webpack_require__("../../../../../src/app/components/alert-popup/alert-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/alert-popup/alert-popup.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('flyInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translateY(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AlertPopupComponent);
    return AlertPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/avl-tree/avl-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar\r\n  (addNode)=\"addNode($event)\"\r\n  (deleteNode)=\"deleteNode($event)\"\r\n  (generateRandomTree)=\"generateRandomTree()\"\r\n  (inorder)=\"inorder()\"\r\n  (preorder)=\"preorder()\"\r\n  (postorder)=\"postorder()\"\r\n  >\r\n</app-toolbar>\r\n\r\n<app-tree-editor\r\n  [treeNodes]=\"treeNodes\"\r\n  [treeEdges]=\"treeEdges\">\r\n</app-tree-editor>\r\n\r\n<app-alert-popup\r\n  [isActive]=\"alertShow\"\r\n  [alertMessage]=\"alertMsg\"\r\n  (alertDismiss)=\"onAlertDismiss()\">\r\n</app-alert-popup>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/avl-tree/avl-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvlTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_AVLTree__ = __webpack_require__("../../../../../src/app/models/AVLTree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvlTreeComponent = /** @class */ (function () {
    function AvlTreeComponent() {
        this.tree = null;
        this.treeNodes = [];
        this.treeEdges = [];
        this.defSpeed = 500;
        this.alertMsg = '';
        this.alertShow = false;
    }
    AvlTreeComponent.prototype.ngOnInit = function () {
    };
    AvlTreeComponent.prototype.addNode = function ($event) {
        var value = $event;
        if (!value) {
            this.alertShow = true;
            this.alertMsg = 'Invalid input - node value cannot be empty.';
            return;
        }
        this.tree = Object(__WEBPACK_IMPORTED_MODULE_1__models_AVLTree__["b" /* insert */])(this.tree, value);
        this.setTree();
    };
    AvlTreeComponent.prototype.deleteNode = function ($event) {
        var value = $event;
        if (!value) {
            this.alertShow = true;
            this.alertMsg = 'Invalid input - node value cannot be empty.';
            return;
        }
        if (this.tree == null) {
            this.alertShow = true;
            this.alertMsg = 'Invalid operation - tree is empty.';
            return;
        }
        else {
            this.tree = Object(__WEBPACK_IMPORTED_MODULE_1__models_AVLTree__["a" /* deleteNode */])(this.tree, value);
        }
        this.setTree();
    };
    AvlTreeComponent.prototype.generateRandomTree = function () {
        this.tree = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* generateKNodesTree */])(__WEBPACK_IMPORTED_MODULE_1__models_AVLTree__["b" /* insert */], 10);
        this.setTree();
    };
    AvlTreeComponent.prototype.setTree = function () {
        var _this = this;
        Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_3__util__["g" /* parse */])(this.tree))
            .then(function (res) {
            var diff = {
                diffNodes: Object(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* diffNodes */])(_this.treeNodes, res.treeNodes),
                diffEdges: Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* diffEdges */])(_this.treeEdges, res.treeEdges)
            };
            return diff;
        })
            .then(function (diff) {
            Object(__WEBPACK_IMPORTED_MODULE_2__animations__["e" /* updateNodes */])(diff.diffNodes, _this.treeNodes);
            Object(__WEBPACK_IMPORTED_MODULE_2__animations__["d" /* updateEdges */])(diff.diffEdges, _this.treeEdges);
            return;
        });
    };
    AvlTreeComponent.prototype.onAlertDismiss = function () {
        this.alertShow = false;
    };
    AvlTreeComponent.prototype.preorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__animations__["c" /* preorderAnimation */])(this.tree, this.defSpeed);
    };
    AvlTreeComponent.prototype.inorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* inorderAnimation */])(this.tree, this.defSpeed);
    };
    AvlTreeComponent.prototype.postorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__animations__["b" /* postorderAnimation */])(this.tree, this.defSpeed);
    };
    AvlTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-avl-tree',
            template: __webpack_require__("../../../../../src/app/components/avl-tree/avl-tree.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], AvlTreeComponent);
    return AvlTreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/binary-search-tree/binary-search-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar\r\n  (addNode)=\"addNode($event)\"\r\n  (deleteNode)=\"deleteNode($event)\"\r\n  (generateRandomTree)=\"generateRandomTree()\"\r\n  (inorder)=\"inorder()\"\r\n  (preorder)=\"preorder()\"\r\n  (postorder)=\"postorder()\"\r\n  >\r\n</app-toolbar>\r\n\r\n<app-tree-editor\r\n  [treeNodes]=\"treeNodes\"\r\n  [treeEdges]=\"treeEdges\">\r\n</app-tree-editor>\r\n\r\n\r\n<app-alert-popup\r\n  [isActive]=\"alertShow\"\r\n  [alertMessage]=\"alertMsg\"\r\n  (alertDismiss)=\"onAlertDismiss()\">\r\n</app-alert-popup>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/binary-search-tree/binary-search-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinarySearchTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_BinarySearchTree__ = __webpack_require__("../../../../../src/app/models/BinarySearchTree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("../../../../../src/app/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BinarySearchTreeComponent = /** @class */ (function () {
    function BinarySearchTreeComponent() {
        this.tree = null;
        this.treeNodes = [];
        this.treeEdges = [];
        this.defSpeed = 500;
        this.alertMsg = '';
        this.alertShow = false;
    }
    BinarySearchTreeComponent.prototype.ngOnInit = function () {
    };
    BinarySearchTreeComponent.prototype.onResize = function () {
    };
    BinarySearchTreeComponent.prototype.addNode = function ($event) {
        var value = $event;
        if (value === null) {
            this.alertShow = true;
            this.alertMsg = 'Invalid input - node value cannot be empty.';
            return;
        }
        this.tree = Object(__WEBPACK_IMPORTED_MODULE_1__models_BinarySearchTree__["b" /* insert */])(this.tree, value);
        this.setTree();
    };
    BinarySearchTreeComponent.prototype.deleteNode = function ($event) {
        var value = $event;
        if (value === null) {
            this.alertShow = true;
            this.alertMsg = 'Invalid input - node value cannot be empty.';
            return;
        }
        if (this.tree == null) {
            this.alertShow = true;
            this.alertMsg = 'Invalid operation - tree is empty.';
            return;
        }
        else {
            this.tree = Object(__WEBPACK_IMPORTED_MODULE_1__models_BinarySearchTree__["a" /* deleteNode */])(this.tree, value);
        }
        this.setTree();
    };
    BinarySearchTreeComponent.prototype.generateRandomTree = function () {
        this.tree = Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* generateKNodesTree */])(__WEBPACK_IMPORTED_MODULE_1__models_BinarySearchTree__["b" /* insert */], 10);
        this.setTree();
    };
    BinarySearchTreeComponent.prototype.setTree = function () {
        var _this = this;
        Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_2__util__["g" /* parse */])(this.tree))
            .then(function (res) {
            var diff = {
                diffNodes: Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* diffNodes */])(_this.treeNodes, res.treeNodes),
                diffEdges: Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* diffEdges */])(_this.treeEdges, res.treeEdges)
            };
            return diff;
        })
            .then(function (diff) {
            Object(__WEBPACK_IMPORTED_MODULE_3__animations__["e" /* updateNodes */])(diff.diffNodes, _this.treeNodes);
            Object(__WEBPACK_IMPORTED_MODULE_3__animations__["d" /* updateEdges */])(diff.diffEdges, _this.treeEdges);
            return;
        });
    };
    BinarySearchTreeComponent.prototype.onAlertDismiss = function () {
        this.alertShow = false;
    };
    BinarySearchTreeComponent.prototype.preorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__animations__["c" /* preorderAnimation */])(this.tree, this.defSpeed);
    };
    BinarySearchTreeComponent.prototype.inorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* inorderAnimation */])(this.tree, this.defSpeed);
    };
    BinarySearchTreeComponent.prototype.postorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__animations__["b" /* postorderAnimation */])(this.tree, this.defSpeed);
    };
    BinarySearchTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-binary-search-tree',
            template: __webpack_require__("../../../../../src/app/components/binary-search-tree/binary-search-tree.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], BinarySearchTreeComponent);
    return BinarySearchTreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/heap/heap.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar\r\n  (addNode)=\"addNode($event)\"\r\n  (deleteNode)=\"deleteNode($event)\"\r\n  (generateRandomTree)=\"generateRandomTree()\"\r\n  (inorder)=\"inorder()\"\r\n  (preorder)=\"preorder()\"\r\n  (postorder)=\"postorder()\"\r\n  >\r\n</app-toolbar>\r\n\r\n<app-tree-editor\r\n  [treeNodes]=\"treeNodes\"\r\n  [treeEdges]=\"treeEdges\">\r\n</app-tree-editor>\r\n\r\n<app-alert-popup\r\n  [isActive]=\"alertShow\"\r\n  [alertMessage]=\"alertMsg\"\r\n  (alertDismiss)=\"onAlertDismiss()\">\r\n</app-alert-popup>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/heap/heap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_MaxHeap__ = __webpack_require__("../../../../../src/app/models/MaxHeap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("../../../../../src/app/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeapComponent = /** @class */ (function () {
    function HeapComponent() {
        this.tree = null;
        this.treeNodes = [];
        this.treeEdges = [];
        this.defSpeed = 500;
        this.alertMsg = '';
        this.alertShow = false;
    }
    HeapComponent.prototype.ngOnInit = function () {
    };
    HeapComponent.prototype.addNode = function ($event) {
        var value = $event;
        if (!value) {
            this.alertShow = true;
            this.alertMsg = 'Invalid input - node value cannot be empty.';
            return;
        }
        this.tree = Object(__WEBPACK_IMPORTED_MODULE_1__models_MaxHeap__["b" /* insert */])(this.tree, value);
        this.setTree();
    };
    HeapComponent.prototype.deleteNode = function ($event) {
        var value = $event;
        if (!value) {
            this.alertShow = true;
            this.alertMsg = 'Invalid input - node value cannot be empty.';
            return;
        }
        if (this.tree == null) {
            this.alertShow = true;
            this.alertMsg = 'Invalid operation - tree is empty.';
            return;
        }
        else {
            this.tree = Object(__WEBPACK_IMPORTED_MODULE_1__models_MaxHeap__["a" /* deleteNode */])(this.tree, value);
        }
        this.setTree();
    };
    HeapComponent.prototype.generateRandomTree = function () {
        this.tree = Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* generateKNodesTree */])(__WEBPACK_IMPORTED_MODULE_1__models_MaxHeap__["b" /* insert */], 10);
        this.setTree();
    };
    HeapComponent.prototype.setTree = function () {
        var _this = this;
        Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* parseHeap */])(this.tree))
            .then(function (res) {
            _this.treeNodes = res.treeNodes;
            _this.treeEdges = res.treeEdges;
        });
    };
    HeapComponent.prototype.onAlertDismiss = function () {
        this.alertShow = false;
    };
    HeapComponent.prototype.preorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__animations__["c" /* preorderAnimation */])(Object(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* heapToTree */])(this.tree, 0), this.defSpeed);
    };
    HeapComponent.prototype.inorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* inorderAnimation */])(Object(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* heapToTree */])(this.tree, 0), this.defSpeed);
    };
    HeapComponent.prototype.postorder = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__animations__["b" /* postorderAnimation */])(Object(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* heapToTree */])(this.tree, 0), this.defSpeed);
    };
    HeapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heap',
            template: __webpack_require__("../../../../../src/app/components/heap/heap.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], HeapComponent);
    return HeapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"nav_bar\">\r\n  <a class=\"navbar-brand\" href=\"#\"\r\n  (click)=\"changeSelection(-1)\">Tree Visualizer</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" *ngFor=\"let item of treeOptions; let i = index\" id=\"navoption-{{i}}\">\r\n        <a (click)=\"changeSelection(i)\" class=\"nav-link\" href=\"#\">{{item.name}}</a>\r\n      </li>\r\n    </ul>\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>-->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.treeOptions = [];
        this.selectActiveOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.changeSelection = function (i) {
        this.selectActiveOption.emit(i);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "treeOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], NavbarComponent.prototype, "selectActiveOption", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sidenav works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-main {\r\n  padding: 0.5rem 0.1rem;\r\n}\r\n\r\n@media (max-width: 868px) {\r\n  .toolbar-main {\r\n    position: fixed;\r\n    bottom: 0;\r\n    border-radius: 50%;\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .input-group {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 80%;\r\n            flex: 0 0 80%;\r\n    max-width: 100%;\r\n    margin: auto;\r\n  }\r\n\r\n  .btn-group {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 80%;\r\n            flex: 0 0 80%;\r\n    max-width: 100%;\r\n    margin: auto;\r\n    text-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n}\r\n\r\n#btn_gen_random {\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row toolbar-main \" id=\"tool_bar\">\r\n  <div class=\"input-group col-3\">\r\n    <input class=\"form-control\" type=\"number\" [formControl]=\"rootValue\"\r\n    placeholder=\"Insert Node\"/>\r\n    <button class=\"btn btn-primary\" type=\"button\"\r\n    (click)=\"addNodeEvent()\">\r\n      Confirm\r\n    </button>\r\n  </div>\r\n  <div class=\"input-group col-3\">\r\n    <input class=\"form-control\" type=\"number\" [formControl]=\"deleteValue\"\r\n    placeholder=\"Delete Node\"/>\r\n    <button class=\"btn btn-primary\" type=\"button\"\r\n    (click)=\"deleteNodeEvent()\">\r\n      Confirm\r\n    </button>\r\n  </div>\r\n  <div class=\"col-3 btn-group\">\r\n    <button class=\"btn btn-primary\" type=\"button\" id=\"btn_gen_random\"\r\n    (click)=\"generateRandomTreeEvent()\">\r\n      Generate Random Tree\r\n    </button>\r\n  </div>\r\n  <div class=\"col-3 btn-group\" role=\"group\" aria-label=\"traversal-btns\">\r\n    <button class=\"btn btn-primary\" type=\"button\"\r\n    (click)=\"inorderEvent()\">\r\n      Inorder\r\n    </button>\r\n    <button class=\"btn btn-primary\" type=\"button\"\r\n    (click)=\"preorderEvent()\">\r\n      Preorder\r\n    </button>\r\n    <button class=\"btn btn-primary\" type=\"button\"\r\n    (click)=\"postorderEvent()\">\r\n      Postorder\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.inorder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.preorder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.postorder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.generateRandomTree = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.addNode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.deleteNode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.rootValue = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.deleteValue = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.addNodeEvent = function () {
        this.addNode.emit(this.rootValue.value);
    };
    ToolbarComponent.prototype.deleteNodeEvent = function () {
        this.deleteNode.emit(this.deleteValue.value);
    };
    ToolbarComponent.prototype.generateRandomTreeEvent = function () {
        this.generateRandomTree.emit(null);
    };
    ToolbarComponent.prototype.inorderEvent = function () {
        this.inorder.emit(null);
    };
    ToolbarComponent.prototype.preorderEvent = function () {
        this.preorder.emit(null);
    };
    ToolbarComponent.prototype.postorderEvent = function () {
        this.postorder.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ToolbarComponent.prototype, "inorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ToolbarComponent.prototype, "preorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ToolbarComponent.prototype, "postorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ToolbarComponent.prototype, "generateRandomTree", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ToolbarComponent.prototype, "addNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ToolbarComponent.prototype, "deleteNode", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tree-editor/tree-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tree-editor/tree-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" (window:resize)=\"onResize()\" id=\"tree-editor\">\r\n  <div id=\"node-{{node.value}}\" class=\"node\" *ngFor=\"let node of treeNodes\"\r\n    [style.top.px]=\"node.top\"\r\n    [style.left.px]=\"node.left - nodeSize / 2\"\r\n    [style.border]=\"border\"\r\n  >\r\n  {{node.value}}\r\n  </div>\r\n  <svg [attr.height]=\"height\" [attr.width]=\"width\">\r\n    <line id=\"edge-{{edge.from.value}}-{{edge.to.value}}\" class=\"edge\" *ngFor=\"let edge of treeEdges\"\r\n      [attr.x1]=\"edge.x1\"\r\n      [attr.y1]=\"edge.y1 + nodeSize / 2\"\r\n      [attr.x2]=\"edge.x2\"\r\n      [attr.y2]=\"edge.y2 + nodeSize / 2\"\r\n    />\r\n  </svg>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tree-editor/tree-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeEditorComponent = /** @class */ (function () {
    function TreeEditorComponent() {
        this.nodeSize = 40;
        this.offset = 150;
        this.height = null;
        this.width = null;
    }
    TreeEditorComponent.prototype.ngOnInit = function () {
        var navbarHeight = (document.getElementById('nav_bar').offsetHeight);
        var toolbarHeight = (document.getElementById('tool_bar').offsetHeight);
        this.offset = navbarHeight + toolbarHeight;
        this.height = document.documentElement.clientHeight - this.offset;
        this.width = document.getElementById('tree-editor').offsetWidth;
    };
    TreeEditorComponent.prototype.onResize = function () {
        this.height = Math.max(this.height, document.documentElement.clientHeight) - this.offset;
        this.width = Math.max(this.width, document.getElementById('tree-editor').offsetWidth);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeEditorComponent.prototype, "treeNodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeEditorComponent.prototype, "treeEdges", void 0);
    TreeEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree-editor',
            template: __webpack_require__("../../../../../src/app/components/tree-editor/tree-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tree-editor/tree-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeEditorComponent);
    return TreeEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tutorial/tutorial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n  margin: 1rem 0;\r\n  cursor: pointer;\r\n  -webkit-transition: -webkit-transform .5s ease;\r\n  transition: -webkit-transform .5s ease;\r\n  transition: transform .5s ease;\r\n  transition: transform .5s ease, -webkit-transform .5s ease;\r\n}\r\n\r\n.card img{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.card:hover{\r\n  -webkit-box-shadow: rgb(209, 209, 213) 0px 6px 15px;\r\n          box-shadow: rgb(209, 209, 213) 0px 6px 15px;\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}\r\n\r\n.row {\r\n   margin: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tutorial/tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-around\">\r\n  <div class=\"col-md-3 col-sm-10 card\"\r\n    (click)=\"changeActiveOption(i)\"\r\n    *ngFor=\"let treeOption of treeOptions; let i = index\">\r\n    <div class=\"card-img-container\">\r\n        <img class=\"card-img-top\" src=\"{{treeOption.img}}\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{treeOption.name}}</h5>\r\n      <p class=\"card-text\">{{treeOption.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tutorial/tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this.selectActiveOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent.prototype.changeActiveOption = function (i) {
        this.selectActiveOption.emit(i);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TutorialComponent.prototype, "activeOption", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TutorialComponent.prototype, "treeOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], TutorialComponent.prototype, "selectActiveOption", void 0);
    TutorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tutorial',
            template: __webpack_require__("../../../../../src/app/components/tutorial/tutorial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/workspace/workspace.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/workspace/workspace.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tutorial *ngIf=\"activeOption == null\"\r\n  (selectActiveOption)=\"changeActiveOption($event)\"\r\n  [treeOptions]=\"treeOptions\"\r\n>\r\n</app-tutorial>\r\n<div *ngIf=\"activeOption && activeOption.name == 'Binary Search Tree'\">\r\n  <app-binary-search-tree>\r\n  </app-binary-search-tree>\r\n</div>\r\n\r\n<div *ngIf=\"activeOption && activeOption.name == 'AVL Tree'\">\r\n  <app-avl-tree>\r\n  </app-avl-tree>\r\n</div>\r\n\r\n<div *ngIf=\"activeOption && activeOption.name == 'Heap'\">\r\n  <app-heap>\r\n  </app-heap>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/workspace/workspace.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent() {
        this.selectActiveOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
    };
    WorkspaceComponent.prototype.changeActiveOption = function ($event) {
        this.selectActiveOption.emit($event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WorkspaceComponent.prototype, "activeOption", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WorkspaceComponent.prototype, "treeOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], WorkspaceComponent.prototype, "selectActiveOption", void 0);
    WorkspaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workspace',
            template: __webpack_require__("../../../../../src/app/components/workspace/workspace.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/workspace/workspace.component.css")]
        })
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar #navBar\r\n  [treeOptions]=\"treeOptions\"\r\n  (selectActiveOption)=\"selectActiveOption($event)\">\r\n</app-navbar>\r\n<app-workspace\r\n  [treeOptions]=\"treeOptions\"\r\n  [activeOption]=\"activeOption\"\r\n  (selectActiveOption)=\"selectActiveOption($event)\">\r\n</app-workspace>\r\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treeOptions__ = __webpack_require__("../../../../../src/app/treeOptions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.treeOptions = __WEBPACK_IMPORTED_MODULE_1__treeOptions__["a" /* treeOptionsData */];
        this.activeOption = null;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.selectActiveOption = function ($event) {
        if ($event === -1) {
            this.activeOption = null;
        }
        else {
            this.activeOption = this.treeOptions[$event];
        }
        this.changeSelection($event);
    };
    HomepageComponent.prototype.changeSelection = function (i) {
        // unhighlight all options
        for (var j = 0; j < this.treeOptions.length; j++) {
            document.getElementById("navoption-" + j).style.background = '#f8f9fa';
        }
        // highlight selection
        var cur = document.getElementById("navoption-" + i);
        if (cur) {
            cur.style.background = 'rgb(220,220,220)';
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/AVLTree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("../../../../../src/app/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AVLTreeNode__ = __webpack_require__("../../../../../src/app/models/AVLTreeNode.ts");


var animations = [];
var rightRotate = function (node) {
    var newRoot = node.left;
    var newLeftChild = newRoot.right;
    newRoot.right = node;
    node.left = newLeftChild;
    node.height = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.left), Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.right)) + 1;
    newRoot.height = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(newRoot.left), Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(newRoot.right)) + 1;
    return newRoot;
};
var leftRotate = function (node) {
    var newRoot = node.right;
    var newRightChild = newRoot.left;
    newRoot.left = node;
    node.right = newRightChild;
    node.height = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.left), Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.right)) + 1;
    newRoot.height = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(newRoot.left), Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(newRoot.right)) + 1;
    return newRoot;
};
var getBalance = function (node) {
    if (!node) {
        return 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.left) - Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.right);
};
var minValueNode = function (node) {
    var current = node;
    /* loop down to find the leftmost leaf */
    while (current.left) {
        current = current.left;
    }
    return current;
};
var deleteNode = function (node, value) {
    if (!node) {
        return node;
    }
    if (value < node.value) {
        // node is on the left subtree
        node.left = deleteNode(node.left, value);
    }
    else if (value > node.value) {
        // node is on the right subtree
        node.right = deleteNode(node.right, value);
    }
    else {
        // this is the node to be deleted
        // node with only one child or no child
        if ((!node.left) || (!node.right)) {
            var tmp = null;
            if (tmp === node.left) {
                tmp = node.right;
            }
            else {
                tmp = node.left;
            }
            // no child case
            if (!tmp) {
                tmp = node;
                node = null;
            }
            else {
                node = tmp;
            }
        }
        else {
            // find the inorder successor
            var tmp = minValueNode(node.right);
            node.value = tmp.value;
            // delete the inorder successor
            node.right = deleteNode(node.right, tmp.value);
        }
    }
    if (!node) {
        return node;
    }
    node.height = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.left), Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.right)) + 1;
    var balance = getBalance(node);
    // If this node becomes unbalanced, then there are 4 cases
    // Left Left Case
    if (balance > 1 && getBalance(node.left) >= 0) {
        return rightRotate(node);
    }
    // Left Right Case
    if (balance > 1 && getBalance(node.left) < 0) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }
    // Right Right Case
    if (balance < -1 && getBalance(node.right) <= 0) {
        return leftRotate(node);
    }
    // Right Left Case
    if (balance < -1 && getBalance(node.right) > 0) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }
    return node;
};
var insert = function (node, value) {
    if (!node) {
        return new __WEBPACK_IMPORTED_MODULE_1__AVLTreeNode__["a" /* default */](value);
    }
    if (value < node.value) {
        node.left = insert(node.left, value);
    }
    else if (value > node.value) {
        node.right = insert(node.right, value);
    }
    else {
        return node;
    }
    node.height = 1 + Math.max(Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.left), Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* getHeight */])(node.right));
    var balance = getBalance(node);
    // left tree is too long, R rotate
    if (balance > 1 && value < node.left.value) {
        return rightRotate(node);
    }
    // right tree is too long, R rotate
    if (balance < -1 && value > node.right.value) {
        return leftRotate(node);
    }
    // left tree is too long with right subtree longer, LR rotate
    if (balance > 1 && value > node.left.value) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }
    // right tree is too long with left subtree longer, RL rotate
    if (balance < -1 && value > node.right.value) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }
    return node;
};


/***/ }),

/***/ "../../../../../src/app/models/AVLTreeNode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tree__ = __webpack_require__("../../../../../src/app/models/Tree.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AVLTreeNode = /** @class */ (function (_super) {
    __extends(AVLTreeNode, _super);
    function AVLTreeNode(value) {
        var _this = _super.call(this, value) || this;
        _this.height = 1;
        return _this;
    }
    return AVLTreeNode;
}(__WEBPACK_IMPORTED_MODULE_0__Tree__["a" /* Tree */]));
/* harmony default export */ __webpack_exports__["a"] = (AVLTreeNode);


/***/ }),

/***/ "../../../../../src/app/models/BinarySearchTree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insert; });
/* unused harmony export clearAnimations */
/* unused harmony export getAnimations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BinarySearchTreeNode__ = __webpack_require__("../../../../../src/app/models/BinarySearchTreeNode.ts");

var animations = [];
var insert = function (node, value) {
    animations.push({
        className: 'node',
        arg1: node
    });
    if (!node) {
        return new __WEBPACK_IMPORTED_MODULE_0__BinarySearchTreeNode__["a" /* default */](value);
    }
    if (node.value > value) {
        animations.push({
            className: 'edge',
            arg1: node,
            arg2: node.left,
        });
        node.left = insert(node.left, value);
    }
    if (node.value < value) {
        animations.push({
            className: 'edge',
            arg1: node,
            arg2: node.right,
        });
        node.right = insert(node.right, value);
    }
    return node;
};
var clearAnimations = function () {
    animations = [];
};
var getAnimations = function () {
    var ret = animations.slice(0);
    clearAnimations();
    return ret;
};
var minValue = function (node) {
    if (node.left) {
        return minValue(node.left);
    }
    else {
        return node.value;
    }
};
var deleteNode = function (node, value) {
    if (!node) {
        return null;
    }
    if (node.value === value) {
        if (!node.left && !node.right) {
            return null;
        }
        else if (!node.right) {
            node = node.left;
        }
        else if (!node.left) {
            node = node.right;
        }
        else {
            var min = minValue(node.right);
            node.right = deleteNode(node.right, min);
            node.value = min;
        }
    }
    if (node.value > value && node.left) {
        node.left = deleteNode(node.left, value);
    }
    if (node.value < value && node.right) {
        node.right = deleteNode(node.right, value);
    }
    return node;
};


/***/ }),

/***/ "../../../../../src/app/models/BinarySearchTreeNode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tree__ = __webpack_require__("../../../../../src/app/models/Tree.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BinarySearchTreeNode = /** @class */ (function (_super) {
    __extends(BinarySearchTreeNode, _super);
    function BinarySearchTreeNode(value) {
        return _super.call(this, value) || this;
    }
    return BinarySearchTreeNode;
}(__WEBPACK_IMPORTED_MODULE_0__Tree__["a" /* Tree */]));
/* harmony default export */ __webpack_exports__["a"] = (BinarySearchTreeNode);


/***/ }),

/***/ "../../../../../src/app/models/HeapNode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tree__ = __webpack_require__("../../../../../src/app/models/Tree.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var HeapNode = /** @class */ (function (_super) {
    __extends(HeapNode, _super);
    function HeapNode(value) {
        return _super.call(this, value) || this;
    }
    return HeapNode;
}(__WEBPACK_IMPORTED_MODULE_0__Tree__["a" /* Tree */]));
/* harmony default export */ __webpack_exports__["a"] = (HeapNode);


/***/ }),

/***/ "../../../../../src/app/models/MaxHeap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insert; });
/* unused harmony export getMax */
/* unused harmony export maxHeapify */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteNode; });
/* unused harmony export extractMax */
var parent = function (i) {
    return Math.floor((i - 1) / 2);
};
var left = function (i) {
    return (2 * i + 1);
};
var right = function (i) {
    return (2 * i + 2);
};
var swap = function (A, x, y) {
    var tmp = A[x];
    A[x] = A[y];
    A[y] = tmp;
};
var insert = function (heap, value) {
    if (!heap) {
        return [value];
    }
    heap.push(value);
    var i = heap.length - 1;
    while (i !== 0 && heap[parent(i)] < heap[i]) {
        swap(heap, parent(i), i);
        i = parent(i);
    }
    return heap;
};
var getMax = function (heap) {
    return heap[0];
};
var maxHeapify = function (heap, i) {
    var l = left(i);
    var r = right(i);
    var greatest = i;
    if (l < heap.length && heap[l] > heap[i]) {
        greatest = l;
    }
    if (r < heap.length && heap[r] > heap[greatest]) {
        greatest = r;
    }
    if (greatest !== i) {
        swap(heap, i, greatest);
        maxHeapify(heap, greatest);
    }
    return heap;
};
var deleteNode = function (heap, value) {
    var i = heap.findIndex(function (node) { return node === value; });
    if (i < 0) {
        return heap;
    }
    heap[i] = heap[heap.length - 1];
    heap.length--;
    heap = maxHeapify(heap, i);
    return heap;
};
var extractMax = function (heap) {
    if (!heap || heap.length === 1) {
        return null;
    }
    var root = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.length--;
    heap = maxHeapify(heap, 0);
    return heap;
};


/***/ }),

/***/ "../../../../../src/app/models/Tree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tree; });
var Tree = /** @class */ (function () {
    function Tree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return Tree;
}());



/***/ }),

/***/ "../../../../../src/app/treeOptions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return treeOptionsData; });
var treeOptionsData = [
    {
        name: 'Binary Search Tree',
        description: "A binary search tree is a rooted binary tree, whose key in each node must be greater than or equal\n    to any key stored in the left sub-tree, and less than or equal to any key stored in the right sub-tree.",
        img: '../../assets/Binary_search_tree.svg',
    },
    {
        name: 'AVL Tree',
        description: "AVL tree is a self-balancing Binary Search Tree (BST) where the\n    difference between heights of left and right subtrees cannot be more than one for all nodes.",
        img: "../../assets/AVL_Tree.gif"
    },
    {
        name: 'Heap',
        description: "In computer science, a heap is a specialized tree-based data structure which is essentially\n    an almost complete tree that satisfies the heap property: in a max heap, for any given node C, if P is a\n    parent node of C, then the key (the value) of P is greater than or equal to the key of C.",
        img: "../../assets/Heap.gif"
    }
];


/***/ }),

/***/ "../../../../../src/app/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return preorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return inorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return postorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return parseHeap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return heapToTree; });
/* unused harmony export swap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateKNodesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sameEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return diffNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return diffEdges; });
/* unused harmony export diffNodesHeap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_MaxHeap__ = __webpack_require__("../../../../../src/app/models/MaxHeap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_HeapNode__ = __webpack_require__("../../../../../src/app/models/HeapNode.ts");


var getWidth = function () {
    var rect = document.getElementById('tree-editor').getBoundingClientRect();
    return rect.width;
};
// return a list of nodes that contains the top and left offsets
var parse = function (tree) {
    if (!tree) {
        return [];
    }
    var depth = 0;
    var bfs = [tree];
    var newQueue;
    var treeNodes = [];
    var edges = [];
    var cur;
    while (bfs.length > 0) {
        newQueue = bfs.slice();
        // compute queue size and screen width
        var size = Math.pow(2, depth);
        var width = getWidth();
        bfs = [];
        var leftOffset = 0;
        while (newQueue.length > 0) {
            cur = newQueue.splice(0, 1)[0];
            if (cur) {
                var top_1 = depth * 80;
                var left_1 = leftOffset * width / size + width / size / 2;
                bfs.push(cur.left);
                if (cur.left) {
                    edges.push({
                        from: cur,
                        x1: left_1,
                        y1: top_1,
                        to: cur.left,
                        x2: left_1 - width / (size * 4),
                        y2: (depth + 1) * 80,
                    });
                }
                bfs.push(cur.right);
                if (cur.right) {
                    edges.push({
                        from: cur,
                        x1: left_1,
                        y1: top_1,
                        to: cur.right,
                        x2: left_1 + width / (size * 4),
                        y2: (depth + 1) * 80,
                    });
                }
                treeNodes.push({
                    value: cur.value,
                    top: top_1,
                    left: left_1
                });
            }
            else {
                bfs.push(null);
                bfs.push(null);
            }
            leftOffset += 1;
        }
        depth = depth + 1;
        if (bfs.filter(function (n) { return n; }).length === 0) {
            break;
        }
    }
    return { treeNodes: treeNodes, treeEdges: edges };
};
var preorder = function (tree, res) {
    if (res === void 0) { res = []; }
    if (tree) {
        res.push(tree.value);
        preorder(tree.left, res);
        preorder(tree.right, res);
    }
    return res;
};
var inorder = function (tree, res) {
    if (res === void 0) { res = []; }
    if (tree) {
        inorder(tree.left, res);
        res.push(tree.value);
        inorder(tree.right, res);
    }
    return res;
};
var postorder = function (tree, res) {
    if (res === void 0) { res = []; }
    if (tree) {
        postorder(tree.left, res);
        postorder(tree.right, res);
        res.push(tree.value);
    }
    return res;
};
var getHeight = function (node) {
    if (!node) {
        return 0;
    }
    return node.height;
};
var parseHeap = function (heap) {
    var treeNodes = [];
    var edges = [];
    heap.forEach(function (node, i) {
        var depth = Math.floor(Math.log2(i + 1));
        var leftOffset = depth < 2 ? i - depth : i + 1 - Math.pow(2, depth);
        var size = Math.pow(2, depth);
        var width = getWidth();
        var top = depth * 80;
        var leftPos = leftOffset * width / size + width / size / 2;
        // has left edge
        if (Object(__WEBPACK_IMPORTED_MODULE_0__models_MaxHeap__["c" /* left */])(i) < heap.length) {
            edges.push({
                from: ({ value: node }),
                x1: leftPos,
                y1: top,
                to: { value: heap[Object(__WEBPACK_IMPORTED_MODULE_0__models_MaxHeap__["c" /* left */])(i)] },
                x2: leftPos - width / (size * 4),
                y2: (depth + 1) * 80,
            });
        }
        // has right edge
        if (Object(__WEBPACK_IMPORTED_MODULE_0__models_MaxHeap__["d" /* right */])(i) < heap.length) {
            edges.push({
                from: ({ value: node }),
                x1: leftPos,
                y1: top,
                to: { value: heap[Object(__WEBPACK_IMPORTED_MODULE_0__models_MaxHeap__["d" /* right */])(i)] },
                x2: leftPos + width / (size * 4),
                y2: (depth + 1) * 80,
            });
        }
        treeNodes.push({
            value: node,
            top: top,
            left: leftPos,
        });
    });
    return {
        treeNodes: treeNodes,
        treeEdges: edges
    };
};
var heapToTree = function (heap, i) {
    if (!heap) {
        return null;
    }
    var root = new __WEBPACK_IMPORTED_MODULE_1__models_HeapNode__["a" /* default */](heap[i]);
    var l = Object(__WEBPACK_IMPORTED_MODULE_0__models_MaxHeap__["c" /* left */])(i);
    if (l < heap.length) {
        root.left = heapToTree(heap, l);
    }
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__models_MaxHeap__["d" /* right */])(i);
    if (r < heap.length) {
        root.right = heapToTree(heap, r);
    }
    return root;
};
var swap = function (A, x, y) {
    var tmp = A[x];
    A[x] = A[y];
    A[y] = tmp;
};
// this takes in an insert function and an integer k,
// and generates a k noded tree using the insertion method
var generateKNodesTree = function (insertMethod, k) {
    var rand;
    var tree = null;
    for (var i = 0; i < k; i++) {
        rand = Math.floor((Math.random() * 100) + 1);
        tree = insertMethod(tree, rand);
    }
    return tree;
};
var sameNode = function (a, b) {
    return a.value === b.value && samePositionNode(a, b);
};
var samePositionNode = function (a, b) {
    return a.top === b.top && a.left === b.left;
};
var sameEdge = function (a, b) {
    return a.from.value === b.from.value && a.to.value === b.to.value;
};
var samePositionEdge = function (a, b) {
    return a.x1 === b.x1 && a.y1 === b.y1 &&
        a.x2 === b.x2 && a.y2 === b.y2;
};
// this computes the difference between two lists of nodes a,b and
// returns it as an object for animation
var diffNodes = function (a, b) {
    var res = {
        new: [],
        modified: [],
        deleted: [],
    };
    res.new = b.filter(function (n) { return a.findIndex(function (v) { return v.value === n.value; }) === -1; });
    res.deleted = a.filter(function (n) { return b.findIndex(function (v) { return v.value === n.value; }) === -1; });
    res.modified = b.filter(function (n) { return a.findIndex(function (v) {
        return v.value === n.value && !samePositionNode(n, v);
    }) !== -1; });
    return res;
};
var diffEdges = function (a, b) {
    var res = {
        new: [],
        modified: [],
        deleted: [],
    };
    res.new = b.filter(function (n) { return a.findIndex(function (v) { return sameEdge(n, v); }) === -1; });
    res.deleted = a.filter(function (n) { return b.findIndex(function (v) { return sameEdge(n, v); }) === -1; });
    res.modified = b.filter(function (n) { return a.findIndex(function (v) {
        return sameEdge(n, v) && !samePositionEdge(n, v);
    }) !== -1; });
    return res;
};
var diffNodesHeap = function (a, b) {
    var res = {
        new: [],
        modified: [],
        deleted: [],
    };
    // deleted a node from heap
    if (a.length > b.length) {
        res.deleted = a.filter(function (n) {
            return a.filter(function (k) { return k.value === n.value; }).length >
                b.filter(function (v) { return v.value === n.value; }).length;
        }).slice(-(a.length - b.length));
        console.log(res.deleted);
    }
    // inserted a node
    if (a.length < b.length) {
        res.new = b.filter(function (n) {
            return b.filter(function (k) { return k.value === n.value; }).length >
                a.filter(function (v) { return v.value === n.value; }).length;
        }).slice(-(b.length - a.length));
        console.log(res.new);
    }
    console.log(a);
    console.log(b);
    b.forEach(function (node, i) {
        if (i >= a.length || !sameNode(node, a[i])) {
            if (res.new.filter(function (n) { return sameNode(n, node); }).length === 0 &&
                res.deleted.filter(function (n) { return sameNode(n, node); }).length === 0) {
                res.modified.push(node);
            }
        }
    });
    console.log(res);
    return res;
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map