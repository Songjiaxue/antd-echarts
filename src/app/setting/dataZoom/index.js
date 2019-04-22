import options from './config';

export default [
  {
    title: '区域缩放',
    type: 'change',
    attr: ['dataZoom'],
    changeItem: [
      {
        type: 'select',
        label: '区域缩放类型',
        
        attr: ['type'],
        options: Object.keys(options),
        // options: [
        //   'line', 'bar', 'pie', 'lines', 'radar', 'graph', 'sunburst', 'funnel', 'gauge'
        // ],
        onChange: (e) => {
          return options[e];
        },
      },
    ],
  },
];