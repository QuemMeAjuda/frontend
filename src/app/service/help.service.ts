import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utils} from "../utils/utils";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

@Injectable()
export class HelpService {

    url = Utils.urlBase;

    // TODO: delete when the backend work
    // and make gets direct by http
    helps: any = [
        {
            id: 0,
            generalDescription: 'Dúvida em p1',
            author: 'Chicken Little',
            detailedDescription: 'Como faço pra pegar o placar de um jogo, ex "3x1" independente de posicao, pois a posicao pode variar se o placar for 11x20',
            awnsers: [
                {
                    author: "Ednaldo Pereira",
                    awnser: "Ednaldo Pereira",
                },
            
                {
                    author: "Ednaldo Pereira",
                    awnser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }
            ]
        },
        {
            id: 1,
            generalDescription: 'Como fazer um MergeSort em haskell?',
            author:  'Chicken Little',
            detailedDescription: 'Olá, gostaria de saber como implementar um merge sort em haskell',
            awnsers: [
                {
                    author: "Ednaldo Pereira",
                    awnser: "Ednaldo Pereira",
                },
            
                {
                    author: "Ednaldo Pereira",
                    awnser: "50kilo bytes de encryptionKKKKK KKKKKK KKKKKKKKKKK KKKKKKKKKKKK KKKKKKKKK KKKKKKKK KKKKK KKKKKKKKK KKKK KKKKKKKKKKKK",
                }
            ]
        },
        {
            id: 2,
            generalDescription: 'Dúvida em Engenharia de Software',
            author: 'Chicken Little',
            detailedDescription: 'O miniteste dessa semana é o miniteste 0 ou 1?',
            awnsers: []
        },   
    ];

    getAllHelps(){
        // TODO: take all helps to show in timeline
        //  think in way to get 10 for paginated timeline
        return this.helps;
    }

    getIntervalOfHelps(beginInterval, endInterval, helps) {
        if(endInterval <= helps.length) {
            return _.reverse(helps).slice(beginInterval, endInterval);
        } else if(endInterval > helps.length && beginInterval < helps.length) {
            return _.reverse(helps).slice(beginInterval, helps.length);
        } else {
            return [];
        }
    }

    getHelpsPage(numPage: any) {
        const endInterval = (Number(numPage)+1) * 10;
        const beginInterval = endInterval - 10;
        const helps = _.cloneDeep(this.helps);
        return this.getIntervalOfHelps(beginInterval, endInterval, helps);
    }

    getHelpsByUser(id): Observable<any> {
        return this.http.get(`${this.url}/user/getAjudasByAluno/${id}`);
    }

    addHelp(help): Observable<any> {
        return this.http.post(`${this.url}/ajuda/postAjuda`, help);
    }

    getHelp(id){
        return this.helps.filter(h => h.id == id)[0];
        //return this.http.get(this.url+`/ajuda/getAjuda/${id}`);
    }

    constructor(private http :HttpClient) {
        let id = 3;
        const help = this.helps[0];
        for(var i = 0; i < 50; i++) {
            var x = _.cloneDeep(help);
            x.generalDescription += "-" + String(i+1);
            x.id = id
            this.helps.push(x);
            id+=1;
        }
    }

}
