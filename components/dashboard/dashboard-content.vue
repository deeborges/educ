<template>
  <section class="gce__dashboard--container">
    <article class="gce__dashboard--content">
      <slot></slot>
    </article>
  </section>
</template>

<script>
export default {
  name: "DashboardContent"
};
</script>

<style>
@import url('~/assets/dashboard/dashboard-content.css');
</style>