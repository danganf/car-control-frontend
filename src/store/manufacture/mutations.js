import {formatMsgError} from '@/util/helpers'

const SET_PRELOADER = ( state, value ) => {
    state.preloader = value;
};

const SET_LIST = ( state, value ) => {
    state.list = value;
};

const SET_PAGINATE = ( state, value ) => {
    state.paginate = value;
};

const SET_DATA = ( state, value ) => {
    state.data = value;
};

export default {
    SET_PRELOADER,
    SET_LIST,
    SET_DATA,
    SET_PAGINATE,
    SET_ERROR: ( state, msg ) => {
        state.msgError = formatMsgError(msg);
    },
};
