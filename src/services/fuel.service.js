class FuelService {

    async getAll(){
        // this.preloader = true
        // await window.axios.get(process.env.URL_API_BACKEND + 'vehicles')
        // .then((result) => {
        //   this.preloader = false
        //   result.data.splice(0, 1)
        //   this.products = result.data
        // }).catch(error => {
        //   console.log(error)
        //   this.preloader = false
        // })
    }
}

 export default new FuelService()
