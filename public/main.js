(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/k2K":
/*!******************************************************************!*\
  !*** ./src/app/pages/planet-details/planet-details.component.ts ***!
  \******************************************************************/
/*! exports provided: PlanetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetDetailsComponent", function() { return PlanetDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/planet.service */ "yE89");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class PlanetDetailsComponent {
    constructor(planetService, route, router) {
        this.planetService = planetService;
        this.route = route;
        this.router = router;
        this.planet = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.route.params.subscribe(params=>{
            // })
            this.subscription = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((params) => this.planetService.getById(params.id)))
                .subscribe(planet => this.planet = planet);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PlanetDetailsComponent.ɵfac = function PlanetDetailsComponent_Factory(t) { return new (t || PlanetDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_3__["PlanetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PlanetDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PlanetDetailsComponent, selectors: [["planet-details"]], decls: 7, vars: 2, consts: [[1, "planet-details"]], template: function PlanetDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "planet-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.planet.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.planet.mass);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stavyaarbar/Desktop/dev/projects/planets/angular-test-app/src/main.ts */"zUnb");


/***/ }),

/***/ "70mn":
/*!**********************************************************!*\
  !*** ./src/app/pages/planet-app/planet-app.component.ts ***!
  \**********************************************************/
/*! exports provided: PlanetAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetAppComponent", function() { return PlanetAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/planet.service */ "yE89");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_planet_filter_planet_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/planet-filter/planet-filter.component */ "E3Ox");
/* harmony import */ var _cmps_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/planet-list/planet-list.component */ "Xo8p");







function PlanetAppComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Planets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlanetAppComponent_planet_filter_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "planet-filter");
} }
function PlanetAppComponent_planet_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "planet-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRemovePlanet", function PlanetAppComponent_planet_list_3_Template_planet_list_onRemovePlanet_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.removePlanet($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("planets", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r2.planets$));
} }
class PlanetAppComponent {
    constructor(planetService) {
        this.planetService = planetService;
        // planets: Planet[]
        this.currPlanetId = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.planetService.query();
            this.planets$ = this.planetService.planets$;
            // this.planets$ = await this.planetService.query()
            // (await this.planetService.query()).subscribe(planets=>{
            //   this.planets = planets
            // })
            // const test$ = zip(this.planetService.planets$, this.planetService.getPlanetsImgs())
            // this.subscription = test$.subscribe(([planets, planetsImgs]) => {
            //   this.planets = this.planetService.planets$.pipe(
            //     map((planets) => {
            //       console.log('map -> planets', planets)
            //       console.log('planetsImgs: ', planetsImgs);
            //       return planets.map((planet, idx) => {
            //         planet.imgUrl = planetsImgs[idx]
            //         return planet
            //       })
            //     })
            //   )
            // })
        });
    }
    removePlanet(planetId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.planetService.remove(planetId);
            // this.planets = await this.planetService.query()
        });
    }
}
PlanetAppComponent.ɵfac = function PlanetAppComponent_Factory(t) { return new (t || PlanetAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"])); };
PlanetAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlanetAppComponent, selectors: [["planet-app"]], decls: 5, vars: 3, consts: [[1, "planet-app"], [4, "ngIf"], [3, "planets", "onRemovePlanet", 4, "ngIf"], [3, "planets", "onRemovePlanet"]], template: function PlanetAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlanetAppComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlanetAppComponent_planet_filter_2_Template, 1, 0, "planet-filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlanetAppComponent_planet_list_3_Template, 2, 3, "planet-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currPlanetId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currPlanetId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currPlanetId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _cmps_planet_filter_planet_filter_component__WEBPACK_IMPORTED_MODULE_5__["PlanetFilterComponent"], _cmps_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_6__["PlanetListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".planet-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  min-height: 100vh;\n}\n.planet-app[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n.planet-app[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]:first-child {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsYW5ldC1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUtFO0VBQ0UsWUFBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtBQUhKIiwiZmlsZSI6InBsYW5ldC1hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhbmV0LWFwcCB7XG4gIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mjg3MjI4Mjg4MTQtNzdiOWI4M2FhZmIyP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zNDUwJnE9ODApO1xuICBcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gIC5saXN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG4gICYgPiBoMTpmaXJzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIH1cblxuICBcblxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
    production: false,
    baseUrl: '//localhost:3030/api/planet'
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

/***/ "E3Ox":
/*!***************************************************************!*\
  !*** ./src/app/cmps/planet-filter/planet-filter.component.ts ***!
  \***************************************************************/
/*! exports provided: PlanetFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetFilterComponent", function() { return PlanetFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/planet.service */ "yE89");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class PlanetFilterComponent {
    constructor(planetService) {
        this.planetService = planetService;
    }
    ngOnInit() {
        this.subscription = this.planetService.filterBy$.subscribe(filterBy => {
            this.filterBy = filterBy;
        });
    }
    setFilterBy() {
        this.planetService.setFilterBy(this.filterBy);
    }
}
PlanetFilterComponent.ɵfac = function PlanetFilterComponent_Factory(t) { return new (t || PlanetFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_1__["PlanetService"])); };
PlanetFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetFilterComponent, selectors: [["planet-filter"]], decls: 3, vars: 1, consts: [[1, "planet-filter"], ["for", "planetFilter"], ["name", "term", "type", "text", "id", "planetFilter", 3, "ngModel", "ngModelChange"]], template: function PlanetFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlanetFilterComponent_Template_input_ngModelChange_2_listener($event) { return ctx.filterBy.term = $event; })("ngModelChange", function PlanetFilterComponent_Template_input_ngModelChange_2_listener() { return ctx.setFilterBy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterBy.term);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuZXQtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Mihl":
/*!***********************************************!*\
  !*** ./src/app/cmps/greet/greet.component.ts ***!
  \***********************************************/
/*! exports provided: Greet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Greet", function() { return Greet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Greet {
}
Greet.ɵfac = function Greet_Factory(t) { return new (t || Greet)(); };
Greet.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Greet, selectors: [["greet"]], decls: 2, vars: 0, consts: [[1, "greet"]], template: function Greet_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Greet Hello!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".greet[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  background-color: #7aff7e76;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQUNGIiwiZmlsZSI6ImdyZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWV0IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FmZjdlNzY7XG59Il19 */"] });


/***/ }),

