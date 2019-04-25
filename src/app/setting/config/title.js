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
        label: '主标题文本超链接',
        attr: ['title', 'link'],
        type: 'input'
      },
      {
        type: 'select',
        label: '指定窗口打开主标题超链接',
        attr: ['title', 'target'],
        defaultValue: 'blank',
        options: [
          {
            label: '当前窗口',
            value: 'self',
          },
          {
            label: '新窗口打开',
            value: 'blank',
          },
        ],
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
            label: '主标题文字的字体系列',
            attr: ['title', 'fontFamily'],
            type: 'input',
            defaultValue: 'sans-serif'
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
          {
            type: 'slider',
            label: '文字块宽度',
            attr: ['title', 'textStyle', 'width'],
            range: [0, 1000],
          },
          {
            type: 'slider',
            label: '文字块高度',
            attr: ['title', 'textStyle', 'height'],
            range: [0, 1000],
          },
          {
            type: 'colorSelect',
            label: '文字本身的描边颜色',
            attr: ['title', 'textStyle', 'textBorderColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的描边宽度',
            attr: ['title', 'textStyle', 'textBorderWidth'],
            range: [0, 10],
            defaultValue: 0,
          },
          {
            type: 'colorSelect',
            label: '文字本身的阴影颜色',
            attr: ['title', 'textStyle', 'textShadowColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的阴影长度',
            attr: ['title', 'textStyle', 'textShadowBlur'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 X 偏移',
            attr: ['title', 'textStyle', 'textShadowOffsetX'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 Y 偏移',
            attr: ['title', 'textStyle', 'textShadowOffsetY'],
            range: [0, 100],
            defaultValue: 0,
          },
        ],
      },
      {
        label: '副标题文本',
        attr: ['title', 'subtext'],
        type: 'input'
      },
      {
        label: '副标题文本超链接',
        attr: ['title', 'sublink'],
        type: 'input'
      },
      {
        type: 'select',
        label: '指定窗口打开副标题超链接',
        attr: ['title', 'subtarget'],
        defaultValue: 'blank',
        options: [
          {
            label: '当前窗口',
            value: 'self',
          },
          {
            label: '新窗口打开',
            value: 'blank',
          },
        ],
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
            label: '副标题文字的字体系列',
            attr: ['title', 'fontFamily'],
            type: 'input',
            defaultValue: 'sans-serif'
          },
          {
            type: 'slider',
            label: '字体大小',
            attr: ['title', 'subtextStyle', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
          {
            type: 'select',
            label: '文字水平对齐方式',
            attr: ['title', 'subtextStyle', 'align'],
            options: [
              'left',
              'right',
              'center',
            ],
          },
          {
            type: 'select',
            label: '文字垂直对齐方式',
            attr: ['title', 'subtextStyle', 'verticalAlign'],
            options: [
              'top',
              'bottom',
              'middle',
            ],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['title', 'subtextStyle', 'lineHeight'],
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '文字块宽度',
            attr: ['title', 'subtextStyle', 'width'],
            range: [0, 1000],
          },
          {
            type: 'slider',
            label: '文字块高度',
            attr: ['title', 'subtextStyle', 'height'],
            range: [0, 1000],
          },
          {
            type: 'colorSelect',
            label: '文字本身的描边颜色',
            attr: ['title', 'subtextStyle', 'textBorderColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的描边宽度',
            attr: ['title', 'subtextStyle', 'textBorderWidth'],
            range: [0, 10],
            defaultValue: 0,
          },
          {
            type: 'colorSelect',
            label: '文字本身的阴影颜色',
            attr: ['title', 'subtextStyle', 'textShadowColor'],
            defaultValue: 'transparent'
          },
          {
            type: 'slider',
            label: '文字本身的阴影长度',
            attr: ['title', 'subtextStyle', 'textShadowBlur'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 X 偏移',
            attr: ['title', 'subtextStyle', 'textShadowOffsetX'],
            range: [0, 100],
            defaultValue: 0,
          },
          {
            type: 'slider',
            label: '文字本身的阴影 Y 偏移',
            attr: ['title', 'subtextStyle', 'textShadowOffsetY'],
            range: [0, 100],
            defaultValue: 0,
          },
        ],
      },
      {
        type: 'select',
        label: '整体（包括 text 和 subtext）的水平对齐',
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
        label: '整体（包括 text 和 subtext）的垂直对齐',
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
        label: '触发事件',
        type: 'switch',
        defaultValue: false,
        attr: ['title', 'triggerEvent'],
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
        desc: [
          "设置内边距为 5 => 5",
          "设置上下的内边距为 5，左右的内边距为 10 => 5,10",
          "分别设置四个方向的内边距(上右下左) => 5,10,5,10",
        ],
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
      {
        type: 'colorSelect',
        label: '标题的边框颜色',
        attr: ['title', 'borderColor'],
        defaultValue: '#ccc',
      },
      {
        type: 'slider',
        label: '标题的边框线宽',
        attr: ['title', 'borderWidth'],
        defaultValue: 0,
        range: [0, 10],
      },
      {
        label: '圆角半径',
        attr: ['title', 'borderRadius'],
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
        type: 'colorSelect',
        label: '阴影颜色',
        attr: ['title', 'shadowColor'],
      },
      {
        type: 'slider',
        label: '图形阴影的模糊大小',
        attr: ['title', 'textShadowBlur'],
        range: [0, 100],
        defaultValue: 0,
      },
      {
        type: 'slider',
        label: '阴影水平方向上的偏移距离',
        attr: ['title', 'shadowOffsetX'],
        range: [0, 100],
        defaultValue: 0,
      },
      {
        type: 'slider',
        label: '阴影垂直方向上的偏移距离',
        attr: ['title', 'shadowOffsetY'],
        range: [0, 100],
        defaultValue: 0,
      },
    ],
  },
];