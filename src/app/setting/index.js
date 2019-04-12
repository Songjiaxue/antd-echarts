import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import SettingConfig from './setting-config';
import './index.scss';


const echarts = require('echarts')

@inject('store')
@observer
class Setting extends React.Component{
  componentDidMount() {
    this.renderEcharts();
  }
  renderEcharts = (op) => {
    const { store } = this.props;
    let myChart = echarts.init(this.ref);
    let options = toJS(store.current.options);
    myChart.setOption(!op? options: {title: 'opop'});
  }
  render () {
    return (
      <div className="setting-container">
        <div className="setting-echarts">
          <div 
            id="echarts-demo"
            ref={ref => this.ref = ref}
          />
        </div>
        <SettingConfig 
          render={this.renderEcharts}
        />
      </div>
    );
  }
}
export default Setting;