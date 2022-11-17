<template>
  <a @click="showModal(true)">
    <DesktopOutlined />
    Select to display
  </a>
  <a-modal
    v-model:visible="visible"
    title="Select the fields to display"
    @ok="testHandleOk"
  >
    <template #footer>
      <div class="footer">
        <a-button
          key="submit"
          :loading="mainModalLoading"
          @click="testHandleOk"
          class="save_button"
          >Save</a-button
        >
        <a-button key="back" @click="testHandleCancel" class="submit_button"
          >Cancle</a-button
        >
      </div>
    </template>
    <div class="modal_content">
      <p class="modal_content_title">Column Info</p>
      <a-button
        v-for="item in dataDisplaySelect"
        :key="item.key"
        class="info_item info_item_cancle"
        @click="removeDataDisplaySelect(item)"
      >
        <div>
          <UnorderedListOutlined class="front_element" />
          <span>{{ item }}</span>
        </div>
        <div>
          <CloseOutlined />
        </div>
      </a-button>
      <a-button type="dashed" block class="info_item" @click="showModal">
        <PlusOutlined />
        Add Field
      </a-button>
    </div>
  </a-modal>
</template>
<script>
import { defineComponent } from "vue";
import { DesktopOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  data() {
    return {
      visible: this.propsVisible,
    };
  },
  props: {
    propsVisible: {
      type: Boolean,
    },
  },
  components: {
    DesktopOutlined,
  },
  methods: {
    showModal(testVisible) {
      this.$emit("showModal", testVisible);
    },
    testHandleOk(e) {
      console.log(e);
      this.visible = false;
      this.$emit("testHandleOk", false);
    },
    testHandleCancel(e) {
      console.log(e);
      this.visible = false;
      this.$emit("testHandleCancel", false);
    },
    updateVisible(newVisible) {
      this.visible = newVisible;
    },
  },
  watch: {
    propsVisible(newVisible) {
      this.updateVisible(newVisible);
    },
  },
});
</script>