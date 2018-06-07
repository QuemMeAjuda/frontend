import * as _ from 'lodash';

export class User {

    public info : any;

    constructor(data: any) {

        this.info = {};
        
        //para fins de teste
        if (data.email === "rubens.sousa@ccc.ufcg.edu.br"){
            data.competencies = ["p1","LEDA","ATAL"];
        }
        _.extend(this.info, data);

    }

    isTutor(){
        return this.info.competencies && this.info.competencies.length > 0;
    }

}