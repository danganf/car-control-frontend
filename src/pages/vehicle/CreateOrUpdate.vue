<template>
    <div>
        <div class="title">
            Novo Carro
            <div class="new-vehicle">
                <button class="filter__btn" type="button">Criar</button>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="crud">
                        <form action="#" class="form__cad">
                            <div class="group">
                                <label for="template">Modelo*</label>
                                <input type="text" class="sign__input col-12" id="template" name="template" minlength="3" maxlength="30" placeholder="">
                            </div>
                            <div class="group">
                                <label for="year">Ano do carro: <strong>{{year}}</strong></label>
                                <input type="range" min="1900" max="2022" step="1" class="sign__input slider"
                                v-model.trim='year'
                                id="year" name="year">
                            </div>
                            <div class="group">
                                <label for="manufacture">Tipo do veículo*</label>
                                <model-select :options="listToSelectTypes" v-model="typeVehicle"
                                placeholder="selecione">
                                </model-select>
                            </div>
                            <div class="group">
                                <label for="manufacture">Fabricante*</label>
                                <model-select :options="listToSelectManufactures" v-model="manufacture"
                                placeholder="selecione">
                                </model-select>
                            </div>
                            <div class="group">
                                <label for="manufacture">Combustivel*</label>
                                <model-select :options="listToSelectFuels" v-model="fuel"
                                placeholder="selecione">
                                </model-select>
                            </div>
                            <div class="group">
                                <div class="row">
                                    <div class="col-6">
                                        <label for="chassi">Chassi</label>
                                        <input type="text" class="sign__input col-12" id="chassi" name="chassi" minlength="3" maxlength="30" placeholder="">
                                    </div>
                                    <div class="col-6">
                                        <label for="Renavam">Renavam</label>
                                        <input type="text" class="sign__input col-12" id="Renavam" name="Renavam" minlength="3" maxlength="30" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <label for="obs">Obs</label>
                                <input type="text" class="sign__input col-12" id="obs" name="obs" placeholder="">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'
import store from '@/store'
import { ModelSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'

export default {
    propos: [],

    components: {
        ModelSelect
    },

    data() {
        return {
            year: new Date().getFullYear()-2,
            typeVehicle: null,
            manufacture: null,
            fuel: null,
        }
    },

    methods:{
        ...mapActions('TypeVehicle', { getAllTypesVehicles : 'getAll' } ),
        ...mapActions('Fuel', { getAllFuel : 'getAll' } ),
        ...mapActions('Manufacture', { getAllManufacture : 'getAll' } ),
    },

    computed: {
        ...mapGetters( 'TypeVehicle', { listToSelectTypes : 'listToSelect' } ),
        ...mapGetters( 'Fuel', { listToSelectFuels : 'listToSelect' } ),
        ...mapGetters( 'Manufacture', { listToSelectManufactures : 'listToSelect' } )
    },

    mounted () {
        this.getAllTypesVehicles()
        this.getAllFuel()
        this.getAllManufacture()
    },

    created() {
        this.$store = store
    }

}
</script>

<style scoped>
    .title{
        background-color: #004d99;
        padding: 20px 10px;
        text-transform: uppercase;
        -webkit-box-shadow: 0 0 15px 0 rgba(0,0,0,1.0) !important;
        box-shadow: 0 0 15px 0 rgba(0,0,0,1.0) !important;
    }
    .crud{
        display: flex;
        align-items: center;
        margin: 0 auto;
        width: 90%;
    }
    .form__cad{
        padding: 50px 0 50px 35px;
        width: 90%;
    }
    .form__cad label{
        margin-right: 10px;
        display: block;
    }

    .sign__input {width: 100%;}
    .group{margin-bottom: 15px;}

    .sign__content {
        display: block;
        width: 86%;
        min-height: 100vh;
    }

    .new-vehicle{float: right;margin-top: -8px;margin-right: 10px;}
    .new-vehicle button{width: 90px;height: 40px;}
    .new-vehicle button:hover{
        -webkit-box-shadow: 0 0 20px 0 rgba(255,88,96,0.5);
        box-shadow: 0 0 20px 0 rgba(77, 160, 255,0.5);
    }

    input[type=range]{padding: 0 3px !important;}

    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 25px;
        background: rgba(255,255,255,0.5);
        outline: none;
        opacity: 0.4;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider:hover {
        opacity: 0.7;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 20px;
        background: #28282d;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 20px;
        background: #28282d;
        cursor: pointer;
    }

</style>
