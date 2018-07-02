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

  constructor(private _helpService: HelpService,
          private _routeAct: ActivatedRoute,
          private _router: Router) {}

  previousPage() {
    if (Number(this.page) > 0) {
      this._router.navigate(['/home', (Number(this.page) - 1)]);
    }
  }

  nextPage() {
    this._router.navigate(['/home', (Number(this.page) + 1)]);
  }

  ngOnInit() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.watcher = this._routeAct.params.subscribe(
      (params: any) => {
        this.page = params['page'];
        this._helpService.getHelpsPage(this.page).subscribe(res=> {
          if(res['data'].length === 0) {
            this._router.navigate(['/home/0'])
          } else {
            this.helps = res['data'];
          }
        }, err=> console.log(err));
      }
    );
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }
}
