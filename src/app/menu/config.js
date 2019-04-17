export default [
  {
    type: 'line',
    name: '折线图',
    demo: [
      {
        title: 'Basic Line Chart',
        url: require('../../assets/line/line-simple.png'),
        options: {
          xAxis: {
              type: 'category',
              data: [
                {
                  value: '1',
                  textStyle: {
                    color: '#1890ff',
                    fontSize: 20,
                  },
                },
                {
                  value: '2',
                  textStyle: {
                    color: '#444',
                    fontSize: 20,
                  },
                },
              ]
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }],
          title: {
            text: '123',
            textStyle: {
              fontSize: 28
            }
          }
        }
      },  
      {
        title: 'Basic Area Chart',
        url: require('../../assets/line/area-basic.png'),
      },
      {
        title: 'Smoothed Line Chart',
        url: require('../../assets/line/line-smooth.png'),
      },
      {
        title: 'Stacked Area Chart',
        url: require('../../assets/line/area-stack.png'),
      },
      {
        title: 'Stacked Line Chart',
        url:  require('../../assets/line/line-stack.png'),
      },
      {
        title: 'Large Scale Area Chart',
        url: require('../../assets/line/area-simple.png'),
      },
    ],
  },
  {
    type: 'bar',
    name: '柱状图',
    demo: [],
  },
  {
    type: 'pie',
    name: '饼图',
  },
  {
    type: 'lines',
    name: '地理坐标/地图',
  },
  {
    type: 'candlestick',
    name: 'K线图',
  },
  {
    type: 'radar',
    name: '雷达图',
  },
  {
    type: 'graph',
    name: '关系图',
  },
  {
    type: 'sunburst',
    name: '旭日图',
  },
  {
    type: 'funnel',
    name: '漏斗图',
  },
  {
    type: 'gauge',
    name: '仪表盘',
  },
];