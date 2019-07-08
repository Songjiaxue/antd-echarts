export default function (params, flag) {
  return [
    {
      type: 'colorSelect',
      label: '阴影颜色',
      attr: [...params, 'shadowColor'],
    },
    {
      type: 'slider',
      label: '图形阴影的模糊大小',
      attr: [...params, 'shadowBlur'],
      range: [0, 100],
      defaultValue: 0,
    },
    {
      type: 'slider',
      label: '阴影水平方向上的偏移距离',
      attr: [...params, 'shadowOffsetX'],
      range: [0, 100],
      defaultValue: 0,
    },
    {
      type: 'slider',
      label: '阴影垂直方向上的偏移距离',
      attr: [...params, 'shadowOffsetY'],
      range: [0, 100],
      defaultValue: 0,
    },
    ...(
      flag ? [
        {
          type: 'slider',
          label: '图形透明度',
          attr: [...params, 'opacity'],
          defaultValue: 1,
          range: [0, 1],
          step: 0.1,
        },
      ] : []
    )
  ];
}