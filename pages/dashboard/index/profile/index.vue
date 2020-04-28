<template>
  <section>
    <nuxt-child></nuxt-child>
    <PageDashboardProfile />
  </section>
</template>

<script>
import PageDashboardProfile from "../../../../components/dashboard/profile/index";

export default {
  name: "RoutePageDashboardProfile",
  components: {
    PageDashboardProfile
  }
};
</script>