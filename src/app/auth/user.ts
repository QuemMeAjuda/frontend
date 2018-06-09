import * as _ from 'lodash';

export class User {

    public info : any;

    constructor(data: any) {

        this.info = {};
        
        //para fins de teste, use o email que voce esta logado para logar como tutor (competencies > 0)
        if (data.email === "tiagoleonhart@gmail.com"){
            data.competencies = ["p1","LEDA","ATAL"];
        }
        _.extend(this.info, data);

    }

    isTutor(){
        return this.info.competencies && this.info.competencies.length > 0;
    }

}