/***/ "P171":
/*!******************************************************!*\
  !*** ./src/app/img-preview/img-preview.component.ts ***!
  \******************************************************/
/*! exports provided: ImgPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgPreviewComponent", function() { return ImgPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/planet.service */ "yE89");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { "background-image": a0 }; };
class ImgPreviewComponent {
    constructor(planetService, activatedRoute, router) {
        this.planetService = planetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.planetService.query();
            this.subscription = this.activatedRoute.params.subscribe(params => {
                const { id } = params;
                this.planetService.getById(id).subscribe(planet => {
                    this.planet = planet;
                });
            });
        });
    }
    stopProp(ev) {
        ev.stopPropagation();
    }
}
ImgPreviewComponent.ɵfac = function ImgPreviewComponent_Factory(t) { return new (t || ImgPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ImgPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImgPreviewComponent, selectors: [["app-img-preview"]], decls: 4, vars: 7, consts: [[1, "img-preview-screen", 3, "routerLink"], [1, "img-background", 3, "ngStyle", "click"], [1, "btn", 3, "routerLink"]], template: function ImgPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImgPreviewComponent_Template_section_click_1_listener($event) { return ctx.stopProp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2716\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, "url(" + ctx.planet.imgUrl + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: [".img-preview-screen[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  min-height: 100vh;\n  min-width: 100vw;\n  background-color: rgba(0, 0, 0, 0.53);\n}\n.img-preview-screen[_ngcontent-%COMP%]   .img-background[_ngcontent-%COMP%] {\n  max-width: 800px;\n  max-height: 70vh;\n  aspect-ratio: 16/12;\n  position: absolute;\n  z-index: 800;\n  inset: 0;\n  top: calc(50vh - 30vh);\n  margin: auto;\n  background-color: #000000;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.img-preview-screen[_ngcontent-%COMP%]   .img-background[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #0b0b0b;\n  border: none;\n  box-shadow: 0 0 1px 0.1px white;\n  text-align: center;\n  font-size: 1.05rem;\n  top: 10px;\n  right: 10px;\n  width: 50px;\n  z-index: 200;\n  transition: box-shadow 0.2s;\n}\n.img-preview-screen[_ngcontent-%COMP%]   .img-background[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2px 0.2px white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ltZy1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFDRjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBTEo7QUFPSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBTE47QUFPTTtFQUNFLCtCQUFBO0FBTFIiLCJmaWxlIjoiaW1nLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXByZXZpZXctc2NyZWVuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Myk7XG4gIC8vIC5pbWctYmFja2dyb3VuZCB7XG4gIC8vICAgbWF4LXdpZHRoOiAxMDAlO1xuICAvLyAgIC8vIGhlaWdodDogODB2aDtcblxuICBcblxuICAuaW1nLWJhY2tncm91bmQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICBhc3BlY3QtcmF0aW86IDE2LzEyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA4MDA7XG4gICAgaW5zZXQ6IDA7XG4gICAgdG9wOiBjYWxjKDUwdmggLSAzMHZoKTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzBiMGIwYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwYjBiO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAwLjFweCB3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICB6LWluZGV4OiAyMDA7XG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggMC4ycHggd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'angular-test-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 0);
    } }, directives: [_cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".main-container[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59Il19 */"] });


