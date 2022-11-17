<template>
  <a-menu-item :key="menuKey">
    <router-link :to="to">
      <div v-if="icon">
        <span v-html="{ icon }"></span>
        <span>{{ label }}</span>
      </div>
      <div v-else>
        <span>{{ label }}</span>
      </div>
    </router-link>
  </a-menu-item>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
    },
    menuKey: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style>
</style>