import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class Repro extends IonicNativePlugin {
    /**
     * Setup Repro
     */
    setup(key: string): Promise<any>;
    /**
     * setLogLevel
     */
    setLogLevel(logLevel: any): Promise<any>;
    /**
     * startRecording
     */
    startRecording(): Promise<any>;
    /**
     * stopRecording
     */
    stopRecording(): Promise<any>;
    /**
     * pauseRecording
     */
    pauseRecording(): Promise<any>;
    /**
     * resumeRecording
     */
    resumeRecording(): Promise<any>;
    /**
     * maskWithRect
     */
    maskWithRect(key: string, x: number, y: number, width: number, height: number): Promise<any>;
    /**
     * orientationChangeListener
     */
    orientationChangeListener(key: string): Promise<any>;
    /**
     * maskFullScreen
     */
    maskFullScreen(key: string): Promise<any>;
    /**
     * unmask
     */
    unmask(key: string): Promise<any>;
    /**
     * setUserID
     */
    setUserID(userId: string): Promise<any>;
    /**
     * setStringUserProfile
     */
    setStringUserProfile(key: string, value: string): Promise<any>;
    /**
     * setIntUserProfile
     */
    setIntUserProfile(key: string, value: string): Promise<any>;
    /**
     * setDoubleUserProfile
     */
    setDoubleUserProfile(key: string, value: string): Promise<any>;
    /**
     * setDateUserProfile
     */
    setDateUserProfile(key: string, value: string): Promise<any>;
    /**
     * track
     */
    track(eventName: string): Promise<any>;
    /**
     * trackWithProperties
     */
    trackWithProperties(eventName: string, properties: any): Promise<any>;
    /**
     * trackViewContent
     */
    trackViewContent(properties: string): Promise<any>;
    /**
     * trackSearch
     */
    trackSearch(properties: string): Promise<any>;
    /**
     * trackAddToCart
     */
    trackAddToCart(contentID: string, properties: string): Promise<any>;
    /**
     * trackAddToWishlist
     */
    trackAddToWishlist(properties: any): Promise<any>;
    /**
     * trackInitiateCheckout
     */
    trackInitiateCheckout(properties: any): Promise<any>;
    /**
     * trackAddPaymentInfo
     */
    trackAddPaymentInfo(properties: any): Promise<any>;
    /**
     * trackPurchase
     */
    trackPurchase(contentID: string, properties: any): Promise<any>;
    /**
     * trackShare
     */
    trackShare(properties: any): Promise<any>;
    /**
     * trackLead
     */
    trackLead(properties: any): Promise<any>;
    /**
     * trackCompleteRegistration
     */
    trackCompleteRegistration(properties: any): Promise<any>;
    /**
     * setPushDeviceToken
     */
    setPushDeviceToken(deviceToken: any): Promise<any>;
    /**
     * enablePushNotification
     */
    enablePushNotification(senderId: any): Promise<any>;
    /**
     * showInAppMessage
     */
    showInAppMessage(): Promise<any>;
    /**
     * disableInAppMessageOnActive
     */
    disableInAppMessageOnActive(): Promise<any>;
    /**
     * getUserID
     */
    getUserID(): Promise<any>;
    /**
     * getDeviceID
     */
    getDeviceID(): Promise<any>;
    /**
     * trackNotificationOpened
     */
    trackNotificationOpened(notificationId: any): Promise<any>;
}
