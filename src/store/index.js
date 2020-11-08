import Vue from 'vue'
import Vuex from 'vuex'

import Fuel from '@/store/fuel';

Vue.use(Vuex);

const modules = { Fuel };

export default new Vuex.Store({ modules } )
