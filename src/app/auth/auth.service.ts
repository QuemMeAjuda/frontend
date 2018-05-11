import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from './user';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user$: Observable<User>;
  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore) {
    this.user$ = afAuth.authState.switchMap(user => {
      if(user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    })
  }
  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user);
    })
  }
  updateUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      photoURL: user.photoURL
    }
    return userRef.set(data, {merge: true});
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}

