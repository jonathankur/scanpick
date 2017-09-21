webpackJsonp([1],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu/menu.module": [
		265,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(nav, navParams, loadingCtrl, menuCtrl, connect, zone, alertCtrl, cdr, barcodeScanner) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.connect = connect;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.cdr = cdr;
        this.barcodeScanner = barcodeScanner;
        this.myMode = 0;
        this.mySKU = '';
        this.myName = '';
        this.myMessage = '';
        this.myBar = '';
        this.myLocs = '';
        this.myID = 0;
        this.newLoc = '';
        this.repmode = false;
        this.myMessage = '';
        this.myID = 0;
        this.newLoc = '';
    }
    HomePage.prototype.recalc = function () {
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.recalc();
    };
    HomePage.prototype.addchar = function (a) {
        this.newLoc = "" + this.newLoc + a;
    };
    HomePage.prototype.doScan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                _this.checkCode(barcodeData.text);
            }
        }, function (err) {
        });
    };
    HomePage.prototype.scanLoc = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                _this.updateLoc(barcodeData.text);
            }
        }, function (err) {
        });
    };
    HomePage.prototype.fake = function () {
        this.checkCode('9300462346120');
    };
    HomePage.prototype.checkCode = function (s) {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Searching..."
        });
        loader.present();
        var url = 'spitem.php?code=' + s;
        console.log(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                that.myMode = data.result;
                if (that.myMode > 0) {
                    that.mySKU = data.SKU;
                    that.myName = data.name;
                    that.myBar = data.barcode;
                    that.myLocs = data.locs;
                    that.myID = data.id;
                    that.newLoc = '';
                }
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    HomePage.prototype.updateLoc = function (s) {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Updating..."
        });
        loader.present();
        var url = 'spsetloc.php?code=' + s + '&id=' + this.myID + '&repmode=' + this.repmode;
        console.log(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.zone.run(function () {
                that.myMode = data.result;
            });
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    HomePage.prototype.goBack = function () {
        this.myMode = 0;
    };
    HomePage.prototype.enterLoc = function () {
        this.myMode = 2;
    };
    HomePage.prototype.saveLoc = function () {
        this.updateLoc(this.newLoc);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/scanpick/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Scan Pick App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<div *ngIf = "myMode == 0" style="padding-top:50px"> \n\n <button ion-button color="primary" block (click)="doScan()">Scan product</button>\n\n<!-- <button ion-button color="danger" block (click)="fake()">Test</button>   -->\n\n</div>\n<div *ngIf = "myMode == 1">\n<ion-grid no-padding>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>SKU</ion-label>\n						<ion-input type="text" [(ngModel)]="mySKU" readonly></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>Product Name</ion-label>\n						<ion-input type="text" [(ngModel)]="myName" readonly></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>Locations</ion-label>\n						<ion-input type="text" [(ngModel)]="myLocs" readonly></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>Barcode</ion-label>\n						<ion-input type="text" [(ngModel)]="myBar" readonly></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n<ion-row>\n <ion-col col-12>\n  <ion-item>\n    <ion-label>Replace Mode</ion-label>\n    <ion-toggle [(ngModel)]="repmode" checked="false"></ion-toggle>\n  </ion-item>\n </ion-col>\n</ion-row>\n\n<ion-row>\n<ion-col col-12>\n <button ion-button color="primary" block (click)="scanLoc()">Scan Location</button>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-12>\n <button ion-button color="secondary" block (click)="enterLoc()">Enter Location</button>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-12>\n<button ion-button color="danger" block (click)="goBack()">Go Back</button>\n</ion-col>\n</ion-row>\n</ion-grid>\n</div>\n<div *ngIf="myMode == 2">\n<ion-grid>\n<ion-row>\n<ion-col>\n					<ion-item>\n						<ion-label stacked>New Location</ion-label>\n						<ion-input type="text" [(ngModel)]="newLoc"></ion-input>\n					</ion-item>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-6>\n<button ion-button color="secondary" block (click)="saveLoc()">Enter</button>\n</ion-col>\n<ion-col col-6>\n<button ion-button color="danger" block (click)="goBack()">Go Back</button>\n</ion-col>\n</ion-row>\n\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'A\')">A</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'B\')">B</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'C\')">C</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'D\')">D</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'E\')">E</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'F\')">F</button>\n</ion-col>\n</ion-row>\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'G\')">G</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'H\')">H</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'I\')">I</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'J\')">J</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'K\')">K</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'L\')">L</button>\n</ion-col>\n</ion-row>\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'M\')">M</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'N\')">N</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'O\')">O</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'P\')">P</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'Q\')">Q</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'R\')">R</button>\n</ion-col>\n</ion-row>\n\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'S\')">S</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'T\')">T</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'U\')">U</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'V\')">V</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'W\')">W</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'X\')">X</button>\n</ion-col>\n</ion-row>\n\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'Y\')">Y</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'Z\')">Z</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'1\')">1</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'2\')">2</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'3\')">3</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'4\')">4</button>\n</ion-col>\n</ion-row>\n<ion-row no-lines>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'5\')">5</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'6\')">6</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'7\')">7</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'8\')">8</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'9\')">9</button>\n</ion-col>\n<ion-col col-2>\n<button ion-button (click)="addchar(\'0\')">0</button>\n</ion-col>\n\n</ion-row>\n\n</ion-grid>	\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/scanpick/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Connect = (function () {
    function Connect(http) {
        this.http = http;
        this.server_url = 'http://theparcelpeople.com.au/catalogue/server/';
    }
    Connect.prototype.PostQuery = function (object, parameter) {
        return this.http.get(this.server_url + object + parameter).map(function (res) { return res.json(); });
    };
    Connect.prototype.getList = function (object) {
        return this.http.get(this.server_url + object).map(function (res) { return res.json(); });
    };
    Connect.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    Connect.prototype.getServerUrl = function () {
        return this.server_url;
    };
    return Connect;
}());
Connect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
], Connect);

//# sourceMappingURL=connect.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_connect__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_9__providers_connect__["a" /* Connect */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/var/www/html/ionic/scanpick/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/ionic/scanpick/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map