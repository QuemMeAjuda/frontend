import { HelpService } from './../../service/help.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import { User } from '../../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-help',
  templateUrl: './ask-help.component.html',
  styleUrls: ['./ask-help.component.css']
})
export class AskHelpComponent implements OnInit {

  public user : User;

  constructor(private helpService : HelpService,
    private authService : AuthService,
    private router: Router) {
    this.user = this.authService.getCurrentUser();
  }

  createHelp(shortDesc: string, longDesc: string, tags: string) {
    return {
        generalDescription: shortDesc,
        detailedDescription: longDesc,
        tags: tags.split(' '),
        author: {
            name: this.user.info.name,
            photoURL: this.user.info.photoURL,
            email: this.user.info.email,
            tutorEvaluation: this.user.info.tutorEvaluation,
            studentEvaluation: this.user.info.studentEvaluation
        },
        authorID: this.user.info._id,
      }
  }
  sendOrder(shortDesc: string, longDesc: string, tags: string): any {
    let help = this.createHelp(shortDesc, longDesc, tags);
    this.helpService.createHelpOrder(help).subscribe(res => {
      this.router.navigate(['home/0']);
    }, err => console.log(err)
    ); 
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
