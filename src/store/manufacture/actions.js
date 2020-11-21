import { cat } from "shelljs";

const baseUrl = process.env.URL_API_BACKEND + 'manufacture/'

const getAll = async ( { commit, state }, obj ) => {
    commit('SET_PRELOADER', true )
    commit('SET_ERROR', null )
    commit('SET_LIST', [] )

    const page = typeof obj.page !== 'undefined' ? parseInt(obj.page) : 1

    window.axios.get( baseUrl + `?page=${page}` )
    .then(( result ) => {
        commit('SET_LIST', result.data.data.rows )
        commit('SET_PAGINATE', window._.omit(result.data.data, 'rows') )
        commit('SET_PRELOADER', false )
    }).catch(error => {
        commit('SET_ERROR', error )
        commit('SET_PRELOADER', false )
    });
};

const getOne = async ( { commit, state }, obj ) => {
    if( typeof obj.id !== 'undefined' ){
        commit('SET_PRELOADER', true )
        commit('SET_DATA', {} )
        commit('SET_ERROR', null )

        //APROVEITANDO O STATE LIST CARREGADO NA PAGINA Index.vue
        try{
            if(state.list.length>0){
                const idx = window._.findLastIndex(state.list, {id: obj.id})
                if(idx !== -1){
                    commit('SET_DATA', state.list[idx] )
                    commit('SET_PRELOADER', false )
                    return
                }
            }
        } catch(error){}

        window.axios.get( baseUrl + obj.id )
        .then(( result ) => {
            commit('SET_PRELOADER', false )
            if( window._.size(result.data.data) > 0 ){
                commit('SET_DATA', result.data.data )
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
