<template>
  <a 
    :href="brand.website" 
    target="_blank" 
    :class="['brand-icon', { 'brand-icon--white-bg': brand.needsWhiteBackground }]" 
    :title="brand.name"
  >
    <img :src="imageSrc" :alt="brand.name" />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Brand } from '~/types'

const props = defineProps<{
  brand: Brand
}>()

// Dynamic image imports for Nuxt 3 - only match image files
const imageModules = import.meta.glob('~/assets/images/**/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' })
const svgModules = import.meta.glob('~/assets/svg/**/*.svg', { eager: true, import: 'default' })

const imageSrc = computed(() => {
  const imagePath = props.brand.image.replace('assets/', '')
  
  // Try to find the image in image modules
  for (const [key, value] of Object.entries(imageModules)) {
    if (key.includes(imagePath)) {
      return value as string
    }
  }
  
  // Try to find in SVG modules
  for (const [key, value] of Object.entries(svgModules)) {
    if (key.includes(imagePath)) {
      return value as string
    }
  }
  
  return `/${props.brand.image}`
})
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
