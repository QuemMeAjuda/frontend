import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../service/help.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  helps: any;
  page: any;
  watcher: Subscription;

  constructor(private helpService: HelpService,
          private routeAct: ActivatedRoute,
          private router: Router) { }

  firstPage() {
    this.router.navigate(['home/0']);
  }

  previousPage() {
    if(Number(this.page) > 0) {
      this.router.navigate(['home/' + (Number(this.page) - 1)]);
    }
  }

  nextPage() {
    this.router.navigate(['home/' + (Number(this.page) + 1)]);
  }

  lastPage() {

  }

  ngOnInit() {
    this.watcher = this.routeAct.params.subscribe(
      (params: any) => {
        this.page = params['page'];
        let returnedHelps = this.helpService.getHelpPage(this.page);
        returnedHelps.length > 0 ? this.helps = returnedHelps : this.router.navigate(['home/0']);
      }
    );
  }

  ngOnDestroy(){
    this.watcher.unsubscribe();
  }
}
