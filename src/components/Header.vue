<template>
    <header class="header">
        <div class="header__wrap">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header__content">
                            <!-- header logo -->
                            <a href="" class="header__logo">
                                CAR<span class="last">CTR</span>
                            </a>
                            <!-- end header logo -->

                            <!-- header nav -->
                            <ul class="header__nav">
                                <!-- dropdown -->
                                <li class="header__nav-item">
                                    <router-link :to="{ name: 'home'}" role="button" class="header__nav-link">Inicio</router-link>
                                </li>
                                <!-- end dropdown -->

                                <!-- dropdown -->
                                <li class="header__nav-item">
                                    <a class="dropdown-toggle header__nav-link" href="#" role="button">Catalogo</a>
                                    <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuCatalog">
                                        <li><router-link :to="{ name: 'media-list', force: true, params: { media: 'movie' } }" role="button" class="header__nav-link">Filmes</router-link></li>
                                        <li><router-link :to="{ name: 'media-list', force: true, params: { media: 'tv' } }" role="button" class="header__nav-link">Séries</router-link></li>
                                    </ul>
                                </li>
                                <!-- end dropdown -->
                            </ul>
                            <!-- end header nav -->

                            <!-- header auth -->
                            <div class="header__auth">
                                <button class="header__search-btn" id="search-btn" type="button">
                                    <i class="icon ion-ios-search"></i>
                                </button>

                                <a href="#" class="header__sign-in">
                                    <i class="icon ion-ios-log-in"></i>
                                    <span>entrar</span>
                                </a>
                            </div>
                            <!-- end header auth -->

                            <!-- header menu btn -->
                            <button class="header__btn" ref="btnMenuMobile" type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <!-- end header menu btn -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- header search -->
        <form action="#" id="header__search" class="header__search">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header__search-content">
                            <input type="text" placeholder="Procure um filmes e séries de TV">
                            <button type="button">buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <!-- end header search -->
    </header>
</template>

<script>

export default {
  components: {},
  data: () => {
    return {

    }
  },
  methods: {

  },

  mounted () {
    document.getElementById('search-btn').addEventListener('click', function () {
      let element = document.getElementById('header__search')
      if (element.className.indexOf('header__search--active') === -1) {
        element.classList.add('header__search--active')
        element.getElementsByTagName('input')[0].focus()
      } else {
        element.classList.remove('header__search--active')
      }
    }, false)

    this.$refs.btnMenuMobile.addEventListener('click', function () {
      let element = document.getElementsByClassName('header__nav')[0]
      if (element.className.indexOf('header__nav--active') === -1) {
        element.classList.add('header__nav--active')
        this.classList.add('header__btn--active')
      } else {
        element.classList.remove('header__nav--active')
        this.classList.remove('header__btn--active')
      }
    }, false)
  }
}
</script>

<style>
    @media(max-width: 768px){
        .header__nav-item:hover .dropdown-menu{top: -60px;}
    }
</style>
