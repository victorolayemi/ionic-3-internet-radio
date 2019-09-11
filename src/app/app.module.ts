import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen  } from '@ionic-native/splash-screen';
import { StatusBar  } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';


let pages = [
    MyApp,
    HomePage,
];

/**
 * Sample custom factory function to use with ionic-audio
 */
export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

export function providers() {
  return [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    SplashScreen, 
    StatusBar
	];
}
export function entryComponents() {
  return pages;
}
export function declarations() {
  return pages;
}

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory), 

    // or use a custom provided function shown above myCustomAudioProviderFactory
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers(),
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
