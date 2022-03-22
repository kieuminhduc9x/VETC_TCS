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
    title: 'Đơn vị',
    dataIndex: 'tram',
    scopedSlots: { customRender: 'tram' },
    align: 'left',
    ellipsis: true
  },
  {
    title: 'Thiết bị',
    dataIndex: 'thietbi',
    scopedSlots: { customRender: 'thietbi' },
    align: 'left',
    ellipsis: true
  },
  {
    title: 'Số lượng thẻ',
    dataIndex: 'soluongthe',
    scopedSlots: { customRender: 'soluongthe' },
    align: 'right',
    ellipsis: true
  }

]
