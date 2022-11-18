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
        <draggable
          :list="checkDataDisplaySelect02"
          :disabled="!enabled"
          item-key="value"
          class="list-group"
          ghost-class="ghost"
          :move="checkMove"
          @start="dragging = true"
          @end="dragging = false"
        >
          <template #item="{ element }">
            <a-button
              class="list-group-item info_item info_item_cancle"
              :class="{ 'not-draggable': !enabled }"
            >
              <div>
                <UnorderedListOutlined class="front_element" />
                <span>{{ element.value }}</span>
              </div>
              <div>
                <CloseOutlined @click="removeDataDisplaySelect(element)" />
              </div>
            </a-button>
          </template>
        </draggable>
        <!-- <a-button
          v-for="item in checkDataDisplaySelect"
          :key="item.key"
          class="info_item info_item_cancle"
        >
          <div>
            <UnorderedListOutlined class="front_element" />
            <span>{{ item.value }}</span>
          </div>
          <div>
            <CloseOutlined @click="removeDataDisplaySelect(item)" />
          </div>
        </a-button> -->
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
          @click="addDataDisplaySelect('Name Surname')"
        >
          Name-Surname
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Company')">
          Company
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Email')">
          Email
        </a-button>
        <a-button
          class="select_item"
          @click="addDataDisplaySelect('Mobile Number')"
        >
          Mobile Number
        </a-button>
        <a-button
          class="select_item"
          @click="addDataDisplaySelect('Industrial')"
        >
          Industrial
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Sources')">
          Sources
        </a-button>
        <a-button class="select_item" @click="addDataDisplaySelect('Owner')">
          Owner
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
import draggable from "vuedraggable";

import { ref } from "vue";
export default {
  name: "ContactPersonListView",
  data() {
    // dataDisplaySelect pass to columns in TableItem components.
    let dataDisplaySelect = [
      {
        key: "nameSurname",
        value: "Name Surname",
        index: 0,
      },
      {
        key: "company",
        value: "Company",
        index: 1,
      },
      {
        key: "mobileNumber",
        value: "Mobile Number",
        index: 2,
      },
      {
        key: "lastContactDate",
        value: "Last Contact Date",
        index: 3,
      },
    ];

    // confirmDataDisplaySelect used for confirm button in sub modal.
    const confirmDataDisplaySelect = {};
    // checkDataDisplaySelect used for recheck button in main modal.
    const checkDataDisplaySelect = { ...dataDisplaySelect };
    const checkDataDisplaySelect02 = [...dataDisplaySelect];
    const mainModalLoading = ref(false);
    const mainModalVisible = ref(false);
    // constant name visible used for handle sub modal visible.
    const visible = ref(false);

    return {
      mainModalLoading,
      mainModalVisible,
      dataDisplaySelect,
      visible,
      confirmDataDisplaySelect,
      checkDataDisplaySelect,
      enabled: true,
      dragging: false,
      checkDataDisplaySelect02,
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  },
  methods: {
    checkMove: function (e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    // this method used to change main modal visible.
    showMainSelectDisplayModal() {
      this.mainModalVisible = true;
    },
    // this method used to handle ok state in main modal.
    mainHandleOk() {
      this.mainModalLoading = true;
      this.dataDisplaySelect = { ...this.checkDataDisplaySelect };
      setTimeout(() => {
        this.mainModalLoading = false;
        this.mainModalVisible = false;
      }, 1000);
    },
    // this method used to handle cancel state in main modal.
    mainHandleCancel() {
      this.mainModalVisible = false;
      this.checkDataDisplaySelect = { ...this.dataDisplaySelect };
    },
    // this method used to chenge sub modal visible.
    showModal() {
      this.visible = true;
    },
    // showSubSelectDisplayModal() {
    //   this.visible = true;
    // },
    // // this method used to handle ok state in sub modal.
    subHandleOk() {
      // tessArr used for convert wrong format data to correct format for checkDataDisplaySelect.
      const testArr = [];
      // covert format data to checkDataDisplaySelect format.
      for (const [index, [key, value]] of Object.entries(
        Object.entries(this.confirmDataDisplaySelect)
      )) {
        testArr[index] = new Proxy(
          {
            key: key,
            value: value,
            index: this.dataDisplaySelect.length + testArr.length,
          },
          {}
        );
      }
      this.checkDataDisplaySelect = {
        ...this.dataDisplaySelect,
      };

      for (const item of testArr) {
        // const size = Object.keys(this.checkDataDisplaySelect).length;
        // this.checkDataDisplaySelect = { ...this.checkDataDisplaySelect };
        // this.checkDataDisplaySelect[size] = item;
        this.checkDataDisplaySelect02.push(item)
      }
      console.log(this.dataDisplaySelect);
      console.log(this.checkDataDisplaySelect02)
      // close sub modal and restate main modal to present.
      this.visible = false;
      this.mainModalVisible = false;
      setTimeout(() => {
        this.mainModalVisible = true;
      }, 0.01);
    },
    // this method used to handle cancel state in sub modal.
    subHandleCancel() {
      this.visible = false;
    },

    // this method used when button in sub modal is clicked.
    addDataDisplaySelect(item) {
      let newItem =
        item.replace(/ |-/g, "")[0].toLowerCase() +
        item.replace(/ |-/g, "").slice(1);
      this.confirmDataDisplaySelect[newItem] = item;
    },
    // this method used when button in main modal is clicked.
    removeDataDisplaySelect(item) {
      for (const [key, value] of Object.entries(this.checkDataDisplaySelect)) {
        if (value === item) {
          delete this.checkDataDisplaySelect[key];
        }
      }
      delete this.confirmDataDisplaySelect[item.key];
    },
  },
  watch: {
    // watch dataDisplaySelect.
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
    draggable,
  },
};
</script>

<style scoped>
ul.sort {
  list-style: none;
  padding: 0;
  margin: 30px;
}

li.sort-item {
  padding: 10px;
  width: 25%;
  float: left;
  margin: 0 10px 10px 0;
  background: #efefef;
  border: solid 1px #ccc;
}

.sort-ghost {
  opacity: 0.3;
  transition: all 0.7s ease-out;
}
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
  width: 100%;
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
  