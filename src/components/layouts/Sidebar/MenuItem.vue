<template>
  <a-menu-item :key="menuKey">
    <router-link :to="to">
      <div>
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
      required: true,
    },
    menuKey: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>