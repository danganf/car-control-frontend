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
                            <h2 class="section__title">Novo fabricante</h2>
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
								<input type="text" class="sign__input" id="name" name="name"
                                v-model.trim='$v.manufacture.name.$model'
                                @blur='mix_inputCheckIsValid($v.manufacture.name, $event)'
                                placeholder="VOLKSWAGEN">
                                <span class="input__error" v-if='$v.manufacture.name.$model && $v.manufacture.name.$invalid'>Obrigatório e mínimo de 3 caracteres</span>

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
import { ManufactureModel as Model } from '@/models/manufacture'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {

    data: () => {
        return {
            manufacture: new Model(),
            action: 'Registrar',
            uid: null
        }
    },

    methods: {
        ...mapActions( 'Manufacture', [ 'getOne' ] ),
        ...mapMutations('Manufacture', ['SET_PRELOADER','SET_ERROR','SET_DATA']),
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
                        result = (await window.axios.post( process.env.URL_API_BACKEND + 'manufacture', this.manufacture.toObjData() ) )
                    } else {
                        result = (await window.axios.put( process.env.URL_API_BACKEND + 'manufacture/' + this.uid, this.manufacture.toObjData() ) )
                    }
                    if( result.status !== 400 ) {
                        this.mix_msgNotify( result.data.message )
                        this.SET_PRELOADER(false)
                        this.SET_DATA({})
                        this.manufacture.resetAttr()
                        this.$router.push({name:'manufactures'})
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
        data: function (val) {
            if( window._.size(val) > 0 ){
                this.manufacture.setData(val)
                this.action = 'Atualizar'
            } else {
                this.manufacture.resetAttr()
            }
        }
    },

    computed: {
        ...mapState( 'Manufacture', [ 'preloader', 'msgError', 'data' ] )
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
