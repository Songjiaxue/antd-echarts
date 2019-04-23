export default {
  line: [
    {
      label: '系列名称',
      attr: ['name'],
      type: 'input'
    },
    {
      label: '数据堆叠',
      attr: ['stack'],
      type: 'input'
    },
    {
      type: 'select',
      label: '标记的图形',
      attr: ['symbol'],
      defaultValue: 'emptyCircle',
      options: [
        'circle',
        'rect',
        'emptyCircle',
        'roundRect',
        'triangle',
        'diamond',
        'pin',
        'arrow',
        'none',
      ],
    },
    {
      type: 'slider',
      label: '标记的大小',
      attr: ['symbolSize'],
      range: [0, 10],
    },
    {
      label: '显示标记',
      type: 'switch',
      defaultValue: true,
      attr: ['showSymbol'],
    },
    {
      label: '折线拐点样式',
      item: [
        {
          type: 'colorSelect',
          label: '颜色',
          attr: ['itemStyle', 'color'],
        },
        {
          type: 'slider',
          label: '图形透明度',
          attr: ['itemStyle', 'opacity'],
          range: [0, 1],
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