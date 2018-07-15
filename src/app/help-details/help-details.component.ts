import { Component, OnInit, Input, Inject } from '@angular/core';
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
  animal: string;
  name: string;
  
  constructor(private routeAct: ActivatedRoute,
      private router: Router,
      private helpService: HelpService,
      private homeComponent : HomeComponent,
      private auth: AuthService,
      private dialog: MatDialog) {
    this.user = this.auth.getCurrentUser();
    this.help = {
      detailedDescription:"",
      generalDescription: ""
    };
  }

  goToHelp(help: any) {
    let id = help && help._id;
    this.router.navigate(['/help_details/' + id]);
  }

  createAnswer() {
    return {
      author: {
        name: this.user.info.name,
        photoURL: this.user.info.photoURL,
        email: this.user.info.email,
        _id: this.user.info._id,
        tutorEvaluation: this.user.info.tutorEvaluation,
        studentEvaluation: this.user.info.studentEvaluation
      },
      answer: this.currentAnswer,
      photoURL: this.answerPhotoURL,
    }
  }

  addAnswer(help){
    let id = help && help._id;
    const answer = this.createAnswer();
    this.helpService.addAnswer(id, answer).subscribe(res=> {
      this.help.answers.push(answer);
      this.currentAnswer = "";
      this.answerPhotoURL = "";
      this.commentWithPhoto = false;
    }, err=> console.log(err));
  }

  deleteAnswer(help, index){
    let id = help && help._id;
    this.helpService.deleteAnswer(id, index).subscribe(res=> {
      this.help.answers.splice(index,1);
    }, err=> console.log(err));
  }

  receivePhotoURL(answerPhotoURL) {
    this.answerPhotoURL = answerPhotoURL;
  }

  deleteHelp(help: any){
    let id = help && help._id;
    this.helpService.deleteHelp(id).subscribe(res=> {
      this.homeComponent.goToHome();
    }, err=> console.log(err));
  }

  closeHelp(help: any) {
    let id = help && help._id;
    this.helpService.closeHelp(id).subscribe(res=> {
      help.closed = true;
    }, err=> console.log(err));
  }

  getUrl(obj) {
    const url = obj.author && obj.author.photoURL || 'https://img.meutimao.com.br/_upload/forumtopico/2017/03/13/qeqv9vj.png';
    return `url(${url})`;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
    if(this.receivedHelp) {
      this.help = this.receivedHelp;
    } else {
      this.watcher = this.routeAct.params.subscribe(
        (params: any) => {
          this.id = params['id'];
          this.helpService.getHelp(this.id).subscribe(res=> {
            this.help = res['data'];
          }, err=> console.log(err));
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

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
