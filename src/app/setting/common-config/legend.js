export default [
  {
    title: '图例组件',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['title'],
        key: 'show',
      },
      {
        label: '文本',
        attr: ['title'],
        key: 'text',
        type: 'input'
      },
      {
        label: '标题样式',
        attr: ['title'],
        key: 'textStyle',
        item: [
          {
            type: 'colorSelect',
            label: '颜色',
            attr: ['title', 'textStyle'],
            key: 'color',
          },
          {
            type: 'select',
            label: '字体风格',
            key: 'fontStyle',
            attr: ['title', 'textStyle'],
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
            attr: ['title', 'textStyle'],
            key: 'fontWeight',
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
            attr: ['title', 'textStyle'],
            key: 'fontSize',
            defaultValue: 12,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['title', 'textStyle'],
            key: 'lingHeight',
            range: [12, 72],
          },
        ],
      },
      {
        label: '副标题文本',
        attr: ['title'],
        key: 'subtext',
        type: 'input'
      },
      {
        label: '副标题样式',
        attr: ['title'],
        key: 'subtextStyle',
        item: [
          {
            type: 'colorSelect',
            label: '颜色',
            attr: ['title', 'subtextStyle'],
            key: 'color',
          },
          {
            type: 'select',
            label: '字体风格',
            key: 'fontStyle',
            attr: ['title', 'subtextStyle'],
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
            attr: ['title', 'subtextStyle'],
            key: 'fontWeight',
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
            attr: ['title', 'subtextStyle'],
            key: 'fontSize',
            defaultValue: 'normal',
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['title', 'subtextStyle'],
            key: 'lingHeight',
            range: [12, 72],
          },
        ],
      },
      {
        type: 'select',
        label: '水平对齐',
        key: 'textAlign',
        attr: ['title'],
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
        key: 'textVerticalAlign',
        attr: ['title'],
        options: [
          'auto',
          'top',
          'bottom',
          'middle',
        ],
      },
      {
        label: '标题内边距',
        attr: ['title'],
        key: 'padding',
        type: 'input',
        format: (e) => {
          return e.split(',').length <= 1 
          ? isNaN(parseFloat(e.trim())) ? 0 :  parseFloat(e.trim())
            : e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : parseFloat(v.trim()));
        },
      },
      {
        type: 'slider',
        label: '主副标题之间的间距',
        attr: ['title'],
        key: 'itemGap',
        range: [0, 100],
      },
      {
        type: 'input',
        label: 'grid 组件离容器左侧的距离',
        attr: ['title'],
        key: 'left',
        desc: [
          "left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right",
          "如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐"
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器右侧的距离',
        attr: ['title'],
        key: 'right',
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器底侧的距离',
        attr: ['title'],
        key: 'bottom',
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: 'grid 组件离容器上侧的距离',
        attr: ['title'],
        key: 'top',
        desc: [
          "同left",
        ],
      },
      {
        type: 'colorSelect',
        label: '标题背景色',
        attr: ['title'],
        key: 'backgroundColor',
      },
    ],
  },
];