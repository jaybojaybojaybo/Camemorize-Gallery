import { Component, OnInit, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.css']
})
export class TakePictureComponent {
    public showWebcam = true;

    public webcamImage: WebcamImage = null;

    private trigger: Subject<void> = new Subject<void>();

    public triggerSnapshot(): void {
      this.trigger.next();
    }

    public toggleWebcam(): void {
      this.showWebcam = !this.showWebcam;
    }

    public handleImage(webcamImage: WebcamImage): void {
      console.info('received webcam image', webcamImage);
      this.webcamImage = webcamImage;
    }

    public get triggerObservable(): Observable<void> {
      return this.trigger.asObservable();
    }
}
