(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lax.js */ "./node_modules/lax.js/lib/lax.min.js");
/* harmony import */ var lax_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lax_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'im4xpro-web';
        this.titleword = "designe";
        this.titlewords = ["designe", "entwickle", "bestimme", "realisiere", "hol mir"];
        this.titlenum = 0;
    }
    constructur() { }
    ngOnInit() {
        // Lax
        window.onload = function () {
            lax_js__WEBPACK_IMPORTED_MODULE_1___default.a.setup(); // init
            const updateLax = () => {
                lax_js__WEBPACK_IMPORTED_MODULE_1___default.a.update(window.scrollY);
                window.requestAnimationFrame(updateLax);
            };
            window.requestAnimationFrame(updateLax);
        };
        this.changeText();
    }
    openSkill(skill) {
        this.skillreset();
        this.element = document.getElementById("skillstext");
        this.element.style.display = "block";
        this.activeSkill = skill;
        switch (skill) {
            case "HTML":
                this.element = document.getElementById("text-html");
                this.element.innerHTML = document.getElementById("htmlsrc").innerHTML;
                break;
            case "CSS":
                this.element = document.getElementById("text-css");
                this.element.innerHTML = document.getElementById("csssrc").innerHTML;
                break;
            case "JAVASCRIPT":
                this.element = document.getElementById("text-js");
                this.element.innerHTML = document.getElementById("jssrc").innerHTML;
                break;
            case "ANGULAR":
                this.element = document.getElementById("text-angular");
                this.element.innerHTML = document.getElementById("angularsrc").innerHTML;
                break;
        }
        this.element.style.display = "block";
    }
    closeSkill() {
        this.element = document.getElementById("skillstext");
        this.element.style.display = "none";
        this.activeSkill = "";
    }
    skillreset() {
        this.element = document.getElementById("text-html");
        this.element.style.display = "none";
        this.element.innerHTML = "";
        this.element = document.getElementById("text-css");
        this.element.style.display = "none";
        this.element.innerHTML = "";
        this.element = document.getElementById("text-js");
        this.element.style.display = "none";
        this.element.innerHTML = "";
        this.element = document.getElementById("text-angular");
        this.element.style.display = "none";
        this.element.innerHTML = "";
    }
    changeText() {
        this.titleword = this.titlewords[this.titlenum];
        if (this.titlenum == 4) {
            this.titlenum = 0;
        }
        else {
            this.titlenum++;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 65, vars: 2, consts: [[1, "main"], ["src", "assets/sunset.jpg"], [1, "title"], ["data-lax-preset", "blurOut-1 zoomOut", 1, "myh1", "lax", 3, "mouseover"], [1, "myred-font"], [1, ""], [1, "imagediv"], ["src", "assets/myAvatar-2.png"], ["data-lax-preset", "blurIn-10 zoomIn", 1, "aboutme", "lax"], [1, "myh2"], [1, "myh3"], [1, "skills"], ["id", "skill-html", 1, "skill", "skill-html", 3, "click"], [1, "fab", "fa-html5"], ["id", "skill-css", 1, "skill", "skill-css", 3, "click"], [1, "fab", "fa-css3"], ["id", "skill-js", 1, "skill", "skill-js", 3, "click"], [1, "fab", "fa-js"], ["id", "skill-angular", 1, "skill", "skill-angular", 3, "click"], [1, "fab", "fa-angular"], ["id", "skillstext", 1, "skillstext"], ["id", "closeSkill", 1, "fas", "fa-times", 3, "click"], [1, "skillcontent"], ["id", "skillsh2"], ["id", "text-html", 1, "skillparagraph"], ["id", "text-css", 1, "skillparagraph"], ["id", "text-js", 1, "skillparagraph"], ["id", "text-angular", 1, "skillparagraph"], ["id", "htmlsrc", 1, "skillsource"], ["id", "csssrc", 1, "skillsource"], ["id", "jssrc", 1, "skillsource"], ["id", "angularsrc", 1, "skillsource"], [1, "projects"], ["href", "http://imaxpro.bplaced.net/recoord./index.php"], ["id", "project1", 1, "project"], ["src", "assets/recoord.png"], [1, "overlay"], [1, "overlaytext"], ["id", "project2", 1, "project"], ["src", ""], ["id", "project3", 1, "project"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AppComponent_Template_h1_mouseover_4_listener() { return ctx.changeText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " meine Zukunft.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hey, ich bin Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ein angehender Webentwickler aus Bayern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_20_listener() { return ctx.openSkill("HTML"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_22_listener() { return ctx.openSkill("CSS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_24_listener() { return ctx.openSkill("JAVASCRIPT"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_26_listener() { return ctx.openSkill("ANGULAR"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_29_listener() { return ctx.closeSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Als ich 2016 mit HTML als erste 'Programmiersprache' angefangen habe wusste ich noch nicht wohin mich das einmal f\u00FChren wird. Die anf\u00E4nglichen Seiten ohne gro\u00DFartiges Design geh\u00F6ren l\u00E4ngst der Vergangenheit and und HTML ist nurnoch das Grundger\u00FCst der Website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Nachdem die Websites immer schrecklich aussahen, musste etwas zum aufpeppen her. CSS nutze ich mittlerweile mehr als alle anderen Bestandteile einer Website und l\u00E4ngst wei\u00DF ich noch nicht alle Funktionen und M\u00F6glichkeiten davon! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Nur statische Seiten zu erstellen war mir dann auf Dauer zu langweilig, deswegen habe Ich 2019 mit Javascript angefangen. Programmieren war schon l\u00E4ngst zu einem wichtigen Bestandteil in meinem Leben geworden, jedoch war ich immer zu perfektionistisch irgendwelche Seiten zu ver\u00F6ffentlichen... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Websites wurden dann im Winter 2019/2020 auch zu langweilig, deswegen ist mein neues Ziel Webapps zu entwickeln, um auch kleinere Programme auf Webseiten zu realisieren. Im April 2020 stehe ich noch ganz am Anfang davon, diese Website ist aber zu \u00DCbungszwecken schon damit erstellt :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Projekte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "recoord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Macbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Yogamobil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeSkill);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".main[_ngcontent-%COMP%]{\n  width:100%;\n  position: relative;\n  background-color: #222f35;\n  border-bottom:5px solid #c7473a;\n}\n.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width:100%;\n  height:auto;\n\n}\n\n\n\n.title[_ngcontent-%COMP%]{\n  z-index: 2;\n  position: absolute;\n  width:auto;\n  height:auto;\n  top: 10%;\n  left:5%;\n  text-align: left;\n\n}\n.myh1[_ngcontent-%COMP%]{\n  font-size:100px;\n  color: white;\n}\n.imagediv[_ngcontent-%COMP%]{\n  z-index:3;\n  position: absolute;\n  width:16em;\n  height:16em;\n  top:10%;\n  right:10%;\n  transform: translate(-20%, -30%);\n  background-color: #c7473a;\n  padding:2em;\n  border-radius: 20em;\n  box-shadow: 1px 1px 60px black;\n}\n.imagediv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  position: absolute;\n  width:12em;\n  height:12em;\n  left:50%;\n  margin-left: -6em;\n  margin-top: 1.5em;\n\n}\n\n\n\n.aboutme[_ngcontent-%COMP%]{\n  z-index:2;\n  position: absolute;\n  width: 80%;\n  height:auto;\n  top:70%;\n  text-align: center;\n  left:50%;\n  margin-left: -40%;\n}\n.myh2[_ngcontent-%COMP%]{\n  color:white;\n  font-size: 80px;\n  font-weight:300;\n  margin: 0;\n}\n.myh3[_ngcontent-%COMP%]{\n  color:#333;\n  font-weight: 300;\n  font-size:24px;\n\n}\n\n\n\n.skills[_ngcontent-%COMP%]{\n  position: absolute;\n  width:60em;\n  height:12em;\n  z-index: 2;\n  top:80%;\n  left:50%;\n  margin-left: -29em;\n  margin-top:5em;\n}\n.skill[_ngcontent-%COMP%]{\nfloat: left;\nwidth:12em;\nheight:12em;\nborder-radius: 20em;\nbackground-color: #203139;\nbox-shadow: 5px 10px 35px black;\ntext-align: center;\nline-height: 16em;\ntransition: 0.5s;\n}\n.skill[_ngcontent-%COMP%]:hover{\n  padding: 0.5em;\n  cursor:pointer;\n\n}\n.skill-html[_ngcontent-%COMP%]{\n  margin-right: 3em;\n\n}\n.skill-css[_ngcontent-%COMP%]{\n  margin-right:3em;\n}\n.skill-js[_ngcontent-%COMP%]{\n  margin-right: 3em;\n}\n.skill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  font-size:100px;\n  color:#c7473a;\n}\n.skillstext[_ngcontent-%COMP%]{\n  width:100%;\n  height:auto;\n    box-shadow: 5px 10px 35px black;\n   background-color:rgb(238, 238, 238);\n  border-bottom:1px solid lightgrey;\n  display: none;\n\n}\n.skillstext[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  color: #c7473a;\n  font-size:36px;\n  margin-bottom: 1em;\n  margin: 0;\n  -webkit-animation-name: skillanimation;\n          animation-name: skillanimation;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n.skillstext[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  font-size:20px;\n  font-weight:300;\n  margin-left: 0.5em;\n  line-height: 1.5em;\n}\n.skillstext[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  float:right;\n  font-size:34px;\n  margin-right:1em;\n  margin-top: 0.5em;\n  color: #222f35;\n}\n.skillstext[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\n  color:#c7473a;\n  cursor:pointer;\n}\n.skillstext[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:active{\n  font-size:30px;\n  margin-right: 1.2em;\n}\n.skillcontent[_ngcontent-%COMP%]{\n  padding: 2em;\n}\n.skillparagraph[_ngcontent-%COMP%]{\n  display: none;\n  color:#222f35;\n}\n.skillsource[_ngcontent-%COMP%]{\n  display: none;\n}\n\n\n\n.projects[_ngcontent-%COMP%]{\n  width:100%;\n  height:40em;\n  padding-top: 1em;\n  background-color: rgb(238,238,238);\n  position: relative;\n}\n.projects[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  margin: 0;\n  margin-left: 1em;\n  font-size:46px;\n  color: #222f35;\n  font-weight: 400;\n  margin-bottom: 3em;\n  margin-top: 1em;\n}\n.project[_ngcontent-%COMP%]{\n  width:20em;\n  height:14em;\n  float: left;\n  text-align: center;\n  line-height: 14em;\n  position: relative;\n  box-shadow: 5px 10px 35px #333;\n}\n.project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width:100%;\n  height:100%;\n}\n.overlay[_ngcontent-%COMP%]{\n  position: absolute;\n  z-index: 3;\n  width:20em;\n  height:14em;\n  background-color: #333;\n  top:0%;\n  right:0%;\n  opacity: 80%;\n  transition: 2s;\n}\n.overlay[_ngcontent-%COMP%]:hover{\n  opacity: 0%;\n}\n.overlaytext[_ngcontent-%COMP%]{\n  color:white;\n  font-size:24px;\n  font-weight:400;\n}\n#project1[_ngcontent-%COMP%]{\n  margin-right: 2em;\n  margin-left: 10%;\n}\n#project2[_ngcontent-%COMP%]{\n  margin-right: 2em;\n  display: none;\n}\n#project3[_ngcontent-%COMP%]{\n  display: none;\n}\n\n\n\n\n\n\n@media screen and (max-device-width:800px){\n\n  .aboutme[_ngcontent-%COMP%]{\n    top:60%;\n  }\n\n  .myh2[_ngcontent-%COMP%]{\n    font-size:70px;\n  }\n\n  .imagediv[_ngcontent-%COMP%]{\n    width: 12em;\n    height:12em;\n    right:2%;\n  }\n\n  .imagediv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width:9em;\n    height:9em;\n    left:50%;\n    margin-left: -4.5em;\n    margin-top: 1.5em;\n  }\n  .skill[_ngcontent-%COMP%]{\n  float: left;\n  width:9em;\n  height:9em;\n  border-radius: 20em;\n  background-color: #203139;\n  box-shadow: 5px 10px 35px black;\n  text-align: center;\n  line-height: 13em;\n  transition: 0.5s;\n  }\n  .skills[_ngcontent-%COMP%]{\n    position: absolute;\n    width:50em;\n    height:12em;\n    z-index: 2;\n    top:70%;\n    left:50%;\n    margin-left: -22.5em;\n    margin-top:5em;\n  }\n  .skill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-size:80px;\n    color:#c7473a;\n  }\n\n  #project1[_ngcontent-%COMP%]{\n    margin-left:20%;\n  }\n}\n@media screen and (max-device-width:500px){\n\n  .main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height:100em;\n  }\n  .myh1[_ngcontent-%COMP%]{\n    font-size: 70px;\n\n  }\n\n  .imagediv[_ngcontent-%COMP%]{\n    width: 9em;\n    height:9em;\n    left:60%;\n  }\n\n  .imagediv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width:7em;\n    height:7em;\n    left:50%;\n    margin-left: -3.5em;\n    margin-top: 1em;\n  }\n\n\n  .aboutme[_ngcontent-%COMP%]{\n    top:60%;\n  }\n  .skills[_ngcontent-%COMP%]{\n    top:70%;\n    width:27em;\n    height:26em;\n    margin-left: -11em;\n  }\n\n  .skill[_ngcontent-%COMP%]{\n    margin-bottom: 3em;\n  }\n  .myh2[_ngcontent-%COMP%]{\n    font-size: 40px;\n\n  }\n\n  .myh3[_ngcontent-%COMP%]{\n    font-size:20px;\n    color:lightgrey;\n  }\n  #project1[_ngcontent-%COMP%]{\n    left:50%;\n    margin-left: -10em;\n  }\n}\n@media screen and (max-device-width:400px){\n  .imagediv[_ngcontent-%COMP%]{\n    left:50%;\n    top:8%;\n  }\n\n  .skills[_ngcontent-%COMP%]{\n    width:20em;\n    margin-left: -10em;\n  }\n  .skill-html[_ngcontent-%COMP%]{\n    margin-right: 2em;\n  }\n  .skill-js[_ngcontent-%COMP%]{\n    margin-right: 2em;\n  }\n  .skill-css[_ngcontent-%COMP%]{\n    margin-right:0;\n  }\n  .skill-angular[_ngcontent-%COMP%]{\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsa0JBQWtCO0FBQ2xCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVzs7QUFFYjtBQUNBLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsUUFBUTtBQUNSO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixPQUFPO0VBQ1AsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUdBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLE9BQU87RUFDUCxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixpQkFBaUI7O0FBRW5CO0FBQ0EsUUFBUTtBQUNSLDRCQUE0QjtBQUM1QixZQUFZO0FBQ1o7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYzs7QUFFaEI7QUFDQSxZQUFZO0FBQ1osNEJBQTRCO0FBQzVCLFNBQVM7QUFDVDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixP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Q2pCO0FBQ0Y7QUFFQTs7RUFFRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTs7RUFFakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOzs7RUFHQTtJQUNFLE9BQU87RUFDVDtFQUNBO0lBQ0UsT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlOztFQUVqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxRQUFRO0lBQ1Isa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLE1BQU07RUFDUjs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlc2hlZXQgZm9yIHRoZSBpbTR4cHJvIHdlYnNpdGUgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogTUFJTiBDT05UQUlORVIqL1xuLm1haW57XG4gIHdpZHRoOjEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmYzNTtcbiAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgI2M3NDczYTtcbn1cblxuLm1haW4gaW1ne1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6YXV0bztcblxufVxuLyogTUFJTiBDT05UQUlORVIqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qVElUTEUqL1xuLnRpdGxle1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOmF1dG87XG4gIGhlaWdodDphdXRvO1xuICB0b3A6IDEwJTtcbiAgbGVmdDo1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxufVxuXG4ubXloMXtcbiAgZm9udC1zaXplOjEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmltYWdlZGl2e1xuICB6LWluZGV4OjM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6MTZlbTtcbiAgaGVpZ2h0OjE2ZW07XG4gIHRvcDoxMCU7XG4gIHJpZ2h0OjEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSwgLTMwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzQ3M2E7XG4gIHBhZGRpbmc6MmVtO1xuICBib3JkZXItcmFkaXVzOiAyMGVtO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDYwcHggYmxhY2s7XG59XG5cbi5pbWFnZWRpdiBpbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6MTJlbTtcbiAgaGVpZ2h0OjEyZW07XG4gIGxlZnQ6NTAlO1xuICBtYXJnaW4tbGVmdDogLTZlbTtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG5cbn1cbi8qVElUTEUqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIEFCT1VUIE1FKi9cbi5hYm91dG1le1xuICB6LWluZGV4OjI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OmF1dG87XG4gIHRvcDo3MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDo1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDAlO1xufVxuXG4ubXloMntcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC13ZWlnaHQ6MzAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5teWgze1xuICBjb2xvcjojMzMzO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6MjRweDtcblxufVxuLyogQUJPVVQgTUUqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qU0tJTExTKi9cbi5za2lsbHN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6NjBlbTtcbiAgaGVpZ2h0OjEyZW07XG4gIHotaW5kZXg6IDI7XG4gIHRvcDo4MCU7XG4gIGxlZnQ6NTAlO1xuICBtYXJnaW4tbGVmdDogLTI5ZW07XG4gIG1hcmdpbi10b3A6NWVtO1xufVxuXG4uc2tpbGx7XG5mbG9hdDogbGVmdDtcbndpZHRoOjEyZW07XG5oZWlnaHQ6MTJlbTtcbmJvcmRlci1yYWRpdXM6IDIwZW07XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMTM5O1xuYm94LXNoYWRvdzogNXB4IDEwcHggMzVweCBibGFjaztcbnRleHQtYWxpZ246IGNlbnRlcjtcbmxpbmUtaGVpZ2h0OiAxNmVtO1xudHJhbnNpdGlvbjogMC41cztcbn1cblxuLnNraWxsOmhvdmVye1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgY3Vyc29yOnBvaW50ZXI7XG5cbn1cblxuLnNraWxsLWh0bWx7XG4gIG1hcmdpbi1yaWdodDogM2VtO1xuXG59XG5cbi5za2lsbC1jc3N7XG4gIG1hcmdpbi1yaWdodDozZW07XG59XG5cbi5za2lsbC1qc3tcbiAgbWFyZ2luLXJpZ2h0OiAzZW07XG59XG5cbi5za2lsbCBpe1xuICBmb250LXNpemU6MTAwcHg7XG4gIGNvbG9yOiNjNzQ3M2E7XG59XG5cbi5za2lsbHN0ZXh0e1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6YXV0bztcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAzNXB4IGJsYWNrO1xuICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjM4LCAyMzgsIDIzOCk7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgZGlzcGxheTogbm9uZTtcblxufVxuXG4uc2tpbGxzdGV4dCBoMntcbiAgY29sb3I6ICNjNzQ3M2E7XG4gIGZvbnQtc2l6ZTozNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIG1hcmdpbjogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNraWxsYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG4uc2tpbGxzdGV4dCBwe1xuICBmb250LXNpemU6MjBweDtcbiAgZm9udC13ZWlnaHQ6MzAwO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuLnNraWxsc3RleHQgaXtcbiAgZmxvYXQ6cmlnaHQ7XG4gIGZvbnQtc2l6ZTozNHB4O1xuICBtYXJnaW4tcmlnaHQ6MWVtO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgY29sb3I6ICMyMjJmMzU7XG59XG5cbi5za2lsbHN0ZXh0IGk6aG92ZXJ7XG4gIGNvbG9yOiNjNzQ3M2E7XG4gIGN1cnNvcjpwb2ludGVyO1xufVxuXG4uc2tpbGxzdGV4dCBpOmFjdGl2ZXtcbiAgZm9udC1zaXplOjMwcHg7XG4gIG1hcmdpbi1yaWdodDogMS4yZW07XG59XG4uc2tpbGxjb250ZW50e1xuICBwYWRkaW5nOiAyZW07XG59XG5cbi5za2lsbHBhcmFncmFwaHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6IzIyMmYzNTtcbn1cblxuXG4uc2tpbGxzb3VyY2V7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKlNLSUxMUyovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLypQUk9KRUNUUyovXG4ucHJvamVjdHN7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDo0MGVtO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LDIzOCwyMzgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0cyBoMntcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBmb250LXNpemU6NDZweDtcbiAgY29sb3I6ICMyMjJmMzU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ucHJvamVjdHtcbiAgd2lkdGg6MjBlbTtcbiAgaGVpZ2h0OjE0ZW07XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDM1cHggIzMzMztcbn1cblxuXG5cbi5wcm9qZWN0IGltZ3tcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG59XG5cbi5vdmVybGF5e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOjIwZW07XG4gIGhlaWdodDoxNGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB0b3A6MCU7XG4gIHJpZ2h0OjAlO1xuICBvcGFjaXR5OiA4MCU7XG4gIHRyYW5zaXRpb246IDJzO1xufVxuLm92ZXJsYXk6aG92ZXJ7XG4gIG9wYWNpdHk6IDAlO1xufVxuLm92ZXJsYXl0ZXh0e1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOjI0cHg7XG4gIGZvbnQtd2VpZ2h0OjQwMDtcbn1cblxuI3Byb2plY3Qxe1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuI3Byb2plY3Qye1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3Byb2plY3Qze1xuICBkaXNwbGF5OiBub25lO1xufVxuLypQUk9KRUNUUyovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogTUVESUEgUVVBUklFUyovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOjgwMHB4KXtcblxuICAuYWJvdXRtZXtcbiAgICB0b3A6NjAlO1xuICB9XG5cbiAgLm15aDJ7XG4gICAgZm9udC1zaXplOjcwcHg7XG4gIH1cblxuICAuaW1hZ2VkaXZ7XG4gICAgd2lkdGg6IDEyZW07XG4gICAgaGVpZ2h0OjEyZW07XG4gICAgcmlnaHQ6MiU7XG4gIH1cblxuICAuaW1hZ2VkaXYgaW1ne1xuICAgIHdpZHRoOjllbTtcbiAgICBoZWlnaHQ6OWVtO1xuICAgIGxlZnQ6NTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNC41ZW07XG4gICAgbWFyZ2luLXRvcDogMS41ZW07XG4gIH1cbiAgLnNraWxse1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6OWVtO1xuICBoZWlnaHQ6OWVtO1xuICBib3JkZXItcmFkaXVzOiAyMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMTM5O1xuICBib3gtc2hhZG93OiA1cHggMTBweCAzNXB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxM2VtO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIC5za2lsbHN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjUwZW07XG4gICAgaGVpZ2h0OjEyZW07XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6NzAlO1xuICAgIGxlZnQ6NTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjIuNWVtO1xuICAgIG1hcmdpbi10b3A6NWVtO1xuICB9XG4gIC5za2lsbCBpe1xuICAgIGZvbnQtc2l6ZTo4MHB4O1xuICAgIGNvbG9yOiNjNzQ3M2E7XG4gIH1cblxuICAjcHJvamVjdDF7XG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOjUwMHB4KXtcblxuICAubWFpbiBpbWd7XG4gICAgaGVpZ2h0OjEwMGVtO1xuICB9XG4gIC5teWgxe1xuICAgIGZvbnQtc2l6ZTogNzBweDtcblxuICB9XG5cbiAgLmltYWdlZGl2e1xuICAgIHdpZHRoOiA5ZW07XG4gICAgaGVpZ2h0OjllbTtcbiAgICBsZWZ0OjYwJTtcbiAgfVxuXG4gIC5pbWFnZWRpdiBpbWd7XG4gICAgd2lkdGg6N2VtO1xuICAgIGhlaWdodDo3ZW07XG4gICAgbGVmdDo1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0zLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cblxuXG4gIC5hYm91dG1le1xuICAgIHRvcDo2MCU7XG4gIH1cbiAgLnNraWxsc3tcbiAgICB0b3A6NzAlO1xuICAgIHdpZHRoOjI3ZW07XG4gICAgaGVpZ2h0OjI2ZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0xMWVtO1xuICB9XG5cbiAgLnNraWxse1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxuICAubXloMntcbiAgICBmb250LXNpemU6IDQwcHg7XG5cbiAgfVxuXG4gIC5teWgze1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGNvbG9yOmxpZ2h0Z3JleTtcbiAgfVxuICAjcHJvamVjdDF7XG4gICAgbGVmdDo1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMGVtO1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6NDAwcHgpe1xuICAuaW1hZ2VkaXZ7XG4gICAgbGVmdDo1MCU7XG4gICAgdG9wOjglO1xuICB9XG5cbiAgLnNraWxsc3tcbiAgICB3aWR0aDoyMGVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBlbTtcbiAgfVxuICAuc2tpbGwtaHRtbHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgfVxuICAuc2tpbGwtanN7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIH1cbiAgLnNraWxsLWNzc3tcbiAgICBtYXJnaW4tcmlnaHQ6MDtcbiAgfVxuICAuc2tpbGwtYW5ndWxhcntcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "myfooter"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2020 im4xpro. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".myfooter[_ngcontent-%COMP%]{\n  width:100%;\n  height:10em;\n  background-color: #222f35;\n  text-align: center;\n  line-height: 10em;\n  color: rgb(238, 238, 238);\n  border-top: 5px solid #c7473a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Zm9vdGVye1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTBlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmYzNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTBlbTtcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNjNzQ3M2E7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 9, vars: 0, consts: [[1, "mynavbar"], [1, "brandname"], ["id", "insta"], ["href", "https://www.instagram.com/im4xpro"], [1, "fab", "fa-instagram"], ["id", "github"], ["href", "https://www.github.com/im4xpro"], [1, "fab", "fa-github"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "im4xpro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mynavbar[_ngcontent-%COMP%]{\n  background-color: #203139;\n  width:100%;\n  height:4em;\n\n}\n\nli[_ngcontent-%COMP%]{\n  display:inline-block;\n  text-decoration: none;\n  float: right;\n  margin-right: 3em;\n  margin-top: 1em;\n\n}\n\ni[_ngcontent-%COMP%]{\n  font-size: 34px;\n}\n\ni[_ngcontent-%COMP%]:hover{\n  color: rgb(130, 45, 27);\n}\n\ni[_ngcontent-%COMP%]:active{\n  font-size:30px;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: #c7473a;\n}\n\n.brandname[_ngcontent-%COMP%]{\n  float: left;\n  color: #c7473a;\n  margin-left: 1em;\n  font-size: 34px;\n  font-weight: 300;\n  margin-top: 0.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixVQUFVOztBQUVaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15bmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMTM5O1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6NGVtO1xuXG59XG5cbmxpe1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogM2VtO1xuICBtYXJnaW4tdG9wOiAxZW07XG5cbn1cblxuaXtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuXG5pOmhvdmVye1xuICBjb2xvcjogcmdiKDEzMCwgNDUsIDI3KTtcbn1cbmk6YWN0aXZle1xuICBmb250LXNpemU6MzBweDtcbn1cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNjNzQ3M2E7XG59XG5cbi5icmFuZG5hbWV7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI2M3NDczYTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiAwLjRlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maxi/Documents/Maximilian/dev/web/im4xpro-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map