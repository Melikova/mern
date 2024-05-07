import React from 'react'
import { Col, Row, Image, Typography, Grid, Flex } from 'antd';
import LoginForm from '../components/LoginForm';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const Users = ()=>{
  const screens = useBreakpoint();
  let titleLevel = 4;
  let subTitleLevel = 5;
  let logoWidth = '70px';
  let boxStyle = {
    paddingLeft: '4rem', 
    paddingRight: '4rem', 
    paddingTop: '5rem',
    background: '#e6f7ff'
  };
  let boxStyle2 = {
    paddingLeft: '3rem', 
    paddingRight: '3rem', 
  };
  if (screens.xl) {
    titleLevel = 2;
    subTitleLevel = 2;
    logoWidth = '160px'
    boxStyle = {
      paddingLeft: '5rem', 
      paddingRight: '5rem', 
      paddingTop: '5rem',
      background: '#e6f7ff'
    };
    boxStyle2 = {
      paddingLeft: '5rem', 
      paddingRight: '5rem', 
    };
  } else if (screens.lg) {
    titleLevel = 3;
    subTitleLevel = 3;
    logoWidth = '140px'
    boxStyle = {
      paddingLeft: '5rem', 
      paddingRight: '5rem', 
      paddingTop: '5rem',
      background: '#e6f7ff'
    };
    boxStyle2 = {
      paddingLeft: '5rem', 
      paddingRight: '5rem', 
    };
  } else if (screens.md) {
    titleLevel = 3;
    subTitleLevel = 3;
    logoWidth = '120px'
    boxStyle = {
      paddingLeft: '4rem', 
      paddingRight: '4rem', 
      paddingTop: '5rem',
      background: '#e6f7ff'
    };
    boxStyle2 = {
      paddingLeft: '4rem', 
      paddingRight: '4rem', 
    };
  }
        return (
        <Row>
            <Col align='center' xs={{span: "0"}}  lg={{span: "12"}} xl={{span: "14"}} style={boxStyle} >
              <Image style={{ width: logoWidth, height: 'auto' }} src="/logo.png" preview={false} />
              <Title level={titleLevel} style={{paddingTop: '5rem'}}>Azərbaycan Respublikasının Energetika Nazirliyi yanında Bərpa Olunan Enerji Mənbələri Dövlət Agentliyi</Title>
              <Title level={subTitleLevel} type="secondary" style={{paddingTop: '5rem'}}>Bərpa Olunan Enerji Mənbələri İnformasiya Sistemi</Title>
            </Col>
            <Col xs={{span: "24"}}  lg={{span: "12"}} xl={{span: "10"}} style={boxStyle2}>
              <Flex vertical style={{height: '100vh'}} justify='center' align='center'>
              <Title level={subTitleLevel} type="secondary" style={{paddingBottom: '2rem'}}>Sistemə daxil ol</Title>
                <LoginForm />
              </Flex>
            </Col>
        </Row>
    )}

export default Users;