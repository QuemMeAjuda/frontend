import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from '../auth/user';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import {UserService} from "../service/user.service";
import * as _ from 'lodash';

@Injectable()
export class UploadService {

  constructor() { }

  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
  }
}