export default [
  {
    title: '直角坐标系 grid 中的 y 轴',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['yAxis', 'show'],
      },
      {
        type: 'select',
        label: 'y轴位置',
        attr: ['yAxis', 'position'],
        defaultValue: 'left',
        options: [
          'left',
          'right',
        ],
      },
      {
        type: 'select',
        label: '坐标轴类型',
        attr: ['yAxis', 'type'],
        defaultValue: 'category',
        options: [
          'value',
          'category',
          'time',
          'log',
        ],
      },
      {
        label: '坐标轴名称',
        attr: ['yAxis', 'name'],
        type: 'input'
      },
      {
        type: 'select',
        label: '名称显示位置',
        attr: ['yAxis', 'nameLocation'],
        defaultValue: 'end',
        options: [
          'start',
          'center',
          'end',
        ],
      },
      {
        label: '名称样式',
        item: [
          {
            type: 'colorSelect',
            label: '颜色',
            attr: ['yAxis', 'textStyle', 'color'],
            defaultValue: '#333'
          },
          {
            type: 'select',
            label: '字体粗细',
            attr: ['yAxis', 'textStyle', 'fontWeight'],
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
            attr: ['yAxis', 'textStyle', 'fontSize'],
            defaultValue: 18,
            range: [12, 72],
          },
        ],
      },
      {
        type: 'slider',
        label: '坐标轴名称与轴线之间的距离',
        attr: ['yAxis', 'nameGap'],
        defaultValue: 15,
        range: [0, 100],
      },
      {
        type: 'slider',
        label: '坐标轴名字旋转',
        attr: ['yAxis', 'nameRotate'],
        range: [0, 360],
      },
      {
        label: '坐标轴轴线相关设置',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: true,
            attr: ['yAxis', 'axisLine', 'show'],
          },
          {
            label: '轴线两边的箭头',
            attr: ['yAxis', 'axisLine', 'symbol'],
            type: 'input',
            defaultValue: 'none',
            format: (e) => {
              return e.split(',').length <= 1
                ? e.trim() : e.split(',').map(v => v.trim())
            },
            desc: [
              '可以是字符串，表示两端使用同样的箭头；或者长度为 2 的字符串数组，分别表示两端的箭头',
              "默认不显示箭头，即 'none', 两端都显示箭头可以设置为 'arrow'",
              "只在末端显示箭头可以设置为 'none', 'arrow'"
            ],
          },
          {
            label: '坐标轴线样式',
            item: [
              {
                type: 'colorSelect',
                label: '颜色',
                attr: ['yAxis', 'axisLine', 'lineStyle', 'color'],
                defaultValue: '#333'
              },
              {
                type: 'slider',
                label: '图形透明度',
                attr: ['yAxis', 'axisLine', 'lineStyle', 'opacity'],
                defaultValue: 1,
                range: [0, 1],
                step: 0.1,
              },
            ],
          },
        ],
      },
      {
        label: '坐标轴刻度标签的相关设置',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: true,
            attr: ['yAxis', 'axisLabel', 'show'],
          },
          {
            type: 'slider',
            label: '刻度标签旋转的角度',
            attr: ['yAxis', 'axisLabel', 'rotate'],
            range: [0, 360],
          },
          {
            type: 'slider',
            label: '刻度标签与轴线之间的距离',
            attr: ['yAxis', 'axisLabel', 'margin'],
            defaultValue: 8,
            range: [0, 100],
          },
          {
            type: 'colorSelect',
            label: '刻度标签文字的颜色',
            attr: ['yAxis', 'axisLabel', 'color'],
          },
          {
            type: 'select',
            label: '字体粗细',
            attr: ['yAxis', 'axisLabel', 'fontWeight'],
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
            attr: ['yAxis', 'axisLabel', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
        ],
      },
      {
        label: '坐标轴在 grid 区域中的分隔线',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: false,
            attr: ['yAxis', 'splitLine', 'show'],
          },
          {
            label: '坐标轴线样式',
            item: [
              {
                type: 'colorSelect',
                label: '颜色',
                attr: ['yAxis', 'splitLine', 'lineStyle', 'color'],
                defaultValue: '#333'
              },
              {
                type: 'slider',
                label: '图形透明度',
                attr: ['yAxis', 'splitLine', 'lineStyle', 'opacity'],
                defaultValue: 1,
                range: [0, 1],
                step: 0.1,
              },
            ],
          },
        ],
      },
      {
        label: '类目数据',
        type: 'add',
        attr: ['yAxis', 'data'],
        desc: [
          "在类目轴（type: 'category'）中有效",
          "如果设置了 type 是 'category'，但没有设置 axis.data，则 axis.data 的内容会自动从 series.data 中获取"
        ],
        item: [
          {
            label: '类目名称',
            attr: ['value'],
            key: 'value',
            type: 'input',
          },
          {
            label: '类目标签的文字样式',
            item: [
              {
                type: 'colorSelect',
                label: '颜色',
                attr: ['textStyle', 'color'],
                key: 'color',
                defaultValue: '#333'
              },
              {
                type: 'select',
                label: '字体粗细',
                attr: ['textStyle', 'fontWeight'],
                defaultValue: 'normal',
                key: 'fontWeight',
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
                key: 'fontSize',
              },
            ],
          },
        ],
      },
    ],
  },
];