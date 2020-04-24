<template>
  <aside class="gce__sidebar--container bg--roxo_medio cl--cinza">
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
  position: fixed;
  width: 20vw;
  height: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
}

.gce__sidebar--content {
  display: grid;
  position: relative;
}
</style>