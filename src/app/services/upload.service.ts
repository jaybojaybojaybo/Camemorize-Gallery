import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { GalleryImage } from '../models/galleryImage.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Upload } from '../models/upload.model';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  private basePath = '/uploads';
  private uploads: AngularFireList<GalleryImage[]>;

  constructor(
    private ngFire: AngularFireModule, 
    private db: AngularFireDatabase
  ) { }

  uploadFile(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);


    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    // three observers
    // 1.) STATE_CHANGED observer
    (snapshot) => {
      // upload in progress
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
    },
    // 2.) error observer
    (error) => {
      //upload failed
      console.log(error);
    },
    // 3.) success observer
    (): any => {
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
       this.saveFileData(upload);
     }
    );
  }

  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);

  }
}
