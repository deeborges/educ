<template>
  <section>
    <PageDashboardProfileSearch />
    <PageDashboardProfile />
  </section>
</template>

<script>

import PageDashboardProfile from "../../../../components/dashboard/profile/index";
import PageDashboardProfileSearch from '../../../../components/dashboard/profile/search/index';

export default {
  name: "RoutePageDashboardProfile",
  components: {
    PageDashboardProfile,
    PageDashboardProfileSearch
  }
};
</script>