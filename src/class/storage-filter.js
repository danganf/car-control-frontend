
import { storageContract } from "../class/contract/storage";

const __attrs = {
    sort: '' , sort_name: '',
    dir: '' , dir_name: ''
};

export class storageFilter extends storageContract {

    constructor(sufix){
        super( `filter-${sufix}`, __attrs, '', 1 );
    }

    getUrlFilter(){
        let filter = this.getStorageData();
        delete filter['sort_name'];
        delete filter['dir_name'];
        return Object.keys(filter).map(function(key) {
                    return key + '=' + ( filter[key] || '' );
                }).join('&');
    }

}
