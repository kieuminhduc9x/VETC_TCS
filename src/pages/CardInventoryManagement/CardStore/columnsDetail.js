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
    title: 'Người được giao',
    dataIndex: 'nguoiduocgiao',
    scopedSlots: { customRender: 'nguoiduocgiao' },
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
