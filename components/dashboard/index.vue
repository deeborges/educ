<template>
  <DashboardContainer>
    <Sidebar>
      <SidebarOptions />
    </Sidebar>
    <DashboardContent>
      <Navbar>
        <NavbarProfile />
      </Navbar>
      <nuxt-child></nuxt-child>
    </DashboardContent>
  </DashboardContainer>
</template>

<script>
import DashboardContainer from "../dashboard/dashboard-container";
import DashboardContent from "../dashboard/dashboard-content";
import Sidebar from "../../components/sidebar/sidebar";
import SidebarOptions from "../../components/sidebar/options";
import Navbar from "../../components/navbar/navbar";
import NavbarProfile from "../../components/navbar/navProfile";

export default {
  name: "PageDashboard",
  layout: "default",
  components: {
    DashboardContainer,
    DashboardContent,
    Sidebar,
    SidebarOptions,
    Navbar,
    NavbarProfile,
  }
};
</script>