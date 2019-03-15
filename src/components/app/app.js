import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ForecastPage, StaticPage } from '../pages';
import { Layout, Menu } from 'antd';
import './app.scss';
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            className="menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Intro</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/forecast">Forecast</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="content">
            <div className="app">
              <Route path="/" exact component={StaticPage} />
              <Route path="/forecast" component={ForecastPage} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ForecastApp ©2019 Created by Sergey Chuprina
        </Footer>
      </Layout>
    </Router>
  )
}

export default App;
