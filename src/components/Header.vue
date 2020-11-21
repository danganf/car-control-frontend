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
                                    <a class="dropdown-toggle header__nav-link" href="#" role="button">Cadastros</a>
                                    <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuCatalog">
                                        <li><router-link :to="{ name: 'fuels', force: true, params: {} }" role="button" class="header__nav-link">Combustíveis</router-link></li>
                                        <li><router-link :to="{ name: 'type-vehicles', force: true, params: {} }" role="button" class="header__nav-link">Tipo Veículos</router-link></li>
                                        <li><router-link :to="{ name: 'manufactures', force: true, params: {page: 1} }" role="button" class="header__nav-link">Fabricantes</router-link></li>
                                    </ul>
                                </li>
                                <!-- end dropdown -->
                            </ul>
                            <!-- end header nav -->

                            <!-- header auth -->
                            <div class="header__auth">
                                <!-- <button class="header__search-btn" id="search-btn" type="button">
                                    <i class="icon ion-ios-search"></i>
                                </button> -->

                                <!-- <a href="#" class="header__sign-in">
                                    <i class="icon ion-ios-log-in"></i>
                                    <span>entrar</span>
                                </a> -->
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
                            <input type="text" placeholder="Procure">
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

  }
}
</script>

<style>
    @media(max-width: 768px){
        .header__nav-item:hover .dropdown-menu{top: -60px;}
    }
</style>
