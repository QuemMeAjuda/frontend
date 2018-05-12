import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: User;

  public logo = "assets/images/quem_me_ajuda_logo.png";

  constructor(public AuthService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.AuthService.isAuth()) {
      this.router.navigate(['/']);
    }
  }

  login(){
    this.AuthService.loginWithGoogle();
  }
  logout() {
    this.AuthService.logout();
  }
}
