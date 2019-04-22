export default {
  line: [
    {
      label: '系列名称',
      attr: ['name'],
      type: 'input'
    },
    {
      label: '启用图例 hover 时的联动高亮',
      attr: ['legendHoverLink'],
      type: 'switch',
      defaultValue: true,
    },
    {
      label: '数据堆叠',
      attr: ['stack'],
      type: 'input'
    },
    {
      label: '对超出部分裁剪',
      attr: ['clipOverflow'],
      type: 'switch',
      defaultValue: true,
    },
    {
      label: '阶梯线图',
      attr: ['step'],
      type: 'switch',
      defaultValue: false,
    },
    {
      label: '图形上的文本标签',
      item: [
        {
          label: '显示',
          type: 'switch',
          defaultValue: false,
          attr: ['label', 'show'],
        },
        {
          type: 'select',
          label: '标签的位置',
          attr: ['label', 'position',],
          options: [
            'top',
            'left',
            'right',
            'bottom',
            'inside',
            'insideLeft',
            'insideRight',
            'insideTop',
            'insideBottom',
            'insideTopLeft',
            'insideBottomLeft',
            'insideTopRight',
            'insideBottomRight',
          ],
        },
        {
          type: 'slider',
          label: '距离图形元素的距离',
          attr: ['label', 'distance'],
          defaultValue: 5,
          range: [0, 100],
        },
        {
          type: 'slider',
          label: '标签旋转',
          attr: ['label', 'rotate'],
          range: [-90, 90],
        },
        {
          type: 'input',
          label: '文字偏移',
          attr: ['label', 'offset'],
          format: (e) => {
            return e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : parseFloat(v.trim()))
          },
        },
        {
          type: 'input',
          label: '标签内容格式器',
          attr: ['label', 'formatter'],
          desc: [
            "{a}: 系列名",
            "{b}: 数据名",
            "{c}: 数据值",
          ],
        },
        {
          type: 'colorSelect',
          label: '文字颜色',
          attr: ['label', 'color'],
          defaultValue: '#fff'
        },
        {
          type: 'select',
          label: '文字字体的风格',
          attr: ['label', 'fontStyle'],
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
          attr: ['label', 'fontWeight'],
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
          attr: ['label', 'fontSize'],
          defaultValue: 12,
          range: [12, 72],
        },
        {
          type: 'slider',
          label: '行高',
          attr: [ 'label', 'lineHeight'],
          range: [12, 72],
        },
        {
          type: 'select',
          label: '水平对齐',
          attr: ['label', 'align'],
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
          attr: ['label', 'verticalAlign'],
          defaultValue: 'auto',
          options: [
            'auto',
            'top',
            'bottom',
            'middle',
          ],
        },
        {
          type: 'input',
          label: '内边距',
          attr: ['label', 'padding'],
          defaultValue: 5,
          format: (e) => {
            return e.indexOf(',') > -1 ?
              e.split(',').map(v => isNaN(parseFloat(v.trim()) ? 0 : v.trim()))
                : isNaN(parseFloat(e.trim())) ? 0 : e.trim()
          },
        },
        {
          type: 'colorSelect',
          label: '文字块背景色',
          attr: ['label', 'backgroundColor'],
        },
        {
          type: 'colorSelect',
          label: '文字块边框颜色',
          attr: ['label', 'borderColor'],
        },
        {
          type: 'slider',
          label: '文字块边框宽度',
          attr: [ 'label', 'borderWidth'],
          range: [0, 10],
        },
        {
          type: 'slider',
          label: '图形阴影模糊大小',
          attr: ['label', 'shadowBlur'],
          range: [0, 100],
          defaultValue: 3,
        },
        {
          type: 'colorSelect',
          label: '图形阴影颜色',
          attr: ['label', 'shadowColor'],
          defaultValue: '#aaa',
        },
        {
          type: 'slider',
          label: '阴影水平方向上的偏移距离',
          attr: ['label', 'shadowOffsetX'],
          range: [0, 10],
          defaultValue: 0,
        },
        {
          type: 'slider',
          label: '阴影垂直方向上的偏移距离',
          attr: ['label', 'shadowOffsetY'],
          range: [0, 10],
          defaultValue: 0,
        },
      ],
    },
    {
      label: '线条样式',
      item: [
        {
          type: 'colorSelect',
          label: '颜色',
          attr: ['lineStyle', 'color'],
          defaultValue: '#000'
        },
        {
          type: 'slider',
          label: '线宽',
          attr: ['lineStyle', 'width'],
          range: [0, 10],
        },
        {
          type: 'select',
          label: '线条类型',
          attr: ['lineStyle', 'type'],
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
          attr: ['lineStyle', 'shadowBlur'],
          range: [0, 100],
        },
        {
          type: 'colorSelect',
          label: '阴影颜色',
          attr: ['lineStyle', 'shadowColor'],
        },
        {
          type: 'slider',
          label: '阴影水平方向上的偏移距离',
          attr: ['lineStyle', 'shadowOffsetX'],
          range: [0, 100],
          defaultValue: 0,
        },
        {
          type: 'slider',
          label: '阴影垂直方向上的偏移距离',
          attr: ['lineStyle', 'shadowOffsetY'],
          range: [0, 100],
          defaultValue: 0,
        },
        {
          type: 'slider',
          label: '图形透明度',
          attr: ['lineStyle', 'opacity'],
          range: [0, 1],
        },
      ],
    },
    {
      label: '区域填充样式',
      item: [
        {
          type: 'colorSelect',
          label: '颜色',
          attr: ['areaStyle', 'color'],
          defaultValue: '#000'
        },
        {
          type: 'select',
          label: '图形区域的起始位置',
          attr: ['areaStyle', 'origin'],
          defaultValue: 'auto',
          options: [
            'auto',
            'start',
            'end',
          ],
        },
        {
          type: 'slider',
          label: '图形阴影的模糊大小',
          attr: ['areaStyle', 'shadowBlur'],
          range: [0, 100],
        },
        {
          type: 'colorSelect',
          label: '阴影颜色',
          attr: ['areaStyle', 'shadowColor'],
        },
        {
          type: 'slider',
          label: '阴影水平方向上的偏移距离',
          attr: ['areaStyle', 'shadowOffsetX'],
          range: [0, 100],
          defaultValue: 0,
        },
        {
          type: 'slider',
          label: '阴影垂直方向上的偏移距离',
          attr: ['areaStyle', 'shadowOffsetY'],
          range: [0, 100],
          defaultValue: 0,
        },
        {
          type: 'slider',
          label: '图形透明度',
          attr: ['areaStyle', 'opacity'],
          range: [0, 1],
        },
      ],
    },
    {
      label: '平滑曲线显示',
      type: 'switch',
      defaultValue: false,
      attr: ['smooth'],
    },
    {
      label: '系列中的数据内容数组',
      attr: ['data'],
      type: 'input',
      key: 'data',
      desc: [
        "类目轴（category）: 23,  44,  55,  19",
        "其余点坐标用分号隔开，0, 23;1, 44; 2,55; 3,19 "
      ],
      format: (e) => {
        return e.indexOf(';') > -1 
          ? e.split(';').map(v => v.split(',').map(r => isNaN(parseFloat(r.trim())) ? 0 : parseFloat(r.trim())))
            : e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : v.trim())
      },
    },
  ],
  bar: [
    {
      label: '系列名称',
      attr: ['name'],
      type: 'input'
    },
    {
      label: '系列中的数据内容数组',
      attr: ['data'],
      type: 'input',
      key: 'data',
      desc: [
        "类目轴（category）: 23,  44,  55,  19",
        "其余点坐标用分号隔开，0, 23;1, 44; 2,55; 3,19 "
      ],
      format: (e) => {
        return e.indexOf(';') > -1 
          ? e.split(';').map(v => v.split(',').map(r => isNaN(parseFloat(r.trim())) ? 0 : parseFloat(r.trim())))
            : e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : v.trim())
      },
    },
  ],
};