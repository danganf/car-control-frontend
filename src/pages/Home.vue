<template>
    <div>
        <section class="home">

            <div class="owl-carousel home__bg">
                <div class="home__cover" style="background: url('static/img/home/home__bg4.jpg') center center / cover no-repeat;"></div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12 n-p-l">
                        <h1 class="home__title">Meus <b>veículos</b> <i v-if="preloader" class="fas fa-spinner fa-pulse fa-1x"></i></h1>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

import vehicleService from '../services/vehicles.service'

export default {

  components: {},

  data: () => {
    return {
        products: [],
        preloader: false
    }
  },
  methods: {
    async getMyVehicles () {
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

  },

  updated () {

  },

  mounted () {
    vehicleService.getAll()
  }
}
</script>

<style scoped>
    .carrousel-container {margin-left: auto;margin-right: auto;position: relative;list-style: none;padding: 0;overflow: hidden;}
    .swiper-wrapper{display: inline-flex;}
    .home__cover{height: 100%;}
    .home__carousel .item{float: left;}
    .home__bg {top: -24px;}

    @media (min-width: 320px) {
        .home__carousel .item{padding: 0 15px 0 15px;}
        .btn-see-more{padding-bottom: 30px;}
    }
    @media (min-width: 425px) {
        .home__carousel .item{padding: 0 0 0 0;}
    }
</style>
