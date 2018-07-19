import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../auth/user';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user : User;
  public currentUser : any;
  id: any;
  watcher: Subscription;

  constructor(private userService: UserService,
    private routeAct: ActivatedRoute,
    private router: Router) {
   }


   getUrl() {
    const url = this.currentUser && this.currentUser.photoURL || 'https://cdn.mytheatreland.com/images/show/25951_show_landscape_large_01.jpg';
    return `url(${url})`;
  }

  getRate(): any{
    let total = this.currentUser && this.currentUser.evaluation.reduce((a,b) => {
      a+=b.rating;
      return a;
    },0);
    let result = (total / (this.currentUser && this.currentUser.evaluation.length))
    return result && result.toFixed(2) || "Não avaliado ainda";
  }

  ngOnInit() {
    this.watcher = this.routeAct.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.userService.getUserByID(this.id).subscribe(res=> {
          this.currentUser = res['data'];
        }, err=> console.log(err));
      }
    );
  }

  getEvalUrl(author){
    const url = author && author.photoURL || 'https://cdn.mytheatreland.com/images/show/25951_show_landscape_large_01.jpg';
    return `url(${url})`;
  }

  goToUserPage(id){
    this.router.navigate(['/user_details', id]);
  }

  ngOnDestroy(){
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

}
