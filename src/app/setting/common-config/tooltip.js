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