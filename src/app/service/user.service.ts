import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utils} from "../utils/utils";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  url = Utils.urlBase + '/user';

  constructor(private http : HttpClient) {}

  getAjudas(id): Observable<any> {
    return this.http.get("http://localhost:3000/user/getAjudasByAluno/5b0094f6d032dd58df67d83a");
  }
}
