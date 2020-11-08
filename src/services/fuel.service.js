
import { mapActions } from 'vuex';

class FuelService {

    constructor(){
        this.baseUrl = process.env.URL_API_BACKEND + 'fuel'
    }

    async getAll(){


        //this.preloader = true
        await window.axios.get(this.baseUrl)
        .then((result) => {
            //this.preloader = false
            //const setList = mapActions( 'Fuel', ['setList'] )
            //console.log(setList('asaasasasas'))
            console.log(result.data.data)
            //this.products = result.data
        }).catch(error => {
            console.log(error)
            //this.preloader = false
        })
    }
}

 export default new FuelService()
