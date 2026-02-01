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
        padding: 28px 32px;
        margin: 0 12px;
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 16px;
        flex-shrink: 0;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

        img {
            height: 70px;
            width: auto;
            max-width: 140px;
            object-fit: contain;
            filter: grayscale(100%) brightness(0.8);
            opacity: 0.7;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover {
            transform: translateY(-8px) scale(1.02);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(0, 102, 255, 0.3);
            box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.3),
                0 0 30px rgba(0, 102, 255, 0.15);

            img {
                filter: grayscale(0%) brightness(1);
                opacity: 1;
            }
        }

        &--white-bg {
            background: rgba(255, 255, 255, 0.95);
            border-color: rgba(255, 255, 255, 0.2);

            img {
                height: 55px;
                max-width: 110px;
                filter: grayscale(100%);
                opacity: 0.8;
            }

            &:hover {
                background: white;
                box-shadow: 
                    0 20px 40px rgba(0, 0, 0, 0.2),
                    0 0 30px rgba(0, 102, 255, 0.2);

                img {
                    filter: grayscale(0%);
                    opacity: 1;
                }
            }
        }
    }
</style>