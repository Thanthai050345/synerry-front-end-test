<template>
  <a-layout-footer class="footer">
    <div>
      <p class="header_footer">
        E-Office Automation (v1.0.0#10000) | About E-Office | Manual | Report a
        problem
      </p>
      <p class="footer_footer">
        Powered by a free JigsawOffice license. Please consider purchasing it
        today
      </p>
    </div>
  </a-layout-footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style scope>
.ant-layout-footer {
  text-align: center !important;
  border-top: 1px solid #E8E8EA;
  background-color: #FFFFFF !important;
  height: 60px;
  padding: 13px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
}
.header_footer {
  font-size: 11px;
  color: #000;
  font-weight: 500;
  margin-bottom: 0;
}
.footer_footer {
  color: #999;
  font-size: 10px;
  margin-bottom: 0;
}
</style>