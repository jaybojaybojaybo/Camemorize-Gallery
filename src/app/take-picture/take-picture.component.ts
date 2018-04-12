import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage } from 'ngx-webcam';
import { Injectable } from '@angular/core';
import { Upload } from '../models/upload.model';
import { UploadService } from '../services/upload.service';
import b64toBlob, * as b64 from 'b64-to-blob';
import { base64Decode } from '@firebase/util';
import { Blob } from '@firebase/firestore-types';

@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.css'],
  providers: [ UploadService ]
})
export class TakePictureComponent {
  constructor(
    private uploadService: UploadService
  ) {}

  public showWebcam = true;
  public webcamImage: WebcamImage;
  public imageFile;
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

  uploadWebcam() {
    this.imageFile = this.webcamImage.imageAsBase64;
    // console.log("IMG FILE AS B64: " + this.imageFile);
    let newBlob = base64Decode(this.imageFile);
    console.log(newBlob);
    this.blob.push(newBlob);
    let newUpload = new File(null, "cool.jpg");
    let uploadFile = new Upload(newUpload);


    //data:image/jpeg;base64,/9j/BASE64STRINGHERE//
    //USE THIS FORMAT FOR IMG SRC IN HTML?!//
  }
}
