export default [
  {
    title: 'STT',
    dataIndex: 'rowIndex',
    scopedSlots: { customRender: 'rowIndex' },
    align: 'center',
    ellipsis: true,
    width: 80
  },
  {
    title: 'Thiết bị',
    dataIndex: 'thietbi',
    scopedSlots: { customRender: 'thietbi' },
    align: 'left',
    ellipsis: true
  },
  {
    title: 'SL thẻ tồn',
    dataIndex: 'soluongtheton',
    scopedSlots: { customRender: 'soluongtheton' },
    align: 'right',
    ellipsis: true
  },
  {
    title: 'SL thẻ hủy',
    dataIndex: 'soluongthehuy',
    scopedSlots: { customRender: 'soluongthehuy' },
    align: 'right',
    ellipsis: true
  },
  {
    title: 'Trạm được giao',
    dataIndex: 'tramduocgiao',
    scopedSlots: { customRender: 'tramduocgiao' },
    align: 'left',
    ellipsis: true
  }

]
