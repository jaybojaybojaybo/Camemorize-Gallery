import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnalysisService {

  constructor(private http: Http) { }

  detectFace(imageUrl: string) {
    return this.http.post(`https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBHUY0nfs6isIasGVIxKkxEx83UVsgKPdM`, {
      "requests":[
        {
          "image":{
            "source":{
              "imageUri":
                "" + imageUrl + ""
            }
          },
          "features":[
            {
              "type":"FACE_DETECTION",
              "maxResults":4
            }
          ]
        }
      ]
    })
  }

}
