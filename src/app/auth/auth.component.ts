import { Component } from '@angular/core';
import { User } from './user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user: User;

  public logo = "assets/images/quem_me_ajuda_logo.png";

  constructor(public AuthService: AuthService, private router: Router, private snackBar: MatSnackBar) {

    if(this.AuthService.isAuth()) {
      this.router.navigate(['/']);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  simpleLogin() {
    this.openSnackBar("No momento é possível fazer login apenas usando contas Google", "Fechar")
  }

  resetPassword() {
    this.openSnackBar("No momento é possível fazer login apenas usando contas Google", "Fechar")
  }

  login(): void {
    localStorage.setItem('userInfo', JSON.stringify({}));
    this.AuthService.loginWithGoogle();
  }
  logout(): void {
    localStorage.setItem('userInfo', JSON.stringify({}));
    this.AuthService.logout();
  }
  isLargerScreen(): boolean {
    return window.screen.width >= 960;
  }
  isVerySmallScreen(): boolean {
    return window.screen.width <= 420;
  }

  public signup(){
    this.router.navigate(['signup'])
  }
}
