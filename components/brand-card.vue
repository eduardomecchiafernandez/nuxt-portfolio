<template>
    <a :href="brand.website" target="_blank" :class="['brand-icon', { 'brand-icon--white-bg': brand.needsWhiteBackground }]" :title="brand.name">
        <img 
            :src="require('~/' + brand.image)" 
            :alt="brand.name"
        />
    </a>
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
    .brand-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 25px;
        margin: 0 15px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        flex-shrink: 0;
        border-radius: 12px;

        img {
            height: 90px;
            width: auto;
            max-width: 150px;
            object-fit: contain;
        }

        &:hover {
            transform: scale(1.1) translateY(-5px);
        }

        &--white-bg {
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

            img {
                height: 60px;
                max-width: 120px;
            }

            &:hover {
                box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
            }
        }
    }
</style>