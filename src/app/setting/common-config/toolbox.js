export default [
  {
    title: '工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['toolbox', 'show'],
      },
      {
        type: 'select',
        label: '工具栏 icon 的布局朝向',
        attr: ['toolbox', 'orient'],
        defaultValue: 'horizontal',
        options: [
          'horizontal',
          'vertical',
        ],
      },
      {
        type: 'slider',
        label: '工具栏 icon 的大小',
        attr: ['toolbox', 'itemSize'],
        defaultValue: 15,
        range: [0, 50],
      },
      {
        type: 'slider',
        label: '工具栏 icon 每项之间的间隔',
        attr: ['toolbox', 'itemGap'],
        defaultValue: 10,
        range: [0, 50],
      },
      {
        label: '鼠标 hover 的时候显示icon 的标题',
        type: 'switch',
        defaultValue: true,
        attr: ['toolbox', 'showTitle'],
      },
      {
        label: '各工具配置项',
        item: [
          {
            label: '保存为图片',
            item: [
              {
                type: 'select',
                label: '保存的图片格式',
                attr: ['toolbox', 'feature', 'saveAsImage', 'type'],
                defaultValue: 'png',
                options: [
                  'png',
                  'jepg',
                ],
              },
              {
                label: '保存的文件名称',
                attr: ['toolbox', 'feature', 'saveAsImage', 'name'],
                type: 'input',
                desc: [
                  "默认使用 title.text 作为名称"
                ]
              },
              {
                type: 'colorSelect',
                label: '保存的图片背景颜色',
                attr: ['toolbox', 'feature', 'saveAsImage', 'backgroundColor'],
                desc: [
                  "默认使用 backgroundColor，如果backgroundColor不存在的话会取白色"
                ],
              },
              {
                label: '显示',
                type: 'switch',
                defaultValue: true,
                attr: ['toolbox', 'feature', 'saveAsImage', 'show'],
              },
              {
                label: '标题',
                attr: ['toolbox', 'feature', 'saveAsImage', 'title'],
                type: 'input',
                defaultValue: '保存为图片',
              },
              {
                label: '图标样式',
                item: [
                  {
                    type: 'colorSelect',
                    label: '颜色',
                    attr: ['toolbox', 'saveAsImage', 'iconStyle', 'color'],
                  },
                  {
                    type: 'colorSelect',
                    label: '图标描边颜色',
                    attr: ['toolbox', 'saveAsImage', 'iconStyle', 'borderColor'],
                    defaultValue: '#666',
                  },
                  {
                    type: 'slider',
                    label: '图标描边宽度',
                    attr: ['toolbox', 'saveAsImage', 'iconStyle', 'borderWidth'],
                    defaultValue: 1,
                    range: [0, 10],
                  },
                  {
                    type: 'select',
                    label: '图标描边类型',
                    attr: ['toolbox', 'saveAsImage', 'iconStyle', 'borderType'],
                    defaultValue: 'solid',
                    options: [
                      'solid',
                      'dashed',
                      'dotted',
                    ],
                  },
                ],
              },
              {
                label: '保存图片的分辨率比例',
                type: 'slider',
                attr: ['toolbox', 'feature', 'saveAsImage', 'pixelRatio'],
                defaultValue: 1,
                range: [1, 10],
                desc: [
                  "默认跟容器相同大小，如果需要保存更高分辨率的，可以设置为大于 1 的值，例如 2"
                ],
              },
            ],
          },
          {
            label: '还原',
            item: [
              {
                label: '显示',
                type: 'switch',
                defaultValue: true,
                attr: ['toolbox', 'feature', 'restore' ,'show'],
              },
              {
                label: '标题',
                attr: ['toolbox', 'feature', 'restore', 'title'],
                type: 'input',
                defaultValue: '还原'
              },
              {
                label: '图标样式',
                item: [
                  {
                    type: 'colorSelect',
                    label: '颜色',
                    attr: ['toolbox',  'feature', 'restore', 'iconStyle', 'color'],
                  },
                  {
                    type: 'colorSelect',
                    label: '图标描边颜色',
                    attr: ['toolbox', 'feature',  'restore', 'iconStyle', 'borderColor'],
                    defaultValue: '#666',
                  },
                  {
                    type: 'slider',
                    label: '图标描边宽度',
                    attr: ['toolbox',  'feature', 'restore', 'iconStyle', 'borderWidth'],
                    defaultValue: 1,
                    range: [0, 10],
                  },
                  {
                    type: 'select',
                    label: '图标描边类型',
                    attr: ['toolbox',  'feature', 'restore', 'iconStyle', 'borderType'],
                    defaultValue: 'solid',
                    options: [
                      'solid',
                      'dashed',
                      'dotted',
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: '数据视图工具',
            item: [
              {
                label: '显示',
                type: 'switch',
                defaultValue: true,
                attr: ['toolbox',  'feature', 'dataView' ,'show'],
              },
              {
                label: '标题',
                attr: ['toolbox',  'feature', 'dataView', 'title'],
                type: 'input',
                defaultValue: '数据视图工具'
              },
              {
                label: '图标样式',
                item: [
                  {
                    type: 'colorSelect',
                    label: '颜色',
                    attr: ['toolbox',  'feature', 'dataView', 'iconStyle', 'color'],
                  },
                  {
                    type: 'colorSelect',
                    label: '图标描边颜色',
                    attr: ['toolbox',  'feature', 'dataView', 'iconStyle', 'borderColor'],
                    defaultValue: '#666',
                  },
                  {
                    type: 'slider',
                    label: '图标描边宽度',
                    attr: ['toolbox',  'feature', 'dataView', 'iconStyle', 'borderWidth'],
                    defaultValue: 1,
                    range: [0, 10],
                  },
                  {
                    type: 'select',
                    label: '图标描边类型',
                    attr: ['toolbox',  'feature', 'dataView', 'iconStyle', 'borderType'],
                    defaultValue: 'solid',
                    options: [
                      'solid',
                      'dashed',
                      'dotted',
                    ],
                  },
                ],
              },
              {
                label: '只读',
                type: 'switch',
                defaultValue: false,
                attr: ['toolbox', 'feature' ,'dataView', 'readOnly'],
              },
              {
                type: 'colorSelect',
                label: '数据视图浮层背景色',
                attr: ['toolbox',  'feature', 'dataView', 'backgroundColor'],
                defaultValue: '#fff',
              },
              {
                type: 'colorSelect',
                label: '数据视图浮层文本输入区背景色',
                attr: ['toolbox',  'feature', 'dataView', 'textareaColor'],
                defaultValue: '#fff',
              },
              {
                type: 'colorSelect',
                label: '数据视图浮层文本输入区边框颜色',
                attr: ['toolbox',  'feature', 'dataView', 'textareaBorderColor'],
                defaultValue: '#333',
              },
              {
                type: 'colorSelect',
                label: '文本颜色',
                attr: ['toolbox',  'feature', 'dataView', 'textColor'],
                defaultValue: '#000',
              },
              {
                type: 'colorSelect',
                label: '按钮颜色',
                attr: ['toolbox',  'feature', 'dataView', 'buttonColor'],
                defaultValue: '#c23531',
              },
              {
                type: 'colorSelect',
                label: '按钮文本颜色',
                attr: ['toolbox',  'feature', 'dataView', 'buttonTextColor'],
                defaultValue: '#fff',
              },
            ]
          },
          {
            label: '数据区域缩放, 目前只支持直角坐标系的缩放',
            item: [
              {
                label: '显示',
                type: 'switch',
                defaultValue: true,
                attr: ['toolbox', 'feature', 'dataZoom' ,'show'],
              },
              {
                label: '标题',
                attr: ['toolbox', 'feature', 'dataZoom', 'title'],
                type: 'input',
                defaultValue: '数据区域缩放'
              },
              {
                label: '图标样式',
                item: [
                  {
                    type: 'colorSelect',
                    label: '颜色',
                    attr: ['toolbox',  'feature', 'dataZoom', 'iconStyle', 'color'],
                  },
                  {
                    type: 'colorSelect',
                    label: '图标描边颜色',
                    attr: ['toolbox', 'feature',  'dataZoom', 'iconStyle', 'borderColor'],
                    defaultValue: '#666',
                  },
                  {
                    type: 'slider',
                    label: '图标描边宽度',
                    attr: ['toolbox',  'feature', 'dataZoom', 'iconStyle', 'borderWidth'],
                    defaultValue: 1,
                    range: [0, 10],
                  },
                  {
                    type: 'select',
                    label: '图标描边类型',
                    attr: ['toolbox',  'feature', 'dataZoom', 'iconStyle', 'borderType'],
                    defaultValue: 'solid',
                    options: [
                      'solid',
                      'dashed',
                      'dotted',
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: '动态类型切换',
            item: [
              {
                label: '显示',
                type: 'switch',
                defaultValue: true,
                attr: ['toolbox', 'feature', 'magicType' ,'show'],
              },
              {
                type: 'select',
                label: '启用的动态类型',
                attr: ['toolbox', 'feature', 'magicType', 'type'],
                options: [
                  'line',
                  'bar',
                  'stack',
                  'tiled'
                ],
                otherParams: {
                  mode: "multiple",
                },
              },
              {
                label: '标题',
                item: [
                  {
                    label: 'line',
                    attr: ['toolbox', 'feature', 'magicType', 'title', 'line'],
                    type: 'input',
                    defaultValue: '切换为折线图'
                  },
                  {
                    label: 'bar',
                    attr: ['toolbox', 'feature', 'magicType', 'title', 'bar'],
                    type: 'input',
                    defaultValue: '切换为柱状图'
                  },
                  {
                    label: 'stack',
                    attr: ['toolbox', 'feature', 'magicType', 'title', 'stack'],
                    type: 'input',
                    defaultValue: '切换为堆叠'
                  },
                  {
                    label: 'tiled',
                    attr: ['toolbox', 'feature', 'magicType', 'title', 'tiled'],
                    type: 'input',
                    defaultValue: '切换为平铺'
                  },
                ],
              },
              {
                label: '图标样式',
                item: [
                  {
                    type: 'colorSelect',
                    label: '颜色',
                    attr: ['toolbox',  'feature', 'magicType', 'iconStyle', 'color'],
                  },
                  {
                    type: 'colorSelect',
                    label: '图标描边颜色',
                    attr: ['toolbox', 'feature',  'magicType', 'iconStyle', 'borderColor'],
                    defaultValue: '#666',
                  },
                  {
                    type: 'slider',
                    label: '图标描边宽度',
                    attr: ['toolbox',  'feature', 'magicType', 'iconStyle', 'borderWidth'],
                    defaultValue: 1,
                    range: [0, 10],
                  },
                  {
                    type: 'select',
                    label: '图标描边类型',
                    attr: ['toolbox',  'feature', 'magicType', 'iconStyle', 'borderType'],
                    defaultValue: 'solid',
                    options: [
                      'solid',
                      'dashed',
                      'dotted',
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: '选框组件的控制按钮',
            item: [
              {
                type: 'select',
                label: '使用的按钮',
                attr: ['toolbox', 'feature', 'brush', 'type'],
                options: [
                  'rect',
                  'polygon',
                  'lineX',
                  'lineY',
                  'keep',
                  'clear'
                ],
                otherParams: {
                  mode: "multiple",
                },
              },
              {
                label: '标题',
                item: [
                  {
                    label: 'rect',
                    attr: ['toolbox', 'feature', 'brush', 'title', 'rect'],
                    type: 'input',
                    defaultValue: '矩形选择'
                  },
                  {
                    label: 'polygon',
                    attr: ['toolbox', 'feature', 'brush', 'title', 'polygon'],
                    type: 'input',
                    defaultValue: '圈选'
                  },
                  {
                    label: 'lineX',
                    attr: ['toolbox', 'feature', 'brush', 'title', 'lineX'],
                    type: 'input',
                    defaultValue: '横向选择'
                  },
                  {
                    label: 'lineY',
                    attr: ['toolbox', 'feature', 'brush', 'title', 'lineY'],
                    type: 'input',
                    defaultValue: '纵向选择'
                  },
                  {
                    label: 'keep',
                    attr: ['toolbox', 'feature', 'brush', 'title', 'keep'],
                    type: 'input',
                    defaultValue: '保持选择'
                  },
                  {
                    label: 'clear',
                    attr: ['toolbox', 'feature', 'brush', 'title', 'clear'],
                    type: 'input',
                    defaultValue: '清除选择'
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: '公用的 icon 样式设置',
        item: [
          {
            type: 'colorSelect',
            label: '颜色',
            attr: ['toolbox', 'iconStyle', 'color'],
          },
          {
            type: 'colorSelect',
            label: '图标描边颜色',
            attr: ['toolbox', 'iconStyle', 'borderColor'],
            defaultValue: '#666',
          },
          {
            type: 'slider',
            label: '图标描边宽度',
            attr: ['toolbox', 'iconStyle', 'borderWidth'],
            defaultValue: 1,
            range: [0, 10],
          },
          {
            type: 'select',
            label: '图标描边类型',
            attr: ['toolbox', 'iconStyle', 'borderType'],
            defaultValue: 'solid',
            options: [
              'solid',
              'dashed',
              'dotted',
            ],
          },
        ],
      },
      {
        type: 'input',
        label: '工具栏组件离容器左侧的距离',
        attr: ['toolbox', 'left'],
        defaultValue: 'auto',
        desc: [
          "left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right",
          "如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐"
        ],
      },
      {
        type: 'input',
        label: '工具栏组件离容器右侧的距离',
        attr: ['toolbox', 'right'],
        defaultValue: 'auto',
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: '工具栏组件离容器底侧的距离',
        attr: ['toolbox', 'bottom'],
        defaultValue: 'auto',
        desc: [
          "同left",
        ],
      },
      {
        type: 'input',
        label: '工具栏组件离容器上侧的距离',
        attr: ['toolbox', 'top'],
        defaultValue: 'auto',
        desc: [
          "同left",
        ],
      },
    ],
  },
];