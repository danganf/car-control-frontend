import { PREFX_STORAGE } from "../../configs/configs";
import TimeStorage from "time-storage";

export class storageContract {

    constructor(storageName, __attrs, valDefault, time, unidTime){

        time     = ( typeof time     !== 'undefined' ? time     : 6 );
        unidTime = ( typeof unidTime !== 'undefined' ? unidTime : 'hour' );

        this.storageName = storageName;
        this.valDefault  = typeof valDefault !== 'undefined' ? valDefault : '';
        this.__attrs     = __attrs;
        this.__force     = true;
        this.__time      = time;
        this.__unidTime  = unidTime;
        this.myStorage   = TimeStorage( PREFX_STORAGE, time, unidTime );

        this.__resetAll(true);

        delete this.__force;

    }

    getStorageData(){
        return this.myStorage.get(this.storageName);
    }

    setStorageData( data ){
        if( Object.entries(data).length > 0 )
            this.myStorage.set( this.storageName, data );
        return this;
    }

    set( key, val ){
        if( this.hasOwnProperty( '__' + key ) || typeof this.__force !== 'undefined' ){
            val = typeof val !== 'undefined' ? val : '';
            if( this['__' + key] !== val ) {
                this['__' + key] = val;
                this.__persist(key);
            }
        }

        return this;
    }

    get( key, valDefault ){
        valDefault = typeof valDefault !== 'undefined' ? valDefault : this.valDefault;
        key = '__' + key;
        return this.hasOwnProperty( key ) ? this[key] : valDefault ;
    }

    remove(){
        this.myStorage.remove(this.storageName);
        this.__resetAll();
    }

    __resetAll( noPersiste ){
        let storage = this.getStorageData();
        Object.entries( this.__attrs ).forEach(([key, value]) => {

            if( storage ){

                if( noPersiste === true ) {
                    this.__noPersist = true;
                }

                if( storage.hasOwnProperty( key ) ){
                    value = storage[key];
                }
            }

            this.set( key, value );
        });
    }

    __persist( key ){
        let storage = this.getStorageData();
        let data    = {};
        if( !storage ) {
            data = this.__attrs;
        } else if( typeof key !== 'undefined') {
            const keyTmp = '__' + key;
            if( this.hasOwnProperty( keyTmp ) ){
                storage[key] = this[keyTmp] ? this[keyTmp] : this.valDefault;
                data         = storage;
            }
        }

        if( typeof this.__noPersist === 'undefined' ) {
            this.setStorageData(data);
        } else {
            delete this.__noPersist;
        }

        return this;
    }

}
