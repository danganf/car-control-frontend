<template>
    <div id="app">
        <c-header></c-header>
        <transition name="moveInUp">
            <router-view :key="$route.fullPath"></router-view>
        </transition>
        <vue-snotify></vue-snotify>
        <c-footer></c-footer>
    </div>
</template>

<script>

import store from '@/store'

export default {
  name: 'App',
  store
}
</script>

<style>

</style>
