"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core");
var import1 = require("./breeze-bridge-angular");
var import2 = require("@angular/http");
var BreezeBridgeAngularModuleInjector = (function (_super) {
    __extends(BreezeBridgeAngularModuleInjector, _super);
    function BreezeBridgeAngularModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    BreezeBridgeAngularModuleInjector.prototype.createInternal = function () {
        this._HttpModule_0 = new import2.HttpModule();
        this._BrowserXhr_1 = new import2.BrowserXhr();
        this._ResponseOptions_2 = new import2.BaseResponseOptions();
        this._XSRFStrategy_3 = import2.ɵb();
        this._XHRBackend_4 = new import2.XHRBackend(this._BrowserXhr_1, this._ResponseOptions_2, this._XSRFStrategy_3);
        this._RequestOptions_5 = new import2.BaseRequestOptions();
        this._Http_6 = import2.ɵc(this._XHRBackend_4, this._RequestOptions_5);
        this._BreezeBridgeAngularModule_7 = new import1.BreezeBridgeAngularModule(this._Http_6);
        return this._BreezeBridgeAngularModule_7;
    };
    BreezeBridgeAngularModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.HttpModule)) {
            return this._HttpModule_0;
        }
        if ((token === import2.BrowserXhr)) {
            return this._BrowserXhr_1;
        }
        if ((token === import2.ResponseOptions)) {
            return this._ResponseOptions_2;
        }
        if ((token === import2.XSRFStrategy)) {
            return this._XSRFStrategy_3;
        }
        if ((token === import2.XHRBackend)) {
            return this._XHRBackend_4;
        }
        if ((token === import2.RequestOptions)) {
            return this._RequestOptions_5;
        }
        if ((token === import2.Http)) {
            return this._Http_6;
        }
        if ((token === import1.BreezeBridgeAngularModule)) {
            return this._BreezeBridgeAngularModule_7;
        }
        return notFoundResult;
    };
    BreezeBridgeAngularModuleInjector.prototype.destroyInternal = function () {
    };
    return BreezeBridgeAngularModuleInjector;
}(import0.ɵNgModuleInjector));
exports.BreezeBridgeAngularModuleNgFactory = new import0.NgModuleFactory(BreezeBridgeAngularModuleInjector, import1.BreezeBridgeAngularModule);
//# sourceMappingURL=breeze-bridge-angular.ngfactory.js.map