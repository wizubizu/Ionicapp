webpackJsonp([11],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {});
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\signup\signup.html"*/' <!--\n\n  Generated template for the AssessmentDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n  <div class="content">\n\n      <h4 class="center text-primary" menuToggle>KOTIVU</h4>\n\n      \n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label floating>First Name</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Last Name</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Email Address</ion-label>\n\n          <ion-input type=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n        \n\n        <div class="btn">\n\n          <button ion-button class="btn bg-orange no-bd width-260 m-b-20">Sign Up</button>\n\n        </div>\n\n        <span class="center c-red" (click)="load()"> Sign In</span>\n\n        <span class="m-l-100">Forget password?</span>\n\n        <hr>\n\n        <p class="center">or</p>\n\n        <p class="center">Sign In With</p>\n\n        <div class="center">\n\n          <span><ion-icon name="logo-google" class="c-red m-l-0"></ion-icon></span>\n\n          <span><ion-icon name="logo-facebook" class="c-dark-sky-blue m-l-10"></ion-icon></span>\n\n        </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResultPage = (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultPage');
    };
    return ResultPage;
}());
ResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-result',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\result\result.html"*/'<!--\n\n  Generated template for the AssessmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>Java Test Result</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<div class="content m-t-30">\n\n    <h4 class="text-primary">Your Score</h4>\n\n    <p>Sorry, You didn\'t pass the Java Test. But you can take these recommended courses.</p>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-4>\n\n                <p class="c-grey">Score</p>\n\n                <p>0.4 Out of 5</p>\n\n            </ion-col>\n\n            <ion-col col-4 class="center">\n\n                <p class="c-grey">Rating</p>\n\n                <p>Failed</p>\n\n            </ion-col>\n\n            <ion-col col-4 class="center">\n\n                <p class="c-grey">Rank</p>\n\n                <p>Failed</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n    <div class="btn">\n\n        <button ion-button class="btn-primary width-290">View recommended courses</button>\n\n    </div>\n\n      \n\n</div>\n\n\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\result\result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ResultPage);

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AssessmentDetailsPage = (function () {
    function AssessmentDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AssessmentDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssessmentDetailsPage');
    };
    AssessmentDetailsPage.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__test_test__["a" /* TestPage */], {});
    };
    return AssessmentDetailsPage;
}());
AssessmentDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-assessment-details',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\assessment-details\assessment-details.html"*/'<!--\n\n  Generated template for the AssessmentDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n    <ion-title>Principle Of Web Graphics Design</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="content">\n\n      <h4 class="center text-primary">Principle Of Web Graphics Design</h4>\n\n      <p>This test is about 40 multiple choice questions and should take less than 40 minutes to complete.</p>\n\n      <div class="test-content ">\n\n        <h4 class="text-primary">Test Content</h4>\n\n        <ul class="text-grey">\n\n          <li>Typography</li>\n\n          <li>Layout & Composition</li>\n\n          <li>Color Sense</li>\n\n          <li>Imagery</li>\n\n        </ul>\n\n\n\n        <h4 class="text-primary">Instruction:</h4>\n\n        \n\n        <div class="btn">\n\n          <button ion-button class="btn-primary" (click)="load()">Start Test</button>\n\n        </div>\n\n      </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\assessment-details\assessment-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AssessmentDetailsPage);

