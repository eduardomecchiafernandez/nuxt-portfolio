<template>
  <nav :class="['navbar', { 'navbar--scrolled': isScrolled }]">
    <div class="navbar__container">
      <a href="#" class="navbar__logo" @click.prevent="scrollToTop">
        <span class="logo-text">Eduardo</span>
      </a>

      <button 
        class="navbar__toggle" 
        @click="toggleMenu" 
        :class="{ 'active': isMenuOpen }" 
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul :class="['navbar__menu', { 'navbar__menu--open': isMenuOpen }]">
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#brands" @click="closeMenu">Brands</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#contact" class="navbar__cta" @click="closeMenu">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &--scrolled {
    padding: 12px 0;
    background: rgba(10, 10, 20, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  &__container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      padding: 0 20px;
    }
  }

  &__logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 40px;

    .logo-text {
      font-family: var(--font-heading);
      font-size: 22px;
      font-weight: 600;
      color: white;
      padding: 6px 14px;
      border: 2px solid #8b5cf6;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    &:hover .logo-text {
      background: rgba(139, 92, 246, 0.1);
      border-color: #a78bfa;
    }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: white;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    &.active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }

    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 40px;
    list-style: none;
    margin: 0;
    padding: 0;

    li a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #0066ff, #8b5cf6);
        transition: width 0.3s ease;
      }

      &:hover {
        color: white;

        &::after {
          width: 100%;
        }
      }
    }

    @media screen and (max-width: 768px) {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      max-width: 300px;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      gap: 32px;
      background: rgba(10, 10, 20, 0.98);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      &--open {
        right: 0;
      }

      li a {
        font-size: 20px;
      }
    }
  }

  &__cta {
    padding: 10px 24px !important;
    background: linear-gradient(135deg, #0066ff 0%, #0048c5 100%);
    border-radius: 50px;
    color: white !important;
    transition: all 0.3s ease !important;

    &::after {
      display: none !important;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 102, 255, 0.4);
    }
  }
}
</style>
