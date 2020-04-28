<template>
  <DashboardContainer>
    <Sidebar>
      <SidebarOptions />
    </Sidebar>
    <DashboardContent>
      <NavbarContainer>
        <NavbarProfile />
      </NavbarContainer>
      <nuxt-child></nuxt-child>
    </DashboardContent>
  </DashboardContainer>
</template>

<script>
import DashboardContainer from "../dashboard/dashboard-container";
import DashboardContent from "../dashboard/dashboard-content";
import Sidebar from "../../components/sidebar/sidebar";
import SidebarOptions from "../../components/sidebar/options";
import NavbarContainer from "../navbar/navbar-container";
import NavbarProfile from "../navbar/navbar-profile";

export default {
  name: "PageDashboard",
  layout: "default",
  components: {
    DashboardContainer,
    DashboardContent,
    Sidebar,
    SidebarOptions,
    NavbarContainer,
    NavbarProfile
  }
};
</script>