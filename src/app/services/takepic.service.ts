import { Component, OnInit } from '@angular/core';
import { Http, Request } from '@angular/http';
import { WebCamComponent } from 'ack-angular-webcam';
import { base64 } from '@firebase/util';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthenticationGuard } from '../services/authenticationGuard.service';
import { AuthenticationService } from '../services/authentication.service';
import { ImageService } from '../services/image.service';
import { UploadService } from '../services/upload.service';
import { TakePictureComponent } from '../take-picture/take-picture.component';

@Injectable()
export class TakePictureService {

  webcam: WebCamComponent
  base64

  constructor(public http:Http) {}

  genBase64(){
    this.webcam.getBase64()
    .then( base => this.base64=base)
    .catch( e => console.error(e) )
  }

  genPostData() {
    this.webcam.captureAsFormData({fileName:'file.jpg'})
    .then( formData => this.postFormData(formData) ) 
    .catch( e => console.error(e))
  }

  postFormData(formData){
    const config = {
      method:"post",
      url: "URL FOR FIREBASE DB HERE",
      body: formData
    }

    const request = new Request(config)

    return this.http.request( request )
  }

  onCamError(err) {}

  onCamSuccess(){}

}
