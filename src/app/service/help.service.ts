import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utils} from "../utils/utils";
import {Observable} from "rxjs/Observable";
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class HelpService {

    url = Utils.urlBase;

    getHelpsPage(num: any) : Observable<any> {
        return this.http.get(`${this.url}/ajuda/getAjudas/${num}`);
    }

    getHelpsByUser(id): Observable<any> {
        return this.http.get(`${this.url}/ajuda/getHelpsByUser/${id}`);
    }

    createHelpOrder(help): Observable<any> {
        return this.http.post(`${this.url}/ajuda/postAjuda`, help);
    }

    getHelp(id): Observable<any> {
        return this.http.get(`${this.url}/ajuda/getAjuda/${id}`);
    }

    deleteHelp(id): Observable<any>{
        return this.http.delete(`${this.url}/ajuda/deleteAjuda/${id}`);
    }

    closeHelp(id): Observable<any>{
        return this.http.put(`${this.url}/ajuda/closeAjuda/${id}`, {});
    }

    deleteAnswer(id, index: any): Observable<any> {
        let data: any = {
            index: index
        };
        let options: any = new RequestOptions({
            headers: new Headers(),
            body: data
        });
        return this.http.delete(`${this.url}/ajuda/deleteAnswer/${id}`, options);
    }

    addAnswer(id, answer: any): Observable<any> {
        return this.http.put(`${this.url}/ajuda/putAnswer/${id}`, answer);
    }

    constructor(private http :HttpClient) {}
}