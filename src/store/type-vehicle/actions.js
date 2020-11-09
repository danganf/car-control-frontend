
const baseUrl = process.env.URL_API_BACKEND + 'type-vehicle'

const getAll = ( { commit }, obj ) => {
    commit('SET_PRELOADER', true );
    window.axios.get( baseUrl )
    .then(( result ) => {
        commit('SET_LIST', result.data.data.rows )
        commit('SET_PAGINATE', window._.omit(result.data.data, 'rows') )
        commit('SET_PRELOADER', false )
        commit('SET_ERROR', null )
    }).catch(error => {
        commit('SET_ERROR', error.response.data.messages )
        commit('SET_PRELOADER', false )
    });
};

export default {
    getAll
};
