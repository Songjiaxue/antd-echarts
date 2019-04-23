import React from 'react';
import { withRouter } from 'react-router';
import { Menu } from 'antd';
import { inject, observer } from 'mobx-react';
import config from './config';
import './index.scss';

@withRouter
@inject('store')
@observer
class AppMenu extends React.Component{
  clickMenuItem = (item) => {
    const { store, history } = this.props;
    store.updateType(item.key);
    history.push('/');
  }
  render () {
    const { store } = this.props;
    return (
      <div className="menu-container">
        <Menu
          onClick={this.clickMenuItem}
          mode="inline"
          defaultSelectedKeys={[store.type.type]}
          className="menu-box"
        >
          {
            config.map(v => <Menu.Item key={v.type}>{v.name}</Menu.Item>)
          }
        </Menu>
      </div>
    );
  }
}

export default AppMenu;