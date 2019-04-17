import React from 'react';
import { inject, observer } from 'mobx-react';
import SettingCommon from './common';

@inject('store')
@observer
class SettingConfig extends React.Component{
  
  render () {
    const { render } = this.props;
    return (
      <div className="setting-config">
        <SettingCommon render={render} />
      </div>
    );
  }
}
export default SettingConfig;