/***/ }),

/***/ "Xo8p":
/*!***********************************************************!*\
  !*** ./src/app/cmps/planet-list/planet-list.component.ts ***!
  \***********************************************************/
/*! exports provided: PlanetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetListComponent", function() { return PlanetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _planet_preview_planet_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../planet-preview/planet-preview.component */ "iCkH");





function PlanetListComponent_planet_preview_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "planet-preview", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRemovePlanet", function PlanetListComponent_planet_preview_4_Template_planet_preview_onRemovePlanet_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onRemovePlanet.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planet_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("planet", planet_r1);
} }
class PlanetListComponent {
    constructor() {
        this.planets = [];
        this.onRemovePlanet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectPlanet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    trackByFn(index, item) {
        return item.id;
    }
}
PlanetListComponent.ɵfac = function PlanetListComponent_Factory(t) { return new (t || PlanetListComponent)(); };
PlanetListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetListComponent, selectors: [["planet-list"]], inputs: { planets: "planets" }, outputs: { onRemovePlanet: "onRemovePlanet", onSelectPlanet: "onSelectPlanet" }, decls: 5, vars: 1, consts: [[1, "planet-list"], ["routerLink", "/add"], [1, "list-container", "container"], [3, "planet", "onRemovePlanet", 4, "ngFor", "ngForOf"], [3, "planet", "onRemovePlanet"]], template: function PlanetListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Planet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlanetListComponent_planet_preview_4_Template, 1, 1, "planet-preview", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.planets);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _planet_preview_planet_preview_component__WEBPACK_IMPORTED_MODULE_3__["PlanetPreviewComponent"]], styles: [".planet-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  padding-top: 25px;\n  padding-bottom: 200px;\n  max-width: 80vw;\n  grid-auto-rows: 1fr;\n  justify-items: center;\n  justify-content: center;\n  gap: 35px;\n}\n\n.list-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  max-width: 350px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsYW5ldC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksY0FBQTtBQUZSOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBTEo7O0FBT0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFMUiIsImZpbGUiOiJwbGFuZXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFuZXQtbGlzdCB7XG4gICAgLy8gd2lkdGg6IDEwMHZ3O1xuICAgIC8vIHdpZHRoOiA4MHZ3O1xuICAgID4gYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xuICAgIC8vIG1hcmdpbi1pbmxpbmU6NTBweDtcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDM1cHg7XG5cbiAgICA+ICoge1xuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_planet_app_planet_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/planet-app/planet-app.component */ "70mn");
/* harmony import */ var _cmps_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmps/planet-list/planet-list.component */ "Xo8p");
/* harmony import */ var _cmps_planet_preview_planet_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/planet-preview/planet-preview.component */ "iCkH");
/* harmony import */ var _pages_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/planet-details/planet-details.component */ "/k2K");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _cmps_planet_filter_planet_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmps/planet-filter/planet-filter.component */ "E3Ox");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _cmps_add_planet_add_planet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cmps/add-planet/add-planet.component */ "pE/N");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _img_preview_img_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img-preview/img-preview.component */ "P171");
/* harmony import */ var _cmps_greet_greet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmps/greet/greet.component */ "Mihl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_planet_app_planet_app_component__WEBPACK_IMPORTED_MODULE_3__["PlanetAppComponent"],
        _cmps_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_4__["PlanetListComponent"],
        _cmps_planet_preview_planet_preview_component__WEBPACK_IMPORTED_MODULE_5__["PlanetPreviewComponent"],
        _pages_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_6__["PlanetDetailsComponent"],
        _cmps_planet_filter_planet_filter_component__WEBPACK_IMPORTED_MODULE_8__["PlanetFilterComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_11__["AppHeaderComponent"],
        _cmps_add_planet_add_planet_component__WEBPACK_IMPORTED_MODULE_12__["AddPlanetComponent"],
        _img_preview_img_preview_component__WEBPACK_IMPORTED_MODULE_14__["ImgPreviewComponent"],
        _cmps_greet_greet_component__WEBPACK_IMPORTED_MODULE_15__["Greet"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "iCkH":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/planet-preview/planet-preview.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlanetPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetPreviewComponent", function() { return PlanetPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/planet.service */ "yE89");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/img", a1]; };
