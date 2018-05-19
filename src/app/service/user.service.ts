import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utils} from "../utils/utils";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  url = Utils.urlBase + '/user';

  constructor(private http : HttpClient) {}

  getAjudas(id): Observable<any> {
    return this.http.get(`${this.url}/getAjudasByAluno/${id}`);
  }
}
