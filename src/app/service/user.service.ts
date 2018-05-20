import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utils} from "../utils/utils";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  url = Utils.urlBase;

  constructor(private http : HttpClient) {}

  getAjudas(id): Observable<any> {
    return this.http.get(`${this.url}/user/getAjudasByAluno/${id}`);
  }

  addAjuda(ajuda): Observable<any> {
    return this.http.post(`${this.url}/ajuda/postAjuda`, ajuda);
  }

  postUser(user): Observable<any>{
    let data = {
      name: user.name,
      uid: user.uid
    };

    return this.http.post(`${this.url}/user/postUser`, data);
  }
}
