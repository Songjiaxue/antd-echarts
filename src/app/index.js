import React, { Component } from 'react';
// import { Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import { Route, Switch } from "react-router-dom";
import AppMenu from './menu';
import Config from './config';
import Setting from './setting';


const {
  Header, Sider, Content,
} = Layout;

class AppContent extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <AppMenu />
          </Sider>
          <Layout>
            <Content>
              <Switch>
                <Route path="/config" component={Config} />
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
