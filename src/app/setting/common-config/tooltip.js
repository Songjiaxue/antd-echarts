export default [
  {
    title: '提示框组件',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['tooltip', 'show'],
      },
      {
        type: 'select',
        label: '触发类型',
        attr: ['tooltip', 'trigger'],
        defaultValue: 'item',
        options: [
          'item',
          'axis',
          'none',
        ],
      },
      {
        label: '显示提示框浮层',
        type: 'switch',
        defaultValue: true,
        attr: ['tooltip', 'showContent'],
      },
      {
        label: '是否将 tooltip 框限制在图表的区域内',
        type: 'switch',
        defaultValue: false,
        attr: ['tooltip', 'confine'],
      },
      {
        type: 'colorSelect',
        label: '提示框浮层的背景颜色',
        attr: ['tooltip', 'backgroundColor'],
        defaultValue: 'rgba(50,50,50,0.7)',
      },
    ],
  },
];