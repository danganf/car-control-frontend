import Vue from 'vue'
import Vuex from 'vuex'

import Fuel from '@/store/fuel';
import TypeVehicle from '@/store/type-vehicle';
import Manufacture from '@/store/manufacture';

Vue.use(Vuex);

const modules = { Fuel, TypeVehicle, Manufacture };

export default new Vuex.Store({ modules } )
