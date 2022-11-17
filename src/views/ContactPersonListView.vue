<template>
  <div class="contact_person">
    <div class="header_title">
      <div>
        <h1 class="title">Contact Person List</h1>
      </div>
      <div>
        <a-button class="right_item">
          <template #icon><plus-outlined /></template>
          Add Contact Person
        </a-button>
        <a-button class="right_item">Imported</a-button>
        <a-button shape="circle" class="right_item">
          <template #icon><SettingOutlined /></template>
        </a-button>
      </div>
    </div>
    <div class="filter_data">
      <div>
        <span class="filter_data_header">Filter Data: </span
        ><span>Costumer 2021</span>
      </div>
      <div>
        <a-button class="right_item pushpin">
          <template #icon><PushpinOutlined /></template>
        </a-button>
        <a-button class="right_item filter_dropdown">
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
              <FormOutlined class="filter_dropdown_button" />
              <DownOutlined class="filter_dropdown_button" />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">
                  <a @click="showMainSelectDisplayModal">
                    <DesktopOutlined />
                    Select to display
                  </a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a>
                    <FilterOutlined />
                    Filter
                  </a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3">
                  <a>
                    <DeleteOutlined />
                    Delete this filter
                  </a>
                </a-menu-item>
                <a-menu-item key="4">
                  <ButtonModalDisplayField
                    :propsVisible="testVisible"
                    @showModal="toggleModal"
                    @testHandleOk="testHandleOk"
                    @testHandleCancel="testHandleCancel"
                  />
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-button>
      </div>
    </div>
    <TableItem class="table_item" :dataDisplaySelect="dataDisplaySelect" />

    <!-- Main Modal -->
    <a-modal
      v-model:visible="mainModalVisible"
      title="Select the fields to display"
      @ok="mainHandleOk"
    >
      <template #footer>
        <div class="footer">
          <a-button
            key="submit"
            :loading="mainModalLoading"
            @click="mainHandleOk"
            class="save_button"
            >Save</a-button
          >
          <a-button key="back" @click="mainHandleCancel" class="submit_button"
            >Cancle</a-button
          >
        </div>
      </template>
      <div class="modal_content">
        <p class="modal_content_title">Column Info</p>
        <a-button
          v-for="item in checkDataDisplaySelect"
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
    <!-- Main Modal -->

    <!-- Sub Modal -->
    <a-modal
      v-model:visible="visible"
      width="300px"
      title="Select column"
      @ok="subHandleOk"
    >
      <template #footer>
        <div class="footer">
          <a-button key="submit" @click="subHandleOk" class="save_button"
            >Save</a-button
          >
          <a-button
            key="back"
            @click="subHandleCancel"
            class="save_buttonsubmit_button"
            >Cancle</a-button
          >
        </div>
      </template>
      <div class="modal_content_select">
        <a-button
          class="select_item"
          @click="addDataDisplaySelect('Industrial')"
        >
          Industrial
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Sources')">
          Sources
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('owner')">
          owner
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Add Date')">
          Add Date
        </a-button>
        <a-button
          class="select_item"
          @click="addDataDisplaySelect('Edit Date')"
        >
          Edit Date
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Status')">
          Status
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Website')">
          Website
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Activity')">
          Activity
        </a-button>
        <a-button
          class="select_item"
          @click="addDataDisplaySelect('Telephone')"
        >
          Telephone
        </a-button>
      </div>
    </a-modal>
    <!-- Sub Modal -->
  </div>
</template>
  
<script>
import TableItem from "../components/contactPersonList/TableItem.vue";
import ButtonModalDisplayField from "../components/contactPersonList/ButtonModalDisplayField.vue";
import {
  PlusOutlined,
  SettingOutlined,
  DownOutlined,
  FormOutlined,
  PushpinOutlined,
  DesktopOutlined,
  FilterOutlined,
  DeleteOutlined,
  UnorderedListOutlined,
  CloseOutlined,
} from "@ant-design/icons-vue";

