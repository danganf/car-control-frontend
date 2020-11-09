import Vue from 'vue'
import Vuex from 'vuex'

import Fuel from '@/store/fuel';
import TypeVehicle from '@/store/type-vehicle';

Vue.use(Vuex);

const modules = { Fuel, TypeVehicle };

export default new Vuex.Store({ modules } )
