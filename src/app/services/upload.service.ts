import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { GalleryImage } from '../models/galleryImage.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Upload } from '../models/upload.model';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  private basePath = '/uploads';
  private uploads: FirebaseListObservable<GalleryImage[]>;

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase) { }

  uploadFile(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const putUpload = storageRef.child(`${this.basePath}`)
  }
}