//# sourceMappingURL=assessment-details.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coursecontent1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coursecontent_coursecontent__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Coursecontent1Page = (function () {
    function Coursecontent1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Coursecontent1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Coursecontent1Page');
    };
    Coursecontent1Page.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__coursecontent_coursecontent__["a" /* CoursecontentPage */], {});
    };
    return Coursecontent1Page;
}());
Coursecontent1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coursecontent1',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\coursecontent1\coursecontent1.html"*/'<ion-header>\n\n  	<ion-navbar>\n\n  		<button ion-button menuToggle>\n\n	      	<ion-icon name="arrow-back"></ion-icon>\n\n	    </button>\n\n  	</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <div class="card">\n\n            <ion-item>\n\n                <div class="video-container">\n\n                    <iframe src="https://www.youtube.com/embed/wyVM1evRxNw" frameborder="0" width="560" height="315"></iframe>\n\n                </div>\n\n            </ion-item>\n\n        </div>\n\n    </ion-list>\n\n\n\n\n\n    <p class="c-orange m-20 f-18 w-900">Understanding Corporate Finance</p>\n\n    <p class="m-b-0 m-l-20 c-grey">Maximillian Schwarzmuller</p>\n\n    <progress max="100" value="20" class=" width-200 m-l-20"></progress>\n\n\n\n    <ion-grid>\n\n    	<ion-row class="">\n\n    		<ion-col col-4 (click)="load()"><p class="c-grey c-ta f-18 m-b-0" >Lectures</p></ion-col>\n\n    		<ion-col col-4><p class="c-orange border-bottomion c-ta f-18 m-b-0">More</p></ion-col>\n\n    		<ion-col col-4></ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid>\n\n    	<ion-row class="">\n\n    		<ion-col col-9><p class="f-18 c-grey">About this Course</p></ion-col>\n\n    		<ion-col col-3>\n\n    			<ion-icon class="c-grey" name="more"></ion-icon>\n\n    		</ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n        <ion-row class="">\n\n            <ion-col col-9><p class="f-18 c-grey">Bookmarks</p></ion-col>\n\n            <ion-col col-3>\n\n                <ion-icon class="c-grey" name="bookmark"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n        <ion-row class="">\n\n            <ion-col col-9><p class="f-18 c-grey">Q&A</p></ion-col>\n\n            <ion-col col-3>\n\n                <ion-icon class="c-grey" name="text"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n        <ion-row class="">\n\n            <ion-col col-9><p class="f-18 c-grey">Resources</p></ion-col>\n\n            <ion-col col-3>\n\n                <ion-icon class="c-grey" name="list"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n        <ion-row class="">\n\n            <ion-col col-9><p class="f-18 c-grey">Announcements</p></ion-col>\n\n            <ion-col col-3>\n\n                <ion-icon class="c-grey" name="notifications"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n        <ion-row class="">\n\n            <ion-col col-9><p class="f-18 c-grey">Add this Course to Favorites</p></ion-col>\n\n            <ion-col col-3>\n\n                <ion-icon class="c-grey" name="heart-outline"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n        <ion-row class="">\n\n            <ion-col col-9><p class="f-18 c-grey">Archive this Course</p></ion-col>\n\n            <ion-col col-3>\n\n                <ion-icon class="c-grey" name="archive"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\coursecontent1\coursecontent1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Coursecontent1Page);

