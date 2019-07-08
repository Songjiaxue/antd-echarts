import TX from "../common/tuxing";
import wenzikuai from "../common/wenzikuai";

export default {
  'inside': [
    {
      label: '停止组件的功能',
      attr: ['disabled'],
      type: 'switch',
      defaultValue: false,
    },
    {
      type: 'select',
      label: '数据过滤',
      attr: ['filterMode'],
      defaultValue: 'filter',
      options: [
        {
          label: '当前数据窗口外的数据，被 过滤掉',
          value: 'filter'
        },
        {
          label: '当前数据窗口外的数据，被 过滤掉',
          value: 'weakFilter'
        },
        {
          label: '当前数据窗口外的数据，被 设置为空',
          value: 'weakFilter'
        },
        {
          label: '不过滤数据',
          value: 'none'
        },
      ],
    },
    {
      type: 'slider',
      label: '数据窗口范围的起始百分比',
      attr: [ 'start'],
      range: [0, 100],
      formatValue: (e) => {
        return e && e.indexOf('%') > -1 ? Number(e) : e;
      },
      format: (e) => {
        return `${e}%`
      },
    },
    {
      type: 'slider',
      label: '数据窗口范围的结束百分比',
      attr: [ 'end'],
      range: [0, 100],
      formatValue: (e) => {
        return e && e.indexOf('%') > -1 ? Number(e) : e;
      },
      format: (e) => {
        return `${e}%`
      },
    },
    {
      type: 'input',
      label: '数据窗口范围的起始值',
      attr: [ 'startValue'],
      desc: [
        '如果设置了 dataZoom-inside.end 则 endValue 失效'
      ],
    },
    {
      type: 'input',
      label: '数据窗口范围的结束值',
      attr: [ 'endValue'],
      desc: [
        '如果设置了 dataZoom-inside.end 则 endValue 失效'
      ],
    },
    {
      type: 'slider',
      label: '限制窗口大小的最小值（百分比）',
      attr: [ 'minSpan'],
      range: [0, 100],
      format: (e) => {
        return `${e}%`
      },
      desc: [
        "如果设置了 dataZoom-inside.minValueSpan 则 minSpan 失效"
      ],
    },
    {
      type: 'slider',
      label: '限制窗口大小的最大值（百分比）',
      attr: [ 'maxSpan'],
      range: [0, 100],
      format: (e) => {
        return `${e}%`
      },
      desc: [
        "如果设置了 dataZoom-inside.maxValueSpan 则 maxSpan 失效"
      ],
    },
    {
      type: 'input',
      label: '限制窗口大小的最小值',
      attr: [ 'minValueSpan'],
    },
    {
      type: 'input',
      label: '限制窗口大小的最大值',
      attr: [ 'maxValueSpan'],
    },
    {
      type: 'select',
      label: '布局方式',
      attr: ['orient'],
      options: [
        'horizontal',
        'vertical',
      ],
    },
    {
      label: '锁定选择区域大小',
      type: 'switch',
      defaultValue: false,
      attr: ['zoomLock'],
    },
    {
      type: 'select',
      label: '触发缩放',
      attr: ['zoomOnMouseWheel',],
      defaultValue: 'true',
      options: [
        'true',
        'false',
        'shift',
        'ctrl',
        'alt',
      ],
    },
    {
      type: 'slider',
      label: '设置触发视图刷新的频率',
      attr: ['throttle'],
      defaultValue: 100,
      range: [0, 3000],
      step: 100,
    },
    {
      type: 'input',
      label: '取值类型',
      attr: ['rangeMode'],
      render: (e) => {
        return e.split(',');
      },
      desc: [
        "'value', 'percent' => 表示 start 值取绝对数值，end 取百分比。",
      ],
    },
    {
      type: 'select',
      label: '如何触发缩放',
      attr: ['zoomOnMouseWheel',],
      defaultValue: 'true',
      options: [
        {
          label: '不按任何功能键, 鼠标滚轮能触发缩放',
          value: 'true',
        },
        {
          label: '鼠标滚轮不能触发缩放',
          value: 'false',
        },
        {
          label: '按住 shift 和鼠标滚轮能触发缩放',
          value: 'shift',
        },
        {
          label: '表示按住 ctrl 和鼠标滚轮能触发缩放',
          value: 'ctrl',
        },
        {
          label: '按住 alt 和鼠标滚轮能触发缩放',
          value: 'alt',
        },
      ],
      render: (e) => {
        let params = e;
        switch (e) {
          case 'true':
            params = true;
            break;
          case 'false':
            params = false;
            break;
          default:
            break;
        }
        return params;
      }
    },
    {
      type: 'select',
      label: '触发数据窗口平移（鼠标移动）',
      attr: ['moveOnMouseMove',],
      defaultValue: 'true',
      options: [
        {
          label: '不按任何功能键, 鼠标移动能触发数据窗口平移',
          value: 'true',
        },
        {
          label: '鼠标滚轮不能触发平移',
          value: 'false',
        },
        {
          label: '按住 shift 和鼠标移动能触发数据窗口平移',
          value: 'shift',
        },
        {
          label: '按住 ctrl 和鼠标移动能触发数据窗口平移',
          value: 'ctrl',
        },
        {
          label: '按住 alt 和鼠标移动能触发数据窗口平移',
          value: 'alt',
        },
      ],
      render: (e) => {
        let params = e;
        switch (e) {
          case 'true':
            params = true;
            break;
          case 'false':
            params = false;
            break;
          default:
            break;
        }
        return params;
      }
    },
    {
      type: 'select',
      label: '触发数据窗口平移（鼠标滚轮）',
      attr: ['moveOnMouseWheel',],
      defaultValue: 'true',
      options: [
        {
          label: '不按任何功能键, 鼠标滚轮能触发数据窗口平移',
          value: 'true',
        },
        {
          label: '鼠标滚轮不能触发数据窗口平移',
          value: 'false',
        },
        {
          label: '按住 shift 和鼠标滚轮能触发数据窗口平移',
          value: 'shift',
        },
        {
          label: '表示按住 ctrl 和鼠标滚轮能触发数据窗口平移',
          value: 'ctrl',
        },
        {
          label: '按住 alt 和鼠标滚轮能触发数据窗口平移',
          value: 'alt',
        },
      ],
      render: (e) => {
        let params = e;
        switch (e) {
          case 'true':
            params = true;
            break;
          case 'false':
            params = false;
            break;
          default:
            break;
        }
        return params;
      }
    },
    {
      label: '阻止 mousemove 事件的默认行为',
      type: 'switch',
      defaultValue: true,
      attr: ['preventDefaultMouseMove'],
    },
  ],
  'slider': [
    {
      label: '显示',
      attr: ['show'],
      type: 'switch',
      defaultValue: true,
    },
    {
      type: 'colorSelect',
      label: '组件的背景颜色',
      attr: ['backgroundColor'],
      defaultValue: 'rgba(47,69,84,0)'
    },
    {
      label: '数据阴影的样式',
      item: [
        {
          label: '阴影的线条样式',
          item: [
            {
              type: 'colorSelect',
              label: '线的颜色',
              attr: ['dataBackground', 'lineStyle', 'color'],
              defaultValue: '#2f4554'
            },
            {
              type: 'slider',
              label: '线宽',
              attr: ['dataBackground', 'lineStyle', 'width'],
              defaultValue: 0.5,
              range: [0, 5],
              step: 0.1
            },
            {
              type: 'select',
              label: '线的类型',
              attr: ['dataBackground', 'lineStyle', 'type'],
              defaultValue: 'solid',
              options: [
                'solid',
                'dashed',
                'dotted',
              ],
            },
            ...TX(['dataBackground', 'lineStyle'], true,),
          ],
        },
        {
          label: '阴影的填充样式',
          item: [
            {
              type: 'colorSelect',
              label: '填充的颜色',
              attr: ['dataBackground', 'areaStyle', 'color'],
              defaultValue: '#2f4554'
            },
            ...TX(['dataBackground', 'areaStyle'], true,),
          ],
        },
      ],
    },
    {
      type: 'colorSelect',
      label: '选中范围的填充颜色',
      attr: ['fillerColor'],
      defaultValue: 'rgba(167,183,204,0.4)'
    },
    {
      type: 'colorSelect',
      label: '边框颜色',
      attr: ['borderColor'],
      defaultValue: '#ddd'
    },
    {
      type: 'slider',
      label: '控制手柄的尺寸',
      attr: ['handleSize'],
      range: [0, 100],
      format: (e) => {
        return `${e}%`
      },
    },
    {
      label: '手柄控制样式',
      item: [
        {
          type: 'colorSelect',
          label: '图形的颜色',
          attr: ['handleStyle', 'color'],
          defaultValue: '#a7b7cc'
        },
        {
          type: 'colorSelect',
          label: '图形描边颜色',
          attr: ['handleStyle', 'borderColor'],
          defaultValue: '#000'
        },
        {
          type: 'slider',
          label: '描边线宽',
          attr: [ 'handleStyle', 'borderWidth'],
          range: [0, 10],
        },
        {
          type: 'select',
          label: '柱条的描边类型',
          attr: ['handleStyle', 'borderType'],
          defaultValue: 'solid',
          options: [
            'solid',
            'dashed',
            'dotted',
          ],
        },
        ...TX(['handleStyle'], true,),
        
      ],
    },
    {
      label: '显示label的小数精度',
      type: 'input',
      attr: ['labelPrecision'],
      format: (e) => {
        return Number(e);
      },
    },
    {
      label: '显示的label的格式化器',
      type: 'input',
      attr: ['labelFormatter'],
      desc: [
        "aaaa{value}bbbb => 其中{value}会被替换为实际的数值"
      ],
    },
    {
      label: '拖拽时候显示详细数值信息',
      attr: ['showDetail'],
      type: 'switch',
      defaultValue: true,
    },
    {
      label: '实时更新系列的视图',
      attr: ['realtime'],
      type: 'switch',
      defaultValue: true,
    },
    {
      label: '文字样式',
      item: [
        ...wenzikuai(['textStyle'], false, {
          color: '#333',
        }),
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
      ],
    },
    {
      type: 'select',
      label: '数据过滤',
      attr: ['filterMode'],
      defaultValue: 'filter',
      options: [
        {
          label: '当前数据窗口外的数据，被 过滤掉',
          value: 'filter'
        },
        {
          label: '当前数据窗口外的数据，被 过滤掉',
          value: 'weakFilter'
        },
        {
          label: '当前数据窗口外的数据，被 设置为空',
          value: 'weakFilter'
        },
        {
          label: '不过滤数据',
          value: 'none'
        },
      ],
    },
    {
      type: 'slider',
      label: '数据窗口范围的起始百分比',
      attr: [ 'start'],
      range: [0, 100],
      formatValue: (e) => {
        return e && e.indexOf('%') > -1 ? Number(e) : e;
      },
      format: (e) => {
        return `${e}%`
      },
    },
    {
      type: 'slider',
      label: '数据窗口范围的结束百分比',
      attr: [ 'end'],
      range: [0, 100],
      formatValue: (e) => {
        return e && e.indexOf('%') > -1 ? Number(e) : e;
      },
      format: (e) => {
        return `${e}%`
      },
    },
    {
      type: 'input',
      label: '数据窗口范围的起始值',
      attr: [ 'startValue'],
      desc: [
        '如果设置了 dataZoom-inside.end 则 endValue 失效'
      ],
    },
    {
      type: 'input',
      label: '数据窗口范围的结束值',
      attr: [ 'endValue'],
      desc: [
        '如果设置了 dataZoom-inside.end 则 endValue 失效'
      ],
    },
    {
      type: 'slider',
      label: '限制窗口大小的最小值（百分比）',
      attr: [ 'minSpan'],
      range: [0, 100],
      format: (e) => {
        return `${e}%`
      },
      desc: [
        "如果设置了 dataZoom-inside.minValueSpan 则 minSpan 失效"
      ],
    },
    {
      type: 'slider',
      label: '限制窗口大小的最大值（百分比）',
      attr: [ 'maxSpan'],
      range: [0, 100],
      format: (e) => {
        return `${e}%`
      },
      desc: [
        "如果设置了 dataZoom-inside.maxValueSpan 则 maxSpan 失效"
      ],
    },
    {
      type: 'input',
      label: '限制窗口大小的最小值',
      attr: [ 'minValueSpan'],
    },
    {
      type: 'input',
      label: '限制窗口大小的最大值',
      attr: [ 'maxValueSpan'],
    },
    {
      type: 'select',
      label: '布局方式',
      attr: ['orient'],
      options: [
        'horizontal',
        'vertical',
      ],
    },
    {
      label: '锁定选择区域大小',
      type: 'switch',
      defaultValue: false,
      attr: ['zoomLock'],
    },
    {
      type: 'select',
      label: '触发缩放',
      attr: ['zoomOnMouseWheel',],
      defaultValue: 'true',
      options: [
        'true',
        'false',
        'shift',
        'ctrl',
        'alt',
      ],
    },
    {
      type: 'slider',
      label: '设置触发视图刷新的频率',
      attr: ['throttle'],
      defaultValue: 100,
      range: [0, 3000],
      step: 100,
    },
    {
      type: 'input',
      label: '取值类型',
      attr: ['rangeMode'],
      render: (e) => {
        return e.split(',');
      },
      desc: [
        "'value', 'percent' => 表示 start 值取绝对数值，end 取百分比。",
      ],
    },
    {
      type: 'input',
      label: '组件离容器左侧的距离',
      attr: ['left'],
      defaultValue: 'auto',
      desc: [
        "left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right",
        "如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐"
      ],
    },
    {
      type: 'input',
      label: '组件离容器右侧的距离',
      attr: ['right'],
      defaultValue: 'auto',
      desc: [
        "同left",
      ],
    },
    {
      type: 'input',
      label: '组件离容器底侧的距离',
      attr: ['bottom'],
      defaultValue: 'auto',
      desc: [
        "同left",
      ],
    },
    {
      type: 'input',
      label: '组件离容器上侧的距离',
      attr: ['top'],
      defaultValue: 'auto',
      desc: [
        "同left",
      ],
    },
  ],
};