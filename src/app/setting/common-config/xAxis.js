export default [
  {
    title: '直角坐标系 grid 中的 x 轴',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['xAxis', 'show'],
      },
      {
        type: 'select',
        label: 'x轴位置',
        attr: ['xAxis', 'position'],
        defaultValue: 'bottom',
        options: [
          'bottom',
          'top',
        ],
      },
      {
        type: 'select',
        label: '坐标轴类型',
        attr: ['xAxis', 'type'],
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
        attr: ['xAxis', 'name'],
        type: 'input'
      },
      {
        type: 'select',
        label: '名称显示位置',
        attr: ['xAxis', 'nameLocation'],
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
            attr: ['xAxis', 'textStyle', 'color'],
            defaultValue: '#333'
          },
          {
            type: 'select',
            label: '字体风格',
            attr: ['xAxis', 'textStyle', 'fontStyle'],
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
            attr: ['xAxis', 'textStyle', 'fontWeight'],
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
            attr: ['xAxis', 'textStyle', 'fontSize'],
            defaultValue: 18,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['xAxis', 'textStyle', 'lineHeight'],
            range: [12, 72],
          },
          {
            type: 'select',
            label: '水平对齐',
            attr: ['xAxis', 'textStyle', 'align'],
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
            attr: ['xAxis', 'textStyle', 'verticalAlign'],
            defaultValue: 'auto',
            options: [
              'auto',
              'top',
              'bottom',
              'middle',
            ],
          },
        ],
      },
      {
        type: 'slider',
        label: '坐标轴名称与轴线之间的距离',
        attr: ['xAxis', 'nameGap'],
        defaultValue: 15,
        range: [0, 100],
      },
      {
        type: 'slider',
        label: '坐标轴名字旋转',
        attr: ['xAxis', 'nameRotate'],
        range: [0, 360],
      },
      {
        type: 'slider',
        label: '坐标轴最小间隔大小',
        attr: ['xAxis', 'minInterval'],
        range: [0, 1000],
      },
      {
        type: 'slider',
        label: '坐标轴最大间隔大小',
        attr: ['xAxis', 'maxInterval'],
        range: [0, 1000],
      },
      {
        type: 'slider',
        label: '强制设置间隔大小',
        attr: ['xAxis', 'interval'],
        range: [0, 1000],
      },
      {
        label: '坐标轴轴线相关设置',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: true,
            attr: ['xAxis', 'axisLine', 'show'],
          },
          {
            label: '轴线两边的箭头',
            attr: ['xAxis', 'axisLine', 'symbol'],
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
                attr: ['xAxis', 'axisLine', 'lineStyle', 'color'],
                defaultValue: '#333'
              },
              {
                type: 'slider',
                label: '坐标轴线线宽',
                attr: ['xAxis', 'axisLine', 'lineStyle', 'width'],
                defaultValue: 1,
                range: [1, 20],
              },
              {
                type: 'select',
                label: '坐标轴线线的类型',
                attr: ['xAxis', 'axisLine', 'lineStyle', 'type'],
                defaultValue: 'solid',
                options: [
                  'solid',
                  'dashed',
                  'dotted',
                ],
              },
              {
                type: 'slider',
                label: '图形透明度',
                attr: ['xAxis', 'axisLine', 'lineStyle', 'opacity'],
                defaultValue: 1,
                range: [0, 1],
                step: 0.1,
              },
            ],
          },
        ],
      },
      {
        label: '坐标轴刻度相关设置',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: true,
            attr: ['xAxis', 'axisTick', 'show'],
          },
          {
            type: 'slider',
            label: '坐标轴刻度的长度',
            attr: ['title', 'axisTick', 'length'],
            defaultValue: 5,
            range: [0, 10],
          },
          {
            label: '坐标轴刻度线样式',
            item: [
              {
                type: 'colorSelect',
                label: '颜色',
                attr: ['xAxis', 'axisTick', 'lineStyle', 'color'],
                defaultValue: '#333'
              },
              {
                type: 'slider',
                label: '坐标轴线线宽',
                attr: ['xAxis', 'axisTick', 'lineStyle', 'width'],
                defaultValue: 1,
                range: [1, 20],
              },
              {
                type: 'select',
                label: '坐标轴线线的类型',
                attr: ['xAxis', 'axisTick', 'lineStyle', 'type'],
                defaultValue: 'solid',
                options: [
                  'solid',
                  'dashed',
                  'dotted',
                ],
              },
              {
                type: 'slider',
                label: '图形透明度',
                attr: ['xAxis', 'axisTick', 'lineStyle', 'opacity'],
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
            attr: ['xAxis', 'axisLabel', 'show'],
          },
          {
            type: 'slider',
            label: '刻度标签旋转的角度',
            attr: ['xAxis', 'axisLabel', 'rotate'],
            range: [0, 360],
          },
          {
            type: 'slider',
            label: '刻度标签与轴线之间的距离',
            attr: ['xAxis', 'axisLabel', 'margin'],
            defaultValue: 8,
            range: [0, 100],
          },
          {
            type: 'colorSelect',
            label: '刻度标签文字的颜色',
            attr: ['xAxis', 'axisLabel', 'color'],
          },
          {
            type: 'select',
            label: '字体风格',
            attr: ['xAxis', 'axisLabel', 'fontStyle'],
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
            attr: ['xAxis', 'axisLabel', 'fontWeight'],
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
            attr: ['xAxis', 'axisLabel', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['xAxis', 'axisLabel', 'lineHeight'],
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
            attr: ['xAxis', 'splitLine', 'show'],
          },
          {
            label: '坐标轴线样式',
            item: [
              {
                type: 'colorSelect',
                label: '颜色',
                attr: ['xAxis', 'splitLine', 'lineStyle', 'color'],
                defaultValue: '#333'
              },
              {
                type: 'slider',
                label: '坐标轴线线宽',
                attr: ['xAxis', 'splitLine', 'lineStyle', 'width'],
                defaultValue: 1,
                range: [1, 20],
              },
              {
                type: 'select',
                label: '坐标轴线线的类型',
                attr: ['xAxis', 'splitLine', 'lineStyle', 'type'],
                defaultValue: 'solid',
                options: [
                  'solid',
                  'dashed',
                  'dotted',
                ],
              },
              {
                type: 'slider',
                label: '图形透明度',
                attr: ['xAxis', 'splitLine', 'lineStyle', 'opacity'],
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
        attr: ['xAxis', 'data'],
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
                label: '字体风格',
                attr: ['textStyle', 'fontStyle'],
                defaultValue: 'normal',
                key: 'fontStyle',
                options: [
                  'normal',
                  'italic',
                  'oblique',
                ],
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
              {
                type: 'slider',
                label: '行高',
                attr: ['textStyle', 'lineHeight'],
                range: [12, 72],
                key: 'lineHeight',
              },
            ],
          },
        ],
      },
    ],
  },
];