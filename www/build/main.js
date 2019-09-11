webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
    function HomePage(navCtrl, _cdRef) {
        // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
        this.navCtrl = navCtrl;
        this._cdRef = _cdRef;
        this.playlist = [];
        this.currentIndex = -1;
        this.myTracks = [{
                src: 'http://78.129.140.238:8090/stream',
                artist: 'Nigeria Gospel Radio',
                title: 'Nigeria Gospel Radio',
                art: 'assets/img/Nigerian_flag.png',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
            }, {
                src: 'http://icy2.abacast.com/megalectrics-thebeatmp3-32',
                artist: 'The Beat Fm 99.9',
                title: 'The Beat Fm 99.9',
                art: 'assets/img/The Beat Fm.jpg',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
            }, {
                src: 'http://197.210.168.147:8000/stream',
                artist: 'Royal Fm',
                title: 'Royal Fm',
                art: 'assets/img/Royal.jpg',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
            },
            {
                src: 'http://198.178.123.11:8442/stream.mp3',
                artist: 'Fresh Fm',
                title: 'Fresh Fm',
                art: 'assets/img/freshfm.jpg',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
            },
            {
                src: 'http://85.19.118.197:80/beat128.mp3',
                artist: 'Beat FM',
                title: 'Beat FM',
                art: 'assets/img/johnmayer.jpg',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            },
            {
                src: 'http://stream.zenolive.com/64b2e7umnfeuv',
                artist: 'Classic FM',
                title: 'Classic FM',
                art: 'assets/img/Classic.png',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            },
            {
                src: 'http://94.130.212.98:9193/stream',
                artist: 'Max FM',
                title: 'Max FM',
                art: 'assets/img/MAX-FM-Logo.png',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            },
            {
                src: 'http://icestream.coolwazobiainfo.com:8000/wazobia-ph',
                artist: 'Wazobia FM',
                title: 'Wazobia FM',
                art: 'assets/img/wazo.png',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            },
            {
                src: 'http://icy3.abacast.com/megalectrics-thebeat97.9fmmp3-48',
                artist: 'The Beat 97.9',
                title: 'The Beat 97.9',
                art: 'assets/img/thebeat.jpg',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            },
            {
                src: 'http://stream.zenolive.com/64b2e7umnfeuv',
                artist: 'Cool FM',
                title: 'Cool FM Radio',
                art: 'assets/img/cool.png',
                preload: 'none' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            }];
    }
    HomePage.prototype.add = function (track) {
        this.playlist.push(track);
    };
    HomePage.prototype.play = function (track, index) {
        this.currentTrack = track;
        this.currentIndex = index;
    };
    HomePage.prototype.next = function () {
        // if there is a next track on the list play it
        if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
            var i = this.currentIndex + 1;
            var track = this.playlist[i];
            this.play(track, i);
            this._cdRef.detectChanges(); // needed to ensure UI update
        }
        else if (this.currentIndex == -1 && this.playlist.length > 0) {
            // if no track is playing then start with the first track on the list
            this.play(this.playlist[0], 0);
        }
    };
    HomePage.prototype.onTrackFinished = function (track) {
        this.next();
    };
    HomePage.prototype.clear = function () {
        this.playlist = [];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/victor/Documents/apps/InternetRadio/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Ionic Internet Radio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let track of myTracks">\n      <ion-thumbnail item-left>\n        <img src="{{track.art}}">\n      </ion-thumbnail>\n      <h2>{{track.title}}</h2>\n      <button  item-right ion-button (click)="currentTrack = track"><ion-icon name="ios-play"></ion-icon></button>\n    </ion-item>\n  </ion-list>\n\n\n\n</ion-content>\n  <ion-footer color="primary">\n  <audio-track #audioTrack [track]="currentTrack" [autoplay]="true" (onFinish)="onTrackFinished($event)">\n\n	 <ion-toolbar color="dark">\n	 <div style="display: flex; justify-content: center;">\n      <button ion-button icon-only (click)="audioTrack.canPlay ? audioTrack.play() : next()"><ion-icon name="ios-play"></ion-icon></button>\n      <button ion-button icon-only (click)="audioTrack.pause()"><ion-icon name="ios-pause"></ion-icon></button>\n	  \n      \n	  \n    </div>\n  \n		 <div style="display: flex; justify-content: center;">\n  <div *ngIf="audioTrack && audioTrack.hasLoaded" color="light"><em style="color:#ffffff">{{ audioTrack?.title }}</em></div>\n      <ion-spinner color="light" *ngIf="audioTrack && audioTrack.isLoading"></ion-spinner>\n      \n	  \n    </div>\n  \n	\n  </ion-toolbar>\n	\n  </audio-track>\n</ion-footer>`/*ion-inline-end:"/Users/victor/Documents/apps/InternetRadio/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export myCustomAudioProviderFactory */
/* unused harmony export providers */
/* unused harmony export entryComponents */
/* unused harmony export declarations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_audio__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var pages = [
    __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
];
/**
 * Sample custom factory function to use with ionic-audio
 */
function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new __WEBPACK_IMPORTED_MODULE_7_ionic_audio__["a" /* CordovaMediaProvider */]() : new __WEBPACK_IMPORTED_MODULE_7_ionic_audio__["c" /* WebAudioProvider */]();
}
function providers() {
    return [
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] },
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]
    ];
}
function entryComponents() {
    return pages;
}
function declarations() {
    return pages;
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: declarations(),
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7_ionic_audio__["b" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7_ionic_audio__["d" /* defaultAudioProviderFactory */]),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: entryComponents(),
            providers: providers(),
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
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
    function MyApp(platform, splashScreen, statusBar) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/victor/Documents/apps/InternetRadio/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/victor/Documents/apps/InternetRadio/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map