import React from 'react';
import { inject, observer } from 'mobx-react';
import RenderItem from './component/render';
import size from './config/size';
import title from './config/title';
import grid from './config/grid';
import xAxis from './config/xAxis';
import yAxis from './config/yAxis';
import tooltip from './config/tooltip';
import toolbox from './config/toolbox';
import series from './config/series/index';
import dataZoom from './config/dataZoom/index';
import legend from './config/legend';
import radar from './config/radar';

@inject('store')
@observer
class SettingCommon extends React.Component{
  render () {
    const { render } = this.props;
    return (
      <div className="setting-config">
        <RenderItem
          render={render}
          config={[
            ...size,
            ...title,
            ...legend,
            ...grid,
            ...xAxis,
            ...yAxis,
            ...dataZoom,
            ...tooltip,
            ...toolbox,
            ...series,
            ...radar
          ]}
        />
      </div>
    );
  }
}
export default SettingCommon;