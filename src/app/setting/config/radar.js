import WZk from './common/wenzikuai';
import TX from './common/tuxing';
export default [
  {
    title: '雷达图坐标系组件',
    item: [
      {
        label: '中心（圆心）坐标',
        attr: ['radar', 'center'],
        type: 'input',
        defaultValue: ['50%', '50%'],
        formatValue: (e) => {
          return Array.isArray(e) ? e.join(',') : e;
        },
        format: (e) => {
          return e.split(',').length <= 1
            ? e.trim() : e.split(',').map(v => v.trim())
        },
        desc: [
          '数组的第一项是横坐标，第二项是纵坐标',
          "设置成绝对的像素值 => 400, 300",
          "设置成相对的百分比 => '50%', '50%'"
        ],
      },
      {
        label: '半径',
        attr: ['radar', 'radius'],
        type: 'input',
        defaultValue: '75%',
        formatValue: (e) => {
          return Array.isArray(e) ? e.join(',') : e;
        },
        format: (e) => {
          return e.split(',').length <= 1
            ? e.trim() : e.split(',').map(v => v.trim())
        },
        desc: [
          '直接指定外半径值 => 5',
          "表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度: 20%",
          "第一项是内半径，第二项是外半径 => '50%', '50%'"
        ],
      },
      {
        label: '坐标系起始角度',
        type: 'slider',
        defaultValue: 90,
        range: [0, 360],
        attr: ['radar', 'startAngle'],
      },
      {
        label: '雷达图每个指示器名称的配置项',
        item: [
          {
            label: '显示指示器名称',
            type: 'switch',
            defaultValue: true,
            attr: ['radar', 'name', 'show'],
          },
          {
            label: '指示器名称显示的格式器',
            type: 'input',
            attr: ['radar', 'name', 'formatter'],
            desc: [
              "{value},当前值 =》 '【{value}】'"
            ],
          },
          ...WZk(['radar', 'name'], true, {
            color: '#333'
          }),
        ],
      },
      {
        type: 'slider',
        label: '指示器名称和指示器轴的距离',
        attr: ['radar', 'nameGap'],
        defaultValue: 15,
        range: [0, 100],
      },
      {
        type: 'slider',
        label: '指示器轴的分割段数',
        attr: ['radar', 'splitNumber'],
        range: [0, 10],
        defaultValue:5,
      },
      {
        type: 'select',
        label: '雷达图绘制类型',
        attr: ['radar', 'shape'],
        defaultValue: 'polygon',
        options: [
          'polygon',
          'circle'
        ],
      },
      {
        label: '脱离 0 值比例',
        type: 'switch',
        defaultValue: false,
        attr: ['radar', 'scale'],
        desc: [
          "设置成 true 后坐标刻度不会强制包含零刻度"
        ],
      },
      {
        label: '坐标轴静态无法交互',
        type: 'switch',
        defaultValue: false,
        attr: ['radar', 'silent'],
      },
      {
        label: '坐标轴的标签响应和触发鼠标事件',
        type: 'switch',
        defaultValue: false,
        attr: ['radar', 'triggerEvent'],
      },
      {
        label: '坐标轴轴线相关设置',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: true,
            attr: ['radar', 'axisLine', 'show'],
          },
          {
            label: 'X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上',
            type: 'switch',
            defaultValue: true,
            attr: ['radar', 'axisLine', 'onZero'],
            desc: [
              "只有在另一个轴为数值轴且包含 0 刻度时有效"
            ],
          },
          {
            label: '轴线两边的箭头',
            attr: ['radar', 'axisLine', 'symbol'],
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
            attr: ['radar', 'axisLine', 'symbolSize'],
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
            attr: ['radar', 'axisLine', 'symbolOffset'],
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
                attr: ['radar', 'axisLine', 'lineStyle', 'color'],
                defaultValue: '#333'
              },
              {
                type: 'slider',
                label: '坐标轴线线宽',
                attr: ['radar', 'axisLine', 'lineStyle', 'width'],
                defaultValue: 1,
                range: [1, 20],
              },
              {
                type: 'select',
                label: '坐标轴线线的类型',
                attr: ['radar', 'axisLine', 'lineStyle', 'type'],
                defaultValue: 'solid',
                options: [
                  'solid',
                  'dashed',
                  'dotted',
                ],
              },
              ...TX(['radar', 'axisLine', 'lineStyle'], true),
            ],
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
            attr: ['radar', 'splitLine', 'show'],
          },
          {
            label: '坐标轴线样式',
            item: [
              {
                type: 'input',
                label: '颜色',
                attr: ['radar', 'splitLine', 'lineStyle', 'color'],
                defaultValue: ['#ccc'],
                formatValue: (e) => {
                  return e.length > 0 ? e.join(';') : e;
                },
                format: (e) => {
                  return e.split(',').map(v => v.trim());
                },
                desc: [
                  "分隔线会按颜色的顺序依次循环设置颜色, 用分号隔开"
                ],
              },
              {
                type: 'slider',
                label: '坐标轴线线宽',
                attr: ['radar', 'splitLine', 'lineStyle', 'width'],
                defaultValue: 1,
                range: [1, 20],
              },
              {
                type: 'select',
                label: '坐标轴线线的类型',
                attr: ['radar', 'splitLine', 'lineStyle', 'type'],
                defaultValue: 'solid',
                options: [
                  'solid',
                  'dashed',
                  'dotted',
                ],
              },
              ...TX(['radar', 'splitLine', 'lineStyle'], true),
            ],
          },
        ],
      },
      {
        label: '坐标轴在 grid 区域中的分隔区域',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: false,
            attr: ['radar', 'splitArea', 'show'],
          },
          {
            label: '分隔区域的样式设置',
            item: [
              {
                type: 'input',
                label: '颜色',
                attr: ['radar', 'splitArea', 'areaStyle', 'color'],
                defaultValue: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                formatValue: (e) => {
                  return e.length > 0 ? e.join(';') : e;
                },
                format: (e) => {
                  return e.split(',').map(v => v.trim());
                },
                desc: [
                  "分隔区会按颜色的顺序依次循环设置颜色, 用分号隔开"
                ],
              },
              ...TX(['radar', 'splitArea', 'areaStyle'], true),
            ],
          },
        ],
      },
      {
        label: '雷达图的指示器',
        type: 'add',
        attr: ['radar', 'indicator'],
        itme: [
          {
            label: '指示器名称',
            attr: ['value'],
            key: 'value',
            type: 'input',
          },
          {
            label: '指示器的最大值',
            attr: ['max'],
            type: 'input',
          },
          {
            label: '指示器的最小值',
            attr: ['max'],
            type: 'input',
          },
          {
            label: '标签特定颜色',
            attr: ['color'],
            type: 'colorSelect',
          },
        ],
      },
    ],
  },
];