//# sourceMappingURL=coursecontent1.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coursecontent_coursecontent__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CourseinfoPage = (function () {
    function CourseinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CourseinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CourseinfoPage');
    };
    CourseinfoPage.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__coursecontent_coursecontent__["a" /* CoursecontentPage */], {});
    };
    return CourseinfoPage;
}());
CourseinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-courseinfo',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\courseinfo\courseinfo.html"*/'<ion-header>\n\n  	<ion-navbar>\n\n  		<ion-grid>\n\n  			<ion-row>\n\n			      <ion-col col-3>\n\n			        <button ion-button menuToggle>\n\n				      	<ion-icon name="arrow-back"></ion-icon>\n\n				    </button>\n\n			      </ion-col>\n\n			      <ion-col col-6>\n\n			        <ion-title>FINANCE & MANAGMENT</ion-title>\n\n			      </ion-col>\n\n			      <ion-col col-3>\n\n			        <ion-icon name="md-search"></ion-icon>\n\n			      </ion-col>\n\n		    </ion-row>\n\n  		</ion-grid>\n\n	    \n\n	    \n\n	    \n\n  	</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content no-padding>\n\n  	<div class="card-section">\n\n  		<ion-content class="card-background-page">\n\n\n\n		  <ion-card>\n\n		    <img src="assets/img/rectangle.png"/>\n\n		  </ion-card>\n\n\n\n		</ion-content>\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col col-4>\n\n					<p class="m-b-0">Classroom</p>\n\n				</ion-col>\n\n				<ion-col col-4>\n\n					<p class="m-b-0">Track</p>\n\n				</ion-col>\n\n				<ion-col col-4>\n\n					<p class="m-b-0">Instruction</p>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col col-3 class="" (click)="load()"><button ion-button color="light" class="f-10 width-80 bg-orange c-white">Start Course</button></ion-col>\n\n				<ion-col col-3 class=""><button ion-button color="light" class="f-10 width-80" >Finance</button></ion-col>\n\n				<ion-col col-3 class=""><button ion-button color="light" class="f-10 width-80" >Managment</button></ion-col>\n\n				<ion-col col-3 class=""><button ion-button color="light" class="f-10 width-80" >Insurance</button></ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n\n\n		\n\n      	<ion-card class="m-t-20">\n\n		  	\n\n		  	<p class="p-l-10 m-t-5 c-orange f-20">Course Summary</p>\n\n		  	<p class="m-t-20 m-b-10 p-l-10">\n\n		      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\n		      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\n		      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\n		      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\n		      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\n		      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n		    </p>\n\n		</ion-card>\n\n		<ion-card class="m-t-20">\n\n		  	<p class="p-l-10 m-t-5 c-orange f-20">Prerequisite</p>\n\n		  	<p class="m-t-20 m-b-10 p-l-10">\n\n		      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\n		      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\n		      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\n		      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\n		      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\n		      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n		    </p>\n\n		</ion-card>\n\n		<ion-card class="m-t-20">\n\n		  	<p class="p-l-10 m-t-5 c-orange f-20">What you;ll  m-b-10learn</p>\n\n		  	<p class="m-t-20 p-l-10">\n\n		      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\n		      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\n		      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\n		      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\n		      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\n		      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n		    </p>\n\n		</ion-card>\n\n   </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\courseinfo\courseinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CourseinfoPage);

//# sourceMappingURL=courseinfo.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindcoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courseinfo_courseinfo__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FindcoursesPage = (function () {
    function FindcoursesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FindcoursesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindcoursesPage');
    };
    FindcoursesPage.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__courseinfo_courseinfo__["a" /* CourseinfoPage */], {});
    };
    return FindcoursesPage;
}());
FindcoursesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-findcourses',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\findcourses\findcourses.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n    <ion-title>Recomended Courses</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content no-padding>\n\n  	<div class="card-section">\n\n      	<ion-card (click)="load()">\n\n		  	<img src="assets/img/rectangle.png"/>\n\n		  	<hr class="bg-Summer-Sky m-t-0 m-b-0 h-10">\n\n		  	<p class="p-l-10 m-t-5">BRIAN TRACY SERIES</p>\n\n		  	<p class="m-t-20 p-l-10">\n\n		      Learn more\n\n		    </p>\n\n		</ion-card>\n\n		<ion-card class="m-t-20">\n\n		  	<img src="assets/img/default-avatar.png"/>\n\n		  	<hr class="bg-Summer-Sky m-t-0 m-b-0 h-10">\n\n		  	<p class="p-l-10 m-t-5">FINANCE & MANAGMENT</p>\n\n		  	<p class="m-t-20 p-l-10">\n\n		      Learn more <span> >> </span>\n\n		    </p>\n\n		</ion-card>\n\n   </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\findcourses\findcourses.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FindcoursesPage);

