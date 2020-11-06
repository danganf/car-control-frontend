<template>
    <div id="app">
        <c-header></c-header>
        <transition name="moveInUp">
            <router-view :key="$route.fullPath"></router-view>
        </transition>
        <c-footer></c-footer>
    </div>
</template>

<script>
import CHeader from './components/Header'
import CFooter from './components/Footer'
export default {
  name: 'App',
  components: { CHeader, CFooter }
}
</script>

<style>

</style>
