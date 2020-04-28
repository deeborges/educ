<template>
  <main class="gce__dashboard">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style>
@import url("~/assets/dashboard/dashboard-container.css");
</style>