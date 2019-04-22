import React from 'react';
import { inject, observer } from 'mobx-react';
import RenderItem from './component/render';
import size from './common-config/size';
import title from './common-config/title';
import grid from './common-config/grid';
import xAxis from './common-config/xAxis';
import yAxis from './common-config/yAxis';
import tooltip from './common-config/tooltip';
import toolbox from './common-config/toolbox';
import series from './series/index';
import dataZoom from './dataZoom/index';
import legend from './common-config/legend';

@inject('store')
@observer
class SettingCommon extends React.Component{
  render () {
    const { render } = this.props;
    return (
      <div>
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
          ]}
        />
      </div>
    );
  }
}
export default SettingCommon;