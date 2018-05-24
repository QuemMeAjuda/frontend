import { HomeComponent } from './../home.component';
import { WelcomeService } from './welcome.service';
import { Component, OnInit } from '@angular/core';
import {HelpService} from "../../help-details/help.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  helps: any;

  panelOpenState: boolean = false;
  showAwnsersState: boolean = false;

  constructor(private homeComponent: HomeComponent, private helpService: HelpService, private authService: AuthService) { }

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

  setShowAwnsersState(help: any){
    if (help.showAwnsersState){
      delete help.showAwnsersState;
    }else{
      help.showAwnsersState = true;
    }
  }

  ngOnInit() {
    this.helpService.getHelpsByUser(this.authService.getCurrentUser().info['uid']).subscribe(res=>{
      this.helps = res['data'];
    }, err=> console.log(err));
  }

}
