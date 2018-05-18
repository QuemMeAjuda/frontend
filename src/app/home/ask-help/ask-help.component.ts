import { Component, OnInit } from '@angular/core';
import { AskHelpService } from './ask-help.service';

@Component({
  selector: 'app-ask-help',
  templateUrl: './ask-help.component.html',
  styleUrls: ['./ask-help.component.css']
})
export class AskHelpComponent implements OnInit {

  constructor() { 
  }

  //mudar logica ainda, feito só para testar
  sendOrder(shortDesc: string, longDesc: string, tags: string): any {
    let help = {
      generalDescription: shortDesc,
      detailedDescription: longDesc,
      tags: tags,
      closed: false
    }
    //mandar para o service
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
