import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage } from 'ngx-webcam';
import { Injectable } from '@angular/core';
import { Upload } from '../models/upload.model';
import { UploadService } from '../services/upload.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.css'],
  providers: [ UploadService ]
})
export class TakePictureComponent {
  constructor(
    private uploadService: UploadService,
    private router: Router
  ) {}

  public showWebcam = true;
  public webcamImage: WebcamImage;
  private trigger: Subject<void> = new Subject<void>();

  public upload: Upload;
  public blob: any[];

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleImage(webcamImage: WebcamImage): void {
    // console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  uploadWebcam(webcamImage) {
    let timestamp = new Date().getTime().toString();    
    this.upload = new Upload(webcamImage);  
    this.upload.name = timestamp + ".jpg";
    this.uploadService.uploadWebcam(this.upload);
    this.router.navigate(['/gallery']);
  }
}
