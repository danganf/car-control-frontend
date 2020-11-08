<template>
    <div>
        <section class="section section--first section--bg">
            <div class="owl-carousel home__bg">
                <div class="home__cover" style="background: url('static/img/home/home__bg2.jpg') center center / cover no-repeat;"></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section__wrap">
                            <h2 class="section__title">
                                Combutíveis
                                <i v-if="preloader" class="fas fa-spinner fa-pulse fa-1x"></i>
                            </h2>
                            <ul class="breadcrumb">
							    <li class="breadcrumb__item"><button class="filter__btn new-vehicle" type="button">Criar novo</button></li>
						    </ul>
                        </div>
                    </div>
                </div>
            </div>
	    </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="accordion" id="accordion">
                            <div class="row">
                                <div class="col-12 col-md-4 col-lg-4" v-for="(fuel, idx) in fuels" :key="`div-fuel-${idx}`">
                                    <card-fuel :vehicle="fuel" :key="`c-fuel-card-${idx}`"></card-fuel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

import FuelService from '@/services/fuel.service'
import CardFuel from '@components/card/Fuel'

export default {

  components: {CardFuel},

  data: () => {
    return {
        // {},{},{},{},{},{}
        fuels: [{},{},{},{},{},{}],
        preloader: false
    }
  },
  methods: {

  },

  updated () {

  },

  mounted () {
    FuelService.getAll()
  }
}
</script>

<style scoped>
    .home__bg{z-index: 0;}
    .home__cover{height: 100%;}
    .section__title button{float: right;}
    .breadcrumb__item:before{display: none;}
    .accordion{height: auto;max-height: none;}

    @media (min-width: 320px) {

    }
    @media (min-width: 425px) {

    }
</style>
