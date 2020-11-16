<template>
    <div class="price">
        <div class="price__item price__item--first">
            <span>
                {{data.name}}
                <p v-if="data.wheels" class="wheels">{{data.wheels}} rodas</p>
                <p v-else class="wheels">Nº rodas não informado</p>
            </span>
        </div>
        <div class="price__item price__item--btn">
            <span></span>
            <span>
                <i @click="$router.push({name:'type-vehicles-edit', params: { uid: data.id }})" class="far type-vehicle-edit cursor-pointer fa-edit"></i>
                <i @click="delet" class="far type-vehicle-edit cursor-pointer fa-trash-alt"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            data: {
                type: Object,
                required: true
            }
        },
        methods:{
            async delet(){
                this.$swal({
                    title: "Você tem certeza?",
                    text: "Uma vez deletado, essa informação não poderá ser recuperada!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        return window.axios.delete( process.env.URL_API_BACKEND + 'type-vehicle/' + this.data.id )
                    }
                    throw null
                }).then(result => {
                    if( result.status !== 400 ) {
                        this.$emit('emit-remove', this.data.id)
                        swal(result.data.message, {icon: "success"})
                    } else {
                        swal(result.data.message, {icon: "error"})
                    }
                }).catch(err => {
                    if (err) {
                        swal("Ops!", "Operação falhou!", "error")
                    } else {
                        swal.stopLoading()
                        swal.close()
                    }
                })
            }
        },

        mounted () {

        }
    }
</script>

<style scoped>
    .price:hover{
        border-top: 1.2px solid var(--color-line-1);
    }
    .wheels{
        font-size: 0.6em;
        color: var(--color-font-1);
        -webkit-text-fill-color: var(--color-font-1);
        margin: 0;
    }
    .btn{
        font-size: 1.3em;
        font-weight: 400;
        color: var(--color-line-2);
    }
</style>
