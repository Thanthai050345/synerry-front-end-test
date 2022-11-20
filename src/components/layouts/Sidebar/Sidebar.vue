<template>
  <a-layout-sider
    id="mySidenav"
    :class="{ sidebar: true, sidebarder: collapsed }"
    v-model:collapsed="collapsed"
    collapsible
    :trigger="null"
  >
    <div class="logo logo_sidebar">
      <div class="header_sidebar">
        <h1 class="header_text">
          {{
            this.$route.path === "/"
              ? "Dashboard"
              : this.$route.path === "/contact-person-list"
              ? "Contact Person List"
              : this.$route.path === "/report"
              ? "Report"
              : "Dashboard"
          }}
        </h1>
        <div class="close_open_sidebar">
          <MenuUnfoldOutlined
            v-if="collapsed"
            :style="{ fontSize: '16px', color: '#ffffff' }"
            class="trigger"
            @click="
              () => {
                collapsed = !collapsed;
                collapsedStateArr.push(collapsed);
              }
            "
          />
          <MenuFoldOutlined
            v-else
            :style="{ fontSize: '16px', color: '#ffffff' }"
            class="trigger"
            @click="
              () => {
                collapsed = !collapsed;
                collapsedStateArr.push(collapsed);
              }
            "
          />
        </div>
      </div>
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <!-- This is the similarity tag, should be create component by vue file. -->
      <!-- But I can't find a way to put icon component from antd component to shild component.' -->
      <!-- similarity tag -->
      <a-menu-item key="dashboard">
        <template #icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_6316)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.76993 9.64286H1.58721C0.712286 9.64286 0 8.93057 0 8.05564V1.58721C0 0.712286 0.712286 0 1.58721 0H6.76993C7.64486 0 8.35714 0.712286 8.35714 1.58721V8.05564C8.35714 8.93057 7.64486 9.64286 6.76993 9.64286ZM1.58721 1.28571C1.42071 1.28571 1.28571 1.42071 1.28571 1.58721V8.05564C1.28571 8.22214 1.42071 8.35714 1.58721 8.35714H6.76993C6.93643 8.35714 7.07143 8.22214 7.07143 8.05564V1.58721C7.07143 1.42071 6.93643 1.28571 6.76993 1.28571H1.58721ZM11.2301 7.07143H16.4128C17.2877 7.07143 18 6.35914 18 5.48421V1.58721C18 0.712286 17.2877 0 16.4128 0H11.2301C10.3551 0 9.64285 0.712286 9.64285 1.58721V5.48421C9.64285 6.35914 10.3551 7.07143 11.2301 7.07143ZM10.9286 1.58721C10.9286 1.42071 11.0636 1.28571 11.2301 1.28571H16.4128C16.5793 1.28571 16.7143 1.42071 16.7143 1.58721V5.48421C16.7143 5.65071 16.5793 5.78571 16.4128 5.78571H11.2301C11.0636 5.78571 10.9286 5.65071 10.9286 5.48421V1.58721ZM11.2301 18H16.4128C17.2877 18 18 17.2877 18 16.4128V9.94436C18 9.06943 17.2877 8.35715 16.4128 8.35715H11.2301C10.3551 8.35715 9.64285 9.06943 9.64285 9.94436V16.4128C9.64285 17.2877 10.3551 18 11.2301 18ZM10.9286 9.94436C10.9286 9.77786 11.0636 9.64286 11.2301 9.64286H16.4128C16.5793 9.64286 16.7143 9.77786 16.7143 9.94436V16.4128C16.7143 16.5793 16.5793 16.7143 16.4128 16.7143H11.2301C11.0636 16.7143 10.9286 16.5793 10.9286 16.4128V9.94436ZM1.58721 18H6.76993C7.64486 18 8.35714 17.2877 8.35714 16.4128V12.5158C8.35714 11.6409 7.64486 10.9286 6.76993 10.9286H1.58721C0.712286 10.9286 0 11.6409 0 12.5158V16.4128C0 17.2877 0.712286 18 1.58721 18ZM1.28571 12.5158C1.28571 12.3493 1.42071 12.2143 1.58721 12.2143H6.76993C6.93643 12.2143 7.07143 12.3493 7.07143 12.5158V16.4128C7.07143 16.5793 6.93643 16.7143 6.76993 16.7143H1.58721C1.42071 16.7143 1.28571 16.5793 1.28571 16.4128V12.5158Z"
                fill="#F1F1F2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6316">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </template>
        <router-link to="/">
          <div>
            <span>Dashboard</span>
          </div>
        </router-link>
      </a-menu-item>
      <a-menu-item key="contactPersonList">
        <template #icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_6365)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4727 4.12814H13.4648V0.916318C13.4648 0.617366 13.2287 0.375 12.9375 0.375H0.527344C0.236109 0.375 0 0.617366 0 0.916318V14.9184C0 16.4108 1.18283 17.625 2.63672 17.625H15.3633C16.8172 17.625 18 16.4108 18 14.9184V4.66946C18 4.3705 17.7639 4.12814 17.4727 4.12814ZM2.63672 16.5424C1.76439 16.5424 1.05469 15.8139 1.05469 14.9184V1.45764H12.4102C12.4102 5.25432 12.4097 7.98749 12.4094 9.95806C12.4085 14.9514 12.4085 15.048 12.419 15.1434C12.4192 15.1453 12.4195 15.1472 12.4197 15.1491C12.4205 15.1562 12.4213 15.1638 12.4222 15.1738C12.4681 15.6756 12.6504 16.1489 12.9387 16.5424H2.63672ZM16.9453 14.9184C16.9453 15.8139 16.2356 16.5424 15.3633 16.5424H15.0469C14.1745 16.5424 13.4648 15.8139 13.4648 14.9184V5.21077H16.9453V14.9184ZM10.4481 14.0146H2.85617C2.5754 14.0146 2.34778 14.284 2.34778 14.6163C2.34778 14.9486 2.5754 15.2181 2.85617 15.2181H10.4481C10.7289 15.2181 10.9565 14.9486 10.9565 14.6163C10.9565 14.284 10.7289 14.0146 10.4481 14.0146ZM4.8631 5.4564C4.8631 4.42394 5.66539 3.5843 6.65192 3.5843C7.63845 3.5843 8.44074 4.42394 8.44074 5.4564C8.44074 6.48885 7.63845 7.32849 6.65192 7.32849C5.66539 7.32849 4.8631 6.48885 4.8631 5.4564ZM9.78235 11.5407C9.78235 11.799 9.58201 12.0087 9.33515 12.0087H3.96869C3.72183 12.0087 3.52148 11.799 3.52148 11.5407V10.6047C3.52148 9.31384 4.52501 8.26453 5.75751 8.26453H7.54633C8.77972 8.26453 9.78235 9.31384 9.78235 10.6047V11.5407Z"
                fill="#F1F1F2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6365">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </template>
        <router-link to="/contact-person-list">
          <div>
            <span>Contact Person List</span>
          </div>
        </router-link>
      </a-menu-item>
      <a-menu-item key="report">
        <template #icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_6392)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4648 4.12814H17.4727C17.7639 4.12814 18 4.3705 18 4.66946V14.9184C18 16.4108 16.8172 17.625 15.3633 17.625H2.63672C1.18283 17.625 0 16.4108 0 14.9184V0.916318C0 0.617366 0.236109 0.375 0.527344 0.375H12.9375C13.2287 0.375 13.4648 0.617366 13.4648 0.916318V4.12814ZM1.05469 14.9184C1.05469 15.8139 1.76439 16.5424 2.63672 16.5424H12.9387C12.6504 16.1489 12.4681 15.6756 12.4222 15.1738C12.4213 15.1638 12.4205 15.1562 12.4197 15.1491L12.419 15.1434C12.4085 15.048 12.4085 14.9514 12.4094 9.95806C12.4097 7.98749 12.4102 5.25432 12.4102 1.45764H1.05469V14.9184ZM15.3633 16.5424C16.2356 16.5424 16.9453 15.8139 16.9453 14.9184V5.21077H13.4648V14.9184C13.4648 15.8139 14.1745 16.5424 15.0469 16.5424H15.3633ZM2.85617 14.0146H10.4481C10.7289 14.0146 10.9565 14.284 10.9565 14.6163C10.9565 14.9486 10.7289 15.2181 10.4481 15.2181H2.85617C2.5754 15.2181 2.34778 14.9486 2.34778 14.6163C2.34778 14.284 2.5754 14.0146 2.85617 14.0146ZM11.625 6.47546C11.625 4.5591 10.0272 3 8.06337 3H7.5V7.125H11.6039C11.6039 7.125 11.625 6.50944 11.625 6.47546ZM9.75 8.8125C9.75 9.86471 9.34039 10.8535 8.59661 11.5969C7.85355 12.3404 6.86467 12.75 5.8125 12.75C3.64136 12.75 1.875 10.9836 1.875 8.8125C1.875 7.76029 2.28461 6.77145 3.02835 6.02812C3.77141 5.28461 4.76025 4.875 5.8125 4.875H6.375V8.25H9.75V8.8125Z"
                fill="#F1F1F2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6392">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </template>
        <router-link to="/report">
          <div>
            <span>Report</span>
          </div>
        </router-link>
      </a-menu-item>
      <!-- similarity tag -->

      <a-sub-menu key="settingSub">
        <template #title>
          <setting-outlined />
          <span>Setting</span>
        </template>
        <div v-for="item in settingMenuTree" :key="item.key">
          <MenuItem :menuKey="item.key" :label="item.label" :to="item.path" />
        </div>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import {
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  components: {
    SettingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MenuItem,
  },
  data() {
    return {
      setWidth: 240,
      collapsed: ref(false),
      collapsedStateArr: [],
    };
  },
  setup() {
    const settingMenuTree = [
      {
        label: "Manage Layout",
        key: "manageLayoutMenu",
        path: "/manage-layout",
      },
      {
        label: "Member",
        key: "memberMenu",
        path: "/member",
      },
      {
        label: "Data Access",
        key: "dataAccessMenu",
        path: "/data-access",
      },
      {
        label: "System log",
        key: "systemLogMenu",
        path: "/system-log",
      },
    ];
    return {
      settingMenuTree,
    };
  },
  watch: {
    collapsed: function () {
      localStorage.setItem("sidebarStateCollection", this.collapsedStateArr);
      localStorage.setItem("sidebarState", this.collapsed);
    },
  },
});
</script>

<style scope>
.sidebar {
  background: rgb(255, 255, 255) !important;
  flex: 0 0 240px !important;
  max-width: 240px !important;
  min-width: 240px !important;
  width: 240px !important;
}
.sidebarder {
  background: rgb(255, 255, 255) !important;
  flex: 0 0 0px !important;
  max-width: 0px !important;
  min-width: 0px !important;
  width: 0px !important;
}
.logo_sidebar {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
}
.header_menu {
  padding: 0 24px;
}
.header_sidebar {
  padding: 20px 0 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.close_open_sidebar {
  padding-right: 15px;
  cursor: pointer;
  z-index: 100;
}
.header_text {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.menuOutlined {
  cursor: pointer;
}
</style>