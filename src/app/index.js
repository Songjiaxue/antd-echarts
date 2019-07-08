import React, { Component } from 'react';
// import { Route, Switch } from "react-router-dom";
import { Layout, Button, message } from 'antd';
import { Route, Switch } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import ClipboardJS from 'clipboard';
import AppMenu from './menu';
import Setting from './setting';
import Home from './home';
import './index.scss';
import { toJS } from 'mobx';


const {
  Header, Sider, Content,
} = Layout;

@inject('store')
@observer
class AppContent extends Component {

  componentDidMount() {
    const clipboard = new ClipboardJS('.copy-btn');
    clipboard.on('success', function(e) {
        message.success('复制成功');
        e.clearSelection();
    });
    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        message.success('复制成功');
    });
  }
  render() {
    const {store,} = this.props;
    return (
      <Layout className="app">
        <Header className="app-header">
          <Button className="copy-btn" data-clipboard-text={JSON.stringify(toJS(store.current.options))}>复制当前配置数据</Button>
        </Header>
        <Layout className="app-container">
          <Sider className="app-sider">
            <AppMenu />
          </Sider>
          <Layout
            className="app-content"
          >
            <Content>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/setting" component={Setting} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default AppContent;
