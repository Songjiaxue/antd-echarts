export default [
  {
    title: '系列列表',
    type: 'change',
    changeItem: [
      {
        type: 'select',
        label: '图表类型',
        options: [
          'line', 'bar', 'pie', 'lines', 'radar', 'graph', 'sunburst', 'funnel', 'gauge'
        ],
      },
    ],
  },
];