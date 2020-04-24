<template>
  <DashBoard>
    <Sidebar>
      <SidebarOptions />
    </Sidebar>
    <DashBoardContent>
      <nuxt-child></nuxt-child>
    </DashBoardContent>
  </DashBoard>
</template>

<script>
import DashBoard from "../../components/dashboard/dashboard";
import DashBoardContent from "../../components/dashboard/content";
import Sidebar from "../../components/sidebar/sidebar";
import SidebarOptions from "../../components/sidebar/options";

export default {
  name: "DashboardPage",
  layout: "default",
  components: {
    DashBoard,
    DashBoardContent,
    Sidebar,
    SidebarOptions
  }
};
</script>

<style>
</style>