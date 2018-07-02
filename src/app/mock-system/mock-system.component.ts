import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Utils} from "../utils/utils";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-mock-system',
  templateUrl: './mock-system.component.html',
  styleUrls: ['./mock-system.component.css']
})
export class MockSystemComponent implements OnInit {

  url = Utils.urlBase;
  watcher: Subscription;

  constructor(private routeAct: ActivatedRoute,
      private http :HttpClient,
      private auth: AuthService) { }

  reset(): Observable<any>{
    return this.http.post(`${this.url}/admin/reset`, {});
  }

  ngOnInit() {
    this.watcher = this.routeAct.params.subscribe(
      (params: any) => {
        this.reset().subscribe(res=> console.log(res), err=> console.log(err));
        this.auth.logout();
      }
    );
  }

  ngOnDestroy(){
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

}
