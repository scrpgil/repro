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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name Repro
 * @description
 *
 * @usage
 * ```typescript
 * import { Repro } from '@ionic-native/repro';
 *
 *
 * constructor(private repro: Repro) { }
 *
 * ...
 *
 *
 * ```
 */
var Repro = (function (_super) {
    __extends(Repro, _super);
    function Repro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Setup Repro
     */
    Repro.prototype.setup = function (key) {
        return;
    };
    /**
     * setLogLevel
     */
    Repro.prototype.setLogLevel = function (logLevel) {
        return;
    };
    /**
     * startRecording
     */
    Repro.prototype.startRecording = function () {
        return;
    };
    /**
     * stopRecording
     */
    Repro.prototype.stopRecording = function () {
        return;
    };
    /**
     * pauseRecording
     */
    Repro.prototype.pauseRecording = function () {
        return;
    };
    /**
     * resumeRecording
     */
    Repro.prototype.resumeRecording = function () {
        return;
    };
    /**
     * maskWithRect
     */
    Repro.prototype.maskWithRect = function (key, x, y, width, height) {
        return;
    };
    /**
     * orientationChangeListener
     */
    Repro.prototype.orientationChangeListener = function (key) {
        return;
    };
    /**
     * maskFullScreen
     */
    Repro.prototype.maskFullScreen = function (key) {
        return;
    };
    /**
     * unmask
     */
    Repro.prototype.unmask = function (key) {
        return;
    };
    /**
     * setUserID
     */
    Repro.prototype.setUserID = function (userId) {
        return;
    };
    /**
     * setStringUserProfile
     */
    Repro.prototype.setStringUserProfile = function (key, value) {
        return;
    };
    /**
     * setIntUserProfile
     */
    Repro.prototype.setIntUserProfile = function (key, value) {
        return;
    };
    /**
     * setDoubleUserProfile
     */
    Repro.prototype.setDoubleUserProfile = function (key, value) {
        return;
    };
    /**
     * setDateUserProfile
     */
    Repro.prototype.setDateUserProfile = function (key, value) {
        return;
    };
    /**
     * track
     */
    Repro.prototype.track = function (eventName) {
        return;
    };
    /**
     * trackWithProperties
     */
    Repro.prototype.trackWithProperties = function (eventName, properties) {
        return;
    };
    /**
     * trackViewContent
     */
    Repro.prototype.trackViewContent = function (eventName, properties) {
        return;
    };
    /**
     * trackSearch
     */
    Repro.prototype.trackSearch = function (properties) {
        return;
    };
    /**
     * trackAddToCart
     */
    Repro.prototype.trackAddToCart = function (contentID, properties) {
        return;
    };
    /**
     * trackAddToWishlist
     */
    Repro.prototype.trackAddToWishlist = function (properties) {
        return;
    };
    /**
     * trackInitiateCheckout
     */
    Repro.prototype.trackInitiateCheckout = function (properties) {
        return;
    };
    /**
     * trackAddPaymentInfo
     */
    Repro.prototype.trackAddPaymentInfo = function (properties) {
        return;
    };
    /**
     * trackPurchase
     */
    Repro.prototype.trackPurchase = function (contentID, properties) {
        return;
    };
    /**
     * trackShare
     */
    Repro.prototype.trackShare = function (properties) {
        return;
    };
    /**
     * trackLead
     */
    Repro.prototype.trackLead = function (properties) {
        return;
    };
    /**
     * trackCompleteRegistration
     */
    Repro.prototype.trackCompleteRegistration = function (properties) {
        return;
    };
    /**
     * setPushDeviceToken
     */
    Repro.prototype.setPushDeviceToken = function (deviceToken) {
        return;
    };
    /**
     * enablePushNotification
     */
    Repro.prototype.enablePushNotification = function (senderId) {
        return;
    };
    /**
     * showInAppMessage
     */
    Repro.prototype.showInAppMessage = function () {
        return;
    };
    /**
     * disableInAppMessageOnActive
     */
    Repro.prototype.disableInAppMessageOnActive = function () {
        return;
    };
    /**
     * getUserID
     */
    Repro.prototype.getUserID = function () {
        return;
    };
    /**
     * getDeviceID
     */
    Repro.prototype.getDeviceID = function () {
        return;
    };
    /**
     * trackNotificationOpened
     */
    Repro.prototype.trackNotificationOpened = function (notificationId) {
        return;
    };
    Repro.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Repro.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "setup", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "setLogLevel", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "startRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "stopRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "pauseRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "resumeRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, Number, Number, Number]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "maskWithRect", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "orientationChangeListener", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "maskFullScreen", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "unmask", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "setUserID", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "setStringUserProfile", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "setIntUserProfile", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "setDoubleUserProfile", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Date]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "setDateUserProfile", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "track", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackWithProperties", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackViewContent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackSearch", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackAddToCart", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackAddToWishlist", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackInitiateCheckout", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackAddPaymentInfo", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackPurchase", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackShare", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackLead", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackCompleteRegistration", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "setPushDeviceToken", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "enablePushNotification", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "showInAppMessage", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "disableInAppMessageOnActive", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "getUserID", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "getDeviceID", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Repro.prototype, "trackNotificationOpened", null);
    Repro = __decorate([
        Plugin({
            pluginName: 'Repro',
            plugin: 'repro-cordova-plugin',
            pluginRef: 'Repro',
            repo: 'https://github.com/reproio/repro-cordova-plugin',
            platforms: ['Android', 'iOS']
        })
    ], Repro);
    return Repro;
}(IonicNativePlugin));
export { Repro };
//# sourceMappingURL=index.js.map