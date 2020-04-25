<template>
  <DashBoard>
    <Sidebar>
      <SidebarOptions />
    </Sidebar>
    <DashBoardContent>
      <Navbar>
        <NavbarProfile />
      </Navbar>
      <nuxt-child></nuxt-child>
    </DashBoardContent>
  </DashBoard>
</template>

<script>
import DashBoard from "../../components/dashboard/dashboard";
import DashBoardContent from "../../components/dashboard/content";
import Sidebar from "../../components/sidebar/sidebar";
import SidebarOptions from "../../components/sidebar/options";
import Navbar from "../../components/navbar/navbar";
import NavbarProfile from "../../components/navbar/navProfile";

export default {
  name: "DashboardPage",
  layout: "default",
  components: {
    DashBoard,
    DashBoardContent,
    Sidebar,
    SidebarOptions,
    Navbar,
    NavbarProfile
  }
};
</script>

<style>
</style>