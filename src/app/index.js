import React, { Component } from 'react';
// import { Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import { Route, Switch } from "react-router-dom";
import AppMenu from './menu';
import Setting from './setting';
import Home from './home';
import './index.scss';


const {
  Header, Sider, Content,
} = Layout;

class AppContent extends Component {
  render() {
    return (
      <Layout className="app">
        <Header className="app-header">Header</Header>
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
