import { HelpService } from './../../service/help.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-ask-help',
  templateUrl: './ask-help.component.html',
  styleUrls: ['./ask-help.component.css']
})
export class AskHelpComponent implements OnInit {

  constructor(private helpService : HelpService, private authService : AuthService) {
  }

  //mudar logica ainda, feito só para testar
  sendOrder(shortDesc: string, longDesc: string, tags: string): any {
    let help = {
      author: this.authService.getCurrentUser().info['name'],
      generalDescription: shortDesc,
      detailedDescription: longDesc,
      tags: tags.split(' '),
      answers: []
    }
    //para dados mockados 
    this.helpService.addHelp(help)
    
    //this.helpService.addHelp({ajuda:help, alunoID: this.authService.getCurrentUser().info['uid']})
    //  .subscribe(res=>console.log(res), err=> console.log(err));
    
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
