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
                            <h2 class="section__title">Fabricantes</h2>
                            <ul class="breadcrumb">
							    <li class="breadcrumb__item">
                                    <router-link :to="{ name: 'manufacture-new', param: {} }" tag="button" role="button" class="filter__btn">Criar novo</router-link>
                                </li>
						    </ul>
                        </div>
                    </div>
                </div>
            </div>
	    </section>

        <section class="section">
            <div class="container">
                <div class="row"  v-show="!preloader">
                    <div class="col-12">
                        <c-paginator :route_name="'manufactures'" :key="'paginator-top'"
                            :total_pages="paginate.page_count" :total_results="paginate.items_count"
                            :limit="limit" :current_page="paginate.page_current"></c-paginator>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="accordion" id="accordion">
                            <div style="text-align: center;"><i v-if="preloader" class="fas fa-spinner preloader fa-pulse fa-1x"></i></div>
                            <div class="row">
                                <div class="col-12 col-md-3 col-lg-3" v-for="(row, idx) in list" :key="`div-${idx}`">
                                    <card-manufacture :data="row" @emit-remove="emitRemove" :key="`c-card-${idx}`"></card-manufacture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row"  v-show="!preloader">
                    <div class="col-12">
                        <c-paginator :route_name="'manufactures'" :key="'paginator-bottom'"
                            :total_pages="paginate.page_count" :total_results="paginate.items_count"
                            :limit="limit" :current_page="paginate.page_current"></c-paginator>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'
import CardManufacture from '@components/card/Manufacture'
import CPaginator from '@components/Paginator'

export default {

    components: {CardManufacture, CPaginator},

    data: () => {
        return {
            limit: 20,
            current_page: 0
        }
    },
    methods: {
        ...mapActions( 'Manufacture', [ 'getAll' ] ),
        emitRemove(id){
            //src/components/card/Manufacture.vue
            const idx = window._.findLastIndex(this.list, {id})
            this.list.splice(idx,1)
        }
    },
    updated () {

    },

    computed: {
        ...mapState( 'Manufacture', [ 'list', 'paginate', 'preloader' ] )
    },

    mounted () {
        if( this.$route.params.page ){
            this.current_page = parseInt( this.$route.params.page );
        } else {
            this.current_page = 1;
        }
        this.getAll({page: this.current_page})
    }
}
</script>

<style>
    .section__title button{float: right;}
    .breadcrumb__item:before{display: none;}
    .accordion{height: auto;max-height: none;}
    .price__item--first{font-size: 20px !important;}

    @media (min-width: 320px) {

    }
    @media (min-width: 425px) {

    }
</style>
