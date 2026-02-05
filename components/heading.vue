<template>
  <header>
    <h2>{{ text }}</h2>
    <Divider />
  </header>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 50px;
  
  h2 {
    text-align: center;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 42px;
    color: white;
    letter-spacing: -0.02em;

    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
}
</style>
