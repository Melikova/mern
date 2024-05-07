import React from 'react'
import { Col, Row, Image, Typography, Tabs, ConfigProvider, Grid } from 'antd';
import LoginForm from '../components/LoginForm';
import ImzaForm from '../components/ImzaForm';

const { Title } = Typography;
const { useBreakpoint } = Grid;


const onChange = (key) => {
    console.log(key);
};

const items = [
    {
      key: '1',
      label: 'Asan Login ilə daxil ol',
      children: <ImzaForm />,
    },
    {
      key: '2',
      label: 'İstifadəçi adı və şifrə ilə daxil ol',
      children: <LoginForm />,
    }
  ];



const Users = ()=>{
  const screens = useBreakpoint();
  let titleLevel = 4;
  let subTitleLevel = 5;
  let logoWidth = '70px';
  let boxStyle = {
    paddingLeft: '3rem', 
    paddingRight: '3rem', 
    paddingTop: '3rem'
};
  if (screens.xl) {
    titleLevel = 3;
    subTitleLevel = 4;
    logoWidth = '100px'
    boxStyle = {
      paddingLeft: '4rem', 
      paddingRight: '4rem', 
      paddingTop: '2rem'
    };
  } else if (screens.lg) {
    titleLevel = 4;
    subTitleLevel = 5;
    logoWidth = '100px'
    boxStyle = {
      paddingLeft: '4rem', 
      paddingRight: '4rem', 
      paddingTop: '2rem'
    };
  } else if (screens.md) {
    titleLevel = 4;
    subTitleLevel = 5;
    logoWidth = '90px'
    boxStyle = {
      paddingLeft: '3rem', 
      paddingRight: '3rem', 
      paddingTop: '2rem'
    };
  }

        return (<Row>
            <Col xs={{span: "0"}}  lg={{span: "14"}} xl={{span: "16"}} style={{ overflow: 'hidden' }} >
                <Image style={{ width: 'auto', height: '100vh' }} src="https://picsum.photos/id/297/1400/1000" preview={false} />
            </Col>
            <Col xs={{span: "24"}}  lg={{span: "10"}} xl={{span: "8"}} style={boxStyle}>
                <Image style={{ width: logoWidth, height: 'auto' }} src="/logo.png" preview={false} />
                <Title level={titleLevel} type="default" style={{paddingBottom: '1rem'}}>Azərbaycan Respublikasının Energetika Nazirliyi yanında Bərpa Olunan Enerji Mənbələri Dövlət Agentliyi</Title>
                <Title level={subTitleLevel} type="secondary" style={{paddingBottom: '5rem'}}>Bərpa Olunan Enerji Mənbələri İnformasiya Sistemi</Title>
                <ConfigProvider
                  theme={{
                    components: {
                      Tabs: {
                        horizontalMargin:"0 0 3rem 0"
                      },
                    },
                  }}
                >
                  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </ConfigProvider>
            </Col>
        </Row>
    )}

export default Users;