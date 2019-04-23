export default [
  {
    title: '提示框组件',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['tooltip', 'show'],
      },
      {
        type: 'select',
        label: '触发类型',
        attr: ['tooltip', 'trigger'],
        defaultValue: 'item',
        options: [
          'item',
          'axis',
          'none',
        ],
      },
      {
        label: '坐标轴指示器配置项',
        item: [
          {
            type: 'select',
            label: '指示器类型',
            attr: ['tooltip', 'axisPointer', 'type'],
            defaultValue: 'line',
            options: [
              'line',
              'shadow',
              'none',
              'cross'
            ],
          },
          {
            label: '坐标轴指示器的文本标签',
            item: [
              {
                label: '显示',
                type: 'switch',
                defaultValue: false,
                attr: ['tooltip', 'axisPointer', 'label', 'show'],
              },
              {
                type: 'slider',
                label: 'label 距离轴的距离',
                attr: ['tooltip', 'axisPointer', 'label', 'margin'],
                defaultValue: 3,
                range: [0, 100],
              },
              {
                type: 'colorSelect',
                label: '文字颜色',
                attr: ['tooltip', 'axisPointer', 'label', 'color'],
                defaultValue: '#fff'
              },
              {
                type: 'select',
                label: '文字字体的风格',
                attr: ['tooltip', 'axisPointer', 'label', 'fontStyle'],
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
                attr: ['tooltip', 'axisPointer', 'label', 'fontWeight'],
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
                attr: ['tooltip', 'axisPointer', 'label', 'fontSize'],
                defaultValue: 12,
                range: [12, 72],
              },
              {
                type: 'slider',
                label: '行高',
                attr: ['tooltip', 'axisPointer', 'label', 'lineHeight'],
                range: [12, 72],
              },
              {
                type: 'input',
                label: '内边距',
                attr: ['tooltip', 'axisPointer', 'label', 'padding'],
                defaultValue: 5,
                format: (e) => {
                  return e.indexOf(',') > -1 ?
                    e.split(',').map(v => isNaN(parseFloat(v.trim()) ? 0 : v.trim()))
                      : isNaN(parseFloat(e.trim())) ? 0 : e.trim()
                },
              },
              {
                type: 'colorSelect',
                label: '文字标签背景颜色',
                attr: ['tooltip', 'axisPointer', 'label', 'backgroundColor'],
              },
              {
                type: 'colorSelect',
                label: '文字标签边框颜色',
                attr: ['tooltip', 'axisPointer', 'label', 'borderColor'],
              },
              {
                type: 'slider',
                label: '文字标签边框宽度',
                attr: ['tooltip', 'axisPointer', 'label', 'borderWidth'],
                range: [0, 10],
              },
              {
                type: 'slider',
                label: '图形阴影模糊大小',
                attr: ['tooltip', 'axisPointer', 'label', 'shadowBlur'],
                range: [0, 100],
                defaultValue: 3,
              },
              {
                type: 'colorSelect',
                label: '图形阴影颜色',
                attr: ['tooltip', 'axisPointer', 'label', 'shadowColor'],
                defaultValue: '#aaa',
              },
              {
                type: 'slider',
                label: '阴影水平方向上的偏移距离',
                attr: ['tooltip', 'axisPointer', 'label', 'shadowOffsetX'],
                range: [0, 10],
                defaultValue: 0,
              },
              {
                type: 'slider',
                label: '阴影垂直方向上的偏移距离',
                attr: ['tooltip', 'axisPointer', 'label', 'shadowOffsetY'],
                range: [0, 10],
                defaultValue: 0,
              },
            ],
          },
        ],
      },
      {
        label: '显示提示框浮层',
        type: 'switch',
        defaultValue: true,
        attr: ['tooltip', 'showContent'],
      },
      {
        label: '永远显示提示框内容',
        type: 'switch',
        defaultValue: false,
        attr: ['tooltip', 'alwaysShowContent'],
      },
      {
        type: 'select',
        label: '提示框触发的条件',
        attr: ['tooltip', 'triggerOn'],
        defaultValue: 'mousemove|click',
        options: [
          'mousemove|click',
          'mousemove',
          'click',
          'none'
        ],
      },
      {
        type: 'slider',
        label: '浮层显示的延迟',
        attr: ['tooltip', 'showDelay'],
        defaultValue: 0,
        range: [0, 3000],
        step: 100,
      },
      {
        type: 'slider',
        label: '浮层隐藏的延迟',
        attr: ['tooltip', 'hideDelay'],
        defaultValue: 100,
        range: [100, 3000],
        step: 100
      },
      {
        label: '鼠标是否可进入提示框浮层中',
        type: 'switch',
        defaultValue: false,
        attr: ['tooltip', 'enterable'],
      },
      {
        label: '是否将 tooltip 框限制在图表的区域内',
        type: 'switch',
        defaultValue: false,
        attr: ['tooltip', 'confine'],
      },
      {
        label: '字符串模板',
        type: 'input',
        attr: ['tooltip', 'formatter'],
        desc: [
          "模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等",
          "折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）",
          "地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）",
          "饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）"
        ],
      },
      {
        type: 'colorSelect',
        label: '提示框浮层的背景颜色',
        attr: ['tooltip', 'backgroundColor'],
        defaultValue: 'rgba(50,50,50,0.7)',
      },
    ],
  },
];