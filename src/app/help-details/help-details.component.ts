import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HelpService } from '../service/help.service';
import { AuthService } from '../service/auth.service';
import { User } from '../auth/user';
import { HomeComponent } from '../home/home.component';
import {MatSnackBar} from '@angular/material';
import { UserService } from '../service/user.service';

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

  evaluation: any;

  constructor(private routeAct: ActivatedRoute,
      private router: Router,
      private helpService: HelpService,
      private homeComponent : HomeComponent,
      private auth: AuthService,
      private dialog: MatDialog,
      private snackBar: MatSnackBar,
      private userService: UserService) {
    this.user = this.auth.getCurrentUser();
    this.help = {
      detailedDescription:"",
      generalDescription: ""
    };
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
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
        evaluation: this.user.info.evaluation,
      },
      answer: this.currentAnswer,
      photoURL: this.answerPhotoURL,
    }
  }

  goToUserPage(authorID){
    this.router.navigate(['/user_details', authorID]);
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
      this.openSnackBar("Avalie a melhor resposta!", "Fechar");
    }, err=> console.log(err));
  }

  getUrl(obj) {
    const url = obj.author && obj.author.photoURL || 'https://img.meutimao.com.br/_upload/forumtopico/2017/03/13/qeqv9vj.png';
    return `url(${url})`;
  }

  openDialog(help, index): void {
    let id = help && help._id;
    console.log(help, index)
    let answerAuthorID = help.answers && help.answers[index].authorID;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {evaluation: this.evaluation}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result && result.rate) {
        this.userService.addEvaluation(answerAuthorID, result).subscribe(res=> {
          help.answers[index].favorite = true;
        }, err=> console.log(err));

        this.helpService.favoriteAnswer(id, index).subscribe(res=> {
          help.answers[index].favorite = true;
        }, err=> console.log(err));
      }
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
  evaluation: any;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.data.evaluation = {
        rating: Number,
        comment: ""
      };
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
