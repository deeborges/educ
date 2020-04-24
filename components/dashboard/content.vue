<template>
  <section class="gce__dashboard--container">
    <article class="gce__dashboard--content bg--rosa">
      <slot></slot>
    </article>
  </section>
</template>

<script>
export default {
  name: 'DashboardContent'
}
</script>

<style>
.gce__dashboard--container {
  display: grid;
  grid-template-columns: 20vw auto;
  height: 100vw;
  position: relative;
}

.gce__dashboard--content {
  grid-column-start: 2;
  position: relative;
}
</style>