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
