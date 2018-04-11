import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {

  constructor() { }

  ngOnInit(
    video = document.getElementById('video'),
    canvas = document.getElementById('canvas'),
    photo = document.getElementById('photo'),
    startbutton = document.getElementById('startbutton')
  ) {
  }

  function() {
    var width = 320;    // We will scale the photo width to this
    var height = 0;     // This will be computed based on the input stream
  
    var streaming = false;
  
    var video = null;
    var canvas = null;
    var photo = null;
    var startbutton = null;

}
