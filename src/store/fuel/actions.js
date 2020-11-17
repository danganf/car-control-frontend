
const baseUrl = process.env.URL_API_BACKEND + 'fuel/'

const getAll = async ( { commit }, obj ) => {
    commit('SET_PRELOADER', true )
    commit('SET_ERROR', null )
    window.axios.get( baseUrl )
    .then(( result ) => {
        commit('SET_LIST', result.data.data.rows )
        commit('SET_PAGINATE', window._.omit(result.data.data, 'rows') )
        commit('SET_PRELOADER', false )
    }).catch(error => {
        commit('SET_ERROR', error )
        commit('SET_PRELOADER', false )
    });
};

const getOne = async ( { commit }, obj ) => {
    if( typeof obj.id !== 'undefined' ){
        commit('SET_PRELOADER', true )
        commit('SET_LIST', [] )
        commit('SET_ERROR', null )
        window.axios.get( baseUrl + obj.id )
        .then(( result ) => {
            commit('SET_PRELOADER', false )
            if( window._.size(result.data.data) > 0 ){
                commit('SET_LIST', result.data.data )
            } else {
                throw "Registro não encontrado"
            }
        }).catch(error => {
            commit('SET_ERROR', error )
            commit('SET_PRELOADER', false )
        });
    }
};

export default {
    getAll,
    getOne
};
