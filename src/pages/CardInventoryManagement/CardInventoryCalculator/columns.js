export default [
  {
    title: 'Hủy chốt',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
    align: 'center',
    ellipsis: true,
    width: 80
  },
  {
    title: 'Ngày chốt',
    dataIndex: 'ngaychot',
    scopedSlots: { customRender: 'ngaychot' },
    align: 'center',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Thiết bị',
    dataIndex: 'thietbi',
    scopedSlots: { customRender: 'thietbi' },
    align: 'left',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Tồn đầu',
    dataIndex: 'tondau',
    scopedSlots: { customRender: 'tondau' },
    align: 'right',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Nhập từ NCC',
    dataIndex: 'nhaptutrungtam',
    scopedSlots: { customRender: 'nhaptutrungtam' },
    align: 'right',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Nhập từ trạm',
    dataIndex: 'nhaptrakho',
    scopedSlots: { customRender: 'nhaptrakho' },
    align: 'right',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Xuất cho trạm',
    dataIndex: 'xuatchonhanvien',
    scopedSlots: { customRender: 'xuatchonhanvien' },
    align: 'right',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Xuất trả NCC',
    dataIndex: 'xuatchotramkhac',
    scopedSlots: { customRender: 'xuatchotramkhac' },
    align: 'right',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Xuất Hủy',
    dataIndex: 'xuathuy',
    scopedSlots: { customRender: 'xuathuy' },
    align: 'right',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Tồn cuối',
    dataIndex: 'toncuoi',
    scopedSlots: { customRender: 'toncuoi' },
    align: 'right',
    ellipsis: true,
    width: 120
  }

]
