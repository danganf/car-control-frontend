<template>
    <div>
        <section class="home">

            <div class="owl-carousel home__bg">
                <div class="home__cover" style="background: url('static/img/home/home__bg2.jpg') center center / cover no-repeat;"></div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12 n-p-l">
                        <h1 class="home__title">
                            Meus <b>veículos</b>
                            <i v-if="preloader" class="fas fa-spinner fa-pulse fa-1x"></i>
                            <button class="filter__btn new-vehicle" type="button" @click="openModal">Criar novo</button>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">&nbsp;</div>
                </div>
                <div class="row">
                    <div v-if="!vehicles.length" class="col-12">
                        <h2 class="feature__title">
                            Nenhum veículo cadastrado...
                        </h2>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3" v-for="(vehicle, idx) in vehicles" :key="`div-vehicle-${idx}`">
                        <card-vehicle :vehicle="vehicle" :key="`c-vehicle-card-${idx}`"></card-vehicle>
				    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

import CardVehicle from '@components/card/Vehicle'
import CVehicleCrud from '@pages/vehicle/CreateOrUpdate'

export default {

  components: {CardVehicle,CVehicleCrud},

  data: () => {
    return {
        vehicles: [],
        preloader: false
    }
  },
  methods: {
      openModal(){
          this.$modal.show(CVehicleCrud ,{},{
              height: 'auto',
          })
      }
  },

  updated () {

  },

  mounted () {

  }
}
</script>

<style scoped>
    .new-vehicle{display: inline;position: absolute;right: 0;}
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
