export class modelContract {
    constructor( attrs, data){
        this.setData( data );
        this.__attrs = attrs;
        this.resetAttr();
        delete this.__attrs;
    }

    setData( data ){
        if( typeof data === 'object'){
            let scope = this;
            Object.entries(data).forEach(([key, value]) => {
                if( scope.hasOwnProperty( key ) ) {
                    scope[key] = value;
                }
            });
        }
    }

    get( key ){
        return this.hasOwnProperty( key ) ? this[key] : null;
    }

    set( key, val ){

        if( this.hasOwnProperty( key ) ) {
            this[key] = val;
        }
    }

    resetAttr( valDefault ){
        valDefault = typeof valDefault === 'undefined' ? null : valDefault;
        let scope  = this;

        if( typeof this.__attrs !== 'undefined' ) {
            Object.keys( this.__attrs ).forEach(function (value) {
                scope[value] = valDefault;
            });
        } else {
            Object.entries( Object.keys( this )  ).forEach(([key, value]) => {
                scope[value] = valDefault;
            });
        }
    }

    toObjData(){
        return Object.assign({}, this);
    }
}
