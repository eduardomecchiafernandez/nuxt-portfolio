<template>
    <div class="brand">
        <a :href="brand.website" target="_blank">
            <b-img 
                fluid 
                :src="require('~/' + brand.image)" 
                :alt="'Brand image for ' + brand.name"
                rounded="true"
                thumbnail
                width="500"
                center
            ></b-img>
        </a>

        <div class="brand__title">
            <b>Title:&nbsp;</b> <span>{{ brand.name }}</span>
        </div>

        <div>
            <b>Description:&nbsp;</b> <span>{{ brand.description }}</span>
        </div>

        <div>
            <b>Link:&nbsp;</b> <a :href="brand.website" target="_blank">Click here</a>
        </div>
    </div>
</template>

<script>
    import Brand from './models/Brand';

    export default {
        name: 'BrandCard',

        props: {
            brand: {
                type: Brand,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .brand {
        margin-bottom: 50px;
        background-color: #0d73d3cc;
        border-radius: 5px;
        padding: 30px;
        max-width: 350px;
        color: #a6e6ff;

        ul {
            list-style: none;
            padding: 0;
        }
    
        &__title {
            margin-top: 30px;
        }
    }

    span, li {
        color: white;
    }

    a {
        font-weight: bold;
        color: white;
    }

    b {
        color: #a6e6ff;
    }
</style>