import React from 'react'
import { Col, Row, Image, Typography, Tabs, ConfigProvider } from 'antd';
import LoginForm from '../components/LoginForm';
import ImzaForm from '../components/ImzaForm';

const { Title } = Typography;

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


const Users = ()=>(
        <Row>
            <Col span={16} style={{ overflow: 'hidden' }}>
                <Image style={{ width: 'auto', height: '100vh' }} src="https://picsum.photos/id/297/1400/1000" preview={false} />
            </Col>
            <Col span={8} style={{ paddingLeft: '6rem', paddingRight: '6rem', paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Image style={{ width: '100px', height: 'auto' }} src="/logo.png" preview={false} />
                <Title level={3} type="default" style={{paddingBottom: '1rem'}}>Azərbaycan Respublikasının Energetika Nazirliyi yanında Bərpa Olunan Enerji Mənbələri Dövlət Agentliyi</Title>
                <Title level={4} type="secondary" style={{paddingBottom: '5rem'}}>Bərpa Olunan Enerji Mənbələri İnformasiya Sistemi</Title>
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
    )

export default Users;