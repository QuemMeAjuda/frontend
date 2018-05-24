import * as _ from 'lodash';
export class Help {
    public info = {};
    constructor(data: any) {
        _.extend(this.info, data);
    }
 }