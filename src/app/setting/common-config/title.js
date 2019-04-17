export default [
  {
    title: '标题',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['title', 'show'],
      },
      {
        label: '文本',
        attr: ['title', 'text'],
        type: 'input'
      },
      {
        label: '标题样式',
        item: [
          {
            type: 'colorSelect',
            label: '颜色',
            attr: ['title', 'textStyle', 'color'],
            defaultValue: '#333'
          },
          {
            type: 'select',
            label: '字体风格',
            attr: ['title', 'textStyle', 'fontStyle'],
            defaultValue: 'normal',
            options: [
              'normal',
              'italic',
              'oblique',
            ],
          },
          {
            type: 'select',
            label: '字体粗细',
            attr: ['title', 'textStyle', 'fontWeight'],
            defaultValue: 'normal',
            options: [
              'normal',
              'bold',
              'bolder',
              'lighter',
            ],
          },
          {
            type: 'slider',
            label: '字体大小',
            attr: ['title', 'textStyle', 'fontSize'],
            defaultValue: 18,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['title', 'textStyle', 'lineHeight'],
            range: [12, 72],
          },
        ],
      },
      {
        label: '副标题文本',
        attr: ['title', 'subtext'],
        type: 'input'
      },
      {
        label: '副标题样式',
        item: [
          {
            type: 'colorSelect',
            label: '颜色',
            attr: ['title', 'subtextStyle', 'color'],
            key: 'color',
            defaultValue: '#aaa',
          },
          {
            type: 'select',
            label: '字体风格',
            attr: ['title', 'subtextStyle', 'fontStyle'],
            defaultValue: 'normal',
            options: [
              'normal',
              'italic',
              'oblique',
            ],
          },
          {
            type: 'select',
            label: '字体粗细',
            attr: ['title', 'subtextStyle', 'fontWeight'],
            defaultValue: 'normal',
            options: [
              'normal',
              'bold',
              'bolder',
              'lighter',
            ],
          },
          {
            type: 'slider',
            label: '字体大小',
            attr: ['title', 'subtextStyle', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['title', 'subtextStyle', 'lineHeight'],
            range: [12, 72],
          },
        ],
      },
      {
        type: 'select',
        label: '水平对齐',
        attr: ['title', 'textAlign'],
        defaultValue: 'auto',
        options: [
          'auto',
          'left',
          'right',
          'center',
        ],
      },
      {
        type: 'select',
        label: '垂直对齐',
        attr: ['title', 'textVerticalAlign'],
        defaultValue: 'auto',
        options: [
          'auto',
          'top',
          'bottom',
          'middle',
        ],
      },
      {
        label: '标题内边距',
        attr: ['title', 'padding'],
        type: 'input',
        defaultValue: 5,
        format: (e) => {
          return e.split(',').length <= 1 
          ? isNaN(parseFloat(e.trim())) ? 0 :  parseFloat(e.trim())
            : e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : parseFloat(v.trim()));
        },
      },
      {
        type: 'slider',
        label: '主副标题之间的间距',
        attr: ['title', 'itemGap'],
        defaultValue: 10,
        range: [0, 100],
      },
      {
        type: 'input',
        label: 'grid 组件离容器左侧的距离',
        attr: ['title', 'left'],
        defaultValue: 'auto',
        desc: [
          "left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right",
          "如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐"
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器右侧的距离',
        attr: ['title', 'right'],
        defaultValue: 'auto',
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器底侧的距离',
        attr: ['title', 'bottom'],
        defaultValue: 'auto',
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器上侧的距离',
        attr: ['title', 'top'],
        defaultValue: 'auto',
        desc: [
          "同left",
        ],
      },
      {
        type: 'colorSelect',
        label: '标题背景色',
        attr: ['title', 'backgroundColor'],
        defaultValue: 'transparent',
      },
    ],
  },
];