import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from './user';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  user$: Observable<User>;
  constructor(private router: Router) {}

  public token_id: string;

  public loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((credential) => {
      firebase.auth().currentUser.getIdToken().then(
        (idToken: string) => {
            this.token_id = idToken;
            localStorage.setItem('idToken', idToken);
            this.router.navigate(['/']);

        }
    )
    })
  }

  public isAuth(): boolean {

    if(this.token_id === undefined && localStorage.getItem('idToken') !== null) {
        this.token_id = localStorage.getItem('idToken');
    }

    if(this.token_id === undefined && localStorage.getItem('idToken') === null) {
        this.router.navigate(['/signin']);
    }

    return this.token_id !== undefined;
  }

  updateUser(user) {
    const data: User = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      photoURL: user.photoURL
    }
  }

  logout(){
    firebase.auth().signOut().then(
      (resposta: any) => {
          localStorage.removeItem('idToken');
          this.token_id = undefined;
          this.router.navigate(['/signin']);
      }
  )
  }
}

