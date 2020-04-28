<template>
<div>
  <Search />
  <PageDashboard />
</div>
</template>

<script>

import Search from  '../../components/search';
import PageDashboard from "../../components/dashboard/index";

export default {
  name: "RoutePageDashboard",
  components: {
    Search,
    PageDashboard
  }
};
</script>