<template>
    <div class="price">
        <div class="price__item price__item--first"><span>Basic</span></div>
        <div class="price__item"><span>7 days</span></div>
        <div class="price__item"><span>720p Resolution</span></div>
        <div class="price__item price__item--btn">
            <span></span>
            <span>
                <i class="far vehicle-edit cursor-pointer fa-edit"></i>
                <i class="far vehicle-edit cursor-pointer fa-trash-alt"></i>
            </span>
        </div>
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
    .btn{
        font-size: 1.3em;
        font-weight: 400;
        color: var(--color-line-2);
    }
</style>
