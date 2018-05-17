import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-help',
  templateUrl: './ask-help.component.html',
  styleUrls: ['./ask-help.component.css']
})
export class AskHelpComponent implements OnInit {

  constructor() { 
  }

  fazAlgo(): any {
    console.log("Deu certo");
  }

  isLargerScreen(): boolean {
    return window.screen.width >= 960;
  }
  isVerySmallScreen(): boolean {
    return window.screen.width <= 420;
  }

  ngOnInit() {
  }

}
