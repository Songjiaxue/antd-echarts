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
        label: '是否包含坐标轴的刻度标签',
        type: 'switch',
        defaultValue: false,
        attr: ['grid', 'containLabel'],
      },
      {
        type: 'colorSelect',
        label: '网格背景色',
        attr: ['grid', 'backgroundColor'],
        defaultValue: 'transparent'
      },
      {
        type: 'colorSelect',
        label: '网格边框色',
        attr: ['grid', 'borderColor'],
        defaultValue: '#ccc',
      },
      {
        type: 'slider',
        label: '网格边框线宽',
        attr: ['grid', 'borderWidth'],
        defaultValue: 1,
        range: [0, 10],
      },
      {
        type: 'slider',
        label: '图形阴影模糊大小',
        attr: ['grid', 'shadowBlur'],
        range: [0, 100],
      },
      {
        type: 'colorSelect',
        label: '图形阴影颜色',
        attr: ['grid','shadowColor'],
      },
      {
        type: 'slider',
        label: '阴影水平方向上的偏移距离',
        attr: ['grid', 'shadowOffsetX'],
        range: [0, 10],
        defaultValue: 0,
      },
      {
        type: 'slider',
        label: '阴影垂直方向上的偏移距离',
        attr: ['grid', 'shadowOffsetY'],
        range: [0, 10],
        defaultValue: 0,
      },
    ],
  },
];