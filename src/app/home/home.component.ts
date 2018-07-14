import { Component, OnInit, ViewChild  } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../auth/user';
import { Router } from '@angular/router';

/** @title Responsive sidenav */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mobileQuery: MediaQueryList;

  public user: User;

  public logo = "assets/images/quem_me_ajuda_logo.png";

  private _mobileQueryListener: () => void;

  fillerContent = Array(50).fill(0).map(() =>
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
  
  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private auth: AuthService,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.user = this.auth.getCurrentUser();
  }

  getLogoSize(): string {
    if(window.screen.width >= 960) {
      return 'logo-for-large';
    } else if(window.screen.width < 960 && window.screen.width > 600) {
      return 'logo-for-mid';
    } else {
      return 'logo-for-small';
    }
  }

  getUrl(obj) {
    const url = obj.info && obj.info.photoURL || 'https://img.meutimao.com.br/_upload/forumtopico/2017/03/13/qeqv9vj.png';
    return url;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  goToAskHelp() {
    this.router.navigate(['/ask_for_help']);
  }
  goToOwnHelps() {
    this.router.navigate(['/welcome', this.user.info._id]);
  }
  logout(): void {
    this.auth.logout();
  }
}