//# sourceMappingURL=findcourses.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SelectplanPage = (function () {
    function SelectplanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelectplanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectplanPage');
    };
    return SelectplanPage;
}());
SelectplanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-selectplan',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\selectplan\selectplan.html"*/'<!--\n\n  Generated template for the AssessmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>Select Plan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n    <ion-slides pager>\n\n\n\n      <ion-slide >\n\n        <ion-icon  class="c-orange f-120 m-l-0" name="pin"></ion-icon>\n\n        <p class="c-orange f-30 m-t-0">Individual</p>\n\n\n\n        <ion-label class=""  style="margin-left:-240px;">Features</ion-label>\n\n        <ion-item class="bg-trans">        \n\n        <ion-label >Monthly</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item class="bg-trans">\n\n        <ion-label>Quarterly</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item class="bg-trans">\n\n        <ion-label>Annual</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <p class="c-orange">₦15, 000</p>\n\n\n\n        <div class="ionic" align="center">\n\n            <button ion-button class="btn-primary">Select</button>\n\n        </div>\n\n      </ion-slide>\n\n\n\n      <ion-slide >\n\n        <ion-icon  class="c-orange f-120 m-l-0" name="home"></ion-icon>\n\n        <p class="c-orange f-30 m-t-0">SME\'s</p>\n\n\n\n        <ion-label class=""  style="margin-left:-240px;">Features</ion-label>\n\n        <ion-item class="bg-trans">\n\n        \n\n        <ion-label >Kotivu - 10</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item class="bg-trans">\n\n        <ion-label>Kotivu - 30</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item class="bg-trans">\n\n        <ion-label>Kotivu - 80</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <p class="c-orange">₦15, 000</p>\n\n\n\n        <div class="ionic" align="center">\n\n            <button ion-button class="btn-primary">Select</button>\n\n        </div>\n\n      </ion-slide>\n\n\n\n      <ion-slide >\n\n        <ion-icon  class="c-orange f-120 m-l-0" name="grid"></ion-icon>\n\n        <p class="c-orange f-30 m-t-0">Corporate</p>\n\n\n\n        <ion-label class=""  style="margin-left:-240px;">Features</ion-label>\n\n        <ion-item class="bg-trans">\n\n        \n\n        <ion-label >Item 1</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item class="bg-trans">\n\n        <ion-label>Item 2</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item class="bg-trans">\n\n        <ion-label>Item 3</ion-label>\n\n        <ion-checkbox color="dark"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <p class="c-orange">Call Us</p>\n\n\n\n        <div class="ionic" align="center">\n\n            <button ion-button class="btn-primary"><ion-icon class="m-l-0" name="call"></ion-icon></button>\n\n        </div>\n\n      </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\selectplan\selectplan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SelectplanPage);

