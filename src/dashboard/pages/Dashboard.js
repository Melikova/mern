import React from 'react'
import { Layout, Menu, Space, Image, Avatar, Input, Popover } from 'antd';
import { DownOutlined, FilterOutlined, UserOutlined, LogoutOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content } = Layout;
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const layersContent = (
  <div>
    <p><a style={{cursor: 'pointer'}}>Content one</a></p>
    <p><a style={{cursor: 'pointer'}}>Content two</a></p>
    <p><a style={{cursor: 'pointer'}}>Content three</a></p>
  </div>
);

const Dashboard = ()=>{
    return <Layout style={{height: '100vh', overflow: 'hidden'}}>
      <Header style={{background: '#fff', display: 'flex', alignItems: 'center'}}>
        <Image style={{ width: '45px', height: 'auto', marginRight: '15px' }} src="/logo.png" preview={false} />
        <h2>BOEMIS</h2>
        <Menu mode="horizontal" style={{marginLeft:30}}>
          <SubMenu title="Atlas" key="submenu:1"></SubMenu>
          <SubMenu title={<Space><span>Məlumatlara baxış</span><DownOutlined/></Space>} key="submenu:2">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 2</Menu.Item>
            <Menu.Item key="setting:4">Option 2</Menu.Item>
          </SubMenu>
        </Menu>
        <Avatar size="large" icon={<a href="/"><FilterOutlined style={{color: 'black'}} /></a>} style={{ cursor: 'pointer', background: 'white', marginLeft: 'auto'}} />
        <Search placeholder="Axtarish" allowClear onSearch={onSearch} style={{ width: 400, borderRadius: "50px", marginLeft: 20}} size="large" />
        <Popover placement="bottomRight" title='Mehin Melikova' content={<Space><a href="/">Log Out<LogoutOutlined style={{marginLeft:10}}/></a></Space>} trigger="hover">
          <Avatar size="large" icon={<UserOutlined />} style={{marginLeft: 30, cursor: 'pointer'}} />
        </Popover>
      </Header>
      <Content>
        <Image style={{ width: '100vw', height: 'auto' }} src="/map.png" preview={false} />
      </Content>
      <ZoomInOutlined style={{zIndex: 555, position: 'absolute', bottom: '80px', right: 40, fontSize: "30px", cursor: 'pointer'}}/>
      <ZoomOutOutlined style={{zIndex: 555, position: 'absolute', bottom: '40px', right: 40, fontSize: "30px", cursor: 'pointer'}}/>
      <div style={{position: 'absolute', bottom: '40px', left: 40}}>
      <Popover placement="topLeft" content={layersContent} trigger="hover">
        <Image style={{ width: '65px', height: 'auto', zIndex: 555, fontSize: "30px", cursor: 'pointer' }} src="/layers4.png" preview={false} />
      </Popover>
      </div>
    </Layout>
}

export default Dashboard;