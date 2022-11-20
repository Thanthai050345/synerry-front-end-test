<template>
  <div class="contact_person">
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
    <div>Dashboard Page</div>
  </div>
</template>
  
<script>
import Vue from "vue";
export default {
  name: "DashboardView",
  data() {
    return {
      menuTree: [
        {
          label: "Dashboard",
          icon: "AppstoreOutlined",
          key: "dashboardMenu",
          path: "/",
        },
        {
          label: "Contact Person List",
          icon: "IdcardOutlined",
          key: "contactPersonListMenu",
          path: "/contact-person-list",
        },
        {
          label: "Report",
          icon: "ReconciliationOutlined",
          key: "reportMenu",
          path: "/report",
        },
      ],
    };
  },
  components: {},
  create() {
    const app = Vue.createApp({});
    app.config.globalProperties.$myGlobalVariable = "globalVariable";
  },
};
</script>

<style scoped>
</style>
  