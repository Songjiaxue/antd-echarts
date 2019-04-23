import options from './config';

export default [
  {
    title: '系列列表',
    type: 'change',
    attr: ['series'],
    changeItem: [
      {
        type: 'select',
        label: '图表类型',
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