import { ref } from "vue";
export default {
  name: "ContactPersonListView",
  data() {
    let dataDisplaySelect = {
      nameSurname: "Name-Surname",
      company: "Company",
      mobileNumber: "Mobile Number",
      lastContactDate: "Last Contact Date",
    };

    const confirmDataDisplaySelect = {};
    const checkDataDisplaySelect = {...dataDisplaySelect};
    const mainModalLoading = ref(false);
    const mainModalVisible = ref(false);
    const visible = ref(false);
    const testVisible = ref(false);

    return {
      mainModalLoading,
      mainModalVisible,
      visible,
      dataDisplaySelect,
      confirmDataDisplaySelect,
      checkDataDisplaySelect,
      testVisible,
    };
  },
  methods: {
    toggleModal(testVisible) {
      this.testVisible = testVisible;
    },
    testHandleOk(bool) {
      this.testVisible = bool;
      console.log(this.testVisible);
    },
    testHandleCancel(bool) {
      this.testVisible = bool;
      console.log(this.testVisible);
    },

    showModal() {
      this.visible = true;
    },
    showMainSelectDisplayModal() {
      this.mainModalVisible = true;
    },
    mainHandleOk() {
      this.mainModalLoading = true;
      this.dataDisplaySelect = {...this.checkDataDisplaySelect}
      console.log(this.dataDisplaySelect)
      setTimeout(() => {
        this.mainModalLoading = false;
        this.mainModalVisible = false;
      }, 1000);
    },
    mainHandleCancel() {
      this.mainModalVisible = false;
      this.checkDataDisplaySelect = {...this.dataDisplaySelect}
    },

    showSubSelectDisplayModal() {
      this.visible = true;
    },
    subHandleOk() {
      this.checkDataDisplaySelect = {
        ...this.dataDisplaySelect,
        ...this.confirmDataDisplaySelect,
      };
      this.visible = false;
      this.mainModalVisible = false;
      setTimeout(() => {
        this.mainModalVisible = true;
      }, 0.01);
    },
    subHandleCancel() {
      this.visible = false;
    },

    addDataDisplaySelect(item) {
      let newItem =
        item.replace(/ |-/g, "")[0].toLowerCase() +
        item.replace(/ |-/g, "").slice(1);
      this.confirmDataDisplaySelect[newItem] = item;
    },

    removeDataDisplaySelect(item) {
      let newItem =
        item.replace(/ |-/g, "")[0].toLowerCase() +
        item.replace(/ |-/g, "").slice(1);
      delete this.checkDataDisplaySelect[newItem];
      delete this.confirmDataDisplaySelect[newItem];
    },
  },
  watch: {
    dataDisplaySelect: {
      handler: function (val) {
        console.log("display", val);
      },
      deep: true,
    },
  },
  components: {
    TableItem,
    PlusOutlined,
    SettingOutlined,
    DownOutlined,
    FormOutlined,
    PushpinOutlined,
    DesktopOutlined,
    FilterOutlined,
    DeleteOutlined,
    UnorderedListOutlined,
    CloseOutlined,
    ButtonModalDisplayField,
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
.footer {
  display: flex;
  justify-content: space-evenly;
}
.save_button {
  background: #123cc6;
  color: white;
  border-radius: 4px;
}
.submit_button {
  border-radius: 4px;
}
.modal_content {
  width: 318px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  flex-direction: column;
}
.modal_content_select {
  width: 248px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  flex-direction: column;
}
.select_item {
  margin: 5px;
  border-radius: 4px;
}
.select_item:active {
  background-color: #123cc6;
}
.modal_content_title {
  font-weight: 500;
  font-size: 17px;
  color: #171c2d;
}
.info_item {
  margin-top: 10px;
  border-radius: 4px;
  height: 36px;
}
.info_item_cancle {
  display: flex;
  justify-content: space-between;
}
.front_element {
  padding-right: 10px;
}
.header_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  padding: 24px 24px 0px 24px;
}
.filter_data_header {
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #454957;
}
.filter_data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background: #f8f8f9;
  padding: 24px;
}
.right_item {
  margin-left: 10px;
  border: 1px solid #b9bbc0;
  border-radius: 4px;
}
.pushpin {
  background: #e8e8ea;
  box-sizing: border-box;
  border-radius: 2px;
  border: none;
}
.filter_dropdown {
  padding: 0px 0px 0px 5px;
}
.filter_dropdown_button {
  margin-right: 10px;
}
</style>
  