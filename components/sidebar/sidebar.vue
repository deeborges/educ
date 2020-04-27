<template>
  <aside class="gce__sidebar--container">
    <article class="gce__sidebar--content">
      <slot></slot>
    </article>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style>
.gce__sidebar--container {
  background-color: #3b2162;
  display: grid;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  width: 15vw;
}

.gce__sidebar--content {
  display: grid;
  position: relative;
}
</style>