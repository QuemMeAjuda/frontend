import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HelpService } from '../service/help.service';
import { AuthService } from '../service/auth.service';
import { User } from '../auth/user';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent implements OnInit {

  public user : User;
  public currentAnswer : string;
  id: any;
  watcher: Subscription;
  help: any;
  commentWithPhoto = false;
  disabled = false;
  answerPhotoURL: String;
  @Input() receivedHelp: any;
  @Input() isTimeline: boolean;

  constructor(private routeAct: ActivatedRoute,
      private router: Router,
      private helpService: HelpService,
      private homeComponent : HomeComponent,
      private auth: AuthService) {
    this.user = this.auth.getCurrentUser();
    this.help = {
      detailedDescription:"",
      generalDescription: ""
    };
  }

  goToHelp(id: any) {
    this.router.navigate(['/help_details/' + id]);
  }

  createAnswer() {
    return {
      author: {
        name: this.user.info.name,
        uid: this.user.info.uid,
        photoURL: this.user.info.photoURL
      },
      answer: this.currentAnswer,
      photoURL: this.answerPhotoURL,
    }
  }

  addAnswer(){
    const answer = this.createAnswer();
    this.help.answers.push(answer);
    this.currentAnswer = "";
    this.answerPhotoURL = "";
    this.commentWithPhoto = false;
  }

  //Quando a resposta vir do backend, mudar logica para excluir a resposta com o determinado id
  deleteAnswer(aid){
    this.help.answers.splice(aid,1);
  }

  receivePhotoURL(answerPhotoURL) {
    this.answerPhotoURL = answerPhotoURL;
  }

  deleteHelp(id){
    const index = this.helpService.deleteHelp(id);
    this.homeComponent.goToHome();

  }

  ngOnInit() {
    if(this.receivedHelp) {
      this.help = this.receivedHelp;
    } else {
      this.watcher = this.routeAct.params.subscribe(
        (params: any) => {
          this.id = params['id'];
          this.help = this.helpService.getHelp(this.id);
          //this.helpService.getHelp(this.id).subscribe(res=> this.help = res['data'], err=> console.log(err));
        }
      );
    }
  }

  ngOnDestroy(){
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }
}
