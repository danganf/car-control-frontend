export default {
    getMsgError: state => state.msgsError,

    listToSelect: (state) => {
        const data = [];
        if( state.list.length > 0 ){
            Array.from(state.list).forEach( elem => {
                data.push({value: elem.id, text: `${elem.name} (${elem.wheels} rodas)`})
            } )
        }
        return data
    }
};
