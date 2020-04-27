<template>
  <main class="gce__dashboard">
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
  background-color: #e8e8e86b ;
  display: grid;
  grid-template-columns: 1fr;
}
</style>