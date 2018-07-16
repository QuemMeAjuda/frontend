import { HomeComponent } from './../home.component';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { HelpService } from '../../service/help.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../auth/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  helps: any;

  public user: User;

  authorID: any;

  watcher: Subscription
  panelOpenState: boolean = false;
  showanswersState: boolean = false;

  constructor(private homeComponent: HomeComponent,
    private _helpService: HelpService,
    private _router: Router,
    private _routeAct: ActivatedRoute,
    private authService: AuthService) { 
      this.user = authService.getCurrentUser();
    }

  isLargerScreen(): boolean {
    return window.screen.width >= 960;
  }
  isVerySmallScreen(): boolean {
    return window.screen.width <= 420;
  }

  goToAskHelp() {
    return this.homeComponent.goToAskHelp();
  }

  goToHome(){
    return this.homeComponent.goToHome();
  }

  setShowanswersState(help: any){
    if (help.showanswersState){
      delete help.showanswersState;
    }else{
      help.showanswersState = true;
    }
  }

  getUrl(obj) {
    const url = obj.author && obj.author.photoURL || 'https://img.meutimao.com.br/_upload/forumtopico/2017/03/13/qeqv9vj.png';
    return `url(${url})`;
  }

  getNumber(help) {
    let num = help.answers && help.answers.length;
    num = help.favoriteAnswer ? (num+1) : num;
    return num;
  }

  goToUserPage(authorID){
    this._router.navigate(['/user_details', authorID]);
  }

  ngOnInit() {
    this.watcher = this._routeAct.params.subscribe(
      (params: any) => {
        this.authorID = params['authorID'];
        this._helpService.getHelpsByUser(this.authorID).subscribe(res=> {
          this.helps = res['data'];
        }, err=> console.log(err));
      }
    );
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }
}
