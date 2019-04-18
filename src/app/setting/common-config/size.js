export default [
  {
    title: '容器设置',
    item: [
      {
        type: 'slider',
        label: '宽',
        attr: ['containerWidth'],
        range: [0, 1000],
        isContainer: true,
      },
      {
        type: 'slider',
        label: '高',
        attr: ['containerHeight'],
        range: [0, 1000],
        isContainer: true,
      },
    ],
  },
];