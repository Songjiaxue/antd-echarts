import WZK from './common/wenzikuai';
import TX from './common/tuxing';
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
          ...WZK(['xAxis', 'nameTextStyle'], true, {
            color: undefined,
          }),
          ...TX(['legend', 'nameTextStyle'], false)
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
              ...TX(['xAxis', 'axisLine', 'lineStyle'], true),
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
            label: '刻度线和标签对齐',
            type: 'switch',
            defaultValue: false,
            attr: ['xAxis', 'axisTick', 'alignWithLabel'],
            desc: [
              "类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐"
            ],
          },
          {
            type: 'slider',
            label: '坐标轴刻度的显示间隔',
            attr: ['xAxis', 'axisTick', 'interval'],
            range: [0, 10],
          },
          {
            label: '坐标轴刻度是否朝内',
            type: 'switch',
            defaultValue: false,
            attr: ['xAxis', 'axisTick', 'inside'],
          },
          {
            type: 'slider',
            label: '坐标轴刻度的长度',
            attr: ['xAxis', 'axisTick', 'length'],
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
              ...TX(['xAxis', 'axisTick', 'lineStyle'], true),
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
            label: '坐标轴刻度标签的显示间隔',
            attr: ['xAxis', 'axisLabel', 'interval'],
            range: [0, 10],
          },
          {
            label: '刻度标签是否朝内',
            type: 'switch',
            defaultValue: false,
            attr: ['xAxis', 'axisLabel', 'inside'],
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
          { // todo 回调函数
            label: '刻度标签的内容格式器',
            type: 'input',
            attr: ['xAxis', 'axisLabel', 'formatter'],
            desc: [
              "当前标签 => {value}",
            ],
          },
          {
            type: 'select',
            label: '显示最小 tick 的 label',
            attr: ['xAxis', 'axisLabel', 'showMinLabel'],
            defaultValue: '-1',
            formatValue: (e) => {
              return e === null ? '-1' :
                e === false ? '0' : e === true ? '1' : e;
            },
            options: [
              {
                label: 'null',
                value: '-1',
              },
              {
                label: 'false',
                value: '0',
              },
              {
                label: 'true',
                value: '1',
              },
            ],
            format: (e) => {
              return e === '-1' ? null :
                e === '0' ? false : true;
            },
            desc:[
              "默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）"
            ],
          },
          {
            type: 'colorSelect',
            label: '刻度标签文字的颜色',
            attr: ['xAxis', 'axisLabel', 'color'],
          },
          {
            type: 'select',
            label: '显示最大 tick 的 label',
            attr: ['xAxis', 'axisLabel', 'showMaxLabel'],
            defaultValue: '-1',
            formatValue: (e) => {
              return e === null ? '-1' :
                e === false ? '0' : e === true ? '1' : e;
            },
            options: [
              {
                label: 'null',
                value: '-1',
              },
              {
                label: 'false',
                value: '0',
              },
              {
                label: 'true',
                value: '1',
              },
            ],
            format: (e) => {
              return e === '-1' ? null :
                e === '0' ? false : true;
            },
            desc:[
              "默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）"
            ],
          },
          ...WZK(['xAxis', 'axisLabel'], true),
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
            type: 'slider',
            label: '坐标轴分隔线的显示间隔',
            attr: ['xAxis', 'splitLine', 'interval'],
            range: [0, 10],
          },
          {
            label: '坐标轴线样式',
            item: [
              {
                type: 'input',
                label: '颜色',
                attr: ['xAxis', 'splitLine', 'lineStyle', 'color'],
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
              ...TX(['xAxis', 'splitLine', 'lineStyle'], true),
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
            attr: ['xAxis', 'splitArea', 'show'],
          },
          {
            type: 'slider',
            label: '坐标轴分隔线的显示间隔',
            attr: ['xAxis', 'splitArea', 'interval'],
            range: [0, 10],
          },
          {
            label: '分隔区域的样式设置',
            item: [
              {
                type: 'input',
                label: '颜色',
                attr: ['xAxis', 'splitArea', 'areaStyle', 'color'],
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
              ...TX(['xAxis', 'splitArea', 'areaStyle'], true),
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
              ...WZK(['textStyle'], true)
            ],
          },
        ],
      },
      {
        label: 'axis指示器',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: false,
            attr: ['xAxis', 'axisPointer', 'show'],
          },
          {
            type: 'select',
            label: '指示器类型',
            attr: ['xAxis', 'axisPointer', 'type'],
            defaultValue: 'line',
            options: [
              {
                label: '直线指示器',
                value: 'line',
              },
              {
                label: '阴影指示器',
                value: 'shadow',
              },
              {
                label: '无指示器',
                value: 'none',
              },
            ],
          },
          {
            label: '坐标轴指示器是否自动吸附到点上',
            type: 'switch',
            defaultValue: false,
            attr: ['xAxis', 'axisPointer', 'show'],
            desc: [
              "默认自动判断"
            ],
          },
          {
            label: '坐标轴指示器的文本标签',
            item: [
              {
                label: '显示',
                type: 'switch',
                defaultValue: false,
                attr: ['xAxis', 'axisPointer', 'label', 'show'],
                desc: [
                  "如果 tooltip.axisPointer.type 设置为 'cross' 则默认显示标签，否则默认不显示"
                ],
              },
              {
                label: '文本标签中数值的小数点精度',
                type: 'slider',
                attr: ['xAxis', 'axisPointer', 'label', 'precision'],
                range: [0, 10],
              },
              {
                // todo 回调函数
                label: '文本标签文字的格式化器',
                type: 'input',
                attr: ['xAxis', 'axisPointer', 'label', 'formatter'],
                desc: [
                  "{value} 会被自动替换为轴的值 => some text {value} some text"
                ],
              },
              {
                type: 'slider',
                label: 'label 距离轴的距离',
                attr: ['xAxis', 'axisPointer', 'label', 'margin'],
                defaultValue: 3,
                range: [0, 100],
              },
              ...WZK(['xAxis', 'axisPointer', 'label'], true, {
                color: '#fff',
                padding: [5, 7, 5, 7],
                shadowBlur: 3,
              }),
            ],
          },
          {
            label: "线条样式(axisPointer.type === 'line')",
            item: [
              {
                type: 'colorSelect',
                label: '线的颜色',
                attr: ['xAxis', 'axisPointer', 'lineStyle', 'color'],
                defaultValue: '#555'
              },
              {
                type: 'slider',
                label: '线宽',
                attr: ['xAxis', 'axisPointer', 'lineStyle', 'width'],
                defaultValue: 1,
                range: [1, 20],
              },
              {
                type: 'select',
                label: '线的类型',
                attr: ['xAxis', 'axisPointer', 'lineStyle', 'type'],
                defaultValue: 'solid',
                options: [
                  'solid',
                  'dashed',
                  'dotted',
                ],
              },
              ...TX(['xAxis', 'axisPointer', 'lineStyle'], true),
            ],
          },
          {
            label: "填充样式(axisPointer.type === 'shadow')",
            item: [
              {
                type: 'colorSelect',
                label: '线的颜色',
                attr: ['xAxis', 'axisPointer', 'lineStyle', 'color'],
                defaultValue:  'rgba(150,150,150,0.3)',
              },
              ...TX(['xAxis', 'axisPointer', 'shadowStyle'], true),
            ],
          },
          {
            type: 'switch',
            label: '触发 tooltip',
            defaultValue: true,
            attr: ['xAxis', 'axisPointer', 'triggerTooltip'],
          },
          {
            type: 'input',
            label: '当前value',
            defaultValue: true,
            attr: ['xAxis', 'axisPointer', 'triggerTooltip'],
            desc: [
              "在使用 axisPointer.handle 时，可以设置此值进行初始值设定，从而决定 axisPointer 的初始位置"
            ],
          },
          {
            type: 'switch',
            label: '当前的状态',
            attr: ['xAxis', 'axisPointer', 'status'],
            desc: [
              "可取值为 'show' 和 'hide'"
            ],
          },
          {
            label: '拖拽手柄',
            item: [
              {
                type: 'switch',
                label: '显示手柄',
                defaultValue: false,
                attr: ['xAxis', 'axisPointer', 'handle', 'show'],
              },
              {
                type: 'slider',
                label: '手柄尺寸',
                defaultValue: 45,
                attr: ['xAxis', 'axisPointer', 'handle', 'size'],
                range: [0, 100],
              },
              {
                type: 'slider',
                label: '手柄与轴的距离',
                defaultValue: 50,
                attr: ['xAxis', 'axisPointer', 'handle', 'margin'],
                range: [0, 100],
              },
              {
                type: 'colorSelect',
                defaultValue: '#333',
                label: '手柄颜色',
                attr: ['xAxis', 'axisPointer', 'handle', 'color'],
              },
              {
                type: 'slider',
                label: '手柄拖拽时触发视图更新周期',
                defaultValue: 40,
                attr: ['xAxis', 'axisPointer', 'handle', 'throttle'],
                range: [0, 1000],
              },
              ...TX(['xAxis', 'axisPointer', 'handle'], false, {
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 2,
              })
            ],
          },
        ],
      },
      
    ],
  },
];