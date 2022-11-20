<template>
  <a-layout :style="{ height: '100%' }">
    <Topbar />
    <a-layout>
      <Sidebar ref="collapsed" :updateCollapsed="updateCollapsed"/>
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
          <router-view :navbarBoolean="collapsed" :toggleCollapsed="toggleCollapsed"></router-view>
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
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    updateCollapsed() {
      this.collapsed = !this.collapsed;
    },
    toggleCollapsed() {
      this.$refs.collapsed.toggleCollapsed()
    }
  },
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
  padding-top: 30px !important;
}
.ant-table-thead
  > tr
  > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
  content: none !important;
}
.ant-pagination-item {
  background: #ffffff !important;
  border-radius: 4px !important;
  font-weight: 500;
  border: 1px solid #e8e8ea;
  color: #454957 !important;
}
.ant-pagination-item-active a {
  color: #ffffff !important;
  font-weight: 500;
}
.ant-pagination-item-active {
  background: #454957 !important;
  border-radius: 4px !important;
  border-color: #454957 !important;
}
.ant-pagination-item:hover {
  background: #454957 !important;
  border-radius: 4px !important;
  border-color: #454957 !important;
  color: #ffffff !important;
}
.ant-pagination-item-link {
  background: #ffffff !important;
  border-radius: 4px !important;
  font-weight: 500;
  border: 1px solid #e8e8ea;
  color: #454957 !important;
}
.ant-pagination-item-link:hover {
  background: #454957 !important;
  border-radius: 4px !important;
  border-color: #454957 !important;
  color: #ffffff !important;
}
.ant-select-selector {
  border-radius: 4px !important;
  border: 1px solid #e8e8ea !important;
}
.ant-menu-item-only-child::before {
  content: "•" !important;
  color: #ffffff !important;
  font-size: 20px !important;
  margin-right: 10px !important;
}
.ant-layout-header {
  padding: 0 5px 0px 5px !important;
  /* line-height: 0 !important; */
}
.ant-menu-horizontal {
  border-bottom: none !important;
}
.ant-menu-horizontal:hover {
  color: black;
}
.ant-menu-item:hover::after {
  border-bottom: none !important;
}
.ant-menu-item::before {
  border-bottom: none !important;
}
.ant-menu-horizontal > .ant-menu-item::after,
.ant-menu-horizontal > .ant-menu-submenu::after {
  border-bottom: none !important;
  transition: none !important;
  content: none !important;
}
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu {
  padding: 0px !important;
}
.ant-menu-overflow {
  padding-right: 30px !important;
}
</style>
