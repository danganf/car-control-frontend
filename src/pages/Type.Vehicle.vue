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
                            <h2 class="section__title">Tipos de Veículos</h2>
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
                            <div style="text-align: center;"><i v-if="preloader" class="fas fa-spinner preloader fa-pulse fa-1x"></i></div>
                            <div class="row">
                                <div class="col-12 col-md-4 col-lg-4" v-for="(row, idx) in list" :key="`div-type-${idx}`">
                                    <card-types :data="row" :key="`c-type-card-${idx}`"></card-types>
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

import { mapState, mapActions, mapGetters } from 'vuex'
import CardTypes from '@components/card/Type.Vehicle'

export default {

    components: {CardTypes},

    data: () => {
        return {

        }
    },
    methods: {
        ...mapActions( 'TypeVehicle', [ 'getAll' ] ),
    },

    updated () {

    },

    computed: {
        ...mapState( 'TypeVehicle', [ 'list', 'paginate', 'preloader' ] )
    },

    mounted () {
        this.getAll()
        //this.$store.dispatch('Fuel/getAll')
        //console.log('dammoel',this.$store.state.Fuel.list)
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
