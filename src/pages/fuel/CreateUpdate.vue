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
						<form action="#" class="sign__form">

							<div class="sign__group">
                                <label for="name">Nome*</label>
								<input type="text" class="sign__input" id="name" name="name" placeholder="Gasolina">
							</div>

							<div class="sign__group">
                                <label for="unity">Unidade padrão*</label>
								<input type="text" class="sign__input" id="unity" name="unity" placeholder="Litro">
							</div>

                            <div class="sign__group">
                                <label for="description">Descrição</label>
								<input type="text" class="sign__input" id="description" name="description" placeholder="">
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
export default {

    data: () => {
        return {

        }
    },

    methods: {

    },

    updated () {

    },

    mounted() {

    }
}
</script>

<style scoped>

</style>
