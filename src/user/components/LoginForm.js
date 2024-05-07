import React from 'react';
import { Button, Checkbox, Form, Input, Image } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginForm = () => (
  <Form
  style={{ width: '80%' }}
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Istifadəçi adını daxil edin',
        },
      ]}
    >
      <Input size='large' style={{height: "50px"}} prefix={<UserOutlined style={{marginRight:'10px', color:'grey'}} />} placeholder="Istifadəçi adını daxil edin"/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Şifrəni daxil edin',
        },
      ]}
    >
      <Input.Password size='large' style={{height: "50px"}} prefix={<LockOutlined style={{marginRight:'10px', color:'grey'}}/>} placeholder="Şifrəni daxil edin" />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
    >
      <Checkbox>Yadda saxla</Checkbox>
    </Form.Item>

    <Form.Item >
          <Button type="primary" size='large'  htmlType="submit" style={{width: '100%', marginBottom: '1rem', height: "50px"}}>Daxil ol</Button>
          <Button type="primary" ghost size='large' icon={<Image style={{height: '30px'}} src="/asanlogin.png" preview={false} />} htmlType="reset" style={{width: '100%', height: "50px"}}>Asan Login</Button>
      </Form.Item>
  </Form>
);
export default LoginForm;