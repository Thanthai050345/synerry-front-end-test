<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    width="240"
    style="background: #fff"
    :trigger="null"
    collapsible
  >
    <a-menu
      mode="inline"
      theme="dark"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <menu key="1" class="header_menu">
        <template class="header_sidebar">
          <h1 class="header_text">Option 1</h1>
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </template>
      </menu>
      <MenuItem
        v-for="item in menuTree"
        :key="item.key"
        :menuKey="item.key"
        :label="item.label"
        :icon="item.icon"
        :to="item.path"
      ></MenuItem>
      <a-sub-menu key="sub4">
        <template #title>
          <setting-outlined />
          <span>Setting</span>
        </template>
        <MenuItem
          v-for="item in settingMenuTree"
          :key="item.key"
          :menuKey="item.key"
          :label="item.label"
          :to="item.path"
        ></MenuItem>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import {
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  IdcardOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  data: () => ({
    menuTree: [
      {
        label: "Dashboard",
        key: "dashboardMenu",
        icon: `${<AppstoreOutlined />}`,
        path: "/",
      },
      {
        label: "Contact Person List",
        key: "contactPersonListMenu",
        icon: `${<IdcardOutlined />}`,
        path: "/contact-person-list",
      },
      {
        label: "Report",
        key: "reportMenu",
        icon: `${<ReconciliationOutlined />}`,
        path: "/report",
      },
    ],
    settingMenuTree: [
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
    ],
  }),
  components: {
    SettingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MenuItem,
  },
  setup() {
    return {
      selectedKeys: ref(["1"]),
      collapsed: ref(false),
    };
  },
});
</script>

<style scope>
.header_menu {
  padding: 0 24px;
}
.header_sidebar {
  padding: 20px 0 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>