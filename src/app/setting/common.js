import React from 'react';
import { inject, observer } from 'mobx-react';
import RenderItem from './component/render';
import title from './common-config/title';
import grid from './common-config/grid';

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
            ...title,
            ...grid,
          ]}
        />
      </div>
    );
  }
}
export default SettingCommon;