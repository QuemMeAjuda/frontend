import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HelpService } from '../service/help.service';

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent implements OnInit {

  id: any;
  watcher: Subscription;
  help: any;
  @Input() receivedHelp: any;
  @Input() isTimeline: boolean;

  constructor(private routeAct: ActivatedRoute,
      private router: Router,
      private helpService: HelpService) {
    this.help = {
      detailedDescription:"",
      generalDescription: ""
    };
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
