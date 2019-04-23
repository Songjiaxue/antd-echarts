export default [
  {
    title: '直角坐标系内绘图网格',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: false,
        attr: ['grid', 'show'],
      },
      {
        type: 'input',
        label: 'grid 组件离容器左侧的距离',
        attr: ['grid', 'left'],
        defaultValue: '10%',
        desc: [
          "left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right",
          "如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐"
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器右侧的距离',
        attr: ['grid', 'right'],
        defaultValue: '10%',
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器底侧的距离',
        attr: ['grid', 'bottom'],
        defaultValue: 60,
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器上侧的距离',
        attr: ['grid', 'top'],
        defaultValue: 60,
        desc: [
          "同left",
        ],
      },
      {
        type: 'slider',
        label: 'grid 组件的宽度',
        attr: ['grid', 'width'],
        range: [0, 1000],
      },
      {
        type: 'slider',
        label: 'grid 组件的高度',
        attr: ['grid', 'height'],
        range: [0, 1000],
      },
      {
        type: 'colorSelect',
        label: '网格背景色',
        attr: ['grid', 'backgroundColor'],
        defaultValue: 'transparent'
      },
    ],
  },
];