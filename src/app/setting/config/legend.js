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
          {
            label: '普通图例',
            value: 'plain',
          },
          {
            label: '可滚动翻页的图例',
            value: 'scroll',
          },
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
        type: 'slider',
        label: '图例组件的宽度',
        attr: ['legend', 'width'],
        range: [0, 1000],
      },
      {
        type: 'slider',
        label: '图例组件的高度',
        attr: ['legend', 'height'],
        range: [0, 1000],
      },
      {
        type: 'select',
        label: '图例列表的布局朝向',
        attr: ['legend', 'orient'],
        defaultValue: 'horizontal',
        options: [
          {
            label: '水平',
            value: 'horizontal',
          },
          {
            label: '垂直',
            value: 'vertical',
          },
        ],
      },
      {
        type: 'select',
        label: '图例标记和文本的对齐',
        attr: ['legend', 'align'],
        defaultValue: 'auto',
        options: [
          'auto',
          'left',
          'right',
        ],
      },
      {
        type: 'input',
        label: '图例内边距',
        attr: ['legend', 'padding'],
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
        label: '图例每项之间的间隔',
        attr: ['legend', 'itemGap'],
        range: [0, 100],
        defaultValue: 10,
      },
      {
        type: 'slider',
        label: '图例标记的图形宽度',
        attr: ['legend', 'itemWidth'],
        range: [0, 1000],
        defaultValue: 25,
      },
      {
        type: 'slider',
        label: '图例标记的图形高度',
        attr: ['legend', 'itemHeight'],
        range: [0, 1000],
        defaultValue: 14,
      },
      {
        label: '保持该图标的长宽比',
        type: 'switch',
        defaultValue: true,
        attr: ['legend', 'symbolKeepAspect'],
      },
      { // todo 回调函数
        label: '格式化图例文本',
        attr: ['legend', 'formatter'],
        type: 'input',
        desc: [
          "模板变量为图例名称 {name}",
        ],
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
            label: '字体风格',
            attr: ['legend', 'textStyle', 'fontStyle'],
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
            label: '文字的字体系列',
            attr: ['legend', 'textStyle', 'fontFamily'],
            type: 'input',
            defaultValue: 'sans-serif'
          },
          {
            type: 'slider',
            label: '字体大小',
            attr: ['legend', 'textStyle', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['legend', 'textStyle', 'lingHeight'],
            range: [12, 72],
          },
          {
            type: 'colorSelect',
            label: '文字块背景色',
            attr: ['legend', 'textStyle', 'backgroundColot'],
            defaultValue: 'transparent',
          },
          {
            type: 'colorSelect',
            label: '文字块边框颜色',
            attr: ['legend', 'textStyle', 'borderColor'],
            defaultValue: 'transparent',
          },
          {
            type: 'slider',
            label: '文字块边框宽度',
            attr: ['legend', 'textStyle', 'borderWidth'],
            range: [0, 10],
          },
          {
            label: '文字块圆角',
            attr: ['legend', 'textStyle', 'borderRadius'],
            type: 'input',
            defaultValue: 5,
            format: (e) => {
              return e.split(',').length <= 1 
              ? isNaN(parseFloat(e.trim())) ? 0 :  parseFloat(e.trim())
                : e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : parseFloat(v.trim()));
            },
            desc: [
              "设置四个角的圆角大小为 5 => 5",
              "分别设置四个方向的圆角大小(上右下左) => 5,10,5,10",
            ],
          },
          {
            type: 'input',
            label: '内边距',
            attr: ['legend', 'textStyle', 'padding'],
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
            label: '文字块的背景阴影长度',
            attr: ['legend', 'textStyle','shadowBlur'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'colorSelect',
            label: '文字块的背景阴影颜色',
            attr: ['legend', 'textStyle', 'shadowColor'],
            defaultValue: 'transparent',
          },
          {
            type: 'slider',
            label: '阴影水平方向上的偏移距离',
            attr: ['legend', 'textStyle', 'shadowOffsetX'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '阴影垂直方向上的偏移距离',
            attr: ['legend', 'textStyle', 'shadowOffsetY'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字块宽度',
            attr: ['legend', 'textStyle', 'width'],
            range: [0, 1000],
          },
          {
            type: 'slider',
            label: '文字块高度',
            attr: ['legend', 'textStyle', 'height'],
            range: [0, 1000],
          },
          {
            type: 'colorSelect',
            label: '文字本身的描边颜色',
            attr: ['legend', 'textStyle', 'textBorderColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的描边宽度',
            attr: ['legend', 'textStyle', 'textBorderWidth'],
            range: [0, 10],
            defaultValue: 0,
          },
          {
            type: 'colorSelect',
            label: '文字本身的阴影颜色',
            attr: ['legend', 'textStyle', 'textShadowColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的阴影长度',
            attr: ['legend', 'textStyle', 'textShadowBlur'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 X 偏移',
            attr: ['legend', 'textStyle', 'textShadowOffsetX'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 Y 偏移',
            attr: ['legend', 'textStyle', 'textShadowOffsetY'],
            range: [0, 100],
            defaultValue: 0,
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
                label: '字体风格',
                attr: ['textStyle', 'fontStyle'],
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
                label: '文字的字体系列',
                attr: ['textStyle', 'fontFamily'],
                type: 'input',
                defaultValue: 'sans-serif'
              },
              {
                type: 'slider',
                label: '字体大小',
                attr: ['textStyle', 'fontSize'],
                defaultValue: 12,
                range: [12, 72],
              },
              {
                type: 'slider',
                label: '行高',
                attr: ['textStyle', 'lingHeight'],
                range: [12, 72],
              },
              {
                type: 'colorSelect',
                label: '文字块背景色',
                attr: ['textStyle', 'backgroundColot'],
                defaultValue: 'transparent',
              },
              {
                type: 'colorSelect',
                label: '文字块边框颜色',
                attr: ['textStyle', 'borderColor'],
                defaultValue: 'transparent',
              },
              {
                type: 'slider',
                label: '文字块边框宽度',
                attr: ['textStyle', 'borderWidth'],
                range: [0, 10],
              },
              {
                label: '文字块圆角',
                attr: ['textStyle', 'borderRadius'],
                type: 'input',
                defaultValue: 5,
                format: (e) => {
                  return e.split(',').length <= 1 
                  ? isNaN(parseFloat(e.trim())) ? 0 :  parseFloat(e.trim())
                    : e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : parseFloat(v.trim()));
                },
                desc: [
                  "设置四个角的圆角大小为 5 => 5",
                  "分别设置四个方向的圆角大小(上右下左) => 5,10,5,10",
                ],
              },
              {
                type: 'input',
                label: '内边距',
                attr: ['textStyle', 'padding'],
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
                label: '文字块的背景阴影长度',
                attr: ['textStyle','shadowBlur'],
                range: [0, 100],
                defaultValue: 0,
              },
              {
                type: 'colorSelect',
                label: '文字块的背景阴影颜色',
                attr: ['textStyle', 'shadowColor'],
                defaultValue: 'transparent',
              },
              {
                type: 'slider',
                label: '阴影水平方向上的偏移距离',
                attr: ['textStyle', 'shadowOffsetX'],
                range: [0, 100],
                defaultValue: 0,
              },
              {
                type: 'slider',
                label: '阴影垂直方向上的偏移距离',
                attr: ['textStyle', 'shadowOffsetY'],
                range: [0, 100],
                defaultValue: 0,
              },
              {
                type: 'slider',
                label: '文字块宽度',
                attr: ['textStyle', 'width'],
                range: [0, 1000],
              },
              {
                type: 'slider',
                label: '文字块高度',
                attr: ['textStyle', 'height'],
                range: [0, 1000],
              },
              {
                type: 'colorSelect',
                label: '文字本身的描边颜色',
                attr: ['textStyle', 'textBorderColor'],
                defaultValue: 'transparent'
              },
              {
                type: 'slider',
                label: '文字本身的描边宽度',
                attr: ['textStyle', 'textBorderWidth'],
                range: [0, 10],
                defaultValue: 0,
              },
              {
                type: 'colorSelect',
                label: '文字本身的阴影颜色',
                attr: ['textStyle', 'textShadowColor'],
                defaultValue: 'transparent'
              },
              {
                type: 'slider',
                label: '文字本身的阴影长度',
                attr: ['textStyle', 'textShadowBlur'],
                range: [0, 100],
                defaultValue: 0,
              },
              {
                type: 'slider',
                label: '文字本身的阴影 X 偏移',
                attr: ['textStyle', 'textShadowOffsetX'],
                range: [0, 100],
                defaultValue: 0,
              },
              {
                type: 'slider',
                label: '文字本身的阴影 Y 偏移',
                attr: ['textStyle', 'textShadowOffsetY'],
                range: [0, 100],
                defaultValue: 0,
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
        defaultValue: 1,
      },
      {
        type: 'input',
        label: '圆角半径',
        attr: ['legend', 'borderRidus'],
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
        type: 'slider',
        label: '图形阴影模糊大小',
        attr: ['legend', 'shadowBlur'],
        range: [0, 100],
      },
      {
        type: 'colorSelect',
        label: '图形阴影颜色',
        attr: ['legend','shadowColor'],
      },
      {
        type: 'slider',
        label: '阴影水平方向上的偏移距离',
        attr: ['legend', 'shadowOffsetX'],
        range: [0, 10],
        defaultValue: 0,
      },
      {
        type: 'slider',
        label: '阴影垂直方向上的偏移距离',
        attr: ['legend', 'shadowOffsetY'],
        range: [0, 10],
        defaultValue: 0,
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
      { // todo 回调函数
        label: '页信息的显示格式',
        type: 'input',
        attr: ['legend', 'pageFormatter'],
        defaultValue: '{current}/{total}',
        desc: [
          "legend.type 为 'scroll' 时有效",
          "当前页号 => {current}",
          "总页数 => {total}"
        ],
      },
      {
        type: 'colorSelect',
        label: '翻页按钮的颜色',
        attr: ['legend', 'pageIconColor'],
        defaultValue: '#2f4554',
        desc: [
          "legend.type 为 'scroll' 时有效",
        ],
      },
      {
        type: 'colorSelect',
        label: '翻页按钮不激活时（即翻页到头时）的颜色',
        attr: ['legend', 'pageIconInactiveColor'],
        defaultValue: '#aaa',
        desc: [
          "legend.type 为 'scroll' 时有效",
        ],
      },
      {
        type: 'slider',
        label: '翻页按钮的大小',
        attr: ['legend', 'pageIconSize'],
        range: [0, 100],
        defaultValue: 15,
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
            label: '文字字体的风格',
            attr: ['legend', 'pageTextStyle', 'fontStyle'],
            defaultValue: 'normal',
            options: [
              'normal',
              'italic',
              'oblique',
            ],
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
            label: '文字的字体系列',
            attr: ['legend', 'textStyle', 'fontFamily'],
            type: 'input',
            defaultValue: 'sans-serif'
          },
          {
            type: 'slider',
            label: '文字字体大小',
            attr: ['legend', 'pageTextStyle', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['legend', 'pageTextStyle', 'lineHeight'],
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '文字块宽度',
            attr: ['legend', 'pageTextStyle', 'width'],
            range: [0, 1000],
          },
          {
            type: 'slider',
            label: '文字块高度',
            attr: ['legend', 'pageTextStyle', 'height'],
            range: [0, 1000],
          },
          {
            type: 'colorSelect',
            label: '文字本身的描边颜色',
            attr: ['legend', 'pageTextStyle', 'textBorderColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的描边宽度',
            attr: ['legend', 'pageTextStyle', 'textBorderWidth'],
            range: [0, 10],
            defaultValue: 0,
          },
          {
            type: 'colorSelect',
            label: '文字本身的阴影颜色',
            attr: ['legend', 'pageTextStyle', 'textShadowColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的阴影长度',
            attr: ['legend', 'pageTextStyle', 'textShadowBlur'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 X 偏移',
            attr: ['legend', 'pageTextStyle', 'textShadowOffsetX'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 Y 偏移',
            attr: ['legend', 'pageTextStyle', 'textShadowOffsetY'],
            range: [0, 100],
            defaultValue: 0,
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