//# sourceMappingURL=selectplan.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assessment-details/assessment-details.module": [
		279,
		10
	],
	"../pages/assessment/assessment.module": [
		274,
		9
	],
	"../pages/coursecontent/coursecontent.module": [
		281,
		7
	],
	"../pages/coursecontent1/coursecontent1.module": [
		280,
		8
	],
	"../pages/courseinfo/courseinfo.module": [
		282,
		6
	],
	"../pages/findcourses/findcourses.module": [
		283,
		5
	],
	"../pages/login/login.module": [
		276,
		4
	],
	"../pages/result/result.module": [
		277,
		3
	],
	"../pages/selectplan/selectplan.module": [
		284,
		2
	],
	"../pages/signup/signup.module": [
		275,
		1
	],
	"../pages/test/test.module": [
		278,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assessment_assessment__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assessment_assessment__["a" /* AssessmentPage */], {});
    };
    HomePage.prototype.loads = function (event, login) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {});
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar >\n\n    <button ion-button menuToggle style="margin-left: -20px;">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="ion-title" style="margin-left: -20px;">Kotivu.ng</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <div class="card-section">\n\n      <div class="card">\n\n        <div class="placeholder">\n\n            <ion-icon name="arrow-dropright-circle"></ion-icon>\n\n        </div>\n\n        <div class="card-content">\n\n          <div class="contents">\n\n            <div class="myProgress">\n\n                <div class="myBar"></div>\n\n                <div class="myBar2"></div>\n\n            </div>\n\n            <div class="rating">\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star" class="last-child-rating"></ion-icon>\n\n                <span class="last-child-rating">(1,465)</span>\n\n\n\n            </div>\n\n            <div class="pricing">\n\n              <p>₦5,400</p>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="ionic" align="center">\n\n      <button ion-button class="btn-primary m-t-40">Discover Courses</button>\n\n  </div>\n\n  <div class="tab">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button class="btn-select" (click)="load()">Select Assessment</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button class="btn-select" (click)="loads()">Log In</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_slider_slider__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_assessment_assessment__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_assessment_details_assessment_details__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_test_test__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_findcourses_findcourses__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_courseinfo_courseinfo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_coursecontent_coursecontent__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_coursecontent1_coursecontent1__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_selectplan_selectplan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_result_result__ = __webpack_require__(103);
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_slider_slider__["a" /* SliderPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_assessment_assessment__["a" /* AssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_assessment_details_assessment_details__["a" /* AssessmentDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_test_test__["a" /* TestPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_findcourses_findcourses__["a" /* FindcoursesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_courseinfo_courseinfo__["a" /* CourseinfoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_coursecontent_coursecontent__["a" /* CoursecontentPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_coursecontent1_coursecontent1__["a" /* Coursecontent1Page */],
            __WEBPACK_IMPORTED_MODULE_16__pages_selectplan_selectplan__["a" /* SelectplanPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_result_result__["a" /* ResultPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/assessment/assessment.module#AssessmentPageModule', name: 'AssessmentPage', segment: 'assessment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/assessment-details/assessment-details.module#AssessmentDetailsPageModule', name: 'AssessmentDetailsPage', segment: 'assessment-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coursecontent1/coursecontent1.module#indcoursesPageModule', name: 'Coursecontent1Page', segment: 'coursecontent1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coursecontent/coursecontent.module#indcoursesPageModule', name: 'CoursecontentPage', segment: 'coursecontent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/courseinfo/courseinfo.module#indcoursesPageModule', name: 'CourseinfoPage', segment: 'courseinfo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/findcourses/findcourses.module#indcoursesPageModule', name: 'FindcoursesPage', segment: 'findcourses', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectplan/selectplan.module#indcoursesPageModule', name: 'SelectplanPage', segment: 'selectplan', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_slider_slider__["a" /* SliderPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_assessment_assessment__["a" /* AssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_assessment_details_assessment_details__["a" /* AssessmentDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_test_test__["a" /* TestPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_findcourses_findcourses__["a" /* FindcoursesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_courseinfo_courseinfo__["a" /* CourseinfoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_coursecontent_coursecontent__["a" /* CoursecontentPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_coursecontent1_coursecontent1__["a" /* Coursecontent1Page */],
            __WEBPACK_IMPORTED_MODULE_16__pages_selectplan_selectplan__["a" /* SelectplanPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_result_result__["a" /* ResultPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_assessment_assessment__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_assessment_details_assessment_details__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_test_test__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_findcourses_findcourses__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_selectplan_selectplan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(39);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Assessment', component: __WEBPACK_IMPORTED_MODULE_5__pages_assessment_assessment__["a" /* AssessmentPage */] },
            { title: 'Assessment details', component: __WEBPACK_IMPORTED_MODULE_6__pages_assessment_details_assessment_details__["a" /* AssessmentDetailsPage */] },
            { title: 'Test', component: __WEBPACK_IMPORTED_MODULE_7__pages_test_test__["a" /* TestPage */] },
            { title: 'Find courses', component: __WEBPACK_IMPORTED_MODULE_8__pages_findcourses_findcourses__["a" /* FindcoursesPage */] },
            { title: 'Select plan', component: __WEBPACK_IMPORTED_MODULE_9__pages_selectplan_selectplan__["a" /* SelectplanPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home'
/**
 * Generated class for the SliderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
var SliderPage = (function () {
    function SliderPage() {
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    return SliderPage;
}());
SliderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slider',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\slider\slider.html"*/'\n\n\n\n\n\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let slide of slides">\n\n        <ion-toolbar>\n\n          <ion-buttons end>\n\n            <button ion-button color="primary">Skip</button>\n\n          </ion-buttons>\n\n        </ion-toolbar>\n\n        <img [src]="slide.image" class="slide-image"/>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n        <p [innerHTML]="slide.description"></p>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <ion-toolbar>\n\n        </ion-toolbar>\n\n        <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n\n        <h2 class="slide-title">Ready to Play?</h2>\n\n        <button ion-button large clear icon-end color="primary">\n\n          Continue\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n      </ion-slide>\n\n    </ion-slides>\n\n\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\slider\slider.html"*/,
    })
], SliderPage);

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */], {});
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\login\login.html"*/' <!--\n\n  Generated template for the AssessmentDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n  <div class="content">\n\n      <h4 class="center text-primary" menuToggle>KOTIVU</h4>\n\n      \n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Email Address</ion-label>\n\n          <ion-input type=""></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n        \n\n        <div class="btn">\n\n          <button ion-button class="btn bg-orange no-bd width-260 m-b-20">Sign In</button>\n\n        </div>\n\n        <span class=" c-red" (click)="load()"> Sign Up</span>\n\n        <span class="m-l-100">Forget password?</span>\n\n        <hr>\n\n        <p class="center">or</p>\n\n        <p class="center">Sign In With</p>\n\n        <div class="center">\n\n          <span><ion-icon name="logo-google" class="c-red m-l-0"></ion-icon></span>\n\n          <span><ion-icon name="logo-facebook" class="c-dark-sky-blue m-l-10"></ion-icon></span>\n\n        </div>\n\n        \n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AssessmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AssessmentPage = (function () {
    function AssessmentPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.courseName = 'Principle Of Web Graphics Design';
    }
    AssessmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssessmentPage');
    };
    AssessmentPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: this.courseName + ' Selected?',
            message: "Do you want to take the " + this.courseName + " test?",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Continue',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    return AssessmentPage;
}());
AssessmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-assessment',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\assessment\assessment.html"*/'<!--\n\n  Generated template for the AssessmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>Select Assessment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>All Categories</ion-label>\n\n            <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n              <ion-option value="enable">Enable</ion-option>\n\n              <ion-option value="mute">Mute</ion-option>\n\n              <ion-option value="mute_week">Mute for a week</ion-option>\n\n              <ion-option value="mute_year" (ionSelect)="notificationSelect($event)">Mute for a year</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n      <ion-list radio-group>\n\n        <ion-list-header>\n\n          All Assessments\n\n        </ion-list-header>\n\n\n\n        <ion-item>\n\n          <ion-label>{{this.courseName}}</ion-label>\n\n          <ion-radio checked="true" value="go" (click)="showConfirm()"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Rust</ion-label>\n\n          <ion-radio value="rust"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-radio value="python"></ion-radio>\n\n          <ion-label>Python</ion-label>\n\n        </ion-item>\n\n      \n\n\n\n      <ion-item>\n\n          <ion-label>Bootstrap</ion-label>\n\n          <ion-radio value="bootstrap"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-radio value="html"></ion-radio>\n\n          <ion-label>Html</ion-label>\n\n        </ion-item>\n\n      \n\n\n\n      \n\n\n\n        <ion-infinite-scroll\n\n          on-infinite="loadMore()"\n\n          distance="1%">\n\n      </ion-infinite-scroll>\n\n    </ion-list>\n\n\n\n\n\n      \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\assessment\assessment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AssessmentPage);

