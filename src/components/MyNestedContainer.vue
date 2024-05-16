<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MyNestedContainer'
}
</script>

<style scoped>
.container {
  padding: 40px;

  background: var(--bg-gradient);
  color: #ccc;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.8);
}
</style>