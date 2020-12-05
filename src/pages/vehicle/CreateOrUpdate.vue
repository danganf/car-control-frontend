<template>
    <div>
        <h1>TESTE</h1>
    </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'
import store from '@/store';

export default {
    propos: [],

    data() {
        return {

        }
    },

    methods:{
        ...mapActions('TypeVehicle', { getAllTypesVehicles : 'getAll' } ),
        ...mapActions('Fuel', { getAllFuel : 'getAll' } ),
        ...mapActions('Manufacture', { getAllManufacture : 'getAll' } ),
    },

    computed: {
        ...mapState( 'TypeVehicle', { listTypes : 'list' } ),
        ...mapState( 'Fuel', { listFuels : 'list' } ),
        ...mapState( 'Manufacture', { listManufacture : 'list' } )
    },

    mounted () {
        this.$store = store;
        this.getAllTypesVehicles()
        this.getAllFuel()
        this.getAllManufacture()
    }

}
</script>

<style scoped>

</style>
