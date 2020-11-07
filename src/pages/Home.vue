<template>
    <div>
        <section class="home">

            <div class="owl-carousel home__bg">
                <div class="home__cover" style="background: url('static/img/home/home__bg4.jpg') center center / cover no-repeat;"></div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12 n-p-l">
                        <h1 class="home__title">Os mais <b>populares</b> <i v-if="preloader" class="fas fa-spinner fa-pulse fa-1x"></i></h1>
                        <button class="home__nav home__nav--prev" type="button"><i class="icon ion-ios-arrow-round-back"></i></button>
                        <button class="home__nav home__nav--next" type="button"><i class="icon ion-ios-arrow-round-forward"></i></button>
                    </div>

                    <div class="col-12 carrousel-container">
                        <div class="owl-carousel home__carousel swiper-wrapper">
                            <div v-for="(product, idx) in productsPopularity.data" :key="`c-prod-card${idx}`" class="item swiper-slide">
                                <c-prod-card :media-type="productsPopularity.media" :product="product"></c-prod-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-for="(product, idx) in products" :key="`c-prod-card${idx}`" class="section section--bg">
            <div class="content__head">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="section__title">{{product.label}} <i v-if="preloader" class="fas fa-spinner fa-pulse fa-1x"></i></h2>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="(row, idx2) in product.data" :key="`c-prod-card${idx2}`" class="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <!-- <c-prod-card :class-name="''" :media-type="product.media" :product="row"></c-prod-card> -->
                        </div>
                    </div>
                    <div class="col-12 btn-see-more">
                        <a href="#" class="section__btn">Veja +</a>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

export default {

  components: {},

  data: () => {
    return {
        productsPopularity: [],
        products: [],
        preloader: false
    }
  },
  methods: {
    async getProducts () {
        this.preloader = true
        await window.axios.get(process.env.URL_API_BACKEND + 'media/home')
        .then((result) => {
          this.preloader = false
          this.productsPopularity = result.data[0]
          result.data.splice(0, 1)
          this.products = result.data
        }).catch(error => {
          console.log(error)
          this.preloader = false
        })
    }

  },

  updated () {

  },

  mounted () {
    //this.getProducts()
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
