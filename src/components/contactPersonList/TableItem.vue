<template>
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
        return `Display ${range[0]}-${range[1]} from ${total}`;
      },
    }"
    class="ant-table-striped"
    :row-class-name="
      (_record, index) => (index % 2 === 1 ? 'table-striped' : null)
    "
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'nameSurname'">
        <span class="avatar">
          <a-avatar style="fontsize: 28px; background-color: #ffffff">
            <template #icon>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_6050)">
                  <path
                    d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                    fill="#FF6838"
                  />
                  <path
                    d="M7.45142 14.6763L19.6063 26.8312C24.4071 24.7306 27.8021 20.0155 27.9907 14.4859L18.6649 5.1601L7.45142 14.6763Z"
                    fill="#E86035"
                  />
                  <path
                    d="M14 17.6613C10.3833 17.6613 7.45142 14.7293 7.45142 11.1126V9.75552C7.45142 6.13882 10.3833 3.20691 14 3.20691C17.6167 3.20691 20.5486 6.13882 20.5486 9.75552V11.1126C20.5486 14.7293 17.6167 17.6613 14 17.6613Z"
                    fill="#4D4D4D"
                  />
                  <path
                    d="M13.9999 3.20691C13.9991 3.20691 13.9982 3.20696 13.9973 3.20696V17.6613C13.9982 17.6613 13.9991 17.6613 13.9999 17.6613C17.6166 17.6613 20.5485 14.7294 20.5485 11.1127V9.75557C20.5485 6.13882 17.6166 3.20691 13.9999 3.20691Z"
                    fill="#333333"
                  />
                  <path
                    d="M8.57781 15.1452C9.45461 15.1452 10.1654 14.4344 10.1654 13.5576C10.1654 12.6808 9.45461 11.97 8.57781 11.97C7.70102 11.97 6.99023 12.6808 6.99023 13.5576C6.99023 14.4344 7.70102 15.1452 8.57781 15.1452Z"
                    fill="#FFCDBE"
                  />
                  <path
                    d="M19.4222 15.1452C20.299 15.1452 21.0098 14.4344 21.0098 13.5576C21.0098 12.6808 20.299 11.97 19.4222 11.97C18.5454 11.97 17.8346 12.6808 17.8346 13.5576C17.8346 14.4344 18.5454 15.1452 19.4222 15.1452Z"
                    fill="#FAA68E"
                  />
                  <path
                    d="M13.9999 28C17.2918 28 20.3179 26.8633 22.7083 24.9616L22.3622 21.7795C22.2726 20.9562 21.6294 20.3022 20.8078 20.1988L16.032 19.6465V16.7873H11.9678V19.6465L7.19206 20.1988C6.37038 20.3022 5.7272 20.9562 5.63768 21.7795L5.2915 24.9616C7.68189 26.8632 10.708 28 13.9999 28Z"
                    fill="#FFCDBE"
                  />
                  <path
                    d="M22.7084 24.9616L22.3622 21.7795C22.2726 20.9562 21.6295 20.3022 20.8078 20.1988L16.0321 19.6465V16.7873H13.9974V28C13.9983 28 13.9991 28 14 28C17.2919 28 20.3179 26.8633 22.7084 24.9616Z"
                    fill="#FAA68E"
                  />
                  <path
                    d="M14 18.7428C10.9072 18.7428 8.40009 16.2357 8.40009 13.143V9.94303C8.40009 6.85029 10.9072 4.34314 14 4.34314C17.0927 4.34314 19.5999 6.85029 19.5999 9.94303V13.143C19.5999 16.2357 17.0927 18.7428 14 18.7428Z"
                    fill="#FFDECF"
                  />
                  <path
                    d="M13.9999 4.3432C13.9991 4.3432 13.9982 4.34326 13.9973 4.34326V18.7429C13.9982 18.7429 13.9991 18.743 13.9999 18.743C17.0926 18.743 19.5998 16.2358 19.5998 13.1431V9.94315C19.5998 6.85035 17.0927 4.3432 13.9999 4.3432Z"
                    fill="#FFBEAA"
                  />
                  <path
                    d="M13.9999 17.1895C13.0838 17.1895 12.3385 16.4442 12.3385 15.5281H12.9948C12.9948 16.0824 13.4457 16.5333 13.9999 16.5333C14.5541 16.5333 15.0051 16.0824 15.0051 15.5281H15.6613C15.6613 16.4442 14.916 17.1895 13.9999 17.1895Z"
                    fill="#FF9451"
                  />
                  <path
                    d="M15.0051 15.528C15.0051 16.0823 14.5541 16.5332 13.9999 16.5332C13.9991 16.5332 13.9982 16.5331 13.9973 16.5331V17.1894C13.9982 17.1894 13.9991 17.1895 13.9999 17.1895C14.9161 17.1895 15.6613 16.4441 15.6613 15.528H15.0051Z"
                    fill="#F7674F"
                  />
                  <path
                    d="M19.0033 11.2357V15.0764C19.4624 15.0764 19.8346 14.7043 19.8346 14.2452V8.71381C19.8346 7.35587 19.1063 6.10221 17.9265 5.42966L17.2337 5.03465C17.0453 4.23753 16.2885 3.63039 15.3883 3.72636L13.1153 3.96874C10.0127 4.29954 7.6593 6.91727 7.6593 10.0375V11.543L8.16522 11.3872V14.2452C8.16522 14.7043 8.53736 15.0764 8.99646 15.0764V13.6285C8.99646 12.2166 10.141 11.072 11.5529 11.072H14.7382C15.8708 11.072 16.789 10.1539 16.789 9.02127C18.012 9.02132 19.0033 10.0128 19.0033 11.2357Z"
                    fill="#4D4D4D"
                  />
                  <path
                    d="M17.9266 5.42966L17.2337 5.03465C17.0453 4.23753 16.2886 3.63039 15.3884 3.72636L13.9974 3.87468V11.072H14.7382C15.8709 11.072 16.789 10.1539 16.789 9.02127C18.012 9.02127 19.0034 10.0127 19.0034 11.2356V15.0764C19.4625 15.0764 19.8346 14.7042 19.8346 14.2451V8.71381C19.8347 7.35587 19.1063 6.10221 17.9266 5.42966Z"
                    fill="#333333"
                  />
                  <path
                    d="M22.3624 21.7796C22.2728 20.9563 21.6296 20.3023 20.808 20.1989L16.2788 19.6751C15.8454 20.4903 14.9878 21.0456 14.0001 21.0456C13.0125 21.0456 12.1549 20.4903 11.7215 19.6751L7.19224 20.1989C6.37056 20.3023 5.72738 20.9563 5.63786 21.7796L5.29169 24.9616C7.68213 26.8632 10.7082 28 14.0001 28C17.292 28 20.3181 26.8633 22.7086 24.9616L22.3624 21.7796Z"
                    fill="#0066AA"
                  />
                  <path
                    d="M22.7084 24.9616L22.3622 21.7795C22.2726 20.9563 21.6294 20.3022 20.8078 20.1988L16.2786 19.675C15.8452 20.4903 14.9876 21.0456 13.9999 21.0456C13.9991 21.0456 13.9982 21.0455 13.9973 21.0455V28C13.9982 28 13.9991 28 13.9999 28C17.2919 28 20.3179 26.8633 22.7084 24.9616Z"
                    fill="#1E2D64"
                  />
                  <path
                    d="M11.6228 14.0773C11.3772 14.0773 11.1782 13.8782 11.1782 13.6326V12.9819C11.1782 12.7363 11.3773 12.5372 11.6228 12.5372C11.8684 12.5372 12.0675 12.7363 12.0675 12.9819V13.6326C12.0675 13.8782 11.8684 14.0773 11.6228 14.0773Z"
                    fill="#4D4D4D"
                  />
                  <path
                    d="M16.3773 14.0773C16.1317 14.0773 15.9326 13.8782 15.9326 13.6326V12.9819C15.9326 12.7363 16.1317 12.5372 16.3773 12.5372C16.6229 12.5372 16.8219 12.7363 16.8219 12.9819V13.6326C16.822 13.8782 16.6229 14.0773 16.3773 14.0773Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_6050">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </template>
          </a-avatar>
        </span>
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
import dataMockup from "../../assets/personsData.json";
export default defineComponent({
  data() {
    let columns = this.dataDisplaySelect.map((dataDisplay) => {
      if (dataDisplay.key === "nameSurname") {
        return {
          title: "ผู้ติดต่อ",
          dataIndex: dataDisplay.key,
          key: dataDisplay.key,
          width: 350,
        };
      }
      if (dataDisplay.key === "company") {
        return {
          title: "บริษัท",
          dataIndex: dataDisplay.key,
          key: dataDisplay.key,
          width: 250,
        };
      }
      if (dataDisplay.key === "mobileNumber") {
        return {
          title: "เบอร์โทรศัพท์มือถือ",
          dataIndex: dataDisplay.key,
          key: dataDisplay.key,
          width: 250,
        };
      }
      if (dataDisplay.key === "lastContactDate") {
        return {
          title: "ติดต่อล่าสุด",
          dataIndex: dataDisplay.key,
          key: dataDisplay.key,
          width: 250,
        };
      }
      return {
        title: dataDisplay.value,
        dataIndex: dataDisplay.key,
        key: dataDisplay.key,
        width: 250,
      };
    });
    columns.push({
      title: "ตัวเลือก",
      dataIndex: "option",
      key: "option",
      width: 100,
    });

    return {
      columns,
      PageSize: 25,
    };
  },
  components: {
    EllipsisOutlined,
    EditOutlined,
    DeleteOutlined,
  },
  props: ["dataDisplaySelect"],
  setup() {
    // test is data mockup from json file.
    // and if you want to see mockup data from json file you can replace dataSource in a-table tag with test.
    // and change dataSource.length in a-popconfirm tag with.
    const test = ref([]);
    for (const value in dataMockup.personsData) {
      test.value.push({
        key: value,
        nameSurname: dataMockup.personsData[value].nameSurname,
        company: dataMockup.personsData[value].company,
        mobileNumber: dataMockup.personsData[value].mobileNumber,
        lastContactDate: dataMockup.personsData[value].lastContactDate,
      });
    }
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

    // dataSource is data from createMockupData function. and return js object
    const dataSource = ref(createMockupData([]));
    const count = computed(() => dataSource.value.length + 1);
    const editableData = reactive({});
    return {
      dataSource,
      editableData,
      count,
      test,
    };
  },
  methods: {
    updateColumnsVal(val) {
      this.columns = Object.values(val).map((value) => {
        if (value.key === "nameSurname") {
          return {
            title: "ผู้ติดต่อ",
            dataIndex: value.key,
            key: value.key,
            width: 350,
          };
        }
        if (value.key === "company") {
          return {
            title: "บริษัท",
            dataIndex: value.key,
            key: value.key,
            width: 250,
          };
        }
        if (value.key === "mobileNumber") {
          return {
            title: "เบอร์โทรศัพท์มือถือ",
            dataIndex: value.key,
            key: value.key,
            width: 250,
          };
        }
        if (value.key === "lastContactDate") {
          return {
            title: "ติดต่อล่าสุด",
            dataIndex: value.key,
            key: value.key,
            width: 250,
          };
        }
        return {
          title: value.value,
          dataIndex: value.key,
          key: value.key,
          width: 250,
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
.avatar {
  padding-right: 8px;
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
  background-color: #f9f9fc;
}
</style>