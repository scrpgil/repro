## これは何か？

ionic-nativeのdevelopers guideに従って作成したcordova-plugin-reproのTypeScriptラッパーです。

## 使い方

まずはcordova-plugin-reproをダウンロードします。  

````
ionic cordova plugin add cordova-plugin-repro
````

Reproを使用したいプロジェクトのnode_modules > @ionic-native配下に置いてください。  
または、本リポジトリをnpm installしてください。  

````
npm install -S https://github.com/scrpgil/repro.git
````

アプリ内での使い方ですがざっくり下のソースコードを参考にしてもらえれば・・・。基本的にやることは以下です。


#### src/pages/home/home.ts

````
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { Repro } from '@ionic-native/repro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
      public navCtrl: NavController,
      public plt: Platform,
      private repro: Repro
  ) {
      if(this.plt.is('cordova')){
          // xxxx〜には自分のAPI-Keyを書いてください。
          this.repro.setup("xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx").then(() => {
              console.log("success");
          }).catch((err) =>{
              console.log(err);
          });
      }
  }
  push(){
      console.log("push");
      this.navCtrl.push(HomePage);
  }

  startRecord(){
      this.repro.startRecording().then(() => {
          console.log("start");
      }).catch((err) =>{
          console.log(err);
      });
  }
  stopRecord(){
      this.repro.stopRecording().then(() => {
          console.log("stop");
      }).catch((err) =>{
          console.log(err);
      });
  }
  eventTrack(){
      this.repro.trackWithProperties("1234", {
          value: 5000.0,
          currency: "JPY",
          content_name: "Slim Jeans",
          content_category: "Clothing & Shoes > Mens > Clothing"
      }).then(() => {
          console.log("event");
      }).catch((err) =>{
          console.log(err);
      });
  }

}

````

#### src/pages/home/home.html

````
<ion-header>
  <ion-navbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  The world is your oyster.
  <p>
    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.
  </p>
  <button ion-button (click)="startRecord()">スタート</button>
  <button ion-button (click)="stopRecord()">ストップ</button>
  <button ion-button (click)="push()">移動</button>
  <button ion-button (click)="eventTrack()">イベント</button>
</ion-content>
````

#### src/app/app.module.ts

````
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Repro } from '@ionic-native/repro';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Repro,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
````

## バグがあったら

すいません。教えてください。
