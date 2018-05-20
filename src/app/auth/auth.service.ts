import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from './user';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import {UserService} from "../service/user.service";

@Injectable()
export class AuthService {

  user$: Observable<any>;

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
      this.updateUser(credential);
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

  updateUser(credential) {
    let data = {
      name: credential.user.displayName,
      email: credential.user.email,
      emailVerified: credential.user.emailVerified,
      photoURL: credential.user.photoURL,
      uid: credential.user.uid
    };
    this.userService.getUser(credential.user.uid).subscribe(res=> {
      if(res['data'].length == 0){
        console.log("usuario novo");
        this.userService.postUser(data).subscribe(res=>res, err=> err);
      }else{
        console.log("usuario já cadastrado");
      }
    }, err => err);
    this.userInfo$ = new User(data);
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo$));
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
  )
  }
}

