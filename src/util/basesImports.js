
import Vue from 'vue'
import Snotify from 'vue-snotify'
import VueSwal from 'vue-swal'
import Vuelidate from 'vuelidate'
import CHeader from '@components/Header'
import CFooter from '@components/Footer'

import 'vue-snotify/styles/material.css'

window.Vue = Vue
window.eventBus = new Vue()

Vue.use(Snotify, {toast: {showProgressBar: true, timeout: 3000, pauseOnHover: true, position: 'rightTop'}})
Vue.use(VueSwal)
Vue.use(Vuelidate)

Vue.component('CHeader', CHeader)
Vue.component('CFooter', CFooter)
