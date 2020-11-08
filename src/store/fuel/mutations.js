const SET_PRELOADER = ( state, value ) => {
    state.preloader = value;
};

const SET_LIST = ( state, obj ) => {
    state.list = obj;
};

export default {
    SET_LIST,
    SET_PRELOADER,
    SET_ERROR: ( state, msg ) => {
        state.msgsError = msg;
    },
};
