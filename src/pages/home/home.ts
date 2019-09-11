import { Component, ChangeDetectorRef } from '@angular/core';


import { NavController } from 'ionic-angular';

import { ITrackConstraint } from 'ionic-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myTracks: ITrackConstraint[];
  playlist: ITrackConstraint[] = [];
  items: Array<any>;

  currentIndex: number = -1;
  currentTrack: ITrackConstraint;

  constructor(public navCtrl: NavController, private _cdRef: ChangeDetectorRef) {
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'

 

  
  
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
  

  
  
  add(track: ITrackConstraint) {
    this.playlist.push(track);
  }

  play(track: ITrackConstraint, index: number) {
      this.currentTrack = track;
      this.currentIndex = index;
  }

  next() {
    // if there is a next track on the list play it
    if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
      let i = this.currentIndex + 1;
      let track = this.playlist[i];
      this.play(track, i);
      this._cdRef.detectChanges();  // needed to ensure UI update
    } else if (this.currentIndex == -1 && this.playlist.length > 0) {
      // if no track is playing then start with the first track on the list
      this.play(this.playlist[0], 0);
    }
  }

  onTrackFinished(track: any) {
    this.next();
  }

  clear() {
    this.playlist = [];
  }

}
