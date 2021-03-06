import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from '../auth/user';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import {UserService} from "../service/user.service";
import * as _ from 'lodash';

@Injectable()
export class AuthService {

  public token_id: string;

  public userInfo$: User;

  constructor(private router: Router, private userService : UserService) {
    if (localStorage.getItem('userInfo')) {
      var parse = JSON.parse(localStorage.getItem('userInfo'));
      this.userInfo$ = new User(parse.info);
    } else {
      this.logout();
    }
  }

  public loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((credential) => {
      firebase.auth().currentUser.getIdToken().then(
        (idToken: string) => {
            this.updateUser(credential, idToken);
        }
      );
    });
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

  getUser(data, idToken) {
    this.userService.getUserByEmail(data.email).subscribe(res=> {
      if(res['data'].length == 0){
        this.userService.postUser(data).subscribe(res=>this.getUser(data, idToken), err=> err);
      }else{
        _.extend(data, res['data'][0]);
        this.userInfo$ = new User(data);
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo$));
        this.token_id = idToken;
        localStorage.setItem('idToken', idToken);
        this.router.navigate(['/']);
      }
    }, err => err);
  }

  updateUser(credential, idToken) {
    let data = {
      name: credential.user.displayName,
      email: credential.user.email,
      emailVerified: credential.user.emailVerified,
      photoURL: credential.user.photoURL,
      uid: credential.user.uid
    };
    this.getUser(data, idToken);
  }

  getCurrentUser() {
    return this.userInfo$;
  }

  logout(){
    firebase.auth().signOut().then(
      (response: any) => {
          localStorage.removeItem('idToken');
          localStorage.removeItem('userInfo');
          this.token_id = undefined;
          this.router.navigate(['/signin']);
      }
    );
  }
}

