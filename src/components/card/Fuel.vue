<template>
    <div class="price">
        <div class="price__item price__item--first">
            <span>
                {{data.name}} <small v-if="data.unity"> - ({{data.unity}})</small>
                <p v-if="data.description" class="description">{{data.description}}</p>
                <p v-else class="description">sem descrição</p>
            </span>
        </div>
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
            data: {
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
    .description{
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
