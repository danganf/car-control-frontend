import {sleep} from "@/util/helpers";

export const mixMsgAwait =  {
    methods: {
        async mix_setMsgAwait( msg, ms, scope ){
            ms    = typeof ms    === 'undefined' ? 3000       : ms;
            scope = typeof scope === 'undefined' ? 'msgError' : scope;
            this[scope] = msg;
            await sleep(ms);
            this[scope] = null;
        }
    }
};

export const MixMsgNotify = {
    methods:{
        mix_msgNotify( msg, action, timeout, position ){

            timeout  = typeof timeout  === 'undefined' ? 3000       : timeout;
            action   = typeof action   === 'undefined' ? 'success'  : action;
            position = typeof position === 'undefined' ? 'rightTop' : position;

            const config = {timeout, position };

            switch ( action ) {
                case 'success':
                    this.$snotify.success( msg, 'Parabéns!', config );
                    break;
                case 'error':
                    this.$snotify.error( msg, 'Ops!', config );
                    break;
            }
        }
    }
};