//# sourceMappingURL=assessment.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {});
    };
    return TestPage;
}());
TestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-test',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\test\test.html"*/'<!--\n\n  Generated template for the TestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>Java Test</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <p class="text-primary font-17 m-0">Questions</p>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <p class="text-primary font-17 right m-0">1/50</p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <p class="text-primary font-17 m-0">Time Remaining</p>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <p class="text-primary font-17 right m-0">04:02</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div class="question p-10">\n\n    <p class="font-17">\n\n      How many objects are create by the following code?<br><br>\n\n      Object a, b, c, d, e <br><br>\n\n      e = new Object();<br>\n\n      b = a = e; <br>\n\n      e = new Object();\n\n\n\n    </p>\n\n  </div>\n\n  <ion-list radio-group>\n\n    <ion-item>\n\n      <ion-label>2</ion-label>\n\n      <ion-radio></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>5</ion-label>\n\n      <ion-radio></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio value="python"></ion-radio>\n\n      <ion-label>4</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio></ion-radio>\n\n      <ion-label>That code is invalid</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div style="margin-left:45px;">\n\n    <button ion-btn class="btn-primary" (click)="load()">Continue</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\test\test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TestPage);

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursecontentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coursecontent1_coursecontent1__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CoursecontentPage = (function () {
    function CoursecontentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoursecontentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursecontentPage');
    };
    CoursecontentPage.prototype.load = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__coursecontent1_coursecontent1__["a" /* Coursecontent1Page */], {});
    };
    return CoursecontentPage;
}());
CoursecontentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coursecontent',template:/*ion-inline-start:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\coursecontent\coursecontent.html"*/'<ion-header>\n\n  	<ion-navbar>\n\n  		<button ion-button menuToggle>\n\n	      	<ion-icon name="arrow-back"></ion-icon>\n\n	    </button>\n\n  	</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <div class="card">\n\n            <ion-item>\n\n                <div class="video-container">\n\n                    <iframe src="https://www.youtube.com/embed/wyVM1evRxNw" frameborder="0" width="560" height="315"></iframe>\n\n                </div>\n\n            </ion-item>\n\n        </div>\n\n    </ion-list>\n\n\n\n\n\n    <p class="c-orange m-20 f-18 w-900">Understanding Corporate Finance</p>\n\n    <p class="m-b-0 m-l-20 c-grey">Maximillian Schwarzmuller</p>\n\n    <progress max="100" value="20" class="width-200 m-l-20"></progress>\n\n\n\n    <ion-grid>\n\n    	<ion-row class="">\n\n    		<ion-col col-4><p class="c-orange border-bottomion c-ta f-18 m-b-0">Lectures</p></ion-col>\n\n    		<ion-col col-4 (click)="load()"><p class="c-grey c-ta f-18 m-b-0">More</p></ion-col>\n\n    		<ion-col col-4><p class="m-b-0"><ion-icon class="c-orange c-ta m-b-0" name="download"></ion-icon></p></ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid>\n\n    	<ion-row class="">\n\n    		<ion-col col-8><p class="f-18 m-b-0 m-t-0">Section 1 - Getting Started</p></ion-col>\n\n    		<ion-col col-4><ion-icon class="c-grey c-ta m-b-0 m-t-0" name="cloud-download"></ion-icon></ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid>\n\n    	<ion-row class="">\n\n    		<ion-col col-2><p class="f-18 c-grey"> 1</p></ion-col>\n\n    		<ion-col col-10>\n\n    			<p class="f-18 c-grey">Introduction</p>\n\n    			<p class="c-grey">Video - 01:44mins</p>\n\n    		</ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n    	<ion-row class="">\n\n    		<ion-col col-2><p class="f-18 c-grey"> 2</p></ion-col>\n\n    		<ion-col col-10>\n\n    			<p class="f-18 c-grey">Introduction</p>\n\n    			<p class="c-grey">Video - 01:44mins</p>\n\n    		</ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n    	<ion-row class="">\n\n    		<ion-col col-2><p class="f-18 c-grey"> 3</p></ion-col>\n\n    		<ion-col col-10>\n\n    			<p class="f-18 c-grey">Introduction</p>\n\n    			<p class="c-grey">Video - 01:44mins</p>\n\n    		</ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Odugbesan\Desktop\Kotivu\kotivuApp\src\pages\coursecontent\coursecontent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CoursecontentPage);

//# sourceMappingURL=coursecontent.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map