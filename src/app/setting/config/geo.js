export default [
  {
    title: '地理坐标系组件',
    item: [
      {
        label: '显示',
        type: 'switch',
        defaultValue: true,
        attr: ['geo', 'show'],
      },
      {
        label: '开启鼠标缩放和平移漫游',
        type: 'switch',
        defaultValue: true,
        attr: ['geo', 'roam'],
      },
      {
        label: '当前视角的中心点',
        type: 'input',
        attr: ['geo', 'center'],
        desc: [
          "用经纬度表示, eg: 115.97, 29.71",
        ],
        format: (e) => {
          return e.split(',').length <= 1 
          ? isNaN(parseFloat(e.trim())) ? 0 :  parseFloat(e.trim())
            : e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : parseFloat(v.trim()));
        },
      },
      {
        type: 'slider',
        label: '当前视角的缩放比例',
        attr: ['geo', 'scale'],
        defaultValue: 10,
        range: [0, 100],
      },
      {
        label: '定义定位的左上角以及右下角分别所对应的经纬度',
        type: 'input',
        attr: ['geo', 'boundingCoords'],
        desc: [
          "用经纬度表示, eg: -180, 90;180, -90",
        ],
        format: (e) => {
          return e.split(';').map(v => v.split(',').map(r => isNaN(parseFloat(r.trim())) ? 0 : parseFloat(r.trim())));
        },
      },
      {
        label: '滚轮缩放的极限控制',
        item: [
          {
            type: 'slider',
            label: '最小的缩放值',
            attr: ['geo', 'scaleLimit', 'min'],
            defaultValue: 1,
            range: [0, 1],
            step: 0.1
          },
          {
            type: 'slider',
            label: '最大的缩放值',
            attr: ['geo', 'scale', 'max'],
            defaultValue: 1,
            range: [1, 1000],
          },
        ],
      },
      {
        label: '图形上的文本标签',
        item: [
          {
            label: '显示',
            type: 'switch',
            defaultValue: false,
            attr: ['geo', 'label', 'show'],
          },
          {
            type: 'select',
            label: '标签的位置',
            attr: ['geo', 'label', 'position',],
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
            attr: ['geo', 'label', 'distance'],
            defaultValue: 5,
            range: [0, 100],
          },
          {
            type: 'slider',
            label: '标签旋转',
            attr: ['geo', 'label', 'rotate'],
            range: [-90, 90],
          },
          {
            type: 'input',
            label: '文字偏移',
            attr: ['geo', 'label', 'offset'],
            format: (e) => {
              return e.split(',').map(v => isNaN(parseFloat(v.trim())) ? 0 : parseFloat(v.trim()))
            },
          },
          {
            type: 'input',
            label: '标签内容格式器',
            attr: ['geo', 'label', 'formatter'],
            desc: [
              "{a}: 系列名",
              "{b}: 数据名",
              "{c}: 数据值",
            ],
          },
          {
            type: 'colorSelect',
            label: '文字颜色',
            attr: ['geo', 'label', 'color'],
          },
          {
            type: 'select',
            label: '字体风格',
            attr: ['geo', 'label', 'fontStyle'],
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
            attr: ['geo', 'label', 'fontWeight'],
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
            attr: ['geo', 'label', 'fontSize'],
            defaultValue: 12,
            range: [12, 72],
          },
          {
            type: 'slider',
            label: '行高',
            attr: ['geo', 'label', 'lineHeight'],
            range: [12, 72],
          },
          {
            type: 'select',
            label: '水平对齐',
            attr: ['geo', 'label', 'align'],
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
            attr: ['geo', 'label', 'verticalAlign'],
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
            label: '组件离容器左侧的距离',
            attr: ['geo', 'left'],
            defaultValue: 'auto',
            desc: [
              "left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right",
              "如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐"
            ],
          },
          {
            type: 'input',
            label: '组件离容器右侧的距离',
            attr: ['geo', 'right'],
            defaultValue: 'auto',
            desc: [
              "同left",
            ],
          },
          {
            type: 'input',
            label: '组件离容器底侧的距离',
            attr: ['geo', 'bottom'],
            defaultValue: 'auto',
            desc: [
              "同left",
            ],
          },
          {
            type: 'input',
            label: '组件离容器上侧的距离',
            attr: ['geo', 'top'],
            defaultValue: 'auto',
            desc: [
              "同left",
            ],
          },
          {
            type: 'input',
            label: '地图中心在屏幕中的位置',
            attr: ['geo', 'layoutCenter'],
            format: e => {
              return e.split(',').map(v => v.trim());
            },
            desc: [
              "eg: 30%, 40%"
            ],
          },
          {
            type: 'slider',
            label: '地图大小',
            attr: ['geo', 'layoutSize'],
            range: [0, 1000],
          },
          {
            type: 'switch',
            label: '响应和触发鼠标事件',
            attr: ['geo', 'silent'],
          },
        ],
      },
    ],
  },
];