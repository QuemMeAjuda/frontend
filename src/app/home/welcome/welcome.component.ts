import { HomeComponent } from './../home.component';
import { WelcomeService } from './welcome.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  helps: any;

  panelOpenState: boolean = false;

  constructor(private welcomeService: WelcomeService, private homeComponent: HomeComponent) { }

  isLargerScreen(): boolean {
    return window.screen.width >= 960;
  }
  isVerySmallScreen(): boolean {
    return window.screen.width <= 420;
  }

  goToAskHelp() {
    return this.homeComponent.goToAskHelp();
  }

  ngOnInit() {
    this.helps = this.welcomeService.getHelps();
  }

}