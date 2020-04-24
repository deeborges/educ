<template>
  <main class="gce__dashboard bg--cinza">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'DashBoard'
}
</script>

<style>
.gce__dashboard {
  display: grid;
  grid-template-columns: 1fr;
}
</style>