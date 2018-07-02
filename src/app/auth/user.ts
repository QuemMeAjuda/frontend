import * as _ from 'lodash';

export class User {

    public info : any;

    constructor(data: any) {

        this.info = {};
        _.extend(this.info, data);

    }

    isTutor(){
        return this.info.skills && this.info.skills.length > 0;
    }

}