<template>
  <a-layout-header class="header" style="background: #fff">
    <div class="logo"></div>
    <a-menu
      theme="white"
      mode="horizontal"
      :style="{ float: 'right' }"
    >
      <a-menu-item key="2">
        <template #icon>
          <message-outlined style="fontSize: 30px" />
        </template>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <bell-outlined style="fontSize: 30px" />
        </template>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <question-circle-outlined style="fontSize: 28px" />
        </template>
      </a-menu-item>
      <a-menu-item key="3"
        ><a-avatar style="fontSize: 28px">
          <template #icon><UserOutlined /></template> </a-avatar
      ></a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { QuestionCircleOutlined, BellOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons-vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Topbar",
  components: {
    QuestionCircleOutlined,
    BellOutlined,
    MessageOutlined,
    UserOutlined
  },
};
</script>

<style scope>
.ant-layout-header {
  padding: 0 5px 0px 5px !important;
}
.header {
  width: 100%;
  height: 72px;
  z-index: 0;
  box-shadow: 0 2px 8px rgb(238, 238, 238);
}
.menu_item {
  box-shadow: none;
}
</style>