const _c1 = function (a1) { return ["/planet", a1]; };
class PlanetPreviewComponent {
    constructor(planetService) {
        this.planetService = planetService;
        this.onRemovePlanet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = this.getRandomColor();
    }
    ngOnInit() {
        // this.planetService.getPlanetImg(this.planet.name).pipe(map(res=>res)).subscribe(imgUrl => {
        this.planetImgUrl = this.planet.imgUrl;
        // this.subscription = this.planetService.getPlanetImg(this.planet.name).subscribe(imgUrl => {
        // })
    }
    ngOnDestroy() {
        // this.subscription.unsubscribe()
    }
    toggleImg() {
    }
    getRandomColor() {
        const chars = '0123456789abcdef';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            let randIdx = Math.floor(Math.random() * chars.length);
            color += chars[randIdx];
        }
        return color;
    }
}
PlanetPreviewComponent.ɵfac = function PlanetPreviewComponent_Factory(t) { return new (t || PlanetPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_1__["PlanetService"])); };
PlanetPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetPreviewComponent, selectors: [["planet-preview"]], inputs: { planet: "planet" }, outputs: { onRemovePlanet: "onRemovePlanet" }, decls: 12, vars: 9, consts: [[1, "planet-preview"], [1, "img-container"], ["alt", "", 3, "routerLink", "src"], [1, "preview-details"], [3, "routerLink"], [1, "remove-planet", 3, "click"]], template: function PlanetPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanetPreviewComponent_Template_button_click_10_listener() { return ctx.onRemovePlanet.emit(ctx.planet._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.planet._id))("src", ctx.planetImgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx.planet == null ? null : ctx.planet.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Mass: ", ctx.planet == null ? null : ctx.planet.mass, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.planet._id));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".planet-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0px 1px #00000040;\n  position: relative;\n  border-radius: 8px;\n  padding: 30px 20px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #1010108c;\n}\n.planet-preview[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 100%;\n}\n.planet-preview[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  cursor: pointer;\n}\n.planet-preview[_ngcontent-%COMP%]   .preview-details[_ngcontent-%COMP%] {\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n}\n.planet-preview[_ngcontent-%COMP%]   .preview-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-block: 5px;\n  text-shadow: 0 0 0.5px black;\n  width: 100%;\n}\n.planet-preview[_ngcontent-%COMP%]   .preview-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-block: 5px;\n  color: inherit;\n  text-decoration: none;\n}\n.planet-preview[_ngcontent-%COMP%]:hover   .preview-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.planet-preview[_ngcontent-%COMP%]   .remove-planet[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  padding: 5px 10px;\n  top: -7px;\n  right: -7px;\n  border: none;\n  border-radius: 2px;\n  background-color: #0b0b0b;\n  box-shadow: 0 0 1px 0.1px white;\n  color: #e1e1e1;\n  transition: box-shadow 0.2s;\n  transition: transform 0.2s;\n}\n.planet-preview[_ngcontent-%COMP%]   .remove-planet[_ngcontent-%COMP%]:hover, .planet-preview[_ngcontent-%COMP%]   .remove-planet[_ngcontent-%COMP%]:focus {\n  transform: scale(1.2);\n}\n.planet-preview[_ngcontent-%COMP%]   .remove-planet[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2px 0.2px white;\n}\n.planet-preview[_ngcontent-%COMP%]:hover   .remove-planet[_ngcontent-%COMP%] {\n  display: revert;\n  animation: fade-in 0.25s forwards;\n}\n@keyframes fade-in {\n  0% {\n    transform: scale(0);\n  }\n  85% {\n    transform: scale(1.07);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsYW5ldC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksaUNBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBYko7QUFnQkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQWRSO0FBZVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWJaO0FBaUJJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQWZSO0FBaUJRO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFmWjtBQWtCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWhCWjtBQW9CSTtFQUNJLDBCQUFBO0FBbEJSO0FBcUJJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUF4RUosMEJBQUE7QUFzREo7QUFwREk7RUFFSSxxQkFBQTtBQXFEUjtBQXFCUTtFQUNJLCtCQUFBO0FBbkJaO0FBdUJJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FBckJSO0FBeUJBO0VBQ0k7SUFDSSxtQkFBQTtFQXRCTjtFQXdCRTtJQUNJLHNCQUFBO0VBdEJOO0VBd0JFO0lBQ0ksbUJBQUE7RUF0Qk47QUFDRiIsImZpbGUiOiJwbGFuZXQtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBob3Zlci1idG4oJHNwZWVkOiAwLjJzKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICRzcGVlZDtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG5cbiAgICBAY29udGVudDtcbn1cblxuLnBsYW5ldC1wcmV2aWV3IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDFweCAjMDAwMDAwNDA7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICAgIC8vIGhlaWdodDogMzMwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwOGM7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmltZy1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByZXZpZXctZGV0YWlscyB7XG4gICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jazogNXB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwLjVweCBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWJsb2NrOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIgLnByZXZpZXctZGV0YWlscyBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgLnJlbW92ZS1wbGFuZXQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgIHJpZ2h0OiAtN3B4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGIwYjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAwLjFweCB3aGl0ZTtcbiAgICAgICAgY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnM7XG5cbiAgICAgICAgLy8gJjpob3ZlciB7XG4gICAgICAgIC8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgQGluY2x1ZGUgaG92ZXItYnRuKCk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAwLjJweCB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIgLnJlbW92ZS1wbGFuZXQge1xuICAgICAgICBkaXNwbGF5OiByZXZlcnQ7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjI1cyBmb3J3YXJkcztcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICA4NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "pE/N":
/*!*********************************************************!*\
  !*** ./src/app/cmps/add-planet/add-planet.component.ts ***!
  \*********************************************************/
/*! exports provided: AddPlanetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlanetComponent", function() { return AddPlanetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/planet.service */ "yE89");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class AddPlanetComponent {
    constructor(planetService, router) {
        this.planetService = planetService;
        this.router = router;
    }
    ngOnInit() {
        this.planet = this.planetService.getEmpetyPlanet();
    }
    onSavePlanet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.planetService.savePlanet(this.planet);
            this.router.navigateByUrl('/');
        });
    }
}
AddPlanetComponent.ɵfac = function AddPlanetComponent_Factory(t) { return new (t || AddPlanetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddPlanetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPlanetComponent, selectors: [["app-add-planet"]], decls: 7, vars: 1, consts: [[1, "add-planet"], [3, "submit"], ["for", "name"], ["name", "name", "type", "text", 3, "ngModel", "ngModelChange"], [1, "btn"]], template: function AddPlanetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddPlanetComponent_Template_form_submit_1_listener() { return ctx.onSavePlanet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlanetComponent_Template_input_ngModelChange_4_listener($event) { return ctx.planet.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.planet.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".add-planet[_ngcontent-%COMP%] {\n  padding-top: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.add-planet[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  transform: scale(1);\n  padding: 3%;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.223);\n  border: rgba(0, 0, 0, 0.283) solid 1px;\n  border-radius: 5px;\n}\n.add-planet[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.add-planet[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  font-size: 1.01em;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1wbGFuZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBRko7QUFHSTtFQUNFLG9CQUFBO0FBRE47QUFJSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0hBQUE7QUFGTiIsImZpbGUiOiJhZGQtcGxhbmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1wbGFuZXQge1xuICAvLyBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIyMyk7XG4gICAgYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMjgzKSBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxhYmVsIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjAxZW07XG4gICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 3, vars: 0, consts: [[1, "about"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "abouuutttt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about[_ngcontent-%COMP%] {\n  width: 100vw;\n  padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQge1xuICB3aWR0aDogMTAwdnc7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59Il19 */"] });


/***/ }),

/***/ "uOz6":
/*!*********************************************************!*\
  !*** ./src/app/cmps/app-header/app-header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





const _c0 = function (a0, a1) { return { active: a0, hide: a1 }; };
const _c1 = function (a0) { return { show: a0 }; };
const _c2 = function () { return { exact: true }; };
class AppHeaderComponent {
    constructor() {
        this.isActive = false;
        this.faGlobe = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGlobeAmericas"];
    }
    handleScroll() {
        this.isActive = (window.scrollY > 70);
    }
    ngOnInit() {
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], hostBindings: function AppHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AppHeaderComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 12, vars: 10, consts: [[1, "app-header", 3, "ngClass"], ["routerLink", ""], [3, "icon"], [3, "ngClass"], ["routerLink", "", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "about", "routerLinkActive", "active"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Planets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx.isActive, !ctx.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faGlobe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".app-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  min-height: 70px;\n  background-image: linear-gradient(180deg, rgba(12, 12, 21, 0.3), rgba(12, 12, 21, 0));\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10px;\n  z-index: 999;\n  transition: 0.2s;\n  transition-property: background-color, opacity, min-height;\n}\n.app-header.active[_ngcontent-%COMP%] {\n  background-color: #0c0c15;\n}\n.app-header[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.app-header[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  padding-left: 30px;\n}\n.app-header[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child:hover {\n  text-decoration: underline;\n}\n.app-header[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  padding-right: 30px;\n}\n.app-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.app-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.app-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.app-header[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\n  animation: scrollShow 0.5s forwards;\n}\n.app-header.hide[_ngcontent-%COMP%] {\n  min-height: 0px;\n}\n.app-header[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #71b4ee;\n}\n@keyframes scrollShow {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 100;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLHFGQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSwwREFBQTtBQUhGO0FBS0U7RUFDRSx5QkFBQTtBQUhKO0FBUUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBTko7QUFRRTtFQUNFLGtCQUFBO0FBTko7QUFRSTtFQUNFLDBCQUFBO0FBTk47QUFTRTtFQUNFLG1CQUFBO0FBUEo7QUFTRTtFQUNFLGNBQUE7QUFQSjtBQVNFO0VBQ0UscUJBQUE7QUFQSjtBQVdJO0VBQ0UsaUJBQUE7QUFUTjtBQWFFO0VBRUUsbUNBQUE7QUFaSjtBQWNFO0VBQ0UsZUFBQTtBQVpKO0FBZUU7RUFDRSxjQUFBO0FBYko7QUFrQkE7RUFDRTtJQUNFLFVBQUE7RUFmRjtFQWtCQTtJQUNFLFVBQUE7RUFoQkY7RUFtQkE7SUFDRSxZQUFBO0lBQ0Esd0JBQUE7RUFqQkY7QUFDRiIsImZpbGUiOiJhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5hcHAtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxMiwgMTIsIDIxLCAuMyksIHJnYmEoMTIsIDEyLCAyMSwgMCkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIFxuICB0cmFuc2l0aW9uOiAuMnMgO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5LCBtaW4taGVpZ2h0O1xuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDEyLCAyMSk7XG4gIH1cblxuICBcblxuICA+IGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG4gID4gOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuICA+IDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gID4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgbmF2IHtcbiAgICA+IGE6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cblxuICAuc2hvdyB7XG4gICAgLy8gb3BhY2l0eTogMTAwO1xuICAgIGFuaW1hdGlvbjogc2Nyb2xsU2hvdyAuNXMgZm9yd2FyZHM7XG4gIH1cbiAgJi5oaWRlIHtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBjb2xvcjogcmdiKDExMywgMTgwLCAyMzgpO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBzY3JvbGxTaG93IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cblxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_add_planet_add_planet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/add-planet/add-planet.component */ "pE/N");
/* harmony import */ var _img_preview_img_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-preview/img-preview.component */ "P171");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_planet_app_planet_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/planet-app/planet-app.component */ "70mn");
/* harmony import */ var _pages_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/planet-details/planet-details.component */ "/k2K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'planet/:id', component: _pages_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_5__["PlanetDetailsComponent"] },
    { path: 'add', component: _cmps_add_planet_add_planet_component__WEBPACK_IMPORTED_MODULE_1__["AddPlanetComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: '', component: _pages_planet_app_planet_app_component__WEBPACK_IMPORTED_MODULE_4__["PlanetAppComponent"], children: [{ path: 'img/:id', component: _img_preview_img_preview_component__WEBPACK_IMPORTED_MODULE_2__["ImgPreviewComponent"] }] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yE89":
/*!********************************************!*\
  !*** ./src/app/services/planet.service.ts ***!
  \********************************************/
/*! exports provided: PlanetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetService", function() { return PlanetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class PlanetService {
    constructor(http) {
        this.http = http;
        this._planets$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.planets$ = this._planets$.asObservable();
        this._filterBy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ term: '' });
        this.filterBy$ = this._filterBy$.asObservable();
    }
    query() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('environment: ', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]);
            const { baseUrl } = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
            console.log('query -> baseUrl', baseUrl);
            let planets = yield this.http.get(`${baseUrl}`).toPromise();
            console.log('query -> planets', planets);
            this.planetsDb = planets;
            const filterBy = this._filterBy$.getValue();
            const regexSearch = new RegExp(filterBy.term, 'i');
            planets = this.planetsDb.filter(planet => regexSearch.test(planet.name));
            this._planets$.next(planets);
            // return of([...planets])
            // return this.http.get<Planet[]>('http://localhost:3030/api/planet').pipe(
            //   map(planets=>{
            //     this.planetsDb = planets
            //     const filterBy = this._filterBy$.getValue();
            //     const regexSearch = new RegExp(filterBy.term, 'i')
            //     planets = this.planetsDb.filter(planet => regexSearch.test(planet.name))
            //     this._planets$.next(planets)
            //     return planets
            //   })
            // )
        });
    }
    getById(planetId) {
        const planet = this.planetsDb.find(planet => planet._id === planetId);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object.assign({}, planet));
    }
    remove(planetId) {
        console.log('remove -> planetId', planetId);
        this.http.delete(`http://localhost:3030/api/planet/${planetId}`).subscribe(res => {
            this.planetsDb = this.planetsDb.filter(planet => planet._id !== planetId);
            this._planets$.next([...this.planetsDb]);
        });
        // this.save(this.planetsDb)
        // return Promise.resolve()
    }
    getPlanetImg(planetName) {
        return this.http.get(`https://images-api.nasa.gov/search?q=${planetName}`).pipe(
        // return this.http.get<any>(`https://api.unsplash.com/search/photos?page=1&query=${planetName}&client_id=tpIUCbBfDgzIt0o2TDkeZC7zRNLW5t_ZhPj3YxHj9p4`).pipe(
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.collection.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(items => {
            console.log('getPlanetImg -> items', items);
            const randItemIdx = Math.floor(Math.random() * items.length);
            return items[randItemIdx].links[0].href;
        }));
    }
    getEmpetyPlanet() {
        return {
            name: '',
            mass: 5.15 * Math.pow(10, 23),
        };
    }
    // NdMhVquTI6hBjGRk7e8Oj4FMlaljw3c3hDug0xjp
    savePlanet(planet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('planet: ', planet);
            const imgUrl = yield this.getPlanetImg(planet.name).toPromise();
            console.log('savePlanet -> imgUrl', imgUrl);
            planet.imgUrl = imgUrl;
            planet._id = "id" + Math.random().toString(16).slice(2);
            this.planetsDb = [...this.planetsDb, planet];
            this._planets$.next([...this.planetsDb]);
        });
    }
    setFilterBy(filterBy) {
        this._filterBy$.next(filterBy);
        this.query();
    }
    save(planets = []) {
        const strValue = JSON.stringify(planets);
        localStorage.setItem('planets', strValue);
    }
    savePlanetsImgs() {
    }
    getPlanetsImgs() {
        const planetImgs = this.planetsDb.map(planet => this.getPlanetImg(planet.name));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(planetImgs);
        // const plentImgs$ = forkJoin(planetImgs).pipe(
        //   tap(imgs => {
        //     console.log('imgs: ', imgs);
        //   })
        // )
        // plentImgs$.subscribe(imgs=>{
        // })
    }
    load(key) {
        const strValue = localStorage.getItem(key);
        const value = JSON.parse(strValue);
        return value;
    }
}
PlanetService.ɵfac = function PlanetService_Factory(t) { return new (t || PlanetService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
PlanetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PlanetService, factory: PlanetService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map