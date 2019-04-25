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
            attr: ['xAxis', 'nameTextStyle', 'color'],
            defaultValue: '#333'
          },
          {
            type: 'select',
            label: '字体风格',
            attr: ['xAxis', 'nameTextStyle', 'fontStyle'],
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
            attr: ['xAxis', 'nameTextStyle', 'fontWeight'],
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
            attr: ['xAxis', 'nameTextStyle', 'fontSize'],
            defaultValue: 18,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['xAxis', 'nameTextStyle', 'lineHeight'],
            range: [12, 72],
          },
          {
            type: 'select',
            label: '水平对齐',
            attr: ['xAxis', 'nameTextStyle', 'align'],
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
            attr: ['xAxis', 'nameTextStyle', 'verticalAlign'],
            defaultValue: 'auto',
            options: [
              'auto',
              'top',
              'bottom',
              'middle',
            ],
          },
          {
            type: 'colorSelect',
            label: '文字块背景色',
            attr: ['xAxis', 'nameTextStyle', 'backgroundColor'],
            defaultValue: 'transparent',
          },
          {
            type: 'colorSelect',
            label: '文字块边框颜色',
            attr: ['xAxis', 'nameTextStyle', 'borderColor'],
            defaultValue: 'transparent',
          },
          {
            type: 'slider',
            label: '文字块边框宽度',
            attr: ['xAxis', 'nameTextStyle', 'borderWidth'],
            range: [0, 10],
            defaultValue: 0,
          },
          {
            type: 'input',
            label: '文字块的圆角',
            attr: ['xAxis', 'nameTextStyle', 'borderRidus'],
            defaultValue: 0,
            format: (e) => {
              return e.indexOf(',') > -1 ?
                e.split(',').map(v => isNaN(parseFloat(v.trim()) ? 0 : v.trim()))
                  : isNaN(parseFloat(e.trim())) ? 0 : e.trim()
            },
            desc: [
              "设置四个角的圆角大小为 5 => 5",
              "分别设置四个方向的圆角大小(上右下左) => 5,10,5,10",
            ],
          },
          {
            type: 'input',
            label: '图例内边距',
            attr: ['legend', 'nameTextStyle', 'padding'],
            defaultValue: 5,
            format: (e) => {
              return e.indexOf(',') > -1 ?
                e.split(',').map(v => isNaN(parseFloat(v.trim()) ? 0 : v.trim()))
                  : isNaN(parseFloat(e.trim())) ? 0 : e.trim()
            },
            desc: [
              "设置内边距为 5 => 5",
              "设置上下的内边距为 5，左右的内边距为 10 => 5,10",
              "分别设置四个方向的内边距(上右下左) => 5,10,5,10",
            ],
          },
          {
            type: 'slider',
            label: '图形阴影模糊大小',
            attr: ['legend', 'nameTextStyle', 'shadowBlur'],
            range: [0, 100],
          },
          {
            type: 'colorSelect',
            label: '图形阴影颜色',
            attr: ['legend','nameTextStyle', 'shadowColor'],
          },
          {
            type: 'slider',
            label: '阴影水平方向上的偏移距离',
            attr: ['legend', 'nameTextStyle', 'shadowOffsetX'],
            range: [0, 10],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '阴影垂直方向上的偏移距离',
            attr: ['legend', 'nameTextStyle', 'shadowOffsetY'],
            range: [0, 10],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字块宽度',
            attr: ['legend', 'nameTextStyle', 'width'],
            range: [0, 1000],
          },
          {
            type: 'slider',
            label: '文字块高度',
            attr: ['legend', 'nameTextStyle', 'height'],
            range: [0, 1000],
          },
          {
            type: 'colorSelect',
            label: '文字本身的描边颜色',
            attr: ['legend', 'nameTextStyle', 'textBorderColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的描边宽度',
            attr: ['legend', 'nameTextStyle', 'textBorderWidth'],
            range: [0, 10],
            defaultValue: 0,
          },
          {
            type: 'colorSelect',
            label: '文字本身的阴影颜色',
            attr: ['legend', 'nameTextStyle', 'textShadowColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的阴影长度',
            attr: ['legend', 'nameTextStyle', 'textShadowBlur'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 X 偏移',
            attr: ['legend', 'nameTextStyle', 'textShadowOffsetX'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 Y 偏移',
            attr: ['legend', 'nameTextStyle', 'textShadowOffsetY'],
            range: [0, 100],
            defaultValue: 0,
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
        label: '反向坐标轴',
        type: 'switch',
        defaultValue: false,
        attr: ['xAxis', 'inverse'],
      },
      {
        label: '坐标轴两边留白策略',
        type: 'input',
        attr: ['xAxis', 'boundaryGap'],
        desc: [
          "类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true => true",
          "非类目轴,分别表示数据最小值和最大值的延伸范围，在设置 min 和 max 后无效 => 20%, 20%"
        ],
        format: (e) => {
          return e.indexOf(',') > -1 ? e.split(',')
            : e === 'true' ? true : false;
        },
      },
      {
        label: '坐标轴刻度最小值',
        type: 'input',
        attr: ['xAxis', 'min'],
      },
      {
        label: '坐标轴刻度最大值',
        type: 'input',
        attr: ['xAxis', 'max'],
      },
      {
        label: '脱离 0 值比例',
        type: 'switch',
        defaultValue: false,
        attr: ['xAxis', 'scale'],
        desc: [
          "设置成 true 后坐标刻度不会强制包含零刻度"
        ],
      },
      {
        type: 'slider',
        label: '坐标轴的分割段数',
        attr: ['xAxis', 'splitNumber'],
        range: [0, 10],
        defaultValue:5,
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
        type: 'slider',
        label: '对数轴的底数',
        attr: ['xAxis', 'logBase'],
        range: [0, 1000],
      },
      {
        label: '坐标轴静态无法交互',
        type: 'switch',
        defaultValue: false,
        attr: ['xAxis', 'silent'],
      },
      {
        label: '坐标轴的标签响应和触发鼠标事件',
        type: 'switch',
        defaultValue: false,
        attr: ['xAxis', 'triggerEvent'],
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
            label: 'X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上',
            type: 'switch',
            defaultValue: true,
            attr: ['xAxis', 'axisLine', 'onZero'],
            desc: [
              "只有在另一个轴为数值轴且包含 0 刻度时有效"
            ],
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
            label: '轴线两边的箭头的大小',
            attr: ['xAxis', 'axisLine', 'symbolSize'],
            type: 'input',
            defaultValue: '10, 15',
            format: (e) => {
              return e.split(',').map(v => isNaN(Number(v.trim())) ? 0 : Number(v.trim()));
            },
            desc: [
              '第一个数字表示宽度（垂直坐标轴方向）, 第二个数字表示高度（平行坐标轴方向）=> 5, 10',
            ],
          },
          {
            label: '轴线两边的箭头的偏移',
            attr: ['xAxis', 'axisLine', 'symbolOffset'],
            type: 'input',
            defaultValue: '0, 0',
            format: (e) => {
              return e.split(',').map(v => isNaN(Number(v.trim())) ? 0 : Number(v.trim()));
            },
            desc: [
              '第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移 => 5, 10',
              "表示这两个箭头使用同样的偏移 => 5",
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
                label: '图形阴影的模糊大小',
                attr: ['xAxis', 'axisLine', 'lineStyle', 'shadowBlur'],
                range: [0, 100],
                defaultValue: 0,
              },
              {
                type: 'colorSelect',
                label: '阴影颜色',
                attr: ['xAxis', 'axisLine', 'lineStyle', 'shadowColor'],
                defaultValue: 'transparent',
              },
              {
                type: 'slider',
                label: '阴影水平方向上的偏移距离',
                attr: ['xAxis', 'axisLine', 'lineStyle', 'shadowOffsetX'],
                range: [0, 100],
                defaultValue: 0,
              },
              {
                type: 'slider',
                label: '阴影垂直方向上的偏移距离',
                attr: ['xAxis', 'axisLine', 'lineStyle', 'shadowOffsetY'],
                range: [0, 100],
                defaultValue: 0,
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
            label: '刻度线和标签对齐',
            type: 'switch',
            defaultValue: false,
            attr: ['xAxis', 'axisTick', 'alignWithLabel'],
            desc: [
              "类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐"
            ],
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