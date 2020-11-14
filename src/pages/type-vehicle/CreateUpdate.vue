<template>
    <div>
        <section class="section section--first section--bg">
            <div class="owl-carousel home__bg">
                <div class="home__cover" :style="`background: url('static/img/home/home__bg2.jpg') center center / cover no-repeat;`"></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section__wrap">
                            <h2 class="section__title">Novo tipo veículo</h2>
                        </div>
                    </div>
                </div>
            </div>
	    </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="sign__content crud__content">
						<!-- registration form -->
						<form action="#" class="sign__form">

							<div class="sign__group">
                                <label for="name">Nome*</label>
								<input type="text" class="sign__input" id="name" name="name"
                                v-model.trim='$v.typeV.name.$model'
                                @blur='mix_inputCheckIsValid($v.typeV.name, $event)'
                                placeholder="Gasolina">
                                <span class="input__error" v-if='$v.typeV.name.$model && $v.typeV.name.$invalid'>Obrigatório e mínimo de 3 caracteres</span>

							</div>

							<div class="sign__group">
                                <label for="wheels">Qtd de rodas: <strong>{{typeV.wheels}}</strong></label>
								<input type="range" min="2" max="30" step="1" class="sign__input slider"
                                v-model.trim='$v.typeV.wheels.$model'
                                id="wheels" name="wheels">
							</div>

							<button class="sign__btn" type="button">
                                <i class="fa fa-save"></i> Registrar
                            </button>

						</form>
						<!-- registration form -->
					</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { inputCheckIsValid } from "@/mixins/validate"
import { mixMsgAwait, MixMsgNotify } from "@/mixins/helpers"
import { TypeVehicleModel as Model } from '@/models/type-vehicle'

export default {

    data: () => {
        return {
            typeV: new Model()
        }
    },

    methods: {

    },

    mixins: [
        validationMixin,
        Model.validate(),
        inputCheckIsValid,
        mixMsgAwait,
        MixMsgNotify
    ],

    updated () {
        this.typeV.wheels = parseInt(this.typeV.wheels)
    },

    mounted() {

    }
}
</script>

<style scoped>
    .slidecontainer {width: 100%;}
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
