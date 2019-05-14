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
    Repro.prototype.trackViewContent = function (properties) { return cordova(this, "trackViewContent", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JlcHJvL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFPTixNQUFNLG9CQUFvQixDQUFDOztJQWdDRCx5QkFBaUI7Ozs7SUFLMUMscUJBQUssYUFBQyxHQUFXO0lBUWpCLDJCQUFXLGFBQUMsUUFBYTtJQVF6Qiw4QkFBYztJQVFkLDZCQUFhO0lBUWIsOEJBQWM7SUFRZCwrQkFBZTtJQVFmLDRCQUFZLGFBQ1YsR0FBVyxFQUNYLENBQVMsRUFDVCxDQUFTLEVBQ1QsS0FBYSxFQUNiLE1BQWM7SUFTaEIseUNBQXlCLGFBQUMsR0FBVztJQVFyQyw4QkFBYyxhQUFDLEdBQVc7SUFRMUIsc0JBQU0sYUFBQyxHQUFXO0lBUWxCLHlCQUFTLGFBQUMsTUFBYztJQVF4QixvQ0FBb0IsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQVEvQyxpQ0FBaUIsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQVE1QyxvQ0FBb0IsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQVEvQyxrQ0FBa0IsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQVE3QyxxQkFBSyxhQUFDLFNBQWlCO0lBUXZCLG1DQUFtQixhQUFDLFNBQWlCLEVBQUUsVUFBZTtJQVF0RCxnQ0FBZ0IsYUFBQyxVQUFrQjtJQVFuQywyQkFBVyxhQUFDLFVBQWtCO0lBUTlCLDhCQUFjLGFBQUMsU0FBaUIsRUFBRSxVQUFrQjtJQVFwRCxrQ0FBa0IsYUFBQyxVQUFlO0lBUWxDLHFDQUFxQixhQUFDLFVBQWU7SUFRckMsbUNBQW1CLGFBQUMsVUFBZTtJQVFuQyw2QkFBYSxhQUFDLFNBQWlCLEVBQUUsVUFBZTtJQVFoRCwwQkFBVSxhQUFDLFVBQWU7SUFRMUIseUJBQVMsYUFBQyxVQUFlO0lBUXpCLHlDQUF5QixhQUFDLFVBQWU7SUFRekMsa0NBQWtCLGFBQUMsV0FBZ0I7SUFRbkMsc0NBQXNCLGFBQUMsUUFBYTtJQVFwQyxnQ0FBZ0I7SUFRaEIsMkNBQTJCO0lBUTNCLHlCQUFTO0lBUVQsMkJBQVc7SUFRWCx1Q0FBdUIsYUFBQyxjQUFtQjs7Ozs7O0lBblJoQyxLQUFLO1FBRGpCLFVBQVUsRUFBRTtPQUNBLEtBQUs7Z0JBbkRsQjtFQW1EMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgSW9uaWNOYXRpdmVQbHVnaW5cbn0gZnJvbSBcIkBpb25pYy1uYXRpdmUvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbi8qKlxuICogQG5hbWUgUmVwcm9cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFJlcHJvIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9yZXBybyc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVwcm86IFJlcHJvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5yZXByby5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogXCJSZXByb1wiLFxuICBwbHVnaW46IFwicmVwcm8tY29yZG92YS1wbHVnaW5cIixcbiAgcGx1Z2luUmVmOiBcIlJlcHJvXCIsXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL3JlcHJvaW8vcmVwcm8tY29yZG92YS1wbHVnaW5cIixcbiAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCIsIFwiaU9TXCJdXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcHJvIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2V0dXAgUmVwcm9cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0dXAoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRMb2dMZXZlbFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRMb2dMZXZlbChsb2dMZXZlbDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc3RhcnRSZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRSZWNvcmRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc3RvcFJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wUmVjb3JkaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhdXNlUmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhdXNlUmVjb3JkaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc3VtZVJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXN1bWVSZWNvcmRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogbWFza1dpdGhSZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1hc2tXaXRoUmVjdChcbiAgICBrZXk6IHN0cmluZyxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogb3JpZW50YXRpb25DaGFuZ2VMaXN0ZW5lclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcmllbnRhdGlvbkNoYW5nZUxpc3RlbmVyKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogbWFza0Z1bGxTY3JlZW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWFza0Z1bGxTY3JlZW4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiB1bm1hc2tcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5tYXNrKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2V0VXNlcklEXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJJRCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldFN0cmluZ1VzZXJQcm9maWxlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFN0cmluZ1VzZXJQcm9maWxlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2V0SW50VXNlclByb2ZpbGVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0SW50VXNlclByb2ZpbGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXREb3VibGVVc2VyUHJvZmlsZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXREb3VibGVVc2VyUHJvZmlsZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldERhdGVVc2VyUHJvZmlsZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXREYXRlVXNlclByb2ZpbGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFjayhldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrV2l0aFByb3BlcnRpZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tXaXRoUHJvcGVydGllcyhldmVudE5hbWU6IHN0cmluZywgcHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tWaWV3Q29udGVudFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja1ZpZXdDb250ZW50KHByb3BlcnRpZXM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrU2VhcmNoXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYWNrU2VhcmNoKHByb3BlcnRpZXM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrQWRkVG9DYXJ0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYWNrQWRkVG9DYXJ0KGNvbnRlbnRJRDogc3RyaW5nLCBwcm9wZXJ0aWVzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja0FkZFRvV2lzaGxpc3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tBZGRUb1dpc2hsaXN0KHByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrSW5pdGlhdGVDaGVja291dFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0luaXRpYXRlQ2hlY2tvdXQocHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tBZGRQYXltZW50SW5mb1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0FkZFBheW1lbnRJbmZvKHByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrUHVyY2hhc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tQdXJjaGFzZShjb250ZW50SUQ6IHN0cmluZywgcHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tTaGFyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja1NoYXJlKHByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrTGVhZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0xlYWQocHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tDb21wbGV0ZVJlZ2lzdHJhdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0NvbXBsZXRlUmVnaXN0cmF0aW9uKHByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldFB1c2hEZXZpY2VUb2tlblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRQdXNoRGV2aWNlVG9rZW4oZGV2aWNlVG9rZW46IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGVuYWJsZVB1c2hOb3RpZmljYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5hYmxlUHVzaE5vdGlmaWNhdGlvbihzZW5kZXJJZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2hvd0luQXBwTWVzc2FnZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93SW5BcHBNZXNzYWdlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGRpc2FibGVJbkFwcE1lc3NhZ2VPbkFjdGl2ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXNhYmxlSW5BcHBNZXNzYWdlT25BY3RpdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogZ2V0VXNlcklEXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVzZXJJRCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXREZXZpY2VJRFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREZXZpY2VJRCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja05vdGlmaWNhdGlvbk9wZW5lZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja05vdGlmaWNhdGlvbk9wZW5lZChub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==