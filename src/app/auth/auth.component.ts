import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: User;
  constructor(public AuthService: AuthService) { }

  ngOnInit() {
    this.AuthService.user$.subscribe(user => this.user = user);
  }
  login(){
    this.AuthService.loginWithGoogle();
  }
}
