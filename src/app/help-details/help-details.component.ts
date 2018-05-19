import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HelpService } from './help.service';

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent implements OnInit {

  id: any;
  watcher: Subscription;
  help:any;

  constructor(private routeAct: ActivatedRoute,
      private router: Router,
      private helpService: HelpService) {

  this.help = {detailedDescription:"",
    generalDescription: ""}}

  ngOnInit() {
    this.watcher = this.routeAct.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.helpService.getHelp(this.id).subscribe(res=> this.help = res['data']);
      }
    );
  }

  ngOnDestroy(){
    this.watcher.unsubscribe();
  }
}
