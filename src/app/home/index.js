import React from 'react';
import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';
import './index.scss';

@inject('store')
@observer
@withRouter
class Home extends React.Component{
  // 跳转到echrts配置页
  toSetting = (v) => {
    const { store, history } = this.props;
    store.updateCurrent(v); // 首先得更新当前选择的echarts项
    history.push('/setting');
  }
  render () {
    const { store } = this.props;
    return (
      <div className="content-container">
        <div className="content-row">
          {
            (store.type.demo || []).map(v => {
              return (
                <div 
                  className="content-col"
                  key={v.title}
                  onClick={() => this.toSetting(v)}
                >
                  <p className="basic-title">{v.title}</p>
                  <div>
                    <img src={v.url} alt=""/>
                  </div>
                </div>
              );
            })
          }
          
        </div>
      </div>
    );
  }
}

export default Home;