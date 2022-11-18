<template>
  <!-- <a-button
    class="editable-add-btn"
    @click="handleAdd"
    style="margin-bottom: 8px"
    >Add</a-button
  > -->
  <a-table
    :data-source="dataSource"
    :columns="columns"
    :scroll="{ x: 1000 }"
    :pagination="{
      defaultPageSize: 25,
      showSizeChanger: true,
      pageSizeOptions: ['25', '50', '75'],
      showTotal: (total, range) => {
        this.startRange = range[0];
        this.endRange = range[1];
        this.totalRange = total;
      },
    }"
    class="ant-table-striped"
    :row-class-name="
      (_record, index) => (index % 2 === 1 ? 'table-striped' : null)
    "
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'nameSurname'">
        <span class="nameSurname">
          {{ record.nameSurname }}
        </span>
      </template>
      <template v-if="column.key === 'option'">
        <a-dropdown :trigger="['click']" class="ant-dropdown-link">
          <button class="option_dropdown_icon" @click.prevent>
            <EllipsisOutlined />
          </button>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <a>
                  <EditOutlined />
                  Edit
                </a>
              </a-menu-item>
              <a-menu-item key="1">
                <a-popconfirm
                  v-if="dataSource.length"
                  title="Sure to delete?"
                  @confirm="onDelete(record.key)"
                >
                  <DeleteOutlined />
                  Delete
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </template>
  </a-table>
</template>

<script>
import { computed, defineComponent, reactive, ref } from "vue";
import { cloneDeep } from "lodash-es";
import {
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  data() {
    let columns = this.dataDisplaySelect.map((dataDisplay) => {
      if (dataDisplay.key === "nameSurname") {
        return {
          title: dataDisplay.value,
          dataIndex: dataDisplay.key,
          key: dataDisplay.key,
          width: 200,
        };
      }
      return {
        title: dataDisplay.value,
        dataIndex: dataDisplay.key,
        key: dataDisplay.key,
        width: 250,
      };
    })
    columns.push({
      title: "Option",
      dataIndex: "option",
      key: "option",
      width: 100,
    });
    return {
      columns,
    };
  },
  components: {
    EllipsisOutlined,
    EditOutlined,
    DeleteOutlined,
  },
  props: ["dataDisplaySelect"],
  setup() {
    const createMockupData = (data) => {
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i.toString(),
          nameSurname: "สินใจ มากมายทรัพย์" + (i + 1),
          company: "เอบีซี จำกัด",
          email: "test@test.com",
          mobileNumber: "0812345678",
          lastContactDate: "2019-01-01",
          industrial: "Industrial Name",
          sources: "Sources Name",
          owner: "Owner Name",
          addDate: "Add Date",
          editDate: "Edit Date",
          status: "Status",
          website: "Website",
          activity: "Activity",
          telephone: "Telephone",
        });
      }
      return data;
    };

    const dataSource = ref(createMockupData([]));
    const count = computed(() => dataSource.value.length + 1);
    const editableData = reactive({});
    return {
      dataSource,
      editableData,
      count,
    };
  },
  methods: {
    updateColumnsVal(val) {
      this.columns = Object.values(val).map((value) => {
        return {
          title: value.value,
          dataIndex: value.key,
          key: value.key,
          width: 100,
        };
      });
      this.columns.push({
        title: "Option",
        dataIndex: "option",
        key: "option",
        width: 100,
      });
    },
    edit(key) {
      this.editableData[key] = cloneDeep(
        this.dataSource.filter((item) => key === item.key)[0]
      );
    },
    save(key) {
      Object.assign(
        this.dataSource.filter((item) => key === item.key)[0],
        this.editableData[key]
      );
      delete this.editableData[key];
    },
    onDelete(key) {
      this.dataSource = this.dataSource.filter((item) => item.key !== key);
    },
    handleAdd() {
      const newData = {
        key: `${this.count}`,
        nameSurname: "สินใจ มากมายทรัพย์" + this.count,
        company: "เอบีซี จำกัด",
        email: "test@test.com",
        mobileNumber: "0812345678",
        lastContactDate: "2019-01-01",
        industrial: "Industrial Name",
        sources: "Sources Name",
        owner: "Owner Name",
        addDate: "Add Date",
        editDate: "Edit Date",
        status: "Status",
        website: "Website",
        activity: "Activity",
        telephone: "Telephone",
      };
      this.dataSource.push(newData);
    },
  },
  watch: {
    dataDisplaySelect: {
      handler: function (val) {
        this.updateColumnsVal(val);
      },
      deep: true,
    },
  },
});
</script>

<style scoped>
.pagination {
  padding: 0px 24px 0 24px;
  margin-top: 20px;
  text-align: left;
}
.ant-dropdown-link {
  color: #000000 !important;
}
.option_dropdown_icon {
  width: 32px;
  height: 32px;
  background-color: #f8f8f9;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.option_dropdown_icon:hover {
  background-color: #454957;
  color: white !important;
  transition: 0.5s;
}
.ant-table-wrapper {
  padding: 0 24px 0 24px !important;
}
.ant-table-striped :deep(.table-striped) td {
  background-color: #F9F9FC;
}
</style>