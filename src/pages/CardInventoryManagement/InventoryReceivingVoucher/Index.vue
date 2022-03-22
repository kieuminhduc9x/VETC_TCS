<template>
  <main-layout>
    <template v-slot:breadcrumb>
      <div style="display: flex; justify-content: space-between">
        <a-breadcrumb separator=">">
          <a-breadcrumb-item >Quản lý kho thẻ</a-breadcrumb-item>
          <a-breadcrumb-item :class="'active'">Phiếu xuất kho thẻ</a-breadcrumb-item>
        </a-breadcrumb>
        <menu-profile></menu-profile>
      </div>
    </template>
    <div style="margin-top: 5px">
      <a-card title="Thông tin phiếu xuất">
        <a-form-model
          :model="form"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          labelAlign="left">

          <a-row :gutter="16">
            <a-col :xs="24" :lg="12" :md="12">
              <a-form-model-item
                label="Đơn vị"
                prop="tram"
                style="margin-bottom: 20px!important;">
                <a-select
                  placeholder="Chọn đơn vị"
                  v-model="form.tram"
                  :disabled="true"
                >
                  <a-select-option v-for="item in lsTram" :key="item.value" :value="item.value">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item
                label="Số phiếu"
                prop="sophieu"
                style="margin-bottom: 20px!important;">
                <a-input
                  placeholder="Nhập số phiếu"
                  v-model="form.sophieu"></a-input>
              </a-form-model-item>
              <a-form-model-item
                label="Phương thức"
                prop="phuongthuc"
                style="margin-bottom: 20px!important;">
                <a-select
                  placeholder="Chọn phương thức"
                  v-model="form.phuongthuc"
                >
                  <a-select-option v-for="item in lsPhuongthuc" :key="item.value" :value="item.value">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item
                label="Người giao"
                prop="nguoigiao"
                style="margin-bottom: 20px!important;">
                <a-select
                  placeholder="Chọn người giao"
                  v-model="form.nguoigiao"
                >
                  <a-select-option v-for="item in lsNguoigiao" :key="item.value" :value="item.value">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col :xs="24" :lg="12" :md="12">
              <a-row :gutter="16">
                <a-col :xs="24" :md="12" :lg="12">
                  <a-form-model-item
                    label="Ngày lập"
                    prop="ngaylap"
                    style="margin-bottom: 20px!important;">
                    <a-date-picker
                      placeholder="Chọn thời gian"
                      v-model="form.ngaylap"
                      format="DD/MM/YYYY"></a-date-picker>
                  </a-form-model-item>
                </a-col>
                <a-col :xs="24" :md="12" :lg="12">
                  <a-form-model-item
                    label="Ca"
                    prop="ca"
                    style="margin-bottom: 20px!important;">
                    <a-select
                      placeholder="Chọn ca"
                      v-model="form.ca"
                    >
                      <a-select-option v-for="item in lsCa" :key="item.value" :value="item.value">
                        {{ item.name }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                </a-col>
              </a-row>
              <a-form-model-item
                label="Số chứng từ"
                prop="sochungtu"
                style="margin-bottom: 20px!important;">
                <a-input
                  placeholder="Nhập số chứng từ"
                  v-model="form.sochungtu"></a-input>
              </a-form-model-item>
              <a-form-model-item
                label="Xuất đến"
                prop="xuatden"
                style="margin-bottom: 15px!important;">
                <a-select
                  placeholder="Chọn xuất đến"
                  v-model="form.xuatden"
                >
                  <a-select-option v-for="item in lsXuatden" :key="item.value" :value="item.value">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item
                label="Ghi chú"
                prop="ghichu"
                style="margin-bottom: 20px!important;">
                <a-textarea v-model="form.ghichu"></a-textarea>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
      </a-card>
      <a-card title="Chi tiết phiếu xuất">
        <a-form-model
          :model="formDetail"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          labelAlign="left"
          style="padding: 15px 20px">
          <a-row :gutter="16">
            <a-col :xs="24" :lg="10" :md="10">
              <a-form-model-item
                label="Thiết bị"
                prop="thietbi"
                style="margin-bottom: 20px!important;">
                <a-select
                  v-model="formDetail.thietbi"
                >
                  <a-select-option v-for="item in lsThietbi" :key="item.value" :value="item.value">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col :xs="24" :lg="10" :md="10">
              <a-form-model-item
                label="Số lượng"
                prop="soluong"
                style="margin-bottom: 20px!important;">
                <a-input v-model="formDetail.soluong"></a-input>
              </a-form-model-item>
            </a-col>
            <a-col :xs="24" :lg="4" :md="4">
              <div>
                <a-button class="ant-btn-success">Thêm vào DS</a-button>
              </div>
            </a-col>
          </a-row>
          <a-row :gutter="16" type="flex">
            <a-col :span="24">
              <a-table
                ref="tb1"
                :columns="columns"
                :data-source="data"
                :rowKey=" (rowKey, index ) => index"
                :pagination="data.length === 0 ? false : pagination"
                :loading="loading"
                :scroll="{ x: '100%' }"
                :locale="{ emptyText: 'Chưa có dữ liệu' }"
                @change="handleTableChange"
                class="ant-table-bordered">
                <template slot="action">
                  <span style="cursor: pointer">
                    <a-icon
                      type="delete"
                      :style="{color: 'red', fontSize: '18px'}"
                    />
                  </span>
                </template>
              </a-table>
              <div style="display: flex; justify-content: flex-end;margin-top: 20px ">
                <a-checkbox :checked="formDetail.inphieuxuat" v-model="formDetail.inphieuxuat">
                  <span>In phiếu xuất</span>
                </a-checkbox>
              </div>
              <div style="display: flex; justify-content: flex-end;margin-top: 20px ">
                <a-button class="ant-btn-success" style="margin-right: 20px">Xem trước</a-button>
                <a-button class="ant-btn-success" style="margin-right: 20px">Lưu phiếu</a-button>
              </div>
            </a-col>
          </a-row>
        </a-form-model>

      </a-card>

    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/pages/layouts/MainLayout'
import MenuProfile from '@/components/MenuProfile'
import resizeableTitle from '@/utils/resizable-columns'
import TableEmptyText from '@/utils/table-empty-text'
import columns from './columns'
import _merge from 'lodash/merge'

const ResizeableTitle = resizeableTitle(columns)
export default {
  components: {
    MainLayout,
    MenuProfile
  },
  mixins: [TableEmptyText],
  name: 'InventoryReceivingVoucher',
  data () {
    this.components = {
      header: {
        cell: ResizeableTitle
      }
    }
    return {
      activeSearchKey: 1,
      activeResultKey: 1,
      pagination: {
        current: 1,
        total: 1,
        pageSize: 15,
        pageSizes: 500,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['15', '25', '50'],
        showTotal: (total) => {
          return 'Tổng số dòng ' + total
        }
      },
      loading: false,
      columns,
      form: {
        tram: '1',
        sophieu: '',
        phuongthuc: '1',
        nguoigiao: undefined,
        ngaylap: undefined,
        ca: undefined,
        sochungtu: undefined,
        xuatden: undefined,
        ghichu: ''
      },
      lsTram: [
        {
          value: '1',
          name: 'Trung tâm điều hành'
        }
      ],
      lsPhuongthuc: [
        {
          value: '1',
          name: 'Xuất thẻ cho trạm'
        }
      ],
      lsNguoigiao: [
        {
          value: '1',
          name: ''
        }
      ],
      lsCa: [
        {
          value: '1',
          name: 'Ca 2'
        }
      ],
      lsXuatden: [
        {
          value: '1',
          name: ''
        }
      ],
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      formDetail: {
        thietbi: '1',
        soluong: '',
        inphieuxuat: false
      },
      lsThietbi: [
        {
          value: '1',
          name: 'Thẻ IC'
        }
      ],
      data: [
        {
          rowIndex: '1',
          thietbi: 'Thẻ IC',
          soluong: '1,000'
        }
      ]
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.scrollBarOfTable()
  },
  computed: {
  },
  methods: {

    handleTableChange (pagination, filters, sorter) {
      this.pagination = pagination
      this.getData()
    },
    getData (value) {
      this.pagination = _merge(this.pagination, this.handlePaginationData(this.data))
    },
    clickMenu (item, key) {
      console.log(item, key)
    }

  }
}
</script>
