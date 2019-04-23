export default [
  {
    title: '图例组件',
    item: [
      {
        type: 'select',
        label: '图例类型',
        attr: ['legend', 'type'],
        defaultValue: 'plain',
        options: [
          'plain',
          'scroll',
        ],
      },
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['legend', 'show'],
      },
      {
        type: 'input',
        label: '图例组件离容器左侧的距离',
        attr: ['legend', 'left'],
        key: 'left',
        desc: [
          "left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right",
          "如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐"
        ],
      },
      {
        type: 'input',
        label: '图例组件离容器右侧的距离',
        attr: ['legend', 'right'],
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: '图例组件离容器底侧的距离',
        attr: ['legend', 'bottom'],
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: '图例组件离容器上侧的距离',
        attr: ['legend', 'top'],
        desc: [
          "同left",
        ],
      },
      {
        type: 'select',
        label: '图例列表的布局朝向',
        attr: ['legend', 'orient'],
        defaultValue: 'horizontal',
        options: [
          'horizontal',
          'vertical',
        ],
      },
      {
        type: 'slider',
        label: '图例每项之间的间隔',
        attr: ['legend', 'itemGap'],
        range: [0, 100],
        defaultValue: 10,
      },
      {
        label: '图例的公用文本样式',
        item: [
          {
            type: 'colorSelect',
            label: '颜色',
            attr: ['legend', 'textStyle', 'color'],
            defaultValue: '#333'
          },
          {
            type: 'select',
            label: '字体粗细',
            attr: ['legend', 'textStyle', 'fontWeight'],
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
            attr: ['legend', 'textStyle', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
        ],
      },
      {
        label: '图例的数据数组',
        type: 'add',
        attr: ['legend', 'data'],
        item: [
          {
            label: '图例项的名称',
            attr: ['name'],
            key: 'value',
            type: 'input',
          },
          {
            label: '图例项的文本样式',
            item: [
              {
                type: 'colorSelect',
                label: '颜色',
                attr: ['textStyle', 'color'],
                defaultValue: '#333'
              },
              {
                type: 'select',
                label: '字体粗细',
                attr: ['textStyle', 'fontWeight'],
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
                attr: ['textStyle', 'fontSize'],
                defaultValue: 12,
                range: [12, 72],
              },
            ],
          },
          
        ],
      },
      {
        type: 'colorSelect',
        label: '图例背景色',
        attr: ['legend', 'backgroundColor'],
        defaultValue: 'transparent',
      },
      {
        type: 'colorSelect',
        label: '图例的边框颜色',
        attr: ['legend', 'borderColor'],
        defaultValue: '#ccc',
      },
      {
        type: 'slider',
        label: '图例的边框线宽',
        attr: ['legend', 'borderWidth'],
        range: [0, 10],
      },
      {
        type: 'slider',
        label: '按钮和页信息之间的间隔',
        attr: ['legend', 'pageButtonItemGap'],
        range: [0, 100],
        defaultValue: 5,
      },
      {
        type: 'slider',
        label: '图例控制块和图例项之间的间隔',
        attr: ['legend', 'pageButtonGap'],
        range: [0, 100],
        defaultValue: 5,
      },
      {
        type: 'select',
        label: '图例控制块的位置',
        attr: ['legend', 'pageButtonPosition'],
        defaultValue: 'end',
        options: [
          'start',
          'end',
        ],
      },
      {
        label: '图例页信息的文字样式',
        item: [
          {
            type: 'colorSelect',
            label: '文字颜色',
            attr: ['legend', 'pageTextStyle', 'color'],
            defaultValue: '#333'
          },
          {
            type: 'select',
            label: '文字字体粗细',
            attr: ['legend', 'pageTextStyle', 'fontWeight'],
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
            label: '文字字体大小',
            attr: ['legend', 'pageTextStyle', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
        ],
      },
      {
        label: '图例翻页是否使用动画',
        type: 'switch',
        attr: ['legend', 'animation'],
      },
      {
        type: 'slider',
        label: '图例翻页时的动画时长',
        attr: ['legend', 'animationDurationUpdate'],
        defaultValue: 800,
        range: [0, 3000],
      },
    ],
  },
];