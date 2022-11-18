<template>
  <a-layout :style="{ height: '100%' }">
    <Topbar />
    <a-layout>
      <Sidebar />
      <a-layout>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '0px',
            margin: 0,
            height: '100%',
            overflow: 'auto',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
        <Footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from "vue";
import Topbar from "./components/layouts/Topbar.vue";
import Sidebar from "./components/layouts/Sidebar/Sidebar.vue";
import Footer from "./components/layouts/Footer.vue";

export default defineComponent({
  components: {
    Topbar,
    Sidebar,
    Footer,
  },
});
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.ant-table-pagination-right {
  justify-content: flex-start !important;
}
.ant-table-thead > tr > th {
  background: #ffffff !important;
  border-bottom: 3px solid #e8e8ea !important;
  padding-bottom: 5px !important;
}
.ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
  content: none !important;
}
</style>
