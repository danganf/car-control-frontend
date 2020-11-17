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
                            <h2 class="section__title">Novo Combutível</h2>
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
						<form action="#" class="sign__form" v-on:submit.stop.prevent="createOrUpdate()">

							<div class="sign__group">
                                <label for="name">Nome*</label>
								<input type="text" class="sign__input" id="name" name="name" minlength="3" maxlength="30"
                                v-model.trim='$v.fuel.name.$model'
                                @blur='mix_inputCheckIsValid($v.fuel.name, $event)'
                                placeholder="Gasolina">
                                <span class="input__error" v-if='$v.fuel.name.$model && $v.fuel.name.$invalid'>Obrigatório e mínimo de 3 caracteres</span>
							</div>

							<div class="sign__group">
                                <label for="unity">Unidade padrão*</label>
								<input type="text" class="sign__input" id="unity" name="unity" minlength="1" maxlength="20"
                                v-model.trim='$v.fuel.unity.$model'
                                @blur='mix_inputCheckIsValid($v.fuel.unity, $event)'
                                placeholder="Litro">
                                <span class="input__error" v-if='$v.fuel.unity.$model && $v.fuel.unity.$invalid'>Obrigatório e máximo de 20 caracteres</span>
							</div>

                            <div class="sign__group">
                                <label for="description">Descrição</label>
								<input type="text" class="sign__input" id="description" name="description" minlength="5" maxlength="50"
                                v-model.trim='$v.fuel.description.$model'
                                @blur='mix_inputCheckIsValid($v.fuel.description, $event)'
                                placeholder="">
                                <span class="input__error" v-if='$v.fuel.description.$model && $v.fuel.description.$invalid'>Mínimo de 5 caracteres</span>
							</div>

                            <div class="sign__group">
                                <transition name="fade">
                                    <div v-if="msgError" class="session-error" role="alert"><strong>Ops!</strong> {{msgError}}</div>
                                </transition>
                            </div>

							<button ref="btn" class="sign__btn" type="submit" :disabled="disabled">
                                <i v-if="!preloader" class="fa fa-save"></i>
                                <i v-else class="fa fa-spinner fa-pulse fa-1x preloader-auth"></i>
                                {{action}}
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
import { getElemData } from "@/util/helpers"
import { FuelModel as Model } from '@/models/fuel'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {

    data: () => {
        return {
            fuel: new Model(),
            action: 'Registrar',
            uid: null
        }
    },

    methods: {
        ...mapActions( 'Fuel', [ 'getOne' ] ),
        ...mapMutations('Fuel', ['SET_PRELOADER','SET_ERROR','SET_LIST']),
        async createOrUpdate(){
            if( !this.preloader ) {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.mix_setMsgAwait( 'Verifique os campos obrigatórios' )
                    return
                }

                this.SET_PRELOADER(true)
                this.SET_ERROR(null)
                try{
                    let result
                    if( !this.uid ){
                        result = (await window.axios.post( process.env.URL_API_BACKEND + 'fuel', this.fuel.toObjData() ) )
                    } else {
                        result = (await window.axios.put( process.env.URL_API_BACKEND + 'fuel/' + this.uid, this.fuel.toObjData() ) )
                    }
                    if( result.status !== 400 ) {
                        this.mix_msgNotify( result.data.message )
                        this.SET_PRELOADER(false)
                        this.SET_LIST([])
                        this.fuel.resetAttr()
                        this.$router.push({name:'fuels'})
                    }
                } catch(error){
                    this.SET_PRELOADER(false)
                    this.SET_ERROR(error)
                }
            }
        },
        init(){
            this.$v.$touch()
            this.disabled = this.$v.$invalid
        }
    },

    mixins: [
        validationMixin,
        Model.validate(),
        inputCheckIsValid,
        mixMsgAwait,
        MixMsgNotify
    ],

    watch: {
        list: function (val) {
            if( window._.size(val) > 0 ){
                this.fuel.setData(val)
                this.action = 'Atualizar'
            } else {
                this.fuel.resetAttr()
            }
        }
    },

    computed: {
        ...mapState( 'Fuel', [ 'preloader', 'msgError', 'list' ] )
    },

    updated () {
        this.init()
    },

    mounted() {
         this.init()
         if( typeof this.$route.params.uid !== 'undefined' ){
            this.getOne({id: this.$route.params.uid})
            this.uid = this.$route.params.uid
        }
    }
}
</script>

<style scoped>

</style>
