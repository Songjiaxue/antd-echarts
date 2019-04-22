import echarts from 'echarts';
let base = +new Date(1968, 9, 3);
const oneDay = 24 * 3600 * 1000;
let date = [];

let data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
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
          series: [
            {
              type: 'line',
              name: 'opop',
              data: [[0,0],[1,1]],
            },
          ],
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
        options: {
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {}
          }],
        },
      },
      {
        title: 'Smoothed Line Chart',
        url: require('../../assets/line/line-smooth.png'),
        options:  {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true
          }]
        }
      },
      {
        title: 'Stacked Area Chart',
        url: require('../../assets/line/area-stack.png'),
        options: {
          title: {
              text: '堆叠区域图'
          },
          tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
              data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : ['周一','周二','周三','周四','周五','周六','周日']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'直接访问',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'搜索引擎',
                  type:'line',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'top'
                      }
                  },
                  areaStyle: {normal: {}},
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
        },
      },
      {
        title: 'Stacked Line Chart',
        url:  require('../../assets/line/line-stack.png'),
        options:  {
          title: {
              text: '折线图堆叠'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'直接访问',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'搜索引擎',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
        }      
      },
      {
        title: 'Large Scale Area Chart',
        url: require('../../assets/line/area-simple.png'),
        options: {
          tooltip: {
              trigger: 'axis',
              position: function (pt) {
                  return [pt[0], '10%'];
              }
          },
          title: {
              left: 'center',
              text: '大数据量面积图',
          },
          toolbox: {
              feature: {
                  dataZoom: {
                      yAxisIndex: 'none'
                  },
                  restore: {},
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: date
          },
          yAxis: {
              type: 'value',
              boundaryGap: [0, '100%']
          },
          dataZoom: [{
              type: 'inside',
              start: 0,
              end: 10
          }, {
              type: 'slider',
              start: 0,
              end: 10,
              handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%',
              handleStyle: {
                  color: '#fff',
                  shadowBlur: 3,
                  shadowColor: 'rgba(0, 0, 0, 0.6)',
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
              }
          }],
          series: [
              {
                  name:'模拟数据',
                  type:'line',
                  smooth:true,
                  symbol: 'none',
                  sampling: 'average',
                  itemStyle: {
                      color: 'rgb(255, 70, 131)'
                  },
                  areaStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgb(255, 158, 68)'
                      }, {
                          offset: 1,
                          color: 'rgb(255, 70, 131)'
                      }])
                  },
                  data: data
              }
          ]
        },
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