var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from "@angular/core";
import { IonicNativePlugin, cordova } from "@ionic-native/core";
var Repro = /** @class */ (function (_super) {
    __extends(Repro, _super);
    function Repro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Repro.prototype.setup = function (key) { return cordova(this, "setup", {}, arguments); };
    Repro.prototype.setLogLevel = function (logLevel) { return cordova(this, "setLogLevel", {}, arguments); };
    Repro.prototype.startRecording = function () { return cordova(this, "startRecording", {}, arguments); };
    Repro.prototype.stopRecording = function () { return cordova(this, "stopRecording", {}, arguments); };
    Repro.prototype.pauseRecording = function () { return cordova(this, "pauseRecording", {}, arguments); };
    Repro.prototype.resumeRecording = function () { return cordova(this, "resumeRecording", {}, arguments); };
    Repro.prototype.maskWithRect = function (key, x, y, width, height) { return cordova(this, "maskWithRect", {}, arguments); };
    Repro.prototype.orientationChangeListener = function (key) { return cordova(this, "orientationChangeListener", {}, arguments); };
    Repro.prototype.maskFullScreen = function (key) { return cordova(this, "maskFullScreen", {}, arguments); };
    Repro.prototype.unmask = function (key) { return cordova(this, "unmask", {}, arguments); };
    Repro.prototype.setUserID = function (userId) { return cordova(this, "setUserID", {}, arguments); };
    Repro.prototype.setStringUserProfile = function (key, value) { return cordova(this, "setStringUserProfile", {}, arguments); };
    Repro.prototype.setIntUserProfile = function (key, value) { return cordova(this, "setIntUserProfile", {}, arguments); };
    Repro.prototype.setDoubleUserProfile = function (key, value) { return cordova(this, "setDoubleUserProfile", {}, arguments); };
    Repro.prototype.setDateUserProfile = function (key, value) { return cordova(this, "setDateUserProfile", {}, arguments); };
    Repro.prototype.track = function (eventName) { return cordova(this, "track", {}, arguments); };
    Repro.prototype.trackWithProperties = function (eventName, properties) { return cordova(this, "trackWithProperties", {}, arguments); };
    Repro.prototype.trackViewContent = function (name, properties) { return cordova(this, "trackViewContent", {}, arguments); };
    Repro.prototype.trackSearch = function (properties) { return cordova(this, "trackSearch", {}, arguments); };
    Repro.prototype.trackAddToCart = function (contentID, properties) { return cordova(this, "trackAddToCart", {}, arguments); };
    Repro.prototype.trackAddToWishlist = function (properties) { return cordova(this, "trackAddToWishlist", {}, arguments); };
    Repro.prototype.trackInitiateCheckout = function (properties) { return cordova(this, "trackInitiateCheckout", {}, arguments); };
    Repro.prototype.trackAddPaymentInfo = function (properties) { return cordova(this, "trackAddPaymentInfo", {}, arguments); };
    Repro.prototype.trackPurchase = function (contentID, properties) { return cordova(this, "trackPurchase", {}, arguments); };
    Repro.prototype.trackShare = function (properties) { return cordova(this, "trackShare", {}, arguments); };
    Repro.prototype.trackLead = function (properties) { return cordova(this, "trackLead", {}, arguments); };
    Repro.prototype.trackCompleteRegistration = function (properties) { return cordova(this, "trackCompleteRegistration", {}, arguments); };
    Repro.prototype.setPushDeviceToken = function (deviceToken) { return cordova(this, "setPushDeviceToken", {}, arguments); };
    Repro.prototype.enablePushNotification = function (senderId) { return cordova(this, "enablePushNotification", {}, arguments); };
    Repro.prototype.showInAppMessage = function () { return cordova(this, "showInAppMessage", {}, arguments); };
    Repro.prototype.disableInAppMessageOnActive = function () { return cordova(this, "disableInAppMessageOnActive", {}, arguments); };
    Repro.prototype.getUserID = function () { return cordova(this, "getUserID", {}, arguments); };
    Repro.prototype.getDeviceID = function () { return cordova(this, "getDeviceID", {}, arguments); };
    Repro.prototype.trackNotificationOpened = function (notificationId) { return cordova(this, "trackNotificationOpened", {}, arguments); };
    Repro.pluginName = "Repro";
    Repro.plugin = "repro-cordova-plugin";
    Repro.pluginRef = "Repro";
    Repro.repo = "https://github.com/reproio/repro-cordova-plugin";
    Repro.platforms = ["Android", "iOS"];
    Repro = __decorate([
        Injectable()
    ], Repro);
    return Repro;
}(IonicNativePlugin));
export { Repro };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JlcHJvL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFPTixNQUFNLG9CQUFvQixDQUFDOztJQWdDRCx5QkFBaUI7Ozs7SUFLMUMscUJBQUssYUFBQyxHQUFXO0lBUWpCLDJCQUFXLGFBQUMsUUFBYTtJQVF6Qiw4QkFBYztJQVFkLDZCQUFhO0lBUWIsOEJBQWM7SUFRZCwrQkFBZTtJQVFmLDRCQUFZLGFBQ1YsR0FBVyxFQUNYLENBQVMsRUFDVCxDQUFTLEVBQ1QsS0FBYSxFQUNiLE1BQWM7SUFTaEIseUNBQXlCLGFBQUMsR0FBVztJQVFyQyw4QkFBYyxhQUFDLEdBQVc7SUFRMUIsc0JBQU0sYUFBQyxHQUFXO0lBUWxCLHlCQUFTLGFBQUMsTUFBYztJQVF4QixvQ0FBb0IsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQVEvQyxpQ0FBaUIsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQVE1QyxvQ0FBb0IsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQVEvQyxrQ0FBa0IsYUFBQyxHQUFXLEVBQUUsS0FBVztJQVEzQyxxQkFBSyxhQUFDLFNBQWlCO0lBUXZCLG1DQUFtQixhQUFDLFNBQWlCLEVBQUUsVUFBZTtJQVF0RCxnQ0FBZ0IsYUFBQyxJQUFZLEVBQUUsVUFBYztJQVE3QywyQkFBVyxhQUFDLFVBQWM7SUFRMUIsOEJBQWMsYUFBQyxTQUFpQixFQUFFLFVBQWtCO0lBUXBELGtDQUFrQixhQUFDLFVBQWU7SUFRbEMscUNBQXFCLGFBQUMsVUFBZTtJQVFyQyxtQ0FBbUIsYUFBQyxVQUFlO0lBUW5DLDZCQUFhLGFBQUMsU0FBaUIsRUFBRSxVQUFlO0lBUWhELDBCQUFVLGFBQUMsVUFBZTtJQVExQix5QkFBUyxhQUFDLFVBQWU7SUFRekIseUNBQXlCLGFBQUMsVUFBZTtJQVF6QyxrQ0FBa0IsYUFBQyxXQUFnQjtJQVFuQyxzQ0FBc0IsYUFBQyxRQUFhO0lBUXBDLGdDQUFnQjtJQVFoQiwyQ0FBMkI7SUFRM0IseUJBQVM7SUFRVCwyQkFBVztJQVFYLHVDQUF1QixhQUFDLGNBQW1COzs7Ozs7SUFuUmhDLEtBQUs7UUFEakIsVUFBVSxFQUFFO09BQ0EsS0FBSztnQkFuRGxCO0VBbUQyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBQbHVnaW4sXG4gIENvcmRvdmEsXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpblxufSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuLyoqXG4gKiBAbmFtZSBSZXByb1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUmVwcm8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JlcHJvJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSByZXBybzogUmVwcm8pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnJlcHJvLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiBcIlJlcHJvXCIsXG4gIHBsdWdpbjogXCJyZXByby1jb3Jkb3ZhLXBsdWdpblwiLFxuICBwbHVnaW5SZWY6IFwiUmVwcm9cIixcbiAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vcmVwcm9pby9yZXByby1jb3Jkb3ZhLXBsdWdpblwiLFxuICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIiwgXCJpT1NcIl1cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVwcm8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTZXR1cCBSZXByb1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXR1cChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldExvZ0xldmVsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldExvZ0xldmVsKGxvZ0xldmVsOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGFydFJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFJlY29yZGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdG9wUmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BSZWNvcmRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogcGF1c2VSZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2VSZWNvcmRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogcmVzdW1lUmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc3VtZVJlY29yZGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtYXNrV2l0aFJlY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWFza1dpdGhSZWN0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlclxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBvcmllbnRhdGlvbkNoYW5nZUxpc3RlbmVyXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9yaWVudGF0aW9uQ2hhbmdlTGlzdGVuZXIoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtYXNrRnVsbFNjcmVlblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBtYXNrRnVsbFNjcmVlbihrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHVubWFza1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bm1hc2soa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRVc2VySURcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VXNlcklEKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RyaW5nVXNlclByb2ZpbGVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U3RyaW5nVXNlclByb2ZpbGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRJbnRVc2VyUHJvZmlsZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRJbnRVc2VyUHJvZmlsZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldERvdWJsZVVzZXJQcm9maWxlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldERvdWJsZVVzZXJQcm9maWxlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2V0RGF0ZVVzZXJQcm9maWxlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldERhdGVVc2VyUHJvZmlsZShrZXk6IHN0cmluZywgdmFsdWU6IERhdGUpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFjayhldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrV2l0aFByb3BlcnRpZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tXaXRoUHJvcGVydGllcyhldmVudE5hbWU6IHN0cmluZywgcHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tWaWV3Q29udGVudFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja1ZpZXdDb250ZW50KG5hbWU6IHN0cmluZywgcHJvcGVydGllczoge30pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja1NlYXJjaFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja1NlYXJjaChwcm9wZXJ0aWVzOiB7fSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrQWRkVG9DYXJ0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYWNrQWRkVG9DYXJ0KGNvbnRlbnRJRDogc3RyaW5nLCBwcm9wZXJ0aWVzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja0FkZFRvV2lzaGxpc3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tBZGRUb1dpc2hsaXN0KHByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrSW5pdGlhdGVDaGVja291dFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0luaXRpYXRlQ2hlY2tvdXQocHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tBZGRQYXltZW50SW5mb1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0FkZFBheW1lbnRJbmZvKHByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrUHVyY2hhc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tQdXJjaGFzZShjb250ZW50SUQ6IHN0cmluZywgcHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tTaGFyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja1NoYXJlKHByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrTGVhZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0xlYWQocHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tDb21wbGV0ZVJlZ2lzdHJhdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0NvbXBsZXRlUmVnaXN0cmF0aW9uKHByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldFB1c2hEZXZpY2VUb2tlblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRQdXNoRGV2aWNlVG9rZW4oZGV2aWNlVG9rZW46IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGVuYWJsZVB1c2hOb3RpZmljYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5hYmxlUHVzaE5vdGlmaWNhdGlvbihzZW5kZXJJZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2hvd0luQXBwTWVzc2FnZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93SW5BcHBNZXNzYWdlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGRpc2FibGVJbkFwcE1lc3NhZ2VPbkFjdGl2ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXNhYmxlSW5BcHBNZXNzYWdlT25BY3RpdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogZ2V0VXNlcklEXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVzZXJJRCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXREZXZpY2VJRFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREZXZpY2VJRCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja05vdGlmaWNhdGlvbk9wZW5lZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja05vdGlmaWNhdGlvbk9wZW5lZChub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==