import { Component } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user: User;

  public logo = "assets/images/quem_me_ajuda_logo.png";

  constructor(public AuthService: AuthService, private router: Router) { 
    if(this.AuthService.isAuth()) {
      this.router.navigate(['/']);
    }
  }

  login(): void {
    this.AuthService.loginWithGoogle();
  }
  logout(): void {
    this.AuthService.logout();
  }
  isLargerScreen(): boolean {
    return window.screen.width >= 960;
  }
  isVerySmallScreen(): boolean {
    return window.screen.width <= 420;
  }
}
