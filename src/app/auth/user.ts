import * as _ from 'lodash';

export class User {

    public info = {};

    constructor(data: any) {
        _.extend(this.info, data);
        //this.info.skills = ["p1","eda","ATAL"];
    }
}