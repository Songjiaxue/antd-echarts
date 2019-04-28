export default function (params, flag, value) {
  console.log(value);
  return [
    {
      type: 'colorSelect',
      label: '文字的颜色',
      attr: [...params, 'color'],
      defaultValue: value && Object.keys(value).includes('color') ? value['color'] : '#fff'
    },
    {
      type: 'select',
      label: '字体风格',
      attr: [...params, 'fontStyle'],
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
      attr: [...params, 'fontWeight'],
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
      label: '字体大小',
      attr: [...params, 'fontSize'],
      defaultValue: 12,
      range: [12, 72],
    },
    {
      type: 'slider',
      label: '行高',
      attr: [...params, 'lineHeight'],
      range: [12, 72],
    },
    ...(
      flag ? [
        {
          type: 'select',
          label: '水平对齐',
          attr: [...params, 'align'],
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
          attr: [...params, 'verticalAlign'],
          defaultValue: 'auto',
          options: [
            'auto',
            'top',
            'bottom',
            'middle',
          ],
        },
        {
          type: 'colorSelect',
          label: '文字块背景色',
          attr: [...params, 'backgroundColor'],
          defaultValue: 'transparent',
        },
        {
          type: 'colorSelect',
          label: '文字块边框颜色',
          attr: [...params, 'borderColor'],
          defaultValue: 'transparent',
        },
        {
          type: 'slider',
          label: '文字块边框宽度',
          attr: [...params, 'borderWidth'],
          range: [0, 10],
          defaultValue: 0,
        },
        {
          type: 'input',
          label: '文字块的圆角',
          attr: [...params, 'borderRidus'],
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
          type: 'input',
          label: '图例内边距',
          attr: [...params, 'padding'],
          defaultValue: value && value['padding'] ? value['padding'] : 5,
          formatValue: (e) => {
            return Array.isArray(e) ? e.join(',') : e;
          },
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
          label: '文字块宽度',
          attr: [...params, 'label', 'width'],
          range: [0, 1000],
        },
        {
          type: 'slider',
          label: '文字块高度',
          attr: [...params, 'label', 'height'],
          range: [0, 1000],
        },
      ] : []
    ),
    {
      type: 'colorSelect',
      label: '文字本身的描边颜色',
      attr: [...params, 'textBorderColor'],
      defaultValue: 'transparent'
    },
    {
      type: 'slider',
      label: '文字本身的描边宽度',
      attr: [...params, 'textBorderWidth'],
      range: [0, 10],
      defaultValue: 0,
    },
    {
      type: 'colorSelect',
      label: '文字本身的阴影颜色',
      attr: [...params, 'textShadowColor'],
      defaultValue: 'transparent'
    },
    {
      type: 'slider',
      label: '文字本身的阴影长度',
      attr: [...params, 'textShadowBlur'],
      range: [0, 100],
      defaultValue: 0,
    },
    {
      type: 'slider',
      label: '文字本身的阴影 X 偏移',
      attr: [...params, 'textShadowOffsetX'],
      range: [0, 100],
      defaultValue: 0,
    },
    {
      type: 'slider',
      label: '文字本身的阴影 Y 偏移',
      attr: [...params, 'textShadowOffsetY'],
      range: [0, 100],
      defaultValue: 0,
    },
  ];
};