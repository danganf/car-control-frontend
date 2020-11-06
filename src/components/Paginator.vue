<template>
    <div>
        <ul class="paginator" v-if="total_results > 0">
            <li v-if="current_page != 1" class="paginator__item paginator__item--prev">
                <a @click="clickPage(current_page - 1)"><i class="icon ion-ios-arrow-back"></i></a>
            </li>

            <li v-if="start > 1" class="paginator__item"><a @click="clickPage(1)">1</a></li>
            <li v-if="start > 1" class="paginator__item"><a class="no-link">...</a></li>

            <li v-for="i in range( start, end )" :key="`page-item`+i"  :class="{ 'paginator__item--active' : (i === current_page) }" class="paginator__item">
                <a @click="clickPage(i)">{{i}}</a>
            </li>

            <li v-if="end < last" class="paginator__item"><a class="no-link">...</a></li>
            <li v-if="end < last" class="paginator__item"><a @click="clickPage(last)">{{last}}</a></li>

            <li v-if="current_page != last" class="paginator__item paginator__item--next">
                <a @click="clickPage(current_page +1)">
                    <i class="icon ion-ios-arrow-forward"></i>
                </a>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
  props: {
    route_name: {
      type: String,
      required: true
    },
    current_page: {
      type: Number,
      default: 0
    },
    total_pages: {
      type: Number,
      default: 0
    },
    total_results: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 0
    },
    links: {
      type: Number,
      default: 2
    }
  },

  data () {
    return {
      last: null,
      start: null,
      end: null
    }
  },

  methods: {
    range: function (start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    },
    clickPage (page) {
      if (this.current_page !== page) {
        this.$router.push({
          name: this.route_name, 
          params: {
            type: this.$route.params.media,
            page: page
          }
        })
      }
    }
  },

  updated () {
    // total_results(){
    this.last = this.total_pages
    this.start = ((this.current_page - this.links) > 0) ? this.current_page - this.links : 1
    this.end = ((this.current_page + this.links) < this.last) ? this.current_page + this.links : this.last
    // }
  }
}
</script>

<style scoped>
    @media( min-width: 768px ) {
        .paginator {width: auto;}
    }
    @media( min-width: 1024px ) {
        .paginator {width: 70%;}
    }
    @media( min-width: 1440px ) {
        .paginator {width: 50%;}
    }

    .paginator__item a, .no-link{color: rgba(255,255,255,0.5) !important;cursor: pointer;}
    .paginator__item--active a{color:white !important;cursor: default;}
    .no-link{cursor:default !important;}
</style>
