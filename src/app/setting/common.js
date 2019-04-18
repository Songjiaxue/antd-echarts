import React from 'react';
import { inject, observer } from 'mobx-react';
import RenderItem from './component/render';
import size from './common-config/size';
import title from './common-config/title';
import grid from './common-config/grid';
import xAxis from './common-config/xAxis';
import yAxis from './common-config/yAxis';
import tooltip from './common-config/tooltip';

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
            ...grid,
            ...xAxis,
            ...yAxis,
            ...tooltip,
          ]}
        />
      </div>
    );
  }
}
export default SettingCommon;