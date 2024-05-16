<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MyContainer'
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 2rem;
  background: var(--bg-gradient);
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
}
</style>