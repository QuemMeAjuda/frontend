import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../help-details/help.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  helps: any;

  constructor(private helpService: HelpService) { }

  ngOnInit() {
    this.helps = this.helpService.getHelps();
  }

}
