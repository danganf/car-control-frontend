<template>
    <div class="price">
        <div class="price__item price__item--first"><span>Basic</span><span><i class="far vehicle-edit cursor-pointer fa-edit"></i></span></div>
        <div class="price__item"><span>7 days</span></div>
        <div class="price__item"><span>720p Resolution</span></div>
        <a href="#" class="price__btn">Selecionar</a>
    </div>
</template>

<script>
    export default {
        props:{
            vehicle: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .price:hover{
        border-top: 1.2px solid var(--color-line-1);
    }
</style>
