const SET_PRELOADER = ( state, value ) => {
    state.preloader = value;
};

const SET_LIST = ( state, value ) => {
    state.list = value;
};

export default {
    SET_PRELOADER,
    SET_LIST,
    SET_ERROR: ( state, msg ) => {
        state.msgsError = msg;
    },
};
