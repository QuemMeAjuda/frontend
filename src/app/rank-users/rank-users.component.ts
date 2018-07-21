import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank-users',
  templateUrl: './rank-users.component.html',
  styleUrls: ['./rank-users.component.css']
})
export class RankUsersComponent implements OnInit {

  users: any;

  constructor(private userService: UserService,
    private router: Router) { }

  getPhoto(obj) {
    const url = obj && obj.photoURL || 'https://img.meutimao.com.br/_upload/forumtopico/2017/03/13/qeqv9vj.png';
    return `url(${url})`;
  }

  getRate(currentUser): any{
    let total = currentUser && currentUser.evaluation.reduce((a,b) => {
      a+=b.rating;
      return a;
    },0);
    let result = (total / (currentUser && currentUser.evaluation.length))
    return result && result.toFixed(2) || "Não avaliado ainda";
  }

  goToUserPage(user) {
    let id = user && user._id;
    this.router.navigate(['/user_details', id]);
  }

  ngOnInit() {
    this.userService.getTopUsers().subscribe(res=> {
      this.users = res['data'];
      console.log(this.users);
    }, err=> {
      console.log(err);
      this.router.navigate(['/not_found']);
    });
  }
}
